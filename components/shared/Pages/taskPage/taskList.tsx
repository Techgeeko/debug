'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Checkbox } from '@/components/ui/checkbox'
import { toggleTaskCompletion } from '@/lib/actions/task.actions'
import { Task } from '@/lib/database/schema'

interface TaskListProps {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  const [optimisticTasks, setOptimisticTasks] = useState(tasks)

  const handleToggle = async (taskId: number) => {
    setOptimisticTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
    await toggleTaskCompletion(taskId)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500'
      case 'medium': return 'text-orange-500'
      case 'low': return 'text-green-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="space-y-4">
      {optimisticTasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center space-x-4 p-4 rounded-lg border"
        >
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => handleToggle(task.id)}
          />
          <span className={task.completed ? 'line-through text-gray-500' : ''}>
            {task.title}
          </span>
          <span className={`ml-auto ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
          <span className="text-gray-500">
            {task.dueDate ? format(new Date(task.dueDate), 'MMM dd') : 'No due date'}
          </span>
        </div>
      ))}
    </div>
  )
}

