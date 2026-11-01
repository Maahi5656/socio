import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Events = () => {
    return (
        <>
            <section className='relative top-[76px] py-[50px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/section-banner.png')" }}>
                <div className='relative max-w-7xl mx-auto'>
                    <h2 className='font-bold text-[#D1DCD5] text-[45px] mb-4.5 leading-none'>Our Events</h2>
                    <p className='font-bold text-[#D1DCD5] text-[20px] mb-4'>Join upcoming community events near you</p>
                </div>
            </section>
            <section className='relative top-[76px] py-[45px]'>
                <div className='relative max-w-7xl mx-auto'>
                    <div className='flex flex-row gap-3.5'>
                        <Card className="relative mx-auto w-full max-w-full pt-0">
                          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img src="https://avatar.vercel.sh/shadcn1" alt="Event cover" className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                            <CardHeader>
                                <CardTitle>Design systems meetup</CardTitle>
                                <CardDescription>
                                  A practical talk on component APIs, accessibility, and shipping
                                  faster.
                                </CardDescription>
                                <CardDescription>
                                    <Button className="w-full">View Event</Button>
                                </CardDescription>
                            </CardHeader>
                        </Card>    
                        <Card className="relative mx-auto w-full max-w-full pt-0">
                          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img src="https://avatar.vercel.sh/shadcn1" alt="Event cover" className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                            <CardHeader>
                                <CardTitle>Design systems meetup</CardTitle>
                                <CardDescription>
                                  A practical talk on component APIs, accessibility, and shipping
                                  faster.
                                </CardDescription>
                                <CardDescription>
                                    <Button className="w-full">View Event</Button>
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card className="relative mx-auto w-full max-w-full pt-0">
                          <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                            <img src="https://avatar.vercel.sh/shadcn1" alt="Event cover" className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"/>
                            <CardHeader>
                                <CardTitle>Design systems meetup</CardTitle>
                                <CardDescription>
                                  A practical talk on component APIs, accessibility, and shipping
                                  faster.
                                </CardDescription>
                                <CardDescription>
                                    <Button className="w-full">View Event</Button>
                                </CardDescription>
                            </CardHeader>
                        </Card>                   
                    </div>
                </div>
            </section>        
        </>

    );
};

export default Events;