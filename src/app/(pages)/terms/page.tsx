"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useAppContext } from "@/context/app";

const termsContent = {
  en: {
    title: "Terms of Use",
    last_update: "Last Updated",
    intro: `Welcome to Sarko Events! These Terms of Use ("Terms") govern your access to and use of our website 
      (www.sarkoevents.com), services, and related platforms. By using our website and services, you agree to these Terms. 
      If you do not agree, please do not use our services.`,
    sections: [
      {
        title: "1. Acceptance of Terms",
        text: `By accessing and using our website, you confirm that you have read, understood, and agree to these Terms. 
        We reserve the right to modify these Terms at any time. Continued use of our website and services after updates 
        means acceptance of the revised Terms.`,
      },
      {
        title: "2. Services",
        text: `Sarko Events provides event planning and management services, including but not limited to:
        - Pre-wedding events
        - Corporate events
        - Private ceremonies
        - Other customized events
        
        We reserve the right to modify, suspend, or discontinue any service at our discretion.`,
      },
      {
        title: "3. User Responsibilities",
        text: `When using our website and services, you agree to:
        - Provide accurate and complete information when requested.
        - Not engage in illegal, fraudulent, or harmful activities.
        - Not attempt unauthorized access to our systems or data.
        - Respect Sarko Events' and third-party intellectual property rights.`,
      },
      {
        title: "4. Booking and Payments",
        text: `- Booking is subject to availability and confirmation.
        - Payments must be made according to agreed terms and are processed through secure third-party systems.
        - Sarko Events reserves the right to cancel bookings due to unforeseen circumstances, with refunds processed 
        according to our cancellation policy.`,
      },
      {
        title: "5. Cancellation and Refunds",
        text: `- Cancellations within the agreed timeframe may be eligible for a refund as per individual contract terms.
        - Refund requests must be submitted in writing to our support team.
        - Sarko Events is not responsible for third-party service provider refunds.`,
      },
      {
        title: "6. Intellectual Property",
        text: `- All content on our website, including text, images, logos, and designs, is owned by or licensed to Sarko Events.
        - Reproduction, distribution, or modification of our content without prior written consent is prohibited.`,
      },
      {
        title: "7. Liability Limitation",
        text: `- Sarko Events is not responsible for losses, damages, or claims resulting from the use of our website or services.
        - We do not guarantee uninterrupted website access or error-free services.
        - We disclaim responsibility for services provided by third-party vendors.`,
      },
      {
        title: "8. Privacy Policy",
        text: `Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.`,
      },
      {
        title: "9. Third-Party Links",
        text: `Our website may contain links to third-party websites. We are not responsible for their content, privacy policies, or practices.`,
      },
      {
        title: "10. Violation and Account Termination",
        text: `We reserve the right to suspend or terminate access to our services if you violate these Terms, engage in illegal activities, 
        or pose a threat to Sarko Events or its users.`,
      },
      {
        title: "11. Legal Matters and Dispute Resolution",
        text: `- These Terms are governed by the laws of Georgia.
        - Disputes must first be resolved through negotiation. If unresolved, disputes will be settled in the courts of Georgia.`,
      },
      {
        title: "12. Contact Information",
        text: `If you have questions about these Terms, you can contact us:
        - 📧 Email: sarko.events@gmail.com
        - 🌍 Website: www.sarkoevents.com`,
      },
    ],
  },
  ka: {
    title: "გამოყენების წესები",
    last_update: "ბოლო განახლება",
    intro: `კეთილი იყოს თქვენი მობრძანება Sarko Events-ში! აღნიშნული გამოყენების წესები ("წესები") არეგულირებს 
      თქვენს წვდომას და გამოყენებას ჩვენი ვებსაიტის (www.sarkoevents.com), სერვისებისა და დაკავშირებული პლატფორმების ფარგლებში. 
      ჩვენი სერვისების გამოყენებით, თქვენ ეთანხმებით ამ წესებს. თუ არ ეთანხმებით, გთხოვთ, ნუ გამოიყენებთ ჩვენს სერვისებს.`,
    sections: [
      {
        title: "1. წესების მიღება",
        text: `ვებსაიტზე შესვლით და მისი გამოყენებით, თქვენ ადასტურებთ, რომ წაიკითხეთ, გაიგეთ და ეთანხმებით აღნიშნულ წესებს. 
        ჩვენ ვიტოვებთ უფლებას, შევცვალოთ ეს წესები ნებისმიერ დროს. ვებსაიტის გამოყენება განახლებული პირობების გამოქვეყნების შემდეგ ნიშნავს მათ მიღებას.`,
      },
      {
        title: "2. სერვისები",
        text: `Sarko Events უზრუნველყოფს ღონისძიებების ორგანიზებისა და მართვის სერვისებს, როგორიცაა:
        - წინასაქორწილო ღონისძიებები
        - კორპორატიული ღონისძიებები
        - კერძო ცერემონიები
        - სხვა სახის ღონისძიებები
        
        ჩვენ ვიტოვებთ უფლებას, შევცვალოთ, შევაჩეროთ ან შევწყვიტოთ ნებისმიერი სერვისი.`,
      },
      {
        title: "3. მომხმარებლის ვალდებულებები",
        text: `თქვენ ვალდებული ხართ:
        - მიაწოდოთ ზუსტი და სრული ინფორმაცია.
        - არ გამოიყენოთ ვებსაიტი არამართლზომიერი მიზნებისთვის.
        - არ სცადოთ ჩვენი სისტემების არაკანონიერი ხელმისაწვდომობა.`,
      },
    ],
  },
};

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState("en");
  const searchParams = useSearchParams();

  const { activeLanguage, loading } = useAppContext();

  useEffect(() => {
    const langFromCookies = Cookies.get("language") || "en";
    setLanguage(searchParams.get("lang") || langFromCookies);
  }, [searchParams]);

  const content = termsContent[language] || termsContent.en;

  const [showButton, setshowButton] = useState(false);

  useEffect(() => {
    const hasAccepted = Cookies.get("termsAccepted");
    // const hasAccepted = false;
    if (!hasAccepted) {
      setTimeout(() => setshowButton(true), 500); // 1 წამში გამოჩნდება
    }
  }, []);

  const acceptTerms = () => {
    Cookies.set("termsAccepted", "true", { expires: 365 }); // 1 წელი იმახსოვრებს
    setshowButton(false);
  };

  return (
    <div
      className="p-6 text-white desktop:mt-24 mt-24 desktop:px-24 flex-col"
      style={{ display: loading ? "none" : "flex" }}
    >
      <div className="max-w-4xl text-white">
        <h1 className="text-3xl font-bold ">{content.title}</h1>
        <p className=" text-white-600 mb-8">
          {content.last_update}:{" "}
          <span className="font-semibold">[15.03.2025]</span>
        </p>
        <p className="mb-6">{content.intro}</p>
        {content.sections.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-3">
              {section.title}
            </h2>
            <p>{section.text}</p>
          </section>
        ))}
      </div>
      {showButton && (
        <button
          onClick={acceptTerms}
          className="w-48 mt-4 bg-white text-black px-12 py-1 rounded-lg hover:bg-gray-300 transition text-sm font-[600]"
        >
          {activeLanguage?.i_accept}
        </button>
      )}
    </div>
  );
}
