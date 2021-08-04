import * as React from 'react';
import Link from 'next/link';
import InLogo from '../public/asset/icons/in';
import GmailLogo from '../public/asset/icons/gmail';
import FacebookLogo from '../public/asset/icons/facebook';
import GithubLogo from '../public/asset/icons/github';

export interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
    const [isActive, setActive] = React.useState(false);
    return (
        <div className="fixed z-50 w-full p-4 text-white md:p-8 ">
            <div className="relative z-30 flex items-center justify-between">
                <div className="font-serif text-2xl italic font-medium">
                    <Link href="/">Hai Cao</Link>
                </div>
                <button
                    className="menu focus:outline-none"
                    onClick={(click) => {
                        setActive(!isActive);
                        click.currentTarget.classList.toggle('opened');
                    }}
                    aria-label="Main Menu"
                >
                    <svg width="48" height="48" viewBox="0 0 100 100">
                        <path
                            className="line line1"
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path
                            className="line line3"
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        />
                    </svg>
                </button>
            </div>
            <div
                className={`duration-300 origin-top transform  ${
                    isActive ? 'scale-y-100' : 'scale-y-0'
                }   bg-cod-gray-500 h-full fixed top-0 left-0 w-full z-20 bg-opacity-70`}
            >
                <ul
                    className={`flex flex-col items-center justify-center h-full space-y-12 text-3xl transform opacity-0 ${
                        isActive ? 'fade-in' : ''
                    }`}
                >
                    <li className="duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500">HOME</li>
                    <li className="duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500">PORTFOLIO</li>
                    <li className="duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500">BLOG</li>
                    <li className="duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500">ABOUT</li>
                    <li className="duration-300 transform cursor-pointer hover:scale-110 hover:text-yellow-500">CONTACT</li>
                    <li>
                        <div className="flex space-x-4">
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
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
