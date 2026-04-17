import React, { useContext, useState } from 'react';
import { TimeLineContext } from '../context/TimeLineDataProvider';
import InteractionsCard from '../ui/InteractionsCard';

const TimeLine = () => {

    const { timeLineAllData } = useContext(TimeLineContext);
    const [active, setActive] = useState('all');
    const filteredByCall = timeLineAllData.filter(data => data.connectionType === 'Call');
    const filteredByText = timeLineAllData.filter(data => data.connectionType === 'Text');
    const filteredByVedio = timeLineAllData.filter(data => data.connectionType === 'Vedio');


    return (

        <div className='w-11/12 max-w-325 mx-auto mt-20 min-h-screen'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Timeline</h2>

            <div className='p-6 border border-gray-200 bg-white flex justify-between rounded-lg mt-10'>
                <div>
                    <button
                        onClick={() => setActive('all')}
                        className={`btn mr-2 shadow-none ${active === 'all' ? "bg-[#244D3F] text-white" : ""}`}>All</button>
                    <button
                        onClick={() => setActive('call')}
                        className={`btn mr-2 shadow-none ${active === 'call' ? "bg-[#244D3F] text-white" : ""}`}>Call</button>
                    <button
                        onClick={() => setActive('text')}
                        className={`btn mr-2 shadow-none ${active === 'text' ? "bg-[#244D3F] text-white" : ""}`}>Text</button>
                    <button
                        onClick={() => setActive('vedio')}
                        className={`btn mr-2 shadow-none ${active === 'vedio' ? "bg-[#244D3F] text-white" : ""}`}>Vedio</button>
                </div>

                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>

            <div>
                {
                    active === 'all' && timeLineAllData.map((data, index) => {
                        return <InteractionsCard
                            key={index}
                            data={data}
                        ></InteractionsCard>
                    })
                }
                {
                    active === 'call' && filteredByCall.map((data, index) => {
                        return <InteractionsCard
                            key={index}
                            data={data}
                        ></InteractionsCard>
                    })
                }
                {
                    active === 'text' && filteredByText.map((data, index) => {
                        return <InteractionsCard
                            key={index}
                            data={data}
                        ></InteractionsCard>
                    })
                }
                {
                    active === 'vedio' && filteredByVedio.map((data, index) => {
                        return <InteractionsCard
                            key={index}
                            data={data}
                        ></InteractionsCard>
                    })
                }
            </div>
        </div>
    );
};

export default TimeLine;