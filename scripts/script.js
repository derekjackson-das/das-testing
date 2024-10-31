document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const closeButton = document.createElement('span');
    const likeButton = document.querySelector('.like-button');
    const star = document.createElement('span');
    
    // Tab Panel
    const tabs = document.querySelectorAll('.tab-item');
    const contents = document.querySelectorAll('.tab-content');

    // Set the first tab as active by default
    tabs[0].classList.add('active');
    contents[0].classList.add('active');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });

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