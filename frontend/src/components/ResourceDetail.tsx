import type { Referral, Resource } from '../types'

type ResourceDetailProps = {
  resource: Resource | null
  referrals: Referral[]
  isLoading?: boolean
}

function ResourceDetail({
  resource: _resource,
  referrals: _referrals,
  isLoading: _isLoading = false,
}: ResourceDetailProps) {
  void _resource
  void _referrals
  void _isLoading

  return (
    <section className="card">
      <h2>Resource Detail</h2>
      <p>TODO: implement selected resource detail and referral history display.</p>
    </section>
  )
}

export default ResourceDetail
