import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";

const SignupSaving = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Box sx={{ margin: "70px 0px 0px 430px", width: "400px" }}>
      <Box sx={{ marginBottom: "30px", paddingLeft: "115px" }}>
        <Typography variant="h2" style={{ paddingLeft: "35px" }}>
          Sign Up
        </Typography>
        <Typography variant="subtitle1" style={{ color: "#596579" }}>
          Enter your details to continue
        </Typography>
      </Box>
      <form>
        <InputLabel
          htmlFor="fullName"
          style={{ color: "#A3ACBA", marginBottom: "-10px" }}
        >
          Full name
        </InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          id="fullName"
          placeholder="Name surname"
          InputProps={{
            style: {
              backgroundColor: "#161827",
              border: "1px solid #2d2f3d",
              borderRadius: "5px",
              marginBottom: "15px",
            },
          }}
        />
        <br />
        <InputLabel
          htmlFor="userEmail"
          style={{ color: "#A3ACBA", marginBottom: "-10px" }}
        >
          Email
        </InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          id="userEmail"
          placeholder="Enter your email"
          InputProps={{
            style: {
              backgroundColor: "#161827",
              border: "1px solid #2d2f3d",
              borderRadius: "5px",
              marginBottom: "15px",
            },
          }}
        />
        <br />
        <InputLabel
          htmlFor="username"
          style={{ color: "#A3ACBA", marginBottom: "-10px" }}
        >
          Username
        </InputLabel>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          id="username"
          placeholder="Create your username"
          InputProps={{
            style: {
              backgroundColor: "#161827",
              border: "1px solid #2d2f3d",
              borderRadius: "5px",
              marginBottom: "15px",
            },
          }}
        />
        <br />
        <InputLabel
          htmlFor="password"
          style={{ color: "#A3ACBA", marginBottom: "-10px" }}
        >
          Password
        </InputLabel>
        <TextField
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          margin="normal"
          id="password"
          placeholder="Enter your password"
          InputProps={{
            style: {
              backgroundColor: "#161827",
              border: "1px solid #2d2f3d",
              borderRadius: "5px",
            },
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
          FormHelperTextProps={{
            style: {
              color: "#87929E",
              fontSize: "14px",
              marginTop: "5px",
              marginLeft: "2px",
              marginBottom: "15px",
            },
          }}
          helperText="Must be at least 8 characters, letters, and numbers"
        />
        <InputLabel
          htmlFor="confirmPassword"
          style={{ color: "#A3ACBA", marginBottom: "-10px" }}
        >
          Confirm password
        </InputLabel>
        <TextField
          type={showConfirmPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          margin="normal"
          id="confirmPassword"
          placeholder="Re-enter your password"
          InputProps={{
            style: {
              backgroundColor: "#161827",
              border: "1px solid #2d2f3d",
              borderRadius: "5px",
            },
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
          FormHelperTextProps={{
            style: {
              color: "#87929E",
              fontSize: "14px",
              marginTop: "5px",
              marginLeft: "2px",
              marginBottom: "15px",
            },
          }}
          helperText="Must match with the first field"
        />
        <br />
        <Checkbox style={{ color: "#323446", transform: "scale(1.5)" }} />{" "}
        <span style={{ color: "#596570" }}>I Agree with</span>{" "}
        <Link to="#" style={{ color: "#2e3a48" }}>
          Terms
        </Link>{" "}
        <span style={{ color: "#596570" }}>and</span>{" "}
        <Link to="#" style={{ color: "#2e3a48" }}>
          Privacy Policy
        </Link>
        <br />
        <br />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#7b68ee",
            height: "50px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#aa9ff2",
              opacity: "0.7",
            },
          }}
        >
          Sign up
        </Button>
        <br />
        <br />
        <p
          style={{
            color: "#87929E",
            fontSize: "14px",
            marginTop: "5px",
            marginLeft: "90px",
          }}
        >
          Already have an account?{" "}
          <Link to="#" style={{ color: "#2e3a48", textDecoration: "none" }}>
            Log in
          </Link>
        </p>
      </form>
    </Box>
  );
};

export default SignupSaving;
//====================================================================

// import React, { useState } from "react";
// import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

// const countries = [
//   { name: "United States", code: "+1" },
//   { name: "United Kingdom", code: "+44" },
//   { name: "Canada", code: "+1" },
//   // Add more countries as needed
// ];

// const NumberInput = () => {
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleChange = (event) => {
//     setSelectedCountry(event.target.value);
//   };

//   return (
//     <Box padding={3}>
//       <FormControl>
//         <InputLabel>Select Country Code</InputLabel>
//         <Select
//           value={selectedCountry}
//           onChange={handleChange}
//           style={{ border: "0px dashed red", width: "250px" }}
//         >
//           {countries.map((country, index) => (
//             <MenuItem key={index} value={country.code}>
//               {country.name} ({country.code})
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };

