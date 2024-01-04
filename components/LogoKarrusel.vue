<template>
<div class="slider sm:max-w-full max-w-[330px]">
	<div class="slide-track">
		<div class="slide">
			<img src="https://i.ibb.co/M2vWvD5/Esbjerg-Kommune.jpg" height="100" width="135" alt="CBS - Copenhagen Business School" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/2cbx3XJ/Frederikssund-Kommune.png" height="100" width="220" alt="Frederikssund Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/rFtNdWq/K-benhavns-Professionh-jskole.png" height="100" width="300" alt="Koebenhavns Professionhoejskole" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/MhK4Czr/CBS-Copenhagen-Business-School.png" height="100" width="300" alt="" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/8BSQT97/kriminalforsorgen.png" height="100" width="300" alt="Kriminalforsorgen" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/h9gFkL0/N-stved-Kommune.jpg" height="100" width="250" alt="Naestved Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/YRWwqcS/S-nderborg-Kommune.jpg" height="100" width="200" alt="Soenderborg Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/fd96LDM/University-College-Nord.jpg" height="100" width="150" alt="University College" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/CW3xgLP/Vejle-Kommune.png" height="100" width="250" alt="Vejle Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/BKr0QnP/Vordingborg-Kommune.png" height="100" width="250" alt="Vordingborg Kommune" />
		</div>
	</div>
</div>
  </template>
  
  <script>

  </script>
  
  <style lang="scss">
  body {
	align-items: center;
	justify-content: center;
}

$animationSpeed: 40s;

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}

.slider {
	height: 100px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: auto;
	
	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(250px * 14);
		gap: 100px;
	}
	.slide {
		height: 100px;
		width: 250px;
	}
}
  </style>