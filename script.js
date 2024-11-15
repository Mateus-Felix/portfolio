// Seleção de elementos
const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetos = document.querySelectorAll('.projeto');

// Mostrar mais/menos projetos
let mostrandoTodos = false;

btnMostrarProjetos.addEventListener('click', () => {
    mostrandoTodos = !mostrandoTodos;
    projetos.forEach((projeto, index) => {
        if (index >= 4) {
            projeto.style.display = mostrandoTodos ? 'block' : 'none';
        }
    });
    btnMostrarProjetos.textContent = mostrandoTodos ? 'Mostrar menos' : 'Mostrar mais';
});

// Rolagem suave para links do menu
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Alternar tema claro/escuro
const btnTema = document.createElement('button');
btnTema.textContent = '🌙';
btnTema.classList.add('btn-tema');
document.body.appendChild(btnTema);

btnTema.addEventListener('click', () => {
    document.body.classList.toggle('modo-escuro');
    btnTema.textContent = document.body.classList.contains('modo-escuro') ? '☀️' : '🌙';
});