// export default NumberInput;

// import { Box } from "@mui/material";
// import React from "react";

// const NumberInput = () => {
//   return <Box></Box>;
// };

// export default NumberInput;

// import React from "react";
// import { Select, MenuItem } from "@mui/material";
// import styled from "styled-components";

// const StyledSelect = styled(Select)(({ theme }) => ({
//   "&:hover": {
//     backgroundColor: "green",
//   },
//   // "&:first-of-type": {
//   //   backgroundColor: "aqua",
//   // },
//   // "&.Mui-selected": {
//   //   backgroundColor: "red",
//   //   "&:hover": {
//   //     backgroundColor: "yellow",
//   //   },
//   // },

//   // backgroundColor: "red",

//   width: "170px",
//   border: "3px solid #141b2d",
// }));

// function NumberInput() {
//   return (
//     <div>
//       <StyledSelect>
//         <MenuItem value="select value" selected>
//           Select the value
//         </MenuItem>
//         <MenuItem value="item1">Item 1</MenuItem>
//         <MenuItem value="item2">Item 2</MenuItem>
//         <MenuItem value="item3">Item 3</MenuItem>
//       </StyledSelect>
//     </div>
//   );
// }

// export default NumberInput;

// import React, { useState } from "react";
// import {
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Box,
//   Button,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import styled from "styled-components";

// const CountryCodes = [
//   { code: "+1", label: "United States (+1)" },
//   { code: "+44", label: "United Kingdom (+44)" },
//   { code: "+91", label: "India (+91)" },
//   // Add more country codes as needed
// ];
// const useStyles = makeStyles((theme) => ({
//   inputLabel: {
//     color: "#A3ACBA",
//     margin: "50px",
//   },
//   textField: {
//     backgroundColor: "#161827",
//     border: "1px solid #2d2f3d",
//     borderRadius: "5px",
//     marginBottom: "15px",
//     "&:hover": {
//       border: "1px solid #2d2f3d",
//     },
//   },
//   borderlessSelect: {
//     border: "1px red",
//   },
// }));

// const NumberInput = () => {
//   const StyledSelect = styled(Select)(({ theme }) => ({
//     "&:hover": {
//       backgroundColor: "green",
//     },
//     "&:first-of-type": {
//       backgroundColor: "aqua",
//     },
//     "&.Mui-selected": {
//       backgroundColor: "red",
//       "&:hover": {
//         backgroundColor: "yellow",
//       },
//     },
//   }));
//   const classes = useStyles();
//   const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const handleCountryCodeChange = (event) => {
//     setSelectedCountryCode(event.target.value);
//   };

//   const handlePhoneNumberChange = (event) => {
//     setPhoneNumber(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const fullNumber = selectedCountryCode + phoneNumber;
//     console.log("Full Phone Number: " + fullNumber);
//     // You can perform further actions with the phone number
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Box display="flex" alignItems="center" padding={4}>
//         <StyledSelect>
//           <MenuItem value="pak">Pakistan</MenuItem>
//           <MenuItem value="India">India</MenuItem>
//           <MenuItem value="England">England</MenuItem>
//         </StyledSelect>
//         Hello eamil is here
//         <InputLabel htmlFor="email" className={classes.inputLabel}>
//           Email
//         </InputLabel>
//         <TextField
//           variant="outlined"
//           type="email"
//           fullWidth
//           margin="normal"
//           id="email"
//           placeholder="Enter your email"
//           InputProps={{
//             className: classes.textField,
//             startAdornment: (
//               <>
//                 <Select
//                   value={selectedCountryCode}
//                   onChange={handleCountryCodeChange}
//                   className={classes.borderlessSelect}
//                   // InputProps={{ border: "3px solid red" }}
//                   sx={{
//                     border: "none",
//                     // " .MuiSelect-select": {
//                     //   border: "none", // Remove the default border
//                     // },
//                     // "& .MuiSelect-selectMenu": {
//                     //   padding: "8px 16px", // Adjust the padding as needed
//                     //   backgroundColor: "#1b1d2b", // Background color
//                     // },
//                     width: "250px",
//                     backgroundColor: "1b1d2b",
//                   }}
//                 >
//                   {CountryCodes.map((country) => (
//                     <MenuItem key={country.code} value={country.code}>
//                       {country.label}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </>
//             ),
//           }}
//         />
//         <FormControl sx={{ m: 1, minWidth: 120 }}>
//           <Select
//             value={age}
//             onChange={handleChange}
//             displayEmpty
//             style={{ border: "1px dashed red" }}
//             inputProps={{
//               "aria-label": "Without label",
//               " .MuiSelect-select": {
//                 border: "1px solid red", // Remove the default border
//               },
//             }}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//           {/* <FormHelperText>Without label</FormHelperText> */}
//         </FormControl>
//       </Box>
//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default NumberInput;
