import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = {
  root: {
    paddingBottom: '20px',
    width: '100%',
  },
  grow: {
    flexGrow: 1,
    fontSize: '20px',
  },
  button: {
    fontSize: '12px',
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Trainee Portal
          </Typography>
          <Button className={classes.button} color="inherit">TRAINEE</Button>
          <Button className={classes.button} color="inherit">TEXTFIELD DEMO</Button>
          <Button className={classes.button} color="inherit">INPUT DEMO</Button>
          <Button className={classes.button} color="inherit">CHILDREN DEMO</Button>
          <Button className={classes.button} color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ButtonAppBar);
