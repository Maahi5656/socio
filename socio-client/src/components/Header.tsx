"use client"

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

import logo from '../../public/images/logo.png'


const Header = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    console.log(user);

    return (
        <header className="fixed top-0 z-50 bg-[#FDFDFD] border-b border-border w-full">
            <nav className="relative max-w-7xl mx-auto py-3.5 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src={logo} className="w-12 h-10 pr-1.5" alt="Community-Connect" />
                    <h2 className="font-bold text-[16px] line-height-1.25">
                        <b className="text-[#65796F] leading-0.5">Community</b><br/> 
                        <b className="text-[#569B72] leading-0.5">Connect</b>
                    </h2>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/">Home</Link></li>
                        <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="">About Us</Link></li>
                        <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/events">Upcoming Events</Link></li>
                        {
                            user ? ( <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/create-event">Create Event</Link></li> ) : ""
                        }
                        {
                            !user ? (
                                <>
                                    <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/login">Login</Link></li>
                                    <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/register">Signup</Link></li>                                
                                </>
                            ) : ""
                        }
                        {
                            user ? (
                                <>
                                    <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="">Profile</Link></li>
                                </> 
                            ) : ""
                        }
                        
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;