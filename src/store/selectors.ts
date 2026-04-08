import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { Todo } from '../types/todo'

const selectTodos = (state: RootState) => state.todos.items
const selectFilter = (state: RootState) => state.todos.filter

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (items, filter): Todo[] => {
    switch (filter) {
      case 'active':
        return items.filter(item => !item.completed)
      case 'completed':
        return items.filter(item => item.completed)
      default:
        return items
    }
  }
)

export const selectActiveCount = createSelector(
  [selectTodos],
  (items): number => items.filter(item => !item.completed).length
)

export const selectCompletedCount = createSelector(
  [selectTodos],
  (items): number => items.filter(item => item.completed).length
)
