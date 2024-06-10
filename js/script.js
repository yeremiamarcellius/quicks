const menu= document.querySelector('#menu')
const chat= document.querySelector('#chat')
const task= document.querySelector('#task')
const close= document.querySelector('#close')
const chatbox= document.querySelector('#chatbox')
const taskbox= document.querySelector('#taskbox')
const loading= document.querySelector('.loading')
const homeChat= document.querySelector('#home-chat')
const friends = document.querySelectorAll('.friends')
const support = document.querySelector('#support')
const searchChat= document.querySelector('.search-chat')
const headerChat = document.querySelector('#header-chat')
const headerLineChat = document.querySelector('#headerline-chat')
const option=document.querySelectorAll('.option')
const chatOptionGroup = document.querySelectorAll('.chat-button-group')
const chatText = document.querySelector('#chat-text')
const supportChat = document.querySelector('#support-chat')
const inputgroup = document.querySelector('.input-group')
const newLimit = document.querySelector('.new-limit')
const notifChat = document.querySelector('.notif-chat')
const backChat = document.querySelector('#back')
const exitChat = document.querySelector('#exit')
const supportHeader = document.querySelector('#support-header')
const groupHeader = document.querySelector('#group-header')
const connectSuport = document.querySelector('#connect-support')
var expand = 0;

fetch('https://dummyapi.io/data/v1/user?limit=10', {
    headers: {
        'app-id': '66668c837f18507ccf92e34b'
    }
})
    .then(res => res.json())
    .then(data => {
        console.log(data.data[0]);
        const name = `${data.data[0].firstName} ${data.data[0].lastName}`;
        const senderOther = document.querySelectorAll('.sender-other');
        
        senderOther.forEach(i => {
            i.insertAdjacentText('afterbegin', name);
        });
            

    })
    .catch(error => {
        console.error('Error:', error);
    });


function isElementVisibleInContainer(el, container) {
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const isVisible = (
        elRect.top >= containerRect.top &&
        elRect.bottom <= containerRect.bottom
    );

    return isVisible;
}


console.log(option.length);
chatText.addEventListener("scroll", function() {
    if(!isElementVisibleInContainer(newLimit, chatText)){
        notifChat.style.display = "flex";
    }else{
        notifChat.style.display = "none";
    }
})


menu.addEventListener("click", moveButton)

function moveButton(){
    // document.getElementById("chat").style.transition = "all 2s";
    console.log(expand)
    if(expand === 0){
        chat.style.right = "120px"
        chat.style.transition = "all 1s";
        task.style.right = "206px"
        task.style.transition = "all 1s";
        expand = 1;
    } else {
        chat.style.right = "35px"
        task.style.right = "35px"
        expand = 0;
    }
    
}

chat.addEventListener("click", active)
task.addEventListener("click", active)

function active(event){
    const clickedElementId = event.target.id; 
    const activeButton = document.querySelector('.active');
    const activeButtonId = activeButton?.id;
    console.log(event.target)
    if(clickedElementId === "task" || clickedElementId === "chat"){
        if (!activeButton) {
            event.target.classList.add("active");
            event.target.classList.remove("inactive");
            event.target.style.right = "34px";
            event.target.style.bottom = "27px";
            event.target.style.width = "58px";
            event.target.style.height = "58px";
            menu.style.display = "none";
            setTimeout(function() {
                close.classList.add("show")
                close.classList.remove("hidden")
              }, 500);

            if(clickedElementId === "chat"){
                task.style.right = "120px"
                homeChat.style.display= "none";
                chatbox.style.display = "block";
                loading.style.display = "flex";
                setTimeout(function(){
                    loading.style.display="none";
                    homeChat.style.display = "block";
                }, 1000)
                clearTimeout();
            } else if(clickedElementId === "task"){
                taskbox.style.display="block";
            }
        } 
        else if(activeButton){
            console.log("test")
            console.log(activeButtonId)
            event.target.style.right = "34px";
            event.target.style.bottom = "27px";
            event.target.style.width = "58px";
            event.target.style.height = "58px";
            event.target.classList.add("active");
            event.target.classList.remove("inactive");
            if(event.target?.id !== activeButtonId){
                if(activeButtonId === "task"){
                    console.log("test1")
                    task.style.width= "56px";
                    task.style.height= "56px";
                    task.style.right = "120px";
                    task.style.bottom = "28px";
                    task.classList.add("inactive");
                    task.classList.remove("active");
                    task.style.right = "120px"
                    homeChat.style.display= "none";
                    chatbox.style.display = "block";
                    taskbox.style.display="none";
                    loading.style.display = "flex";
                    setTimeout(function(){
                    loading.style.display="none";
                    homeChat.style.display = "block";
                }, 1000)
                clearTimeout();
                }else{
                    console.log("test2")
                    chat.style.width= "56px";
                    chat.style.height= "56px";
                    chat.style.right = "120px";
                    chat.style.bottom = "28px";
                    chat.classList.add("inactive");
                    chat.classList.remove("active");
                    taskbox.style.display="block";
                    chatbox.style.display="none";
                }
            }
            
        }        
    }
    
    
    // event.target.style.z-index = "3";

}

