<template>
    <FaqHero />
  <section class="bar-sections">
<h4 class="mmd-text"> FAQ <span class="text-[#256c2b]">:</span></h4>

<div class="bar"  id="bar1">
    <div @click="toggleBar('bar1')" class="flex justify-center items-center translate-y-3">
      <h3 class="header">ANALYSER<br> <span  style="font-size: 16px;"> ▼ </span></h3>
    </div>
  <div  class="content" >
    <div class="bar-flex">

      <div class="baranalyser"  id="bar1.1">
            <h6 class="header"  @click="toggleBar('bar1.1')"><strong class="text-[35px]">+</strong> Hvad er en strategisk analyse?</h6>
       <div class="content"  @click="toggleBar('bar1.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">IKR udfører forskellige typer af indkøbsanalyser, hvor vi prioriterer validitet for at sikre, at analyserne leder til fremtidige besparelser og handlingsplaner. <br>
Analysen tager højde for flere forskellige faktorer, såsom hvor ofte en bestemt type produkt eller tjeneste købes, mængden af varer eller tjenester, der købes på en given tid, de samlede omkostninger ved indkøb af varer eller tjenester, evaluering af leverandørernes priser, leveringstider, kvalitet af produkter og tjenester og deres generelle performance og feedback fra medarbejdere eller kunder, som kan bruges til at evaluere produktkvalitet, kundetilfredshed og andre faktorer.

         </p>
        </div>
       </div>
     </div>

     <div class="baranalyser baranalyser2" id="bar1.2">
            <h6 class="header" @click="toggleBar('bar1.2')"><strong class="text-[35px]">+</strong> Hvad er økonomisk råderums analyse?</h6>
       <div class="content" @click="toggleBar('bar1.2')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Indkøbsanalyser kan hjælpe Kunden med at træffe mere informerede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i deres indkøbsprocesser og opnå bedre kontrol over deres omkostninger. Hermed lægges bunden for at opnå øget økonomisk råderum.
         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser baranalyser3" id="bar1.3">
            <h6 class="header" @click="toggleBar('bar1.3')"><strong class="text-[35px]">+</strong> Hvad er en for analyse?</h6>
       <div class="content" @click="toggleBar('bar1.3')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Foranalysen ligger før den reelle projektstart. IKR afdækker hvilke muligheder og potentiale der er for et kommende projekt. Foranalysen tager udgangspunkt i en konkret problemstilling hvor Kunden ønsker at vurdere omfanget af opgaven. Formålet med foranalysen er, at identificere muligheder for at reducere omkostningerne og forbedre effektiviteten i forsyningskæden eller andre operationelle processer.
         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser baranalyser4" id="bar1.4">
            <h6 class="header" @click="toggleBar('bar1.4')"><strong class="text-[35px]">+</strong> Hvad er en spend analyse?</h6>
       <div class="content" @click="toggleBar('bar1.4')">
        <div class="bar-flex2">
         <p class="bar-lille-text">En spend analyse er en metode til at analysere Kundens udgifter og forbrugsmønstre.
Det involverer indsamling af data om Kundens indkøb og udgifter, og derefter analysering af disse data for at identificere muligheder for omkostnings-besparelser og optimering af forsyningskæden.

En grundig spend analyse kan give Kunden et solidt grundlag for at træffe informerede beslutninger om, hvordan de kan optimere deres udgifter og forsyningskæde. Spend analysen kan også hjælpe med at identificere risici i forsyningskæden, for eksempel ved at identificere leverandører, der er særligt sårbare over for forstyrrelser.
         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser5 baranalyser " id="bar1.5">
            <h6 class="header" @click="toggleBar('bar1.5')"><strong class="text-[35px]">+</strong> Hvad er en indkøbs analyse?</h6>
       <div class="content" @click="toggleBar('bar1.5')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Indkøbsanalyser hjælper Kunderne med at træffe mere informerede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i indkøbsprocesserne og opnå bedre kontrol over omkostninger.
         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser6 baranalyser " id="bar1.6">
            <h6 class="header" @click="toggleBar('bar1.6')"><strong class="text-[35px]">+</strong> Hvad er en optimerings analyse?</h6>
       <div class="content" @click="toggleBar('bar1.6')">
        <div class="bar-flex2">
         <p class="bar-lille-text -translate-y-10">Optimeringsanalysen har til formål at belyse hvilke områder, hvor der er potentiale for at kunne optimere. Optimeringen kan både være i forhold til at sikre optimale priser via konkurrenceudsættelse eller være optimering inden for allerede indgåede aftaler. Optimering kan tage udgangspunkt i ændring af processer eller vilkår i kontrakten som giver en bedre anvendelse af ressourcer.
<br>
<span class="text-[16px] leading-[20px]">
I optimeringsanalysen kigger vi på:
<br>
•	Hvordan er Kunden i dag aftaledækket? <br>
•	Matcher aftaledækningen Kundens behov?<br>
•	Anvendes aftalen som tiltænkt?<br>
•	I hvilken grad anvendes aftalerne?<br>
•	Hvilke potentialer er der i de områder som ikke er aftaledækket?<br>
•	Hvilke områder kan vi i dag optimere for at frigive ressourcer?<br>
</span>
         </p>
        </div>
       </div> 
      </div>

   </div>
  </div>
</div>

<div class="bar" id="bar2">
      <h3 class="header translate-y-3" @click="toggleBar('bar2')">LEVERANDØRER & KONTRAKTER<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      <div class="baranalyser" id="bar7">
            <h6 class="header" @click="toggleBar('bar2.1')"><strong class="text-[35px]">+</strong> Hvad er en strategisk analyse?</h6>
       <div class="content" @click="toggleBar('bar2.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Indkøbsanalyser kan hjælpe Kunden med at træffe mere informerede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i deres indkøbsprocesser og opnå bedre kontrol over deres omkostninger. Hermed lægges bunden for at opnå øget økonomisk råderum.
         </p>
        </div>
       </div>
     </div>
   </div>
  </div>
