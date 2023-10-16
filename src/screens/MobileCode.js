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
import padLock from "../images/padlock-50.png";
import { makeStyles } from "@mui/styles";
import CustomButton from "../components/CustomButton";

const myStyles = makeStyles(() => ({
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
    height: "80px",
    width: "80px",
    fontSize: "40px !important",
    textAlign: "center !important",
  },
  textFieldMarginLeft: {
    marginLeft: "10px",
  },
  textFieldMarginRight: {
    marginRight: "25px",
  },
  backButton: {
    color: "#7b68ee",
    paddingTop: "20px",
  },
  backButtonLink: {
    textDecoration: "none",
  },
}));

const MobileCode = () => {
  const classes = myStyles();
  return (
    <Container maxWidth="xs">
      <Box textAlign="center" className={classes.container}>
        <Link to="#">
          <Box className={classes.imageBox}>
            <img src={padLock} className={classes.image} alt="Refresh-Button" />
          </Box>
        </Link>
        <Typography variant="h4" className={classes.heading}>
          Enter 4 digit code we have sent you
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          +123 000 123 455 084
        </Typography>
      </Box>
      <form>
        <TextField
          variant="outlined"
          type="email"
          margin="normal"
          id="email"
          InputProps={{
            className: `${classes.textField} , ${classes.textFieldMarginRight}`,
          }}
        />
        <TextField
          variant="outlined"
          type="email"
          margin="normal"
          id="email"
          InputProps={{
            className: `${classes.textField} , ${classes.textFieldMarginRight}`,
          }}
        />
        <TextField
          variant="outlined"
          type="email"
          margin="normal"
          id="email"
          InputProps={{
            className: `${classes.textField} , ${classes.textFieldMarginRight}`,
          }}
        />
        <TextField
          variant="outlined"
          type="email"
          margin="normal"
          id="email"
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

export default MobileCode;
