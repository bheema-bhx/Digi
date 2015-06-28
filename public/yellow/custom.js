

        $(document).ready(function(){

            $("#demoTab").easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any custom width
                fit: true,   // 100% fits in a container
                closed: false, // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
                activate: function() {}  // Callback function, gets called if tab is switched
            });
								   
        $('.respotbs').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            closed: 'accordion', // Start closed if in accordion view
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#tabInfo');
                var $name = $('span', $info);
                var respTabsId = $respTabs.attr('id');

                $name.text($tab.text());

                $info.show();
            }
        });
			
		$('.accordion .acc_title').addClass('acc_on').css({ cursor:"pointer"});	
		$('.lsidebar .accordion .acc_title').removeClass('acc_on').next().slideUp();
		$('.accordion .acc_title').click(function(){
		  if($(this).hasClass('acc_on')){
			$(this).removeClass('acc_on').parent().find('.acc_content').slideUp();
		  }
		  else{
			$(this).addClass('acc_on').parent().find('.acc_content').slideDown();
		  }
		});


            $( ".select2" ).select2( { placeholder: "Select a State", maximumSelectionSize: 6 } );

            $( ":checkbox" ).on( "click", function() {
                $( this ).parent().nextAll( "select" ).select2( "enable", this.checked );
            });

            $( "#demonstrations" ).select2( { placeholder: "Select2 version", minimumResultsForSearch: -1 } ).on( "change", function() {
                document.location = $( this ).find( ":selected" ).val();
            } );

            $( "button[data-select2-open]" ).click( function() {
                $( "#" + $( this ).data( "select2-open" ) ).select2( "open" );
            });



        });



