window
  .addEventListener('load', function (e) {

    let menuDrawer = document.getElementById('menu_drawer');
    let menu = document.getElementById('menu');

    menuDrawer.addEventListener('click', function (e) {
      console.log("clicked")
      menu
        .classList
        .toggle('open');
      e.stopPropagation();
    });

  })
