'use client'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import {  } from 'react-icons';

export default function Home() {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };

  return (
    <Slider {...settings}>
      {Array(8).fill(0).map((arr, k) => <div key={k} className="pr-4">
        <div className="bg-white">
          <Link href="/">
            <div className='relative h-80'>
              <div className='absolute bottom-0 z-10 h-64 transition hover:-translate-y-16 delay-150 ease-in-out duration-300 w-full'>
                <Image src="/main.jpg" alt="" fill className='object-cover rounded-lg' />
              </div>
              <div className='absolute w-full bottom-0 z-0'>
                <div className="flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <p>GUIDED TOUR</p>
                    <p>$99/Day</p>
                  </div>
                  <div className="font-playfair text-lg">Paris City Tour</div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <p></p>
                    <p>7 Days Tour</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>)}
    </Slider>
  );
}
