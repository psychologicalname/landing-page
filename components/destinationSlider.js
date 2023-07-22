'use client'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute -right-0 md:right-20 rounded-lg p-2 cursor-pointer bg-[#FF7757] hover:bg-[#fc5d38] z-10 top-[-25%]`}
        onClick={onClick}
      >
        <FaChevronRight className='text-white text-xl font-light' />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`absolute -left-0 md:left-[86%] rounded-lg p-2 cursor-pointer bg-gray-800 hover:bg-black z-10 top-[-25%]`}
        onClick={onClick}
      >
        <FaChevronLeft className='text-white text-xl font-light' />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
      {Array(8).fill(0).map((arr, k) => <div key={k} className="w-full md:pr-4">
        <div className="bg-white">
          <Link href="/description">
            <div className='relative h-96'>
              <Image src="/main.jpg" alt="" fill className='object-cover rounded-lg' />
            </div>
          </Link>
        </div>
      </div>)}
    </Slider>
  );
}
