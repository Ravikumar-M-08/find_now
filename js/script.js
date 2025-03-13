// post-job page script
var Any = document.getElementById('Any')
var Freshers = document.getElementById('Freshers')
var Experienced = document.getElementById('Experienced')
var experience_any = document.getElementById('experience-any')
var experience_freshers = document.getElementById('experience-freshers')
var experience_experienced = document.getElementById('experience-experienced')


// experience
experience_any.style.display = 'none'
experience_freshers.style.display = 'none'
experience_experienced.style.display = 'none'

Any.addEventListener('click', () => {

    Any.style.backgroundColor = 'gray'
    Any.style.color = '#000'

    Freshers.style = "none"
    Experienced.style = "none"

    experience_any.style.display = 'block'
    experience_freshers.style.display = 'none'
    experience_experienced.style.display = 'none'
})
Freshers.addEventListener('click', () => {
    Freshers.style.backgroundColor = 'gray'
    Freshers.style.color = '#000'

    Any.style = "none"
    Experienced.style = "none"

    experience_any.style.display = 'none'
    experience_freshers.style.display = 'block'
    experience_experienced.style.display = 'none'
})
Experienced.addEventListener('click', () => {
    Experienced.style.backgroundColor = 'gray'
    Experienced.style.color = '#000'

    Any.style = "none"
    Freshers.style = "none"

    experience_any.style.display = 'none'
    experience_freshers.style.display = 'none'
    experience_experienced.style.display = 'block'
})

// personal-details

var personal_details_age = document.getElementById('personal-details-age')
var personal_details_language = document.getElementById('personal-details-language')
var personal_details_degree = document.getElementById('personal-details-degree')
var personal_details_certifications = document.getElementById('personal-details-certifications')
var personal_details_industry = document.getElementById('personal-details-industry')
var plus_age = document.getElementById('plus-age')
var plus_language = document.getElementById('plus-language')
var plus_degree = document.getElementById('plus-degree')
var plus_certifications = document.getElementById('plus-certifications')
var plus_industry = document.getElementById('plus-industry')

// open content on click personal details
var collapse_age = document.getElementById('collapse-age')
var collapse_language = document.getElementById('collapse-language')
var collapse_degree = document.getElementById('collapse-degree')
var collapse_certifications = document.getElementById('collapse-certifications')
var collapse_industry = document.getElementById('collapse-industry')
collapse_age.style.display = "none"
collapse_language.style.display = "none"
collapse_degree.style.display = "none"
collapse_certifications.style.display = "none"
collapse_industry.style.display = "none"


// personal-details

personal_details_age.addEventListener('click', () => {
    count_age++
    if (count_age % 2 == 1) {

        personal_details_age.style.backgroundColor = "green"
        plus_age.className = "fa-solid fa-check"
        collapse_age.style.display = "block"

    } else {
        personal_details_age.style.backgroundColor = "#fff"
        plus_age.className = "fa-solid fa-plus"
        collapse_age.style.display = "none"
    }
})
personal_details_language.addEventListener('click', () => {
    count_language++
    if (count_language % 2 == 1) {

        personal_details_language.style.backgroundColor = "green"
        plus_language.className = "fa-solid fa-check"
        collapse_language.style.display = "block"

    } else {
        personal_details_language.style.backgroundColor = "#fff"
        plus_language.className = "fa-solid fa-plus"
        collapse_language.style.display = "none"

    }
})
personal_details_degree.addEventListener('click', () => {
    count_degree++
    if (count_degree % 2 == 1) {

        personal_details_degree.style.backgroundColor = "green"
        plus_degree.className = "fa-solid fa-check"
        collapse_degree.style.display = "block"

    } else {
        personal_details_degree.style.backgroundColor = "#fff"
        plus_degree.className = "fa-solid fa-plus"
        collapse_degree.style.display = "none"

    }
})
personal_details_certifications.addEventListener('click', () => {
    count_certifications++
    if (count_certifications % 2 == 1) {

        personal_details_certifications.style.backgroundColor = "green"
        plus_certifications.className = "fa-solid fa-check"
        collapse_certifications.style.display = "block"

    } else {
        personal_details_certifications.style.backgroundColor = "#fff"
        plus_certifications.className = "fa-solid fa-plus"
        collapse_certifications.style.display = "none"

    }
})
personal_details_industry.addEventListener('click', () => {
    count_industry++
    if (count_industry % 2 == 1) {

        personal_details_industry.style.backgroundColor = "green"
        plus_industry.className = "fa-solid fa-check"
        collapse_industry.style.display = "block"

    } else {
        personal_details_industry.style.backgroundColor = "#fff"
        plus_industry.className = "fa-solid fa-plus"
        collapse_industry.style.display = "none"

    }
})

