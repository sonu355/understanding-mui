import React from 'react'
import { CardHeader, IconButton, CardContent, Card, Typography  } from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={5}>
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
