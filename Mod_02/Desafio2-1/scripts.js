const modalOverlay = document.querySelector('.modal_overlay')
const courses = document.querySelectorAll('.course')

for (let course of courses) {
    course.addEventListener("click", function(){
        const course_id = course.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.classList.toggle("maximized")
        modalOverlay.querySelector("iframe").src = `https://www.rocketseat.com.br/${course_id}`
    })
}

document.querySelector(".close_modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".max_modal").addEventListener("click", function(){
    modalOverlay.classList.toggle("maximized")
})
