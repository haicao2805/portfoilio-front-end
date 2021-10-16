import * as React from 'react';
import SeoHead from '../components/seoHead';
import NestJSLogo from '../public/asset/icons/nestjs';
import SocketLogo from '../public/asset/icons/socket.io';
import NextJsLogo from '../public/asset/icons/nextjs';
import ReduxLogo from '../public/asset/icons/redux';
import TooltipDropBox from '../components/tooltip';
import CSharpIcon from '../components/icon/csharp';
import DockerIcon from '../components/icon/docker';
import DotnetIcon from '../components/icon/dotnet';
import ExpressIcon from '../components/icon/express';
import GithubIcon from '../components/icon/github';
import JavaIcon from '../components/icon/java';
import JestIcon from '../components/icon/jest';
import MongoDBIcon from '../components/icon/mongodb';
import MysqlIcon from '../components/icon/mysql';
import NestJsIcon from '../components/icon/nestjs';
import NginxIcon from '../components/icon/nginx';
import RedisIcon from '../components/icon/redis';
import SocketIcon from '../components/icon/socket';
import SqlServerIcon from '../components/icon/sqlserver';
import TypescriptIcon from '../components/icon/typescript';
import TailwindIcon from "../components/icon/tailwind";
import JQueryIcon from "../components/icon/jQuery";
import WebpackIcon from "../components/icon/webpack";
import BootstrapIcon from "../components/icon/bootstrap";
export interface ProjectProps {}

