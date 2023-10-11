import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import CustomButton from "../components/CustomButton";
import CustomCheckbox from "../components/CustomCheckbox";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "70px 0px 0px 430px",
    width: "400px",
  },
  header: {
    marginBottom: "30px",
    paddingLeft: "115px",
  },
  title: {
    paddingLeft: "35px",
  },
  subtitle: {
    color: "#596579",
  },
  inputLabel: {
    color: "#A3ACBA",
    marginBottom: "-10px",
  },
  textField: {
    backgroundColor: "#161827",
    border: "1px solid #2d2f3d",
    borderRadius: "5px",
    marginBottom: "15px",
  },
  checkedCheckbox: {
    backgroundColor: "red",
    color: "#323446",
    transform: "scale(1.5)",
  },
  checkbox: {
    color: "#323446",
    transform: "scale(1.5)",
  },
  termsAndPolicyLinks: {
    color: "#596570",
  },
  LinkColor: {
    color: "#2e3a48",
  },
  signUpButton: {
    height: "50px",
    fontWeight: "bold",
    //  "&:hover": {
    //   backgroundColor: "#aa9ff2",
    //   opacity: "0.7",
    // },
  },
  loginLink: {
    color: "#2e3a48",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "5px",
  },
  loginLinkText: {
    color: "#596570",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "5px",
    marginLeft: "90px",
  },
}));

const SignupMUI = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [CustomStyle, setCustomStyle] = useState({});

  const handleCheckboxChange = () => {
    console.log("here", isChecked);
    setIsChecked(!isChecked);
    customCheckBoxFunction();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const customCheckBoxFunction = () => {
    const customCheckboxStyle = {
      // color: "#323446",
      color: isChecked ? "#7b68ee" : "#323446",

      transform: "scale(1.5)",
    };
    console.log("customCheckBoxFunction");

    setCustomStyle(customCheckboxStyle);
  };

  const customCheckboxStyle = {
    color: "#323446",
    // color: "#7b68ee",
    transform: "scale(1.5)",
  };

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Sign Up
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Enter your details to continue
          </Typography>
        </Box>
        <form>
          {/* ... */}
          <InputLabel htmlFor="fullName" className={classes.inputLabel}>
            Full name
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            id="fullName"
            placeholder="Name surname"
            InputProps={{
              className: classes.textField,
            }}
          />
          <InputLabel htmlFor="email" className={classes.inputLabel}>
            Email
          </InputLabel>
          <TextField
            variant="outlined"
            type="email"
            fullWidth
            margin="normal"
            id="email"
            placeholder="Enter your email"
            InputProps={{
              className: classes.textField,
            }}
          />
          <InputLabel htmlFor="username" className={classes.inputLabel}>
            Username
          </InputLabel>
          <TextField
            variant="outlined"
            fullWidth
            margin="normal"
            id="username"
            placeholder="Create your username"
            InputProps={{
              className: classes.textField,
            }}
          />{" "}
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
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            id="confimrPassword"
            placeholder="Re-Enter your password"
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
          />
          {/* ... */}
          <CustomCheckbox style={customCheckboxStyle} />
          {/* <Checkbox
            // className={classes.checkbox}
            className={isChecked ? classes.checkedCheckbox : classes.checkbox}
            onChange={handleCheckboxChange}
          />{" "} */}
          <span className={classes.termsAndPolicyLinks}>I Agree with</span>{" "}
          <Link to="#" className={classes.LinkColor}>
            Terms
          </Link>{" "}
          <span className={classes.termsAndPolicyLinks}>and</span>{" "}
          <Link to="#" className={classes.LinkColor}>
            Privacy Policy
          </Link>
          <br />
          <br />
          <CustomButton title="Sign In" />
          <br />
          <br />
          <p className={classes.loginLinkText}>
            Already have an account?{" "}
            <Link to="#" className={classes.loginLink}>
              Log in
            </Link>
          </p>
        </form>
      </Box>
    </>
  );
};

export default SignupMUI;
