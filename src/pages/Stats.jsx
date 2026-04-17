import React from 'react';
import StatsCharts from '../ui/StatsCharts';

const Stats = () => {
    return (
        <div className='w-11/12 max-w-325 mx-auto mt-20 min-h-screen'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Friendship Analytics</h2>
            <StatsCharts ></StatsCharts>
        </div>
    );
};

export default Stats;