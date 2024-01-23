<template>
 <main class="flex flex-col justify-center">
  <Vi-erHero />

  <div class="flex w-full relative mt-36 gap-20 2xl:gap-40 justify-center">
    
    <img src="https://i.ibb.co/5GcgYV2/Vi-er-team2-75.webp" alt="" class= "h-[900px] 2xl:max-h-[600px] rounded-md z-50 shadow-2xl">
    <article class="w-[40%] flex flex-col gap-5 -translate-y-5">
<h2 class="">I mere end 20 år har IKR hjulpet som uvildig rådgiver</h2>
<p class="2xl:leading-[42px]">Været 100% loyal og uvildig som rådgiver og katalysator for en positiv udvikling. 
<br><br>
Hjulpet både offentlige og private kunder. Det har skabet overblik at have ”hånd-i-hanke” med sine kontrakter – og som oftest et øget økonomisk råderum, på grund af de opnåede fordele.
<br><br>
Som dedikerede uvildig partner, investerer vi i vores kunders udfordringer og er med på sidelinjen på hele rejsen. 
<br><br>
I behov og hidtidige situation, finder vi de nye veje til det økonomisk råderum.
<br><br>
Med kunder i Danmark og Sverige har vi gennem årene opnået ekspertise, indsigt og erfaring med at sikre fordelagtige aftaler, følge op på de eksisterende og ofte, genforhandle disse til bedre vilkår og priser. 


</p>
</article>
</div>

<div class="flex w-full relative mt-36 gap-16 2xl:gap-40 justify-center">
    <figure class="h-[220px] min-h-[200px] respons w-[200px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-[135px]"></figure>
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-80"></figure>
    <article class="w-[40%] flex flex-col gap-5 -translate-y-3">
<h2 class=""> I<span class="text-[#256c2b]"> IKR </span> betragter vi os som en samarbejdspartner – vi er:</h2>
<ul class="flex-col flex gap-8">
  <li><span class="text-[#256c2b] font-bold">Indkøbsspecialister</span> – vi forstår markedet, kender kunde/leverandørforhold – og de rigtige priser.</li>
  <li><span class="text-[#256c2b] font-bold">Udbuds- og indkøbsekspertise</span> – vi hjælper ifbm. udformning og eksekvering af konkurrencedygtige udbud.</li>
  <li><span class="text-[#256c2b] font-bold ">Forhandlingseksperter </span> – fordi vi kender markedet og dets aktører, kan vi sikre favorable vilkår og priser – uden at de positive relationer går tabt.</li>
  <li><span class="text-[#256c2b] font-bold">Kontraktstyring </span> – jeres aftaler spores, overvåges og evalueres løbende af vores styringsteam. Med fingeren på pulsen sikrer I at alt hele kontraktperioden går som aftalt.  </li>
</ul>
    </article>
    <img src="https://i.ibb.co/KWsT29g/port-VI-ER.jpg" alt="" class= "max-h-[600px] 2xl:max-h-[700px] rounded-md z-50 shadow-2xl">
  </div>
  <Vi-erBund />
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

main {
  opacity: 0;
  animation: slideDown 0.7s ease-out forwards;
}

.clip2 {
    clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
    clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}
</style>