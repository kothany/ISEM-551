$(document).ready(function() {
var url= this.location.pathname;
 var activeNav=url.substring(url.lastIndexOf('/')+1)
    $('a[href="' +activeNav+ '"]').parent().addClass('active');
});