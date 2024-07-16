import React, { useState } from "react";
import { Input } from "./input";
import Button from "./button";
import { useAppContext } from "@/context/app";

const RequestForm = () => {
  const { theme } = useAppContext();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [eventType, setEventType] = useState("");
  const [date, setDate] = useState("");
  const [totalMembers, setTotalMembers] = useState("");
  const [comment, setComment] = useState("");

  async function sendEmail() {
    setLoading(true);
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "tornike.pirtakhia@gmail.com",
        subject: "Test Email",
        text: "Hello, this is a test email!",
      }),
    });
    const result = await response.json();

    if (response.ok) {
      console.log(result.message);
      setLoading(false);
    } else {
      console.error(result.error);
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col gap-4 w-full pb-8">
      <h3 style={{ color: theme.text }} className="font-bold text-[24px] mb-2">
        Request Form
      </h3>
      <div className="h-12">
        <Input type="text" value={name} onChange={setName} label="Full Name*" />
      </div>
      <div className="h-12">
        <Input type="text" value={email} onChange={setEmail} label="Email*" />
      </div>
      <div className="h-12">
        <Input
          type="text"
          value={userCountry}
          onChange={setUserCountry}
          label="Where are you from?*"
        />
      </div>
      <div className="h-12">
        <Input
          type="text"
          value={phone}
          onChange={setPhone}
          label="Phone (Optional)"
        />
      </div>
      <div className="h-12">
        <Input
          type="text"
          value={eventType}
          onChange={setEventType}
          label="Event Type*"
        />
      </div>
      <div className="h-12">
        <Input
          type="text"
          value=""
          onChange={() => undefined}
          label="Event Location*"
        />
      </div>
      <div className="h-12">
        <Input
          type="text"
          value=""
          onChange={() => undefined}
          label="Event Date*"
        />
      </div>
      <div className="h-12">
        <Input
          type="text"
          value=""
          onChange={() => undefined}
          label="Total of Guests*"
        />
      </div>
      <div className="h-24">
        <Input
          type="text"
          value={comment}
          onChange={setComment}
          label="Comment (Optional)"
        />
      </div>
      <div className="h-12 w-full rounded-full mt-4 shadow-xl">
        <Button
          title="Send email"
          background={theme.background}
          color={theme.text}
          loading={loading}
          onClick={() => sendEmail()}
        />
      </div>
    </div>
  );
};

export default RequestForm;
