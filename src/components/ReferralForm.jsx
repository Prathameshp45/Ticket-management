import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    relation: "",
    contactNumber: "",
    email: "",
    termsAccepted: false,
  });

  const relations = ["Friend", "Family", "Colleague", "Other"]; // Example relation options

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "auto",
        padding: 3,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Refer your friends and family to be part of Krisala...
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        And avail exciting cash rewards from Krisala{" "}
        <Box component="span" sx={{ cursor: "pointer" }}>
          ℹ️
        </Box>
      </Typography>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <TextField
          fullWidth
          label="Enter full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Select Relation */}
        <TextField
          select
          fullWidth
          label="Select Relation"
          name="relation"
          value={formData.relation}
          onChange={handleChange}
          margin="normal"
          required
        >
          {relations.map((relation, index) => (
            <MenuItem key={index} value={relation}>
              {relation}
            </MenuItem>
          ))}
        </TextField>

        {/* Contact Number */}
        <TextField
          fullWidth
          label="Enter contact number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          margin="normal"
          required
        />

        {/* Email Address */}
        <TextField
          fullWidth
          label="Enter email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          type="email"
          required
        />

        {/* Terms & Conditions */}
        <FormControlLabel
          control={
            <Checkbox
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              color="primary"
            />
          }
          label={
            <Typography variant="body2">
              I accept the{" "}
              <Link href="#" underline="hover">
                terms
              </Link>{" "}
              and{" "}
              <Link href="#" underline="hover">
                conditions
              </Link>
              .
            </Typography>
          }
        />

        {/* Submit Button */}
        <Box mt={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ReferralForm;
