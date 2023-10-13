import {
  Box,
  InputLabel,
  TextField,
  Typography,
  Grid,
  Container,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import keyImage from "../images/key-64.png";
import { makeStyles } from "@mui/styles";
import CustomButton from "../components/CustomButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";

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
  inputLabel: {
    color: "#A3ACBA",
    fontSize: "10px",
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

const NewPassword = () => {
  const classes = myStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Container maxWidth="xs">
      <Box textAlign="center" className={classes.container}>
        <Link to="#">
          <Box className={classes.imageBox}>
            <img src={keyImage} className={classes.image} alt="Key" />
          </Box>
        </Link>
        <Typography variant="h4" className={classes.heading}>
          Set new password
        </Typography>
        <Typography variant="body1" className={classes.body1}>
          Your new password must be different to your previously used password.
        </Typography>
      </Box>
      <form>
        <InputLabel htmlFor="password" className={classes.inputLabel}>
          Password
        </InputLabel>
        <TextField
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          id="password"
          placeholder="Enter your password"
          InputProps={{
            className: classes.textField,
            endAdornment: (
              <Button
                onClick={togglePasswordVisibility}
                style={{ minWidth: "auto" }}
              >
                {showPassword ? (
                  <VisibilityOutlinedIcon style={{ color: "#2e3a48" }} />
                ) : (
                  <VisibilityOffOutlinedIcon style={{ color: "#2e3a48" }} />
                )}
              </Button>
            ),
          }}
        />{" "}
        <InputLabel htmlFor="confimrPassword" className={classes.inputLabel}>
          Confirm password
        </InputLabel>
        <TextField
          variant="outlined"
          type={showConfirmPassword ? "text" : "password"}
          fullWidth
          margin="normal"
          id="confimrPassword"
          placeholder="Re-Enter your password"
          InputProps={{
            className: classes.textField,
            endAdornment: (
              <Button
                onClick={toggleConfirmPasswordVisibility}
                style={{ minWidth: "auto" }}
              >
                {showConfirmPassword ? (
                  <VisibilityOutlinedIcon style={{ color: "#2e3a48" }} />
                ) : (
                  <VisibilityOffOutlinedIcon style={{ color: "#2e3a48" }} />
                )}
              </Button>
            ),
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

export default NewPassword;
