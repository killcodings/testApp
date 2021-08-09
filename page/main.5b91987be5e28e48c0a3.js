(() => {
  "use strict";
  var e = {
      373: (e, t, r) => {
        r.r(t);
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.r = (e) => {
    "undefined" != typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }),
    (() => {
      var e;
      function t(e) {
        return e < 10 && (e = "0" + e), e;
      }
      r(373),
        setInterval(function () {
          document.getElementById("current_date_time_block").innerHTML =
            t((e = new Date()).getHours()) + ":" + t(e.getMinutes());
        }, 1000);
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?id=625143&appid=330c42525e0706618699bd0f5e5057df"
      )
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          console.log(e),
            (document.querySelector(".temperature").innerHTML =
              Math.round(e.main.temp - 273) + "&deg;C"),
            (document.querySelector(".features").innerHTML =
              '<img src="https://openweathermap.org/img/wn/' +
              e.weather[0].icon +
              '@2x.png">');
        })
        .catch(function () {});
      let n = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
      (document.querySelector(".date_now").innerHTML = (function () {
        var e = new Date(),
          r = t(e.getDate()),
          o = e.getMonth() + 1,
          i = e.getFullYear();
        return r + " " + n[o] + " " + i;
      })()),
        new Swiper(".image-slider", {
          navigation: { nextEl: ".swiper_next", prevEl: ".swiper_prev" },
          slidesPerView: 1,
          loopedSlides: 0,
          spaceBetween: 0,
          loop: !0,
          centeredSlides: !0,
        });
    })();
})();

function goBack() {
  window.history.back();
}
