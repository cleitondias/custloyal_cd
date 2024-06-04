sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalcd/Customers/test/integration/FirstJourney',
		'custloyalcd/Customers/test/integration/pages/CustomersList',
		'custloyalcd/Customers/test/integration/pages/CustomersObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomersList, CustomersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalcd/Customers') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomersList: CustomersList,
					onTheCustomersObjectPage: CustomersObjectPage
                }
            },
            opaJourney.run
        );
    }
);