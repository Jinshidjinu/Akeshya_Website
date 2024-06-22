import React from "react";
import Headings from "../../Shared/Headings";
import Image from "next/image";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsEmojiSmile, BsJournalRichtext, BsGlobe, BsClock } from "react-icons/bs";
import Button from "../../Shared/Button";
import CountUp from "react-countup";

const About = () => {
  return (
    <div>
      <Headings content="ABOUT US" />
      <div className="bg-white w-full h-auto flex justify-center items-center py-10 md:py-0">
        <div className="w-[90%] md:w-[80%] h-auto md:h-[240px] bg-white flex flex-col md:flex-row">
          <div data-aos="fade-up" className="w-full md:w-[64%] h-full bg-white flex flex-col gap-7 text-[#444444] text-md p-5 md:p-0">
            <p>
              We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="list-item">
                <span>
                  <IoCheckmarkDoneSharp className="text-blue-900 text-lg" />
                </span>{" "}
                We started with a simple idea: do what is best for the client.
              </li>
              <li className="list-item">
                <span>
                  <IoCheckmarkDoneSharp className="text-blue-900 text-lg" />
                </span>{" "}
                Our methodical and individual approach to each project delivers the finest possible results for your media.
              </li>
              <li className="list-item">
                <span>
                  <IoCheckmarkDoneSharp className="text-blue-900 text-lg" />
                </span>{" "}
                Our day-to-day work is to solve your problems utilizing the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.
              </li>
            </ul>
          </div>
          <div data-aos="fade-up" className="w-full md:w-[64%] bg-white h-full flex flex-col text-[#444444] gap-7 p-5 md:p-0 md:ml-10">
            <p>
              We&apos;re professional, but we&apos;re also friendly, and we&apos;ll always pay attention to your concerns. We expect to work with innovative people who have an open mind and are dedicated to making every idea a reality. We want to hear from you if you&apos;re interested in SEO, have web development ideas, or require a graphic designer who can match your goals.
            </p>
            <Button content="Learn More" />
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[48%] h-[300px] md:h-[480px] bg-white flex justify-center md:justify-end" data-aos="fade-right">
          <Image
            src="/Assets/counts-img.svg"
            alt="count-icon"
            width={530}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="w-full md:w-[52%] h-auto md:h-[500px] bg-white flex flex-col justify-center p-10 gap-4 md:p-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
            <div className="flex items-center space-x-4">
              <BsEmojiSmile className="imougi-style" />
              <div className="flex flex-col">
                <span className="numbers-align">
                  <CountUp start={0} end={3835039} duration={3.75}  decimals={0} />
                </span>
                <p className="text-sm font-semibold">
                  Organic Reach <span className="font-normal">(Global)</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <BsJournalRichtext className="imougi-style" />
              <div className="flex flex-col">
                <span className="numbers-align">
                  <CountUp start={0} delay={2.75} end={85} duration={0.75}  decimals={0} />
                </span>
                <p className="text-sm font-semibold">Campaigns</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <BsClock className="imougi-style" />
              <div className="flex flex-col">
                <span className="numbers-align">
                  <CountUp start={0} delay={1.75} end={14081} duration={0.75}  decimals={0} />
                </span>
                <p className="text-sm font-semibold">
                  Watch Hours <span className="font-normal">(Asia)</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <BsGlobe className="imougi-style" />
              <div className="flex flex-col">
                <span className="numbers-align">
                  <CountUp start={0} end={17} duration={0.75}  decimals={0} />
                </span>
                <p className="text-sm font-semibold">
                  Excellent CTR % <span className="font-normal">(Asia)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
