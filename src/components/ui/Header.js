import React, { cloneElement, useState } from 'react'
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

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <img src={logo} alt="Company Logo" className={classes.logo}/>
            <Tabs value={value} onChange={handleTabChange} className={classes.tabContainer}>
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
