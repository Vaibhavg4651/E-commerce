const nodemailer =require( "nodemailer")
const sendEmail=async(email,data)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD
        }
       });
       
       var mailOptions = {
        from:process.env.EMAIL_ID,
        to: email,
        subject: `verify your email for TraversyTravellers `,
         html:`<h4>click on following link to verify your email</h4><br/><a href=https://pro-shop-ecommerce.onrender.com/verify/${code}>Click Here</a><br/><p>If you have not requested then please ignore it</p>`
       };
       
       transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } 
       });
}
module.exports= sendEmail;