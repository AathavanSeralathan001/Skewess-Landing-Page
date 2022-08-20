import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import graphic from "../assets/graphic-designer.jpg";
import app from "../assets/app-tech.jpg";
import wwr from "../assets/who-we-are-img.jpg";
import "../styles/whoWe.css";
import blockchain from "../assets/blockchain.jpg";
import web from "../assets/coding-man.jpg";

export default function WhoWeComponent() {
  return (
    <div>
      {/* Who we are grid */}
      <div id="who-we">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "20vh" }}
        >
          <Grid item xs={1} md={12}>
            <Card sx={{ maxWidth: 1100 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="220"
                  image={wwr}
                  alt="company"
                />
                <CardContent>
                  <Typography
                    className="who-we-are"
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    Who we are?
                  </Typography>
                  <Typography
                    className="who-we-are-content"
                    variant="body2"
                    color="text.secondary"
                  >
                    Skewess number is a famous large number, commonly given as
                    10^10^10^34, that was first derived in 1933 by south african
                    mathematician Stanely Skewes in a proof involving prime
                    numbers. We are a group of young, enthusiastic, and bright
                    team members who work together to quickly meet the needs of
                    our clients.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
      {/* Technologies-Card */}
      <br />
      <br />
      <br />
      <div id="services" className="services-wrapper ">
        <Typography
          className="who-we-are services"
          variant="h4"
          component="div"
          gutterBottom
          paddingLeft={9}
        >
          SERVICES
        </Typography>

        {/* Card 1 :: start*/}
        <Grid
          container
          data-aos="fade-up"
          spacing={2}
          paddingLeft={10}
          style={{ minHeight: "70vh" }}
        >
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  src={graphic}
                  alt="green iguana"
                  height="220"
                  image=""
                /> */}
                <CardContent>
                  <Typography
                    className="services-heading"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    GRAPHIC DESIGN
                  </Typography>
                  <Typography
                    className="who-we-are1 services-content"
                    variant="body2"
                    color="text.secondary"
                  >
                    We design your ideas! We add colors to your thoughts! <br />
                    We believe "Design is Intelligence Made Visible"
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* card 1 :: end */}

          {/*card 2 ::start  */}

          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  src={app}
                  alt="green iguana"
                  height="220"
                  image=""
                /> */}
                <CardContent>
                  <Typography
                    className="services-heading"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    App Development
                  </Typography>
                  <Typography
                    className="who-we-are services-content"
                    variant="body2"
                    color="text.secondary"
                  >
                    If you are searching for a native application developer,
                    then you are at the right place. We provide reliable
                    services in app development.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* card 2 :: end */}
          {/* card 3 :: start */}

          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  src={web}
                  alt="green iguana"
                  height="220"
                  image=""
                /> */}
                <CardContent>
                  <Typography
                    className="services-heading"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Web Development
                  </Typography>
                  <Typography
                    className="who-we-are services-content"
                    variant="body2" 
                    color="text.secondary"
                  >
                    "Website without visitors is like a ship lost in the
                    horizon." Grab your own web application. Make your order!!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* card 3 :: end */}
          {/* card 4 :: start */}

          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 500 }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  src={blockchain}
                  alt="green iguana"
                  height="220"
                  image=""
                /> */}
                <CardContent>
                  <Typography
                    className="services-heading"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Block Chain Technology
                  </Typography>
                  <Typography
                    className="who-we-are services-content"
                    variant="body2"
                    color="text.secondary"
                  >
                    Bitcoin is a remarkable cryptographic achievement, and the
                    ability to create something that is not duplicable in the
                    digital world has enormous value.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        {/* card 4 :: end */}
      </div>
      {/* PRODUCTS  */}
    </div>
  );
}
