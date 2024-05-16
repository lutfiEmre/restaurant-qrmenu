import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import GradientSVG2 from "./gradientSVG2";



const ProgressBar1 = (props) => {
    const idCSS = "hello";
    const {percentage} = props
    return (
        <div style={{height: "90px", width: "90px"}}>
            <GradientSVG2/>
            <CircularProgressbar

                strokeWidth={8}
                value={percentage}
                styles={{

                    transform: 'rotate(1turn)',
                    path: {stroke: `url(#${idCSS})`, height: "100%"},
                    trail: {
                        stroke: "#BEE6FD"
                    }
                }}
            />
        </div>
    );
};

export default ProgressBar1;
