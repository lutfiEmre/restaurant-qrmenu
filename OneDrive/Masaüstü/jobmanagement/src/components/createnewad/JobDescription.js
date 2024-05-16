import React, { useState } from 'react'
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
const MyComponent = () => {
    const [text, setText] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    const handleChange = (value) => {
        setText(value);
    };

    console.log(text);
    return (
        <div
            className={'flex flex-col h-full xad justify-center items-center xl:justify-start xl:items-start w-full gap-[17px]'}>
            <div className={'flex flex-col  xl:justify-start justify-center xl:items-start items-center w-full gap-[7px]'}>
                <h3 className={'nunitomedium text-[22px] text-[#2B2F42]'}>
                    Job Description
                </h3>
                <h4 className={'nunitomedium text-[14px] text-black'}>
                    Choose one or more questions to ask for your candidate.
                </h4>
            </div>
            <div className={'flex gap-[100px] lg:gap-[100px] 2xl:gap-[136px] flex-col lg:flex-row'}>
                <div className={'flex flex-col'}>
                    <div
                        className={'grid grid-cols-1 grid-rows-auto sm:grid-cols-3 justify-items-center lg:justify-items-start gap-[28px] radios'}>
                        <div className={'flex items-end flex-col'}>
                            <label
                                className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                className={''} type="radio" name="e"/>
                                <h5 className={'pl-[10px] nunitoregular text-[14px]'}>Lorem ipsum</h5>
                            </label>
                            <h4 className={'nunitoregular text-[10px] text-[#FE0000]'}>
                                Recommended by AI
                            </h4>
                        </div>
                        <div className={'flex items-end flex-col'}>
                            <label
                                className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                className={''} type="radio" name="e"/>
                                <h5 className={'pl-[10px] nunitoregular text-[14px]'}>Lorem ipsum</h5>
                            </label>
                            <h4 className={'nunitoregular text-[10px] text-[#FE0000]'}>
                                Recommended by AI
                            </h4>
                        </div>
                        <div className={'flex items-end flex-col'}>
                            <label
                                className={'border-none outline-none text-black nunitomedium text-[14px] appearance-none'}><input
                                className={''} type="radio" name="e"/>
                                <h5 className={'pl-[10px] nunitoregular text-[14px]'}>Lorem ipsum</h5>
                            </label>
                            <h4 className={'nunitoregular text-[10px] text-[#FE0000]'}>
                                Recommended by AI
                            </h4>
                        </div>
                    </div>
                    <div className={'mt-[23px] h-full flex justify-center lg:justify-start'}>
                        <ReactQuill
                            className={'w-[350px] md:w-[400px] text-[#696969] lg:min-w-[400px] xl:min-w-[600px] h-[10vh] lg:h-[20vh] min-h-[250px] lg:min-h-[400px]'}
                            value={text}
                            modules={modules}
                            formats={formats}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={'flex flex-col items-center lg:items-start gap-[25px]'}>
                    <h5 className={'nunitosemibold text-[22px] text-[#2B2F42]'}>Skills</h5>
                    <div className={'flex flex-row lg:justify-start lg:items-start justify-center items-center max-w-[556px] h-fit flex-wrap gap-[20px]'}>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Metrics
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Team work
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Project Management
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Creativity
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                UX Design
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                A/B Testing
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                User Testing
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Prototyping
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Data Analysis
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Problem Solving
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Creativity
                            </p>
                        </div>
                        <div className={'px-[18px] py-[10px] rounded-[20px] w-fit h-fit bg-[#FF4343]'}>
                            <p className={'nunitomedium text-[16px] text-white'}>
                                Wireframing
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
