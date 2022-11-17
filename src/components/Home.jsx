import React from 'react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/react'
import Navbar from './Navbar';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import sponsors1 from "../assets/sponsors1.png";
import { Text } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import keplrLogo from "../assets/keplrlogo.png";
import { useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {
  useWalletManager,
  useWallet,
  WalletConnectionStatus,
} from "@xiti/cosmodal"

function Home() {

  const { connect, disconnect } = useWalletManager()
  const { status, error, name, address, signingCosmWasmClient } = useWallet()
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  let navigate = useNavigate()
  function toConnect() {
      navigate('/Connect')
  }
  function toVoteCategories() {
      navigate('/Voting-Categories')
  }
  function toMothership() {
      navigate('/Mothership')
  }
  return status === WalletConnectionStatus.Connected ? (
    <div className='base'>
    
      
      <Navbar />
      <Center><div>
        <img className="title-gold-bg" src={titleGoldBg}/>
      </div></Center>
    
      <Center><Heading mb={4}>Transparent Judging Application for The Legends of Hashish: 2022</Heading></Center>

      <div className='container me-3'>
        <div className="row">
          <div className='col'>          
</div> 


</div>
  <Box p='2'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Display Your Ticket QR.</Heading>
      <Text py='2'>
      Ensure you have already installed & imported your Legends Event Mnemonic Seed to Keplr Mobile.
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'  onClick={toConnect}>
        Connect
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Box>

<Box p='2'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Vote On Entries</Heading>
      <Text py='2'>
      Judge allocates points for each of this years entries, not including their own.
      
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue' onClick={toVoteCategories}>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Box>

<Box p='2'>
<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Legends of Hashish x Mothership NFT's</Heading>
      <Text py='2'>
      Gain Access to the mothership
      
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue' onClick={toMothership}>
        Mint
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Box>

<Box p='2'>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image
    objectFit='cover'
    maxW='150px'
    src={rectangle8}
    alt='Caffe Latte'
  />
  <Stack>
    <CardBody>
      <Heading size='md'>Info / FAQ</Heading>
      <Text py='2'>
      Information and frequently asked questions.
      
      </Text>
    </CardBody>
    <CardFooter>
    <Button variant='solid' colorScheme='blue' onClick={onOpen}>Learn More</Button> 
    </CardFooter>
  </Stack>
</Card>
</Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
      
      </div>
    
      <div className='holder'>
        <Center><p className="transparent-judging">
          
        </p></Center>
       
        <img className="sponsors-1" src={sponsors1} />
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
function BasicUsage() {
  
  return (
    <>
      
    </>
  )
}

export default Home