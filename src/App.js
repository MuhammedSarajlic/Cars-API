import './App.css';
import {Typography, CssBaseline, Grid, Container} from '@mui/material'
import {useState, useEffect} from 'react'
import CarCard from './Components/CarCard'
import Header from './Components/Header'

const URL = 'https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCars(data)
      })
  }, [])

  

  return (
    <>
    <CssBaseline/>
      <Header />
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: 50, marginBottom: 50 }}>
            <Typography variant='h4' align='center' gutterBottom>
              Cars List
            </Typography>
          </Container>
        </div>
      </main>
      <Container maxWidth="md" sx={{padding: '20px 10px'}}>
        <Grid container spacing={4}>
          {cars.map((car)=>(
            <CarCard key={car.id} car={car} setCars={setCars} cars={cars} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
