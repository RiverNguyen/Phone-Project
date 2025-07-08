'use client'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import {Autoplay, Pagination, Parallax} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'

const images = [
  'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/34b5bf180145769.6505ae7623131.jpg',
  'https://www.apple.com/vn/iphone-16/images/meta/iphone-16_overview__fcivqu9d5t6q_og.png?202506171812',
  'https://cdn.prod.website-files.com/680a070c3b99253410dd3df5/680a070c3b99253410dd47be_66e007f27ebc6f8e02699ef7_Apple%252016%2520thumbnail.png',
]

export default function Banner() {
  return (
    <div className='w-full h-[40.875rem] overflow-hidden mt-[3.75rem]'>
      <Swiper
        slidesPerView={1}
        modules={[Parallax, Autoplay, Pagination]}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        parallax={true}
        className='w-full h-full'
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className='relative overflow-hidden'
          >
            <div
              className='size-full overflow-hidden absolute top-0 left-0 will-change-transform'
              data-swiper-parallax='70%'
            >
              <Image
                width={1920}
                height={1080}
                src={image}
                alt={image}
                className='w-full h-full object-cover will-change-transform'
              />
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-pagination' />
      </Swiper>
    </div>
  )
}
