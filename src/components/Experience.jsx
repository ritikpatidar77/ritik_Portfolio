import React, { useState } from "react";
import { Suspense } from "react";
import { Tag } from "antd";
import { Modal } from "antd";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import GoogleLogo from "../assets/experienceimages/Google.jpg";
import Dollop from "../assets/experienceimages/DollopINfotech.jpg";
import Infosys from "../assets/experienceimages/infosysSpringboard.png";
import GoogleCertificate from "../assets/experienceimages/GoogleCertificate.jpeg";
import InfosysCertificate from "../assets/experienceimages/InfosysCertificate.jpeg";
import Scaler from "../assets/experienceimages/ScalerCertificate.png";
import ScalerLogo from "../assets/experienceimages/Scaler.jpeg";
import UniversalLogo from "../assets/experienceimages/UniversalInformatics.jpeg";

import { FaCode } from "react-icons/fa6";

const Experience = () => {
  const [certificate, setcertificate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (c) => {
    setcertificate(c);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-y-5"
      id="Experience"
    >
      <p className="text-3xl text-white font-bold mt-5">
        My <span className="bluegradient">Experience</span>
      </p>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="Issued Feb 2025"
          icon={<img src={ScalerLogo} className="rounded-full"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Certified JavaScript Developer Program
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Certified in JavaScript from Scaler Academy, mastering modern ES6+
            concepts and best practices
          </h4>
          {/* tags */}
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>

            <Tag color="magenta">REST API Integration</Tag>

            <Tag color="orange">JavaScript Performance Optimization</Tag>
            <Tag color="cyan">Asynchronous Programming</Tag>
          </div>
          <div className="flex gap-x-4 items-center flex-wrap">
            <button
              className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4"
              onClick={() => {
                showModal("Scaler");
              }}
            >
              View Certificate
            </button>
            <a href="https://shorturl.at/dV0T0" target="blank">
              <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
                LinkedIn post
              </button>
            </a>
          </div>
          <Modal
            title="Certificate"
            open={isModalOpen}
            keyboard={true}
            width={800}
            okText={null}
            footer={null}
            onCancel={handleCancel}
            className="flex justify-center"
          >
            <Suspense fallback={<div>Loading...</div>}>
              {certificate == "Scaler" ? (
                <img
                  src={Scaler}
                  className="h-[500px]"
                  alt="Scaler Certificate"
                  loading="lazy"
                />
              ) : certificate == "InfosysCertificate" ? (
                <img
                  src={InfosysCertificate}
                  className="h-[500px]"
                  alt="Infosys"
                  loading="lazy"
                />
              ) : (
                <img
                  src={GoogleCertificate}
                  className="h-[500px]"
                  alt="IMC certificate"
                  loading="lazy"
                />
              )}
            </Suspense>
          </Modal>
        </VerticalTimelineElement>

        {/* sales queeen  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="August 2024 – Present"
          icon={<img src={Dollop} className="rounded-full"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Frontend Developer Intern
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Dollop Infotech Pvt. Ltd. Indore
          </h4>

          <p>
            Responsible for designing and developing responsive and
            user-friendly UI for web applications.
          </p>
          {/* tags */}
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="orange" className="flex items-center">
              Html
            </Tag>
            <Tag color="blue">Css</Tag>
            <Tag color="yellow">javascript</Tag>
            <Tag color="">ReactJs</Tag>
            <Tag color="">Bootstrap</Tag>
          </div>
        </VerticalTimelineElement>

        {/* hackhive */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work border-gradient-left "
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="Nov 2023"
          icon={<img src={GoogleLogo} className="rounded-full"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Google Analytics Certification
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Google</h4>
          <p>
            Google Analytics Certified – Skilled in tracking website traffic,
            user behavior, goal conversions, and data analysis for better
            decision-making
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="blue" className="flex items-center">
              Reporting & Insights
            </Tag>
            <Tag color="lime">Data Analysis & Interpretation</Tag>
            <Tag color="green">Goal & Conversion Tracking</Tag>
          </div>
          <button
            className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4"
            onClick={() => {
              showModal("InfosysCertificate  ");
            }}
          >
            View Certificate
          </button>
        </VerticalTimelineElement>

        {/* imc  */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work border-gradient-left "
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="Issued Nov 2023"
          icon={<img src={Infosys} className="rounded-full"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Young Industry Enthusiast - Capital Markets
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Infosys Springboard
          </h4>
          <p>
            Young Industry Enthusiast - Capital Markets Certified – Knowledge of
            financial markets, investment strategies, and market analysis.
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="blue" className="flex items-center">
              Financial Market Knowledge
            </Tag>
            <Tag color="lime"> Investment Strategies</Tag>
            <Tag color="green">Market Analysis</Tag>
          </div>
          <div className="flex gap-x-4 items-center flex-wrap">
            <button
              className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4"
              onClick={() => {
                showModal("InfosysCertificate");
              }}
            >
              View Certificate
            </button>
            <a href="https://shorturl.at/dV0T0" target="blank">
              <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
                LinkedIn post
              </button>
            </a>
          </div>
        </VerticalTimelineElement>

        {/* aws */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "transparent", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #8721da" }}
          date="21-july 2022 - 29-Sep-2022"
          icon={<img src={UniversalLogo} className="rounded-full"></img>}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            C/C++ Oops Traning Program
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Universal informatics
          </h4>
          <p>
            Learned C, C++, and core OOP concepts like classes, objects, and
            inheritance.
          </p>
          <div className="flex mt-1 items-center gap-1 flex-wrap">
            <Tag
              color="#cd201f"
              icon={<FaCode />}
              className="flex items-center gap-1"
            >
              Skills:
            </Tag>
            <Tag color="orange">Object-Oriented Programming</Tag>
            <Tag color="blue" className="flex items-center">
              C/C++ Fundamentals
            </Tag>
            <Tag color="magenta">Control Structures</Tag>
          </div>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7186322706936582144?utm_source=share&utm_medium=member_desktop"
            target="blank"
          >
            <button className="projectbtns p-2 rounded-md text-white font-semibold flex items-center gap-2 mt-4">
              LinkedIn post
            </button>
          </a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
