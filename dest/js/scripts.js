!function(s){var e,a,n,i,r,c,o,p,d,l=s(".load-more"),u=0,v=!1;function t(){var t;0<(t=s.ajax({url:"./php/list.php",type:"get",data:{title:e,description:a,cost:n,discountCost:i,new:r,img:c,page:o,perPage:p,total:d},beforeSend:function(){v=!0,0<u&&l.attr("disabled",!0)},success:function(t){var e=JSON.parse(t),a=e.entities;d=parseInt(e.total),p=parseInt(e.perPage),o=parseInt(e.page),d/p<o-1&&(l.hide(),b()),s.each(a,function(t,e){s(".products-wrapper .row").append("<li class='product-item-wrap text-center col-3 mb-4 hide'><div class='product-item col-12'><div class='product-img-wrap'><img class='product-img' src="+e.img+" alt="+e.title+"> </div><h3 class='product-title'>"+e.title+"</h3><p class='description'>"+e.description+"</p>"+(void 0!==e.discountCost&&null!==e.discountCost?"<div class='price-wrapper'> <span class='special-price'>$"+e.discountCost+"</span><span class='price old-price'>$ "+e.cost+"</span>":"<div class='price-wrapper'> <span class='price'>$"+e.cost+"</span>")+"</div>"+(null!==e.discountCost?"<span class='sales-icon'>Sale</span>":"")+(!1!==e.new&&null!==e.new?"<span class='new-icon'>New</span>":"")+"<button class='btn addtocart'>Add to cart</button> <button class='btn view'>View</button></div></li>")}),s(".loader-wrapper").css("display","none"),o++},complete:function(){v=!1,l.attr("disabled",!1),u=0},error:function(t){return v=!1,console.log("Ajax request gave an error: ",t),v}})).readyState&&t.readyState<4?1===u&&(!0===v?s(".loader-wrapper").css("display","block"):(s(".loader-wrapper").css("display","none"),b())):b()}function w(){null!=(u+=1)&&(1===u&&(l.attr("disabled",!0),t(),b(),l.attr("disabled",!1)),1<u&&(l.attr("disabled",!0),b(),l.attr("disabled",!1)))}function b(){var t=s(".product-item-wrap.hide");0<t.length?(t.removeClass("hide"),t.hide().fadeIn(1500)):setTimeout(function(){t.removeClass("hide"),t.hide().fadeIn(1500)},2e3)}s(document).ready(function(){t(),l.on("click",w).on("dblclick",function(t){return t.stopPropagation(),t.preventDefault(),!1})})}(jQuery);