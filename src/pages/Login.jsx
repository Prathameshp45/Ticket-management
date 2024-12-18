import React, { useState } from "react";
import { TextField, Button, Box, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.png"; // Make sure to provide the correct path to your image
import logo from "../assets/logo.png"; // Path to your logo image

const LoginForm = () => {
  const navigate = useNavigate();

  // Static values for mobile number and OTP
  const [mobileNumber, setMobileNumber] = useState("123456789");
  const [otp, setOtp] = useState("1234");

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Grid container sx={{ height: "100vh"  }}>
      {/* Left Section with Image */}
      <Grid
        item
        xs={15}
        md={6}
        sx={{
          display: { xs: "none", md: "block" }, // Hide on smaller screens
          backgroundImage: `url(${login})`, // Correctly reference the image
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>

      {/* Right Section with Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          paddingRight: "20px",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 4,
            width: "100%",
            maxWidth: 400,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Logo Image */}
          <Box component="img" 
            src={logo} // Update with the correct path to your logo image
            alt="Client Logo" 
            sx={{
              width: "100px", // Adjust the width of the logo as per your requirement
              height: "auto",
              marginBottom: 3,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }} 
          />

          {/* Login Form */}
          <Box component="form" onSubmit={handleSignIn} noValidate>
            <TextField
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
              name="mobileNumber"
              margin="normal"
              variant="outlined"
              value={mobileNumber} // Static value
              InputProps={{
                sx: {
                  borderRadius: "20px",
                  backgroundColor: "#f1f3f5",
                },
              }}
            />

            <TextField
              required
              fullWidth
              id="otp"
              label="OTP"
              name="otp"
              type="password"
              margin="normal"
              variant="outlined"
              value={otp} // Static value
              InputProps={{
                sx: {
                  borderRadius: "20px",
                  backgroundColor: "#f1f3f5",
                },
              }}
            />

            {/* Sign In Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Sign In
            </Button>
          </Box>

          {/* Help Link */}
          <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 2,
              color: "#007bff",
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": { color: "#0056b3" },
            }}
            onClick={() => navigate("/help")}
          >
            Need help?
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
