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
    // Adding class with small delay for CSS transition
    setTimeout(() => { footerModal.classList.add('show'); }, 10);
}

// Close Footer Modal
function closeModal() {
    footerModal.classList.remove('show');
    setTimeout(() => { footerModal.style.display = 'none'; }, 300);
}

// Toggle Instagram Menu Popup (Improved)
function toggleInstaMenu() {
    const menu = document.getElementById('instaMenu');
    
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        // Wait for CSS transition before hiding
        setTimeout(() => { menu.style.display = 'none'; }, 200);
    } else {
        menu.style.display = 'flex';
        // Small delay to allow CSS opacity transition to trigger
        setTimeout(() => { menu.classList.add('show'); }, 10);
    }
}

// Global Click Detector
window.addEventListener('click', function(event) {
    const instaBtn = document.getElementById('instaBtn');
    const instaMenu = document.getElementById('instaMenu');
    
    // Close Footer Modal if clicking outside content
    if (event.target == footerModal) {
        closeModal();
    }
    
    // Close Instagram Dropdown if clicking outside the button AND menu
    if (instaBtn && instaMenu) {
        if (!instaBtn.contains(event.target) && !instaMenu.contains(event.target)) {
            if (instaMenu.classList.contains('show')) {
                instaMenu.classList.remove('show');
                setTimeout(() => { instaMenu.style.display = 'none'; }, 200);
            }
        }
    }
});
