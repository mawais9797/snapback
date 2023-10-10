import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Link } from "react-router-dom";

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
    color: "white", // Set the color to white when checked
  },
  checkbox: {
    color: "#323446",
    transform: "scale(1.5)",
  },
  termsAndPolicyLinks: {
    color: "#596570",
  },
  signUpButton: {
    backgroundColor: "#7b68ee",
    height: "50px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#aa9ff2",
      opacity: "0.7",
    },
  },
  loginLink: {
    color: "#2e3a48",
    textDecoration: "none",
  },
}));

const SignupMUI = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    console.log("here", isChecked);
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
            placeholder="9he95*8P#fsC"
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
            placeholder="**************"
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
          <Checkbox
            // className={classes.checkbox}
            className={isChecked ? classes.checkedCheckbox : classes.checkbox}
            onChange={handleCheckboxChange}
          />{" "}
          <span className={classes.termsAndPolicyLinks}>I Agree with</span>{" "}
          <Link to="#" className={classes.termsAndPolicyLinks}>
            Terms
          </Link>{" "}
          <span className={classes.termsAndPolicyLinks}>and</span>{" "}
          <Link to="#" className={classes.termsAndPolicyLinks}>
            Privacy Policy
          </Link>
          <br />
          <br />
          <Button
            variant="contained"
            fullWidth
            className={classes.signUpButton}
          >
            Sign up
          </Button>
          <br />
          <br />
          <p className={classes.loginLink}>
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
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   InputLabel,
//   TextField,
//   Typography,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
// import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
// import { Link } from "react-router-dom";

// const SignupMUI = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };
//   return (
//     <Box sx={{ margin: "70px 0px 0px 430px", width: "400px" }}>
//       <Box sx={{ marginBottom: "30px", paddingLeft: "115px" }}>
//         <Typography variant="h2" style={{ paddingLeft: "35px" }}>
//           Sign Up
//         </Typography>
//         <Typography variant="subtitle1" style={{ color: "#596579" }}>
//           Enter your details to continue
//         </Typography>
//       </Box>
//       <form>
//         <InputLabel
//           htmlFor="fullName"
//           style={{ color: "#A3ACBA", marginBottom: "-10px" }}
//         >
//           Full name
//         </InputLabel>
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           id="fullName"
//           placeholder="Name surname"
//           InputProps={{
//             style: {
//               backgroundColor: "#161827",
//               border: "1px solid #2d2f3d",
//               borderRadius: "5px",
//               marginBottom: "15px",
//             },
//           }}
//         />
//         <br />
//         <InputLabel
//           htmlFor="userEmail"
//           style={{ color: "#A3ACBA", marginBottom: "-10px" }}
//         >
//           Email
//         </InputLabel>
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           id="userEmail"
//           placeholder="Enter your email"
//           InputProps={{
//             style: {
//               backgroundColor: "#161827",
//               border: "1px solid #2d2f3d",
//               borderRadius: "5px",
//               marginBottom: "15px",
//             },
//           }}
//         />
//         <br />
//         <InputLabel
//           htmlFor="username"
//           style={{ color: "#A3ACBA", marginBottom: "-10px" }}
//         >
//           Username
//         </InputLabel>
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           id="username"
//           placeholder="Create your username"
//           InputProps={{
//             style: {
//               backgroundColor: "#161827",
//               border: "1px solid #2d2f3d",
//               borderRadius: "5px",
//               marginBottom: "15px",
//             },
//           }}
//         />
//         <br />
//         <InputLabel
//           htmlFor="password"
//           style={{ color: "#A3ACBA", marginBottom: "-10px" }}
//         >
//           Password
//         </InputLabel>
//         <TextField
//           type={showPassword ? "text" : "password"}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           id="password"
//           placeholder="Enter your password"
//           InputProps={{
//             style: {
//               backgroundColor: "#161827",
//               border: "1px solid #2d2f3d",
//               borderRadius: "5px",
//             },
//             endAdornment: (
//               <Button
//                 onClick={togglePasswordVisibility}
//                 style={{ minWidth: "auto" }}
//               >
//                 {showPassword ? (
//                   <VisibilityOutlinedIcon style={{ color: "#2e3a48" }} />
//                 ) : (
//                   <VisibilityOffOutlinedIcon style={{ color: "#2e3a48" }} />
//                 )}
//               </Button>
//             ),
//           }}
//           FormHelperTextProps={{
//             style: {
//               color: "#87929E",
//               fontSize: "14px",
//               marginTop: "5px",
//               marginLeft: "2px",
//               marginBottom: "15px",
//             },
//           }}
//           helperText="Must be at least 8 characters, letters, and numbers"
//         />
//         <InputLabel
//           htmlFor="confirmPassword"
//           style={{ color: "#A3ACBA", marginBottom: "-10px" }}
//         >
//           Confirm password
//         </InputLabel>
//         <TextField
//           type={showConfirmPassword ? "text" : "password"}
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           id="confirmPassword"
//           placeholder="Re-enter your password"
//           InputProps={{
//             style: {
//               backgroundColor: "#161827",
//               border: "1px solid #2d2f3d",
//               borderRadius: "5px",
//             },
//             endAdornment: (
//               <Button
//                 onClick={toggleConfirmPasswordVisibility}
//                 style={{ minWidth: "auto" }}
//               >
//                 {showConfirmPassword ? (
//                   <VisibilityOutlinedIcon style={{ color: "#2e3a48" }} />
//                 ) : (
//                   <VisibilityOffOutlinedIcon style={{ color: "#2e3a48" }} />
//                 )}
//               </Button>
//             ),
//           }}
//           FormHelperTextProps={{
//             style: {
//               color: "#87929E",
//               fontSize: "14px",
//               marginTop: "5px",
//               marginLeft: "2px",
//               marginBottom: "15px",
//             },
//           }}
//           helperText="Must match with the first field"
//         />
//         <br />
//         <Checkbox style={{ color: "#323446", transform: "scale(1.5)" }} />{" "}
//         <span style={{ color: "#596570" }}>I Agree with</span>{" "}
//         <Link to="#" style={{ color: "#2e3a48" }}>
//           Terms
//         </Link>{" "}
//         <span style={{ color: "#596570" }}>and</span>{" "}
//         <Link to="#" style={{ color: "#2e3a48" }}>
//           Privacy Policy
//         </Link>
//         <br />
//         <br />
//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             backgroundColor: "#7b68ee",
//             height: "50px",
//             fontWeight: "bold",
//             "&:hover": {
//               backgroundColor: "#aa9ff2",
//               opacity: "0.7",
//             },
//           }}
//         >
//           Sign up
//         </Button>
//         <br />
//         <br />
//         <p
//           style={{
//             color: "#87929E",
//             fontSize: "14px",
//             marginTop: "5px",
//             marginLeft: "90px",
//           }}
//         >
//           Already have an account?{" "}
//           <Link to="#" style={{ color: "#2e3a48", textDecoration: "none" }}>
//             Log in
//           </Link>
//         </p>
//       </form>
//     </Box>
//   );
// };

// export default SignupMUI;
