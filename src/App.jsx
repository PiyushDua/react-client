import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from './theme';
import { Trainee } from './pages';
// import { Login } from './pages';

const App = () => (
  <>
    <MuiThemeProvider theme={theme}>
      <Typography>
        {/* <Login /> */}
        <Trainee />
      </Typography>
    </MuiThemeProvider>
  </>
);

export default App;
