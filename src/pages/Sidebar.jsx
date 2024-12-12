import React from 'react'
import { Box, Typography, Paper, AppBar, Toolbar, IconButton, InputBase, Button, Divider } from '@mui/material';
import { Search, Menu, AccountCircle,ArrowDropDown } from '@mui/icons-material';

function Sidebar() {
  return (
    <div>
                <Box
            sx={{
              width: "16vw",
              bgcolor: '#ffffff',
              p: 2,
              borderBottomRightRadius: '56px',
              height:"40vh",
              display:"flex",
              flexDirection:"column",
              alignItems:"center",
              textAlign:"left",
              marginTop:0,
              minWidth:"230px"
            }}
          >
            <Box>
              <Typography variant="body1" mb={3} sx={{ lineHeight: 1.2 ,textAlign:"left"}}>
                Introduction <br />
                <span style={{color:"gray",fontSize:"14px"}}>(What we are.)</span>
              </Typography>
              <Typography variant="body1" mb={3} sx={{ lineHeight: 1.2 ,textAlign:"left"}}>
                Analyst <br />
                <span style={{color:"gray",fontSize:"14px"}}>(What you are.)</span>
              </Typography>
              <Typography variant="body1" mb={3} sx={{ lineHeight: 1.2 ,textAlign:"left"}}>
                Connections <br />
                <span style={{color:"gray",fontSize:"14px"}}>(What others are.)</span>
              </Typography>
              <Typography variant="body1" mb={1} sx={{ lineHeight: 1.2,textAlign:"left" }}>
                Boosting <br />
                <span style={{color:"gray",fontSize:"14px"}}>(The startup is high.)</span>
              </Typography>
            </Box>
          </Box>

    </div>
  )
}

export default Sidebar
