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
                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{height:'200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>손혁진</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
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