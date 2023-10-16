import {
  Box,
  InputLabel,
  TextField,
  Typography,
  Grid,
  Container,
  Button,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import refreshImage from "../images/refresh-50.png";
import { makeStyles } from "@mui/styles";
import CustomButton from "../components/CustomButton";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

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

  textFieldBox: {
    border: "1px solid #2d2f3d",
    borderRadius: "4px",
    marginBottom: "20px",
  },
  textField: {
    backgroundColor: "#161827",
    border: "1px solid #2d2f3d",
    borderRadius: "5px",
    marginBottom: "0px",
    height: "50px",
    width: "294px",
    "& fieldset": { border: "none" },
    // borderRadius: "5px",
    // height: "50px",
  },
  backButton: {
    color: "#7b68ee",
    paddingTop: "20px",
  },
  backButtonLink: {
    textDecoration: "none",
  },
  ListButton: {
    backgroundColor: "#1b1d2b !important",
    width: "100px",
    height: "52px",
    borderRadius: "2px",
  },
}));

const countries = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  // Add more countries as needed
];

const ContactNo = () => {
  const classes = myStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [countryText, setCountryText] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.code);
    setCountryText(country.name);
    handleClose();
  };
  return (
    <Container maxWidth="xs" textAlign="center">
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
        <Box
          className={classes.textFieldBox}
          // style={{
          //   border: "1px solid #2d2f3d",
          //   borderRadius: "4px",
          //   marginBottom: "20px",
          // }}
        >
          <Button
            onClick={handleClick}
            className={classes.ListButton}
            disableRipple
          >
            {selectedCountry === "" ? "US" : `Selected: ${selectedCountry}`}
            <KeyboardArrowDownOutlinedIcon sx={{ marginLeft: "25px" }} />
          </Button>
          <TextField
            value={countryText}
            placeholder="+123 (000) 123 456 789"
            sx={{}}
            onChange={(e) => setCountryText(e.target.value)}
            className={classes.textField}
          />
        </Box>
        <CustomButton title="Continue" />
        <Box textAlign="center">
          <Link to="#" className={classes.backButtonLink}>
            <Typography variant="body1" className={classes.backButton}>
              Go back
            </Typography>
          </Link>
        </Box>
      </form>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          {countries.map((country, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleCountrySelect(country)}
            >
              <ListItemText primary={`${country.name} (${country.code})`} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </Container>
  );
};

export default ContactNo;
