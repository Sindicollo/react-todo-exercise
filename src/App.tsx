import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { FilterBar } from './components/FilterBar'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } from './store/todoSlice'
import { selectFilteredTodos, selectActiveCount, selectCompletedCount } from './store/selectors'
import { useTheme } from './context/ThemeContext'

function App() {
  const dispatch = useAppDispatch()
  const filteredTodos = useAppSelector(selectFilteredTodos)
  const activeCount = useAppSelector(selectActiveCount)
  const completedCount = useAppSelector(selectCompletedCount)
  const filter = useAppSelector(state => state.todos.filter)
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="flex-1 text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                Todo List
              </h1>
              <label className="flex items-center gap-2 cursor-pointer shrink-0">
                <span className="text-sm text-gray-600 dark:text-gray-400">Dark theme</span>
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={() => toggleTheme()}
                  className="sr-only peer"
                />
                <div className="relative w-9 h-5 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
              </label>
            </div>

            <TodoForm onSubmit={text => dispatch(addTodo(text))} />

            <TodoList
              todos={filteredTodos}
              onToggle={id => dispatch(toggleTodo(id))}
              onDelete={id => dispatch(deleteTodo(id))}
            />

            <FilterBar
              currentFilter={filter}
              onFilterChange={filter => dispatch(setFilter(filter))}
              activeCount={activeCount}
              completedCount={completedCount}
              onClearCompleted={() => dispatch(clearCompleted())}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
