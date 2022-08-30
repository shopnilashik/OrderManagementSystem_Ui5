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
