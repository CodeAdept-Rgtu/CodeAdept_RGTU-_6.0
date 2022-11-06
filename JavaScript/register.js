
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr7Lx_UdaHku6JTV5B_uekdqnFXLKi-Bc",
  authDomain: "codeadept2022.firebaseapp.com",
  databaseURL: "https://codeadept2022-default-rtdb.firebaseio.com",
  projectId: "codeadept2022",
  storageBucket: "codeadept2022.appspot.com",
  messagingSenderId: "953883757907",
  appId: "1:953883757907:web:649da32272215e2a06e5a6"
};

export const app = initializeApp(firebaseConfig);

import { getDatabase, ref, child, push, update, set, get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// function writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills) {
//     // const db = getDatabase();

//     // // A post entry.
//     const registerUsersData = {

//     };

//     // // Get a key for a new Post.
//     // const newPostKey = push(child(ref(db), 'registerUsers')).key;
//     // // console.log(newPostKey);

//     // // Write the new post's data simultaneously in the posts list and the user's post list.
//     // const updates = {};
//     // updates['/registerUsers/' + newPostKey] = registerUsersData;
//     // // updates['/registerUsers/' + newPostKey + '/'] = registerUsersData;

//     // return update(ref(db), updates);


// }

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
    previousSkills: previousSkills
  });
}

var check9 = true;
function getData() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `registeredStudents/`)).then((snapshot) => {
    if (snapshot.exists()) {
      for (let i in snapshot.val()) {
        get(child(dbRef, `registeredStudents/${i}`)).then((ans) => {
          let currentEmailId = document.getElementById("emailId").children[0].value;
          if (currentEmailId == ans.val().emailId) {
            alert("This email is already registered");
            check9 = false;
            // return false;
          }
        })
      }
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    alert(error);
  });
}

function sendEmail() {
  let firstName = document.querySelector("#firstName").children[0].value;
  let lastName = document.getElementById("lastName").children[0].value;

  let emailId = document.getElementById("emailId").children[0].value;
  console.log(emailId);
  console.log("run");
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "codeadeptrgtu@gmail.com",
    Password: "60078806771758EBF8FA8DE692422EE42865",
    To: `${emailId}`,
    From: "codeadeptrgtu@gmail.com",
    Subject: " Registration Confirmed",
    Body: `Dear ${firstName} ${lastName},
         Greetings from Team CodeAdept, \n 
        This is to inform you that you have successfully registered in CodeAdept 6.0 \n
        Code Adept is an event organised with the intent to encourage the passionate programmers and reward them to boost their confidence. \n
        For more information about CodeAdept, visit our website - http://www.{org}.com \n
        You will receive the further details via email. Stay tuned. \n
        All the Best! \n
        Regards, \n
        Team CodeAdept
        `,
  }).then(
    message => {
      swal("Registration Successfull!", "Don't forget to check mail( also SPAM)!", "success");}
  )
    .catch((error) => {
      console.log(error);
    })
}


// let successModal = document.querySelector(".registration_success_modal");

// let submit_btn = document.getElementById("submit_btn");
submit_btn.addEventListener("click", function () {
  check9 = true;
  getData();

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
    if (check1 == true && check2 == true && check3 == true && check4 == true && check5 == true && check6 == true && check7 == true && check8 == true && check9 == true) {
      writeUserData(firstName, lastName, emailId, enrollmentNo, branch, University_College, contactNo, previousSkills);
      sendEmail();
      // alert("Form Submitted");
    }
    else {
      swal("Error!", "Form not Submitted", "error");;
    }
  }, 2000);

  // getData();
  // sendData();
  // sendEmail();
})



