;(function() {
	"use strict";

	function msToTime(duration) {
		var milliseconds = parseInt((duration % 1000) / 100),
			seconds = parseInt((duration / 1000) % 60),
			minutes = parseInt((duration / (1000 * 60)) % 60),
			hours = parseInt((duration / (1000 * 60 * 60)) % 24);
		hours = (hours < 10) ? "0" + hours : hours;
		minutes = (minutes < 10) ? "0" + minutes : minutes;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		return minutes + ":" + seconds;
	}

	let searchForm = document.querySelector('.ba-search-form');

	let itunesAjax = new XMLHttpRequest();

	let tuneTmpl = document.getElementById('tune-tmpl').innerHTML;

	const tunesList = document.querySelector('.ba-tunes-list');
	
	const loader = document.querySelector('.ba-preloader');

	let isLoaing = false;

	itunesAjax.onload = function () {

		
		if (itunesAjax.status !== 200) {
			return;
		}
		//Make object
		let tunes = JSON.parse(itunesAjax.responseText);

		console.log(tunes.results);

		//Show loader
		loader.classList.remove('active');
		isLoaing = false;

		tunes.results.forEach(tune => {
			let duraction = msToTime(tune.trackTimeMillis);
			let goodImg = tune.artworkUrl100.replace('100x100', '600x600');
			let tuneHTML = tuneTmpl
			.replace(/{{songName}}/ig, tune.trackName)
			.replace(/{{artist}}/ig, tune.artistName)
			.replace(/{{albumName}}/ig, tune.collectionName)
			.replace(/{{genre}}/ig, tune.primaryGenreName)
			.replace(/{{image}}/ig, goodImg)
			.replace(/{{price}}/ig, tune.collectionPrice)
			.replace(/{{collecionUrl}}/ig, tune.collectionViewUrl)
			.replace(/{{duraction}}/ig, duraction)
			.replace(/{{audio}}/ig, tune.previewUrl)
			.replace(/{{trackId}}/ig, tune.trackId)
			
			;
			tunesList.innerHTML += tuneHTML;
		});
	};

	searchForm.addEventListener('submit', function (e) {
		e.preventDefault();

		if(isLoaing) return;
		
		let query = document.getElementById('search-query');
		query= query.value;//Get value

		tunesList.innerHTML = ""; //Clear list HTML

		//Show loader
		loader.classList.add('active');
		isLoaing = true;

		let itunesUrl = `https://itunes.apple.com/search?term=${query}&limit=10`;

		itunesAjax.open('GET', itunesUrl );// Set AJAX settings

		itunesAjax.send();// Set AJAX request
	});

	tunesList.addEventListener('click', function (event) {
		let el = event.target;//Play btn


		let songId = el.dataset.id; //Get song ID from button data atribute

		if(songId === undefined) return; //If we clicked not on button do nthn

		let currentAudio = document.getElementById(songId);
		//Get all audios and pause them
		let audioTracks = tunesList.querySelectorAll('audio');

		audioTracks.forEach(audio =>{
			if(audio != currentAudio){//If not current audio pause
				audio.pause();
			}
		});
		currentAudio.paused ? currentAudio.play(): currentAudio.pause();

		let pulseingBtn = tunesList.querySelector('ba-play-btn.pulse');

		if(pulseingBtn != el && pulseingBtn !== null){
			pulseingBtn.classList.remove(pulse)
		}
		// pulseingBtn != el ? pulseingBtn.classList.remove(pulse) : '';

		el.classList.toggle('pulse');
	});
})();

