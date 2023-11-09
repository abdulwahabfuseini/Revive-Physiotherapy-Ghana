"use client";

import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const BookingForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    time: "",
    date: "",
    address: "",
    city: "",
    purpose: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });
      if (res.ok) {
        form.resetFields();
      }
    } catch (error) {
      alert("Oooop!!! Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl px-3 py-8 mx-auto sm:px-4">
      <div>
        <h1 className="pb-8 text-2xl text-center uppercase sm:text-4xl">
          Medical Appointment Form
        </h1>
        <Form onFinish={handleSubmit} form={form}>
          <div className="grid sm:grid-cols-2 gap-x-3">
            <Form.Item
              name="fullname"
              rules={[
                {
                  required: true,
                  message: "Please Enter Full Name",
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter Full Name"
                name="fullname"
                onChange={handleChange}
                className="w-full text-lg border-2 cursor-pointer h-14"
                type="text"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Enter email",
                },
                { type: "email" },
              ]}
              hasFeedback
            >
              <Input
                type="email"
                placeholder="Enter your Email"
                name="email"
                onChange={handleChange}
                className="w-full text-lg border-2 cursor-pointer h-14"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please Enter Phone Number",
                },
              ]}
              hasFeedback
            >
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                className="w-full py-2 text-lg border-2 cursor-pointer h-14"
              />
            </Form.Item>
            <Form.Item
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please Select Gender",
                },
              ]}
              hasFeedback
            >
              <Input
                type="text"
                placeholder="Enter Gender"
                name="gender"
                onChange={handleChange}
                className="w-full py-2 text-lg border-2 cursor-pointer h-14"
              />
            </Form.Item>
            <Form.Item
              name="time"
              rules={[
                {
                  required: true,
                  message: "Please Select Time",
                },
              ]}
              hasFeedback
            >
              <Input
               type="time"
                name="time"
                placeholder="Select Appointment Time"
                onChange={handleChange}
                className="relative w-full py-2 text-lg border-2 cursor-pointer h-14"
              />
            </Form.Item>
            <Form.Item
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please Select Date",
                },
              ]}
              hasFeedback
            >
              <Input
                type="date"
                placeholder="Select Appiontment Date"
                name="date"
                onChange={handleChange}
                className="w-full py-2 text-lg border-2 cursor-pointer h-14 placeholder:bg-black"
              />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please Enter Address",
                },
              ]}
              hasFeedback
            >
              <Input
                type="text"
                placeholder="Enter Address"
                name="address"
                onChange={handleChange}
                className="w-full py-2 text-lg border-2 cursor-pointer h-14"
              />
            </Form.Item>
            <Form.Item
              name="city"
              rules={[
                {
                  required: true,
                  message: "Please Enter City/Town",
                },
              ]}
              hasFeedback
            >
              <Input
                type="text"
                placeholder="Enter City/Town"
                name="city"
                onChange={handleChange}
                className="w-full py-2 text-lg border-2 cursor-pointer h-14"
              />
            </Form.Item>
          </div>
          <Form.Item
            name="purpose"
            rules={[
              {
                required: true,
                message: "Please Enter Purpose of Appointment",
              },
            ]}
          >
            <TextArea
              type="text"
              placeholder="Purpose of Appiontment"
              name="purpose"
              onChange={handleChange}
              className="w-full py-2 text-lg border-2 cursor-pointer"
            />
          </Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="h-12 my-4 text-lg cursor-pointer sm:text-xl bg-main"
          >
            {loading ? "Booking Appointment..." : "Book an Appiontment"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;

{
  /* <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} /> */
}
// import antd/dist/reset.css
// antd/dist/antd.css

// primary-color: #f5222d;

// import { TimePicker } from 'antd';
// import moment from 'moment';
// import 'antd/dist/antd.css';

// const CustomTimePicker = () => {
//   return (
//     <TimePicker
//       locale={customLocale}
//       defaultValue={moment()}
//       // Other TimePicker props...
//     />
//   );
// };

// export default CustomTimePicker;

// /* Your CSS file */
// .custom-timepicker .ant-time-picker-footer-btn {
//   /* Adjust background-color, color, or any other styles as needed */
//   background-color: #f5222d; /* Example background color */
//   color: white; /* Example text color */
//   border-color: #f5222d; /* Example border color */
//   /* Any other styles */
// }
