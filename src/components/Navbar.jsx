import React from "react";
import { Box, Typography } from "@mui/material";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <Box
      sx={{
        height: "60px",
        background: "#0F1111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",position:'fixed',width:'100vw',
      }}
    >
      <Box
        className="leftSection"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
        }}
      >
        <Box sx={{ width: "128px", height: "80px" }}>
          <img
            style={{ width: "100%" }}
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-Background-PNG-Image.png"
            alt="logo"
          />
        </Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <div>
            <PinDropOutlinedIcon />
          </div>
          <div>
            <Typography variant="subtitle2" fontSize="12px">
              {" "}
              Hello
            </Typography>
            <Typography  variant="subtitle2" fontWeight="bold">
              {" "}
              Select your address
            </Typography>
          </div>
        </Box>
      </Box>
      <Box
        className="middleSection"
        sx={{ flex: "3", display: "flex", }}
      >
        <Box  >
          <select
            name="All"
            style={{
              height: "45px",
              width: "49px",
              color: "black",
              border: "none",
              fontWeight:'bold'
            }}
          >
            <option value="all" >
              All
            </option>
          </select>
        </Box>
        <div style={{ width: "80%" }}>
          <input
            style={{ height: "45px", width: "100%", border: "none" }}
            placeholder="Search Amazon.in"
            type="search"
          />
        </div>
        <div
          style={{
            background: "#F3A847",
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchOutlinedIcon />
        </div>
      </Box>

      <Box
        className="rightSection"
        sx={{
          flex: "2",
          display: "flex",
          alignItems: "center",
          justifyContent:"space-around",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "30px" }}>
            <img
              style={{ width: "100%" }}
              src="https://www.pngarts.com/files/3/Indian-Flag-Transparent-Background-PNG.png"
              alt="india"
            />
          </Box>
          <Box>
            <select style={{ background: "none", color: "white",border:'none',fontWeight:'bold' }}>
              <option>IN</option>
            </select>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: "white" }} fontSize="10px">
            Hello,sign In
          </Typography>
          <div style={{ display: "flex" }}>
            <Typography fontSize='14px' sx={{ color: "white" }}>Accounts & Lists</Typography>
            <select
              style={{ border: "none", background: "none", color: "white" }}
            >
              <option></option>
            </select>
          </div>
        </Box>
        <Box sx={{ width: "70px" }}>
          <Typography fontSize='12px' fontWeight="bold" sx={{ color: "white" }}>
            Returns 
          </Typography>
          <Typography fontSize='14px' fontWeight="bold" sx={{ color: "white" }}>
          & Orders
          </Typography>
        </Box>
        <Box sx={{ display: "flex",alignItems:'base-line',textAlign:'baseline' }}>
          <ShoppingCartOutlinedIcon
            style={{ color: "white", fontSize: "2rem" }}
          />
          <Typography
            sx={{ color: "white",paddingTop:'10px' }}
            fontWeight="bold" fontSize='13px'
          >
            Cart
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
