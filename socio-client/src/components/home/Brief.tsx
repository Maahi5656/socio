import Link from "next/link";
import Image from "next/image";

import community from '../../../public/images/community.png'
import heart from '../../../public/images/heart.png'
import society from '../../../public/images/society.png'

const Brief = () => {
    return (
        <section className='relative top-[76px] py-[45px]'>
            <div className='relative flex gap-2.5 justify-between max-w-7xl mx-auto md:px-4 sm:px-3'>
                <div className="flex items-center gap-1.5">
                    <Image className="rounded-full" width={86} height={80} src={community} alt="" />
                    <h2>
                        <b className="block font-bold text-[#747678] text-[18px]">Community Driven</b>
                        <span className="font-medium text-[#979A9D] text-[18px]">Be part of something</span>
                    </h2>
                </div>
                <div className="flex items-center gap-1.5">
                    <Image className="rounded-full" width={86} height={80} src={heart} alt="" />
                    <h2>
                        <b className="block font-bold text-[#747678] text-[18px]">Community Driven</b>
                        <span className="font-medium text-[#979A9D] text-[18px]">Be part of something</span>
                    </h2>            
                </div>
                <div className="flex items-center gap-1.5">
                    <Image className="rounded-full" width={86} height={80} src={society} alt="" />
                    <h2>
                        <b className="block font-bold text-[#747678] text-[18px]">Community Driven</b>
                        <span className="font-medium text-[#979A9D] text-[18px]">Be part of something</span>
                    </h2>
                </div> 
            </div>  
        </section>
    );
};

export default Brief;