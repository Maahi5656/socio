"use client"

import { 
    ArrowLeft, 
    ArrowRight, 
    CalendarDays, 
    Check, 
    MapPin, 
    Star, 
    Pencil, 
    Trash2 
} from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

import { redirect } from "next/navigation";

import { getTokenFromClient } from "@/lib/getTokenFromClient";

const DeleteEventDialog = ({id}:{id:string}) => {

    const handleDelete=async()=>{

        const token = await getTokenFromClient();
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${id}`,{
            method: 'DELETE',
            headers: {
              authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();

        if(data){
            toast.add({
                type: "success",
                description: "You have successfully deleted the event",
                priority: "high"
            })            
        }

        redirect('/events');
    }

    return (
        <div>
            <AlertDialog>
              <AlertDialogTrigger render={
                <Button variant="outline" className='text-[18px] font-semibold bg-red-600 text-white py-2 px-4 mx-1.5 cursor-pointer rounded'>
                  <Trash2 />
                  Delete
                </Button>}    
              />            
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>              
        </div>
    );
};

export default DeleteEventDialog;