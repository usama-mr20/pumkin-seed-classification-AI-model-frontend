import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              <strong>Pumpkin seeds classification</strong>
            </Typography>
            <Button color='inherit'>About</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
