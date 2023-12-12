"use client";

import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const Rate = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    // picture: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("/api/patient", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
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
    <div className="grid gap-4 py-3 sm:grid-cols-2 gap-y-6">
      <div>
        <header className="text-3xl capitalize text-main">
          Rate our performance by providing your details
        </header>
        <div className="flex items-center gap-2 py-3">
          <h1 className="font-semibold text-green-600 uppercase ">
            Say Something About Revive
          </h1>
          <span className="w-10 h-[1.8px] bg-green-600 sm:w-8 lg:w-16"></span>
        </div>
      </div>
      <Form onFinish={handleSubmit} form={form}>
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
        {/* <Form.Item
          name="picture"
          rules={[
            {
              required: true,
              message: "Please Select Image",
            },
          ]}
          hasFeedback
        >
          <Input
            type="file"
            name="picture"
            onChange={handleChange}
            accept=".jpg,.png,.jpeg"
            className="bg-gray-100 border-none"
          />
        </Form.Item> */}
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please Enter Description",
            },
          ]}
        >
          <TextArea
            type="text"
            placeholder="Say Something about Revive"
            name="description"
            onChange={handleChange}
            className="w-full py-2 text-lg border-2 cursor-pointer"
          />
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          className="h-12 my-2 text-xl cursor-pointer bg-main"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
};

export default Rate;
