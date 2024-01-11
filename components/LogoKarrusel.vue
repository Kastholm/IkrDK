<template>
<div class="slider sm:max-w-full max-w-[330px] border-t-2 border-b-2 pt-4 mb-40">
	<div class="slide-track">
		<div class="slide" height="100" width="50"></div>
		<div class="slide">
			<img src="https://i.ibb.co/8xNTWrG/esbjerg-250x100px.jpg" height="100" width="250" alt="Esbjerg Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/RDH8dfq/frederikssund-250x100px.jpg" height="100" width="250" alt="Frederikssund Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/cLsv71v/KPH-250x100px.jpg" height="100" width="250" alt="Koebenhavns Professionhoejskole" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/hDc0srv/cbs-250x100px.jpg" height="100" width="250" alt="CBS - Copenhagen Business School" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/tPyCqWN/Kriminalforsorgen-250x100px.jpg" height="100" width="250" alt="Kriminalforsorgen" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/PhVYkyb/n-stved-250x100px.jpg" height="100" width="250" alt="Naestved Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/ZY2Q4YL/s-nderborg-250x100px.jpg" height="100" width="250" alt="Soenderborg Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/K6wxtz0/UCN-250x100px.jpg" height="100" width="250" alt="University College Nord" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/ggrWNvk/vejle-250x100px.jpg" height="100" width="250" alt="Vejle Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/s1Yx8w0/vordingborg-250x100px.jpg" height="100" width="250" alt="Vordingborg Kommune" />
		</div>
		<div class="slide" height="100" width="250"></div>
		<div class="slide" height="100" width="50"></div>
		
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
	100% { transform: translateX(calc(-320px * 7))}
}

.slider {
	height: 150px;
	max-height: 130px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: auto;
	
	.slide-track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
		width: calc(350px * 18);
		gap: 80px;
	}
	.slide {
		height: 100px;
		width: 250px;
	}
}
  </style>