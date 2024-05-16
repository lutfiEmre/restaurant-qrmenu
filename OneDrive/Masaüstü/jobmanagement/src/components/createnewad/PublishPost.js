import React from 'react';
import { DatePicker, DatePickerValue } from '@tremor/react';



const PublishPost = () => {
    return (
        <div className={'flex flex-col w-full justify-between items-center lg:items-start lg:justify-start 2xl:flex-row lg:gap-[100px] 2xl:gap-[250px]'}>
            <div
                className={'flex flex-col xad justify-center items-center lg:justify-start lg:items-start w-full gap-[17px]'}>
                <div className={'flex flex-col lg:items-start items-center w-full gap-[7px]'}>
                    <h3 className={'nunitomedium text-[22px] text-[#2B2F42]'}>
                        Publish Post
                    </h3>
                    <h4 className={'nunitomedium text-[14px] text-black'}>
                        Copy and paste this code into your website. <span
                        className={'text-[#02A0FC]'}>Learn more...</span>
                    </h4>
                </div>
                <div className={'flex flex-col lg:items-start items-center'}>
                    <div
                        className={'w-[350px] lg:w-[500px] 2xl:w-[728px] flex flex-row h-[48px] shadowe6 rounded-[10px]'}>
                        <div className={'px-[18px] py-[12px]'}>
                            <svg className={'select-none'} width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_19_2705" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0"
                                      y="0"
                                      width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_19_2705)">
                                    <path
                                        d="M11 17H7C5.61667 17 4.4375 16.5125 3.4625 15.5375C2.4875 14.5625 2 13.3833 2 12C2 10.6167 2.4875 9.4375 3.4625 8.4625C4.4375 7.4875 5.61667 7 7 7H11V9H7C6.16667 9 5.45833 9.29167 4.875 9.875C4.29167 10.4583 4 11.1667 4 12C4 12.8333 4.29167 13.5417 4.875 14.125C5.45833 14.7083 6.16667 15 7 15H11V17ZM8 13V11H16V13H8ZM13 17V15H17C17.8333 15 18.5417 14.7083 19.125 14.125C19.7083 13.5417 20 12.8333 20 12C20 11.1667 19.7083 10.4583 19.125 9.875C18.5417 9.29167 17.8333 9 17 9H13V7H17C18.3833 7 19.5625 7.4875 20.5375 8.4625C21.5125 9.4375 22 10.6167 22 12C22 13.3833 21.5125 14.5625 20.5375 15.5375C19.5625 16.5125 18.3833 17 17 17H13Z"
                                        fill="#2B2F42"/>
                                </g>
                            </svg>
                        </div>
                        <input
                            className={'outline-none border-none rounded-[10px] appearance-none active:outline-none bg-transparent bg-none w-full'}
                            type="text"/>
                    </div>
                    <div
                        className={'mt-[37px] flex-wrap lg:items-start items-center lg:justify-start justify-center flex flex-row gap-[20px]'}>
                        <div
                            className={'w-[204px] cursor-pointer h-[243px] bg-[#CCF8FE] flex flex-col justify-center items-center gap-[25px] rounded-[32px]'}>
                            <h5 className={'nunitomedium select-none text-[22px] text-[#2B2F42]'}>
                                Linkedin
                            </h5>
                            <svg className={'w-[120px] h-[120px]'} width="120" height="120" viewBox="0 0 120 120"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_19_2669)">
                                    <path
                                        d="M60 120C93.1371 120 120 93.1371 120 60C120 26.8629 93.1371 0 60 0C26.8629 0 0 26.8629 0 60C0 93.1371 26.8629 120 60 120Z"
                                        fill="#007AB9"/>
                                    <path
                                        d="M95.8986 65.1907V89.9274H81.557V66.8485C81.557 61.0537 79.4863 57.0963 74.2936 57.0963C70.3309 57.0963 67.9768 59.7606 66.9372 62.3403C66.5596 63.2623 66.4623 64.5426 66.4623 65.8356V89.9263H52.1195C52.1195 89.9263 52.3121 50.8383 52.1195 46.7922H66.4634V52.9047C66.4345 52.9528 66.3938 52.9999 66.3682 53.0459H66.4634V52.9047C68.3693 49.972 71.7684 45.7793 79.389 45.7793C88.8246 45.7793 95.8986 51.9442 95.8986 65.1907ZM37.1158 26C32.2097 26 29 29.2204 29 33.4516C29 37.5929 32.1167 40.9064 36.9276 40.9064H37.0206C42.0229 40.9064 45.1332 37.5929 45.1332 33.4516C45.038 29.2204 42.0229 26 37.1158 26ZM29.8524 89.9274H44.1898V46.7922H29.8524V89.9274Z"
                                        fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_19_2669">
                                        <rect width="120" height="120" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div
                            className={'w-[204px] cursor-pointer h-[243px] bg-[#C7F3D1] flex flex-col justify-center items-center gap-[25px] rounded-[32px]'}>
                            <h5 className={'nunitomedium select-none text-[22px] text-[#2B2F42]'}>
                                Xing
                            </h5>

                            <svg className={'w-[120px] h-[120px]'} width="120" height="120" viewBox="0 0 120 120"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="60" cy="60" r="60" fill="white"/>
                                <g clip-path="url(#clip0_19_2651)">
                                    <path
                                        d="M27.4159 33.8994L37.2853 51.6671L22.5 77.8721H40.1482L54.8204 51.6671L44.951 33.8994H27.4159Z"
                                        fill="#0698A0"/>
                                    <path
                                        d="M79.8896 17.5L51.3926 68.6178L69.7753 102.5H87.6683L68.9654 68.6178L97.5001 17.5H79.8896Z"
                                        fill="#B7DF4B"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_19_2651">
                                        <rect width="75" height="85" fill="white" transform="translate(22.5 17.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>


                        </div>
                        <div
                            className={'w-[204px] cursor-pointer h-[243px] bg-[#FFEAEA] flex flex-col justify-center items-center gap-[25px] rounded-[32px]'}>
                            <h5 className={'nunitomedium select-none text-[22px] text-[#2B2F42]'}>
                                Google
                            </h5>

                            <svg className={'w-[120px] h-[120px]'} width="120" height="120" viewBox="0 0 120 120"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="60" cy="60" r="60" fill="white"/>
                                <path
                                    d="M112.505 61.1659C112.505 56.8492 112.148 53.6992 111.374 50.4326H61.0767V69.9157H90.6002C90.0052 74.7575 86.7909 82.0492 79.6479 86.949L79.5478 87.6012L95.451 99.6748L96.5528 99.7826C106.672 90.6242 112.505 77.1491 112.505 61.1659Z"
                                    fill="#4285F4"/>
                                <path
                                    d="M61.0734 112.5C75.5374 112.5 87.6801 107.833 96.5494 99.7831L79.6446 86.9493C75.1209 90.0411 69.0494 92.1994 61.0734 92.1994C46.9069 92.1994 34.8832 83.0413 30.5971 70.3828L29.9689 70.4351L13.4326 82.9769L13.2163 83.5661C22.0257 100.716 40.1209 112.5 61.0734 112.5Z"
                                    fill="#34A853"/>
                                <path
                                    d="M30.6004 70.3834C29.4694 67.1167 28.8149 63.6165 28.8149 60C28.8149 56.3831 29.4694 52.8832 30.5409 49.6166L30.5109 48.9209L13.7673 36.1777L13.2195 36.4331C9.58872 43.5499 7.50537 51.5417 7.50537 60C7.50537 68.4583 9.58872 76.4497 13.2195 83.5665L30.6004 70.3834Z"
                                    fill="#FBBC05"/>
                                <path
                                    d="M61.0737 28.2999C71.1331 28.2999 77.9186 32.5582 81.7879 36.1168L96.9069 21.65C87.6214 13.1917 75.5378 8 61.0737 8C40.1211 8 22.0258 19.7832 13.2163 36.9331L30.5377 50.1166C34.8833 37.4583 46.9071 28.2999 61.0737 28.2999Z"
                                    fill="#EB4335"/>
                            </svg>


                        </div>

                    </div>
                    <div className={'mt-[52px] gap-[50px] flex flex-col pl-[8px]'}>
                        <div className="checkbox-wrapper-15 gap-[18px] items-center flex flex-row a15">
                            <input className={'inp-cbx'} id="cbx-30" type="checkbox" style={{display: "none"}}/>
                            <label className="cbx !border-yellow-50" htmlFor="cbx-30">
                                <span>
                                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                                        <polyline points="1 5 4 8 11 1"></polyline>
                                    </svg>
                                </span>
                            </label>
                            <h5 className={'text-[14px] nunitomedium text-[#2B2F42]'}>
                                I’ve read and agree with <span className={'text-[#02A0FC]'}>Opti Recruits</span> terms
                                of service and our privecy policy
                            </h5>
                        </div>
                        <div className={'flex flex-col gap-[17px]'}>
                            <h5 className={'text-[15px] nunitomedium text-black'}>Choose date share later;</h5>
                            <div className={'flex flex-row flex-wrap gap-[32px]'}>
                                <div className={' w-[350px] sm:w-[500px] !h-[50px] datew'}>
                                    <DatePicker placeholder={"Choose Date"}/>
                                </div>
                                <div className={'flex f flex-row gap-[20px] items-center'}>
                                    <div
                                        className={'w-[130px] h-[50px] cursor-pointer flex justify-center items-center     bg-[#FE0000] rounded-[10px]'}>
                                        <h5 className={'nunitoregular select-none text-[14px] text-white'}>
                                            Publish
                                        </h5>
                                    </div>
                                    <div
                                        className={'w-[130px] h-[50px] cursor-pointer flex justify-center items-center     bg-none rounded-[10px]'}>
                                        <h5 className={'nunitoregular select-none text-[14px] text-[#2B2F42]'}>
                                            Cancel
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={'mt-[60px] w-[376px] min-w-[376px] min-h-full py-[50px] shadowe7 rounded-[20px] pt-[16px] flex flex-col justify-start items-center'}>
                <h5 className={'font-medium text-[22px] text-[#2B2F42]'}>
                    Preview
                </h5>
                <div className={'flex flex-col items-center justify-center mt-[27px] gap-[20px]'}>
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="60" cy="60" r="60" fill="white"/>
                        <g clip-path="url(#clip0_19_2689)">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M46.3062 68.0011C46.3062 64.4114 49.0205 61.5215 52.3922 61.5215C55.7639 61.5215 58.4783 64.4114 58.4783 68.0011V83.9508C58.4783 87.5404 55.7639 90.4304 52.3922 90.4304C49.0205 90.4304 46.3062 87.5404 46.3062 83.9508V68.0011Z"
                                  fill="#E01E5A" stroke="#E01E5A" stroke-width="0.790123" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M68.0008 73.6937C64.4111 73.6937 61.5212 70.9793 61.5212 67.6076C61.5212 64.2359 64.4111 61.5215 68.0008 61.5215H83.9506C87.5402 61.5215 90.4301 64.2359 90.4301 67.6076C90.4301 70.9793 87.5402 73.6937 83.9506 73.6937H68.0008Z"
                                  fill="#ECB22D" stroke="#ECB22D" stroke-width="0.790123" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M61.5212 36.0489C61.5212 32.4592 64.2356 29.5693 67.6073 29.5693C70.979 29.5693 73.6934 32.4592 73.6934 36.0489V51.9986C73.6934 55.5883 70.979 58.4782 67.6073 58.4782C64.2356 58.4782 61.5212 55.5883 61.5212 51.9986V36.0489Z"
                                  fill="#2FB67C" stroke="#2FB67C" stroke-width="0.790123" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M36.0489 58.4783C32.4592 58.4783 29.5693 55.7639 29.5693 52.3922C29.5693 49.0205 32.4592 46.3062 36.0489 46.3062H51.9986C55.5883 46.3062 58.4782 49.0205 58.4782 52.3922C58.4782 55.7639 55.5883 58.4783 51.9986 58.4783H36.0489Z"
                                  fill="#36C5F1" stroke="#36C5F1" stroke-width="0.790123" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M61.5213 84.3439C61.5195 85.1436 61.6758 85.9358 61.9811 86.675C62.2863 87.4141 62.7345 88.0857 63.3 88.6512C63.8655 89.2167 64.5371 89.6649 65.2763 89.9702C66.0154 90.2754 66.8076 90.4317 67.6073 90.43C70.979 90.43 73.6934 87.7156 73.6934 84.3439C73.6951 83.5442 73.5389 82.752 73.2336 82.0129C72.9284 81.2737 72.4801 80.6021 71.9147 80.0366C71.3492 79.4711 70.6776 79.0229 69.9384 78.7176C69.1992 78.4124 68.4071 78.2561 67.6073 78.2578H61.5213V84.3439Z"
                                  fill="#ECB22D" stroke="#ECB22D" stroke-width="0.790123" stroke-linecap="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M84.3441 58.4783H78.2581V52.3922C78.2581 49.0205 80.9725 46.3062 84.3441 46.3062C87.7158 46.3062 90.4302 49.0205 90.4302 52.3922C90.4302 55.7639 87.7158 58.4783 84.3441 58.4783Z"
                                  fill="#2FB67C" stroke="#2FB67C" stroke-width="0.790123" stroke-linecap="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M35.6554 61.5215H41.7415V67.6076C41.7415 70.9793 39.0271 73.6937 35.6554 73.6937C34.8557 73.6954 34.0635 73.5391 33.3244 73.2338C32.5852 72.9286 31.9136 72.4804 31.3481 71.9149C30.7826 71.3494 30.3344 70.6778 30.0292 69.9386C29.7239 69.1995 29.5676 68.4073 29.5693 67.6076C29.5693 64.2359 32.2837 61.5215 35.6554 61.5215Z"
                                  fill="#E01E5A" stroke="#E01E5A" stroke-width="0.790123" stroke-linecap="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M58.4783 35.6554V41.7415H52.3923C51.5925 41.7432 50.8004 41.587 50.0612 41.2817C49.322 40.9765 48.6504 40.5282 48.0849 39.9627C47.5195 39.3973 47.0712 38.7257 46.766 37.9865C46.4607 37.2473 46.3045 36.4551 46.3062 35.6554C46.3062 32.2837 49.0206 29.5693 52.3923 29.5693C53.192 29.5676 53.9841 29.7239 54.7233 30.0292C55.4625 30.3344 56.1341 30.7826 56.6996 31.3481C57.265 31.9136 57.7133 32.5852 58.0185 33.3244C58.3238 34.0635 58.48 34.8557 58.4783 35.6554Z"
                                  fill="#36C5F1" stroke="#36C5F1" stroke-width="0.790123" stroke-linecap="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_19_2689">
                                <rect width="61.6216" height="61.6216" fill="white"
                                      transform="translate(29.189 29.189)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <div className={'flex flex-col w-full justify-center items-center'}>
                        <h6 className={'nunitoregular text-[14px] text-black opacity-40'}>
                            Slack
                        </h6>
                        <div className={'flex flex-col'}>
                            <h6 className={'nunitomedium text-[22px] text-black'}>
                                UI/UX Designer
                            </h6>
                            <h6 className={'nunitomedium text-[14px] text-black opacity-40 '}>
                                London
                            </h6>
                            <h6 className={'nunitomedium mt-[11px] w-full text-[12px] text-black opacity-40 '}>
                                0-4 Years - 15-90 Employees
                            </h6>
                        </div>
                    </div>
                    <div className={'mt-[67px] flex flex-col gap-[20px]'}>
                        <div className={'flex gap-y-[10px] flex-row gap-[10px] flex-wrap max-w-[250px]'}>
                            <div
                                className={'px-[11px] bg-[#F0F0F0] flex justify-center items-center rounded-[6px] nunitoregular text-[10px] text-[#2B2F42] py-[5px]'}>
                                User Research
                            </div>
                            <div
                                className={'px-[11px] bg-[#F0F0F0] flex justify-center items-center rounded-[6px] nunitoregular text-[10px] text-[#2B2F42] py-[5px]'}>
                                wireframe
                            </div>
                            <div
                                className={'px-[11px] bg-[#F0F0F0] flex justify-center items-center rounded-[6px] nunitoregular text-[10px] text-[#2B2F42] py-[5px]'}>
                                Mockups
                            </div>
                            <div
                                className={'px-[11px] bg-[#F0F0F0] flex justify-center items-center rounded-[6px] nunitoregular text-[10px] text-[#2B2F42] py-[5px]'}>
                                Figma
                            </div>
                            <div
                                className={'px-[11px] bg-[#F0F0F0] flex justify-center items-center rounded-[6px] nunitoregular text-[10px] text-[#2B2F42] py-[5px]'}>
                                Adobe Xd
                            </div>

                        </div>
                        <div className={'flex gap-y-[10px] flex-row gap-[10px] flex-wrap max-w-[250px]'}>
                            <div
                                className={'px-[11px] bg-[#FED7FA] flex justify-center items-center rounded-[6px] nunitoregular text-[10px] text-[#2B2F42] py-[5px]'}>
                                User Research
                            </div>
                            <div
                                className={'px-[11px] bg-[#FFE5D3] flex justify-center items-center rounded-[6px] nunitoregular text-[10px] text-[#2B2F42] py-[5px]'}>
                                wireframe
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PublishPost;
