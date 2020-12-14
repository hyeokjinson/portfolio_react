import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoMi3h6HGPQzlTLiaN3mgO-jBdh2yY1VUAQ&usqp=CAU) center / cover'}}>악성 IP 패킷 분석 프로그램</CardTitle>
            <CardText>
              사용기술 <br></br>
              Virus Total API,PYthon,pyqt5
            </CardText>
            <CardActions border>
              <Button href="https://github.com/hyeokjinson/virus-total-api-network-packet-analyzing-GUI" target="_blank" colored>GitHub</Button>
              <Link to="./virustotal">
              <Button colored>설명</Button>
              </Link>
              <Button  href="https://drive.google.com/file/d/10Kpck59ABhY4kMdF3j4qLzqEtatoy-6D/view?usp=sharing" target="_blank" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png) center / cover'}}>영화추천 AI서버 구현</CardTitle>
            <CardText>
              사용기술<br></br>NLP,TextRank알고리즘,TENSORFLOW,Keras
            </CardText>
            <CardActions border>
              
              <Button href="https://github.com/hyeokjinson/movie" target="_blank" colored>GitHub</Button>
              <Link to="./movie">
              <Button colored>설명</Button>
              </Link>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '190px', background: 'url(https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png) center / cover'}} >뉴스 이슈 탐지 분석</CardTitle>
            <CardText>
            사용기술<br></br>NLP,KoNLPy,TENSORFLOW,Keras
            </CardText>
            <CardActions border>
              <Button href="https://github.com/hyeokjinson/AIExample" target="_blank"
              colored>GitHub</Button>
               <Link to="./news_issue">
              <Button colored>설명</Button>
              </Link>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '190px', background: 'url(https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png) center / cover'}} >
            뉴스그룹분류,감성분석</CardTitle>
            <CardText>
            사용기술<br></br>NLP,사이킷런,TENSORFLOW,Keras
            </CardText>
            <CardActions border>
              <Button href="https://github.com/hyeokjinson/NLP_code" target="_blank"
              colored>GitHub</Button>
               <Link to="./newsgroup">
              <Button colored>설명</Button>
              </Link>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '190px', background: 'url(https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/an-introduction-to-natural-language-processing-with-python-for-seos-5f3519eeb8368.png) center / cover'}} >
            캐글  MERCARI PRICE SUGGESTION CHELLENGE</CardTitle>
            <CardText>
            사용기술<br></br>NLP,사이킷런,TENSORFLOW,Keras
            </CardText>
            <CardActions border>
              <Button href="https://github.com/hyeokjinson/NLP_code/tree/master/Text%20Analysis%EC%8B%A4%EC%8A%B5" target="_blank"
              colored>GitHub</Button>
               <Link to="./kaggle1">
              <Button colored>설명</Button>
              </Link>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '190px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRwyrPAR8uIGRzZAz4sYYqD5DfR46yTvdYA&usqp=CAU) center / cover'}} >
            Tacotron2 클론 코딩</CardTitle>
            <CardText>
            사용기술<br></br>Tacotron2
            </CardText>
            <CardActions border>
              <Button href="https://github.com/hyeokjinson/sba_speech" target="_blank"
              colored>GitHub</Button>
               <Link to="./tacotron">
              <Button colored>설명</Button>
              </Link>
               
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '190px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVm5GFgihoOIhB9XD71JmMzHXhyDh_mBjag&usqp=CAU) center / cover'}} >
            랜드마크 이미지 예측 추천 챗봇 서비스</CardTitle>
            <CardText>
            사용기술<br></br>Tacotron2
            </CardText>
            <CardActions border>
              <Button href="https://github.com/hyeokjinson/AITalkbotproject" target="_blank"
              colored>GitHub</Button>
               <Link to="./landmark">
              <Button colored>설명</Button>
              </Link>
              <Button href="https://drive.google.com/file/d/1GhJmGVn-YCCnmdpFitPffdL-3m9Huwjw/view?usp=sharing" target="_blank" colored>LIVE DEMO</Button> 
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
  
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1yX8mvtsCHyoamrAr-_GKnY4O9dmwv6grw&usqp=CAU) center / cover'}} >
            LUCENE,ELASTIC SEARCH 활용 프로젝트</CardTitle>
            <CardText>
              사용기술<br></br>
              NLP,Elastic Search,LUCENE
            </CardText>
            <CardActions border>
              <Button  href="https://github.com/hyeokjinson/news_top10_lucene" target="_blank"colored>GitHub</Button>
              <Link to="./lucene">
              <Button colored>설명</Button>
              </Link>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://blog.hmgjournal.com/images_n/contents/cons/1905/190530_auto_01.jpg) center / cover'}} >
            주차공간 협소화 자율주차 모빌리티 서비스</CardTitle>
            <CardText>
              사용기술<br></br>
              objectDetection,Android,Firebase,socket
            </CardText>
            <CardActions border>
              <Button  href="https://github.com/hyeokjinson/capstondesignapp" target="_blank"colored>GitHub</Button>
              <Link to="./android">
              <Button colored>설명</Button>
              </Link>
              <Button  href="https://drive.google.com/file/d/1yEyUPRfCu15Kss30ie4wJY64HRNMHlh7/view?usp=sharing" target="_blank" colored>사람 인식 푸시 알림 데모</Button>
              <Button  href="https://drive.google.com/file/d/1tM8EhU6fWxkDJR-RXIVRkSPLDBBHx53-/view?usp=sharinge" target="_blank" colored>원격 제어 데모</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
         <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg) center / cover'}} >
            Deneve Caffe 홈페이지 구축</CardTitle>
            <CardText>
              사용기술<br></br>
              turbo,NodeJS,html,css,JavaScript
            </CardText>
            <CardActions border>
              <Button  href="https://github.com/hyeokjinson/deneve_homepage" target="_blank"colored>GitHub</Button>
              
              <Button href="https://deneve-caffe-hiyz67.turbo360-vertex.com/" target="_blank" colored>홈페이지 링크</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>PYTHON</Tab>
          <Tab>TENSORFLOW/KERAS</Tab>
          <Tab>Android/JAVA</Tab>
          <Tab>HTML/CSS/JavaScript</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;