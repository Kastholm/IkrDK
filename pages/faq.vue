<template>
    <FaqHero />
  <section class="bar-sections relative z-20">
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#919995] clip4 absolute left-0 top-0 sm:-translate-y-6 z-0"></figure>
    <figure class="h-[300px] min-h-[300px] respons w-[250px] bg-[#2c2c2c] clip2 absolute right-0 bottom-0 sm:translate-y-20 translate-y-40 z-0"></figure>
<h4 class="mmd-text"> FAQ </h4>

<div class="bar z-20"  id="bar1">
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
         <p class="bar-lille-text">I IKR bruger vi begrebet økonomisk råderumsanalyse som et ”paraply begreb”. Dette ift. at kunder, virksomheder og organisationer, via de besparelser, de kan gøre indenfor indkøb af vare- og tjenesteydelser, naturligt kan bruges på andre ting eller forhold som organisationen finder nødvendig. Med andre ord, hvis det ved køb er muligt at købe ”det samme”, i rette kvalitet, så ser IKR ingen relationelle grunde til, at betale det mere. Pengene gøres derved frit disponibel for virksomheden. <br><br>

Formålet er at identificere de faktorer, der kan påvirke virksomhedens økonomiske handlefrihed – indenfor indkøb af vare- og tjenesteydelser. <br><br>

Råderumsanalysen er nyttig for ledelsen, da den giver et helhedsbillede af organisatoriske forhold og hjælper med at træffe fakta baseret beslutninger. 
 

         </p>
        </div>
       </div> 
      </div>

      <div class="baranalyser5 baranalyser " id="bar1.5">
            <h6 class="header" @click="toggleBar('bar1.5')"><strong class="text-[35px]">+</strong> Hvad er en indkøbsanalyse?</h6>
       <div class="content" @click="toggleBar('bar1.5')">
        <div class="bar-flex2">
         <p class="bar-lille-text">En veludført indkøbsanalyse kan hjælpe kunden/virksomheder med at identificere muligheder for omkostningsreduktion, forbedre samarbejdet med leverandører og øge effektiviteten i hele indkøbsprocessen.  <br><br>

Kunden/virksomheden kan dermed træffe mere faktabaserede beslutninger om indkøb, identificere potentielle besparelser og forbedringer i indkøbsprocesserne og opnå bedre kontrol over omkostninger.

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

      <div class="baranalyser6 baranalyser " id="bar1.6">
            <h6 class="header" @click="toggleBar('bar1.6')"><strong class="text-[35px]">+</strong> Hvad er en optimeringsanalyse?</h6>
       <div class="content" @click="toggleBar('bar1.6')">
        <div class="bar-flex2">
         <p class="bar-lille-text -translate-y-10 sm:mt-0 mt-10">Optimeringsanalysen har til formål at belyse hvilke områder, hvor der er potentiale for at kunne optimere. Optimeringen kan både være i forhold til at sikre optimale priser via konkurrenceudsættelse eller være optimering inden for allerede indgåede aftaler. Optimering kan tage udgangspunkt i ændring af processer eller vilkår i kontrakten som giver en bedre anvendelse af ressourcer.
<br>
<span class="sm:text-[20px] text-[13px] sm:leading-[20px] leading-[17px]">
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

<div class="bar z-20" id="bar2">
      <h3 class="header translate-y-3" @click="toggleBar('bar2')">LEVERANDØRER & KONTRAKTER<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">

      <div class="baranalyser baranalyser33" id="bar5.16">
    <h6 class="header" @click="toggleBar('bar5.16')"><strong class="text-[35px]">+</strong> Hvad er Kontrakt Management?</h6>
    <div class="content" @click="toggleBar('bar5.16')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Effektiv kontraktstyring bidrager til at sikre, at organisationen får den forventede værdi ud af sine kontrakter og minimerer risikoen for konflikter og tvister. Det er særlig vigtigt i komplekse forretningsmiljøer, hvor flere kontrakter og forpligtelser skal administreres samtidigt. For mange organisationer er brugen af specialiserede kontraktstyringsværktøjer en afgørende del af processen for at automatisere og organisere kontrakthåndteringen.
<br><br>
Nøgleaktiviteter inden for kontraktstyring inkluderer:
<br><br>
1.   Kontraktudarbejdelse: <br>Oprettelse og udformning af kontrakten, der klart specificerer alle vilkår, betingelser, leverancer, tidsfrister og andre relevante oplysninger.
<br><br>
2.   Forhandling: <br>Forhandling af kontraktens vilkår med den anden kontraktpart for at sikre gensidig accept og forståelse.
<br><br>
3.   Godkendelse: <br>Indhentning af de nødvendige godkendelser og underskrifter fra relevante interessenter inden kontrakten træder i kraft.
<br><br>
4.   Implementering: <br>Igangsættelse af alle aktiviteter, der er nødvendige for at opfylde kontraktens betingelser og krav.
<br><br>
5.   Overvågning og Rapportering: <br>Kontinuerlig overvågning af kontraktens gennemførelse, evaluering af ydeevne og rapportering af resultater og eventuelle afvigelser fra kontrakten.
<br><br>
6.   Risikostyring: <br>Identifikation og håndtering af potentielle risici i løbet af kontraktperioden for at minimere negative konsekvenser.
<br><br>
7.   Ændringsstyring: <br>Håndtering af ændringer i kontrakten, som kan opstå som følge af ændrede krav, omstændigheder eller andre faktorer.
<br><br>
8.   Afslutning: <br>Afslutning af kontrakten ved dens udløb eller som følge af opfyldelse af betingelser, inklusive håndtering af eventuelle resterende forpligtelser eller betalinger.
<br><br>
9.   Dokumentation: <br>Nøjagtig dokumentation af alle kontraktrelaterede aktiviteter, ændringer og kommunikation for at bevare en klar og opdateret kontrakthistorik.
<br><br>
10.   Leverandør- og Interessentstyring: <br>Interaktion med leverandører og interessenter for at opretholde sunde samarbejdsrelationer og håndtere eventuelle kontraktmæssige spørgsmål.
</p>
        </div>
    </div>
</div>

      <div class="baranalyser baranalyser9"  id="bar2.3">
            <h6 class="header"  @click="toggleBar('bar2.3')"><strong class="text-[35px]">+</strong> Hvad er leverandør styring?</h6>
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

      <div class="baranalyser baranalyser7" id="bar2.1">
            <h6 class="header" @click="toggleBar('bar2.1')"><strong class="text-[35px]">+</strong> Hvad er kontraktstyring?</h6>
       <div class="content" @click="toggleBar('bar2.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Få kontrol over jeres kontrakter, aftaler og økonomiske forpligtigelser. Ved at have kontrol over jeres aftaler er der penge at spare. I får indsigt og står bedre i forhold til forhandlinger med leverandørerne fremadrettet. Hertil sikre I jer at I har tidssvarende aftale og betaler for det I har brug for.
          leverandørerne fremadrettet. Hertil sikre I jer at I har tidssvarende aftale og betaler for det I har brug for.
          <br><br>
          <span class="sm:text-[20px] sm:leading-[20px] leading-[17px]">
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

   </div>
  </div>
</div>

<div class="bar z-20" id="bar3">
      <h3 class="header translate-y-3 " @click="toggleBar('bar3')">ØGET ØKONOMISK RÅDERUM<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      <div class="baranalyser baranalyser10" id="bar3.1">
            <h6 class="header" @click="toggleBar('bar3.1')"><strong class="text-[35px]">+</strong> Hvad er besparelsespotentialet ?</h6>
       <div class="content" @click="toggleBar('bar3.1')">
        <div class="bar-flex2">
         <p class="bar-lille-text">Vi vil gerne anvise et besparelsespotentiale, men vi vil også gerne sikre, at Kunden opnår potentiel besparelse. <br><br>

Identifikation af områder med potentiale: Hos IKR tilbydes Kunden en omfattende analyse på områder, hvor der er mulighed for besparelser eller optimeringer. IKR indleder med at analysere udgifterne og identificere områder med høje eller stigende omkostninger og vurderer derefter leverandørkontrakterne for muligheder for besparelser. Ved at udføre denne grundige analyse kan vi hjælpe Kunden med at finde de bedste muligheder for at optimere udgifter og opnå de ønskede resultater på en omkostningseffektiv måde.<br><br>
Benchmark: Hos IKR hjælper vi vores kunder med at fastlægge et benchmark eller en standard for sammenligning af deres nuværende udgifter med en ønsket eller optimal tilstand. Dette kan omfatte forskellige prisfastsættelsesstandarder, gennemsnitlige markedspriser eller benchmarking mod konkurrenter. Vi mener, at ved at fastlægge et benchmark kan vores kunder få en bedre forståelse af deres nuværende udgifter og identificere muligheder for at reducere omkostningerne og forbedre konkurrenceevnen.<br><br>
Beregning af besparelsespotentiale: Hos IKR hjælper vi Kunden med at beregne besparelsespotentialet, når der er fastlagt et benchmark eller en standard for sammenligning af nuværende udgifter med en ønsket eller optimal tilstand. Dette indebærer typisk at identificere områder, hvor der er mulighed for at reducere omkostninger, f.eks. ved at forhandle bedre priser med leverandører, ved at konsolidere indkøb på tværs af afdelinger eller ved at optimere lagerbeholdningen. 

         </p>
        </div>
       </div>
     </div>

     

   </div>
  </div>
</div>

<div class="bar z-20" id="bar4">
      <h3 class="header translate-y-3" @click="toggleBar('bar4')">DRIFT & CONTROLLING<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">
      
      <div class="baranalyser baranalyser8" id="bar4.1">
    <h6 class="header" @click="toggleBar('bar4.1')"><strong class="text-[35px]">+</strong> Hvad er driftsstyrring af kopi og print?</h6>
    <div class="content" @click="toggleBar('bar4.1')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Driftsstyring af kopi og print refererer til styringen og optimeringen af de processer, der er forbundet med kopimaskiner og printere i en organisation. Dette område af driftsstyring fokuserer på at forbedre effektiviteten, reducere omkostninger og øge pålideligheden af kopierings- og printinfrastrukturen. <br><br>

Effektiv driftsstyring af kopi og print er afgørende for at sikre, at organisationen maksimerer effektiviteten og reducerer de samlede omkostninger ved kopiering og udskrivning. <br><br>

Her er nogle vigtige elementer, der indgår i driftsstyring af kopi og print: <br><br>

