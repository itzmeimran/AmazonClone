import { Box, Typography } from '@mui/material'
import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Navabr2 = () => {
    const items = ['All','Amazon miniTv','Sell','Best Sellers', 'Todays Deal','Mobiles','New Releases','Customer service', 'Prime', 'Electronics', 'Home & Kitchen','Gift Ideas']
  return (
    <Box sx={{maxWidth:'100vw',overflow:'hidden',background:'#232F3E', display:'flex', gap:'10px',padding:'10px',justifyItems:'center',alignItems:'center',paddingTop:'4rem'}}>
      <MenuOutlinedIcon sx={{color:'white'}} />
      {items.map((item,index)=>{
        return <Typography fontSize='14px' sx={{color:'white'}} className='' key={index}>{item}</Typography>
      })}
      <Box sx={{display:'flex',justifyItems:'center',alignItems:'center',marginLeft:'6.5rem',gap:'10px' }}>
        <Typography variant='h5' sx={{color:'white'}}>Great Freedom Sale | Shop Now</Typography>
        <ArrowForwardIosIcon style={{color:'white'}}/>
      </Box>
    </Box>
  )
}

export default Navabr2
