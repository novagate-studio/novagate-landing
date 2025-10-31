'use client'
import Game1Thumb from '@/assets/games/g1.jpg'
import Backdrop from '@/assets/images/bg1.jpg'
import Game1Logo from '@/assets/logo/logo-thiendinhkiem.png'
import '@/styles/embla.css'
import classNames from 'classnames'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
const games = [
  {
    title: 'Thiên Đỉnh Kiếm',
    image: Game1Thumb,
    description:
      'Enter a fantasy world of magic and adventure. Battle monsters, level up your character, and explore vast dungeons in this immersive MMORPG experience.',
    logo: Game1Logo,
  },
]
const Game = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div id='games' className='relative -mt-[4vh] pt-24 pb-14 px-4'>
      <div className='embla'>
        <Image src={Backdrop} fill alt='Backdrop' />
        <h2 className='text-3xl md:text-5xl font-bold text-yellow-600 relative text-center pb-10'>Games</h2>
        <div className='embla__viewport' ref={emblaMainRef}>
          <div className='embla__container'>
            {games.map((game, index) => (
              <div className='embla__slide' key={index}>
                <div className='rounded-xl overflow-hidden border-4 border-primary relative'>
                  <Image src={game.image} alt={game.title} className='w-full h-full aspect-video object-cover' />
                  <div className='absolute bottom-0 left-0 pb-5 w-full h-2/3 bg-gradient-to-t from-black to-transparent flex flex-col justify-end items-center gap-2'>
                    <Image src={game.logo} alt={`${game.title} Logo`} className='h-24 w-auto' />
                    <p className='text-white text-xs text-center px-4 max-w-sm'>{game.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='embla-thumbs'>
          <div className='embla-thumbs__viewport' ref={emblaThumbsRef}>
            <div className='embla-thumbs__container'>
              {games.map((game, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  image={game.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const Thumb: React.FC<{
  selected: boolean
  index: number
  onClick: () => void
  image: any
}> = (props) => {
  const { selected, index, onClick, image } = props

  return (
    <div className={'embla-thumbs__slide '.concat(selected ? 'embla-thumbs__slide--selected' : '')}>
      <button
        onClick={onClick}
        type='button'
        className={classNames('rounded-lg overflow-hidden', selected ? 'opacity-100' : 'opacity-50')}>
        <Image src={image} alt={`Thumbnail ${index + 1}`} className='aspect-square object-cover' />
      </button>
    </div>
  )
}

export default Game
