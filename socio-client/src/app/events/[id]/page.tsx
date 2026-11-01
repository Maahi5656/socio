import Image from "next/image";

import foodDonation from '../../../../public/images/food-donation.jpg'

const page = () => {
    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <div className='relative flex justify-start items-center gap-5 max-w-7xl mx-auto'>
                <Image className="rounded" width={450} src={foodDonation} alt="image" />
                <div>
                    <h2 className="font-bold text-[16px] text-[#5E6061] mb-1.5">Tree Plantation Drive</h2>
                    <div className="flex gap-2.5 mb-2">
                        <span className="inline-block font-medium text-[14px] py-2 px-2.5 bg-[#26BA61] text-[#fff]">Plantation</span>
                        <span className="inline-block font-medium text-[14px] text-[#9DA0A4]">Gulshan, Dhaka</span>
                    </div>
                    <span className="inline-block font-medium text-[14px] text-[#9DA0A4]">Date</span>
                    <br />
                    <h2 className="font-bold text-[14px] text-[#5E6061] mb-1.5">About This Event</h2>
                    <p className="inline-block font-medium text-[14px] text-[#9DA0A4] mb-1.5">Lets make our city greener! Join us for a tree plantation
drive in Gulshan area, Together we can build a cleaner
and healthier environment</p>
                    <button className="inline-block font-medium text-[14px] py-2 px-2.5 bg-[#26BA61] border border-[#26BA61] text-[#fff] cursor-pointer rounded">View Event</button>
                </div>
            </div>
        </section>
    );
};

export default page;