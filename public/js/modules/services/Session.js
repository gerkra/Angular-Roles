app.service('Session', function () {
    "use strict";
    var self = this;

    self.create = function (sessionId, userId, userRole) {
        self.id = sessionId;
        self.userId = userId;
        self.userRole = userRole;
    };

    self.destroy = function () {
        self.id = null;
        self.userId = null;
        self.userRole = null;
    };

    return self;
});