import React, { useEffect, useRef, useState } from 'react';
const { tableau } = window;
const Dashboard = () => {
    const ref = useRef(null);
    const [url, setUrl] = useState("https://public.tableau.com/views/RegionDetails/RegionDetails2?:language=en-US&:display_count=n&:origin=viz_share_link");
    const [viz, setViz] = useState(null);
    const initViz = () => {
        setViz(new tableau.Viz(ref.current, url))
    };

    useEffect(() => {
        // if (viz) {
        //     viz.dispose();
            initViz();
        // }
    }, []);
    return (
        <div ref={ref}>

        </div>
    );
};
export default Dashboard;

