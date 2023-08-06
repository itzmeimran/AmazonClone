import { Box } from '@mui/material'
import React from 'react'
import Navbar from './components/Navbar'
import Navabr2 from './components/Navabr2'
import Home from './Home'
import Offer from './Offer'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Navabr2 />
      <Home />
      <Offer />
    </Box>
  )
}

export default App
