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
import Layout from '@/components/Layout';

export default function Home() {
  const {products} = useProducts()
  
  return (
    <Layout>
      <main>
    <div className='sm:p-16 grid grid-cols-1 md:grid-cols-3 mb-16'>
      {products.map(product => <Product product={product} key={product.id}/>)}
    </div>
    </main>
    </Layout>
  )
}
