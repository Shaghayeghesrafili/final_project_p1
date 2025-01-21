document.querySelector('.more-comments').addEventListener('click', function() {
    const hiddenComments = document.querySelectorAll('.comment.hidden');
    const icon = this.querySelector('i');

    if (hiddenComments.length > 0) {
        
        hiddenComments.forEach(function(comment) {
            comment.classList.remove('hidden');
        });
        
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        
        document.querySelectorAll('.comment').forEach(function(comment, index) {
            if (index >= 2) {
                comment.classList.add('hidden');
            }
        });
        
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
});