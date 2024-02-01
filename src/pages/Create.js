import React, { useState } from 'react'
import { Typography, Button, Container, TextField, Radio, RadioGroup } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material';
// import makeStyles  from '@mui/styles/makeStyles'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// const useStyles = makeStyles({
//     btn: {
//         fontSize: 60,
//         color: 'violet',
//         '&:hover': {
//             backgroundColor: 'blue'
//         }
//     },
//     title: {
//         textDecoration: 'underline',
//         marginBottom: 20
//     }
// })
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2'
        }
    }
})

const Create = () => {
    const[title, setTitle] = useState('')
    const[details, setDetails] = useState('')
    const[titleError, setTitleError] = useState(false)
    const[detailsError, setDetailsError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setDetailsError(false)
        setTitleError(false)

        if(title === ''){
            setTitleError(true)
        }
        if(details === ''){
            setDetailsError(true)
        }

        if(title && details){
            console.log(title, details)
        }
    }
    // const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>    
        <Container>
        <Typography variant='h6' gutterBottom component="h2" color="textSecondary">
            Create a New Note
        </Typography>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField 
                onChange={(e) => setTitle(e.target.value)}
                style={{ marginTop:'20px', marginBottom:'20px', display:'block' }}
                variant='outlined' 
                color='error' 
                label="note title"
                fullWidth
                required
                error={titleError}
            />
            <TextField 
                onChange={(e) => setDetails(e.target.value)}
                style={{ marginTop:'20px', marginBottom:'20px', display:'block' }}
                variant='outlined' 
                color='error' 
                label="add note"
                fullWidth
                multiline
                rows={4}
                required
                error={detailsError}
            />
            <RadioGroup>
                <Radio value="male" />
                <Radio value="female"/>
            </RadioGroup>
            <Button 
            onClick={() => console.log('Clicked me')}
            color='error' 
            type='submit' 
            variant='contained'
            endIcon={<KeyboardArrowRightIcon />}>
            Submit
            </Button>
        </form>
    </Container>
    </ThemeProvider>
  )
}

export default Create
