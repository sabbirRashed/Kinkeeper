import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center mt-10'>
            <CirclesWithBar></CirclesWithBar>
        </div>
    );
};

export default LoadingSpinner;