const card = document.querySelector('.card');

const names = ['dullat', 'jatt', 'singh'];

let frag1 = document.createDocumentFragment();

const makeProfiles = function (value, index) {
    const profile = document.createElement('div');

    profile.textContent = value;
    profile.classList.add("profile");

    frag1.appendChild(profile);
}

names.forEach(makeProfiles);

card.appendChild(frag1);

console.log(frag1);

const description = document.createElement('p');

description.innerHTML = "hi bro";

card.after(description);

//attributes

let profileIcon = document.querySelectorAll('.profile');

profileIcon = Array.from(profileIcon);

console.log(profileIcon);

let changeColor = function (value) {
    value.setAttribute("bg", "aqua");
    value.addEventListener("click", (event) => {
        const attValue = value.getAttribute('bg');
        console.log(attValue);
        if(attValue === "aqua"){
            value.setAttribute("bg", "red");
        }else if(attValue === "red"){
            value.setAttribute("bg","aqua");
        }
        event.stopPropagation(); //propegation
    })
}

profileIcon.forEach(changeColor);


// profileIcon.setAttribute("bg", "aqua");

// profileIcon.addEventListener("click", () => {
//     let value = profileIcon.getAttribute("bg");
//     if(value === "aqua"){
//         profileIcon.setAttribute("bg", "red");
//     }else if(value === "red"){
//         profileIcon.setAttribute("bg", "aqua");
//     }
// })


card.addEventListener("click", () => {
    card.style.backgroundColor = "gray";
})

// card.stopPropagation();
