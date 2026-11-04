// The function to send an email
function sendEmailBasic(recipient, title, body){
  MailApp.sendEmail({
    to:recipient,
    subject: title,
    htmlBody: body
  })
  console.log(`Email sent to ${recipient}.`)
}

