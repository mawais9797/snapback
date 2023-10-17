import {
  Box,
  InputLabel,
  TextField,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import openEnvelop from "../images/open-envelope-48.png";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import { makeStyles } from "@mui/styles";
import CustomButton from "../components/CustomButton";

const myStyles = makeStyles((theme) => ({
  container: {
    marginTop: "120px",
  },
  image: {
    width: "25px",
    height: "25px",
  },
  imageBox: {
    backgroundColor: "#f78b8b",

    paddingTop: "24px",
    width: "70px",
    height: "70px",
    borderRadius: "40px",
    marginBottom: "20px",
    marginLeft: "150px",
  },
  heading: {
    paddingBottom: "20px",
  },
  body1: {
    color: "#596570",
    paddingBottom: "20px",
  },
  textField: {
    backgroundColor: "#161827",
    border: "1px solid #2d2f3d",
    borderRadius: "5px",
    marginBottom: "0px",
    height: "50px",
  },
  backButton: {
    color: "#7b68ee",
    paddingTop: "20px",
  },
  backButtonLink: {
    textDecoration: "none",
  },
}));

const Congratulations = () => {
  const classes = myStyles();
  return (
    <Container maxWidth="xs">
      <Box textAlign="center" className={classes.container}>
        <Link to="#">
          <Box className={classes.imageBox}>
            {/* <img
              src={openEnvelop}
              className={classes.image}
              alt="Refresh-Button"
            /> */}
            <HandshakeOutlinedIcon style={{ color: "white" }} />
          </Box>
        </Link>
        <Typography variant="h4" className={classes.heading}>
          Congratulations!
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          Your account has been created successfully. <br />
          Enjoy the features of the app!
        </Typography>
      </Box>
      <form>
        <CustomButton title="Go to app" />
        <Box textAlign="center">
          <Link to="#" className={classes.backButtonLink}>
            <Typography variant="body1" className={classes.backButton}>
              Go back
            </Typography>
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default Congratulations;
