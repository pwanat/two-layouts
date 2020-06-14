import React, { useState, ReactNode, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery, Theme } from '@material-ui/core';
import { Sidebar, Topbar } from './components';
import { Brand } from '../interfaces/Brand';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
  },
  wrapper: {
    height: '100%',
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%',
  }
}));

type Props = {
  brand: Brand,
  nextBrand: Brand | null,
  handleLayoutSwitch: (brand: Brand) => void;
  children: ReactNode
};

const DefaultLayout = (props: Props) => {
  const { brand, nextBrand, handleLayoutSwitch, children } = props;

  const classes = useStyles();
  const theme = useTheme<Theme>();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    // Move action to end of the stack and set active brand
    setTimeout(() => {
      handleLayoutSwitch(brand);
    }, 0);
  }, [handleLayoutSwitch, brand]);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <>
      <Helmet>
        <title>Two Layouts - {brand.name}</title>
        <meta name="description" content={`Two Layouts - ${brand.name}`} />
      </Helmet>
      <div className={`${classes.wrapper} ${isDesktop && classes.shiftContent}`}>
        <Topbar
          onSidebarOpen={handleSidebarOpen}
          switchDirection={brand.switchDirection}
          nextBrand={nextBrand}
        />
        <Sidebar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? 'persistent' : 'temporary'}
          brandRoute={brand.route}
        />
        <main className={classes.content}>
          {children}
        </main>
      </div>
    </>
  );
};

export default DefaultLayout;
