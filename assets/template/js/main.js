var site = function () {
	
	var self;

	var init = function () {
		self = this;
		
		toggleTouchClass();
		toggleImprint();
		initSocialButtons();
	};
	
	var toggleTouchClass = function() {
		// toogle class on mobile viewport
		$('html').toggleClass('is-touch', 'ontouchstart' in window);
	};
	
	var initSocialButtons = function() {
		
		// twitter
		var twitterText = "Wie man mit Internet und Social Media erfolgreich Spenden sammelt: Das neue Online-Fundraising Handbuch!";
		var twitterURL = "http://www.fundraising-handbuch.org";
		var twitterStr = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(twitterText) + '&url=' + encodeURIComponent(twitterURL);
		
		$('.social-icons .twitter a').click(function (e) {
			e.preventDefault();
			window.open(twitterStr);
		});
		
		// facebook
		
		$('.social-icons .facebook a').click(function (e) {
			e.preventDefault();
			window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.fundraising-handbuch.org');
		});
		
		// email recommendation
		var emailAddress = "";
		var emailSubject = "Empfehlung: Das neue Praxishandbuch Online-Fundraising";
		var emailBody = "Hallo \n\n Kurzer Hinweis: Das Praxishandbuch Online-Fundraising ist erschienen! Erstmals sind in einem Buch alle Tipps und Tricks vereint, mit denen man im Internet und über Social Media erfolgreich spenden sammeln kann. Hier kannst Du es bestellen: http://www.fundraising-handbuch.org";
		var emailStr ='mailto:' + encodeURIComponent(emailAddress) + '?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(emailBody);
		
		$('.social-icons .email a').click(function (e) {
			e.preventDefault();
			window.location.href = emailStr;
		});
		
	};
	
	var toggleImprint = function() {
		$('.imprint-btn').click(function (e) {
			e.preventDefault();
			$(".imprint").toggleClass('open');
			$('.imprint-contents').slideToggle(200);
			if ($(".imprint").hasClass('open')) {
				$('html, body').animate({ scrollTop: $(".imprint").offset().top }, 200);
			}
		});
	};
	
	return {
		init:init
	};
	
}();

$(document).ready(function() {
	site.init();
});