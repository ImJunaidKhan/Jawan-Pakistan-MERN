function generateCard(e) {
    e.preventDefault();

    var stuID = document.querySelector("#studentid");
    var stuName = document.querySelector("#studentname");
    var guardian = document.querySelector("#guardian");
    var stuClass = document.querySelector("#class");
    var emergencyPhone = document.querySelector("#emergencyphone");
    var stuPhoto;
    var cardsWrapper = document.querySelector(".cards");
    var fileInput = document.querySelector("#studentphoto");
    var file = fileInput.files[0];
    var stuPhoto = URL.createObjectURL(file);

    var card = document.createElement("div");
    var cardHead = document.createElement("div");
    var cardBody = document.createElement("div");
    var schoolAddress = document.createElement("p");

    card.setAttribute("class", "card");
    cardHead.setAttribute("class", "cardheader");
    cardBody.setAttribute("class", "cardbody");
    schoolAddress.innerHTML = "Little Learners School, 45 Park Avenue, Punjab, Pincode - 600006, Telephone : +91 9790 547 171";

    var columnWrapper = document.createElement("div");
    var column1 = document.createElement("div");
    var logo = document.createElement("img");
    var stdID = document.createElement("p");
    var stdName = document.createElement("p");
    var stdGuardian = document.createElement("p");
    var stdClass = document.createElement("p");
    var stdPhone = document.createElement("p");

    var column2 = document.createElement("div");
    var regNo = document.createElement("p");
    var cardTitle = document.createElement("h3");
    var stdPhoto = document.createElement("img");

    columnWrapper.setAttribute("class", "columnwrapper")
    column1.setAttribute("class", "col-1");
    column2.setAttribute("class", "col-2");

    logo.setAttribute("class", "logo")
    logo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmdHFUzPosbx6RC1LHiVCvsGB0pStqIl1Tg-IhYFowfZzZQgcfcP6iisM&s=10";
    stdID.innerHTML = `<b>Student ID:</b> ${stuID.value}`;
    stdName.innerHTML = `<b>Student Name:</b> ${stuName.value}`;
    stdGuardian.innerHTML = `<b>Guardian:</b> ${guardian.value}`;
    stdClass.innerHTML = `<b>Class:</b> ${stuClass.value}`;
    stdPhone.innerHTML = `<b>Emergency Phone:</b> ${emergencyPhone.value}`;
    regNo.innerHTML = `Reg No: STU-${Math.floor(100000 + Math.random() * 900000)}`
    cardTitle.innerHTML = "Identity Card";
    console.log(stuPhoto);
    stdPhoto.src = stuPhoto;

    cardsWrapper.appendChild(card);
    card.appendChild(cardHead);
    card.appendChild(columnWrapper);
    card.appendChild(cardBody);
    columnWrapper.appendChild(column1);
    columnWrapper.appendChild(column2);
    cardBody.appendChild(schoolAddress)

    column1.appendChild(logo);
    column1.appendChild(stdID);
    column1.appendChild(stdName);
    column1.appendChild(stdGuardian);
    column1.appendChild(stdClass);
    column1.appendChild(stdPhone);

    column2.appendChild(regNo);
    column2.appendChild(cardTitle);
    column2.appendChild(stdPhoto);

}