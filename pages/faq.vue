<template>
    <FaqHero />
  <section class="bar-sections relative z-40">
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-6 z-0"></figure>
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-20 z-0"></figure>
<h4 class="mmd-text"> FAQ </h4>

<div class="bar z-50"  id="bar1">
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
            <h6 class="header" @click="toggleBar('bar1.2')"><strong class="text-[35px]">+</strong> Hvad er økonomisk råderumsanalyse?</h6>
       <div class="content" @click="toggleBar('bar1.2')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Indkøbsanalyser kan hjælpe Kunden med at træffe mere informerede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i deres indkøbsprocesser og opnå bedre kontrol over deres omkostninger. Hermed lægges bunden for at opnå øget økonomisk råderum.
         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser baranalyser3" id="bar1.3">
            <h6 class="header" @click="toggleBar('bar1.3')"><strong class="text-[35px]">+</strong> Hvad er en foranalyse?</h6>
       <div class="content" @click="toggleBar('bar1.3')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Foranalysen ligger før den reelle projektstart. IKR afdækker hvilke muligheder og potentiale der er for et kommende projekt. Foranalysen tager udgangspunkt i en konkret problemstilling hvor Kunden ønsker at vurdere omfanget af opgaven. Formålet med foranalysen er, at identificere muligheder for at reducere omkostningerne og forbedre effektiviteten i forsyningskæden eller andre operationelle processer.
         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser baranalyser4" id="bar1.4">
            <h6 class="header" @click="toggleBar('bar1.4')"><strong class="text-[35px]">+</strong> Hvad er en spendanalyse?</h6>
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
            <h6 class="header" @click="toggleBar('bar1.5')"><strong class="text-[35px]">+</strong> Hvad er en indkøbsanalyse?</h6>
       <div class="content" @click="toggleBar('bar1.5')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Indkøbsanalyser hjælper Kunderne med at træffe mere informerede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i indkøbsprocesserne og opnå bedre kontrol over omkostninger.
         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser6 baranalyser " id="bar1.6">
            <h6 class="header" @click="toggleBar('bar1.6')"><strong class="text-[35px]">+</strong> Hvad er en optimeringsanalyse?</h6>
       <div class="content" @click="toggleBar('bar1.6')">
        <div class="bar-flex2">
         <p class="bar-lille-text -translate-y-10">Optimeringsanalysen har til formål at belyse hvilke områder, hvor der er potentiale for at kunne optimere. Optimeringen kan både være i forhold til at sikre optimale priser via konkurrenceudsættelse eller være optimering inden for allerede indgåede aftaler. Optimering kan tage udgangspunkt i ændring af processer eller vilkår i kontrakten som giver en bedre anvendelse af ressourcer.
<br>
<span class="text-[20px] leading-[20px]">
I optimeringsanalysen kigger vi på:
<br> <br>
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

<div class="bar z-50" id="bar2">
      <h3 class="header translate-y-3" @click="toggleBar('bar2')">LEVERANDØRER & KONTRAKTER<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      <div class="baranalyser baranalyser7" id="bar2.1">
            <h6 class="header" @click="toggleBar('bar2.1')"><strong class="text-[35px]">+</strong> Hvad er kontraktstyring?</h6>
       <div class="content" @click="toggleBar('bar2.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Få kontrol over jeres kontrakter, aftaler og økonomiske forpligtigelser. Ved at have kontrol over jeres aftaler er der penge at spare. I får indsigt og står bedre i forhold til forhandlinger med leverandørerne fremadrettet. Hertil sikre I jer at I har tidssvarende aftale og betaler for det I har brug for.
          leverandørerne fremadrettet. Hertil sikre I jer at I har tidssvarende aftale og betaler for det I har brug for.
          <br><br>
          <span class="text-[20px] leading-[20px]">
•	Hvad er opsigelsesperioden?<br>
•	Forlænges kontrakten automatisk?<br>
•	Bliver der automatisk lagt ekstra gebyr på aftalen?<br>
•	Har jeres businesscase ændret sig over tid?<br>
•	Lever jeres aftale forsat op til lovkravene?<br>
•	Hvornår kan I kræve bod?<br>
</span><br>
Vi oplever at rigtig mange af vores kunder ikke har det fulde overblik over deres kontrakter og øvrige økonomiske forpligtigelser.
 <br>Ofte er kontrakter løbende blevet indgået decentralt eller medarbejder som havde overblikket har fået et andet job.
