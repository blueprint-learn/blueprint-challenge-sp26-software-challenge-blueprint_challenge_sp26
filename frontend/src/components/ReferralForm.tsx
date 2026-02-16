import type { ReferralFormValues, Resource } from '../types'

type ReferralFormProps = {
  values: ReferralFormValues
  resources: Resource[]
  onChange: (next: ReferralFormValues) => void
  onSubmit: () => void
}

function ReferralForm({
  values: _values,
  resources: _resources,
  onChange: _onChange,
  onSubmit: _onSubmit,
}: ReferralFormProps) {
  void _values
  void _resources
  void _onChange
  void _onSubmit

  return (
    <section className="card">
      <h2>Create Referral</h2>
      <p>TODO: implement referral creation form component.</p>
    </section>
  )
}

export default ReferralForm
