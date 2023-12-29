"use client"

import { signOut } from 'next-auth/react';
import { FC, useState } from 'react'
import Button from '@/ui/Button';
import { toast } from './ui/toast';

interface SignOutButtonProps {
  
}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signUserOut = async() => {
    setIsLoading(true);

    try {
      await signOut()
    } catch (error) {
      toast({
        title: 'Error Sign Out',
        message: 'Please try again later',
        type: 'error',
      })
    }
  }


  return (  
    <Button onClick={signUserOut} isLoading={isLoading}>
        Sign in
    </Button>
  )
}

export default SignOutButton