import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  TextField, 
  Divider, 
  Button 
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation

const Settings = () => {
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const navigate = useNavigate(); // Hook to navigate to another route

  // Handle phone number change
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  // Save settings (you can connect this to an API or database)
  const handleSaveSettings = () => {
    console.log('Settings saved:', { phoneNumber });
    alert('Settings saved successfully!');
  };

  // Handle logout (redirect to login page or handle session cleanup)
  const handleLogout = () => {
    // Clear any session data or tokens if necessary
    // localStorage.clear(); or sessionStorage.clear();
    
    // Navigate to login page
    navigate('/');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Settings
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Account Settings */}
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Account Settings
      </Typography>
      <List>
        {/* Update Phone Number */}
        <ListItem>
          <ListItemText primary="Phone Number" secondary="Update your phone number" />
          <TextField 
            value={phoneNumber} 
            onChange={handlePhoneNumberChange} 
            variant="outlined" 
            size="small" 
            sx={{ width: '60%' }} 
          />
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />

      {/* Save Settings Button */}
      <Box sx={{ mt: 3 }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSaveSettings}
          sx={{ marginBottom: 2 }}
        >
          Save Settings
        </Button>
      </Box>

      {/* Logout Button */}
      <Box sx={{ mt: 3 }}>
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
