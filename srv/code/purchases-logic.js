/**
 * 
 * @On(event = { "CREATE" }, entity = "custloyal_cdSrv.Purchases")
 * @param {Object} req - User information, tenant-specific CDS model, headers and query parameters
*/
module.exports = async function(req) {
  // Calculate reward points as one tenth of the purchase value
  req.data.rewardPoints = Math.floor(req.data.purchaseValue / 10);

  // Get the related customer
  const customer = await SELECT.one.from('custloyal_cdSrv.Customers').where({ ID: req.data.customer_ID });

  // Update the total purchase value and total reward points of the related customer
  if (customer) {
    customer.totalPurchaseValue += req.data.purchaseValue;
    customer.totalRewardPoints += req.data.rewardPoints;

    await UPDATE('custloyal_cdSrv.Customers')
      .set({
        totalPurchaseValue: customer.totalPurchaseValue,
        totalRewardPoints: customer.totalRewardPoints
      })
      .where({ ID: customer.ID });
  }
};