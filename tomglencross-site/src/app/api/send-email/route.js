import nodemailer from 'nodemailer'


export async function POST(req) {
  const { name, email, message } = await req.json();

  // Set up a transporter using your email provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or use a custom SMTP provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  const mailOptions = {
    from: email, // Sender's email (provided by the user)
    to: process.env.EMAIL_USER, // Recipient email (yours)
    subject: `New message from ${name}`, // Email subject
    text: message, // Message content
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
