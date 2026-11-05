"use client"

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
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/toast"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react"

import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { IUser } from "@/lib/types/user"

import login from '../../../public/images/login-image.png'

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validEmail=(email:string)=>{
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);    
  }

  const handleEmailSignUp=async(e:React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault();

    if(!name){
      toast.add({
        type: "error",
        description: "Username is required!",
        priority: "high"
      })
      return;
    }

    if(!validEmail(email)){
      toast.add({
        type: "error",
        description: "Email Is Invalid. Please Try Again",
        priority: "high"
      })
      return;
    }

    if(!password || password.length <=8){
      toast.add({
        type: "error",
        description: "Password is required and must be greater than 8",
        priority: "high"
      })
      return;
    }

    if(!confirmPassword){
      toast.add({
        type: "error",
        description: "Confirm Password Is Required",
        priority: "high"
      })
      return;
    }

    if(password !== confirmPassword){
      toast.add({
        type: "error",
        description: "Password and Password Confirmation not matching",
        priority: "high"
      })
      return;
    }

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name:string, image:string, email:string, password:string};

    const { data, error } = await authClient.signUp.email({
      ...user
    });

    if(data){
      // console.log(data);
      toast.add({
          type: "success",
          description: "You Have Registered Successfully",
          priority: "high"
      })

      redirect('/');
    }
    if(error){
      console.log(error);
    }

  }

    return (
      <section className='relative top-[76px] py-[50px]'>
        <div className='relative flex flex-col lg:flex-row justify-start items-start gap-5 max-w-7xl mx-auto px-4'>
          <Image className="w-full rounded" width={450} src={login} alt="image" />
          <div className="w-full">
            <form onSubmit={handleEmailSignUp} className="max-w-sm">
              <h2 className="font-bold text-2xl text-[#636467] mb-1.5">Create A New Account</h2> 
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="form-name">Name</FieldLabel>
                  <Input
                    id="form-name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-name">Image URL</FieldLabel>
                  <Input
                    id="form-iamge"
                    name="image"
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    type="url"
                    placeholder="Enter The URL Of Your Profile Image"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-email">Email</FieldLabel>
                  <Input 
                    id="form-email" 
                    name="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                  />
                </Field>
                <div>
                  <Field>
                    <FieldLabel htmlFor="form-password">Password</FieldLabel>
                    <Input 
                      id="form-password" 
                      name="password" 
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      type="password" 
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="form-confirm-password">Confirm Password</FieldLabel>
                    <Input 
                      id="form-confirm-password" 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      required/>
                  </Field>
                </div>
                <Field orientation="horizontal">
                  <Button className="w-full" type="submit">Register</Button>
                </Field>
                <p className="font-medium text-[#000] text-[14px]">Already Have An Account? <Link className="text-blue-600 underline" href="/login">Login</Link></p>
              </FieldGroup>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Register;