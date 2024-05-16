import React, {useState} from 'react';

import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";

import arti from '../assets/arti.svg'
import './accordion.css'
import eksi from '../assets/eksi.svg'


const AccordionEmre = () => {

    const AccordionItem = ({ header, ...rest }) => (
        <Item
            {...rest}
            header={({ state: { isEnter } }) => (
                <>
                    <div className={'flex flex-col'}>
                        <h1>
                            {header}
                        </h1>
                        <svg className={'mt-4 itema opacity-0'} width="216" height="2" viewBox="0 0 216 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1"
                                  d="M97.92 0.00472274C144.07 -0.0842929 216 1.11321 216 1.11321C216 1.11321 144.033 2.00001 97.92 2C59.6799 2 -4.86601e-08 1.1132 -4.86601e-08 1.1132C-4.86601e-08 1.1132 59.6353 0.0785682 97.92 0.00472274Z"
                                  fill="#E30019"/>
                        </svg>

                    </div>
                    <div className={'flex ml-auto flex-row w-fit items-center'}>
                        <h5 className={`${isEnter && "!opacity-100"} opacity-0 font-normal mr-2 text-[#E30019] text-[16px]`}>See All</h5>
                        <svg className={` w-12 transition-transform duration-200 ease-out ${
                            isEnter && "rotate-180"
                        }`} width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 13L14.5 4L3 13" stroke="url(#paint0_linear_123_4311)" stroke-width="6"
                                  stroke-linecap="round"/>
                            <defs>
                                <linearGradient id="paint0_linear_123_4311" x1="3" y1="8.5" x2="26" y2="8.5"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#E30019"/>
                                    <stop offset="1" stop-color="#C62473"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                </>
            )}
            className=""
            buttonProps={{
                className: ({isEnter}) =>
                    `flex w-full p-4 text-left text-base md:text-lg p-8 hover:bg-slate-100 ${
                        isEnter && "bg-slate-200"
                    }`
            }}
            contentProps={{
                className: "transition-height text-base duration-200 ease-out"
            }}
            panelProps={{className: "p-4"}}
        />
    );

    return (
        <div className={'flex justify-center  items-center'}>
            <div className="mx-2 my-4 w-[330px] md:w-[1096px] ">
                {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
                <Accordion transition transitionTimeout={200}>
                    <AccordionItem header="Job Listings by Sector" initialEntered>
                        <div className={'flex gap-y-[10px] flex-row gap-x-32 ml-3 flex-wrap max-w-[1000px]'}>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    IT (732)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Automotive (7)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Textile (105)
                                </h5>
                            </div>
                            <div className={'w-[150px]'}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Aviation (15)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Service (321)
                                </h5>
                            </div>

                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Energy (73)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Trade (4)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Consultancy (12)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Tourism (24)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Healthcare (57)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Chemistry (32)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Other (801)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Food (423)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Education (98)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Manufacturing (14)
                                </h5>
                            </div>
                        </div>
                    </AccordionItem>

                    <AccordionItem header="Job Listings by City">
                        <div className={'flex gap-y-[10px] flex-row gap-x-32 ml-3 flex-wrap max-w-[1000px]'}>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    IT (732)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Automotive (7)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Textile (105)
                                </h5>
                            </div>
                            <div className={'w-[150px]'}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Aviation (15)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Service (321)
                                </h5>
                            </div>

                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Energy (73)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Trade (4)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Consultancy (12)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Tourism (24)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Healthcare (57)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Chemistry (32)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Other (801)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Food (423)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Education (98)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Manufacturing (14)
                                </h5>
                            </div>
                        </div>

                    </AccordionItem>

                    <AccordionItem header="Job Listings by Department">
                        <div className={'flex gap-y-[10px] flex-row gap-x-32 ml-3 flex-wrap max-w-[1000px]'}>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    IT (732)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Automotive (7)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Textile (105)
                                </h5>
                            </div>
                            <div className={'w-[150px]'}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Aviation (15)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Service (321)
                                </h5>
                            </div>

                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Energy (73)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Trade (4)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Consultancy (12)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Tourism (24)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Healthcare (57)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Chemistry (32)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Other (801)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Food (423)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Education (98)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Manufacturing (14)
                                </h5>
                            </div>
                        </div>

                    </AccordionItem>
                    <AccordionItem header="Job Listings by Position">
                        <div className={'flex gap-y-[10px] flex-row gap-x-32 ml-3 flex-wrap max-w-[1000px]'}>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    IT (732)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Automotive (7)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Textile (105)
                                </h5>
                            </div>
                            <div className={'w-[150px]'}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Aviation (15)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Service (321)
                                </h5>
                            </div>

                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Energy (73)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Trade (4)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Consultancy (12)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Tourism (24)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Healthcare (57)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Chemistry (32)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Other (801)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Food (423)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Education (98)
                                </h5>
                            </div>
                            <div className={'w-[150px] '}>
                                <h5 className={'font-normal text-[16px] text-[#383838]'}>
                                    Manufacturing (14)
                                </h5>
                            </div>
                        </div>

                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default AccordionEmre;