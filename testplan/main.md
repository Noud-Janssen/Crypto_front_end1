<link rel="stylesheet" href="markdown_styles.css">

<div class="title_page">
    <h1>Testplan</h1>
    <img src="assets/title_image.png" alt="image_not_loaded"></img>
    <div>
      <h2>Noud Janssen</h2>
      <h2>1202226@student.roc-nijmegen.nl</h2>
      <h2>TIA4V2b</h2>
    </div>
</div>

# Inhoudsopgave

- [Inhoudsopgave](#inhoudsopgave)
- [Introductie](#introductie)
- [Scope](#scope)
  - [Test scenario's](#test-scenarios)
  - [Unit tests](#unit-tests)
- [Strategie](#strategie)
  - [Zoeken van een bestaande munt](#zoeken-van-een-bestaande-munt)
  - [Zoeken van een niet bestaande munt](#zoeken-van-een-niet-bestaande-munt)
  - [Opslaan van een munt als favoriet](#opslaan-van-een-munt-als-favoriet)
  - [Het weergeven van een munt](#het-weergeven-van-een-munt)
  - [het weergeven van de top 10](#het-weergeven-van-de-top-10)
- [Test personen](#test-personen)
- [Start en exit criteria](#start-en-exit-criteria)
  - [Start criteria](#start-criteria)
  - [Exit Criteria](#exit-criteria)
- [Welke omgeving test je](#welke-omgeving-test-je)
  - [Hardware](#hardware)
  - [Software:](#software)
- [Rapport](#rapport)

# Introductie

Het testen van software is een belangrijke stap in development cycle van het ontwikkelen. Dit wordt misschien nog wel belangrijker wanneer de software wordt ontwikkeld in een taal/omgeving waarin de ontwikkel(laars) nog geen ervaring in hebben.<br><br>
In dit testplan zal het plan van testen worden toegelicht. Zo wordt er gekeken naar wat er wordt getest, hoe het wordt getest en door wie. Nadat de tests zijn uitgevoerd, zal het testplan worden bijgewerkt met het test rapport. Ook zullen de test scenarios gelijktijdig bijgewerkt worden met de resultaten en statussen.

# Scope

De applicatie "coinbits" is een relatief kleine applicatie. Toch zal de scope van de testen verder worden uitgelicht:

## Test scenario's

De volgende test scenario's worden getest:

- Zoeken van bestaande munten.
- Zoeken van niet bestaande munten.
- Opslaan van munten als favoriet.
- Het weergeven van munten
- Het weergeven van de top 10 munten in de volgende categorieën:
  - market cap
  - price
  - change 24 hr

## Unit tests

De volgende componenten zullen doodmiddel met unit-tests gecontroleerd worden op de volgende scenario's:

* Het renderen van een component zonder props
* Het renderen van een component met props
* Het renderen van en het klikken op een component

De unit tests worden gemaakt met het vitest framework. 

# Strategie

## Zoeken van een bestaande munt

| ID       | Title                         | Description                             | Priority | Pre-condition                      |
| -------- | ----------------------------- | --------------------------------------- | -------- | ---------------------------------- |
| zoeken-1 | Zoeken van een bestaande munt | Zoeken naar een munt welke te vinden is | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door | Getest op | Test status       |
| ----------- | --------- | ----------------- |
|             |           | Nog niet begonnen |

<br><br>

| #   | Test stap                | Verwacht resultaat                                                                                                   | Test data                                         | Werkelijk resultaat | Geslaagd? |
| --- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------- | --------- |
| 1   | Klik op de zoekbalk      | De haken worden oranje, indicerend dat de gebruiker kan zoeken                                                       |                                                   |                     |           |
| 2   | Voer een munt in         | De lijst met links naar munten word steeds kleiner,<br> totdat de gewenste munt is gevonden                          | Mogelijke zoek opdrachten:<br>Bitcoin<br>Ethereum |
| 3   | Druk op de "Enter" toets | De gebruiker wordt doorgelinkt naar de eerste munt in de resultaten lijst, <br>Deze is gelijk aan de ingevoerde munt |

<div class="end_page"></div>

## Zoeken van een niet bestaande munt

| ID       | Title                              | Description                                  | Priority | Pre-condition                      |
| -------- | ---------------------------------- | -------------------------------------------- | -------- | ---------------------------------- |
| zoeken-2 | Zoeken van een niet bestaande munt | Zoeken naar een munt welke niet te vinden is | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door | Getest op | Test status       |
| ----------- | --------- | ----------------- |
|             |           | Nog niet begonnen |

<br><br>

| #   | Test stap                     | Verwacht resultaat                                                                                             | Test data                                           | Werkelijk resultaat | Geslaagd? |
| --- | ----------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ------------------- | --------- |
| 1   | Klik op de zoekbalk           | De haken worden oranje, indicerend dat de gebruiker kan zoeken                                                 |                                                     |                     |           |
| 2   | Voer een willekeurig woord in | De lijst met links naar munten word steeds kleiner,<br> totdat er geen munten meer mogelijk zijn in resultaten | Mogelijke zoekopdracht:<br>"Deze munt bestaat niet" |
| 3   | Druk op de "Enter" toets      | De gebruiker wordt niet doorgelinkt                                                                            |

<div class="end_page"></div>

## Opslaan van een munt als favoriet

| ID         | Title                             | Description                            | Priority | Pre-condition                      |
| ---------- | --------------------------------- | -------------------------------------- | -------- | ---------------------------------- |
| favoriet-1 | opslaan van een munt als favoriet | Een van de munten opslaan als favoriet | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door | Getest op | Test status       |
| ----------- | --------- | ----------------- |
|             |           | Nog niet begonnen |

<br><br>

| #   | Test stap                                                        | Verwacht resultaat                                                              | Test data | Werkelijk resultaat | Geslaagd? |
| --- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------- | ------------------- | --------- |
| 1   | De gebruiker klikt op een hartje, op een van de zichtbare munten | Het hartje wordt gevuld<br>De munt wordt toegevoegd aan de lijst met favorieten |           |                     |           |

<div class="end_page"></div>

## Het weergeven van een munt

| ID          | Title                      | Description                                      | Priority | Pre-condition                      |
| ----------- | -------------------------- | ------------------------------------------------ | -------- | ---------------------------------- |
| weergeven-1 | Het weergeven van een munt | Een munt selecteren om meer details op te vragen | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door | Getest op | Test status       |
| ----------- | --------- | ----------------- |
|             |           | Nog niet begonnen |

<br><br>

| #   | Test stap                                   | Verwacht resultaat                                                                                   | Test data | Werkelijk resultaat | Geslaagd? |
| --- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------------------- | --------- |
| 1   | De gebruiker klikt op een van munten        | De gebruiker wordt doorgelinkt naar een munt pagina                                                  |           |                     |           |
| 2   | De gebruiker wacht tot alle data is geladen | Er wordt een grafiek getoond met informatie over de munt<br>Er wordt informatie over de munt getoond |

<div class="end_page"></div>

## het weergeven van de top 10

| ID          | Title                       | Description                                               | Priority | Pre-condition                      |
| ----------- | --------------------------- | --------------------------------------------------------- | -------- | ---------------------------------- |
| weergeven-1 | Het weergeven van de top 10 | Tonen van de top tien munten in verschillende categorieën | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door | Getest op | Test status       |
| ----------- | --------- | ----------------- |
|             |           | Nog niet begonnen |

<br><br>

| #   | Test stap                                               | Verwacht resultaat                                                                                         | Test data | Werkelijk resultaat | Geslaagd? |
| --- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------- | ------------------- | --------- |
| 1   | De gebruiker drukt op de knop gelabeld:<br>"Market Cap" | De lijst van de top tien veranderd niet<br>(omdat de top 10 al op market cap is geselecteerd)              |           |                     |           |
| 2   | De gebruiker drukt op de knop gelabeld:<br>"Price"      | De lijst van de top tien veranderd.<br>Deze lijst laat nu de top tien munten in de categorie prijs zien    |
| 3   | De gebruiker drukt op de knop gelabeld:<br>"Change"     | De lijst van de top tien veranderd.<br>Deze lijst laat nu de top tien munten in de categorie stijging zien |

# Test personen

De testpersonen zijn nog niet geselecteerd. Mogelijke voorkeuren zijn wel:

- Melvin van den brink.
- Finn Josten.

# Start en exit criteria

## Start criteria

- Een werkende npm versie
- Een werkende browser
- Een versie op github van coinbits, op de "main" branch

## Exit Criteria

- Alle components in de scope zijn getest.
- Het testrapport is geschreven en gecontroleerd door een derde persoon.
- Alle problemen welke een productie versie verhinderen zijn opgelost, en weder getest.

# Welke omgeving test je

## Hardware

Er wordt getest op persoonlijke computers;

Er wordt niet getest op smart phones, of andere smart devices. Dit omdat de applicatie niet responsive is gebouwd.

## Software:

| Naam    | Versie |
| ------- | ------ |
| npm     | 10.5.1 |
| Browser | \*     |

\* Meerdere browsers zijn mogelijk:
- Firefox
- Firefox developer edition
- Edge
- Chrome
- Brave
- Opera
- OperaGX

# Rapport


