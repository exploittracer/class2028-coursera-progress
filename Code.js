function sendEmailReminders(){

  const emailSubject = 'Google Coursera Progress';

  // Class 2028 - Google Courses Progress spreadsheet
  const spreadsheet = getSpreadSheet();

  let sheet = spreadsheet.getSheetById("0");

  let progressDetails = sheet.getDataRange().getValues();

  // Capture the courses titles and modules
  let isCourseTitlePresent = false;
  let courseTitle = "";
  let moduleTitle = "";
  const courseModuleArray = [];
  
  for (i=0; i<progressDetails[0].length; i++){
    if (progressDetails[0][i] != "" && isCourseTitlePresent == false){
      isCourseTitlePresent = true;
      courseTitle = progressDetails[0][i];
      moduleTitle = progressDetails[1][i]
      // console.log(progressDetails[0][i]);
      // console.log(progressDetails[1][i]);
    }
    else if (progressDetails[0][i] == "" && isCourseTitlePresent == true){
      moduleTitle = progressDetails[1][i]
      // console.log(courseTitle);
      // console.log(progressDetails[1][i]);

    } else if (progressDetails[0][i] != "" && isCourseTitlePresent == true){
      courseTitle = progressDetails[0][i]
      moduleTitle = progressDetails[1][i]
      // console.log(progressDetails[0][i]);
      // console.log(progressDetails[1][i]);
    }
    if (courseTitle != ""){
      // console.log(`${courseTitle} - ${moduleTitle}`);
      courseModuleArray.push(`${courseTitle} - ${moduleTitle}`);
    }

  }

  console.log(courseModuleArray);


  // for (i = 2; i < progressDetails.length; i++){
  //   if (progressDetails[i][4] != "No access"){
  //     const fullName = `${progressDetails[i][1].trim()} ${progressDetails[i][2].trim()}`;
  //     const pnEmailAddress = progressDetails[i][3];
  //     const noOfCertificates = progressDetails[i][5];

  //     const emailBody = sendNoOfCertReminder(fullName, noOfCertificates);

  //     sendEmailBasic(pnEmailAddress, emailSubject, emailBody);
  //   }
  // }
}