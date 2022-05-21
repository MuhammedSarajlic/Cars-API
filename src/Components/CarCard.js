import {Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material'
import { useState } from 'react'

const URL = 'https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/'

const CarCard = ({ car, setCars, cars }) => {
    const [open, setOpen] = useState(false)
    const [carData, setCarData] = useState({})

    const deleteHandler = () => {
        fetch(URL+`${car.id}`, {
            method: 'DELETE'
        })
        .then(res => {
            if(res.ok){
                console.log(res)
                console.log("Successfully deleted")
            }else{
                console.log("Error")
            }
        })
        .catch(err => console.log(err))
        
        setCars(cars.filter((el) => el.id !== car.id))
    }

    const editHandler = () => {
        fetch(URL, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: carData.name,
                manufacturer: carData.manufacturer,
                imageUrl: carData.imageUrl,
                price: carData.price,
                year: carData.year
            })
        })
        .then(res => {
            if(res.ok){
                console.log(res)
                console.log("Successfully updated")
            }else{
                console.log("Error")
            }
        })
        .catch(err => console.log(err))

        setCars(cars.map((item) => {
            if(item.id === car.id){
                return{
                    ...item,
                    name: carData.name,
                    manufacturer: carData.manufacturer,
                    imageUrl: carData.imageUrl,
                    price: carData.price,
                    year: carData.year
                }
            }
            return item
        }))
        setOpen(false)
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
                {`${car.manufacturer} ${car.name}`}
                </Typography>
                <Typography variant='subtitle2'>
                {`Year: ${car.year}`}
                </Typography>
                <Typography>
                {`Price: ${car.price} KM`}
                </Typography> 
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    setOpen(true)
                    setCarData(car)
                }} size="small" variant="contained" color="primary">Edit</Button>
                <Button onClick={deleteHandler} size="small" variant="outlined" color="error">Delete</Button>
            </CardActions>
            </Card>
        </Grid>

        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby='dialog-title'
            aria-describedby='dialog-description'
        >
            <DialogTitle id="dialog-title">
                Edit car
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description" sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField  label="Name" variant="outlined" onChange={(e) => setCarData({...carData, name: e.target.value})} value={carData.name} sx={{ width: 400, marginTop: '20px' }}/>
                    <TextField  label="Manufacturer" variant="outlined" onChange={(e) => setCarData({...carData, manufacturer: e.target.value})} value={carData.manufacturer} sx={{ marginTop: '20px' }}/>
                    <TextField  label="Image Url" variant="outlined" onChange={(e) => setCarData({...carData, imageUrl: e.target.value})} value={carData.imageUrl} sx={{ marginTop: '20px' }}/>
                    <TextField  label="Price" variant="outlined" onChange={(e) => setCarData({...carData, price: e.target.value})} value={carData.price} sx={{ marginTop: '20px' }}/>
                    <TextField  label="Year" variant="outlined" onChange={(e) => setCarData({...carData, year: e.target.value})} value={carData.year} sx={{ marginTop: '20px' }}/>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{padding: '0 25px 20px 0'}}>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={editHandler} variant='contained'>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default CarCard