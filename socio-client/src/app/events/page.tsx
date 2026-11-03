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
                <div className='relative max-w-7xl mx-auto'>
                    <h2 className='font-bold text-[#D1DCD5] text-[45px] mb-4.5 leading-none'>Our Events</h2>
                    <p className='font-bold text-[#D1DCD5] text-[20px] mb-4'>Join upcoming community events near you</p>
                </div>
            </section>
            <section className='relative top-[76px] py-[45px]'>
                <div className='relative max-w-7xl mx-auto'>
                    <div className='grid grid-cols-6 gap-4'>
                        {
                            events ? events.map((event)=>{
                                return (
                                    <Card key={event._id} className="relative mx-auto w-full max-w-full pt-0">
                                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                        <img src={event.event_image} alt={event.event_title} className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                                        <CardHeader>
                                            <CardTitle>{ event.event_title }</CardTitle>
                                            <CardDescription>
                                              {
                                                event.event_description
                                              }
                                            </CardDescription>
                                            <CardDescription>
                                                <Link href={`/events/${event._id}`} className="block text-white text-center py-1.5 my-1 bg-[#000] w-full rounded">View Event</Link>
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>                                     
                                )
                            })  : <>
                                <p>No Events Found</p>
                            </>
                        }
                        {/* <Card className="relative mx-auto w-full max-w-full pt-0">
                          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img src="https://avatar.vercel.sh/shadcn1" alt="Event cover" className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                            <CardHeader>
                                <CardTitle>Design systems meetup</CardTitle>
                                <CardDescription>
                                  A practical talk on component APIs, accessibility, and shipping
                                  faster.
                                </CardDescription>
                                <CardDescription>
                                    <Button className="w-full">View Event</Button>
                                </CardDescription>
                            </CardHeader>
                        </Card>     */}
                        {/* <Card className="relative mx-auto w-full max-w-full pt-0">
                          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img src="https://avatar.vercel.sh/shadcn1" alt="Event cover" className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                            <CardHeader>
                                <CardTitle>Design systems meetup</CardTitle>
                                <CardDescription>
                                  A practical talk on component APIs, accessibility, and shipping
                                  faster.
                                </CardDescription>
                                <CardDescription>
                                    <Button className="w-full">View Event</Button>
                                </CardDescription>
                            </CardHeader>
                        </Card> */}
                        {/* <Card className="relative mx-auto w-full max-w-full pt-0">
                          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img src="https://avatar.vercel.sh/shadcn1" alt="Event cover" className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                            <CardHeader>
                                <CardTitle>Design systems meetup</CardTitle>
                                <CardDescription>
                                  A practical talk on component APIs, accessibility, and shipping
                                  faster.
                                </CardDescription>
                                <CardDescription>
                                    <Button className="w-full">View Event</Button>
                                </CardDescription>
                            </CardHeader>
                        </Card>                    */}
                    </div>
                </div>
            </section>        
        </>

    );
};

export default Events;