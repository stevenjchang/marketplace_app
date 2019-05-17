const data = {
  listings: [
    {
      title: 'title',
      price: 1400,
      bedrooms: 3,
      sharedType: 'shared, private room, private apartment',
      availableDate: '05/19/2019',
      contractLength: 'month-to-month, 6 months, 12 months',
      neighborhood: 'areaA, areaB, areaC'
    },
    {
      title: 'studio near City Hall',
      price: 1700,
      bedrooms: 1,
      sharedType: 'private',
      availableDate: '07/01/2019',
      contractLength: '12 months',
      neighborhood: 'areaA',
    },
    {
      title: 'take over lease',
      price: 1000,
      bedrooms: 4,
      sharedType: 'private room',
      availableDate: '05/25/2019',
      contractLength: 'month-to-month',
      neighborhood: 'areaB',
    },
    {
      title: 'shared room near new city',
      price: 800,
      bedrooms: 3,
      sharedType: 'shared',
      availableDate: '07/01/2019',
      contractLength: '6 months',
      neighborhood: 'areaC',
    },
  ]
}

export const sampleData = JSON.stringify({ data })
