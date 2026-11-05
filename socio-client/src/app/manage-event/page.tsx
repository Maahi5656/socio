import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import Image from 'next/image';

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

import { getTokenFromServer } from '@/lib/getTokenFromServer';

import { IEvent } from '@/lib/types/event'

import EditEventDialog from '@/components/EditEventDialog';
import DeleteEventDialog from '@/components/DeleteEventDialog';

const ManageEvent = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const token = await getTokenFromServer();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/manage-event/${user?.email}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const events: IEvent[] = await response.json();

    console.log("Events", events)

    return (
        <section className={`relative top-[76px] py-[50px] ${events?.length === 0 ? "h-[calc(100vh-192px)]" : ""}`}>
            <div className='relative max-w-7xl mx-auto md:px-4 sm:px-3'>
                <h2 className="font-bold text-2xl text-[#636467] mb-0.5">Manage Your Events</h2>
                <p className="font-medium text-[#636467] text-[14px] mb-0.5">Update or Delete The Event You Created</p>
                <br />
                <div className="flex w-full flex-col gap-6">
                    {
                        events.length > 0 ? events.map((event: IEvent)=>{
                            return (
                                <Item variant="outline" key={event._id}>
                                    <ItemMedia variant="icon">
                                    </ItemMedia>
                                    <ItemContent>
                                        <div className='flex justify-between items-center gap-4'>
                                            <div className='flex items-center gap-2.5'>
                                                <div>
                                                    <Image src={event.event_image} alt={event.event_title} width={250} height={250} className='rounded' />
                                                </div>
                                                <div>
                                                    <h2 className='text-[24px] font-extrabold text-[#6C6E71] mb-1'>{event.event_title}</h2>
                                                    <p className='text-[18px] font-semibold text-[#A1A5AA] mb-1'>{event.event_location}</p>
                                                    <p className='text-[18px] font-semibold text-[#A1A5AA] mb-1'>{event.event_date}</p>
                                                </div>
                                            </div>
                                            <div className='text-right'>
                                                <EditEventDialog event={event} />
                                                <DeleteEventDialog id={event._id} />
                                                {/* <button className='text-[18px] font-semibold bg-blue-600 text-white py-2 px-4 mx-1.5 cursor-pointer rounded'>Update</button> */}
                                                {/* <button >Delete</button> */}
                                            </div>
                                        </div>
                                        {/* <ItemTitle>Default Size</ItemTitle>
                                        <ItemDescription>
                                          The standard size for most use cases.
                                        </ItemDescription> */}
                                    </ItemContent>
                                </Item>
                            )
                        }) : <>
                            <p>No Events Available...</p>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageEvent;