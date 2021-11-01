$(document).ready(function () {

   // бургер
   $('.burger-icon').on('click', function () {
      var blockBurger = $(this).closest('.header__content').find('.burger')
      blockBurger.addClass('open');
      blockBurger.find('.burger__bg').fadeIn();
   });
   $('.burger-close, .burger__bg').on('click', function () {
      var blockBurger = $(this).closest('.header__content').find('.burger')

      blockBurger.removeClass('open');
      blockBurger.find('.burger__bg').fadeOut();
   });
   $(document).on('mouseup', function (e) {
      if (!$(e.target).closest(".js-select").length) {
         var blockBurger = $(this).closest('.header__content').find('.burger')

         $('.js-select').removeClass('open');
         blockBurger.removeClass('open');
         blockBurger.find('.burger__bg').fadeOut();
      }
      e.stopPropagation();
   });
   // бургер конец



   // промокод
   $('.js-promocode').on('click', function () {
      if ($(this).is(':checked')) {
         $(this).closest('.input__block--promocode').find('.input__box').show();
      } else {
         $(this).closest('.input__block--promocode').find('.input__box').hide();
      }
   })
   // промокод конец

   // dropdowns
   $('.js-select-head').on('click', function () {
      var btn = $(this);
      var block = btn.closest(".js-select");

      if (!block.hasClass('open')) {
         $('.js-select').removeClass('open');
      }
      block.toggleClass('open');
   });

   $('input[name="daterange"]').focusin(function () {
      $(this).closest('.js-calendar').addClass('open');
   });

   $('.js-select--swich .js-select-body .js-select-item').on('click', function () {
      btn = $(this);
      block = btn.closest('.js-select');
      thisText = btn.text();

      block.toggleClass('open');
      block.find('.js-select-head p').text(thisText);
      block.find('.js-select-head input').val(thisText);
   });

   $('.card-police-cover__dropdown--large-head').on('click', function () {
      var btn = $(this);
      var block = btn.closest('.card-police-cover__dropdown--large');
      if (block.hasClass('open')) {
         block.find('.card-police-cover__dropdown--large-body').slideUp();
         block.find('.card-police-cover__dropdown--small').removeClass('open');
         block.find('.card-police-cover__dropdown--small').find('.card-police-cover__dropdown--small-body').slideUp();
         block.removeClass('open');
      } else {
         block.find('.card-police-cover__dropdown--large-body').slideDown();
         block.addClass('open');
      }
   });
   $('.card-police-cover__dropdown--small-head').on('click', function () {
      var btn = $(this);
      var block = btn.closest('.card-police-cover__dropdown--small');
      if (block.hasClass('open')) {
         block.find('.card-police-cover__dropdown--small-body').slideUp();
         block.removeClass('open');
      } else {
         block.find('.card-police-cover__dropdown--small-body').slideDown();
         block.addClass('open');
      }
   });
   $('.popup-country__dropdown-head').on('click', function () {
      var btn = $(this);
      var block = btn.closest('.popup-country__dropdown');
      if (block.hasClass('open')) {
         block.find('.popup-country__dropdown-body').slideUp();
         block.removeClass('open');
      } else {
         block.find('.popup-country__dropdown-body').slideDown();
         block.addClass('open');
      }
   });


   // dropdowns end



   // поиск
   var max = 12;
   $('.choose-a-country .search__results.not-all').each(function () {
      $(this).find('.search__item.show').each(function (index) {
         if (index >= max) {
            $(this).removeClass('show');
         } else {
            $(this).addClass('show');
         }
      })
   })

   $('.search__input').keyup(function () {

      var input, filter, ul, li, a, i;
      input = document.getElementById("search-main");
      filter = input.value.toUpperCase();
      ul = document.getElementById("results-main");
      li = ul.getElementsByTagName("div");
      for (i = 0; i < li.length; i++) {
         a = li[i];
         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.add('show');
            var max = 12;
            $('.choose-a-country .search__results.not-all').each(function () {

               $(this).find('.search__item.show').each(function (index) {
                  if (index >= max) {
                     $(this).removeClass('show');
                  } else {
                     $(this).addClass('show');
                  }
               })
            })
         } else {
            li[i].classList.remove('show');
            var max = 12;
            $('.choose-a-country .search__results.not-all').each(function () {

               $(this).find('.search__item.show').each(function (index) {
                  if (index >= max) {
                     $(this).removeClass('show');
                  } else {
                     $(this).addClass('show');
                  }
               })
            })
         }
      }
   });
   // поиск конец

   // popup
   $('.btn-popup-rules-entry').on('click', function () {
      $('.popup-rules-entry').fadeIn();
   });
   $('.btn-popup-rules-in-hotels').on('click', function () {
      $('.popup-rules-in-hotels').fadeIn();
   });
   $('.btn-popup-public-rules').on('click', function () {
      $('.popup-public-rules').fadeIn();
   });
   $('.btn-popup-info-tourist').on('click', function () {
      $('.popup-info-tourist').fadeIn();
   });
   $('.btn-popup-questions').on('click', function () {
      $('.popup-questions').fadeIn();
   });


   // страны
   $('.btn-popup-country-ukraine').on('click', function () {
      $('.popup-country-ukraine').fadeIn();
   })
   //нажатие вне body
   $(document).on('click', function (e) {
      if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length) {
         $('.popup').fadeOut();
      }
      e.stopPropagation();
   });
   $('.popup-close').on('click', function () {
      $('.popup').fadeOut();
   })
   $('.popup .btn').on('click', function () {
      $('.popup').fadeOut();
   })
   //нажатие вне body
   //popup end

   // плавная прокрутка якоря
   const anchors = document.querySelectorAll('a[href*="#"]')

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }
   //плавная прокрутка якоря конец

   //  скролл 
   new SimpleBar(document.getElementById('scroll-popup-rules-entry'));
   new SimpleBar(document.getElementById('scroll-popup-info-tourist'));
   new SimpleBar(document.getElementById('scroll-popup-questions'));
   if (!$('.wrapper').hasClass('index-leave-georgia')) {
      new SimpleBar(document.getElementById('scroll-popup-rules-in-hotels'));
      new SimpleBar(document.getElementById('scroll-popup-public-rules'));
   }
   //  скролл конец

   // действия в форме полиса
   $('.form-policy__btn-to-step-two').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-one').hide();
      $(this).closest('.form-policy').find('.form-policy__step-two').show();
   });
   $('.form-policy__btn-prev-to-step-one').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-two').hide();
      $(this).closest('.form-policy').find('.form-policy__step-one').show();
   });
   $('.form-policy__btn-to-step-three').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-two').hide();
      $(this).closest('.form-policy').find('.form-policy__step-three').show();
   });
   $('.form-policy__btn-prev-to-step-two').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-three').hide();
      $(this).closest('.form-policy').find('.form-policy__step-two').show();
   });
   $('.form-policy__btn-to-step-four').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-three').hide();
      $(this).closest('.form-policy').find('.form-policy__step-four').show();
   });
   $('.form-policy__btn-prev-to-step-three').on('click', function () {
      $(this).closest('.form-policy').find('.form-policy__step-four').hide();
      $(this).closest('.form-policy').find('.form-policy__step-three').show();
   });

   $('.block-policy__btn').on('click', function () {
      $(this).closest('.block-policy').find('.block-policy__form').toggleClass('open');
   })

   $('.form-policy__include-item').on('click', function () {
      if ($(this).find('.checkbox-none').is(':checked')) {
         $(this).addClass('active');
      } else {
         $(this).removeClass('active');
      }
   })
   $('.tariff__item--start').on('click', function () {
      $('.tariff__item--standart').removeClass('active');
      $('.tariff__item--max').removeClass('active');
      $('.tariff__item--start').addClass('active');
   });
   $('.tariff__item--standart').on('click', function () {
      $('.tariff__item--start').removeClass('active');
      $('.tariff__item--max').removeClass('active');
      $('.tariff__item--standart').addClass('active');
   });
   $('.tariff__item--max').on('click', function () {
      $('.tariff__item--standart').removeClass('active');
      $('.tariff__item--start').removeClass('active');
      $('.tariff__item--max').addClass('active');
   });


   // действия в форме полиса конец

   // Туристы старт
   $('.js-add-tourist').on('click', function () {
      var btn = $(this);
      if (btn.hasClass('js-add-tourist-block')) {
         btn.closest('.form-policy').find('.form-policy__participants').show();
         btn.removeClass('js-add-tourist-block');
         $('.form-policy__tourist').find('.num').val('');
         $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
            $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
         });
      } else {
         btn.closest('.form-policy').find('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
         $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
         $('.form-policy__tourist').find('.num').val('');
         $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
            $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
         });
      }
   });

   $(document).on('click', '.form-policy__close', function () {
      var btn = $(this);
      btn.closest('.form-policy__tourist').remove();
      $('.form-policy__tourist').find('.num').val('');
      $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
         $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
      });
      var count = 0;
      $($(document).find('.form-policy__tourist')).each(function () {
         count++;
      })
      if (count <= 1) {
         $('.form-policy__participants').hide();
         $('.js-add-tourist').addClass('js-add-tourist-block');
         $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
         $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
         $('.form-policy__tourist.to-clone').clone().appendTo('.form-policy__participants').show();
         $('.form-policy__tourist.to-clone:last-child').removeClass('to-clone');
         $('.form-policy__tourist').find('.num').val('');
         $('.form-policy__tourist .form-policy__subtitle .num').each(function () {
            $(this).html($('.form-policy__tourist .form-policy__subtitle .num').index(this));
         });
      }
   });

   // Туристы конец

   // Календарь

   $('input[name="daterange"], .daterangepicker').on('focus', function () {

      $(this).daterangepicker({
         opens: 'right',
         "linkedCalendars": false,
         "autoApply": true,
         "parentEl": ".js-calendar",
         "showCustomRangeLabel": false,
         "locale": {
            "format": "DD.MM.YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
               "Пн",
               "Вт",
               "Ср",
               "Чт",
               "Пт",
               "Сб",
               "Вс"
            ],
            "monthNames": [
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
               "Декабрь"
            ],
            "firstDay": 1
         },
      }, function (start, end, label) {
         console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
      // return;
   });
   // $.fn.lastWord = function () {
   //    var text = this.text().trim().split(" ");
   //    var last = text.pop();
   //    this.html(text.join(" ") + (text.length > 0 ? " <span class='lastWord'>" + last + "</span>" : last));
   // };
   // Календарь конец
});