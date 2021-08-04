import * as React from 'react';
import Profile from '../components/profile';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
    return (
        <div className="relative z-10 pt-16">
            <Profile />
        </div>
    );
};

export default Home;
