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

import login from '../../../public/images/login-image.png'

const items = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

const CreateEvent = () => {

    const [date, setDate] = useState<Date>()

    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <div className='relative flex justify-start items-start gap-5 max-w-7xl mx-auto'>
                <Image className="w-full rounded" width={450} src={login} alt="image" />
                <div className="w-full">
                    <h2 className="font-bold text-2xl text-[#636467] mb-0.5">Create A New Event</h2>
                    <p className="font-medium text-[#636467] text-[14px] mb-0.5">Share An Event To Help Our Community</p> 
                    <br />
                    <form className="max-w-sm">
                        <FieldGroup>
                            <div className="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-event-name">Event Title</FieldLabel>
                                    <Input
                                      id="form-event-name"
                                      type="text"
                                      placeholder="Enter Your Event Title..."
                                      required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="form-event-location">Event Location</FieldLabel>
                                    <Input
                                      id="form-event-location"
                                      type="text"
                                      placeholder="Enter Location Of The Event..."
                                      required
                                    />
                                </Field>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <Field>
                                    <FieldLabel htmlFor="form-event-type">Event Type</FieldLabel>
                                    <Select items={items}>
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
                                          selected={date}
                                          onSelect={setDate}
                                          defaultMonth={date}
                                        />
                                      </PopoverContent>
                                    </Popover>
                                </Field>
                            </div>
                            <div className="grid grid-cols-1">
                                <FieldLabel htmlFor="textarea-message">Event Description</FieldLabel>
                                <Textarea id="textarea-message" placeholder="Type your message here." />
                            </div>
                            <div className="grid grid-cols-1">
                                <Button className="w-full" type="submit">Create Event</Button>
                            </div>
                        </FieldGroup>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateEvent;