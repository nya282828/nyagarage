$(document).ready(function(){$("a").each(function(){var n=this;n.origin!==location.origin&&$(n).attr("target","_blank")})});var opA={animation:function(){setTimeout(function(){$(".js-load-bg").fadeOut(100),$(".js-slideIn").addClass("try-head")},1e3)},init:function(){opA.animation()}};$(window).load(function(){opA.init()});