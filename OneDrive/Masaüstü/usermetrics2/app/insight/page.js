import Image from "next/image";
import people800 from '/public/800people.svg'
import Footer1 from "@/components/Footer1";
import shootingstar from '/public/Cosmic doodles/Shooting star.svg'
import bg1 from '/public/bg1.svg'
import Footer2 from "@/components/Footer2";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between ">
        <div className={'flex flex-col gap-[50px] md:gap-0  md:mt-0 md:flex-row w-full h-fit  justify-between px-[51px] '}>
            <div className={'flex flex-row gap-[5px] py-[26px] '}>
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37.5" height="37.5" rx="7.5" fill="#182233"/>
                    <ellipse cx="19.125" cy="20.667" rx="9.375" ry="9.375" fill="#0062FF"/>
                    <circle cx="19.0108" cy="13.2765" r="7.27646" fill="#0062FF"/>
                </svg>
                <h1 className={'font-semibold text-[24px]'}>User Metrics</h1>

            </div>
            <div className={'flex w-[300px] mt-4 sm:w-[600px] lg:w-[800px]  -mt-4 justify-end items-end flex-row gap-[25px] sm:gap-[90px]'}>
                <Image width={187} height={187} src={shootingstar} alt={''}/>
            </div>
            <div className={'lg:flex hidden lg:w-[200px]'}>

            </div>
        </div>
        <div className={'flex flex-col w-full  justify-center items-center'}>
            <h3 className={'font-bold text-[#0062FF] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[64px]'}>Our
                Insights</h3>
            <h5 className={'sm:w-[600px] w-[350px] text-wrap sm:text-start md:w-[700px] lg:w-[800px] xl:w-[1000px] px-[10px] break-words h-full font-normal tracking-wide text-[13px] lg:text-[16px]   mt-[30px] lg:mt-[40px]'}>
                We are User Metrics,
                <br/>
                <br/>
                User Metics is a platform where companies can grant tools-related authorizations to their marketing
                teams. This platform makes it easy to add, remove or change authorizations for employees within the
                team.
                <br/>
                <br/>
                It gets very hard for teams when employee joins the company and needs access to dozens of tools; it also
                gets very hard to remove employee who leaves the company from the tools or to grant access to tools for
                people who work as freelancers or outsourcers.
                <br/>
                <br/>
                User Metrics' value proposition:
                <br/>
                <br/>
                <ul>
                    <li className={'ml-10 list-disc'}>
                        Effort on the authorization platform
                    </li>
                </ul>
                <br/>
                Marketing teams use many tools to determine, measure, analyze and collaborate on metrics. Marketing
                teams are generally one of the most crowded departments in the company. It takes managers 25 minutes for
                people coming to the Marketing department to get authorization from all channels. However, with User
                Metrics, the entire process is completed in 90 seconds.
                <br/>
                <br/>
                <ul>
                    <li className={'ml-10 list-disc'}>
                        Data security during the authorization process
                    </li>
                </ul>
                <br/>
                User Metrics also shows the tools and documentation used by the company after the employees in the
                company leave the team. If the person who left the company is still using company-related tools and
                documentation, the person who left the company is removed from the User Metrics panel. In this way, when
                employees leave the company, information about the company is protected.
                <br/>
                <br/>
                User Metrics develops products for companies to reduce security and waste of effort.
                <br/>
                <br/>
                Become User Metrics
                <br/>
                <br/>
                Team User Metrics
                <br/>
                <br/>
                <br/>
            </h5>
        </div>
        <div className={'w-full  relative h-[335px]'}>
            <div className={'absolute w-full h-full z-20 flex justify-center items-center'}>
                <div className={'flex flex-col lg:flex-row gap-[50px] w-full lg:px-[100px] xl:px-[187px] justify-between items-center'}>
                    <div className={'flex flex-col lg:items-start px-[25px] md:px-0 items-center gap-[30px]'}>
                        <h2 className={'font-semibold text-[28px] lg:text-[36px]'}>Request access</h2>
                        <h3 className={'font-medium text-[20px] text-center sm:text-start'}>It’s time to use User Metrics! Manage all access management process.</h3>
                    </div>
                    <Link href={'/waitlist2'}>
                        <div
                            className={'w-[254px] text-[24px] cursor-pointer flex justify-center items-center text-white font-semibold h-[58px] bg1'}>
                            Request access
                        </div>
                    </Link>
                </div>
            </div>
            <Image className={'absolute left-0 top-0 w-full object-cover h-full'} width={1440} height={335} src={bg1}
                   alt={''}/>
        </div>
        <div className={'w-full h-full py-[80px]  flex justify-center items-center'}>
            <h1 className={'inknut-medium text-[20px] text-center px-[10px] md:px-[30px] text-black'}>
                Don't waste time changing your team member's permissions one by one while using tools
            </h1>
        </div>
        <Footer2/>
    </main>
  );
}
