"use client"

import Image from "next/image";

import { toast } from "@/components/ui/toast"
import { authClient } from "@/lib/auth-client"
import { IEvent } from '@/lib/types/event'

const EventBookingForm = ({event}:{event: IEvent}) => {

    const { _id, event_image, event_title, event_location, event_type, event_date, event_description } = event;

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleEventBooking=async(e:React.SubmitEvent<HTMLElement>)=>{
        e.preventDefault();

        const data = {
            username: user?.name,
            email: user?.email,
            event_id: _id,
            event_image: event_image,
            event_title: event_title,
            event_location: event_location,
            event_type: event_type,
            event_date: event_date,
            event_description: event_description,
            event_booking_date: new Date()
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/join-event`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        const eventBookingData = await response.json();
        
        if(eventBookingData){
            toast.add({
              type: "success",
              description: "You have successfully joined the event",
              priority: "high"
            })
        }
    }

    return (
        <div>
            <form onSubmit={handleEventBooking}>
                <div className='relative flex justify-start items-center gap-5 max-w-7xl mx-auto'>
                    <Image className="rounded" width={450} height={450} src={event.event_image} alt="image" />
                    <div>
                        <h2 className="font-bold text-[16px] text-[#5E6061] mb-1.5">{event.event_title}</h2>
                        <div className="flex items-center gap-2.5 mb-2">
                            <span className="inline-block font-medium text-[14px] py-1 px-2.5 bg-[#26BA61] text-[#fff] rounded-2xl">{ event.event_type }</span>
                            <span className="inline-block font-medium text-[14px] text-[#9DA0A4]">{event.event_location}</span>
                        </div>
                        <span className="inline-block font-medium text-[14px] text-[#9DA0A4]">{ event.event_date }</span>
                        <br />
                        <h2 className="font-bold text-[14px] text-[#5E6061] mb-1.5">About This Event</h2>
                        <p className="block font-medium text-[14px] text-[#9DA0A4] mb-1.5">{ event.event_description }</p>
                        <button type="submit" className="inline-block font-medium text-[14px] py-2 px-2.5 bg-[#26BA61] border border-[#26BA61] text-[#fff] cursor-pointer rounded">Join Event</button>
                    </div>
                </div>
            </form>            
        </div>
    );
};

export default EventBookingForm;