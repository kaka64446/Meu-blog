const botaoComprar = document.querySelector('.btn-comprar');
if (botaoComprar) {
  botaoComprar.addEventListener('click', () => {
  console.log
  });
}
const cardProduto = document.querySelector('.card-produto');
if (cardProduto) {
  cardProduto.addEventListener('mouseenter', () => {
  cardProduto.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.6)';
  cardProduto.style.transition = 'box-shadow 0.3s ease';
  });
cardProduto.addEventListener('mouseleave', () => {
cardProduto.style.boxShadow = '0 4px 12px rgba(212, 175, 55, 0.15)';
  });
}
