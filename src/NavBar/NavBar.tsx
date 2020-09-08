import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#0E0817",
    color:"#0E0817"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: " #FF9671"
  },
  appcolor: {
      
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} color="#0E0817">
      <AppBar position="static" color="transparent">
        <Toolbar>
         
          <Typography variant="h4" className={classes.title}>
          Space-X
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
