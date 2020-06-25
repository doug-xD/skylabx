const modalOverlay = document.querySelector('.modal_overlay')
const courses = document.querySelectorAll('.course')

for (let course of courses) {
    course.addEventListener("click", function(){
        const course_id = course.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `http://www.globo.com`
    })
}

document.querySelector(".close_modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

