import * as React from 'react';
import SeoHead from '../components/seoHead';
import NestJSLogo from '../public/asset/icons/nestjs';
import MysqlLogo from '../public/asset/icons/mysql';
import RedisLogo from '../public/asset/icons/redis';
import SocketLogo from '../public/asset/icons/socket.io';
import NextJsLogo from '../public/asset/icons/nextjs';
import ReduxLogo from '../public/asset/icons/redux';
export interface ProjectProps {}

const Project: React.FunctionComponent<ProjectProps> = () => {
    return (
        <>
            <SeoHead title="Cao Chi Hai | Project" canonical="/project" />
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-2 pt-24 space-y-16 transform -translate-y-16">
                <div>
                    <h1 className="text-4xl font-semibold text-white">My Project</h1>
                </div>
                <div className="text-white bg-gray-800 bg-opacity-80 md:flex md:w-4/5">
                    <div className="md:h-166 ">
                        <img src="/asset/images/project1.jpg" alt="project 1" className="object-cover w-full h-full " />
                    </div>
                    <div className="p-2 space-y-4 md:p-8 ">
                        <h1 className="text-2xl font-semibold md:text-4xl">My Chess</h1>
                        <div className="space-y-2 opacity-80">
                            <p>
                                My chess is an online web games allow people can play chess or tic tac toe and share their happiness across the world.
                                This website is inspired by Chess.com and Steam.
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>Front-end: </p>
                                <div className="flex space-x-2">
                                    <NextJsLogo />
                                    <ReduxLogo />
                                </div>
                            </div>
                            <p className="flex items-center space-x-1">
                                <p>Back-end: </p>
                                <div className="flex space-x-2">
                                    <NestJSLogo />
                                    <MysqlLogo />
                                    <RedisLogo />
                                    <SocketLogo />
                                </div>
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>My Role:</p>
                                <p className="px-2 py-1 border border-white">backend</p>
                            </div>
                            <p>Team size: 3</p>
                        </div>
                        <div>
                            <a href="/" className="inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md">
                                Project Detail
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <a href="/" className="inline-block px-8 py-2 mx-auto font-semibold text-white bg-blue-600 rounded-md">
                        Show More
                    </a>
                </div>
            </div>
        </>
    );
};

export default Project;
