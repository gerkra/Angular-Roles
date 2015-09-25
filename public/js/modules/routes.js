app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'build/templates/login.html',
        controllerAs: 'LoginCtrl'
    }).otherwise({
        redirectTo: '/appeals'
    });

}]).run(['$rootScope', '$location', '$route', 'User', function ($rootScope, $location, $route, User) {
    $rootScope.User = User;
    $rootScope.$on('$routeChangeStart', function (event, next) {
        var locationPath = $location.path();
        if (locationPath !== "/login" && locationPath !== "/forgotPassword" && locationPath !== "/register" && locationPath !== '/confirmPhone') {
            $rootScope.User.isAuthenticated(function (isLogined) {
                if (!isLogined.login_status) {
                    $rootScope.isLogined = false;
                    $location.path("login");
                    $route.reload();
                } else {
                    $rootScope.$broadcast('userLogin', isLogined.first_name + ' ' + isLogined.last_name);
                    $rootScope.role = isLogined.role;
                    $rootScope.isLogined = true;
                    if (next.access !== undefined) {
                        var access = next.access.requiredPermissions.indexOf(isLogined.role) + 1;
                        if (!access) {
                            $location.path('/');
                            $route.reload();
                        }
                    }
                }
            });
        }
    });
}]);