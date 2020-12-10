import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    
  ];

class Android extends Component {
  
    render() {
    return(
        
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={12}>
        <h2><br></br></h2>
            
            <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C1.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C2.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C3.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C4.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C5.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C6.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C7.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C8.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C9.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C10.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C11.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C12.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C13.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C14.JPG?raw=true"/></Item>
          <Item><img src="https://github.com/hyeokjinson/portfolio_react/blob/main/src/img/154420_%EC%86%90%ED%98%81%EC%A7%84_%EA%B0%9C%EC%9D%B8%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C15.JPG?raw=true"/></Item>
          
          

          
        </Carousel>
      </div>
         </Cell>
        </Grid>
      </div>
    )
  }
}

export default Android;