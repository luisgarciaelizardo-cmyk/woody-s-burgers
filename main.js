// Woody's Burgers — enlaces de WhatsApp y pestañas del menú
(function () {
  var PHONE = '528441001075'; // +52 844 100 1075 (México)

  var MESSAGES = {
    pedido: "¡Hola Woody's Burgers! 🍔 Quiero hacer un pedido:\n\n",
    evento: "¡Hola Woody's Burgers! 🎉 Me gustaría cotizar un evento.\n\n" +
            "• Fecha:\n• Lugar:\n• Número de personas:\n• Comentarios:"
  };

  document.querySelectorAll('[data-wa]').forEach(function (a) {
    var msg = MESSAGES[a.getAttribute('data-wa')] || '';
    a.href = 'https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg);
  });

  // Pestañas del menú
  var tabs = document.querySelectorAll('.tabs [role="tab"]');
  var cards = document.querySelectorAll('.menu__grid .card');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var cat = tab.getAttribute('data-tab');
      tabs.forEach(function (t) { t.setAttribute('aria-selected', String(t === tab)); });
      document.querySelector('.menu__grid').classList.toggle('is-filtered', cat !== 'all');
      cards.forEach(function (c) {
        c.hidden = !(cat === 'all' || c.getAttribute('data-cat') === cat);
      });
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
