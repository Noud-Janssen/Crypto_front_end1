<link rel="stylesheet" href="markdown_styles.css">

<div class="title_page">
    <h1>Test Rapport</h1>
    <img src="assets/title_image.jpg" alt="image_not_loaded"></img>
    <div>
      <h2>Noud Janssen</h2>
      <h2>1202226@student.roc-nijmegen.nl</h2>
      <h2>TIA4V2b</h2>
    </div>
</div>

# Inhoudsopgave

- [Inhoudsopgave](#inhoudsopgave)
- [Introductie](#introductie)
- [Test scenario's](#test-scenarios)
  - [Zoeken van een bestaande munt](#zoeken-van-een-bestaande-munt)
  - [Zoeken van een niet bestaande munt](#zoeken-van-een-niet-bestaande-munt)
  - [Opslaan van een munt als favoriet](#opslaan-van-een-munt-als-favoriet)
  - [Het weergeven van een munt](#het-weergeven-van-een-munt)
  - [het weergeven van de top 10](#het-weergeven-van-de-top-10)
- [Unit tests](#unit-tests)
- [Aanbeveling](#aanbeveling)

# Introductie

Afgelopen weken (april 2024) is de wep-applicatie "coinbit" getest. Een applicatie welke data toont van huidige populaire crypto munten. 

In dit document worden de test resultaten besproken van het eerder beschreven testplan. Er wordt gekeken naar te test scenario's en de unit tests. Verder wordt er een aanbeveling gegeven op basis van de test resultaten.

# Test scenario's

## Zoeken van een bestaande munt

| ID       | Title                         | Description                             | Priority | Pre-condition                      |
| -------- | ----------------------------- | --------------------------------------- | -------- | ---------------------------------- |
| zoeken-1 | Zoeken van een bestaande munt | Zoeken naar een munt welke te vinden is | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door    | Getest op     | Test status |
| -------------- | ------------- | ----------- |
| Dorien Janssen | 20 april 2024 | Getest      |

<br><br>

| #   | Test stap                | Verwacht resultaat                                                                                                   | Test data                                         | Werkelijk resultaat                              | Geslaagd? |
| --- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------ | --------- |
| 1   | Klik op de zoekbalk      | De haken worden oranje, indicerend dat de gebruiker kan zoeken                                                       |                                                   | De haken worden oranje                           | Geslaagd  |
| 2   | Voer een munt in         | De lijst met links naar munten word steeds kleiner,<br> totdat de gewenste munt is gevonden                          | Mogelijke zoek opdrachten:<br>Bitcoin<br>Ethereum | De lijst word kleiner, de juiste munt verschijnt | Geslaagd  |
| 3   | Druk op de "Enter" toets | De gebruiker wordt doorgelinkt naar de eerste munt in de resultaten lijst, <br>Deze is gelijk aan de ingevoerde munt |                                                   | De gebruiker wordt doorgelinkt                   | geslaagd  |

<div class="end_page"></div>

## Zoeken van een niet bestaande munt

| ID       | Title                              | Description                                  | Priority | Pre-condition                      |
| -------- | ---------------------------------- | -------------------------------------------- | -------- | ---------------------------------- |
| zoeken-2 | Zoeken van een niet bestaande munt | Zoeken naar een munt welke niet te vinden is | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door    | Getest op     | Test status       |
| -------------- | ------------- | ----------------- |
| Dorien Janssen | 20 April 2024 | Nog niet begonnen |

<br><br>

| #   | Test stap                     | Verwacht resultaat                                                                                             | Test data                                           | Werkelijk resultaat                                                  | Geslaagd? |
| --- | ----------------------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------- | --------- |
| 1   | Klik op de zoekbalk           | De haken worden oranje, indicerend dat de gebruiker kan zoeken                                                 |                                                     | De haken worden oranje                                               | Geslaagd  |
| 2   | Voer een willekeurig woord in | De lijst met links naar munten word steeds kleiner,<br> totdat er geen munten meer mogelijk zijn in resultaten | Mogelijke zoekopdracht:<br>"Deze munt bestaat niet" | De lijst wordt kleiner, totdat er geen munten meer in de lijst staan | Geslaagd  |
| 3   | Druk op de "Enter" toets      | De gebruiker wordt niet doorgelinkt                                                                            |                                                     | Er gebeurt niks                                                      | Geslaagd  |

<div class="end_page"></div>

## Opslaan van een munt als favoriet

| ID         | Title                             | Description                            | Priority | Pre-condition                      |
| ---------- | --------------------------------- | -------------------------------------- | -------- | ---------------------------------- |
| favoriet-1 | opslaan van een munt als favoriet | Een van de munten opslaan als favoriet | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door    | Getest op  | Test status       |
| -------------- | ---------- | ----------------- |
| Dorien Janssen | April 2024 | Nog niet begonnen |

<br><br>

| #   | Test stap                                                        | Verwacht resultaat                                                              | Test data | Werkelijk resultaat                                                                                    | Geslaagd? |
| --- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------ | --------- |
| 1   | De gebruiker klikt op een hartje, op een van de zichtbare munten | Het hartje wordt gevuld<br>De munt wordt toegevoegd aan de lijst met favorieten |           | Het hartje veranderd, die is nu ingevuld. <br> Bij de lijst links "favorieten" is de munt nu zichtbaar | Geslaagd  |

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

| #   | Test stap                                   | Verwacht resultaat                                                                                   | Test data | Werkelijk resultaat                          | Geslaagd? |
| --- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------- | -------------------------------------------- | --------- |
| 1   | De gebruiker klikt op een van de munten     | De gebruiker wordt doorgelinkt naar een munt pagina                                                  |           | De gebruiker wordt doorgelinkt               | Geslaagd  |
| 2   | De gebruiker wacht tot alle data is geladen | Er wordt een grafiek getoond met informatie over de munt<br>Er wordt informatie over de munt getoond |           | Er wordt een grafiek en overige data getoond | Geslaagd  |

<div class="end_page"></div>

## het weergeven van de top 10

| ID          | Title                       | Description                                               | Priority | Pre-condition                      |
| ----------- | --------------------------- | --------------------------------------------------------- | -------- | ---------------------------------- |
| weergeven-1 | Het weergeven van de top 10 | Tonen van de top tien munten in verschillende categorieën | 1        | De gebruiker is op de hoofd pagina |

<br><br>

| Getest door    | Getest op     | Test status       |
| -------------- | ------------- | ----------------- |
| Dorien Janssen | 20 April 2024 | Geslaagd |

<br><br>

| #   | Test stap                                               | Verwacht resultaat                                                                                         | Test data | Werkelijk resultaat           | Geslaagd? |
| --- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | --------- | ----------------------------- | --------- |
| 1   | De gebruiker drukt op de knop gelabeld:<br>"Market Cap" | De lijst van de top tien veranderd niet<br>(omdat de top 10 al op market cap is geselecteerd)              |           | De juiste top 10 word getoond | Geslaagd  |
| 2   | De gebruiker drukt op de knop gelabeld:<br>"Price"      | De lijst van de top tien veranderd.<br>Deze lijst laat nu de top tien munten in de categorie prijs zien    |           | De lijst veranderd            | Geslaagd  |
| 3   | De gebruiker drukt op de knop gelabeld:<br>"Change"     | De lijst van de top tien veranderd.<br>Deze lijst laat nu de top tien munten in de categorie stijging zien |           | De lijst verander             | Geslaagd  |

# Unit tests

De volgende Unit Tests zijn geschreven en getest. Dit is gedaan met het vitest framework.

| #   | Component        | Testnaam                                 | Geslaagd |
| --- | ---------------- | ---------------------------------------- | -------- |
| 1   | CoinItem         | renders the component without props      | Ja       |
| 2   | CoinItem         | renders the component with props         | Ja       |
| 3   | CoinItem         | renders the component with Illegal props | Ja       |
| 4   | CoinItem         | favorites the component                  | Ja       |
| 5   | FavoritesCompact | renders the component without props      | Ja       |
| 6   | top_ten          | renders the component without props      | Ja       |
| 7   | top_ten          | button select by market cap              | Ja       |

Alle unit tests, zoals beschreven in de source code, zijn geslaagd.

Echter worden niet alle components getest. Dit komt omdat deze components niet simpel van aard zijn. Het is dan niet nodig om te testen "om te testen".

# Aanbeveling

Alle test scenario's en unit tests zijn geslaagd. Er zijn geen andere bugs gevonden tijdens het testen. Hiermee kan de conclusie getrokken worden dat de web-applicatie live kan gaan.

Deze keuze is onderbouwt door de kennis dat applicatie als enigste functie heeft het tonen van data. Er is geen user input welke met een database of dergelijke verbind.