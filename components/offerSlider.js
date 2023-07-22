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
        className={`absolute -right-0 md:right-[92%] rounded-lg p-2 cursor-pointer bg-[#FF7757] hover:bg-[#fc5d38] z-10 top-[-25%]`}
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
        className={`absolute -left-0 md:left-0 rounded-lg p-2 cursor-pointer bg-gray-800 hover:bg-black z-10 top-[-25%]`}
        onClick={onClick}
      >
        <FaChevronLeft className='text-white text-xl font-light' />
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          <Link href="/">
            <div className='relative h-48'>
              <Image src="/main.jpg" alt="" fill className='object-cover rounded-lg' />
            </div>
          </Link>
          <div className="bg-[#FFF8F1] p-5">
            <Link href="/">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-600">Noteworthy technology</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Link href="#" className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-[#FF7757] rounded-lg hover:bg-[#fc5d38] focus:outline-none">
              Details
            </Link>
          </div>
        </div>
      </div>)}
    </Slider>
  );
}
