(function ($) {
    Drupal.behaviors.sdplsWebformBehaviorcharting = {
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
        changeOtherElementstyleFieldset("edit-missing-items-charting");
        changeOtherElementstyleFieldset(
          "edit-data-correction-is-required-charting"
        );
        changeOtherElementstyleFieldset("edit-contact-with-data-originator-needed-charting");
        changeOtherElementstyleFieldset("edit-errors-found-charting-1st");
        changeOtherElementstyleFieldset("edit-attachment-charting-1st");
        changeOtherElementstyleFieldset("edit-errors-found-charting-2nd");
        changeOtherElementstyleFieldset("edit-attachment-charting-2nd");

        // Function to handle window resize
        function handleWindowResize() {
          // Call your changeOtherElementstyle function here with the elementId
          changeOtherElementstyleFieldset(
            "edit-missing-items-charting"
          );
          changeOtherElementstyleFieldset(
            "edit-data-correction-is-required-charting"
          );
          changeOtherElementstyleFieldset("edit-contact-with-data-originator-needed-charting");
          changeOtherElementstyleFieldset("edit-errors-found-charting-1st");
          changeOtherElementstyleFieldset("edit-attachment-charting-1st");
          changeOtherElementstyleFieldset("edit-errors-found-charting-2nd");
          changeOtherElementstyleFieldset("edit-attachment-charting-2nd");

        }
  
        // Add an event listener for window resize
        window.addEventListener("resize", handleWindowResize);
      },
    };
  })(jQuery);
  