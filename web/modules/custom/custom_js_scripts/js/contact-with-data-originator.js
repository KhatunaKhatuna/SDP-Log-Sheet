(function ($) {
    Drupal.behaviors.sdplsWebformBehaviorcwdo = {
      attach: function (context, settings) {  
        //Change Other Element style when fieldset
        function changeOtherElementstyleFieldset(elementId, a, b) {
          let parentFieldset = document.getElementById(elementId);
          let elementFieldset = parentFieldset.lastElementChild;
          let elementOther = elementFieldset.lastElementChild;
          if (elementOther) {
            elementOther.style.margin = "0";
            elementOther.style.width = "100%";
            elementOther.style[a] = b;
          }
        }
  
        // Call the function once on page load to apply the style initially
        changeOtherElementstyleFieldset("edit-means-of-contact-rdr");
        changeOtherElementstyleFieldset(
          "edit-can-raw-data-proceed-rdr"
        );
        changeOtherElementstyleFieldset("edit-means-of-contact-eval");
        changeOtherElementstyleFieldset("edit-can-raw-data-proceed-eval");
        changeOtherElementstyleFieldset("edit-means-of-contact-did");
        changeOtherElementstyleFieldset(
          "edit-can-raw-data-proceed-did"
        );
        changeOtherElementstyleFieldset("edit-means-of-contact-cc");
        changeOtherElementstyleFieldset("edit-can-raw-data-proceed-cc");
  
        // Function to handle window resize
        function handleWindowResize() {
          // Call your changeOtherElementstyle function here with the elementId
          changeOtherElementstyleFieldset("edit-means-of-contact-rdr");
          changeOtherElementstyleFieldset(
            "edit-can-raw-data-proceed-rdr"
          );
          changeOtherElementstyleFieldset("edit-means-of-contact-eval");
          changeOtherElementstyleFieldset("edit-can-raw-data-proceed-eval");
          changeOtherElementstyleFieldset("edit-means-of-contact-did");
          changeOtherElementstyleFieldset(
            "edit-can-raw-data-proceed-did"
          );
          changeOtherElementstyleFieldset("edit-means-of-contact-cc");
          changeOtherElementstyleFieldset("edit-can-raw-data-proceed-cc");
        }
  
        // Add an event listener for window resize
        window.addEventListener("resize", handleWindowResize);
      },
    };
  })(jQuery);