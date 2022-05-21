import {Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material'
import { useState } from 'react'


const CarCard = ({ car, setCars, cars }) => {
    const [open, setOpen] = useState(false)

    const deleteHandler = () => {
        fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${car.id}`, {
            method: 'DELETE'
        })
        .then(res => {
            console.log(res)
            console.log("Successfully deleted", car.name)
        })
        setCars(cars.filter((el) => el.id !== car.id))
    }

    const editHandler = () => {
        console.log("Edited")
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
                <Button onClick={() => setOpen(true)} size="small" variant="contained" color="primary">Edit</Button>
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
                    <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: 400, marginTop: '20px' }}/>
                    <TextField id="outlined-basic" label="Manufacturer" variant="outlined" sx={{ width: 400, marginTop: '20px' }}/>
                    <TextField id="outlined-basic" label="Image Url" variant="outlined" sx={{ width: 400, marginTop: '20px' }}/>
                    <TextField id="outlined-basic" label="Price" variant="outlined" sx={{ width: 400, marginTop: '20px' }}/>
                    <TextField id="outlined-basic" label="Year" variant="outlined" sx={{ width: 400, marginTop: '20px' }}/>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{padding: '0 25px 20px 0'}}>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} variant='contained'>Submit</Button>
            </DialogActions>
        </Dialog>
    </>
  )
}

export default CarCard