"use client"

import Link from "next/link";
import Image from "next/image";

import logo from '../../public/images/logo.png'

const Footer = () => {
    return (
        <footer className='relative top-[76px] bg-[#103123] py-2.5 w-full'>
            <div className='relative flex justify-between gap-5 max-w-7xl mx-auto'>
                <div>
                    <div className="flex items-center">
                        <Image src={logo} className="w-12 h-10 pr-1.5" alt="Community-Connect" />
                        <h2 className="font-bold text-[16px] line-height-1.25">
                            <b className="text-[#65796F] leading-0.5">Community</b><br/> 
                            <b className="text-[#569B72] leading-0.5">Connect</b>
                        </h2>
                    </div>
                    <br />
                    <h2 className="font-[14px] text-[#74867E] leading-none">Together for a Better Community</h2>
                </div>
                <div>
                    <h2 className="font-bold text-[16px] text-[#FDFDFD]">Quick Links</h2>
                    <ul>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="#">Home</Link></li>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="#">Upcoming Events</Link></li>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="#">About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-[16px] text-[#FDFDFD]">Support</h2>
                    <ul>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="#">Contact Us</Link></li>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="#">FAQ</Link></li>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="#">Privacy Policy</Link></li>
                    </ul>                    
                </div>
                <div>
                    <h2 className="font-bold text-[16px] text-[#FDFDFD]">Follow Us</h2>
                    <ul className="flex gap-2.5">
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="">fb</Link></li>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="">instagram</Link></li>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="">youtube</Link></li>
                        <li><Link className="font-bold text-[14px] text-[#FDFDFD]" href="">twitter</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;