'use client'
import Image from "next/image";
import people800 from '/public/800people.svg'
import Footer2 from "@/components/Footer2";
import Link from "next/link";

export default function Home() {
    function scrollToBottom() {
        const element = document.getElementById('bottom');
        element.scrollIntoView({ behavior: 'smooth' });
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className={'flex flex-col gap-[50px] md:gap-0  md:mt-0 md:flex-row w-full h-fit py-[26px] justify-between px-[51px] items-center'}>
            <div className={'flex flex-row gap-[5px] items-center'}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37.5" height="37.5" rx="7.5" fill="#182233"/>
                    <ellipse cx="19.125" cy="20.667" rx="9.375" ry="9.375" fill="#0062FF"/>
                    <circle cx="19.0108" cy="13.2765" r="7.27646" fill="#0062FF"/>
                </svg>
                <h1 className={'font-semibold text-[19px] sm:text-[24px]'}>User Metrics</h1>

            </div>
            <div className={'flex flex-row gap-[25px] sm:gap-[90px]'}>
                <h3 className={'cursor-pointer'}>Our Insights</h3>
                <h3 className={'cursor-pointer'}>Product Updates</h3>
            </div>
            <div className={'lg:flex hidden lg:w-[200px]'}>

            </div>
        </div>
        <div className={'flex flex-col mt-[50px] sm:mt-[100px] justify-center items-center'}>
            <h3 className={'font-bold text-[#0062FF] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[64px]'}>Access Management Platform</h3>
            <h4 className={'font-medium text-[16px] sm:text-[20px] lg:text-[24px]'}>
                for Marketing Teams
            </h4>
            <h5 className={'text-center w-[350px] sm:w-[500px] font-normal tracking-wide text-[13px] lg:text-[16px]  lg:w-[650px] mt-[30px] lg:mt-[40px]'}>
                Integrate your team's tools into User Metrics. Manage the authorization process
                for all tools using a one platform.
            </h5>
            <form action={""} className={'sm:mt-[40px] mt-[25px] lg:mt-[20px] flex flex-col items-center sm:flex-row gap-[15px]'}>
                    <div className={'lg:w-[515px] w-[300px] md:w-[400px] items-center flex flex-row gap-[8px] sm:h-[66px] rounded-[22px] px-[24px] py-[15px] sm:py-[21px] border-[2.5px] border-black border-opacity-50'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                            <path d="M4.3125 6.60954L9.41249 10.4345C10.6125 11.3345 12.2625 11.3345 13.4625 10.4345L18.5625 6.6095" stroke="black" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="3.42188" y="4.828" width="16.0312" height="12.4688" rx="2.25" stroke="black" stroke-width="2.25" stroke-linecap="round"/>
                        </svg>
                        <input placeholder={'Your email'} className={'text-black w-full placeholder:text-black text-[18px] font-normal outline-none active:outline-none'} type="text"/>
                    </div>
                    <Link href={'waitlist2/done'}>
                        <button className={'lg:w-[219px] w-[150px] sm:mt-0 mt-[10px] h-[50px] sm:h-[66px] flex justify-center items-center cursor-pointer rounded-[22.5px] bg-[#0062FF] border-[2.5px] border-[rgba(255, 255, 255, 0.50)]'}>
                            <h4 className={'font-semibold lg:text-[18px] text-[12px] text-white'}>
                                Request Access
                            </h4>
                        </button>
                    </Link>
            </form>
            <div className={'mt-[50px] sm:mt-[100px]  flex items-center flex-row gap-[15px]'}>
                <Image src={people800} width={54} height={54} alt={''}/>
                <h1 className={'font-medium text-[13px]'}>+800 people requested early access</h1>
            </div>
        </div>
        <div onClick={() => {scrollToBottom()}} className={'cursor-pointer  active:mt-[2px] py-[30px] sm:py-[60px]'}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3025 29.0178C18.5497 29.2649 18.9503 29.2649 19.1975 29.0178L23.2247 24.9906C23.4718 24.7434 23.4718 24.3428 23.2247 24.0956C22.9775 23.8485 22.5769 23.8485 22.3297 24.0956L18.75 27.6754L15.1703 24.0956C14.9231 23.8485 14.5225 23.8485 14.2753 24.0956C14.0282 24.3428 14.0282 24.7434 14.2753 24.9906L18.3025 29.0178ZM19.3828 9.58594L19.3828 8.95312L18.1172 8.95312L18.1172 9.58594L19.3828 9.58594ZM19.3828 28.5703L19.3828 9.58594L18.1172 9.58594L18.1172 28.5703L19.3828 28.5703Z" fill="black"/>
                <circle cx="18.75" cy="18.75" r="18.375" stroke="black" stroke-width="0.75"/>
            </svg>
        </div>

        <Footer2/>
    </main>
  );
}
