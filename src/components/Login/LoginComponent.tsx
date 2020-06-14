import React, { useState, useEffect } from 'react';
import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  Theme,
  Grid,
  Button,
  TextField,
  Typography
} from '@material-ui/core';
import { Brand } from '../../interfaces/Brand';

// In real-world app I'd rather use formik+yup but just to simplify validate.js
const schema = {
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 128,
      minimum: 6,
      message: 'must be at least 5 characters'
    }
  }
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
  },
  TopbarSpacer: theme.mixins.toolbar,
  grid: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100%'
  },
  form: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    flexBasis: 700,
  },
  textField: {
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(3)
  },
  signInButton: {
    margin: theme.spacing(2, 0),
    minHeight: '60px',
    display: 'flex',
    flex: '1 0 auto'
  },
  helperText: {
    position: 'absolute',
    bottom: 0,
  },
  errorMessage: {
    color: theme.palette.error.main
  },
  successMessage: {
    color: theme.palette.success.main
  },
  result: {
    minHeight: '50px',
  }
}));

type Props = {
  doLogin: (email: string, password: string, brandId: number) => void;
  isLoading: boolean;
  brand: Brand,
};

const LoginComponent = (props: Props) => {
  const { doLogin, isLoading, brand } = props;
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      email: '',
      password: ''
    },
    touched: {},
    errors: {
      email: {},
      password: {}
    }
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(state => ({
      ...state,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);


  const handleChange = event => {
    event.persist();

    setFormState(state => ({
      ...state,
      values: {
        ...state.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...state.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSignIn = event => {
    event.preventDefault();
    doLogin(formState.values.email, formState.values.password, brand.id);
  };

  const hasError = field =>
    !!(formState.touched[field] && formState.errors[field]);

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          item
          lg={7}
          xs={12}
        >
          <form onSubmit={handleSignIn} className={classes.form}>
            <Typography variant="h1">
              Login
            </Typography>
            <TextField
              className={classes.textField}
              error={hasError('email')}
              fullWidth
              helperText={
                hasError('email') ? formState.errors.email[0] : null
              }
              label="Email address"
              name="email"
              onChange={handleChange}
              type="text"
              value={formState.values.email || ''}
              variant="outlined"
              FormHelperTextProps={{ classes: { root: classes.helperText } }}
            />
            <TextField
              className={classes.textField}
              error={hasError('password')}
              fullWidth
              helperText={
                hasError('password') ? formState.errors.password[0] : null
              }
              label="Password"
              name="password"
              onChange={handleChange}
              type="password"
              value={formState.values.password || ''}
              variant="outlined"
              FormHelperTextProps={{ classes: { root: classes.helperText } }}
            />
            <Button
              className={classes.signInButton}
              color="primary"
              disabled={!formState.isValid || isLoading}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              {
                !isLoading ? 'Sign in' : <CircularProgress color="secondary" />
              }
            </Button>
          </form>
          <div className={classes.result}>
            {
              brand.username &&
              <Typography align="center" className={classes.successMessage}>
                Login success - username: {brand.username}
              </Typography>
            }
            {
              brand.loginError &&
              <Typography align="center" className={classes.errorMessage}>
                Login error - {brand.loginError}
              </Typography>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );

};

export default LoginComponent;
