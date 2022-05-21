import './App.css';
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Box} from '@mui/material'
import {useState, useEffect} from 'react'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCars(data)
      })
  }, [])

  return (
    <>
    <CssBaseline/>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            Cars
          </Typography>
          <Typography>
            HOME
          </Typography>
          <Typography sx={{marginLeft: 5, marginRight:5}}>
            ADD CAR
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: 100 }}>
            <Typography variant='h4' align='center' gutterBottom>
              Cars List
            </Typography>
          </Container>
        </div>
      </main>
      <Container maxWidth="md" sx={{padding: '20px 10px'}}>
        <Grid container spacing={4}>
          {cars.map((car, i)=>(
            <Grid item key={i} xs={12} sm={6} md={4}>
            <Card sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <CardMedia
                sx={{paddingTop: '56.25%'}}
                image={car.imageUrl}
                title="Image title"
              />
              <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant='h5'>
                  {car.name}
                </Typography>
                <Typography>
                  {car.manufacturer}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size="small" color="primary">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
      {/* <footer sx={{padding: '50px 0'}}>
        <Typography variant='h6' align='center' gutterBottom>
            Footer
        </Typography>
      </footer> */}
    </>
  );
}

export default App;
