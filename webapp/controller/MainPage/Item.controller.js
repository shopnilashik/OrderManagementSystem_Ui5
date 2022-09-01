sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel" ,"sap/ui/core/Fragment",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel,Fragment, Filter, FilterOperator) {
    "use strict";

    return Controller.extend(
      "OrderSystem.ordersystem.controller.MainPage.Header",
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
            ],ProductData: [
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
              {
                productcode: "1410866423",
                Product: "Product Demo",
                materialGroup: "Material Group Demo",
                gerlevel1: "Z1 - Forest",
                gerlevel2: "Z2- Tree",
                gerlevel3: "Z3- leaf",
                gerlevel4: "Z4 - Fruit",
                attribute1: "Attribute 1",
                attribute2: "Attribute 2",
                attribute3: "Attribute 3",
                attribute4: "Attribute 4",
                attribute5: "Attribute 5",
                UoMSale: "m2",
                priceList: "10€",
                discount: "10%",
              },
            ],
            BatchTable:[
              {
                documentDate:"01.2022",
                externalRef:"External Reference",
                choice:"1st Choice",
                application:"11",
                caliber:"A",
                quantity:"2000"
                
              },
              {
                documentDate:"02.2022",
                externalRef:"External Reference",
                choice:"2nd Choice",
                application:"23",
                caliber:"B",
                quantity:"1200"
                
              },
            ]
          });
          this.getView().setModel(oJsonModel, "oOrderData");
        },
        navToItemPage: function () {
          var oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("ItemPage", {}, true);
        },
        productHandler: function () {
          var oView = this.getView();

          if (!this._pValueHelpDialog) {
            this._pValueHelpDialog = Fragment.load({
              id: oView.getId(),
              name: "OrderSystem.ordersystem.view.fragment.products",
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
        batchHandler: function () {
          var oView = this.getView();

          if (!this._pValueHelpDialogBatch) {
            this._pValueHelpDialogBatch = Fragment.load({
              id: oView.getId(),
              name: "OrderSystem.ordersystem.view.fragment.batch",
              controller: this,
            }).then(function (oValueHelpDialogBatch) {
              oView.addDependent(oValueHelpDialogBatch);
              return oValueHelpDialogBatch;
            });
          }
          this._pValueHelpDialogBatch.then(
            function (oValueHelpDialogBatch) {
              oValueHelpDialogBatch.open();
            }.bind(this)
          );
        },
        ManualEntryHandler:function(){
          var oView = this.getView();

          if (!this._pValueHelpDialogChoice) {
            this._pValueHelpDialogChoice = Fragment.load({
              id: oView.getId(),
              name: "OrderSystem.ordersystem.view.fragment.choice",
              controller: this,
            }).then(function (oValueHelpDialogChoice) {
              oView.addDependent(oValueHelpDialogChoice);
              return oValueHelpDialogChoice;
            });
          }
          this._pValueHelpDialogChoice.then(
            function (oValueHelpDialogChoice) {
              oValueHelpDialogChoice.open();
            }.bind(this)
          );
        },
        simulateHandler:function(){
          var oView = this.getView();

          if (!this._pValueHelpDialogSimulate) {
            this._pValueHelpDialogSimulate = Fragment.load({
              id: oView.getId(),
              name: "OrderSystem.ordersystem.view.fragment.simulate",
              controller: this,
            }).then(function (oValueHelpDialogSimulate) {
              oView.addDependent(oValueHelpDialogSimulate);
              return oValueHelpDialogSimulate;
            });
          }
          this._pValueHelpDialogSimulate.then(
            function (oValueHelpDialogSimulate) {
              oValueHelpDialogSimulate.open();
            }.bind(this)
          );
        },

        handleSearch: function (oEvent) {
          var sValue = oEvent.getParameter("value");
          var oFilter = new Filter("Product", FilterOperator.Contains, sValue);
          var oBinding = oEvent.getSource().getBinding("items");
          oBinding.filter([oFilter]);
        },
        handleValueHelpClose: function (oEvent) {
          var oSelectedItem = oEvent.getParameter("selectedItem"),
            oInput = this.byId("ProductInput");

          if (!oSelectedItem) {
            oInput.resetProperty("value");
            return;
          }

          oInput.setValue(oSelectedItem.getCells()[0].getTitle());
        },
        onSaveButton:function(){
          this._pValueHelpDialogChoice.then(
            function (oValueHelpDialogChoice) {
              oValueHelpDialogChoice.close();
            }.bind(this)
          );
        },
        onSaveBatch:function(){
          this._pValueHelpDialogBatch.then(
            function (oValueHelpDialogBatch) {
              oValueHelpDialogBatch.close();
            }.bind(this)
          );
        },
        onSaveButtonSimulate:function(){
          this._pValueHelpDialogSimulate.then(
            function (oValueHelpDialogSimulate) {
              oValueHelpDialogSimulate.close();
            }.bind(this)
          );
        },
      }
    );
  }
);
