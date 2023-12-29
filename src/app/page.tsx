import Image from 'next/image'
import Link  from 'next/link';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'


const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Free & Open-source API'
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading size='lg' className='three-d text-black dark:text-light-gold'>
            Easily determine <br/> text similarity.
          </LargeHeading>

          <Paragraph className="max-w-xl lg:text-left">
            With the text similarity API, you can easily determine the similarity between two pieces of texts with a free{' '}
            <Link href={`/login`} className={`underline underline-offset-4 text-black dark:text-light-gold`}>
              API key
            </Link>
            .
          </Paragraph>

          <div className="relative w-full max-w-lg lg:max-w-xl lg:left-1/2 aspect-square lg:absolute">
            <Image priority src={`/typewriter.webp`} alt={`similarity-api-img`} className="img-shadow" quality={100} style={{ objectFit: 'contain' }} fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export { metadata }