const Project: React.FunctionComponent<ProjectProps> = () => {
    return (
        <>
            <SeoHead title="Cao Chi Hai | Project" canonical="/project" />
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 p-2 pt-24 space-y-16 transform -translate-y-16">
                <div>
                    <h1 className="text-3xl font-semibold text-white">My Project</h1>
                </div>
                
                <div className="text-white bg-gray-800 bg-opacity-80 md:w-4/5 grid md:grid-cols-7 grid-cols-1 mb-5">
                    <div className="md:h-166 col-span-5">
                        <img src="/asset/images/mychess.png" alt="my chess" className="object-cover w-full h-full " />
                    </div>
                    <div className="p-2 space-y-4 md:p-8 col-span-2">
                        <h1 className="text-2xl font-semibold md:text-3xl">My Chess</h1>
                        <div className="space-y-2 opacity-80">
                            <p>
                                My chess is an online web games allow people can play chess or tic tac toe and share their happiness across the world.
                                This website is inspired by Chess.com and Steam.
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>Frontend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content="NextJS" maxLength={0} position="bottom-full">
                                        <NextJsLogo />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Redux" maxLength={0} position="bottom-full">
                                        <ReduxLogo />
                                    </TooltipDropBox>
                                </div>
                            </div>
                            <p className="flex items-center space-x-1">
                                <p>Backend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content="NestJS" maxLength={0} position="bottom-full">
                                        <NestJsIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="MySQL" maxLength={0} position="bottom-full">
                                        <MysqlIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Redis" maxLength={0} position="bottom-full">
                                        <RedisIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Socket.io" maxLength={0} position="bottom-full">
                                        <SocketIcon />
                                    </TooltipDropBox>
                                </div>
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>My Role:</p>
                                <p className="px-2 py-1 border border-white">backend</p>
                            </div>
                            <p>Team size: 3</p>
                        </div>
                        <div>
                            <a href="https://github.com/Heaty566/mychess" target="_blank" className="inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md">
                                Project Detail
                            </a>
                        </div>
                        <div>
                            <a href="https://mychess.vinhnhan.com/" target="_blank" className="inline-block px-4 py-2 mx-auto font-semibold text-white bg-blue-500 rounded-md">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-white bg-gray-800 bg-opacity-80 md:w-4/5 grid md:grid-cols-7 grid-cols-1">
                    <div className="md:h-166 col-span-5">
                        <img src="/asset/images/sanninsc.png" alt="project 1" className="object-cover w-full h-full " />
                    </div>
                    <div className="p-2 space-y-4 md:p-8 col-span-2">
                        <h1 className="text-2xl font-semibold md:text-3xl">SanninSC Hotel</h1>
                        <div className="space-y-2 opacity-80">
                            <p>
                            SanninSC Hotel is a website that allows the manager to manage lodging reservations and provide booking services online for customers. This project was the final assignment project for Java Web application development course, and we got 9.5 points for both implementation and documentation.
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>Frontend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content="Tailwind" maxLength={0} position="bottom-full">
                                        <TailwindIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="jQuery" maxLength={0} position="bottom-full">
                                        <JQueryIcon />
                                    </TooltipDropBox>
                                </div>
                            </div>
                            <p className="flex items-center space-x-1">
                                <p>Backend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content="Java Servlet" maxLength={0} position="bottom-full">
                                        <JavaIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="SQL Server" maxLength={0} position="bottom-full">
                                        <SqlServerIcon />
                                    </TooltipDropBox>
                                </div>
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>My Role:</p>
                                <p className="px-2 py-1 border border-white">backend</p>
                            </div>
                            <p>Team size: 3</p>
                        </div>
                        <div>
                            <a href="https://github.com/tantruong2303/booking-hotel" target="_blank" className="inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md">
                                Project Detail
                            </a>
                        </div>
                        <div>
                            <a href="https://booking.vinhnhan.com/PRJ301_SE08D_BookingHotel/" target="_blank" className="inline-block px-4 py-2 mx-auto font-semibold text-white bg-blue-500 rounded-md">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-white bg-gray-800 bg-opacity-80 md:w-4/5 grid md:grid-cols-7 grid-cols-1">
                    <div className="md:h-166 col-span-5">
                        <img src="/asset/images/fptblog.png" alt="project 1" className="object-cover w-full h-full " />
                    </div>
                    <div className="p-2 space-y-4 md:p-8 col-span-2">
                        <h1 className="text-2xl font-semibold md:text-3xl">FPT Blog</h1>
                        <div className="space-y-2 opacity-80">
                            <p>
                            FPT Blog is a blog website for FPT University students can write their post to share their knowledge, experiences, thinking, ...; like, dislike or comment a post; share their post. The website also support a manager to manage the system's resource and view the statistic.
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>Frontend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content="Tailwind" maxLength={0} position="bottom-full">
                                        <TailwindIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Typescript" maxLength={0} position="bottom-full">
                                        <TypescriptIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Webpack" maxLength={0} position="bottom-full">
                                        <WebpackIcon />
                                    </TooltipDropBox>
                                </div>
                            </div>
                            <p className="flex items-center space-x-1">
                                <p>Backend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content=".NET" maxLength={0} position="bottom-full">
                                        <DotnetIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="SQL Server" maxLength={0} position="bottom-full">
                                        <SqlServerIcon />
                                    </TooltipDropBox>
                                </div>
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>My Role:</p>
                                <p className="px-2 py-1 border border-white">backend</p>
                            </div>
                            <p>Team size: 3</p>
                        </div>
                        <div>
                            <a href="https://github.com/MonoInfinity/fpt-blog" target="_blank" className="inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md">
                                Project Detail
                            </a>
                        </div>
                        <div>
                            <a href="https://fptblog.vinhnhan.com/" target="_blank" className="inline-block px-4 py-2 mx-auto font-semibold text-white bg-blue-500 rounded-md">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-white bg-gray-800 bg-opacity-80 md:w-4/5 grid md:grid-cols-7 grid-cols-1">
                    <div className="md:h-166 col-span-5">
                        <img src="/asset/images/bulkybook.png" alt="project 1" className="object-cover w-full h-full " />
                    </div>
                    <div className="p-2 space-y-4 md:p-8 col-span-2">
                        <h1 className="text-2xl font-semibold md:text-3xl">Bulky Book</h1>
                        <div className="space-y-2 opacity-80">
                            <p>
                            Bulky Book is an e-commerce website that allow individual user or company can buy books, payment online with Stripe. The website also support a admin to manage books, orders, and users. 
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>Frontend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content="Bootstrap" maxLength={0} position="bottom-full">
                                        <BootstrapIcon />
                                    </TooltipDropBox>
                                </div>
                            </div>
                            <p className="flex items-center space-x-1">
                                <p>Backend:</p>
                                <div className="flex space-x-2">
                                    <TooltipDropBox content=".NET" maxLength={0} position="bottom-full">
                                        <DotnetIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="SQL Server" maxLength={0} position="bottom-full">
                                        <SqlServerIcon />
                                    </TooltipDropBox>
                                </div>
                            </p>
                            <div className="flex items-center space-x-1">
                                <p>My Role:</p>
                                <p className="px-2 py-1 border border-white">backend</p>
                                <p className="px-2 py-1 border border-white">frontend</p>
                            </div>
                            <p>Team size: 1</p>
                        </div>
                        <div>
                            <a href="https://github.com/haicao2805/bulky-book" target="_blank" className="inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md">
                                Project Detail
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <a href="/" className="inline-block px-8 py-2 mx-auto font-semibold text-white bg-blue-500 rounded-md">
                        Show More
                    </a>
                </div>
            </div>
        </>
    );
};

export default Project;
