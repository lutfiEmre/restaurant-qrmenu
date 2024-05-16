import React from 'react';
import LeftMenu from "./LeftMenu";
import mansvg from "../img/man1.svg";
import {ProgressCircleHero} from "./ProgressCircleHero";
import {useNavigate} from "react-router-dom";

const JobPosting = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-full min-h-screen relative  bg-[#F4F4F4]  flex flex-row">
            <LeftMenu/>
            <div className={'w-full h-full z-20 pl-[30px]  md:pl-[30px] pr-[25px] md:pr-[40px] pt-[47px] pb-[175px]'}>
                <div className={'w-full h-fit flex  flex-row justify-between items-center'}>
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
                    className={'w-full  mt-8 flex-col sm:flex-row sm:gap-2 gap-6 sm:mt-[25px] flex justify-end items-center sm:items-start sm:justify-between'}>
                    <div className={'flex flex-col sm:items-start items-center w-fit gap-[5px]'}>
                        <h4 className={'nunitomedium text-[30px] text-[#2B2F42]'}>
                            Candidates
                        </h4>
                        <h3 className={'nunitomedium opacity-60 text-[14px] text-[#2B2F42]'}>
                            Let's compare the candidates.
                        </h3>
                    </div>
                </div>
                <div
                    onClick={() => {navigate('/jobposting/createnewad')}}
                    className={'mt-[20px] gap-8 xl:gap-[17px] w-full xl:justify-start gap-y-8 justify-center flex flex-row flex-wrap'}>
                    <div
                        className={'shadowe2 xl:max-w-[24%] max-w-[346px] w-[350px] lg:w-[300px] xl:w-[328px] 2xl:w-full cursor-pointer select-none  flex items-center flex-col gap-[7px] pb-[13px] rounded-[32px] pt-[25px] px-[57px]'}>
                        <svg width="232" height="232" viewBox="0 0 232 232" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M109.673 208.896C99.3415 208.212 89.3066 205.832 79.7636 201.795C68.6945 197.114 58.7544 190.411 50.2207 181.878C41.6869 173.344 34.9863 163.404 30.3031 152.335C25.4541 140.871 22.9951 128.697 22.9951 116.153C22.9951 103.608 25.4541 91.4345 30.3031 79.9686C34.9844 68.8996 41.6869 58.9594 50.2207 50.4257C58.7544 41.892 68.6945 35.1914 79.7636 30.5082C91.2275 25.6592 103.401 23.2002 115.946 23.2002C128.49 23.2002 140.664 25.6592 152.128 30.5082C163.197 35.1895 173.137 41.892 181.671 50.4257C190.204 58.9594 196.905 68.8996 201.588 79.9686C206.437 91.4326 208.896 103.606 208.896 116.153C208.896 120.268 205.56 123.604 201.445 123.604C197.33 123.604 193.993 120.268 193.993 116.153C193.993 105.613 191.931 95.393 187.863 85.7751C183.932 76.4814 178.305 68.134 171.133 60.9639C163.961 53.7938 155.615 48.1642 146.321 44.2336C136.703 40.1652 126.484 38.103 115.944 38.103C105.404 38.103 95.1842 40.1652 85.5664 44.2336C76.2726 48.1642 67.9252 53.7938 60.7551 60.9639C53.585 68.134 47.9554 76.4814 44.0248 85.7751C39.9564 95.393 37.8942 105.613 37.8942 116.153C37.8942 126.693 39.9564 136.912 44.0248 146.53C47.9554 155.824 53.585 164.171 60.7551 171.341C67.9252 178.511 76.2726 184.141 85.5664 188.072C94.2552 191.747 103.435 193.785 112.899 194.145C114.798 192.742 117.146 191.914 119.688 191.914C126.009 191.914 131.132 197.037 131.132 203.357C131.132 209.677 126.009 214.801 119.688 214.801C115.378 214.801 111.624 212.417 109.673 208.896Z"
                                  fill="url(#paint0_linear_19_2809)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M87.9931 144.107C95.4594 151.572 105.387 155.685 115.945 155.685V155.687C124.109 155.687 131.895 153.229 138.458 148.663L167.531 177.367C169.348 179.159 171.712 180.054 174.076 180.054C176.479 180.054 178.882 179.13 180.704 177.284C184.318 173.623 184.28 167.725 180.62 164.111L150.861 134.731C153.876 129.081 155.475 122.742 155.475 116.157C155.475 105.598 151.364 95.6713 143.897 88.205C136.431 80.7368 126.504 76.6255 115.945 76.6255C105.387 76.6255 95.4594 80.7368 87.9931 88.2031C80.5268 95.6694 76.4155 105.597 76.4155 116.155C76.4155 126.714 80.5268 136.641 87.9931 144.107ZM99.8483 100.055C104.148 95.7551 109.865 93.3874 115.945 93.3874C122.026 93.3874 127.743 95.7551 132.042 100.055C136.342 104.354 138.709 110.071 138.709 116.151C138.709 122.232 136.342 127.949 132.042 132.248C127.743 136.548 122.026 138.915 115.945 138.915C109.865 138.915 104.148 136.548 99.8483 132.248C95.5488 127.949 93.1812 122.232 93.1812 116.151C93.1812 110.071 95.5488 104.354 99.8483 100.055Z"
                                  fill="url(#paint1_linear_19_2809)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M108.887 168.226C111.034 165.69 114.242 164.08 117.825 164.08C124.29 164.08 129.531 169.321 129.531 175.787C129.531 182.252 124.29 187.493 117.825 187.493C114.183 187.493 110.93 185.83 108.783 183.222C102.206 182.53 95.8092 180.88 89.6904 178.292C81.6578 174.895 74.4467 170.033 68.2546 163.842C62.0625 157.65 57.2005 150.439 53.8045 142.406C50.2856 134.087 48.501 125.253 48.501 116.151C48.501 107.05 50.2856 98.216 53.8045 89.8965C57.2023 81.8639 62.0644 74.6528 68.2546 68.4607C74.4467 62.2686 81.6578 57.4065 89.6904 54.0106C98.0099 50.4916 106.844 48.707 115.945 48.707C125.047 48.707 133.881 50.4916 142.2 54.0106C150.233 57.4084 157.444 62.2704 163.636 68.4607C169.828 74.6528 174.69 81.8639 178.086 89.8965C181.605 98.216 183.39 107.05 183.39 116.151C183.39 120.267 180.054 123.603 175.938 123.603C171.823 123.603 168.487 120.267 168.487 116.151C168.487 102.117 163.021 88.9222 153.098 78.9988C143.175 69.0754 129.98 63.6098 115.945 63.6098C101.911 63.6098 88.7162 69.0754 78.7928 78.9988C68.8694 88.9222 63.4038 102.117 63.4038 116.151C63.4038 130.186 68.8694 143.381 78.7928 153.304C87.0327 161.544 97.5281 166.71 108.887 168.226Z"
                                  fill="url(#paint2_linear_19_2809)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M116 106C114.343 106 113 107.343 113 109V113L109 113C107.343 113 106 114.343 106 116C106 117.657 107.343 119 109 119H113V123C113 124.657 114.343 126 116 126C117.657 126 119 124.657 119 123V119H123C124.657 119 126 117.657 126 116C126 114.343 124.657 113 123 113L119 113V109C119 107.343 117.657 106 116 106Z"
                                  fill="#FF8E01"/>
                            <defs>
                                <linearGradient id="paint0_linear_19_2809" x1="52.8677" y1="202.334" x2="130.475"
                                                y2="15.296" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FE00C6"/>
                                    <stop offset="1" stop-color="#FE0000"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_19_2809" x1="129.961" y1="146.489" x2="117.848"
                                                y2="76.5813" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FEA800"/>
                                    <stop offset="1" stop-color="#FE7A00"/>
                                </linearGradient>
                                <linearGradient id="paint2_linear_19_2809" x1="116" y1="171.639" x2="119.901"
                                                y2="14.8837" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FEA800"/>
                                    <stop offset="1" stop-color="#FE0000"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className={'uppercase'} style={{
                            background: 'linear-gradient(90deg, #E8306E 0%, #E53582 17.65%, #EA5677 30.87%, #F47924 56.55%, #F47624 70.08%, #EF4923 82.76%, #ED2824 100%)',
                            display: 'inline',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent'
                        }}>
                            <h5 className={'nunitoblack text-[32px]'}>Create</h5>
                        </div>

                    </div>
                    <div
                        className={'shadowe2 xl:max-w-[24%] max-w-[346px] w-[350px] lg:w-[300px] xl:w-[328px] 2xl:w-full  cursor-pointer select-none  flex flex-col gap-[20px] pb-[13px] rounded-[32px] pt-[28px] px-[54px]'}>
                        <h3 className={'nunitomedium text-[22px] text-[#2B2F42]'}>
                            Open ADS
                        </h3>
                        <div className={'flex flex-col items-center gap-[30px]'}>
                            <div className={'w-[200px] h-[200px]'}>
                                <ProgressCircleHero/>
                            </div>
                            <div className={'flex flex-row gap-[27px] items-center'}>
                                <div className={'flex flex-row gap-[6px] items-center'}>
                                    <div className={'w-[14px] h-[14px] rounded-full bg-opacity-70 bg-[#FE0000]'}></div>
                                    <p className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                        Fullness
                                    </p>
                                </div>
                                <div className={'flex flex-row gap-[6px] items-center'}>
                                    <div className={'w-[14px] h-[14px] rounded-full bg-opacity-10 bg-red-500'}></div>
                                    <p className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                        Empty
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className={'shadowe2 xl:max-w-[24%] max-w-[346px] w-[350px] lg:w-[300px]  xl:w-[328px] 2xl:w-full  cursor-pointer select-none  flex flex-col gap-[47px] pb-[13px] rounded-[32px] pt-[28px]  px-[30px]'}>
                        <h3 className={'nunitomedium text-[22px] text-[#2B2F42]  '}>
                            Completed Purchases
                        </h3>
                        <div className={'flex flex-col items-center w-full justify-center  gap-[30px]'}>
                            <div className={'w-full flex justify-center items-center'}>
                                <div className={'flex flex-row items-end 2xl:gap-[13px] gap-[15px] xl:gap-[10px]'}>
                                    <div className={'w-[25px] xl:w-[20px] 2xl:w-[25px] h-[174px] rounded-[32px] bg-[#FF0202]'}></div>
                                    <div className={'w-[25px] xl:w-[20px] 2xl:w-[25px] h-[116px] rounded-[32px] bg-[#FF0202]'}></div>
                                    <div className={'w-[25px] xl:w-[20px] 2xl:w-[25px] h-[93px] rounded-[32px] bg-[#FF0202]'}></div>
                                    <div className={'w-[25px] xl:w-[20px] 2xl:w-[25px] h-[116px] rounded-[32px] bg-[#FEA800]'}></div>
                                    <div className={'w-[25px] xl:w-[20px] 2xl:w-[25px] h-[55px] rounded-[32px] bg-[#FEA800]'}></div>
                                    <div className={'w-[25px] xl:w-[20px] 2xl:w-[25px] h-[130px] rounded-[32px] bg-[#36C5F1]'}></div>
                                    <div className={'w-[25px] xl:w-[20px] 2xl:w-[25px] h-[55px] rounded-[32px] bg-[#36C5F1]'}></div>

                                </div>
                            </div>
                            <div className={'flex flex-row gap-[27px] items-center'}>
                                <div className={'flex flex-row gap-[6px] items-center'}>
                                    <div className={'w-[14px] h-[14px] rounded-full bg-opacity-70 bg-[#FE0000]'}></div>
                                    <p className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                        Fullness
                                    </p>
                                </div>
                                <div className={'flex flex-row gap-[6px] items-center'}>
                                    <div className={'w-[14px] h-[14px] rounded-full bg-opacity-10 bg-red-500'}></div>
                                    <p className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                        Empty
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div
                        className={'shadowe2 xl:max-w-[24%] max-w-[346px] w-[350px] lg:w-[300px]  xl:w-[328px] 2xl:w-full  cursor-pointer select-none  flex flex-col gap-[17px] pb-[13px] rounded-[32px] pt-[28px]  px-[27px]'}>
                        <div className={'flex flex-col gap-[5px]'}>
                            <h3 className={'nunitomedium text-[22px] text-[#2B2F42]  '}>
                                Match Suitable Candidate
                            </h3>
                            <h3 className={'nunitomedium text-[14px] text-black opacity-40  '}>
                                Matches based on candidates' CVs, skill sets and experience
                            </h3>
                        </div>
                        <div className={'flex flex-col mt-[] pb-3 items-center w-full justify-center  gap-[30px]'}>
                            <div className={'flex flex-col gap-[24px] w-full'}>
                                <div className={'flex flex-col gap-[6px] w-full'}>
                                    <div className={'w-full flex justify-between '}>
                                        <h5 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                            UI/UX Designer
                                        </h5>
                                        <h5 className={'nunitomedium text-[14px] text-[#FEA800]'}>
                                            65,376
                                        </h5>
                                    </div>
                                    <div className={'relative w-full'}>
                                        <div
                                            className={'w-[80%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#FEA800] rounded-[71.5px]'}></div>

                                        <div
                                            className={'w-full h-[8px] bg-opacity-20 bg-[#FEA800] rounded-[71.5px]'}></div>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-[6px] w-full'}>
                                    <div className={'w-full flex justify-between '}>
                                        <h5 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                            UX Designer
                                        </h5>
                                        <h5 className={'nunitomedium text-[14px] text-[#FE00C6]'}>
                                            65,376
                                        </h5>
                                    </div>
                                    <div className={'relative w-full'}>
                                        <div
                                            className={'w-[80%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#FE00C6] rounded-[71.5px]'}></div>

                                        <div
                                            className={'w-full h-[8px] bg-opacity-20 bg-[#FE00C6] rounded-[71.5px]'}></div>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-[6px] w-full'}>
                                    <div className={'w-full flex justify-between '}>
                                        <h5 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                            Front-End Developer
                                        </h5>
                                        <h5 className={'nunitomedium text-[14px] text-[#36C5F1]'}>
                                            65,376
                                        </h5>
                                    </div>
                                    <div className={'relative w-full'}>
                                        <div
                                            className={'w-[80%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#36C5F1] rounded-[71.5px]'}></div>

                                        <div
                                            className={'w-full h-[8px] bg-opacity-20 bg-[#36C5F1] rounded-[71.5px]'}></div>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-[6px] w-full'}>
                                    <div className={'w-full flex justify-between '}>
                                        <h5 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                            Fullstack Developer
                                        </h5>
                                        <h5 className={'nunitomedium text-[14px] text-[#FE0000]'}>
                                            65,376
                                        </h5>
                                    </div>
                                    <div className={'relative w-full'}>
                                        <div
                                            className={'w-[80%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#FE0000] rounded-[71.5px]'}></div>

                                        <div
                                            className={'w-full h-[8px] bg-opacity-20 bg-[#FE0000] rounded-[71.5px]'}></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div
                    className={'mt-[25px] shadowe3 rounded-[32px] pt-[10px] flex flex-row pb-[38px] pl-[31px] bg-[#F4F4F4]'}>
                    <div className={' w-full  flex flex-col  gap-[6px]'}>
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
                                <div className={'flex flex-row w-[1100px] lg:w-full   overflow-auto h-[400px]'}>
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
                                                    <p className={'  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
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
                                                    <p className={'  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
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
                                                    <p className={'  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
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
                                                    <p className={'  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
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
                                                    <p className={'  nunitomedium lg:text-[22px] text-[#2B2F42]'}>
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
};

export default JobPosting;
