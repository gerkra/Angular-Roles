var AppConfig = (function () {
    var appModuleName = 'app';
    var appModuleVendorDependencies = ['ngResource', 'ngRoute', 'ui.bootstrap'];

    return {
        appModuleName: appModuleName,
        appModuleVendorDependencies: appModuleVendorDependencies
    };
})();