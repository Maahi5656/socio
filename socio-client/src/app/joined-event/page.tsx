import Image from 'next/image';

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { getTokenFromServer } from '@/lib/getTokenFromServer';
import { IEvent } from '@/lib/types/event'

import DeleteBookedEventDialog from '@/components/DeleteBookedEventDialog';

import connect from '../../../public/images/connect.jpg'

const JoinedEvent = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const token = await getTokenFromServer();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-events/${user?.email}`,{
        headers: {
            authorization: `Bearer ${token}`
        }        
    });

    const joinedEvents: IEvent[] = await response.json(); 

    return (
        <section className={`relative top-[76px] py-[50px] ${joinedEvents?.length === 0 ? "h-[calc(100vh-192px)]" : ""}`}>
            <div className='relative max-w-7xl mx-auto md:px-4 sm:px-3'>
                <h2 className="font-bold text-2xl text-[#636467] mb-0.5">Joined Events</h2>
                <p className="font-medium text-[#636467] text-[14px] mb-0.5">Stay Connected and Keep Supporting Your Community</p>
                <br />
                <div className='grid grid-cols-2 gap-4'>
                    <div className="flex w-full flex-col gap-6">
                        {
                            joinedEvents.length > 0 ? joinedEvents.map((event)=>{
                                return (
                                    <Item key={event._id} variant="outline">
                                        <ItemMedia variant="icon">
                                        </ItemMedia>
                                        <ItemContent>
                                            <div className='flex flex-row items-center w-full gap-3.5'>
                                                <div>
                                                    <Image className='rounded' src={event.event_image} alt='plantation' width={250} height={150} />
                                                </div>
                                                <div>
                                                    <ItemTitle>{ event.event_title }</ItemTitle>
                                                    <ItemTitle>{ event.event_location }</ItemTitle>
                                                    <ItemTitle>{ event.event_date }</ItemTitle>
                                                </div>
                                                <div className='text-right'>
                                                    <span className='bg-[#ACEDBE] text-green-700 py-2 px-3 rounded-2xl'>Joined</span>
                                                    <DeleteBookedEventDialog id={event._id} />
                                                </div>
                                            </div>
                                        </ItemContent>
                                    </Item>                                
                                )
                            }) : <>
                                <p>No Events Joined!</p>
                            </>
                        }
                    </div> 
                    <div>
                    {
                        joinedEvents.length > 0 && (
                            <Image src={connect} alt="Connect" width={450} height={450} />
                        )
                    }
                    </div>               
                </div>  

            </div>
        </section>
    );
};

export default JoinedEvent;