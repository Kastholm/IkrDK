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
  height: 690px; /* Adjust the height as needed */
}

.baranalyser3.active {
  height: 390px; /* Adjust the height as needed */
}

.baranalyser4.active {
  height: 480px; /* Adjust the height as needed */
}

.baranalyser5.active {
  height: 460px; /* Adjust the height as needed */
}

.baranalyser6.active {
  height: 590px; /* Adjust the height as needed */
}

.baranalyser7.active {
  height: 1200px; /* Adjust the height as needed */
}

.baranalyser8.active {
  height: 1850px; /* Adjust the height as needed */
}

.baranalyser9.active {
  height: 1160px; /* Adjust the height as needed */
}

.baranalyser10.active {
  height: 1120px; /* Adjust the height as needed */
}

.baranalyser11.active {
  height: 2180px; /* Adjust the height as needed */
}

.baranalyser12.active {
  height: 1770px; /* Adjust the height as needed */
}

.baranalyser13.active {
  height: 1950px; /* Adjust the height as needed */
}

.baranalyser14.active {
  height: 2120px; /* Adjust the height as needed */
}

.baranalyser15.active {
  height: 2320px; /* Adjust the height as needed */
}

.baranalyser16.active {
  height: 2250px; /* Adjust the height as needed */
}

.baranalyser17.active {
  height: 1710px; /* Adjust the height as needed */
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