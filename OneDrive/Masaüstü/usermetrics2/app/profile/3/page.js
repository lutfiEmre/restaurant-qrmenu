'use client'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import importsvg from '/public/import.svg'

import CreatableSelect from "react-select/creatable";
import {companytype, teamsize, yourtitleoptions} from "@/components/data";


export default function Home() {


    return (
        <main className="flex w-full min-h-screen p-[12px] md:p-[36px] overflow-hidden   flex-col items-center justify-start ">
            <div className={'w-full flex justify-start'}>
                <Link href={'/profile/2'}>
                    <div className={'w-full xl:ml-[10px] flex lg:justify-start md:justify-center items-center flex-row gap-[4px]'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M12.0227 3.35225C12.2224 3.55195 12.2406 3.86445 12.0772 4.08466L12.0227 4.14775L7.17075 9L12.0227 13.8523C12.2224 14.052 12.2406 14.3645 12.0772 14.5847L12.0227 14.6477C11.823 14.8474 11.5105 14.8656 11.2903 14.7022L11.2273 14.6477L5.97725 9.39775C5.77755 9.19805 5.7594 8.88555 5.92279 8.66534L5.97725 8.60225L11.2273 3.35225C11.4469 3.13258 11.8031 3.13258 12.0227 3.35225Z" fill="#465FF1"/>
                        </svg>
                        <h1 className={'text-[18px] text-[#465FF1] font-normal'}>
                            Back
                        </h1>
                    </div>
                </Link>
            </div>
            <div className={'flex justify-center items-center flex-col'}>
                <div className={'flex flex-row  gap-[9px] justify-center items-center'}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="50" rx="8" fill="#182233"/>
                        <ellipse cx="25.5" cy="27.5555" rx="12.5" ry="12.5" fill="#0062FF"/>
                        <circle cx="25.3504" cy="17.7016" r="9.70195" fill="#0062FF"/>
                    </svg>
                    <h1 className={'font-semibold text-[24px] text-black'}>
                        User Metrics
                    </h1>
                </div>
                <h5 className={'font-normal mt-[6px] text-[#9C9AA5] text-[18px]'}>
                    3/3
                </h5>
                <h4 className={'lg:text-[32px] text-center sm:text-start text-[26px] mt-[6px] font-normal text-[#26203B]'}>
                    Access Management Software
                </h4>
                <h4 className={'lg:text-[24px] text-[16px] lg:mt-0 mt-[5px] lg:w-full text-center lg:text-start w-[280px] tracking-wide font-normal text-[#9C9AA5]'}>
                    Effortless change the roles of your marketing team.
                </h4>
                <div className={'2xl:mt-[72px] cursor-pointer relative mt-[53px]'}>
                    <input className={'absolute cursor-pointer opacity-0 w-full h-full'} type="file"/>
                    <Image src={importsvg} width={163} height={163} alt={''}/>
                </div>
                <div className={'flex flex-col sm:flex-row mt-[40px] items-center gap-[24px] 2xl:mt-[53px]'}>
                    <div className={'w-[209px] cursor-pointer h-[48px] flex justify-center items-center gap-[16px] border-[1px] border-[#465FF1] rounded-[8px]'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.368 8.79405C7.782 8.79405 8.118 9.13005 8.118 9.54405C8.118 9.95805 7.782 10.294 7.368 10.294H6.435C4.816 10.294 3.5 11.61 3.5 13.228V18.103C3.5 19.722 4.816 21.038 6.435 21.038H17.565C19.183 21.038 20.5 19.722 20.5 18.103V13.219C20.5 11.606 19.188 10.294 17.576 10.294H16.633C16.219 10.294 15.883 9.95805 15.883 9.54405C15.883 9.13005 16.219 8.79405 16.633 8.79405H17.576C20.015 8.79405 22 10.779 22 13.219V18.103C22 20.549 20.01 22.538 17.565 22.538H6.435C3.99 22.538 2 20.549 2 18.103V13.228C2 10.783 3.99 8.79405 6.435 8.79405H7.368ZM12.5306 2.22165L15.4466 5.14965C15.7386 5.44365 15.7376 5.91765 15.4446 6.20965C15.1506 6.50165 14.6766 6.50165 14.3846 6.20765L12.749 4.5664L12.7496 15.5409H11.2496L11.249 4.5664L9.6156 6.20765C9.4696 6.35565 9.2766 6.42865 9.0846 6.42865C8.8936 6.42865 8.7016 6.35565 8.5556 6.20965C8.2626 5.91765 8.2606 5.44365 8.5536 5.14965L11.4686 2.22165C11.7496 1.93865 12.2496 1.93865 12.5306 2.22165Z" fill="#26203B"/>
                        </svg>
                        <h4 className={'text-[16px] font-normal text-black'}>
                            Upload Logo
                        </h4>
                    </div>
                    <div className={'w-[1px] sm:flex hidden h-[62px] border-[1px] border-[#9C9AA5] border-opacity-30'}></div>
                    <div className={'w-[209px] cursor-pointer h-[48px] flex justify-center items-center gap-[16px] border-[1px] border-[#465FF1] rounded-[8px]'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2505 20.4395C21.6645 20.4395 22.0005 20.7755 22.0005 21.1895C22.0005 21.6035 21.6645 21.9395 21.2505 21.9395H13.9975C13.5835 21.9395 13.2475 21.6035 13.2475 21.1895C13.2475 20.7755 13.5835 20.4395 13.9975 20.4395H21.2505ZM16.6163 3.65364C16.6663 3.69264 18.3393 4.99264 18.3393 4.99264C18.9473 5.35464 19.4223 6.00164 19.6023 6.76764C19.7813 7.52564 19.6513 8.30764 19.2343 8.96864C19.2315 8.97305 19.2287 8.97741 19.2191 8.99037L19.2115 9.00038C19.1439 9.08958 18.8496 9.46164 17.3646 11.3222C17.3508 11.3466 17.3351 11.3695 17.3181 11.3916C17.293 11.4244 17.2658 11.4544 17.2367 11.4818C17.1354 11.6093 17.0284 11.7433 16.9159 11.8842L16.688 12.1697C16.2177 12.7587 15.6599 13.4571 14.9981 14.2855L14.6584 14.7106C13.3807 16.3097 11.7444 18.3572 9.64827 20.9796C9.18927 21.5516 8.50127 21.8846 7.76227 21.8936L4.12327 21.9396H4.11327C3.76627 21.9396 3.46427 21.7016 3.38327 21.3626L2.56427 17.8916C2.39527 17.1726 2.56327 16.4306 3.02427 15.8546L12.4443 4.07264C12.4483 4.06864 12.4513 4.06364 12.4553 4.05964C13.4883 2.82464 15.3563 2.64264 16.6163 3.65364ZM11.394 7.787L4.19527 16.7916C4.02427 17.0056 3.96127 17.2816 4.02427 17.5466L4.70527 20.4316L7.74427 20.3936C8.03327 20.3906 8.30027 20.2616 8.47727 20.0416C9.38876 18.9012 10.5343 17.4679 11.7121 15.994L12.1288 15.4726L12.5462 14.9502C13.6508 13.5679 14.7421 12.2021 15.6551 11.0589L11.394 7.787ZM13.6103 5.01664L12.331 6.615L16.5918 9.88593C17.4119 8.8587 17.9514 8.18214 18.0013 8.11764C18.1653 7.85164 18.2293 7.47564 18.1433 7.11364C18.0553 6.74264 17.8243 6.42764 17.4913 6.22664C17.4203 6.17764 15.7353 4.86964 15.6833 4.82864C15.0493 4.32064 14.1243 4.40864 13.6103 5.01664Z" fill="#26203B"/>
                        </svg>
                        <h4 className={'text-[16px] font-normal text-black'}>
                            Edit Logo
                        </h4>
                    </div>

                </div>
                <Link href={'/profile/successfully'}>
                    <div className={'w-[210px] hover:bg-[#6293F1] transition-all duration-200 h-[48px] flex justify-center items-center cursor-pointer mt-[60px] bg-[#465FF1] rounded-[8px]'}>
                        <h5 className={'text-[16px] select-none font-semibold text-white'}>
                            Continue
                        </h5>
                    </div>
                </Link>
            </div>
        </main>
    );
}
