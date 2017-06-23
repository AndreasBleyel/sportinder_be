/**
 * Created by andi on 23.06.17.
 */

module.exports = function(app) {
  app.dataSources.sportinder.autoupdate();
  console.log("Autoupdate");
};
