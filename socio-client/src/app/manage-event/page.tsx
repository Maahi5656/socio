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

import { IEvent } from '@/lib/types/event'

const ManageEvent = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/manage-event/${user?.email}`);
    const events: IEvent[] = await response.json();

    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <div className='relative max-w-7xl mx-auto'>
                <h2 className="font-bold text-2xl text-[#636467] mb-0.5">Manage Your Events</h2>
                <p className="font-medium text-[#636467] text-[14px] mb-0.5">Update or Delete The Event You Created</p>
                <br />
                <div className="flex w-full flex-col gap-6">
                    {
                        events.map((event: IEvent)=>{
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
                                                <button className='text-[18px] font-semibold bg-blue-600 text-white py-2 px-4 mx-1.5 cursor-pointer rounded'>Update</button>
                                                <button className='text-[18px] font-semibold bg-red-600 text-white py-2 px-4 mx-1.5 cursor-pointer rounded'>Delete</button>
                                            </div>
                                        </div>
                                        {/* <ItemTitle>Default Size</ItemTitle>
                                        <ItemDescription>
                                          The standard size for most use cases.
                                        </ItemDescription> */}
                                    </ItemContent>
                                </Item>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageEvent;