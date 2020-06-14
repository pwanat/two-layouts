import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';
import { Brand } from '../../interfaces/Brand';

type Props = {
  brand: Brand;
};

const useStyles = makeStyles((theme: Theme) => ({
  spacer: theme.mixins.toolbar,
  title: {
    marginTop: theme.spacing(3)
  },
}));


const BrandComponent = (props: Props) => {
  const { brand } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.spacer} />
      <Typography
        className={classes.title}
        variant="h1"
      >
        {brand.name}
      </Typography>
    </div>
  );
};

export default BrandComponent;
