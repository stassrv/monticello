let btn = document.querySelector('.ba-menu-toggle');
		let menu = document.querySelector('.ba-menu');
		btn.addEventListener('click', function (e) {
			menu.classList.toggle('open');
		});