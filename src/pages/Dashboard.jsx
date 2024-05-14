import React from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Container,
  Grid,
  Paper
} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Layers as LayersIcon,
  ExitToApp as ExitToAppIcon,
  AccountCircle as AccountCircleIcon
} from '@mui/icons-material';

const drawerWidth = 240;

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} sx={{ bgcolor: '#7F56D9', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', bgcolor: '#E0E0E0' },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
            bgcolor: '#7F56D9',
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {['Dashboard', 'Profile', 'Properties', 'Users', 'Reports', 'Integrations'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <AccountCircleIcon />}
                {index === 2 && <ApartmentIcon />}
                {index === 3 && <PeopleIcon />}
                {index === 4 && <BarChartIcon />}
                {index === 5 && <LayersIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          bgcolor: 'background.default',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
  <Grid container spacing={4}>
    {/* Properties Section */}
    <Grid item xs={12} md={8} lg={9}>
  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, bgcolor: '#F0F4C3' }}>
    <Typography variant="h6" sx={{ color: '#7F56D9' }}>Available Properties</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Luxury Villa in Beverly Hills" secondary="Rent: $4500/month" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Cozy Apartment Downtown" secondary="Rent: $1200/month" />
      </ListItem>
    
    </List>
  </Paper>
</Grid>
    {/* Tenant Management Section */}
    <Grid item xs={12} md={4} lg={3}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240, bgcolor: '#F0F4C3' }}>
        <Typography variant="h6" sx={{ color: '#7F56D9' }}>Recent Tenants</Typography>
        <List>
          <ListItem>
            <ListItemText primary="John Doe" secondary="Property: Luxury Villa" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Jane Smith" secondary="Property: Cozy Apartment" />
          </ListItem>
          
        </List>
      </Paper>
    </Grid>
    {/* Financial Overview Section */}
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', bgcolor: '#F0F4C3' }}>
        <Typography variant="h6" sx={{ color: '#7F56D9' }}>Financial Overview</Typography>
        <List>
          <ListItem>
            <ListItemText primary="Total Monthly Income" secondary="$8,700" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Outstanding Payments" secondary="$1,200" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Maintenance Costs" secondary="$500" />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>
</Container>
      </Box>
    </Box>
  );
}