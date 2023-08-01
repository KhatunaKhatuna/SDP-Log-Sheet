(function ($) {
  Drupal.behaviors.sdplsWebformBehaviorEvaluation = {
    attach: function (context, settings) {
      //Change Other Element style
      function changeOtherElementstyle(elementId, a, b) {
        let parent = document.getElementById(elementId);
        let element = parent.lastElementChild;
        if (element) {
          element.style.margin = "0";
          element.style.width = "100%";
          element.style[a] = b;
        }
      }
      // Function to handle window resize
      function handleWindowResize() {
        // Call your changeOtherElementstyle function here with the elementId
        changeOtherElementstyle("edit-missing-items-");
      }

      // Add an event listener for window resize
      window.addEventListener("resize", handleWindowResize);

      // Call the function once on page load to apply the style initially
      changeOtherElementstyle("edit-missing-items-");
    },
  };
})(jQuery);