1.  Udstyrsovervågning:  Implementering af overvågningsværktøjer for at holde styr på kopimaskiners og printeres ydeevne. Dette kan omfatte overvågning af forbrugsstoffer som toner og papir samt detektering af fejl og driftsproblemer.
<br><br>
2.  Ressourceallokering:  Effektiv styring af ressourcer som papir, blæk eller toner for at undgå spild og sikre, at der altid er tilstrækkelige forsyninger.
<br><br>
3.   Brugerstyring:  Implementering af systemer til styring af brugerrettigheder og adgang til kopimaskiner og printere. Dette kan omfatte begrænsning af adgangen til farveprint, dobbeltsidet udskrivning og andre funktioner.
<br><br>
4.   Omkostningsstyring:  Overvågning og kontrol af omkostningerne ved kopiering og udskrivning. Dette kan omfatte kvantificering af udskriftsforbrug, beregning af omkostninger pr. side og implementering af politikker for omkostningsbesparelser.
<br><br>
5.   Miljøvenlige initiativer: Implementering af grønne og bæredygtige praksisser, såsom dobbeltsidet udskrivning, valg af miljøvenlige materialer og reduktion af energiforbruget.
<br><br>
6.   Automatisering:  Brug af automatisering for at forenkle og strømline kopierings- og udskrivningsprocesserne. Dette kan omfatte automatiske opgaver som påfyldning af toner, fjernovervågning af udstyret og automatisk fakturering.
<br><br>
7.   Sikkerhed:  Implementering af sikkerhedsforanstaltninger for at beskytte fortrolige oplysninger, der udskrives eller kopieres. Dette kan omfatte brugergodkendelse, datakryptering og sikker sletning af midlertidige filer.
<br><br>
8.   Regnskabsføring:  Tracking og rapportering af udskriftsomkostninger på individuel eller afdelingsniveau. Dette kan hjælpe med at identificere områder for omkostningsreduktion eller optimering.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser11" id="bar4.2">
    <h6 class="header" @click="toggleBar('bar4.2')"><strong class="text-[35px]">+</strong> Hvad er driftsstyring af vare- og tjenesteydelser?</h6>
    <div class="content" @click="toggleBar('bar4.2')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Driftsstyring af varer og tjenesteydelser refererer til processen med at planlægge, implementere og optimere de daglige operationer og aktiviteter, der er involveret i levering af produkter og tjenesteydelser. Formålet med driftsstyring er at sikre effektivitet, kvalitet, omkostningskontrol og kundetilfredshed. Dette koncept omfatter en bred vifte af funktioner og opgaver, og nøgleelementerne kan variere afhængigt af typen af virksomhed. <br><br>

Effektiv driftsstyring er afgørende for virksomhedens succes, da det påvirker både omkostninger og kunde-/brugertilfredshed. Det indebærer en konstant evaluering og optimering af processer for at tilpasse sig ændrede markedsforhold og kundekrav.
<br><br>
Her er nogle grundlæggende aspekter af driftsstyring af varer og tjenesteydelser:
<br><br>
1.  Planlægning: Udvikling af strategiske og taktiske planer for, hvordan virksomheden vil levere sine varer og tjenesteydelser. Dette kan omfatte produktionsplanlægning, lagerstyring, personaleplanlægning og andre operationelle aspekter.
<br><br>
2.   Produktion og Levering:   Overvågning og styring af produktionsprocesser for varer eller levering af tjenesteydelser. Dette indebærer ofte koordinering af ressourcer som arbejdskraft, råvarer, teknologi og udstyr.
<br><br>
3.   Kvalitetskontrol:  Implementering af processer og procedurer for at sikre, at både varer og tjenesteydelser opfylder de krævede kvalitetsstandarder. Dette kan omfatte inspektion, tests og evaluering af resultater.
<br><br>
4.   Lagerstyring:  Effektiv håndtering af beholdninger og lagerfaciliteter for at sikre, at der er tilstrækkelige varer til rådighed til at opfylde efterspørgslen uden overflødighed.
<br><br>
5.   Personaleadministration:   Styring af arbejdskraft, inklusive ansættelse, uddannelse og opretholdelse af arbejdsmoral. Dette kan også omfatte implementering af effektive arbejdsprocedurer og sikkerhedsstandarder.
<br><br>
6.   Teknologianvendelse:  Integration og anvendelse af relevant teknologi for at automatisere processer, forbedre effektiviteten og øge nøjagtigheden i levering af varer og tjenesteydelser.
<br><br>
7.   Logistik og Distribution:  Optimering af leveringskæden, herunder transport, lager og distribution af varer eller udførelse af tjenesteydelser.
<br><br>
8.   Kundeservice:   Etablere og vedligeholde effektive kundeserviceprocesser for at imødekomme kundernes behov og håndtere klager og henvendelser.
<br><br>
9.   Omkostningsstyring:  Overvågning og styring af driftsomkostninger for at sikre, at de forbliver inden for budgettet og er proportionale med virksomhedens indtjening.
<br><br>
10.   Risikostyring:  Identifikation og håndtering af potentielle risici, der kan påvirke levering af varer og tjenesteydelser, herunder forsyningskæderisici, efterlevelsesrisici og andre operationelle trusler.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser12" id="bar4.3">
    <h6 class="header" @click="toggleBar('bar4.3')"><strong class="text-[35px]">+</strong> Hvad er driftsstyrring af fødevare, forbrugsvare og biler?</h6>
    <div class="content" @click="toggleBar('bar4.3')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Driftsstyring af fødevarer, forbrugsvare og biler refererer til styring af de operationelle processer og aktiviteter inden for disse specifikke sektorer. Hvert område har sine egne unikke udfordringer og krav, men grundlæggende principper inden for driftsstyring anvendes generelt for at sikre effektivitet, kvalitet og omkostningskontrol. 
<br><br>
Disse områder af driftsstyring involverer også ofte anvendelse af moderne teknologier som Internet of Things (IoT), dataanalyse og automatisering for at forbedre processer, reducere omkostninger og øge effektiviteten. Et centralt mål inden for alle disse sektorer er at sikre, at forsyningskæden er smidig, kvaliteten er konsekvent høj, og at driftsomkostningerne holdes på et rimeligt niveau.
<br><br>
Her er nogle centrale aspekter ved driftsstyring inden for disse tre sektorer:
<br><br>
1.  Driftsstyring af fødevarer:<br><br>
-   Forsyningskædeoptimering:  Overvågning og styring af alle trin i fødevareforsyningskæden, herunder produktion, distribution, lager og detailhandel. <br>
-   Kvalitetskontrol: Stram kvalitetskontrol for at sikre, at fødevarer opfylder gældende standarder og er sikre for forbrugerne. <br>
-   Lagerstyring: Effektiv håndtering af lagerfaciliteter for at minimere spild og sikre, at friske produkter bevares korrekt. <br>
-   Efterspørgselsprognoser: Anvendelse af teknologier og metoder til at forudsige efterspørgslen og optimere produktionsniveauer. <br>
<br>
2. Driftsstyring af forbrugsvare:<br><br>
-   Produktionsplanlægning:  Optimering af produktionsprocesser for at opfylde efterspørgslen og minimere lagerbeholdning. <br>
-   Branding og markedsføring:  Koordinering af brandinginitiativer og markedsføringskampagner for at maksimere produktsynlighed og salg. <br>
-   Forretningspartnerskaber:  Forvaltning af relationer med leverandører, detailhandlere og andre forretningspartnere for at sikre en smidig forsyningskæde. <br>
<br>
3. Driftsstyring af biler:<br><br>
-   Fleet Management:   Overvågning og styring af bilflåder for at optimere brugen af køretøjer og reducere vedligeholdelsesomkostninger. <br>
-   Service og vedligeholdelse:   Implementering af regelmæssige vedligeholdelsesrutiner for at opretholde bilernes driftsevne og forlænge levetiden. <br>
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser13" id="bar4.4">
    <h6 class="header" @click="toggleBar('bar4.4')"><strong class="text-[35px]">+</strong> Hvad er klassisk controlling?</h6>
    <div class="content" @click="toggleBar('bar4.4')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Klassisk controlling, også kendt som traditionel controlling, refererer til de grundlæggende principper og metoder inden for økonomistyring og kontrol af forretningsprocesser. Klassisk controlling omfatter de traditionelle tilgange til planlægning, opfølgning, og styring af organisationers økonomi og resultater. 
<br><br>
Her er nogle nøgletræk ved klassisk controlling:
<br><br>
1.   Budgettering: <br> Klassisk controlling involverer ofte udarbejdelse af årlige budgetter, hvor organisationen planlægger og allokerer ressourcer til forskellige aktiviteter. Budgettet tjener som en referencepunkt for at vurdere faktiske resultater i forhold til planlagte resultater.
<br><br>
2.   Periodisk rapportering: <br> Der er fokus på regelmæssig og periodisk rapportering af økonomiske resultater og nøgletal. Disse rapporter giver ledelsen mulighed for at vurdere, hvordan organisationen klarer sig i forhold til de fastsatte mål og budgetter.
<br><br>
3.   Varianceanalyse: <br>  Ved brug af varianceanalyse undersøger man forskellen mellem faktiske resultater og budgetterede resultater. Dette hjælper med at identificere afvigelser og forstå, hvorfor de er opstået, så der kan træffes nødvendige justeringer.
<br><br>
4.   Performanceevaluering: <br>  Klassisk controlling inkluderer ofte evaluering af præstationer baseret på fastlagte mål og nøgletal. Dette kan omfatte individuel præstationsvurdering såvel som evaluering af afdelingers eller hele virksomhedens præstation.
<br><br>
5.   Omkostningsstyring:  <br> Der er fokus på styring af omkostninger for at sikre, at organisationen opererer inden for de fastsatte budgetrammer. Dette indebærer overvågning af omkostninger og identifikation af områder, hvor der kan opnås omkostningsbesparelser.
<br><br>
6. Målsætning og opfølgning: <br>  Fastlæggelse af klare mål og nøgletal, som organisationen stræber efter, og løbende opfølgning for at måle fremskridt og identificere eventuelle nødvendige justeringer.
<br><br>
7.   Forecasting: <br>  Ud over budgettering inkluderer klassisk controlling ofte en prognoseproces, hvor organisationen forsøger at forudsige fremtidige økonomiske resultater baseret på nuværende og historiske data.
<br><br>
8.   Intern kontrol: <br>  Implementering af interne kontrolprocedurer og politikker for at sikre, at regnskabs- og forretningsprocesser udføres korrekt og i overensstemmelse med retningslinjer og standarder.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser14" id="bar4.5">
    <h6 class="header" @click="toggleBar('bar4.5')"><strong class="text-[35px]">+</strong> Hvad er dybdegående controlling?</h6>
    <div class="content" @click="toggleBar('bar4.5')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Dybdegående controlling sigter mod at give organisationen en mere nuanceret og avanceret forståelse af dens drift og resultater. Dette kan støtte mere præcise og strategisk rettede beslutninger samt hjælpe med at identificere områder, hvor der kan opnås effektivitetsforbedringer og værdiskabelse.
