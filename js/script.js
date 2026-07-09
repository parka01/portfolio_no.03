$(function () {
  const pageType = document.body.getAttribute('id');
  const verified = document.getElementById('wrap-security-page');
  const verifiedCat = document.getElementById('wrap-cat-page');
  const verifiedTech = document.getElementById('wrap-tech-page');
  const verifiedMed = document.getElementById('wrap-med-page');
  let menuValue = 1;

  function locate() {
    if (event.key === 'Enter') {
      if (menuValue === 1) {
        $(location).attr('href', './pages/secret-cat.html');
      } else if (menuValue === 2) {
        $(location).attr('href', './pages/secret-tech.html');
      } else if (menuValue === 3) {
        $(location).attr('href', './pages/secret-med.html');
      } else {
      }
    }

  }

  function onSelected() {
    $('.menu01, .menu02, .menu03').removeClass('selected');
    if (menuValue === 1) {
      $('.menu01').addClass('selected');
    } else if (menuValue === 2) {
      $('.menu02').addClass('selected');
    } else if (menuValue === 3) {
      $('.menu03').addClass('selected');
    }
  }

  function arrowDown() {
    if (menuValue === 1) {
      menuValue = 2;
    } else if (menuValue === 2) {
      menuValue = 3;
    } else if (menuValue === 3) {
      menuValue = 1;
    }
  }

  function arrowUp() {
    if (menuValue === 1) menuValue = 3;
    else if (menuValue === 2) {
      menuValue = 1;
    } else if (menuValue === 3) {
      menuValue = 2;
    }
  }

  $('.popup').hide();

  $('#password-input').on('keydown', function (event) {
    const value = event.target.value;
    if (event.key === 'Enter') {
      if (value == 4321) {
        window.location.replace('./pages/mainpage.html');
      } else {
        // alert("비정상적인 접근 시도 감지");
        $('.modal').addClass('bg-popup');
        $('.popup').show();
      }
    }

  });

  $('.keycap-enter').click(function () {
    const value = $('#password-input').val();

    if (value === '4321') {
      window.location.replace('./pages/mainpage.html');
    } else {
      $('.modal').addClass('bg-popup');
      $('.popup').show();
    }
  });
  
  window.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
      window.location.replace('./index.html');
    }
  });
  // main page after verified
  if (verified) {
    $('.menu01').addClass('selected');

    window.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown') {
        arrowDown();
      } else if (event.key === 'ArrowUp') {
        arrowUp();
      }
      onSelected();
      locate();
    });
    $('.keycap.down').click(function () {
      arrowDown();
      onSelected();
      locate();
    });
    $('.keycap.up').click(function () {
      arrowUp();
      onSelected();
      locate();
    });
    $('.keycap.esc').click(function () {
      window.location.replace('./index.html');
    });
    $('.keycap-enter').click(
      function () {
        if (menuValue === 1) {
          $(location).attr('href', './pages/secret-cat.html');
        } else if (menuValue === 2) {
          $(location).attr('href', './pages/secret-tech.html');
        } else if (menuValue === 3) {
          $(location).attr('href', './pages/secret-med.html');
        } else {
        }
      }
    );
  } else if (verifiedCat || verifiedTech || verifiedMed) {
  } else {
    console.log('Please verify your identity.');
  }
});
