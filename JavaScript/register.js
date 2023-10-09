import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import 'https://smtpjs.com/v3/smtp.js'

// import {SMTPClient} from 'https://cdn.jsdelivr.net/npm/emailjs@4.0.3/email.min.js'
// console.log(SMTPClient)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBHtszcovM8QQb7RxqU8lkmANjAIn6uc",
  authDomain: "codeadept2023.firebaseapp.com",
  projectId: "codeadept2023",
  storageBucket: "codeadept2023.appspot.com",
  messagingSenderId: "454622602321",
  appId: "1:454622602321:web:bbdf33889cd5489d64c470",
  measurementId: "G-1GSY8Y5JBC"
};

export const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, push, set, get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

let allRegisteredEmails = [];

var check9 = true;

console.log(allRegisteredEmails);

function writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills) {
  const db = getDatabase();
  const postListRef = ref(db, 'registeredStudents');
  const newPostRef = push(postListRef);
  set(newPostRef, {
    firstName: firstName,
    lastName: lastName,
    emailId: emailId,
    enrollmentNo: enrollmentNo,
    branch: branch,
    University_College: University_College,
    contactNo: contactNo,
    previousSkills: previousSkills,
  })
    .then(() => {
      document.querySelector(".spinnerDiv").classList.add("d-none");
      swal("Registered!", "You have successfully registered for this event. You will receive an email within 24 hours. If you do not receive any email, please contact our team.", "success")
      .then(() => {
        location.reload();
      })
    })
    .catch(() => {
      document.querySelector(".spinnerDiv").classList.add("d-none");

    })
}


submit_btn.addEventListener("click", function () {
  document.querySelector(".spinnerDiv").classList.remove("d-none");

  check9 = true;

  let firstName = document.querySelector("#firstName").children[0].value;
  console.log(firstName);

  let check1 = false;

  if (firstName == '') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #firstName::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check1 = true;
  }

  document.getElementById("firstName").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #firstName::after{
           content: "";
          }
         </style>
      `);
  })

  let lastName = document.getElementById("lastName").children[0].value;
  console.log(lastName);

  let check2 = false;

  if (lastName == '') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #lastName::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check2 = true;
  }

  document.getElementById("lastName").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #lastName::after{
           content: "";
          }
         </style>
      `);
  })

  let emailId = document.getElementById("emailId").children[0].value;
  console.log(emailId);

  let check3 = false;

  if (emailId == '') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #emailId::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else if (!emailId.includes("@gmail.com")) {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #emailId::after{
           content: "*invalid email ID";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check3 = true;
  }

  document.getElementById("emailId").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #emailId::after{
           content: "";
          }
         </style>
      `);
  })

  let semester = document.getElementById("semester").children[0].value;
  console.log(semester);

  let check4 = false;

  if (semester == '') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #semester::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check4 = true;
  }

  document.getElementById("semester").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #semester::after{
           content: "";
          }
         </style>
      `);
  })

  let branch = document.getElementById("branch").children[0].value;
  console.log(branch);

  let check5 = false;

  if (branch == 'Select Branch') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #branch{
            position: relative;
          }

          #branch::after{
           content: "*Branch is not selected";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check5 = true;
  }

  document.getElementById("branch").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #branch::after{
           content: "";
          }
         </style>
      `);
  })

  let graduationYear = document.getElementById("year_of_graduation").children[0].value;
  console.log(branch);

  if (graduationYear == 'Select Graduation Year') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #year_of_graduation{
            position: relative;
          }

          #year_of_graduation::after{
           content: "*Graduation year is not selected";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check5 = true;
  }

  document.getElementById("year_of_graduation").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #year_of_graduation::after{
           content: "";
          }
         </style>
      `);
  })

  let enrollmentNo = document.getElementById("enrollmentNo").children[0].value;
  console.log(enrollmentNo);

  let University_College = document.getElementById("University_College").children[0].value;
  console.log(University_College);

  let check6 = false;

  if (University_College == '') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #University_College::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check6 = true;
  }

  document.getElementById("University_College").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #University_College::after{
           content: "";
          }
         </style>
      `);
  })

  let contactNo = document.getElementById("contactNo").children[0].value;
  console.log(contactNo);

  let check7 = false;

  if (contactNo == '') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #contactNo::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else if (contactNo.length != 10) {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #contactNo::after{
             content : "*invalid phoneNo";
          }
        </style>
        `);
  }
  else {
    check7 = true;
  }

  document.getElementById("contactNo").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #contactNo::after{
           content: "";
          }
         </style>
      `);
  })

  let previousSkills = document.getElementById("previousSkills").children[0].value;
  console.log(previousSkills);

  let check8 = false;

  if (previousSkills == '') {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #previousSkills::after{
           content: "*required field";
           color: red;
           font-size: 12px;
           position: absolute;
           left: 12px;
           top: 45px;
          }
         </style>
      `);
  }
  else {
    check8 = true;
  }

  document.getElementById("previousSkills").addEventListener("click", () => {
    document.head.insertAdjacentHTML("beforeend", `
        <style>
          #previousSkills::after{
           content: "";
          }
         </style>
      `);
  })

  // getData();
  setTimeout(() => {
    if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true && check6 == true && check7 == true && check8 == true) {
      writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills);
    }
    else {
      document.querySelector(".spinnerDiv").classList.add("d-none");
    }
  }, 200);
})