Desværre bliver rigtig mange faktura betalt fordi det er en leverandør som kunden plejer at betale løbende til. <br>
Vi starter med at gennemgå de kontrakter I har og derefter kigger vi jeres faktura data igennem i forhold til at identificere øvrige forhold der skal undersøges.
Vores erfaring er at vi i gennemsnit får udleveret 20 kontrakter, men at vi, uanset Kundens størrelse, finder omkring 100 aktive kontrakter eller gentagende økonomiske forpligtigelser.  
<br>Vi tilbyder ligeledes en digitalisering af jeres kontrakter via vores kontraktstyringssystem Contractpedia. <br> <br> Se mere information omkring Contractpedia her.<a href="https://www.contractpedia.com/"> https://www.contractpedia.com/</a>

         </p>
        </div>
       </div>
     </div>

     <div class="baranalyser baranalyser8"  id="bar2.2">
            <h6 class="header"  @click="toggleBar('bar2.2')"><strong class="text-[35px]">+</strong> Hvad er overblik over kontrakter?</h6>
       <div class="content"  @click="toggleBar('bar2.2')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Tekst kommer..

         </p>
        </div>
       </div>
     </div>

     <div class="baranalyser baranalyser9"  id="bar2.3">
            <h6 class="header"  @click="toggleBar('bar2.3')"><strong class="text-[35px]">+</strong> Hvad er leverandør styring ?</h6>
       <div class="content"  @click="toggleBar('bar2.3')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Vi sikrer gennemsigtighed i leverandørforholdet.  Inden for indkøb er der to niveauer af compliance:
<br><br>
Compliance 1:
Køber vi de aftalte varer eller tjenesteydelserne hos den aftalte leverandører?
<br><br>
Compliance 2:
Køber vi så de konkrete varer og tjenesteydelser hos de leverandører, vi har en aftale med?
<br><br>
Vi ser ofte at Kunden køber den rigtige kategori af varer eller tjenesteydelser hos den rigtige leverandører og at det derfor ser ud til at aftalen anvendes optimalt. Dette er compliance 1 niveauet.
<br><br>
I den dybdegående controlling går vi ned på varelinjeniveau. Her ser vi på om det er den aftalte varer eller ydelse som er købt hos den leverandør som Kunden har en aftale med.  Controlling af aftaleoverholdelse på varelinjeniveau er compliance 2 niveauet.
<br><br>
Vi har lavet analyser for Kunder hvor deres complience 1 niveau lå omkring 80 procent. Dermed køber Kunden varer og tjenesteydelser hos de leverandører de havde en aftale med. 
Når analysen gik ned i complience 2 niveauet og analyserede, om de så faktisk var de varer og tjenesteydelser som Kunden havde en aftale med leverandøren om, der blev indkøbt, faldt complience 2 niveauet til 30 procent. 
<br><br>Konklusionen er, at Kunden købte varerne hos den rigtige leverandør, men Kunden købte ikke de rigtige varer hos den rigtige leverandør.
Ved at sikre at Kunden fremadrettet køber de rigtige varer og tjenesteydelser hos den rigtige leverandør opnås besparelser.


         </p>
        </div>
       </div>
     </div>



   </div>
  </div>
</div>

<div class="bar z-50" id="bar3">
      <h3 class="header translate-y-3 " @click="toggleBar('bar3')">ØGET ØKONOMISK RÅDERUM<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      <div class="baranalyser baranalyser10" id="bar3.1">
            <h6 class="header" @click="toggleBar('bar3.1')"><strong class="text-[35px]">+</strong> Hvad er besparelsespotentialet ?</h6>
       <div class="content" @click="toggleBar('bar3.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Vi vil gerne anvise et besparelsespotentiale, men vi vil også gerne sikre, at Kunden opnår potentiel besparelse. <br><br>

