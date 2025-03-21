function openModal() {
    
    var modal = document.getElementById("dv-modal");


    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
    let modal = document.getElementById(mn);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    window.location.reload()
}