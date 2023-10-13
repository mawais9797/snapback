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
import { makeStyles } from "@mui/styles";
import CustomButton from "../components/CustomButton";

const myStyles = makeStyles((theme) => ({
  container: {
    marginTop: "60px",
  },
  image: {
    width: "25px",
    height: "25px",
  },
  imageBox: {
    backgroundColor: "#f78b8b",
    padding: "22px",
    width: "70px",
    height: "70px",
    borderRadius: "40px",
    marginBottom: "20px",
    marginLeft: "140px",
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

const CheckEmail = () => {
  const classes = myStyles();
  return (
    <Container maxWidth="xs">
      <Box textAlign="center" className={classes.container}>
        <Link to="#">
          <Box className={classes.imageBox}>
            <img
              src={openEnvelop}
              className={classes.image}
              alt="Refresh-Button"
            />
          </Box>
        </Link>
        <Typography variant="h4" className={classes.heading}>
          Check your mail
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          Please click on the link we've sent you by mail to confirm your
          account
        </Typography>
      </Box>
      <form>
        <CustomButton title="Reset password" />
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

export default CheckEmail;
