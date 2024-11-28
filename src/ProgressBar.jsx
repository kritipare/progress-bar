import React, { useEffect, useState } from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress === 100) {
                clearInterval(timer);
                setProgress(0);
            } else setProgress((progress) => progress + 10);
        }, 1000);

        return () => clearInterval(timer);
    }, [progress]);

    return (
        <div>
            <div className='outer-bar'>
                <div
                    className='inner-bar'
                    style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
