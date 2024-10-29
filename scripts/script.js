document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeButton = document.createElement('span');
    const likeButton = document.querySelector('.like-button');
    const star = document.createElement('span');
    star.innerHTML = '★';
    star.classList.add('star');
    
    likeButton.addEventListener('click', function() {
        if (likeButton.contains(star)) {
            likeButton.removeChild(star);
            likeButton.innerHTML = 'Like this page';
        } else {
            likeButton.innerHTML = '';
            likeButton.appendChild(star);
        }
    });
    
    // Add classes to modal elements
    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    closeButton.classList.add('close-button');
    
      // Add content to the close button
      closeButton.innerHTML = 'X';

    // Append elements
    modalContent.appendChild(closeButton);
    modalContent.appendChild(document.createTextNode('Thank you, your e-mail has been saved.'));
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Show the modal
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });

    // Close the modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});