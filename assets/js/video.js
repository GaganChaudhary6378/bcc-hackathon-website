	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#polina button");

	function vidFade() {
	  vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function() {
	// only functional if "loop" is removed 
	vid.pause();
	// to capture IE10
	vidFade();
	}); 
	pauseButton.addEventListener("click", function() {
	  vid.classList.toggle("stopfade");
	  if (vid.paused) {
	    vid.play();
	    pauseButton.innerHTML = "<i class='lni-pause'></i>";
	  } else {
	    vid.pause();
	    pauseButton.innerHTML = "<i class='lni-play'></i>";
	  }
	})

	// function for speaker section
	function speaker1(){
		document.getElementById("guestName").textContent="Manish Agarwal";
		document.getElementById("guestdesc").textContent="Inauguration Title Sponsor speech Speaker's session Coding round 1 Speaker's session Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto omnis tenetur corrupti officiis, assumenda in excepturi magnam laborum! Quod repellat aperiam, maxime blanditiis esse dignissimos enim ea accusantium ab laudantium.";
		document.getElementById("speaker-morning").src="/assets/img/speakers/manish agrawal.jpg"
	  }
	  function speaker2(){
		document.getElementById("guestName").textContent="Akash Dixit";
		document.getElementById("guestdesc").textContent=`Robotics Engineer & Data Scientist, with 6 Years of experience in the Robotics Industry and delivering AI-based real-time solutions for 
		humanoid robots. Developed humanoid Robot for various educational & Service platforms, recently completed MTech from BITS Pilani in Data Science.`;
		document.getElementById("speaker-morning").src="/assets/img/speakers/akash dixit.jpg"
	  }

	  // till here for speakers section