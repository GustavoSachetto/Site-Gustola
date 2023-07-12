const botao = document.getElementById('botao');
const input = document.getElementById('input');
const menu = document.getElementById('menu');
const botaoMenu = document.getElementById('botao-menu');
const imagemMenu = document.querySelector('.imagem-menu');

input.addEventListener('input', ({ target }) => {
    if (target.value.length > 3) {
      botao.removeAttribute('disabled');
      return;
    }

    botao.setAttribute('disabled', '');
});

botaoMenu.addEventListener('click', function verificando() {
  
  menu.classList.toggle('ativo');
  
  if (menu.classList.contains('ativo')) {
    imagemMenu.src = "view/img/menu-sair.png";
    setTimeout(() => {
      menu.classList.remove('ativo');
      imagemMenu.src = "view/img/menu.png";
    }, 3000);
  }
  
  else {
    imagemMenu.src = "view/img/menu.png";
  }

});



