var AppConfig = (function () {
    var appModuleName = 'app';
    var appModuleVendorDependencies = ['ngResource', /*'ngRoute',*/ 'ui.bootstrap', 'ui.router'];

    return {
        appModuleName: appModuleName,
        appModuleVendorDependencies: appModuleVendorDependencies
    };
})();