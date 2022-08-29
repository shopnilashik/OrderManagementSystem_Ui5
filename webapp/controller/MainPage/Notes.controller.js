sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "OrderSystem.ordersystem.controller.MainPage.Notes",
      {
        onInit: function () {
          var oJsonModel = new JSONModel({
            Note: [
              {
                type: "NP01 - Header Note",
                text: "This is a note",
                delete: "x",
              },
              {
                type: "NP02 - Generic Note",
                text: "This is a generic note",
                delete: "x",
              },
            ],
          });
          this.getView().setModel(oJsonModel, "oOrderData");
        },
      }
    );
  }
);
