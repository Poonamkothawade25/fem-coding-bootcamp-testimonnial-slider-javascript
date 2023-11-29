const person = [
    {
        src: "images/image-tanya.jpg",
        about : `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        name: "Tanya Sinclair",
        job: "UX Engineer"
    }, 
    {
        src: "images/image-john.jpg",
        about : `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        name: "John Tarkpor",
        job: "Junior Front-end Developer"
    }
]


const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let profileImg = document.getElementById("profile-img");
let about = document.getElementById("about");
let fullName = document.getElementById("name");
let job = document.getElementById("job");
currentPerson = 1;
window.addEventListener("DOMContentLoaded", () => {
    loadData(currentPerson);
})

prevBtn.addEventListener("click", () => {
    currentPerson--;
    if(currentPerson < 0)
    {
        currentPerson = person.length - 1;
    }
    loadData(currentPerson);
})

nextBtn.addEventListener("click", () => {
    currentPerson++
    if(currentPerson > person.length - 1)
    {
        currentPerson = 0;
    }
    loadData(currentPerson);
})


function loadData(currentPerson) {
    let data = person[currentPerson];
    profileImg.src = data.src;
    about.textContent = data.about;
    fullName.textContent = data.name;
    job.textContent = data.job;
}