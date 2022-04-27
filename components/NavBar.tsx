import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import NavMenu from './NavMenu'

function NavBar () {
  return (
        <Box sx={{ flexGrow: 1 }} id="app-bar">
          <AppBar position="static">
            <Toolbar>
              <NavMenu />

              <Button color="inherit">
                <Link href="https://github.com/davidyell" color="#fff">My Github</Link>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
  )
}

export default NavBar
