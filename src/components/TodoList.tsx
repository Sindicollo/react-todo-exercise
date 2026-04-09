import type { Todo } from '../types/todo'
import { TodoItem } from './TodoItem'
import { EmptyStateIcon } from './icons/EmptyStateIcon'

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400 dark:text-gray-500">
        <EmptyStateIcon />
        <p className="text-lg">No todos yet</p>
        <p className="text-sm mt-1">Add a task to get started</p>
      </div>
    )
  }

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}
