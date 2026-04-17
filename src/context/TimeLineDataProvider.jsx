import React, { createContext, useState } from 'react';
import { } from 'react-router';
import { toast } from 'react-toastify';


export const TimeLineContext = createContext('');

const TimeLineDataProvider = ({ children }) => {

    const [timeLineAllData, setTimeLineAllData] = useState([]);

    const handleCheckInBtn = (connectedFriend, type) => {
        toast.success(`${type} with ${connectedFriend.name}`)

        const date = new Date();
        const formatedDate = date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })

        const timeLineData = {
            name: connectedFriend.name,
            connectionType: type,
            time: formatedDate,
        }
        setTimeLineAllData([...timeLineAllData, timeLineData]);

    }

    const data = {
        handleCheckInBtn,
        timeLineAllData,
        setTimeLineAllData
    }

    return (
        <div>
            <TimeLineContext.Provider value={data}>
                {children}
            </TimeLineContext.Provider>
        </div>
    );
};

export default TimeLineDataProvider;