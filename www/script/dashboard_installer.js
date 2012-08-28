var dashboard_installer = dashboard_installer || {};


dashboard_installer.install = function(){
    dashboard_installer.on_jquery(function(err){
        dashboard_installer.ready();
    });
}


dashboard_installer.ready = function(){
    $.couch.replicate( "http://garden20.iriscouch.com/dashboard_seed", "dashboard", {
        success: function(data) {
            console.log(data);
        },
        error: function(status) {
            console.log(status);
        }
    }, {
        create_target: true
    });
}


dashboard_installer.on_jquery = function(cb) {
    if (dashboard_installer.check_jquery()) {
        cb();
    } else {
        setTimeout(function(){
            dashboard_installer.on_jquery(cb);
        }, 500);
    }
}

dashboard_installer.check_jquery = function() {
    if ($ && $.couch) return true;
    else return false;
}