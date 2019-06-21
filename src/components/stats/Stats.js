import React from 'react';

import './style.css';

const Stats = ({ stats }) => {
    console.log(stats)
    if (!stats) {
        // loading not yet started
        return <span className="stats">Loading...</span>;
    }
    return (
        <span className="stats">
            {stats.error && '🤯 Error!'}
            {stats.isLoading && '🙄 Loading...'}
            {stats.downloads !== null && `🤘 ${stats.downloads}`}
        </span>
    );
};

export default Stats;
