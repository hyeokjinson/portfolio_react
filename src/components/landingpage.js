  
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>성장하는 Developer</h1>

            <hr/>

          <p>PYTHON | TENSORFLOW/KERAS | ANDROID | JAVA | MongoDB |HTML/CSS | Bootstrap | JavaScript </p>

        <div className="social-links">

          {/* instagram */}
          <a href="https://www.instagram.com/ji_nee95/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/hyeokjinson" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* blog */}
          <a href="https://hjson817.tistory.com/" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-rss-square" aria-hidden="true"></i>
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;