import React, {useState} from 'react';
import LeftMenu from "./LeftMenu";
import mansvg from "../img/man1.svg";

const CompaniesSection = () => {
    const [level,setLevel] = useState({
        status: "company"
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
                            Companies
                        </h4>
                        <h3 className={'nunitomedium opacity-60 text-[14px] text-[#2B2F42]'}>
                            Let's take a look companies.
                        </h3>
                    </div>
                </div>
                <div
                    className={'mt-[50px]'}>
                    <div className={'flex flex-col  gap-[10px] '}>
                        <div className={'flex flex-col'}>
                            <div className={'flex flex-row   '}>
                                <div onClick={() => {
                                    setLevel({...level, status: "company"})
                                }} className={' flex cursor-pointer items-center relative  flex-col gap-[2px]'}>
                                    <h5 className={`nunitoebold select-none  text-center h-6 px-[20px] text-[14px] text-[#2B2F42] opacity-50 uppercase ${level.status === "active" && "!opacity-100"} `}>
                                        COMPANY
                                    </h5>
                                    <div
                                        className={`w-full h-[2.1px] absolute bottom-0 left-0 rounded-[2px] ${level.status === "active" && "bg-[#FF8E01]"}`}></div>
                                </div>
                            </div>
                            <div className={'w-full  h-[2px] bg-[#B0B0B0] -mt-[1.8px]'}></div>
                        </div>
                        {level.status === "company" && (
                            <div className={'flex flex-col'}>
                                <div
                                    className={'mt-[43px] justify-center items-center lg:items-start lg:justify-start flex pl-[6px] gap-[10px] md:gap-[50px] w-full flex-col md:flex-row lg:gap-[150px]'}>
                                    <h5 className={'nunitosemibold text-[22px] text-[#2B2F42]'}>
                                        3 Companies
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
                                        className={'shadowe9 border-t-[4px] border-t-[#ECB22D] bg-[#F4F4F4] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div
                                            className={'w-full flex flex-col justify-center items-center gap-[20px] h-fit pb-[10px] pt-[20px]'}>
                                            <div
                                                className={'w-[120px] bg-white h-[120px] rounded-full flex justify-center items-center'}>
                                                <svg width="62" height="63" viewBox="0 0 62 63" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_19_2075)">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M17.3062 39.5011C17.3062 35.9114 20.0205 33.0215 23.3922 33.0215C26.7639 33.0215 29.4783 35.9114 29.4783 39.5011V55.4508C29.4783 59.0404 26.7639 61.9304 23.3922 61.9304C20.0205 61.9304 17.3062 59.0404 17.3062 55.4508V39.5011Z"
                                                              fill="#E01E5A" stroke="#E01E5A" stroke-width="0.790123"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M39.0008 45.1937C35.4111 45.1937 32.5212 42.4793 32.5212 39.1076C32.5212 35.7359 35.4111 33.0215 39.0008 33.0215H54.9506C58.5402 33.0215 61.4301 35.7359 61.4301 39.1076C61.4301 42.4793 58.5402 45.1937 54.9506 45.1937H39.0008Z"
                                                              fill="#ECB22D" stroke="#ECB22D" stroke-width="0.790123"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M32.5212 7.54986C32.5212 3.96021 35.2356 1.07031 38.6073 1.07031C41.979 1.07031 44.6934 3.96021 44.6934 7.54986V23.4996C44.6934 27.0893 41.979 29.9792 38.6073 29.9792C35.2356 29.9792 32.5212 27.0893 32.5212 23.4996V7.54986Z"
                                                              fill="#2FB67C" stroke="#2FB67C" stroke-width="0.790123"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M7.04889 29.9788C3.45924 29.9788 0.569336 27.2644 0.569336 23.8927C0.569336 20.521 3.45924 17.8066 7.04889 17.8066H22.9986C26.5883 17.8066 29.4782 20.521 29.4782 23.8927C29.4782 27.2644 26.5883 29.9788 22.9986 29.9788H7.04889Z"
                                                              fill="#36C5F1" stroke="#36C5F1" stroke-width="0.790123"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M32.5213 55.8439C32.5195 56.6436 32.6758 57.4358 32.9811 58.175C33.2863 58.9141 33.7345 59.5857 34.3 60.1512C34.8655 60.7167 35.5371 61.1649 36.2763 61.4702C37.0154 61.7754 37.8076 61.9317 38.6073 61.93C41.979 61.93 44.6934 59.2156 44.6934 55.8439C44.6951 55.0442 44.5389 54.252 44.2336 53.5129C43.9284 52.7737 43.4801 52.1021 42.9147 51.5366C42.3492 50.9711 41.6776 50.5229 40.9384 50.2176C40.1992 49.9124 39.4071 49.7561 38.6073 49.7578H32.5213V55.8439Z"
                                                              fill="#ECB22D" stroke="#ECB22D" stroke-width="0.790123"
                                                              stroke-linecap="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M55.3441 29.9778H49.2581V23.8917C49.2581 20.5201 51.9725 17.8057 55.3441 17.8057C58.7158 17.8057 61.4302 20.5201 61.4302 23.8917C61.4302 27.2634 58.7158 29.9778 55.3441 29.9778Z"
                                                              fill="#2FB67C" stroke="#2FB67C" stroke-width="0.790123"
                                                              stroke-linecap="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M6.65543 33.0215H12.7415V39.1076C12.7415 42.4793 10.0271 45.1937 6.65543 45.1937C5.85572 45.1954 5.06354 45.0391 4.32438 44.7338C3.58521 44.4286 2.91361 43.9804 2.34812 43.4149C1.78264 42.8494 1.3344 42.1778 1.02915 41.4386C0.723902 40.6995 0.567645 39.9073 0.56935 39.1076C0.56935 35.7359 3.28374 33.0215 6.65543 33.0215Z"
                                                              fill="#E01E5A" stroke="#E01E5A" stroke-width="0.790123"
                                                              stroke-linecap="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M29.4783 7.15543V13.2415H23.3923C22.5925 13.2432 21.8004 13.087 21.0612 12.7817C20.322 12.4765 19.6504 12.0282 19.0849 11.4627C18.5195 10.8973 18.0712 10.2257 17.766 9.48649C17.4607 8.74733 17.3045 7.95515 17.3062 7.15543C17.3062 3.78374 20.0206 1.06935 23.3923 1.06935C24.192 1.06764 24.9841 1.2239 25.7233 1.52915C26.4625 1.8344 27.1341 2.28264 27.6996 2.84812C28.265 3.41361 28.7133 4.08521 29.0185 4.82437C29.3238 5.56354 29.48 6.35572 29.4783 7.15543Z"
                                                              fill="#36C5F1" stroke="#36C5F1" stroke-width="0.790123"
                                                              stroke-linecap="round"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_19_2075">
                                                            <rect width="61.6216" height="61.6216" fill="white"
                                                                  transform="translate(0.188965 0.689453)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>

                                            </div>
                                            <div className={'flex flex-col justify-center items-center gap-[10px]'}>
                                                <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>15-90
                                                    Employees</h6>
                                                <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                    SLACK
                                                </h4>
                                                <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                    Company
                                                </h6>
                                            </div>
                                        </div>
                                        <div
                                            className={' flex items-center justify-center pb-[15px] w-full flex-row gap-[10px] '}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Berlin
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Germany
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div
                                                className={'flex justify-center flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.8333 3.33333H14.9167C14.7233 2.39284 14.2115 1.54779 13.4677 0.940598C12.7239 0.333408 11.7935 0.0012121 10.8333 0L9.16667 0C8.2065 0.0012121 7.2761 0.333408 6.53229 0.940598C5.78848 1.54779 5.27675 2.39284 5.08333 3.33333H4.16667C3.062 3.33466 2.00296 3.77407 1.22185 4.55518C0.440735 5.3363 0.00132321 6.39534 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5C19.9987 6.39534 19.5593 5.3363 18.7782 4.55518C17.997 3.77407 16.938 3.33466 15.8333 3.33333ZM9.16667 1.66667H10.8333C11.3486 1.6688 11.8505 1.83007 12.2706 2.12841C12.6906 2.42674 13.0083 2.84758 13.18 3.33333H6.82C6.99174 2.84758 7.30936 2.42674 7.72942 2.12841C8.14948 1.83007 8.65145 1.6688 9.16667 1.66667ZM4.16667 5H15.8333C16.4964 5 17.1323 5.26339 17.6011 5.73223C18.0699 6.20107 18.3333 6.83696 18.3333 7.5V10H1.66667V7.5C1.66667 6.83696 1.93006 6.20107 2.3989 5.73223C2.86774 5.26339 3.50363 5 4.16667 5ZM15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V11.6667H9.16667V12.5C9.16667 12.721 9.25446 12.933 9.41074 13.0893C9.56703 13.2455 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.2455 10.5893 13.0893C10.7455 12.933 10.8333 12.721 10.8333 12.5V11.6667H18.3333V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333Z"
                                                        fill="#2B2F42" fill-opacity="0.5"/>
                                                </svg>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Jobs
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
                                        className={'shadowe9 border-t-[4px] border-t-[#ECB22D] bg-[#F4F4F4] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div
                                            className={'w-full flex flex-col justify-center items-center gap-[20px] h-fit pb-[10px] pt-[20px]'}>
                                            <div
                                                className={'w-[120px] bg-white h-[120px] rounded-full flex justify-center items-center'}>
                                                <svg width="79" height="58" viewBox="0 0 79 58" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M66.6882 5.36571C75.5544 17.6839 79.9331 31.5785 78.2962 47.5743C78.2893 47.642 78.2521 47.7041 78.1932 47.7449C71.479 52.4037 64.9738 55.231 58.5599 57.106C58.5099 57.1203 58.4565 57.1195 58.4071 57.1037C58.3576 57.0879 58.3146 57.0579 58.2841 57.0179C56.8023 55.0696 55.456 53.0157 54.2764 50.8588C54.2087 50.7318 54.2705 50.5788 54.4099 50.5287C56.5482 49.7674 58.5815 48.8549 60.5373 47.7746C60.6913 47.6893 60.7011 47.4807 60.5588 47.3805C60.1437 47.0893 59.7326 46.7833 59.3391 46.4773C59.2655 46.4208 59.1663 46.4096 59.0829 46.4477C46.3856 51.9882 32.4764 51.9882 19.6289 46.4477C19.5455 46.4124 19.4464 46.4245 19.3748 46.4801C18.9822 46.7861 18.5701 47.0893 18.1589 47.3805C18.0166 47.4807 18.0284 47.6893 18.1834 47.7746C20.1392 48.8345 22.1725 49.7674 24.3079 50.5324C24.4462 50.5825 24.512 50.7318 24.4433 50.8588C23.2893 53.0185 21.9429 55.0724 20.4336 57.0207C20.3679 57.0995 20.2599 57.1357 20.1579 57.106C13.7744 55.231 7.2692 52.4037 0.555001 47.7449C0.499066 47.7041 0.458831 47.6392 0.452944 47.5715C-0.915018 33.7354 1.87291 19.7258 12.0502 5.36293C12.0747 5.32491 12.112 5.29524 12.1552 5.27762C17.1629 3.10589 22.5278 1.50816 28.135 0.595706C28.2371 0.580869 28.3391 0.625379 28.3921 0.71069C29.0849 1.86981 29.8769 3.35626 30.4127 4.57102C36.3232 3.71791 42.3259 3.71791 48.36 4.57102C48.8958 3.38223 49.6603 1.86981 50.3502 0.71069C50.3747 0.668369 50.4128 0.634462 50.459 0.613813C50.5052 0.593163 50.5571 0.586826 50.6073 0.595706C56.2175 1.51095 61.5824 3.10868 66.5861 5.27762C66.6303 5.29524 66.6666 5.32491 66.6882 5.36571ZM33.4175 31.6731C33.4793 27.5828 30.3234 24.1981 26.3618 24.1981C22.4326 24.1981 19.3071 27.5531 19.3071 31.6731C19.3071 35.7921 22.4944 39.1471 26.3618 39.1471C30.292 39.1471 33.4175 35.7921 33.4175 31.6731ZM59.5029 31.6731C59.5648 27.5828 56.4088 24.1981 52.4482 24.1981C48.518 24.1981 45.3925 27.5531 45.3925 31.6731C45.3925 35.7921 48.5799 39.1471 52.4482 39.1471C56.4088 39.1471 59.5029 35.7921 59.5029 31.6731Z"
                                                        fill="#5865F2"/>
                                                </svg>


                                            </div>
                                            <div className={'flex flex-col justify-center items-center gap-[10px]'}>
                                                <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                    100-1000 Employees
                                                </h6>
                                                <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                    DISCORD
                                                </h4>
                                                <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                    Company
                                                </h6>
                                            </div>
                                        </div>
                                        <div
                                            className={' flex items-center justify-center pb-[15px] w-full flex-row gap-[10px] '}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Berlin
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Germany
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div
                                                className={'flex justify-center flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.8333 3.33333H14.9167C14.7233 2.39284 14.2115 1.54779 13.4677 0.940598C12.7239 0.333408 11.7935 0.0012121 10.8333 0L9.16667 0C8.2065 0.0012121 7.2761 0.333408 6.53229 0.940598C5.78848 1.54779 5.27675 2.39284 5.08333 3.33333H4.16667C3.062 3.33466 2.00296 3.77407 1.22185 4.55518C0.440735 5.3363 0.00132321 6.39534 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5C19.9987 6.39534 19.5593 5.3363 18.7782 4.55518C17.997 3.77407 16.938 3.33466 15.8333 3.33333ZM9.16667 1.66667H10.8333C11.3486 1.6688 11.8505 1.83007 12.2706 2.12841C12.6906 2.42674 13.0083 2.84758 13.18 3.33333H6.82C6.99174 2.84758 7.30936 2.42674 7.72942 2.12841C8.14948 1.83007 8.65145 1.6688 9.16667 1.66667ZM4.16667 5H15.8333C16.4964 5 17.1323 5.26339 17.6011 5.73223C18.0699 6.20107 18.3333 6.83696 18.3333 7.5V10H1.66667V7.5C1.66667 6.83696 1.93006 6.20107 2.3989 5.73223C2.86774 5.26339 3.50363 5 4.16667 5ZM15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V11.6667H9.16667V12.5C9.16667 12.721 9.25446 12.933 9.41074 13.0893C9.56703 13.2455 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.2455 10.5893 13.0893C10.7455 12.933 10.8333 12.721 10.8333 12.5V11.6667H18.3333V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333Z"
                                                        fill="#2B2F42" fill-opacity="0.5"/>
                                                </svg>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Jobs
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
                                        className={'shadowe9 border-t-[4px] border-t-[#ECB22D] bg-[#F4F4F4] w-[270px] h-[350px] rounded-[8px]'}>
                                        <div
                                            className={'w-full flex flex-col justify-center items-center gap-[20px] h-fit pb-[10px] pt-[20px]'}>
                                            <div
                                                className={'w-[120px] bg-white h-[120px] rounded-full flex justify-center items-center'}>
                                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M40.0001 0.571289C18.2243 0.571289 0.571533 18.224 0.571533 39.9999C0.571533 61.7757 18.2243 79.4284 40.0001 79.4284C61.7759 79.4284 79.4287 61.7757 79.4287 39.9999C79.4287 18.224 61.7759 0.571289 40.0001 0.571289ZM57.1599 57.7929C56.6586 58.6507 55.7563 59.1291 54.8296 59.1292C54.3675 59.1292 53.8995 59.0103 53.4717 58.7604C46.3863 54.6197 38.201 53.9542 32.5806 54.1251C26.3548 54.3145 21.7892 55.5435 21.7438 55.556C20.3087 55.948 18.8256 55.1035 18.4319 53.6685C18.0384 52.2338 18.88 50.7516 20.3144 50.3564C20.5202 50.2998 25.4332 48.9654 32.2653 48.74C36.2895 48.6073 40.1637 48.8877 43.7786 49.5735C48.3571 50.442 52.5337 51.9666 56.1924 54.1048C57.4782 54.8561 57.9112 56.5075 57.1599 57.7929ZM62.1726 47.3821C61.5788 48.3983 60.5101 48.9648 59.4122 48.965C58.8649 48.965 58.3104 48.8243 57.8037 48.5282C49.4111 43.6232 39.715 42.8353 33.0578 43.0376C25.6831 43.262 20.2749 44.7178 20.2213 44.7326C18.5217 45.1963 16.7646 44.1967 16.2983 42.4969C15.8321 40.7972 16.8291 39.0417 18.5282 38.5736C18.7719 38.5064 24.5915 36.9256 32.6842 36.6588C37.4514 36.5017 42.0403 36.8338 46.3221 37.646C51.7455 38.675 56.6927 40.4808 61.0265 43.0134C62.5497 43.9033 63.0626 45.8594 62.1726 47.3821ZM65.254 37.9162C64.5826 37.9162 63.9026 37.7436 63.281 37.3803C43.3281 25.7195 17.4454 32.6519 17.1863 32.7234C15.1002 33.2982 12.9437 32.0731 12.3692 29.9872C11.7944 27.9013 13.0195 25.7446 15.1054 25.17C15.4043 25.0876 22.5426 23.1487 32.4692 22.8214C38.3169 22.6289 43.9454 23.036 49.1976 24.0323C55.85 25.2943 61.9185 27.5093 67.2342 30.616C69.1021 31.7076 69.7315 34.1068 68.6399 35.9747C67.9115 37.2212 66.6006 37.9162 65.254 37.9162Z"
                                                        fill="#00D95F"/>
                                                </svg>


                                            </div>
                                            <div className={'flex flex-col justify-center items-center gap-[10px]'}>
                                                <h6 className={'nunitoebold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                    2000-5000 Employees
                                                </h6>
                                                <h4 className={'nunitoebold  text-[18px] text-[#2B2F42]'}>
                                                    SPOTIFY
                                                </h4>
                                                <h6 className={'nunitoebold opacity-60 text-[14px] text-[#2B2F42]'}>
                                                    Company
                                                </h6>
                                            </div>
                                        </div>
                                        <div
                                            className={' flex items-center justify-center pb-[15px] w-full flex-row gap-[10px] '}>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Berlin
                                            </h6>
                                            <div
                                                className={'w-[5px] h-[5px] opacity-40 rounded-full bg-[#2B2F42]'}></div>
                                            <h6 className={'nunitosemibold opacity-40 text-[14px] text-[#2B2F42]'}>
                                                Germany
                                            </h6>
                                        </div>
                                        <div
                                            className={'py-[12px] border-t-[#B0B0B0] border-opacity-50 border-t-[1px] w-full justify-between pr-[37px] flex items-center flex-row gap-[10px] pl-[30px]'}>
                                            <div
                                                className={'flex justify-center flex-row cursor-pointer gap-[6px] items-center'}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.8333 3.33333H14.9167C14.7233 2.39284 14.2115 1.54779 13.4677 0.940598C12.7239 0.333408 11.7935 0.0012121 10.8333 0L9.16667 0C8.2065 0.0012121 7.2761 0.333408 6.53229 0.940598C5.78848 1.54779 5.27675 2.39284 5.08333 3.33333H4.16667C3.062 3.33466 2.00296 3.77407 1.22185 4.55518C0.440735 5.3363 0.00132321 6.39534 0 7.5L0 15.8333C0.00132321 16.938 0.440735 17.997 1.22185 18.7782C2.00296 19.5593 3.062 19.9987 4.16667 20H15.8333C16.938 19.9987 17.997 19.5593 18.7782 18.7782C19.5593 17.997 19.9987 16.938 20 15.8333V7.5C19.9987 6.39534 19.5593 5.3363 18.7782 4.55518C17.997 3.77407 16.938 3.33466 15.8333 3.33333ZM9.16667 1.66667H10.8333C11.3486 1.6688 11.8505 1.83007 12.2706 2.12841C12.6906 2.42674 13.0083 2.84758 13.18 3.33333H6.82C6.99174 2.84758 7.30936 2.42674 7.72942 2.12841C8.14948 1.83007 8.65145 1.6688 9.16667 1.66667ZM4.16667 5H15.8333C16.4964 5 17.1323 5.26339 17.6011 5.73223C18.0699 6.20107 18.3333 6.83696 18.3333 7.5V10H1.66667V7.5C1.66667 6.83696 1.93006 6.20107 2.3989 5.73223C2.86774 5.26339 3.50363 5 4.16667 5ZM15.8333 18.3333H4.16667C3.50363 18.3333 2.86774 18.0699 2.3989 17.6011C1.93006 17.1323 1.66667 16.4964 1.66667 15.8333V11.6667H9.16667V12.5C9.16667 12.721 9.25446 12.933 9.41074 13.0893C9.56703 13.2455 9.77899 13.3333 10 13.3333C10.221 13.3333 10.433 13.2455 10.5893 13.0893C10.7455 12.933 10.8333 12.721 10.8333 12.5V11.6667H18.3333V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333Z"
                                                        fill="#2B2F42" fill-opacity="0.5"/>
                                                </svg>

                                                <h6 className={'nunitosemibold select-none opacity-50 text-[13px] text-[#2B2F42]'}>
                                                    Jobs
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
};

export default CompaniesSection;
