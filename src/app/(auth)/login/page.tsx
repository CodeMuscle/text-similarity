'use client'

import { buttonVariants } from '@/components/ui/Button'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import UserAuthForm from '@/components/UserAuthForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

const page: FC = ({}) => {
  return (
    <div className="inset-0 absolute mx-auto container flex flex-col h-screen items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
        <div className="flex flex-col gap-6 items-center text-center">
          <Link href={`/`} className={buttonVariants({
              variant: 'ghost',
              className: 'w-fit'
          })}>
            <ChevronLeft className='h-4 w-4 mr-2'/>
            Back to home
          </Link>

          <LargeHeading>
            Welcome back!
          </LargeHeading>
          <Paragraph>
            Please sign in using your Google account.
          </Paragraph>

          <UserAuthForm />
        </div>
      </div>
    </div>
  )
}

export default page