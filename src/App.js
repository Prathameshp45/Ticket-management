import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddTicket from './Customer/AddTicket';
import TicketDetails from './Customer/TicketDetails';
import  RentPropertyForm from './components/RentPropertyForm';
import ReferralForm  from './components/ReferralForm'
import Setting from './components/Setting';
import Login from './pages/Login';
import Activity from './components/Activity';
import HelpDesk from './components/HelpDesk';
import Conciergedesk from './components/Conciergedesk';


const App = () => {
  return (
    <Router>
      {/* <Login/> */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar - persistent across all routes */}
        {/* <Slid erBar /> */}

        {/* Main content area */}
        <div style={{ flex: 1 }}>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/add-ticket" element={<AddTicket onAddTicket={() => {}} />} />
            <Route path="/ticket-details/:ticketId" element={<TicketDetails />} />  {/* Ticket details */}


            <Route path="/rent-property" element={<RentPropertyForm />} /> {/* Rent property form */}
            <Route path="/referral-desk" element={<ReferralForm />} /> {/* Referral form */}
            <Route path="/settings" element={<Setting />} /> {/* Setting */}
            <Route path="/activity" element={<Activity />} /> {/* Activity */}
            <Route path="/help-desk" element={<HelpDesk />} /> {/* Helpdesk */}
            <Route path="/concierge-desk" element={<Conciergedesk />} /> {/* Concierge desk */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
