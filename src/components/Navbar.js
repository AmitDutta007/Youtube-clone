import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/Constant'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      pl={4}
      sx={{ position: 'sticky', background: '#323232', top: 0, justifyContent: 'space-between' }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={40} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar