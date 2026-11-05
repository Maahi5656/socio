import Image from "next/image";

import foodDonation from '../../../public/images/food-donation.jpg'
import plantation from '../../../public/images/plantation.jpg'
import winterClothes from '../../../public/images/winter-clothes-distribution.jpg'

const Activities = () => {
    return (
        <section className='relative top-[76px] py-[45px]'>
            <div className='relative max-w-7xl mx-auto px-4'>
                <h2 className='font-bold text-2xl mb-5 text-center'>Our Community In Action</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5'>
                    <div className="md:px-4">
                        <Image className="w-full rounded-2xl" src={foodDonation} alt="food-donation" />
                    </div>
                    <div>
                        <Image className="w-full rounded-2xl" src={plantation} alt="plantation" />
                    </div>
                    <div>
                        <Image className="w-full rounded-2xl" src={winterClothes} alt="winter-clothes" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;