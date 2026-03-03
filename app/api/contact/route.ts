import * as nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1️⃣ Mail to Company
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2️⃣ Auto Reply to User
    await transporter.sendMail({
  from: `"3D Business Models" <${process.env.EMAIL_USER}>`,
  to: email,
  subject: "We Received Your Message",
  html: `
    <div style="font-family: Arial, sans-serif; padding:20px;">
      
      <div style="text-align:center; margin-bottom:20px;">
        <img 
          src="\logo 2.png" 
          alt="Company Logo" 
          width="150"
          style="margin-bottom:10px;"
        />
      </div>

      <h2 style="color:#0044ff;">Hello ${name},</h2>

      <p>Thank you for contacting us.</p>
      <p>We have received your message and our team will get back to you shortly.</p>

      <br/>

      <p style="margin-top:30px;">Regards,</p>
      <p><strong>3D Business Models Team</strong></p>

      <hr style="margin:30px 0;" />

      <p style="font-size:12px; color:gray;">
        This is an automated email. Please do not reply directly.
      </p>
    </div>
  `,
});
    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}