window
  .addEventListener('load', function (e) {

    let menu = document.getElementById('menu');
    let drawer = document.getElementById('drawer');

    menu.addEventListener('click', function (e) {
      drawer
        .classList
        .toggle('open');
      e.stopPropagation();
    });

  })
