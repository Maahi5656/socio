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
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Link from "next/link";

import login from '../../../public/images/login-image.png'

const Register = () => {
    return (
        <section className='relative h-[calc(100vh-192px)] top-[76px] py-[50px]'>
            <div className='relative flex justify-start items-start gap-5 max-w-7xl mx-auto'>
                <Image className="w-full rounded" width={450} src={login} alt="image" />
                <div className="w-full">
                    <form className="max-w-sm">
                       <h2 className="font-bold text-2xl text-[#636467] mb-1.5">Create A New Account</h2> 
                        <FieldGroup>
                            <Field>
                              <FieldLabel htmlFor="form-name">Name</FieldLabel>
                              <Input
                                id="form-name"
                                type="text"
                                placeholder="Full Name"
                                required
                              />
                            </Field>
                            <Field>
                              <FieldLabel htmlFor="form-email">Email</FieldLabel>
                              <Input id="form-email" type="email" placeholder="john@example.com" />
                            </Field>
                            <div>
                              <Field>
                                <FieldLabel htmlFor="form-password">Password</FieldLabel>
                                <Input id="form-password" type="password" />
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