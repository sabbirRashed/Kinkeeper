import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className='w-11/12 max-w-325 mx-auto text-center space-y-4 mt-20'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-[#64748B] max-w-140 mx-auto'>Your personal shelf of meaningfull connections. Browse, tend and nature the relationships that matter most.</p>
            <button className='btn bg-[#244D3F] text-white mt-4'><FiPlus />Add a Friend</button>
        </div>
    );
};

export default Banner;