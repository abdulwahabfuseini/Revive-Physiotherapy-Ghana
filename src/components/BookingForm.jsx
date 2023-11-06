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
    subject: "",
    time: "",
    date: "",
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
    <div className="py-8 max-w-4xl mx-auto sm:px-4 px-3">
      <div>
        <h1 className="text-2xl sm:text-4xl py-4 text-center">Booking Form</h1>
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
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Please Select Time",
                },
              ]}
              hasFeedback
            >
              <Input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                onChange={handleChange}
                className="w-full py-2 text-lg border-2 cursor-pointer h-14"
              />
            </Form.Item>
            <Form.Item
              name="time"
              rules={[
                {
                  required: true,
                  message: "Please Enter Phone Number",
                },
              ]}
              hasFeedback
            >
              <Input
                type="time"
                name="time"
                onChange={handleChange}
                className="w-full py-2 text-lg border-2 cursor-pointer h-14"
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
                name="date"
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
                purpose: "Please Enter purpose",
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
            className=" my-4 text-xl cursor-pointer h-14 bg-main"
          >
            {loading ? "Booking Appointment..." : "Book an Appiontment"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default BookingForm;