<br><br>
Hos IKR kalder vi det ”Level 2” controlling. Dvs Controlling ned på varelinje niveau.
Priskontrol, sammenholdt med aftalen, og evt. E-portal controlling på ordrenummer niveau.
<br><br>
Dette kan omfatte følgende aspekter: <br><br>
1.   Avanceret Analyse:  <br> Dybdegående controlling involverer brugen af avancerede analytiske værktøjer og teknikker til at afdække dybere indsigt i virksomhedens præstationer. Dette kan omfatte statistiske metoder, datamining, og avanceret modellering.
<br><br>
2.   Big Data og Analytics:  <br> Brugen af store datamængder (Big Data) og avanceret analytics for at analysere komplekse datasæt og identificere skjulte mønstre, tendenser og forretningsmuligheder.
<br><br>
3.   Business Intelligence (BI):  <br>Implementering af BI-værktøjer til at samle, analysere og præsentere forretningsdata på en meningsfuld måde, hvilket muliggør mere informerede beslutninger på tværs af organisationen.
<br><br>
4.   Predictive Analytics:   <br>Brug af predictive analytics til at forudsige fremtidige resultater baseret på historiske data og aktuelle præstationsindikatorer.
<br><br>
5.   KPI'er (Key Performance Indicators):  <br>Udvidelse af nøgletalssættet til at omfatte nøglepræstationsindikatorer, der går ud over de traditionelle økonomiske målinger og inkluderer operationelle og strategiske indikatorer.
<br><br>
6.   Benchmarking:  <br>Sammenligning af organisationens præstationer med industristandarder eller bedste praksis for at identificere områder, hvor der kan opnås forbedringer.
<br><br>
7.   Automatisering:  <br>Implementering af automatiserede processer og værktøjer, der kan hjælpe med at strømline dataindsamling, analyse og rapportering, hvilket reducerer manuelle processer og risikoen for fejl.
<br><br>
8.   Risikostyring: <br> Integration af mere sofistikerede metoder til risikovurdering og styring for at identificere potentielle trusler og muligheder, der kan påvirke organisationens mål.
<br><br>
9. Strategisk Controlling:  <br>Forbindelse mellem controlling-aktiviteter og organisationens overordnede strategi for at sikre, at alle beslutninger og handlinger understøtter de strategiske mål.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser15" id="bar4.6">
    <h6 class="header" @click="toggleBar('bar4.6')"><strong class="text-[35px]">+</strong> Hvad er controlling af e-handelsportaler – e-indkøbsportal?</h6>
    <div class="content" @click="toggleBar('bar4.6')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Controlling af e-handelsportaler eller e-indkøbsportaler refererer til styringen og optimeringen af økonomiske, operationelle og strategiske aspekter af elektroniske handelsplatforme. 
Controlling af e-handelsportaler er en kontinuerlig proces, der kræver regelmæssig evaluering og justering for at imødekomme skiftende markedstendenser og behov. Teknologiske innovationer og dataanalyse spiller en afgørende rolle i at forbedre og optimere drift og resultater inden for e-handelsområdet.
<br><br>
Her er nogle centrale elementer inden for controlling af e-handelsportaler:
<br><br>
1.   Transaktionskontrol:  <br> Overvågning og styring af transaktionsprocesser for at sikre, at ordrer behandles korrekt, og at betalinger gennemføres sikkert. Dette omfatter også håndtering af returprocesser og kundeklager.
<br><br>
2.   Lagerstyring: <br>  Effektiv håndtering af produktlageret for at undgå overbeholdning eller mangler. Dette kan omfatte lageroptimering, implementering af nøjagtige lagersystemer og styring af forsyningskæden.
<br><br>
3.   Kundeservice og Support:  <br> Overvågning af kundeserviceprocesser, herunder besvarelse af forespørgsler, klager og problemløsning. Sikring af, at kundernes oplevelse er positiv og opfylder forventningerne.
<br><br>
4.   Websideydelse og Brugeroplevelse:  <br> Evaluering og forbedring af websideydelsen, herunder hastighed, navigationsvenlighed og responsivt design for at skabe en optimal brugeroplevelse.
<br><br>
5.   Analyse af Webtrafik: <br>  Brug af webanalyseværktøjer til at spore og analysere webtrafik, konverteringsrater og andre relevante nøgletal. Dette giver indsigt i, hvordan brugere interagerer med e-handelsportalen.
<br><br>
6. Produktprisfastsættelse: <br>  Overvågning af produktpriser og prisdynamik for at forblive konkurrencedygtig på markedet. Dette kan omfatte dynamisk prisfastsættelse og tilbudsstyring.
<br><br>
7.   Digital Markedsføring: <br>  Styring af digitale markedsføringsstrategier, herunder sociale medier, søgemaskineoptimering (SEO) og online annoncering, for at tiltrække og fastholde kunder.
<br><br>
8.   Sikkerhed og Beskyttelse af Personlige Oplysninger: <br> Implementering af sikkerhedsforanstaltninger for at beskytte kunders personlige oplysninger og sikre en sikker online shoppingoplevelse.
<br><br>
9.   Benchmarking:  <br> Sammenligning af e-handelsportalen med konkurrenter for at identificere styrker, svagheder og muligheder for forbedringer.
<br><br>
10.  Analyse af Konverteringsrater: <br>  Overvågning af konverteringsrater for at forstå, hvordan godt e-handelsportalen omsætter besøgende til faktiske kunder, og identifikation af områder, hvor konverteringsprocessen kan forbedres.
<br><br>
11.   Loyalty Programs:  <br> Styring af kunde-loyalitetsprogrammer og incitamenter for at fastholde eksisterende kunder og tiltrække nye.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser16" id="bar4.7">
    <h6 class="header" @click="toggleBar('bar4.7')"><strong class="text-[35px]">+</strong> Hvad er controlling af kontrakter – aftaler?</h6>
    <div class="content" @click="toggleBar('bar4.7')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Formålet med controlling inden for kontrakter er at sikre, at begge parter overholder de fastsatte vilkår og betingelser, at kontraktens mål opfyldes, og at risici minimeres. <br><br>

Controlling af kontrakter er essentiel for at sikre, at begge parter opfylder deres forpligtelser, og at risici og potentielle konflikter håndteres på en effektiv måde. Dette bidrager til en vellykket gennemførelse af projekter eller levering af tjenesteydelser og hjælper med at opbygge et tillidsfuldt samarbejde mellem kontraktens parter.
<br><br>
Her er nogle nøgleelementer ved controlling af kontrakter:
<br><br>
1.   Kontraktudarbejdelse:  <br> En omhyggelig gennemgang og udarbejdelse af kontraktens betingelser for at sikre klarhed, nøjagtighed og overholdelse af lovgivning og regler.
<br><br>
2.   Budgetstyring: <br> Overvågning af de økonomiske aspekter af kontrakten, herunder budgettering, håndtering af omkostninger og sikring af, at projektet eller tjenesteydelsen udføres inden for de aftalte økonomiske rammer.
<br><br>
3.   Risikostyring:  <br> Identifikation og håndtering af potentielle risici, der kan påvirke kontraktopfyldelsen. Dette kan omfatte udvikling af risikostyringsstrategier og implementering af foranstaltninger for at mindske risici.
<br><br>
4.   Tidsstyring:  <br> Overvågning og styring af tidsplanen for kontrakten, herunder fastsættelse af milepæle og tidsfrister for at sikre, at projektet eller tjenesteydelsen leveres til tiden.
<br><br>
5.   Performanceevaluering: <br> Vurdering af kontraktens resultater og opfyldelse af de fastsatte præstationsmål. Dette kan omfatte periodiske evalueringer og rapportering om kontraktens fremskridt.
<br><br>
6.   Ændringshåndtering: <br>  Håndtering af eventuelle ændringer eller modifikationer i kontrakten og sikring af, at begge parter er enige om sådanne ændringer.
<br><br>
7.  Efterlevelse af lovgivning:  <br>Sikring af, at alle kontraktmæssige forhold overholder gældende lovgivning, regler og standarder.
<br><br>
8.   Kommunikation:  <br> Effektiv kommunikation mellem de kontraherende parter for at undgå misforståelser og sikre, at begge parter er informeret om relevante opdateringer og ændringer.
<br><br>
9.   Dokumentation:  <br> Korrekt arkivering af kontraktrelaterede dokumenter, herunder korrespondance, mødenotater og rapporter. Dette er vigtigt for at skabe en klar og dokumenteret historik af kontraktens udvikling og opfyldelse.
<br><br>
10.   Afslutning af kontrakt:  <br> En ordentlig afslutning af kontrakten, når alle betingelser er opfyldt, herunder slutrapportering og opfølgning på eventuelle efterfølgende forpligtelser.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser17" id="bar4.9">
    <h6 class="header" @click="toggleBar('bar4.9')"><strong class="text-[35px]">+</strong> Hvad betyder samarbejdspartner?</h6>
    <div class="content" @click="toggleBar('bar4.9')">
        <div class="bar-flex2">
            <p class="bar-lille-text">En samarbejdspartner refererer til en person, organisation eller enhed, der indgår i et samarbejde eller partnerskab med en anden for at opnå fælles mål eller formål. En samarbejdspartner kan være en part, der bidrager med ressourcer, kompetencer eller anden støtte for at styrke en gensidig indsats eller realisere fælles interesser.
