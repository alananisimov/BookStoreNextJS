import { Spinner } from '@chakra-ui/react'

export function Loader() {
    return(
        <div className='justify-center items-center content-center'>
        <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
</div>
    )
}