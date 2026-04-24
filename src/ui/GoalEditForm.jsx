import React from 'react';
import { toast } from 'react-toastify';

const GoalEditForm = ({ expectedFriend, setGoalInDays }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedValue = e.target.number.value;
        console.log(editedValue)
        setGoalInDays(editedValue);

        toast.success(`Goal updates for ${expectedFriend.name}`)

    }

    return (
        <form onSubmit={handleSubmit} className=''>
            <input
                type="number"
                name="number"
                placeholder='15'
                className='bg-white p-2 border border-gray-200 rounded-sm w-full sm:w-50  mb-2' />
            <input
                type="submit"
                value="Save"
                className='btn bg-[#244D3F] ml-1 text-white' />
        </form>
    );
};

export default GoalEditForm;