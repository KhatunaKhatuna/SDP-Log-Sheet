//Change Raw data subject and Database entry Textarea's width
const rawDataSubjectTextarea = document.getElementById("edit-raw-data-subject");
const rawDataSubjectTextareaDiv = rawDataSubjectTextarea.parentElement;
const editDatabaseEntryTextarea = document.getElementById(
  "edit-database-entry-"
);
const editDatabaseEntryTextareaDiv = editDatabaseEntryTextarea.parentElement;

rawDataSubjectTextareaDiv.style.width = "70%";
editDatabaseEntryTextareaDiv.style.width = "70%";

(function ($) {
  Drupal.behaviors.sdplsWebformBehavior = {
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
        changeOtherElementstyle("edit-aip-items");
        changeOtherElementstyle("edit-chart-s-");
        changeOtherElementstyle("edit-sup-s-");
        changeOtherElementstyle("edit-aic-s-");
        changeOtherElementstyle("edit-data-set-s-");

        changeOtherElementstyle("edit-editor-s-");
        changeOtherElementstyle("edit-editor-s-2");
        changeOtherElementstyle("edit-cartographer");
        changeOtherElementstyle("edit-cartographer2");
        changeOtherElementstyle("edit-evaluator-s-");
        changeOtherElementstyle("edit-evaluator-s-2");
        changeOtherElementstyle("edit-quality-controllers-aimdb-");
        changeOtherElementstyle("edit-quality-controllers-aimdb-2");
        changeOtherElementstyle("edit-quality-controllers-sdo-db-");
        changeOtherElementstyle("edit-quality-controllers-sdo-db-2");
        changeOtherElementstyle("edit-quality-controllers");
        changeOtherElementstyle("edit-quality-controllers-2");
      }

      // Add an event listener for window resize
      window.addEventListener("resize", handleWindowResize);

      // Call the function once on page load to apply the style initially
      changeOtherElementstyle("edit-aip-items");
      changeOtherElementstyle("edit-chart-s-");
      changeOtherElementstyle("edit-sup-s-");
      changeOtherElementstyle("edit-aic-s-");
      changeOtherElementstyle("edit-data-set-s-");

      changeOtherElementstyle("edit-editor-s-");
      changeOtherElementstyle("edit-editor-s-2");
      changeOtherElementstyle("edit-cartographer");
      changeOtherElementstyle("edit-cartographer2");
      changeOtherElementstyle("edit-evaluator-s-");
      changeOtherElementstyle("edit-evaluator-s-2");
      changeOtherElementstyle("edit-quality-controllers-aimdb-");
      changeOtherElementstyle("edit-quality-controllers-aimdb-2");
      changeOtherElementstyle("edit-quality-controllers-sdo-db-");
      changeOtherElementstyle("edit-quality-controllers-sdo-db-2");
      changeOtherElementstyle("edit-quality-controllers");
      changeOtherElementstyle("edit-quality-controllers-2");

      changeOtherElementstyle("edit-role-assignment-details");

      // Set the some fields with value 'NIL' and reset others to 'please select', depend on the value of publication Method.
      $("#edit-publication-method", context)
        .once("sdplsWebformBehavior")
        .change(function () {
          let publicationMethod = $(this).val();
          let publicationNumber = $("#edit-publication-number");
          let databaseEntry = $("#edit-database-entry-");

          let effectiveDateData = $("#edit-effective-date");
          // Affected publication(s)'s select
          let aipItems = $("#edit-aip-items-select");
          let chart = $("#edit-chart-s-select");
          let sup = $("#edit-sup-s-select");
          let aic = $("#edit-aic-s-select");
          let dataSet = $("#edit-data-set-s-select");
          // Affected publication(s)'s other
          let aipItemsOther = $("#edit-aip-items-other");
          let chartOther = $("#edit-chart-s-other");
          let supOther = $("#edit-sup-s-other");
          let aicOther = $("#edit-aic-s-other");
          let dataSetOther = $("#edit-data-set-s-other");
          //Role assignment's select
          let editor = $("#edit-editor-s-select");
          let editor2 = $("#edit-editor-s-2-select");
          let cartographer = $("#edit-cartographer-select");
          let cartographer2 = $("#edit-cartographer2-select");
          let evaluator = $("#edit-evaluator-s-select");
          let evaluator2 = $("#edit-evaluator-s-2-select");
          let qualityControllersAIMdb = $(
            "#edit-quality-controllers-aimdb-select"
          );
          let qualityControllersAIMdb2 = $(
            "#edit-quality-controllers-aimdb-2-select"
          );
          let qualityControllersSDOdb = $(
            "#edit-quality-controllers-sdo-db-select"
          );
          let qualityControllersSDOdb2 = $(
            "#edit-quality-controllers-sdo-db-2-select"
          );
          let qualityControllersCharting = $(
            "#edit-quality-controllers-select"
          );
          let qualityControllersCharting2 = $(
            "#edit-quality-controllers-2-select"
          );
          //Role assignment's other
          let editorOther = $("#edit-editor-s-other");
          let editor2Other = $("#edit-editor-s-2-other");
          let cartographerOther = $("#edit-cartographer-other");
          let cartographer2Other = $("#edit-cartographer2-other");
          let evaluatorOther = $("#edit-evaluator-s-other");
          let evaluator2Other = $("#edit-evaluator-s-2-other");
          let qualityControllersAIMdbOther = $(
            "#edit-quality-controllers-aimdb-other"
          );
          let qualityControllersAIMdb2Other = $(
            "#edit-quality-controllers-aimdb-2-other"
          );
          let qualityControllersSDOdbOther = $(
            "#edit-quality-controllers-sdo-db-other"
          );
          let qualityControllersSDOdb2Other = $(
            "#edit-quality-controllers-sdo-db-2-other"
          );
          let qualityControllersChartingOther = $(
            "#edit-quality-controllers-other"
          );
          let qualityControllersCharting2Other = $(
            "#edit-quality-controllers-2-other"
          );
          // If the value is 'Aeronautical database', set the some field with value 'NIL' and reset select to 'please select'. Also clear value of other fields and hide it.
          if (publicationMethod === "Aeronautical database") {
            publicationNumber.val("NIL");
            databaseEntry.val("");
            // Reset the data field type and value.
            effectiveDateData.attr("type", "date");
            effectiveDateData.prop("readonly", false); // Allow changes to the data field.
            // Clear value  of Affected publication(s)'s other
            aipItemsOther.val("");
            chartOther.val("");
            supOther.val("");
            aicOther.val("");
            dataSetOther.val("");
            // Hide Affected publication(s)'s other
            changeOtherElementstyle("edit-aip-items", "display", "none");
            changeOtherElementstyle("edit-chart-s-", "display", "none");
            changeOtherElementstyle("edit-sup-s-", "display", "none");
            changeOtherElementstyle("edit-aic-s-", "display", "none");
            changeOtherElementstyle("edit-data-set-s-", "display", "none");
            //Set with value Affected publication(s)'s select
            aipItems.val("NIL");
            chart.val("NIL");
            sup.val("");
            aic.val("NIL");
            dataSet.val("");
            //Clear value  of Role assignment's other
            editorOther.val("");
            editor2Other.val("");
            cartographerOther.val("");
            cartographer2Other.val("");
            evaluatorOther.val("");
            evaluator2Other.val("");
            qualityControllersAIMdbOther.val("");
            qualityControllersAIMdb2Other.val("");
            qualityControllersSDOdbOther.val("");
            qualityControllersSDOdb2Other.val("");
            qualityControllersChartingOther.val("");
            qualityControllersCharting2Other.val("");
            //Hide Role assignment's other
            changeOtherElementstyle("edit-editor-s-", "display", "none");
            changeOtherElementstyle("edit-editor-s-2", "display", "none");
            changeOtherElementstyle("edit-cartographer", "display", "none");
            changeOtherElementstyle("edit-cartographer2", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-2", "display", "none");
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-2",
              "display",
              "none"
            );
            //Set with value Role assignment's select
            editor.val("");
            editor2.val("");
            cartographer.val("NIL");
            cartographer2.val("NIL");
            evaluator.val("");
            evaluator2.val("NIL");
            qualityControllersAIMdb.val("");
            qualityControllersAIMdb2.val("");
            qualityControllersSDOdb.val("");
            qualityControllersSDOdb2.val("");
            qualityControllersCharting.val("NIL");
            qualityControllersCharting2.val("NIL");
          }
          // If the value is 'AIC', set the some field with value 'NIL' and reset select to 'please select'. Also clear value of other fields and hide it.
          else if (publicationMethod === "AIC") {
            publicationNumber.val("");
            databaseEntry.val("NIL");

            // Change the data field type to 'text' and set its value to 'NIL'.
            effectiveDateData.attr("type", "text").val("NIL");
            effectiveDateData.prop("readonly", true); // Make the field readonly to prevent changes.
            // Clear value  of Affected publication(s)'s other
            aipItemsOther.val("");
            chartOther.val("");
            supOther.val("");
            aicOther.val("");
            dataSetOther.val("");
            // Hide Affected publication(s)'s other
            changeOtherElementstyle("edit-aip-items", "display", "none");
            changeOtherElementstyle("edit-chart-s-", "display", "none");
            changeOtherElementstyle("edit-sup-s-", "display", "none");
            changeOtherElementstyle("edit-aic-s-", "display", "none");
            changeOtherElementstyle("edit-data-set-s-", "display", "none");
            //Set with value Affected publication(s)'s select
            aipItems.val("NIL");
            chart.val("NIL");
            sup.val("NIL");
            aic.val("");
            dataSet.val("NIL");
            //Clear value  of Role assignment's other
            editorOther.val("");
            editor2Other.val("");
            cartographerOther.val("");
            cartographer2Other.val("");
            evaluatorOther.val("");
            evaluator2Other.val("");
            qualityControllersAIMdbOther.val("");
            qualityControllersAIMdb2Other.val("");
            qualityControllersSDOdbOther.val("");
            qualityControllersSDOdb2Other.val("");
            qualityControllersChartingOther.val("");
            qualityControllersCharting2Other.val("");
            //Hide Role assignment's other
            changeOtherElementstyle("edit-editor-s-", "display", "none");
            changeOtherElementstyle("edit-editor-s-2", "display", "none");
            changeOtherElementstyle("edit-cartographer", "display", "none");
            changeOtherElementstyle("edit-cartographer2", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-2", "display", "none");
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-2",
              "display",
              "none"
            );
            //Set with value Role assignment's select
            editor.val("");
            editor2.val("");
            cartographer.val("NIL");
            cartographer2.val("NIL");
            evaluator.val("");
            evaluator2.val("NIL");
            qualityControllersAIMdb.val("NIL");
            qualityControllersAIMdb2.val("NIL");
            qualityControllersSDOdb.val("NIL");
            qualityControllersSDOdb2.val("NIL");
            qualityControllersCharting.val("NIL");
            qualityControllersCharting2.val("NIL");
          }
          // If the value is 'AIP SUP', set the some field with value 'NIL' and reset select to 'please select'. Also clear value of other fields and hide it.
          else if (publicationMethod === "AIP SUP") {
            publicationNumber.val("");
            databaseEntry.val("NIL");

            // Reset the data field type and value.
            effectiveDateData.attr("type", "date");
            effectiveDateData.prop("readonly", false); // Allow changes to the data field.
            // Clear value  of Affected publication(s)'s other
            aipItemsOther.val("");
            chartOther.val("");
            supOther.val("");
            aicOther.val("");
            dataSetOther.val("");
            // Hide Affected publication(s)'s other
            changeOtherElementstyle("edit-aip-items", "display", "none");
            changeOtherElementstyle("edit-chart-s-", "display", "none");
            changeOtherElementstyle("edit-sup-s-", "display", "none");
            changeOtherElementstyle("edit-aic-s-", "display", "none");
            changeOtherElementstyle("edit-data-set-s-", "display", "none");
            //Set with value Affected publication(s)'s select
            aipItems.val("");
            chart.val("");
            sup.val("");
            aic.val("NIL");
            dataSet.val("NIL");
            //Clear value  of Role assignment's other
            editorOther.val("");
            editor2Other.val("");
            cartographerOther.val("");
            cartographer2Other.val("");
            evaluatorOther.val("");
            evaluator2Other.val("");
            qualityControllersAIMdbOther.val("");
            qualityControllersAIMdb2Other.val("");
            qualityControllersSDOdbOther.val("");
            qualityControllersSDOdb2Other.val("");
            qualityControllersChartingOther.val("");
            qualityControllersCharting2Other.val("");
            //Hide Role assignment's other
            changeOtherElementstyle("edit-editor-s-", "display", "none");
            changeOtherElementstyle("edit-editor-s-2", "display", "none");
            changeOtherElementstyle("edit-cartographer", "display", "none");
            changeOtherElementstyle("edit-cartographer2", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-2", "display", "none");
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-2",
              "display",
              "none"
            );
            //Set with value Role assignment's select
            editor.val("");
            editor2.val("");
            cartographer.val("");
            cartographer2.val("");
            evaluator.val("");
            evaluator2.val("");
            qualityControllersAIMdb.val("");
            qualityControllersAIMdb2.val("");
            qualityControllersSDOdb.val("");
            qualityControllersSDOdb2.val("");
            qualityControllersCharting.val("");
            qualityControllersCharting2.val("");
          }
          // If the value is 'AIP AMDT', set the some field with value 'NIL' and reset select to 'please select'. Also clear value of other fields and hide it.
          else if (publicationMethod === "AIP AMDT") {
            publicationNumber.val("");
            databaseEntry.val("NIL");

            // Reset the data field type and value.
            effectiveDateData.attr("type", "date");
            effectiveDateData.prop("readonly", false); // Allow changes to the data field.
            // Clear value  of Affected publication(s)'s other
            aipItemsOther.val("");
            chartOther.val("");
            supOther.val("");
            aicOther.val("");
            dataSetOther.val("");
            // Hide Affected publication(s)'s other
            changeOtherElementstyle("edit-aip-items", "display", "none");
            changeOtherElementstyle("edit-chart-s-", "display", "none");
            changeOtherElementstyle("edit-sup-s-", "display", "none");
            changeOtherElementstyle("edit-aic-s-", "display", "none");
            changeOtherElementstyle("edit-data-set-s-", "display", "none");
            //Set with value Affected publication(s)'s select
            aipItems.val("");
            chart.val("");
            sup.val("");
            aic.val("");
            dataSet.val("");
            //Clear value  of Role assignment's other
            editorOther.val("");
            editor2Other.val("");
            cartographerOther.val("");
            cartographer2Other.val("");
            evaluatorOther.val("");
            evaluator2Other.val("");
            qualityControllersAIMdbOther.val("");
            qualityControllersAIMdb2Other.val("");
            qualityControllersSDOdbOther.val("");
            qualityControllersSDOdb2Other.val("");
            qualityControllersChartingOther.val("");
            qualityControllersCharting2Other.val("");
            //Hide Role assignment's other
            changeOtherElementstyle("edit-editor-s-", "display", "none");
            changeOtherElementstyle("edit-editor-s-2", "display", "none");
            changeOtherElementstyle("edit-cartographer", "display", "none");
            changeOtherElementstyle("edit-cartographer2", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-2", "display", "none");
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-2",
              "display",
              "none"
            );
            //Set with value Role assignment's select
            editor.val("");
            editor2.val("");
            cartographer.val("");
            cartographer2.val("");
            evaluator.val("");
            evaluator2.val("");
            qualityControllersAIMdb.val("");
            qualityControllersAIMdb2.val("");
            qualityControllersSDOdb.val("");
            qualityControllersSDOdb2.val("");
            qualityControllersCharting.val("");
            qualityControllersCharting2.val("");
          }
          // If the value is 'please_select' or empty, reset all the last fields to 'please select' with empty values.
          else {
            publicationNumber.val("");
            databaseEntry.val("");

            // Reset the data field type and value.
            effectiveDateData.attr("type", "date");
            effectiveDateData.prop("readonly", false); // Allow changes to the data field.
            // Clear value  of Affected publication(s)'s other
            aipItemsOther.val("");
            chartOther.val("");
            supOther.val("");
            aicOther.val("");
            dataSetOther.val("");
            // Hide Affected publication(s)'s other
            changeOtherElementstyle("edit-aip-items", "display", "none");
            changeOtherElementstyle("edit-chart-s-", "display", "none");
            changeOtherElementstyle("edit-sup-s-", "display", "none");
            changeOtherElementstyle("edit-aic-s-", "display", "none");
            changeOtherElementstyle("edit-data-set-s-", "display", "none");
            //Set with value Affected publication(s)'s select
            aipItems.val("");
            chart.val("");
            sup.val("");
            aic.val("");
            dataSet.val("");
            //Clear value  of Role assignment's other
            editorOther.val("");
            editor2Other.val("");
            cartographerOther.val("");
            cartographer2Other.val("");
            evaluatorOther.val("");
            evaluator2Other.val("");
            qualityControllersAIMdbOther.val("");
            qualityControllersAIMdb2Other.val("");
            qualityControllersSDOdbOther.val("");
            qualityControllersSDOdb2Other.val("");
            qualityControllersChartingOther.val("");
            qualityControllersCharting2Other.val("");
            //Hide Role assignment's other
            changeOtherElementstyle("edit-editor-s-", "display", "none");
            changeOtherElementstyle("edit-editor-s-2", "display", "none");
            changeOtherElementstyle("edit-cartographer", "display", "none");
            changeOtherElementstyle("edit-cartographer2", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-", "display", "none");
            changeOtherElementstyle("edit-evaluator-s-2", "display", "none");
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-aimdb-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-sdo-db-2",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers",
              "display",
              "none"
            );
            changeOtherElementstyle(
              "edit-quality-controllers-2",
              "display",
              "none"
            );
            //Set with value Role assignment's select
            editor.val("");
            editor2.val("");
            cartographer.val("");
            cartographer2.val("");
            evaluator.val("");
            evaluator2.val("");
            qualityControllersAIMdb.val("");
            qualityControllersAIMdb2.val("");
            qualityControllersSDOdb.val("");
            qualityControllersSDOdb2.val("");
            qualityControllersCharting.val("");
            qualityControllersCharting2.val("");

            aipItems.find('option[value=""]').prop("selected", true);
            chart.find('option[value=""]').prop("selected", true);
            sup.find('option[value=""]').prop("selected", true);
            aic.find('option[value=""]').prop("selected", true);
            dataSet.find('option[value=""]').prop("selected", true);
            editor.find('option[value=""]').prop("selected", true);
            editor2.find('option[value=""]').prop("selected", true);
            cartographer.find('option[value=""]').prop("selected", true);
            cartographer2.find('option[value=""]').prop("selected", true);
            evaluator.find('option[value=""]').prop("selected", true);
            evaluator2.find('option[value=""]').prop("selected", true);
            qualityControllersAIMdb
              .find('option[value=""]')
              .prop("selected", true);
            qualityControllersAIMdb2
              .find('option[value=""]')
              .prop("selected", true);
            qualityControllersSDOdb
              .find('option[value=""]')
              .prop("selected", true);
            qualityControllersSDOdb2
              .find('option[value=""]')
              .prop("selected", true);
            qualityControllersCharting
              .find('option[value=""]')
              .prop("selected", true);
            qualityControllersCharting2
              .find('option[value=""]')
              .prop("selected", true);
          }
        });
    },
  };
})(jQuery);
