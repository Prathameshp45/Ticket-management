import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
  IconButton,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import AttachmentIcon from "@mui/icons-material/Attachment";

const RentPropertyForm = () => {
  const [lookingTo, setLookingTo] = useState("Rent / Lease");
  const [propertyType, setPropertyType] = useState("Flat / Apartment");
  const [furnishing, setFurnishing] = useState("Semi-Furnished");
  const [bhk, setBhk] = useState("2 BHK");
  const [ageOfProperty, setAgeOfProperty] = useState("1-5 years");
  const [availableFrom, setAvailableFrom] = useState("");
  const [carpetArea, setCarpetArea] = useState("");
  const [expectedRent, setExpectedRent] = useState("");

  return (
    <Box sx={{ p: 3, maxWidth: 600, margin: "auto", backgroundColor: "#fff" }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Start posting your property
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Add Basic Details
      </Typography>

      {/* Looking To */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        You are looking to ...
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={lookingTo}
        exclusive
        onChange={(e, value) => setLookingTo(value)}
      >
        <ToggleButton value="Sell">Sell</ToggleButton>
        <ToggleButton value="Rent / Lease">Rent / Lease</ToggleButton>
      </ToggleButtonGroup>

      {/* Property Type */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        And it's a ...
      </Typography>
      <RadioGroup row value="Residential">
        <FormControlLabel
          value="Residential"
          control={<Radio />}
          label="Residential"
        />
        <FormControlLabel value="Commercial" control={<Radio />} label="Commercial" />
      </RadioGroup>

      <ToggleButtonGroup
        color="primary"
        value={propertyType}
        exclusive
        onChange={(e, value) => setPropertyType(value)}
      >
        <ToggleButton value="Flat / Apartment">Flat / Apartment</ToggleButton>
        <ToggleButton value="Independent house / Villa">
          Independent house / Villa
        </ToggleButton>
        <ToggleButton value="Office">Office</ToggleButton>
        <ToggleButton value="Retail">Retail</ToggleButton>
      </ToggleButtonGroup>

      {/* Property Location */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Property Location
      </Typography>
      <FormControl fullWidth size="small">
        <InputLabel>Select Society</InputLabel>
        <Select>
          <MenuItem value="Society 1">Society 1</MenuItem>
          <MenuItem value="Society 2">Society 2</MenuItem>
          <MenuItem value="Society 3">Society 3</MenuItem>
        </Select>
      </FormControl>

      {/* Apartment Type */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Your Apartment is a
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={bhk}
        exclusive
        onChange={(e, value) => setBhk(value)}
      >
        <ToggleButton value="1 BHK">1 BHK</ToggleButton>
        <ToggleButton value="2 BHK">2 BHK</ToggleButton>
        <ToggleButton value="3 BHK">3 BHK</ToggleButton>
      </ToggleButtonGroup>

      {/* Add Area Details */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Add Area Details
      </Typography>
      <TextField
        fullWidth
        size="small"
        label="Carpet Area"
        value={carpetArea}
        onChange={(e) => setCarpetArea(e.target.value)}
        InputProps={{
          endAdornment: <Typography color="text.secondary">sq. ft.</Typography>,
        }}
      />

      {/* Furnishing */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Furnishing
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={furnishing}
        exclusive
        onChange={(e, value) => setFurnishing(value)}
      >
        <ToggleButton value="Furnished">Furnished</ToggleButton>
        <ToggleButton value="Semi-Furnished">Semi-Furnished</ToggleButton>
        <ToggleButton value="UN-Furnished">UN-Furnished</ToggleButton>
      </ToggleButtonGroup>

      {/* Age of Property */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Age of property
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={ageOfProperty}
        exclusive
        onChange={(e, value) => setAgeOfProperty(value)}
      >
        <ToggleButton value="0-1 years">0-1 years</ToggleButton>
        <ToggleButton value="1-5 years">1-5 years</ToggleButton>
        <ToggleButton value="5-10 years">5-10 years</ToggleButton>
        <ToggleButton value="10-15 years">10-15 years</ToggleButton>
      </ToggleButtonGroup>

      {/* Available From */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Available from
      </Typography>
      <TextField
        fullWidth
        size="small"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={availableFrom}
        onChange={(e) => setAvailableFrom(e.target.value)}
      />

      {/* Rent Details */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Rent Details
      </Typography>
      <TextField
        fullWidth
        size="small"
        label="Expected Rent"
        value={expectedRent}
        onChange={(e) => setExpectedRent(e.target.value)}
      />

      {/* Attach Photographs */}
      <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>
        Attach Photographs
      </Typography>
      <Box display="flex" alignItems="center" gap={1}>
        <IconButton color="primary">
          <PhotoCameraIcon />
        </IconButton>
        <IconButton color="primary">
          <AttachmentIcon />
        </IconButton>
      </Box>

      {/* Submit Button */}
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" fullWidth>
          Post Property
        </Button>
      </Box>
    </Box>
  );
};

export default RentPropertyForm;
