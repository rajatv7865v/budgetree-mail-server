const nodemailer = require("nodemailer");

exports.sendMail = async (req, resp) => {
  const { reciepents, subject, msg, phone } = req.body;

  if (reciepents && subject && msg) {
    console.log("re",reciepents)
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: "support@budgetree.in",
        pass: "Btpl@2025",
      },
    });

    // setup email data with unicode symbols

    let mailOptions = {
      from: "support@budgetree.in",
      to: reciepents,
      subject: subject,
      text: msg,
    };

    // send mail with defined transport object

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.accepted);
    });

    resp.status(200).json({ status: "true" });
  } else {
    resp.status(401).json({ status: "false", data: req.body });
  }
};
