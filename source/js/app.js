/* eslint-disable */
var customSearch;
(function($) {
	
	"use strict";

  var scrolltoElement = function(e) {
    e.preventDefault();
    var self = $(this),
        correction = e.data ? e.data.correction ? e.data.correction : 0 : 0;
    $('html, body').animate({'scrollTop': $(self.attr('href')).offset().top - correction }, 400);
  };

	function setHeaderMenu(){
		var $headerMenu = $('header .menu');
		var $underline = $headerMenu.find('.underline');
		function setUnderline($item,transition){
			$item = $item || $headerMenu.find('li a.active');//get instant
			transition = transition===undefined?true:!!transition;
			if(!transition) $underline.addClass('disable-trans');
			if($item && $item.length){
				$item.addClass('active').siblings().removeClass('active');
				$underline.css({
					left:  $item.position().left,
					width: $item.innerWidth()
				});
			} else {
				$underline.css({
					left:  0,
					width: 0
				});
			}
			if(!transition){
				setTimeout(function(){$underline.removeClass('disable-trans')},0);//get into the queue.
			}
		}
		$headerMenu.on('mouseenter','li',function(e){
			setUnderline($(e.currentTarget));
		});
		$headerMenu.on('mouseout',function(){
			setUnderline();
		});
		//set current active nav
		var $active_link=null;
		if(location.pathname==='/'||location.pathname.startsWith('/page/')){
			$active_link=$('.nav-home',$headerMenu);
		}else{
			var name=location.pathname.match(/\/(.*?)\//);
			if(name.length > 1){
				$active_link=$('.nav-'+name[1],$headerMenu);
			}
		}
		setUnderline($active_link,false);
	}
	function setHeaderMenuPhone(){
		var $switcher=$('.l_header .switcher .s-menu');
		$switcher.click(function(e){
			e.stopPropagation();
			$('body').toggleClass('z_menu-open');
			$switcher.toggleClass('active');
		});
		$(document).click(function(e){
			$('body').removeClass('z_menu-open');
			$switcher.removeClass('active');
		});
	}
	function setHeaderSearch(){
		var $switcher = $('.l_header .switcher .s-search');
		var $header = $('.l_header');
		var $search = $('.l_header .m_search');
		if($switcher.length === 0)return;
		$switcher.click(function(e){
			e.stopPropagation();
			$header.toggleClass('z_search-open');
			$search.find('input').focus();
		});
		$(document).click(function(e){
			$header.removeClass('z_search-open');
		});
		$search.click(function(e){
			e.stopPropagation();
		})
	}
	function setWaves(){
		Waves.attach('.flat-btn', ['waves-button']);
		Waves.attach('.float-btn', ['waves-button', 'waves-float']);
		Waves.attach('.float-btn-light', ['waves-button', 'waves-float', 'waves-light']);
		Waves.attach('.flat-box', ['waves-block']);
		Waves.attach('.float-box', ['waves-block', 'waves-float']);
		Waves.attach('.waves-image');
		Waves.init();
	}
	$(function() {
		//set header
		setHeaderMenu();
		setHeaderMenuPhone();
		setHeaderSearch();
		setWaves();
		$('.window-nav, .go-comment').on('click', scrolltoElement);
    $(".article .video-container").fitVids();

		setTimeout(function() {
	    $('#loading-bar-wrapper').fadeOut(500);
	  }, 300);
	  
	  if (SEARCH_SERVICE === 'google') {
  	  customSearch = new GoogleCustomSearch({
    	  apiKey: GOOGLE_CUSTOM_SEARCH_API_KEY,
    	  engineId: GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
        imagePath: "/images/"
  	  });
	  }
	  else if (SEARCH_SERVICE === 'algolia') {
  	  customSearch = new AlgoliaSearch({
    	  apiKey: ALGOLIA_API_KEY,
    	  appId: ALGOLIA_APP_ID,
    	  indexName: ALGOLIA_INDEX_NAME,
        imagePath: "/images/"
  	  });
	  }
	  else if (SEARCH_SERVICE === 'hexo') {
  	  customSearch = new HexoSearch({
        imagePath: "/images/"
      });
	  }
	  else if (SEARCH_SERVICE === 'azure') {
  	  customSearch = new AzureSearch({
    	  serviceName: AZURE_SERVICE_NAME,
        indexName: AZURE_INDEX_NAME,
        queryKey: AZURE_QUERY_KEY,
        imagePath: "/images/"
  	  });
	  }
	  else if (SEARCH_SERVICE === 'baidu') {
  	  customSearch = new BaiduSearch({
				apiId: BAIDU_API_ID,
        imagePath: "/images/"
			});
	  }

	});
		
})(jQuery);