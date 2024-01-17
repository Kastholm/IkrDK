<template>
    <main class="flex flex-col justify-center">
  <SamarbejdeHero />
<section class="flex flex-col ">
  <div class="flex w-full relative mt-10 sm:mt-36 gap-10 2xl:gap-40 justify-center">
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-20 respons-mobil"></figure>
    <article class="sm:w-[40%] w-[85%] flex flex-col gap-5  sm:-translate-y-5">
<h2 class="">Vi gør fordelene synlige fra dag 1</h2>
<p>Jeres succes er vores succes. Når vi indgår et samarbejde, er det med jeres behov, mål og ønsker i fokus. Forventninger afstemmes og processen aftales inden vi sætter i gang – så er tilliden på plads og alle kender vejen frem. Mange års erfaring og vundet viden gør, at vores konsulenter evner at gennemskue aftalernes kompleksitet. De skærer igennem, forenkler og fornyer indgroet vanetænkning og uhensigtsmæssige kontraktforhold og arbejdsgange. Med ansvar og ejerskab på opgaven.
</p>
    </article>
    <img src="https://i.ibb.co/cJs7Wtc/samarbejde-billede-1.jpg" alt="" class= "max-h-[400px] rounded-md z-50 shadow-2xl respons-mobi">
  </div>

  <div class="flex w-full relative mt-5 sm:mt-36 gap-20 2xl:gap-40 justify-center">
    <img src="https://i.ibb.co/bs8KZ9M/Samarbejde-h-jformat-1.jpg" alt="" class= "max-h-[770px] rounded-md z-50 sm:translate-y-5 shadow-2xl respons-mobi">
    <article class="sm:w-[45%] w-[90%] flex flex-col gap-5 p-5 rounded-xl translate-y-5">
<h2 class="">Ved et samarbejde med <span class="text-[#256c2b]"> IKR </span> kan I opnå følgende:</h2>

<ul class="flex flex-col gap-4 min-h-[258px]">
    <li class="bulletpoint relative ml-16"> Øge jeres økonomiske råderum</li>
    <li class="bulletpoint relative ml-16"> Opnå overblik over den samlede aftaleportefølje</li>
    <li class="bulletpoint relative ml-16"> Forvente et fald i fakturamængder</li>
    <li class="bulletpoint relative ml-16"> Få behovstilpasset jeres sortimenter</li>
    <li class="bulletpoint relative ml-16"> Formindske antal kontrakter</li>
    <li class="bulletpoint relative ml-16"> Få bedre priser med færre leverandører</li>
    <li class="bulletpoint relative ml-16"> Udnytte rammevilkår i kontrakter</li>
    <li class="bulletpoint relative ml-16"> Få dokumentation for opnåede resultater</li>
</ul> 
    </article>
  </div>
</section>

  <SamarbejdeBund />
  <LogoKarrusel class="translate-y-20 border-t-[#2c2c2c] border-[0px] border-b-[#2c2c2c]" />
<div></div>
</main>
</template>

<script>
export default {

}
</script>

<style scoped>

@keyframes slideDown {
  0% {
    opacity: 0.9;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.clip2 {
    clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
    clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}

main {
  opacity: 0;
  animation: slideDown 0.7s ease-out forwards;
}

.clip2 {
    clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.bulletpoint::before {
    content: '•';
    font-size: 35px;
    transform: translatex(-60px) translatey(-5px);
    position: absolute;
    color: #256c2b;
     
    
} 

@media screen and (max-width: 767px) {

  .respons-mobil {
    display: none;
  }
}
</style>