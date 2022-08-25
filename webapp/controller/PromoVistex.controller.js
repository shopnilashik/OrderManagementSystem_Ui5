sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("OrderSystem.ordersystem.controller.PromoVistex", {
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
    });
  }
);
