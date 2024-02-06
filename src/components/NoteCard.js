import React from 'react'
import { makeStyles } from '@mui/styles';
import { CardHeader, IconButton, CardContent, Card, Typography, Avatar  } from '@mui/material'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { yellow, green, pink, blue } from '@mui/material/colors';

const useStyles = makeStyles({
  // avatar: {
  //   backgroundColor: (note) => {
  //     if(note.category === 'work'){
  //       return yellow[700]
  //     }
  //     if(note.category === 'money'){
  //       return green[700]
  //     }
  //     if(note.category === 'todos'){
  //       return pink[700]
  //     }
  //     return blue[500]
  //   }
  // }
})

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note)
  return (
    <div>
      <Card elevation={5}>
        <CardHeader
          avatar={
            <Avatar 
              style={{
                backgroundColor:
                  note.category === 'work'
                    ? yellow[700]
                    : note.category === 'money'
                    ? green[700]
                    : note.category === 'todos'
                    ? pink[700]
                    : blue[500],
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>

          }
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
