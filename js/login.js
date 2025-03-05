var login_page = document.getElementById('login_page')
var register_page = document.getElementById('register_page')

var login = document.getElementById('login')
var register = document.getElementById('register')

// login.style.display=""
register_page.style.display = "none"

login.style.backgroundColor = "#1ff"
register.style.backgroundColor = "gray"

register.addEventListener('click', () => {
    register_page.style.display = "block"
    login_page.style.display = "none"
    register.style.backgroundColor = "#1ff"
    register.style.boxShadow = "0px 0px 25px #17a2b8"
    login.style.backgroundColor = "gray"
    login.style.boxShadow = "none"
})
login.addEventListener('click', () => {
    login_page.style.display = "block"
    register_page.style.display = "none"
    login.style.backgroundColor = "#1ff"
    login.style.boxShadow = "0px 0px 25px #17a2b8"
    register.style.backgroundColor = "gray"
    register.style.boxShadow = "none"
})

var show_password_icon = document.getElementById('eye')
var hide_password_icon = document.getElementById('eye-slash')

var show_password_icon_1 = document.getElementById('eye-1')
var hide_password_icon_1 = document.getElementById('eye-slash-1')

var show_password_icon_2 = document.getElementById('eye-2')
var hide_password_icon_2 = document.getElementById('eye-slash-2')

var password = document.getElementById('password')
var password_1 = document.getElementById('password-1')
var password_2 = document.getElementById('password-2')

hide_password_icon.style.display = "none"
hide_password_icon_1.style.display = "none"
hide_password_icon_2.style.display = "none"

show_password_icon.addEventListener('click', () => {
    show_password_icon.style.display = "none"
    hide_password_icon.style.display = "block"

    if (password.type === "password") {
        password.type = "text"
    }

})
hide_password_icon.addEventListener('click', () => {
    hide_password_icon.style.display = "none"
    show_password_icon.style.display = "block"

    if (password.type === "text") {
        password.type = "password"
    }
})
show_password_icon_1.addEventListener('click', () => {
    show_password_icon_1.style.display = "none"
    hide_password_icon_1.style.display = "block"

    if (password_1.type === "password") {
        password_1.type = "text"
    }

})
hide_password_icon_1.addEventListener('click', () => {
    hide_password_icon_1.style.display = "none"
    show_password_icon_1.style.display = "block"

    if (password_1.type === "text") {
        password_1.type = "password"
    }
})
show_password_icon_2.addEventListener('click', () => {
    show_password_icon_2.style.display = "none"
    hide_password_icon_2.style.display = "block"

    if (password_2.type === "password") {
        password_2.type = "text"
    }

})
hide_password_icon_2.addEventListener('click', () => {
    hide_password_icon_2.style.display = "none"
    show_password_icon_2.style.display = "block"

    if (password_2.type === "text") {
        password_2.type = "password"
    }
})











