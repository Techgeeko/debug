import type { Metadata } from "next";
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getTasks, getTaskStats } from '@/lib/actions/task.actions'
import { TaskList } from "@/components/shared/Pages/taskPage/taskList";
import { TaskStatistics } from "@/components/shared/Pages/taskPage/taskStatistics";
import { AddTaskDialog } from "@/components/shared/Pages/taskPage/addTaskDialog";

export const metadata: Metadata = {
  title: "Tasks | Create and Manage Tasks",
  description: "Access key recruitment metrics, AI-powered candidate recommendations, and job performance insights. Streamline your hiring process with Zaap Recruits' comprehensive dashboard.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function TasksPage() {  // Changed function name to be more specific
  const { userId } = await auth()
  if (!userId) redirect('/sign-in')

  const [tasks, stats] = await Promise.all([
    getTasks(),
    getTaskStats(),
  ])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tasks</h1>
          <p className="text-gray-600">Manage your daily tasks and priorities</p>
        </div>
        <AddTaskDialog />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Today&apos;s Tasks</h2>
            {tasks && <TaskList tasks={tasks} />}
          </div>
        </div>
        <div>
          {stats && (
            <TaskStatistics 
              total={stats.total ?? 0} 
              completed={stats.completed ?? 0} 
              pending={stats.pending ?? 0} 
            />
          )}
        </div>
      </div>
    </div>
  )
}