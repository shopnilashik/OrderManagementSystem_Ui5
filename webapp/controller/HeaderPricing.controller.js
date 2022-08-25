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
              contDes: "Price List",
              value: "25",
              curr: "EUR",
              priceUnits: "1",
              uom: "PZ",
              conditionValue: "2500",
              curr1: "EUR",
            },
            {
              condition: "ZS01",
              contDes: "Discount",
              value: "50",
              curr: "%",
              priceUnits: "",
              uom: "",
              conditionValue: "150",
              curr1: "EUR",
            },
            {
              condition: "ZP01",
              contDes: "Extra Cost (pock)",
              value: "50",
              curr: "",
              priceUnits: "",
              uom: "",
              conditionValue: "",
              curr1: "",
            },

            {
              condition: "Sim result",
              contDes: "VV",
              value: "",
              curr: "",
              priceUnits: "",
              uom: "",
              conditionValue: "",
              curr1: "",
            },
          ],
        });
        this.getView().setModel(oJsonModel, "oOrderData");

      },
    });
  }
);
