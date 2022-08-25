sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("OrderSystem.ordersystem.controller.Header", {
      onInit: function () {
        var oJsonModel = new JSONModel({
          OrderType: [
            {
              id: 1,
              type: "Zone Picking",
            },
            {
              id: 2,
              type: "Discrete Picking",
            },
            {
              id: 2,
              type: "Batch/Multi-Order Picking",
            },
            {
              id: 3,
              type: "Discrete Picking",
            },
            {
              id: 2,
              type: "Cluster Picking",
            },
            {
              id: 2,
              type: "Wave Picking",
            },
          ],
          PymntConditions: [
            {
              id: 1,
              type: "Condition 1",
            },
            {
              id: 2,
              type: "Condition 2",
            },
            {
              id: 3,
              type: "Condition 3",
            },
          ],
          customerCode: [
            {
              id: 1,
              code: "RF45HJK",
            },
            {
              id: 2,
              code: "HGF5455",
            },

            {
              id: 3,
              code: "FG235KL",
            },
            {
              id: 4,
              code: "AHJD435",
            },
            {
              id: 5,
              code: "XJHU65S",
            },
          ],
          ShipTo: [
            {
              name: "AL",
            },
            {
              name: "AK",
            },
            {
              name: "LA",
            },
            {
              name: "KY",
            },
            {
              name: "OH",
            },
          ],
          Carrir: [
            {
              name: "Carrir 1",
            },
            {
              name: "Carrir 1",
            },
            {
              name: "Carrir 1",
            },
            
          ],
        });
        this.getView().setModel(oJsonModel, "oOrderData");

      },
    });
  }
);
