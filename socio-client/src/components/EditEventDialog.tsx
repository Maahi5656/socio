"use client"

import { 
    ArrowLeft, 
    ArrowRight, 
    CalendarDays, 
    Check, 
    MapPin, 
    Star, 
    Pencil,
    PackageCheck, 
    Trash2 
} from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectGroup, SelectLabel, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Calendar } from "@/components/ui/calendar"
import { ChevronDownIcon } from "lucide-react"
import { format } from "date-fns"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/toast"

import { IEvent } from '@/lib/types/event'
import { getTokenFromClient } from "@/lib/getTokenFromClient";

const items = [
//   { label: "Select a fruit", value: null },
    { label: "Plantation", value: "Plantation" },
    { label: "Donation", value: "Donation" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Food", value: "Food" },
    { label: "Education", value: "Education" },
    { label: "Cleanup", value: "Cleanup" },
    { label: "Support", value: "Support" },
];

const EditEventDialog = ({event}:{event:IEvent}) => {

    const router = useRouter();

    const [form, setForm] = useState(event);
    const [openModal, setOpenModal] = useState(false);

    const update=(field: keyof typeof form, value: string | null)=>{
        setForm((current)=>({
            ...current,
            [field]:value
        }));
    }

    const updateEvent=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        try{
            const { _id, ...formData } = form;
            const token = await getTokenFromClient();
            
            const updateData = {
                ...formData
            };

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/event/${_id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updateData)
            });

            const result = await response.json();
            console.log(result);

            if (!response.ok) {
                throw new Error(
                    result?.message || `Update failed: ${response.status}`
                );
            }    
            toast.add({
                type: "success",
                description: result?.message,
                priority: "high"
            })

            setOpenModal(false);
            // Refresh the server-rendered destination details.
            router.refresh();
        }catch(error){
            console.log(error);            
        }
    }

    return (
        <>
            <Dialog open={openModal} onOpenChange={setOpenModal}>
                <DialogTrigger>
                    <Button className="text-[18px] font-semibold bg-blue-600 text-white py-2 px-4 mx-1.5 cursor-pointer rounded" variant="outline">
                        <Pencil />
                        Edit
                    </Button>
                </DialogTrigger>
                <DialogContent className={'min-w-xl'}>
                    <DialogHeader>
                        <DialogTitle>Edit Event</DialogTitle>
                        {/* <DialogDescription></DialogDescription> */}
                    </DialogHeader>        
                    <form onSubmit={updateEvent} className='rounded-sm border border-border bg-white p-4 shadow-sm'>
                        <FieldGroup>
                            <Field>
                                <Input 
                                    id="form-event-organizer-email"
                                    type="hidden"
                                    value={form.event_organizer_email}
                                    onChange={(e)=>update("event_organizer_email", e.target.value)}
                                    readOnly
                                />    
                            </Field>
                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-event-name">Event Title</FieldLabel>
                                    <Input
                                      id="form-event-name"
                                      type="text"
                                      value={form.event_title}
                                      onChange={(e)=>update("event_title", e.target.value)}
                                      placeholder="Enter Your Event Title..."
                                      required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="form-event-location">Event Location</FieldLabel>
                                    <Input
                                      id="form-event-location"
                                      type="text"
                                      value={form.event_location}
                                      onChange={(e)=>update("event_location", e.target.value)}
                                      placeholder="Enter Location Of The Event..."
                                      required
                                    />
                                </Field>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-event-type">Event Type</FieldLabel>
                                    <Select 
                                        items={items} 
                                        value={form.event_type}
                                        onValueChange={(value)=>update("event_type", value)}
                                    >
                                        <SelectTrigger className="w-full max-w-full">
                                          <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                {items.map((item) => (
                                                <SelectItem key={item.value} value={item.value}>
                                                    {item.label}
                                                </SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="form-image-url">Image URL</FieldLabel>
                                    <Input
                                      id="form-image-url"
                                      type="url"
                                      value={form.event_image}
                                      onChange={(e)=>update("event_image", e.target.value)}
                                      placeholder="Enter URL of the image"
                                      required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="form-image-url">Event Date</FieldLabel>
                                    <Popover>
                                      <PopoverTrigger>
                                        <Button
                                          variant="outline"
                                          data-empty={!form.event_date}
                                          className="w-full justify-between text-left font-normal"
                                        >
                                          {form.event_date
                                            ? format(new Date(form.event_date), "PPP")
                                            : <span>Pick a date</span>}
                                          <ChevronDownIcon className="ml-2 h-4 w-4" />
                                        </Button>
                                      </PopoverTrigger>
                                      <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                          mode="single"
                                          selected={
                                            form.event_date
                                              ? new Date(form.event_date)
                                              : undefined
                                          }
                                          onSelect={(selectedDate) => {
                                            update(
                                              "event_date",
                                              selectedDate ? selectedDate.toISOString() : ""
                                            );
                                          }}
                                        />
                                      </PopoverContent>
                                    </Popover>
                                </Field>
                            </div>
                            <div className="grid grid-cols-1">
                                <FieldLabel htmlFor="textarea-message">Event Description</FieldLabel>
                                <Textarea id="textarea-message" value={form.event_description} onChange={(e)=>update("event_description", e.target.value)} placeholder="Type your message here." />
                            </div>
                            <div className="grid grid-cols-1">
                                <Button className="w-full" type="submit">Create Event</Button>
                            </div>
                                    
                                    {/* Actions */}
                            <DialogFooter className="mt-5 flex justify-end gap-3">
                                <DialogClose render={<Button variant="outline">Cancel</Button>} />
                                <Button type="submit" className="bg-[#00A8E8] text-white hover:bg-[#0095d1]">
                                  <PackageCheck />
                                  Update Event
                                </Button>
                            </DialogFooter>
                        </FieldGroup>
                    </form>
                </DialogContent>    
            </Dialog>               
        </>
    );
}

export default EditEventDialog;

