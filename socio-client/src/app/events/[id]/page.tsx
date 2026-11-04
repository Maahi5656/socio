import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { IEvent } from '@/lib/types/event'
import EventBookingForm from "@/components/EventBookingForm";
import { auth } from "@/lib/auth"
import { headers } from "next/headers";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

function formatDate(value:string){
    const [year, month, day] = value.split("-");
    return `${month}/${day}/${year}`
}

const EventDetailsPage = async({ params }: { params: Promise<{ id: string }> }) => {
    
    const { id } = await params;

    // get token from cookies
    const token = await getTokenFromServer();

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`,{
        headers: {
            authorization: `Bearer ${token}`
        },
    });

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