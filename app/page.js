import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import { FaArrowRight } from 'react-icons/fa';
import Slider1 from '@/components/destinationSlider';
import Slider2 from '@/components/offerSlider';
import Slider3 from '@/components/tripPlannerSlider';
import Slider4 from '@/components/gallerySlider';
import Slider5 from '@/components/testimonialSlider';
import {Playfair_Display} from 'next/font/google';
import CalendarDropdown from '@/components/calendar_dropdown';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--playfair-font'
})

export default function Home() {
  return (
    <main className={playfair.variable}>
      <Navbar />
      <section className="h-[100vh] relative">
        <Image src="/main.jpg" className="object-cover" fill />
        <div className="absolute top-[30%] text-white ml-4 lg:ml-28 lg:max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-6xl mb-4 leading-10">Start your unforgettable journey with us.</h1>
          <p className="text-white md:text-lg">The best travel for your journey begins now.</p>
        </div>
        <div className="absolute top-[55%] h-72 flex items-center justify-center">
          <div className="bg-white rounded-r-xl">
            <form className="flex">
              <div className="mr-8 pl-24 py-10">
                <label htmlFor="destination" className="block text-gray-500 text-xs mb-1">DESTINATION</label>
                <input type="text" id="destination" name="destination" className="font-playfair form-input text-gray-600 text-sm border-b border-b-gray-600 pb-1 focus:outline-none" />
              </div>
              <div className="mr-8 py-10">
                <label htmlFor="person" className="block text-gray-500 text-xs mb-1">PERSON</label>
                <select id="person" className="font-playfair w-40 form-input text-gray-600 text-sm border-b border-b-gray-600 pb-1 focus:outline-none">
                  <option selected></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <CalendarDropdown label="check-in"/>
              <CalendarDropdown label="check-out"/>
              <div className="bg-[#FF7757] rounded-r-xl text-white pl-3 pr-4 py-10 text-lg font-light font-playfair flex items-center hover:bg-[#fc5d38]">
                <Link href="/">
                <p className='inline'>BOOK
                  <br />NOW
                </p>
                <FaArrowRight className="inline ml-3" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="mt-24 ml-4 lg:ml-28">
        <h1 className="font-playfair tracking-tight text-4xl border-b border-b-[#FF7757] border-b-2 inline pb-2">
          Popular Destinations
        </h1>
        <p className="text-sm text-gray-500 mt-8">
          Most popular destinations around the world, from historical places to natural wonders.
        </p>
        <div className="mt-14">
          <Slider1 />
        </div>
      </section>

      <section className="mt-36 container">
        <div className="text-right">
          <h1 className="font-playfair tracking-tight text-4xl border-b border-b-[#FF7757] border-b-2 inline pb-2">
            Special Offer
          </h1>
        </div>
        <p className="text-sm text-right text-gray-500 mt-8">
          Check out our special offer and discounts
        </p>
        <div className="mt-14">
          <Slider2 />
        </div>
      </section>

      <section className="mt-36 container">
        <h1 className="font-serif tracking-tight text-4xl border-b border-b-[#FF7757] border-b-2 inline pb-2">
          Our Blog
        </h1>
        <p className="text-sm text-gray-500 mt-8">
          An insight the incredible experience in the world
        </p>
        <div class="mt-14 lg:grid lg:grid-cols-2 items-center">
          <div className='relative h-96'>
            <Image src="/main.jpg" alt="" fill className='object-cover rounded-lg' />
          </div>
          <div className="p-5">
            <h5 className="mb-3 font-serif text-3xl w-3/4 tracking-tight text-gray-700">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-sm text-gray-600 leading-loose">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#FF7757] hover:text-[#fc5d38]">
              Read more
              <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-36 container">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className='col-span-4'>
            <h1 className="font-serif tracking-tight text-4xl border-b border-b-[#FF7757] border-b-2 inline pb-2">
              Trip Planners
            </h1>
            <p className="text-sm text-gray-500 mt-8 leading-0">
              20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.
            </p>
          </div>
          <div className="col-span-8">
            <div className='w-full'>
            <Slider3 />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-36 container">
        <h1 className="font-playfair tracking-tight text-4xl border-b border-b-[#FF7757] border-b-2 inline pb-2">
          Destination Gallery
        </h1>
        <p className="text-sm text-gray-500 mt-8">
          Our photo gallery on trip
        </p>
        <div className="mt-14">
          <Slider4 />
        </div>
      </section>

      <section className="mt-36 container">
        <h1 className="font-playfair tracking-tight text-4xl border-b border-b-[#FF7757] border-b-2 inline pb-2">
          Traveler's Experiences
        </h1>
        <p className="text-sm text-gray-500 mt-8">
          Here some awesome feedback from our travelers
        </p>
        <div className="mt-14">
          <Slider5 />
        </div>
      </section>
      
    </main>
  )
}
