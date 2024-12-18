import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, Button, Divider, Typography } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Activity = () => {
  // Initial ticket state with a history of actions
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Ticket #123',
      status: 'pending',
      history: [
        { action: 'Assigned', user: 'John Doe', time: '2024-12-01T10:00:00Z' },
      ],
    },
    {
      id: 2,
      title: 'Ticket #124',
      status: 'pending',
      history: [
        { action: 'Assigned', user: 'Jane Smith', time: '2024-12-01T11:00:00Z' },
      ],
    },
    {
      id: 3,
      title: 'Ticket #125',
      status: 'accepted',
      history: [
        { action: 'Assigned', user: 'John Doe', time: '2024-12-01T12:00:00Z' },
        { action: 'Accepted', user: 'Jane Smith', time: '2024-12-01T12:30:00Z' },
      ],
    },
  ]);

  // Function to accept a ticket
  const handleAcceptTicket = (ticketId) => {
    const currentTime = new Date().toISOString(); // Get the current time
    const userName = 'Jane Smith'; // Simulating the user performing the action

    // Update the ticket status and log the acceptance action
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              status: 'accepted',
              history: [
                ...ticket.history,
                { action: 'Accepted', user: userName, time: currentTime },
              ],
            }
          : ticket
      )
    );
  };

  // Function to reject a ticket
  const handleRejectTicket = (ticketId) => {
    const currentTime = new Date().toISOString(); // Get the current time
    const userName = 'Jane Smith'; // Simulating the user performing the action

    // Update the ticket status and log the rejection action
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              status: 'rejected',
              history: [
                ...ticket.history,
                { action: 'Rejected', user: userName, time: currentTime },
              ],
            }
          : ticket
      )
    );
  };

  // Filter tickets to only show those with the status 'accepted'
  const acceptedTickets = tickets.filter((ticket) => ticket.status === 'accepted');

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Accepted Tickets & Activity History
      </Typography>

      {/* List of accepted tickets */}
      <List>
        {acceptedTickets.map((ticket) => (
          <ListItem key={ticket.id}>
            <ListItemIcon>
              <NotificationsNoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary={ticket.title}
              secondary={`Status: ${ticket.status}`}
            />
            <Box sx={{ width: '100%' }}>
              {/* Display the activity history for the ticket */}
              <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                Activity History:
              </Typography>
              {ticket.history.map((log, index) => (
                <Typography key={index} variant="body2" color="textSecondary">
                  {log.action} by {log.user} at {new Date(log.time).toLocaleString()}
                </Typography>
              ))}
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Divider */}
      <Divider sx={{ my: 2 }} />

      {/* Button to go to Help Desk */}
      <Button component={Link} to="/help-desk" variant="outlined" sx={{ width: '100%' }}>
        Go to Help Desk
      </Button>
    </Box>
  );
};

export default Activity;
