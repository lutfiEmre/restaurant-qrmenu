import React, {useState} from "react";
import './App.css';
import 'react-calendar/dist/Calendar.css';

import mansvg from '../../assets/jobmanagement/man1.svg'


import LeftMenu from "../jobmanagement/LeftMenu";
import AdvertTitle from "./createnewad/AdvertTitle.jsx";
import Questions from "./createnewad/Questions.jsx";
import JobDescription from "./createnewad/JobDescription.jsx";
import PublishPost from "./createnewad/PublishPost.jsx";





function JobSection() {
    const [level,setLevel] = useState({
        p: 4,
    })


    return (
        <div className="w-full h-full relative min-h-screen relative  bg-[#F4F4F4]  flex flex-row">
            <LeftMenu/>
            <div className={'w-full h-full  z-20 pl-[30px]  md:pl-[90px] pr-[25px] md:pr-[40px] pt-[47px] pb-[175px]'}>
                <div className={'w-full  h-fit flex  flex-row justify-between items-center'}>
                    <div className={'flex !bg-transparent items-center  select-none cursor-pointer flex-row gap-2'}>
                        <svg className={'absolute  !bg-transparent'} width="24" height="24" viewBox="0 0 24 24"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11M20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293"
                                  fill="#2B2F42"/>
                        </svg>

                        <input placeholder={'Search'}
                               className={'md:w-[150px]  !bg-transparent w-[100px] lg:w-fit opacity-60 pl-8  nunitomedium border-none placeholder:text-[#2B2F42] outline-none'}
                               type="text"/>
                    </div>
                    <div className={'flex flex-row gap-4'}>
                        <div className={'flex  flex-row items-end sm:items-center gap-4 sm:gap-6'}>
                            <svg className={'w-[40px] h-[36px]  cursor-pointer'} width="42" height="42"
                                 viewBox="0 0 42 42"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_1407" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0"
                                      y="0"
                                      width="42" height="42">
                                    <rect width="42" height="42" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_1_1407)">
                                    <path
                                        d="M7.875 33.0481V30.4232H11.0385V17.3654C11.0385 15.0119 11.7648 12.931 13.2175 11.1226C14.6703 9.31429 16.5353 8.15773 18.8125 7.65294V6.56256C18.8125 5.95493 19.025 5.43845 19.4499 5.01311C19.8749 4.58775 20.3909 4.37506 20.998 4.37506C21.6051 4.37506 22.1217 4.58775 22.548 5.01311C22.9743 5.43845 23.1874 5.95493 23.1874 6.56256V7.65294C25.4647 8.15773 27.3296 9.31429 28.7824 11.1226C30.2351 12.931 30.9614 15.0119 30.9614 17.3654V30.4232H34.1249V33.0481H7.875ZM20.997 37.9615C20.1262 37.9615 19.3818 37.6518 18.7637 37.0323C18.1456 36.4128 17.8365 35.668 17.8365 34.7981H24.1634C24.1634 35.6708 23.8533 36.4163 23.2333 37.0344C22.6132 37.6525 21.8678 37.9615 20.997 37.9615ZM13.6634 30.4232H28.3365V17.3654C28.3365 15.3394 27.6203 13.6102 26.1877 12.1777C24.7552 10.7451 23.0259 10.0288 21 10.0288C18.974 10.0288 17.2447 10.7451 15.8122 12.1777C14.3797 13.6102 13.6634 15.3394 13.6634 17.3654V30.4232Z"
                                        fill="#2B2F42"/>
                                </g>
                            </svg>
                            <div className={'flex flex-row items-center select-none cursor-pointer gap-[10px]'}>
                                <div className={'relative'}>
                                    <img className={'w-[42px] h-auto'} src={mansvg} alt=""/>
                                    <div
                                        className={'w-[10px] h-[10px] bg-[#00D95F] rounded-full absolute right-0 top-0'}></div>
                                </div>
                                <h2 className={'nunitomedium text-[#2B2F42] text-[14px] '}>
                                    Emre Yıldız
                                </h2>
                                <svg className={'sm:ml-[11.4px] w-[25px] h-[25px]'} width="25" height="24"
                                     viewBox="0 0 25 24"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M12.0474 15.5C11.7914 15.5 11.5354 15.402 11.3404 15.207L7.34037 11.207C6.94937 10.816 6.94937 10.184 7.34037 9.79301C7.73137 9.40201 8.36337 9.40201 8.75437 9.79301L12.0594 13.098L15.3524 9.91801C15.7514 9.53501 16.3824 9.54601 16.7664 9.94301C17.1504 10.34 17.1394 10.974 16.7424 11.357L12.7424 15.219C12.5474 15.407 12.2974 15.5 12.0474 15.5"
                                          fill="#2B2F42"/>
                                </svg>

                            </div>
                            <svg className={'w-[24px] hidden h-[24px] sm:hidden cursor-pointer'} width="42" height="42"
                                 viewBox="0 0 42 42"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1_1407" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0"
                                      y="0"
                                      width="42" height="42">
                                    <rect width="42" height="42" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_1_1407)">
                                    <path
                                        d="M7.875 33.0481V30.4232H11.0385V17.3654C11.0385 15.0119 11.7648 12.931 13.2175 11.1226C14.6703 9.31429 16.5353 8.15773 18.8125 7.65294V6.56256C18.8125 5.95493 19.025 5.43845 19.4499 5.01311C19.8749 4.58775 20.3909 4.37506 20.998 4.37506C21.6051 4.37506 22.1217 4.58775 22.548 5.01311C22.9743 5.43845 23.1874 5.95493 23.1874 6.56256V7.65294C25.4647 8.15773 27.3296 9.31429 28.7824 11.1226C30.2351 12.931 30.9614 15.0119 30.9614 17.3654V30.4232H34.1249V33.0481H7.875ZM20.997 37.9615C20.1262 37.9615 19.3818 37.6518 18.7637 37.0323C18.1456 36.4128 17.8365 35.668 17.8365 34.7981H24.1634C24.1634 35.6708 23.8533 36.4163 23.2333 37.0344C22.6132 37.6525 21.8678 37.9615 20.997 37.9615ZM13.6634 30.4232H28.3365V17.3654C28.3365 15.3394 27.6203 13.6102 26.1877 12.1777C24.7552 10.7451 23.0259 10.0288 21 10.0288C18.974 10.0288 17.2447 10.7451 15.8122 12.1777C14.3797 13.6102 13.6634 15.3394 13.6634 17.3654V30.4232Z"
                                        fill="#2B2F42"/>
                                </g>
                            </svg>

                        </div>
                        <div
                            className={'hidden items-end md:hidden relative mr-7 flex justify-end select-none cursor-pointer flex-row gap-2'}>
                            <svg className={'absolute -right-7 opacity-60'} width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11M20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293"
                                      fill="#2B2F42"/>
                            </svg>

                            <input placeholder={'Search'}
                                   className={' opacity-60 pl-2 text-end  nunitomedium placeholder:text-[#2B2F42] outline-none'}
                                   type="text"/>
                        </div>
                    </div>
                </div>
                <div
                    className={'w-full   mt-8 flex-col sm:flex-row sm:gap-2 gap-6 sm:mt-[25px] flex justify-end sm:justify-center items-center lg:items-start lg:justify-between'}>
                    <div className={'flex flex-col lg:items-start items-center w-fit gap-[5px]'}>
                        <h4 className={'nunitomedium text-[30px] text-[#2B2F42]'}>
                            Jobs
                        </h4>
                        <h3 className={'nunitomedium opacity-60 text-[14px] text-[#2B2F42]'}>
                            Let's take a look  jobs.
                        </h3>
                    </div>
                </div>
                <div className={'w-full flex mt-[15px] px-[26px] justify-between'}>
                    <div>

                    </div>
                    <div className={'flex flex-row gap-[27px]'}>
                        <div className={'flex flex-row cursor-pointer items-center gap-[15px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                Sort by
                            </h4>
                            <div className={'flex flex-row justify-center items-center gap-1'}>
                                <h4 className={'nunitoebold text-[14px] text-[#2B2F42]'}>
                                    Name
                                </h4>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                </svg>

                            </div>
                        </div>
                        <div
                            className={'w-[101px] cursor-pointer h-[41px] bg-[#F0F0F0] border-[1px] border-[#B0B0B0] rounded-[10px] flex justify-center items-center gap-[11.67px]'}>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.04167 10.6667L1 1H14.2917M20.3333 1L14.2917 10.6667V21.5417L7.04167 17.9167V15.5"
                                    stroke="#2B2F42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                Filters
                            </h4>

                        </div>
                    </div>
                </div>
                <div
                    className={'mt-[25px] shadowe8 h-full rounded-[32px] pt-[10px] flex flex-row pb-[38px] pl-[31px] bg-[#F4F4F4]'}>
                    <div className={' w-full h-full  flex flex-col  gap-[6px]'}>
                    <div
                            className={'  sm:pl-0 px-2 pr-6 w-full flex 2xl:justify-start justify-center 2xl:items-start items-center shadow1 rounded-[32px]'}>
                            <div className={'flex w-full overflow-x-auto  flex-col bg-[#F4F4F4] rounded-[32px] '}>
                                <div
                                    className={'w-[1100px] pr-20 lg:w-full flex flex-row text-[#2B2F42] nunitosemibold text-[22px]   justify-between  pt-[30px] pb-[5px]'}>
                                    <p>
                                        Job Post
                                    </p>
                                    <p className={'ml-16'}>
                                        Experience
                                    </p>
                                    <p className={''}>
                                        Deadline
                                    </p>
                                    <p className={''}>
                                        Status
                                    </p>
                                    <p className={''}>
                                        Application Records
                                    </p>
                                </div>
                                <div className={'w-full pr-20'}>
                                    <div className={'mt-[20px]   bg-[#ADADAD] w-[1100px] lg:w-full  h-[2px]'}></div>
                                </div>
                                <div className={'flex flex-row w-[1100px] lg:w-full   overflow-auto max-h-screen'}>
                                    <div
                                        className={' w-[1100px]   lg:w-full   flex flex-col gap-[10px]  pb-[28px]'}>
                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px] border-b-[2px] w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42] '}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px] border-b-[2px] w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42]'}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium flex flex-row items-center gap-1  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_19_640" style={{maskType: 'alpha'}}
                                                              maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                              height="24">
                                                            <rect width="24" height="24" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_19_640)">
                                                            <path
                                                                d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM11 13H13V7H11V13ZM8.25 21L3 15.75V8.25L8.25 3H15.75L21 8.25V15.75L15.75 21H8.25ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9L9.1 19Z"
                                                                fill="#FE0000"/>
                                                        </g>
                                                    </svg>

                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px] border-b-[2px] w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42] '}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium flex flex-row items-center gap-1  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_19_640" style={{maskType: 'alpha'}}
                                                              maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                              height="24">
                                                            <rect width="24" height="24" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_19_640)">
                                                            <path
                                                                d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM11 13H13V7H11V13ZM8.25 21L3 15.75V8.25L8.25 3H15.75L21 8.25V15.75L15.75 21H8.25ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9L9.1 19Z"
                                                                fill="#FE0000"/>
                                                        </g>
                                                    </svg>

                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px] border-b-[2px] w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42] '}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium flex flex-row items-center gap-1  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_19_640" style={{maskType: 'alpha'}}
                                                              maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                              height="24">
                                                            <rect width="24" height="24" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_19_640)">
                                                            <path
                                                                d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM11 13H13V7H11V13ZM8.25 21L3 15.75V8.25L8.25 3H15.75L21 8.25V15.75L15.75 21H8.25ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9L9.1 19Z"
                                                                fill="#FE0000"/>
                                                        </g>
                                                    </svg>

                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px] border-b-[2px] w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42] '}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium flex flex-row items-center gap-1  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <mask id="mask0_19_640" style={{maskType: 'alpha'}}
                                                              maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                                                              height="24">
                                                            <rect width="24" height="24" fill="#D9D9D9"/>
                                                        </mask>
                                                        <g mask="url(#mask0_19_640)">
                                                            <path
                                                                d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM11 13H13V7H11V13ZM8.25 21L3 15.75V8.25L8.25 3H15.75L21 8.25V15.75L15.75 21H8.25ZM9.1 19H14.9L19 14.9V9.1L14.9 5H9.1L5 9.1V14.9L9.1 19Z"
                                                                fill="#FE0000"/>
                                                        </g>
                                                    </svg>

                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>


                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px] border-b-[2px] w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42] '}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px] border-b-[2px] w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42] '}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                        <div
                                            className={'flex border-b-[#ADADAD] relative py-[29px]  w-full items-center justify-between flex-row'}>
                                            <div className={'flex flex-row items-center'}>
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70Z"
                                                          fill="white"/>
                                                    <path
                                                        d="M51.7347 21.7965C56.9067 28.9821 59.4609 37.0873 58.5061 46.4182C58.5021 46.4577 58.4803 46.4939 58.446 46.5177C54.5294 49.2353 50.7347 50.8846 46.9932 51.9783C46.9641 51.9867 46.9329 51.9862 46.9041 51.977C46.8752 51.9678 46.8502 51.9503 46.8324 51.9269C45.968 50.7905 45.1826 49.5923 44.4945 48.3341C44.455 48.26 44.4911 48.1708 44.5724 48.1416C45.8197 47.6975 47.0058 47.1652 48.1467 46.535C48.2366 46.4853 48.2423 46.3636 48.1593 46.3051C47.9171 46.1353 47.6773 45.9568 47.4477 45.7783C47.4048 45.7453 47.347 45.7388 47.2983 45.761C39.8916 48.993 31.7778 48.993 24.2835 45.761C24.2348 45.7404 24.177 45.7474 24.1352 45.7799C23.9063 45.9584 23.6658 46.1353 23.426 46.3051C23.343 46.3636 23.3499 46.4853 23.4403 46.535C24.5812 47.1533 25.7673 47.6975 27.0129 48.1437C27.0936 48.1729 27.132 48.26 27.0919 48.3341C26.4187 49.5939 25.6333 50.7921 24.7529 51.9286C24.7145 51.9745 24.6516 51.9956 24.592 51.9783C20.8683 50.8846 17.0737 49.2353 13.157 46.5177C13.1244 46.4939 13.1009 46.4561 13.0975 46.4166C12.2995 38.3455 13.9258 30.1732 19.8626 21.7949C19.8769 21.7727 19.8986 21.7554 19.9238 21.7451C22.845 20.4783 25.9745 19.5463 29.2454 19.014C29.3049 19.0053 29.3645 19.0313 29.3954 19.0811C29.7995 19.7572 30.2615 20.6243 30.574 21.3329C34.0218 20.8353 37.5234 20.8353 41.0433 21.3329C41.3559 20.6395 41.8018 19.7572 42.2042 19.0811C42.2186 19.0564 42.2408 19.0366 42.2677 19.0246C42.2946 19.0125 42.3249 19.0088 42.3542 19.014C45.6268 19.5479 48.7563 20.4799 51.6752 21.7451C51.701 21.7554 51.7221 21.7727 51.7347 21.7965ZM32.3268 37.1425C32.3629 34.7565 30.5219 32.7821 28.211 32.7821C25.919 32.7821 24.0957 34.7391 24.0957 37.1425C24.0957 39.5452 25.955 41.5023 28.211 41.5023C30.5036 41.5023 32.3268 39.5452 32.3268 37.1425ZM47.5433 37.1425C47.5794 34.7565 45.7384 32.7821 43.4281 32.7821C41.1355 32.7821 39.3123 34.7391 39.3123 37.1425C39.3123 39.5452 41.1715 41.5023 43.4281 41.5023C45.7384 41.5023 47.5433 39.5452 47.5433 37.1425Z"
                                                        fill="#5865F2"/>
                                                </svg>
                                                <div className={'ml-[10px] min-w-[150px] flex flex-col'}>
                                                    <p className={'nunitomedium w-[100px] 2xl:w-[153.7px] lg:text-[22px] text-[#2B2F42] '}>
                                                        UI/UX Designer
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Discord
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-col w-[100px]  -ml-[65px] '}>
                                                <p className={'nunitomedium  md:w-fit  text-start lg:text-[22px] text-[#2B2F42]'}>
                                                    5-10
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'flex flex-col w-[120px] ml-8 '}>
                                                <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                    10 week
                                                </p>
                                                <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                    Year
                                                </p>
                                            </div>
                                            <div className={'w-[110px] -mr-6'}>
                                                <div
                                                    className={'max-w-[110px] w-[90px] h-[29px]  flex justify-center items-center rounded-[20px] bg-[#34B53A] bg-opacity-15  '}>
                                                    <p className={'text-[#34B53A] text-[14px] nunitobold uppercase'}>
                                                        ACTIVE
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={'flex flex-row '}>
                                                <div className={'flex flex-col  w-[120px] mr-20 '}>
                                                    <p className={'nunitomedium  md:w-fit    lg:text-[22px] text-[#2B2F42]'}>
                                                        125
                                                    </p>
                                                    <p className={'  nunitomedium lg:text-[14px] text-opacity-60 text-[#2B2F42]'}>
                                                        Applications
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className={'ml-[72px]'}></div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default JobSection;
