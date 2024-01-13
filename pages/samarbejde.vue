<template>
    <main class="flex flex-col justify-center">
  <SamarbejdeHero />
<section class="flex flex-col ">
  <div class="flex w-full relative mt-36 gap-10 2xl:gap-40 justify-center">
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-20"></figure>
    <article class="w-[40%] flex flex-col gap-5 -translate-y-5">
<h2 class="">Vi gør fordelene synlige fra dag 1</h2>
<p>Jeres succes er vores succes. Selv om det lyder som en gammel traver, er der sandhed i ordene. Når vi indgår et samarbejde, er det med jeres behov, mål og ønsker i fokus. Forventninger afstemmes og processen aftales inden vi sætter i gang – så er tilliden på plads og alle kender vejen frem.
Vores konsulenter er spydspidserne i arbejdet med at løse jeres udfordringer. Mange års erfaring og vundet viden gør dem i stand til at gennemskue aftalernes kompleksitet. Konsulenterne skærer igennem, forenkler og fornyer indgroet vanetænkning og uhensigtsmæssige kontraktforhold og arbejdsgange. Med ansvar og ejerskab på opgaven.
</p>
    </article>
    <img src="https://i.ibb.co/cJs7Wtc/samarbejde-billede-1.jpg" alt="" class= "max-h-[400px] rounded-md z-50 shadow-2xl">
  </div>

  <div class="flex w-full relative mt-36 gap-20 2xl:gap-40 justify-center">
    <img src="https://i.ibb.co/dkQpQmZ/samarbejde-billed-2.jpg" alt="" class= "max-h-[320px] rounded-md z-50 sm:translate-y-5 shadow-2xl">
    <article class="w-[45%] flex flex-col gap-5 border-[#256c2b] border-[6px] p-5 rounded-xl translate-y-5">
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

<style>
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
</style>