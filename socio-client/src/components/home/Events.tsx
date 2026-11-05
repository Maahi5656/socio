import Link from "next/link"

import { Badge } from "@/components/ui/badge"
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
    
    const threeLatestEvents = events?.sort((a,b)=>(
        new Date(b.event_date).getTime() - new Date(a.event_date).getTime()
    )).slice(0,3);

    return (
        <>
            {
                events?.length > 0 && (
                    <section className="relative top-[76px] py-[45px]">
                        <div className="relative max-w-7xl mx-auto px-4">
                            <h2 className="font-bold text-2xl mb-5 text-center">
                              Recent Upcoming Events
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                              {
                                threeLatestEvents.map((event) => (
                                <Card key={event._id} className="relative mx-auto w-full max-w-full pt-0 overflow-hidden">
                                  <div className="relative">
                                    <div className="absolute inset-0 z-10" />
                                        <img src={event.event_image} alt={event.event_title} className="aspect-video w-full object-cover" />
                                        {/* <div className="brightness-60 grayscale dark:brightness-40"></div> */}
                                    </div>
                                    <CardHeader>
                                        <CardTitle>
                                          {event.event_title}
                                        </CardTitle>
                                        <CardDescription>
                                          {event.event_description}
                                        </CardDescription>
                                        <CardDescription>
                                          <Link href={`/event/${event._id}`} className="block text-white text-center py-1.5 my-1 bg-[#019241] w-full rounded">
                                            View Event
                                          </Link>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                              ))}
                            </div>
                      </div>
                    </section>
                )
            }
        </>
    );
};

export default Events;