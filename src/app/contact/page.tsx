import Image from "next/image";
import ShopeHero from "./../Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled, TbClockHour4Filled } from "react-icons/tb";

export default function Contact() {
  return (
    <>
      <div className="relative">
        <Image src={ShopeHero} alt="Picture of the author" />
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
          <h3 className="font-bold text-[1.5rem]">Contact</h3>
          <div className="flex items-center space-x-2">
            <h3>Home</h3>
            <IoIosArrowForward />
            <h3>Contact</h3>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 px-4">
        <h2 className="font-extrabold text-[2rem] font-poppins">Get In Touch With Us</h2>
        <p className="mt-2 text-gray-700 font-poppins">
          For more information about our products & services, please feel free to drop us an email.  
          <br />
          Our staff will always be there to help you out. Do not hesitate!
        </p>
      </div>

      <div className="flex justify-center mt-8 px-4 gap-24">
        {/* Sidebar */}
        <div className="w-[15rem] flex flex-col gap-6">
          <div className="flex items-start space-x-4">
            <FaLocationDot className="text-[#B88E2F] text-2xl mt-1" />
            <div>
              <h2 className="font-poppins text-[24px] font-[500] leading-[36px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                Address
              </h2>
              <p className="font-poppins text-[16px] font-[400] leading-[24px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                236 5th SE Avenue, <br /> New York NY10000,United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <TbPhoneFilled className="text-[#B88E2F] text-2xl mt-1" />
            <div>
              <h2 className="font-poppins text-[24px] font-[500] leading-[36px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                Phone
              </h2>
              <p className="font-poppins text-[16px] font-[400] leading-[24px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                Mobile: +(84) 546-6789
              </p>
              <p className="font-poppins text-[16px] font-[400] leading-[24px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <TbClockHour4Filled className="text-[#B88E2F] text-2xl mt-1" />
            <div>
              <h2 className="font-poppins text-[24px] font-[500] leading-[36px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                Working Time
              </h2>
              <p className="font-poppins text-[16px] font-[400] leading-[24px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="font-poppins text-[16px] font-[400] leading-[24px] text-left underline text-underline-position-from-font text-decoration-skip-ink-none">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-[20rem]">
          <form className="flex flex-col gap-4 font-poppins">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-bold">Name</label>
              <input
                type="text"
                id="name"
                className="border-[#D1D5DB] border-[1px] p-2 rounded-[10px] w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold">Email</label>
              <input
                type="email"
                id="email"
                className="border-[#D1D5DB] border-[1px] p-2 rounded-[10px] w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="font-bold">Subject (optional)</label>
              <input
                type="text"
                id="subject"
                className="border-[#D1D5DB] border-[1px] p-2 rounded-[10px] w-full"
                placeholder="Enter subject"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="font-bold">Message</label>
              <textarea
                id="message"
                className="border-[#D1D5DB] border-[1px] p-2 rounded-[10px] w-full h-[6rem]"
                placeholder="Hi! I’d like to ask about..."
              ></textarea>
            </div>
            <button className="bg-[#B88E2F] text-white mt-4 px-6 py-2 rounded-[5px] hover:bg-[#A77A28]" style={{ width: '150px', height: '40px', border: '1px solid transparent' }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 mb-5 flex justify-around items-center p-4 bg-[#F9F1E7]">
        <div className="text-center font-poppins">
          <Image src="/Group.png" width={50} height={50} alt="High Quality" />
          <h4 className="font-bold mt-2">High Quality</h4>
          <p className="text-gray-700">Crafted from top materials</p>
        </div>

        <div className="text-center font-poppins">
          <Image src="/warr.png" width={40} height={40} alt="Warranty Protection" />
          <h4 className="font-bold mt-2">Warranty Protection</h4>
          <p className="text-gray-700">Over 2 years</p>
        </div>

        <div className="text-center font-poppins">
          <Image src="/vector.png" width={40} height={40} alt="Free Shipping" />
          <h4 className="font-bold mt-2">Free Shipping</h4>
          <p className="text-gray-700">Orders over $150</p>
        </div>

        <div className="text-center font-poppins">
          <Image src="/customer.png" width={40} height={40} alt="24/7 Support" />
          <h4 className="font-bold mt-2">24/7 Support</h4>
          <p className="text-gray-700">Dedicated support</p>
        </div>
      </div>
    </>
  );
}
