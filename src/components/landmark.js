import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    
  ];

class LandMark extends Component {
  
    render() {
    return(
        
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={12}>
        <h2><br></br></h2>
            
            <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C1.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C2.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C3.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C4.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C5.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C6.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C7.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C8.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C9.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C10.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C11.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C12.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C13.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C14.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C15.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C16.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C17.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C18.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C19.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C20.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C21.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C22.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C23.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C24.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C25.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C26.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C27.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C28.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/master/src/img/4%EC%A1%B0Landmark_final/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C29.JPG?raw=true"/></Item>

          
        </Carousel>
      </div>
         </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandMark;