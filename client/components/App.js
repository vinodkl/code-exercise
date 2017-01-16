/**
 * Root component handles the App Template and Theme used on every page.
 **/
import React, { PropTypes } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme(darkBaseTheme);

const App = props => (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={muiTheme}>
        {props.children}
      </div>
    </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
