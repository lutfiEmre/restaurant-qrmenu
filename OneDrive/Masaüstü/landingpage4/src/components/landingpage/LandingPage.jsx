import React from 'react';
import mainbg from "../../assets/landingpage/mainbg.svg";
import reactLogo from '../../assets/landingpage/react.svg'
import '../../App.css'
import NavBar from "./NavBar.jsx";
import MainSwiper from "./MainSwiper.jsx";
import FeaturedComponent from "./FeaturedComponent.jsx";
import as1 from "../../assets/landingpage/as1.svg"
import as2 from "../../assets/landingpage/as2.png"
import as3 from '../../assets/landingpage/as3.png'
import as4 from '../../assets/landingpage/as4.png'
import as5 from '../../assets/landingpage/as5.png'
import as6 from '../../assets/landingpage/as6.png'
import phonesvg from '../../assets/landingpage/phone.svg'
import AccordionEmre from "./AccordionE.jsx";
import PriceComponent from "./PriceComponent.jsx";
import Footer from "./Footer.jsx";
import SearchBar from "./SearchBar.jsx";

const LandingPage = () => {
    return (
        <div className={''}>
            <div className={'flex flex-col  w-full min-h-screen relative'}>
                <div className={'w-full justify-center flex mt-[27px] px-5 xl:px-[100px]'}>
                    <NavBar/>
                </div>
                <SearchBar/>
                <div className={'mt-[59px] px-[50px] w-full flex-col flex justify-center items-center'}>
                    <h2 className={'font-bold text-white shadowl1 w-fit text-center text-[64px]'}>
                        Discover Talents, Optimize the Future
                    </h2>
                    <div className={'mt-[97px]'}>
                        <h4 className={'font-normal text-white shadowl1 w-fit text-center text-[20px]'}>
                            78,610 job postings from thousands of companies.
                        </h4>
                    </div>
                </div>
                <MainSwiper/>
                <img
                    className={'w-full h-full -z-40 object-cover  absolute top-0 left-0'}
                    src={mainbg} alt=""/>

            </div>


            <div className={'flex flex-col w-full min-h-[150vh] relative'}>
                <div className={'absolute  top-0 left-0 w-full h-full flex justify-center items-center'}>
                    <div
                        className={'absolute top-72 flex justify-center items-center flex-col w-full h-[100vh] left-0'}>
                        <FeaturedComponent/>
                    </div>
                </div>
                <img className={'w-full h-full min-h-[100vh] object-cover absolute -z-20'} src={as1} alt=""/>
                <img className={'w-full h-auto object-cover absolute -z-10 left-0 rotate-180 bottom-0'} src={as2}
                     alt=""/>

            </div>
            <AccordionEmre/>
            <div className={'flex flex-col gap-[60px] mt-[50px] justify-center items-center w-full'}>

                <div className={'bg-black z-40 w-fit  '} style={{
                    background: 'linear-gradient(270deg, #E30019 0%, #C62473 100%)',
                    display: 'inline',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                }}>
                    <h3 className={'font-bold text-center items-center  text-[48px]'}>
                        Simple and Transparent Pricing
                    </h3>
                </div>

                <div className={'flex z-30 mt-14 flex-row w-fit gap-[15px]'}>
                    <h5 className={'gradient-text font-normal text-[24px]'}>
                        Monthly
                    </h5>

                    <div className="checkbox-wrapper-49">
                        <div className="block">
                            <input data-index="0" id="cheap-49" type="checkbox"/>
                            <label htmlFor="cheap-49"></label>
                        </div>
                    </div>
                    <h5 className={'gradient-text font-normal text-[24px]'}>
                        Annualy
                    </h5>
                </div>
            </div>

            <div
                className={'flex flex-col w-full overflow-hidden min-h-[350vh] sm:min-h-[300vh] md:min-h-[220vh]  lg:min-h-[220vh] 2xl:min-h-[145vh] relative'}>
                <div
                    className={'absolute  sm:top-0 top-[500px] left-0 w-full h-full flex justify-center items-center'}>
                    <div
                        className={'absolute top-[1000px] md:top-[600px] lg:top-[600px] 2xl:top-72 flex justify-center items-center flex-col w-full h-[100vh] left-0'}>
                        <PriceComponent/>
                    </div>
                </div>
                <img className={'w-full h-auto object-cover absolute -z-10 left-0 rotate top-0'} src={as2}/>

                <img className={'w-full h-full min-h-[60vh] object-cover absolute blur-[200px] -z-20'} src={as3}
                     alt=""/>
                <img className={'w-full h-auto object-cover absolute -z-20 left-0 rotate-180 -bottom-36'} src={as2}
                     alt=""/>

            </div>
            <div className={'w-full  h-[650px] sm:h-[600px] lg:h-[150px] mt-24  z-40 bg-white relative'}>
                <div className={'px-[100px] z-30 flex items-center 2xl:gap-[10vh] flex flex-col lg:flex-row'}>
                    <h5 className={'text-[#383838] w-[327px] text-[20px]'}>
                        Download the app now to quickly and easily see job listings closest to your location!
                    </h5>
                    <div className={'flex flex-col items-center gap-[51px]'}>
                        <div className={'bg-black z-40 w-fit  '} style={{
                            background: 'linear-gradient(270deg, #E30019 0%, #C62473 100%)',
                            display: 'inline',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            <h3 className={'font-bold text-center items-center  text-[48px]'}>
                                Download for Free
                            </h3>
                        </div>
                        <div className={'flex flex-row gap-[50px]'}>
                            <svg width="93" height="93" viewBox="0 0 93 93" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M74.0627 0H18.7477C8.38774 0 0 8.38879 0 18.75V74.0836C0 84.4332 8.38774 92.822 18.7477 92.822H74.0743C84.4227 92.822 92.822 84.4332 92.822 74.072V18.75C92.8104 8.38879 84.4227 0 74.0627 0Z"
                                    fill="url(#paint0_linear_123_4338)"/>
                                <path
                                    d="M46.011 21.3258L47.8904 18.077C49.0505 16.0466 51.6376 15.362 53.6678 16.5223C55.6981 17.6826 56.3825 20.27 55.2224 22.3004L37.1128 53.6511H50.2106C54.4567 53.6511 56.835 58.6403 54.9904 62.0979H16.5901C14.2466 62.0979 12.3672 60.2182 12.3672 57.8745C12.3672 55.5307 14.2466 53.6511 16.5901 53.6511H27.3561L41.1384 29.761L36.8343 22.2888C35.6742 20.2584 36.3587 17.6942 38.3889 16.5107C40.4191 15.3504 42.983 16.035 44.1664 18.0654L46.011 21.3258ZM29.7227 66.4489L25.6623 73.4918C24.5021 75.5223 21.9151 76.2068 19.8848 75.0466C17.8546 73.8863 17.1701 71.2989 18.3303 69.2684L21.3466 64.0472C24.7574 62.9913 27.5301 63.8035 29.7227 66.4489ZM64.6891 53.6743H75.6755C78.019 53.6743 79.8984 55.5539 79.8984 57.8977C79.8984 60.2415 78.019 62.1211 75.6755 62.1211H69.5732L73.6917 69.2684C74.8518 71.2989 74.1673 73.8631 72.1371 75.0466C70.1069 76.2068 67.543 75.5223 66.3596 73.4918C59.4221 61.4597 54.2131 52.456 50.7559 46.4574C47.2175 40.3543 49.7466 34.2281 52.2409 32.1512C55.0136 36.9083 59.1552 44.0904 64.6891 53.6743Z"
                                    fill="white"/>
                                <defs>
                                    <linearGradient id="paint0_linear_123_4338" x1="46.411" y1="0" x2="46.411"
                                                    y2="92.822"
                                                    gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#18BFFB"/>
                                        <stop offset="1" stop-color="#2072F3"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg width="94" height="88" viewBox="0 0 94 88" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M50.5477 39.7731L64.471 26.72L10.4353 1.19391C10.1038 0.903838 9.44081 0.903838 8.44629 0.61377L50.5477 39.7731Z"
                                    fill="#00F076"/>
                                <path
                                    d="M70.4383 58.6275L89.9972 49.3453C92.3177 48.185 93.6438 46.4446 93.6438 44.124C93.6438 41.8035 92.3177 39.773 89.9972 38.9028L70.4383 29.6206L54.8574 44.124L70.4383 58.6275Z"
                                    fill="#FFC900"/>
                                <path
                                    d="M2.14829 3.22461C1.15377 4.09482 0.822266 5.25509 0.822266 6.41537V81.8333C0.822266 82.9935 1.15377 84.1538 2.14829 85.3141L45.9072 44.1243L2.14829 3.22461Z"
                                    fill="#00D6FF"/>
                                <path
                                    d="M50.5477 48.4751L8.44629 87.6344C9.1093 87.6344 9.77232 87.3443 10.4353 87.0542L64.471 61.5282L50.5477 48.4751Z"
                                    fill="#FF3A44"/>
                            </svg>

                        </div>

                    </div>
                </div>
                <div
                    className={'lg:w-[300px] 2xl:w-[600px] h-auto overflow-hidden z-20  absolute right-0 -bottom-72 lg:-top-44'}>
                    <img className={'lg:w-[300px] 2xl:w-[754px] object-cover h-[554px]'} src={phonesvg} alt=""/>
                </div>
            </div>
            <div className={'relative'}>
                <img className={'w-full h-auto -mt-4 object-cover z-20 top-0 absolute left-0 '} src={as4}
                     alt=""/>
                <div
                    className={'w-full relative top-36 left-0 h-[175vh] xsm:h-[120vh] sm:h-[130vh] md:h-[130vh] 2xl:h-[900px] 2xl:min-h-[710px] lg:h-[120vh] min-h-screen'}>
                    <div
                        className={'absolute top-96 items-center justify-between w-full gap-[150px] 2xl:px-[10vh] md:px-[101px] flex flex-col xl:flex-row left-0 z-40'}>
                        <div className={'flex flex-col gap-[30px]'}>
                            <h6 className={'text-[48px] lg:text-[64px] sm:text-start text-center w-fit sm:w-[621px] text-white font-bold shadowl5'}>
                                Get started with OptiRecruits
                            </h6>
                            <h5 className={'text-[14px] text-white sm:text-start text-center w-fit px-[10vw] sm:px-0 sm:w-[528px]'}>
                                Our 14-day free trial allows anyone to explore the platform without commitment,
                                while
                                our team is committed to providing support and guidance throughout the process.
                            </h5>
                        </div>
                        <div className={'flex flex-col justify-center items-center w-full gap-[47px] '}>
                            <div
                                className={'flex sm:justify-start sm:items-start items-center justify-center flex-row gap-[61px] flex-wrap'}>
                                <div className={'flex flex-col gap-[21px]'}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.5556 40.0004L10.4444 40M31.5556 40.0004L33.251 40C35.611 40 36.7911 40 37.6934 39.5402C38.4878 39.1355 39.1355 38.4891 39.5402 37.6947C40 36.7924 40 35.611 40 33.251V15.1302C40 14.1826 40 13.7066 39.8989 13.2544C39.8089 12.8511 39.6607 12.4638 39.4579 12.1037C39.2328 11.7042 38.917 11.3534 38.2961 10.6635L32.4796 4.20064C31.7601 3.40123 31.3955 2.99604 30.9577 2.70507C30.564 2.44333 30.1289 2.25034 29.671 2.13273C29.1542 2 28.5996 2 27.4917 2H8.75598C6.3913 2 5.20809 2 4.30491 2.4602C3.51044 2.86499 2.86499 3.51044 2.4602 4.30491C2 5.20809 2 6.3913 2 8.75598V33.2449C2 35.6095 2 36.7903 2.4602 37.6934C2.86499 38.4878 3.51044 39.1355 4.30491 39.5402C5.2072 40 6.38898 40 8.74903 40H10.4444M31.5556 40.0004V31.9712C31.5556 29.6112 31.5556 28.4294 31.0958 27.5271C30.6911 26.7327 30.0434 26.0871 29.249 25.6824C28.3458 25.2222 27.1651 25.2222 24.8004 25.2222H17.2004C14.8357 25.2222 13.6525 25.2222 12.7494 25.6824C11.9549 26.0871 11.3094 26.7327 10.9046 27.5271C10.4444 28.4303 10.4444 29.6135 10.4444 31.9782V40M27.3333 10.4444H14.6667"
                                            stroke="#F9F9F9" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className={'font-normal text-[14px] w-[233px] text-white shadowl5'}>
                                        Data migration from your existing recruitment software
                                    </h5>
                                </div>
                                <div className={'flex flex-col gap-[21px]'}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.5556 40.0004L10.4444 40M31.5556 40.0004L33.251 40C35.611 40 36.7911 40 37.6934 39.5402C38.4878 39.1355 39.1355 38.4891 39.5402 37.6947C40 36.7924 40 35.611 40 33.251V15.1302C40 14.1826 40 13.7066 39.8989 13.2544C39.8089 12.8511 39.6607 12.4638 39.4579 12.1037C39.2328 11.7042 38.917 11.3534 38.2961 10.6635L32.4796 4.20064C31.7601 3.40123 31.3955 2.99604 30.9577 2.70507C30.564 2.44333 30.1289 2.25034 29.671 2.13273C29.1542 2 28.5996 2 27.4917 2H8.75598C6.3913 2 5.20809 2 4.30491 2.4602C3.51044 2.86499 2.86499 3.51044 2.4602 4.30491C2 5.20809 2 6.3913 2 8.75598V33.2449C2 35.6095 2 36.7903 2.4602 37.6934C2.86499 38.4878 3.51044 39.1355 4.30491 39.5402C5.2072 40 6.38898 40 8.74903 40H10.4444M31.5556 40.0004V31.9712C31.5556 29.6112 31.5556 28.4294 31.0958 27.5271C30.6911 26.7327 30.0434 26.0871 29.249 25.6824C28.3458 25.2222 27.1651 25.2222 24.8004 25.2222H17.2004C14.8357 25.2222 13.6525 25.2222 12.7494 25.6824C11.9549 26.0871 11.3094 26.7327 10.9046 27.5271C10.4444 28.4303 10.4444 29.6135 10.4444 31.9782V40M27.3333 10.4444H14.6667"
                                            stroke="#F9F9F9" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className={'font-normal text-[14px] w-[233px] text-white shadowl5'}>
                                        Data migration from your existing recruitment software
                                    </h5>
                                </div>
                            </div>
                            <div
                                className={'flex sm:justify-start sm:items-start items-center justify-center flex-row gap-[61px] flex-wrap'}>
                                <div className={'flex flex-col gap-[21px]'}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.5556 40.0004L10.4444 40M31.5556 40.0004L33.251 40C35.611 40 36.7911 40 37.6934 39.5402C38.4878 39.1355 39.1355 38.4891 39.5402 37.6947C40 36.7924 40 35.611 40 33.251V15.1302C40 14.1826 40 13.7066 39.8989 13.2544C39.8089 12.8511 39.6607 12.4638 39.4579 12.1037C39.2328 11.7042 38.917 11.3534 38.2961 10.6635L32.4796 4.20064C31.7601 3.40123 31.3955 2.99604 30.9577 2.70507C30.564 2.44333 30.1289 2.25034 29.671 2.13273C29.1542 2 28.5996 2 27.4917 2H8.75598C6.3913 2 5.20809 2 4.30491 2.4602C3.51044 2.86499 2.86499 3.51044 2.4602 4.30491C2 5.20809 2 6.3913 2 8.75598V33.2449C2 35.6095 2 36.7903 2.4602 37.6934C2.86499 38.4878 3.51044 39.1355 4.30491 39.5402C5.2072 40 6.38898 40 8.74903 40H10.4444M31.5556 40.0004V31.9712C31.5556 29.6112 31.5556 28.4294 31.0958 27.5271C30.6911 26.7327 30.0434 26.0871 29.249 25.6824C28.3458 25.2222 27.1651 25.2222 24.8004 25.2222H17.2004C14.8357 25.2222 13.6525 25.2222 12.7494 25.6824C11.9549 26.0871 11.3094 26.7327 10.9046 27.5271C10.4444 28.4303 10.4444 29.6135 10.4444 31.9782V40M27.3333 10.4444H14.6667"
                                            stroke="#F9F9F9" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className={'font-normal text-[14px] w-[233px] text-white shadowl5'}>
                                        Data migration from your existing recruitment software
                                    </h5>
                                </div>
                                <div className={'flex flex-col gap-[21px]'}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.5556 40.0004L10.4444 40M31.5556 40.0004L33.251 40C35.611 40 36.7911 40 37.6934 39.5402C38.4878 39.1355 39.1355 38.4891 39.5402 37.6947C40 36.7924 40 35.611 40 33.251V15.1302C40 14.1826 40 13.7066 39.8989 13.2544C39.8089 12.8511 39.6607 12.4638 39.4579 12.1037C39.2328 11.7042 38.917 11.3534 38.2961 10.6635L32.4796 4.20064C31.7601 3.40123 31.3955 2.99604 30.9577 2.70507C30.564 2.44333 30.1289 2.25034 29.671 2.13273C29.1542 2 28.5996 2 27.4917 2H8.75598C6.3913 2 5.20809 2 4.30491 2.4602C3.51044 2.86499 2.86499 3.51044 2.4602 4.30491C2 5.20809 2 6.3913 2 8.75598V33.2449C2 35.6095 2 36.7903 2.4602 37.6934C2.86499 38.4878 3.51044 39.1355 4.30491 39.5402C5.2072 40 6.38898 40 8.74903 40H10.4444M31.5556 40.0004V31.9712C31.5556 29.6112 31.5556 28.4294 31.0958 27.5271C30.6911 26.7327 30.0434 26.0871 29.249 25.6824C28.3458 25.2222 27.1651 25.2222 24.8004 25.2222H17.2004C14.8357 25.2222 13.6525 25.2222 12.7494 25.6824C11.9549 26.0871 11.3094 26.7327 10.9046 27.5271C10.4444 28.4303 10.4444 29.6135 10.4444 31.9782V40M27.3333 10.4444H14.6667"
                                            stroke="#F9F9F9" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className={'font-normal text-[14px] w-[233px] text-white shadowl5'}>
                                        Data migration from your existing recruitment software
                                    </h5>
                                </div>
                            </div>
                            <div
                                className={'flex sm:justify-start sm:items-start items-center justify-center flex-row gap-[61px] flex-wrap'}>
                                <div className={'flex flex-col gap-[21px]'}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.5556 40.0004L10.4444 40M31.5556 40.0004L33.251 40C35.611 40 36.7911 40 37.6934 39.5402C38.4878 39.1355 39.1355 38.4891 39.5402 37.6947C40 36.7924 40 35.611 40 33.251V15.1302C40 14.1826 40 13.7066 39.8989 13.2544C39.8089 12.8511 39.6607 12.4638 39.4579 12.1037C39.2328 11.7042 38.917 11.3534 38.2961 10.6635L32.4796 4.20064C31.7601 3.40123 31.3955 2.99604 30.9577 2.70507C30.564 2.44333 30.1289 2.25034 29.671 2.13273C29.1542 2 28.5996 2 27.4917 2H8.75598C6.3913 2 5.20809 2 4.30491 2.4602C3.51044 2.86499 2.86499 3.51044 2.4602 4.30491C2 5.20809 2 6.3913 2 8.75598V33.2449C2 35.6095 2 36.7903 2.4602 37.6934C2.86499 38.4878 3.51044 39.1355 4.30491 39.5402C5.2072 40 6.38898 40 8.74903 40H10.4444M31.5556 40.0004V31.9712C31.5556 29.6112 31.5556 28.4294 31.0958 27.5271C30.6911 26.7327 30.0434 26.0871 29.249 25.6824C28.3458 25.2222 27.1651 25.2222 24.8004 25.2222H17.2004C14.8357 25.2222 13.6525 25.2222 12.7494 25.6824C11.9549 26.0871 11.3094 26.7327 10.9046 27.5271C10.4444 28.4303 10.4444 29.6135 10.4444 31.9782V40M27.3333 10.4444H14.6667"
                                            stroke="#F9F9F9" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className={'font-normal text-[14px] w-[233px] text-white shadowl5'}>
                                        Data migration from your existing recruitment software
                                    </h5>
                                </div>
                                <div className={'flex flex-col gap-[21px]'}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M31.5556 40.0004L10.4444 40M31.5556 40.0004L33.251 40C35.611 40 36.7911 40 37.6934 39.5402C38.4878 39.1355 39.1355 38.4891 39.5402 37.6947C40 36.7924 40 35.611 40 33.251V15.1302C40 14.1826 40 13.7066 39.8989 13.2544C39.8089 12.8511 39.6607 12.4638 39.4579 12.1037C39.2328 11.7042 38.917 11.3534 38.2961 10.6635L32.4796 4.20064C31.7601 3.40123 31.3955 2.99604 30.9577 2.70507C30.564 2.44333 30.1289 2.25034 29.671 2.13273C29.1542 2 28.5996 2 27.4917 2H8.75598C6.3913 2 5.20809 2 4.30491 2.4602C3.51044 2.86499 2.86499 3.51044 2.4602 4.30491C2 5.20809 2 6.3913 2 8.75598V33.2449C2 35.6095 2 36.7903 2.4602 37.6934C2.86499 38.4878 3.51044 39.1355 4.30491 39.5402C5.2072 40 6.38898 40 8.74903 40H10.4444M31.5556 40.0004V31.9712C31.5556 29.6112 31.5556 28.4294 31.0958 27.5271C30.6911 26.7327 30.0434 26.0871 29.249 25.6824C28.3458 25.2222 27.1651 25.2222 24.8004 25.2222H17.2004C14.8357 25.2222 13.6525 25.2222 12.7494 25.6824C11.9549 26.0871 11.3094 26.7327 10.9046 27.5271C10.4444 28.4303 10.4444 29.6135 10.4444 31.9782V40M27.3333 10.4444H14.6667"
                                            stroke="#F9F9F9" stroke-width="4" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <h5 className={'font-normal text-[14px] w-[233px] text-white shadowl5'}>
                                        Data migration from your existing recruitment software
                                    </h5>
                                </div>
                            </div>

                        </div>
                    </div>
                    <img className={'w-full absolute object-cover h-full'} src={as5} alt=""/>
                    <img className={'w-full z-0 left-0 shadowl5  absolute object-cover h-full'} src={as6} alt=""/>
                </div>

            </div>
            <Footer/>
        </div>
    );
};

export default LandingPage;
