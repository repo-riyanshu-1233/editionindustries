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

const modal = document.getElementById('infoModal');
const modalContent = document.querySelector('.modal-content');

// Open modal with smooth animation
function openModal(type) {
    document.getElementById('modal-title').innerText = modalData[type].title;
    document.getElementById('modal-body').innerHTML = modalData[type].body;
    
    modal.style.display = 'flex';
    // Small delay to allow display block to apply before adding class for animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

// Close modal with smooth animation
function closeModal() {
    modal.classList.remove('show');
    // Wait for the animation to finish before hiding the element
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
};
