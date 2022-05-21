import {Typography, AppBar, Toolbar} from '@mui/material'

const Header = () => {
  return (
    <>
    <AppBar position="relative">
        <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            Cars
            </Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header