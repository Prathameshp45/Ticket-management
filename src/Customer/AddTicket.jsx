    import React, { useState } from 'react';
    import { Box, Button, TextField, MenuItem, FormControl, Select, InputLabel, Typography, Radio, RadioGroup, FormControlLabel, Snackbar, Alert } from '@mui/material';
    import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
    import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';

    const ComplaintForm = () => {
    const [complaintData, setComplaintData] = useState({
        visibility: 'Community',
        category: '',
        location: '',
        description: '',
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        setComplaintData({
        ...complaintData,
        [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Submit complaint data (example action)
        console.log(complaintData);

        // Show success snackbar
        setOpenSnackbar(true);

        // Reset form
        setComplaintData({
        visibility: 'Community',
        category: '',
        location: '',
        description: '',
        });
    };

    return (
        <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, border: '1px solid #ddd', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
        </Typography>

        <form onSubmit={handleSubmit} >
            <Typography variant="subtitle1" gutterBottom   >
            Complaint Visibility
            </Typography>

            <RadioGroup
            row
            name="visibility"
            value={complaintData.visibility}
            onChange={handleChange}
            >
            <FormControlLabel
                value="Personal"
                control={<Radio />}
                label="Personal (Only Me)"
            />
            <FormControlLabel
                value="Community"
                control={<Radio />}
                label="Community (All)"
            />
            </RadioGroup>

            <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select Category</InputLabel>
            <Select
                name="category"
                value={complaintData.category}
                onChange={handleChange}
            >
                <MenuItem value="Infrastructure">Infrastructure</MenuItem>
                <MenuItem value="Sanitation">Sanitation</MenuItem>
                <MenuItem value="Safety">Safety</MenuItem>
            </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Complaint Location</InputLabel>
            <Select
                name="location"
                value={complaintData.location}
                onChange={handleChange}
            >
                <MenuItem value="Park">Park</MenuItem>
                <MenuItem value="Building">Building</MenuItem>
                <MenuItem value="Road">Road</MenuItem>
            </Select>
            </FormControl>

            <TextField
            label="Description (mandatory)"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={complaintData.description}
            onChange={handleChange}
            sx={{ mb: 2 }}
            />

            <Box sx={{ display: 'flex', mb: 2 }}>
            <Button variant="" component="label" >
                <CameraAltOutlinedIcon />
                <input type="file" hidden />
            </Button>

            <Button variant="" component="label">
                <AttachmentOutlinedIcon />
                <input type="file" hidden />
            </Button>
            </Box>

            <Button variant="contained" color="primary" type="submit" fullWidth>
            Create
            </Button>
        </form>

        {/* Snackbar for success message */}
        <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={() => setOpenSnackbar(false)}
        >
            <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: '100%' }}
            >
            Complaint submitted successfully!
            </Alert>
        </Snackbar>
        </Box>
    );
    };

    export default ComplaintForm;
