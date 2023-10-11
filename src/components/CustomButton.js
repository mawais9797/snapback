import { Box, Button } from "@mui/material";
import React from "react";

const CustomButton = ({ title }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Button
        size="large"
        variant="contained"
        fullWidth
        color="success"
        sx={{
          backgroundColor: "#7b68ee",
          height: "50px",
          fontWeight: "bold",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#aa9ff2",
            opacity: "0.7",
          },
        }}
      >
        {title}
      </Button>
    </Box>
  );
};

export default CustomButton;
