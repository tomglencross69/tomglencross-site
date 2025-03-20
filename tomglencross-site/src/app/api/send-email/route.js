import nodemailer from 'nodemailer'


export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email, 
    to: process.env.EMAIL_USER, 
    subject: `New message from ${name}`, 
    text: message, 
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
