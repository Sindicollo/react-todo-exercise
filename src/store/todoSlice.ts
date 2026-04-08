import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Todo, FilterType, TodoState } from '../types/todo'

const initialState: TodoState = {
  items: [],
  filter: 'all',
}

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const text = action.payload.trim()
      if (!text) return

      const newTodo: Todo = {
        id: generateId(),
        text,
        completed: false,
        createdAt: Date.now(),
      }
      state.items.unshift(newTodo)
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find(item => item.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },

    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload
    },

    clearCompleted: state => {
      state.items = state.items.filter(item => !item.completed)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } = todoSlice.actions

export default todoSlice.reducer
