/**
 * Created by VaJoy on 2014/10/2.
 * based On jQuery
 * @author VaJoy Larn
 * https://github.com/VaJoy/smartImg
 * http://vajoy.cnblogs.com
 * Do not delete here while you are using smartImg
 */
(function ($) {
    var st = null;
    $.smartImg = function () {
        var $Imgs = $("img[s-src]");
        var getStart = function () {
            if ($Imgs.length) {
                var $img, prefix, srcs, i = 0, srca, srcb, url, screen_w;
                var win_w = $(window).width();
                var exp = /^.*\.[^\d]*/g;
                $Imgs.each(function (i, e) {
                    $img = $(this);
                    prefix = $img.attr("s-prefix") ? $img.attr("s-prefix") : "";
                    srcs = $img.attr("s-src").split(",").sort(function (a, b) {
                        srca = a.replace(exp, "");
                        srcb = b.replace(exp, "");
                        if (srca && srcb) return srcb - srca; //防止没写屏宽数值
                        else return 0;
                    });

                    i = 0;
                    while (i < srcs.length) {
                        screen_w = srcs[i].replace(exp, "");
                        screen_w = screen_w ? screen_w : 0; //防止没写屏宽数值
                        if (win_w > screen_w) {
                            url = prefix + exp.exec(srcs[i])[0];
                            $img.attr("src", url);
                            break;
                        }
                        i++;
                    }
                })
            }
        }
        getStart();
        $(window).resize(function () {
            clearTimeout(st);
            st = setTimeout(getStart, 100);
        })
    }
    $.smartImg();
})(jQuery);


