import React, {useState} from "react";
import '../App.css';
import 'react-calendar/dist/Calendar.css';

import mansvg from '../img/man1.svg'


import LeftMenu from "../components/LeftMenu";
import AdvertTitle from "./createnewad/AdvertTitle";
import Questions from "./createnewad/Questions";
import JobDescription from "./createnewad/JobDescription";
import PublishPost from "./createnewad/PublishPost";





function PositionsSection() {
    const [level,setLevel] = useState({
        status: "active"
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
                            Positions
                        </h4>
                        <h3 className={'nunitomedium opacity-60 text-[14px] text-[#2B2F42]'}>
                            Let's take a look  positions.
                        </h3>
                    </div>
                </div>
                <div
                    className={'mt-[50px]'}>
                    <div className={'flex flex-col  gap-[10px] '}>
                        <div className={'flex flex-col'}>
                            <div className={'flex flex-row   '}>
                                <div  onClick={() => {setLevel({...level,status: "active"})}} className={' flex cursor-pointer items-center relative  flex-col gap-[2px]'}>
                                    <h5 className={`nunitoebold select-none  text-center h-6 px-[10px] text-[14px] text-[#2B2F42] opacity-50 uppercase ${level.status === "active" && "!opacity-100"} `}>
                                        ACTIVE JOBS
                                    </h5>
                                    <div
                                        className={`w-full h-[2.1px] absolute bottom-0 left-0 rounded-[2px] ${level.status === "active" && "bg-[#FF8E01]"}`}></div>
                                </div>
                                <div onClick={() => {setLevel({...level,status: "deactive"})}} className={'flex cursor-pointer  items-center relative flex-col gap-[2px]'}>
                                    <h5 className={`nunitoebold  select-none text-center h-6 px-[10px] text-[14px] uppercase opacity-50 ${level.status === "deactive" && "!opacity-100"} `}>
                                        DEACTIVE JOBS
                                    </h5>
                                    <div
                                        className={`w-full h-[2.1px] absolute bottom-0 left-0 rounded-[2px] ${level.status === "deactive" && "bg-[#FF8E01]"}`}></div>
                                </div>
                            </div>
                            <div className={'w-full  h-[2px] bg-[#B0B0B0] -mt-[1.8px]'}></div>
                        </div>
                        {level.status === "active" && (
                            <div className={'flex flex-col'}>
                                <div
                                    className={'mt-[43px] justify-center items-center lg:items-start lg:justify-start flex pl-[6px] gap-[10px] md:gap-[50px] w-full flex-col md:flex-row lg:gap-[150px]'}>
                                    <h5 className={'nunitosemibold text-[22px] text-[#2B2F42]'}>
                                        7 Active Jobs
                                    </h5>
                                    <div className={'flex flex-row gap-[25px] sm:gap-[51px]'}>
                                        <div className={'flex flex-row  items-center gap-[15px]'}>
                                            <h4 className={'nunitomedium select-none text-[14px] text-[#2B2F42]'}>
                                                Sort by
                                            </h4>
                                            <div
                                                className={'flex flex-row cursor-pointer justify-center items-center gap-1'}>
                                                <h4 className={'nunitoebold text-[14px] text-[#2B2F42]'}>
                                                    Creation Date
                                                </h4>
                                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className={'flex flex-row items-center gap-[15px]'}>
                                            <h4 className={'nunitomedium select-none text-[14px] text-[#2B2F42]'}>
                                                Status:
                                            </h4>
                                            <div
                                                className={'flex flex-row cursor-pointer justify-center items-center gap-1'}>
                                                <h4 className={'nunitoebold text-[14px] text-[#2B2F42]'}>
                                                    All Status
                                                </h4>
                                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'mt-[12px] w-full flex justify-center lg:items-start lg:justify-start flex flex-row flex-wrap gap-[18px]'}>
                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#B0B0B0] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Senior Product Designer
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-50 opacity-50 bg-[#B0B0B0] shadowe10 rounded-[8px] justify-center items-center flex'}>

                                                <svg width="55" height="46" viewBox="0 0 55 46" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_d_19_1381)">
                                                        <path
                                                            d="M15.6331 11.3022L2.90728 16.4229C1.96297 16.8028 1.50571 17.8757 1.88576 18.82L11.3498 42.3398C11.7299 43.2841 12.8027 43.7414 13.747 43.3613L30.0342 36.8075C30.9784 36.4274 31.4356 35.3547 31.0557 34.4104L23.0247 14.452L15.6331 11.3022Z"
                                                            fill="#B0B0B0"/>
                                                        <path opacity="0.8"
                                                              d="M15.6331 11.3022L2.90728 16.4229C1.96297 16.8028 1.50571 17.8757 1.88576 18.82L11.3498 42.3398C11.7299 43.2841 12.8027 43.7414 13.747 43.3613L30.0342 36.8075C30.9784 36.4274 31.4356 35.3547 31.0557 34.4104L23.0247 14.452L15.6331 11.3022Z"
                                                              fill="white"/>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M24.7792 36.1877L14.1906 40.4484C13.7799 40.6137 13.3089 40.4129 13.1437 40.0022C12.9784 39.5916 13.1792 39.1205 13.5899 38.9554L24.1785 34.6947C24.5892 34.5295 25.0602 34.7302 25.2253 35.1409C25.3904 35.5514 25.1897 36.0226 24.7792 36.1877Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M11.4461 17.456L5.84565 19.7094C5.43503 19.8747 4.96396 19.6739 4.7988 19.2633C4.6335 18.8526 4.83431 18.3816 5.24498 18.2164L10.8455 15.9629C11.2561 15.7976 11.7272 15.9984 11.8923 16.4091C12.0574 16.8196 11.8568 17.2906 11.4461 17.456Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M16.2916 18.9484L7.03788 22.672C6.62726 22.8374 6.15619 22.6365 5.99104 22.2259C5.82588 21.8152 6.02655 21.3442 6.43722 21.179L15.6909 17.4554C16.1016 17.2902 16.5726 17.4909 16.7378 17.9016C16.9029 18.3121 16.7023 18.7832 16.2916 18.9484Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M21.7358 20.2006L8.23018 25.6351C7.81955 25.8004 7.34849 25.5996 7.18333 25.1889C7.01802 24.7783 7.21884 24.3072 7.62952 24.1421L21.1351 18.7075C21.5458 18.5424 22.0168 18.743 22.182 19.1537C22.3471 19.5644 22.1464 20.0354 21.7358 20.2006Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M22.9278 23.1626L15.0764 26.322C14.6657 26.4871 14.1947 26.2865 14.0296 25.8758C13.8642 25.4652 14.0651 24.9941 14.4757 24.829L22.3271 21.6696C22.7378 21.5045 23.2088 21.7051 23.374 22.1158C23.5391 22.5263 23.3383 22.9975 22.9278 23.1626Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M11.4757 27.7711L9.42203 28.5975C9.01141 28.7628 8.54035 28.562 8.37519 28.1513C8.21004 27.7406 8.41071 27.2696 8.82138 27.1045L10.875 26.2781C11.2857 26.1129 11.7567 26.3136 11.9219 26.7243C12.0871 27.1347 11.8863 27.6058 11.4757 27.7711Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M24.1198 26.1254L10.6142 31.5599C10.2035 31.7251 9.73253 31.5244 9.56737 31.1137C9.40206 30.7031 9.60288 30.232 10.0136 30.0669L23.5192 24.6324C23.9296 24.4671 24.4008 24.6679 24.566 25.0785C24.7311 25.4891 24.5304 25.9601 24.1198 26.1254Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M20.1008 31.1852L11.8066 34.5227C11.3959 34.6879 10.9249 34.4872 10.7598 34.0765C10.5946 33.6659 10.7953 33.1949 11.2059 33.0297L19.5002 29.6922C19.9108 29.527 20.3818 29.7277 20.547 30.1384C20.7121 30.5489 20.5113 31.0201 20.1008 31.1852Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M25.3121 29.0879L23.0985 29.9787C22.6878 30.1439 22.2168 29.9432 22.0517 29.5325C21.8864 29.1219 22.0872 28.6508 22.4979 28.4857L24.7113 27.595C25.1219 27.4296 25.593 27.6305 25.7581 28.0411C25.9234 28.4516 25.7226 28.9228 25.3121 29.0879Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M26.5041 32.0512L12.9985 37.4857C12.5879 37.651 12.1168 37.4502 11.9516 37.0395C11.7865 36.6288 11.9871 36.1578 12.3978 35.9927L25.9034 30.5581C26.314 30.3928 26.7851 30.5937 26.9503 31.0043C27.1154 31.4148 26.9147 31.8859 26.5041 32.0512Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <path opacity="0.22"
                                                              d="M15.6331 11.3018L17.0662 14.8632C17.4462 15.8074 18.52 16.2642 19.4645 15.8843L23.0249 14.4517L15.6331 11.3018Z"
                                                              fill="#B0B0B0"/>
                                                    </g>
                                                    <g filter="url(#filter1_d_19_1381)">
                                                        <path
                                                            d="M47.9174 14.6069L34.9988 9.99408C34.0403 9.65173 32.9863 10.1511 32.644 11.1097L24.1187 34.9858C23.7764 35.9444 24.2756 36.9984 25.2343 37.3406L41.7682 43.2443C42.7269 43.5865 43.7807 43.0872 44.123 42.1287L51.3575 21.868L47.9174 14.6069Z"
                                                            fill="#B0B0B0"/>
                                                        <path opacity="0.8"
                                                              d="M47.9174 14.6069L34.9988 9.99408C34.0403 9.65173 32.9863 10.1511 32.644 11.1097L24.1187 34.9858C23.7764 35.9444 24.2756 36.9984 25.2343 37.3406L41.7682 43.2443C42.7269 43.5865 43.7807 43.0872 44.123 42.1287L51.3575 21.868L47.9174 14.6069Z"
                                                              fill="white"/>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M38.248 39.2934L27.4991 35.4553C27.0822 35.3065 26.863 34.8437 27.0119 34.4269C27.1607 34.01 27.6235 33.7908 28.0403 33.9397L38.7893 37.7779C39.2061 37.9268 39.4254 38.3895 39.2765 38.8063C39.1276 39.223 38.6647 39.4423 38.248 39.2934Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M40.7016 16.433L35.0163 14.4029C34.5994 14.2541 34.3803 13.7913 34.5292 13.3745C34.678 12.9576 35.1408 12.7384 35.5576 12.8873L41.2429 14.9174C41.6598 15.0662 41.879 15.529 41.73 15.9459C41.5812 16.3626 41.1185 16.5818 40.7016 16.433Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M43.3365 20.7643L33.9426 17.4101C33.5257 17.2613 33.3065 16.7985 33.4554 16.3816C33.6044 15.9648 34.067 15.7456 34.4839 15.8945L43.8778 19.2487C44.2946 19.3976 44.5139 19.8603 44.3649 20.2771C44.2161 20.6938 43.7533 20.9132 43.3365 20.7643Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M46.5789 25.3139L32.8686 20.4185C32.4517 20.2697 32.2326 19.8069 32.3815 19.39C32.5303 18.9731 32.9931 18.754 33.4099 18.9029L47.1201 23.7983C47.537 23.9473 47.7562 24.4099 47.6073 24.8268C47.4583 25.2436 46.9957 25.4628 46.5789 25.3139Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M45.505 28.3208L37.5347 25.4749C37.1178 25.326 36.8986 24.8633 37.0475 24.4465C37.1963 24.0296 37.6591 23.8104 38.0759 23.9593L46.0463 26.8052C46.4631 26.9542 46.6824 27.4168 46.5334 27.8337C46.3846 28.2503 45.9217 28.4697 45.505 28.3208Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.8795 24.1702L31.7947 23.4259C31.3778 23.2771 31.1587 22.8143 31.3076 22.3974C31.4565 21.9806 31.9192 21.7614 32.336 21.9103L34.4208 22.6547C34.8376 22.8036 35.0569 23.2663 34.9079 23.6831C34.7592 24.0998 34.2964 24.319 33.8795 24.1702Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M44.4311 31.3286L30.7209 26.4331C30.3041 26.2842 30.0849 25.8215 30.2338 25.4047C30.3826 24.9878 30.8454 24.7686 31.2622 24.9176L44.9724 29.813C45.3892 29.9617 45.6085 30.4246 45.4596 30.8414C45.3107 31.2581 44.848 31.4773 44.4311 31.3286Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M38.067 32.4468L29.6471 29.4404C29.2303 29.2914 29.011 28.8288 29.1599 28.4119C29.3089 27.9951 29.7715 27.7759 30.1884 27.9248L38.6083 30.9312C39.0251 31.0802 39.2443 31.5428 39.0954 31.9597C38.9465 32.3763 38.4837 32.5957 38.067 32.4468Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M43.3573 34.3356L41.1101 33.5333C40.6933 33.3844 40.4741 32.9217 40.623 32.5049C40.7718 32.088 41.2346 31.8688 41.6514 32.0178L43.8984 32.82C44.3153 32.9688 44.5345 33.4316 44.3855 33.8484C44.2368 34.2652 43.7739 34.4845 43.3573 34.3356Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M42.2832 37.3432L28.573 32.4478C28.1561 32.299 27.9369 31.8362 28.0858 31.4193C28.2347 31.0025 28.6974 30.7833 29.1142 30.9322L42.8245 35.8276C43.2413 35.9764 43.4605 36.4392 43.3116 36.8561C43.1627 37.2727 42.7001 37.492 42.2832 37.3432Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <path opacity="0.22"
                                                              d="M47.9175 14.6064L46.6266 18.2218C46.2844 19.1805 46.7847 20.2347 47.7434 20.5771L51.3577 21.8677L47.9175 14.6064Z"
                                                              fill="#B0B0B0"/>
                                                    </g>
                                                    <g filter="url(#filter2_d_19_1381)">
                                                        <path
                                                            d="M31.6198 1.15951L17.9037 0.972151C16.8859 0.958175 16.05 1.77154 16.0362 2.78932L15.6899 28.1395C15.6761 29.1572 16.4893 29.9931 17.5071 30.007L35.0618 30.2467C36.0796 30.2605 36.9153 29.4473 36.9293 28.4295L37.2232 6.91798L31.6198 1.15951Z"
                                                            fill="#B0B0B0"/>
                                                        <path opacity="0.8"
                                                              d="M31.6198 1.15951L17.9037 0.972151C16.8859 0.958175 16.05 1.77154 16.0362 2.78932L15.6899 28.1395C15.6761 29.1572 16.4893 29.9931 17.5071 30.007L35.0618 30.2467C36.0796 30.2605 36.9153 29.4473 36.9293 28.4295L37.2232 6.91798L31.6198 1.15951Z"
                                                              fill="white"/>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M30.4532 27.6461L19.0406 27.4902C18.598 27.4842 18.2409 27.1172 18.247 26.6746C18.253 26.232 18.6201 25.8749 19.0627 25.881L30.4753 26.037C30.9178 26.0431 31.2749 26.41 31.2688 26.8526C31.2627 27.295 30.8956 27.6523 30.4532 27.6461Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M25.3823 5.22114L19.346 5.13861C18.9034 5.13264 18.5463 4.76558 18.5524 4.32298C18.5584 3.88038 18.9255 3.52331 19.3681 3.52944L25.4044 3.61197C25.847 3.61794 26.204 3.98501 26.1979 4.4276C26.1918 4.87004 25.8249 5.22712 25.3823 5.22114Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M29.2762 8.46784L19.3023 8.33167C18.8597 8.32569 18.5027 7.95863 18.5088 7.51604C18.5149 7.07344 18.8818 6.71636 19.3244 6.7225L29.2983 6.85867C29.7409 6.8648 30.098 7.2317 30.0918 7.6743C30.0857 8.11673 29.7188 8.47397 29.2762 8.46784Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.8156 11.7239L19.2589 11.5251C18.8163 11.5192 18.4592 11.1521 18.4654 10.7095C18.4713 10.2669 18.8384 9.90982 19.281 9.91595L33.8376 10.1147C34.2802 10.1209 34.6373 10.4878 34.6312 10.9304C34.6251 11.373 34.2582 11.73 33.8156 11.7239Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.772 14.9169L25.3096 14.8013C24.867 14.7952 24.5099 14.4283 24.5161 13.9857C24.522 13.5431 24.8891 13.186 25.3317 13.1922L33.7941 13.3077C34.2367 13.3139 34.5938 13.6808 34.5876 14.1234C34.5815 14.5658 34.2144 14.923 33.772 14.9169Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M21.4285 14.7487L19.215 14.7184C18.7724 14.7125 18.4153 14.3454 18.4214 13.9028C18.4276 13.4602 18.7945 13.1031 19.2371 13.1093L21.4505 13.1395C21.8931 13.1456 22.2502 13.5125 22.2441 13.9551C22.2381 14.3976 21.8711 14.7546 21.4285 14.7487Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.7282 18.1097L19.1715 17.9109C18.7289 17.9047 18.3718 17.5378 18.378 17.0953C18.3839 16.6526 18.751 16.2956 19.1936 16.3017L33.7502 16.5005C34.1927 16.5065 34.5499 16.8735 34.5438 17.3161C34.5377 17.7586 34.1708 18.1156 33.7282 18.1097Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M28.0676 21.2262L19.1279 21.1041C18.6853 21.098 18.3283 20.731 18.3344 20.2884C18.3405 19.8459 18.7074 19.4888 19.15 19.4949L28.0897 19.617C28.5323 19.6231 28.8894 19.99 28.8833 20.4326C28.8771 20.8751 28.5101 21.2323 28.0676 21.2262Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.6848 21.3026L31.2989 21.2701C30.8563 21.264 30.4992 20.8971 30.5054 20.4545C30.5113 20.0119 30.8784 19.6548 31.321 19.6609L33.7067 19.6934C34.1493 19.6994 34.5064 20.0665 34.5002 20.5091C34.4943 20.9515 34.1272 21.3087 33.6848 21.3026Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.641 24.4964L19.0843 24.2976C18.6417 24.2916 18.2847 23.9246 18.2908 23.482C18.2969 23.0394 18.6638 22.6823 19.1064 22.6884L33.6631 22.8872C34.1057 22.8932 34.4627 23.2603 34.4566 23.7029C34.4505 24.1453 34.0836 24.5024 33.641 24.4964Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <path opacity="0.22"
                                                              d="M31.6199 1.15918L31.5675 4.99776C31.5537 6.01554 32.368 6.85138 33.3859 6.86537L37.2234 6.91783L31.6199 1.15918Z"
                                                              fill="#B0B0B0"/>
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_d_19_1381" x="0.751953" y="11.3018"
                                                                width="31.4375"
                                                                height="34.1934" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                           result="hardAlpha"/>
                                                            <feOffset dy="1"/>
                                                            <feGaussianBlur stdDeviation="0.5"/>
                                                            <feComposite in2="hardAlpha" operator="out"/>
                                                            <feColorMatrix type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                     result="effect1_dropShadow_19_1381"/>
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                     in2="effect1_dropShadow_19_1381" result="shape"/>
                                                        </filter>
                                                        <filter id="filter1_d_19_1381" x="23.0107" y="9.88574"
                                                                width="29.3469"
                                                                height="35.4668" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                           result="hardAlpha"/>
                                                            <feOffset dy="1"/>
                                                            <feGaussianBlur stdDeviation="0.5"/>
                                                            <feComposite in2="hardAlpha" operator="out"/>
                                                            <feColorMatrix type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                     result="effect1_dropShadow_19_1381"/>
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                     in2="effect1_dropShadow_19_1381" result="shape"/>
                                                        </filter>
                                                        <filter id="filter2_d_19_1381" x="14.6897" y="0.97168"
                                                                width="23.5337"
                                                                height="31.2754" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                           result="hardAlpha"/>
                                                            <feOffset dy="1"/>
                                                            <feGaussianBlur stdDeviation="0.5"/>
                                                            <feComposite in2="hardAlpha" operator="out"/>
                                                            <feColorMatrix type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                     result="effect1_dropShadow_19_1381"/>
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                     in2="effect1_dropShadow_19_1381" result="shape"/>
                                                        </filter>
                                                    </defs>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                On-Site
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Draft
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#34B53A] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                UI/UX Designer
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#34B53A] shadowe11 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#34B53A]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#34B53A]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Hybrid
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#34B53A] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Head of UX
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#34B53A] shadowe11 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#34B53A]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#34B53A]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                On-Site
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#B0B0B0] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Senior Product Designer
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-50 opacity-50 bg-[#B0B0B0] shadowe10 rounded-[8px] justify-center items-center flex'}>

                                                <svg width="55" height="46" viewBox="0 0 55 46" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_d_19_1381)">
                                                        <path
                                                            d="M15.6331 11.3022L2.90728 16.4229C1.96297 16.8028 1.50571 17.8757 1.88576 18.82L11.3498 42.3398C11.7299 43.2841 12.8027 43.7414 13.747 43.3613L30.0342 36.8075C30.9784 36.4274 31.4356 35.3547 31.0557 34.4104L23.0247 14.452L15.6331 11.3022Z"
                                                            fill="#B0B0B0"/>
                                                        <path opacity="0.8"
                                                              d="M15.6331 11.3022L2.90728 16.4229C1.96297 16.8028 1.50571 17.8757 1.88576 18.82L11.3498 42.3398C11.7299 43.2841 12.8027 43.7414 13.747 43.3613L30.0342 36.8075C30.9784 36.4274 31.4356 35.3547 31.0557 34.4104L23.0247 14.452L15.6331 11.3022Z"
                                                              fill="white"/>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M24.7792 36.1877L14.1906 40.4484C13.7799 40.6137 13.3089 40.4129 13.1437 40.0022C12.9784 39.5916 13.1792 39.1205 13.5899 38.9554L24.1785 34.6947C24.5892 34.5295 25.0602 34.7302 25.2253 35.1409C25.3904 35.5514 25.1897 36.0226 24.7792 36.1877Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M11.4461 17.456L5.84565 19.7094C5.43503 19.8747 4.96396 19.6739 4.7988 19.2633C4.6335 18.8526 4.83431 18.3816 5.24498 18.2164L10.8455 15.9629C11.2561 15.7976 11.7272 15.9984 11.8923 16.4091C12.0574 16.8196 11.8568 17.2906 11.4461 17.456Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M16.2916 18.9484L7.03788 22.672C6.62726 22.8374 6.15619 22.6365 5.99104 22.2259C5.82588 21.8152 6.02655 21.3442 6.43722 21.179L15.6909 17.4554C16.1016 17.2902 16.5726 17.4909 16.7378 17.9016C16.9029 18.3121 16.7023 18.7832 16.2916 18.9484Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M21.7358 20.2006L8.23018 25.6351C7.81955 25.8004 7.34849 25.5996 7.18333 25.1889C7.01802 24.7783 7.21884 24.3072 7.62952 24.1421L21.1351 18.7075C21.5458 18.5424 22.0168 18.743 22.182 19.1537C22.3471 19.5644 22.1464 20.0354 21.7358 20.2006Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M22.9278 23.1626L15.0764 26.322C14.6657 26.4871 14.1947 26.2865 14.0296 25.8758C13.8642 25.4652 14.0651 24.9941 14.4757 24.829L22.3271 21.6696C22.7378 21.5045 23.2088 21.7051 23.374 22.1158C23.5391 22.5263 23.3383 22.9975 22.9278 23.1626Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M11.4757 27.7711L9.42203 28.5975C9.01141 28.7628 8.54035 28.562 8.37519 28.1513C8.21004 27.7406 8.41071 27.2696 8.82138 27.1045L10.875 26.2781C11.2857 26.1129 11.7567 26.3136 11.9219 26.7243C12.0871 27.1347 11.8863 27.6058 11.4757 27.7711Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M24.1198 26.1254L10.6142 31.5599C10.2035 31.7251 9.73253 31.5244 9.56737 31.1137C9.40206 30.7031 9.60288 30.232 10.0136 30.0669L23.5192 24.6324C23.9296 24.4671 24.4008 24.6679 24.566 25.0785C24.7311 25.4891 24.5304 25.9601 24.1198 26.1254Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M20.1008 31.1852L11.8066 34.5227C11.3959 34.6879 10.9249 34.4872 10.7598 34.0765C10.5946 33.6659 10.7953 33.1949 11.2059 33.0297L19.5002 29.6922C19.9108 29.527 20.3818 29.7277 20.547 30.1384C20.7121 30.5489 20.5113 31.0201 20.1008 31.1852Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M25.3121 29.0879L23.0985 29.9787C22.6878 30.1439 22.2168 29.9432 22.0517 29.5325C21.8864 29.1219 22.0872 28.6508 22.4979 28.4857L24.7113 27.595C25.1219 27.4296 25.593 27.6305 25.7581 28.0411C25.9234 28.4516 25.7226 28.9228 25.3121 29.0879Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M26.5041 32.0512L12.9985 37.4857C12.5879 37.651 12.1168 37.4502 11.9516 37.0395C11.7865 36.6288 11.9871 36.1578 12.3978 35.9927L25.9034 30.5581C26.314 30.3928 26.7851 30.5937 26.9503 31.0043C27.1154 31.4148 26.9147 31.8859 26.5041 32.0512Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <path opacity="0.22"
                                                              d="M15.6331 11.3018L17.0662 14.8632C17.4462 15.8074 18.52 16.2642 19.4645 15.8843L23.0249 14.4517L15.6331 11.3018Z"
                                                              fill="#B0B0B0"/>
                                                    </g>
                                                    <g filter="url(#filter1_d_19_1381)">
                                                        <path
                                                            d="M47.9174 14.6069L34.9988 9.99408C34.0403 9.65173 32.9863 10.1511 32.644 11.1097L24.1187 34.9858C23.7764 35.9444 24.2756 36.9984 25.2343 37.3406L41.7682 43.2443C42.7269 43.5865 43.7807 43.0872 44.123 42.1287L51.3575 21.868L47.9174 14.6069Z"
                                                            fill="#B0B0B0"/>
                                                        <path opacity="0.8"
                                                              d="M47.9174 14.6069L34.9988 9.99408C34.0403 9.65173 32.9863 10.1511 32.644 11.1097L24.1187 34.9858C23.7764 35.9444 24.2756 36.9984 25.2343 37.3406L41.7682 43.2443C42.7269 43.5865 43.7807 43.0872 44.123 42.1287L51.3575 21.868L47.9174 14.6069Z"
                                                              fill="white"/>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M38.248 39.2934L27.4991 35.4553C27.0822 35.3065 26.863 34.8437 27.0119 34.4269C27.1607 34.01 27.6235 33.7908 28.0403 33.9397L38.7893 37.7779C39.2061 37.9268 39.4254 38.3895 39.2765 38.8063C39.1276 39.223 38.6647 39.4423 38.248 39.2934Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M40.7016 16.433L35.0163 14.4029C34.5994 14.2541 34.3803 13.7913 34.5292 13.3745C34.678 12.9576 35.1408 12.7384 35.5576 12.8873L41.2429 14.9174C41.6598 15.0662 41.879 15.529 41.73 15.9459C41.5812 16.3626 41.1185 16.5818 40.7016 16.433Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M43.3365 20.7643L33.9426 17.4101C33.5257 17.2613 33.3065 16.7985 33.4554 16.3816C33.6044 15.9648 34.067 15.7456 34.4839 15.8945L43.8778 19.2487C44.2946 19.3976 44.5139 19.8603 44.3649 20.2771C44.2161 20.6938 43.7533 20.9132 43.3365 20.7643Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M46.5789 25.3139L32.8686 20.4185C32.4517 20.2697 32.2326 19.8069 32.3815 19.39C32.5303 18.9731 32.9931 18.754 33.4099 18.9029L47.1201 23.7983C47.537 23.9473 47.7562 24.4099 47.6073 24.8268C47.4583 25.2436 46.9957 25.4628 46.5789 25.3139Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M45.505 28.3208L37.5347 25.4749C37.1178 25.326 36.8986 24.8633 37.0475 24.4465C37.1963 24.0296 37.6591 23.8104 38.0759 23.9593L46.0463 26.8052C46.4631 26.9542 46.6824 27.4168 46.5334 27.8337C46.3846 28.2503 45.9217 28.4697 45.505 28.3208Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.8795 24.1702L31.7947 23.4259C31.3778 23.2771 31.1587 22.8143 31.3076 22.3974C31.4565 21.9806 31.9192 21.7614 32.336 21.9103L34.4208 22.6547C34.8376 22.8036 35.0569 23.2663 34.9079 23.6831C34.7592 24.0998 34.2964 24.319 33.8795 24.1702Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M44.4311 31.3286L30.7209 26.4331C30.3041 26.2842 30.0849 25.8215 30.2338 25.4047C30.3826 24.9878 30.8454 24.7686 31.2622 24.9176L44.9724 29.813C45.3892 29.9617 45.6085 30.4246 45.4596 30.8414C45.3107 31.2581 44.848 31.4773 44.4311 31.3286Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M38.067 32.4468L29.6471 29.4404C29.2303 29.2914 29.011 28.8288 29.1599 28.4119C29.3089 27.9951 29.7715 27.7759 30.1884 27.9248L38.6083 30.9312C39.0251 31.0802 39.2443 31.5428 39.0954 31.9597C38.9465 32.3763 38.4837 32.5957 38.067 32.4468Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M43.3573 34.3356L41.1101 33.5333C40.6933 33.3844 40.4741 32.9217 40.623 32.5049C40.7718 32.088 41.2346 31.8688 41.6514 32.0178L43.8984 32.82C44.3153 32.9688 44.5345 33.4316 44.3855 33.8484C44.2368 34.2652 43.7739 34.4845 43.3573 34.3356Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M42.2832 37.3432L28.573 32.4478C28.1561 32.299 27.9369 31.8362 28.0858 31.4193C28.2347 31.0025 28.6974 30.7833 29.1142 30.9322L42.8245 35.8276C43.2413 35.9764 43.4605 36.4392 43.3116 36.8561C43.1627 37.2727 42.7001 37.492 42.2832 37.3432Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <path opacity="0.22"
                                                              d="M47.9175 14.6064L46.6266 18.2218C46.2844 19.1805 46.7847 20.2347 47.7434 20.5771L51.3577 21.8677L47.9175 14.6064Z"
                                                              fill="#B0B0B0"/>
                                                    </g>
                                                    <g filter="url(#filter2_d_19_1381)">
                                                        <path
                                                            d="M31.6198 1.15951L17.9037 0.972151C16.8859 0.958175 16.05 1.77154 16.0362 2.78932L15.6899 28.1395C15.6761 29.1572 16.4893 29.9931 17.5071 30.007L35.0618 30.2467C36.0796 30.2605 36.9153 29.4473 36.9293 28.4295L37.2232 6.91798L31.6198 1.15951Z"
                                                            fill="#B0B0B0"/>
                                                        <path opacity="0.8"
                                                              d="M31.6198 1.15951L17.9037 0.972151C16.8859 0.958175 16.05 1.77154 16.0362 2.78932L15.6899 28.1395C15.6761 29.1572 16.4893 29.9931 17.5071 30.007L35.0618 30.2467C36.0796 30.2605 36.9153 29.4473 36.9293 28.4295L37.2232 6.91798L31.6198 1.15951Z"
                                                              fill="white"/>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M30.4532 27.6461L19.0406 27.4902C18.598 27.4842 18.2409 27.1172 18.247 26.6746C18.253 26.232 18.6201 25.8749 19.0627 25.881L30.4753 26.037C30.9178 26.0431 31.2749 26.41 31.2688 26.8526C31.2627 27.295 30.8956 27.6523 30.4532 27.6461Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M25.3823 5.22114L19.346 5.13861C18.9034 5.13264 18.5463 4.76558 18.5524 4.32298C18.5584 3.88038 18.9255 3.52331 19.3681 3.52944L25.4044 3.61197C25.847 3.61794 26.204 3.98501 26.1979 4.4276C26.1918 4.87004 25.8249 5.22712 25.3823 5.22114Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M29.2762 8.46784L19.3023 8.33167C18.8597 8.32569 18.5027 7.95863 18.5088 7.51604C18.5149 7.07344 18.8818 6.71636 19.3244 6.7225L29.2983 6.85867C29.7409 6.8648 30.098 7.2317 30.0918 7.6743C30.0857 8.11673 29.7188 8.47397 29.2762 8.46784Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.8156 11.7239L19.2589 11.5251C18.8163 11.5192 18.4592 11.1521 18.4654 10.7095C18.4713 10.2669 18.8384 9.90982 19.281 9.91595L33.8376 10.1147C34.2802 10.1209 34.6373 10.4878 34.6312 10.9304C34.6251 11.373 34.2582 11.73 33.8156 11.7239Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.772 14.9169L25.3096 14.8013C24.867 14.7952 24.5099 14.4283 24.5161 13.9857C24.522 13.5431 24.8891 13.186 25.3317 13.1922L33.7941 13.3077C34.2367 13.3139 34.5938 13.6808 34.5876 14.1234C34.5815 14.5658 34.2144 14.923 33.772 14.9169Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M21.4285 14.7487L19.215 14.7184C18.7724 14.7125 18.4153 14.3454 18.4214 13.9028C18.4276 13.4602 18.7945 13.1031 19.2371 13.1093L21.4505 13.1395C21.8931 13.1456 22.2502 13.5125 22.2441 13.9551C22.2381 14.3976 21.8711 14.7546 21.4285 14.7487Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.7282 18.1097L19.1715 17.9109C18.7289 17.9047 18.3718 17.5378 18.378 17.0953C18.3839 16.6526 18.751 16.2956 19.1936 16.3017L33.7502 16.5005C34.1927 16.5065 34.5499 16.8735 34.5438 17.3161C34.5377 17.7586 34.1708 18.1156 33.7282 18.1097Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M28.0676 21.2262L19.1279 21.1041C18.6853 21.098 18.3283 20.731 18.3344 20.2884C18.3405 19.8459 18.7074 19.4888 19.15 19.4949L28.0897 19.617C28.5323 19.6231 28.8894 19.99 28.8833 20.4326C28.8771 20.8751 28.5101 21.2323 28.0676 21.2262Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.6848 21.3026L31.2989 21.2701C30.8563 21.264 30.4992 20.8971 30.5054 20.4545C30.5113 20.0119 30.8784 19.6548 31.321 19.6609L33.7067 19.6934C34.1493 19.6994 34.5064 20.0665 34.5002 20.5091C34.4943 20.9515 34.1272 21.3087 33.6848 21.3026Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <g opacity="0.22">
                                                            <path
                                                                d="M33.641 24.4964L19.0843 24.2976C18.6417 24.2916 18.2847 23.9246 18.2908 23.482C18.2969 23.0394 18.6638 22.6823 19.1064 22.6884L33.6631 22.8872C34.1057 22.8932 34.4627 23.2603 34.4566 23.7029C34.4505 24.1453 34.0836 24.5024 33.641 24.4964Z"
                                                                fill="#B0B0B0"/>
                                                        </g>
                                                        <path opacity="0.22"
                                                              d="M31.6199 1.15918L31.5675 4.99776C31.5537 6.01554 32.368 6.85138 33.3859 6.86537L37.2234 6.91783L31.6199 1.15918Z"
                                                              fill="#B0B0B0"/>
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_d_19_1381" x="0.751953" y="11.3018"
                                                                width="31.4375"
                                                                height="34.1934" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                           result="hardAlpha"/>
                                                            <feOffset dy="1"/>
                                                            <feGaussianBlur stdDeviation="0.5"/>
                                                            <feComposite in2="hardAlpha" operator="out"/>
                                                            <feColorMatrix type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                     result="effect1_dropShadow_19_1381"/>
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                     in2="effect1_dropShadow_19_1381" result="shape"/>
                                                        </filter>
                                                        <filter id="filter1_d_19_1381" x="23.0107" y="9.88574"
                                                                width="29.3469"
                                                                height="35.4668" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                           result="hardAlpha"/>
                                                            <feOffset dy="1"/>
                                                            <feGaussianBlur stdDeviation="0.5"/>
                                                            <feComposite in2="hardAlpha" operator="out"/>
                                                            <feColorMatrix type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                     result="effect1_dropShadow_19_1381"/>
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                     in2="effect1_dropShadow_19_1381" result="shape"/>
                                                        </filter>
                                                        <filter id="filter2_d_19_1381" x="14.6897" y="0.97168"
                                                                width="23.5337"
                                                                height="31.2754" filterUnits="userSpaceOnUse"
                                                                color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                                            <feColorMatrix in="SourceAlpha" type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                                           result="hardAlpha"/>
                                                            <feOffset dy="1"/>
                                                            <feGaussianBlur stdDeviation="0.5"/>
                                                            <feComposite in2="hardAlpha" operator="out"/>
                                                            <feColorMatrix type="matrix"
                                                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                                            <feBlend mode="normal" in2="BackgroundImageFix"
                                                                     result="effect1_dropShadow_19_1381"/>
                                                            <feBlend mode="normal" in="SourceGraphic"
                                                                     in2="effect1_dropShadow_19_1381" result="shape"/>
                                                        </filter>
                                                    </defs>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className={'my-[20px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                On-Site
                                            </h6>
                                        </div>
                                        <div
                                            className={'my-[20px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Draft
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>


                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#34B53A] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Head of UX
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#34B53A] shadowe11 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#34B53A]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#34B53A]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                On-Site
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#34B53A] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Head of UX
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#34B53A] shadowe11 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#34B53A]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#34B53A]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                On-Site
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#34B53A] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Head of UX
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#34B53A] shadowe11 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#34B53A]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#34B53A]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                On-Site
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        )}
                        {level.status === "deactive" && (
                            <div className={'flex flex-col'}>
                                <div
                                    className={'mt-[43px] justify-center items-center lg:items-start lg:justify-start flex pl-[6px] gap-[10px] md:gap-[50px] w-full flex-col md:flex-row lg:gap-[150px]'}>
                                    <h5 className={'nunitosemibold text-[22px] text-[#2B2F42]'}>
                                        3 Deactive Jobs
                                    </h5>
                                    <div className={'flex flex-row gap-[25px] sm:gap-[51px]'}>
                                        <div className={'flex flex-row  items-center gap-[15px]'}>
                                            <h4 className={'nunitomedium select-none text-[14px] text-[#2B2F42]'}>
                                                Sort by
                                            </h4>
                                            <div
                                                className={'flex flex-row cursor-pointer justify-center items-center gap-1'}>
                                                <h4 className={'nunitoebold text-[14px] text-[#2B2F42]'}>
                                                    Creation Date
                                                </h4>
                                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                        <div className={'flex flex-row items-center gap-[15px]'}>
                                            <h4 className={'nunitomedium select-none text-[14px] text-[#2B2F42]'}>
                                                Status:
                                            </h4>
                                            <div
                                                className={'flex flex-row cursor-pointer justify-center items-center gap-1'}>
                                                <h4 className={'nunitoebold text-[14px] text-[#2B2F42]'}>
                                                    All Status
                                                </h4>
                                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={'mt-[12px] w-full flex justify-center lg:items-start lg:justify-start flex flex-row flex-wrap gap-[18px]'}>
                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#FF4343] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Junior Designer
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#FF4343] shadowe12 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#FF4343]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#FF4343]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Hybrid
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#FF4343] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Junior Designer
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#FF4343] shadowe12 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#FF4343]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#FF4343]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Hybrid
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={'shadowe9 border-t-[4px] border-t-[#FF4343] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div className={'w-full flex flex-col gap-[20px] h-fit py-[15px] pl-[32px]'}>
                                            <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>DESIGN</h6>
                                            <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                Junior Designer
                                            </h4>
                                            <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                Candidates:
                                            </h6>
                                        </div>
                                        <div
                                            className={'w-full h-[110px] py-[12px] flex justify-center items-center px-[30px]'}>
                                            <div
                                                className={'w-full h-full bg-opacity-10 opacity-100 bg-[#FF4343] shadowe12 rounded-[8px] justify-center items-center flex'}>

                                                <div className={'flex flex-row gap-[15px]'}>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#FF4343]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                TOTAL
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                128
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className={"flex items-center flex-row gap-[10px]"}>
                                                        <div className={'flex flex-row items-end gap-[2.97px]'}>
                                                            <div
                                                                className={'w-[6px] h-[29px] rounded-[32px] bg-[#FF4343]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[36px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                            <div
                                                                className={'w-[6px] h-[55px] rounded-[32px] bg-[#B0B0B0]'}></div>
                                                        </div>
                                                        <div className={'flex flex-col gap-[6px]'}>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                NEW
                                                            </h4>
                                                            <h4 className={'nunitoebold uppercase text-[14px] text-[#2B2F42]'}>
                                                                8
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={'my-[15px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                OptiRecruits
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Hybrid
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg className={'w-[17px] h-[20px]'} width="17" height="20"
                                                     viewBox="0 0 17 20"
                                                     fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5"
                                                          d="M6.75665 13.7342C6.9496 14.365 6.46765 15 5.79615 15H4.2415C3.57 15 3.08805 14.365 3.281 13.7342L3.92445 11.6308C4.0698 11.1575 4.51435 10.8325 5.0184 10.8325C5.52245 10.8325 5.96785 11.1567 6.11235 11.6308L6.7558 13.7342H6.75665ZM17 8.7375V15.8333C17 18.1308 15.0935 20 12.75 20H4.25C1.90655 20 0 18.1308 0 15.8333V4.16667C0 1.86917 1.90655 0 4.25 0H8.08775C9.6764 0 11.1707 0.606667 12.2953 1.70833L15.2566 4.61333C16.3804 5.71417 17 7.17917 17 8.73833V8.7375ZM11.0934 2.88667C10.823 2.62167 10.523 2.3975 10.2 2.21583V5.83333C10.2 6.2925 10.5808 6.66667 11.05 6.66667H14.7399C14.5546 6.35083 14.325 6.05667 14.0556 5.79167L11.0942 2.88667H11.0934ZM15.3 8.7375C15.3 8.60167 15.2932 8.46667 15.2804 8.33333H11.05C9.6441 8.33333 8.5 7.21167 8.5 5.83333V1.68583C8.364 1.67333 8.2263 1.66667 8.08775 1.66667H5.95V2.5C5.95 2.96 5.57005 3.33333 5.1 3.33333C4.62995 3.33333 4.25 2.96 4.25 2.5V1.66667C2.8441 1.66667 1.7 2.78833 1.7 4.16667V15.8333C1.7 17.2117 2.8441 18.3333 4.25 18.3333H12.75C14.1559 18.3333 15.3 17.2117 15.3 15.8333V8.7375ZM5.1 6.66667C5.57005 6.66667 5.95 6.29333 5.95 5.83333V5C5.95 4.54 5.57005 4.16667 5.1 4.16667C4.62995 4.16667 4.25 4.54 4.25 5V5.83333C4.25 6.29333 4.62995 6.66667 5.1 6.66667ZM5.1 10C5.57005 10 5.95 9.62667 5.95 9.16667V8.33333C5.95 7.87333 5.57005 7.5 5.1 7.5C4.62995 7.5 4.25 7.87333 4.25 8.33333V9.16667C4.25 9.62667 4.62995 10 5.1 10Z"
                                                          fill="black"/>
                                                </svg>
                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Published
                                                </h6>
                                            </div>
                                            <div className={'flex flex-row cursor-pointer gap-[6px] items-center'}>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    See Details
                                                </h6>
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M1.63332 8C1.42 8 1.20667 7.92159 1.04417 7.76558C0.718349 7.45276 0.718349 6.94712 1.04417 6.6343L3.79827 3.99011L1.14834 1.35552C0.829179 1.03709 0.838345 0.530657 1.16917 0.224234C1.50083 -0.082188 2.02831 -0.0733874 2.34747 0.243436L5.56572 3.44367C5.88154 3.75809 5.87738 4.25653 5.55572 4.56535L2.22248 7.76558C2.05998 7.92159 1.84665 8 1.63332 8Z"
                                                          fill="#2B2F42"/>
                                                </svg>

                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        )}

                    </div>
                </div>


            </div>

        </div>
    );
}

export default PositionsSection;