Identifikation af områder med potentiale: Hos IKR tilbydes Kunden en omfattende analyse på områder, hvor der er mulighed for besparelser eller optimeringer. IKR indleder med at analysere udgifterne og identificere områder med høje eller stigende omkostninger og vurderer derefter leverandørkontrakterne for muligheder for besparelser. Ved at udføre denne grundige analyse kan vi hjælpe Kunden med at finde de bedste muligheder for at optimere udgifter og opnå de ønskede resultater på en omkostningseffektiv måde. . <br><br>
Benchmark: Hos IKR hjælper vi vores kunder med at fastlægge et benchmark eller en standard for sammenligning af deres nuværende udgifter med en ønsket eller optimal tilstand. Dette kan omfatte forskellige prisfastsættelsesstandarder, gennemsnitlige markedspriser eller benchmarking mod konkurrenter. Vi mener, at ved at fastlægge et benchmark kan vores kunder få en bedre forståelse af deres nuværende udgifter og identificere muligheder for at reducere omkostningerne og forbedre konkurrenceevnen. . <br><br>
Beregning af besparelsespotentiale: Hos IKR hjælper vi Kunden med at beregne besparelsespotentialet, når der er fastlagt et benchmark eller en standard for sammenligning af nuværende udgifter med en ønsket eller optimal tilstand. Dette indebærer typisk at identificere områder, hvor der er mulighed for at reducere omkostninger, f.eks. ved at forhandle bedre priser med leverandører, ved at konsolidere indkøb på tværs af afdelinger eller ved at optimere lagerbeholdningen. 

         </p>
        </div>
       </div>
     </div>

     <div class="baranalyser baranalyser8"  id="bar3.2">
            <h6 class="header"  @click="toggleBar('bar3.2')"><strong class="text-[35px]">+</strong> Hvad er besparelsesberegninger?</h6>
       <div class="content"  @click="toggleBar('bar3.2')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Tekst kommer..
         </p>
        </div>
       </div>
     </div>

     <div class="baranalyser baranalyser8"  id="bar3.3">
            <h6 class="header"  @click="toggleBar('bar3.3')"><strong class="text-[35px]">+</strong> Hvad er økonomisk råderum?</h6>
       <div class="content"  @click="toggleBar('bar3.3')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Tekst kommer..
         </p>
        </div>
       </div>
     </div>

   </div>
  </div>
</div>

<div class="bar z-50" id="bar4">
      <h3 class="header translate-y-3" @click="toggleBar('bar4')">DRIFT & CONTROLLING<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      
      <div class="baranalyser baranalyser8" id="bar4.1">
    <h6 class="header" @click="toggleBar('bar4.1')"><strong class="text-[35px]">+</strong> Hvad er driftsstyrring af kopi og print?</h6>
    <div class="content" @click="toggleBar('bar4.1')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.2">
    <h6 class="header" @click="toggleBar('bar4.2')"><strong class="text-[35px]">+</strong> Hvad er driftsstyring af vare- og tjenesteydelser?</h6>
    <div class="content" @click="toggleBar('bar4.2')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.3">
    <h6 class="header" @click="toggleBar('bar4.3')"><strong class="text-[35px]">+</strong> Hvad er driftsstyrring af fødevare, forbrugsvare og biler?</h6>
    <div class="content" @click="toggleBar('bar4.3')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.4">
    <h6 class="header" @click="toggleBar('bar4.4')"><strong class="text-[35px]">+</strong> Hvad er dybdegående controlling?</h6>
    <div class="content" @click="toggleBar('bar4.4')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.5">
    <h6 class="header" @click="toggleBar('bar4.5')"><strong class="text-[35px]">+</strong> Hvad er klassisk controlling?</h6>
    <div class="content" @click="toggleBar('bar4.5')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.6">
    <h6 class="header" @click="toggleBar('bar4.6')"><strong class="text-[35px]">+</strong> Hvad er controlling af e-handelsportaler – e-indkøbsportal?</h6>
    <div class="content" @click="toggleBar('bar4.6')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.7">
    <h6 class="header" @click="toggleBar('bar4.7')"><strong class="text-[35px]">+</strong> Hvad er controlling af kontrakter – aftaler?</h6>
    <div class="content" @click="toggleBar('bar4.7')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.8">
    <h6 class="header" @click="toggleBar('bar4.8')"><strong class="text-[35px]">+</strong> Hvad er controlling af indkøbsadfærd?</h6>
    <div class="content" @click="toggleBar('bar4.8')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.9">
    <h6 class="header" @click="toggleBar('bar4.9')"><strong class="text-[35px]">+</strong> Hvad betyder samarbejdspartner?</h6>
    <div class="content" @click="toggleBar('bar4.9')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar4.10">
    <h6 class="header" @click="toggleBar('bar4.10')"><strong class="text-[35px]">+</strong> Hvad er samarbejde med IKR?</h6>
    <div class="content" @click="toggleBar('bar4.10')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

   </div>
  </div>
