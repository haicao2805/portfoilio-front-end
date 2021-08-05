import * as React from 'react';
import SeoHead from '../components/seoHead';
import InLogo from '../public/asset/icons/in';
import GmailLogo from '../public/asset/icons/gmail';
import FacebookLogo from '../public/asset/icons/facebook';
import GithubLogo from '../public/asset/icons/github';
export interface ContactProps {}

const Contact: React.FunctionComponent<ContactProps> = () => {
    return (
        <>
            <SeoHead title="Cao Chi Hai | Contact" canonical="/about" />
            <div className="relative z-10 flex items-center justify-center flex-1">
                <div className="flex flex-col-reverse p-4 text-white bg-gray-800 rounded-md fade-in-instantly md:border-4 md:space-x-8 borer-gray-600 bg-opacity-60 md:flex-row">
                    <div className="">
                        <div className="p-4 space-y-6 ">
                            <h1 className="text-2xl text-center">Contact Me Via</h1>
                            <div className="space-y-4 text-xl opacity-80">
                                <p>Email: haicao2805@gmail.com </p>
                                <p>Phone: +84 862 334 006 </p>
                                <p>Address: Ho Chi Minh city, Viet Nam</p>
                            </div>
                            <div className="flex space-x-4 md:justify-center ">
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
                    <div className="p-4 space-y-2 w-96">
                        <h1 className="text-2xl font-semibold text-center">GET IN TOUCH</h1>
                        {/* <div className="font-medium text-green-500">Thank............</div> */}
                        <div className="space-y-2">
                            <label className="block">
                                Full Name
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <div>
                                <input className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none" />
                                {/* <p className="font-medium text-red-500">Username is wrong</p> */}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block">
                                Email Address
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <div>
                                <input className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none" />
                                {/* <p className="font-medium text-red-500">Username is wrong</p> */}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block">Phone Number</label>
                            <div>
                                <input className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none" />
                                {/* <p className="font-medium text-red-500">Username is wrong</p> */}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block">
                                Message
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <div>
                                <textarea
                                    className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none"
                                    placeholder=" Message..."
                                ></textarea>

                                {/* <p className="font-medium text-red-500">Username is wrong</p> */}
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md">Send Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
