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

      // Call the function once on page load to apply the style initially
      changeOtherElementstyle("edit-missing-items-");
      changeOtherElementstyle("edit-missing-items-2");

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
      changeOtherElementstyleFieldset("edit-data-correction-is-required");
      changeOtherElementstyleFieldset(
        "edit-raw-data-of-required-resolution-ref-order-24-order-3-"
      );
      changeOtherElementstyleFieldset(
        "edit-affected-aip-items-elements-in-addition-to-the-items-elements-es"
      );
      changeOtherElementstyleFieldset(
        "edit-additional-affected-items-elements-agreement-with-head-of-ais"
      );
      changeOtherElementstyleFieldset(
        "edit-affected-chart-s-in-addition-to-the-chart-s-established-on-raw-d"
      );
      changeOtherElementstyleFieldset(
        "edit-additional-affected-charts-agreement-with-head-of-ais"
      );
      changeOtherElementstyleFieldset(
        "edit-contact-with-data-originator-needed"
      );
      changeOtherElementstyleFieldset("edit-evaluation-is-positive");
      changeOtherElementstyleFieldset(
        "edit-data-input-into-the-database-required"
      );

      changeOtherElementstyleFieldset("edit-data-correction-is-required2");
      changeOtherElementstyleFieldset(
        "edit-raw-data-of-required-resolution-ref-order-24-order-3-2"
      );
      changeOtherElementstyleFieldset(
        "edit-affected-aip-items-elements-in-addition-to-the-items-elements-e2"
      );
      changeOtherElementstyleFieldset(
        "edit-additional-affected-items-elements-agreement-with-head-of-ai2"
      );
      changeOtherElementstyleFieldset(
        "edit-affected-chart-s-in-addition-to-the-chart-s-established-on-raw-2"
      );
      changeOtherElementstyleFieldset(
        "edit-additional-affected-charts-agreement-with-head-of-ai2"
      );
      changeOtherElementstyleFieldset(
        "edit-contact-with-data-originator-needed2"
      );
      changeOtherElementstyleFieldset("edit-evaluation-is-positive2");
      changeOtherElementstyleFieldset(
        "edit-data-input-into-the-database-required2"
      );
      // Function to handle window resize
      function handleWindowResize() {
        // Call your changeOtherElementstyle function here with the elementId
        changeOtherElementstyle("edit-missing-items-");
        changeOtherElementstyleFieldset("edit-data-correction-is-required");
        changeOtherElementstyleFieldset(
          "edit-raw-data-of-required-resolution-ref-order-24-order-3-"
        );
        changeOtherElementstyleFieldset(
          "edit-affected-aip-items-elements-in-addition-to-the-items-elements-es"
        );
        changeOtherElementstyleFieldset(
          "edit-additional-affected-items-elements-agreement-with-head-of-ais"
        );
        changeOtherElementstyleFieldset(
          "edit-affected-chart-s-in-addition-to-the-chart-s-established-on-raw-d"
        );
        changeOtherElementstyleFieldset(
          "edit-additional-affected-charts-agreement-with-head-of-ais"
        );
        changeOtherElementstyleFieldset(
          "edit-contact-with-data-originator-needed"
        );
        changeOtherElementstyleFieldset("edit-evaluation-is-positive");
        changeOtherElementstyleFieldset(
          "edit-data-input-into-the-database-required"
        );

        changeOtherElementstyle("edit-missing-items-2");
        changeOtherElementstyleFieldset("edit-data-correction-is-required2");
        changeOtherElementstyleFieldset(
          "edit-raw-data-of-required-resolution-ref-order-24-order-3-2"
        );
        changeOtherElementstyleFieldset(
          "edit-affected-aip-items-elements-in-addition-to-the-items-elements-e2"
        );
        changeOtherElementstyleFieldset(
          "edit-additional-affected-items-elements-agreement-with-head-of-ai2"
        );
        changeOtherElementstyleFieldset(
          "edit-affected-chart-s-in-addition-to-the-chart-s-established-on-raw-2"
        );
        changeOtherElementstyleFieldset(
          "edit-additional-affected-charts-agreement-with-head-of-ai2"
        );
        changeOtherElementstyleFieldset(
          "edit-contact-with-data-originator-needed2"
        );
        changeOtherElementstyleFieldset("edit-evaluation-is-positive2");
        changeOtherElementstyleFieldset(
          "edit-data-input-into-the-database-required2"
        );
      }

      // Add an event listener for window resize
      window.addEventListener("resize", handleWindowResize);
    },
  };
})(jQuery);
