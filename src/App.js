import React, { useState, useEffect } from 'react';
import './App.css';
import Project from './pages/project';
import Overview from './pages/overview';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { Mode, useLightSwitch } from 'use-light-switch';
import { Note, Spacer, Description, Tabs, Text } from '@geist-ui/react';
import { AlertOctagon } from '@geist-ui/react-icons';
import logoblack from './assets/LOGO-BLACK-WEB.svg';
import logowhite from './assets/LOGO-WHITE-WEB.svg';

function App() {
    const [logoDisplay, setLogoDisplay] = useState(logoblack);
    const [themeType, setThemeType] = useState('light');
    const mode = useLightSwitch();
    useEffect(() => {
        if (mode === Mode.Dark) {
            setThemeType('dark');
            setLogoDisplay(logowhite);
        } else {
            setThemeType('light');
            setLogoDisplay(logoblack);
        }
    },[mode]);

    return (
        <GeistProvider theme={{ type: themeType }}>
            <CssBaseline />
            <div className="base">
                <div className="mobile-block">
                    <div className="mobile-block-center">
                        <AlertOctagon size="4rem"/>
                        <Text h5>Unsupported device detected</Text>
                        <Spacer/>
                        <Note type="secondary" small>Visit this website in a larger screen device.</Note>
                    </div>
                </div>
                <div className="header">
                    <div className="header-1">
                        <div className="header-1-logo">
                            <img src={logoDisplay} alt="Logo" draggable={false}/>
                        </div>
                        <div className="header-1-title">
                            <Description title="AI Experiments" content={<Text b size="1.25rem">Malaysia nCoV-19 Cases Time Series Analysis</Text>}/>
                        </div>
                    </div>
                    <div className="header-2">
                    
                    </div>
                </div>
                <div className="project-content">
                    <Tabs initialValue="1" style={{ width: "100%", height: "100%" }}>
                        <Tabs.Item label={<Text h6>Overview</Text>} value="1">
                            <Overview />
                        </Tabs.Item>
                        <Tabs.Item label={<Text h6>Project</Text>} value="2">
                            <Project />
                        </Tabs.Item>
                    </Tabs>
                </div>
            </div>
        </GeistProvider>
    );
}

export default App;