// button

$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = true;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == false) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = true;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = false;
      }
    }

  });
// navbar-fix
  $(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});