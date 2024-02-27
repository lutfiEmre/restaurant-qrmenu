'use client'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import Link from "next/link";

import CreatableSelect from "react-select/creatable";
import {yourtitleoptions} from "@/components/data";

export default function Home() {
    const [profile,setProfile] = useState({
        namensurname: "",
        workspacename: "",
        yourtitle: "",
    })
    useEffect(() => {
        console.log(profile.yourtitle)
    },[])

  return (
    <main className="flex w-full min-h-screen p-[12px] md:p-[36px] overflow-hidden   flex-col items-center justify-start ">
        <div className={'w-full flex justify-start'}>
            <Link href={'/profile'}>
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
                1/3
            </h5>
            <h4 className={'lg:text-[32px] text-[26px] mt-[6px] font-normal text-[#26203B]'}>
                Access Management Software
            </h4>
            <h4 className={'lg:text-[24px] text-[16px] lg:mt-0 mt-[5px] lg:w-full text-center lg:text-start w-[280px] tracking-wide font-normal text-[#9C9AA5]'}>
                Effortless change the roles of your marketing team.
            </h4>
            <div className={'flex w-[350px] sm:w-[442px] mt-[30px] items-center  flex-col gap-[10px]'}>
                <div className={' flex flex-col gap-[8px] justify-start w-full h-fit'}>
                    <h1 className={'font-normal flex flex-row items-center gap-[5px] text-[16px]'}>
                        Your Full Name <span className={`${profile.namensurname === "" ? "flex" : "hidden" } text-[#E45270]`}>*</span>
                    </h1>
                    <input onChange={(e) => {setProfile({
                        ...profile,
                        namensurname: e.target.value
                    })}} placeholder={''} className={'w-full p-[16px] active:outline-none outline-none h-[48px] bg2'}></input>
                </div>
                <div className={' flex flex-col gap-[8px] justify-start w-full h-fit'}>
                    <h1 className={'font-normal text-[16px] flex flex-row items-center gap-[5px] '}>
                        Your Title <span className={`${profile.yourtitle === "" ? "flex" : "hidden" } text-[#E45270]`}>*</span>
                    </h1>
                    <CreatableSelect onChange={(e) => {setProfile({
                        ...profile,
                        yourtitle: e.value
                    })}}  placeholder={'Select Team strength'} className={' !h-[48px] cursor-pointer'}  options={yourtitleoptions} />

                </div>

                <div className={' flex flex-col gap-[8px] mt-[23px] justify-start w-full h-fit'}>
                    <h1 className={'font-normal flex flex-row items-center gap-[5px] text-[16px]'}>
                        Workspace Name <span className={`${profile.workspacename === "" ? "flex" : "hidden" } text-[#E45270]`}>*</span>
                    </h1>
                    <input onChange={(e) => {setProfile({
                        ...profile,
                        workspacename: e.target.value
                    })}} placeholder={'Write Company Type'} className={'w-full p-[16px] active:outline-none outline-none h-[48px] bg2'}></input>
                    <div className={'w-[93%] flex ml-4 overflow-hidden justify-between items-center'}>
                        <h4 className={'text-[14px] font-normal text-[#9C9AA5]'}><span className={'text-[#465FF1]'}>{profile.workspacename}</span>.usermetrics.co</h4>


                    </div>
                </div>
                <Link href={'/profile/2'}>
                    <div className={'w-[210px] hover:bg-[#6293F1] transition-all duration-200 h-[48px] flex justify-center items-center cursor-pointer mt-[40px] bg-[#465FF1] rounded-[8px]'}>
                        <h5 className={'text-[16px] select-none font-semibold text-white'}>
                            Continue
                        </h5>
                    </div>
                </Link>
            </div>
        </div>
    </main>
  );
}
