"use client"

import Link from 'next/link'
import { redirect } from 'next/navigation'

import { authClient } from '@/lib/auth-client'

const NavButtons = () => {

    const { data:session } = authClient.useSession();
    const user = session?.user;

    console.log("Session User Data", user);

    const handleSignOut=async()=>{
        await authClient.signOut();
        redirect("/");
    }

    return (
        <>
            {
                user ? (
                    <div className="flex items-center gap-2 px-2.5">
                        {/* <Link href={"/profile"}> */}
                            <div className="avatar">
                              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                {
                                    user?.image ? <img className="w-15 rounded-full" alt="P" src={user?.image as string} /> : <img className="w-15 rounded-full" alt="P" src="/public/blank-profile-picture.jpg" />
                                }
                              </div>
                            </div>
                        {/* </Link> */}
                        <h2 className="font-bold">{ user?.name.split(' ')[1] }</h2>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="rounded-field cursor-pointer">▼</div>
                            <ul tabIndex={-1} className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 p-2 shadow-sm">
                              <li>
                                <h2 className='text-[14px] text-[#1D271F] font-semibold'>{ user?.name }</h2>
                                <p className='text-[14px] text-[#1D271F] font-semibold'>{ user?.email }</p>
                              </li>
                              {/* <li><Link className='text-[12px] text-[#1D271F] mb-1.5 font-semibold' href={'/profile'}>My Profile</Link></li> */}
                              <li><Link className='text-[14px] text-[#1D271F] mb-1 font-semibold' href={'/create-event'}>Create Event</Link></li>
                              <li><Link className='text-[14px] text-[#1D271F] mb-1 font-semibold' href={'/manage-event'}>Manage Event</Link></li>
                              <li><Link className='text-[14px] text-[#1D271F] mb-1 font-semibold' href={'/joined-event'}>Joined Event</Link></li>
                              <li><button className='border-0 outline-0 bg-transparent' onClick={handleSignOut}>↩ Sign Out</button></li>
                            </ul>
                        </div>                        
                    </div>                
                ) : "" 
                
            }        
        </>
    )
}

export default NavButtons