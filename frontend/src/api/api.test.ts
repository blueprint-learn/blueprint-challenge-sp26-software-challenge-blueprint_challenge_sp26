import {
  createReferral,
  createResource,
  getResource,
  listResourceReferrals,
  listResources,
} from './api'

describe('api TODO contract', () => {
  test('listResources throws TODO error', async () => {
    await expect(listResources()).rejects.toThrow('TODO: implement listResources in src/api/api.ts')
  })

  test('getResource throws TODO error', async () => {
    await expect(getResource(1)).rejects.toThrow('TODO: implement getResource in src/api/api.ts')
  })

  test('createResource throws TODO error', async () => {
    await expect(
      createResource({
        name: 'Example',
        category: 'Food',
        description: 'desc',
        address: '123 Main',
        email: 'x@example.com',
        phone: '555-0000',
      }),
    ).rejects.toThrow('TODO: implement createResource in src/api/api.ts')
  })

  test('listResourceReferrals throws TODO error', async () => {
    await expect(listResourceReferrals(99)).rejects.toThrow(
      'TODO: implement listResourceReferrals in src/api/api.ts',
    )
  })

  test('createReferral throws TODO error', async () => {
    await expect(
      createReferral({
        family_name: 'Lopez Family',
        resource_id: '1',
        date: '2026-02-01',
        notes: 'Needs follow-up',
      }),
    ).rejects.toThrow('TODO: implement createReferral in src/api/api.ts')
  })
})
