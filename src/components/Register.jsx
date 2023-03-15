import React from 'react'
import Navbar from './Navbar'
import { Center } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import Typeform from './Typeform.jsx';

function App() {
  return (
    <div>
    <Navbar />
      <Typeform />
    </div>
  );
}

export default App;