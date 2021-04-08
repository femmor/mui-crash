import React, { cloneElement, useState } from 'react'
import {AppBar, Toolbar, useScrollTrigger} from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
import {Tabs, Tab} from "@material-ui/core"

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
    textTransform: "none",
    fontWeight: 700,
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px"
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
              <Tab className={classes.tab} label="Home"/>
              <Tab className={classes.tab} label="Services"/>
              <Tab className={classes.tab} label="The Revolution"/>
              <Tab className={classes.tab} label="About Us"/>
              <Tab className={classes.tab} label="Contact Us"/>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}/>
    </>
  )
}

export default Header
