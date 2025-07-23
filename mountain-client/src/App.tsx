import { useState, useEffect, useRef } from "react";
import "./App.css";
import Map from "./components/Map";
import ResizableDiv from "./components/ResizableDiv";

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
                        <ResizableDiv className="leftSidebar">
                            <div></div>
                        </ResizableDiv>
                        <ResizableDiv className="tableSection">
                            <div className="table">
                                {/* <div className="tableHeader">
                                    <div>Name</div>
                                    <div>Elevation</div>
                                    <div>Prominence</div>
                                    <div>Range</div>
                                    <div>Location</div>
                                </div> */}
                            </div>
                        </ResizableDiv>
                    </div>
                    <ResizableDiv
                        className="rightSidebar"
                        leftAdjustable
                        rightAdjustable={false}
                    >
                        <div style={{ width: "12rem" }}></div>
                    </ResizableDiv>
                </div>
            </div>
        </div>
    );
}

export default App;
