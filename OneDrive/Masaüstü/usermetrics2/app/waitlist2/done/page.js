'use client'
import Image from "next/image";
import people800 from '/public/800people.svg'
import Footer2 from "@/components/Footer2";
import Link from "next/link";
import icons3d from "/public/3dicons.svg"

export default function Home() {
    function scrollToBottom() {
        const element = document.getElementById('bottom');
        element.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className={'flex flex-col gap-[50px] md:gap-0  md:mt-0 md:flex-row w-full h-fit py-[40px] sm:py-[100px] justify-center px-[51px] items-center'}>
            <div className={'flex flex-row gap-[5px] items-center'}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37.5" height="37.5" rx="7.5" fill="#182233"/>
                    <ellipse cx="19.125" cy="20.667" rx="9.375" ry="9.375" fill="#0062FF"/>
                    <circle cx="19.0108" cy="13.2765" r="7.27646" fill="#0062FF"/>
                </svg>
                <h1 className={'font-semibold text-[19px] sm:text-[24px]'}>User Metrics</h1>

            </div>

        </div>
        <div className={'flex flex-col w-full  mt-[0px] justify-center items-center'}>
            <div className={'flex flex-col sm:flex-row flex-col lg:flex-row px-[24px] relative items-center'}>
                <Image className={'md:w-[250px] sm:absolute top-[-25px] md:left-[-200px] lg:left-[-250px] left-[-120px] w-[150px] h-auto md:h-[250px] lg:w-[313px] h-[313px]'} src={icons3d} width={313} height={313} alt={''}/>
                <h3 className={'font-bold text-black text-[30px] sm:text-[30px] md:text-[40px] lg:text-[64px]'}>
                    You are <span className={'text-[#0062FF]'}>#1980</span> on the <br/> User Metrics Waitlist
                </h3>
            </div>
            <div className={' mt-[50px] flex items-center flex-row gap-[15px]'}>
                <Image src={people800} width={54} height={54} alt={''}/>
                <h1 className={'font-medium text-[13px]'}>+800 people requested early access</h1>
            </div>
        </div>
        <div onClick={() => {scrollToBottom()}} className={'cursor-pointer  active:mt-[2px] lg:pb-[180px] py-[30px] lg:py-[60px]'}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3025 29.0178C18.5497 29.2649 18.9503 29.2649 19.1975 29.0178L23.2247 24.9906C23.4718 24.7434 23.4718 24.3428 23.2247 24.0956C22.9775 23.8485 22.5769 23.8485 22.3297 24.0956L18.75 27.6754L15.1703 24.0956C14.9231 23.8485 14.5225 23.8485 14.2753 24.0956C14.0282 24.3428 14.0282 24.7434 14.2753 24.9906L18.3025 29.0178ZM19.3828 9.58594L19.3828 8.95312L18.1172 8.95312L18.1172 9.58594L19.3828 9.58594ZM19.3828 28.5703L19.3828 9.58594L18.1172 9.58594L18.1172 28.5703L19.3828 28.5703Z" fill="black"/>
                <circle cx="18.75" cy="18.75" r="18.375" stroke="black" stroke-width="0.75"/>
            </svg>
        </div>

        <Footer2/>
    </main>
  );
}
