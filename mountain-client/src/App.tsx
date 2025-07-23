import { useState, useEffect, useRef } from "react";
import "./App.css";
import Map from "./components/Map";

function App() {
    return (
        <div>
            <Map />
            <div className="main">
                <div className="header">
                    <div className="logo">M</div>
                    <div className="headerItem">Home</div>
                    <div className="headerItem">Explore</div>
                    <div className="headerItem">Hiking Log</div>
                    <div className="hspacer"></div>
                    <div className="logo">EG</div>
                </div>

                <div className="mainBody">
                    <div className="leftSide">
                        <div className="leftSidebar"></div>
                        <div className="tableSection"></div>
                    </div>
                    <div className="rightSidebar"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
