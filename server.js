import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
});

app.get("/api/ping", (req, res) => {
  res.send("Pong");
});

app.post("/api/contact", async(req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("Recieved form data:", req.body);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length > 50) {
    return res.status(400).json({error: "Name is too long"})
  }
  
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  if (subject.length > 100){
    return res.status(400).json({error: "Subject is too long."});
  }

  if (message.length < 10 || message.length > 450) {
    return res.status(400).json({ error: "Message is too short/too long." });
  }

const mailOptions = {
    from: email,
    to: process.env.SMTP_USER,
    subject: subject || "New Contact Form Submission",
    text: `You have a message from ${name} (${email}):\n\n${message}`,
};

try {
  await transporter.sendMail(mailOptions);
  res.status(200).json({ message: "Email sent successfully!" });
} catch (error) {
  console.error("Error sending email:", error);
  res.status(500).json({ error: "Failed to send email." });
}
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
