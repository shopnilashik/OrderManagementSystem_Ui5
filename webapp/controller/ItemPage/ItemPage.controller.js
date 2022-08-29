sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, History) {
    "use strict";

    return Controller.extend(
      "OrderSystem.ordersystem.controller.ItemPage.ItemPage",
      {
        onInit: function () {
          var oJsonModel = new JSONModel({
            Discount: [
              {
                condition: "ZP01",
                contDes: "Extra Cost (pock)",
                value: "100",
                curr: "EUR",
              },
              {
                condition: "ZS01",
                contDes: "Discount",
                value: "50",
                curr: "%",
              },
              {
                condition: "Sim result",
                contDes: "VV",
                value: "",
                curr: "",
              },
            ],
          });
          this.getView().setModel(oJsonModel, "oOrderData");
        },
        onNavButton: function () {
          var oHistory = History.getInstance();
          var sPreviousHash = oHistory.getPreviousHash();

          if (sPreviousHash !== undefined) {
            window.history.go(-1);
          } else {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteMain", {}, true);
          }
        },
      }
    );
  }
);
 