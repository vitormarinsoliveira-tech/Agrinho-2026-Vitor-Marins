let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index){
    slides.forEach((slide) => {
        slide.style.opacity = 0;
        slide.style.zIndex = 0;
    });

    // Mantém o slide atual visível e acima dos outros
    slides[index].style.opacity = 1;
    slides[index].style.zIndex = 1;
}

document.getElementById('next').addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click',()=>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
});

/* Troca automática */
setInterval(()=>{
    currentIndex++;
    if(currentIndex >= slides.length){
        currentIndex = 0;
    }
    showSlide(currentIndex);
}, 4000);

// Inicia mostrando o primeiro
showSlide(currentIndex);
// ==========================================================================
// LÓGICA DO BOTÃO VOLTAR AO TOPO
// ==========================================================================
const btnTopo = document.getElementById('btn-topo');

// Monitora a rolagem da página
window.addEventListener('scroll', () => {
    // Se o usuário rolar mais de 300 pixels para baixo, mostra o botão
    if (window.scrollY > 300) {
        btnTopo.style.opacity = '1';
        btnTopo.style.visibility = 'visible';
        btnTopo.style.transform = 'translateY(0)';
    } else {
        btnTopo.style.opacity = '0';
        btnTopo.style.visibility = 'hidden';
        btnTopo.style.transform = 'translateY(10px)';
    }
});

// Quando o usuário clicar no botão, rola suavemente para o topo
btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
