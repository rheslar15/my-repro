'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Home',

    events: {
        homeModelSubmit: 'homeModelSubmit',
        homeModelCancel: 'homeModelCancel'
    },

    onhomeModelFormSubmit: function() {
        this.notify({
            eventName: this.events.homeModelSubmit
        });
    },

    onhomeModelFormCancel: function() {
        this.notify({
            eventName: this.events.homeModelCancel
        });
    },
    // additional properties

});

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home
module.exports = ViewModel;