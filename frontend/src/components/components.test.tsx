import { render, screen } from '@testing-library/react'

import ReferralForm from './ReferralForm'
import ResourceDetail from './ResourceDetail'
import ResourceForm from './ResourceForm'
import ResourceList from './ResourceList'

describe('TODO components', () => {
  test('ResourceList renders TODO placeholder', () => {
    render(
      <ResourceList
        resources={[]}
        search=""
        categoryFilter="All"
        onSearchChange={() => {}}
        onCategoryChange={() => {}}
        onSelectResource={() => {}}
        categories={['Food']}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
    expect(
      screen.getByText('TODO: implement resource list, search, and category filter UI.'),
    ).toBeInTheDocument()
  })

  test('ResourceForm renders TODO placeholder', () => {
    render(
      <ResourceForm
        values={{
          name: '',
          category: 'Food',
          description: '',
          address: '',
          email: '',
          phone: '',
        }}
        categories={['Food']}
        onChange={() => {}}
        onSubmit={() => {}}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Create Resource' })).toBeInTheDocument()
    expect(screen.getByText('TODO: implement resource creation form component.')).toBeInTheDocument()
  })

  test('ResourceDetail renders TODO placeholder', () => {
    render(<ResourceDetail resource={null} referrals={[]} />)

    expect(screen.getByRole('heading', { name: 'Resource Detail' })).toBeInTheDocument()
    expect(
      screen.getByText('TODO: implement selected resource detail and referral history display.'),
    ).toBeInTheDocument()
  })

  test('ReferralForm renders TODO placeholder', () => {
    render(
      <ReferralForm
        values={{ family_name: '', resource_id: '', date: '2026-01-01', notes: '' }}
        resources={[]}
        onChange={() => {}}
        onSubmit={() => {}}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Create Referral' })).toBeInTheDocument()
    expect(screen.getByText('TODO: implement referral creation form component.')).toBeInTheDocument()
  })
})
