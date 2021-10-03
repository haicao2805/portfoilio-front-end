import * as React from 'react';
import InLogo from '../public/asset/icons/in';
import GmailLogo from '../public/asset/icons/gmail';
import FacebookLogo from '../public/asset/icons/facebook';
import GithubLogo from '../public/asset/icons/github';

export interface ProfileProps {}

const Profile: React.FunctionComponent<ProfileProps> = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 transform -translate-y-32 fade-in-instantly md:flex-row md:w-4/5 md:mx-auto md:space-x-16">
            <div className="mt-12 md:mt-0 ">
                <div className="w-48 h-48 overflow-hidden rounded-full md:h-96 md:w-96 md:ml-auto">
                    <img src="/asset/images/avatar.jpg" alt="Hai Cao" className="object-cover w-full h-full " />
                </div>
            </div>
            <div className="space-y-4 ">
                <div className="space-y-4 text-center md:text-left">
                    <p className="text-lg text-white opacity-90 md:text-4xl">Hi there👋, I'm</p>
                    <h1 className="font-semibold text-white md:text-8xl">Cao Chi Hai</h1>
                    <p className="text-lg font-medium text-yellow-400 opacity-90 md:text-4xl ">back-end developer</p>
                    <p className="px-4 text-white md:max-w-lg opacity-80 md:w-full md:text-lg md:px-0">
                    I am a junior backend developer with 2-years of learning and practicing ExpressJS and NestJS to build servers. Passionate about learning new knowledge, loving to solve the problem, and finding ways to work more effectively.
                    </p>
                </div>
                <div className="flex justify-center space-x-4 md:justify-start">
                    <a
                        href="https://www.linkedin.com/in/cao-ch%C3%AD-h%E1%BA%A3i-127033219/?fbclid=IwAR2MRUuXuliROnVhJW_yaXSGkFe7nEvv9hDSHfK8OfnQrmlgPj_odj5saJc"
                        target="__blank"
                    >
                        <InLogo />
                    </a>
                    <a href="mailTo:haicao2805@gmail.com">
                        <GmailLogo />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100009261397293" target="__blank">
                        <FacebookLogo />
                    </a>
                    <a href="https://github.com/haicao2805" target="__blank">
                        <GithubLogo />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
