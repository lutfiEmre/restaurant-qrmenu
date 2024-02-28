import Image from "next/image";
import people800 from '/public/800people.svg'
import Footer1 from "@/components/Footer1";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
        <div className={'flex flex-col gap-[50px] md:gap-0  md:mt-0 md:flex-row w-full h-fit py-[26px] justify-between px-[51px] items-center'}>
            <div className={'flex flex-row gap-[5px] items-center'}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37.5" height="37.5" rx="7.5" fill="#182233"/>
                    <ellipse cx="19.125" cy="20.667" rx="9.375" ry="9.375" fill="#0062FF"/>
                    <circle cx="19.0108" cy="13.2765" r="7.27646" fill="#0062FF"/>
                </svg>
                <h1 className={'font-semibold text-[24px]'}>User Metrics</h1>

            </div>
            <div className={'flex flex-row gap-[25px] sm:gap-[90px]'}>
                <div className={'w-[150px]'}>
                    <Link href={'/insight'}>
                        <h3 className={'cursor-pointer hover:font-bold'}>Our Insights</h3>
                    </Link>
                </div>
                <div className={'w-[150px]'}>
                    <h3 className={'cursor-pointer hover:font-bold'}>Product Updates</h3>
                </div>
            </div>
            <div className={'lg:flex hidden lg:w-[200px]'}>

            </div>
        </div>
        <div className={'flex flex-col lg:min-h-[500px] mt-[100px] justify-center items-center'}>
            <h3 className={'font-bold text-[#0062FF] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[64px]'}>Access Management Platform</h3>
            <h4 className={'font-medium text-[16px] sm:text-[20px] lg:text-[24px]'}>
                for Marketing Teams
            </h4>
            <h5 className={'text-center w-[350px] sm:w-[500px] font-normal tracking-wide text-[13px] lg:text-[16px]  lg:w-[650px] mt-[30px] lg:mt-[40px]'}>
                Integrate your team's tools into User Metrics. Manage the authorization process
                for all tools using a one platform.
            </h5>
            <div className={'sm:mt-[40px] mt-[25px] lg:mt-[20px] flex flex-col items-center sm:flex-row gap-[15px]'}>
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
            </div>
            <div className={'mt-[150px] flex mb-[25px] items-center flex-row gap-[15px]'}>
                <Image src={people800} width={54} height={54} alt={''}/>
                <h1 className={'font-medium text-[13px]'}>+800 people requested early access</h1>
            </div>
        </div>
        <Footer1/>
    </main>
  );
}
