function sendEmailReminders(){


  // Class 2028 - Google Courses Progress spreadsheet
  const spreadsheet = getSpreadSheet();

  let sheet = spreadsheet.getSheetById("0");

  let progressDetails = sheet.getDataRange().getValues();

  let courseModuleArray = getCoursesAndModules(progressDetails);

  for (i = 2; i < progressDetails.length; i++){
    if (progressDetails[i][4] == ""){

      const emailSubject = 'Google Coursera Progress';
      const fullName = `${progressDetails[i][1].trim()} ${progressDetails[i][2].trim()}`;
      const pnEmailAddress = progressDetails[i][3];
      const noOfCertificates = progressDetails[i][5];
      const certificateSubmittedDetails = []
      let certificateStatus = "";

      console.log(`${fullName} - ${noOfCertificates} certificates submitted.`)

      for (j = 6; j < progressDetails[i].length; j++){
        if (progressDetails[i][j] != ""){
          let certificateValue = progressDetails[i][j].toString();
          certificateStatus =`${courseModuleArray[j-6]} (with ${certificateValue.toUpperCase()})`
        }
        else {
          certificateStatus = `${courseModuleArray[j-6]}`
        }
        
        certificateSubmittedDetails.push(certificateStatus);
      }

      const emailBody = sendCertificateSubmittedDetails(fullName, noOfCertificates, certificateSubmittedDetails);

      sendEmailBasic(pnEmailAddress, emailSubject, emailBody);
    }
  }
}

// Capture the courses titles and modules
function getCoursesAndModules(progressDetails){

  let isCourseTitlePresent = false;
  let courseTitle = "";
  let moduleTitle = "";
  const courseModuleArray = [];
  
  for (i=0; i<progressDetails[0].length; i++){
    if (progressDetails[0][i] != "" && isCourseTitlePresent == false){
      isCourseTitlePresent = true;
      courseTitle = progressDetails[0][i];
      moduleTitle = progressDetails[1][i]
    }

    else if (progressDetails[0][i] == "" && isCourseTitlePresent == true){
      moduleTitle = progressDetails[1][i]

    } 
    
    else if (progressDetails[0][i] != "" && isCourseTitlePresent == true){
      courseTitle = progressDetails[0][i]
      moduleTitle = progressDetails[1][i]
    }

    if (courseTitle != ""){
      courseModuleArray.push(`${courseTitle} - ${moduleTitle}`);
    }
  }

  return courseModuleArray;
}