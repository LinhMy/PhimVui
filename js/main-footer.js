$(document).ready(function(){$('.login-button').on('click',function(){var data=$('#form_login').serialize();$.ajax({url:https_url+'ajax/user_login',type:'POST',dataType:'json',data:data}).done(function(data){if(data.status==1){window.location.href=prev_url;}else{$('#form_login .khong-hop-le').html(data.message).show();}}).fail(function(msg){console.log('error-connection');});});$('#form_login').keydown(function(e){var key=e.which;if(key==13){var data=$('#form_login').serialize();$.ajax({url:https_url+'ajax/user_login',type:'POST',dataType:'json',data:data}).done(function(data){console.log(data);if(data.status==1){window.location.href=prev_url;}else{$('#form_login .khong-hop-le').html(data.message).show();}}).fail(function(msg){console.log('error-connection');});}});$('.register-button').on('click',function(e){e.preventDefault();var data=$('#form_register').serialize();$.ajax({url:https_url+'ajax/user_register',type:'POST',dataType:'json',data:data}).done(function(data){if(data.status==1){window.location.href=prev_url;}else{$('#form_register .khong-hop-le').html(data.message).show();}}).fail(function(msg){console.log('error-connection');});});$('#form_register').keydown(function(e){var key=e.which;if(key==13){var data=$('#form_register').serialize();$.ajax({url:https_url+'ajax/user_register',type:'POST',dataType:'json',data:data}).done(function(data){if(data.status==1){window.location.href=prev_url;}else{$('#form_register .khong-hop-le').html(data.message).show();}}).fail(function(msg){console.log('error-connection');});}});$('.change_pass').on('click',function(){var password=$('#password').val();var re_password=$('#re_password').val();var code=$('#code').val();var email=$('#email').val();var token=$('#token').val();var data='password='+password+'&re_password='+re_password+'&code='+code+'&email='+email+'&token='+token;$.ajax({url:https_url+'ajax/change_recover_password',type:'POST',dataType:'json',data:data}).done(function(data){if(data.status==1){$('.khong-hop-le').addClass('hop-le').removeClass('khong-hop-le').html(data.message).show();setTimeout(function(){window.location.href=prev_url;},1500);}else if(data.status==-1){$('.khong-hop-le').html(data.message).show();setTimeout(function(){window.location.href=prev_url;},1500);}else{$('.khong-hop-le').html(data.message).show();}}).fail(function(msg){console.log('error-connection');});});$('#form_recover').keydown(function(e){var key=e.which;if(key==13){var password=$('#password').val();var re_password=$('#re_password').val();var code=$('#code').val();var email=$('#email').val();var token=$('#token').val();var data='password='+password+'&re_password='+re_password+'&code='+code+'&email='+email+'&token='+token;$.ajax({url:https_url+'ajax/change_recover_password',type:'POST',dataType:'json',data:data}).done(function(data){if(data.status==1){$('.khong-hop-le').addClass('hop-le').removeClass('khong-hop-le').html(data.message).show();setTimeout(function(){window.location.href=prev_url;},1500);}else if(data.status==-1){$('.khong-hop-le').html(data.message).show();setTimeout(function(){window.location.href=prev_url;},1500);}else{$('.khong-hop-le').html(data.message).show();}}).fail(function(msg){console.log('error-connection');});}});$('.btn-facebook-login').on('click',function(){FB.login(function(response){if(response.authResponse){$.ajax({url:https_url+'ajax/user_login_facebook',type:'POST',dataType:'json',data:response.authResponse}).done(function(data){if(data.status==1){window.location.href=prev_url;}else{$('#msg_login').html(data.message).show();$('#msg_register').html(data.message).show();}}).fail(function(msg){console.log(msg);});}},{scope:'email,public_profile',auth_type:'rerequest'});});$('.btn-google-login').on('click',function(){gapi.auth2.getAuthInstance().signIn().then(function(e){if(gapi.auth2.getAuthInstance().isSignedIn.get()){$.ajax({url:https_url+'ajax/user_login_google',type:'POST',dataType:'json',data:e.getAuthResponse()}).done(function(data){if(data.status==1){window.location.href=prev_url;}else{$('#msg_login').html(data.message).show();$('#msg_register').html(data.message).show();}}).fail(function(msg){console.log(msg);});}});});$('.logout').on('click',function(e){e.preventDefault();$.ajax({url:https_url+'ajax/user_logout',type:'POST',dataType:'html'}).done(function(data){window.location.href=prev_url;}).fail(function(){console.log('error-connection');});});if(typeof $(document).jRate!='undefined'&&$.isFunction($(document).jRate)&&typeof $("#star")!='undefined'){var rated=$("#star").jRate({rating:rating,startColor:"#77C282",endColor:"#77C282",count:5,precision:1,readOnly:true,width:25,height:25,shapeGap:'2px',backgroundColor:'#888888',});$("#star-vote").jRate({rating:0,startColor:"#77C282",endColor:"#77C282",count:5,precision:1,width:40,height:40,shapeGap:'10px',backgroundColor:'#888888',onSet:function(rating){$.ajax({url:https_url+'ajax/rating_movie',type:'POST',dataType:'json',data:'star='+rating+'&mov_id='+mov_id,}).done(function(data){console.log(rated);if(data.status==1){rating=data.result.avg;$("#star").empty().jRate({rating:rating,startColor:"#77C282",endColor:"#77C282",count:5,precision:1,readOnly:true,width:25,height:25,shapeGap:'2px',backgroundColor:'#888888',});$('.rated-text').html('('+data.result.total+' Voted)');}else{console.log(data.message);}}).fail(function(){console.log('error-connection');});}});}
$('.ads-fix-bottom .button-show-hide a').on('click',function(){var activeStatus=$(this).attr('id');var contentDiv=$('.button-show-hide').next();if(activeStatus==='bat-qc'){contentDiv.show();}
if(activeStatus==='tat-qc'){contentDiv.hide();}});});var ads_popup=$('#ads-popup');function _popByHours(hours){function createCookie(name,value,hours){var date=new Date();date.setTime(date.getTime()+(hours*3600*1000));var expires="; expires="+date.toGMTString();document.cookie=name+"="+value+expires+"; path=/";}
function readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')
c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)
return c.substring(nameEQ.length,c.length);}}
if((!readCookie("_pop")||!sessionStorage.getItem('firstVisit')||!sessionStorage.getItem('firstVisit')==='1')&&typeof ads_popup!=undefined){ads_popup.show();sessionStorage.setItem('firstVisit','1');createCookie("_pop",1,hours);}}
if(typeof ads_popup!=undefined){$('.ads-overlay').on('click',function(){ads_popup.hide();});$('#ads-popup a').on('click',function(){console.log('anchor click');ads_popup.hide();});$('#ads-popup .close').on('click',function(){console.log('close click');ads_popup.hide();});}
_popByHours(1);var timeoutID=null;function findPageSearch(str){var q='status=search_page&q='+str;if(q.length>3){var request=null
request=$.ajax({url:base_url+'ajax/search',type:'POST',data:q,dataType:'json',cache:true,}).done(function(data){$('#rs_search').html(data.data_html);}).fail(function(){console.log('error-connection');});}}
var currentRequest=null;function findListSearch(str){if(currentRequest!=null){currentRequest.abort();currentRequest=null;}
console.log(currentRequest);var q='q='+str;currentRequest=$.ajax({url:base_url+'ajax/search',type:'POST',data:q,dataType:'json',cache:true,}).done(function(data){$('#search-hint').html(data.data_html);}).fail(function(){console.log('error-connection');});}
$('#text_search').keyup(function(e){clearTimeout(timeoutID);timeoutID=setTimeout(findPageSearch.bind(undefined,e.target.value),200);});$('#query_search').keyup(function(e){clearTimeout(timeoutID);timeoutID=setTimeout(findListSearch.bind(undefined,e.target.value),200);});$(document).on('click',function(){$('#search-hint').html('');});$(document).on('click','#but_send_report',function(){var mov_id=$('#hid_mov_id').val();var eps_id=$('#hid_eps_id').val();var captcha=$('#log_captcha').val();var log_des=$('#log_des').val();$.ajax({url:https_url+'ajax/user_report',type:'POST',dataType:'json',data:'mov_id='+mov_id+'&eps_id='+eps_id+'&captcha='+captcha+'&log_des='+log_des}).done(function(data){var str=data.message;if(data.status=='1'){setTimeout(function(){$('#ModalBaoloi').modal('hide');},1000);}
$('#show_msg').html(str);$("#ModalBaoloi").modal();}).fail(function(){console.log('error-connection');});});