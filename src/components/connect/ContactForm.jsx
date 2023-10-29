"use client";

import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (values) => {
    setLoading(true);
    emailjs
      .send(
        "service_mon6fae",
        "template_42kwqac",
        {
          name: contact.name,
          email: contact.email,
          phoneNumber: contact.phoneNumber,
          message: contact.message,
        },
        "9vSC2INYrwofrkKDo"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for contacting Revive Physiotherapy - Ghana, We will get back to you as soon as possible. Stay Bless!!!"
          );
          setContact();
          form.resetFields();
        },
        (error) => {
          setLoading(false);
          alert("oops!!! Something went wrong");
        }
      );
  };

  return (
    <div className="w-full h-full">
      <h1 className="pb-4 text-center text-2xl">Leave a Message</h1>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item
          name="name"
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
            name="name"
            onChange={handleChange}
            className="w-full h-12 text-lg cursor-pointer border-2"
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
            className="h-12 w-full text-lg cursor-pointer border-2"
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
            className="h-12 w-full py-2 text-lg cursor-pointer border-2"
          />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: "Please Enter message",
            },
          ]}
        >
          <TextArea
            type="text"
            placeholder="Enter Message"
            name="message"
            onChange={handleChange}
            className="py-2 text-lg w-full cursor-pointer border-2"
          />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          className="h-12 w-full my-4 text-xl bg-main cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
