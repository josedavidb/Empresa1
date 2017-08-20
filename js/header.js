$(document).ready(function(){
	$(document).on("scroll", function(){
	var header = $("header");
	var desplazamientoActual = $(document).scrollTop();
	if (desplazamientoActual > 0){
		header.css("background","#292929");
	};
	if (desplazamientoActual == 0){
		header.css("background","none");
	}
});
});