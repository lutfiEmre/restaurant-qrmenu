import React, {useState} from "react";
import './App.css';
import 'react-calendar/dist/Calendar.css';

import mansvg from '../../assets/jobmanagement/man1.svg'


import LeftMenu from "../jobmanagement/LeftMenu";
import AdvertTitle from "./createnewad/AdvertTitle.jsx";
import Questions from "./createnewad/Questions.jsx";
import JobDescription from "./createnewad/JobDescription.jsx";
import PublishPost from "./createnewad/PublishPost.jsx";





function CreateNewAd1() {
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
                            Create New Ad
                        </h4>
                        <h3 className={'nunitomedium opacity-60 text-[14px] text-[#2B2F42]'}>
                            Let's create a new ad.
                        </h3>
                    </div>
                </div>
                <div className={'flex w-full select-none  flex justify-center items-center'}>
                    <div
                        className={'mt-[25px]  2xl:w-full justify-center items-center 2xl:flex justify-items-center gap-0 items-baseline xl:w-fit lg:grid-cols-2 lg:grid  xl:grid grid-cols-2 flex-wrap 2xl:flex-wrap'}>
                        <div
                            className={` ${level.p === 1 ? " bg-[#14ED44] bg-opacity-20 border-[#00D95F]" : ''} 2xl:w-[25%]  w-[362px] gap-[14px] pr-[20px] flex items-center flex-row 2xl:rounded-l-[32px] h-[120px] border-[#B0B0B0] border-opacity-20 lg:border-r-0 border-r-[2px] border-[2px] 2xl:border-b-[2px] 2xl:border-r-[2px] border-r-[0px] border-b-0 border-[2px] pl-[12px] py-[19px]`}>
                            <div
                                className={'w-[120px] h-[82px] flex justify-center items-center bg-[#E2FBD7] rounded-full'}>
                                <p className={'nunitosemibold text-[40px] text-[#00D95F]'}>
                                    1
                                </p>
                            </div>
                            <div className={'flex flex-col w-full'}>
                                <h4 className={'nunitomedium leading-6 text-[22px] text-[#2B2F42]'}>
                                    Advert Title
                                </h4>
                                <h4 className={'nunitomedium text-[14px] text-opacity-40 text-[#2B2F42]'}>
                                    Advert Title
                                </h4>
                                <div className={'relative mt-[10px] w-full'}>
                                    <div
                                        className={'w-[50%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#00D95F] rounded-[71.5px]'}></div>

                                    <div
                                        className={'w-full h-[8px] bg-opacity-20 bg-[#14ED44] rounded-[71.5px]'}></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={` ${level.p === 2 ? " bg-[#ED1414] bg-opacity-20 border-[#FE0000]" : ''} 2xl:w-[25%]  w-[362px] gap-[14px] pr-[20px] flex items-center flex-row  h-[120px] border-[#B0B0B0] border-opacity-20 2xl:border-b-[2px] xl:border-l-0 border-l-[2px] border-t-[2px]  border-r-[2px] pl-[12px] py-[19px]`}>
                            <div
                                className={'w-[120px]  h-[82px] flex justify-center items-center bg-[#FFE5D3] rounded-full'}>
                                <p className={'nunitosemibold text-[40px] text-[#FE0000]'}>
                                    2
                                </p>
                            </div>
                            <div className={'flex flex-col w-full'}>
                                <h4 className={'nunitomedium leading-6 text-[22px] text-[#2B2F42]'}>
                                    Job Description
                                </h4>
                                <h4 className={'nunitomedium text-[14px] text-opacity-40 text-[#2B2F42]'}>
                                    Proceed by entering searched JDs.
                                </h4>
                                <div className={'relative mt-[10px] w-full'}>
                                    <div
                                        className={'w-[50%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#FE0000] rounded-[71.5px]'}></div>

                                    <div
                                        className={'w-full h-[8px] bg-opacity-100 bg-[#FFE5D3] rounded-[71.5px]'}></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={` ${level.p === 3 ? " bg-[#146BED] bg-opacity-20 border-[#02A0FC]" : ''} 2xl:w-[25%]  w-[362px] gap-[14px] pr-[20px] flex items-center flex-row  h-[120px] border-[#B0B0B0] border-opacity-20 border-b-[2px] 2xl:border-t-[2px] lg:border-r-0 xl:border-r-0 border-r-[2px] border-l-[2px] 2xl:border-l-0 2xl:border-r-[2px] pl-[12px] py-[19px]`}>
                            <div
                                className={'w-[120px]  h-[82px] flex justify-center items-center bg-[#CCF8FE] rounded-full'}>
                                <p className={'nunitosemibold text-[40px] text-[#02A0FC]'}>
                                    3
                                </p>
                            </div>
                            <div className={'flex flex-col w-full'}>
                                <h4 className={'nunitomedium leading-6 text-[22px] text-[#2B2F42]'}>
                                    Questions
                                </h4>
                                <h4 className={'nunitomedium text-[14px] text-opacity-40 text-[#2B2F42]'}>
                                    Proceed by entering questions.
                                </h4>
                                <div className={'relative mt-[10px] w-full'}>
                                    <div
                                        className={'w-[50%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#02A0FC] rounded-[71.5px]'}></div>

                                    <div
                                        className={'w-full h-[8px] bg-opacity-100 bg-[#CCF8FE] rounded-[71.5px]'}></div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={` ${level.p === 4 ? " bg-[#ED8914] bg-opacity-20 border-[#FF8E01]" : ''} 2xl:w-[25%]  w-[362px] gap-[14px] pr-[20px] flex items-center flex-row  h-[120px] border-[#B0B0B0] border-opacity-20 2xl:rounded-r-[32px] border-b-[2px] xl:border-l-[0px] border-l-[2px] 2xl:border-t-[2px] border-r-[2px] pl-[12px] py-[19px]`}>
                            <div
                                className={'w-[120px]  h-[82px] flex justify-center items-center bg-[#FFF5CC] rounded-full'}>
                                <p className={'nunitosemibold text-[40px] text-[#FE7A00]'}>
                                    4
                                </p>
                            </div>
                            <div className={'flex flex-col w-full'}>
                                <h4 className={'nunitomedium leading-6 text-[22px] text-[#2B2F42]'}>
                                    Publish Post
                                </h4>
                                <h4 className={'nunitomedium text-[14px] text-opacity-40 text-[#2B2F42]'}>
                                    Publish your post with other channels.
                                </h4>
                                <div className={'relative mt-[10px] w-full'}>
                                    <div
                                        className={'w-[50%] z-10 absolute left-0 top-0 h-[8px] bg-opacity-100 bg-[#FF8E01] rounded-[71.5px]'}></div>

                                    <div
                                        className={'w-full h-[8px] bg-opacity-100 bg-[#FFF5CC] rounded-[71.5px]'}></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {level.p === 1 && <div
                    className={'mt-[94px] flex w-full justify-center items-center 2xl:justify-start 2xl:items-start'}>
                    <AdvertTitle/>
                </div>}
                {level.p === 2 && <div
                    className={'mt-[21px] flex w-full pr-[50px] justify-center items-center 2xl:justify-start 2xl:items-start'}>
                    <JobDescription/>
                </div>}
                {level.p === 3 && <div
                    className={'mt-[21px] flex w-full justify-center items-center 2xl:justify-start 2xl:items-start'}>
                    <Questions/>
                </div>}
                {level.p === 4 && <div
                    className={'mt-[21px] flex w-full justify-center items-center 2xl:justify-start 2xl:items-start'}>
                    <PublishPost/>
                </div>}
            </div>
            <div
                onClick={() => {setLevel({...level, p: level.p === 4 ? 1 : level.p +1})}}
                className={'fixed active:bottom-[63px] w-[80px] cursor-pointer h-[80px] bg-[#FE0000] rounded-[35px] shadowe4 flex justify-center items-center right-[40px] bottom-[64px] z-40'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                    <path
                        d="M9.89279 1.82193L10.9939 0.692247C11.4601 0.213912 12.214 0.213912 12.6752 0.692247L22.317 10.5795C22.7832 11.0579 22.7832 11.8313 22.317 12.3046L12.6752 22.197C12.209 22.6753 11.4551 22.6753 10.9939 22.197L9.89279 21.0673C9.42162 20.5839 9.43154 19.7951 9.91263 19.3219L15.8891 13.4801H1.63479C0.975139 13.4801 0.444445 12.9356 0.444445 12.2588V10.6304C0.444445 9.95363 0.975139 9.40914 1.63479 9.40914H15.8891L9.91263 3.56735C9.42658 3.0941 9.41666 2.30536 9.89279 1.82193Z"
                        fill="white"/>
                </svg>
            </div>
        </div>
    );
}

export default CreateNewAd1;
