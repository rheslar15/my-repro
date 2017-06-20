'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    gestures = require('ui/gestures'),
    // additional requires

    viewModel = require('./home-view-model');

function onhomeModelFormSubmit() {

}

function onhomeModelFormCancel() {
    helpers.back();
}

// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.homeModelSubmit, onhomeModelFormSubmit);

        viewModel.on(viewModel.events.homeModelCancel, onhomeModelFormCancel);

        // additional pageInit

    }
}

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home
exports.pageLoaded = pageLoaded;