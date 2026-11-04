
/**
 * Email template to send the reminder
 */

function sendNoOfCertReminder(name, number) {

  var htmlBody = `
  <div>
      Hi <b>${name}</b>,
      <br><br>
      Good day!
      <br><br>
      Reminding you of the number of certificates you have provided: <b>${number}</b>
      <br><br>
      Kindly take the time in making progress with your Coursesa courses.
      <br><br>
      Once you have received a certificate, email me a copy for my reference.
      <br><br>
      Thank you.
  </div><br>

  ${getEmailSignature()}

  `;

  return htmlBody;
}


/***
 * Email template with the actual courses
 */

// function sendCertDetails(name)