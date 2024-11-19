// Share functionality
const shareConfig = {
    title: 'Sprunki Sinner - The Most Exciting Online Game!',
    text: 'Join me in playing Sprunki Sinner - An amazing online gaming experience! 🎮 #SprunkiSinner #Gaming',
    url: window.location.origin + window.location.pathname,
    media: window.location.origin + '/images/game-preview.jpg',
};

function shareToX() {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareConfig.url)}&text=${encodeURIComponent(shareConfig.text)}`;
    window.open(url, '_blank');
}

function shareToFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareConfig.url)}`;
    window.open(url, '_blank');
}

function shareToReddit() {
    const url = `https://reddit.com/submit?url=${encodeURIComponent(shareConfig.url)}&title=${encodeURIComponent(shareConfig.title)}`;
    window.open(url, '_blank');
}

function shareToPinterest() {
    const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareConfig.url)}&media=${encodeURIComponent(shareConfig.media)}&description=${encodeURIComponent(shareConfig.text)}`;
    window.open(url, '_blank');
}

function handleGeneralShare() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            const button = document.getElementById('share-general');
            const originalText = button.innerHTML;
            
            // Change button text to show success
            button.innerHTML = '<i class="fas fa-check"></i><span>Link Copied!</span>';
            
            // Revert back after 2 seconds
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy URL:', err);
            alert('Failed to copy URL to clipboard');
        });
}

// Initialize share buttons when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('share-x').addEventListener('click', shareToX);
    document.getElementById('share-facebook').addEventListener('click', shareToFacebook);
    document.getElementById('share-reddit').addEventListener('click', shareToReddit);
    document.getElementById('share-pinterest').addEventListener('click', shareToPinterest);
    document.getElementById('share-general').addEventListener('click', handleGeneralShare);
});
