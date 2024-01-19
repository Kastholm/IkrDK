<template>
    <main class="flex flex-col justify-center">
    <YdelserHero />
    <div class="flex flex-col h-[400px] w-full gap-5 justify-center items-center sm:mt-28 mt-60 relative sm:mb-0 mb-44">
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-0"></figure>
    <div class="max-w-[72%] sm:max-w-[60%] kommentar relative">
     <h2 class=" sm:max-w-[85%]"> IKR er med hele vejen – også hvis der skal tages en risiko </h2>
    </div>
    <p class=" max-w-[60%]">IKR sørger for at der løbende tilpasses og forbedres samt følges op på aftalerne gennem konstruktive samtaler med jeres leverandører. Hermed skabes øget økonomisk råderum og plads til innovation i aftalerne. Desuden sikres at kvalitet og pris følges ad, ligesom relevans omkring varen/tjenesteydelsen hele tiden vurderes i forhold til formålet.
Opsigelse eller forlængelse af aftaler i forhold til aftalebetingelser overvåges og gennemføres, så unødvendige og omkostningskrævende aftaleforlængelser undgås.
</p>
   </div>

   <div class="flex sm:flex-row flex-col items-center sm:gap-14 justify-center text-white sm:mt-10 2xl:mt-0 sm:-translate-y-0 -translate-y-20 "> 
    <NuxtLink to="oekonomiskeAnalyser">
      <div class="card flex flex-col justify-center items-center gap-[56px] shadow-2xl shadow-[#2c2c2cd1] cursor-pointer">
        <h3 class="max-w-[90%] leading-10 overskrift-underline"> ØKONOMISKE ANALYSER
        </h3>
        <p class="max-w-[90%] cardfont max-h-[150px] -translate-y-4">Analyser på tværs af jeres indkøb er fremragende værktøjer til at finde nye muligheder for øget økonomisk råderum.</p>
          <div class="flex w-full justify-end mr-10 underline underline-offset-4">
            <a class="text-end italic -translate-y-3 cursor-pointer">Læs mere..</a>
          </div>
      </div>
    </NuxtLink>
  <NuxtLink to="udbudUnderside">
    <div class="card flex flex-col justify-center items-center gap-[45px] shadow-2xl shadow-[#2c2c2cd1] cursor-pointer">
        <h3 class="max-w-[90%] leading-10 overskrift-underline "> UDBUD OG KONKURRENCE
        </h3>
        <p class="max-w-[90%] cardfont max-h-[150px] mt-1 -translate-y-3">En analyse af jeres nuværende udbudsmateriale danner baggrund for en vurdering af potentielle gevinster ved fornyede konkurrenceudsættelse. </p>
        <div class="flex w-full justify-end mr-10 underline underline-offset-4">
            <a class="text-end italic -translate-y-3 cursor-pointer">Læs mere..</a>
        </div>
    </div>
  </NuxtLink>
  <NuxtLink to="aftaleUnderside">
    <div class="card flex flex-col justify-center items-center gap-[45px] shadow-2xl shadow-[#2c2c2cd1] cursor-pointer ">
        <h3 class="max-w-[90%] leading-10 overskrift-underline "> AFTALE OPFØLGNING
        </h3>
        <p class="max-w-[90%] cardfont max-h-[150px] -translate-y-3">Aftalestyring og opfølgning på aftaler giver fornyet forhandlingsstyrke med dertil hørende aftaleoptimeringer. Ved at arbejde målrettet forbedres resultaterne.</p>
        <div class="flex w-full justify-end mr-10 underline underline-offset-4">
            <a class="text-end italic -translate-y-3 cursor-pointer">Læs mere..</a>
        </div>
    </div>
  </NuxtLink>
  
</div>

   <div class="flex w-full relative mt-36 gap-10 2xl:gap-40 justify-center">
    <figure class="h-[220px] min-h-[200px] respons w-[200px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-[135px]"></figure>
    <img src="https://i.ibb.co/7vKgPkz/Billede-2-ydelser.jpg" alt="" class= "max-h-[520px] rounded-md z-50 shadow-2xl">
    <article class="w-[40%] flex flex-col gap-5 -translate-y-5">
<h2 class="">Gennemsigtighed og overblik er nøglebegreber</h2>
<p>Jeres indkøbsaftaler bør være så gennemsigtige som muligt. Ved at analysere aftalerne og deres flow i den samlede livscyklus, finder vi de punkter som bør revurderes, genforhandles og forbedres således, at alle aftaler bliver reelle og optimale – tilpasset jeres behov.
</p>
    </article>
  </div>
  <div class="flex w-full relative mt-36 gap-10 2xl:gap-24 justify-center">
   
    <article class="w-[40%] flex flex-col gap-5 -translate-y-5">
<h2 class="">Konstruktive dialoger sikrer kvalitet og pris</h2>
<p>IKR tager den konstruktive dialog med leverandørerne for at sikre den aftalte kvalitet og pris. Aftaler som skal opsiges eller forlænges identificeres og varetages, så dyre og ufordelagtige aftaleforlængelser undgås og unødvendige omkostninger skæres væk. 
</p>
    </article>
    <img src="https://i.ibb.co/y0T5FtG/Ydelser-NYT-foto-1.jpg" alt="" class= "max-h-[400px] rounded-md z-50 shadow-2xl">
  </div>

  <YdelserBund />
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

.card {
    height:400px;
    width: 350px;
    min-width: 350px;
    background-color: #256c2b;
    margin-top: 90px;
    border-radius: 3px;
}

.cardfont{
    font-size:22px
}

.overskrift-underline {
    position: relative;
}

.overskrift-underline::before {
    content: '';
    position: absolute;
    width:260px;
    height:3px;
    background-color: white;
    bottom: 0;
    font-weight: 600px;
    transform:translatey(3px) translatex(-4px);

}
</style>