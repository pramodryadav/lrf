import * as React from 'react';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, Outlet } from 'react-router-dom';
import logo from '../../assets/images/logo-new.png';

const drawerWidth = 240;
const settings = [{title:'Logout',path:"/login"}];
function ResponsiveDrawer() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selectedMenu, setSelectedMenu] = React.useState("Home");
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const handleClickMenu = (menu) => {
        navigate(menu.path);
        setSelectedMenu(menu.title);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickAnchorMenu = (menu) => {
        navigate(menu.path)
    }

    const drawer = (
        <div>
            <Toolbar>
                <img src={logo} alt="Logo" className="sidebarLogo" />
            </Toolbar>

            <List className="listSidebar">
                {[{ title: "Home", path: "/", icon: <HomeOutlinedIcon /> },
                { title: "Contact", path: "/about", icon: <EmailOutlinedIcon /> }].map((menu, index) => (
                    <ListItem
                        key={menu.title}
                        disablePadding
                        onClick={() => handleClickMenu(menu)}
                        className={selectedMenu === menu.title ? "activeLinkSidebar" : ""}
                        sx={{
                            color: selectedMenu === menu.title ? '#ffffff' : '#fff',
                            '&:hover': { backgroundColor: 'transparent', color: '#ffffff' },
                            padding: '8px 16px', width: 'auto'
                        }}
                    >
                        <ListItemButton sx={{ justifyContent: 'center', height: '48px' }}>
                            <ListItemIcon sx={{
                                color: selectedMenu === menu.title ? '#ffffff' : '#fff',
                                '&:hover': { color: '#ffffff' }
                            }}>
                                {menu.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={menu.title}
                                sx={{
                                    color: selectedMenu === menu.title ? '#ffffff' : '#ffffff',
                                    fontWeight: 700,
                                    '&:hover': { color: '#ffffff' }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "#fff",
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="black"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, ml: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search…"
                            InputProps={{
                                startAdornment: (
                                    <SearchIcon sx={{ color: '#979797', mr: 1 }} />
                                ),
                                classes: { root: 'search-field' }
                            }}
                            sx={{ ml: 2, flexGrow: 1, maxWidth: '300px' }}
                        />
                       
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar sx={{ width: 40, height: 40, mr: 2 }} alt="Remy Sharp" />
                            </IconButton>
                     

                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: { sm: drawerWidth },
                    flexShrink: { sm: 0 },
                    backgroundImage: "linear-gradient(25deg, #30cfd0 0%, #330867 100%)",
                }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundImage: "linear-gradient(25deg, #30cfd0 0%, #330867 100%)"
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundImage: "linear-gradient(25deg, #30cfd0 0%, #330867 100%)" // Darker color for permanent drawer
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />

            </Box>

            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting.title} onClick={()=>handleClickAnchorMenu(setting)}>
                        <Typography textAlign="center">{setting.title}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default ResponsiveDrawer;
