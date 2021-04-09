import React, { cloneElement, useState, useEffect } from 'react'
import {AppBar, Button, Toolbar, useScrollTrigger} from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
import {Tabs, Tab} from "@material-ui/core"
import {Link} from "react-router-dom"

import logo from "../../assets/logo.svg"


const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  logo: {
    height: "7em"
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: { 
    ...theme.typography.estimate,
    color: 'white',
    borderRadius: '50px',
    marginLeft: '15px',
    marginRight: "20px",
    height: '45px'
  }
}))


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


const Header = (props) => {
  const [value, setValue] = useState(0)
  const classes = useStyles()

  // Tabs Menu
  const handleTabChange = (e, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if(window.location.pathname === "/" && value !== 0){
      setValue(0)
    } else if(window.location.pathname === "/services" && value !== 1){
      setValue(1)
    } else if(window.location.pathname === "/revolution" && value !== 2){
      setValue(2)
    } else if(window.location.pathname === "/about" && value !== 3){
      setValue(3)
    } else if(window.location.pathname === "/contact" && value !== 4){
      setValue(4)
    } else if(window.location.pathname === "/estimate" && value !== 5){
      setValue(5)
    }
  }, [value])

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <div className="l0go-container">
              <Button 
                className={classes.logoContainer} 
                component={Link} to="/" 
                onClick={() => setValue(0)}
                disableRipple
                >
                <img src={logo} alt="Company Logo" className={classes.logo}/>
              </Button>
            </div>
            <Tabs value={value} onChange={handleTabChange} className={classes.tabContainer} indicatorColor="primary">
              <Tab className={classes.tab} component={Link} to="/" label="Home"/>
              <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
              <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution"/>
              <Tab className={classes.tab} component={Link} to="/about" label="About Us"/>
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us"/>
            </Tabs>
            <Button variant="contained" color="secondary" component={Link} to="/estimate" className={classes.button}>Free Estimate</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </>
  )
}

export default Header