<br><br>
Samarbejdspartnere kan variere i karakter afhængigt af konteksten. Det kan omfatte virksomheder, non-profitorganisationer, offentlige institutioner, akademiske institutioner eller endda enkeltpersoner. Partnerskaber kan dannes af forskellige grunde, herunder at opnå økonomiske gevinster, løse komplekse problemer, dele viden eller fremme fælles interesser.
<br><br>
Samarbejdspartnerskaber er almindelige inden for erhvervslivet, forskning, udviklingsprojekter, velgørenhedsarbejde og mange andre områder. Et vellykket samarbejde indebærer ofte tillid, åbenhed, klare kommunikationslinjer og en forpligtelse til at arbejde sammen om at opnå fælles mål.
<br><br>
Nøglekarakteristika ved samarbejdspartnere inkluderer:
<br><br>
1.   Gensidighed: <br>   Samarbejdspartnere deler normalt en gensidig interesse eller mål, og samarbejdet forventes at gavne begge parter.
<br><br>
2.   Fælles formål: <br>  Der er et klart defineret formål eller mål for samarbejdet, som begge parter stræber efter at opnå.
<br><br>
3.   Åbenhed og Kommunikation: <br>  Effektivt samarbejde kræver åben kommunikation og en klar forståelse af forventningerne og rollerne for hver partner.
<br><br>
4.   Bidrag og Engagement: <br>  Samarbejdspartnere bidrager aktivt til samarbejdet ved at levere ressourcer, viden, ekspertise eller andre former for støtte.
<br><br>
5.   Fleksibilitet: <br>   Samarbejdsrelationer kan udvikle sig over tid, og parterne skal ofte være fleksible for at imødekomme ændrede omstændigheder eller behov.
<br><br>
6.   Fælles beslutningstagning: <br>   I nogle tilfælde involverer samarbejde fælles beslutningstagning, hvor begge parter deltager i at træffe vigtige beslutninger.
</p>
        </div>
    </div>
</div>



   </div>
  </div>
</div>

<div class="bar z-20" id="bar5">
      <h3 class="header translate-y-3" @click="toggleBar('bar5')">INDKØB & UDBUD<br> <span  style="font-size: 16px;"> ▼ </span></h3>
  <div class="content">
    <div class="bar-flex">

      <div class="baranalyser baranalyser18" id="bar5.1">
    <h6 class="header" @click="toggleBar('bar5.1')"><strong class="text-[35px]">+</strong> Hvad er Indkøbsoptimering?</h6>
    <div class="content" @click="toggleBar('bar5.1')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Indkøbsoptimering refererer til processen med at forbedre og optimere alle aspekter af indkøbsprocessen i en organisation for at opnå bedre resultater og effektivitet. Dette omfatter ikke kun at opnå omkostningsbesparelser, men også at forbedre kvaliteten af indkøbte varer og tjenesteydelser samt at styrke forholdet til leverandører. Målet er at opnå de ønskede resultater med mindre ressourceforbrug. 
<br><br>
Indkøbsoptimering er en kontinuerlig proces, der kræver regelmæssig evaluering og justering for at imødekomme skiftende forretningsmæssige behov og markedsvilkår. Ved at optimere indkøbsprocessen kan virksomheder forbedre deres konkurrenceposition og opnå større værdi fra deres leverandørsamarbejder.
<br><br>
Her er nogle centrale aspekter af indkøbsoptimering:
<br><br>
1.   Leverandørsamarbejde:  <br> Styrkelse af samarbejdet med leverandører for at opnå bedre vilkår, forhandle om priser, og muligvis sikre længerevarende kontrakter. Dette kan føre til mere konkurrencedygtige priser og forbedret kvalitet.
<br><br>
2.   Leverandørvalg:  <br> Evaluering og udvælgelse af leverandører baseret på deres evne til at levere kvalitetsprodukter, overholde tidsfrister og tilbyde konkurrencedygtige priser. En nøje udvælgelsesproces kan bidrage til at reducere risikoen for dårlige leverancer.
<br><br>
3.   Strategisk Indkøb:  <br> Udvikling og implementering af en strategisk tilgang til indkøb, hvor virksomheden tager højde for både kortsigtede og langsigtede mål. Dette kan omfatte at identificere nøgleprodukter eller -tjenesteydelser, forhandle rammeaftaler og vurdere leverandørernes samlede værdi.
<br><br>
4.   Lagerstyring:   <br>Optimering af lagerbeholdningen for at undgå overflødige omkostninger og sikre, at de nødvendige varer altid er tilgængelige, når de kræves.
<br><br>
5.   Teknologianvendelse:  <br> Implementering af indkøbssoftware, automatisering og andre teknologiske løsninger for at effektivisere indkøbsprocessen, forbedre sporbarheden og reducere manuelle fejl.
<br><br>
6.   Forhandling:  <br> Stærke forhandlingsevner for at opnå de bedst mulige betingelser fra leverandører, herunder konkurrencedygtige priser, rabatter og gunstige betalingsbetingelser.
<br><br>
7.   Leverandørpræstationsevaluering:  <br> Overvågning og evaluering af leverandørernes præstation over tid for at sikre, at de opfylder de aftalte standarder og krav.
<br><br>
8.   Risikostyring:  <br> Identifikation og håndtering af risici forbundet med indkøbsprocessen, herunder risici relateret til leverandørsvigt, prisudsving og kvalitetsproblemer.
<br><br>
9.   Overholdelse af Regler og Standarder:  <br> Sikring af, at indkøbsaktiviteter overholder gældende love, regler og branchestandarder.
<br><br>
10.   Total Cost of Ownership (TCO):   <br>Overvejelse af de samlede omkostninger forbundet med indkøb, herunder ikke kun direkte omkostninger, men også omkostninger relateret til lager, vedligeholdelse og eventuelle risici.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser19" id="bar5.2">
    <h6 class="header" @click="toggleBar('bar5.2')"><strong class="text-[35px]">+</strong> Hvad er udbud – EU udbud og konkurrenceudsættelse?</h6>
    <div class="content" @click="toggleBar('bar5.2')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Udbud:  <br>
Udbud refererer til en proces, hvor organisationer, virksomheder eller offentlige myndigheder søger eksterne leverandører eller entreprenører til at byde på levering af varer, tjenesteydelser eller arbejdsopgaver. Formålet med udbud er at skabe konkurrence og sikre, at organisationen modtager de bedste mulige tilbud med hensyn til pris, kvalitet og andre relevante faktorer. Udbudsprocessen følger typisk en række trin, herunder udarbejdelse af udbudsdokumenter, offentliggørelse af udbuddet, modtagelse af tilbud, evaluering og tildeling af kontrakten til den mest kvalificerede leverandør.
<br><br>
EU-Udbud:  <br>
EU-udbud refererer specifikt til udbudsprocesser, der gennemføres i overensstemmelse med reglerne og direktiverne fra Den Europæiske Union. EU har fastsat fælles regler for offentlige indkøb, der skal sikre åbenhed, gennemsigtighed og lige adgang til markedet i medlemslandene. EU-udbudsreglerne gælder for offentlige myndigheder og organisationer, der ønsker at indgå kontrakter med en værdi over visse tærskelværdier. Disse regler fastsætter procedurer for, hvordan udbud skal gennemføres, herunder hvordan kontrakter annonceres, hvordan interesserede parter kan byde, og hvordan tildelingen af kontrakten skal håndteres.
<br><br>
Konkurrenceudsættelse:  <br>
Konkurrenceudsættelse er en bredere betegnelse, der refererer til praksis med at åbne op for en opgave, en service eller en funktion for konkurrence fra eksterne parter, uanset om det sker gennem en udbudsproces eller andre metoder. Formålet med konkurrenceudsættelse er at opnå effektivitet, innovation og besparelser ved at lade forskellige aktører konkurrere om at levere den bedste løsning. Dette kan gøres inden for både offentlige og private organisationer. Konkurrenceudsættelse kan involvere udbud, men det kan også inkludere andre former for markedsmæssig konkurrence, f.eks. når virksomheder indbyrdes konkurrerer om en kontrakt uden en formel udbudsproces.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser20" id="bar5.3">
    <h6 class="header" @click="toggleBar('bar5.3')"><strong class="text-[35px]">+</strong> Hvad er kategoristyring?</h6>
    <div class="content" @click="toggleBar('bar5.3')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Indkøbskategoristyring (også kendt som kategoriledelse eller category management på engelsk) er en strategisk tilgang til indkøbsprocessen, hvor varer og tjenesteydelser organiseres i kategorier for at optimere resultaterne af indkøbsaktiviteterne. Formålet er at forbedre effektiviteten, reducere omkostningerne, og øge værdien af indkøbene ved at anvende en holistisk og strategisk tilgang til hver kategori. 
