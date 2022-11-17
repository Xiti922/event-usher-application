import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import Navbar from './Navbar'
import { Image } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import $footer from "../assets/footer-cropped.png";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import titleGoldBg from "../assets/LOH_LONG_CURVED_COLOR_2.png";
import rectangle8 from "../assets/rectangle8.png";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Vote() {

    const [lookValue, setLookValue] = useState('5')
    const [smellValue, setSmellValue] = useState('5')
    const [tasteValue, setTasteValue] = useState('5')
    const [meltValue, setMeltValue] = useState('5')

    const handleLookChange = e => setLookValue(e.target.value)
    const handleSmellChange = e => setSmellValue(e.target.value)
    const handleTasteChange = e => setTasteValue(e.target.value)
    const handleMeltChange = e => setMeltValue(e.target.value)
    
    let navigate = useNavigate()
    function toVoteCategories() {
        navigate('/Voting-Categories')
    }

  return (
    <div className='base'>
       <Navbar />
          <div>
            <img className="connect-title-gold-bg" src={titleGoldBg}/>
          </div>
          <div className='container'>
            <div className='holder'>
                <Center><Button  onClick={toVoteCategories}> Return to Categories</Button></Center>

                <div className='row mt-3'>
                <Card maxW='sm'>
  <CardBody>
    <Image
 src={rectangle8}
       alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>ENTRY_NAME</Heading>
      <Divider />
      <Heading size='l'> ENTRY_MAKER_NAME</Heading>
      <Divider />
      
      <Text>ENTRY_DESCRIPTION</Text>

      <Divider />
      <Text>ENTRY CATEGORY</Text>
      <Divider />
      <Text>ENTRY BREEDER</Text>
      <Divider />
      <Text>ENTRY FARMER</Text>
      <Divider />
      <Text>ENTRY GENETICS</Text>
      <Divider />
      
    </Stack>
  </CardBody>

  
</Card>
                   
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                           
                                <p className='name-text'>Vote On Elements: </p>
                            </div>
                       
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry's Look</p>
                            <p className='range-slider-text'>{lookValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleLookChange} value={lookValue}></input>
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry's Taste</p>
                            <p className='range-slider-text'>{smellValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleSmellChange} value={smellValue}></input>
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry's Smell</p>
                            <p className='range-slider-text'>{tasteValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleTasteChange} value={tasteValue}></input>
                        </div>
                    <div className='input-holder p-3 mb-3'>
                            <p className='range-slider-text'>Entry's After Banger</p>
                            <p className='range-slider-text'>{meltValue}</p>
                            <input type="range" className="form-range" min="0" max="10" step='1' onChange={handleMeltChange} value={meltValue}></input>
                        </div>

                       <Button size='lg' color='#e25273' >Confrim & Broadcast Vote</Button>
                    </div>
                </div>
            </div>
          </div>
          <img className="footer" src={$footer} />
    </div>
  )
}

export default Vote