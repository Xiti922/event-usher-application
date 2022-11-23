import React from 'react'
import Navbar from './Navbar'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import waterHash from "../assets/waterhash.png";
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import keplrLogo from "../assets/keplrlogo.png";
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function VotingCategories() {
  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()

  let navigate =useNavigate()

  function toRosin() {
      navigate('/Voting-Entries-Rosin')
  }
  function toWater() {
      navigate('/Voting-Entries-Water-Hashish')
  }
  function toSift() {
    navigate('/Voting-Entries-Dry-Sift')
  }
  

  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg" src={titleGoldBg}/>
       </div>
      



       <div className='container'>
         <div className='holder'>
         <div className='instructions'>
                  <p className='steps-to-mint'>Voting Categories</p>
  <SimpleGrid rows={3} spacing={4}>
  <Card onClick={toRosin}>
    <CardHeader >
      <Center>
      <Heading color="white"  size='xl'> Hash Rosin </Heading>
      </Center>
    </CardHeader>
    <Center>
    <CardBody>
    <Center><Image borderRadius='full' boxSize='250px' src={rectangle8} alt='Water Hash'/></Center>
    <Center><Heading  color="white" size='md'>View all Hash Rosin</Heading></Center>
    </CardBody>
    </Center>
    <CardFooter>
    </CardFooter>
  </Card>
  <Card onClick={toWater}>
    <CardHeader>
      <Center><Heading color="white" size='xl'>Water Hashish </Heading></Center>
    </CardHeader>
    <CardBody>
    <Center><Image borderRadius='full' boxSize='250px' src={rectangle8} alt='Water Hash'/></Center>
    <Center><Heading  color="white" size='md'>View All Water Hash</Heading> </Center>
    </CardBody>
    <CardFooter>
   
    </CardFooter>
  </Card>
  <Card  onClick={toSift}>
    <CardHeader>
      <Center><Heading  color="white" size='xl'> Dry Sift Entries</Heading></Center>
    </CardHeader >
    <CardBody>
    <Center><Image borderRadius='full' boxSize='250px' src={rectangle8} alt='Water Hash'/></Center>
    <Center><Heading  color="white" size='md'>View all Dry Sift</Heading></Center>
    </CardBody>
  
  </Card>
</SimpleGrid>
              </div>
         </div>
       </div>
       <img className="footer" src={$footer} />
 </div>
 ) : (
  <Container> <div className='base pb-5'>
         <div>
          <Center><Container><img className="connect-title-gold-bg" src={titleGoldBg}/>
                      <Heading  px='7' mb={80} noOfLines={2}>Connect To Access Event Application </Heading></Container> </Center>

         </div>

         <div className='container pb-5'>

           <Center><img  borderRadius='full' className='icon' src={keplrLogo}/></Center>
           <Center><Button colorScheme='whiteAlpha' color='white' mb={80} onClick={connect}>Connect Keplr</Button></Center>

           {error && <p>{error instanceof Error ? error.message : `${error}`}</p>}
           </div>
         </div>
         </Container>


 )
}

export default VotingCategories