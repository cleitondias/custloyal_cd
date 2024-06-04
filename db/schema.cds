namespace custloyal_cd;

entity Customers {
  key ID: UUID;
  name: String(100);
  email: String(100);
  customerNumber: Integer;
  totalPurchaseValue: Integer;
  totalRewardPoints: Integer;
  totalRedeemedRewardPoints: Integer;
}

entity Purchases {
  key ID: UUID;
  purchaseValue: Integer;
  rewardPoints: Integer;
  selectedProduct: String(100);
  customer: Association to Customers;
}

entity Redemptions {
  key ID: UUID;
  redeemedAmount: Integer;
  customer: Association to Customers;
}

