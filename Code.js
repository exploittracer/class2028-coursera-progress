function sendEmailReminders(){

  const emailSubject = 'Google Coursera Progress';

  // Class 2028 - Google Courses Progress spreadsheet
  const spreadsheet = getSpreadSheet();

  let sheet = spreadsheet.getSheetById("0");

  let progressDetails = sheet.getDataRange().getValues();

  // console.log(progressDetails.length);

  for (i = 2; i < progressDetails.length; i++){
    if (progressDetails[i][4] != "No access"){
      const fullName = `${progressDetails[i][1].trim()} ${progressDetails[i][2].trim()}`;
      const pnEmailAddress = progressDetails[i][3];
      const noOfCertificates = progressDetails[i][5];

      const emailBody = sendNoOfCertReminder(fullName, noOfCertificates);

      sendEmailBasic(pnEmailAddress, emailSubject, emailBody);
    }
  }
}