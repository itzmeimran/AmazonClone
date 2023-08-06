import { Box, Button, Container, Typography } from "@mui/material";

import { data, } from "./components/data.js";

const Home = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        padding: "0rem 1rem",
        backgroundImage: `url('https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/AugustART/Event/Unrec/luggage/3000._CB599376868_.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "750px",
        overflow: "hidden",
        objectFit: "cover",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => {
          return (
            <Container
              key={index}
              sx={{
                width: "350px",
                height: "400px",
                marginTop: "20rem",
                marginBottom:'2rem',
                background: "white",
                padding: "1rem",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {item.heading}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                {item.cards.map((card, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        width: "100px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ width: "120px" }}
                        key={index}
                        src={card.img}
                        alt="picture"
                      />
                      <Typography
                        sx={{ color: "black" }}
                        component="p"
                        fontSize="12px"
                      >
                        {card.title}
                      </Typography>
                    </div>
                  );
                })}
              </Box>
              <Typography component="a" fontSize="11px" sx={{ color: "blue" }}>
                See all offers
              </Typography>
            </Container>
          );
        })}
        <Container
          sx={{
            width: "350px",
            height: "400px",
            marginTop: "20rem",
            background: "white",
            padding: "1rem",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Great Freedom Sale
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
              paddingBottom: ".5rem",height:'300px'
            }}
          >
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/Shop-all-Deals_PC-CC_1X._SY304_CB599376706_.jpg"
              alt="picture"
            />
          </Box>
        </Container>
        <Container
          sx={{
            width: "280px",
            background: "white",
            height: "150px",
            marginTop: "20rem",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography variant="h5">
              Sign in for your best experience
            </Typography>
            <Button
              variant="contained"
              fontWeight="10px"
              sx={{ background: "#F7CA00", color: "black" }}
            >
              Sign in securely
            </Button>
          </Box>
          <Box sx={{ width: "250px" }}>
            <img
              style={{ width: "100%" }}
              src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
              alt="pic"
            />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Home;
