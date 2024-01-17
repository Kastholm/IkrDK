<template>
<main class="flex flex-col justify-center">
 <ForsideHero />
<section>
 <div class="flex flex-col h-[400px] w-full gap-5 justify-center items-center sm:mt-20 mt-60 relative sm:mb-0 mb-44">
    <figure class="h-[300px] min-h-[300px] respons-mobil w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-6"></figure>
    <figure class="h-[300px] min-h-[300px] respons-mobil w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-20"></figure>
    <div class="max-w-[72%] sm:max-w-[60%] kommentar relative">
     <h2 class=" sm:max-w-[88%] "> I opnår øget økonomisk råderum fordi I får et konkret helhedsbillede at styre efter.</h2>
    </div>
    <p class=" max-w-[60%]">Overblik giver styrke til at opnå forandring. Med falkeblik kan du fokusere i det store perspektiv og være med til at finde nye veje og løsninger i en foranderlig verden.</p>
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
</section>

<ForsideBund />
<LogoKarrusel class="translate-y-20 border-t-[#2c2c2c] border-[0px] border-b-[#2c2c2c]" />
<div></div>
</main>

</template>

<script>


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

.kommentar::before {
    content: '';
    position: absolute;
    background-image: url('https://i.ibb.co/3ftYYW3/G-se-jne-260px.png');
    background-size: contain;
    transform: translatey(-65px) translatex(-10px);
    font-size: 40px;
    height: 60px;
    width: 60px;

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

.clip2 {
    clip-path: polygon(0 51%, 100% 0, 100% 51%, 0% 100%);
}

.clip4 {
    clip-path: polygon(0 35%, 63% 0, 63% 65%, 0 100%);
}

@media only screen and (max-width: 767px) {
  
  .respons-mobil {
    display: none;
  }
}

.card {
    height:400px;
    width: 350px;
    min-width: 350px;
    background-color: #256c2b;
    margin-top: 90px;
    border-radius: 3px;
}
</style>

