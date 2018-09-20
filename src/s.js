(function () {

    let get_cookie = function (name) {
        let arr, val = null, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            val = unescape(arr[2]);
        }
        return val;
    };

    let params = {};

    if (document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.title = document.title || '';
        params.referrer = document.referrer || '';
    }

    if (window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }

    if (navigator) {
        params.lang = navigator.language || '';
    }

    params.mid = get_cookie('mid') || '';

    let rq_args = '';
    for (let p in params) {
        if (rq_args !== '') {
            rq_args += '&';
        }
        rq_args += p + '=' + encodeURIComponent(params[p]);
    }

    let img = new Image(1, 1);
    img.src = 'http://statistics.demo.com/s.gif?' + rq_args;

})();