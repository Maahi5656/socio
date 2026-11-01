import React from 'react';


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


const Events = () => {
    return (
        <section className='relative top-[76px] py-[45px]'>
            <div className='relative max-w-7xl mx-auto'>
                <h2 className='font-bold text-2xl mb-5 text-center'>Recent Upcoming Events</h2>
                <div className='flex flex-row gap-3.5'>
                    <Card className="relative mx-auto w-full max-w-full pt-0">
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
                    </Card>
                    <Card className="relative mx-auto w-full max-w-full pt-0">
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
                    </Card>
                    <Card className="relative mx-auto w-full max-w-full pt-0">
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
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Events;