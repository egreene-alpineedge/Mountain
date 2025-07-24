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
                            <div className="filterBox">
                                <div className="filterBoxTitle">Filter</div>

                                <input
                                    placeholder="Search"
                                    className="filterBoxTextField"
                                ></input>

                                {/* States */}
                                <div className="filterBoxTitle">States</div>
                                <div className="filterBoxRow">
                                    <button className="filterBoxOption">
                                        New Hampshire
                                    </button>
                                    <button className="filterBoxOption">
                                        New York
                                    </button>
                                </div>
                                <div className="filterBoxRow">
                                    <button className="filterBoxOption">
                                        Maine
                                    </button>
                                    <button className="filterBoxOption">
                                        Vermont
                                    </button>
                                </div>

                                {/* Challenges */}
                                <div className="filterBoxTitle">Challenges</div>
                                <div className="filterBoxRow">
                                    <button className="filterBoxOption">
                                        NH 4000 footers
                                    </button>
                                    <button className="filterBoxOption">
                                        ADK High Peaks
                                    </button>
                                </div>

                                <div className="filterBoxRow">
                                    <button className="filterBoxOption">
                                        NE Hundred Highest
                                    </button>
                                    <button className="filterBoxOption">
                                        Northeast 115
                                    </button>
                                </div>

                                {/* Elevation */}
                                <div className="filterBoxTitle">Elevation</div>
                                <input
                                    type="range"
                                    className="filterBoxRange"
                                ></input>

                                {/* Prominence */}
                                <div className="filterBoxTitle">Prominence</div>
                                <input
                                    type="range"
                                    className="filterBoxRange"
                                ></input>
                            </div>
                        </ResizableDiv>
                        <ResizableDiv className="tableSection">
                            <div></div>

                            <div className="table">
                                <div className="tableHeader">
                                    <div style={{ width: "30%" }}>Name</div>
                                    <div style={{ width: "15%" }}>
                                        Elevation
                                    </div>
                                    <div style={{ width: "15%" }}>
                                        Prominence
                                    </div>
                                    <div style={{ width: "20%" }}>Range</div>
                                    <div style={{ width: "20%" }}>Location</div>
                                </div>
                                <div className="tableContent">
                                    {mountains.map((mountain) => (
                                        <div
                                            className="tableRow"
                                            key={mountain.id}
                                        >
                                            <div
                                                style={{ width: "30%" }}
                                                className="nameField"
                                            >
                                                <img src="src/assets/test.jpg" />
                                                <div className="nameAndStateText">
                                                    <div>{mountain.name}</div>
                                                    <div className="subText">
                                                        {mountain.state}
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ width: "15%" }}>
                                                {mountain.elevation} ft
                                            </div>
                                            <div style={{ width: "15%" }}>
                                                {mountain.prominence} ft
                                            </div>
                                            <div style={{ width: "20%" }}>
                                                {mountain.range}
                                            </div>
                                            <div style={{ width: "20%" }}>
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
