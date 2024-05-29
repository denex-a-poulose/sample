document.querySelectorAll('.text').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.container').classList.add('slide-out');
        setTimeout(function() {
            window.location.href = item.getAttribute('data-url');
        }, 1000); 
    });
});

