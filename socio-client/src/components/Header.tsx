"use client"

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

import NavButtons from "./NavbarButtons";

import logo from '../../public/images/logo.png'
import hamburgermenu from '../../public/images/hamburger.png'
import './Navbar.css'

const Header = () => {

    const { data: session } = authClient.useSession();

    const user = session?.user;

    console.log(user);

    function openNav(){
        const nav = document.getElementById("myNav")
        
        if(nav){
            nav.style.width = "100%";
        }
    }

    function closeNav(){
        const nav = document.getElementById("myNav")
        
        if(nav){
            nav.style.width = "0";
        }
    }

    return (
        <header className="fixed top-0 z-50 bg-[#FDFDFD] border-b border-border w-full">
            <nav className="navbar relative max-w-7xl mx-auto md:px-4 sm:px-3 py-3.5 flex justify-between items-center">
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
                            user ? (
                                <NavButtons />                           
                            ) : (
                                <>
                                    <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/login">Login</Link></li>
                                    <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/register">Signup</Link></li>                                
                                </>
                            )
                        }
                    </ul>
                </div>
                <div className="mobile-menu">
                    <span className='cursor-pointer' onClick={openNav}>
                        <Image src={hamburgermenu} alt="hamburger-menu" width={25} height={25} />
                    </span>
                    <div className="overlay" id="myNav">
                        <a href="javascript:void(0)" onClick={closeNav} className="closebtn">&times;</a>
                        <div className="overlay-content">
                            <Link onClick={closeNav} href="/">Home</Link>
                            <Link onClick={closeNav} href="#">About</Link>
                            <Link onClick={closeNav} href="/events">Upcoming Events</Link>
                            {
                                user ? (
                                    <NavButtons />                           
                                ) : (
                                    <>
                                        <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/login">Login</Link></li>
                                        <li className="mx-1.5"><Link className="font-bold text-[#798384] text-[16px] line-height-1.25" href="/register">Signup</Link></li>                                
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;