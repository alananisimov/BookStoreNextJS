'use client';
/* eslint-disable @next/next/no-img-element */
import { MyProduct } from "../app/models"
import { useState } from 'react'
import { useProducts } from "../app/hooks/products";
import { Box, Badge} from '@chakra-ui/react'
import { Skeleton, SkeletonText } from '@chakra-ui/react'
import {AiOutlineStar} from 'react-icons/ai'
import QuickView from "./QuickView";
import { useLocalStorage } from "usehooks-ts";

interface ProductProps {
    product: MyProduct
}

export function Product({product}: ProductProps){
    const {Loading} = useProducts()
    const [ IsOpen, SetOpen ] = useState(false)
    const [usePlus, setPlus] = useState(0)
   
    const property = {
        imageUrl: product.image,
        imageAlt: 'Product image',
        beds: 3,
        baths: 2,
        title: product.title,
        formattedPrice: product.price,
        reviewCount: product.rating.count,
        rating: product.rating.rate,
      }
      

   
    return(
        <div>
            
        <a onClick={()=>{SetOpen((current) => !current)}}>
        <Box borderWidth='1px' borderRadius='lg' overflow='hidden' className="m-6 md:h-96 relative group hover:cursor-pointer">
        
        <Skeleton isLoaded={!Loading} className="m-6 h-40"> 
      <img src={property.imageUrl} alt={property.imageAlt} className="m-6 max-w-[150px] max-h-[200px] relative group-hover:blur-sm"/>
      </Skeleton>
      <Box p='6' className="md:absolute md:bottom-0" >
      <Skeleton isLoaded={!Loading}>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Новинка
          </Badge>
          
        </Box>
        </Skeleton>
        <SkeletonText isLoaded={!Loading}>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>
</SkeletonText>
<SkeletonText isLoaded={!Loading}>
        <Box>
          Цена: {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            
          </Box>
        </Box>
</SkeletonText>
      
        <Box display='flex' className="mt-2">
        
        {!Loading &&  Array(Math.round(product.rating.rate))
            .fill('')
            .map((_, i) => (
              <AiOutlineStar
                key={i}
                className="mt-1"
              />
            ))}
         
        <SkeletonText isLoaded={!Loading}>
          <Box as='span' ml='2' color='gray.600' fontSize='sm' >
            {property.reviewCount} отзывов
          </Box>
          </SkeletonText>
        </Box>
        
      </Box>
      
    </Box>
    
    </a>
    <QuickView open={IsOpen} setOpen={SetOpen} product_props={product} usePlus={usePlus} setPlus={setPlus}/>
    </div>

    )
}