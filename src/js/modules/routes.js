app.config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES', function ($stateProvider, $urlRouterProvider, USER_ROLES) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
        url: '/login',
        templateUrl: '../templates/auth/login.html',
        controller: 'LoginCtrl as LoginCtrl',
        data: {
            authorizedRoles: [USER_ROLES.all]
        }
    }).state('register', {
        url: '/register',
        templateUrl: '../templates/auth/register.html',
        controller: 'RegCtrl as RegCtrl',
        data: {
            authorizedRoles: [USER_ROLES.admin]
        }
    });
}]).run(function ($rootScope, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
        var authorizedRoles = next.data.authorizedRoles;
        //if (!AuthService.isAuthorized(authorizedRoles)) {
        //    event.preventDefault();
        //    if (AuthService.isAuthenticated()) {
        //        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        //    } else {
        //        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        //    }
        //}
    });
});