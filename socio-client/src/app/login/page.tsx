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


import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import login from '../../../public/images/login-image.png'

const Login = () => {

    const handleLoginForm=async(e:React.SubmitEvent<HTMLElement>)=>{
      e.preventDefault();

      const formData = new FormData(e.target);
      const user = Object.fromEntries(formData.entries()) as {email:string, password:string};
      
      // console.log(user);
      const { data, error } = await authClient.signIn.email({
        ...user
      });

      if(data){
        redirect('/')
      }

      if(error){
        toast.add({
          type: "error",
          description: "Login Unsuccessful! Please Check Your Email & Password",
          priority: "high"
        })
      }
    
    }

    return (
        <section className='relative top-[76px] py-[50px]'>
            <div className='relative flex flex-col lg:flex-row justify-start items-start gap-5 max-w-7xl mx-auto px-4'>
                <Image className="w-full rounded" width={450} src={login} alt="image" />
                <div className="w-full">
                    <form onSubmit={handleLoginForm} className="max-w-sm">
                       <h2 className="font-bold text-2xl text-[#636467] mb-1.5">Login To Your Account</h2> 
                        <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="form-email">Email</FieldLabel>
                              <Input id="form-email" type="email" name="email" placeholder="john@example.com" required/>
                            </Field>
                            <div>
                              <Field>
                                <FieldLabel htmlFor="form-password">Password</FieldLabel>
                                <Input id="form-password" name="password" type="password" required/>
                              </Field>
                            </div>
                            <Field orientation="horizontal">
                              <Button className="w-full" type="submit">Submit</Button>
                            </Field>
                            <p className="font-medium text-[#000] text-[14px]">Dont Have An Account? <Link className="text-blue-600 underline" href="/register">Register</Link></p>
                        </FieldGroup>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;