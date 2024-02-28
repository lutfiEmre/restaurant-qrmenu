import React from 'react';
import Link from "next/link";

const Footer2 = () => {
    return (
        <div id={'bottom'} className={'w-full pl-[16px] pr-[36px] mt-[20px] gap-[20px] sm:gap-[40px] py-[30px] sm:py-[48px] bg-[#0062FF] flex flex-col justify-center items-center'}>
            <div className={'flex flex-row items-center gap-[5px]'}>
                <svg width="38" height="39" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.75" width="37.5" height="37.5" rx="7.5" fill="white"/>
                    <ellipse cx="19.125" cy="21.4169" rx="9.375" ry="9.375" fill="#0062FF"/>
                    <circle cx="19.0108" cy="14.0265" r="7.27646" fill="#0062FF"/>
                </svg>

                <h1 className={'text-white select-none font-medium sm:text-[18px] text-[16px] lg:text-[24px]'}>
                    User Metrics @ 2024
                </h1>
            </div>
            <div className={'flex flex-col sm:flex-row items-center gap-[15px] sm:gap-[30px]'}>
                <Link href={'/insight'}>
                    <h2 className={'text-white font-normal text-[14px] cursor-pointer sm:text-[16px]'}>
                        Our Insights
                    </h2>
                </Link>
                <h2 className={'text-white font-normal text-[14px] cursor-pointer sm:text-[16px]'}>
                    Product Updates
                </h2>
                <h2 className={'text-white font-normal text-[14px] cursor-pointer sm:text-[16px]'}>
                    Our Product
                </h2>
                  </div>
            <div className={'flex flex-row gap-[15px]'}>
                <svg className={'cursor-pointer sm:w-[40px] w-[30px] h-auto'} xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                    <rect x="2.875" y="2.875" width="40.25" height="40.25" rx="20.125" fill="#1275B1"/>
                    <path d="M18.1392 13.9325C18.1392 15.2759 16.9747 16.3649 15.5383 16.3649C14.1019 16.3649 12.9375 15.2759 12.9375 13.9325C12.9375 12.5891 14.1019 11.5 15.5383 11.5C16.9747 11.5 18.1392 12.5891 18.1392 13.9325Z" fill="white"/>
                    <path d="M13.2932 18.1529H17.739V31.625H13.2932V18.1529Z" fill="white"/>
                    <path d="M24.8969 18.1529H20.451V31.625H24.8969C24.8969 31.625 24.8969 27.3838 24.8969 24.732C24.8969 23.1403 25.4404 21.5417 27.6089 21.5417C30.0596 21.5417 30.0448 23.6246 30.0334 25.2383C30.0185 27.3476 30.0541 29.5002 30.0541 31.625H34.5V24.5147C34.4623 19.9746 33.2793 17.8826 29.3872 17.8826C27.0759 17.8826 25.6431 18.932 24.8969 19.8813V18.1529Z" fill="white"/>
                </svg>
                <svg className={'cursor-pointer sm:w-[40px] w-[30px] h-auto'} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="black"/>
                    <path d="M25.1761 12H27.9362L21.9061 18.8919L29 28.2703H23.4456L19.0951 22.5824L14.1172 28.2703H11.3554L17.8052 20.8986L11 12H16.6955L20.6279 17.199L25.1761 12ZM24.2073 26.6183H25.7368L15.8644 13.5653H14.2232L24.2073 26.6183Z" fill="white"/>
                </svg>
                <svg className={'cursor-pointer sm:w-[40px] w-[30px] h-auto'} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="2.5" y="2.5" width="35" height="35" rx="6" fill="url(#paint0_radial_3394_3721)"/>
                    <rect x="2.5" y="2.5" width="35" height="35" rx="6" fill="url(#paint1_radial_3394_3721)"/>
                    <rect x="2.5" y="2.5" width="35" height="35" rx="6" fill="url(#paint2_radial_3394_3721)"/>
                    <path d="M28.75 13.125C28.75 14.1605 27.9105 15 26.875 15C25.8395 15 25 14.1605 25 13.125C25 12.0895 25.8395 11.25 26.875 11.25C27.9105 11.25 28.75 12.0895 28.75 13.125Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 26.25C23.4518 26.25 26.25 23.4518 26.25 20C26.25 16.5482 23.4518 13.75 20 13.75C16.5482 13.75 13.75 16.5482 13.75 20C13.75 23.4518 16.5482 26.25 20 26.25ZM20 23.75C22.0711 23.75 23.75 22.0711 23.75 20C23.75 17.9289 22.0711 16.25 20 16.25C17.9289 16.25 16.25 17.9289 16.25 20C16.25 22.0711 17.9289 23.75 20 23.75Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 19.5C7.5 15.2996 7.5 13.1994 8.31745 11.5951C9.0365 10.1839 10.1839 9.0365 11.5951 8.31745C13.1994 7.5 15.2996 7.5 19.5 7.5H20.5C24.7004 7.5 26.8006 7.5 28.4049 8.31745C29.8161 9.0365 30.9635 10.1839 31.6825 11.5951C32.5 13.1994 32.5 15.2996 32.5 19.5V20.5C32.5 24.7004 32.5 26.8006 31.6825 28.4049C30.9635 29.8161 29.8161 30.9635 28.4049 31.6825C26.8006 32.5 24.7004 32.5 20.5 32.5H19.5C15.2996 32.5 13.1994 32.5 11.5951 31.6825C10.1839 30.9635 9.0365 29.8161 8.31745 28.4049C7.5 26.8006 7.5 24.7004 7.5 20.5V19.5ZM19.5 10H20.5C22.6414 10 24.0972 10.0019 25.2224 10.0939C26.3184 10.1834 26.879 10.3457 27.27 10.545C28.2108 11.0243 28.9757 11.7892 29.455 12.73C29.6543 13.121 29.8166 13.6816 29.9061 14.7776C29.9981 15.9028 30 17.3586 30 19.5V20.5C30 22.6414 29.9981 24.0972 29.9061 25.2224C29.8166 26.3184 29.6543 26.879 29.455 27.27C28.9757 28.2108 28.2108 28.9757 27.27 29.455C26.879 29.6543 26.3184 29.8166 25.2224 29.9061C24.0972 29.9981 22.6414 30 20.5 30H19.5C17.3586 30 15.9028 29.9981 14.7776 29.9061C13.6816 29.8166 13.121 29.6543 12.73 29.455C11.7892 28.9757 11.0243 28.2108 10.545 27.27C10.3457 26.879 10.1834 26.3184 10.0939 25.2224C10.0019 24.0972 10 22.6414 10 20.5V19.5C10 17.3586 10.0019 15.9028 10.0939 14.7776C10.1834 13.6816 10.3457 13.121 10.545 12.73C11.0243 11.7892 11.7892 11.0243 12.73 10.545C13.121 10.3457 13.6816 10.1834 14.7776 10.0939C15.9028 10.0019 17.3586 10 19.5 10Z" fill="white"/>
                    <defs>
                        <radialGradient id="paint0_radial_3394_3721" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15 28.75) rotate(-55.3758) scale(31.8995)">
                            <stop stop-color="#B13589"/>
                            <stop offset="0.79309" stop-color="#C62F94"/>
                            <stop offset="1" stop-color="#8A3AC8"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_3394_3721" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.75 38.75) rotate(-65.1363) scale(28.2428)">
                            <stop stop-color="#E0E8B7"/>
                            <stop offset="0.444662" stop-color="#FB8A2E"/>
                            <stop offset="0.71474" stop-color="#E2425C"/>
                            <stop offset="1" stop-color="#E2425C" stop-opacity="0"/>
                        </radialGradient>
                        <radialGradient id="paint2_radial_3394_3721" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.625002 3.75) rotate(-8.1301) scale(48.6136 10.3979)">
                            <stop offset="0.156701" stop-color="#406ADC"/>
                            <stop offset="0.467799" stop-color="#6A45BE"/>
                            <stop offset="1" stop-color="#6A45BE" stop-opacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className={'w-[75%] h-[1px] border-[#76AEFF] border-[1px]'}></div>
            <h1 className={'text-[#CFD3D7] text-[14px] sm:text-[16px] font-normal'}>
                Copyright © 2024. All Right Reserved.
            </h1>
        </div>
    );
};

export default Footer2;
