import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
    // console.log(friend);

    return (
        <Link
            to={`/friend/${friend.id}`}
            className='text-cente space-y-3 p-6 shadow-lg rounded-lg bg-white text-center overflow-hidden'>
            <div>
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className='mx-auto' />
            </div>
            <div className='space-y-2'>
                <h2 className='text-xl font-bold text-[#1F2937]'>{friend.name}</h2>
                <p className='text-xs text-[#64748B]'>{friend.days_since_contact}d ago</p>
                <p>
                    {
                        friend.tags.map((tag, index) => {
                            return <span
                                key={index}
                                className='text-xs font-medium text-[#64748B] mr-2 bg-green-200 px-2 py-1 rounded-full'>
                                {tag.toUpperCase()}
                            </span>
                        })
                    }
                </p>
                <p
                    className={`text-xs inline-block rounded-full px-3 py-1 
                ${friend.statusId === "overdue" ?
                            "bg-[#EF4444] text-white"
                            : friend.statusId === "almost_due" ?
                                "bg-[#EFAD44] text-white"
                                : friend.statusId === "on-track" ?
                                    "bg-[#244D3F] text-white" : ""}`}>{friend.status}</p>
            </div>
        </Link>
    );
};

export default FriendCard;