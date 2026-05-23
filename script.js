function toggleInstaMenu() {
    document.getElementById('instaMenu').classList.toggle('show');
}

// Close menu if clicking outside
window.addEventListener('click', function(e) {
    if (!document.getElementById('instaBtn').contains(e.target)) {
        document.getElementById('instaMenu').classList.remove('show');
    }
});

function openModal(type) {
    // Basic modal logic
    document.getElementById('infoModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
}
