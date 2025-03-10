import React, { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { RiMessage2Fill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { FaSquareInstagram } from "react-icons/fa6";
import { Toaster, toast } from "react-hot-toast";
import { PulseLoader } from "react-spinners";

const CustomTextField = (props) => {
  return (
    <TextField
      {...props}
      InputLabelProps={{
        sx: {
          color: "white",
          "&.Mui-focused": {
            color: "white", // color of the label when focused
          },
        },
      }}
      InputProps={{
        classes: {
          root: "root",
        },
        autoComplete: "off",
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white", // default border color
          },
          "&:hover fieldset": {
            borderColor: "#8721da", // hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "#8721da", // focus border color
          },
          "& .MuiInputBase-input": {
            color: "white", // user input text color
            backgroundColor: "inherit",
          },
        },
      }}
    />
  );
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: form.current.from_name.value,
      from_Email: form.current.from_Email.value,
      message: form.current.message.value,
    };

    emailjs
      .send(
        "service_zuk4uaz",
        "template_e36i3fm",
        templateParams,
        "xh7AaDBWJ0H8oEgN4"
      ) // Replace with your EmailJS IDs
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          toast.success("Message Sent!", {
            style: {
              border: "1px solid #8721da",
              color: "#000000",
            },
            iconTheme: {
              primary: "#8721da",
              secondary: "#FFFFFF",
            },
          });
        },
        (error) => {
          setLoading(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex justify-center mt-5 flex-col items-center"
    >
      <div>
        <Toaster />
      </div>
      <p className="text-3xl text-white font-bold mt-5">
        Contact <span className="bluegradient">Me</span>
      </p>

      <div className="lg:flex lg:flex-row w-full justify-around mt-16 flex flex-col-reverse  ">
        <div className="flex gap-y-5 flex-col p-4 items-center sm:items-start">
          <p className="text-4xl text-white font-bold mt-5">
            Get in <span className="bluegradient">Touch</span>
          </p>

          <div className="flex items-center gap-3">
            <MdEmail className="text-white" />
            <p className="text-white">ritikpatidar077@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-white" />
            <p className="text-white">+91 9303605802</p>
          </div>
          <p className="text-4xl text-white font-bold mt-5">
            Connect With <span className="bluegradient">Me On </span>
          </p>

          <div className="flex items-center gap-6  ">
            <a
              href="https://www.linkedin.com/in/ritik-patidar-428348248/"
              target="blank"
              aria-label="LinkedIn Profile of Ritik Patidar"
            >
              <FaLinkedin className="text-white text-3xl" />
            </a>
            <a
              href="https://github.com/ritikpatidar77"
              target="blank"
              aria-label="Github Profile of Ritik Patidar"
            >
              <FaGithubSquare className="text-white text-3xl" />
            </a>
            <a
              href="https://www.instagram.com/i.rp0077?igsh=NThpNTl3amVqb3d1"
              target="blank"
              aria-label="Instagram Profile of Ritik Patidar"
            >
              <FaSquareInstagram className="text-white text-3xl" />
            </a>
          </div>
        </div>

        {/* contact form */}
        <div className="md:w-3/4 md:m-auto lg:w-[40%] lg:m-0">
          <form
            className="form flex flex-col gap-y-5 p-2"
            ref={form}
            onSubmit={sendEmail}
          >
            <Box
              sx={{ display: "flex" }}
              className="items-start gap-2 justify-center"
            >
              <FaCircleUser className="text-white mt-1" />
              <CustomTextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                className="w-[90%]"
                name="from_name"
                autoComplete="off"
                required
              />
            </Box>
            <Box
              sx={{ display: "flex" }}
              className="items-start gap-2 justify-center"
            >
              <MdEmail className="text-white mt-1" />
              <CustomTextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="w-[90%]"
                name="from_Email"
                autoComplete="off"
                type="email"
                required
              />
            </Box>
            <Box
              sx={{ display: "flex" }}
              className="items-start gap-2 justify-center"
            >
              <RiMessage2Fill className="text-white mt-1" />
              <CustomTextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                className="w-[90%]"
                multiline
                rows={4}
                name="message"
                autoComplete="off"
                required
              />
            </Box>
            <Box
              sx={{ display: "flex" }}
              className="items-start gap-2 justify-center lg:justify-start ml-10"
            >
              <button
                className="projectbtns p-2 rounded-md text-white font-semibold flex justify-center items-center sm:w-1/4 gap-2"
                type="submit"
                disabled={loading}
              >
                Send
                {loading ? (
                  <PulseLoader color="#ffffff" size={5} speedMultiplier={0.8} />
                ) : (
                  <IoIosSend />
                )}
              </button>
            </Box>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
