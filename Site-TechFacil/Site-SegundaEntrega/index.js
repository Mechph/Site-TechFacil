function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const idade = document.getElementById('idade').value;
        const comentario = document.querySelector('textarea').value;

        const userData = [nome, email, idade, comentario];

        console.log(userData);
        
        alert('Obrigado por nos contactar!!');
    });
});

function adjustFontSize(change) {
    let content = document.querySelector('main');
    let style = window.getComputedStyle(content, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);
    content.style.fontSize = (currentSize + change) + 'px';
}