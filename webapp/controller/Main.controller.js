sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("OrderSystem.ordersystem.controller.Main", {
      onInit: function () {
      
        var oJsonModel = new JSONModel({
          OrderType: [
            {
              id: 1,
              type: "By Air",
            },
            {
              id: 2,
              type: "By Roadway",
            },
          ],
          counts: {
            goals: 9,
            personal: 11,
            employment: 12,
          },
          Employee: [
            {
              name: "Michael Adams",
              picture: "./test-resources/sap/uxap/images/person.png",
              job: "Scrum Master",
            },
            {
              name: "John Miller",
              picture: "./test-resources/sap/uxap/images/person.png",
              job: "Product Owner",
            },
            {
              name: "Richard Wilson",
              picture: "./test-resources/sap/uxap/images/person.png",
              job: "Ux Designer",
            },
            {
              name: "Julie Armstrong",
              picture: "./test-resources/sap/uxap/images/person.png",
              job: "Quality Engineer",
            },
            {
              name: "Denise Smith",
              picture: "./test-resources/sap/uxap/images/person.png",
              job: "Team Member",
            },
            {
              name: "Richard Adams",
              picture: "./test-resources/sap/uxap/images/person.png",
              job: "Team Member",
            },
          ],
        });
        this.getView().setModel(oJsonModel, "ObjectPageModel");
      },
    });

   
  }
);
