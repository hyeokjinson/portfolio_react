  
import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>HYEOK JIN SON</h2>
            <img
              src="https://cdn3.iconfinder.com/data/icons/roles-computer-it/128/programmer-2-256.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             "기술 스택을 쌓는 방법:경험"<br/>
저의 삶의 모토는 "경험을 통해 배우려는 자세를 가지자"입니다.배우지 않은 업무를
배정 받아도 스스로 관련 기술들을 찾아보면서 동작 원리를 익히고 기본 프로젝트를
구현하면서 원리를 이해한 뒤 프로젝트에 적용해 왔습니다.
리버싱,웹보안,개발 지식 및 관련 문제들을 풀어본 경험을 쌓은 뒤 유사한 문제나 프
로젝트에 참가하게 되었을 때 문제를 해결하고 더 나아가 추가 기능들을 적용 할 수
있는 능력을 키울 수 있었습니다.다양한 기술 경험을 하기 위해서 개인정보 비식별 대
회,AI 개발자 양성 교육,모빌리티 서비스 경진 대회등을 참가하였습니다.최신 보안 이
슈,기술 이슈를 찾아보면서 관련 기술 이론 및 실습 경험을 대회에 적용하여 비식별
대회 결선 진출,경진 대회 본선 진출 할 수 있었습니다.경험을 통해 쌓아 올린 보안,개
발 역량을 바탕으로 실제 서비스를 할 수 있는 SW 개발을 진행 하겠습니다.
             </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+82)010-8534-3216
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    hjson817@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-instagram" aria-hidden="true"/>
                     ji_nee95
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-address-card" aria-hidden="true"/>
                    1995.10.06 , Goyang in South Korea
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;