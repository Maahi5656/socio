import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IEvent } from '@/lib/types/event'
import EventBookingForm from "@/components/EventBookingForm";


const EventDetailsPage = async({ params }: { params: Promise<{ id: string }> }) => {
    
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`);

    if(!response.ok){
        notFound();
    }

    const event: IEvent = await response.json();

    // console.log("Event", event);
    
    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <EventBookingForm event={event} />
        </section>
    );
};

export default EventDetailsPage;