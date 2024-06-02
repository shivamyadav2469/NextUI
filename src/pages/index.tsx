"use client";
import { useState } from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { AiFillApple } from "react-icons/ai";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

 
  return (
    <div className="absolute w-full p-4" >
    <nav className="container mx-auto py-2 flex flex-col lg:flex-row lg:justify-between items-center relative">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center gap-5 lg:gap-10">
            <img src="/assets/logo.svg" alt="Logo" className="w-16 h-auto lg:w-20" />
            <div className="hidden lg:flex items-center gap-3 lg:gap-7">
              <Link href="#" className="text-primary font-semibold text-lg">Home</Link>
              <Link href="#" className="text-gray-800 font-medium text-lg hover:text-primary">About</Link>
              <Link href="#" className="text-gray-800 font-medium text-lg hover:text-primary">Pricing</Link>
              <Link href="#" className="text-gray-800 font-medium text-lg hover:text-primary">Features</Link>
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} w-full`}>
          <div className="flex flex-col items-center gap-3 lg:gap-7 mt-2 ">
            <Link href="/" className="text-primary font-semibold text-lg">Home</Link>
            <Link href="/about" className="text-gray-800 font-medium text-lg">About</Link>
            <Link href="/pricing" className="text-gray-800 font-medium text-lg">Pricing</Link>
            <Link href="/features" className="text-gray-800 font-medium text-lg">Features</Link>
            <button className="btn bg-black text-white p-2 text-base lg:text-lg hover:bg-primary border-none rounded-md">
              Download Now
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <button className="btn bg-black text-white p-2 text-base lg:text-lg hover:bg-primary border-none rounded-md">
            Download Now
          </button>
        </div>
      </nav>

      {/* home */}
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-6xl">
              Make The Best Financial Decisions
            </p>
            <p className="text-zinc-600">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquot
              Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Port-titor.
            </p>
            <div className="flex items-center gap-5">
              <button className="btn bg-black text-white rounded-md p-3 flex items-center gap-3 hover:bg-primary border-none">
                Get Started <BsArrowRight className="text-xl" />
              </button>
              <div className="flex gap-3 cursor-pointer items-center">
                <MdSlowMotionVideo className="text-3xl" />
                <p className="">Watch</p>
              </div>
            </div>
            <img className="h-[350px]" src="/assets/downhero.svg" alt="" />
          </div>
          <img src="/assets/hero.svg" alt="" />
        </div>
      </div>

      {/* Middle */}

      <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="flex flex-col gap-5 items-start lg:w-1/2">
            <p className="text-primary font-medium text-lg items-start tracking-widest">
                FEATURES
            </p>
            <p className="text-4xl font-extrabold items-start lg:text-center font-Segoe UI Symbol">Uifry Premium</p>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <img src="/assets/budget.svg" alt="" />
                    <p className="text-2xl font-semibold">Budgeting Intervals</p>
                </div>
                <p className="text-zinc-600">
                    Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                    Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                    Porttitor.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <img src="/assets/b2.svg" alt="" />
                    <p className="text-2xl font-semibold">Budgeting Intervals</p>
                </div>
                <p className="text-zinc-600">
                    Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                    Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                    Porttitor.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <img src="/assets/b3.svg" alt="" />
                    <p className="text-2xl font-semibold">Budgeting Intervals</p>
                </div>
                <p className="text-zinc-600">
                    Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
                    Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem
                    Porttitor.
                </p>
            </div>
        </div>
        <img src="/assets/subhero.svg" alt="" className=" lg:mt-0 lg:w-1/2 mr-3 lg:order-first" />
    </div>
</div>


      {/* center */}
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-5 items-start">
            <p className="text-primary font-medium md:text-lg sm:text-sm items-start ">
              Advantage
            </p>
            <p className="text-5xl font-extrabold items-start">Why Choose Uifry?</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <img src="/assets/bell.svg" alt="" />
                <p className="text-2xl font-semibold">Clever Notifications</p>
              </div>

              <p className="text-zinc-600">
                Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
                Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis{" "}
                <br />
                Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis{" "}
                <br />
                Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget{" "}
                <br />
                Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
              </p>
            </div>
          </div>
          <img src="/assets/chose.png" alt="" />
        </div>
      </div>

      {/* testimonials */}
      <div className="container mx-auto">
        <p className=" text-center py-2">Testimonials</p>
        <p className="text-center font-extrabold font-serif text-4xl  lg:text-7xl">
    What Our Users <br /> Say About Us?
</p>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <img src="/assets/testimonial.png" alt="" />
          <div className="flex flex-col gap-5 items-start">
            <p className="text-3xl font-semibold">
              The Best Financial Accounting <br /> App Ever!
            </p>
            <p className="text-base text-gray-600">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit ld Accumsan, <br />
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis{" "}
              <br />
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, <br />
              Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor{" "}
              <br />
              Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
            <p className="text">Rownok Mahbub</p>
            <img className="h-10" src="/assets/person.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Quest */}
      <div className="container mx-auto lg:px-32 m-2">
        <p className="text-primary font-medium text-lg items-start">Faq</p>
        <p className="text-4xl font-extrabold items-start py-4">
          Frequently Asked Questions
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center my-10">
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 bg-primary px-6 py-6 rounded-lg">
              <p className="text-2xl font-extrabold text-white">
                The Best Financial Accounting <br /> App Ever!
              </p>
              <p className="text-white text-lg">
                Arcu At Dictum sapien, Mollie. vulputate Sit ld <br /> Accumsan.
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2  px-6 py-6 rounded-lg">
            <p className="text-2xl font-extrabold ">
              The Best Financial Accounting <br /> App Ever!
            </p>
            <p className=" text-lg">
              Arcu At Dictum sapien, Mollie. vulputate Sit ld <br /> Accumsan.
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center my-10">
          <div className="flex flex-col gap-2  px-6 py-6 rounded-lg">
            <p className="text-2xl font-extrabold ">
              The Best Financial Accounting <br /> App Ever!
            </p>
            <p className=" text-lg">
              Arcu At Dictum sapien, Mollie. vulputate Sit ld <br /> Accumsan.
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 bg-primary px-6 py-6 rounded-lg">
              <p className="text-2xl font-extrabold text-white">
                The Best Financial Accounting <br /> App Ever!
              </p>
              <p className="text-white text-lg">
                Arcu At Dictum sapien, Mollie. vulputate Sit ld <br /> Accumsan.
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center my-10">
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 bg-primary px-6 py-6 rounded-lg">
              <p className="text-2xl font-extrabold text-white">
                The Best Financial Accounting <br /> App Ever!
              </p>
              <p className="text-white text-lg">
                Arcu At Dictum sapien, Mollie. vulputate Sit ld <br /> Accumsan.
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2  px-6 py-6 rounded-lg">
            <p className="text-2xl font-extrabold ">
              The Best Financial Accounting <br /> App Ever!
            </p>
            <p className=" text-lg">
              Arcu At Dictum sapien, Mollie. vulputate Sit ld <br /> Accumsan.
              Ultricies. In Ultrices Malesuada Elit Mauris.
            </p>
          </div>
        </div>
      </div>

      {/* footerUp */}

      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center bg-black rounded-md mt-2  py-5 lg:py-10">
          <div className="flex flex-col gap-4 pl-4 lg:pl-20">
            <p className="text-5xl font-extrabold text-white">
              Ready To Get Started?
            </p>
            <p className="text-white">
              Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus <br />
              Vulputate.
            </p>
            <button className="bg-white p-3 rounded-md text-black btn w-48 border-none flex gap-2 items-center capitalize hover:bg-primary">
              Download App
              <AiFillApple className="text-xl" />
            </button>
          </div>
          <img src="/assets/getstarted.svg" alt="" />
        </div>
      </div>

      {/* Footer */}

      <div className="bg-[#fdfdfd]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto py-10">
    <div className="flex flex-col gap-4 items-start">
      <img className="h-10" src="/assets/logo.svg" alt="" />
      <div className="flex gap-2 items-start">
        <img src="/assets/email.svg" alt="" />
        <p className=" sm:text-sm">example@rownok.com</p>
      </div>
      <div className="flex gap-2 items-start">
        <img src="/assets/phone.svg" alt="" />
        <p className="">+83298099499</p>
      </div>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <p className=" font-semibold text-4xl">Links</p>
      <p className="hover:text-primary cursor-pointer">Home</p>
      <p className="hover:text-primary cursor-pointer">About</p>
      <p className="hover:text-primary cursor-pointer">Booking</p>
      <p className="hover:text-primary cursor-pointer">Blog</p>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <p className="text-4xl font-semibold">Legal</p>
      <p className="hover:text-primary cursor-pointer">Terms Of Use</p>
      <p className="hover:text-primary cursor-pointer">Privacy Policy</p>
      <p className="hover:text-primary cursor-pointer">Cookie Policy</p>
      <p className="hover:text-primary cursor-pointer">Blog</p>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <p className="text-4xl font-semibold">Product</p>
      <p className="hover:text-primary cursor-pointer">Take Tour</p>
      <p className="hover:text-primary cursor-pointer">Live Chat </p>
      <p className="hover:text-primary cursor-pointer">Reviews</p>
    </div>
    <div className="flex flex-col gap-1 items-start">
      <p className="text-4xl font-semibold">News Letter</p>
      <p className="hover:text-primary cursor-pointer">Stay Up To Date</p>
      <div className="flex items-start flex-col gap-2">
        <input
          type="text"
          className="px-3 py-3 bg-white"
          placeholder="Your email"
        />
        <button className="bg-black p-3 rounded-md w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-primary">
          Subscribe
        </button>
      </div>
    </div>
  </div>
 
</div>
<div className="conatiner max-auto ">
    <hr />
    <h1 className="text-center m-2">Copyright 2024 Uifry.Com All Rights Reserved</h1>
  </div>
    </div>
  );
}
