sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Fragment, Filter, FilterOperator) {
    "use strict";

    return Controller.extend(
      "OrderSystem.ordersystem.controller.MainPage.Header",
      {
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
            shipToData: [
              {
                partnerCode: "1410866423",
                partner: "Partner Demo",
                prov: "TN",
                city: "Trento",
                village: "Italy",
                address: "via frischin 3",
                postalCode: "39100",
              },
              {
                partnerCode: "1410866423",
                partner: "Partner Demo",
                prov: "TN",
                city: "Trento",
                village: "Italy",
                address: "via frischin 3",
                postalCode: "39100",
              },
              {
                partnerCode: "1410866423",
                partner: "Partner Demo",
                prov: "TN",
                city: "Trento",
                village: "Italy",
                address: "via frischin 3",
                postalCode: "39100",
              },
              {
                partnerCode: "1410866423",
                partner: " Demo",
                prov: "TN",
                city: "Trento",
                village: "Italy",
                address: "via frischin 3",
                postalCode: "39100",
              },
            ],
          });
          this.getView().setModel(oJsonModel, "oOrderData");
        },
        shipToHandler: function () {
          var oView = this.getView();

          if (!this._pValueHelpDialog) {
            this._pValueHelpDialog = Fragment.load({
              id: oView.getId(),
              name: "OrderSystem.ordersystem.view.fragment.shipTo",
              controller: this,
            }).then(function (oValueHelpDialog) {
              oView.addDependent(oValueHelpDialog);
              return oValueHelpDialog;
            });
          }
          this._pValueHelpDialog.then(
            function (oValueHelpDialog) {
              oValueHelpDialog.open();
            }.bind(this)
          );
        },
        carrierToHandler: function () {
          var oView = this.getView();
          if (!this._pValueHelpDialogCarrier) {
            this._pValueHelpDialogCarrier = Fragment.load({
              id: oView.getId(),
              name: "OrderSystem.ordersystem.view.fragment.carrierTo",
              controller: this,
            }).then(function (oValueHelpDialogCarrier) {
              oView.addDependent(oValueHelpDialogCarrier);
              return oValueHelpDialogCarrier;
            });
          }
          this._pValueHelpDialogCarrier.then(
            function (oValueHelpDialogCarrier) {
              oValueHelpDialogCarrier.open();
            }.bind(this)
          );
        },

        handleSearch: function (oEvent) {
          var sValue = oEvent.getParameter("value");
          var oFilter = new Filter("partner", FilterOperator.Contains, sValue);
          var oBinding = oEvent.getSource().getBinding("items");
          oBinding.filter([oFilter]);
        },

        handleValueHelpClose: function (oEvent) {
          var oSelectedItem = oEvent.getParameter("selectedItem"),
            oInput = this.byId("shipToInput");

          if (!oSelectedItem) {
            oInput.resetProperty("value");
            return;
          }

          oInput.setValue(oSelectedItem.getCells()[0].getTitle());
        },

        handleValueHelpCloseCarrier: function (oEvent) {
         
          var oSelectedItem = oEvent.getParameter("selectedItem"),
            oInput = this.byId("CarrierToInput");

          if (!oSelectedItem) {
            oInput.resetProperty("value");
            return;
          }

          oInput.setValue(oSelectedItem.getCells()[0].getTitle());
        },
      }
    );
  }
);
