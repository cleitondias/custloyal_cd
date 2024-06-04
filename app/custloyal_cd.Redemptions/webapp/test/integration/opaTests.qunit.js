sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'custloyalcd/Redemptions/test/integration/FirstJourney',
		'custloyalcd/Redemptions/test/integration/pages/RedemptionsList',
		'custloyalcd/Redemptions/test/integration/pages/RedemptionsObjectPage'
    ],
    function(JourneyRunner, opaJourney, RedemptionsList, RedemptionsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('custloyalcd/Redemptions') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRedemptionsList: RedemptionsList,
					onTheRedemptionsObjectPage: RedemptionsObjectPage
                }
            },
            opaJourney.run
        );
    }
);