</div>

<div class="bar" id="bar3">
      <h3 class="header translate-y-3 " @click="toggleBar('bar3')">ØGET ØKONOMISK RÅDERUM<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      <div class="baranalyser" id="bar3.1">
            <h6 class="header" @click="toggleBar('bar3.1')"><strong class="text-[35px]">+</strong> Hvad er en strategisk analyse?</h6>
       <div class="content" @click="toggleBar('bar3.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Indkøbsanalyser kan hjælpe Kunden med at træffe mere informerede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i deres indkøbsprocesser og opnå bedre kontrol over deres omkostninger. Hermed lægges bunden for at opnå øget økonomisk råderum.
         </p>
        </div>
       </div>
     </div>
   </div>
  </div>
</div>

<div class="bar" id="bar4">
      <h3 class="header translate-y-3" @click="toggleBar('bar4')">DRIFT & CONTROLLING<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      <div class="baranalyser" id="bar4.1">
            <h6 class="header" @click="toggleBar('bar4.1')"><strong class="text-[35px]">+</strong> Hvad er en strategisk analyse?</h6>
       <div class="content" @click="toggleBar('bar4.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Indkøbsanalyser kan hjælpe Kunden med at træffe mere informerede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i deres indkøbsprocesser og opnå bedre kontrol over deres omkostninger. Hermed lægges bunden for at opnå øget økonomisk råderum.
         </p>
        </div>
       </div>
     </div>
   </div>
  </div>
</div>

<div class="bar" id="bar5">
      <h3 class="header translate-y-3" @click="toggleBar('bar5')">INDKØB & UDBUD<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">

      <div class="baranalyser" id="bar5.1">
            <h6 class="header" @click="toggleBar('bar5.1')"><strong class="text-[35px]">+</strong> Hvad er en strategisk analyse?</h6>
       <div class="content" @click="toggleBar('bar5.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">IKR udfører forskellige typer af indkøbsanalyser, hvor vi prioriterer validitet for at sikre, at analyserne leder til fremtidige besparelser og handlingsplaner.
Analysen tager højde for flere forskellige faktorer, såsom hvor ofte en bestemt type produkt eller tjeneste købes, mængden af varer eller tjenester, der købes på en given tid, de samlede omkostninger ved indkøb af varer eller tjenester, evaluering af leverandørernes priser, leveringstider, kvalitet af produkter og tjenester og deres generelle performance og feedback fra medarbejdere eller kunder, som kan bruges til at evaluere produktkvalitet, kundetilfredshed og andre faktorer.

         </p>
        </div>
       </div> 
      </div>
   </div>
  </div>
</div>

</section>
</template>

<script>

export default {
  methods: {
    toggleBar(barId) {
      const bar = document.getElementById(barId);
      if (bar) {
        bar.classList.toggle('active');
      } else {
        console.error(`Element with id ${barId} not found.`);
      }
    },
  },
};

</script>

<style>


.bar-sections {
display: flex;
flex-direction: column;
gap: 40px;
margin: 100px 0 100px 0;
width: 100%;
align-items: center;
}

@media screen and (max-width: 767px) {

  .bar-sections {
    margin: 600px 0 200px 0;
   }
}

.mmd-text {
  font-size: 80px;
}

@media screen and (max-width: 767px) {

  .mmd-text {
    font-size: 31px;
    max-width: 388px;
    text-align: center;
  }
}

 

.bar {
  width: 50%;
  height: 80px;
  background-color: #0a3700;
  color: white;
  cursor: pointer;
  transition: height 0.5s ease;
  overflow: hidden;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  line-height: 20px;
  
}

.baranalyser {
  width: 70%;
  height: 45px;
  background-color: #256c2b;
  color: white;
  cursor: pointer;
  transition: height 0.5s ease;
  overflow: hidden;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  line-height: 20px;
}

.header {
  padding: 10px;
  text-align: center;
  font-size: 30px;
}


.content {
  display: none;
  padding: 10px;
  text-align: center;
  height: 100%;
  font-size: 20px;
}

.bar-flex {
  display: flex; 
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;
  align-items: center;
}

.bar-flex2 {
  display: flex; 
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  margin-top: 50px;
}

.bar.active {
  height: auto; /* Adjust the height as needed */
  padding-bottom: 50px;
  width: 80%;
}

.baranalyser.active {
  height: 550px; /* Adjust the height as needed */
}

.baranalyser2.active {
  height: 340px; /* Adjust the height as needed */
}

.baranalyser3.active {
  height: 450px; /* Adjust the height as needed */
}

.baranalyser4.active {
  height: 550px; /* Adjust the height as needed */
}

.baranalyser5.active {
  height: 320px; /* Adjust the height as needed */
}

.baranalyser6.active {
  height: 590px; /* Adjust the height as needed */
}

.bar.active .content {
  display: block;
}

.baranalyser.active .content {
  display: block;
}

.bar-img {
  background-size: contain;
  width: 25%;
  border-radius: 10px;
  height: 300px;
}

.bar-img-3 {
  background-size: contain;
  border-radius: 10px;
  height: 200px;
}

.bar-lille-text {
    text-align: start;
    line-height: 34px;
    width: 90%;
}

.bar-flex-text {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width:40%;
  height: 70%;
  text-align: start;
  transform: translatey(-100px);
}

@media screen and (max-width: 767px) {

  .bar-flex-text{
    width: 95%;
    transform: translatey(-130px);
  }
}


@media screen and (max-width: 767px) {
  .bar-lille-text {
   font-size: 16px;
  }
}
 

</style>