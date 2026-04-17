import React, { use } from 'react';
import FriendCard from '../ui/FriendCard';


const friendsRes = fetch('/friends.json').then(res => res.json());

const Friends = () => {
    const friendsData = use(friendsRes);
    // console.log(friendsData);

    return (
        <div className='w-11/12 max-w-325 mx-auto mt-20'>
            <h2 className='text-xl md:text-2xl font-bold text-[#1F2937] mb-4 '>Your Friends</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    friendsData.map((friend) => {
                        return <FriendCard
                            key={friend.id}
                            friend={friend}
                            showDays={true}>
                        </FriendCard>
                    })
                }
            </div>
        </div>
    );
};

export default Friends;