import React, { useEffect, useState } from 'react';
import './App.css';
import csv2json from 'csvjson-csv2json';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Button, Modal, Text } from '@zeit-ui/react';
import MobileBlock from "./components/mobileblock/mobileblock";
import zixuLogo from './assets/zixuLogo.svg';
import githubBtnIcon from './assets/githubBtnIcon.svg';
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
        request.open("GET", "https://raw.githubusercontent.com/datasets/covid-19/master/data/time-series-19-covid-combined.csv", false);   
        request.send(null);  

        var csvData = csv2json(request.responseText, {parseNumbers: true});;
        let msiadata = [];
        for (let i = 0; i < csvData.length; i++) {
            if (csvData[i]['Country/Region'] === "Malaysia") {
                msiadata.push(csvData[i]);
            }
        }
        let outputData = [];
        for (let i = 0; i < msiadata.length; i++) {
            let objToPush = {
                day: "Day " + (i + 1),
                date: msiadata[i]['Date'],
                recovered: parseInt(msiadata[i]['Recovered']),
                dead: parseInt(msiadata[i]['Deaths']),
                cases: parseInt(msiadata[i]['Confirmed'])
            }
            outputData.push(objToPush);
        }
        updateData(outputData);
    },[]);

    return (
        <div className="content">
            <MobileBlock />
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
                            <img src={zixuLogo} alt="zixuLogo" draggable={false} style={{'height': '2.8rem','verticalAlign': 'middle','marginRight': '2rem'}}/>
                            <div style={{'display': 'inline-block','verticalAlign': 'middle'}}>
                                <Text h4 style={{'fontFamily': 'Volte Bold', 'margin': '0'}}>AI Experiments</Text>
                                <Text h5 style={{'margin': '0'}}>Malaysia nCoV-19 Cases Time Series Analysis</Text>
                            </div>
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
                        <Area type="monotone" dataKey="recovered" stroke="#0070F3" fill="#3291FF" />
                        <Area type="monotone" dataKey="dead" stroke="#7928CA" fill="#FF0080" />
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;