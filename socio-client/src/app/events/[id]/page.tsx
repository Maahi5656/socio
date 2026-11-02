import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import foodDonation from '../../../../public/images/food-donation.jpg'
import { IEvent } from '@/lib/types/event'

const EventDetailsPage = async({params}:{params: Promise<{id: string}>}) => {
    
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);

    if(!response.ok){
        notFound();
    }

    const event: IEvent = await response.json();
    
    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <div className='relative flex justify-start items-center gap-5 max-w-7xl mx-auto'>
                <Image className="rounded" width={450} src={event.event_image} alt="image" />
                <div>
                    <h2 className="font-bold text-[16px] text-[#5E6061] mb-1.5">{event.event_title}</h2>
                    <div className="flex gap-2.5 mb-2">
                        <span className="inline-block font-medium text-[14px] py-2 px-2.5 bg-[#26BA61] text-[#fff]">{ event.event_type }</span>
                        <span className="inline-block font-medium text-[14px] text-[#9DA0A4]">{event.event_location}</span>
                    </div>
                    <span className="inline-block font-medium text-[14px] text-[#9DA0A4]">{ event.event_date }</span>
                    <br />
                    <h2 className="font-bold text-[14px] text-[#5E6061] mb-1.5">About This Event</h2>
                    <p className="inline-block font-medium text-[14px] text-[#9DA0A4] mb-1.5">{ event.event_description }</p>
                    <button className="inline-block font-medium text-[14px] py-2 px-2.5 bg-[#26BA61] border border-[#26BA61] text-[#fff] cursor-pointer rounded">Join Event</button>
                </div>
            </div>
        </section>
    );
};

export default EventDetailsPage;