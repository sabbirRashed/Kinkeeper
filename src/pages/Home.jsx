import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import SummaryCard from '../ui/SummaryCard';
import Friends from '../components/Friends';
import { CirclesWithBar } from 'react-loader-spinner';
import LoadingSpinner from '../ui/LoadingSpinner';


const Home = () => {

    return (
        <div>
            <Banner />
            <SummaryCard />
            <Suspense fallback={<LoadingSpinner/>}>
                <Friends></Friends>
            </Suspense>
        </div>
    );
};

export default Home;