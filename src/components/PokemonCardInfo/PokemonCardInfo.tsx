import { useEffect, useState } from 'react'

import type { PokemonCardInfoProps } from './types'

export const PokemonCardInfo = ({ card, loading }: PokemonCardInfoProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!card) {
      setImageLoaded(false)
    }
  }, [card])

  const loadImage = () => {
    setTimeout(() => {
      setImageLoaded(true)
    }, 500)
  }

  const imageLoading = loading || !imageLoaded
  return (
    <div className='flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 '>
      {imageLoading && (
        <div
          role='status'
          className='animate-pulse min-w-[245px] h-[342px]'
          aria-label='loading card image'
        >
          <div className='flex justify-center items-center w-full h-full bg-gray-300 rounded dark:bg-gray-700' />
          <span className='sr-only'>Loading...</span>
        </div>
      )}
      <img
        style={imageLoaded ? {} : { display: 'none' }}
        src={card?.images.small}
        alt={card?.name}
        onLoad={loadImage}
      />

      <div className='flex flex-col justify-between p-8 leading-normal'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {card?.name && `${card?.name} (${card?.rarity})`}
        </h5>
        <p>{card?.subtypes.join(', ')}</p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{card?.flavorText}</p>
      </div>
    </div>
  )
}
