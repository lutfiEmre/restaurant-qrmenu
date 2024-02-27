import React from 'react';
import Image from "next/image";
import longbg from "@/public/bgground.svg";

const TestPage = () => {
    return (
        <div className={'w-full h-full  items-start justify-start flex flex-col'}>
            <div className={'w-[500px] overflow-hidden relative h-[500px]'}>
                <Image src={longbg} className={'w-[1500px] absolute object-cover top-0 right-0 h-[1500px]'}  width={1500} height={1500} alt={''}/>

            </div>

        </div>
    );
};

export default TestPage;
