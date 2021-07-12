/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AffiliateTool.Application',

    name: 'AffiliateTool',

    requires: [
        // This will automatically load all classes in the AffiliateTool namespace
        // so that application classes do not need to require each other.
        'AffiliateTool.*'
    ],

    // The name of the initial view to create.
    mainView: 'AffiliateTool.view.main.Main'
});
