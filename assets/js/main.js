/* FurnaceGuard La Mesa - minimal interactions */
(function(){
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.getElementById("mobile-menu");
  if (toggle && panel) {
    toggle.addEventListener("click", function(){
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
  }

  // Mobile dropdown accordions (tap). Desktop uses hover via CSS.
  document.querySelectorAll(".nav-dropdown").forEach(function(drop){
    var btn = drop.querySelector(".nav-dropdown-toggle");
    if (!btn) return;
    btn.addEventListener("click", function(e){
      e.preventDefault();
      var open = drop.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });

  // Footer expanders (services, service areas)
  document.querySelectorAll(".expander-toggle").forEach(function(btn){
    btn.addEventListener("click", function(){
      var more = btn.parentElement.querySelector(".footer-more");
      if (!more) return;
      var label = btn.getAttribute("data-label") || "items";
      var open = more.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Show fewer " + label : "View all " + label;
    });
  });
})();
