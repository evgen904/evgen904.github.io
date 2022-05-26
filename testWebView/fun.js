try {

	function init() {
		/**
		 * @author Vladimir Kolesnikov <voloko@gmail.com>
		 * @copyright (c) Vladimir Kolesnikov <voloko@gmail.com>
		 */
		var js = {
			version: '1.1.7_als',
			rootUrl: '/doc/js/',
			context: this,
			versioninig: false
		};



	/*	Function.prototype.bind = function() {
		  var __method = this;
		  var object = arguments[0];
		  return function() {
		    return __method.apply(object);
		  };
		};
	*/

		Object.extend = function(destination, source) {
		  for (var property in source) {
		    destination[property] = source[property];
		  }
		  return destination;
		};

		js.getXHTTPTransport = function() {
			var result = false;
			var actions = [
		      function() {return new XMLHttpRequest();},
		      function() {return new ActiveXObject('Msxml2.XMLHTTP');},
		      function() {return new ActiveXObject('Microsoft.XMLHTTP');}
		    ];
		    for(var i = 0; i < actions.length; i++) {
		    	try{
		    		result = actions[i]();
		    		break;
		    	} catch (e) {}
		    }
		    return result;
		 };
		/**
		 * @param {Object} object
		 * @param {String} name
		 * @param {Object?} value
		 * @param {bool?} forceSet
		 */
		js.evalProperty = function(object, name, value, forceSet) {
			if(object) {
				if(!object[name] || forceSet) object[name] = value || true;
				return object[name];
			}
			return null;
		};
		/**
		 * @param {String} path
		 * @param {Object?} context
		 * @param {Object?} value
		 * @param {bool?} forceSet
		 */
		js.evalPath = function(path, context, value, forceSet) {
			context = context || js.context;
			var pos = path.indexOf('.');
			if(pos == -1) {
				return js.evalProperty(context, path, value, forceSet);
			} else {
				var name = path.substring(0, pos);
				var path = path.substring(pos + 1);
				var obj = js.evalProperty(context, name, value);
				return js.evalPath(path, obj, value, forceSet);
			}
		};

		/**
		 * @param {String} path
		 * @param {float} version
		 * @return {String}
		 */
		js.pathToUrl = function(path, version) {
			return js.rootUrl + path+// .replace(/\./g, '/') +
				(js.versioninig ? '.v' + version : '') + '.js';
		};
		/**
		 * @type {Array}
		 */
		js.loadedModules = {};

		/**
		 * @type {Array}
		 */
		js.loadedFiles = {};

		/**
		 * @param {String} path
		 * @param {float} version
		 */
		js.module = function(path, version) {
			version = version || 1.0;
			js.loadedModules[path] = js.loadedModules[path] ? Math.max(js.loadedModules[path], version) : version;
			return js.evalPath(path, null, {});
		};


		/**
		 * @param {String} path
		 * @param {float} version
		 */
		js.include = function(path, version) {
			version = version || 1.0;
			if(js.loadedModules[path] && js.loadedModules[path] >= version) return false;
			if(js.loadedFiles[path]) return false;
			js.loadedFiles[path] = path;
			var transport = js.getXHTTPTransport();
			transport.open('GET', js.pathToUrl(path, version), false);
			transport.send(null);
			if(transport.status == 404) {
				console.warn("Not Found file: ", path);
				return false;
			}

			var code = transport.responseText;
			(typeof execScript != 'undefined') ? execScript(code) :
				(js.context.eval ? js.context.eval(code) : eval(code));

			// window.execScript ? execScript(code) : window.eval(code);

			return true;
		};
		js.load = js.include;

		js.includeScript = function(path, version) {
			if(js.loadedModules[path] && js.loadedModules[path] >= version) return false;
			var transport = js.getXHTTPTransport();
			transport.open('GET', path, false);
			transport.send(null);
			if (!code) return true;
			var code = transport.responseText;
			(typeof execScript != 'undefined') ? execScript(code) :
				(js.context.eval ? js.context.eval(code) : eval(code));
			return true;
		};

		/**
		 * @param {String} newClass
		 * @param {Object} superClass
		 * @param {Object} props
		 */
		js.extend = function(newClass, superClass, props) {
			var multiple = [];
			if(superClass instanceof Array || typeof superClass == 'array') {
				multiple = superClass;
				superClass = multiple.shift();
			}
			if(typeof newClass == 'string') {
				newClass = js.evalPath(newClass, null, js.createClass(), 1);
			} else {
				return;
			}

			if(superClass) {
				var inheritance = function() {};
				inheritance.prototype = superClass.prototype;

				newClass.prototype = new inheritance();
				newClass.superClass = superClass.prototype;
			}
			for(var i = 0; i < multiple.length; i++) {
				Object.extend(newClass.prototype, multiple[i].prototype);
			}
			newClass.mixins = multiple;

			Object.extend(newClass.prototype, props || {});

			newClass.prototype.constructor = newClass;
		};
		js.define = js.extend;

		js.createClass = function() {
		    return function() {
				var _this = arguments.callee.prototype;
				_this.init.apply(this, arguments);
				for(var i = 0, mixins = _this.constructor.mixins, length = mixins.length; i < length; i++){
					mixins[i].init.apply(this);
				}
		    };
		};

		js.hasOwnProperty = function(obj, prop) {
		        if (Object.prototype.hasOwnProperty) {
		            return obj.hasOwnProperty(prop);
		        }

		        return typeof obj[prop] != 'undefined' &&
		                obj.constructor.prototype[prop] !== obj[prop];
		};

		js.dump = function(text){};
		js.error = function(text){};

		restorejs = function(obj) {
			return function() {
				window.js = obj;
			};
		}(js);
		return js;
	}

	var js = init();

	$(document).ready(function(){
		var js_block_id = '.js-close-alert';
		var alertBlock = $(js_block_id);
		alertBlock.each(function(){
			var name = $(this).data('name');
			if (localStorage.getItem(name)) {
				$(js_block_id+'[data-name="'+name+'"]').addClass('hidden');
			} else {
				$(js_block_id+'[data-name="'+name+'"]').removeClass('hidden');
			}
		});
		alertBlock.on('close.bs.alert', function () {
			var name = $(this).data('name');
			localStorage.setItem(name, true);
			$(js_block_id+'[data-name="'+name+'"]').addClass('hidden');
		});

		// header placeholder
		var
			_ia_ = $.cookie('_ia_'),
			$headerPlaceholderWrapper = $('.header-item-center');
		if(_ia_ == '1') {
			$headerPlaceholderWrapper.addClass('header-placeholder');
		}

		// баннер на главной
		var
			$elementToScreen = $('.js-element-to-screen'),
			imageWithoutVideo = $elementToScreen.attr('data-image-without-video') ? $elementToScreen.attr('data-image-without-video') : '',
			$parallax = $('.parallax-layer');
		$elementToScreen.elementToScreen();

		if(device.desktop() && $parallax.length) {
			$parallax.parallax({
				mouseport: $(".banner-main-page")
			});
			$(window).on('resize', function() {
				$parallax.parallax({
					mouseport: $(".banner-main-page")
				});
			});
		}


		// видео на главной
	/*
		var video = document.getElementById('video');
		if(
			device.desktop()
			&& (video && typeof video.load === 'function')
		) {
			$elementToScreen.css('background-position', '50% 100%');
			var
				$video = $('#video'),
				$mp4 = $('#video-mp4'),
				$webm = $('#video-webm'),
				httpStatic = null,
				videoPath = '/doc/i/';
				videoFileName = 'winter';
				typesVideo = ['mp4', 'webm'];

			if($video.length) {
				httpStatic = $video.attr('data-http-static');
				for(var i = 0; i < typesVideo.length; i++) {
					var
						$typeVideo = $('#video-' + typesVideo[i]);
					if($typeVideo.length) {
						$typeVideo.attr('src', httpStatic + videoPath + videoFileName + '.' + typesVideo[i]);
					}
				}
				video.load();
				video.play();
			}
		} else {
			$elementToScreen.css('background-image', "url('" + imageWithoutVideo + "'");
		}
	*/
		var url = location.host.split('.');
		if (url.length>4) url.shift();
		url.shift();

		$('.span-replace').each(function(index,span){
			var link = '<a class="link author-name" rel="nofollow noopener" target="_blank" href="'+$(span).data('href')+'">'+$(span).text()+'</a>';
			$(span).before(link).remove();
		});

		// sticky-column set height
		var setStickyColumnWrapperHeight = function() {
			var stickyColumnWrapper = $('.js-sticky-column-wrapper');
			var stickyColumnWrapperHeight = 0;
			var stickyColumnHeight = $('.js-sticky-column').outerHeight(true);
			$('.objects-list').each(function() {
				stickyColumnWrapperHeight += $(this).outerHeight(true);
			});
			if (stickyColumnWrapperHeight < stickyColumnHeight){
				stickyColumnWrapperHeight = stickyColumnHeight;
			}
			stickyColumnWrapper.css("height", ""+(stickyColumnWrapperHeight  - 8)+"px");
		};
		// sticky-column
		var $stickyColumn = $('.js-sticky-column');
		if($stickyColumn.length && !device.mobile()) {
			$(document).on('wpc.ObjectList.render', function () {
				setStickyColumnWrapperHeight();
			});
			setStickyColumnWrapperHeight();
			var sticky_offset;

			var $stickyColumn = $('.js-sticky-column');
			$.each($stickyColumn, function(index, element) {
				var $this = $(element);
					sticky_offset = parseInt($this.attr('data-sticky-offset')),
					sticky_init_mobile = $this.attr('data-sticky_init-mobile'),
					$footer = $('#footer');
					footerTop = ($footer.length>0 ? $footer.offset().top : 0 ),
					windowHeight = Screen.getHeight();

					filterWrapper = $('#filter-wrapper');
				if(sticky_offset === undefined || isNaN(sticky_offset)) {
					sticky_offset = 0;
				}

				if(sticky_init_mobile != undefined) {
					$this.stick_in_parent({
						offset_top: sticky_offset,
					});
				} else {
					if((device.desktop() && Screen.getMediaQuery() !== 'xs') || device.ipad() || device.tablet()) {
						$this.stick_in_parent({
							offset_top: sticky_offset
						});
					}
				}

				$this
					.on("sticky_kit:stick", function(e) {
						if($this.hasClass('is_stuck')) {
							var $messages = $('.jsn-message-list-messages');

							if($messages.length) {
								$messages.css('float', 'right');
								$this
									.parent()
									.css('height', 0);
							}
						}
						// @operafix for *nix
						var
							thisWidth = $this.width(),
							maxWidth = isNaN(parseInt($this.attr('data-max-width'))) ? thisWidth : parseInt($this.attr('data-max-width'));
						$this.parent().css('width', maxWidth);
						if(Screen.getMediaQuery() !== 'xs') {
							$this
								.css('width', maxWidth);
						}
					})
					.on("sticky_kit:bottom", function(e) {
						if($this.parent().css('position') !== 'static') {
							$this.parent().css('position', 'static');
						}
					});


				$(window).on('resize', function() {
					if(Screen.getMediaQuery() === 'xs') {
						$this.trigger("sticky_kit:detach");
					} else {
						if(!$this.data('sticky_kit') && !$this.hasClass('sticky-disabled-init')) {
							$this.stick_in_parent({
								offset_top: sticky_offset
							});
						}
					}
				})
			});
		}

		$(document).on('click', '.js-sel-language', function(e) {
			e.preventDefault();
			var $this = $(e.target),
				languageId = $this.attr('data-lang-id');
				webpower.request('/api/rest/localisation/setLanguage/', {id: languageId, url: document.URL}, function(data){});
		});


		$(document).on('click', '.js-sel-language-mobile',function(e) {
			e.preventDefault();
			var $this = $(e.target),
				languageId = $this.parent().data('langId');
			webpower.request('/api/rest/localisation/setLanguage/', {id: languageId, url: document.URL}, function(data){});
		});

		$(document).on('click', '.js-sel-currency, .js-sel-currency-mobile',function(e) {
			e.preventDefault();
			var $this = $(e.target),
				currencyId = $this.data('currency-id');
			if (!$this.hasClass('active')) {
				wp.request('/api/json/currencies/setCurrency', {id: currencyId, return_url: document.URL.split('#')[0]});
			}
		});

		$('#back-to-search').on('click', function(e){
			e.preventDefault();
			history.back();
		});
		// выпадашки в шапке

		if(device.desktop()) {
			$(document).on('mouseenter', '.js-header-menu-trigger', function() {
				var $this = $(this);
					$menuInstance = $this.closest('.dd-menu-instance');

				$menuInstance.toggleClass('active');
			});

			$(document).on('mouseleave', '.js-header-menu-trigger', function(e) {
				var $target = $(e.target),
					$relatedTarget = $(e.relatedTarget),
					$menuInstance = $target.closest('.dd-menu-instance');

				if(!$relatedTarget.hasClass('dd-menu-content')) {
					$menuInstance.toggleClass('active');
				}
			});

			$(document).on('mouseleave', '.dd-menu-content', function(e) {
				var $this = $(this),
					$menuInstance = $this.closest('.dd-menu-instance'),
					$relatedTarget = $(e.relatedTarget);

				if(!$relatedTarget.hasClass('.js-header-menu-trigger')) {
					$menuInstance.toggleClass('active');
				}
			});
		} else if(device.tablet()) {

			$(document).on('click', '.js-header-menu-trigger-tablet', function(e) {
				e.preventDefault();
				var
					$this = $(this),
					$menuInstance = $this.closest('.dd-menu-instance'),
					$menuContent = $menuInstance.find('.dd-menu-content');

				if($menuContent.length) {
					if($menuInstance.hasClass('active')) {
						$menuInstance.toggleClass('active');
					} else {
						$('.dd-menu-instance').removeClass('active');
						$menuInstance.addClass('active');
					}
				} else {
					var
						link = $this.attr('href');
					if(typeof link !== 'undefined') {
						location.href = link;
					}
				}
			});

			$(document).on('click', function(e) {
				var $target = $(e.target);

				if(!$target.closest('.dd-menu-instance').length) {
					$('.dd-menu-instance').removeClass('active');
				}
			});

		} else if(device.mobile()) {
			$(document).on('click', '.js-header-menu-trigger-mobile', function(e) {
				$mainMenu = $('.js-mobile-header-menu-wrapper');
				$mainMenu.removeClass('active');
				e.preventDefault();
				var
					$this = $(this),
					$menuInstance = $this.closest('.dd-menu-instance'),
					$menuContent = $menuInstance.find('.dd-menu-content');

				if($menuContent.length) {
					if($menuInstance.hasClass('active')) {
						$menuInstance.toggleClass('active');
					} else {
						$('.dd-menu-instance').removeClass('active');
						$menuInstance.addClass('active');
					}
				} else {
					var
						link = $this.attr('href');
					if(typeof link !== 'undefined') {
						location.href = link;
					}
				}
			});

			$(document).on('click', function(e) {
				var $target = $(e.target);

				if(!$target.closest('.dd-menu-instance').length) {
					$('.dd-menu-instance').removeClass('active');
				}
			});
		}

		// показать ссылку в меню шапки если подсказки есть на странице
		if(window.is_hints) {
			$('.js-help-menu').removeClass('hidden');
		}

		// скрыть показать подсказки в шапке
		$('.js-trigger-hints').on('click', function(e) {
			e.preventDefault();
			var $this = $(this);

			if($this.hasClass('active')) {
				hideAllHints();
			} else {
				showAllHints();
			}

			$this.toggleClass('active');
		});

		// строка поиска в шапке
		var searchValue = $('#searchform .typeahead').val(),
			$searchHeader = $('#searchform-header .typeahead');

		if(searchValue && $searchHeader.length) {
			$searchHeader.val(searchValue);
		}

		$('.js-header-mobile-button').on('click', function() {
			var $mobileMenu = $('.js-mobile-header-menu-wrapper');
			if($mobileMenu.length) {
				$mobileMenu.toggleClass('active');
			}
		});

		$('#navbar').on('show.bs.collapse', function() {
			$('.header .navbar .container-fluid').addClass('active');
		});

		$('#navbar').on('hide.bs.collapse', function() {
			$('.header .navbar .container-fluid').removeClass('active');
		});

		$('#currency-list, #sel-language').on('show.bs.collapse', function(e) {
			e.stopPropagation();
		});

		$('#currency-list, #sel-language').on('hide.bs.collapse', function(e) {
			e.stopPropagation();
		});

		if (typeof($.cookie('hwc')) == 'undefined' && $.cookie('hwc') != 'true') $('.header-warning').slideDown('slow');
		initHeaderWarningClose = function(){
			$.cookie('hwc', true, {expires: 60, path: '/', domain:'.'+TOOLS.domain, raw:true});
			$('.header-warning').slideUp('slow');
			return false;
		};

		// how wokrs
		$('.js-open-how-works').on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();

			var $this = $(this),
				$howWorksCnt = $('.how-works');

			if ($howWorksCnt.hasClass('active')) {
				scrollToElement('.how-works');
			} else {
				$howWorksCnt.slideDown('fast').addClass('active');
			}
		});

		$('.js-close-how-works').on('click', function() {
			var $this = $(this),
				$howWorksCnt = $('.how-works');

			$howWorksCnt.slideUp('fast').removeClass('active');

		});

		$.each($('[data-toggle="popover"]'), function(){
			$(this).popover();
		});

		function receiveMessage(event) {
			if(event.data == 'sendMeInfo'){
				//var urlParams = new URLSearchParams(window.top.location.search);
				var source = TOOLS.getGet('utm_source');
				var medium = TOOLS.getGet('utm_medium');
				var campaign = TOOLS.getGet('utm_campaign');
				var partner = TOOLS.getGet('admitad_uid');
				var gclid = TOOLS.getGet('gclid');
				var domain = TOOLS.domain;
				var referrer = document.referrer;
				var objects = $('#objects-list').length;
				var filtered = $('#objects-list').data('filtered');
				var object = $('#object-description').length;
				var href = document.location.href;
				var params = {};
				params['type'] = 'sourceTraffic';
				params['source'] = source;
				params['medium']  = medium;
				params['campaign'] = campaign;
				params['partner'] = partner;
				params['domain'] = domain;
				params['referrer'] = referrer;
				params['objects'] = objects;
				params['object'] = object;
				params['filtered'] = filtered;
				params['gclid'] = gclid;
				params['href'] = href;
				var iframe = document.getElementById("LS-data").contentWindow;
				iframe.postMessage(params,'*');
			}
		}
		// Прослушка iframe для отправки данных по источникам трафика
		window.addEventListener("message", receiveMessage, false);

		function bannersForMobileApps(response) {
			var
				androidOpts = {
					'title': T.core.project_ru,
					'force': 'android',
					'button': 'Смотреть',
					'price': 'БЕСПЛАТНО',
					'inGooglePlay': 'в Google Play'
				},
				appId = 973070068;
			if(!!response) {
				if(!response.user_is_owner) {
					$("meta[name='apple-itunes-app']").attr('content','app-id=' + appId + ', app-argument=' + window.location.toString().replace(window.location.hash, ''));
					if(device.android())
						$.smartbanner(androidOpts);
				} else {
					$("meta[name='apple-itunes-app']").remove();
					if (device.android())
						$.smartbanner('hide');
				}
			}
		}

		function showMessagesFromAdministration(response) {
			if (!response.user) return;
			$('.js-messages-from-administration').removeClass('hidden');
		}

		function userDataCallback(response) {
			if($('#auth-template').length) {
				var header = tmpl('auth-template', response);
				$('.js-header-container').html(header).removeClass('header-user-cnt');
				$('.header-item-center').removeClass('header-placeholder');
			}
			if($('#mobile-menu-template').length) {
				mobileHeaderMenu = tmpl('mobile-menu-template', response);
				$('.js-mobile-header-menu-content').html(mobileHeaderMenu);
			}
			if($('#mobile-menu-user-template').length) {
				mobileHeaderUser = tmpl('mobile-menu-user-template', response);
				$('.js-mobile-user-wrapper').html(mobileHeaderUser);
			}
			// меню свободных заявок
			if($('#selection-house').length) {
				var
					selectionMenu = tmpl('selection-house', response),
					$selectionWrapper = $('.js-selection-wrapper');
				if($selectionWrapper.length) {
					$selectionWrapper.html(selectionMenu);

					$('.js-request-accommodation').unbind('click').on('click', function(e) {
						var hasLocation = !!response.location_w;
						if (!hasLocation) {
							e.preventDefault();
							return initRequestAccomodation(response);
						}
					});
				}
			}

			if (!!response.is_auth){
				var stat_data = {
					url: document.URL
				};

				webpower.request(
					'/api/json/users/getUserData/',
					{
						stat_data: stat_data,
						location_id: response.locationId,
						location_type: response.locationType
					},
					{
						success: initUserCounters,
						actions: enoughContactsRequired,
						data: initFavorites,
					}
				);
				$('.js-logout').click(function(){
					WP.push.setTokenSentToServer(false);
				});
			}
		}

		function initRequestAccomodation(response){
			var hasLocation = !!response.location_w;
			if (!hasLocation) {
				wp.modal({
					size: 2,
					closeX: true,
					onclose: function() {
						$('.js-search-input').focus();
					},
					box: {
						header: {
							content: T.core.modal_select_city || ''
						},
						body: {
							content: T.core.text_select_city_for_request_accommodation
						},
						footer: {
						},
						buttons: [{
							className: 'btn-primary',
							content: T.core.word_ok,
							closeModal: true
						}]
					}
				});
			}
		}

		function getValueResponse(response, ar){
			var result = response;
			for (var i in ar){
				if (typeof result[ar[i]] != 'undefined')
					result = result[ar[i]];
				else {
					result = null;
					break;
				}
			}
			return result;
		}

		function initUserCounters(response){
			if (!response) { return; }

			// Вызов событий Google tagManager (tagManagerDataLayer.js)
			TMDL.initUserData(response);

			$(document).trigger( "online-chat", [ response ]);

			//-- меняем аватарку
			if (typeof response.user != 'undefined' && typeof response.user.avatar != 'undefined'){
				$('.jsn-user-avatar').prop('src', response.user.avatar);
			}

			//-- подставляем текстовые значения в ячейки
			$('#header [data-load-num]').each(function(){
				var value = $(this).data('load-num');
				var ar = value.split('.');
				var response_value = getValueResponse(response, ar);
				if (response_value != null)
					$(this).html(response_value);
			});

			//-- подставляем текстовые значения в ячейки
			$('#header [data-load-bool]').each(function(){
				var value = $(this).data('load-bool');
				var ar = value.split('.');
				var response_value = getValueResponse(response, ar);
				if (response_value){
					$(this).hide().removeClass('hidden').fadeIn(500);
				}
				else {
					$(this).fadeOut(300);//.addClass('hidden');
				}
			});

			//-- показываем выпадашку с новыми сообщениями, если есть
			if($('#new-messages-orders-menu-template').length) {
				var text = tmpl('new-messages-orders-menu-template', response);
				$('.jsn-new-messages-template').html(text);
			}
			//-- показываем выпадашку с неоплачеными счетами, если есть
			if ($('#invoices-menu-template').length){
				var text = tmpl('invoices-menu-template', response);
				$('.jsn-invoices-menu-template').html(text);
			}
			//-- показываем меню с избранными, если есть
			if ($('#favorites-menu-template').length && response.objects.favorites>0){
				var text = tmpl('favorites-menu-template', response);
				$('.jsn-favorites-menu-template').html(text).removeClass('hidden');
			}

			var
				modalNewOrders = typeof response.new_orders !== 'undefined' && response.new_orders && !/cabinet\/notices/.test(location.href);
			bannersForMobileApps(response);
			showMessagesFromAdministration(response);

			//-- если есть непрочитанные сообщения от администрации, то активируем бедж с к-вом
			var $jsn_nma = $('.jsn-notices-cnt-new-messages-admin'),
				$jsn_nmal = $('.jsn-noticer-new-admin-link');
			$jsn_nmal.attr('href', '/cabinet/notices?filter[tp]=admin');
			if (typeof response.messages != 'undefined' && response.messages.modules.messages.new>0){
				$jsn_nma.text(response.messages.modules.messages.new);
				$jsn_nma.parent().hide().removeClass('hidden').fadeIn(500);
				if (response.messages.modules.messages.new==1){
					$jsn_nmal.attr('href', response.messages.modules.messages.list[0].url);
				}
			}
			else {
				$jsn_nma.parent().addClass('hidden');
			}


			// флаг для показа модалки с запросом почты для арендодателей - эта модалка приоритетней чем модалка с бронями
			var modalRequestEmail = typeof response.email_modal !== 'undefined';
			if(modalRequestEmail!==false && !$('.js-modal-succes-booking').length && (!TOOLS.getGet('order_code'))==false && ($.cookie('email-modal')!='true')) {
				js.include('modal_user_email');
				// если есть неподтвержденная почта - указать ее в init:  modalUserEmailApp.init('mail@mail.com');
				modalUserEmailApp.init(response.email_modal);
			}

			if(modalNewOrders && !$('.js-modal-succes-booking').length) {
				var OrdersListTitle = (response.new_orders>1) ? 'Гости ждут вашего ответа!' : 'Гость ждёт вашего ответа!';
				var $modal = wp.modal({
					size: 2,
					loader: true,
					closeX: true,
					onbeforeopen: function(){
						webpower.request('/api/html/orders/getNewOrdersList/', {}, function(html){
							$modal.box.body.html('<h3 class="text-center no-mr-top hidden-md hidden-lg">'+OrdersListTitle+'</h3>'+html);
						});
					},
					box: {
						header: {
							content: '<span class="hidden-xs hidden-sm">'+OrdersListTitle+'</span>',
						},
						body: {
							content: ''
						}
					}
				});
			}


			if (!device.mobile() && typeof response.extension != 'undefined'){
				wp.createNS('extension');
				wp.extension = response.extension;
				try {
					js.include(wp.extension.src);
				} catch (err) {
				}
			}

			if (typeof response.user_review_block!='undefined' && response.user_review_block){
				$('div.jsn-comments-list').prepend(response.user_review_block);
				var t_h3 = $('#object-comments h3:first').text();
				var myArr = /\d+/.exec(t_h3);
				if (myArr != null){
					var cnt_r = parseInt(myArr[0], 10)+1;
					if (cnt_r>1)
						$('#object-comments h3:first').text(t_h3.replace(/\d+/, cnt_r));
					else
						$('#object-comments h3:first').text('1 отзыв от гостей');
				}
			}

			//-- показываем меню с подбором по свободным заявкам, если есть
			if ($('#selection-house-menu-template').length){
				var text = tmpl('selection-house-menu-template', response);
				$('.jsn-selection-house-menu-template').html(text).removeClass('hidden');
			}

			// меню свободных заявок
			var	$selectionWrapper = $('.js-selection-wrapper');
			if($selectionWrapper.length) {
				var hasLocation = !!response.location_w;
				$('.js-request-accommodation').unbind('click').on('click', function(e) {
					if (hasLocation) {
						var $hots = $('.js-hot-order');
						var $hotList = $('<ol>');//.css('list-style','none');
						$hots.find('td:first a').clone().each(function(index, item){
							$('<li/>').append(item).appendTo($hotList).css({'margin':'10px 0'});
						});

						var limit = response.limitHotOrders || 3;
						if ($hots.length >= limit) { //
							wp.modal({
								size: 2,
								closeX: true,
								onclose: function() {
									$('.js-search-input').focus();
								},
								box: {
									header: {
										content: T.core.modal_tourist_hot_orders_limit || ''
									},
									body: {
										content: $('<p>').append(T.core.modal_tourist_hot_orders_limit_text).html() + $('<div>').append($hotList).html()
									},
									footer: {
									},
									buttons: [{
										className: 'btn-primary',
										content: T.core.authmsg_btn_ok2,
										closeModal: true
									}]
								}
							});
							return false;
						}
					}
					else {
						e.preventDefault();
						return initRequestAccomodation(response);
					}
				});
			}

			wp.searchAppEnabled = !!response.searchAppEnabled;
			WP.user_id = (!!response.user&&response.user.id?response.user.id:null) || null;
			WP.userHasWebPushToken = response.user_has_web_push_token;

			if ( WP.user_id && typeof response === 'object' && (response.length === undefined)) {
				$('.js-header').addClass('auth');
				$('.js-header').removeClass('no-auth');
				if(response.user_is_owner) {
					$('.js-header').addClass('auth-owner');
				} else if(response.user_is_client) {
					$('.js-header').addClass('auth-client');
				}

				WP.tabs.init();

				$(document).trigger('user_load_data', response);
			}

			if(WP.user_id) {
				$(document).trigger('user_authenticated');
			}

			if (typeof response.hint_set_mode !== 'undefined' && !!response.hint_set_mode) {
				webpower.request('/api/html/preferences/showHintsPanel/', {}, function (response) {
					$('body').append(response);
				});
			}
			initFavorites(response);

			//-- если есть бонус, но чел неавторизован, вызываем окно авторизации
			var is_bonus_str = (typeof TOOLS.getGet('bonus')=='string' && TOOLS.getGet('bonus'));
			if (is_bonus_str && WP.user_id===null) {
				webpower.openAuthModal();
			} else if (WP.user_id>0 && is_bonus_str && $modal_bonus===null ) {
				options = {
					size: 1,
					loader: true,
					closeX: true,
					onopen: function(){
						webpower.request('/api/json/payments/testPayedBonus/', {serviceName:TOOLS.getGet('bonus')}, function(data){
							if (!data.bonus){
								$modal_bonus.close();
								return false;
							}

							$modal_bonus.box.header.find('h4.modal-title').text(data.bonus_title);
							$modal_bonus.box.body.html('<p>'+data.bonus_text+'</p>');
							if (data.bonus==1){
								$(document).trigger('refreshUserData');
							}
							$('.jsn-btn-ok').removeClass('hidden');
						});
					},
					box: {
						header: {
							content: T.core.bonus_test_title
						},
						body: {
							content: ''
						},
						footer: {
							className: 'text-center'
						},
						buttons: [{
							content: 'Понятно',
							className: 'btn-primary hidden jsn-btn-ok',
							closeModal: true
						}]
					}
				};
				$modal_bonus = wp.modal(options);
			}

		}

		function enoughContactsRequired(actions){

			actions &&
			actions.enough_contacts_required &&
			$(document).trigger('enoughContactsAfterSocialLogin');
		}
		window.enoughContactsRequired = enoughContactsRequired;

		function initFavorites( data ) {

			if(data.objects && data.objects.favorites_ids.length) {
				favoriteIndicator.addFavorites(data.objects.favorites_ids);
				favoriteIndicator.update();
			}

			var elm = $('#jsn-indicator-notauth-user');
			if ( elm.length ) {
				elm[ WP.user_id? 'hide':'show' ]();
			}
		}

		/**
		 * Вешает обработчик открытия окна авторизации на указанный элемент
		 *
		 * @param mixed selector jQuery selector
		 * @param string type "login", "registration" or "forgot"
		 * @param function callback Success callback function after auth
		 */
		webpower.handlerAuthModalWithType = function( selector, type, successCallback, closeCallback ) {

			successCallback = successCallback||function(){};
			closeCallback = closeCallback||function(){};

			var _modal = null
				, _open = function() {

					var params = {
							size: 1
							, className: 'modal-login'
							, textCenter: false
							, closeX: true
							, box: {
								body: {
									content: ($('#auth-form').length? tmpl('auth-form', {}) : '')
									, className: 'log-modal'
								}
							}
						, onclose: function() {
							_modal = null;
							closeCallback()
						}
					};
					_modal = WP.modal( params );
					new window.webpower.authHandler(
									'authBlock',
									function(){
											if ( _modal ) {
												_modal.close();
											}
											successCallback();
										},
									type
								);
					return false;
				};
			$('body').on('click', selector, _open);
		};

		var $modal_bonus = null;
		/**
		 * Форма авторизации/регистрации/изменения пароля
		 */
		initUserData = function(event, func_param){
			if ($('#auth-template').length) {
				var
					$location = $('#header'),
					locationId = $location.data('location-id'),
					locationType = $location.data('location-type'),
					location_w = $('.js-search-input').val()
				;
				if ( $.cookie('_ia_')!=null && /^1\-/.test($.cookie('_ia_')) ){
					var c_ia = $.cookie('_ia_').replace(/^\d\-/, '');
					c_ia = JSON.parse(TOOLS.base64_decode(c_ia));

					var obj_data = {is_auth:1, objects:{favorites:[], favorites_cities_groups:[], favorites_ids:[]}, user_is_owner:c_ia.objs, user_is_client:(!c_ia.objs), complete_publication:false, name:c_ia.name, gender:c_ia.g, locationId:locationId, locationType:locationType, location_w: location_w};
					userDataCallback(obj_data);
				}
				else {
					userDataCallback({location_w: location_w});
					initFavorites({});
				}

				var _authTrigger = '.jsn-logInModal';

				webpower.handlerAuthModalWithType(
					_authTrigger,
					'login',
					function() {
						if ( $('#jsn-indicator-of-favorites-page').length) { window.location.reload(1); }
						initUserData(event, func_param);
						return null;
					},
					function() {
						if (!!func_param && !!func_param.reload){
							window.location.reload(true);
						}
					}
				);

				webpower.openAuthModal = function(){
					$(_authTrigger).trigger('click');
				};
			}
		};

		if ( !window.DO_NOT_CALL_INIT_USER_DATA ) {
			initUserData();
		}
		//-- слушаем и отлавливаем событие по триггеру на обновление шапки пользователя
		$(document).on('refreshUserData', initUserData);
		//-- слушаем и отлавливаем событие по триггеру на обновление блока с формой подачи заявки
		$(document).on('user_authenticated', function(){

			if ($('#orderform').length){
				//@todo: нужно только компонент перезагружать
				window.location.reload(true);
			}
		});



		/**
		 * Функция отправки формы сочетанием клавиш Ctrl+Enter
		 * @param Event event События нажатия на клавишу
		 * @param string formElem DOM-элемент формы, который нужно отправить
		 */
		ctrlEnter = function(event, formElem) {
			if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD))){
				formElem.submit();
	        }
	    };
		$('.jsn-ctrlenter').on('keypress',function(e){
			ctrlEnter(e, $(this).parents('form'));
		});


		// Collapse block for article
		var $collapseBlocks = $('.js-collapse-block');
		if($collapseBlocks.length) {
			$collapseBlocks.on('click', function() {
				var $this = $(this),
					$parent = $this.closest('.collapse-block-cnt'),
					$bodyCollapse = $parent.find('.collapse-block-body');
				$bodyCollapse.slideToggle(300);
			});
		}

		// select's
		// $('.js-select').selectWP();

		// Якорные ссылки для статей
		var anchorsLinks = $('.content-articles a[href^="#"], a.js-anchor[href^="#"]'),
			anchorsArray = [],
			linksArray = [];
		$.each(anchorsLinks, function(key, value) {
			var target = $(value).attr('href');
			if($(target).length) {
				anchorsArray.push($(target));
				linksArray.push($(value));
				var anchorsText = $(anchorsLinks[key]).attr('href'),
					hash = location.hash,
					urlPage = document.URL.replace(hash, ''),
					urlPageArray = urlPage.split('/'),
					urlPage = '';

				urlPage = urlPageArray.join('/');

				$(anchorsLinks[key]).attr('href', urlPage + anchorsText);

			}
		});

		function initNumberMask() {
			// number mask for input
			var $numberMaskObjects = $('.js-number-mask');
			if($numberMaskObjects.length) {
				var decimalMarkDefault = '.',
					afterPointDefault = 2,
					typeDefault = '',
					beforePoint;

				$.each($numberMaskObjects, function(index, value) {
					var $this = $(value),
						type = $this.attr('number-mask-type'),
						afterPoint = $this.attr('number-mask-afterpoint'),
						decimalMark = $this.attr('number-mask-decimalmark'),
						valueInputDefault = '';

					switch (type) {
						case undefined:
							type = typeDefault;
							$this.numberMask({
								'defaultValueInput': valueInputDefault
							});
							break
						case 'float':
							type = 'float';
							if(afterPoint === undefined || isNaN(afterPoint)) {
								afterPoint = afterPointDefault;
							}
							if(decimalMark === undefined) {
								decimalMark = decimalMarkDefault;
							}
							$this.numberMask({
								'type': type,
								'afterPoint': afterPoint,
								'decimalMark': decimalMark,
								'defaultValueInput': valueInputDefault
							});
							break
						default:
							type = typeDefault;
							$this.numberMask({
								'defaultValueInput': valueInputDefault
							});
							break
					}
				});
			}
		}

		initNumberMask();

		$(window).on('init-number-mask', function() {
			initNumberMask();
		});

		$(document).on('portionLoaded', function() {
			$('[data-toggle="popover"]').popover();
		});

		$('.js-abuse').click(function(){
			var form = '<form class="form-result-phone jsn-form-action-phone" method="get">';
			form += '<div class="jsn-more-reason">';
			form += '<div class="form-group"><textarea placeholder="' + T.core.describe_problem + '" class="form-control" id="js-abuse-data" name="problem-phone" rows="5"></textarea></div>';
			if (!!!wp.user_id) {
				form += '<div class="form-group"><input type="text" name="contact" placeholder="' + T.core.auth_phone_or_email + '" class="form-control" id="js-abuse-contact-phone"></div>';
			}
			form += '</div></form>';

			var abuseModal = wp.modal({
				size: 2,
				closeX: true,
				box: {
					header: {
						content: T.core.complaint,
					},
					body: {
						content: form,
					},
					footer: {
						className: 'text-center'
					},
					buttons: [
					{
						content: T.core.word_cancel,
						className: 'btn btn-default',
						closeModal: true
					},
					{
						content: T.core.send_complaint,
						className: 'btn btn-primary jsn-stat-click-abuse',
						onclick: function() {

							if (!$('#js-abuse-data').val()) {
								$('#js-abuse-data').attr('placeholder', T.core.text_required).parent().addClass('has-error');
								return false;
							}

							var contact  = $('#js-abuse-contact-phone');

							if (contact.length ) {

								var resultValidateEmail = TOOLS.validateEmail(contact.val());
								var resultValidatePhone = TOOLS.validatePhone(contact.val());

								if ( !contact.val() || (!resultValidateEmail.success && !resultValidatePhone.success ) ) {
									contact.attr('placeholder', T.core.text_required).parent().addClass('has-error');

									return false;
								}
							}

							var data = {info:{}};
							data.activity_group = 'objectAbuse';
							data.info.type = 'objectAbuse';
							data.info.text = {};
							data.info.text.contact = contact.val();
							data.info.text.text = $('#js-abuse-data').val();
							data.info.user_id  = wp.user_id;
							$objectData = $.parseJSON( OBJECT_MAP_DATA )||{}

							data.info.object_id  = ($objectData ? $objectData.objects[0].id : null);
							data.info.object_url  = ($objectData ? $objectData.objects[0].url : null);

							webpower.request('/api/json/feedback/sendAbuseEmail', {params: data.info},function(data){});

							$('.modal-title', abuseModal.box.header).text(T.core.complaint_sent);
							abuseModal.box.buttons[0].text(T.core.word_close);
							abuseModal.box.buttons[1].remove();
							abuseModal.box.body.html('<p class="thanks text-center" style="font-size:22px; padding:10px 0;">' + T.core.thank_you + '</p>');
						}
					}
					]
				}
			});
		});

		$(document).on('click', '.js-scroll-to, .js-scroll-wrapper', function(e) {
			e.preventDefault();
			var
				$this = $(this),
				selector = $this.attr('data-scroll-to-selector'),
				offset = $this.attr('data-scroll-to-offset'),
				time = $this.attr('data-scroll-to-time');
			Screen.ScrollTo(selector, offset, time);
		});

		$(document).on('click', '.js-more-currency-handler', function(e) {
			e.preventDefault()

			var
				$this = $(this),
				SELECTOR_CURRENCY_ITEMS = '.js-more-currency';

			$(SELECTOR_CURRENCY_ITEMS).show();
			$this.hide();
		})
		$(document).on('click', '.js-header-search-handler', function(e) {
			e.preventDefault();
			$('#header').addClass('open-search');
		});

		// Hide android/iphone links
	  	if ($("html").hasClass("android")){
	  		$( "#iphone-app-logo,#iphone-app-picture" ).addClass( "display-none" );
	  	}
	  	if ($("html").hasClass("ios")){
	  		$( "#android-app-logo,#android-app-picture" ).addClass( "display-none" );
	  	}
	});

	// *** Синхронизация авторизации ***

	var ALREADY_IDENTIFIED_CALLED = false;
	/**
	 * Идентификация пользователя
	 * @returns
	 */
	function includeIdentity( list ) {

		if ( !list.length || ALREADY_IDENTIFIED_CALLED ) return;
		ALREADY_IDENTIFIED_CALLED = true;

		var l = list.length;
		while(l--) {
			var url = location.protocol + '//' + list[l] + '/identity.html';
			setTimeout(function(){

				TOOLS.includeJs(
						url,
						null,
						{crossorigin: "use-credentials"}
					);

			}, 100);
		}
	}

	var ALREADY_IDENTIFIED = false;
	/**
	 * Идентификация пользователя
	 *
	 * @param string code
	 * @returns
	 */
	function setImplicitIdentity(code) {

		if ( !!!code || ALREADY_IDENTIFIED ) return;
		ALREADY_IDENTIFIED = true;

		wp.request('/api/json/applications/identity', {code: code}, function(){

			if ( location.pathname.indexOf('/login.html')>-1 ) {
				location.reload(1);
			}
			$(document).trigger('refreshUserData');
		});
	}

	// *** Синхронизация сессии ***

	var ALREADY_SYNCHRONIZED_CALLED = false;
	/**
	 * Идентификация пользователя
	 * @returns
	 */
	function includeSession( domain ) {

		if ( !domain || ALREADY_SYNCHRONIZED_CALLED ) return;
		ALREADY_SYNCHRONIZED_CALLED = true;

		setTimeout(function(){

			TOOLS.includeJs(
					location.protocol + '//' + domain + '/session.html',
					null,
					{crossorigin: "use-credentials"}
				);

		}, 100);
	}


	var ALREADY_SYNCHRONIZED = false;
	/**
	 * Синхронизация сессии
	 *
	 * @param string code
	 * @returns
	 */
	function setImplicitSession(code) {

		if ( !!!code || ALREADY_SYNCHRONIZED ) return;
		ALREADY_SYNCHRONIZED = true;

		wp.request('/api/json/applications/session', {code: code}, function(){

			$(document).trigger('refreshUserData');
		});
	}

} catch(err) {
	alert(err)
}





