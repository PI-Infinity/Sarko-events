import React, { useState } from "react";
import { Input } from "./input";
import Button from "./button";
import { useAppContext } from "@/context/app";
import SelectComponent from "./select";
import { DatePickerComponent } from "./datePicker";

const RequestForm = () => {
  const { theme, activeLanguage, setAlert } = useAppContext();

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
  const [eventStartingDate, setEventStartingDate] = useState(new Date());
  const [eventEndingDate, setEventEndingDate] = useState(new Date());
  const [totalMembers, setTotalMembers] = useState("");
  const [comment, setComment] = useState("");

  async function sendEmail() {
    if (
      name?.length < 1 ||
      email?.length < 1 ||
      phone?.length < 1 ||
      userCountry?.length < 1
    ) {
      return setAlert({
        text: activeLanguage.pleseInputFields,
        type: "warning",
        active: true,
      });
    }
    setLoading(true);
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "tornike.pirtakhia@gmail.com",
        subject: "New Request",
        text: JSON.stringify({
          name: name,
          company: company,
          phone: phone,
          email: email,
          country: userCountry,
          eventType: eventType,
          startingDate: eventStartingDate,
          endingDate: eventEndingDate,
          totalMembers: totalMembers,
          comment: comment,
        }),
      }),
    });
    const result = await response.json();
    alert({
      text: activeLanguage.requestSentSuccessfully,
      type: "success",
      active: true,
    });
    setAlert({
      text: activeLanguage.requestSentSuccessfully,
      type: "success",
      active: true,
    });
    if (response.ok) {
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setUserCountry("");
      setLoading(false);
      setEventType({
        id: "wedding",
        label: "Wedding",
      });
      setEventStartingDate(new Date());
      setEventEndingDate(new Date());
      setTotalMembers("");
      setComment("");
    } else {
      console.error(result.error);
      setLoading(false);
    }
  }

  const eventTypes = [
    {
      id: "wedding",
      label: activeLanguage.wedding,
    },
    {
      id: "corporation",
      label: activeLanguage.corporation,
    },
    {
      id: "presentation",
      label: activeLanguage.presentation,
    },
    {
      id: "conferences",
      label: activeLanguage.conference,
    },
    {
      id: "teambuildings",
      label: activeLanguage.teambuilding,
    },
    {
      id: "other",
      label: activeLanguage.other,
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full desktop:w-[720px] desktop:py-8">
      <h3
        style={{ color: theme.text }}
        className="font-bold text-[24px] desktop:my-4"
      >
        {activeLanguage.requestForm}
      </h3>
      <div className="max-h-16">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label={activeLanguage.fullName + "*"}
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          label={activeLanguage.company + " " + activeLanguage.optional}
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={activeLanguage.email + "*"}
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={userCountry}
          onChange={(e) => setUserCountry(e.target.value)}
          label={activeLanguage.country + "*"}
        />
      </div>
      <div className="max-h-16">
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          label={activeLanguage.phone + "*"}
        />
      </div>
      <div className="max-h-16" onClick={(e) => e.stopPropagation()}>
        <SelectComponent
          value={eventType}
          setValue={setEventType}
          data={eventTypes}
        />
      </div>
      <div className="desktop:max-h-16">
        <DatePickerComponent
          startingDate={eventStartingDate}
          setStartingDate={setEventStartingDate}
          endingDate={eventEndingDate}
          setEndingDate={setEventEndingDate}
        />
      </div>
      <div className="max-h-16">
        <Input
          type="number"
          value={totalMembers}
          onChange={(e) => setTotalMembers(e.target.value)}
          label={activeLanguage.totalOfGuests + " " + activeLanguage.optional}
        />
      </div>
      <div className="h-24">
        <Input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          label={activeLanguage.comment + " " + activeLanguage.optional}
        />
      </div>
      <div className="pb-12">
        <div className="h-12  w-full rounded-full mt-6 shadow-xl">
          <Button
            title={activeLanguage.sendRequest}
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
