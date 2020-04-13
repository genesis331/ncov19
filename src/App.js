import React, { useEffect, useState } from 'react';
import './App.css';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Button, Modal, Text } from '@zeit-ui/react';
import zixuLogo from './assets/zixuLogo.svg';
import githubBtnIcon from './assets/githubBtnIcon.svg';
import tensorflowIcon from './assets/tensorflowIcon.svg';
import githubIcon from './assets/githubIcon.svg';
import whoIcon from './assets/whoIcon.png';

function App() {
    const [msiaData, updateData] = useState([]);
    const [modalState, setModalState] = useState(false);
    const handler = () => setModalState(true);
    const closeHandler = (event) => {
        setModalState(false)
    };
    useEffect(() => {
        var request = new XMLHttpRequest();  
        request.open("GET", "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/who_covid_19_situation_reports/who_covid_19_sit_rep_time_series/who_covid_19_sit_rep_time_series.csv", false);   
        request.send(null);  

        var csvData = [];
        var jsonObject = request.responseText.split(/\r?\n|\r/);
        for (var i = 0; i < jsonObject.length; i++) {
            csvData.push(jsonObject[i].split(','));
        }
        let msiadata = csvData[44];
        let outputData = [];
        msiadata.splice(0, 3);
        for (let i = 0; i < msiadata.length; i++) {
            if (msiadata[i]) {
                let objToPush = {
                    day: "Day " + (i + 1),
                    cases: parseInt(msiadata[i])
                }
                outputData.push(objToPush);
            } else {
                let objToPush = {
                    day: "Day " + (i + 1),
                    cases: 0
                }
                outputData.push(objToPush);
            }
        }
        updateData(outputData);
    },[]);

    return (
        <div className="content">
            <Modal open={modalState} onClose={closeHandler}>
                <Modal.Title>Warning</Modal.Title>
                <Modal.Content>
                    <p>You'll be redirected to GitHub.</p>
                </Modal.Content>
                <Modal.Action passive>Cancel</Modal.Action>
                <Modal.Action onClick={() => {window.location.href = 'https://github.com/genesis331/ncov19';}}>OK</Modal.Action>
            </Modal>
            <section className="header">
                <div className="header-grid">
                    <div style={{'textAlign': 'left','height': '100%'}}>
                        <div className="header-contents">
                            <img src={zixuLogo} alt="zixuLogo" draggable={false} style={{'height': '2.5rem','verticalAlign': 'middle','marginRight': '1rem'}}/>
                            <Text h3 style={{'fontFamily': 'Volte Bold','display': 'inline-block','verticalAlign': 'middle', 'margin': '0'}}>AI Experiments</Text>
                        </div>
                    </div>
                    <div style={{'textAlign': 'right','height': '100%'}}>
                        <div className="header-contents">
                            <Button auto onClick={handler}><img src={githubBtnIcon} alt="moon" style={{'height': '1rem','verticalAlign': 'middle','paddingRight': '0.5rem'}}/><span style={{'verticalAlign': 'middle'}}> See Page Source Code</span></Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="chart">
                <ResponsiveContainer>
                    <AreaChart data={msiaData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip type="monotone" />
                        <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </section>
            <section className="footer">
                <div className="footer-grid">
                    <div style={{'textAlign': 'left','height': '100%'}}>
                        <div className="footer-contents">
                            <Text h6>Disclaimer: Please understand that the data above may be outdated but is provided by the World Health Organization(WHO). It is used for personal research purposes only and is not recommended to use for reference purposes.</Text> 
                        </div>
                    </div>
                    <div style={{'textAlign': 'right','height': '100%'}}>
                        <div className="footer-contents">
                            <img src={whoIcon} alt="whoIcon" draggable={false} style={{'height': '3rem','marginRight': '1rem'}}/>
                            <img src={githubIcon} alt="githubIcon" draggable={false}/>
                            <img src={tensorflowIcon} alt="tensorflowIcon" draggable={false}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;