import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { IEvent } from '@/lib/types/event'

const Events = async() => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
        cache: 'no-cache'
    })
    const events: IEvent[] = await response.json();

    return (
        <>
            <section className='relative top-[76px] py-[50px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/section-banner.png')" }}>
                <div className='relative max-w-7xl mx-auto px-4'>
                    <h2 className='font-bold text-[#D1DCD5] text-[45px] mb-4.5 leading-none'>Our Events</h2>
                    <p className='font-bold text-[#D1DCD5] text-[20px] mb-4'>Join upcoming community events near you</p>
                </div>
            </section>
            <section className={`relative top-[76px] py-[45px] ${events?.length === 0 ? "h-[calc(100vh-401px)]": ""}`}>
                <div className='relative max-w-7xl mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5'>
                    {   
                        events?.length > 0 ? events.map((event, index)=>{
                            
                            return ( 
                                <Card key={event._id} className="relative mx-auto w-full max-w-full pt-0">
                                    <div className="absolute inset-0 z-30 aspect-video" />
                                    <img src={event.event_image} alt={event.event_title} className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                                    <CardHeader>
                                        <CardTitle>{ event.event_title }</CardTitle>
                                        <CardDescription>
                                          {
                                            event.event_description
                                          }
                                        </CardDescription>
                                        <CardDescription>
                                            <Link href={`/events/${event._id}`} className="block text-white text-center py-1.5 my-1 bg-[#019241] w-full rounded">View Event</Link>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>    
                            )
                        })  : <>
                            <p>No Events Yet. Will Be Organized Soon!</p>
                            <b>Stay Tuned</b>
                        </>   
                    }
                    </div>
                </div>
            </section>        
        </>

    );
};

export default Events;