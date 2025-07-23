import { useState, useEffect, useRef } from "react";
import "./App.css";
import Map from "./components/Map";
import ResizableDiv from "./components/ResizableDiv";
import type { Mountain } from "./types";

function App() {
    const [mountains, setMountains] = useState<Array<Mountain>>([]);

    const fetchData = async () => {
        console.log("Fetching...");
        try {
            const response = await fetch("https://localhost:7022/mountain");
            const data: Array<Mountain> = await response.json();

            setMountains(data);
        } catch (err) {
            console.log("There was an error ", err);
        }
    };

    return (
        <div>
            <Map />
            <div className="main">
                <div className="header">
                    <button className="logo" onClick={fetchData}>
                        M
                    </button>
                    <div className="headerItem">Home</div>
                    <div className="headerItem">Explore</div>
                    <div className="headerItem">Hiking Log</div>
                    <div className="hspacer"></div>
                    <div className="logo">EG</div>
                </div>

                <div className="mainBody">
                    <div className="leftSide">
                        <ResizableDiv className="leftSidebar">
                            <div style={{ width: "8rem" }}></div>
                        </ResizableDiv>
                        <ResizableDiv className="tableSection">
                            <div></div>

                            <div className="table">
                                <div className="tableHeader">
                                    <div>Name</div>
                                    <div>Elevation</div>
                                    <div>Prominence</div>
                                    <div>Range</div>
                                    <div>Location</div>
                                </div>
                                <div className="tableContent">
                                    {mountains.map((mountain) => (
                                        <div
                                            className="tableRow"
                                            key={mountain.id}
                                        >
                                            <div>{mountain.name}</div>
                                            <div>{mountain.elevation}</div>
                                            <div>{mountain.prominence}</div>
                                            <div>{mountain.range}</div>
                                            <div>
                                                {mountain.latitude},{" "}
                                                {mountain.longitude}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ResizableDiv>
                    </div>
                    <ResizableDiv
                        className="rightSidebar"
                        leftAdjustable
                        rightAdjustable={false}
                    >
                        <div style={{ width: "4rem" }}></div>
                    </ResizableDiv>
                </div>
            </div>
        </div>
    );
}

export default App;
