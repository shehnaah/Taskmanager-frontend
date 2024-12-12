import React from 'react'
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function StartupCard() {
  return (
    <div>
        <div style={{width:"220px",marginTop:"10px"}}>
            <div style={{display:"flex",flexDirection:"row" ,width:"",height:"130px",justifyContent:"space-between"}}>
            <Box sx={{width:"50px",height:"140px",backgroundColor:"white",display:"flex",flexDirection:"column",justifyContent:"space-around",borderRadius:"25px"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"0px",paddingTop:"px",height:"100%"}}>
                    <img src="https://m.media-amazon.com/images/I/81AZy9iE37L.jpg" alt="" width={"30px"} height={"30px"} style={{borderRadius:"100%",marginBottom:"30px"}}/>
                    <p style={{transform:"rotate(90deg",fontSize:"10px",width:"100px"}}>All Boosting</p>
                    </div>
                </Box>
                <Box sx={{width:"160px",backgroundColor:"white",display:"flex",flexDirection:"column",padding:"6px",justifyContent:"space-around",borderRadius:"25px"}}>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",}}>
                        <p style={{color:"rgb(87, 123, 200)",paddingTop:"5px"}}>200k</p>
                        <img src="https://m.media-amazon.com/images/I/81AZy9iE37L.jpg" alt="" width={"30px"} height={"30px"} style={{borderRadius:"100%"}}/>
                    </div>
                    <div>
                        <p style={{textAlign:"left",padding:"14px",fontSize:"10px"}}>Our startup boosting has a top social</p>
                    </div>
                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",}}>
                        <a href="" style={{fontSize:"12px"}}>Community</a>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                </Box>
            </div>
        </div>
      
    </div>
  )
}

export default StartupCard
