import { FC } from 'react'

import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { notFound } from 'next/navigation'
import { db } from '@/lib/db'
import RequestApiKey from '@/components/RequestApiKey'
import ApiDashboard from '@/components/ApiDashboard'


const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free & Open-source API',
}

const Dashboard = async({}) => {

  const user = await getServerSession(authOptions);
  if(!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: {
      userId: user.user.id,
      enabled: true,
    }
  })

  return (
    <div className="max-w-7xl mt-16 mx-auto">
      {apiKey ? 
        // @ts-expect-error
        <ApiDashboard /> : 
        <RequestApiKey />
      }
    </div>
  )
}

export default Dashboard

export { metadata }