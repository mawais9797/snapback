import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  InputLabel,
  TextField,
  Typography,
  ButtonBase,
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
import googleImage from "../images/google-icon.png";
import facebookImage from "../images/facebook-icon.png";
import twitterxImage from "../images/twitterX-icon-white.png";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "70px 0px 0px 0px",
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

  rememberMe: {
    color: "#596570",
  },
  LinkColor: {
    color: "#2e3a48",
  },

  registerLink: {
    color: "#2e3a48",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "5px",
  },
  registerLinkText: {
    color: "#596570",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "5px",
    marginLeft: "90px",
  },
  recoverPassword: {
    color: "#7b68ee",
    textDecoration: "none",
    marginLeft: "170px",
    "&:hover": {
      color: "#b3ace1",
      opacity: "0.7",
    },
  },
  socialMediaButton: {
    backgroundColor: "#27293c",
    height: "50px",
    borderRadius: "5px",
    marginTop: "15px",
    display: "flex",
  },
  socialMediaImage: {
    width: "25px",
    height: "25px",
  },
  socialMediaImageSpan: {
    marginTop: "10px",
    marginLeft: "120px",
    marginRight: "8px",
  },
  socialMediaButtonText: {
    marginTop: "15px",
  },
  socialMediaButtonLink: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#998ee1",
      opacity: "0.7",
    },
    color: "#fff",
  },
}));

const Login = () => {
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
      <Container maxWidth="xs">
        <Box className={classes.container}>
          <Box className={classes.header}>
            <Typography variant="h2" className={classes.title}>
              Log in
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Enter your details to continue
            </Typography>
          </Box>
          <form>
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
            {/* ... */}
            <CustomCheckbox style={customCheckboxStyle} />
            <span className={classes.rememberMe}>Remember me</span>{" "}
            <Link className={classes.recoverPassword}>Recover password</Link>
            <CustomButton title="Sign In" />
            <Link className={classes.socialMediaButtonLink}>
              {/* <ButtonBase
              component={Link}
              to="#"
              className={classes.socialMediaButtonLink}
              fullWidth
              TouchRippleProps={{ center: true }} // Add the TouchRippleProps for the ripple effect
            > */}
              <Box className={classes.socialMediaButton}>
                <span className={classes.socialMediaImageSpan}>
                  <img
                    src={googleImage}
                    className={classes.socialMediaImage}
                    alt="Google"
                  />
                </span>
                <span className={classes.socialMediaButtonText}>
                  {" "}
                  Continue with Google
                </span>
              </Box>
              {/* </ButtonBase> */}
            </Link>
            <Link className={classes.socialMediaButtonLink}>
              <Box className={classes.socialMediaButton}>
                <span className={classes.socialMediaImageSpan}>
                  <img
                    src={facebookImage}
                    className={classes.socialMediaImage}
                    alt="Facebook"
                  />
                </span>
                <span className={classes.socialMediaButtonText}>
                  {" "}
                  Continue with Facebook
                </span>
              </Box>
            </Link>
            <Link className={classes.socialMediaButtonLink}>
              <Box className={classes.socialMediaButton}>
                <span className={classes.socialMediaImageSpan}>
                  <img
                    src={twitterxImage}
                    className={classes.socialMediaImage}
                    alt="Google"
                  />
                </span>
                <span className={classes.socialMediaButtonText}>
                  {" "}
                  Continue with X
                </span>
              </Box>
            </Link>
            <br />
            <p className={classes.registerLinkText}>
              I don't have an account.{" "}
              <Link to="#" className={classes.registerLink}>
                Register
              </Link>
            </p>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Login;
