<template>
	<div class="w-full mt-20">
		<h3 class="m-auto mb-10 w-fit">Klik på logo og læs udtalelse</h3>
	</div>
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
			<img src="https://i.ibb.co/k074mxB/cbs2-250x100px.jpg" height="100" width="250" alt="CBS - Copenhagen Business School" />
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



		<!-- Popup Vordingborg -->
		<div class="slide cursor-pointer" @click="showPopup('Vordingborg')">
        <img src="https://i.ibb.co/4Fcdc6r/vordingborg-logo-pos.png" height="100" width="250" alt="Vordingborg Kommune" />
      </div>



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
			<img src="https://i.ibb.co/k074mxB/cbs2-250x100px.jpg" height="100" width="250" alt="CBS - Copenhagen Business School" />
		</div>
		
		
	</div>
</div>


<div class="logo-popup rounded-lg" v-if="popupVisible" @click="closePopup">
    <div class="popup-content">
		
		<h4>Overskrift</h4>
		<figure class="absolute right-28 top-[150px] font-black text-[20px] cursor-pointer">X</figure>
      <p class="max-w-[600px]">"Tester reference til Vordingborg.Tester reference til Vordingborg.Tester reference til Vordingborg.Tester reference til Vordingborg."</p>
	  <a href="/ydelser" class="text-[#1a5b0b]">Besøg Vordingborg Kommune website</a>
    </div>
  </div>

  </template>
  
  <script>
export default {
  data() {
    return {
      popupVisible: false,
      popupText: ''
    };
  },
  methods: {
    showPopup(text) {
      this.popupText = text;
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    }
  }
};
  </script>
  
  <style lang="scss" scoped>
  body {
	align-items: center;
	justify-content: center;
}

$animationSpeed: 30s;

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-300px * 7))}
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
		width: calc(500px * 18);
		gap: 60px;
	}
	.slide {
		height: 100px;
		width: 250px;
	}
}

// popup

.logo-popup {
  position: fixed;
  bottom: -100px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

  </style>