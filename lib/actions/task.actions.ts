"use server"

import { db } from '../database';
import { auth } from '@clerk/nextjs/server'
import { and, eq } from "drizzle-orm";
import { Tasks, NewTask } from '../database/schema';
import { revalidatePath } from 'next/cache';

export async function createTask(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const newTask: NewTask = {
    userId,
    title: formData.get('title') as string,
    priority: formData.get('priority') as 'low' | 'medium' | 'high',
    dueDate: new Date(formData.get('dueDate') as string),
  };

  const [task] = await db.insert(Tasks).values(newTask).returning();

  revalidatePath('/task');
  return task;
}

export async function toggleTaskCompletion(taskId: number) {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  // First get the current task
  const [existingTask] = await db
    .select()
    .from(Tasks)
    .where(and(eq(Tasks.id, taskId), eq(Tasks.userId, userId)));

  if (!existingTask) {
    return;
  }

  // Then update with the opposite of current completion status
  const [updatedTask] = await db
    .update(Tasks)
    .set({ 
      completed: !existingTask.completed, 
      updatedAt: new Date() 
    })
    .where(and(eq(Tasks.id, taskId), eq(Tasks.userId, userId)))
    .returning();

  revalidatePath('/task');
  return updatedTask;
}

export async function getTasks() {
  const { userId } = await auth();
    if (!userId) {
      return;
    }

    const tasks = await db
      .select()
      .from(Tasks)
      .where(eq(Tasks.userId, userId))
      .orderBy(Tasks.dueDate);

  return tasks;
}

export  async function getTaskStats() {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const tasks = await db
    .select()
    .from(Tasks)
    .where(eq(Tasks.userId, userId))

  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return { total, completed, pending }
}