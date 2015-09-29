app.factory('AuthService', function ($http, MAIN_CONST, Session) {
    var AuthService = {};

    AuthService.login = function (credentials, callback) {
        $http({
            url: MAIN_CONST.BACK_END + 'auth/login',
            method: 'POST',
            data: credentials
        }).then(
            function (response) {
                if (callback && typeof callback == 'function') callback(null, response);
            }, function (response) {
                if (callback && typeof callback == 'function') callback(response);
            }
        );
    };

    AuthService.isAuthenticated = function () {
        return !!Session.userId;
    };

    AuthService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (this.isAuthenticated() && authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return AuthService;
});