const buttonsBtn = document.querySelectorAll(".buttons__nav-btn")
const buttonsItems = document.querySelectorAll(".buttons__item")

buttonsBtn.forEach(onbuttonClick)

function onbuttonClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let buttonId = currentBtn.getAttribute("data-button")
        let currentbutton = document.querySelector(buttonId)
 
        if( ! currentBtn.classList.contains('active') ) {
            buttonsBtn.forEach(function (item) {
                 item.classList.remove('active')
             })
     
             buttonsItems.forEach(function (item) {
             item.classList.remove('active')
             })
     
             currentBtn.classList.add('active')
             currentbutton.classList.add('active')
         }
 
        
     })
}

document.querySelector('.buttons__nav-btn:nth-child(1)').click()


