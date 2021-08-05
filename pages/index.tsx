import * as React from 'react';

import Profile from '../components/profile';
import SeoHead from '../components/seoHead';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <>
            <SeoHead title="Cao Chi Hai | Portfolio" canonical="/" />
            <div className="relative z-10 flex items-center justify-center flex-1 pt-16">
                <Profile />
            </div>
        </>
    );
};

export default Home;
