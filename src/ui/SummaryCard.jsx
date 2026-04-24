import React from 'react';

const SummaryCard = () => {
    return (
        <div className='w-11/12 max-w-325 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-10'>
            <div className='bg-white p-4 md:p-8 text-center rounded-lg border border-gray-300 space-y-3'>
                <h3 className='text-xl md:text-3xl font-bold text-[#244D3F]'>10</h3>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>

            <div className='bg-white p-4 md:p-8 text-center rounded-lg border border-gray-300 space-y-3'>
                <h3 className='text-xl md:text-3xl font-bold text-[#244D3F]'>3</h3>
                <p className='text-[#64748B]'>On Track</p>
            </div>

            <div className='bg-white p-4 md:p-8 text-center rounded-lg border border-gray-300 space-y-3'>
                <h3 className='text-xl md:text-3xl font-bold text-[#244D3F]'>7</h3>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>

            <div className='bg-white p-4 md:p-8 text-center rounded-lg border border-gray-300 space-y-3'>
                <h3 className='text-xl md:text-3xl font-bold text-[#244D3F]'>12</h3>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default SummaryCard;