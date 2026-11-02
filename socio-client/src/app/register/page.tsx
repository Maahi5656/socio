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

const Register = () => {

  const handleEmailSignUp=async(e:React.SubmitEvent<HTMLElement>)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name:string, image:string, email:string, password:string};

    const { data, error } = await authClient.signUp.email({
      ...user
    });

    if(data){
      // console.log(data);
      redirect('/');
    }
    if(error){
      console.log(error);
    }

  }

    return (
      <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
        <div className='relative flex justify-start items-start gap-5 max-w-7xl mx-auto'>
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
                    type="url"
                    placeholder="Enter The URL Of Your Profile Image"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-email">Email</FieldLabel>
                  <Input id="form-email" name="email" type="email" placeholder="john@example.com" required />
                </Field>
                <div>
                  <Field>
                    <FieldLabel htmlFor="form-password">Password</FieldLabel>
                    <Input id="form-password" name="password" type="password" required/>
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