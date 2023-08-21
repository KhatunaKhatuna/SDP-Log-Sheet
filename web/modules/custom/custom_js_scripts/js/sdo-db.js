(function ($) {
  Drupal.behaviors.sdplsWebformBehaviorsdodb = {
    attach: function (context, settings) {
      //Change Other Element style when field element
      function changeOtherElementstyle(elementId, a, b) {
        let parent = document.getElementById(elementId);
        let element = parent.lastElementChild;
        if (element) {
          element.style.margin = "0";
          element.style.width = "100%";
          element.style[a] = b;
        }
      }

      // Call the function once on page load to apply the style initially

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
      changeOtherElementstyleFieldset("edit-missing-items-sdo-db");
      changeOtherElementstyleFieldset("edit-errors-found-sdo-db-1st");
      changeOtherElementstyleFieldset("edit-attachment-sdo-db-1st");
      changeOtherElementstyleFieldset("edit-errors-found-sdo-db-2nd");
      changeOtherElementstyleFieldset("edit-attachment-sdo-db-2nd");
      changeOtherElementstyleFieldset(
        "edit-data-correction-is-required-sdo-db"
      );
      changeOtherElementstyleFieldset(
        "edit-contact-with-data-originator-needed-sdo-db"
      );

      // Function to handle window resize
      function handleWindowResize() {
        // Call your changeOtherElementstyle function here with the elementId
        changeOtherElementstyleFieldset("edit-missing-items-sdo-db");
        changeOtherElementstyleFieldset("edit-errors-found-sdo-db-1st");
        changeOtherElementstyleFieldset("edit-attachment-sdo-db-1st");
        changeOtherElementstyleFieldset("edit-errors-found-sdo-db-2nd");
        changeOtherElementstyleFieldset("edit-attachment-sdo-db-2nd");

        changeOtherElementstyleFieldset(
          "edit-data-correction-is-required-sdo-db"
        );
        changeOtherElementstyleFieldset(
          "edit-contact-with-data-originator-needed-sdo-db"
        );
    
      }

      // Add an event listener for window resize
      window.addEventListener("resize", handleWindowResize);
    },
  };
})(jQuery);
