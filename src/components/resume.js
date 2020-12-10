import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/roles-computer-it/128/programmer-2-256.png"
                            alt="avatar"
                            style={{height:'200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>손혁진</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>"책임감을 중요시 합니다"<br/>
팀원들과 프로젝트를 진행하면서 문제가 생겼을 때 문제발생원인을 파악 하여 팀원들에게 해결 프로세스를 제공하여 팀원들과 함께 주도적으로 문제를 해결 할 수 있게 도움을 준 경험이 있습니다.하지만 팀원의 역량이 부족하여 해결 할 수 없는 부분이 생겼고 팀원이 스스로 해결할 수 있게 가이드 라인을 제시해주고 팀원의 역량을 높이는 것과 동시에 책임을 부여하여 해결 할 수 있게 도움을 주었습니다.이후 프로젝트를 끝낼 수 있었고 팀원의 역량을 높여줌으로써 다른 프로젝트도 팀원과 함께 쉽게 진행 할 수 있었습니다.
<br/>
"열심히보단 잘하기 위해 노력합니다"<br/>
저에겐 노력이란 잘하기 위해서 하는 준비과정이라고 생각합니다.학창시절 프로젝트들을 진행하면서 기술을 적용하기 위해서는 동작알고리즘과 기초 실습과정을 통해서 기술의 본질을 파악하는 과정을 반복 하는것 같습니다.반복된 과정을 통해 모르는 기술에 익숙해 지고 프로젝트에 적용합니다.효율적인 일처리를 하기위해서 문제의 본질을 파악 하고 문제를 해결하기 위해 목표를 설정 후 목표방향에 맞게 일을 처리하면 문제와 연관되지 않은 일하는 것을 방지할 수 있고 문제를 보다 효율적으로 해결 할 수 있었던 경험이었습니다.
<br/>
"성급함은 독"<br/>
저의 단점은 성급한 성격이었습니다.이전에 기능 구현에만 치중했던 나머지 모듈별 결합도가 높아 이 후 다른 기능을 구현할 때 모듈 정보를 불러올 때 어려움을 겪었습니다.과거의 경험을 바탕으로 일을 진행 하기전에 3번 생각을 하여 오래 걸리더라도 각각의 모듈별 클래스를 생성하여 호출하는 습관을 가지게 되었고 이 후 프로젝트를 진행할 때 조원들과 협업할 때도 상대방의 말을 귀기울여 만들었던 모듈을 적용할 수 있게 만들기 위해서 조급함을 버리고 조원의모듈과 통합테스트를 진행할 때 성공적으로 마칠 수 있엇습니다.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>경기도 고양시 일산동구 거주</p>
                        <h5>(Phone)</h5>
                        <p>(+82)010-8534-3216</p>
                        <h5>Email</h5>
                        <p>hjson817@gmail.com</p>
                        <h5>github</h5>
                        <p>https://github.com/hyeokjinson</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2015.03}
                            endYear={2021.02}
                            schoolName="목포대학교"
                            schoolDescription="정보보호학과 졸업(공학 인증)"
                            />
                            <hr style={{borderTop:'3px solid #e22947'}}/>

                            <h2>Experience</h2>
                            <Experience
                            startYear={2015.03}
                            endYear={2015.12}
                            jobName="KUCIS(전국 대학 정보보호 동아리) 활동"
                            jobDescription="취약점 진단 및 리버싱,시큐어 코딩 스터디 진행"
                            />
                            <Experience
                            startYear={2019.02}
                            endYear={2020.06}
                            jobName="AI 머신러닝 연구실"
                            jobDescription="YOLO기반 무인 계수기 구축,에너지 블록체인 동향 연구"
                            
                            />
                            <Experience
                            startYear={2019.01}
                            endYear={2019.02}
                            jobName="폭스바겐 AI모빌리티 서비스 아이디어 챌린지"
                            jobDescription="주차공간 협소화를 해결하기 위한 평행주차 모빌리티 서비스(본선 진출)"
                            />
                            <Experience
                            startYear={2019.09}
                            endYear={2019.11}
                            jobName="KISA 개인정보 비식별 대회"
                            jobDescription="빅데이터 기반 K-means 알고리즘을 활용한 비식별,재식별 (결승 진출)"
                            />
                            <Experience
                            startYear={2020.09}
                            endYear={2020.11}
                            jobName="솔트룩스 AI 실무 개발자 양성 교육 수료(320시간)"
                            jobDescription="NLP,Computer Vision,Tacotron2 클론코딩,챗봇 기술 이론 및 실습 진행 후 해커톤 진행"
                            />
                            <hr style={{borderTop:'3px solid #e22947'}}/>
                            <h2>Skills</h2>
                            <Skills
                                skill="HTML/CSS/React/JavaScript"
                                progress={40}
                            />
                            <Skills
                                skill="PYTHON / FLASK"
                                progress={80}
                            />
                            <Skills
                                skill="Tensorflow / KERAS"
                                progress={70}
                            />
                            <Skills
                                skill="ANDROID / JAVA"
                                progress={60}
                            />
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Resume;