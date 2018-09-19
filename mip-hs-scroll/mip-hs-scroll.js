/**
 * @file mip-hs-scroll 组件
 * @author
 */
define(function (require) {
    var util = require('util');
    var templates = require('templates');
    var fetchJsonp = require('fetch-jsonp');
    var customElement = require('customElement').create();
    var InfiniteScroll = require('./infinitescroll');
    var infiniteScroll = null;

    /**
	 * [getUrl url 拼接函数]
	 *
	 * @param  {string} src 获取的最初url
	 * @return {string}     拼接后的url
	 */
    function getUrl(src) {
        var self = this;
        var url = src;
        if (src.indexOf('?') > 0) {
            url += src[src.length - 1] === '?' ? '' : '&';
            url += self.params.pnName + '=' + self.params.pn;
        }
        else {
            url += '?' + self.params.pnName + '=' + self.params.pn;
        }
        return url;
    }

    customElement.prototype.build = function () {
        var me = this;
        me.addEventAction('refreshlist', function (e) {
            refreshContent.call(me, Array.prototype.slice.call(arguments, 1));
        });
    };

    /**
	 * 构造元素，只会运行一次
	 */
    customElement.prototype.firstInviewCallback = function () {
        var self = this;
        var element = self.element;
        var src = element.getAttribute('data-src') || '';

        function getQueryString(name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
            var r = window.location.search.substr(1).match(reg);
            var context = '';
            if (r != null) {
                context = r[2];
            }

            reg = null;
            r = null;
            return context === null || context === '' || context === 'undefined' ? '' : context;
        }
        // 如果没有写data-src, 则报错提示
        if (!src) {
            console.error('未填写src字段，不能获取数据');
            element.remove();
            return;
        }
        else {
            getQueryString('show') ? src = src + '/' + getQueryString('show') : src = src + '/ranking';
            //			src = src + '/' + GetQueryString('show') || src + '/ranking';
        }

        // 默认参数设置
        self.params = {
            rn: 20,
            prn: 6,
            pn: 1,
            pnName: 'pn',
            bufferHeightPx: 10,
            loadingHtml: '加载中...',
            loadFailHtml: '加载失败',
            loadOverHtml: '加载完毕!',
            timeout: 5000
        };

        // 获取用户设置参数
        try {
            var script = element.querySelector('script[type="application/json"]');
            if (script) {
                self.params = util.fn.extend(self.params, JSON.parse(script.textContent.toString()));
                // 由于JSON.parse() 内不能填写Infinity(number), 只能填"Infinity"(string)来转换
                self.params.rn = (self.params.rn === 'Infinity' ? Infinity : self.params.rn);
            }

        }
        catch (e) {
            console.warn('json is illegal'); // eslint-disable-line
            console.warn(e); // eslint-disable-line
            return;
        }

        self.url = getUrl.call(self, src);

        self.pushResult = function (rn, status) {
            // 异步获取数据示例
            var deferShow = $.Deferred;
            var defer = deferShow();
            if (rn > self.rn) {
                defer.resolve('NULL');
            }
            else {
                fetchJsonp(self.url, {
                    jsonpCallback: 'callback',
                    timeout: self.params.timeout
                }).then(function (res) {
                    return res.json();
                }).then(function (data) {
                    // 数据加载成功，请求返回
                    if (data && parseInt(data.status, 10) === 0 && data.data) {
                        if (rn > self.params.rn || !data.data.items) {
                            defer.resolve('NULL');
                        }

                        templates.render(self.element, data.data.items).then(function (htmls) {
                            defer.resolve(htmls);
                        });
                        self.params.pn++;
                        self.url = getUrl.call(self, src);
                    }
                    else {
                        defer.resolve('NULL');
                    }
                }, function (data) {
                    // 数据加载失败或超时，显示“loadFailHtml（加载超时）”
                    defer.reject();
                });
            }
            return defer.promise();
        };

        infiniteScroll = new InfiniteScroll({
            $result: element.querySelector('.mip-infinitescroll-results'),
            $loading: element.querySelector('.mip-infinitescroll-loading'),
            loadingHtml: self.params.loadingHtml,
            loadFailHtml: self.params.loadFailHtml,
            loadOverHtml: self.params.loadOverHtml,
            bufferHeightPx: self.params.bufferHeightPx,
            pageResultNum: self.params.prn,
            limitShowPn: 0,
            preLoadPn: 2,
            firstResult: [],
            pushResult: self.pushResult
        });
    };

    customElement.prototype.detachedCallback = function () {
        insDestrory();
    };

    // 属性改变后重新渲染构建下拉
    customElement.prototype.attributeChangedCallback = function (attributeName, oldValue, newValue, namespace) {
        console.log(attributeName, oldValue, newValue, namespace);
        if (attributeName === 'data-src' && oldValue !== newValue) {
            refreshContent.call(this);
        }

    };

    // 刷新列表
    function refreshContent() {
        if (infiniteScroll) {
            var options = infiniteScroll.options;
            options.$result.empty();
        }

        insDestrory();
        this.firstInviewCallback();
    }

    function insDestrory() {
        // infiniteScroll && infiniteScroll.destroy();
        infiniteScroll = null;
    }

    return customElement;
});
