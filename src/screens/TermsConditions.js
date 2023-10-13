import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CustomCheckbox from "../components/CustomCheckbox";
import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  container: {
    margin: "90px 0px 0px 430px",
    width: "400px",
  },
  heading: {
    paddingBottom: "40px",
    color: "#fff",
  },
  body1: {
    color: "#87929e",
    paddingBottom: "20px",
  },
  GoBackText: {
    color: "#7b68ee",
    paddingTop: "30px",
    paddingLeft: "170px",
  },
  GoBackTextLink: {
    textDecoration: "none",
  },
  checkBoxText: {
    color: "#596570",
  },
});

const TermsConditions = () => {
  const classes = useStyles();

  const customCheckboxStyle = {
    color: "#3c3e4f",
    transform: "scale(1.5)",
    "&:hover": {
      backgroundColor: "#fff",
      textDecoration: "none",
      opacity: "0.7",
    },
  };
  return (
    <Box className={classes.container}>
      <Typography variant="h4" className={classes.heading}>
        Terms & Conditions
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        These terms and conditions outline the rules and regulations for the use
        of Company Name's Website, located at Website.com
      </Typography>
      <Typography variant="body1" className={classes.body1}>
        By Accessing this website we assume you accept these terms and
        conditions. Do not agree to take all of the terms and conditions stated
        on this page.
      </Typography>
      <CustomCheckbox style={customCheckboxStyle} />{" "}
      <span className={classes.checkBoxText}>
        {" "}
        I agree to Terms and Conditions
      </span>
      <br />
      <CustomCheckbox style={customCheckboxStyle} />{" "}
      <span className={classes.checkBoxText}>I agree to Privacy Policy</span>
      <CustomButton title="Continue" />
      <Link to="#" className={classes.GoBackTextLink}>
        <Typography variant="body1" className={classes.GoBackText}>
          Go back
        </Typography>
      </Link>
    </Box>
  );
};

export default TermsConditions;
