document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
        participantName: document.getElementById('participantName').value,
        teamName: document.getElementById('teamName').value,
        venueReview: document.getElementById('venueReview').value,
        foodReview: document.getElementById('foodReview').value,
        judgesReview: document.getElementById('judgesReview').value,
        overallExperience: document.getElementById('overallExperience').value
    };
    
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback!');
    
    // Here you can add code to send the form data to a server
});