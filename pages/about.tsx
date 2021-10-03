import * as React from 'react';
import SeoHead from '../components/seoHead';
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
import TooltipDropBox from '../components/tooltip';

export interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
    // const [currentSlide, setSlide] = React.useState(0);

    // React.useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setSlide(currentSlide + 1);
    //         if (currentSlide >= 3) {
    //             setSlide(0);
    //         }
    //     }, 3000);
    //     return () => {
    //         clearInterval(intervalId);
    //     };
    // }, [currentSlide]);

    return (
        <>
            <SeoHead title="Cao Chi Hai | About Me" canonical="/about" />
            <div className="z-10 flex flex-col items-center justify-center flex-1 fade-in-instantly md:flex-row md:w-4/5 md:mx-auto md:space-x-16">
                <div className="relative w-48 h-64 overflow-hidden rounded-tl-3xl rounded-br-3xl md:flex-1 md:h-166 ">
                    <div className={`absolute w-full h-full duration-300 opacity-100  `}>
                        <img src="/asset/images/slide1.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div>
                    {/* <div className={`absolute w-full h-full duration-300  ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}  `}>
                        <img src="/asset/images/slide1.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div> */}
                    {/* <div className={`absolute w-full h-full duration-300   ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'} `}>
                        <img src="/asset/images/slide2.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div>
                    <div className={`absolute w-full h-full duration-300   ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'} `}>
                        <img src="/asset/images/slide3.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div>
                    <div className={`absolute w-full h-full  duration-300  ${currentSlide === 3 ? 'opacity-100' : 'opacity-0'} `}>
                        <img src="/asset/images/slide4.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div> */}
                </div>
                <div className="p-2 space-y-4 text-white md:flex-1 ">
                    <h1 className="hidden text-4xl font-semibold text-center md:block">About Me</h1>
                    <div>
                        <p className="font-medium text-2xl">Back Ground</p>
                        <p className="opacity-80">
                            Hi, my name is Cao Chi Hai. I’m a Vietnamese back-end developer living and working in Ho Chi Minh city, Viet Nam. I have
                            learned Software Enginnering at FPT university.
                        </p>
                    </div>
                    <div>
                        <p className="font-medium text-2xl">Skill</p>
                        <div className="space-y-4 mt-1">
                            <div className="space-y-2">
                                <p className="text-xl">Languages:</p>
                                <div className="flex space-x-6">
                                    <TooltipDropBox content="Typescript" maxLength={0} position="bottom-full">
                                        <TypescriptIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="C#" maxLength={0} position="bottom-full">
                                        <CSharpIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Java" maxLength={0} position="bottom-full">
                                        <JavaIcon />
                                    </TooltipDropBox>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-xl">Frameworks:</p>
                                <div className="flex space-x-6">
                                <TooltipDropBox content="NestJS" maxLength={0} position="bottom-full">
                                        <NestJsIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="ExpressJS" maxLength={0} position="bottom-full">
                                        <ExpressIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content=".Net" maxLength={0} position="bottom-full">
                                        <DotnetIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Socket.io" maxLength={0} position="bottom-full">
                                        <SocketIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Jest" maxLength={0} position="bottom-full">
                                        <JestIcon />
                                    </TooltipDropBox>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xl">Databases:</p>
                                <div className="flex space-x-6">
                                    <TooltipDropBox content="SQL Server" maxLength={0} position="bottom-full">
                                        <SqlServerIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="MySQL" maxLength={0} position="bottom-full">
                                        <MysqlIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="MongoDB" maxLength={0} position="bottom-full">
                                        <MongoDBIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Redis" maxLength={0} position="bottom-full">
                                        <RedisIcon />
                                    </TooltipDropBox>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xl">Others:</p>
                                <div className="flex space-x-6">
                                    <TooltipDropBox content="Github" maxLength={0} position="bottom-full">
                                        <GithubIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Docker" maxLength={0} position="bottom-full">
                                        <DockerIcon />
                                    </TooltipDropBox>
                                    <TooltipDropBox content="Nginx" maxLength={0} position="bottom-full">
                                        <NginxIcon />
                                    </TooltipDropBox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <p className="font-medium">More About Me</p>
                        <p className="opacity-80">
                            Nua them thong tin sau, gio chua biet ghi gi
                        </p> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
