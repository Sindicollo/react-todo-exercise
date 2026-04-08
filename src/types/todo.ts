export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

export type FilterType = 'all' | 'active' | 'completed'

export interface FilterOption {
  value: FilterType
  label: string
}

export interface TodoState {
  items: Todo[]
  filter: FilterType
}
