'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Login',

    email: '',
    password: '',

    events: {
        signin: 'signin'
    },

    onSignin: function() {
        this.notify({
            eventName: this.events.signin,
            email: this.get('email'),
            password: this.get('password')
        });
    },

    // additional properties

});

// START_CUSTOM_CODE_authenticationView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_authenticationView
module.exports = ViewModel;