import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.jpg'

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">How It Works</h2>
            <li>
              <p className="text-xl text-gray-800" data-aos="zoom-y-out">1. Capture a clear image of the flower you wish to identify.</p>
              <p className="text-xl text-gray-800" data-aos="zoom-y-out">2. Our intelligent algorithm will analyze the image and provide you with the flower's classification.</p>
              <p className="text-xl text-gray-800" data-aos="zoom-y-out">3. Expand your botanical knowledge and explore the rich diversity of the natural world at your fingertips..</p>
            </li>
            
          </div>

        </div>
      </div>
    </section>
  )
}