sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "OrderSystem.ordersystem.controller.MainPage.Partners",
      {
        onInit: function () {
          var oJsonModel = new JSONModel({
            Partners: [
              {
                partnerRole: "ZA",
                roleDesc: "Sales Rep",
                partnerName: "Giaccomo Guilizzonia",
              },
              {
                partnerRole: "ZB",
                roleDesc: "Area Manager",
                partnerName: "Marco botton",
              },
              {
                partnerRole: "ZC",
                roleDesc: "Boss",
                partnerName: "Marich Maclaochain",
              },
              {
                partnerRole: "ZD",
                roleDesc: "SuperBoss",
                partnerName: "valeria Liberty",
              },
              {
                partnerRole: "WE",
                roleDesc: "Ship to Party",
                partnerName: "Shio-to-name",
              },
              {
                partnerRole: "SP",
                roleDesc: "Carrier Party",
                partnerName: "Carrier name",
              },
              {
                partnerRole: "XY",
                roleDesc: "Payer",
                partnerName: "Payer name",
              },
            ],
          });
          this.getView().setModel(oJsonModel, "oOrderData");
        },
      }
    );
  }
);
