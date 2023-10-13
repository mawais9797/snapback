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
import refreshImage from "../images/refresh-50.png";
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

const ContactNo = () => {
  const classes = myStyles();
  return (
    <Container maxWidth="xs">
      <Box textAlign="center" className={classes.container}>
        <Typography variant="h5" className={classes.heading}>
          Enter your phone number
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          A confirmation code will be send to your number to connect with the
          app
        </Typography>
      </Box>
      <form>
        <TextField
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          id="email"
          placeholder="JohnDoe@mail.com"
          InputProps={{
            className: classes.textField,
          }}
        />
        <CustomButton title="Reset password" />
        <Box textAlign="center">
          <Link to="#" className={classes.backButtonLink}>
            <Typography variant="body1" className={classes.backButton}>
              Back to Log in
            </Typography>
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default ContactNo;
