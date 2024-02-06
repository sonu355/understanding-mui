import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText,AppBar, Toolbar, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles'
import { SubjectOutlined, AddCircleOutlineOutlined } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';


const drawerWidth = 240;
const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%',
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
    },
    appbar:{
        width: `calc(100% - ${drawerWidth}px)`,
        left: drawerWidth,
        position: 'relative'
    },
    date: {
        flexGrow: 1
    },
    avatar:{
        marginLeft: '16px'
    },
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
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;


    return (
        <div className={classes.root}>
            <AppBar elevation={0} color='primary'  className={classes.appbar}>
                <Toolbar>
                    <Typography className={classes.date} variant='h5' style={{marginLeft:'350px' }}>
                        Today is {formattedDate}
                    </Typography>
                    <Typography>
                        Harshal
                    </Typography>
                    <Avatar src='/mario-av.png'className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} variant='permanent' anchor='left'>
                <div>
                    <Typography variant='h5' style={{padding: '16px'}}>
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
            <div className={classes.page} style={{padding: '24px', marginTop:'60px'}}>
                {children}
            </div>
        </div>
    )
}

export default Layout
