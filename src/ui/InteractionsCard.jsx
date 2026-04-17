import React from 'react';
import { IoVideocamOutline } from 'react-icons/io5';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';

const InteractionsCard = ({ data }) => {
    return (
        <div className='border border-gray-200 bg-white rounded-lg p-4 mt-6 flex items-center gap-6'>
            <div className='bg-gray-200 p-5 rounded-lg'>
                {
                    data.connectionType === "Call" ? (
                        <LuPhoneCall className='text-2xl' />
                    ) : data.connectionType === "Text" ? (
                        <MdOutlineMessage className='text-2xl' />
                    ) : data.connectionType === "Vedio" ? (
                        <IoVideocamOutline className='text-3xl' />
                    ) : null
                }
            </div>
            <div>
                <h3 className='text-lg font-bold text-[#244D3F]  mb-2'><span>{data.connectionType}</span> with {data.name}</h3>
                <p >{data.time}</p>
            </div>
        </div>
    );
};

export default InteractionsCard;