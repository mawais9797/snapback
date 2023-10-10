import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <>
      <Box sx={{ padding: "70px 0px 0px 500px" }}>
        <Box sx={{ marginBottom: "30px", paddingLeft: "100px" }}>
          <Typography variant="h3" style={{ paddingLeft: "50px" }}>
            Sign Up
          </Typography>
          <Typography variant="subtitle1" style={{ color: "#596579" }}>
            Enter your details to continue
          </Typography>
        </Box>
        <from>
          <label htmlFor="fullName" style={{ color: "#A3ACBA" }}>
            Full Name
          </label>
          <br />
          <input
            type="text"
            name="fullName"
            placeholder="Name Surname"
            id="fullName"
            style={{
              color: "#87929E",
              marginTop: "5px",
              backgroundColor: "#161827",
              border: "1px solid #2D2F3D",
              borderRadius: "5px",
              width: "400px",
              height: "40px",
            }}
          />
          <br />
          <br />
          <label htmlFor="userEmail" style={{ color: "#A3ACBA" }}>
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="userEmail"
            style={{
              color: "#87929E",
              marginTop: "5px",
              backgroundColor: "#161827",
              border: "1px solid #2D2F3D",
              borderRadius: "5px",
              width: "400px",
              height: "40px",
            }}
          />
          <br />
          <br />
          <label htmlFor="username" style={{ color: "#A3ACBA" }}>
            Username
          </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Create your username"
            id="username"
            style={{
              color: "#87929E",
              marginTop: "5px",
              backgroundColor: "#161827",
              "&:hover": {
                backgroundColor: "rgb(48 135 235)",
                opacity: "0.7",
              },
              border: "1px solid #2D2F3D",
              borderRadius: "5px",
              width: "400px",
              height: "40px",
            }}
          />
          <br />
          <br />
          <label htmlFor="password" style={{ color: "#A3ACBA" }}>
            Username
          </label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="9he95*8P#fsC"
            id="password"
            style={{
              color: "#87929E",
              marginTop: "5px",
              backgroundColor: "#161827",
              "&:hover": {
                backgroundColor: "#161827",
                opacity: "0.7",
              },
              border: "1px solid #2D2F3D",
              borderRadius: "5px",
              width: "400px",
              height: "40px",
            }}
          />
          <p style={{ color: "#87929E", fontSize: "14px", marginTop: "5px" }}>
            Must be at least 8 characters, letters, and numbers
          </p>
          <label htmlFor="username" style={{ color: "#A3ACBA" }}>
            Username
          </label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Create your username"
            id="username"
            style={{
              color: "#87929E",
              marginTop: "5px",
              backgroundColor: "#161827",
              "&:hover": {
                backgroundColor: "rgb(48 135 235)",
                opacity: "0.7",
              },
              border: "1px solid #2D2F3D",
              borderRadius: "5px",
              width: "400px",
              height: "40px",
            }}
          />
          <p style={{ color: "#87929E", fontSize: "14px", marginTop: "5px" }}>
            Must match the first field
          </p>
          <input type="checkbox" /> this is my line
          <br />
          <br />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(25 118 210)",
              width: "400px",
              height: "40px",
              "&:hover": {
                backgroundColor: "rgb(48 135 235)",
                opacity: "0.7",
              },
            }}
          >
            Contained
          </Button>
          <br />
          <br />
          <p style={{ color: "#87929E", fontSize: "14px", marginTop: "5px" }}>
            Must match the first field
          </p>
        </from>
      </Box>
    </>
  );
};

export default Signup;
