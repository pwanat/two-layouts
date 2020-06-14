import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Button, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => ({
  switchBrandButtonLeft: {
    marginLeft: 'auto',
    marginRight: 12,
  },
  switchBrandButtonRight: {
    marginLeft: 12,
    marginRight: 'auto'
  },
}));

const Topbar = props => {
  const { onSidebarOpen, switchDirection, nextBrand, ...rest } = props;
  const classes = useStyles();

  return (
    <AppBar {...rest}>
      <Toolbar>
        <div>Two Layouts Material UI demo</div>
        {nextBrand &&
          <Button
            component={Link}
            to={{
              pathname: `${nextBrand.route}`,
              query: { isAnimated: true }
            }}
            variant="contained"
            color="secondary"
            className={switchDirection === 'right' ? classes.switchBrandButtonRight : classes.switchBrandButtonLeft}
          >
            Switch brand
          </Button>}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
