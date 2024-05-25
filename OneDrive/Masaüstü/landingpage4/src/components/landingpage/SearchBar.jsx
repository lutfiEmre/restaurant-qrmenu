import React from 'react';

const SearchBar = () => {
    return (
        <div className={'mt-[59px] flex justify-center  px-[25px] w-full xl:px-[273px]'}>
            <div
                className={'xl:w-fit flex items-center sm:gap-8 md:gap-0 gap-6 lg:min-w-[950px] w-full md:flex-row sm:min-w-[550px] flex-col  px-[18px] py-[30px] sm::py-[15px] md:h-[50px] bg-white bg-opacity-[35%] rounded-[30px]'}>
                <div className={'flex flex-col justify-center sm:flex-row gap-6 w-full items-center  h-full'}>

                    <div className={'flex items-center flex-row w-fit lg:mr-[100px] -ml-1 '}>
                        <svg className={'absolute'} width="23" height="22" viewBox="0 0 23 22" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15 14L21.5 20.5M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                                stroke="#E30019" stroke-width="2"/>
                        </svg>

                        <input placeholder={'Search Jobs or Company'}
                               className={'outline-none border-none w-fit sm:w-[250px] pl-10 bg-transparent font-thin placeholder:text-[#E30019] text-[16px] md:text-[14px]'}
                               type="text"/>
                    </div>
                    <div className={'w-[1px] h-full md:flex hidden bg-[#E30019] mx-6 lg:mx-12 bg-opacity-30'}></div>
                    <div className={'flex flex-row items-center sm:mr-6 w-fit '}>
                        <svg className={'absolute'} width="18" height="21" viewBox="0 0 18 21" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.79066 0C6.46002 0.00255948 4.22556 0.929537 2.57755 2.57755C0.929537 4.22556 0.00255948 6.46002 0 8.79066C0 13.4339 7.38415 19.808 8.22278 20.52L8.79066 21L9.35853 20.52C10.1972 19.808 17.5813 13.4339 17.5813 8.79066C17.5788 6.46002 16.6518 4.22556 15.0038 2.57755C13.3558 0.929537 11.1213 0.00255948 8.79066 0ZM8.79066 13.186C7.92134 13.186 7.07155 12.9282 6.34874 12.4452C5.62594 11.9623 5.06257 11.2758 4.7299 10.4727C4.39723 9.66953 4.31019 8.78578 4.47978 7.93317C4.64938 7.08056 5.06799 6.29739 5.68269 5.68269C6.29739 5.06799 7.08056 4.64938 7.93317 4.47978C8.78578 4.31019 9.66953 4.39723 10.4727 4.7299C11.2758 5.06257 11.9623 5.62594 12.4452 6.34874C12.9282 7.07155 13.186 7.92134 13.186 8.79066C13.1846 9.95594 12.7211 11.0731 11.8971 11.8971C11.0731 12.7211 9.95594 13.1846 8.79066 13.186Z"
                                fill="#E30019"/>
                            <path
                                d="M8.79052 11.4277C10.247 11.4277 11.4277 10.247 11.4277 8.79052C11.4277 7.33403 10.247 6.15332 8.79052 6.15332C7.33403 6.15332 6.15332 7.33403 6.15332 8.79052C6.15332 10.247 7.33403 11.4277 8.79052 11.4277Z"
                                fill="#E30019"/>
                        </svg>


                        <input placeholder={'City / Country'}
                               className={'outline-none border-none active:outline-none active-border-none w-fit sm:w-[150px] md:w-[250px] pl-8 bg-transparent font-thin placeholder:text-[#E30019] text-[16px] md:text-[14px]'}
                               type="text"/>
                    </div>
                </div>
                <div
                    className={` h-[60px] min-w-[100px] justify-center md:h-[35px] cursor-pointer flex items-center py-[8px]  rounded-[30px] bg-[#E30019] bg-opacity-60`}>
                    <h5 className={'text-white select-none md:text-base text-xl font-normal'}>
                        Search
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
