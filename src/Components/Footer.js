import React from 'react'
import { Container, Paper, Box, Typography, AppBar, IconButton, makeStyles, Toolbar, Button, useMediaQuery, useTheme} from '@material-ui/core'
import Menu from '@material-ui/core/Menu'
import './Footer.css'

const useStyles = makeStyles({
    header: {
backgroundColor: "transparent",
boxShadow: "none",
fontFamily: "Libre Baskerville",
letterSpacing: "100px",
padding: "10px 5px 10px 0"
    }
})

const date = new Date().getFullYear()

function Footer() {
    const classes = useStyles();

    return (
        <div>
            <p style={{fontSize: "15px", color: "#faf3e0", textAlign: "center", marginTop: "10vh", marginBotton: "8vh"}}>Copyright © {date} </p>
            <AppBar position='sticky' className= {classes.header}>
               <Toolbar style={{justifyContent:"center"}}>
               <a href="/privacy" style={{textDecoration:"none"}}><Button className="btn1" size="large" style={{color: "#faf3e0", fontSize: "15px", textTransform: "initial", marginLeft: "15vh", marginRight: "15vh"}}>Privacy Policy</Button></a>
               <a href="/terms" style={{textDecoration:"none"}}><Button className="btn1" size="large" style={{color: "#faf3e0", fontSize: "15px", textTransform: "initial", marginLeft: "15vh", marginRight: "15vh"}}>Terms & Conditions</Button></a>
               <a href="/dmca" style={{textDecoration:"none"}}><Button className="btn1" size="large" style={{color: "#faf3e0", fontSize: "15px", textTransform: "initial", marginLeft: "15vh", marginRight: "15vh"}}>Copyright/DMCA</Button></a>
               </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer
