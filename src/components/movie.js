  
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Movie extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Movie Recommand AI</h2>
            <img
              src="https://github.com/hyeokjinson/react-myportfoliopage/blob/master/src/img/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94.-14.jpg?raw=true"
              alt="avatar"
              style={{width: '1200px',height:"600px"}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             </p>

          </Cell>
          
        </Grid>
      </div>
    )
  }
}

export default Movie;