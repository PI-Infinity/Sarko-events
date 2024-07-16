// app/api/send-email/route.js

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { to, subject, text } = await req.json();

  if (!to || !subject || !text) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP host
    port: 587, // Replace with your SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // Your SMTP username
      pass: process.env.EMAIL_APP_PASSWORD, // Your SMTP password
    },
  });

  try {
    await transporter.sendMail({
      from: '"Sarko Events" <geomarketdevelopment@gmail.com>', // Sender address
      to,
      subject,
      text,
    });

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
