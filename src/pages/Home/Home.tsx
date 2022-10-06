import { useGetSets } from 'hooks/useGetSets'

import { SetCard } from 'components/SetCard'

import type { Set } from 'types/fixtures/set'

export const Home = () => {
  const { loading, data, error } = useGetSets({
    pageSize: 3,
    orderBy: '-releaseDate',
  })

  if (error) {
    return <div>Error</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-800 dark:text-white text-center mb-4'>
        Latest Pokemon TCG Sets
      </h1>
      {data?.data && (
        <div className='grid grid-cols-3 gap-3'>
          {data?.data.map((set: Set) => {
            return (
              <div key={set.id} className='flex-1 items-stretch'>
                <SetCard
                  name={set.name}
                  series={set.series}
                  releaseDate={set.releaseDate}
                  image={set.images.logo}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
