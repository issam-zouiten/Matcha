import React from 'react';
import Hink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

var style = {
  backgroundColor: "#FFFFFF",
  borderTop: "1px solid #989898",
  textAlign: "center",
  padding: "10px",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
//   width: '100%',
}

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Hink color="inherit" href="#">
            MATCHA
          </Hink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}

const Footer = () => {
  return(
    <div>
      <div style={phantom}/>
      <div style={style}>
        <Copyright />
      </div>  
    </div>      
  );
}

export default Footer;