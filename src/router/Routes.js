import React, { useState } from 'react';
import Preview from '../views/Preview';
import HomeLight from '../views/all-home-version/HomeLight';
import LightProfessionalAnimation from '../views/all-home-version/LightProfessionalAnimation';
import HomeLightProfessional2 from '../views/all-home-version/HomeLightProfessional2';
import HomeLightAnimation from '../views/all-home-version/HomeLightAnimation';
import HomeLightRtlAnimation from '../views/all-home-version/HomeLightRtlAnimation';
import HomeLightSidebarTwo from '../views/all-home-version/HomeLightSidebarTwo';
import HomeDark from '../views/all-home-version/HomeDark';
import HomeDarkParticles from '../views/all-home-version/HomeDarkParticles';
import HomeDarkAnimation from '../views/all-home-version/HomeDarkAnimation';
import NotFound from '../views/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollTopBehaviour from '../components/ScrollTopBehaviour';

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route path='/light' render={() => <HomeLightAnimation />} />
          <Route exact path='/dark' render={() => <HomeDarkAnimation />} />
          <Route render={() => <HomeLightAnimation />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
