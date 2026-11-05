import Link from "next/link";

const Banner = () => {
    return (
        <section className='relative top-[76px] py-[100px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/banner.png')" }}>
            <div className='relative max-w-7xl mx-auto px-4'>
                <h1 className='font-bold text-[#D1DCD5] text-[45px] mb-4.5 leading-none'>Together for <br/>a Better Community</h1>
                <p className='font-bold text-[#D1DCD5] text-[20px] mb-4'>Join community events, help others,and make a positive impact.</p>
                <div className="flex gap-2.5">
                    <Link className="inline-block text-white bg-[#019241] border border-[#019241] py-2.5 px-3.5 mx cursor-pointer rounded" href="#">Explore Events</Link>
                    <Link className="inline-block text-white bg-[#019241] border border-[#019241] py-2.5 px-3.5 cursor-pointer rounded" href="#">Learn More..</Link>
                </div>      
            </div>
        </section>
    );
}; 

export default Banner;