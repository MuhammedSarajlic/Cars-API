import {Typography, Button, Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material'

  const edit = (e) => {
    e.preventDefault()
    console.log("Edited")
  }

const CarCard = ({ car, setCars, cars }) => {

    const deleteHandler = () => {
        fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${car.id}`, {
            method: 'DELETE'
        })
        .then(res => {
            console.log(res)
            console.log("Succesfuly deleted", car.name)
        })
        setCars(cars.filter((el) => el.id !== car.id))
    }

  return (
    <>
        <Grid item xs={12} sm={6} md={4}>
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
                <Button onClick={edit} size="small" variant="contained" color="primary">Edit</Button>
                <Button onClick={deleteHandler} size="small" variant="outlined" color="error">Delete</Button>
            </CardActions>
            </Card>
        </Grid>
    </>
  )
}

export default CarCard