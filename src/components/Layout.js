import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { SubjectOutlined, AddCircleOutlineOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth
    },
    root:{
        display: 'flex'
    },
    active:{
        background : 'red'
    }
})

const Layout = ({children}) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary'/>,
            Path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlined color='secondary'/>,
            Path: '/create'
        },
    ]

    return (
        <div className={classes.root}>
            <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} variant='permanent' anchor='left'>
                <div>
                    <Typography variant='h5'>
                        Ninja Notes
                    </Typography>
                </div>
                <List>
                    {menuItems.map(item => (                        
                        <ListItem 
                            button 
                            key={item.text} 
                            onClick={() => navigate(item.Path)}
                            className={location.pathname === item.Path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
