import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import SummaryCard from '../ui/SummaryCard';
import Friends from '../components/Friends';


const Home = () => {

    return (
        <div>
            <Banner />
            <SummaryCard />
            <Suspense fallback={<h2>loading...</h2>}>
                <Friends></Friends>
            </Suspense>
        </div>
    );
};

export default Home;