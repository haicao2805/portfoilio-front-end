import * as React from 'react';
import SeoHead from '../components/seoHead';
import InLogo from '../public/asset/icons/in';
import GmailLogo from '../public/asset/icons/gmail';
import FacebookLogo from '../public/asset/icons/facebook';
import GithubLogo from '../public/asset/icons/github';
import { useForm } from 'react-hook-form';
import { ApiState } from '../api/api.interface';
import { RootState, store } from '../store';
import { useSelector } from 'react-redux';
import useFormError from '../common/hooks/useFormError';
import commonThunk from '../store/api/thunk';
export interface ContactProps {}

interface ContactForm {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}

const defaultValues: ContactForm = {
    email: '',
    message: '',
    phone: '',
    fullName: '',
};

const Contact: React.FunctionComponent<ContactProps> = () => {
    const { register, handleSubmit, reset } = useForm<ContactForm>({ defaultValues });
    const apiState = useSelector<RootState, ApiState>((state) => state.api);
    const errors = useFormError<ContactForm>(defaultValues);
    const handleOnSubmit = (data: ContactForm) => {
        store.dispatch(commonThunk.sendSupport(data));
    };

    React.useEffect(() => {
        if (apiState.message) {
            reset(defaultValues);
        }
    }, [apiState.message]);

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
                    <form onSubmit={handleSubmit(handleOnSubmit)} className="p-4 space-y-2 w-96">
                        <h1 className="text-2xl font-semibold text-center">GET IN TOUCH</h1>

                        <div className="space-y-2">
                            <label className="block">
                                Full Name
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <div>
                                <input
                                    {...register('fullName')}
                                    className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none"
                                />
                                {Boolean(errors.fullName.length) && <p className="text-red-500 ">Full Name {errors.fullName}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block">
                                Email Address
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <div>
                                <input
                                    {...register('email')}
                                    className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none"
                                />
                                {Boolean(errors.email.length) && <p className="text-red-500 ">Email {errors.email}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block">Phone Number</label>
                            <div>
                                <input
                                    {...register('phone')}
                                    className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none"
                                />
                                {Boolean(errors.phone.length) && <p className="text-red-500 ">Phone {errors.phone}</p>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block">
                                Message
                                <span className="font-bold text-red-500">*</span>
                            </label>
                            <div>
                                <textarea
                                    {...register('message')}
                                    className="w-full p-2 duration-300 bg-transparent border-2 border-black rounded-md focus:border-yellow-500 focus:outline-none"
                                    placeholder=" Message..."
                                ></textarea>

                                {Boolean(errors.message.length) && <p className="text-red-500 fade-in">Message {errors.message}</p>}
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="inline-block px-4 py-2 mx-auto font-semibold text-black bg-yellow-500 rounded-md">Send Me</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
