const transporter = require('../config/nodemailer');

const sendEnquiry = (req, res) => {
  const { name, number, phone, email, quantity, company, type, message } = req.body;
  const contactNumber = phone || number;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Enquiry: ${type}`,
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Contact Number:</strong> ${contactNumber}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${quantity ? `<p><strong>Quantity:</strong> ${quantity}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${message ? `<p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>` : ''}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send enquiry.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Enquiry sent successfully!' });
  });
};

module.exports = {
  sendEnquiry,
};
