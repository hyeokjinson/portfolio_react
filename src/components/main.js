import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Movie from './movie';
import News_Issue from './news_issue';
import Lucene from './lucene';
import Kaggle1 from './kaggle1';
import NewsGroup from './newsgroup';
import Tacotron from './tacotron';
import LandMark from './landmark';
import VirusTotal from './virustotal'
import Android from './android';
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/portfolio_react/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/movie" component={Movie} />
    <Route path="/news_issue" component={News_Issue} />
    <Route path="/lucene" component={Lucene} />
    <Route path="/kaggle1" component={Kaggle1} />
    <Route path="/newsgroup" component={NewsGroup} />
    <Route path="/tacotron" component={Tacotron} />
    <Route path="/landmark" component={LandMark} />
    <Route path="/virustotal" component={VirusTotal} />
    <Route path="/android" component={Android} />
  </Switch>
)

export default Main;