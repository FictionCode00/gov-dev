import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from "react";
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { MenuItem } from '@mui/material';

export const AppDetailTabbing = () => {

  const [value, setValue] = React.useState('1');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event)
    setValue(newValue);
  };

  const handleDropdownClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (newValue: string) => {
    setAnchorEl(null);
    setValue(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
        <Box sx={{ width: '100%', typography: 'body1', backgroundColor: '#F2F2F2' }}>
      <TabContext value={value} >
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab className='detailTabbing' label="My applications" value="1" />
            <Button
            aria-controls="help-support-menu"
            aria-haspopup="true"
            className='dropdownCmn-btn'
            onClick={handleDropdownClick}
            sx={{ ml: 2 }}
            >
            My payments ⏷
          </Button>

          <Menu
            id="help-support-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={() => handleMenuItemClick('4')}>FAQ</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('5')}>Contact Us</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('6')}>Technical Support</MenuItem>
          </Menu>
            <Button
            aria-controls="help-support-menu"
            aria-haspopup="true"
            className='dropdownCmn-btn'
            onClick={handleDropdownClick}
            sx={{ ml: 2 }}
            >
            Related links ⏷
          </Button>

          <Menu
            id="help-support-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={() => handleMenuItemClick('4')}>FAQ</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('5')}>Contact Us</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('6')}>Technical Support</MenuItem>
          </Menu>
            <Button
            aria-controls="help-support-menu"
            aria-haspopup="true"
            className='dropdownCmn-btn'
            onClick={handleDropdownClick}
            sx={{ ml: 2 }}
            >
            Help and Support ⏷
          </Button>

          <Menu
            id="help-support-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={() => handleMenuItemClick('4')}>FAQ</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('5')}>Contact Us</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('6')}>Technical Support</MenuItem>
          </Menu>
            </TabList>
        </Box>
        <TabPanel className='detailTabbingContent' value="1"></TabPanel>
        <TabPanel className='detailTabbingContent' value="2"></TabPanel>
        <TabPanel className='detailTabbingContent' value="3"></TabPanel>
        <TabPanel className='detailTabbingContent' value="4"></TabPanel>
      </TabContext>
    </Box>
    )
}