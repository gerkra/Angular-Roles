var app = angular.module(AppConfig.appModuleName, AppConfig.appModuleVendorDependencies);

angular.element(document).ready(function () {
    angular.bootstrap(document, [AppConfig.appModuleName]);
});