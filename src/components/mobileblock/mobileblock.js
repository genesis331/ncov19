import React from 'react';
import './mobileblock.css';
import headerLogo from '../../assets/zixuLogo.svg';

export default function MobileBlock() {
    return <div className="mobile-block">
        <div className="mobile-block-content">
            <div className="mobile-block-content-1">
                <img src={headerLogo} alt="headerLogo" />
            </div>
            <div className="mobile-block-content-2">
                <div className="mobile-block-content-2-content">Hey there! Your device is either not supported or in portrait mode.</div>
            </div>
        </div>
    </div>
}
