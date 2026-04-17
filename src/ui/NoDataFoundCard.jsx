import React from 'react';

const NoDataFoundCard = () => {
    return (
        <div className="w-full h-75 bg-white rounded-lg p-4 shadow mt-10 flex items-center justify-center">
            <h1 className="text-gray-400 text-2xl font-bold">No interaction data available</h1>
        </div>
    );
};

export default NoDataFoundCard;