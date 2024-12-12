import React from 'react';
import Statistic from '../components/Statistics';
import { Box, Typography, Paper, AppBar, Toolbar, InputBase, Button } from '@mui/material';
import { Search, AccountCircle, ArrowDropDown } from '@mui/icons-material';
import './Main.css';
import StartupCard from '../components/StartupCard';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions'; // Import the logout action
import { motion } from "framer-motion";
import Tasks from '../components/Tasks';
function Home() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    window.location.href = '/login'; // Redirect the user to the login page
  };
  return (
    <div>
      <Box sx={{
        display: 'flex', minHeight: '100vh', bgcolor: '#f5f5f5', borderRadius: '3', padding: '2',
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngjyZ7MX47BkXMVJxdFUxSZsAMpm0afCRBQ&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: "16%",
            bgcolor: '#ffffff',
            p: 2,
            borderBottomRightRadius: '56px',
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "left"
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              component="img"
              src="https://sc.filehippo.net/images/t_app-icon-l/p/805ba687-db9b-4216-8e8c-f4684e762002/190220562/microsoft-pc-manager-Microsoft%20PC%20Manager-icon.png"
              alt="Logo"
              sx={{ width: 30, height: 30, mr: 1, borderRadius: '50%', alignItems: "center", display: "flex", justifyContent: "center", mb: 2 }}
            />
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Star.top
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" mb={3} sx={{ lineHeight: 1.2, textAlign: "left" }}>
              Introduction <br />
              <span style={{ color: "gray", fontSize: "14px" }}>(What we are.)</span>
            </Typography>
            <Typography variant="body1" mb={3} sx={{ lineHeight: 1.2, textAlign: "left" }}>
              Analyst <br />
              <span style={{ color: "gray", fontSize: "14px" }}>(What you are.)</span>
            </Typography>
            <Typography variant="body1" mb={3} sx={{ lineHeight: 1.2, textAlign: "left" }}>
              Connections <br />
              <span style={{ color: "gray", fontSize: "14px" }}>(What others are.)</span>
            </Typography>
            <Typography variant="body1" mb={1} sx={{ lineHeight: 1.2, textAlign: "left" }}>
              Boosting <br />
              <span style={{ color: "gray", fontSize: "14px" }}>(The startup is high.)</span>
            </Typography>
          </Box>
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: "auto", width: "100%" }}>
          {/* Header */}
          <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{
              display: 'flex', justifyContent: 'space-between', gap: 0, alignItems: 'center', paddingLeft: 0, paddingRight: 0, margin: 0, borderBottom: '0.5px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 2px 4px rgba(255, 255, 255, 0.2)',
              '@media (min-width:600px)': {
                paddingLeft: 0, // Overriding padding-left for screens >= 600px
                paddingRight: 0, // Overriding padding-right for screens >= 600px
              }
            }}>
              {/* Search Field */}
              <div style={{
                width: "30%", backgroundColor: "white", height: "100%", marginRight: "0", margin: 0, padding: 0, borderBottomRightRadius: "28px",
                overflow: "hidden", alignItems: "center", display: "flex", justifyContent: "center"
              }}>
                <Box sx={{ flexGrow: 1, maxWidth: '90%', ml: 1 }}>
                  <InputBase
                    placeholder="Search..."
                    sx={{
                      bgcolor: '#f0f0f0',
                      borderRadius: 6,
                      p: 1,
                      px: 2,
                      width: '100%',
                    }}
                    startAdornment={<Search sx={{ mr: 1 }} />}
                  />
                </Box>

              </div>
              {/* Navigation Items */}
              <div style={{
                width: "50%", backgroundColor: "transparent", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderTopLeftRadius: "18px",
                borderTopRightRadius: "18px",

              }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    justifyContent: 'center',
                    flexGrow: 1,

                  }}
                >
                  {['Home', 'Blog', 'Club', 'About Us'].map((item, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      sx={{
                        cursor: 'pointer',
                        fontWeight: 500,
                        color: 'white',
                        position: 'relative',
                        '&:after': {
                          content: '""',
                          display: 'block',
                          height: '2px',
                          width: item === 'Home' ? '100%' : '0', // Active link logic
                          backgroundColor: 'white',
                          position: 'absolute',
                          bottom: -21, // Adjust the position of the underline
                          left: 0,
                          transition: 'width 0.3s',
                        },
                        '&:hover:after': {
                          width: '100%', // Hover effect
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </div >
              {/* Profile Button */}
              <div style={{ width: "20%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", borderBottomLeftRadius: "28px", margin: 0, padding: 0 }}>
                <Box sx={{ mr: 1 }}>
                <Button
                    color="inherit"
                    variant="outlined"
                    onClick={handleLogout} // Call the logout function when clicked
                    sx={{
                      borderColor: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '22px',
                      color: 'black',
                      padding: '16px 30px',
                      textTransform: 'none',
                      height: '40px',
                      '&:hover': {
                        borderColor: 'rgba(0, 0, 0, 0.6)',
                      },
                    }}
                    startIcon={<ArrowDropDown />}
                    endIcon={
                      <Box
                        sx={{
                          fontSize: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <AccountCircle fontSize="large" />
                      </Box>
                    }
                  >
                    Logout
                  </Button>
                </Box>

              </div></Toolbar>
          </AppBar>

          {/* Hero Section */}
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
  <div style={{display:"flex",flexDirection:"row"}}>
    <Statistic/>
  </div>
<div style={{paddingRight:"33px"}}>
    <StartupCard/>
 
</div>
</div>          
<div style={{ display: "flex", flexDirection: "row", marginTop: "20px" ,paddingLeft:"30px"}}>
            <Box sx={{
              position: "relative", display: "flex", justifyContent: "start",
              alignItems: "start"
            }}>
              <Button sx={{ width: "130px", height: "40px", border: "2px solid white", borderRadius: "30px", padding: "3", paddingLeft: "5px", paddingRight: "5px", color: "white", fontSize: "12px" }}>
                #Boosting
              </Button>
              <Button sx={{ width: "130px", height: "40px", border: "2px solid white", borderRadius: "30px", padding: "3", paddingLeft: "5px", paddingRight: "5px", color: "white", fontSize: "12px" }}>
                #Startups
              </Button>
            </Box>

          </div>

          <Box
            sx={{
              flexGrow: 1,
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white'
              
      
            }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ fontFamily: "Crete Round, serif", fontWeight: "200", textAlign: "left", fontSize: "68px" ,paddingLeft:"150px"}}>
              Ignite your startup’s potential <br />with {' '}
              <button style={{ backgroundColor: "rgba(237, 235, 235, 0.2)", color: "white", borderRadius: "30px", border: "none", outline: "none", padding: 5, paddingLeft: "5px", paddingRight: "5px", width: "200px" }}>
                <Typography component="span" fontWeight="bold" sx={{ color: "light", fontWeight: 100, width: "250px", height: "40px" }}>
                  Progress Instruments
                </Typography>
              </button>  &nbsp;booster.
            </Typography>
          </Box>

          {/* Main Cards */}
          <Tasks/>
        </Box>
      </Box>

    </div>);
};

export default Home;
