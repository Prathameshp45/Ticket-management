import React, { useState } from 'react';
import { Box, Typography, Divider, Grid, Button, TextField, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TicketCard from '../Customer/TicketCard';
import { tickets as initialTickets } from '../Customer/tickets'; 
import SlideBar from '../Customer/SliderBar';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTickets, setFilteredTickets] = useState(initialTickets);

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter tickets based on search query
    filterTickets(query);
  };

  // Filter tickets based on search query
  const filterTickets = (query) => {
    // Filter tickets based on query (case-insensitive)
    const updatedTickets = initialTickets.filter((ticket) => {
      return (
        ticket.title.toLowerCase().includes(query.toLowerCase()) ||
        ticket.id.toLowerCase().includes(query.toLowerCase()) ||
        ticket.assignee.toLowerCase().includes(query.toLowerCase()) ||
        ticket.location.toLowerCase().includes(query.toLowerCase())
      );
    });

    setFilteredTickets(updatedTickets); // Update the filtered tickets
  };

  // Handle sorting (e.g., by title or date)
  const handleSortChange = () => {
    const sortedTickets = [...filteredTickets].sort((a, b) => {
      // Example sort by title (you can modify it to sort by other properties)
      return a.title.localeCompare(b.title);
    });

    setFilteredTickets(sortedTickets); // Update the filtered tickets after sorting
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <SlideBar />

      {/* Main Content (Dashboard) */}
      <Box
        sx={{
          flex: 1,
          padding: 3,
          overflowY: 'auto', // Ensures the content is scrollable
        }}
      >
        {/* Advertisement Bar */}
        <Box
          sx={{
            // position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            paddingBottom: 2,
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h8">Dashboard </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'black', color: 'white' }}
              onClick={() => navigate('/add-ticket')} 
            >
              + Add New
            </Button>
          </Box>

          {/* Advertisement with Image */}
          <Box
            sx={{
              padding: '10px',
              marginBottom: '20px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="add.png" // Replace with your image URL
              alt="Advertisement"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>

          <Divider />
        </Box>

        {/* Sticky Search Bar and Filter Section */}
        <Box
          sx={{
            // position: 'sticky',
            top: '110px', // Adjusted for space above
            zIndex: 2,
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            mb: 2,
            padding: '10px',
          }}
        >
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={8} md={6}>
              <TextField
                label="Search Tickets"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearchChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="Search by title, ID, assignee, or location"
              />
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Button
                variant="outlined"
                sx={{ width: '100%' }}
                onClick={handleSortChange}
                startIcon={<SortIcon />}
              >
                Sort
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket, index) => (
                <TicketCard key={index} ticket={ticket} />
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                No tickets found.
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;



// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Divider,
//   Grid,
//   Button,
//   TextField,
//   InputAdornment,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import TicketCard from '../Customer/TicketCard';
// import { tickets as initialTickets } from '../Customer/tickets';
// import SlideBar from '../Customer/SliderBar';
// import SearchIcon from '@mui/icons-material/Search';
// import SortIcon from '@mui/icons-material/Sort';


// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredTickets, setFilteredTickets] = useState(initialTickets);
//   const [filterStatus, setFilterStatus] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const ticketsPerPage = 5;

//   // Handle search input change
//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     filterTickets(query, filterStatus);
//   };

//   // Handle status filter change
//   const handleStatusChange = (event) => {
//     const status = event.target.value;
//     setFilterStatus(status);
//     filterTickets(searchQuery, status);
//   };

//   // Filter tickets based on query and status
//   const filterTickets = (query, status) => {
//     const updatedTickets = initialTickets.filter((ticket) => {
//       const matchesQuery =
//         ticket.title.toLowerCase().includes(query.toLowerCase()) ||
//         ticket.id.toLowerCase().includes(query.toLowerCase()) ||
//         ticket.assignee.toLowerCase().includes(query.toLowerCase()) ||
//         ticket.location.toLowerCase().includes(query.toLowerCase());
//       const matchesStatus = status === '' || ticket.status === status; // Check status filter
//       return matchesQuery && matchesStatus;
//     });
//     setFilteredTickets(updatedTickets);
//     setCurrentPage(1); // Reset to first page on filter
//   };

//   // Handle sorting (e.g., by title)
//   const handleSortChange = () => {
//     const sortedTickets = [...filteredTickets].sort((a, b) =>
//       a.title.localeCompare(b.title)
//     );
//     setFilteredTickets(sortedTickets);
//   };

//   // Pagination logic
//   const indexOfLastTicket = currentPage * ticketsPerPage;
//   const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
//   const currentTickets = filteredTickets.slice(
//     indexOfFirstTicket,
//     indexOfLastTicket
//   );

//   return (
//     <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row',  }, height: '100vh' }}>
//       {/* Sidebar */}
//       <Box
//         sx={{
//           flexShrink: 0,
//           width: { xs: '100%', md: '250px' },
//           height: { xs: 'auto', md: '100vh' },
//           overflowY: 'auto',
//           // position: 'sticky',
//           borderRight: { md: '1px solid #e0e0e0' },
//         }}
//       >
//         <SlideBar />
//       </Box>

//       {/* Main Content */}
//       <Box
//         sx={{
//           flex: 1,
//           padding: 2,
//           overflowY: 'auto',
//           backgroundColor: '#f9f9f9',
//         }}
//       >
//         {/* Header Section */}
//         <Box
//           sx={{
//             mb: 2,
//             display: 'flex',
//             flexDirection: { xs: 'column', sm: 'row' },
//             justifyContent: 'space-between',
//             alignItems: { xs: 'flex-start', sm: 'center' },
//           }}
//         >
//           <Typography variant="h6" sx={{ mb: { xs: 1, sm: 0 } }}>
//             Dashboard
//           </Typography>
//           <Button
//             variant="contained"
//             sx={{ backgroundColor: 'black', color: 'white' }}
//             onClick={() => navigate('/add-ticket')}
//           >
//             + Add New
//           </Button>
//         </Box>
//         <Divider />

//         {/* Statistics Section */}
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: { xs: 'column', sm: 'row' },
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             backgroundColor: '#f5f5f5',
//             padding: 2,
//             borderRadius: '8px',
//             mb: 2,
//           }}
//         >
//           <Typography variant="body1" sx={{ mb: { xs: 1, sm: 0 } }}>
//             Total Tickets: <b>{filteredTickets.length}</b>
//           </Typography>
//           <Typography variant="body1" sx={{ mb: { xs: 1, sm: 0 } }}>
//             Open Tickets:{' '}
//             <b>
//               {
//                 filteredTickets.filter((ticket) => ticket.status === 'open')
//                   .length
//               }
//             </b>
//           </Typography>
//           <Typography variant="body1">
//             Closed Tickets:{' '}
//             <b>
//               {
//                 filteredTickets.filter((ticket) => ticket.status === 'closed')
//                   .length
//               }
//             </b>
//           </Typography>
//         </Box>

//         {/* Search and Filter Section */}
//         <Box sx={{ mb: 2 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={8} md={6}>
//               <TextField
//                 label="Search Tickets"
//                 variant="outlined"
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//                 fullWidth
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 placeholder="Search by title, ID, assignee, or location"
//               />
//             </Grid>
//             <Grid item xs={12} sm={4} md={3}>
//               <TextField
//                 select
//                 // label="Filter by Status"
//                 value={filterStatus}
//                 onChange={handleStatusChange}
//                 fullWidth
//                 SelectProps={{
//                   native: true,
//                 }}
//               >
//                 <option value="">All Statuses</option>
//                 <option value="open">Open</option>
//                 <option value="in-progress">In Progress</option>
//                 <option value="closed">Closed</option>
//               </TextField>
//             </Grid>
//             <Grid item xs={12} sm={4} md={3}>
//               <Button
//                 variant="outlined"
//                 sx={{ width: '100%' }}
//                 onClick={handleSortChange}
//                 startIcon={<SortIcon />}
//               >
//                 Sort
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Tickets Section */}
//         <Grid container spacing={2}>
//           <Grid item xs={8}>
//             {currentTickets.length > 0 ? (
//               currentTickets.map((ticket, index) => (
//                 <TicketCard key={index} ticket={ticket} />
//               ))
//             ) : (
//               <Typography variant="body2" color="text.secondary">
//                 No tickets found.
//               </Typography>
//             )}
//           </Grid>
//         </Grid>

//         {/* Pagination Section */}
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             mt: 2,
//             flexDirection: { xs: 'column', sm: 'row' },
//             gap: 2,
//           }}
//         >
//           <Button
//             variant="contained"
//             disabled={currentPage === 1}
//             onClick={() => setCurrentPage((prev) => prev - 1)}
//             sx={{ width: { xs: '100%', sm: 'auto' } }}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="contained"
//             disabled={currentPage * ticketsPerPage >= filteredTickets.length}
//             onClick={() => setCurrentPage((prev) => prev + 1)}
//             sx={{ width: { xs: '100%', sm: 'auto' } }}
//           >
//             Next
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;
