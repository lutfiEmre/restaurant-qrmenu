import React, {useRef, useState} from 'react';
import searchbg from '../assets/registerlogin/searchbg.svg'
import illustbg from '../assets/registerlogin/illust.svg'
import "../css/registerlogin.css"
import logosvg from '../assets/registerlogin/logo.svg'
const RegisterMain = () => {
    const passwordref = useRef();
    const forgotpassword = useRef();
    const [regist,setRegist] = useState({
        passwordvisible: true,
        newpassword: {
            1: false,
            2: false,
        },
        forgotpasword: false,
        passwordsection: 0,
    })
    return (
        <div className={'flex flex-col pb-[140px] lg:pb-0 lg:flex-row w-full h-full'}>
            <div className={'w-full md:min-w-[740px] xl:w-[1000px] h-fit lg:min-w-[500px] 2xl:w-[1500px] py-[50px] lg:py-[110px] flex flex-col justify-start items-center  h-full relative lg:min-h-screen bg-[#FF4343]'}>
                <div className={'z-20 w-full flex flex-col items-center'}>
                    <img className={'xl:w-fit w-64 lg:w-80'} src={illustbg} alt=""/>
                    <div className={' mt-[50px] lg:mt-[115px]'}>
                        <h2 className={'nunitomedium text-white text-[30px] w-[380px] md:w-[600px] text-center lg:w-[400px] xl:w-[454px]'}>
                            We are the highest-rated ATS in the market, trusted by recruiters in 50+ countries!
                        </h2>
                    </div>

                </div>
                <img className={'select-none w-full h-full object-cover absolute top-0 left-0 z-10'} src={searchbg} alt=""/>
            </div>
            <div className={'w-full h-full pt-[102px] flex justify-start items-center flex-col'}>
               <img className={'select-none cursor-pointer'} src={logosvg} alt=""/>
                {!regist.forgotpasword &&
                    <div className={'flex flex-col w-full flex justify-start items-center'}><h5
                        className={'text-[#FF4343] text-center select-none mt-[41px] nunitoregular text-[40px]'}>
                        Log In to your account
                    </h5>
                        <h5 className={'mt-[35px] select-none cursor-pointer text-[#2B2F42] text-[16px] nunitosbold'}>
                            Do not have an account? <span className={'text-[#02A0FC]'}>
                    Sign Up
                </span>
                        </h5>
                        <div className={'flex flex-row mt-[53px] gap-[30px]'}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#2867B2"/>
                                <mask id="mask0_228_7042" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="11"
                                      y="11"
                                      width="27" height="27">
                                    <path d="M37.949 11H11V37.901H37.949V11Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_228_7042)">
                                    <path
                                        d="M11.443 19.932H17.029V37.9H11.443V19.932ZM14.237 11C14.8773 10.9998 15.5033 11.1895 16.0359 11.545C16.5684 11.9006 16.9836 12.406 17.2289 12.9975C17.4743 13.589 17.5387 14.2399 17.4141 14.868C17.2895 15.4961 16.9815 16.0731 16.529 16.5262C16.0765 16.9793 15.4998 17.288 14.8719 17.4133C14.244 17.5387 13.593 17.4751 13.0012 17.2305C12.4094 16.9859 11.9034 16.5713 11.5472 16.0392C11.191 15.5071 11.0006 14.8813 11 14.241C10.9997 13.382 11.3406 12.5581 11.9476 11.9504C12.5546 11.3426 13.378 11.0008 14.237 11Z"
                                        fill="#F4F4F4"/>
                                    <path
                                        d="M20.5312 19.932H25.8893V22.39H25.9663C26.502 21.4738 27.2763 20.7201 28.2067 20.2094C29.1371 19.6987 30.1887 19.45 31.2493 19.49C36.9053 19.49 37.9492 23.21 37.9492 28.047V37.903H32.3663V29.165C32.3663 27.081 32.3303 24.399 29.4663 24.399C26.5613 24.399 26.1172 26.672 26.1172 29.015V37.903H20.5343L20.5312 19.932Z"
                                        fill="#F4F4F4"/>
                                </g>
                            </svg>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#F7F7F7"/>
                                <g clip-path="url(#clip0_228_7051)">
                                    <path
                                        d="M10.9663 13.5598L14.9141 20.6669L9 31.1489H16.0593L21.9282 20.6669L17.9804 13.5598H10.9663Z"
                                        fill="#0698A0"/>
                                    <path
                                        d="M31.9554 7L20.5566 27.4471L27.9097 41H35.0669L27.5858 27.4471L38.9996 7H31.9554Z"
                                        fill="#B7DF4B"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_228_7051">
                                        <rect width="30" height="34" fill="white" transform="translate(9 7)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M45.0021 24.4664C45.0021 22.7397 44.8591 21.4797 44.5497 20.1731H24.4307V27.9663H36.2401C36.0021 29.9031 34.7164 32.8197 31.8592 34.7796L31.8191 35.0405L38.1804 39.87L38.6211 39.9131C42.6686 36.2497 45.0021 30.8597 45.0021 24.4664"
                                    fill="#4285F4"/>
                                <path
                                    d="M24.429 45C30.2146 45 35.0716 43.1332 38.6194 39.9133L31.8575 34.7798C30.048 36.0165 27.6194 36.8798 24.429 36.8798C18.7624 36.8798 13.9529 33.2165 12.2384 28.1532L11.9872 28.1741L5.37263 33.1908L5.28613 33.4265C8.80989 40.2865 16.048 45 24.429 45Z"
                                    fill="#34A853"/>
                                <path
                                    d="M12.2399 28.1533C11.7876 26.8466 11.5258 25.4465 11.5258 23.9999C11.5258 22.5532 11.7876 21.1532 12.2161 19.8466L12.2042 19.5683L5.50674 14.471L5.28761 14.5732C3.83529 17.4199 3.00195 20.6166 3.00195 23.9999C3.00195 27.3833 3.83529 30.5798 5.28761 33.4265L12.2399 28.1533"
                                    fill="#FBBC05"/>
                                <path
                                    d="M24.4291 11.1199C28.4528 11.1199 31.1671 12.8233 32.7148 14.2467L38.7624 8.46C35.0482 5.07668 30.2147 3 24.4291 3C16.048 3 8.80991 7.7133 5.28613 14.5732L12.2147 19.8466C13.9529 14.7833 18.7624 11.1199 24.4291 11.1199"
                                    fill="#EB4335"/>
                            </svg>
                        </div>
                        <h6 className={'mt-[20px] text-[14px] nunitoregular text-[#2B2F42]'}>
                            or continue with
                        </h6>
                        <div className={'flex flex-col max-w-[1800px] w-full gap-[22px] px-[5vw] xl:px-[10vw]'}>
                            <div className={'mt-[54px] gap-[33px] flex flex-col w-full '}>
                                <div className={'flex w-full flex-col gap-[3px]'}>
                                    <h5 className={'nunitoregular text-[#FE0000] text-[14px]'}>
                                        Failed to Login : Please check your Email ID & Password.
                                    </h5>
                                    <h5 className={'nunitosbold text-[#2B2F42] text-[22px]'}>
                                        Email or Username
                                    </h5>
                                    <div
                                        className={'w-full h-[46px] flex justify-start items-center border-[1px] border-[#ADADAD] rounded-[3px]'}>
                                        <input placeholder={'Your email/username'}
                                               className={'outline-none border-none h-full w-full flex items-center justify-center h-1/2 py-3 p-4 placeholder-[#B0B0B0] nunitoregular'}
                                               type="text"/>
                                    </div>
                                    <h5 className={'nunitoregular text-[#FE0000] text-[14px]'}>
                                        The email field must be a valid email
                                    </h5>
                                </div>
                                <div ref={passwordref} className={'flex w-full flex-col gap-[3px]'}>
                                    <h5 className={'nunitosbold select-none text-[#2B2F42] text-[22px]'}>
                                        Password
                                    </h5>
                                    <div
                                        className={'w-full relative  h-[46px] flex justify-start items-center border-[1px] border-[#ADADAD] rounded-[3px]'}>
                                        <input placeholder={'Your password'}
                                               className={'outline-none active:border-none h-full  !appearance-none !border-none w-full flex items-center justify-center h-1/2 py-3 p-4 placeholder-[#B0B0B0] nunitoregular'}
                                               type={regist.passwordvisible ? "password" : "text"}/>
                                        <div onClick={() => {
                                            setRegist({...regist, passwordvisible: !regist.passwordvisible})
                                        }} className={'absolute select-none top-3 cursor-pointer right-3'}>
                                            {regist.passwordvisible ? <div className={'w-[20px] h-[20px]'}>
                                                    <svg className={'w-[20px] h-[20px]'} width="800px" height="800px"
                                                         viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                        <path
                                                            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>
                                                </div> :
                                                <div className={'w-[20px] h-[20px] flex justify-center items-center'}>
                                                    <svg className={'w-[20px] h-[20px]'} width="800px" height="800px"
                                                         viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>
                                                </div>

                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-row w-full justify-between items-center '}>
                                <div className={'flex flex-row gap-[6px] items-center'}>
                                    <div className="checkbox-wrapper-15">
                                        <input className="inp-cbx" id="cbx-15" type="checkbox"
                                               style={{display: "none"}}/>
                                        <label className="cbx" htmlFor="cbx-15">
                                <span>
                                    <p className={'nunitoregular absolute left-6 -top-1 whitespace-nowrap text-[14px] text-[#2B2F42]'}>
                                Remember me
                            </p>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                                        </label>

                                    </div>

                                </div>
                                <p onClick={() => {setRegist({...regist,forgotpasword: !regist.forgotpasword})}} className={'italic select-none cursor-pointer nunitobold text-[#2B2F42] text-opacity-70'}>Forgot
                                    Password?</p>
                            </div>
                            <div
                                className={'w-full cursor-pointer h-[60px] 2xl:h-[79px] bg-[#FE0000] flex justify-center items-center rounded-[40px]'}>
                                <p className={'nunitomedium select-none text-white text-[22px]'}>
                                    Login
                                </p>
                            </div>
                        </div>


                    </div>}
                {regist.passwordsection === 0 && regist.forgotpasword &&
                    <div  className={'flex flex-col w-full flex justify-start items-center'}>
                        <h5
                        className={'text-[#FF4343] text-center select-none mt-[41px] nunitoregular text-[40px]'}>
                        Forgot Password?
                    </h5>
                        <h5 className={'my-[70px] w-[350px] text-center md:w-[500px] lg:w-[400px] xl:w-[772px] select-none cursor-pointer text-[#2B2F42] text-[16px] nunitosbold'}>
                            Type your registered e-mail address or user name to set a new password. Your password change link will be sent to your e-mail address.
                        </h5>

                        <div className={'flex flex-col max-w-[1800px] w-full gap-[22px] px-[5vw] xl:px-[10vw]'}>
                            <div className={'mt-[54px] gap-[33px] flex flex-col w-full '}>
                                <div ref={forgotpassword} className={'flex w-full flex-col gap-[3px]'}>
                                    <h5 className={'nunitosbold select-none text-[#2B2F42] text-[22px]'}>
                                        Email or Username
                                    </h5>
                                    <div
                                        className={'w-full relative  h-[46px] flex justify-start items-center border-[1px] border-[#ADADAD] rounded-[3px]'}>
                                        <input placeholder={'Please enter your email or username'}
                                               className={'outline-none border-none h-full w-full flex items-center justify-center h-1/2 py-3 p-4 placeholder-[#B0B0B0] nunitoregular'}
                                               type={"text"}/>

                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    setRegist({...regist, passwordsection: 1})
                                }}
                                className={'w-full cursor-pointer h-[60px] mt-8 2xl:h-[79px] bg-[#FE0000] flex justify-center items-center rounded-[40px]'}>
                                <p className={'nunitomedium select-none text-white text-[22px]'}>
                                    Reset Password
                                </p>
                            </div>
                            <div onClick={() => {
                                setRegist({...regist, forgotpasword: !regist.forgotpasword})
                            }} className={'flex mt-6 w-full h-fit cursor-pointer justify-center '}>
                                <h5 className={'nunitosbold text-[22px] text-[#2B2F42] '}>
                                    Back to <span className={'text-[#02A0FC]'}>Log In</span>
                                </h5>
                            </div>
                        </div>


                    </div>}
                {regist.passwordsection === 1 && regist.forgotpasword &&
                    <div className={'flex flex-col mt-[120px] w-full flex justify-start items-center'}>
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="31" cy="31" r="31" fill="#B7DF4B"/>
                            <path
                                d="M14.3928 35.4376L19.7168 40.7289C21.6881 42.688 24.8786 42.6637 26.8197 40.6747L47.6071 19.375"
                                stroke="#FFEBE9" stroke-width="8" stroke-linecap="round"/>
                        </svg>

                        <h5
                            className={'text-[#FF4343] text-center mt-[30px] select-none  nunitoregular text-[40px]'}>
                            We’ve sent a link to your email.
                        </h5>
                        <h5 className={'my-[70px] w-[350px] text-center md:w-[500px] lg:w-[400px] xl:w-[772px] select-none cursor-pointer text-[#2B2F42] text-[22px] nunitosbold'}>
                            Please check your inbox, spam or junk.
                        </h5>

                        <div className={'flex flex-col max-w-[1800px] w-full gap-[22px] px-[5vw] xl:px-[10vw]'}>

                            <div
                                onClick={() => {setRegist({...regist,forgotpasword: !regist.forgotpasword, passwordsection: 0})}}
                                className={'w-full cursor-pointer h-[60px] mt-8 2xl:h-[79px] bg-[#FE0000] flex justify-center items-center rounded-[40px]'}>
                                <p className={'nunitomedium select-none text-white text-[22px]'}>
                                    Login
                                </p>
                            </div>
                            <div onClick={() => {setRegist({...regist,passwordsection: 2})}} className={'mt-24 flex justify-center text-2xl'}>
                                x
                            </div>

                        </div>


                    </div>
                }
                {regist.passwordsection === 2 && regist.forgotpasword &&
                    <div className={'flex flex-col w-full flex justify-start items-center'}><h5
                        className={'text-[#FF4343] text-center select-none mt-[41px] nunitoregular text-[40px]'}>
                        Forgot Password?
                    </h5>
                        <h5 className={'my-[70px] w-[350px] text-center md:w-[500px] lg:w-[400px] xl:w-[772px] select-none cursor-pointer text-[#2B2F42] text-[16px] nunitosbold'}>
                            Please create your new password below and re-enter it to confirm. Make sure to choose a secure password and keep this information safe.
                        </h5>

                        <div className={'flex flex-col max-w-[1800px] w-full gap-[22px] px-[5vw] xl:px-[10vw]'}>
                            <div className={'mt-[54px] gap-[33px] flex flex-col w-full '}>
                                <div ref={passwordref} className={'flex w-full flex-col gap-[3px]'}>
                                    <h5 className={'nunitosbold select-none text-[#2B2F42] text-[22px]'}>
                                        New Password
                                    </h5>
                                    <div
                                        className={'w-full relative  h-[46px] flex justify-start items-center border-[1px] border-[#ADADAD] rounded-[3px]'}>
                                        <input placeholder={'Please enter new password'}
                                               className={'outline-none h-full border-none w-full flex items-center justify-center h-1/2 py-3 p-4 placeholder-[#B0B0B0] nunitoregular'}
                                               type={regist.newpassword["1"] ? "password" : "text"}/>
                                        <div onClick={() => {
                                            setRegist(prevState => ({
                                                ...prevState,
                                                newpassword: {
                                                    ...prevState.newpassword,
                                                    1: !regist.newpassword["1"],
                                                },
                                            }));
                                        }} className={'absolute select-none top-3 cursor-pointer right-3'}>
                                            {regist.newpassword["1"] ? <div className={'w-[20px] h-[20px]'}>
                                                    <svg className={'w-[20px] h-[20px]'} width="800px" height="800px"
                                                         viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                        <path
                                                            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>
                                                </div> :
                                                <div className={'w-[20px] h-[20px] flex justify-center items-center'}>
                                                    <svg className={'w-[20px] h-[20px]'} width="800px" height="800px"
                                                         viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>
                                                </div>

                                            }


                                        </div>
                                    </div>
                                </div>
                                <div ref={passwordref} className={'flex w-full flex-col gap-[3px]'}>
                                    <h5 className={'nunitosbold select-none text-[#2B2F42] text-[22px]'}>
                                        Confirm Password
                                    </h5>
                                    <div
                                        className={'w-full relative  h-[46px] flex justify-start items-center border-[1px] border-[#ADADAD] rounded-[3px]'}>
                                        <input placeholder={'Please confirm password'}
                                               className={'outline-none w-full  h-full border-none flex items-center justify-center h-1/2 py-3 p-4 placeholder-[#B0B0B0] nunitoregular'}
                                               type={regist.passwordvisible ? "password" : "text"}/>
                                        <div onClick={() => {
                                            setRegist({...regist, passwordvisible: !regist.passwordvisible})
                                        }} className={'absolute select-none top-3 cursor-pointer right-3'}>
                                            {regist.passwordvisible ? <div className={'w-[20px] h-[20px]'}>
                                                    <svg className={'w-[20px] h-[20px]'} width="800px" height="800px"
                                                         viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                        <path
                                                            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>
                                                </div> :
                                                <div className={'w-[20px] h-[20px] flex justify-center items-center'}>
                                                    <svg className={'w-[20px] h-[20px]'} width="800px" height="800px"
                                                         viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                                                            stroke="#000000" stroke-width="2" stroke-linecap="round"
                                                            stroke-linejoin="round"/>
                                                    </svg>
                                                </div>

                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => {setRegist({...regist,passwordsection: 3})}}
                                className={'w-full cursor-pointer h-[60px] 2xl:h-[79px] mt-6 bg-[#FE0000] flex justify-center items-center rounded-[40px]'}>
                                <p className={'nunitomedium select-none text-white text-[22px]'}>
                                    Submit
                                </p>
                            </div>
                        </div>


                    </div>}
                {regist.passwordsection === 3 && regist.forgotpasword &&
                    <div className={'flex flex-col mt-[120px] w-full flex justify-start items-center'}>
                        <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="31" cy="31" r="31" fill="#B7DF4B"/>
                            <path
                                d="M14.3928 35.4376L19.7168 40.7289C21.6881 42.688 24.8786 42.6637 26.8197 40.6747L47.6071 19.375"
                                stroke="#FFEBE9" stroke-width="8" stroke-linecap="round"/>
                        </svg>

                        <h5
                            className={'text-[#FF4343] text-center mt-[30px] select-none  nunitoregular text-[40px]'}>
                            Password Updated!
                        </h5>
                        <h5 className={'my-[70px] w-[350px] text-center md:w-[500px] lg:w-[400px] xl:w-[772px] select-none cursor-pointer text-[#2B2F42] text-[22px] nunitosbold'}>
                            Your Password Has Been Updated!
                        </h5>

                        <div className={'flex flex-col max-w-[1800px] w-full gap-[22px] px-[5vw] xl:px-[10vw]'}>

                            <div
                                onClick={() => {setRegist({...regist,forgotpasword: !regist.forgotpasword, passwordsection: 0})}}
                                className={'w-full cursor-pointer h-[60px] mt-8 2xl:h-[79px] bg-[#FE0000] flex justify-center items-center rounded-[40px]'}>
                                <p className={'nunitomedium select-none text-white text-[22px]'}>
                                    Login
                                </p>
                            </div>


                        </div>


                    </div>
                }
            </div>
        </div>
    );
};

export default RegisterMain;
