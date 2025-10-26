import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, mobile, message } = req.body;

  if (!name || !email || !mobile || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can change to Outlook, SMTP, etc.
      auth: {
        user: process.env.EMAIL_USER, // 👉 your Gmail/SMTP username
        pass: process.env.EMAIL_PASS, // 👉 your Gmail App Password (not raw password!)
      },
    });

    // ✅ Email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // sender details
      to: process.env.EMAIL_USER,   // your inbox
      subject: "📩 New Contact Form Submission - BeaverHealthAI",
      text: `
        You have a new message from BeaverHealthAI Contact Form:

        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ success: false, message: "Error sending email", error: error.message });
  }
}
