import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import FriendCard from '../ui/FriendCard';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { BiSolidArchive } from 'react-icons/bi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';
import { IoVideocamOutline } from 'react-icons/io5';
import { TimeLineContext } from '../context/TimeLineDataProvider';
import { FaRegEdit } from 'react-icons/fa';
import GoalEditForm from '../ui/GoalEditForm';

const FriendDetails = () => {
    const { friendId } = useParams();
    const friendData = useLoaderData();
    const { handleCheckInBtn } = useContext(TimeLineContext);
    const [isClickedEdit, setIsClickedEdit] = useState(false);
    

    const expectedFriend = friendData.find((friend) => friend.id === Number(friendId));

    const {
        name,
        picture,
        email,
        days_since_contact,
        status,
        statusId,
        tags,
        bio,
        next_due_date,
        goal

    } = expectedFriend;
    const [goalInDays, setGoalInDays] = useState(goal)

    


    return (
        <div className=' w-11/12 max-w-325 mx-auto mt-20  grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className=''>
                <div
                    className='text-cente space-y-3 p-6 shadow-lg rounded-lg bg-white text-center overflow-hidden'>
                    <div>
                        <img
                            src={picture}
                            alt={name}
                            className='mx-auto' />
                    </div>
                    <div className='space-y-2'>
                        <h2 className='text-xl font-bold text-[#1F2937]'>{name}</h2>
                        <p
                            className={`text-xs inline-block rounded-full px-3 py-1 
                        ${statusId === "overdue" ?
                                    "bg-[#EF4444] text-white"
                                    : statusId === "almost_due" ?
                                        "bg-[#EFAD44] text-white"
                                        : statusId === "on-track" ?
                                            "bg-[#244D3F] text-white" : ""}`}
                        >
                            {status}
                        </p>
                        <p>
                            {
                                tags.map((tag, index) => {
                                    return <span
                                        key={index}
                                        className='text-xs font-medium text-[#64748B] mr-2 bg-green-200 px-2 py-1 rounded-full'>
                                        {tag.toUpperCase()}
                                    </span>
                                })
                            }
                        </p>
                        <p className='italic text-[#64748B] mb-0'>"{bio}"</p>
                        <p className='text-[#64748B]'>Email: {email}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <button className='btn bg-white rounded-xs shadow-lg py-6'><RiNotificationSnoozeLine />Snooze 2 weeks</button>
                    <button className='btn bg-white rounded-xs shadow-lg py-6'><BiSolidArchive />Archive</button>
                    <button className='btn bg-white rounded-xs shadow-lg py-6'><RiDeleteBinLine />Delete</button>
                </div>
            </div>

            <div className=' min-h-50 col-span-2 space-y-6'>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='bg-white text-center rounded-lg px-4 py-8 space-y-2 shadow-lg'>
                        <h3 className='text-2xl font-bold'>{days_since_contact}</h3>
                        <p className='text-[#64748B]'>Days Since Contact</p>
                    </div>
                    <div className='bg-white text-center rounded-lg px-4 py-8 space-y-2 shadow-lg'>
                        <h3 className='text-2xl font-bold'>{goalInDays}</h3>
                        <p className='text-[#64748B]'>Goal (Days)</p>
                    </div>
                    <div className='bg-white text-center rounded-lg px-4 py-8 space-y-2 shadow-lg'>
                        <h3 className='text-2xl font-bold'>{next_due_date}</h3>
                        <p className='text-[#64748B]'>Next Due</p>
                    </div>
                </div>

                <div className='space-y-4 p-6 rounded-lg shadow-lg bg-white'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-xl font-bold text-[#244D3F]'>Relationship Goal</h3>
                        <button
                            onClick={() => { setIsClickedEdit(!isClickedEdit) }}
                            className='btn'>
                            <FaRegEdit />Edit
                        </button>
                    </div>
                    <p className='text-[#64748B]'>
                        Connect every
                        <span className='font-bold text text-[#1F2937]'> {goal} days</span>
                    </p>
                    {
                        isClickedEdit && <div className='border border-gray-200 bg-[#F8FAFC] p-4 rounded-lg flex items-center gap-6'>
                            <p>Goal in Days</p>
                           <GoalEditForm 
                           expectedFriend={expectedFriend}
                           setGoalInDays={setGoalInDays}></GoalEditForm>
                        </div>
                    }
                </div>

                <div className='space-y-4 p-6 rounded-lg shadow-lg bg-white'>

                    <h3 className='text-xl font-bold text-[#244D3F]'>Quick Check-In</h3>

                    <div className='grid grid-cols-3 gap-6'>
                        <button
                            onClick={() => { handleCheckInBtn(expectedFriend, "Call") }}
                            className='btn h-auto rounded-lg flex-col py-4'>
                            <span><LuPhoneCall className='text-2xl' /></span>
                            <p className='text-[#64748B]'>Call</p>
                        </button>
                        <button
                            onClick={() => { handleCheckInBtn(expectedFriend, "Text") }}
                            className='btn h-auto rounded-lg flex-col py-4'>
                            <span><MdOutlineMessage className='text-2xl' /></span>
                            <p className='text-[#64748B]'>Text</p>
                        </button>
                        <button
                            onClick={() => { handleCheckInBtn(expectedFriend, "Vedio") }}
                            className='btn h-auto rounded-lg flex-col py-4 '>
                            <span><IoVideocamOutline className='text-3xl' /></span>
                            <p className='text-[#64748B]'>Vedio</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;