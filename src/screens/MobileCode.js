import React, { useRef } from "react";
import {
  Box,
  InputLabel,
  TextField,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import padLock from "../images/padlock-50.png";
import { makeStyles } from "@mui/styles";
import CustomButton from "../components/CustomButton";

const myStyles = makeStyles(() => ({
  container: {
    marginTop: "60px",
    width: "400px",
    height: "436",
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
    marginLeft: "150px",
  },
  heading: {
    paddingBottom: "20px",
    height: "90px",
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "40px",
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
    paddingLeft: "13px",
    "&:hover": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        WebkitAppearance: "none !important",
        margin: 0,
      },
    },
    "& input": {
      inputMode: "numeric",
      pattern: "[0-9]*",
    },
  },
  textFieldMarginLeft: {
    marginLeft: "5px",
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
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleInputChange = (event, index) => {
    // Remove non-numeric characters
    const value = event.target.value.replace(/\D/g, "");

    if (value.length === 1) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else if (value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    }

    // Set the cleaned value back to the input
    event.target.value = value;
  };

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
          margin="normal"
          id="digit-0"
          InputProps={{
            className: `${classes.textField} ${classes.textFieldMarginRight}`,
          }}
          inputProps={{
            maxLength: 1,
          }}
          inputRef={inputRefs[0]}
          onInput={(e) => handleInputChange(e, 0)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="digit-1"
          InputProps={{
            className: `${classes.textField} ${classes.textFieldMarginRight}`,
          }}
          inputProps={{
            maxLength: 1,
          }}
          inputRef={inputRefs[1]}
          onInput={(e) => handleInputChange(e, 1)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="digit-2"
          InputProps={{
            className: `${classes.textField} ${classes.textFieldMarginRight}`,
          }}
          inputProps={{
            maxLength: 1,
          }}
          inputRef={inputRefs[2]}
          onInput={(e) => handleInputChange(e, 2)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          id="digit-3"
          InputProps={{
            className: classes.textField,
          }}
          inputProps={{
            maxLength: 1,
          }}
          inputRef={inputRefs[3]}
          onInput={(e) => handleInputChange(e, 3)}
        />
        <CustomButton title="Continue" />
        <Box textAlign="center">
          <Link to="#" className={classes.backButtonLink}>
            <Typography variant="body1" className={classes.backButton}>
              Go back
            </Typography>
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default MobileCode;

// import React, { useRef } from "react";
// import {
//   Box,
//   InputLabel,
//   TextField,
//   Typography,
//   Grid,
//   Container,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import padLock from "../images/padlock-50.png";
// import { makeStyles } from "@mui/styles";
// import CustomButton from "../components/CustomButton";

// const myStyles = makeStyles(() => ({
//   container: {
//     marginTop: "60px",
//   },
//   image: {
//     width: "25px",
//     height: "25px",
//   },
//   imageBox: {
//     backgroundColor: "#f78b8b",
//     padding: "22px",
//     width: "70px",
//     height: "70px",
//     borderRadius: "40px",
//     marginBottom: "20px",
//     marginLeft: "140px",
//   },
//   heading: {
//     paddingBottom: "20px",
//   },
//   body1: {
//     color: "#596570",
//     paddingBottom: "20px",
//   },
//   textField: {
//     backgroundColor: "#161827",
//     border: "1px solid #2d2f3d",
//     borderRadius: "5px",
//     marginBottom: "0px",
//     height: "80px",
//     width: "80px",
//     fontSize: "40px !important",
//     textAlign: "center !important",
//     paddingLeft: "10px",
//     "& input": {
//       inputMode: "numeric",
//       pattern: "[0-9]*",
//     },
//   },
//   textFieldMarginLeft: {
//     marginLeft: "0px",
//   },
//   textFieldMarginRight: {
//     marginRight: "25px",
//   },
//   backButton: {
//     color: "#7b68ee",
//     paddingTop: "20px",
//   },
//   backButtonLink: {
//     textDecoration: "none",
//   },
// }));

// const MobileCode = () => {
//   const classes = myStyles();
//   const inputRefs = [useRef(), useRef(), useRef(), useRef()];

//   const handleInputChange = (event, index) => {
//     if (event.target.value.length === 1) {
//       if (index < inputRefs.length - 1) {
//         inputRefs[index + 1].current.focus();
//       }
//     } else if (event.target.value === "" && index > 0) {
//       inputRefs[index - 1].current.focus();
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box textAlign="center" className={classes.container}>
//         <Link to="#">
//           <Box className={classes.imageBox}>
//             <img src={padLock} className={classes.image} alt="Refresh-Button" />
//           </Box>
//         </Link>
//         <Typography variant="h4" className={classes.heading}>
//           Enter 4 digit code we have sent you
//         </Typography>
//         <Typography variant="body1" className={classes.body1}>
//           +123 000 123 455 084
//         </Typography>
//       </Box>
//       <form>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="digit-0"
//           InputProps={{
//             className: `${classes.textField} ${classes.textFieldMarginRight}`,
//           }}
//           inputProps={{
//             maxLength: 1,
//           }}
//           inputRef={inputRefs[0]}
//           onInput={(e) => handleInputChange(e, 0)}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="digit-1"
//           InputProps={{
//             className: `${classes.textField} ${classes.textFieldMarginRight}`,
//           }}
//           inputProps={{
//             maxLength: 1,
//           }}
//           inputRef={inputRefs[1]}
//           onInput={(e) => handleInputChange(e, 1)}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="digit-2"
//           InputProps={{
//             className: `${classes.textField} ${classes.textFieldMarginRight}`,
//           }}
//           inputProps={{
//             maxLength: 1,
//           }}
//           inputRef={inputRefs[2]}
//           onInput={(e) => handleInputChange(e, 2)}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="digit-3"
//           InputProps={{
//             className: `${classes.textField}`,
//           }}
//           inputProps={{
//             maxLength: 1,
//           }}
//           inputRef={inputRefs[3]}
//           onInput={(e) => handleInputChange(e, 3)}
//         />
//         <CustomButton title="Continue" />
//         <Box textAlign="center">
//           <Link to="#" className={classes.backButtonLink}>
//             <Typography variant="body1" className={classes.backButton}>
//               Go back
//             </Typography>
//           </Link>
//         </Box>
//       </form>
//     </Container>
//   );
// };

// export default MobileCode;

// import React, { useRef } from "react";
// import {
//   Box,
//   InputLabel,
//   TextField,
//   Typography,
//   Grid,
//   Container,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import padLock from "../images/padlock-50.png";
// import { makeStyles } from "@mui/styles";
// import CustomButton from "../components/CustomButton";

// const myStyles = makeStyles(() => ({
//   container: {
//     marginTop: "60px",
//   },
//   image: {
//     width: "25px",
//     height: "25px",
//   },
//   imageBox: {
//     backgroundColor: "#f78b8b",
//     padding: "22px",
//     width: "70px",
//     height: "70px",
//     borderRadius: "40px",
//     marginBottom: "20px",
//     marginLeft: "140px",
//   },
//   heading: {
//     paddingBottom: "20px",
//   },
//   body1: {
//     color: "#596570",
//     paddingBottom: "20px",
//   },
//   textField: {
//     backgroundColor: "#161827",
//     border: "1px solid #2d2f3d",
//     borderRadius: "5px",
//     marginBottom: "0px",
//     height: "80px",
//     width: "80px",
//     fontSize: "40px !important",
//     textAlign: "center !important",
//     "&:hover": {
//       "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
//         WebkitAppearance: "none !important",
//         margin: 0,
//       },
//     },

//     "& input": {
//       inputMode: "numeric",
//       pattern: "[0-9]*",
//     },
//   },
//   textFieldMarginLeft: {
//     marginLeft: "5px",
//   },
//   textFieldMarginRight: {
//     marginRight: "15px",
//     marginLeft: "3px",
//   },
//   backButton: {
//     color: "#7b68ee",
//     paddingTop: "20px",
//   },
//   backButtonLink: {
//     textDecoration: "none",
//   },
// }));

// const MobileCode = () => {
//   const classes = myStyles();
//   const inputRefs = [useRef(), useRef(), useRef(), useRef()];

//   const handleInputChange = (event, index) => {
//     if (event.target.value.length === 1) {
//       if (index < inputRefs.length - 1) {
//         inputRefs[index + 1].current.focus();
//       }
//     } else if (event.target.value === "" && index > 0) {
//       inputRefs[index - 1].current.focus();
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box textAlign="center" className={classes.container}>
//         <Link to="#">
//           <Box className={classes.imageBox}>
//             <img src={padLock} className={classes.image} alt="Refresh-Button" />
//           </Box>
//         </Link>
//         <Typography variant="h4" className={classes.heading}>
//           Enter 4 digit code we have sent you
//         </Typography>
//         <Typography variant="body1" className={classes.body1}>
//           +123 000 123 455 084
//         </Typography>
//       </Box>
//       <form>
//         {Array.from({ length: 4 }).map((_, index) => (
//           <TextField
//             key={index}
//             variant="outlined"
//             margin="normal"
//             id={`digit-${index}`}
//             InputProps={{
//               className: `${classes.textField} ${classes.textFieldMarginRight}`,
//             }}
//             inputProps={{
//               maxLength: 1,
//             }}
//             inputRef={inputRefs[index]}
//             onInput={(e) => handleInputChange(e, index)}
//           />
//         ))}
//         <CustomButton title="Continue" />
//         <Box textAlign="center">
//           <Link to="#" className={classes.backButtonLink}>
//             <Typography variant="body1" className={classes.backButton}>
//               Go back
//             </Typography>
//           </Link>
//         </Box>
//       </form>
//     </Container>
//   );
// };

// export default MobileCode;

// import {
//   Box,
//   InputLabel,
//   TextField,
//   Typography,
//   Grid,
//   Container,
// } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import padLock from "../images/padlock-50.png";
// import { makeStyles } from "@mui/styles";
// import CustomButton from "../components/CustomButton";

// const myStyles = makeStyles(() => ({
//   container: {
//     marginTop: "60px",
//   },
//   image: {
//     width: "25px",
//     height: "25px",
//   },
//   imageBox: {
//     backgroundColor: "#f78b8b",
//     padding: "22px",
//     width: "70px",
//     height: "70px",
//     borderRadius: "40px",
//     marginBottom: "20px",
//     marginLeft: "140px",
//   },
//   heading: {
//     paddingBottom: "20px",
//   },
//   body1: {
//     color: "#596570",
//     paddingBottom: "20px",
//   },
//   textField: {
//     backgroundColor: "#161827",
//     border: "1px solid #2d2f3d",
//     borderRadius: "5px",
//     marginBottom: "0px",
//     height: "80px",
//     width: "80px",
//     fontSize: "40px !important",
//     textAlign: "center !important",
//     "&:hover": {
//       "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
//         WebkitAppearance: "none !important",
//         margin: 0,
//       },
//     },

//     "& input": {
//       inputMode: "numeric",
//       pattern: "[0-9]*",
//     },
//   },
//   textFieldMarginLeft: {
//     marginLeft: "10px",
//   },
//   textFieldMarginRight: {
//     marginRight: "25px",
//   },
//   backButton: {
//     color: "#7b68ee",
//     paddingTop: "20px",
//   },
//   backButtonLink: {
//     textDecoration: "none",
//   },
// }));

// const MobileCode = () => {
//   const classes = myStyles();

//   // Function to handle input and allow only numeric values
//   const handleNumericInput = (event) => {
//     event.target.value = event.target.value.replace(/\D/g, "");
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box textAlign="center" className={classes.container}>
//         <Link to="#">
//           <Box className={classes.imageBox}>
//             <img src={padLock} className={classes.image} alt="Refresh-Button" />
//           </Box>
//         </Link>
//         <Typography variant="h4" className={classes.heading}>
//           Enter 4 digit code we have sent you
//         </Typography>
//         <Typography variant="body1" className={classes.body1}>
//           +123 000 123 455 084
//         </Typography>
//       </Box>
//       <form>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: `${classes.textField} , ${classes.textFieldMarginRight}`,
//           }}
//           onInput={handleNumericInput}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: `${classes.textField} , ${classes.textFieldMarginRight}`,
//           }}
//           onInput={handleNumericInput}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: `${classes.textField} , ${classes.textFieldMarginRight}`,
//           }}
//           onInput={handleNumericInput}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: classes.textField,
//           }}
//           onInput={handleNumericInput}
//         />
//         <CustomButton title="Reset password" />
//         <Box textAlign="center">
//           <Link to="#" className={classes.backButtonLink}>
//             <Typography variant="body1" className={classes.backButton}>
//               Back to Log in
//             </Typography>
//           </Link>
//         </Box>
//       </form>
//     </Container>
//   );
// };

// export default MobileCode;

// import {
//   Box,
//   InputLabel,
//   TextField,
//   Typography,
//   Grid,
//   Container,
// } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import padLock from "../images/padlock-50.png";
// import { makeStyles } from "@mui/styles";
// import CustomButton from "../components/CustomButton";

// const myStyles = makeStyles(() => ({
//   container: {
//     marginTop: "60px",
//   },
//   image: {
//     width: "25px",
//     height: "25px",
//   },
//   imageBox: {
//     backgroundColor: "#f78b8b",
//     padding: "22px",
//     width: "70px",
//     height: "70px",
//     borderRadius: "40px",
//     marginBottom: "20px",
//     marginLeft: "140px",
//   },
//   heading: {
//     paddingBottom: "20px",
//   },
//   body1: {
//     color: "#596570",
//     paddingBottom: "20px",
//   },
//   textField: {
//     backgroundColor: "#161827",
//     border: "1px solid #2d2f3d",
//     borderRadius: "5px",
//     marginBottom: "0px",
//     height: "80px",
//     width: "80px",
//     fontSize: "40px !important",
//     textAlign: "center !important",
//     "&:hover": {
//       "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
//         WebkitAppearance: "none !important",
//         margin: 0,
//       },
//     },

//     "& input": {
//       inputMode: "numeric",
//       pattern: "[0-9]*",
//     },
//   },
//   textFieldMarginLeft: {
//     marginLeft: "10px",
//   },
//   textFieldMarginRight: {
//     marginRight: "25px",
//   },
//   backButton: {
//     color: "#7b68ee",
//     paddingTop: "20px",
//   },
//   backButtonLink: {
//     textDecoration: "none",
//   },
// }));

// const MobileCode = () => {
//   const classes = myStyles();
//   return (
//     <Container maxWidth="xs">
//       <Box textAlign="center" className={classes.container}>
//         <Link to="#">
//           <Box className={classes.imageBox}>
//             <img src={padLock} className={classes.image} alt="Refresh-Button" />
//           </Box>
//         </Link>
//         <Typography variant="h4" className={classes.heading}>
//           Enter 4 digit code we have sent you
//         </Typography>
//         <Typography variant="body1" className={classes.body1}>
//           +123 000 123 455 084
//         </Typography>
//       </Box>
//       <form>
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: `${classes.textField} , ${classes.textFieldMarginRight}`,
//           }}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: `${classes.textField} , ${classes.textFieldMarginRight}`,
//           }}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: `${classes.textField} , ${classes.textFieldMarginRight}`,
//           }}
//         />
//         <TextField
//           variant="outlined"
//           margin="normal"
//           id="email"
//           InputProps={{
//             className: classes.textField,
//           }}
//         />
//         <CustomButton title="Reset password" />
//         <Box textAlign="center">
//           <Link to="#" className={classes.backButtonLink}>
//             <Typography variant="body1" className={classes.backButton}>
//               Back to Log in
//             </Typography>
//           </Link>
//         </Box>
//       </form>
//     </Container>
//   );
// };

// export default MobileCode;
