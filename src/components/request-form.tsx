import React, { useState } from "react";
import { Input } from "./input";
import Button from "./button";
import { useAppContext } from "@/context/app";
import SelectComponent from "./select";
import { DatePickerComponent } from "./datePicker";
import SimpleSnackbar from "@/components/snackbar";

const RequestForm = () => {
  const { theme, activeLanguage, setAlert } = useAppContext();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  async function sendEmail() {
    if (name?.length < 1 || email?.length < 1 || phone?.length < 1) {
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
          phone: phone,
          email: email,
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
      setEmail("");
      setPhone("");
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
    <div className="flex flex-col gap-2 w-full desktop:w-[720px] desktop:py-8">
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
          onChange={(e: any) => setName(e.target.value)}
          label={activeLanguage.fullName + "*"}
        />
      </div>

      <div className="max-h-16">
        <Input
          type="text"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          label={activeLanguage.email + "*"}
        />
      </div>

      <div className="max-h-16">
        <Input
          type="text"
          value={phone}
          onChange={(e: any) => setPhone(e.target.value)}
          label={activeLanguage.phone + "*"}
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
        <SimpleSnackbar />
      </div>
    </div>
  );
};

export default RequestForm;
