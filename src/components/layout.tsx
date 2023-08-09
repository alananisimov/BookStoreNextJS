'use client';
import { BottomNav } from '../components/BottomNav';
import { Loader } from '../components/Loader';
import Example from '../components/NavBar';
import { Product } from '../components/Product'
import '../app/globals.css'
import { useProducts } from '../app/hooks/products';
import { ChakraProvider } from '@chakra-ui/react'
import Component from '@/components/Test';
import dynamic from 'next/dynamic'
import { ReactNode } from 'react';
 
const NoSSR = dynamic(() => import('../components/NavBar'), { ssr: false })

export default function Layout({children}: {children: ReactNode}) {
  
  return (
    <ChakraProvider>
      <NoSSR/>
      <main className="my-12">{children}</main>
    
    
    <BottomNav/>
    </ChakraProvider>
  )
}
