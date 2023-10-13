import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const CountryCodes = [
  { code: "+1", label: "United States (+1)" },
  { code: "+44", label: "United Kingdom (+44)" },
  { code: "+91", label: "India (+91)" },
  // Add more country codes as needed
];
const useStyles = makeStyles((theme) => ({
  inputLabel: {
    color: "#A3ACBA",
    margin: "50px",
  },
  textField: {
    backgroundColor: "#161827",
    border: "1px solid #2d2f3d",
    borderRadius: "5px",
    marginBottom: "15px",
    "&:hover": {
      border: "1px solid #2d2f3d",
    },
  },
  borderlessSelect: {
    border: "1px red",
  },
}));

const NumberInput = () => {
  const classes = useStyles();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setSelectedCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fullNumber = selectedCountryCode + phoneNumber;
    console.log("Full Phone Number: " + fullNumber);
    // You can perform further actions with the phone number
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center" padding={4}>
        Hello eamil is here
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
            startAdornment: (
              <>
                <Select
                  value={selectedCountryCode}
                  onChange={handleCountryCodeChange}
                  className={classes.borderlessSelect}
                  // InputProps={{ border: "3px solid red" }}
                  sx={{
                    border: "0px solid aqua",
                    // " .MuiSelect-select": {
                    //   border: "none", // Remove the default border
                    // },
                    // "& .MuiSelect-selectMenu": {
                    //   padding: "8px 16px", // Adjust the padding as needed
                    //   backgroundColor: "#1b1d2b", // Background color
                    // },
                    width: "250px",
                    backgroundColor: "1b1d2b",
                  }}
                >
                  {CountryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.label}
                    </MenuItem>
                  ))}
                </Select>
              </>
            ),
          }}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{
              "aria-label": "Without label",
              " .MuiSelect-select": {
                border: "1px solid red", // Remove the default border
              },
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default NumberInput;
