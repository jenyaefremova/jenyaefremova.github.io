import React, { useCallback, useEffect, useState } from 'react'
import { IEducation } from '../models'
import { SectionHeadline } from './shared/Typography/SectionHeadline'
import { SectionSubtitle } from './shared/Typography/SectionSubtitle'
import useEmblaCarousel from 'embla-carousel-react'

interface EducationProps {
  education: IEducation;
}

export function Education({ education }: EducationProps) {
  const options = {
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': { active: false }
    }
  }
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  return (
    <section className='pb-16 lg:pt-16'>
      <SectionHeadline sectionHeadline={education.title} />
      <div className='overflow-hidden lg:overflow-visible' ref={emblaRef}>
        <div className='flex lg:gap-10'>
          {education.place.map(place => (
            <div
              className='flex flex-col flex-[0_0_100%] lg:flex-[0_1_auto] lg:w-1/3 items-top mt-5 lg:gap-x-10 py-5 px-5 bg-slate-100 shadow-lg rounded-md min-w-0 mr-20 lg:mr-0'
              key={place.id}
            >
              <p className='text-gray-400'>{place.dates}</p>
              <SectionSubtitle sectionSubtitle={place.placeTitle} />
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center w-full mt-4 lg:hidden'>
        {education.place.map((_, index) => (
          <div
            key={index}
            className='mx-1 w-8 h-1 rounded transition-colors'
            onClick={() => scrollTo(index)}
            style={{
              backgroundColor: selectedIndex === index ? 'black' : 'grey'
            }}
          />
        ))}
      </div>
    </section>
  )
}
