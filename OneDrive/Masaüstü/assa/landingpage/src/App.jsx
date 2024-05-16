import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import mainbg from '/src/assets/mainbg.svg'
import NavBar from "./components/NavBar.jsx";
import SearchBar from "./components/SearchBar.jsx";
import MainSwiper from "./components/MainSwiper.jsx";
import FeaturedComponent from "./components/FeaturedComponent.jsx";
import as1 from "./assets/as1.svg"
import as2 from "./assets/as2.png"
import as3 from './assets/as3.png'
import {Accordion} from "@szhsin/react-accordion";
import AccordionEmre from "./components/AccordionE.jsx";
import PriceComponent from "./components/PriceComponent.jsx";


function App() {

  return (
    <>
        <div className={''}>
            <div className={'flex flex-col  w-full min-h-screen relative'}>
                <div className={'w-full justify-center flex mt-[27px] px-5 xl:px-[100px]'}>
                    <NavBar/>
                </div>
                <SearchBar/>
                <div className={'mt-[59px] px-[50px] w-full flex-col flex justify-center items-center'}>
                    <h2 className={'font-bold text-white shadowl1 w-fit text-center text-[64px]'}>
                        Discover Talents, Optimize the Future
                    </h2>
                    <div className={'mt-[97px]'}>
                        <h4 className={'font-normal text-white shadowl1 w-fit text-center text-[20px]'}>
                            78,610 job postings from thousands of companies.
                        </h4>
                    </div>
                </div>
                <MainSwiper/>
                <img
                    className={'w-full h-full -z-40 object-cover  absolute top-0 left-0'}
                    src={mainbg} alt=""/>

            </div>


            <div className={'flex flex-col w-full min-h-[150vh] relative'}>
                <div className={'absolute  top-0 left-0 w-full h-full flex justify-center items-center'}>
                    <div
                        className={'absolute top-72 flex justify-center items-center flex-col w-full h-[100vh] left-0'}>
                        <FeaturedComponent/>
                    </div>
                </div>
                <img className={'w-full h-full min-h-[100vh] object-cover absolute -z-20'} src={as1} alt=""/>
                <img className={'w-full h-auto object-cover absolute -z-10 left-0 rotate-180 bottom-0'} src={as2}
                     alt=""/>

            </div>
            <AccordionEmre/>
            <div className={'flex flex-col w-full overflow-hidden min-h-[145vh] relative'}>
                <div className={'flex flex-col gap-[60px] mt-[50px] justify-center items-center w-full'}>

                    <div className={'bg-black z-40 w-fit  '} style={{
                        background: 'linear-gradient(270deg, #E30019 0%, #C62473 100%)',
                        display: 'inline',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>
                        <h3 className={'font-bold items-center  text-[48px]'}>
                            Simple and Transparent Pricing
                        </h3>
                    </div>

                    <div className={'flex z-30 mt-14 flex-row w-fit gap-[15px]'}>
                        <h5 className={'gradient-text font-normal text-[24px]'}>
                            Monthly
                        </h5>

                        <div className="checkbox-wrapper-49">
                            <div className="block">
                                <input data-index="0" id="cheap-49" type="checkbox"/>
                                <label htmlFor="cheap-49"></label>
                            </div>
                        </div>
                        <h5 className={'gradient-text font-normal text-[24px]'}>
                            Annualy
                        </h5>
                    </div>
                </div>
                <div className={'absolute  top-0 left-0 w-full h-full flex justify-center items-center'}>
                    <div
                        className={'absolute top-72 flex justify-center items-center flex-col w-full h-[100vh] left-0'}>
                        <PriceComponent/>
                    </div>
                </div>
                <img className={'w-full h-auto object-cover absolute -z-10 left-0 rotate top-0'} src={as2}/>

                <img className={'w-full h-full min-h-[60vh] object-cover absolute blur-[200px] -z-20'} src={as3}
                     alt=""/>
                <img className={'w-full h-auto object-cover absolute -z-20 left-0 rotate-180 bottom-0'} src={as2}
                     alt=""/>

            </div>
        </div>
    </>
  )
}

export default App
