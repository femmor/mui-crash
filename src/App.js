import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/ui/Header"
import {ThemeProvider} from "@material-ui/core/styles"
import theme from "./components/ui/Theme"
import HomeScreen from './screens/HomeScreen/HomeScreen'
import AboutScreen from './screens/AboutScreen/AboutScreen'
import ContactScreen from './screens/ContactScreen/ContactScreen'
import EstimateScreen from './screens/EstimateScreen/EstimateScreen'
import MobileAppsScreen from './screens/MobileAppsScreen/MobileAppsScreen'
import RevolutionScreen from './screens/RevolutionScreen/RevolutionScreen'
import ServicesScreen from './screens/ServicesScreen/ServicesScreen'
import WebsitesScreen from './screens/WebsitesScreen/WebsitesScreen'
import CustomSoftwareScreen from './screens/CustomSoftwareScreen/CustomSoftwareScreen'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/about" component={AboutScreen}/>
          <Route path="/contact" component={ContactScreen}/>
          <Route path="/estimate" component={EstimateScreen}/>
          <Route path="/websites" component={WebsitesScreen}/>
          <Route path="/mobile-apps" component={MobileAppsScreen}/>
          <Route path="/custom-software" component={CustomSoftwareScreen}/>
          <Route path="/revolution" component={RevolutionScreen}/>
          <Route path="/services" component={ServicesScreen}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
