$(document).ready(function(){
	var menuActivado = false;
	$("#botonMenu").on("click",function(e){
		if (menuActivado==false){

		$("header").css({
			"background" : "#292929",
		})
		$(".espacioNav").css({
			"display": "flex",
			"width" : "100%",
		});
		$(".listaMenu").css({
			"flex-direction": "column",
			"flex-wrap": "wrap",
		});
		$(".itemMenu").css({
			"margin-top" : "5px",
		});

		$(".itemMenu a").css({
			"padding-left" : "30px",
		});
		menuActivado = true;
		}
		else{
			$(".espacioNav").css({
			"display": "none",
		});
			menuActivado = false;
		}
	});

	$(window).on("resize",function(){
		if ($(this).width()>790){
			$("header").css({
				"flex-wrap":"nowrap",
				"justify-content": "space-around",
			});
			$(".espacioNav").css({
				"display": "flex",
				"width" : "auto",
			});

			$(".espacioLogo").css({
				"display": "block",
				"flex-wrap": "nowrap",
			});
			$(".listaMenu").css({
				"flex-direction": "row",
			});

		}

		else {
			$("header").css({
				"flex-wrap":"wrap",
			});
			$(".espacioNav").css({
				"display": "none",
			});
			$(".espacioLogo").css({
				"display" : "flex",
				"flex-wrap" : "wrap",
			});
			menuActivado=false;
		}
	});
})