
const childIcons = document.querySelectorAll('.childIcons')
const useLiveChat = document.getElementById('useLiveChat')
childIcons.forEach(icon => {
    icon.addEventListener('click', ()=> {
        useLiveChat.classList.add('liveChatNotificationShow')
        setTimeout(() => {
            useLiveChat.classList.remove('liveChatNotificationShow')
        }, 4000);
    })
});