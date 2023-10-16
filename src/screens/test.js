import React, { useState } from "react";
import {
  Box,
  Button,
  Popover,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { makeStyles } from "@mui/styles";

const myStyles = makeStyles((theme) => ({
  // textField: {
  //   margin: "0px",
  //   paddinLeft: "0px !important",
  // },
  ListButton: {
    backgroundColor: "#1b1d2b !important",
    height: "70px",
  },
}));

const countries = [
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  // Add more countries as needed
];

const NumberInput = () => {
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
    <>
      <Box display="flex" padding={4}>
        <Box style={{ border: "1px solid #2d2f3d", borderRadius: "4px" }}>
          <Button
            onClick={handleClick}
            sx={{
              // backgroundColor: "#1b1d2b !important",
              background: "#1b1d2b",
              width: "120px",
              height: "52px",
            }}
          >
            {selectedCountry === "" ? "US" : `Selected: ${selectedCountry}`}
            <KeyboardArrowDownOutlinedIcon sx={{ marginLeft: "25px" }} />
          </Button>
          <TextField
            value={countryText}
            sx={{
              "& fieldset": { border: "none" },
              borderRadius: "5px",
              height: "50px",
            }}
            onChange={(e) => setCountryText(e.target.value)}
            InputProps={
              {
                // className: classes.textField,
              }
            }
          />
        </Box>
      </Box>
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
    </>
  );
};

export default NumberInput;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Popover,
//   List,
//   ListItem,
//   ListItemText,
//   TextField,
// } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const myStyles = makeStyles((theme) => ({
//   // textField: {
//   //   margin: "0px",
//   //   paddinLeft: "0px !important",
//   // },
//   ListButton: {
//     backgroundColor: "#1b1d2b !important",
//     height: "70px",
//   },
// }));

// const countries = [
//   { name: "United States", code: "+1" },
//   { name: "United Kingdom", code: "+44" },
//   { name: "Canada", code: "+1" },
//   // Add more countries as needed
// ];

// const NumberInput = () => {
//   const classes = myStyles();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [countryText, setCountryText] = useState("");

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country.code);
//     setCountryText(country.name);
//     handleClose();
//   };

//   return (
//     <>
//       <Box display="flex" padding={4}>
//         <TextField
//           value={countryText}
//           style={{
//             backgroundColor: "yellow",
//             marginLeft: 0,
//           }}
//           onChange={(e) => setCountryText(e.target.value)}
//           InputProps={{
//             // className: classes.textField,
//             startAdornment: (
//               <Button
//                 onClick={handleClick}
//                 sx={{
//                   // backgroundColor: "#1b1d2b !important",
//                   background: "red",
//                   width: "100px",
//                   height: "60px",
//                 }}
//               >
//                 {selectedCountry === "" ? "US" : `Selected: ${selectedCountry}`}
//               </Button>
//             ),
//           }}
//         />
//       </Box>
//       <Popover
//         open={Boolean(anchorEl)}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//       >
//         <List>
//           {countries.map((country, index) => (
//             <ListItem
//               button
//               key={index}
//               onClick={() => handleCountrySelect(country)}
//             >
//               <ListItemText primary={`${country.name} (${country.code})`} />
//             </ListItem>
//           ))}
//         </List>
//       </Popover>
//     </>
//   );
// };

// export default NumberInput;

// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Popover,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// const countries = [
//   { name: "United States", code: "+1" },
//   { name: "United Kingdom", code: "+44" },
//   { name: "Canada", code: "+1" },
//   // Add more countries as needed
// ];

// const NumberInput = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country.code);
//     handleClose();
//   };

//   return (
//     <Box>
//       <Button onClick={handleClick} sx={{ border: "1px dashed red" }}>
//         {selectedCountry === ""
//           ? "Select Country Code"
//           : `Selected: ${selectedCountry}`}
//       </Button>
//       <Popover
//         open={Boolean(anchorEl)}
//         anchorEl={anchorEl}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "center",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "center",
//         }}
//       >
//         <List>
//           {countries.map((country, index) => (
//             <ListItem
//               button
//               key={index}
//               onClick={() => handleCountrySelect(country)}
//             >
//               <ListItemText primary={`${country.name} (${country.code})`} />
//             </ListItem>
//           ))}
//         </List>
//       </Popover>
//     </Box>
//   );
// };

// export default NumberInput;
