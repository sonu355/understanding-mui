import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material'
import NoteCard from '../components/NoteCard'

const Notes = () => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes)
  }
  return (
    <>
    {/* <Grid container>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>1</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>2</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper>4</Paper>
      </Grid>
    </Grid> */}
    <Grid container spacing={3}>
      {notes.map(note => (
        <Grid item key={note.id} xs={12} md={6} lg={4}>
          {/* <Paper>{note.title}</Paper> */}
          <NoteCard note={note} handleDelete={handleDelete}/>
        </Grid>
      ))}
    </Grid>
    </>
  )
}
export default Notes
