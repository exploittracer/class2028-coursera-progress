
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

function sendCertificateSubmittedDetails(name, number, certificateSubmitted){

  let certificateSubmittedList = certificateSubmitted.map(range => {
    return `<li>${range}</li>`;
  }).join("");


  var htmlBody = `
  <div>
      Good day <b>${name}</b>,
      <br><br>
      This is to notify you of the number of certificates you have provided: <b>${number} certificates</b>
      <br><br>
      Please refer to the details below of the courses - modules where you have submitted a certificate:
      <ul>
        ${certificateSubmittedList}
      </ul>

      <br>
      Kindly take the time in making progress with your Coursesa courses.
      <br><br>
      Once you have received a certificate, email me a copy for my reference.
      <br><br>
      Please disregard this email if you are done submitting all the certificates. If you have taken a course - module not in the list, feel free to submit a certificate.
      <br><br>
      If you have some questions or clarifications, feel free to send me a message.
      <br><br>
      Thank you!
  </div><br><br>

  ${getEmailSignature()}

  `;
  return htmlBody;
}