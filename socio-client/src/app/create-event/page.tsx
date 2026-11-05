import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { headers } from 'next/headers';
import { IEvent } from '@/lib/types/event'

import EventForm from "@/components/EventForm";

// import { IUser } from "@/lib/types/user"

import login from '../../../public/images/login-image.png'


const CreateEvent = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/login");
    }

    const user = session?.user;

    console.log("User", user);

    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <div className='relative flex justify-start items-start gap-5 max-w-7xl mx-auto md:px-4 sm:px-3'>
                <Image className="w-full rounded" width={450} src={login} alt="image" />
                <div className="w-full">
                    <h2 className="font-bold text-2xl text-[#636467] mb-0.5">Create A New Event</h2>
                    <p className="font-medium text-[#636467] text-[14px] mb-0.5">Share An Event To Help Our Community</p> 
                    <br />
                    <EventForm user={user} />
                </div>
            </div>
        </section>
    );
};

export default CreateEvent;