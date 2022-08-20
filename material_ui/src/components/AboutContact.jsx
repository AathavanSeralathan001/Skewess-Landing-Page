import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/aboutContact.css";

export default function AboutContact() {
  return (
    <div id="about-contact">
      <Card
        className="Footer-card"
        style={{ marginTop: 50 }}
        sx={{ maxWidth: 1700 }}
      >
        <CardContent style={{ backgroundColor: "#0077b6", color: "white" }}>
          <div className="about">
            <Typography
              className="about-contact-header"
              letterSpacing={1}
              color="#caf0f8"
              gutterBottom
              variant="h5"
              component="div"
            >
              About us:
            </Typography>
            <Typography
              className="about-contact"
              variant="body2"
              color="text.secondary"
              style={{ color: "white" }}
            >
              A group of young, enthusiastic, and bright team members who work
              together to quickly meet the needs of our clients. We used to
              think beyond the limit and provide better suggestions to our
              clients to bring their products best in class. Our team creates
              best-in-class web applications, mobile applications, Explainer
              animated video, video editing, UI & UX designing, logos,
              brochures, etc. we never fail to put smiles on customers' faces at
              the time of product delivery.
            </Typography>

            <br />
            <br />

            <Typography
              className="about-contact-header"
              letterSpacing={1}
              color="#caf0f8"
              gutterBottom
              variant="h5"
              component="div"
            >
              Contact Us: <RingVolumeIcon/>
            </Typography>
            <Typography
              className="about-contact"
              variant="body2"
              color="text.secondary"
              style={{ color: "white" }}
            >
              Regd address :Plot No. 1/1, Mullai Nagar, Suramangalam, Salem -
              636005 <br />
              Office address: Technology Business Incubator, Kongu Engineering
              College, Perundurai, Erode - 638 060 white_check_mark <br />
              Contact no:{" "}
              <a className="number" href="tel: +918825875342">
                {" "}
                8825875342
              </a>{" "}
              <br />
              Email:
              <a className="number" href="mailto: official@skewess.com ">
                {" "}
                official@skewess.com{" "}
              </a>{" "}
              <br />
            </Typography>
          </div>
          <center>
            {/* <InstagramIcon/> 
        <LinkedInIcon/>
        <FacebookIcon/>
        <EmailIcon/> */}
          </center>
        </CardContent>

        <div style={{ backgroundColor: "#023e8a" }}>
          <CardActions>
            {/* <CopyrightIcon className='copyright-icon'/> */}
            <Typography
              className=" footer"
              fontSize={15}
            ></Typography>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
