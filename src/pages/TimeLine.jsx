import React, { useContext } from 'react';
import { TimeLineContext } from '../context/TimeLineDataProvider';

const TimeLine = () => {
    
    const { timeLineAllData } = useContext(TimeLineContext);
    console.log(timeLineAllData);

    return (

        <div>
            Time Line page
        </div>
    );
};

export default TimeLine;