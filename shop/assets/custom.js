/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

/** Footer accordion **/

 if (window.innerWidth < 640) {
     $(document).ready(function() {
        $(".faq-accordion > h2").on("click", function() {
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
              .siblings(".content")
              .slideUp(200);
            $(".faq-accordion > h2 i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
          } else {
            $(".faq-accordion > h2 i")
              .removeClass("fa-minus")
              .addClass("fa-plus");
            $(this)
              .find("i")
              .removeClass("fa-plus")
              .addClass("fa-minus");
            $(".faq-accordion > h2").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
              .siblings(".content")
              .slideDown(200);
          }
        });
      });
  }

  $(document).ready(function() {
     $(".description-accordion > h2").on("click", function() {
       $(this).addClass("none"); 
       if ($(this).hasClass("active")) {
         $(this).removeClass("active");
         $(this)
           .siblings(".content")
           .slideUp(200);
         $(".description-accordion > h2 i")
           .removeClass("fa-minus")
           .addClass("fa-plus");
       } else {
         $(".description-accordion > h2 i")
           .removeClass("fa-minus")
           .addClass("fa-plus");
         $(this)
           .find("i")
           .removeClass("fa-plus")
           .addClass("fa-minus");
         $(".description-accordion > h2").removeClass("active");
         $(this).addClass("active");
         $(".content").slideUp(200);
         $(this)
           .siblings(".content")
           .slideDown(200);
       }
     });
   });