<br><br>
Ved at anvende indkøbskategoristyring kan organisationer optimere deres indkøbsaktiviteter og opnå bedre resultater på tværs af forskellige produkt- og tjenestekategorier.
<br><br>
Her er nogle nøgleaspekter ved indkøbskategoristyring:
<br><br>
1.   Kategoristrategi: <br>   Udvikling af specifikke strategier for hver indkøbskategori baseret på forretningsmæssige mål, markedsforhold og leverandørlandskabet. Dette indebærer at forstå behovene inden for hver kategori og identificere muligheder for forbedringer.
<br><br>
2.   Segmentering af Kategorier: <br> Opdeling af indkøbsporteføljen i forskellige kategorier baseret på fælles karakteristika såsom varer eller tjenesteydelser, forsyningskædekompleksitet, leverandørlandskab og forbrugsmønstre.
<br><br>
3.   Dataanalyse: <br> Anvendelse af dataanalyse for at evaluere historiske præstationer, identificere tendenser, og opdage potentielle effektiviseringsmuligheder inden for hver kategori.
<br><br>
4.   Leverandørforhold: <br> Styrkelse af samarbejdet med leverandører inden for hver kategori for at opnå bedre betingelser, øge innovation og forbedre kvaliteten af leverancer.
<br><br>
5.   Markedsundersøgelser: <br> Gennemførelse af markedsundersøgelser og benchmarking for at forstå konkurrenceforhold, priser og bedste praksis inden for hver kategori.
<br><br>
6.   Performance Evaluering: <br> Løbende evaluering af præstationen inden for hver kategori ved hjælp af nøglepræstationsindikatorer (KPI'er) for at sikre, at mål og strategier opfyldes.
<br><br>
7.   Forhandling: <br> Brug af indgående viden om kategorien under forhandlinger med leverandører for at opnå bedre priser, vilkår og betingelser.
<br><br>
8.   Risikostyring: <br> Identifikation og håndtering af risici forbundet med hver kategori, herunder leverandørsvigt, prisudsving og kvalitetsproblemer.
<br><br>
9.   Supply Chain Optimering: <br> Overvågning og forbedring af forsyningskædeprocesserne inden for hver kategori for at sikre en mere effektiv og smidig indkøbsproces.
<br><br>
10.   Løbende Forbedringer: <br> Implementering af løbende forbedringer baseret på evalueringer og læring fra præstationer inden for hver kategori.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser21" id="bar5.4">
    <h6 class="header" @click="toggleBar('bar5.4')"><strong class="text-[35px]">+</strong> Hvad er implementering af indkøbsoptimering?</h6>
    <div class="content" @click="toggleBar('bar5.4')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Implementering af indkøbsoptimering indebærer processen med at omsætte strategier og planer for indkøbsoptimering til konkrete handlinger og praksis inden for organisationen. 
Implementering af indkøbsoptimering kræver ofte et tværfagligt samarbejde mellem forskellige afdelinger og niveauer inden for organisationen. Det er også vigtigt at have ledelsens støtte og engagement i hele processen for at sikre succes.
<br><br>
Her er nogle trin, der normalt indgår i implementeringen af indkøbsoptimering:
<br><br>
1.   Evaluering af Indkøbsporteføljen: <br>Start med en grundig evaluering af virksomhedens samlede indkøbsportefølje. Dette omfatter identifikation af indkøbskategorier, vurdering af leverandører, og analyse af historiske indkøbsdata.
<br><br>
2.   Formulering af Kategoristrategier: <br>Udvikl strategier for hver indkøbskategori baseret på forretningsmål, markedsforhold og leverandørlandskab. Definér klart, hvordan hver kategori skal styres for at opnå ønskede resultater.
<br><br>
3.   Segmentering af Kategorier: <br>Opdel indkøbsporteføljen i forskellige kategorier baseret på fælles karakteristika såsom produkter eller tjenesteydelser, kompleksitet i forsyningskæden, og forbrugsmønstre.
<br><br>
4.   Dannelse af Kategori- og Indkøbsteam: <br>Sammensæt teams med ansvar for hver indkøbskategori. Disse teams kan omfatte repræsentanter fra indkøbsafdelingen, leverandørstyring, logistik og andre relevante afdelinger.
<br><br>
5.   Dataanalyse og Benchmarking: <br>Anvend dataanalyse til at evaluere historiske præstationer og identificere potentielle effektiviseringsmuligheder. Benchmark mod industristandarder og bedste praksis for at måle præstationen.
<br><br>
6.   Opbygning af Leverandørsamarbejde: <br>Styrk samarbejdet med leverandører inden for hver kategori. Skab dialog og forståelse for fælles mål og udfordringer. Identificér muligheder for innovation og effektivisering.
<br><br>
7.   Implementering af Teknologi og Værktøjer: <br>Introducer og implementér indkøbssoftware, automatisering og andre teknologiske løsninger for at effektivisere processer, forbedre sporbarheden og reducere manuelle fejl.
<br><br>
8.   Kompetenceudvikling: <br> Sørg for, at de involverede medarbejdere har de nødvendige kompetencer og viden til at håndtere indkøbsopgaver inden for deres kategorier. Dette kan omfatte træning og udvikling.
<br><br>
9.   Forhandling og Kontraktstyring: <br> Træn medarbejdere i forhandlingsteknikker og implementer effektiv kontraktstyring for at sikre, at indgåede aftaler overholdes og forhandlinger leder til gunstige resultater.
<br><br>

10.   Løbende Optimering: <br> Implementer en kultur for løbende forbedringer. Indfør regelmæssige evalueringer og læringscyklusser for at tilpasse strategier og praksis baseret på præstationsdata og ændringer i forretningsmiljøet.
<br><br>
11.   Mål og Opfølgning: <br> Fastlæg klare mål og nøglepræstationsindikatorer (KPI'er) for at måle succes og overvåge fremskridt. Foretag løbende opfølgning og justering af strategier efter behov.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser22" id="bar5.5">
    <h6 class="header" @click="toggleBar('bar5.5')"><strong class="text-[35px]">+</strong> Hvad er SKI aftaler?</h6>
    <div class="content" @click="toggleBar('bar5.5')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Statens og kommunernes indkøbsaftaler refererer til de aftaler, der er indgået mellem offentlige myndigheder i Danmark (såsom staten, regionerne og kommunerne) og leverandører. Disse aftaler har til formål at optimere indkøbsprocessen for offentlige institutioner ved at opnå konkurrencedygtige priser, sikre kvalitet i leverancer og overholde regler og procedurer for offentlige indkøb.
<br><br>
Formålet med disse indkøbsaftaler er ikke kun at opnå omkostningsbesparelser, men også at sikre, at offentlige midler anvendes effektivt og ansvarligt. Ved at samle indkøbskraften fra forskellige offentlige institutioner kan man forhandle bedre vilkår og skabe mere gennemsigtighed i indkøbsprocessen.
<br><br>
Det er vigtigt at bemærke, at indkøbsaftaler og procedurer kan variere mellem staten og kommunerne, og at de er underlagt nationale og europæiske regler om offentlige indkøb. Eventuelle ændringer eller opdateringer i dette område kan også påvirke, hvordan indkøbsaftalerne administreres.
<br><br>
Nogle af de centrale træk ved statens og kommunernes indkøbsaftaler omfatter:
<br><br>
1.   Rammeaftaler: <br> Disse aftaler kan dække en bred vifte af varer og tjenesteydelser og fastlægge de overordnede vilkår for indkøb inden for en bestemt kategori. Rammeaftaler gør det lettere for offentlige institutioner at foretage gentagne indkøb uden at skulle igennem en fuld udbudsproces hver gang.
<br><br>
2.   Udbud: <br> Nogle indkøbsaftaler kan være resultatet af en udbudsproces, hvor leverandører byder på at levere specifikke varer eller tjenesteydelser. Den valgte leverandør indgår derefter en kontrakt med den offentlige institution.
<br><br>
3.   Leverandørpooler: <br> Der kan oprettes leverandørpooler, hvor flere leverandører er prækvalificeret til at levere varer eller tjenesteydelser inden for en given kategori. Dette giver offentlige institutioner mulighed for at vælge fra en pool af godkendte leverandører.
<br><br>
4.   Standardisering: <br> For at effektivisere indkøbsprocessen og lette sammenligning mellem tilbud kan standardiserede specifikationer og krav indarbejdes i indkøbsaftalerne.
<br><br>

5.   Compliance med EU-regler:   Indkøbsaftalerne skal overholde reglerne for offentlige indkøb, der fastsættes af EU, og sikre, at konkurrenceprincipperne respekteres.
</p>
        </div>
    </div>
</div>

<!--<div class="baranalyser baranalyser8" id="bar5.6">
    <h6 class="header" @click="toggleBar('bar5.6')"><strong class="text-[35px]">+</strong> Hvad er et driftscenter?</h6>
    <div class="content" @click="toggleBar('bar5.6')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Tekst kommer..</p>
        </div>
    </div>
</div>-->

<div class="baranalyser baranalyser23" id="bar5.7">
    <h6 class="header" @click="toggleBar('bar5.7')"><strong class="text-[35px]">+</strong> Hvad betyder outsourcing af indkøb?</h6>
    <div class="content" @click="toggleBar('bar5.7')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Outsourcing af indkøb refererer til praksissen med at overføre ansvar og aktiviteter relateret til indkøb af varer og tjenesteydelser til en ekstern leverandør eller tjenesteudbyder. Virksomheder og organisationer kan vælge at outsource deres indkøbsfunktioner af forskellige årsager, herunder omkostningsbesparelser, specialisering, og fokus på kernekompetencer. Når indkøbsopgaver outsources, overlades de typisk til et eksternt firma, der specialiserer sig i indkøbsaktiviteter.
<br><br>
Nogle af de vigtige elementer ved outsourcing af indkøb inkluderer:
<br><br>
1.   Ekstern Leverandør: <br>Virksomheden outsourcer indkøbsopgaver til en tredjepart, der specialiserer sig i indkøbsprocesser. Dette kan være et indkøbsbureau, en indkøbsserviceudbyder eller et specialiseret firma inden for supply chain management.
<br><br>
2.   Omkostningsbesparelser: <br> En af hovedårsagerne til outsourcing af indkøb er ofte muligheden for at opnå omkostningsbesparelser. Eksterne leverandører kan have adgang til mere omfattende leverandørnetværk, forhandle bedre priser og forbedre effektiviteten i indkøbsprocessen.
<br><br>
3.   Specialiseret Ekspertise: <br>Outsourcing giver virksomheder adgang til specialiseret ekspertise inden for indkøbsområdet. Eksterne leverandører kan være specialiseret inden for bestemte industrier, kategorier eller geografiske områder og kan bringe dybdegående viden og erfaring med sig.
<br><br>
4.   Fokus på Kernekompetencer: <br>Ved at outsource indkøbsaktiviteter kan virksomheden koncentrere sig om sine kernekompetencer og strategiske mål. Dette kan bidrage til at forbedre virksomhedens overordnede effektivitet og konkurrenceposition.
<br><br>
5.   Fleksibilitet: <br> Outsourcing giver virksomheder mulighed for at være mere fleksible og tilpasse sig ændringer i efterspørgslen, markedsforhold og forretningsmiljøet. Det gør det lettere at skalere op eller ned efter behov.
<br><br>
6.   Risikodeling: <br> Ved at overføre visse risici og forpligtelser til en ekstern leverandør kan virksomheden minimere visse operationelle og strategiske risici forbundet med indkøbsprocessen.
<br><br>

7.   Teknologisk Innovation: <br>Outsourcing kan give adgang til de nyeste teknologier og værktøjer inden for indkøbsstyring, hvilket kan forbedre processernes effektivitet og sporbarhed.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser24" id="bar5.8">
    <h6 class="header" @click="toggleBar('bar5.8')"><strong class="text-[35px]">+</strong> Hvad er en Indkøbsorganisation?</h6>
    <div class="content" @click="toggleBar('bar5.8')">
        <div class="bar-flex2">
            <p class="bar-lille-text">En indkøbsorganisation refererer til den dedikerede enhed eller afdeling i en virksomhed, der er ansvarlig for at planlægge, gennemføre og administrere indkøbsaktiviteterne. Formålet med en indkøbsorganisation er at sikre, at virksomheden erhverver de nødvendige varer og tjenesteydelser i overensstemmelse med virksomhedens behov, strategier og budgetter. Indkøbsorganisationen kan variere i størrelse og struktur afhængigt af virksomhedens kompleksitet, omfang af indkøbsaktiviteter og branchekrav.
<br><br>
Sammen udgør roller og funktioner indkøbsorganisationen, der arbejder sammen for at optimere indkøbsprocessen, sikre overholdelse af standarder og sikre, at virksomheden får maksimal værdi ud af sine indkøbsaktiviteter.
<br><br>
Nogle nøgleelementer i en indkøbsorganisation inkluderer:
<br><br>
1.   Indkøbsafdeling: <br>En central afdeling, der er ansvarlig for at planlægge, koordinere og udføre indkøbsaktiviteter. Denne afdeling kan omfatte indkøbschefer, indkøbsanalytikere, og andet relevant personale.
<br><br>
2.   Indkøbschefer: <br>Ledere inden for indkøbsorganisationen, der har ansvar for at formulere indkøbsstrategier, håndtere forhandlinger, og sikre, at indkøbsmål opfyldes.
<br><br>
3.   Indkøbsanalytikere: <br>Professionelle, der arbejder med dataanalyse, benchmarking og evaluering af indkøbspræstationer for at optimere indkøbsprocessen og træffe informerede beslutninger.
<br><br>
4.   Leverandørstyring:  <br>En del af indkøbsorganisationen, der er fokuseret på at identificere, evaluere og samarbejde med leverandører for at sikre leverancer af høj kvalitet og konkurrencedygtige priser.
<br><br>
5.   Kontraktstyring: <br>Personale, der håndterer forhandling, oprettelse og administration af kontrakter med leverandører.
<br><br>
6.   Indkøbskoordinatorer: <br>Medarbejdere, der er ansvarlige for at håndtere daglige opgaver inden for indkøbsprocessen, herunder håndtering af indkøbsanmodninger, kommunikation med leverandører og støtte til indkøbschefer.
<br><br>
7.   Budgetansvarlige: <br>Personer, der overvåger indkøbsbudgetter og sikrer, at indkøbsaktiviteterne er i overensstemmelse med virksomhedens økonomiske retningslinjer.
<br><br>

8.   Compliance-specialister: <br>Personer, der sikrer, at indkøbsaktiviteterne overholder relevante love, regler og interne retningslinjer.
<br><br>
9.   Teknologispecialister: <br>Medarbejdere, der håndterer implementeringen og vedligeholdelsen af indkøbssystemer, automatisering og teknologiske værktøjer.
<br><br>
10.   Strategisk Indkøbsplanlægning: <br>En funktion, der fokuserer på at udvikle og implementere strategier for indkøb, herunder vurdering af markedsforhold og leverandørlandskabet.
</p>
        </div>
    </div>
</div>


<div class="baranalyser baranalyser26" id="bar5.10">
    <h6 class="header" @click="toggleBar('bar5.10')"><strong class="text-[35px]">+</strong> Hvad er Indkøbspolitik?</h6>
    <div class="content" @click="toggleBar('bar5.10')">
        <div class="bar-flex2">
            <p class="bar-lille-text">En indkøbspolitik er en dokumenteret retningslinje, der beskriver de overordnede principper, procedurer og regler, der styrer en virksomheds indkøbsaktiviteter. Formålet med en indkøbspolitik er at skabe en struktureret tilgang til indkøb, sikre overholdelse af interne og eksterne standarder, og fremme gennemsigtighed og effektivitet i indkøbsprocessen. 
<br><br>
En veldefineret indkøbspolitik tjener som et værdifuldt redskab for at styre og regulere indkøbsaktiviteterne på en konsistent måde, hvilket kan bidrage til at minimere risici, forbedre effektiviteten og sikre overholdelse af lovgivning og etiske standarder.
<br><br>
Indkøbspolitikken kan variere fra virksomhed til virksomhed, men den typisk adresserer følgende elementer:
<br><br>
1.   Mål og Formål: <br>Klare definitioner af formålet og målene med indkøbspolitikken. Dette kan omfatte områder som omkostningsbesparelser, kvalitetsstyring, risikostyring, og leverandørsamarbejde.
<br><br>
2.   Ansvar og Roller: <br>Afklaring af de ansvarlige parter og roller i indkøbsprocessen. Dette inkluderer ofte specifikation af ansvar for godkendelse, udførelse af indkøb, leverandørsamarbejde, og efterlevelse af politikken.
<br><br>
3.   Compliance og Regler: <br>Angivelse af regler og procedurer, der skal overholdes i forbindelse med indkøbsaktiviteter. Dette kan omfatte overholdelse af lovgivning, virksomhedsinterne retningslinjer, og eventuelle branche- eller standardbestemmelser.
<br><br>
4.   Etiske Retningslinjer: <br>Fastlæggelse af etiske standarder og forventninger i forbindelse med indkøb. Dette kan omfatte retningslinjer for forretningsetik, korruption, og konflikt af interesse.
<br><br>
5.   Budgetstyring: <br>Bestemmelser om håndtering af indkøbsbudgetter og godkendelsesprocedurer. Dette kan omfatte krav til forhåndsgodkendelse af indkøbsudgifter og rapportering af udgifter.
<br><br>
6.   Leverandørsamarbejde: <br>Retningslinjer for udvælgelse, evaluering og samarbejde med leverandører. Dette kan omfatte processer for leverandørsourcing, evaluering af leverandørpræstation og håndtering af kontraktforhold.
<br><br>
7.   Indkøbsprocedurer: <br>Beskrivelse af de specifikke trin og procedurer, der skal følges under indkøbsprocessen. Dette kan omfatte krav til indkøbsanmodninger, udbudsprocedurer, forhandling og kontraktindgåelse.
<br><br>
8.   Teknologianvendelse: <br>Retningslinjer for brugen af indkøbssystemer, automatisering og teknologiske værktøjer for at optimere indkøbsprocessen.
<br><br>
9.   Rapportering og Evaluering: <br>Krav til rapportering og evaluering af indkøbsaktiviteter for at opretholde gennemsigtighed og muliggøre løbende forbedringer.
<br><br>
10.   Risikostyring: <br>Beskrivelse af metoder til identifikation og håndtering af risici i forbindelse med indkøbsaktiviteter.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser27" id="bar5.11">
    <h6 class="header" @click="toggleBar('bar5.11')"><strong class="text-[35px]">+</strong>Hvad er en Indkøbsstrategi?</h6>
    <div class="content" @click="toggleBar('bar5.11')">
        <div class="bar-flex2">
            <p class="bar-lille-text">En indkøbsstrategi er en plan eller retningslinje, der beskriver, hvordan en virksomhed vil udføre sine indkøbsaktiviteter for at opfylde sine overordnede forretningsmål. Formålet med en indkøbsstrategi er at skabe struktur og retning for indkøbsprocessen og sikre, at indkøbsaktiviteterne er i overensstemmelse med virksomhedens behov og strategiske mål. En effektiv indkøbsstrategi kan bidrage til at optimere omkostningseffektiviteten, forbedre leverandørforhold og minimere risici.
<br><br>
Indkøbsstrategien bør være i overensstemmelse med virksomhedens overordnede forretningsstrategi og tilpasses skiftende markedsvilkår. Den skal også tage hensyn til risici og muligheder i indkøbsmiljøet samt gældende lovgivningsmæssige krav. En velformuleret indkøbsstrategi tjener som et værdifuldt redskab for at styre og styre indkøbsaktiviteterne og kan bidrage til at sikre, at virksomheden opnår maksimal værdi og effektivitet gennem sine indkøbsindsats.
<br><br>
Nøglekomponenterne i en indkøbsstrategi inkluderer normalt:
<br><br>
1.   Mål og Formål: <br>Klare definitioner af, hvad virksomheden ønsker at opnå gennem sin indkøbsaktivitet. Dette kan omfatte omkostningsbesparelser, kvalitetsforbedring, innovation, eller bæredygtighedsmål.
<br><br>

2.   Kategoriidentifikation: <br>Analyse af virksomhedens indkøbsportefølje for at identificere og klassificere forskellige kategorier af indkøbte varer og tjenesteydelser.
<br><br>
3.   Leverandørsourcing: <br>Udvælgelse og evaluering af leverandører inden for hver kategori. Dette kan omfatte vurdering af leverandørernes kapacitet, pålidelighed og evne til at opfylde virksomhedens krav.
<br><br>
4.   Konkurrencepositionering: <br>Overvejelse af virksomhedens position på markedet og konkurrencedygtige faktorer. Dette kan omfatte forhandlingsteknikker og strategier for at opnå bedre priser og vilkår.
<br><br>
5.   Riskostyring: <br>Identifikation og håndtering af risici forbundet med indkøbsaktiviteterne, herunder leverandørsvigt, prisudsving og forsyningskæderisici.
<br><br>
6.   Leverandørforhold: <br>Udvikling og vedligeholdelse af strategiske leverandørsamarbejder for at sikre en stabil forsyningskæde og muliggøre samarbejde om innovation og procesforbedringer.
<br><br>
7.   Teknologianvendelse: <br>Implementering af indkøbsteknologier og automationsværktøjer for at forbedre effektiviteten, sporbarheden og dataindsamlingen i indkøbsprocessen.
<br><br>
8.   Bæredygtighed og Etik: <br>Overvejelse af bæredygtigheds- og etikaspekter i indkøbsprocessen, herunder miljømæssige, sociale og økonomiske faktorer.
<br><br>
9.   Indkøbsprocedurer: <br>Fastlæggelse af specifikke procedurer for indkøbsprocessen, herunder krav til indkøbsanmodninger, udbudsprocesser, forhandling og kontraktindgåelse.
<br><br>
10.   Evaluering og Optimering: <br>Fastlæggelse af metoder til løbende evaluering af indkøbspræstationer og implementering af løbende forbedringer baseret på data og resultater.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser28" id="bar5.12">
    <h6 class="header" @click="toggleBar('bar5.12')"><strong class="text-[35px]">+</strong> Hvad er en Indkøbsplan?</h6>
    <div class="content" @click="toggleBar('bar5.12')">
        <div class="bar-flex2">
            <p class="bar-lille-text">En indkøbsplan er en detaljeret dokumentation, der beskriver de specifikke aktiviteter, trin og tidsrammer, der er nødvendige for at gennemføre indkøbsprocessen for et givent projekt eller en bestemt periode. Formålet med en indkøbsplan er at give en struktureret tilgang til indkøbsaktiviteterne, sikre overholdelse af virksomhedens indkøbspolitik og opnå de ønskede resultater inden for de fastsatte rammer.
<br><br>
En velformuleret indkøbsplan fungerer som et værdifuldt redskab for at styre indkøbsprocessen og sikre, at den er gennemført effektivt og i overensstemmelse med virksomhedens mål og retningslinjer. Indkøbsplanen kan også være et middel til at kommunikere klart med interessenter og sikre samarbejde og forståelse på tværs af organisationen.
<br><br>
Nogle nøgleelementer, der typisk inkluderes i en indkøbsplan, omfatter:
<br><br>
1.   Projektidentifikation: <br>Angivelse af det specifikke projekt eller den periode, som indkøbsplanen dækker. Dette kan omfatte en projektbeskrivelse, mål og forventet varighed.
<br><br>
2.   Indkøbsmål og Formål: <br>Klare definitioner af, hvad der forsøges opnås gennem indkøbsaktiviteterne i forbindelse med det pågældende projekt eller periode. Dette kan omfatte omkostningsbesparelser, kvalitetsforbedring, tidsmæssig levering og andre mål.
<br><br>
3.   Indkøbsbehov og Krav: <br>Specificering af de specifikke varer eller tjenesteydelser, der skal indkøbes, samt detaljerede krav og specifikationer for at opfylde projektets behov.
<br><br>
4.   Ressourceallokering:   Angivelse af de nødvendige ressourcer til at gennemføre indkøbsaktiviteterne, herunder personale, budgetter og teknologiske værktøjer.
<br><br>
5.   Tidsplan: <br>Fastlæggelse af en tidsplan eller tidsramme for indkøbsaktiviteterne. Dette kan omfatte specifikke datoer for indkøbsanmodninger, udbudsprocedurer, forhandlinger og kontraktindgåelse.
<br><br>
6.   Indkøbsmetode: <br>Beslutning om den bedste metode til at opnå indkøbsmålene. Dette kan omfatte direkte forhandlinger, udbud, indkøbsrammeaftaler eller andre metoder.
<br><br>
7.   Leverandøridentifikation: <br>Udvælgelse og evaluering af potentielle leverandører i overensstemmelse med virksomhedens politik og projektets behov.
<br><br>
8.   Risikostyring: <br>Identifikation og håndtering af risici, der kan påvirke indkøbsaktiviteterne. Dette kan omfatte risici i forbindelse med levering, kvalitet, prisudsving og andre faktorer.
<br><br>
9.   Budgetstyring: <br>Angivelse af de økonomiske retningslinjer og budgetter, der gælder for indkøbsaktiviteterne, og hvordan de vil blive overvåget og administreret.
<br><br>
10.   Godkendelsesprocedurer: <br>Fastlæggelse af de nødvendige trin og instanser for godkendelse af indkøbsbeslutninger.
<br><br>
11.   Kontraktforvaltning: <br>Procedurer for oprettelse, administration og overvågning af kontrakter med leverandører.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser29" id="bar5.13">
    <h6 class="header" @click="toggleBar('bar5.13')"><strong class="text-[35px]">+</strong> Hvad er en Indkøbshandlingsplan?</h6>
    <div class="content" @click="toggleBar('bar5.13')">
        <div class="bar-flex2">
            <p class="bar-lille-text">En indkøbshandlingsplan, også kendt som en indkøbsstrategi eller indkøbsplanlægningsproces, er en detaljeret plan, der fastlægger de trin og aktiviteter, der skal følges for at gennemføre indkøbsprocessen med succes. Denne type plan er en operationel vejledning, der hjælper med at styre alle aspekter af indkøbsaktiviteterne, fra identifikation af behov til levering af varer eller tjenesteydelser. En indkøbshandlingsplan kan variere afhængigt af virksomhedens specifikke behov og krav, men nogle fælles elementer inkluderer:
<br><br>
1.   Behovsanalyse: <br>Identifikation af de nødvendige varer eller tjenesteydelser, herunder en klar forståelse af krav og specifikationer.
<br><br>
2.   Budgetfastlæggelse: <br>Allokering af midler og fastlæggelse af økonomiske retningslinjer for indkøbsaktiviteterne.
<br><br>
3.   Indkøbsplanlægning: <br>Fastlæggelse af tidslinjer og en tidsplan for indkøbsprocessen, herunder vurdering af, hvornår indkøbene skal finde sted.
<br><br>
4.   Leverandørsourcing: <br>Udvælgelse og vurdering af potentielle leverandører, herunder evaluering af leverandørernes kapacitet, kvalitet og pålidelighed.
<br><br>
5.   Udbudsproces: <br>Bestemmelse af den passende metode til at opnå konkurrencedygtige tilbud, såsom udbud, anmodning om tilbud (RFP), eller direkte forhandlinger.
<br><br>
6.   Forhandlinger: <br>Gennemførelse af forhandlinger med udvalgte leverandører for at opnå de bedste vilkår og priser.
<br><br>
7.   Kontraktindgåelse: <br>Udarbejdelse og underskrivelse af kontrakter med de valgte leverandører, der tydeligt definerer alle betingelser og forpligtelser.
<br><br>
8.   Bestillingsproces: <br>Gennemførelse af den praktiske proces med at afgive ordrer og sikre leverancer i henhold til kontrakten.
<br><br>
9.   Leverandørsamarbejde: <br>Etablering og vedligeholdelse af et samarbejdende forhold med leverandører for at sikre, at de opfylder deres forpligtelser og for at håndtere eventuelle udfordringer, der måtte opstå.
<br><br>
10.   Rapportering og Overvågning: <br>Implementering af rapporterings- og overvågningssystemer for at evaluere indkøbspræstationer og identificere områder til forbedring.
<br><br>
11.   Risikostyring: <br>Identifikation og håndtering af eventuelle risici, der kan påvirke indkøbsprocessen, såsom leverandørsvigt, prisudsving eller kvalitetsproblemer.
<br><br>
12.   Evaluering og Forbedring: <br>Løbende evaluering af indkøbsprocessen for at identificere muligheder for forbedringer og effektivisering.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser30" id="bar5.17">
    <h6 class="header" @click="toggleBar('bar5.17')"><strong class="text-[35px]">+</strong> Hvad er en udbudsplan? (udbudskrav og udbudskriterier)</h6>
    <div class="content" @click="toggleBar('bar5.17')">
        <div class="bar-flex2">
            <p class="bar-lille-text">En udbudsplan er en systematisk og struktureret oversigt over, hvordan en organisation eller en projektleder vil håndtere udbudsprocessen i forbindelse med indkøb af varer eller tjenesteydelser. Udbudsplanen er en vigtig del af indkøbsprocessen og hjælper med at sikre, at alle trin i udbudsprocessen følges korrekt og effektivt. 
<br><br>
En velformuleret udbudsplan er afgørende for at sikre en åben og konkurrencepræget indkøbsproces, hvor potentielle leverandører har lige muligheder for at byde på opgaven. Det hjælper også med at minimere risici og sikre, at organisationen opnår de nødvendige varer eller tjenesteydelser til de bedst mulige vilkår.
<br><br>
Planen kan variere afhængigt af kompleksiteten og omfanget af indkøbet, men nogle almindelige elementer inkluderer:
<br><br>
1.   Projektidentifikation: <br>En beskrivelse af projektet, der angiver formålet, omfanget og de nødvendige varer eller tjenesteydelser.
<br><br>
2.   Behovsanalyse: <br>En analyse af organisationens eller projektets behov, der identificerer specifikke krav og specifikationer for de ønskede varer eller tjenesteydelser.
<br><br>
3.   Budgetfastlæggelse: <br>Allokering af midler og fastlæggelse af økonomiske retningslinjer for udbudsprocessen.
<br><br>
4.   Markedsanalyse: <br>En evaluering af markedet for at identificere potentielle leverandører, konkurrencedygtige priser og markedstendenser.
<br><br>
5.   Udbudsmetode: <br>Beslutning om den bedste metode til at indhente tilbud, såsom offentlig udbud, begrænset udbud, konkurrencepræget dialog eller direkte forhandlinger.
<br><br>
6.   Forberedelse af Udbudsmateriale: <br>Udarbejdelse af alle nødvendige dokumenter og specifikationer, der skal fremlægges for potentielle leverandører, herunder udbudsbetingelser, kontraktdetaljer og tekniske krav.
<br><br>
7.   Tidsplan for Udbudsprocessen: <br>Fastlæggelse af en tidsramme for hele udbudsprocessen, herunder datoer for udbudsbekendtgørelser, tilbudsfrister og evaluering af tilbud.
<br><br>
8.   Kommunikation med Leverandører: <br>Fastlæggelse af procedurer for at kommunikere med potentielle leverandører, besvare spørgsmål og give eventuelle opdateringer i løbet af udbudsprocessen.
<br><br>
9.   Evaluering og Tildeling: <br>Kriterier og procedurer for evaluering af modtagne tilbud og tildeling af kontrakten til den mest kvalificerede leverandør.
<br><br>

10.   Kontraktindgåelse: <br>Procedurer for udarbejdelse og underskrivelse af kontrakter med de valgte leverandører, herunder alle nødvendige juridiske og kontraktuelle forhold.
<br><br>
11.   Rapportering og Overvågning: <br>Implementering af rapporterings- og overvågningssystemer for at evaluere udbudsprocessen og sikre overholdelse af retningslinjer og regler.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser31" id="bar5.14">
    <h6 class="header" @click="toggleBar('bar5.14')"><strong class="text-[35px]">+</strong> Hvad er en Digital transformation? (arbejdsgange)</h6>
    <div class="content" @click="toggleBar('bar5.14')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Digital transformation refererer til den omfattende integration og anvendelse af digitale teknologier, processer og kulturer i alle aspekter af en organisation for at drive forretningsforbedringer og skabe merværdi. Det handler ikke kun om at implementere ny teknologi, men også om at omstrukturere forretningsprocesser, kulturelle elementer og kundeoplevelser for at udnytte digitale muligheder fuldt ud.
<br><br>
Digital transformation kan have dybtgående virkninger på en organisation og dens konkurrenceevne. Det stræber efter at skabe mere agile, innovative og kundeorienterede virksomheder, der er i stand til at tilpasse sig de skiftende krav i det digitale landskab. Virksomheder gennemgår ofte digital transformation for at forbedre operationel effektivitet, øge innovation, nå nye markeder og tilpasse sig de ændrede forventninger fra kunder og interessenter.
<br><br>
Nøgleelementer i digital transformation inkluderer:
<br><br>
1.   Teknologiintegration: <br>Implementering af nye teknologier som cloud computing, kunstig intelligens, maskinlæring, Internet of Things (IoT), blockchain og andre digitale værktøjer for at automatisere processer, forbedre effektiviteten og muliggøre datadrevne beslutninger.
<br><br>
2.   Forretningsprocesser: <br>Gennemgang og omstrukturering af eksisterende forretningsprocesser for at sikre, at de drager fuld fordel af digitale værktøjer og skaber mere smidige og effektive arbejdsgange.
<br><br>
3.   Kundeoplevelser: <br>Skabelse af digitale oplevelser, der imødekommer kundernes behov og forventninger. Dette kan omfatte digitale grænseflader, personalisering af tjenester og brugen af data til at forbedre kundeinteraktionen.
<br><br>
4.   Dataudnyttelse: <br>Effektiv indsamling, analyse og anvendelse af store datamængder for at opnå indsigt, optimere beslutningsprocesser og støtte innovation.
<br><br>
5.   Organisationskultur: <br>Etablering af en kultur, der er åben over for forandring, innovation og teknologisk integration. Dette kan omfatte uddannelse af medarbejdere, fremme af samarbejde og opmuntring til eksperimentering.
<br><br>
6.   Ledelsesengagement: <br>Aktiv involvering og støtte fra ledelsen er afgørende for at drive digital transformation. Ledelsen skal være fortaler for forandringer, tilskynde til risikotagning og fremme en kultur af konstant forbedring.
<br><br>
7.   Sikkerhed og Overholdelse: <br>Integration af sikkerhedsforanstaltninger for at beskytte digitale aktiver og data samt overholdelse af relevante love og reguleringer.
</p>
        </div>
    </div>
</div>

<div class="baranalyser baranalyser32" id="bar5.15">
    <h6 class="header" @click="toggleBar('bar5.15')"><strong class="text-[35px]">+</strong> Hvad er Grøn indkøb?</h6>
    <div class="content" @click="toggleBar('bar5.15')">
        <div class="bar-flex2">
            <p class="bar-lille-text">Grøn indkøb, også kendt som bæredygtigt indkøb eller miljøvenligt indkøb, refererer til indkøbspraksis, hvor organisationer og forbrugere prioriterer produkter og tjenesteydelser, der har mindre negativ indvirkning på miljøet og fremmer bæredygtighed. Formålet med grøn indkøb er at reducere den samlede miljøpåvirkning af forbrug og forretningsaktiviteter ved at vælge varer og tjenesteydelser, der er produceret og leveret med hensyn til miljømæssige, sociale og økonomiske faktorer.
<br><br>
Grøn indkøb kan implementeres på både forbrugerniveau og i virksomheder og offentlige organisationer. Mange virksomheder og institutioner vedtager grønne indkøbspolitikker for at reducere deres miljøpåvirkning og demonstrere et engagement i bæredygtighed. Grøn indkøb spiller en vigtig rolle i bestræbelserne på at bevæge sig mod mere bæredygtige forbrugs- og produktionsmønstre og opnå globale miljømæssige mål.
<br><br>
Nøgleelementer i grøn indkøbspraksis inkluderer:
<br><br>
1.   Miljøcertificeringer: <br>Valg af produkter og tjenesteydelser, der bærer anerkendte miljøcertificeringer, såsom Energy Star, EU-Blomsten eller andre miljømærker, der indikerer, at varerne er produceret med hensyn til bæredygtighed.
<br><br>
2.   Livscyklusanalyse: <br>Overvejelse af hele livscyklussen for et produkt, herunder råvareudvinding, produktion, distribution, brug og bortskaffelse for at vurdere den samlede miljøpåvirkning.
<br><br>
3.   Energiforbrug og CO2-aftryk: <br>Vurdering af produkters og tjenesteydelsers energiforbrug og relaterede CO2-udledninger for at fremme valg, der reducerer klimapåvirkningen.
<br><br>
4.   Genbrug og genanvendelse: <br>Prioritering af produkter, der er genanvendelige eller fremstillet af genbrugte materialer, og støtte til indkøb af genbrugte eller genanvendelige produkter.
<br><br>
5.   Lokal og bæredygtig sourcing: <br>Fremme af lokal sourcing for at reducere transportafstande og støtte bæredygtige produktionsmetoder og leverandører.
<br><br>
6.   Social ansvarlighed: <br>Overvejelse af sociale og etiske faktorer, herunder arbejdsforhold, arbejdstagerrettigheder og leverandørers sociale ansvar.
<br><br>
7.   Ecodesign: <br>Fremme af produkter, der er designet med henblik på minimal miljøpåvirkning, længere levetid og let adskillelse for genanvendelse eller korrekt bortskaffelse.
<br><br>
8.   Energieffektivitet: <br>Valg af apparater, udstyr og teknologier, der er energieffektive og opfylder høje standarder for miljøvenlighed.
<br><br>
9.   Fremme af bæredygtige praksisser: <br>Samarbejde med leverandører og partnere, der aktivt forfølger bæredygtige forretningsmetoder.
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
    margin: 100px 0 200px 0;
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

@media screen and (max-width: 767px) {
.bar {
  min-width: 95vw;
}
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

@media screen and (max-width: 767px) {
.baranalyser {
  min-width: 90vw;
  height: 65px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser {
  height: 84px;
}
}

.header {
  padding: 10px;
  text-align: center;
  font-size: 30px;
}

@media screen and (max-width: 767px) {
  .header {
  font-size: 20px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .header {
  line-height: 30px;
}
}


.content {
  display: none;
  padding: 10px;
  text-align: center;
  height: 100%;
  font-size: 20px;
  margin: auto;
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
  width:100%;
  
}

@media screen and (max-width: 767px) {
  .bar-flex2 {
  margin-top: 10px;
}
}

.content{
  max-width: 1300px;
}

.bar.active {
  height: auto; /* Adjust the height as needed */
  padding-bottom: 50px;
  width: 80%;
}

.baranalyser.active {
  height: 550px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser.active {
  height: 520px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1090px) {
  .baranalyser.active {
    height: 700px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser.active {
    height: 660px;
}
}

.baranalyser2.active {
  height: 690px; 
}

@media screen and (max-width: 767px) {
  .baranalyser2.active {
  height: 730px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser2.active {
    height: 840px;
}
}


.baranalyser3.active {
  height: 390px; 
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser3.active {
    height: 450px;
}
}

.baranalyser4.active {
  height: 480px; 
}

@media screen and (max-width: 767px) {
  .baranalyser4.active {
  height: 520px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser4.active {
    height: 630px;
}
}

.baranalyser5.active {
  height: 460px; 
}

@media screen and (max-width: 767px) {
  .baranalyser5.active {
  height: 420px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser5.active {
    height: 520px;
}
}

.baranalyser6.active {
  height: 590px; 
}

@media screen and (max-width: 767px) {
  .baranalyser6.active {
  height: 625px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser6.active {
    height: 755px;
}
}

.baranalyser7.active {
  height: 1200px; 
}

@media screen and (max-width: 767px) {
  .baranalyser7.active {
  height: 1230px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser7.active {
    height: 1520px;
}
}

.baranalyser8.active {
  height: 1850px; 
}

@media screen and (max-width: 767px) {
  .baranalyser8.active {
  height: 1910px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser8.active {
    height: 2360px;
}
}

.baranalyser9.active {
  height: 1160px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser9.active {
  height: 1200px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser9.active {
    height: 1520px;
}
}

.baranalyser10.active {
  height: 1120px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser10.active {
  height: 1250px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser10.active {
    height: 1520px;
}
}

.baranalyser11.active {
  height: 2180px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser11.active {
  height: 2240px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser11.active {
    height: 2780px;
}
}


.baranalyser12.active {
  height: 1770px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser12.active {
  height: 1810px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser12.active {
    height: 2200px;
}
}


.baranalyser13.active {
  height: 1950px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser13.active {
  height: 2000px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser13.active {
    height: 2440px;
}
}

.baranalyser14.active {
  height: 2120px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser14.active {
  height: 2090px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser14.active {
    height: 2510px;
}
}

.baranalyser15.active {
  height: 2320px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser15.active {
  height: 2425px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser15.active {
    height: 2980px;
}
}

.baranalyser16.active {
  height: 2250px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser16.active {
  height: 2240px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser16.active {
    height: 2780px;
}
}

.baranalyser17.active {
  height: 1710px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser17.active {
  height: 1730px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser17.active {
    height: 2170px;
}
}

.baranalyser18.active {
  height: 2380px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser18.active {
  height: 2410px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser18.active {
    height: 2960px;
}
}

.baranalyser19.active {
  height: 1360px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser19.active {
  height: 1510px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser19.active {
    height: 1790px;
}
}

.baranalyser20.active {
  height: 2180px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser20.active {
  height: 2245px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser20.active {
    height: 2780px;
}
}

.baranalyser21.active {
  height: 2380px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser21.active {
  height: 2470px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser21.active {
    height: 3020px;
}
}

.baranalyser22.active {
  height: 1840px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser22.active {
  height: 1810px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser22.active {
    height: 2240px;
}
}

.baranalyser23.active {
  height: 1870px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser23.active {
  height: 1915px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser23.active {
    height: 2310px;
}
}

.baranalyser24.active {
  height: 2310px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser24.active {
  height: 2380px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser24.active {
    height: 2920px;
}
}

.baranalyser25.active {
  height: 2310px; /* Adjust the height as needed */
}

.baranalyser26.active {
  height: 2280px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser26.active {
  height: 2350px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser26.active {
    height: 2950px;
}
}

.baranalyser27.active {
  height: 2410px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser27.active {
  height: 2430px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser27.active {
    height: 3050px;
}
}

.baranalyser28.active {
  height: 2510px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser28.active {
  height: 2470px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser28.active {
    height: 3020px;
}
}

.baranalyser29.active {
  height: 2180px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser29.active {
  height: 2265px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser29.active {
    height: 2780px;
}
}

.baranalyser30.active {
  height: 2380px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser30.active {
  height: 2375px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser30.active {
    height: 2920px;
}
}

.baranalyser31.active {
  height: 1940px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser31.active {
  height: 2105px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser31.active {
    height: 2580px;
}
}

.baranalyser32.active {
  height: 2210px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser32.active {
  height: 2215px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser32.active {
    height: 2650px;
}
}

.baranalyser33.active {
  height: 1980px; /* Adjust the height as needed */
}

@media screen and (max-width: 767px) {
  .baranalyser33.active {
  height: 1950px;
}
}

@media only screen and (min-width: 768px) and (max-width: 1140px) {
  .baranalyser33.active {
    height: 2400px;
}
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
    max-width: 800px;
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
   font-size: 14px;
   line-height: 27px;
  }
}
 

</style>