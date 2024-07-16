import React, { useState } from "react";
import { Input } from "./input";
import Button from "./button";
import { useAppContext } from "@/context/app";
import SelectComponent from "./select";
import { DatePickerComponent } from "./datePicker";

const RequestForm = () => {
  const { theme } = useAppContext();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [eventType, setEventType] = useState({
    id: "wedding",
    label: "Wedding",
  });
  const [eventDate, setEventDate] = useState(new Date());
  const [eventCountry, setEventCountry] = useState("");
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
    <div className="flex flex-col gap-4 w-full desktop:w-[720px] desktop:py-8">
      <h3 style={{ color: theme.text }} className="font-bold text-[24px] my-4">
        Request Form
      </h3>
      <div className="max-h-16">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full Name*"
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          label="Company (Optional)"
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email*"
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={userCountry}
          onChange={(e) => setUserCountry(e.target.value)}
          label="Country*"
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label="Phone*"
        />
      </div>
      <div className="max-h-16" onClick={(e) => e.stopPropagation()}>
        <SelectComponent
          value={eventType}
          setValue={setEventType}
          data={eventTypes}
        />
      </div>
      <div className="max-h-16">
        <DatePickerComponent date={eventDate} setDate={setEventDate} />
      </div>
      <div className="max-h-16">
        <Input
          type="number"
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
      <div className="pb-24">
        <div className="h-12  w-full rounded-full mt-6 shadow-xl">
          <Button
            title="Send Request"
            background={theme.text}
            color={theme.main}
            loading={loading}
            onClick={() => sendEmail()}
          />
        </div>
      </div>
    </div>
  );
};

export default RequestForm;

const eventTypes = [
  {
    id: "wedding",
    label: "Wedding",
  },
  {
    id: "corporation",
    label: "Corporate Event",
  },
  {
    id: "presentation",
    label: "Company / Product Presentation",
  },
  {
    id: "conferences",
    label: "Conference",
  },
  {
    id: "teambuildings",
    label: "Teambuilding",
  },
  {
    id: "other",
    label: "Other",
  },
];
