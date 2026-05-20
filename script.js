document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const team = document.getElementById('team').value;
    const venue = document.getElementById('venue').value;
    const food = document.getElementById('food').value;
    const judges = document.getElementById('judges').value;
    const experience = document.getElementById('experience').value;
    
    // Here you would typically send the data to a server
    console.log('Feedback submitted:', { name, team, venue, food, judges, experience });
    
    // Show success message
    alert('Thank you for your feedback!');
    
    // Reset form
    this.reset();
});