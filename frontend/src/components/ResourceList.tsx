import type { Category, Resource } from '../types'

type ResourceListProps = {
  resources: Resource[]
  search: string
  categoryFilter: Category | 'All'
  onSearchChange: (value: string) => void
  onCategoryChange: (value: Category | 'All') => void
  onSelectResource: (resourceId: number) => void
  categories: readonly Category[]
  isLoading?: boolean
}

function ResourceList({
  resources: _resources,
  search: _search,
  categoryFilter: _categoryFilter,
  onSearchChange: _onSearchChange,
  onCategoryChange: _onCategoryChange,
  onSelectResource: _onSelectResource,
  categories: _categories,
  isLoading: _isLoading = false,
}: ResourceListProps) {
  void _resources
  void _search
  void _categoryFilter
  void _onSearchChange
  void _onCategoryChange
  void _onSelectResource
  void _categories
  void _isLoading

  return (
    <section className="card">
      <h2>Resources</h2>
      <p>TODO: implement resource list, search, and category filter UI.</p>
    </section>
  )
}

export default ResourceList
