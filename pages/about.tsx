import * as React from 'react';
import SeoHead from '../components/seoHead';

export interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = () => {
    const [currentSlide, setSlide] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setSlide(currentSlide + 1);
            if (currentSlide >= 3) {
                setSlide(0);
            }
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide]);

    return (
        <>
            <SeoHead title="Cao Chi Hai | About Me" canonical="/about" />
            <div className="z-10 flex flex-col items-center justify-center flex-1 fade-in-instantly md:flex-row md:w-4/5 md:mx-auto md:space-x-16">
                <div className="relative w-48 h-64 overflow-hidden rounded-tl-3xl rounded-br-3xl md:flex-1 md:h-166 ">
                    <div className={`absolute w-full h-full duration-300  ${currentSlide === 0 ? 'opacity-100' : 'opacity-0'}  `}>
                        <img src="/asset/images/slide1.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div>
                    <div className={`absolute w-full h-full duration-300   ${currentSlide === 1 ? 'opacity-100' : 'opacity-0'} `}>
                        <img src="/asset/images/slide2.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div>
                    <div className={`absolute w-full h-full duration-300   ${currentSlide === 2 ? 'opacity-100' : 'opacity-0'} `}>
                        <img src="/asset/images/slide3.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div>
                    <div className={`absolute w-full h-full  duration-300  ${currentSlide === 3 ? 'opacity-100' : 'opacity-0'} `}>
                        <img src="/asset/images/slide4.jpg" alt="Cao Chi Hai" className="absolute block object-cover w-full h-full" />
                    </div>
                </div>
                <div className="p-2 space-y-4 text-white md:flex-1 ">
                    <h1 className="hidden text-4xl font-semibold text-center md:block">About Me</h1>
                    <div>
                        <p className="font-medium">Back Ground</p>
                        <p className="opacity-80">
                            Hi, my name is Cao Chi Hai. I’m a Vietnamese back-end developer living and working in Ho Chi Minh city, Viet Nam. I have
                            learned Software Enginnering at FPT university.
                        </p>
                    </div>
                    <div>
                        <p className="font-medium">Skill</p>
                        <p className="opacity-80">During 2020, I learned about the website building such as: HTML, CSS, Javascript</p>
                    </div>
                    <div>
                        <p className="font-medium">More About Me</p>
                        <p className="opacity-80">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                            ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                            quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                            iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
