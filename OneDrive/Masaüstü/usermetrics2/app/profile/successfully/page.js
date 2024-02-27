'use client'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import Link from "next/link";

import verified from '/public/verified.svg'

import CreatableSelect from "react-select/creatable";
import {companytype, teamsize, yourtitleoptions} from "@/components/data";


export default function Home() {


    return (
        <main className="flex w-full min-h-screen p-[12px] md:p-[36px] overflow-hidden   flex-col items-center justify-start ">
            <div className={'w-full flex justify-start'}>
                <Link href={'/profile/3'}>
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
                <div className={'2xl:mt-[72px] cursor-pointer relative mt-[53px]'}>
                    <Image src={verified} width={163} height={163} alt={''}/>
                </div>
                <h4 className={'lg:text-[32px] mt-[36px] text-center sm:text-start text-[26px] mt-[6px] font-normal text-[#26203B]'}>
                    Account created successfully!
                </h4>
                <h4 className={'lg:text-[24px] text-[16px] lg:mt-0 mt-[5px] lg:w-full text-center lg:text-start w-[280px] tracking-wide font-normal text-[#9C9AA5]'}>
                    Welcome aboard! Start your success journey with User Metrics!
                </h4>
                <Link href={'/profile/successfully'}>
                    <div
                        className={'w-[210px] mt-[160px] hover:bg-[#6293F1] transition-all duration-200 h-[48px] flex justify-center items-center cursor-pointer mt-[60px] bg-[#465FF1] rounded-[8px]'}>
                        <h5 className={'text-[16px] select-none font-semibold text-white'}>
                            Let’s Start!
                        </h5>
                    </div>
                </Link>
            </div>
        </main>
    );
}
