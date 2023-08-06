import { Box, Container, Typography } from "@mui/material";
import { data2 } from "./components/data";

const Offer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "#E3E6E6",
      }}
    >
      {data2.map((item, index) => {
        return (
          <Container
            key={index}
            sx={{
              width: "350px",
              height: "400px",
              marginTop: "2rem",
              background: "white",
              padding: "1rem",
            }}
          >
            <Typography
              style={{ height: "70px" }}
              variant="h6"
              fontWeight="bold"
            >
              {item.heading}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                gap: "2rem",
                flexWrap: "wrap",
                height: "290px",
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
            <Typography
              component="a"
              fontSize="11px"
              sx={{ color: "blue", height: "10px" }}
            >
              See all offers
            </Typography>
          </Container>
        );
      })}
      <Container
        sx={{
          width: "350px",
          height: "400px",
          background: "white",
          padding: "1rem",
          marginTop: "2rem",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Starting ₹129 | Monitors, storage, accessories & more{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            height: "300px",
            paddingBottom: ".5rem",
          }}
        >
          <img
            style={{ width: "100%", objectFit: "cover" }}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/aa23/pdacc/gw/unrec/PC_CC_379x304._SY304_CB599426206_.jpg"
            alt="picture"
          />
        </Box>
      </Container>
    </Container>
  );
};

export default Offer;
