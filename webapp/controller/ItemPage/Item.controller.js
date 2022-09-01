sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend(
      "OrderSystem.ordersystem.controller.ItemPage.ItemPage",
      {
        onInit: function () {
          var oJsonModel = new JSONModel({
            Product: [
              {
                name: "MacBook Pro",
              },
              {
                name: "MacBook Air",
              },
              {
                name: "Mac Stodio",
              },
            ],
            Category: [
              {
                item: "Laptop",
              },
              {
                item: "Accessoriess",
              },
              {
                item: "Phone",
              },
              {
                item: "Desktop",
              },
            ],
            Batch: [
              {
                id: 1,
                code: "45HJK",
              },
              {
                id: 2,
                code: "F5455",
              },

              {
                id: 3,
                code: "235KL",
              },
              {
                id: 4,
                code: "JD435",
              },
              {
                id: 5,
                code: "HU65S",
              },
            ],
            BatchTable: [
              {
                id: 10001,
                conratestic: "Tona",
                value: "11",
              },
              {
                id: 10001,
                conratestic: "Scelta",
                value: "2",
              },
              {
                id: 10001,
                conratestic: "calibo",
                value: "23",
              },
            ],
            
          });
          this.getView().setModel(oJsonModel, "oOrderData");
        }
      }
    );
  }
);
 