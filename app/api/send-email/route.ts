import { NextRequest } from "next/server";
import sgMail from "@sendgrid/mail";
import crypto from "crypto";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export default function POST(request: NextRequest) {
  const { name, email } = await request.json();
  const baseUrl = process.NEXT_PUBLIC_BASE_URL || "https://localhost:3000";
  const token = crypto.randomBytes(32).toString("hex");

  const message = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL || "paulo.ramirez@code.berlin",
    subject: "Welcome to our Waitlist!",
    text: `Hello ${name},\n\nThank you for joining our waitlist. We'll keep you updated on our progress!`,
    html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Waitlist Confirmation</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");

      body {
        font-family: "Inter", sans-serif;
        background-color: #ffffff;
        color: #000000;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      .header {
        text-align: center;
        padding: 20px 0;
      }

      .header h1 {
        font-size: 24px;
        margin: 0;
      }

      .content {
        padding: 20px;
        text-align: left;
      }

      .content p {
        font-size: 16px;
        line-height: 1.6;
      }

      .button {
        display: inline-block;
        margin: 20px 0;
        padding: 10px 20px;
        background-color: #007bff;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: 600;
      }

      .footer {
        text-align: center;
        padding: 20px 0;
        font-size: 12px;
        color: #666666;
      }

      @media (max-width: 600px) {
        .container {
          padding: 10px;
        }

        .content p {
          font-size: 14px;
        }

        .button {
          padding: 10px;
          font-size: 14px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Welcome to the Waitlist!</h1>
      </div>
      <div class="content">
        <p>Hi ${name},</p>
        <p>
          Thank you for joining the waitlist for
          <strong>&lt;2docs/&gt;</strong>. I'm excited to have you on board! 👋🏼
        </p>
        <p>Please confirm your subscription by clicking the button below:</p>
        <a href="${baseUrl}/confirm?token=${token}" class="button">Confirm Subscription</a>
        <p>
          If you did not sign up for this waitlist, please ignore this email.
        </p>
        <p>Best, Paulo 🤓</p>
      </div>

      <div class="footer">
        <p>&copy; 2024 &lt;2docs/&gt;. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
    `,
  };

  try {
    await sgMail.send(message);
    return new NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
