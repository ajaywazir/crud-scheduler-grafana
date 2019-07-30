'use strict';

System.register(['./datalist'], function (_export, _context) {
  "use strict";

  var DataList;

  /**
   * Expect the product list and production line list data
   * Passed these two data passed in to form the datalist
   * Create datalist object to control the instant search input
   * @param {*} products 
   * @param {*} productionLines 
   */
  function enableInstantSearch(products, productionLines) {

    productionLines = productionLines.filter(function (data) {
      return data.production_line !== null && data.equipment === null;
    });

    var productsData = products.reduce(function (arr, p) {
      var obj = { value: p, text: p.id + ' | ' + p.product_desc };
      arr.push(obj);
      return arr;
    }, []);

    var productionLineData = productionLines.reduce(function (arr, line) {
      var obj = { value: line, text: line.site + ' | ' + line.area + ' | ' + line.production_line };
      arr.push(obj);
      return arr;
    }, []);

    var productionLineDataList = new DataList("datalist-production-line", "datalist-input-production-line", "datalist-ul-production-line", productionLineData);

    var productsDataList = new DataList("datalist-products", "datalist-input-products", "datalist-ul-products", productsData);

    productionLineDataList.create();
    productionLineDataList.removeListeners();
    productionLineDataList.addListeners(productionLineDataList);

    productsDataList.create();
    productsDataList.removeListeners();
    productsDataList.addListeners(productsDataList);
  }

  return {
    setters: [function (_datalist) {
      DataList = _datalist.DataList;
    }],
    execute: function () {
      _export('enableInstantSearch', enableInstantSearch);
    }
  };
});
//# sourceMappingURL=instant_search_ctrl.js.map
