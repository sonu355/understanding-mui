import React from 'react'
import { Drawer, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'


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
    }
})

const Layout = ({children}) => {
    const classes = useStyles()

    return (
        <div style={{display: 'flex'}}>
            <Drawer className={classes.drawer} classes={{paper: classes.drawerPaper}} variant='permanent' anchor='left'>
                <div>
                    <Typography variant='h5'>
                        Ninja Notes
                    </Typography>
                </div>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
