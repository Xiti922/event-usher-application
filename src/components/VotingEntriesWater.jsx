import React from 'react'
import Navbar from './Navbar'
import $footer from "../assets/footer-cropped.png";
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import rectangle8 from "../assets/rectangle8.png";
import { useNavigate } from 'react-router-dom';

function VotingEntriesWater() {

  let navigate = useNavigate()

  function nextCategory() {
      navigate('/Voting-Entries-Dry-Sift')
  }

  function prevCategory() {
      navigate('/Voting-Entries-Rosin')
  }

  function toVoting(){
    navigate('/Vote')
  }

  return (
    <div className='base'>
    <Navbar />
       <div>
         <img className="connect-title-gold-bg" src={titleGoldBg}/></div>
         <Heading noOfLines={2} className='water-hash-title me-1' > Water Hashish Entries</Heading>
         <Flex  px='12'  py='5'> <Button colorScheme='teal' onClick={prevCategory} variant='outline'> Hashish Rosin</Button>
  <Spacer />
<Button colorScheme='teal' onClick={nextCategory} variant='outline'> Dry Sift</Button>
</Flex>  

<Container s>
<Grid templateRows='repeat(5, 1fr)' gap={6}>
       <Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
 
<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
 
<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card onClick={toVoting} direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack>
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>

<Card direction='row' overflow='hidden' variant='outline'>
  <Image objectFit='cover' maxW='20px' src={rectangle8} alt='EntryCover'/>
  <Stack onClick={toVoting} >
    <CardBody>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Text py='2'>
      ENTRY_NAME::DESCRIPTION
      </Text>
    </CardBody>
    <CardFooter>
      <Button  onClick={toVoting} variant='solid' colorScheme='blue'>
        Vote
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Grid>
</Container>

       <img className="footer" src={$footer} />
 </div>
  )
}

export default VotingEntriesWater