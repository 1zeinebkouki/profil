const btnTheme = document.getElementById('btn');

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        btnTheme.textContent = 'Activer le mode clair';
    } else {
        btnTheme.textContent = 'Activer le mode sombre';
    }
});