import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

import { renderPage } from './MainRender';

import {
  StatusWrapper,
  StatusText,
  AppBarWrapper,
  AppBarText,
  SidebarText,
  StyledList,
} from './SidebarElements';
import { ListItemText } from '@material-ui/core';
import { LocalMallOutlined } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#f2f2f5',
    color: 'var(--color-black)',
    boxShadow: 'none',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    border: 'none',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'var(--color-white)',

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    maxWidth: '600px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#cecece',
  },
  accountCircle: {
    color: 'var(--color-main)',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Sidebar({ profileDetail }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const history = useHistory();

  const backHome = () => {
    history.push('/');
    window.location.reload();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //reload page on mount
  function reloadPage() {
    // The last "domLoading" Time //
    var currentDocumentTimestamp = new Date(
      performance.timing.domLoading
    ).getTime();
    // Current Time //
    var now = Date.now();
    // Ten Seconds //
    var tenSec = 10 * 1000;
    // Plus Ten Seconds //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
      window.location.reload();
    } else {
    }
  }
  useEffect(() => {
    reloadPage();
  }, []);

  //set today's Date
  let today = new Date();

  today = today.toDateString();

  return (
    <div className={classes.root}>
      <AppBarWrapper>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <AppBarText bold main style={{ textAlign: 'right' }}>
              {profileDetail.shopName}
            </AppBarText>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                style={{
                  width: '400px',
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <AppBarText noWrap style={{ textAlign: 'justify', marginTop: 4 }}>
                {today}
              </AppBarText>
              <AppBarText noWrap style={{ textAlign: 'right' }}>
                <StatusWrapper>
                  <StatusText> {profileDetail.status}</StatusText>
                </StatusWrapper>
              </AppBarText>
            </div>
            <div className={classes.accountCircle}>
              <Link to="/account" style={{ color: 'var(--color-main)' }}>
                <AccountCircle style={{ fontSize: 30 }} />
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </AppBarWrapper>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <h3>Jumga</h3>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <StyledList>
          <ListItem>
            <ListItemIcon>
              <DashboardOutlinedIcon
                style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 20 }}
              />
            </ListItemIcon>
            <ListItemText>
              <SidebarText to="/dashboard">Dashboard</SidebarText>
            </ListItemText>
          </ListItem>
        </StyledList>
        <StyledList>
          <ListItem>
            <ListItemIcon>
              <LocalMallOutlined
                style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 20 }}
              />
            </ListItemIcon>
            <ListItemText>
              <SidebarText to="/my-products">Products</SidebarText>
            </ListItemText>
          </ListItem>
        </StyledList>
        <StyledList>
          <ListItem>
            <ListItemIcon>
              <PaymentIcon
                style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 20 }}
              />
            </ListItemIcon>
            <ListItemText>
              <SidebarText to="/orders">Orders</SidebarText>
            </ListItemText>
          </ListItem>
        </StyledList>
        <StyledList>
          <ListItem>
            <ListItemIcon>
              <HomeOutlinedIcon
                style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 20 }}
              />
            </ListItemIcon>
            <ListItemText>
              <SidebarText onClick={() => backHome()}>
                Back to Home Page
              </SidebarText>
            </ListItemText>
          </ListItem>
        </StyledList>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {renderPage()}
      </main>
    </div>
  );
}
