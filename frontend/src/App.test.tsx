import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App starter TODO scaffold', () => {
  test('renders project header and integration TODO section', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'CommunityBridge Resource Hub' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Integration TODO' })).toBeInTheDocument()
    expect(
      screen.getByText('Starter frontend scaffold with TODOs for API integration.'),
    ).toBeInTheDocument()
  })

  test('shows all component TODO placeholders', () => {
    render(<App />)

    expect(
      screen.getByText('TODO: implement resource list, search, and category filter UI.'),
    ).toBeInTheDocument()
    expect(screen.getByText('TODO: implement resource creation form component.')).toBeInTheDocument()
    expect(
      screen.getByText('TODO: implement selected resource detail and referral history display.'),
    ).toBeInTheDocument()
    expect(screen.getByText('TODO: implement referral creation form component.')).toBeInTheDocument()
  })

  test('clicking load resources sets TODO error message', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByText('TODO: implement handleLoadResources in App.tsx')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Load Resources (TODO API)' }))

    expect(screen.getByText('TODO: implement handleLoadResources in App.tsx')).toBeInTheDocument()
  })

  test('edge case: clicking load resources repeatedly keeps a single TODO error visible', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: 'Load Resources (TODO API)' })

    await user.click(button)
    await user.click(button)

    const errors = screen.getAllByText('TODO: implement handleLoadResources in App.tsx')
    expect(errors).toHaveLength(1)
  })
})
