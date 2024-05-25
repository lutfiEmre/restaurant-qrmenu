import React, {useEffect, useRef, useState} from 'react';
import searchbg from '../assets/registerlogin/searchbg.svg'
import illustbg from '../assets/registerlogin/illust.svg'

import "../css/registerlogin.css"
import logosvg from '../assets/registerlogin/logo.svg'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const LoginMain = () => {
    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Please enter your full name'),
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('This user name has been taken'),
        email: Yup.string().email('Please enter an email address').required('Please enter an email address'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Password length must be at least 8 characters'),
    });

    const [general,setGeneral] = useState({
        accountype: "candidate",
        confirmemail: "",
        confirmpass: "",
        button: false,
    })
    useEffect(() => {
        console.log(general.button)
    },general)
    return (
        <div className={'flex flex-col pb-[140px] lg:pb-0 lg:flex-row w-full h-full'}>
            <div className={'w-full md:min-w-[740px] xl:w-[1000px]  lg:min-w-[500px] 2xl:w-[1500px] py-[50px] lg:py-[110px] flex flex-col justify-start items-center  h-full relative lg:min-h-screen bg-[#FF4343]'}>
                <div className={'z-20 w-full h-full flex flex-col items-center'}>
                    <img className={'xl:w-fit w-64 lg:w-80'} src={illustbg} alt=""/>
                    <div className={' mt-[50px] lg:mt-[115px]'}>
                        <h2 className={'nunitomedium text-white text-[30px] w-[380px] md:w-[600px] text-center lg:w-[400px] xl:w-[454px]'}>
                            We are the highest-rated ATS in the market, trusted by recruiters in 50+ countries!
                        </h2>
                    </div>

                </div>
                <img className={'select-none w-full h-full object-cover absolute top-0 left-0 z-10'} src={searchbg} alt=""/>
            </div>
            <div
                className={'w-full h-full  px-[5vw] items-center xl:px-[0vw] pt-[30px] flex justify-center flex-col'}>
                <img className={'select-none cursor-pointer'} src={logosvg} alt=""/>
                <div className={'mt-[33px]'}>
                    <h5 className={'nunitobold text-[30px] text-[#2B2F42]'}>
                        Ready to join us? Sign up now!
                    </h5>
                    <h6 className={'italic nunitoregular text-[#2B2F42] text-[14px]'}>
                        Unlimited free trial. No credit card required.
                    </h6>
                    <div className={'radios mt-[50px] flex-wrap justify-center items-center gap-[50px] flex flex-row'}>
                        <div className={'flex flex-col items-center h-[100px] w-[240px]'}>
                            <div
                                onClick={() => {
                                    setGeneral({...general, accountype: "advisor"})
                                }}
                                className={`${general.accountype === "advisor" && "border-[#FF4343] bg-[#FFEAEA] scale-[130%] mr-9"} border-[#ADADAD] items-center transition-all duration-300 cursor-pointer w-fit flex flex-row gap-[25px] px-[34px] py-[10px] border-[1px] rounded-[10px]`}>
                                <div
                                    className={`${general.accountype === "advisor" && "!border-[#FF4343]"} w-[20px] h-[20px] rounded-full border-[#939393] border-[1px] flex justify-center items-center`}>
                                    <div
                                        className={`${general.accountype === "advisor" && "!bg-[#FF4343]"} select-none  bg-[#939393] w-[10px] select-none h-[10px] rounded-full`}></div>
                                </div>
                                <h6 className={'nunitobold select-none text-[22px] text-[#2B2F42]'}>
                                    Advisor
                                    <br/>
                                    Account
                                </h6>
                            </div>
                            <h5 className={`${general.accountype === "advisor" && "!mt-5"} flex duration-200 transition-all -ml-3 w-[220px] mt-2 nunitoregular text-[12px] text-center text-[#2B2F42]`}>
                                Check this box to register as a advisor and unlock benefits!
                            </h5>
                        </div>
                        <div className={'flex flex-col items-center h-[100px] w-[240px]'}>
                            <div
                                onClick={() => {
                                    setGeneral({...general, accountype: "candidate"})
                                }}
                                className={`${general.accountype === "candidate" && "border-[#FF4343] bg-[#FFEAEA] scale-[130%] mx-8 ml-5"} border-[#ADADAD] items-center transition-all duration-300 w-fit h-fit cursor-pointer flex flex-row gap-[25px] px-[34px] py-[10px] border-[1px] rounded-[10px]`}>
                                <div
                                    className={`${general.accountype === "candidate" && "!border-[#FF4343]"} w-[20px] h-[20px] rounded-full border-[#939393] border-[1px] flex justify-center items-center`}>
                                    <div
                                        className={`${general.accountype === "candidate" && "!bg-[#FF4343]"}  bg-[#939393] w-[10px] select-none h-[10px] rounded-full`}></div>
                                </div>
                                <h6 className={'nunitobold select-none text-[22px] text-[#2B2F42]'}>
                                    Candidate
                                    <br/>
                                    Account
                                </h6>
                            </div>
                            <h5 className={`${general.accountype === "candidate" && "!mt-5"} flex duration-200 transition-all -ml-3 w-[220px] mt-2 nunitoregular text-[12px] text-center text-[#2B2F42]`}>
                                Check this box to register as a advisor and unlock benefits!
                            </h5>
                        </div>
                        <div className={'flex flex-col items-center h-[100px] w-[240px]'}>
                            <div
                                onClick={() => {
                                    setGeneral({...general, accountype: "company"})
                                }}
                                className={`${general.accountype === "company" && "border-[#FF4343] bg-[#FFEAEA] scale-[130%] ml-10"} border-[#ADADAD] items-center transition-all duration-300 w-fit h-fit cursor-pointer flex flex-row gap-[25px] px-[34px] py-[10px] border-[1px] rounded-[10px]`}>
                                <div
                                    className={`${general.accountype === "company" && "!border-[#FF4343]"} w-[20px] h-[20px] rounded-full border-[#939393] border-[1px] flex justify-center items-center`}>
                                    <div
                                        className={`${general.accountype === "company" && "!bg-[#FF4343]"}  bg-[#939393] w-[10px] select-none h-[10px] rounded-full`}></div>
                                </div>
                                <h6 className={'nunitobold select-none text-[22px] text-[#2B2F42]'}>
                                    Company
                                    <br/>
                                    Account
                                </h6>
                            </div>

                            <h5 className={`${general.accountype === "company" && "!mt-5"} flex duration-200 transition-all -ml-3 w-[220px] mt-2 nunitoregular text-[12px] text-center text-[#2B2F42]`}>
                                Check this box to register as a advisor and unlock benefits!
                            </h5>
                        </div>
                    </div>
                </div>
                <div className={'w-[60%]  h-full  mt-[70px]'}>
                    <Formik
                        initialValues={{
                            firstName: '',
                            username: '',
                            email: '',
                            password: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({errors, touched}) => (
                            <Form className={'flex w-full flex-col gap-[10px]'}>
                                <div className={'flex w-full flex-row gap-[42px] items-center'}>
                                    <div className={'flex w-full flex-col gap-[3px]'}>
                                        <h5 className={'text-[#2B2F42] text-[22px] nunitosbold font-semibold'}>Resume/CV
                                            * </h5>
                                        <div className={'flex w-full justify-between flex-row gap-[42px] items-center'}>
                                            <div
                                                className={"border-[1px] cursor-pointer w-[304px] relative pl-[15px] outline-none text-[14px] nunitoregular h-[38px] border-[#ADADAD] rounded-[3px]"}
                                            >
                                                <h5 className={'text-[#B0B0B0]  nunitoregular text-black pt-3 font-semibold text-[14px]'}>
                                                    Upload your resume
                                                </h5>
                                                <svg className={'absolute top-3 right-3'} width="22" height="22"
                                                     viewBox="0 0 22 22" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M21 10.376L11.5445 19.2938C10.3861 20.3862 8.81499 21 7.1768 21C5.53861 21 3.96752 20.3862 2.80914 19.2938C1.65076 18.2013 1 16.7195 1 15.1745C1 13.6295 1.65076 12.1478 2.80914 11.0553L12.2647 2.13749C13.0369 1.40916 14.0844 1 15.1765 1C16.2686 1 17.316 1.40916 18.0882 2.13749C18.8605 2.86582 19.2944 3.85365 19.2944 4.88366C19.2944 5.91367 18.8605 6.90151 18.0882 7.62982L8.6224 16.5475C8.23627 16.9118 7.71258 17.1164 7.16652 17.1164C6.62045 17.1164 6.09675 16.9118 5.71062 16.5475C5.32451 16.1834 5.10758 15.6895 5.10758 15.1745C5.10758 14.6595 5.32451 14.1655 5.71062 13.8014L14.4459 5.57264"
                                                        stroke="#2B2F42" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>

                                                <input placeholder={'Upload your resume'}
                                                       className={'absolute cursor-pointer left-0 top-0 opacity-0 w-full h-full'}
                                                       type="file"/>
                                            </div>
                                            <div className={'flex flex-row items-center gap-[37px]'}>
                                                <p className={'nunitoregular text-[14px] text-[#B0B0B0]'}>
                                                    or
                                                </p>
                                                <div className={'flex flex-row items-center gap-[8px]'}>
                                                    <h6 className={'text-[#2B2F42] whitespace-nowrap text-[14px] nunitoregular'}>
                                                        Fill with;
                                                    </h6>
                                                    <div
                                                        className={'w-[183px] relative cursor-pointer flex items-center justify-center h-[38px] bg-[#2867B2] rounded-[70px]'}>
                                                        <svg width="84" height="21" viewBox="0 0 84 21" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M33.15 12.3L37.785 18H34.125L30 12.765V18H27V3H30V11.82L33.81 7.5H37.635L33.15 12.3ZM21.15 7.2C19.8166 7.21995 18.5779 7.89259 17.835 9V7.5H15V18H18V13.095C17.9204 12.3753 18.1433 11.6549 18.6154 11.106C19.0876 10.557 19.7665 10.2289 20.49 10.2C22.23 10.2 22.5 11.91 22.5 13.095V18H25.5V12.435C25.5 9.135 24.405 7.2 21.21 7.2H21.15ZM48 12.99C48.0115 13.2098 48.0115 13.4301 48 13.65H40.125V13.755C40.389 15.0471 41.5524 15.9562 42.87 15.9C43.8924 15.9444 44.8889 15.5708 45.63 14.865L47.625 16.365C46.3464 17.6698 44.5754 18.3727 42.75 18.3C41.2374 18.3956 39.7577 17.8311 38.6932 16.7522C37.6287 15.6734 37.0841 14.1861 37.2 12.675C37.1689 11.1846 37.7588 9.74837 38.8285 8.71004C39.8981 7.67171 41.3512 7.12472 42.84 7.2C45.66 7.2 48 9.195 48 12.99ZM45.21 11.7C45.1877 11.0995 44.9197 10.5346 44.4688 10.1375C44.0178 9.74043 43.4235 9.54608 42.825 9.6C41.506 9.45739 40.3115 10.3864 40.125 11.7H45.21ZM3 3H0V18H9V15H3V3ZM57 3H60V18H57.165V16.95C56.435 17.8494 55.3223 18.3501 54.165 18.3C52.7558 18.2638 51.424 17.6476 50.4841 16.597C49.5443 15.5464 49.0797 14.1545 49.2 12.75C49.0568 11.3429 49.5113 9.94041 50.4528 8.88489C51.3942 7.82937 52.7358 7.21799 54.15 7.2C55.2023 7.15392 56.2291 7.53221 57 8.25V3ZM57.225 12.75C57.3205 12.0492 57.1078 11.3414 56.6418 10.8092C56.1758 10.2771 55.5023 9.97287 54.795 9.97499C53.36 10.0792 52.2726 11.3133 52.35 12.75C52.2726 14.1867 53.36 15.4208 54.795 15.525C55.5023 15.5271 56.1758 15.2229 56.6418 14.6908C57.1078 14.1586 57.3205 13.4508 57.225 12.75ZM12 2.7C10.9992 2.71425 10.1801 3.50059 10.125 4.5C10.125 5.53553 10.9645 6.375 12 6.375C13.0355 6.375 13.875 5.53553 13.875 4.5C13.8199 3.50059 13.0008 2.71425 12 2.7ZM10.5 18H13.5V7.5H10.5V18ZM84 1.5V19.5C84 20.3284 83.3284 21 82.5 21H64.5C63.6716 21 63 20.3284 63 19.5V1.5C63 0.671573 63.6716 0 64.5 0H82.5C83.3284 0 84 0.671573 84 1.5ZM69 7.5H66V18H69V7.5ZM69.375 4.5C69.375 3.46447 68.5355 2.625 67.5 2.625C66.4645 2.625 65.625 3.46447 65.625 4.5C65.625 5.53553 66.4645 6.375 67.5 6.375C68.5355 6.375 69.375 5.53553 69.375 4.5ZM81 12.435C81 9.135 79.905 7.2 76.71 7.2C75.3554 7.20017 74.0898 7.87513 73.335 9V7.5H70.5V18H73.5V13.095C73.4204 12.3753 73.6432 11.6549 74.1154 11.106C74.5875 10.557 75.2665 10.2289 75.99 10.2C77.73 10.2 78 11.91 78 13.095V18H81V12.435Z"
                                                                fill="white"/>
                                                        </svg>
                                                        <svg className={'absolute top-0 left-0'} width="182" height="26"
                                                             viewBox="0 0 182 26" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.1"
                                                                  d="M182 15.1871C106.244 39.5162 -14 15.1871 -14 15.1871C-11.6209 9.74846 -4.33725 -1.24964 5.76471 -1.73307C15.8667 -2.2165 113.556 -1.9345 161.137 -1.73307C167.176 -0.524427 179.804 4.55171 182 15.1871Z"
                                                                  fill="white"/>
                                                        </svg>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'flex flex-col gap-[3px]'}>
                                    <h5 className={'text-[#2B2F42] text-[22px] nunitosbold font-semibold'}>Full
                                        Name</h5>
                                    <Field placeholder="EmreLutfi" x
                                           className={"border-[1px] pl-[15px] outline-none text-[14px] nunitoregular h-[38px] border-[#ADADAD] rounded-[3px]"}
                                           name="firstName"/>

                                </div>
                                {errors.firstName && touched.firstName ? (
                                    <div  className={'nunitoregular text-[#FE0000] text-[14px]'}>{errors.firstName}</div>
                                ) : null}
                                <div className={'flex flex-col gap-[3px]'}>
                                    <h5 className={'text-[#2B2F42] text-[22px] nunitosbold font-semibold'}>Username
                                        *</h5>
                                    <Field placeholder="EmreLutfi"
                                           className={"border-[1px] pl-[15px] outline-none text-[14px] nunitoregular h-[38px] border-[#ADADAD] rounded-[3px]"}
                                           name="username"/>

                                </div>
                                {errors.username && touched.username ? (
                                    <div className={'nunitoregular text-[#FE0000] text-[14px]'}>{errors.username}</div>
                                ) : null}
                                <div className={'flex flex-col gap-[3px]'}>
                                    <h5 className={'text-[#2B2F42] text-[22px] nunitosbold font-semibold'}>Email Address
                                        *</h5>
                                    <Field placeholder="test@gmail.com"
                                           className={"border-[1px] pl-[15px] outline-none text-[14px] nunitoregular h-[38px] border-[#ADADAD] rounded-[3px]"}
                                           name="email" type="email"/>

                                </div>
                                <div className={'flex flex-col gap-[3px]'}>
                                    <h5 className={'text-[#2B2F42] text-[22px] nunitosbold font-semibold'}>Confirm Email
                                        Address
                                        *</h5>
                                    <Field placeholder="test@gmail.com"
                                           className={"border-[1px] pl-[15px] outline-none text-[14px] nunitoregular h-[38px] border-[#ADADAD] rounded-[3px]"}
                                           name="email2" type="email"/>

                                </div>
                                {errors.email && touched.email ? (
                                    <div className={'nunitoregular text-[#FE0000] text-[14px]'}>{errors.email}</div>
                                ) : null}
                                <div className={'flex flex-col gap-[3px]'}>
                                    <h5 className={'text-[#2B2F42] text-[22px] nunitosbold font-semibold'}>Password
                                        *</h5>
                                    <Field placeholder="+8 characters"
                                           className={"border-[1px] pl-[15px] outline-none text-[14px] nunitoregular h-[38px] border-[#ADADAD] rounded-[3px]"}
                                           name="password" type="password"/>

                                </div>
                                <div className={'flex flex-col gap-[3px]'}>
                                    <h5 className={'text-[#2B2F42] text-[22px] nunitosbold font-semibold'}>Confirm
                                        Password
                                        *</h5>
                                    <Field placeholder="+8 characters"
                                           className={"border-[1px] pl-[15px] outline-none text-[14px] nunitoregular h-[38px] border-[#ADADAD] rounded-[3px]"}
                                           name="password2" type="password"/>

                                </div>
                                {errors.password && touched.password ? <div  className={'nunitoregular text-[#FE0000] text-[14px]'}>{errors.password}</div> : null}
                                <div className={'flex mt-[10px] select-none flex-row gap-[6px] items-center'}>
                                    <div  className="checkbox-wrapper-15">
                                        <input className="inp-cbx" id="cbx-15" type="checkbox"
                                               style={{display: "none"}}/>
                                        <label onClick={() => {setGeneral({...general,button: !general.button})}}  className="cbx" htmlFor="cbx-15">
                                <span>
                                    <p className={'nunitoregular absolute left-6 -top-1 whitespace-nowrap text-[14px] text-[#2B2F42]'}>
                                I agree to OptiRecruit’s <h5 className={'inline text-[#02A0FC]'}>Terms of Service</h5> span and <h5
                                        className={'inline text-[#02A0FC]'}>Privacy Policy.</h5>
                            </p>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                                        </label>

                                    </div>

                                </div>
                                <button className={`${general.button === true && "!bg-[#FE0000] !text-white !border-none"} w-[642px] mt-[10px] h-[70px] nunitomedium text-[22px] text-[#B0B0B0] border-[#ADADAD] border-[1px] rounded-[40px]`} type="submit">
                                    Next
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <h5 className={'w-[60%] mt-[15px] text-[#2B2F42] nunitosbold text-[22px] flex justify-center items-center'}>
                    Already have an account? &nbsp; <span className={'text-[#02A0FC]'}>
                     Sign in.
                </span>
                </h5>
            </div>
        </div>
    );
};

export default LoginMain;
