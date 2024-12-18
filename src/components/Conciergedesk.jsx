  import React, { useState } from "react";
  import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Divider,
    Paper,
    List,
    ListItem,
    ListItemText,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
  } from "@mui/material";
  import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

  const requests = [
    { id: "120002", title: "Full Cleaning", price: "₹1200", time: "9 AM", date: "23-11-2024", assignee: "Raj Aggarwal" },
    { id: "120003", title: "Dog Walk", price: "₹100", time: "9 AM", date: "23-11-2024", assignee: "Raj Aggarwal" },
    { id: "120004", title: "Guest Pick", price: "₹200", time: "9 AM", date: "23-11-2024", assignee: "Manish Mishra" },
    { id: "120005", title: "Full Cleaning", price: "₹1200", time: "9 AM", date: "23-11-2024", assignee: "Anna Murphy" },
    { id: "120006", title: "Full Cleaning", price: "₹1200", time: "9 AM", date: "23-11-2024", assignee: "Anna Murphy" },
  ];

  const calendarEvents = [
    { id: "120002", title: "Quick Clean", day: "Mon", time: "11 AM - 12 PM", color: "#e0e0e0" },
    { id: "120003", title: "Dog Walk", day: "Thu", time: "12 PM - 1 PM", color: "#6a1b9a" },
    { id: "120005", title: "Dog Walk", day: "Thu", time: "2 PM - 3 PM", color: "#6a1b9a" },
    { id: "120004", title: "Guest Pick", day: "Sat", time: "1 PM - 2 PM", color: "#9e9e9e" },
    { id: "120006", title: "Guest Pick", day: "Sun", time: "1 PM - 2 PM", color: "#9e9e9e" },
  ];

  const Dashboard = () => {
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (request) => {
      setSelectedRequest(request);
      setOpen(true);
    };

    const handleClose = () => {
      setSelectedRequest(null);
      setOpen(false);
    };

    return (
      <Box display="flex" height="100vh" bgcolor="#f9f9f9">
        {/* Sidebar */}
        <Paper sx={{ width: 300, p: 2, display: "flex", flexDirection: "column", boxShadow: 2 }}>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Requests
          </Typography>
          <Box display="flex" justifyContent="space-between" borderBottom={1} borderColor="#e0e0e0" mb={2}>
            <Button color="secondary">New</Button>
            <Button>Assigned</Button>
            <Button>Completed</Button>
          </Box>
          <List>
            {requests.map((request) => (
              <ListItem
                key={request.id}
                sx={{ border: "1px solid #e0e0e0", borderRadius: 1, mb: 1, cursor: "pointer" }}
                onClick={() => handleOpen(request)}
              >
                <ListItemText
                  primary={
                    <Typography fontWeight="bold">
                      {request.id} <Chip label={request.title} size="small" sx={{ ml: 1 }} />
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="textSecondary">
                        {request.time} : {request.date}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {request.assignee}
                      </Typography>
                    </>
                  }
                />
                <Typography variant="body2" fontWeight="bold">
                  {request.price}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Calendar Section */}
        <Box flexGrow={1} p={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              December 2024
            </Typography>
            <Button variant="outlined" startIcon={<CalendarTodayIcon />}>
              Week
            </Button>
          </Box>

          {/* Calendar Grid */}
          <Grid container spacing={1} sx={{ height: "100%" }}>
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
              <Grid item xs key={day} sx={{ border: "1px solid #e0e0e0", minHeight: 120 }}>
                <Typography variant="subtitle2" align="center" bgcolor="#f5f5f5" p={0.5} fontWeight="bold">
                  {day} {index + 9}
                </Typography>
                {calendarEvents
                  .filter((event) => event.day === day)
                  .map((event) => (
                    <Card
                      key={event.id}
                      sx={{
                        bgcolor: event.color,
                        color: "#fff",
                        m: 0.5,
                        boxShadow: 2,
                        borderRadius: 1,
                      }}
                    >
                      <CardContent sx={{ p: 1 }}>
                        <Typography variant="body2" fontWeight="bold">
                          {event.id}
                        </Typography>
                        <Typography variant="caption">{event.title}</Typography>
                        <Typography variant="caption" display="block">
                          {event.time}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
              </Grid>
            ))}
          </Grid>
        </Box>
{/* Popup for Request Details */}
<Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
  {selectedRequest && (
    <>
      <DialogTitle fontWeight="bold" textAlign="center" sx={{ bgcolor: "#f5f5f5" }}>
        Ticket ID: {selectedRequest.id}
      </DialogTitle>
      <DialogContent dividers>
        <Box mb={2}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {selectedRequest.title}
          </Typography>
          <Typography variant="body1">
            <strong>Time:</strong> {selectedRequest.time}
          </Typography>
          <Typography variant="body1">
            <strong>Date:</strong> {selectedRequest.date}
          </Typography>
          <Typography variant="body1">
            <strong>Price:</strong> {selectedRequest.price}
          </Typography>
          <Typography variant="body1" mb={1}>
            <strong>Assignee:</strong> {selectedRequest.assignee}
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
          <Typography variant="body2" color="green" fontWeight="bold">
            {selectedRequest.assignee} is available between 9AM to 10AM
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: "none", fontWeight: "bold", bgcolor: "#000" }}
          onClick={() => {
            console.log("Accepted & Assigned:", selectedRequest.id);
            handleClose();
          }}
        >
          Accept & Assign
        </Button>
      </DialogActions>
    </>
  )}
</Dialog>

      </Box>
    );
  };

  export default Dashboard;
  