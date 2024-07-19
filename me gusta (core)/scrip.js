function incrementLikes(button) {
    const counter = button.nextElementSibling;
    
    let currentLikes = parseInt(counter.textContent);
    counter.textContent = `${currentLikes + 1} like(s)`;
}