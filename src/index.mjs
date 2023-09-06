import "./styles.css";

const targets = document.querySelectorAll('section')
const option = {
 threshold: 1
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            console.log(entry)
        }
    })
}, option)

targets.forEach(target => {
    observer.observe(target)
})