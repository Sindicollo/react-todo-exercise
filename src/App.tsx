import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { FilterBar } from './components/FilterBar'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } from './store/todoSlice'
import { selectFilteredTodos, selectActiveCount, selectCompletedCount } from './store/selectors'

function App() {
  const dispatch = useAppDispatch()
  const filteredTodos = useAppSelector(selectFilteredTodos)
  const activeCount = useAppSelector(selectActiveCount)
  const completedCount = useAppSelector(selectCompletedCount)
  const filter = useAppSelector(state => state.todos.filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Todo List
          </h1>

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
  )
}

export default App
