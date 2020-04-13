import React, { useEffect, useState } from 'react';
import './App.css';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Button } from '@zeit-ui/react';
import moonIcon from './assets/moonIcon.svg';

function App() {
    const [msiaData, updateData] = useState([]);
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
            <section className="header">
                <div className="header-grid">
                    <div></div>
                    <div style={{'textAlign': 'right','height': '100%'}}>
                        <div className="header-contents">
                            <Button auto><img src={moonIcon} alt="moon" style={{'height': '1rem','verticalAlign': 'middle','paddingRight': '0.3rem'}}/><span style={{'verticalAlign': 'middle'}}> Dark</span></Button>
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
        </div>
    );
}

export default App;