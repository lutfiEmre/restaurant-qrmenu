import React from 'react';
import { TextInput } from '@tremor/react';



const Questions = () => {
    return (
        <div className={'flex flex-col xad justify-center items-center lg:justify-start lg:items-start w-full gap-[17px]'}>
            <div className={'flex flex-col w-full gap-[7px]'}>
                <h3 className={'nunitomedium text-[22px] text-[#2B2F42]'}>
                    Additional Questions
                </h3>
                <h4 className={'nunitomedium text-[14px] text-black'}>
                    Choose one or more questions to ask for your candidate.
                </h4>
            </div>
            <div
                className={'flex shadowe5 pl-[25px] sm:pl-[53px] flex-wrap justify-center items-center pr-[25px] sm:pr-[50px]  xl:pr-[50px] 2xl:pr-[209px] pb-[47px] pt-[44px] gap-[60px] flex flex-row rounded-[20px] bg-[#F4F4F4]'}>
                <div className={'flex asd1 flex-col gap-[30px]'}>
                    <div className={'flex flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-15" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-15">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>How many years of work experience
                                do you have with Figma*?</h4>
                            <TextInput className={'w-[300px] md:w-[400px] '} placeholder="" disabled={false}/>

                        </div>
                    </div>
                    <div className={'flex flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-16" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-16">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                How many years of work experience do you have with AdobeXD*?
                            </h4>
                            <TextInput className={'w-[300px] md:w-[400px] '} placeholder="" disabled={false}/>

                        </div>
                    </div>
                    <div className={'flex flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-17" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-17">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                How many years of work experience do you have with HTML and CSS*?
                            </h4>
                            <TextInput className={'w-[300px] md:w-[400px] '} placeholder="" disabled={false}/>

                        </div>
                    </div>
                    <div className={'flex flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-18" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-18">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                How many years of work experience do you have with Prototyping*?
                            </h4>
                            <TextInput className={'w-[300px] md:w-[400px] '} placeholder="" disabled={false}/>

                        </div>
                    </div>
                    <div className={'flex flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-19" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-19">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                What is your expectaions of Salary?*
                            </h4>
                            <TextInput className={'w-[300px] md:w-[400px] '} placeholder="" disabled={false}/>

                        </div>
                    </div>
                </div>
                <div className={'flex flex-col justify-center items-center lg:justify-start lg:items-start flex-wrap gap-7'}>

                    <div className={'flex radios flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-20" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-20">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>Have you completed the following
                                level of education: Bachelor’s Degree?*</h4>
                            <div className={'flex flex-row gap-5'}>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    Yes
                                </label>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    No
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className={'flex radios flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-21" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-21">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                Are you legally authorized to work in the Germany?*
                            </h4>
                            <div className={'flex flex-row gap-5'}>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    Yes
                                </label>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    No
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className={'flex radios flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-22" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-22">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                Will you now, or in the future, require sponsorhip for employment visa status(e.g.)?*
                            </h4>
                            <div className={'flex flex-row gap-5'}>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    Yes
                                </label>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    No
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className={'flex radios flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-23" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-23">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                Will you now, or in the future, require sponsorhip for employment visa status(e.g.)?*
                            </h4>
                            <div className={'flex flex-row gap-5'}>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    Yes
                                </label>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    No
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className={'flex radios flex-row gap-4'}>
                        <div className="checkbox-wrapper-15">
                            <input className="inp-cbx" id="cbx-24" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx" htmlFor="cbx-24">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <div className={'flex select-none flex-col gap-[7px]'}>
                            <h4 className={'nunitomedium text-[14px] text-[#2B2F42]'}>
                                Will you now, or in the future, require sponsorhip for employment visa status(e.g.)?*
                            </h4>
                            <div className={'flex flex-row gap-5'}>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    Yes
                                </label>
                                <label
                                    className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                    className={''} type="radio" name="e"/>
                                    No
                                </label>
                            </div>

                        </div>
                    </div>
                    <div className={'w-full flex justify-end'}>
                        <div
                            className={'w-[130px] h-[50px] cursor-pointer flex justify-center items-center     bg-[#FE0000] rounded-[10px]'}>
                            <h5 className={'nunitoregular select-none text-[14px] text-white'}>
                                Add
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Questions;