// personal-details- icon
plus_age.className = "fa-solid fa-plus"
plus_language.className = "fa-solid fa-plus"
plus_degree.className = "fa-solid fa-plus"
plus_certifications.className = "fa-solid fa-plus"
plus_industry.className = "fa-solid fa-plus"
// personal-details-count
var count_age = 0
var count_language = 0
var count_degree = 0
var count_certifications = 0
var count_industry = 0

// close butttons
var btn_close_1 = document.querySelector('.btn-close-1')
var btn_close_2 = document.querySelector('.btn-close-2')
var btn_close_3 = document.querySelector('.btn-close-3')
var btn_close_4 = document.querySelector('.btn-close-4')
var btn_close_5 = document.querySelector('.btn-close-5')
btn_close_1.addEventListener('click', () => {
    count_age++
    collapse_age.style.display = "none"
    personal_details_age.style = "none"
    plus_age.className = "fa-solid fa-plus"
})
btn_close_2.addEventListener('click', () => {
    count_language++
    collapse_language.style.display = "none"
    personal_details_language.style = "none"
    plus_language.className = "fa-solid fa-plus"
})
btn_close_3.addEventListener('click', () => {
    count_degree++
    collapse_degree.style.display = "none"
    personal_details_degree.style = "none"
    plus_degree.className = "fa-solid fa-plus"
})
btn_close_4.addEventListener('click', () => {
    count_certifications++
    collapse_certifications.style.display = "none"
    personal_details_certifications.style = "none"
    plus_certifications.className = "fa-solid fa-plus"
})
btn_close_5.addEventListener('click', () => {
    count_industry++
    collapse_industry.style.display = "none"
    personal_details_industry.style = "none"
    plus_industry.className = "fa-solid fa-plus"
})



// language

var count_tamil = 0
function lan(language, plus) {
    count_tamil++

    if (count_tamil % 2 == 1) {
        language.style.backgroundColor = 'green'
        plus.className = "fa-solid fa-check"
    }
    else {
        language.style.backgroundColor = '#fff'
        plus.className = "fa-solid fa-plus"
    }

}
var availabelDegree = ["BCA", "Bsc Computer Science", "BA Tamil",]
var search_degree = document.getElementById('search_degree')
var list_of_degree = document.getElementById('list_of_degree')
var availabeldeg = document.getElementById('availabeldeg')
availabeldeg.style.display = "none"

search_degree.addEventListener("click", () => {
    list_of_degree.innerHTML = ' '
    availabeldeg.style.display = "block"
    availabelDegree.map((a) => {
        list_of_degree.innerHTML += `<p onclick="display(this)">${a},</p>`
    })


})

function display(list) {
    search_degree.value += list.innerHTML
}

function closedeg(a) {
    a.style.display = "none"
    list_of_degree.innerHTML = ' '
}
var availabelCertificate = ["Accountant (CCA)", "ANM Certificate", "Basic Excel","Computer Certificate","Full Stack Development (CFSD)"]
var search_certi = document.getElementById('search_certi')
var list_of_certi = document.getElementById('list_of_certi')
var availabelcerti = document.getElementById('availabelcerti')
availabelcerti.style.display="none"

search_certi.addEventListener("click", () => {
    list_of_certi.innerHTML = ' '
    availabelcerti.style.display = "block"
    availabelCertificate.map((b) => {
        list_of_certi.innerHTML += `<p onclick="display1(this)">${b},</p>`
    })
})

function display1(list) {
    search_certi.value += list.innerHTML
}



