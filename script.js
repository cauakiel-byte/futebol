document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os ícones do Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Lógica do Botão de Curtida / Descurtida
    const likeBtn = document.getElementById('likeBtn');
    const likeText = document.getElementById('likeText');
    const likeCount = document.getElementById('likeCount');

    let isLiked = false;
    let count = 124; // Contagem inicial

    likeBtn.addEventListener('click', () => {
        isLiked = !isLiked; // Alterna o estado (True/False)

        if (isLiked) {
            count++;
            likeBtn.classList.add('liked');
            likeText.textContent = 'Curtido!';
        } else {
            count--;
            likeBtn.classList.remove('liked');
            likeText.textContent = 'Curtir';
        }

        // Atualiza o valor na tela
        likeCount.textContent = count;
    });
});