import React from 'react'
import { makeStyles } from '@mui/styles';
import { CardHeader, IconButton, CardContent, Card, Typography  } from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if(note.category == 'work') {
        return '1px solid red'
      }
    }
  }
})
const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note)
  return (
    <div>
      <Card elevation={5} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlinedIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteCard
