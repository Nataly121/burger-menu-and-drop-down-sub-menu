'use strict'
window.addEventListener('DOMContentLoaded', () =>{
    // === checks if the page is open on a mobile device ===
    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            )
        }
    }

    if (isMobile.any()) {
        document.body.classList.toggle('touch-screen')
        const menuArrows = document.querySelectorAll('.menu__arrow')
        if (menuArrows.length > 0) {
            for (let i = 0; i < menuArrows.length; i++) {
                const menuArrow = menuArrows[i]
                menuArrow.addEventListener('click', (e) => {
                    menuArrow.parentElement.classList.toggle('active')
                })
            }
        }
    } 
    else {
        document.body.classList.toggle('pc-screen')
    }

    const menuBurgerIcon = document.querySelector('.menu__burger-icon')
        const menuBody = document.querySelector('.menu__body')
        if (menuBurgerIcon) {
            menuBurgerIcon.addEventListener('click', (e) => {
                menuBurgerIcon.classList.toggle('active')
                menuBody.classList.toggle('active')
                document.body.classList.toggle('lock')
            })
        }

    // const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
    // if (menuLinks.length > 0) {

    // }  // в жепу это 
})


