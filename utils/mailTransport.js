import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "agustin@creativedog.agency",
    pass: "adelos94",
  },
});

export default transporter