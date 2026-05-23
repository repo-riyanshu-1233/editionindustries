// Strict Structure Data Architecture for Footer Modals
const modalData = {
    about: { 
        title: "About Edition Industries", 
        body: "We are a premier video editing entity specializing in high-end, cinematic post-production, dynamic esports montages, and tailored brand commercials. We convert raw frame rates into captivating digital experiences." 
    },
    help: { 
        title: "Help & Support System", 
        body: "Encountering latency or permission issues with our asset Google Drive? Ensure you are logged into an authorized Google workspace account. For direct workflow deployment or asset queries, ping our operational channel on Instagram." 
    },
    contact: { 
        title: "Initiate Project Booking", 
        body: "<strong>Corporate Email:</strong> contact@editionindustries.com<br><br><strong>Direct Channel:</strong> Message us via Instagram DM for swift technical consults and slot pricing inquiries." 
    }
};

const infoModal = document.getElementById('infoModal');
const instaMenu = document.getElementById('instaMenu');
const instaBtn = document.getElementById('instaBtn');

// Open Modal Engine
function openModal(type) {
    if (!modalData[type]) return;
    
    document.getElementById('modal-title').innerText = modalData[type].title;
    document.getElementById('modal-body').innerHTML = modalData[type].body;
    
    infoModal.style.display = 'flex';
    // Single clean reflow call to force rendering layout before class execution
    infoModal.offsetHeight; 
    infoModal.classList.add('show');
}

// Close Modal Engine
function closeModal() {
    infoModal.classList.remove('show');
    // Pure CSS transition synchronous cleanup
    const handleTransitionEnd = () => {
        if (!infoModal.classList.contains('show')) {
            infoModal.style.display = 'none';
        }
        infoModal.removeEventListener('transitionend', handleTransitionEnd);
    };
    infoModal.addEventListener('transitionend', handleTransitionEnd);
}

// Structural Outside Modal Click Interceptor
function handleModalOutsideClick(event) {
    if (event.target === infoModal) {
        closeModal();
    }
}

// Streamlined Fast Instagram Menu Dropdown Engine
function toggleInstaMenu(event) {
    event.stopPropagation(); // Global trigger collapse protect
    
    const isShowing = instaMenu.classList.contains('show');
    
    if (isShowing) {
        closeInstaMenu();
    } else {
        instaBtn.classList.add('active');
        instaMenu.style.display = 'flex';
        instaMenu.offsetHeight; // Render forcing engine
        instaMenu.classList.add('show');
    }
}

function closeInstaMenu() {
    if (!instaMenu.classList.contains('show')) return;
    
    instaBtn.classList.remove('active');
    instaMenu.classList.remove('show');
    
    const handleDropdownTransitionEnd = () => {
        if (!instaMenu.classList.contains('show')) {
            instaMenu.style.display = 'none';
        }
        instaMenu.removeEventListener('transitionend', handleDropdownTransitionEnd);
    };
    instaMenu.addEventListener('transitionend', handleDropdownTransitionEnd);
}

// Unitary Context Event Listener for Global Clicks
window.addEventListener('click', function(event) {
    // Structural cleanup if dropdown loses active system focus
    if (instaMenu && !instaBtn.contains(event.target) && !instaMenu.contains(event.target)) {
        closeInstaMenu();
    }
});
