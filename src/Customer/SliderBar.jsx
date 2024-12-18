// import React, { useState } from 'react';
// import {
//     Box,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Badge,
//     Divider,
//     Typography,
//     Collapse,
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import RecommendIcon from '@mui/icons-material/Recommend';
// import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
// import AlignHorizontalCenterRoundedIcon from '@mui/icons-material/AlignHorizontalCenterRounded';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import SettingsIcon from '@mui/icons-material/Settings';

// const Sidebar = () => {
//     const [choOpen, setChoOpen] = useState(false);

//     const handleChoToggle = () => {
//         setChoOpen(!choOpen);
//     };

//     return (
//         <Box
//             sx={{
//                 width: 250,
//                 height: '100vh',
//                 backgroundColor: '#fff',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 borderRight: '1px solid #e0e0e0',
//                 boxShadow: '1px 0 5px rgba(0, 0, 0, 0.1)',
//             }}
//         >
//             {/* Logo Section */}
//             <Box sx={{ p: 2, textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                     LOGO
//                 </Typography>
//                 <Typography variant="subtitle2" color="text.secondary">
//                     Help Desk
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary">
//                     Customer Name
//                 </Typography>
//             </Box>

//             {/* Main Navigation */}
//             <List>
//                 {/* Activity */}
//                 <ListItem button component={Link} to="/activity">
//                     <ListItemIcon>
//                         <Badge badgeContent={12} color="error">
//                             <NotificationsNoneOutlinedIcon />
//                         </Badge>
//                     </ListItemIcon>
//                     <ListItemText primary="Activity" sx={{ color: 'black' }} />
//                 </ListItem>
//                 <Divider />

//                 {/* Help Desk */}
//                 <ListItem button component={Link} to="/help-desk">
//                     <ListItemIcon>
//                         <DashboardIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Help Desk" sx={{ color: 'black' }} />
//                 </ListItem>
//                 <Divider />

//                 {/* CHO Section */}
//                 <ListItem button onClick={handleChoToggle}>
//                     <ListItemIcon>
//                         <RecommendIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="CHO" />
//                     {choOpen ? <ExpandLess /> : <ExpandMore />}
//                 </ListItem>
//                 <Collapse in={choOpen} timeout="auto" unmountOnExit>
//                     <List component="div" disablePadding>
//                         <ListItem button sx={{ pl: 4 }} component={Link} to="/concierge-desk">
//                             <ListItemIcon>
//                                 <HubTwoToneIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Concierge Desk" />
//                         </ListItem>
//                         <ListItem button sx={{ pl: 4 }} component={Link} to="/rent-buy-desk">
//                             <ListItemIcon>
//                                 <AlignHorizontalCenterRoundedIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Rent / Buy Desk" />
//                         </ListItem>
//                         <ListItem button sx={{ pl: 4 }} component={Link} to="/referral-desk">
//                             <ListItemIcon>
//                                 <PeopleAltIcon />
//                             </ListItemIcon>
//                             <ListItemText primary="Referral Desk" />
//                         </ListItem>
//                     </List>
//                 </Collapse>
//                 <Divider />
//             </List>

//             {/* Settings */}
//             <Box sx={{ mt: 'auto', p: 2 }}>
//                 <ListItem button component={Link} to="/settings">
//                     <ListItemIcon>
//                         <SettingsIcon />
//                     </ListItemIcon>
//                     <ListItemText primary="Settings" sx={{ color: 'black' }} />
//                 </ListItem>
//             </Box>
//         </Box>
//     );
// };

// export default Sidebar;
import React, { useState } from 'react';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Badge,
    Divider,
    Typography,
    Collapse,
} from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RecommendIcon from '@mui/icons-material/Recommend';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import AlignHorizontalCenterRoundedIcon from '@mui/icons-material/AlignHorizontalCenterRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
    const [choOpen, setChoOpen] = useState(false);

    const handleChoToggle = () => {
        setChoOpen(!choOpen);
    };

    return (
        <Box
            sx={{
                width: 250,
                height: '100vh',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid #e0e0e0',
                boxShadow: '1px 0 5px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Logo Section */}
            <Box sx={{ p: 2, textAlign: 'left', borderBottom: '1px solid #e0e0e0' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold'  }}>
                    LOGO
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{  pl:12}}>
                   <b> Help Desk            </b>
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{pl:12}}>
                    Customer Name
                </Typography>
            </Box>
<br></br>
            {/* Main Navigation */}
            <List>
                {/* Activity */}
                <ListItem button component={Link} to="/activity">
                    <ListItemIcon>
                        
                        <Badge badgeContent={12} color="error">
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="Activity" sx={{ color: 'black' }} />
                </ListItem>
                <br />
                <Divider />

<br></br>
                {/* Help Desk */}
                <ListItem button component={Link} to="/help-desk">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Help Desk" sx={{ color: 'black' }} />
                </ListItem>   
                <br />      
                <Divider />                                     
                <br />
                {/* CHO Section */}         
                <ListItem button onClick={handleChoToggle}>
                    <ListItemIcon>
                        <RecommendIcon />
                    </ListItemIcon>
                    <ListItemText primary="CHO" />
                    {choOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <br />
                <Collapse in={choOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button sx={{ pl: 4, color: 'black' }} component={Link} to="/concierge-desk">
                            <ListItemIcon>
                                <HubTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Concierge Desk" />
                            <br />
                            <br />
                            
                        </ListItem>
                        <ListItem button sx={{ pl: 4 , color: 'black'}} component={Link} to="/rent-buy-desk">
                            <ListItemIcon>
                                <AlignHorizontalCenterRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Rent / Buy Desk" />
                        </ListItem>
                        
                        
                        <ListItem button sx={{ pl: 4 , color: 'black'}} component={Link} to="/referral-desk">
                            <ListItemIcon>
                                <PeopleAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Referral Desk" />
                        </ListItem>
                    </List>
                </Collapse>
                <br />
                <Divider />
            </List>

            {/* Settings */}
            <Box sx={{ mt: 'auto', p: 2 }}>
                <ListItem button component={Link} to="/settings">
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" sx={{ color: 'black' }} />
                </ListItem>
            </Box>
        </Box>
    );
};

export default Sidebar;
 