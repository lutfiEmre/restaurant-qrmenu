'use client'
import Image from "next/image";
import loginbg from '/public/loginbg.svg'
import longbg from '/public/bgground.svg'
import login1 from '/public/login1.svg'
import login2 from '/public/login2.svg'
import login3 from '/public/login3.svg'
import {useEffect, useState} from "react";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';

export default function Home() {

    const [swipers,setSwipers] = useState(null)
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = (per) => {
        swipers.slideTo(per === 2 ? 0 : per,1)
        setActiveIndex(per)
    }

    const [loginp,setLoginp] = useState('sign')
  return (
    <main className="flex w-full min-h-screen overflow-hidden   flex-row items-center justify-start ">
        <div className={'flex flex-row w-full gap-[38px] items h-screen p-[12px]  mt-[20px]  md:py-[24px]'}>
            <div className={'hidden md:flex flex-col w-[50%] h-full justify-center items-center relative'}>
                <div className={'absolute top-[108px] z-20 w-fit text-white'}>
                    <div className={'flex w-fit h-fit flex-col  justify-around items-center'}>
                        <div className={'flex flex-col items-center'}>
                            <h1 className={'font-semibold text-[25px] lg:text-[38px] text-white'}>
                                Welcome to User Metrics
                            </h1>
                            <h3 className={'font-light text-[16px] w-[300px] lg:w-full flex items-center justify-center lg:text-[22px]'}>The best access platform for teams</h3>
                        </div>
                    </div>
                </div>
                <div className={'absolute bottom-[108px] z-20 w-fit text-white'}>
                    <div className={'flex w-fit h-fit flex-col  justify-around items-center'}>
                        <div className={'flex flex-col gap-1 items-center'}>
                            <h1 className={'font-semibold text-[30px] lg:text-[40px]  text-white'}>
                                Access Management
                            </h1>
                            <h3 className={'font-light md:w-[350px] lg:w-[450px] text-center text-[18px] lg:text-[22px]'}>
                                Effortless change the roles of your marketing team across all marketing tools.
                            </h3>
                            <div className={'mt-9 flex flex-row gap-[4px]'}>
                                <div  onClick={() => {nextSlide(0)}} className={`${activeIndex === 0 ? "w-[24px] bg-white" : "w-[8px] bg-[#96BFFF]"} h-[8px] cursor-pointer rounded-[10px] `}></div>
                                <div  onClick={() => {nextSlide(1)}} className={`${activeIndex === 1 ? "w-[24px] bg-white" : "w-[8px] bg-[#96BFFF]"} h-[8px] cursor-pointer rounded-[10px] `}></div>
                                <div  onClick={() => {nextSlide(2)}} className={`${activeIndex === 2 ? "w-[24px] bg-white" : "w-[8px] bg-[#96BFFF]"} h-[8px] cursor-pointer rounded-[10px] `}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full absolute  h-full'}>
                    <Swiper
                        className={'w-full cursor-pointer transition-all duration-300 rounded-[20px] object-cover h-full'}
                        spaceBetween={0}
                        navigation
                        effect={"slide"}
                        slidesPerView={1}
                        onSlideChange={(swiper) => {setActiveIndex(swiper.activeIndex)}}
                        onSwiper={setSwipers}                    >
                        <SwiperSlide>
                            <Image className={'w-full transition-all duration-300 object-cover h-full'} src={login1} width={676} height={990} alt={''}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className={'w-full transition-all duration-300 object-cover h-full'} src={login2} width={676} height={990} alt={''}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className={'w-full transition-all duration-300 object-cover h-full'} src={login3} width={676} height={990} alt={''}/>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>

            </div>
            <div className={'flex w-full md:justify-start justify-around md:w-[50%] flex-col items-center w- h-full'}>
                <Link className={'w-full '} href={'/waitlist2'}>
                    <div className={'w-full xl:ml-[10px] flex lg:justify-start md:justify-center items-center flex-row gap-[4px]'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M12.0227 3.35225C12.2224 3.55195 12.2406 3.86445 12.0772 4.08466L12.0227 4.14775L7.17075 9L12.0227 13.8523C12.2224 14.052 12.2406 14.3645 12.0772 14.5847L12.0227 14.6477C11.823 14.8474 11.5105 14.8656 11.2903 14.7022L11.2273 14.6477L5.97725 9.39775C5.77755 9.19805 5.7594 8.88555 5.92279 8.66534L5.97725 8.60225L11.2273 3.35225C11.4469 3.13258 11.8031 3.13258 12.0227 3.35225Z" fill="#465FF1"/>
                        </svg>
                        <h1 className={'text-[18px] text-[#465FF1] font-normal'}>
                            Back to Website
                        </h1>
                    </div>
                </Link>
                <div className={' mt-[20px] flex flex-col gap-[27px] w-[358px] h-fit '}>
                    <div className={'flex flex-row gap-[9px] justify-center items-center'}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="8" fill="#182233"/>
                            <ellipse cx="25.5" cy="27.5555" rx="12.5" ry="12.5" fill="#0062FF"/>
                            <circle cx="25.3504" cy="17.7016" r="9.70195" fill="#0062FF"/>
                        </svg>
                        <h1 className={'font-semibold text-[24px] text-black'}>
                            User Metrics
                        </h1>
                    </div>
                    <div className={'bg-[#ECF0FF] items-center relative flex flex-row w-full h-[50px] rounded-[8px]'}>
                        <div onClick={() => {setLoginp('sign')}} className={`w-[50%] h-full ${loginp === "sign" ? ' text-white' : 'text-[#9C9AA5]'} flex z-20 cursor-pointer transition duration-300 justify-center items-center rounded-[8px]`}>
                            <h3 className={'text-[15px] select-none font-normal'}>
                                Sign Up
                            </h3>
                        </div>
                        <div onClick={() => {setLoginp('login')}} className={`w-[50%] h-full ${loginp === "login" ? ' text-white' : 'text-[#9C9AA5]'} flex z-20 cursor-pointer transition duration-300 justify-center items-center rounded-[8px]`}>
                            <h3 className={'text-[15px] select-none font-normal'}>
                                Log In
                            </h3>
                        </div>
                        <div className={'absolute w-full p-[4px] px-[7px] h-full '}>
                            <div className={'w-full h-full relative'}>
                                <div className={`absolute !top-0 left-0 ${loginp === 'sign' ? 'ml-0' : 'ml-[172px]'} w-[50%] h-full transition-all  duration-500 bg-[#465FF1] rounded-[8px] '`}></div>

                            </div>
                        </div>
                    </div>
                    <form action={''} className={'flex w-full h-full flex-col'}>
                        <div className={'flex flex-col gap-[27px]'}>
                            <div className={' flex flex-col gap-[8px] justify-start w-full h-fit'}>
                                <h1 className={'font-normal text-[16px]'}>
                                    Email
                                </h1>
                                <input placeholder={''} className={'w-full p-[16px] active:outline-none outline-none h-[48px] bg2'}></input>
                            </div>
                            <div className={' flex flex-col gap-[8px] justify-start w-full h-fit'}>
                                <h1 className={'font-normal text-[16px]'}>
                                    Password
                                </h1>
                                <input placeholder={'Enter Password'} className={'w-full p-[16px] active:outline-none outline-none h-[48px] bg2'}></input>
                            </div>
                        </div>
                        <div className={'mt-[20px] gap-[10px] flex flex-col'}>
                            <div className={'flex flex-row gap-[10px] items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M13.3346 4L6.0013 11.3333L2.66797 8" stroke="#17C964" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3 className={'font-normal text-[12px]'}>
                                    Password Strength : Weak
                                </h3>
                            </div>
                            <div className={'flex flex-row gap-[10px] items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M13.3346 4L6.0013 11.3333L2.66797 8" stroke-opacity="0.25" stroke="#465FF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3 className={'font-normal text-[12px]'}>
                                    Cannot contain your name or email address
                                </h3>
                            </div>
                            <div className={'flex flex-row gap-[10px] items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M13.3346 4L6.0013 11.3333L2.66797 8" stroke-opacity="0.25" stroke="#465FF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3 className={'font-normal text-[12px]'}>
                                    At least 8 characters
                                </h3>
                            </div>
                            <div className={'flex flex-row gap-[10px] items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M13.3346 4L6.0013 11.3333L2.66797 8" stroke-opacity="0.25" stroke="#465FF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h3 className={'font-normal text-[12px]'}>
                                    Contains a number or symbol
                                </h3>
                            </div>

                        </div>
                        <div className={'flex flex-col mt-[48px] gap-[20px] w-full h-full'}>
                            <Link href={'/profile/1'}>
                                <button className={'w-full h-[48px] hover:bg-[#6293F1] transition-all duration-200 cursor-pointer flex justify-center items-center rounded-[8px] bg-[#465FF1]'}>
                                    <h3 className={'font-normal select-none text-[16px] text-white'}>Create Account</h3>
                                </button>
                            </Link>
                            <div className={'flex flex-row w-full justify-center gap-[3px] items-center'}>
                                <div className={'w-[88px] h-[1px] bg-[#9C9AA5] bg-opacity-30'}></div>
                                <p className={'text-[#9C9AA5] text-opacity-30 font-normal'}>
                                    OR
                                </p>
                                <div className={'w-[88px] h-[1px] bg-[#9C9AA5] bg-opacity-30'}></div>
                            </div>
                            <div className={'w-full group cursor-pointer h-[48px] flex hover:bg-[#465FF1] justify-center items-center gap-[16px] rounded-[10px] border-[1px] border-[#465FF1] border-opacity-40'}>
                                <svg className={' '} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clipRule={"evenodd"} d="M23.52 12.2728C23.52 11.4219 23.4436 10.6037 23.3018 9.81824H12V14.4601H18.4582C18.18 15.9601 17.3345 17.231 16.0636 18.0819V21.0928H19.9418C22.2109 19.0037 23.52 15.9273 23.52 12.2728Z" fill="#4285F4"/>
                                    <path fill-rule="evenodd" clipRule={"evenodd"} d="M12.001 24C15.241 24 17.9573 22.9255 19.9428 21.0928L16.0646 18.0818C14.9901 18.8018 13.6155 19.2273 12.001 19.2273C8.87553 19.2273 6.23007 17.1164 5.28643 14.28H1.27734V17.3891C3.25189 21.3109 7.31007 24 12.001 24Z" fill="#34A853"/>
                                    <path fill-rule="evenodd" clipRule={"evenodd"} d="M5.28545 14.2799C5.04545 13.5599 4.90909 12.7908 4.90909 11.9999C4.90909 11.209 5.04545 10.4399 5.28545 9.71993V6.61084H1.27636C0.463636 8.23084 0 10.0636 0 11.9999C0 13.9363 0.463636 15.769 1.27636 17.389L5.28545 14.2799Z" fill="#FBBC05"/>
                                    <path fill-rule="evenodd" clipRule={"evenodd"} d="M12.001 4.77273C13.7628 4.77273 15.3446 5.37818 16.5883 6.56727L20.0301 3.12545C17.9519 1.18909 15.2355 0 12.001 0C7.31007 0 3.25189 2.68909 1.27734 6.61091L5.28643 9.72C6.23007 6.88364 8.87553 4.77273 12.001 4.77273Z" fill="#EA4335"/>
                                </svg>

                                <h4 className={'text-[16px] group-hover:text-white  select-none font-normal text-black'}>
                                    Create Account with Google
                                </h4>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={''}>

                </div>
            </div>
        </div>

    </main>
  );
}
