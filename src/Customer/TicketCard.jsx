import React from "react";
import { Box, Card, CardContent, Typography, LinearProgress, Chip, Grid, Divider, IconButton } from "@mui/material";
import { ArrowForward as ArrowForwardIcon, NearMe as NearMeIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const TicketCard = ({ ticket }) => {
  const navigate = useNavigate(); // Hook for navigation
  const progressLabels = ticket.progressLabels || ["Requested", "Assigned", "In Progress", "Resolved", "Closed"];

  // Calculate the width per step for the progress bar
  const progressStepWidth = 100 / progressLabels.length;

  // Handle navigation to the full ticket details page
  const handleNavigate = () => {
    navigate(`/ticket-details/${ticket.id}`); // Navigate to the full ticket page
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: 1,
        width: { xs: "100%", sm: "60%", md: "150%" },
        height: "305px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: 'pointer',  // Add cursor pointer to indicate the card is clickable
      }}
      onClick={handleNavigate}  // Add onClick directly to the card
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Ticket Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle2" color="text.secondary">
            Ticket ID: <b>{ticket.id}</b>
          </Typography>
          <Chip
            label={ticket.status}
            color={ticket.status === "Open" ? "success" : "error"}
            sx={{ fontWeight: "bold" }}
          />
        </Box>

        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          {ticket.title}
        </Typography>

        {/* Time, Date, and Location */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
          {ticket.time} | {ticket.date}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Location: <b>{ticket.location}</b>
        </Typography>

        
        {/* Assignee */}
        <Typography variant="body2" sx={{ mb: 1, pl: 125 }}>
          Assignee: <b>{ticket.assignee}</b>
        </Typography>

        {/* Created By: Customer Name, From Help Desk */}
        <Typography variant="body2" sx={{ mb: 1, pl: 125 }}>
          Created By: {ticket.createdBy} <br />
        </Typography>

        <Divider sx={{ my: 1 }} />

        {/* Progress Bar */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Box sx={{ width: "120%", mr: 1 }}>
            <LinearProgress
              variant="determinate"
              value={ticket.progress}
              sx={{
                height: 8,
                borderRadius: 5,
                backgroundColor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: ticket.progress === 100 ? "#4caf50" : "#ff9800",
                },
              }}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">
              {`${ticket.progress}%`}
            </Typography>
          </Box>
        </Box>

        {/* Progress Labels */}
        <Grid container spacing={1} justifyContent="space-between">
          {progressLabels.map((label, index) => (
            <Grid item key={index}  sx={{ width: "20%" }}> 
              <Typography
                variant="caption"
                color={ticket.progress >= (index + 1) * progressStepWidth ? "text.primary" : "text.secondary"}
                sx={{
                  fontWeight: ticket.progress >= (index + 1) * progressStepWidth ? "bold" : "normal",
                }}
              >
                {label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Response Section */}
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          {ticket.responses > 0 ? (
            <>
              <NearMeIcon sx={{ mr: 1, color: "text.secondary" }} />
              <Typography variant="body2" color="text.secondary">
                {ticket.responses} response{ticket.responses > 1 ? "s" : ""}
              </Typography>
            </>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No responses yet.
            </Typography>
          )}
        </Box>

        {/* Navigation Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <IconButton
            color="primary"
            onClick={handleNavigate} // Call handleNavigate when clicked
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
