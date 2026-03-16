function abrirModalContacto(e) {
    e.preventDefault();
    const modal = document.getElementById('modalContacto');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModalContacto() {
    const modal = document.getElementById('modalContacto');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera
document.getElementById('modalContacto').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarModalContacto();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModalContacto();
    }
});
