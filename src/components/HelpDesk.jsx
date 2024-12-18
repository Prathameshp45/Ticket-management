import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid, List, ListItem, ListItemText, Divider, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const HelpDesk = () => {
  // State to manage tickets and new ticket form
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: 'Issue with Login',
      description: 'User cannot log into their account.',
      status: 'open',
      assignee: 'John Doe',
      createdAt: '2024-12-01T09:00:00Z',
    },
    {
      id: 2,
      title: 'Page Load Error',
      description: 'The homepage fails to load on mobile devices.',
      status: 'in-progress',
      assignee: 'Jane Smith',
      createdAt: '2024-12-02T14:00:00Z',
    },
  ]);
  const [newTicket, setNewTicket] = useState({ title: '', description: '' });
  const [openForm, setOpenForm] = useState(false);

  // Function to open the new ticket form
  const handleOpenForm = () => {
    setOpenForm(true);
  };

  // Function to close the new ticket form
  const handleCloseForm = () => {
    setOpenForm(false);
  };

  // Handle new ticket form input change
  const handleInputChange = (e) => {
    setNewTicket({
      ...newTicket,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission to create a new ticket
  const handleSubmitNewTicket = () => {
    const newTicketData = {
      ...newTicket,
      id: tickets.length + 1,
      status: 'open',
      assignee: 'Unassigned',
      createdAt: new Date().toISOString(),
    };

    setTickets([...tickets, newTicketData]);
    setNewTicket({ title: '', description: '' });
    handleCloseForm();
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Help Desk
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Button to open the form to create a new ticket */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleOpenForm}
        sx={{ mb: 2 }}
      >
        Create New Ticket
      </Button>

      {/* List of Tickets */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Existing Tickets
      </Typography>
      <List>
        {tickets.map((ticket) => (
          <ListItem key={ticket.id} sx={{ mb: 1, border: '1px solid #ddd', borderRadius: '4px', padding: '10px' }}>
            <ListItemText
              primary={ticket.title}
              secondary={`Status: ${ticket.status} - Assigned to: ${ticket.assignee}`}
            />
          </ListItem>
        ))}
      </List>

      {/* Dialog for Creating New Ticket */}
      <Dialog open={openForm} onClose={handleCloseForm}>
        <DialogTitle>Create New Ticket</DialogTitle>
        <DialogContent>
          <TextField
            label="Ticket Title"
            name="title"
            variant="outlined"
            fullWidth
            value={newTicket.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={newTicket.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitNewTicket} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HelpDesk;
