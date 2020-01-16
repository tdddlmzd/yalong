// JavaScript Document

//企业QQ
$(function () {
    function yxqq_auto()
    {
    	qq_list=new Array('3001602141');
    	qq_i=Math.floor(Math.random()*qq_list.length);
    	location.href='tencent://message/?uin='+qq_list[qq_i]+'';
    }
    setTimeout('yxqq_auto()',1);
});



//页尾浮动底部
$('#qqFixed').load('./fixedQQ.html',function(){
    console.log('加载成功');
    $('.close').click(function(){
        $('#qqFixed').remove();
    })
    $(window).scroll(function(){

        var scrollTops = $(window).scrollTop()*1;
        if(!scrollTops){
            $('#qqFixed').hide();
        }else{
            $('#qqFixed').show();
        }
    })
    $(".zxkfdig").click(function () {
        debugger
        window.open('http://kefu.ziyun.com.cn/vclient/chat/?websiteid=', 'newwindow', 'height=600,width=1000,left=200,top=100');
    });
});
//在线客服弹出时间
function a(){
    var div=document.getElementById("dqq");
    div.style.display="block"
}
window.onload=function(){
    setTimeout("a()",1000);//3000毫秒后弹出根据自己的需要设置时间
};
//在线客服打开窗口
$(".qy_kf_welcomeBox_refuse").click(function () {
    debugger
    window.open('http://kefu.ziyun.com.cn/vclient/chat/?websiteid=', 'newwindow', 'height=600,width=1000,left=200,top=100');
    $("#dqq").hide();
});
$(".qy_kf_welcomeBox_agree").click(function () {
    window.open('http://kefu.ziyun.com.cn/vclient/chat/?websiteid=', 'newwindow', 'height=600,width=1000,left=200,top=100');
    $("#dqq").hide();
});
