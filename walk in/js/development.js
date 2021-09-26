window.historyJson = [
                      {
            'year':'　',
            'text':'<p>始于1992年</p>'
        },{
            'year':'2006年3月',
            'text':'<p>在成都高新区设立成都交大运达信息技术有限公司</p>'
        },{
            'year':'2009年3月',
            'text':'<p>公司名称变更为成都运达轨道交通设备有限公司</p>'
        },{
            'year':'2011年6月',
            'text':'<p>变更设立股份有限公司，公司名称变更为成都运达科技</p>'
        },{
            'year':'2015年4月',
            'text':'<p>在深圳证券交易所挂牌上市，公司股票代码：300440，公司股票简称：运达科技</p>'
        },{
            'year':'2015年11月',
            'text':'<p>完成嘉兴运达机械制造有限公司60%股权收购，嘉兴运达成为公司控股子公司</p>'
        },{
            'year':'2016年3月',
            'text':'<p>向司姆泰克文化创意（北京）有限公司增资，司姆泰克成为公司持股15%的参股子公司</p>'
        },{
            'year':'2016年3月',
            'text':'<p>收购了成都运达牵引技术有限公司100%股权，运达牵引成为公司全资子公司</p>'
        },{
            'year':'2016年12月',
            'text':'<p>投资设立了全资子公司成都运达销售服务有限公司</p>'
        },{
            'year':'2017年4月',
            'text':'<p>收购了湖南恒信电气有限公司88.7981%股权，恒信电气成为公司控股子公司</p>'
        },{
            'year':'2017年6月',
            'text':'<p>投资设立了全资子公司成都运达软件技术有限公司</p>'
        },{
            'year':'2017年7月',
            'text':'<p>投资设立了控股子公司成都运达轨道交通设备检修有限公司</p>'
        },{
            'year':'2017年11月',
            'text':'<p>投资设立了控股子公司湖南中大运达轨道交通科技有限责任公司</p>'
        },{
            'year':'2018年2月',
            'text':'<p>完成恒信电气其余股东股权收购，恒信电气成为公司全资子公司</p>'
        },{
            'year':'2018年4月',
            'text':'<p>投资设立控股子公司长春运达轨道交通设备有限公司</p>'
        },{
            'year':'2018年7月',
            'text':'<p>投资设立控股子公司广州运达智能科技有限公司</p>'
        },{
            'year':'2019年1月',
            'text':'<p>原控股子公司“成都运达销售服务有限公司”更名为“成都运达轨道交通技术服务有限公司”</p>'
        }    ];