</div>

<div class="bar z-50" id="bar5">
      <h3 class="header translate-y-3" @click="toggleBar('bar5')">INDKØB & UDBUD<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">

      <div class="baranalyser baranalyser8" id="bar5.1">
    <h6 class="header" @click="toggleBar('bar5.1')"><strong class="text-[35px]">+</strong> Hvad er Indkøbsoptimering?</h6>
    <div class="content" @click="toggleBar('bar5.1')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.2">
    <h6 class="header" @click="toggleBar('bar5.2')"><strong class="text-[35px]">+</strong> Hvad er udbud – EU udbud og konkurrenceudsættelse?</h6>
    <div class="content" @click="toggleBar('bar5.2')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.3">
    <h6 class="header" @click="toggleBar('bar5.3')"><strong class="text-[35px]">+</strong> Hvad er kategoristyring?</h6>
    <div class="content" @click="toggleBar('bar5.3')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.4">
    <h6 class="header" @click="toggleBar('bar5.4')"><strong class="text-[35px]">+</strong> Hvad er implementering af indkøbsoptimering?</h6>
    <div class="content" @click="toggleBar('bar5.4')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.5">
    <h6 class="header" @click="toggleBar('bar5.5')"><strong class="text-[35px]">+</strong> Hvad er SKI aftaler?</h6>
    <div class="content" @click="toggleBar('bar5.5')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.6">
    <h6 class="header" @click="toggleBar('bar5.6')"><strong class="text-[35px]">+</strong> Hvad er et driftscenter?</h6>
    <div class="content" @click="toggleBar('bar5.6')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.7">
    <h6 class="header" @click="toggleBar('bar5.7')"><strong class="text-[35px]">+</strong> Hvad betyder outsourcing af indkøb?</h6>
    <div class="content" @click="toggleBar('bar5.7')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.8">
    <h6 class="header" @click="toggleBar('bar5.8')"><strong class="text-[35px]">+</strong> Indkøbsorganisation</h6>
    <div class="content" @click="toggleBar('bar5.8')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.9">
    <h6 class="header" @click="toggleBar('bar5.9')"><strong class="text-[35px]">+</strong> Indkøbsorganisering</h6>
    <div class="content" @click="toggleBar('bar5.9')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.10">
    <h6 class="header" @click="toggleBar('bar5.10')"><strong class="text-[35px]">+</strong> Indkøbspolitik</h6>
    <div class="content" @click="toggleBar('bar5.10')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.11">
    <h6 class="header" @click="toggleBar('bar5.11')"><strong class="text-[35px]">+</strong> Indkøbsstrategi</h6>
    <div class="content" @click="toggleBar('bar5.11')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.12">
    <h6 class="header" @click="toggleBar('bar5.12')"><strong class="text-[35px]">+</strong> indkøbsplan</h6>
    <div class="content" @click="toggleBar('bar5.12')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.13">
    <h6 class="header" @click="toggleBar('bar5.13')"><strong class="text-[35px]">+</strong> udbudsplan (udbudskrav og udbudskriterier)</h6>
    <div class="content" @click="toggleBar('bar5.13')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.14">
    <h6 class="header" @click="toggleBar('bar5.14')"><strong class="text-[35px]">+</strong> Digital transformation (arbejdsgange)</h6>
    <div class="content" @click="toggleBar('bar5.14')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.15">
    <h6 class="header" @click="toggleBar('bar5.15')"><strong class="text-[35px]">+</strong> Grøn indkøb</h6>
    <div class="content" @click="toggleBar('bar5.15')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser8" id="bar5.16">
    <h6 class="header" @click="toggleBar('bar5.16')"><strong class="text-[35px]">+</strong> Kontrakt Management (Contrackt Management)</h6>
    <div class="content" @click="toggleBar('bar5.16')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
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

.baranalyser7.active {
  height: 1200px; /* Adjust the height as needed */
}

.baranalyser9.active {
  height: 1160px; /* Adjust the height as needed */
}

.baranalyser10.active {
  height: 1120px; /* Adjust the height as needed */
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