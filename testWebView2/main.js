document.addEventListener("DOMContentLoaded", function () {
	
	var responseForm = {
		s: {
			reviewBlock:			'.media.media-comment',
			responseFormWrapper:	'.response-form-wrapper',
			btnResponseOpen:		'.btn-response-open',
			btnResponseCancel:		'.btn-response-cancel',
			btnResponseSend:		'.btn-response-send',
		},

		getAuthUrl: '/api/html/users/get_auth_form/',
		addResponseUrl: '/api/json/messages/add_object_review_response',

		//открыть форму ответа на отзыв
		showResponseForm: function(e) {
			var 
				$btn = $(e.target),
				$responseFormWrapper = $btn.closest(responseForm.s.reviewBlock).find(responseForm.s.responseFormWrapper);

			if ($responseFormWrapper.css('display') == 'none') {
				$responseFormWrapper.show();
				$responseFormWrapper.find('[name="properties[message_text]"]').focus();
				$btn.hide();
			}
		},

		//скрыть форму ответа на отзыв
		hideResponseForm: function(e) {
			var 
				$btn = $(e.target),
				$responseFormWrapper = $btn.closest(responseForm.s.reviewBlock).find(responseForm.s.responseFormWrapper);

			if ($responseFormWrapper.css('display') != 'none') {
				$responseFormWrapper.hide();
				$responseFormWrapper.closest(responseForm.s.reviewBlock).find(responseForm.s.btnResponseOpen).show();
			}
		},

		//отправить ответ на отзыв
		sendResponse: function(e) {
			var 
				$this = $(e.target),
				userId = $this.attr('data-user-id'),
				userImage = $this.attr('data-user-img'),
				$reviewBlock = $this.closest(responseForm.s.reviewBlock),
				$responseFormWrapper = $reviewBlock.find(responseForm.s.responseFormWrapper);

			if ($responseFormWrapper.css('display') != 'none') {
				$this.prop("disabled", true);

				var messageId = $this.attr('data-comment-id');
				var $messageText = $responseFormWrapper.find('[name="properties[message_text]"]');
				var messageText = $messageText.val();
				var $btnResponseCancel = $reviewBlock.find(responseForm.s.btnResponseCancel);

				var data = {
					message_id: messageId,
					properties: {
						message_text: messageText
					}
				};

				var today = new Date();
				var hours = today.getHours();
				if(hours < 10) {
					hours = '0' + hours;
				}
				var minutes = today.getMinutes();
				if(minutes < 10) {
					minutes = '0' + minutes;
				}

				var datetime = hours + ":" + minutes;

				webpower.request(
					responseForm.addResponseUrl,
					data,
					{
						success: function(result) {
							$responseFormWrapper.find('p.field-error').remove();
							$responseFormWrapper.find('.error.field-error').removeClass('error field-error');
							wp.modal({
								size: 2,
								closeX: true,
								textCenter: true,
								box: {
									header: {
										content: T.messages.response_sent
									}
									, body: {
										content: T.messages.your_response_sent
									}
									, footer: {}
								}
							});
							$messageText.val('');
							$btnResponseCancel.click();
							$reviewBlock.find(responseForm.s.btnResponseOpen).hide();//убрали кнопку (можно отправить только один ответ)

							//отображаем только что добавленный ответ
							var 
								responseData = {},
								responseTemplate = null;

							responseData['userImage'] = userImage;
							responseData['userResponse'] = data.properties.message_text;
							responseData['userResponseDate'] = datetime;

							responseTemplate = tmpl('response-template', responseData);
							$responseFormWrapper.before($(responseTemplate));
						},
						loadButtons: $this
					}

				);

			}
		},

		//показать форму авторизации
		showLogin: function() {
			var $btnLogin = $('.jsn-logInModal');
			if ($btnLogin.length > 0) {
				$btnLogin.click();
				return false;
			}
			var $loginModal = $('#logInModal');
			var $modalContent = $loginModal.find('div.modal-content');
			$loginModal.modal();
			$modalContent.html('');
			webpower.request(
				responseForm.getAuthUrl,
				{},
				function(html) {
					$modalContent.html(html);
				}
			);
		},

		init: function() {
			$(this.s.btnResponseOpen).click(this.showResponseForm);
			$(this.s.btnResponseCancel).click(this.hideResponseForm);
			$(this.s.btnResponseSend).click(this.sendResponse);

			return false;
		},

	};

	if ($(".btn-response-open").size() > 0) {
		responseForm.init();
	}
		




});