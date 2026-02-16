import type { Category, ResourceFormValues } from '../types'

type ResourceFormProps = {
  values: ResourceFormValues
  categories: readonly Category[]
  onChange: (next: ResourceFormValues) => void
  onSubmit: () => void
}

function ResourceForm({
  values: _values,
  categories: _categories,
  onChange: _onChange,
  onSubmit: _onSubmit,
}: ResourceFormProps) {
  void _values
  void _categories
  void _onChange
  void _onSubmit

  return (
    <section className="card">
      <h2>Create Resource</h2>
      <p>TODO: implement resource creation form component.</p>
    </section>
  )
}

export default ResourceForm
