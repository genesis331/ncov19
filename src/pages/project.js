import React, { useState, useEffect } from 'react';
import './project.css';
import csv2json from 'csvjson-csv2json';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

function Project() {
    const [msiaData, updateData] = useState([]);
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
        <section className="chart">
            <ResponsiveContainer>
                <AreaChart data={msiaData}>
                    <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip type="monotone" />
                        <Area type="monotone" dataKey="cases" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="recovered" stroke="#0070F3" fill="#3291FF" />
                        <Area type="monotone" dataKey="dead" stroke="#7928CA" fill="#FF0080" />
                    </AreaChart>
                </ResponsiveContainer>
        </section>
    );
}

export default Project;