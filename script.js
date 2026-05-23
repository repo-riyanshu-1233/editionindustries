// Data for Footer Modals
const modalData = {
    about: { 
        title: "About Edition Industries", 
        body: "We are a premier video editing company specializing in high-quality, cinematic edits, esports montages, and dynamic brand promotions. We bring raw footage to life." 
    },
    help: { 
        title: "Help & Support", 
        body: "Need help accessing the Google Drive portfolio or downloading project files? Make sure you are logged into your Google account. If issues persist, message us on Instagram." 
    },
    contact: { 
        title: "Contact Us", 
        body: "<strong>Email:</strong> contact@editionindustries.com<br><br><strong>Instagram:</strong> Direct Message us for the fastest response regarding project bookings." 
    }
};

const footerModal = document.getElementById('infoModal');

// Open Footer Modal
function openModal(type) {
    document.getElementById('modal-title').innerText = modalData[type].title;
    document.getElementById('modal-body').innerHTML = modalData[type].body;
    
    footerModal.style.display = 'flex';
    setTimeout(() => { footerModal.classList.add('show'); }, 10);
}

// Close Footer Modal
function closeModal() {
    footerModal.classList.remove('show');
    setTimeout(() => { footerModal.style.display = 'none'; }, 300);
}

// Toggle Instagram Menu Popup
function toggleInstaMenu() {
    const menu = document.getElementById('instaMenu');
    
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        setTimeout(() => { menu.style.display = 'none'; }, 300);
    } else {
        menu.style.display = 'flex';
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
}

// Global Click Detector (Closes menus/popups if you click outside)
window.addEventListener('click', function(event) {
    // Close Footer Modal
    if (event.target == footerModal) {
        closeModal();
    }
    
    // Close Instagram Dropdown if clicked outside
    const instaBtn = document.getElementById('instaBtn');
    const instaMenu = document.getElementById('instaMenu');
    
    if (!instaBtn.contains(event.target) && !instaMenu.contains(event.target)) {
        if (instaMenu.classList.contains('show')) {
            instaMenu.classList.remove('show');
            setTimeout(() => { instaMenu.style.display = 'none'; }, 300);
        }
    }
});