close.addEventListener("click", closing);
exitChat.addEventListener("click", closing);

function closing(){
    setTimeout(function() {
        close.classList.remove("show")
        close.classList.add("hidden")
      }, 500);
      chat.style.width =  "56px";
      chat.style.height = "56px";
      chat.style.bottom = "28px";
      chat.style.right = "35px";
      task.style.width =  "56px";
      task.style.height = "56px";
      task.style.bottom = "28px";
      task.style.right = "35px";
      menu.style.display = "block";
      if(chat.classList.contains("active")){
        chat.classList.remove("active");
        chat.classList.add("inactive");
      }else if(task.classList.contains("active")){
        task.classList.remove("active");
        task.classList.add("inactive");
      }
      chatbox.style.display="none";
      supportHeader.style.display="none";
      connectSuport.style.display="none";
      supportChat.style.display="none";
      notifChat.style.display="none";
      searchChat.style.display="block";
      headerChat.style.display="none";
      headerLineChat.style.display="none";
      chatText.style.display="none";
      taskbox.style.display="none"
    //   option.style.display="none";
      inputgroup.style.display="none";
      chatOptionGroup.forEach(function (i) {
        i.style.display='none';
    });
}

backChat.addEventListener("click", openHomeChat);

function openHomeChat(){
    homeChat.style.display = "block";
    searchChat.style.display="block";
    headerChat.style.display="none";
    headerLineChat.style.display="none";
    chatText.style.display="none";
    inputgroup.style.display="none";
    notifChat.style.display="none";
    supportChat.style.display="none";
    connectSuport.style.display="none";
}

// homeChat.addEventListener("click", openChat);
for (let i = 0; i < friends.length; i++) {
    if(friends[i].id != "support"){

        friends[i].addEventListener("click", () => openChat(false));
        
    }else{
        
        friends[i].addEventListener("click", () => openChat(true));   
    }
}

function openChat(support){
    homeChat.style.display="none";
    searchChat.style.display="none";
    headerChat.style.display="flex";
    headerLineChat.style.display="block";
    inputgroup.style.display='flex';
    if(support){
        supportHeader.style.display="block";
        groupHeader.style.display="none";
        connectSuport.style.display="flex";
        supportChat.style.display="block";
        
    }else{
        supportHeader.style.display="none";
        groupHeader.style.display="block";
        chatText.style.display="block";
        chatText.scrollTop = chatText
        .scrollHeight;
    }
}

option.forEach(function (i) {
    i.addEventListener('click', function() {
      chatOptionGroup.style.display="flex";
    });
});
var optionOpen = 0;

for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", () => openOption(i));
}

function openOption(z){
    console.log("option open", optionOpen);
    chatOptionGroup[optionOpen].style.display="none";
    chatOptionGroup[z].style.display="flex";
    optionOpen = z;
}

notifChat.addEventListener('click', scrollBottom);

function scrollBottom(){
    chatText.scrollTop = chatText.scrollHeight;
    // chatText.style.scroll-behavior = "smooth";
}


let customSelects = document.querySelectorAll('.custom-select');
 
// Attach click event listeners to each custom select
customSelects.forEach(function (select) {
    let selectSelected = select.querySelector('.select-selected');
    let selectItems = select.querySelector('.select-items');
    let options = selectItems.querySelectorAll('div');
 
    // Toggle the dropdown visibility when the select box is clicked
    selectSelected.addEventListener('click', function () {
        if (selectItems.style.display === 'block') {
            selectItems.style.display = 'none';
        } else {
            selectItems.style.display = 'block';
        }
    });
 
    // Set the selected option and hide the dropdown when an option is clicked
    options.forEach(function (option) {
        option.addEventListener('click', function () {
            selectSelected.textContent = option.textContent;
            selectItems.style.display = 'none';
        });
    });
 
    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (e) {
        if (!select.contains(e.target)) {
            selectItems.style.display = 'none';
        }
    });
});

const acc = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");
console.log(panel);

for (let i = 0; i < acc.length; i++) { 
    console.log(panel[i]);
    acc[i].addEventListener("click", function() {
        console.log(panel[i]);
        if (panel[i].style.display === "block") {
            panel[i].style.display = "none";
        } else {
            panel[i].style.display = "block";
        }
        this.classList.toggle("rotated");
    });
}

const checkboxes = document.querySelectorAll('.case-checkbox');

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
        const caseText = this.previousElementSibling;
        if (this.checked) {
            caseText.innerHTML = `<s>${caseText.textContent}</s>`;
            caseText.classList.add('checked-text');
        } else {
            caseText.innerHTML = caseText.textContent;
            caseText.classList.remove('checked-text');
        }
    });
});
