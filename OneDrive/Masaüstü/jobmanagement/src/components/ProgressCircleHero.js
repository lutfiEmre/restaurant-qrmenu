import { ProgressCircle } from '@tremor/react';
const progress = 67;
export const ProgressCircleHero = () => (
    <div className="mx-auto w-[200px] h-[200px] grid grid-cols-1 gap-12">
        <div className="flex justify-center w-full h-full">
            <ProgressCircle className={'!w-[230px]'} strokeWidth={13} color={'red'} variant={"default"} value={progress} size={"xl"}>
                <span className="text-sm !w-[70px] !h-[70px] rounded-full text-[#F9F9F9] bg-[#FE0000] bg-opacity-70 flex justify-center items-center nunitomedium text-[22px]">
                    {progress}%
                </span>

            </ProgressCircle>
        </div>
    </div>
);