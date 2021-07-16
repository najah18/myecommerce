import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import $ from 'jquery';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min';

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip()
	$('.add-to-cart-btn').click(function(){
	alert('تم اضافة هذا العنصر الى عربة الشراء');
});

$('#copyright').text("جميع الحقوق محفوظة للمتجر سنة " + new Date().getFullYear());

$('.product-option input[type="radio"]').change(function(){
	$(this).parents('.product-option').siblings().removeClass('active');
	$(this).parents('.product-option').addClass('active');
});
});