window.onload=function () {
    historyFn();
}
function historyFn() {
    if(window.historyJson){
        var _his = window.historyJson,
            _hisLen = _his.length,
            _hisL = _hisv = 0,
            _hisTime,
            timeoutId;
        if($(window).width()>960){
            for(var h=0;h<_hisLen;h++){
                var _context = _his[h].text.substr(0,15)+"...";
                if(_hisv == 0){
                    var _Math = Math.floor(Math.random()*80);
                    _hisv = 1;
                    $(".history ul").append('<li style="top:'+_Math+'px;left:'+_hisL+'px;"><i><img src="images/dot1.png" /></i><span><h3>'+_his[h].year+'</h3><h4>'+_context+'</h4></span></li>');
                }else{
                    var _Math = Math.floor(Math.random()*(160-80)+80);
                    _hisv = 0;
                    $(".history ul").append('<li class="b" style="top:'+_Math+'px;left:'+_hisL+'px;"><i><img src="images/dot1.png" /></i><span><h3>'+_his[h].year+'</h3><h4>'+_context+'</h4></span></li>');
                }
                _hisL+=200;
            }
            var _item = $(".history li"),
                _itemUl = $(".history ul"),
                _itemBox = $(".history .box"),
                _len = _item.length,
                _for = _len-1,
                _prevNum = _key = 0;
            _itemUl.append('<canvas id="myCanvas"></canvas><div class="car"></div>');
            $(".history .car").animate({
                top:_item.eq(_prevNum).css("top"),
                left:_item.eq(_prevNum).css("left"),
                opacity:1
            });
            if(document.getElementById("myCanvas").getContext){
                var c = document.getElementById("myCanvas");
                $(c).attr("width","15000");
                $(c).attr("height","200");
                for(var i=0;i<_for;i++){
                    var _lt = parseFloat(_item.eq(i).css("top"))+6,
                        _ll = parseFloat(_item.eq(i).css("left"))+13,
                        _rt = parseFloat(_item.eq(i+1).css("top"))+6,
                        _rl = parseFloat(_item.eq(i+1).css("left"))+1;
                    var cxt = c.getContext("2d");
                    cxt.strokeStyle = 'rgba(11,139,212,1)';
                    cxt.lineWidth = 1;
                    cxt.beginPath();
                    cxt.moveTo(_ll,_lt);
                    cxt.lineTo(_rl,_rt);
                    cxt.stroke();
                }
            }else{
                var _xpage = '';
                for(var i=0;i<_for;i++){
                    var _lt = parseFloat(_item.eq(i).css("top"))+6,
                        _ll = parseFloat(_item.eq(i).css("left"))+6;
                    _xpage = _xpage+' '+_ll+','+_lt;
                }
                _itemUl.append('<v:PolyLine strokecolor="#0b8bd4" id="PolyLine" filled="false" Points="'+_xpage+'"/>');
            }
            carHight = function(num){
                var _context = _his[_prevNum].text.substr(0,15)+"...";
                _item.eq(_prevNum).find("h4").html(_context);
                _item.removeClass("active").eq(num).addClass("active");
                _item.eq(num).find("h4").html(_his[num].text);
                if(num>2){
                    _itemUl.animate({
                        left:-(num-2)*200+50
                    });
                }else if(num<=2){
                    _itemUl.animate({
                        left:50
                    });
                }
                if(_prevNum>num){
                    $(".history .car").addClass("back");
                }else{
                    $(".history .car").removeClass("back");
                }
                if(_prevNum-num<=-2||_prevNum-num>=2){
                    $(".history .car").hide().css({
                        top:_item.eq(num).css("top"),
                        left:_item.eq(num).css("left")
                    }).fadeIn();
                }else{
                    $(".history .car").animate({
                        top:_item.eq(num).css("top"),
                        left:_item.eq(num).css("left"),
                        opacity:1
                    })
                }
                _prevNum = num;
            }
            _item.find("i").on("click",function(){
                var _index = $(this).parent().index();
                carHight(_index);
            });
            carHight(_prevNum);
            $(document).keydown(function(event){
                if(_key == 0){
                    if(event.keyCode == 37&&_prevNum>0){
                        carHight(_prevNum-1);
                    }else if(event.keyCode == 39&&_prevNum<_for){
                        carHight(_prevNum+1);
                    }
                }
                _key = 1;
            });
            $(document).keyup(function(event){
                _key = 0;
            });
            _itemBox.mouseover(function(event){
                event.preventDefault();
            });
            _itemUl.bind("mousedown",function(e){
                var _long = e.pageX,
                    _left = parseFloat(_itemUl.css("left"));
                _itemUl.bind("mousemove",function(e){
                    document.onselectstart = function(){return false;}
                    var _lend = _left-(_long-e.pageX),
                        _rend = -(_for-2)*200+50;
                    if(_lend<50&&_lend>_rend){
                        _itemUl.css("left",_lend);
                    }else if(_lend>50){
                        _itemUl.css("left",50);
                    }else if(_lend>_rend){
                        _itemUl.css("left",_rend);
                    }
                });
            });
            _itemUl.bind("mouseup",function(){
                _itemUl.unbind("mousemove");
                document.onselectstart = null;
            });
            _itemBox.mousewheel(function(event, delta) {
                clearTimeout(timeoutId);
                if(_key == 0){
                    _key = 1;
                    $(this).data('timeoutId', setTimeout(function() {
                        if(delta>0&&_prevNum>0){
                            carHight(_prevNum-1);
                        }else if(delta<0&&_prevNum<_for){
                            carHight(_prevNum+1);
                        }
                        _key = 0;
                    }, 200));
                }
                return false;
            });
        }else{
            for(var h=0;h<_hisLen;h++){
                $(".history ul").append('<li><i><img src="image/dot1.png" /></i><span><h3>'+_his[h].year+'</h3><h4>'+_his[h].text+'</h4></span></li>');
            }
        }
    }
}