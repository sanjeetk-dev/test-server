import cron from "cron"
import nodemailer from "nodemailer"
import https from "https"
export const job = new cron.CronJob("*/10 * * * *", async () => {
  
  https
    .get(process.env.URL, (res) => {
      if(res.statusCode === 200) console.log("works")
      else console.log("not wroked")
    })
    .on("error" , (e) => console.log( "Error while sending request",e))
  
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "your_gmail_address",
  //     pass: "your_gmail_password",
  //   },
  // })

  // const mailOptions = {
  //   from: "your_gmail_address",
  //   to: "recipient_email_address",
  //   subject: "Daily Reminder",
  //   text: "This is a reminder to check your tasks and updates.",
  // }

  // try {
  //   await transporter.sendMail(mailOptions)
  //   console.log("Email sent successfully")
  // } catch (error) {
  //   console.error("Error sending email:", error)
  // }
})