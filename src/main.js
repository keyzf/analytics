
analytics_server = analytics_server || 'https://statistics.demo.com/s.gif';

(function (_server) {

    let set_forever_cookie = function (name, value) {
        document.cookie = name + "=" + value + ";expires=-1";
    };

    let get_cookie = function (name) {
        let arr, val = null, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            val = unescape(arr[2]);
        }
        return val;
    };

    let js_uuid = function (len = 10, radix = 10) {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        let uuid = [], i;
        radix = radix || chars.length;
        if (len) {
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
        } else {
            let r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    };

    let report = function (url, data) {
        let rq_args = '';
        for (let p in data) {
            if (rq_args !== '') {
                rq_args += '&';
            }
            rq_args += p + '=' + encodeURIComponent(data[p]);
        }
        let img = new Image(1, 1);
        img.src = url + '?' + rq_args;
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
        params.user_agent = navigator.userAgent || '';
    }

    // 若不存在用户标识，为新用户生成标识
    let mid = get_cookie('mid');
    if (mid == null) {
        mid = js_uuid(15, 20);
        set_forever_cookie('mid', mid);
    }
    params.mid = mid;

    // 添加随机数，防止浏览器缓存
    params.t = Math.random();

    report(_server, params);

})(analytics_server);
// 立即执行