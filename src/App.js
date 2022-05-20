import './App.css';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Box} from '@mui/material'

function App() {
  return (
    <>
    <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
            News
          </Typography>
          <Typography>
            HOME
          </Typography>
          <Typography sx={{marginLeft: 5, marginRight:10}}>
            ADD CAR
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
