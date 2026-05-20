document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Hide the form
    document.getElementById('feedbackForm').style.display = 'none';
    
    // Show thank you message
    document.getElementById('thankYouMessage').classList.remove('hidden');
    
    // Here you would typically send the form data to a server
    // For this example, we'll just log it to the console
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        rating: document.getElementById('rating').value,
        comments: document.getElementById('comments').value
    };
    
    console.log('Form submitted:', formData);
});