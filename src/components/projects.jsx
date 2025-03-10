import React from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

const StudentCommunitySlider = React.lazy(() =>
  import("./ProjextSliders/StudentCommunity")
);
const EcomSlider = React.lazy(() => import("./ProjextSliders/EcomSlider"));
const CodeSlider = React.lazy(() => import("./ProjextSliders/CodeSlider"));
const ResumeSlider = React.lazy(() => import("./ProjextSliders/ResumeBuilder"));
const QuizSlider = React.lazy(() => import("./ProjextSliders/QuizSlider"));
const GradientSlider = React.lazy(() =>
  import("./ProjextSliders/GradientSlider")
);

import lucky from "../assets/projectimages/luckdraw.png";

import { Tag } from "antd";
import { SiNpm } from "react-icons/si";

const Projects = () => {
  return (
    <div className="flex flex-col items-center" id="projects">
      <p className="text-3xl text-white font-bold mt-5">
        My <span className="bluegradient">Projects</span>
      </p>
      <div className=" w-full text-center mt-3 relative  py-14">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={3}
          navigation={true}
          grabCursor={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            modifier: 0,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          initialSlide={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              initialSlide: 0,
            },
            480: {
              slidesPerView: 1,
              initialSlide: 0,
            },
            768: {
              slidesPerView: 2,
              initialSlide: 1,
            },

            1440: {
              slidesPerView: 3,
              initialSlide: 1,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col w-[300px] gap-y-2 card duration-300 rounded-lg p-5 h-[475px]">
              <StudentCommunitySlider />
              <p className="font-bold text-xl text-center bluegradient">
                Expense_tracker
              </p>
              <hr />
              <p className="flex text-start  text-white p-1">
                Expense Tracker is a user-friendly app for managing expenses,
                tracking transactions, categorizing spending, and visualizing
                financial data efficiently.
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-white text-left">Developed with:</p>
                <div className="flex gap-2">
                  <Tag color="blue">
                    <p className="text-black font-medium">React</p>
                  </Tag>
                  <Tag color="green">
                    <p className="text-black font-medium">Tailwind</p>
                  </Tag>
                  <Tag color="lime">
                    <p className="text-black font-medium">Nodejs</p>
                  </Tag>
                  <Tag color="green">
                    <p className="text-black font-medium">Mongodb</p>
                  </Tag>
                </div>
              </div>
              <div className="flex w-full justify-start gap-5 mt-2">
                <a
                  href="https://github.com/ritikpatidar77/expense_tracker"
                  target="blank"
                >
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <FaGithub /> Github
                  </button>
                </a>{" "}
                <a
                  href="https://expense-tracker-eta-pink.vercel.app/"
                  target="blank"
                >
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <IoLink /> Explore
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide>
            <div className="flex flex-col w-[300px] gap-y-2 card rounded-lg p-5 h-[475px]">
              <GradientSlider />
              <p className="font-bold text-xl text-center bluegradient">
                "text-gradients" npm package
              </p>
              <hr />
              <p className="flex text-start  text-white p-1">
                I developed and published an npm package called
                'text-gradients,' a versatile React component that allows
                developers to easily apply stunning color gradients and images
                to text elements without writing any css.
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-white text-left">Developed with:</p>
                <div className="flex gap-2">
                  <Tag color="blue">
                    <p className="text-black font-medium">React</p>
                  </Tag>
                  <Tag color="lime">
                    <p className="text-black font-medium">Css</p>
                  </Tag>
                </div>
              </div>
              <div className="flex w-full justify-start gap-5 mt-2">
                <a
                  href="https://www.npmjs.com/package/text-gradients"
                  target="blank"
                >
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <SiNpm /> npm
                  </button>
                </a>
                <a
                  href="https://text-gradients-demo.vercel.app/"
                  target="_blank"
                >
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <IoLink /> Explore
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide> */}
          {/* <SwiperSlide>
            <div className="flex flex-col w-[300px] gap-y-1 card  rounded-lg p-5 h-[475px]">
              <EcomSlider />
              <p className="font-bold text-xl text-center bluegradient">
                Ecommerce Website
              </p>
              <hr />
              <p className="flex text-start  text-white p-1">
                Developed an E-commerce website. The site features comprehensive
                admin tools for product and user management, and both user and
                admin functionalities like product search, cart, and payment
                gateway integration.
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-white text-left">Developed with:</p>
                <div className="flex gap-2">
                  <Tag color="blue">
                    <p className="text-black font-medium">React</p>
                  </Tag>
                  <Tag color="lime">
                    <p className="text-black font-medium">Nodejs</p>
                  </Tag>
                  <Tag color="green">
                    <p className="text-black font-medium">Mongodb</p>
                  </Tag>
                </div>
              </div>
              <div className="flex w-full justify-start gap-5 mt-2">
                <a
                  href="https://github.com/AyushSharma72/EcomWebApp"
                  target="blank"
                >
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <FaGithub /> Github
                  </button>
                </a>
                <a href="https://ayushecomwebapp.onrender.com" target="blank">
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <IoLink /> Explore
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="flex flex-col w-[300px] gap-y-1 card duration-300 rounded-lg p-5 h-[475px]">
              <CodeSlider />
              <p className="font-bold text-xl text-center bluegradient">
                Online Code Compiler
              </p>
              <hr />
              <p className="flex text-start  text-white p-1">
                Developed an online code compiler. This project was developed
                using React.js it supports programming languages such as C++,
                Java, and Python. Additionally, the compiler features three
                different themes and adjustable text size functionality.
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-white text-left">Developed with:</p>
                <div className="flex gap-2">
                  <Tag color="blue">
                    <p className="text-black font-medium">React</p>
                  </Tag>
                  <Tag color="lime">
                    <p className="text-black font-medium">Css</p>
                  </Tag>
                </div>
              </div>
              <div className="flex w-full justify-start gap-5 mt-2">
                <a
                  href="https://github.com/AyushSharma72/CodeEditor"
                  target="blank"
                >
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <FaGithub /> Github
                  </button>
                </a>
                <a
                  href="https://reactcodecompiler.onrender.com "
                  target="blank"
                >
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <IoLink /> Explore
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="flex flex-col w-[300px] gap-y-2 card rounded-lg p-5 h-[475px]">
              <img
                src={lucky}
                className="rounded-md object-cover"
                alt="luckdraw"
              />
              <p className="font-bold text-xl text-center bluegradient">
                Lucky Draw System
              </p>
              <hr />
              <p className="flex text-start  text-white p-1">
                A website developed by me during my internship in nagarnigam to
                conduct lucky draw in indore. Which generated random winners
                from the database of nagarnigam replacing the traditional excel
                system
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-white text-left">Developed with:</p>
                <div className="flex gap-2">
                  <Tag color="blue">
                    <p className="text-black font-medium">React</p>
                  </Tag>
                  <Tag color="lime">
                    <p className="text-black font-medium">Nodejs</p>
                  </Tag>
                  <Tag color="green">
                    <p className="text-black font-medium">Mongodb</p>
                  </Tag>
                </div>
              </div>
              <div className="flex w-full justify-start gap-5 mt-2">
                <a
                  href="https://github.com/AyushSharma72/Luckydraw"
                  target="blank"
                >
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <FaGithub /> Github
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="flex flex-col w-[300px] gap-y-1 card rounded-lg p-5 h-[475px]">
              <ResumeSlider />
              <p className="font-bold text-xl text-center bluegradient">
                Resume Builder
              </p>
              <hr />
              <p className="flex text-start  text-white p-1">
                Developed a Resume builder with 4 unique templates and
                re-orderable sections built using React.js which saves resumes
                in pdf format.
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-white text-left">Developed with:</p>
                <div className="flex gap-2">
                  <Tag color="blue">
                    <p className="text-black font-medium">React</p>
                  </Tag>
                  <Tag color="lime">
                    <p className="text-black font-medium">Css</p>
                  </Tag>
                </div>
              </div>
              <div className="flex w-full justify-start gap-5 mt-2">
                <a
                  href="https://github.com/AyushSharma72/ResumeBuilder"
                  target="blank"
                >
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <FaGithub /> Github
                  </button>
                </a>
                <a href="https://react-resume-builder.onrender.com/">
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <IoLink /> Explore
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide> */}

          {/* <SwiperSlide>
            <div className="flex flex-col w-[300px] gap-y-2 card rounded-lg p-5 h-[475px]">
              <QuizSlider />
              <p className="font-bold text-xl text-center bluegradient">
                Quiz Web App
              </p>
              <hr />
              <p className="flex text-start  text-white p-1">
                A Quiz web application created by me during my internship at
                salesqueen solutions. This website was made to conduct quizzes
                to the salesqueen employees. It was made using MERN stack
              </p>
              <div className="flex flex-col gap-y-2">
                <p className="text-white text-left">Developed with:</p>
                <div className="flex gap-2">
                  <Tag color="blue">
                    <p className="text-black font-medium">React</p>
                  </Tag>
                  <Tag color="lime">
                    <p className="text-black font-medium">Nodejs</p>
                  </Tag>
                  <Tag color="green">
                    <p className="text-black font-medium">Mongodb</p>
                  </Tag>
                </div>
              </div>
              <div className="flex w-full justify-start gap-5 mt-2">
                <a
                  href="https://github.com/AyushSharma72/quizapp"
                  target="blank"
                >
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <FaGithub /> Github
                  </button>
                </a>{" "}
                <a href="https://quizwebapp.onrender.com/" target="blank">
                  {" "}
                  <button className="projectbtns p-2 rounded-md text-white  flex items-center gap-2">
                    <IoLink /> Explore
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
