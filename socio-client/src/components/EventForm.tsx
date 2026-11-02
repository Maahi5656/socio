"use client"

import { useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectLabel,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { ChevronDownIcon } from "lucide-react"
import { format } from "date-fns"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Textarea } from "@/components/ui/textarea"

import { IUser } from "@/lib/types/user"

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

const initialFormData = {
    event_image: "",
    event_title: "",
    event_location: "",
    event_type: "",
    event_date: "",
    event_description: "",
    event_organizer_email: ""
}

const EventForm = ({user}:{user?:IUser}) => {

    const [date, setDate] = useState<Date>();
    const [form, setForm] = useState({
        ...initialFormData,
        event_organizer_email: user?.email
    });

    const update=(field: keyof typeof form, value: string | null)=>{
        setForm((current)=>({
            ...current,
            [field]:value
        }));
    }

    const handleSubmitForm=async(e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        });

        const result = await response.json();

        console.log(result);
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm} className="max-w-sm">
                <FieldGroup>
                    <div className="grid grid-cols-2 gap-4">
                        <Field>
                            <Input 
                                id="form-event-organizer-email"
                                type="hidden"
                                value={form.event_organizer_email}
                                onChange={(e)=>update("event_organizer_email", e.target.value)}
                            />    
                        </Field>
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
                              <PopoverTrigger render={<Button variant={"outline"} data-empty={!date} className="w-[212px] justify-between text-left font-normal data-[empty=true]:text-muted-foreground">{date ? format(date, "PPP") : <span>Pick a date</span>}<ChevronDownIcon data-icon="inline-end" /></Button>} />
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={form.event_date ? new Date(form.event_date) : undefined}
                                  onSelect={(date)=>update("event_date", date ? date.toISOString() : "")}
                                  defaultMonth={date}
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
                </FieldGroup>
            </form>            
        </div>
    );
};

export default EventForm;