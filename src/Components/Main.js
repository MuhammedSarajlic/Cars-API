import {Typography, Container, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField} from '@mui/material'
import { useState } from 'react'

const URL = 'https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars'

const Main = ({ setCars, cars }) => {
    const [open, setOpen] = useState(false)
    const [carData, setCarData] = useState({})

    const addHandler = (e) => {
        e.preventDefault()
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: Math.round(Math.random() * 1000),
                name: carData.name,
                manufacturer: carData.manufacturer,
                imageUrl: carData.imageUrl,
                price: carData.price,
                year: carData.year
            })
        })
        .then(res => {
            if(res.ok) console.log("Successfully updated", res)
        })
        .catch(err => console.log(err))
        setCars([
            ...cars, {
                id: Math.round(Math.random() * 1000),
                name: carData.name,
                manufacturer: carData.manufacturer,
                imageUrl: carData.imageUrl,
                price: carData.price,
                year: carData.year
            }
        ])
        setOpen(false)
    }

  return (
    <>
    <main>
        <div>
            <Container maxWidth="sm" style={{ marginTop: 50, marginBottom: 50 }}>
                <Typography variant='h4' align='center' gutterBottom>
                    Cars List
                </Typography>
                <Button variant='contained' onClick={() => setOpen(true)}>Add Car</Button>
            </Container>

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
                        <TextField  label="Name" variant="outlined" onChange={(e) => setCarData({...carData, name: e.target.value})} sx={{ width: 400, marginTop: '20px' }}/>
                        <TextField  label="Manufacturer" variant="outlined" onChange={(e) => setCarData({...carData, manufacturer: e.target.value})} sx={{ marginTop: '20px' }}/>
                        <TextField  label="Image Url" variant="outlined" onChange={(e) => setCarData({...carData, imageUrl: e.target.value})} sx={{ marginTop: '20px' }}/>
                        <TextField  label="Price" variant="outlined" onChange={(e) => setCarData({...carData, price: e.target.value})} sx={{ marginTop: '20px' }}/>
                        <TextField  label="Year" variant="outlined" onChange={(e) => setCarData({...carData, year: e.target.value})} sx={{ marginTop: '20px' }}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{padding: '0 25px 20px 0'}}>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={addHandler} variant='contained'>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    </main>
    </>
  )
}

export default Main