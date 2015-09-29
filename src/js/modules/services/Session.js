app.service('Session', function () {
    var Session = {};

    Session.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };

    Session.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };

    return Session;
});