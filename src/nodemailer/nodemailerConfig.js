import nodemailer from "nodemailer"
import { userService } from "../apiArquitecture/user/userService.js";
import { ADMIN_EMAIL } from "../config/env.js";

 let transporter = nodemailer.createTransport({
    service: "gmail", 
    port: 587,
    auth: {
      user: "jorgeandresmm2002@gmail.com", 
      pass: "xsuutqaoqqaztzzk", 
    },
  });


  export async function sendEmail(email, products, total){ 

    const user = await userService.getByEmail(email)

      await transporter.sendMail({ 
        from:"Food Market", 
        to:ADMIN_EMAIL, 
        subject:"Purchase", 
        html:`<h1>Hello ${user.name}</h1>
              <h2>Your purchase is on its way.</h2>
              <p>Thanks for be a part of this family</p>
              <b>TOTAL: ${total}</b>`
              
      })

      await transporter.sendMail({ 
        from:"Food Market", 
        to:email, 
        subject:"Purchase", 
        html:`<h1>Hello ${user.name}</h1>
        <h2>Your purchase is on its way.</h2>
        <p>Thanks for be a part of this family</p>
        <b>TOTAL: ${total}</b>`
      })
}


