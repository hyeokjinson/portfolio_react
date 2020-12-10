  
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    
  ];

class News_Issue extends Component {
  
    render() {
    return(
        
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={12}>
            <h2><br></br></h2>
            
            <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94/%EC%BA%A1%EC%B2%98.PNG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94/%EC%BA%A1%EC%B2%981.PNG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94/%EC%BA%A1%EC%B2%982.PNG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94/%EC%BA%A1%EC%B2%983.PNG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94/%EC%BA%A1%EC%B2%984.PNG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94/%EC%BA%A1%EC%B2%985.PNG?raw=true"/></Item>
        </Carousel>
      </div>
         </Cell>
        </Grid>
      </div>
    )
  }
}

export default News_Issue;
