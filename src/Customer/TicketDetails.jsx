import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardContent, LinearProgress, Grid, IconButton, Chip, Divider } from "@mui/material";
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp'; // Import the star icon

const TicketDetails = () => {  
  // Get ticket ID from URL parameters
  const { ticketId } = useParams();

  // Here you would typically fetch the ticket data using the ticketId
  // For the purpose of this example, we'll use dummy data
  const ticket = {
    id: ticketId,
    title: "Plumbing > B",
    time: "11:00 AM",
    date: "23 Sept 24",
    description: "Kitchen tap leaking",
    location: "B-702",
    assignee: "Pawan Pawra",
    createdBy: "Jane Smith",
    status: "Open", // Ticket status can be "Open" or "Closed"
    responses: 1,
    progress: 75, // The progress percentage
    progressLabels: ["Requested", "Assigned", "In Progress", "Resolved", "Closed"],
    rating: 4, // Add a rating field (1-5)
    imageUrl: "https://www.shutterstock.com/image-photo/broken-street-window-shards-glass-600nw-647457895.jpg" // Sample image URL (replace with real one)
  };

  // Calculate the progress index based on the progress percentage
  const progressIndex = Math.floor((ticket.progress / 100) * ticket.progressLabels.length);

  // Function to render star icons for rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <IconButton key={index} disabled>
        <StarBorderPurple500SharpIcon
          sx={{
            color: index < rating ? "#ffb300" : "#e0e0e0", // Yellow for filled, gray for empty
            fontSize: 30,
          }}
        />
      </IconButton>
    ));
  };

  return (
    
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Ticket ID: <b>{ticket.id}</b>
      </Typography>
    
      
      {/* Ticket Details */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h8" color="text.primary">
            Ticket ID: <b>{ticket.id}</b>
          </Typography>
          {/* Status: Open or Closed */}
    <Typography variant="body1" sx={{ mt: 1, pl:160 }}>
            Status: 
            <Chip
              label={ticket.status}
              color={ticket.status === "Open" ? "success" : "error"}
              sx={{ ml: 1, fontWeight: "bold" }}
            />
          </Typography>
          
          <Typography variant="h6"><b>{ticket.title}</b></Typography>
          <Typography variant="body1" color="text.secondary">
            {ticket.date} at {ticket.time}
            <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.8 }}>
              <b>{ticket.description}</b>
            </Typography>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Location: <b>{ticket.location}</b>
            <Divider sx={{ my: 1 }} />
          </Typography>
          {/* Image Section */}
      <Box sx={{ mb: 2, display: "flex", justifyContent: "center", pl: 130 }}>
        <img src={ticket.imageUrl} alt="" style={{ width: "100%", maxWidth: "200px", borderRadius: "2px" }} />
      </Box>

          <Divider sx={{ my: 1 }} />
          <Typography variant="body1" sx={{ mt: 1 }}>
            Assignee: <b>{ticket.assignee}</b>
          </Typography>
          
      
          <Typography variant="body1" sx={{ mt: 1 }}>
            Responses: <b>{ticket.responses}</b>
          </Typography>
        </CardContent>
      </Card>

      {/* Progress Bar and Progress Details */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Ticket Progress: {ticket.progress}%
        </Typography>

        {/* Progress Bar */}
        <LinearProgress
          variant="determinate"
          value={ticket.progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: ticket.progress === 100 ? "#4caf50" : "#ff9800", // Green if complete, orange otherwise
            },
          }}
        />

        {/* Progress Labels */}
        <Grid container spacing={1} sx={{ mt: 2 }} justifyContent="space-between">
          {ticket.progressLabels.map((label, index) => (
            <Grid item key={index} xs={2}>
              <Typography
                variant="caption"
                color={ticket.progress >= ((index + 1) * (100 / ticket.progressLabels.length)) ? "text.primary" : "text.secondary"}
                sx={{
                  fontWeight: ticket.progress >= ((index + 1) * (100 / ticket.progressLabels.length)) ? "bold" : "normal",
                  textAlign: "center",
                }}
              >
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bottom Rating Section */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
        {renderStars(ticket.rating)}
      </Box>
    </Box>
  );
};

export default TicketDetails;
