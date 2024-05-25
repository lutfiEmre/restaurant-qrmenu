import React, {useCallback, useEffect, useRef, useState} from 'react';
import layer1 from '../../assets/landingpage/layer.svg'
import computersvg from '../../assets/landingpage/computer.svg'
import {Swiper, SwiperSlide} from "swiper/react";
import recomended1 from "../../assets/landingpage/recomended1.png"
import recomended2 from "../../assets/landingpage/recomended2.png"
import recomended3 from "../../assets/landingpage/recomended3.png"

const MainSwiper = () => {
    const sliderRef3 = useRef(null);
    const [slides,setSlides] = useState(0)
    const handlePrev = useCallback((slide) => {
        if (!slide.current) return;
        slide.current.swiper.slidePrev();
    }, []);
    useEffect(() => {
        console.log(sliderRef3.current.swiper.activeIndex)
    },sliderRef3.current)

    const handleNext = useCallback((slide) => {
        if (!slide.current) return;
        slide.current.swiper.slideNext();
    }, []);
    return (
        <div className={'w-full h-full justify-center items-center flex  mt-[205px] relative'}>
            <div className={'flex flex-col w-24 items-center'}>
                <div
                    className={'flex items-center h-fit flex-row pb-[50px]  gap-[25px] shadowl2  backdrop-blur-[20px]  w-fit  rounded-[20px] flex min-h-[567px] bg-opacity-75 bg-white '}>
                    <div className={'flex flex-col h-full  items-center'}>
                        <div className={'flex  h-full items-center flex-row'}>
                            <div onClick={() => {
                                handlePrev(sliderRef3)
                            }} className={'h-full sm:flex hidden px-[30px] lg:px-[58px] py-[250px] cursor-pointer'}>
                                <svg onClick={() => {
                                    handlePrev(sliderRef3)
                                }} className={'cursor-pointer select-none'} width="13" height="24" viewBox="0 0 13 24"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 2L3 12L11 22" stroke="#E30019" stroke-width="4"
                                          stroke-linecap="round"/>
                                </svg>
                            </div>


                            <div className={'w-screen sm:w-[80vw] md:w-[600px] lg:w-[750px]  2xl:w-[1100px] xl:w-[1050px] h-full'}>
                                <Swiper
                                    ref={sliderRef3}
                                    className={'w-[100%] flex flex-row justify-center items-center h-full cursor-pointer'}
                                    breakpoints={{
                                        576: {
                                            width: 576,
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            spaceBetween: 200,
                                            slidesPerView: 1,
                                        },
                                    }}
                                    spaceBetween={100}
                                    slidesPerView={1}
                                    onSlideChange={(swiper) => setSlides(swiper.activeIndex)}
                                    onSwiper={(swiper) => {
                                    }}
                                >

                                    <SwiperSlide>
                                        <div className={'w-full mr-[20px] xl:flex-row flex-col flex items-center justify-center'}>
                                            <img className={'w-[431px]  h-[323px]  select-none '} src={computersvg}
                                                 alt=""/>
                                            <div className={'flex flex-col justify-center items-center mt-4 xl:mt-[83px] '}>
                                                <div className={''} style={{
                                                    background: 'linear-gradient(270deg, #E30019 0%, #C62473 100%)',
                                                    display: 'inline',
                                                    WebkitBackgroundClip: 'text',
                                                    color: 'transparent'
                                                }}>
                                                    <h3 className={'font-bold text-center w-[350px] sm:w-fit flex justify-center flex-col items-center text-[48px]'}>
                                                        Easy-to-use

                                                        <span>
                                Recruitment Software
                            </span>
                                                    </h3>
                                                </div>
                                                <h5 className={'mt-[2px] w-[90vw] text-center sm:text-start text-[#383838] font-normal text-[18px] sm:text-[20px] sm:w-[540px]'}>
                                                    No steep learning curves or bloated interfaces. OptiRecruits
                                                    platform is
                                                    simple yet
                                                    powerful; accessible and relevant to all recruiters.
                                                </h5>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[18px] sm:text-[20px] text-center w-[80vw] sm:w-[487px]'}>
                                                        <span className={'font-semibold'}> Customizable pipeline</span>:
                                                        Customize your
                                                        recruitment pipeline based on your process with a slick
                                                        drag-and-drop
                                                        interface.
                                                    </h5>

                                                </div>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[18px] sm:text-[20px] text-center w-[80vw] sm:w-[487px]'}>
                                                        <span className={'font-semibold'}> Customizable pipeline</span>:
                                                        Customize your
                                                        recruitment pipeline based on your process with a slick
                                                        drag-and-drop
                                                        interface.
                                                    </h5>

                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={'w-full mr-[20px] h-full mt-12 xl:flex-row flex-col flex items-center justify-center'}>

                                            <div className={'flex flex-col mt-4 xl:mt-[83px] items-center sm:items-start '}>
                                                <div className={''} style={{
                                                    background: 'linear-gradient(270deg, #E30019 0%, #C62473 100%)',
                                                    display: 'inline',
                                                    WebkitBackgroundClip: 'text',
                                                    color: 'transparent'
                                                }}>
                                                    <h3 className={'font-bold items-center flex justify-center flex-col items-center text-[36px] sm:text-[48px]'}>
                                                        AI-Powered

                                                        <span>
                              Recommendations
                            </span>
                                                    </h3>
                                                </div>
                                                <h5 className={'mt-[2px] text-[#383838] font-normal text-[20px] w-[360px] sm:w-[540px]'}>
                                                    OptiRecruits AI Engine simplifies the whole hiring process by
                                                    suggesting the best candidates for a given job while automating
                                                    redundant tasks.
                                                </h5>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[20px] w-[350px] sm:w-[487px]'}>
                                                        <span
                                                            className={'font-semibold'}>   Matching recommendations:</span>
                                                        Score candidates' profiles based on job requirements to
                                                        facilitate your screening process.
                                                    </h5>

                                                </div>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[20px] w-[350px] sm:w-[487px]'}>
                                                        <span className={'font-semibold'}>   Candidates' profiles enrichment:</span>
                                                        Enrich candidates' profiles with LinkedIn and other social media
                                                        data for better matching recommendations.
                                                    </h5>

                                                </div>

                                            </div>
                                            <img className={'w-[300px]  h-[150px]   select-none '} src={recomended1}
                                                 alt=""/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className={'w-full h-full mr-[20px] xl:flex-row flex-col flex items-center justify-center'}>
                                            <img className={'w-[431px]  h-[323px]  select-none '} src={recomended2}
                                                 alt=""/>
                                            <div className={'flex flex-col mt-4 xl:mt-[83px] items-center sm:items-start '}>
                                                <div className={''} style={{
                                                    background: 'linear-gradient(270deg, #E30019 0%, #C62473 100%)',
                                                    display: 'inline',
                                                    WebkitBackgroundClip: 'text',
                                                    color: 'transparent'
                                                }}>
                                                    <h3 className={'font-bold items-center flex justify-center flex-col items-center text-[36px] sm:text-[48px]'}>
                                                        Progressive

                                                        <span>
                              Mobile Application
                            </span>
                                                    </h3>
                                                </div>
                                                <h5 className={'mt-[2px] text-[#383838] font-normal text-[20px] w-[360px] sm:w-[540px]'}>
                                                    Access OptiRecruits from your computer, phone, or tablet to ensure you never miss any activity, wherever you are.
                                                </h5>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[20px] w-[350px] sm:w-[487px]'}>
                                                        <span className={'font-semibold'}>    Recruit on the go:</span>
                                                      Access all OptiRecruits features from all your devices.
                                                    </h5>

                                                </div>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[20px] w-[350px] sm:w-[487px]'}>
                                                        <span className={'font-semibold'}> Receive notifications:</span>
                                                         Get notified for reminders, and specific events.
                                                    </h5>

                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={'w-full mr-[20px] xl:flex-row flex-col flex items-center justify-center'}>
                                            <img className={'w-[600px] object-cover bg-cover h-[323px]  select-none'} src={recomended3}
                                                 alt=""/>
                                            <div className={'flex flex-col mt-4 xl:mt-[83px] items-center sm:items-start '}>
                                                <div className={''} style={{
                                                    background: 'linear-gradient(270deg, #E30019 0%, #C62473 100%)',
                                                    display: 'inline',
                                                    WebkitBackgroundClip: 'text',
                                                    color: 'transparent'
                                                }}>
                                                    <h3 className={'font-bold text-center flex justify-center flex-col items-center text-[36px] sm:text-[48px]'}>
                                                        Candidates' Profiles Enrichment

                                                    </h3>
                                                </div>
                                                <h5 className={'mt-[10px] text-[#383838] font-normal m text-[20px] w-[360px] sm:w-[540px]'}>
                                                    Collect insights beyond resume. OptiRecruits AI Engine browses the web in search of data on 20+ social media and public platforms to automatically enrich candidates' profiles.
                                                </h5>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[20px] w-[350px] sm:w-[487px]'}>
                                                        <span className={'font-semibold'}>       Data enrichment done seamlessly &nbsp;</span>
                                                  during the candidate creation.
                                                    </h5>

                                                </div>
                                                <div
                                                    className={'pl-[10px] gap-[20px] items-center py-[20px] pr-[29px] flex flex-row'}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="10" cy="10" r="9.5" fill="#FF7373"
                                                                stroke="#E30019"/>
                                                        <path d="M5 9.5L8.33333 14L15 5" stroke="#F9F9F9"
                                                              stroke-width="2"/>
                                                    </svg>
                                                    <h5 className={'font-normal text-[20px] w-[350px] sm:w-[487px]'}>
                                                        <span className={'font-semibold'}>     20+ social and public platforms, &nbsp;</span>
                                                    including LinkedIn, Facebook, Twitter, GitHub, Medium and many more.
                                                    </h5>

                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>

                                </Swiper>
                            </div>
                            <div
                                onClick={() => {
                                    handleNext(sliderRef3)
                                }}
                                className={'h-full sm:flex hidden px-[30px] lg:px-[58px] py-[250px] cursor-pointer'}>
                                <svg onClick={() => {
                                    handleNext(sliderRef3)
                                }} className={'cursor-pointer select-none'} width="13" height="24" viewBox="0 0 13 24"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 22L10 12L2 2" stroke="#E30019" stroke-width="4" stroke-linecap="round"/>
                                </svg>
                            </div>

                        </div>
                        <div className={'flex mt-8 flex-row gap-[15px]'}>
                            <div
                                className={`${slides === 0 && "!bg-opacity-100"} bg-opacity-30 w-[20px] h-[20px] rounded-full bg-[#E30019]`}></div>
                            <div
                                className={`${slides === 1 && "!bg-opacity-100"} bg-opacity-30 w-[20px] h-[20px] rounded-full bg-[#E30019]`}></div>

                            <div
                                className={`${slides === 2 && "!bg-opacity-100"} bg-opacity-30 w-[20px] h-[20px] rounded-full bg-[#E30019]`}></div>

                            <div
                                className={`${slides === 3 && "!bg-opacity-100"} bg-opacity-30 w-[20px] h-[20px] rounded-full bg-[#E30019]`}></div>


                        </div>
                    </div>

                </div>
                <div className={'mt-[47px] select-none cursor-pointer w-[350px] mb-24 sm:w-[421px] text-white flex justify-center items-center font-medium shadowl3 h-[49px] bg-[#E30019] bg-opacity-60 rounded-[30px]'}>
                    Try it for free for 14 days
                </div>
            </div>
            <div className={'flex flex-col absolute left-0 top-[90vh] md:top-[90vw] lg:top-[60vw] xl:top-[30vw] 2xl:top-96 -z-10  gap-0 w-full'}>
                <svg className={'w-full h-auto object-cover'} width="1448" height="232" viewBox="0 0 1448 232"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_126_5037)">
                        <path
                            d="M-1454.05 34.2448C-1615.26 33.5283 -1864 2.68922 -1864 2.68922V179H4537V54.781C4537 54.781 4224.1 6.69349 4019.73 1.68745C3806.83 -3.52747 3689.27 31.9573 3476.21 32.2413C3256.23 32.5345 3134.89 -1.33925 2914.94 1.18657C2668.9 4.01196 2536.36 59.1313 2290.36 55.2819C2081.93 52.0206 1971.2 8.83585 1763.05 1.18657C1495.96 -8.62895 1346.59 46.053 1079.8 33.2431C944.828 26.7627 872.336 1.31102 737.01 0.184803C547.769 -1.39011 449.122 53.4005 259.887 55.2819C92.7438 56.9437 2.41028 18.6527 -164.736 20.2201C-314.851 21.6278 -395.222 54.9861 -545.352 55.2819C-732.863 55.6515 -831.151 5.45448 -1018.61 2.68922C-1189.67 0.16592 -1282.95 35.0054 -1454.05 34.2448Z"
                            fill="white" fill-opacity="0.4"/>
                        <path
                            d="M-1522.89 52.0535C-1657.04 51.341 -1864 20.6742 -1864 20.6742V196H3462V72.475C3462 72.475 3201.65 24.6561 3031.6 19.678C2854.46 14.4922 2756.64 49.7788 2579.37 50.0612C2396.32 50.3528 2295.37 16.6682 2112.35 19.1799C1907.63 21.9896 1797.36 76.801 1592.66 72.9731C1419.24 69.73 1327.11 26.7865 1153.92 19.1799C931.677 9.41926 807.397 63.7958 585.407 51.0574C473.106 44.6132 412.789 19.3037 300.189 18.1838C142.73 16.6177 60.65 71.1022 -96.8036 72.9731C-235.877 74.6256 -311.039 36.5485 -450.114 38.1072C-575.019 39.507 -641.892 72.6789 -766.809 72.9731C-922.829 73.3406 -1004.61 23.424 -1160.59 20.6742C-1302.92 18.165 -1380.53 52.8098 -1522.89 52.0535Z"
                            fill="white" fill-opacity="0.4"/>
                        <path
                            d="M-1542.75 69.2448C-1669.08 68.5283 -1864 37.6892 -1864 37.6892V214H3152V89.781C3152 89.781 2906.81 41.6935 2746.65 36.6875C2579.82 31.4725 2487.69 66.9573 2320.74 67.2413C2148.35 67.5345 2053.27 33.6607 1880.91 36.1866C1688.11 39.012 1584.25 94.1313 1391.47 90.2819C1228.14 87.0206 1141.37 43.8359 978.259 36.1866C768.954 26.3711 651.908 81.053 442.84 68.2431C337.075 61.7627 280.268 36.311 174.223 35.1848C25.9283 33.6099 -51.3743 88.4005 -199.663 90.2819C-330.642 91.9437 -401.43 53.6527 -532.41 55.2201C-650.044 56.6278 -713.025 89.9861 -830.671 90.2819C-977.61 90.6515 -1054.63 40.4545 -1201.53 37.6892C-1335.58 35.1659 -1408.67 70.0054 -1542.75 69.2448Z"
                            fill="white" fill-opacity="0.4"/>
                        <path
                            d="M-1598.5 87.1845C-1702.91 86.4692 -1864 55.6845 -1864 55.6845V231.684H2281.5V107.684C2281.5 107.684 2078.86 59.6817 1946.5 54.6845C1808.62 49.4787 1732.48 84.901 1594.5 85.1845C1452.03 85.4772 1373.45 51.6631 1231 54.1845C1071.66 57.0049 985.822 112.027 826.5 108.184C691.518 104.929 619.805 61.8203 485 54.1845C312.019 44.3863 215.286 98.9719 42.5 86.1845C-44.9099 79.7155 -91.8582 54.3087 -179.5 53.1845C-302.059 51.6123 -365.946 106.306 -488.5 108.184C-596.748 109.843 -655.251 71.6199 -763.5 73.1845C-860.72 74.5897 -912.771 107.889 -1010 108.184C-1131.44 108.553 -1195.09 58.4449 -1316.5 55.6845C-1427.28 53.1656 -1487.69 87.9437 -1598.5 87.1845Z"
                            fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_126_5037">
                            <rect width="1448" height="232" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <div className={'w-full h-[250px] -mt-1 bg-white'}></div>
                <svg className={'w-full h-auto -mt-4 object-cover'} width="1448" height="230" viewBox="0 0 1448 230"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_126_5038)">
                        <path
                            d="M2937.05 195.44C3098.26 196.157 3347 226.996 3347 226.996L3347 50.685L-3054 50.6845L-3054 174.903C-3054 174.903 -2741.1 222.991 -2536.73 227.997C-2323.83 233.212 -2206.27 197.727 -1993.21 197.443C-1773.23 197.15 -1651.89 231.024 -1431.94 228.498C-1185.9 225.673 -1053.36 170.553 -807.358 174.403C-598.935 177.664 -488.203 220.849 -280.053 228.498C-12.9561 238.314 136.408 183.632 403.204 196.442C538.172 202.922 610.664 228.374 745.99 229.5C935.231 231.075 1033.88 176.284 1223.11 174.403C1390.26 172.741 1480.59 211.032 1647.74 209.465C1797.85 208.057 1878.22 174.699 2028.35 174.403C2215.86 174.034 2314.15 224.23 2501.61 226.996C2672.67 229.519 2765.95 194.68 2937.05 195.44Z"
                            fill="white" fill-opacity="0.4"/>
                        <path
                            d="M3005.89 177.632C3140.04 178.344 3347 209.011 3347 209.011L3347 33.6851L-1979 33.6846L-1979 157.21C-1979 157.21 -1718.65 205.029 -1548.6 210.007C-1371.46 215.192 -1273.64 179.906 -1096.37 179.623C-913.324 179.332 -812.366 213.016 -629.353 210.505C-424.633 207.695 -314.356 152.884 -109.664 156.712C63.7556 159.955 155.89 202.898 329.083 210.505C551.323 220.266 675.603 165.889 897.593 178.627C1009.89 185.072 1070.21 210.381 1182.81 211.501C1340.27 213.067 1422.35 158.583 1579.8 156.712C1718.88 155.059 1794.04 193.136 1933.11 191.578C2058.02 190.178 2124.89 157.006 2249.81 156.712C2405.83 156.344 2487.61 206.261 2643.59 209.011C2785.92 211.52 2863.53 176.875 3005.89 177.632Z"
                            fill="white" fill-opacity="0.4"/>
                        <path
                            d="M3025.75 160.44C3152.08 161.157 3347 191.996 3347 191.996L3347 15.685L-1669 15.6846L-1669 139.904C-1669 139.904 -1423.81 187.991 -1263.65 192.997C-1096.82 198.212 -1004.69 162.727 -837.739 162.443C-665.352 162.15 -570.27 196.024 -397.909 193.498C-205.105 190.673 -101.247 135.553 91.5308 139.403C254.857 142.664 341.629 185.849 504.741 193.498C714.046 203.314 831.092 148.632 1040.16 161.442C1145.93 167.922 1202.73 193.374 1308.78 194.5C1457.07 196.075 1534.37 141.284 1682.66 139.403C1813.64 137.741 1884.43 176.032 2015.41 174.465C2133.04 173.057 2196.03 139.699 2313.67 139.403C2460.61 139.034 2537.63 189.231 2684.53 191.996C2818.58 194.519 2891.67 159.68 3025.75 160.44Z"
                            fill="white" fill-opacity="0.4"/>
                        <path
                            d="M3081.5 142.501C3185.91 143.216 3347 174.001 3347 174.001L3347 -1.99942L-798.5 -1.99978L-798.5 122C-798.5 122 -595.858 170.003 -463.5 175C-325.619 180.206 -249.479 144.784 -111.5 144.5C30.9705 144.208 109.552 178.022 252 175.5C411.344 172.68 497.178 117.658 656.5 121.5C791.482 124.756 863.195 167.865 998 175.5C1170.98 185.299 1267.71 130.713 1440.5 143.5C1527.91 149.969 1574.86 175.376 1662.5 176.5C1785.06 178.073 1848.95 123.379 1971.5 121.5C2079.75 119.842 2138.25 158.065 2246.5 156.5C2343.72 155.095 2395.77 121.796 2493 121.501C2614.44 121.132 2678.09 171.24 2799.5 174.001C2910.28 176.519 2970.69 141.741 3081.5 142.501Z"
                            fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_126_5038">
                            <rect width="1448" height="230" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
    );
};

export default MainSwiper;
