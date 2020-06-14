import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Theme } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SidebarNav from './components/SidebarNav';

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}));

type Props = {
  open: boolean,
  variant?: 'permanent' | 'persistent' | 'temporary';
  onClose: () => void,
  brandRoute: string
};

const Sidebar = (props: Props) => {
  const { open, variant, onClose, brandRoute } = props;

  const classes = useStyles();

  // In real-live app we'd probably need to define pages for each Brand
  // somewehere else, but  I've done it here just to simplify
  const pages = [
    {
      title: 'Oferta',
      href: `${brandRoute}`,
      icon: <DashboardIcon />
    },
    {
      title: 'Login',
      href: 'login',
      icon: <AccountBoxIcon />
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div className={classes.root}>
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

export default Sidebar;
