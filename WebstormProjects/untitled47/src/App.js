
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import mansvg from './img/man1.svg'

import classic from './img/clasic.png'

import LeftMenu from "./components/LeftMenu";
import {useState} from "react";
import ProgressBar1 from "./components/ProgressBar1";
import ProgressBar2 from "./components/ProgressBar2";

function App() {
    const [date, setDate] = useState(new Date());
    const [interv1,setInterv1] = useState({
        calendaropen: false,
        asdasd: "asdasd",
    })

    return (
    <div className="w-full h-full min-h-screen relative  bg-[#F4F4F4]  flex flex-row">
            <LeftMenu/>
        <div className={'w-full h-full z-20 pl-[30px]  md:pl-[30px] pr-[25px] md:pr-[40px] pt-[47px] pb-[175px]'}>
            <div className={'w-full h-fit flex  flex-row justify-between items-center'}>
                <div className={'flex !bg-transparent  select-none cursor-pointer flex-row gap-2'}>
                    <svg className={'absolute  !bg-transparent'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11M20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293"
                              fill="#2B2F42"/>
                    </svg>

                    <input placeholder={'Search'}
                           className={'md:w-[150px]  !bg-transparent w-[100px] lg:w-fit opacity-60 pl-8  nunitomedium placeholder:text-[#2B2F42] outline-none'}
                           type="text"/>
                </div>
                <div className={'flex flex-row gap-4'}>
                    <div className={'flex  flex-row items-end sm:items-center gap-4 sm:gap-6'}>
                        <svg className={'w-[40px] h-[36px]  cursor-pointer'} width="42" height="42"
                             viewBox="0 0 42 42"
                             fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_1_1407" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0"
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
                            <mask id="mask0_1_1407" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0"
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
                className={'w-full  mt-8 flex-col sm:flex-row sm:gap-2 gap-6 sm:mt-[25px] flex justify-end items-center sm:items-start sm:justify-between'}>
                <div className={'flex flex-col sm:items-start items-center w-fit gap-[5px]'}>
                    <h4 className={'nunitomedium text-[30px] text-[#2B2F42]'}>
                        Interview Management
                    </h4>
                    <h3 className={'nunitomedium opacity-60 text-[14px] text-[#2B2F42]'}>
                        Manage your interviews.
                    </h3>
                </div>
                <div
                    className={'bg-[#FE0000] cursor-pointer sm:mr-[35px] flex items-center w-[198px] h-[48px] gap-[17px] justify-center  rounded-[30px]'}>
                    <h4 className={'nunitomedium text-[14px] text-[#F9F9F9]'}>
                        Send Invitation
                    </h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <ellipse cx="16.6023" cy="16" rx="15.9036" ry="16" fill="#FFEAEA"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16.6024 8C15.2849 8 14.2169 9.06804 14.2169 10.3855V13.6H11.0506C9.72515 13.6 8.65063 14.6745 8.65063 16C8.65063 17.3255 9.72515 18.4 11.0506 18.4H14.2169V21.6145C14.2169 22.932 15.2849 24 16.6024 24C17.9199 24 18.988 22.932 18.988 21.6145V18.4H22.1542C23.4797 18.4 24.5542 17.3255 24.5542 16C24.5542 14.6745 23.4797 13.6 22.1542 13.6H18.988V10.3855C18.988 9.06804 17.9199 8 16.6024 8Z"
                              fill="#FE0000"/>
                    </svg>
                </div>
            </div>
            <div
                className={'sm:mt-[33px] mt-[50px] flex-wrap xl:flex-nowrap w-full justify-around justify-center flex items-center flex-row gap-8 2xl:gap-[65px]'}>
                <div className={'min-w-[311px] w-full max-w-full h-[196px] flex items-center flex-col justify-start  rounded-[32px] shadow1'}>
                    <div
                        className={'h-[48px] rounded-t-[32px] flex flex-row items-center pl-[33px] pr-[29px] justify-between bg-[#4339F2] w-full'}>
                        <h4 className={'text-[#F9F9F9] text-[22px] nunitomedium'}>
                            Interviews
                        </h4>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_328)">
                                <path
                                    d="M0 8.12491C0 6.39866 1.39875 4.99991 3.125 4.99991C4.85125 4.99991 6.25 6.39866 6.25 8.12491C6.25 9.85116 4.85125 11.2499 3.125 11.2499C1.39875 11.2499 0 9.85116 0 8.12491ZM5 27.4999H1.25C0.56 27.4999 0 28.0599 0 28.7499C0 29.4399 0.56 29.9999 1.25 29.9999H5C5.69 29.9999 6.25 29.4399 6.25 28.7499C6.25 28.0599 5.69 27.4999 5 27.4999ZM26.875 11.2499C28.6013 11.2499 30 9.85116 30 8.12491C30 6.39866 28.6013 4.99991 26.875 4.99991C25.1487 4.99991 23.75 6.39866 23.75 8.12491C23.75 9.85116 25.1487 11.2499 26.875 11.2499ZM8.125 22.4999H6.25V15.6249C6.25 13.8987 4.85125 12.4999 3.125 12.4999C1.39875 12.4999 0 13.8987 0 15.6249V21.2499C0 23.2962 1.6475 24.9637 3.685 24.9987C3.70625 24.9987 8.125 24.9999 8.125 24.9999C8.47 24.9999 8.75 25.2799 8.75 25.6249V28.7499C8.75 29.4399 9.31 29.9999 10 29.9999C10.69 29.9999 11.25 29.4399 11.25 28.7499V25.6249C11.25 23.9024 9.8475 22.4999 8.125 22.4999ZM18.75 25.6249V28.7499C18.75 29.4399 19.31 29.9999 20 29.9999C20.69 29.9999 21.25 29.4399 21.25 28.7499V25.6249C21.25 25.2799 21.53 24.9999 21.875 24.9999C21.875 24.9999 26.2938 24.9999 26.315 24.9987C28.3525 24.9637 30 23.2962 30 21.2499V15.6249C30 13.8987 28.6013 12.4999 26.875 12.4999C25.1487 12.4999 23.75 13.8987 23.75 15.6249V22.4999H21.875C20.1525 22.4999 18.75 23.9024 18.75 25.6249ZM28.75 27.4999H25C24.31 27.4999 23.75 28.0599 23.75 28.7499C23.75 29.4399 24.31 29.9999 25 29.9999H28.75C29.44 29.9999 30 29.4399 30 28.7499C30 28.0599 29.44 27.4999 28.75 27.4999ZM21.25 17.4999C21.25 16.8099 20.69 16.2499 20 16.2499H10C9.31 16.2499 8.75 16.8099 8.75 17.4999C8.75 18.1899 9.31 18.7499 10 18.7499H20C20.69 18.7499 21.25 18.1899 21.25 17.4999ZM14.8925 11.8774C14.44 11.8774 13.9812 11.7174 13.6162 11.3937L11.9313 9.99866H11.815C10.0925 9.99866 8.69 8.59616 8.69 6.87366V3.12366C8.69 1.40116 10.0925 -0.00134277 11.815 -0.00134277H18.065C19.7875 -0.00134277 21.19 1.40116 21.19 3.12366V6.87366C21.19 8.59616 19.7875 9.99866 18.065 9.99866H17.8313L16.1125 11.4212C15.7725 11.7237 15.335 11.8774 14.8925 11.8774Z"
                                    fill="#F9F9F9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_328">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div className={'pt-[26px] w-full flex items-center lg:justify-center gap-12 justify-between pl-[45px] pb-[27px] pr-[29px]'}>
                        {/*<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path*/}
                        {/*        d="M44 88C19.6995 88 -1.06149e-05 68.3005 -9.5527e-06 44C-8.49049e-06 19.6995 19.6995 -2.98551e-06 44 -1.9233e-06C68.3005 -8.61091e-07 88 19.6995 88 44C88 68.3005 68.3005 88 44 88ZM44 8.01922C24.1284 8.01922 8.01921 24.1284 8.01921 44C8.01921 63.8716 24.1284 79.9808 44 79.9808C63.8716 79.9808 79.9808 63.8716 79.9808 44C79.9808 24.1284 63.8716 8.01922 44 8.01922Z"*/}
                        {/*        fill="#BEE6FD"/>*/}
                        {/*    <path*/}
                        {/*        d="M12.3495 68.4434C10.5969 69.7969 10.2607 72.3295 11.7681 73.9517C16.0418 78.5508 21.2616 82.1939 27.086 84.6192C34.1474 87.5596 41.8535 88.6083 49.4439 87.6619C57.0344 86.7155 64.247 83.8067 70.3702 79.2223C76.4935 74.638 81.3158 68.5365 84.3616 61.5198C87.4073 54.5031 88.5712 46.8136 87.7385 39.2099C86.9057 31.6061 84.1051 24.3508 79.6129 18.1597C75.1207 11.9685 69.092 7.05543 62.1217 3.90505C56.3725 1.30661 50.1465 -0.0186134 43.8684 0.000180243C41.6539 0.00680914 40.0335 1.98197 40.2416 4.18661V4.18661C40.4497 6.39126 42.409 7.98626 44.6231 8.0246C49.5087 8.10922 54.3407 9.18855 58.8189 11.2126C64.5189 13.7888 69.4488 17.8064 73.1223 22.8692C76.7958 27.932 79.086 33.865 79.7669 40.0829C80.4479 46.3008 79.4961 52.5889 77.0055 58.3267C74.5148 64.0646 70.5714 69.054 65.5641 72.8029C60.5568 76.5517 54.6588 78.9304 48.4517 79.7043C42.2447 80.4782 35.9431 79.6206 30.1686 77.2161C25.6319 75.327 21.5436 72.5343 18.1454 69.0231C16.6053 67.4319 14.1022 67.0899 12.3495 68.4434V68.4434Z"*/}
                        {/*        fill="url(#paint0_linear_1_318)"/>*/}
                        {/*    <defs>*/}
                        {/*        <linearGradient id="paint0_linear_1_318" x1="44" y1="88" x2="44" y2="-1.9233e-06"*/}
                        {/*                        gradientUnits="userSpaceOnUse">*/}
                        {/*            <stop stop-color="#0500FF" stop-opacity="0.5"/>*/}
                        {/*            <stop offset="1" stop-color="#12005A"/>*/}
                        {/*        </linearGradient>*/}
                        {/*    </defs>*/}
                        {/*</svg>*/}
                        <ProgressBar1 percentage={60}/>
                        <div className={'w-fit flex flex-col gap-[9px]'}>
                            <div className={'w-full flex justify-center items-center'}>
                                <p className={'text-[14px] text-[#2B2F42] nunitomedium'}>Completed</p>
                            </div>
                            <h5 className={'nunitobold text-[30px] text-[#2B2F42]'}>
                                %60
                            </h5>
                            <div
                                className={'w-[64px] h-[17px] flex justify-center items-center bg-[#4339F2] bg-opacity-40 rounded-[8px]'}>
                                <p className={'nunitomedium text-[11px] text-[#4339F2]'}>
                                    Delayed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'min-w-[311px] w-full max-w-full h-[196px] flex items-center flex-col justify-start  rounded-[32px] shadow1'}>
                    <div
                        className={'h-[48px] rounded-t-[32px] flex flex-row items-center pl-[33px] pr-[29px] justify-between bg-[#FF8E01] w-full'}>
                        <h4 className={'text-[#F9F9F9] text-[22px] nunitomedium'}>
                            In Progress
                        </h4>

                        <svg className={'w-[30px] h-[30px]'} width="30" height="30" viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_313)">
                                <path
                                    d="M30 4.375V30H16.25V26.25H26.25V4.375C26.25 4.03125 25.9688 3.75 25.625 3.75H11.875C11.5312 3.75 11.25 4.03125 11.25 4.375V13.3162C10.3437 12.1837 9.01875 11.42 7.5 11.25V4.375C7.5 1.9625 9.4625 0 11.875 0H25.625C28.0375 0 30 1.9625 30 4.375ZM13.75 10H23.75V6.25H13.75V10ZM13.75 16.25H21.25V12.5H13.75V16.25ZM18.75 21.875C18.75 23.6013 20.1487 25 21.875 25C23.6013 25 25 23.6013 25 21.875C25 20.1487 23.6013 18.75 21.875 18.75C20.1487 18.75 18.75 20.1487 18.75 21.875ZM12.5 25.625C12.5 23.9013 11.0987 22.5 9.375 22.5H8.185C9.04125 20.3687 10 17.7687 10 16.8125C10 15.0862 8.60125 13.75 6.875 13.75C5.14875 13.75 3.75 15.0862 3.75 16.8125C3.75 17.7687 4.70875 20.37 5.565 22.5H4.375C2.65125 22.5 1.25 23.9013 1.25 25.625V26.25H0V30H13.75V26.25H12.5V25.625Z"
                                    fill="#F9F9F9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_313">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                    <div className={'pt-[26px] w-full flex gap-6 justify-between lg:justify-center px-6 lg:px-0 items-end  pb-[27px]'}>
                        <svg width="176" height="90" viewBox="0 0 176 90" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M167.5 89L168.5 13C168.5 13 144.163 76.7824 110 78C82.4516 78.9818 77.4404 35.3731 50 38C22.3736 40.6447 1.5 89 1.5 89H167.5Z"
                                fill="#FF8E01" fill-opacity="0.4"/>
                            <path
                                d="M48 38L47.8323 37.0142L48 38ZM110.5 77.5L110.434 76.5022L110.5 77.5ZM165.167 5.5C165.167 8.44552 167.554 10.8333 170.5 10.8333C173.446 10.8333 175.833 8.44552 175.833 5.5C175.833 2.55448 173.446 0.166667 170.5 0.166667C167.554 0.166667 165.167 2.55448 165.167 5.5ZM1 89C1.91635 89.4004 1.91634 89.4004 1.9164 89.4003C1.91653 89.4 1.91667 89.3996 1.91692 89.3991C1.91742 89.3979 1.91823 89.3961 1.91935 89.3935C1.92159 89.3884 1.92505 89.3806 1.92974 89.3699C1.93911 89.3487 1.95339 89.3164 1.9725 89.2735C2.01072 89.1877 2.06831 89.0593 2.14483 88.891C2.29788 88.5543 2.52666 88.0581 2.82777 87.4237C3.43004 86.1549 4.32139 84.3344 5.47464 82.1343C7.78211 77.7323 11.1333 71.8202 15.31 65.7716C19.4896 59.7191 24.4778 53.5565 30.0536 48.6348C35.6353 43.7078 41.7445 40.0786 48.1677 38.9858L47.8323 37.0142C40.9051 38.1926 34.464 42.074 28.7301 47.1354C22.9901 52.202 17.8972 58.5055 13.6643 64.6352C9.42871 70.7689 6.03627 76.755 3.70325 81.2058C2.53625 83.4321 1.63313 85.2765 1.02099 86.5661C0.714894 87.2109 0.481483 87.7172 0.324145 88.0633C0.245475 88.2363 0.185817 88.3694 0.145595 88.4596C0.125484 88.5048 0.110232 88.5392 0.0998907 88.5627C0.0947202 88.5744 0.0907775 88.5834 0.0880692 88.5895C0.0867151 88.5926 0.0856696 88.595 0.0849334 88.5967C0.0845655 88.5975 0.0842455 88.5983 0.0840614 88.5987C0.0838191 88.5992 0.0836542 88.5996 1 89ZM48.1677 38.9858C55.0026 37.8231 60.4052 39.7016 65.1659 43.1957C69.9757 46.7258 74.1003 51.881 78.3338 57.2631C82.5301 62.598 86.8315 68.1533 91.9216 72.233C97.0487 76.3424 103.025 78.9973 110.566 78.4978L110.434 76.5022C103.507 76.961 98.0098 74.5496 93.1725 70.6724C88.2981 66.7656 84.1436 61.4143 79.9057 56.0266C75.705 50.6861 71.4171 45.3029 66.3492 41.5833C61.2323 37.8277 55.2921 35.7451 47.8323 37.0142L48.1677 38.9858ZM110.566 78.4978C120.013 77.8721 128.536 72.9099 135.965 65.9598C143.399 59.0062 149.814 49.993 155.057 41.1008C160.304 32.2023 164.399 23.3865 167.182 16.799C168.574 13.504 169.639 10.7634 170.356 8.84483C170.715 7.88547 170.987 7.13144 171.17 6.61616C171.261 6.35851 171.33 6.16054 171.377 6.02641C171.4 5.95934 171.417 5.90824 171.429 5.87362C171.435 5.85631 171.44 5.84312 171.443 5.83411C171.444 5.82961 171.445 5.82616 171.446 5.82375C171.447 5.82255 171.447 5.82154 171.447 5.82094C171.447 5.8202 171.448 5.81972 170.5 5.5C169.552 5.18028 169.552 5.18033 169.552 5.18065C169.552 5.18111 169.552 5.18169 169.552 5.1826C169.551 5.18443 169.55 5.18731 169.549 5.19124C169.546 5.19909 169.542 5.21112 169.537 5.22726C169.525 5.25955 169.509 5.30828 169.486 5.37295C169.442 5.50227 169.374 5.69531 169.285 5.94788C169.106 6.45303 168.838 7.19626 168.483 8.14424C167.774 10.0403 166.719 12.7547 165.34 16.0207C162.579 22.5552 158.522 31.2858 153.334 40.085C148.142 48.8904 141.84 57.726 134.599 64.4992C127.355 71.2758 119.248 75.9184 110.434 76.5022L110.566 78.4978Z"
                                fill="#FF8E01"/>
                        </svg>

                        <div className={'w-fit flex flex-col gap-[9px]'}>
                            <div className={'w-full flex justify-center items-center'}>
                                <p className={'text-[14px] text-[#2B2F42] nunitomedium'}>
                                    Today
                                </p>
                            </div>
                            <h5 className={'nunitobold text-[30px] text-[#2B2F42]'}>
                                %60
                            </h5>
                            <div
                                className={'w-[64px] h-[17px] flex justify-center items-center bg-[#FF8E01] bg-opacity-40 rounded-[8px]'}>
                                <p className={'nunitomedium text-[11px] text-[#FF8E01]'}>
                                    Delayed
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'min-w-[311px] w-full max-w-full h-[196px] flex items-center flex-col justify-start  rounded-[32px] shadow1'}>
                    <div
                        className={'h-[48px] rounded-t-[32px] flex flex-row items-center pl-[33px] pr-[34px] justify-between bg-[#36C5F1] w-full'}>
                        <h4 className={'text-[#F9F9F9] text-[22px] nunitomedium'}>
                            Records
                        </h4>

                        <svg className={'w-[30px] h-[28px]'} width="30" height="30" viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_343)">
                                <path
                                    d="M21.2501 12.5C19.5195 12.5 17.8278 13.0132 16.3888 13.9746C14.9499 14.9361 13.8284 16.3027 13.1661 17.9015C12.5039 19.5004 12.3306 21.2597 12.6682 22.957C13.0058 24.6544 13.8392 26.2135 15.0629 27.4372C16.2866 28.6609 17.8457 29.4943 19.543 29.8319C21.2404 30.1695 22.9997 29.9962 24.5986 29.3339C26.1974 28.6717 27.564 27.5502 28.5254 26.1112C29.4869 24.6723 30.0001 22.9806 30.0001 21.25C29.9974 18.9302 29.0747 16.7061 27.4343 15.0657C25.794 13.4254 23.5699 12.5027 21.2501 12.5ZM24.6338 24.6338C24.3994 24.8681 24.0815 24.9997 23.7501 24.9997C23.4186 24.9997 23.1007 24.8681 22.8663 24.6338L20.3663 22.1338C20.1319 21.8994 20.0001 21.5815 20.0001 21.25V17.5C20.0001 17.1685 20.1318 16.8505 20.3662 16.6161C20.6006 16.3817 20.9186 16.25 21.2501 16.25C21.5816 16.25 21.8995 16.3817 22.134 16.6161C22.3684 16.8505 22.5001 17.1685 22.5001 17.5V20.7325L24.6338 22.8663C24.8682 23.1007 24.9998 23.4185 24.9998 23.75C24.9998 24.0815 24.8682 24.3993 24.6338 24.6338ZM10.5926 13.75C9.23283 13.75 7.90362 13.3468 6.77303 12.5914C5.64244 11.8359 4.76126 10.7622 4.2409 9.50595C3.72055 8.24971 3.5844 6.86738 3.84968 5.53376C4.11495 4.20014 4.76973 2.97513 5.73122 2.01364C6.6927 1.05216 7.91771 0.397378 9.25133 0.132104C10.585 -0.133169 11.9673 0.00297885 13.2235 0.523331C14.4798 1.04368 15.5535 1.92487 16.3089 3.05546C17.0644 4.18605 17.4676 5.51526 17.4676 6.875C17.4656 8.69776 16.7406 10.4453 15.4517 11.7342C14.1629 13.0231 12.4153 13.748 10.5926 13.75ZM14.1951 30H1.25008C1.08476 30 0.921084 29.9672 0.768524 29.9036C0.615964 29.8399 0.47755 29.7466 0.361295 29.629C0.24504 29.5115 0.153254 29.3721 0.0912505 29.2188C0.0292468 29.0656 -0.00174284 28.9016 7.56334e-05 28.7363C-0.00568196 26.1429 0.773747 23.6086 2.23582 21.4667C3.69789 19.3248 5.77411 17.6757 8.19133 16.7363C9.15123 16.3952 10.1654 16.2325 11.1838 16.2563C10.9826 16.6599 10.8056 17.0753 10.6538 17.5C10.2209 18.7029 9.99976 19.9716 10.0001 21.25C10.0005 22.9294 10.3776 24.5872 11.1036 26.1015C11.8296 27.6159 12.886 28.948 14.1951 30Z"
                                    fill="#F9F9F9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_343">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                    <div className={'pt-[26px] w-full flex gap-6 justify-between lg:justify-center gap-12 justify-between p-8 items-end  pb-[27px]'}>
                        {/*<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*    <path*/}
                        {/*        d="M44 -9.5527e-06C68.3005 -1.06149e-05 88 19.6995 88 44C88 68.3005 68.3005 88 44 88C19.6995 88 -8.61091e-07 68.3005 -1.9233e-06 44C-2.98551e-06 19.6995 19.6995 -8.49049e-06 44 -9.5527e-06ZM44 79.9808C63.8716 79.9808 79.9808 63.8716 79.9808 44C79.9808 24.1284 63.8716 8.01921 44 8.01921C24.1284 8.01921 8.01922 24.1284 8.01922 44C8.01922 63.8716 24.1284 79.9808 44 79.9808Z"*/}
                        {/*        fill="#BEE6FD"/>*/}
                        {/*    <path*/}
                        {/*        d="M75.6505 19.5566C77.4031 18.203 77.7393 15.6704 76.2319 14.0483C71.9582 9.44921 66.7384 5.80612 60.914 3.38084C53.8526 0.440403 46.1465 -0.608338 38.5561 0.338066C30.9656 1.28447 23.753 4.19332 17.6298 8.77768C11.5065 13.362 6.68418 19.4635 3.63843 26.4802C0.592684 33.4969 -0.571226 41.1864 0.261517 48.7901C1.09426 56.3939 3.89488 63.6492 8.38712 69.8403C12.8793 76.0315 18.908 80.9446 25.8783 84.0949C31.6275 86.6934 37.8535 88.0186 44.1316 87.9998C46.3461 87.9932 47.9665 86.018 47.7584 83.8134V83.8134C47.5503 81.6087 45.591 80.0137 43.3769 79.9754C38.4913 79.8908 33.6593 78.8114 29.1811 76.7874C23.4811 74.2112 18.5512 70.1936 14.8777 65.1308C11.2042 60.068 8.91405 54.135 8.23308 47.9171C7.55211 41.6992 8.50389 35.4111 10.9945 29.6733C13.4852 23.9354 17.4286 18.946 22.4359 15.1971C27.4431 11.4483 33.3412 9.06959 39.5483 8.29567C45.7553 7.52176 52.0569 8.37936 57.8314 10.7839C62.3681 12.673 66.4564 15.4657 69.8546 18.9769C71.3947 20.5681 73.8978 20.9101 75.6505 19.5566V19.5566Z"*/}
                        {/*        fill="url(#paint0_linear_1_332)"/>*/}
                        {/*    <defs>*/}
                        {/*        <linearGradient id="paint0_linear_1_332" x1="44" y1="-9.5527e-06" x2="44" y2="88"*/}
                        {/*                        gradientUnits="userSpaceOnUse">*/}
                        {/*            <stop stop-color="#5F5CFA" stop-opacity="0.5"/>*/}
                        {/*            <stop offset="1" stop-color="#36C5F1"/>*/}
                        {/*        </linearGradient>*/}
                        {/*    </defs>*/}
                        {/*</svg>*/}
                        <ProgressBar2 percentage={81}/>


                        <div className={'w-fit items-center flex flex-col gap-[9px]'}>
                            <div className={'w-full flex justify-center items-center'}>
                                <p className={'text-[14px] text-[#2B2F42] nunitomedium'}>
                                    Completed
                                </p>
                            </div>
                            <h5 className={'nunitobold text-[30px] text-[#2B2F42]'}>
                                81
                            </h5>
                            <div
                                className={'w-[64px] h-[17px] flex justify-center items-center bg-[#36C5F1] bg-opacity-40 rounded-[8px]'}>
                                <p className={'nunitomedium text-[11px] text-[#36C5F1]'}>
                                    On track
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'min-w-[311px] w-full max-w-full h-[196px] flex items-center flex-col justify-start  rounded-[32px] shadow1'}>
                    <div
                        className={'h-[48px] rounded-t-[32px] flex flex-row items-center pl-[33px] pr-[34px] justify-between bg-[#FF4343] w-full'}>
                        <h4 className={'text-[#F9F9F9] text-[22px] nunitomedium'}>
                            Cancelled
                        </h4>


                        <svg className={'w-[30px] h-[28px]'} width="30" height="30" viewBox="0 0 30 30" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_360)">
                                <path
                                    d="M16.045 0.0349947C11.695 -0.258755 7.45126 1.33374 4.38626 4.40124C1.32126 7.47124 -0.26374 11.7225 0.0362599 16.0675C0.58751 24.01 7.60251 30 16.3538 30H23.75C27.1963 30 30 27.1962 30 23.75V15.425C30 7.32624 23.8713 0.567495 16.045 0.0349947ZM19.6338 17.8662C20.1225 18.355 20.1225 19.145 19.6338 19.6337C19.39 19.8775 19.07 20 18.75 20C18.43 20 18.11 19.8775 17.8663 19.6337L15 16.7675L12.1338 19.6337C11.89 19.8775 11.57 20 11.25 20C10.93 20 10.61 19.8775 10.3663 19.6337C9.87751 19.145 9.87751 18.355 10.3663 17.8662L13.2325 15L10.3663 12.1337C9.87751 11.645 9.87751 10.855 10.3663 10.3662C10.855 9.8775 11.645 9.8775 12.1338 10.3662L15 13.2325L17.8663 10.3662C18.355 9.8775 19.145 9.8775 19.6338 10.3662C20.1225 10.855 20.1225 11.645 19.6338 12.1337L16.7675 15L19.6338 17.8662Z"
                                    fill="#F9F9F9"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_360">
                                    <rect width="30" height="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>


                    </div>
                    <div
                        className={'pt-[26px] w-full flex gap-6 justify-between lg:justify-center gap-12 justify-between p-8 items-end  pb-[27px]'}>
                        <svg width="86" height="91" viewBox="0 0 86 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="30" width="12" height="61" rx="6" fill="#023AFF" fill-opacity="0.2"/>
                            <rect x="18" y="62" width="12" height="29" rx="6" fill="#023AFF" fill-opacity="0.2"/>
                            <rect x="74" y="62" width="12" height="29" rx="6" fill="#023AFF" fill-opacity="0.2"/>
                            <rect x="37" y="30" width="12" height="61" rx="6" fill="#FF0202"/>
                            <rect x="55" width="12" height="91" rx="6" fill="#023AFF" fill-opacity="0.2"/>
                        </svg>


                        <div className={'w-fit items-center flex flex-col gap-[9px]'}>
                            <div className={'w-full flex justify-center items-center'}>
                                <p className={'text-[14px] text-[#2B2F42] nunitomedium'}>
                                    Completed
                                </p>
                            </div>
                            <h5 className={'nunitobold text-[30px] text-[#2B2F42]'}>
                                81
                            </h5>
                            <div
                                className={'w-[64px] h-[17px] flex justify-center items-center bg-[#FF434366] bg-opacity-40 rounded-[8px]'}>
                                <p className={'nunitomedium text-[11px] text-[#FF4343]'}>
                                    On track
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={'flex flex-row flex-wrap  xl:flex-nowrap lg:gap-[26px] gap-[26px] w-full mt-[20px]'}>
                <div className={'md:w-fit w-full flex flex-col  gap-[6px]'}>
                    <div className={'w-full justify-between select-none flex flex-row text-[#2B2F42] items-center'}>
                        <h4 className={'nunitomedium w-fit  text-[30px]'}>
                            Featured
                        </h4>
                        <div className={'flex flex-row w-fit gap-[15px]'}>
                            <p className={'nunitomedium text-[14px] '}>Sort by</p>
                            <div className={'flex flex-row cursor-pointer items-center gap-1'}>
                                <h6 className={'nunitoebold text-[14px]'}>
                                    Name
                                </h6>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div
                        className={'  sm:pl-0 px-2 md:w-fit w-full flex 2xl:justify-start justify-center 2xl:items-start items-center shadow1 rounded-[32px]'}>
                        <div className={'flex  overflow-auto flex-col bg-[#F4F4F4] rounded-[32px] '}>
                            <div
                                className={'w-[700px]  flex flex-row text-[#2B2F42] nunitosemibold text-[22px] px-7  justify-between p-[25px] pt-[30px] pb-[5px]'}>
                                <p>
                                    Name
                                </p>
                                <p className={'w-[100px]'}>
                                    Designation
                                </p>
                                <p className={'w-[95px]'}>
                                    Status
                                </p>
                            </div>
                            <div className={'mt-[4px] bg-[#B0B0B0] bg-opaciy-40 w-[700px]  h-[1px]'}></div>
                            <div
                                className={'mt-[22px] w-[700px]  pr-[31px] flex flex-col gap-[10px] pl-[14px] pb-[28px]'}>
                                <div className={'flex items-center justify-between flex-row'}>
                                    <div className={'flex w-[160px] flex-row items-center'}>
                                        <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                        <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                            EmreLutfi
                                        </p>
                                    </div>
                                    <p className={'nunitomedium ml-[90px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                        Front-End Developer
                                    </p>
                                    <div
                                        className={'ml-[154px] text-[#34B53A] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] bg-opacity-30 bg-[#34B53A]'}>
                                        Completed
                                    </div>

                                </div>
                                <div className={'flex items-center justify-between flex-row'}>
                                    <div className={'flex w-[160px] flex-row items-center'}>
                                        <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                        <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                            EmreLutfi
                                        </p>
                                    </div>
                                    <p className={'nunitomedium ml-[90px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                        Front-End Developer
                                    </p>
                                    <div
                                        className={'ml-[154px] text-[#FF8E01] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] bg-opacity-30 bg-[#FF8E01]'}>
                                        Scheduled
                                    </div>

                                </div>
                                <div className={'flex items-center justify-between flex-row'}>
                                    <div className={'flex w-[160px] flex-row items-center'}>
                                        <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                        <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                            EmreLutfi
                                        </p>
                                    </div>
                                    <p className={'nunitomedium ml-[90px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                        Front-End Developer
                                    </p>
                                    <div
                                        className={'ml-[154px] text-[#FE0000] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] bg-opacity-30 bg-[#FE0000]'}>
                                        Completed
                                    </div>

                                </div>
                                <div className={'flex items-center justify-between flex-row'}>
                                    <div className={'flex w-[160px] flex-row items-center'}>
                                        <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                        <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                            EmreLutfi
                                        </p>
                                    </div>
                                    <p className={'nunitomedium ml-[90px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                        Front-End Developer
                                    </p>
                                    <div
                                        className={'ml-[154px] text-[#34B53A] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] bg-opacity-30 bg-[#34B53A]'}>
                                        Completed
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={'w-full h-full  flex items-end  flex-col gap-[6px] h-[340px]'}>
                    <div className={'w-full flex-row items-center flex justify-between'}>
                        <div>

                        </div>
                        <h3 className={'nunitomedium text-[30px] text-[#2B2F42]'}>
                            Calendar
                        </h3>
                    </div>
                    <div
                        className={'w-full lg:w-fit h-full pt-[10px]   md:pl-[30px] rounded-[32px] shadow1 bg-[#F4F4F4] pb-[40px] px-[25px] md:pr-[0px] flex flex-col md:flex-row'}>

                        <div className={'flex  flex-col justify-center items-center gap-[10px] 2xl:gap-[18px]'}>
                            <h5 className={'nunitomedium text-center h-16 flex items-center justify-center text-[20px] xl:text-[22px] text-[#2B2F42]'}>
                                Recommended Candidates
                            </h5>
                            <svg className={'cursor-pointer mb-5 sm:mb-0'} width="32" height="8" viewBox="0 0 32 8"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#FF4343"/>
                                <circle cx="16" cy="4" r="4" fill="#FF4343"/>
                                <circle cx="28" cy="4" r="4" fill="#FF4343"/>
                            </svg>
                            <div className={'flex w-full flex-col mt-[3px] gap-[20px]'}>
                                <div className={'flex w-full flex-row gap-[20px] items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <div className={'flex w-full flex-col'}>
                                        <h5 className={'text-[22px] text-[#2B2F42] leading-5 nunitomedium'}>Jack
                                            Emre</h5>
                                        <div className={'w-full flex justify-between'}>
                                            <div>

                                            </div>
                                            <p className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                                70%
                                            </p>
                                        </div>
                                        <div
                                            className={'w-full bg-[#14ED44] bg-opacity-20 overflow-hidden rounded-[71.5px] h-[8px]'}>
                                            <div className={`w-[70%] h-full bg-[#14ED44] rounded-[70px]`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'flex w-full flex-row gap-[20px] items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <div className={'flex w-full flex-col'}>
                                        <h5 className={'text-[22px] text-[#2B2F42] leading-5 nunitomedium'}>Sparrow
                                            Emre</h5>
                                        <div className={'w-full flex justify-between'}>
                                            <div>

                                            </div>
                                            <p className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                                60%
                                            </p>
                                        </div>
                                        <div
                                            className={'w-full bg-[#36C5F1] bg-opacity-20 overflow-hidden rounded-[71.5px] h-[8px]'}>
                                            <div className={`w-[60%] h-full bg-[#36C5F1] rounded-[70px]`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'flex w-full flex-row gap-[20px] items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <div className={'flex w-full flex-col'}>
                                        <h5 className={'text-[22px] text-[#2B2F42] leading-5 nunitomedium'}>Emre
                                            Jack</h5>
                                        <div className={'w-full flex justify-between'}>
                                            <div>

                                            </div>
                                            <p className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                                50%
                                            </p>
                                        </div>
                                        <div
                                            className={'w-full bg-[#FEA800] bg-opacity-20 overflow-hidden rounded-[71.5px] h-[8px]'}>
                                            <div className={`w-[50%] h-full bg-[#FEA800] rounded-[70px]`}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div
                            className={'w-[4px] h-[300px] md:flex hidden bg-[#FEA800] mx-[30px] rounded-[71.5px] bg-[#FEA800]'}>

                        </div>
                        <div className='sm:pr-[15px] pt-[25px]  md:mt-0 h-full'>

                            <div
                                className='calendar-container flex justify-center flex-col items-center w-full !font-medium'>
                                <div className={`${interv1.calendaropen ? "" : 'closed'}`}>
                                    <Calendar view={"month"} locale="en-GB" onChange={setDate} value={date}/>
                                </div>
                                <div className={`${interv1.calendaropen ? "hidden" : "flex"}`}>
                                    <div
                                        className={` mt-[26px] lg:justify-start justify-center lg:items-start items-center h-fit max-h-[250px] gap-y-[9px] max-w-[350px] gap-[4px] flex flex-row flex-wrap`}>
                                        <svg onClick={() => {
                                            setInterv1({...interv1, calendaropen: !interv1.calendaropen})
                                        }} className={'cursor-pointer'} width="42" height="42" viewBox="0 0 42 42"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M21 41.8558C32.598 41.8558 42 32.4861 42 20.9279C42 9.36975 32.598 0 21 0C9.40202 0 0 9.36975 0 20.9279C0 32.4861 9.40202 41.8558 21 41.8558Z"
                                                  fill="#FE0000"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M27.125 20.056H21.875V14.824C21.875 14.3418 21.483 13.952 21 13.952C20.517 13.952 20.125 14.3418 20.125 14.824V20.056H14.875C14.392 20.056 14 20.4458 14 20.928C14 21.4102 14.392 21.8 14.875 21.8H20.125V27.032C20.125 27.5142 20.517 27.904 21 27.904C21.483 27.904 21.875 27.5142 21.875 27.032V21.8H27.125C27.608 21.8 28 21.4102 28 20.928C28 20.4458 27.608 20.056 27.125 20.056Z"
                                                  fill="#F9F9F9"/>
                                        </svg>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>
                                        <div className={'relative cursor-pointer'}>
                                            <img className={'w-[42xp] h-[42px] rounded-full'} src={classic} alt=""/>
                                            <svg className={'absolute hidden bottom-0 right-0'} width="16" height="16"
                                                 viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="8" cy="8" r="8" fill="#FE7A00"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M12.0687 8.93224L11.0511 8.42349L12.0687 7.91447V8.93224ZM8.86866 10.1486H5.21152C4.95917 10.1486 4.75437 9.98511 4.75437 9.78287V6.85715C4.75437 6.65528 4.95917 6.49144 5.21152 6.49144H8.86866C9.121 6.49144 9.3258 6.65528 9.3258 6.85715V9.78287C9.3258 9.98511 9.121 10.1486 8.86866 10.1486ZM10.2401 7.99492V6.49144C10.2401 6.08769 9.83094 5.76001 9.3258 5.76001H4.75437C4.24923 5.76001 3.84009 6.08769 3.84009 6.49144V10.1486C3.84009 10.5527 4.24923 10.88 4.75437 10.88H9.3258C9.83094 10.88 10.2401 10.5527 10.2401 10.1486V8.8518L12.2799 9.89296C12.5843 10.0484 12.9829 9.87357 12.9829 9.58465V7.26197C12.9829 6.97306 12.5843 6.79824 12.2799 6.95367L10.2401 7.99492Z"
                                                      fill="#F9F9F9"/>
                                            </svg>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/*<p className='text-center'>*/}
                            {/*    <span className='bold'>Selected Date:</span>{' '}*/}
                            {/*    {date.toDateString()}*/}
                            {/*</p>*/}
                        </div>
                    </div>

                </div>
            </div>
            <div className={' w-full mt-[32px] flex flex-col  gap-[6px]'}>
                <div className={'w-full justify-between select-none flex flex-row text-[#2B2F42] items-center'}>
                    <h4 className={'nunitomedium w-fit  text-[30px]'}>
                        All Results
                    </h4>
                    {/*<div className={'flex flex-row w-fit gap-[15px]'}>*/}
                    {/*    <p className={'nunitomedium text-[14px] '}>Sort by</p>*/}
                    {/*    <div className={'flex flex-row cursor-pointer items-center gap-1'}>*/}
                    {/*        <h6 className={'nunitoebold text-[14px]'}>*/}
                    {/*            Name*/}
                    {/*        </h6>*/}
                    {/*        <svg width="9" height="8" viewBox="0 0 9 8" fill="none"*/}
                    {/*             xmlns="http://www.w3.org/2000/svg">*/}
                    {/*            <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>*/}
                    {/*            <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>*/}
                    {/*        </svg>*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div
                    className={'  sm:pl-0 px-2  w-full flex 2xl:justify-start justify-center 2xl:items-start items-center shadow1 rounded-[32px]'}>
                    <div className={'flex w-full  overflow-auto flex-col bg-[#F4F4F4] rounded-[32px] '}>
                        <div
                            className={'w-[900px] sm:w-full flex flex-row text-[#2B2F42] nunitosemibold text-[22px] px-7  justify-between p-[25px] pt-[30px] pb-[5px]'}>
                            <p>
                                Name
                            </p>
                            <p className={'ml-16'}>
                                Designation
                            </p>
                            <p className={''}>
                                Status
                            </p>
                            <p className={''}>
                                Date
                            </p>
                            <p className={''}>
                                Time
                            </p>
                        </div>
                        <div className={'mt-[4px] bg-[#B0B0B0] bg-opaciy-40 w-[900px] sm:w-full  h-[1px]'}></div>
                        <div
                            className={'mt-[22px] w-[900px] sm:w-full  pr-[31px] flex flex-col gap-[10px] pl-[25px] pb-[28px]'}>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FF8E01] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Scheduled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#34B53A] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FE0000] flex items-center nunitobold justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Cancelled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FF8E01] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Scheduled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FF8E01] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Scheduled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FF8E01] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Scheduled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FF8E01] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Scheduled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className={' w-full mt-[32px] flex flex-col  gap-[6px]'}>
                <div className={'w-full justify-between select-none flex flex-row text-[#2B2F42] items-center'}>
                    <h4 className={'nunitomedium w-fit  text-[30px]'}>
                        Records
                    </h4>
                    <div className={'flex flex-row gap-4 sm:gap-10'}>
                        <div className={'flex flex-row w-fit gap-[15px]'}>
                            <p className={'nunitomedium text-[14px] '}>Sort by</p>
                            <div className={'flex flex-row cursor-pointer items-center gap-1'}>
                                <h6 className={'nunitoebold text-[14px]'}>
                                    Name
                                </h6>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                </svg>

                            </div>
                        </div>
                        <div className={'flex flex-row w-fit gap-[15px]'}>
                            <p className={'nunitomedium text-[14px] '}>Filter</p>
                            <div className={'flex flex-row cursor-pointer items-center gap-1'}>
                                <h6 className={'nunitoebold text-[14px]'}>
                                    All
                                </h6>
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
                    className={'  sm:pl-0 px-2  w-full flex 2xl:justify-start justify-center 2xl:items-start items-center shadow1 rounded-[32px]'}>
                    <div className={'flex w-full  overflow-auto flex-col bg-[#F4F4F4] rounded-[32px] '}>
                        <div
                            className={'w-[1100px] sm:w-full flex flex-row text-[#2B2F42] nunitosemibold text-[22px] px-7  justify-between p-[25px] pt-[30px] pb-[5px]'}>
                            <p>
                                Name
                            </p>
                            <p className={'ml-16'}>
                                Video Records
                            </p>
                            <p className={''}>
                                Status
                            </p>
                            <p className={''}>
                                Date
                            </p>
                            <p className={''}>
                                Time
                            </p>
                        </div>
                        <div className={'mt-[4px] bg-[#B0B0B0] bg-opaciy-40 w-[1100px] sm:w-full  h-[1px]'}></div>
                        <div
                            className={'mt-[22px] w-[1100px] sm:w-full  pr-[31px] flex flex-col gap-[10px] pl-[25px] pb-[28px]'}>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium -ml-20 md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center lg:text-[22px] text-[#2B2F42]'}>
                                    Video Conferencing
                                </p>
                                <div
                                    className={'-mr-[40px] text-[#34B53A] nunitomedium lg:text-[22px] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium -mr-[50px]  lg:text-[22px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   lg:text-[22px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium -ml-20 md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center lg:text-[22px] text-[#2B2F42]'}>
                                    Video Conferencing
                                </p>
                                <div
                                    className={'-mr-[40px] text-[#34B53A] nunitomedium lg:text-[22px] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium -mr-[50px]  lg:text-[22px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   lg:text-[22px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium -ml-20 md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center lg:text-[22px] text-[#2B2F42]'}>
                                    Video Conferencing
                                </p>
                                <div
                                    className={'-mr-[40px] text-[#34B53A] nunitomedium lg:text-[22px] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium -mr-[50px]  lg:text-[22px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   lg:text-[22px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium -ml-20 md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center lg:text-[22px] text-[#2B2F42]'}>
                                    Video Conferencing
                                </p>
                                <div
                                    className={'-mr-[40px] text-[#34B53A] nunitomedium lg:text-[22px] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium -mr-[50px]  lg:text-[22px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   lg:text-[22px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium -ml-20 md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center lg:text-[22px] text-[#2B2F42]'}>
                                    Video Conferencing
                                </p>
                                <div
                                    className={'-mr-[40px] text-[#34B53A] nunitomedium lg:text-[22px] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium -mr-[50px]  lg:text-[22px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   lg:text-[22px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium -ml-20 md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center lg:text-[22px] text-[#2B2F42]'}>
                                    Video Conferencing
                                </p>
                                <div
                                    className={'-mr-[40px] text-[#34B53A] nunitomedium lg:text-[22px] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium -mr-[50px]  lg:text-[22px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   lg:text-[22px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium -ml-20 md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center lg:text-[22px] text-[#2B2F42]'}>
                                    Video Conferencing
                                </p>
                                <div
                                    className={'-mr-[40px] text-[#34B53A] nunitomedium lg:text-[22px] flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium -mr-[50px]  lg:text-[22px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   lg:text-[22px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className={' w-full mt-[32px] flex flex-col  gap-[6px]'}>
                <div className={'w-full justify-between select-none flex flex-row text-[#2B2F42] items-center'}>
                    <h4 className={'nunitomedium w-fit  text-[30px]'}>
                        Cancelled
                    </h4>
                    <div className={'flex flex-row gap-4 sm:gap-10'}>
                        <div className={'flex flex-row w-fit gap-[15px]'}>
                            <p className={'nunitomedium text-[14px] '}>Sort by</p>
                            <div className={'flex flex-row cursor-pointer items-center gap-1'}>
                                <h6 className={'nunitoebold text-[14px]'}>
                                    Name
                                </h6>
                                <svg width="9" height="8" viewBox="0 0 9 8" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 0L8.39711 3H0.602886L4.5 0Z" fill="#2B2F42"/>
                                    <path d="M4.5 8L0.602886 5L8.39711 5L4.5 8Z" fill="#2B2F42"/>
                                </svg>

                            </div>
                        </div>
                        <div className={'flex flex-row w-fit gap-[15px]'}>
                            <p className={'nunitomedium text-[14px] '}>Filter</p>
                            <div className={'flex flex-row cursor-pointer items-center gap-1'}>
                                <h6 className={'nunitoebold text-[14px]'}>
                                    All
                                </h6>
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
                    className={'  sm:pl-0 px-2  w-full flex 2xl:justify-start justify-center 2xl:items-start items-center shadow1 rounded-[32px]'}>
                    <div className={'flex w-full  overflow-auto flex-col bg-[#F4F4F4] rounded-[32px] '}>
                        <div
                            className={'w-[900px] sm:w-full flex flex-row text-[#2B2F42] nunitosemibold text-[22px] px-7  justify-between p-[25px] pt-[30px] pb-[5px]'}>
                            <p>
                                Name
                            </p>
                            <p className={'ml-16'}>
                                Designation
                            </p>
                            <p className={''}>
                                Status
                            </p>
                            <p className={''}>
                                Date
                            </p>
                            <p className={''}>
                                Time
                            </p>
                        </div>
                        <div className={'mt-[4px] bg-[#B0B0B0] bg-opaciy-40 w-[900px] sm:w-full  h-[1px]'}></div>
                        <div
                            className={'mt-[22px] w-[900px] sm:w-full  pr-[31px] flex flex-col gap-[10px] pl-[25px] pb-[28px]'}>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FF8E01] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Scheduled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#34B53A] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Completed
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FE0000] flex items-center nunitobold justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Cancelled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>
                            <div className={'flex items-center justify-between flex-row'}>
                                <div className={'flex flex-row items-center'}>
                                    <img className={'w-[50px] h-[50px] rounded-full'} src={classic} alt=""/>
                                    <p className={'ml-[32px]  nunitomedium text-[14px] text-[#2B2F42]'}>
                                        EmreLutfi
                                    </p>
                                </div>
                                <p className={'nunitomedium md:w-fit w-[120px] ml-[0px] min-w-[100px] text-center text-[14px] text-[#2B2F42]'}>
                                    Front-End Developer
                                </p>
                                <div
                                    className={'ml-[0px] text-[#FF8E01] nunitobold flex items-center justify-center w-[92px] h-[24px] rounded-[20px] '}>
                                    Scheduled
                                </div>
                                <p className={'nunitomedium  text-[14px] text-[#2B2F42]'}>
                                    16/10/2023
                                </p>
                                <p className={'nunitomedium   text-[14px] text-[#2B2F42]'}>
                                    12:30
                                </p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    );
}

export default App;
