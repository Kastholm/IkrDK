<template>
	<div class="w-full mt-20">
		<!--<h3 class="m-auto mb-10 w-fit text-[24px]">Klik på logo og læs udtalelse</h3>-->
	</div>
<div class="slider sm:max-w-full max-w-[330px] border-t-2 border-b-2 pt-4 mb-40">
	<div class="slide-track">
		<div class="slide" height="100" width="50"></div>
		<div class="slide">
			<img src="https://i.ibb.co/MprxNgc/Eslovs.png" height="100" width="90" alt="Esbjerg Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/nBqxPH6/Gislaveds-kommun-Logotyp.jpg" height="100" width="250" alt="Frederikssund Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/kHrk9Wd/Halmstad.png" height="100" width="250" alt="Koebenhavns Professionhoejskole" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/1JVbGPt/Mora.png" height="100" width="250" alt="CBS - Copenhagen Business School" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/CV17BHf/Norrkoping.png" height="100" width="120" alt="Kriminalforsorgen" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/4VWtgFX/Varnamo.gif" height="100" width="250" alt="Naestved Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/jbK29tV/Sjobo.png" height="100" width="190" alt="Soenderborg Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/2K5V3hM/Varbergs.png" height="100" width="250" alt="University College Nord" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/MprxNgc/Eslovs.png" height="100" width="60" alt="Esbjerg Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/nBqxPH6/Gislaveds-kommun-Logotyp.jpg" height="100" width="250" alt="Frederikssund Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/kHrk9Wd/Halmstad.png" height="100" width="250" alt="Koebenhavns Professionhoejskole" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/1JVbGPt/Mora.png" height="100" width="250" alt="CBS - Copenhagen Business School" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/CV17BHf/Norrkoping.png" height="100" width="120" alt="Kriminalforsorgen" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/4VWtgFX/Varnamo.gif" height="100" width="250" alt="Naestved Kommune" />
		</div>
		<div class="slide">
			<img src="https://i.ibb.co/jbK29tV/Sjobo.png" height="100" width="190" alt="Soenderborg Kommune" />
		</div>



		<!-- Popup Vordingborg -->
		
		
	</div>
</div>


<div class="logo-popup rounded-lg" v-if="popupVisible" @click="closePopup">
    <div class="popup-content relative">
		
		<h4 class="text-[25px]"></h4>
		<figure class="absolute right-4 top-2 font-black text-[20px] cursor-pointer">X</figure>
      <p class="max-w-[600px] text-[20px]">
</p>
<br/>
	  <a href="/ydelser" class="text-[#1a5b0b]"></a>
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
		height: auto;
	}
	.slide {
		height: auto;
		width: auto;
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