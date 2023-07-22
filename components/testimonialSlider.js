'use client'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export default function Home() {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
                        <div className='relative ml-7 top-[4vh] h-24 w-24'>
                            <Image src="/main.jpg" alt="" fill className='object-cover rounded-full' />
                        </div>
                    <div className="bg-neutral-100 rounded-lg px-5 pb-5 pt-11">
                        <p className="mb-3 font-normal text-gray-500 text-sm">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.
                        </p>
                        <div className="flex text-amber-500 mb-4">
                            {Array(5).fill(0).map((arr, k) => <div key={k} className="pr-1">
                                <FaStar />
                            </div>)}
                        </div>
                        <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-600 font-playfair">John Doe</h5>
                        <p className="mb-3 font-normal text-gray-500 text-sm">
                            Accountant
                        </p>
                    </div>
                </div>
            </div>)}
        </Slider>
    );
}
