import React, {useRef,useCallback} from 'react';
import {Swiper, SwiperSlide, useSwiper, useSwiperSlide} from 'swiper/react';


import 'swiper/css';

const PriceComponent = () => {
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);
    const handlePrev = useCallback((slide) => {
        if (!slide.current) return;
        slide.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback((slide) => {
        if (!slide.current) return;
        slide.current.swiper.slideNext();
    }, []);



    return (
        <div className={'w-full flex justify-center items-center h-fit flex-row gap-[150px] px-[37px]'}>
            <div
                className={'min-w-[340px] backdrop-blur-[25px] bgse	h-full pb-[65px] bg-opacity-[35%] rounded-[20px] flex flex-col justify-start items-center pt-[36px] bg-[#F8F8F859]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h5 className={'font-normal text-[24px] text-[#F9F9F9]'}>Advanced</h5>
                    <div
                        className={'w-[120px] mt-[23px] select-none h-[46px] pl-2 bgs rounded-[100px] flex justify-center items-center'}>
                        <h5 className={'font-normal relative text-[24px] text-[#F6F6F7]'}>
                            35
                            <span className={'text-[10px] absolute top-1 -right-2'}>
                            €
                        </span>
                        </h5>
                        <h6 className={'font-normal absolute right-0 top-0 ml-[8px] relative text-[10px] text-[#F6F6F7]'}>
                            /month
                        </h6>

                    </div>
                    <div className={'mt-[46px] cursor-pointer bgs2 px-[70px] py-[9px]'}>
                        <h5 className={'font-semibold text-[16px] text-[#F6F7F7]'}>
                            Get Started Now
                        </h5>
                    </div>
                </div>
                <h5 className={'mt-[66px]  font-normal text-[14px] text-[#F9F9F9]'}>
                    What’s included:
                </h5>
                <div className={'flex flex-col px-[38px] w-full gap-[30px] mt-[47px]'}>
                    <div className={'w-fit flex flex-col gap-[30px] '}>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-bold text-[16px] text-[#F9F9F9]'}>
                                All the Free Features
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Advanced HR
                                <br/>
                                Management
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Advanced Project
                                <br/>
                                Management
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                CRM System
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Advanced Task and

                                <br/>
                                Ticket Management
                            </h5>
                        </div>
                    </div>

                </div>
            </div>
            <div
                className={'min-w-[340px] backdrop-blur-[25px] bgse	h-full pb-[65px] bg-opacity-[35%] rounded-[20px] flex flex-col justify-start items-center pt-[36px] bg-[#FF7373]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h5 className={'font-normal text-[24px] text-[#F9F9F9]'}>Basic</h5>
                    <div
                        className={'w-[120px] mt-[23px] select-none h-[46px] pl-2 bg-white rounded-[100px] flex justify-center items-center'}>
                        <h5 className={'font-normal relative text-[24px] text-[#E30019]'}>
                            20
                            <span className={'text-[10px] absolute top-1 -right-2'}>
                            €
                        </span>
                        </h5>
                        <h6 className={'font-normal absolute right-0 top-0 ml-[8px] relative text-[10px] text-[#E30019]'}>
                            /month
                        </h6>

                    </div>
                    <div className={'mt-[46px] cursor-pointer bg-white px-[70px] py-[9px]'}>
                        <h5 className={'font-semibold text-[16px] text-[#E30019]'}>
                            Get Started Now
                        </h5>
                    </div>
                </div>
                <h5 className={'mt-[66px]  font-normal text-[14px] text-[#F9F9F9]'}>
                    What’s included:
                </h5>
                <div className={'flex flex-col px-[38px] w-full gap-[30px] mt-[47px]'}>
                    <div className={'w-fit flex flex-col gap-[30px] '}>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-bold text-[16px] text-[#F9F9F9]'}>
                                All the Free Features
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Basic Human Resources
                                <br/>
                                Management
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Basic Task and Ticket
                                <br/>
                                Management
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Basic Project Management
                            </h5>
                        </div>
                    </div>

                </div>
            </div>
            <div
                className={'min-w-[340px] backdrop-blur-[25px] bgse	h-full pb-[65px] bg-opacity-[35%] rounded-[20px] flex flex-col justify-start items-center pt-[36px] bg-[#F8F8F859]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h5 className={'font-normal text-[24px] text-[#F9F9F9]'}>Enterprise</h5>
                    <div
                        className={'w-[120px] mt-[23px] select-none h-[46px] pl-2 bgs rounded-[100px] flex justify-center items-center'}>
                        <h5 className={'font-normal relative text-[24px] text-[#F6F6F7]'}>
                         45
                            <span className={'text-[10px] absolute top-1 -right-2'}>
                            €
                        </span>
                        </h5>
                        <h6 className={'font-normal absolute right-0 top-0 ml-[8px] relative text-[10px] text-[#F6F6F7]'}>
                            /month
                        </h6>

                    </div>
                    <div className={'mt-[46px] cursor-pointer bgs2 px-[70px] py-[9px]'}>
                        <h5 className={'font-semibold text-[16px] text-[#F6F7F7]'}>
                            Get Started Now
                        </h5>
                    </div>
                </div>
                <h5 className={'mt-[66px]  font-normal text-[14px] text-[#F9F9F9]'}>
                    What’s included:
                </h5>
                <div className={'flex flex-col px-[38px] w-full gap-[30px] mt-[47px]'}>
                    <div className={'w-fit flex flex-col gap-[30px] '}>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-bold text-[16px] text-[#F9F9F9]'}>
                                All the Free Features
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Full HR Features
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Comprehensive
                                <br/>
                                Project Management
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Advanced CRM
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                Full-Featured Document

                                <br/>
                                 Management System
                            </h5>
                        </div>
                        <div className={'flex gap-[39px] items-center flex-row'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                                    fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7" fill="#ECECEC"/>
                                <path d="M5.29395 10.9577L8.50458 14.1681L15.6727 7"
                                      stroke="url(#paint0_linear_123_4149)"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4149" x1="10.4833" y1="7" x2="10.4833"
                                                    y2="14.1681" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#E30019"/>
                                        <stop offset="1" stop-color="#FF725A"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <h5 className={'font-normal text-[16px] text-[#F9F9F9]'}>
                                GDPR Compliant

                                <br/>
                                Communication System
                            </h5>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default PriceComponent;
