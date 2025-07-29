import { useState, useEffect } from "react";
import type { Mountain } from "../types";

interface useMountainPageInterface {
    mountains: Mountain[];
    refresh: () => void;
}

export const useMountainPage = (): useMountainPageInterface => {
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

    useEffect(() => {
        fetchData();
    }, []);

    return { mountains, refresh: fetchData };
};
