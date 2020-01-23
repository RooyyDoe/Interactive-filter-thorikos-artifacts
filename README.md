# Project Thorikos

In het nieuwe concept heeft de user net als bij het eerdere concept 2 manieren om de data te bekijken. De user kan informatie zien via het grid wat de archeologen in Thorikos zelf hebben aangelegd, en ze kunnen de data weergeven in een overzicht waarin de objecten in een bepaalde volgorde worden weergegeven.

Wanneer de user in het grid-view werkt, kan deze per vierkant het aantal items zien door middel van een heatmap. De heatmap is dan een visueel hulpmiddel voor de user om in 1 oogopslag te zien in welk vak er veel items gevonden zijn.

De user kan ook op 1 van de vakken klikken. Zodra je hierop klikt zal de gebruiker een overzicht van de objecten krijgen die in dat vak gevonden. Deze objecten worden weergegeven ook in een visuele overzichtspagina. Deze overzichtspagina bevat filter en sorteer opties.

Overige documentatie word gedocumenteerd op de [Dropbox Paper](https://www.dropbox.com/scl/fi/9egyw9rh498qxiydgdxln/Product-Biografie_-Project-Thorikos.paper?dl=0&rlkey=sd15tmakrpga5e8qmgkqb9ptg) van onze groep.

## Screenshots

### Design
<img width="1428" alt="Schermafdruk 2020-01-21 21 13 30" src="https://user-images.githubusercontent.com/40355914/72839677-02059200-3c93-11ea-94e9-ffeb65b90a2e.png">

### Prototype
<img width="1426" alt="Schermafdruk 2020-01-23 01 24 52" src="https://user-images.githubusercontent.com/40355914/72946405-2b035100-3d7f-11ea-97da-dd3b1b97e2fb.png">


- [Project Thorikos](#project-thorikos)
  - [Screenshots](#screenshots)
  - [Onderzoeksvraag](#onderzoeksvraag)
    - [Onderzoek](#onderzoek)
    - [Opdrachtgever](#opdrachtgever)
  - [Functionaliteiten](#functionaliteiten)
  - [Installatie](#installatie)
    - [Gebruik](#gebruik)
    - [Toekomst](#toekomst)
  - [Bronnen](#bronnen)
- [Licentie](#licentie)

## Onderzoeksvraag

Van onze opdrachtgever, de universiteit van Utrecht, hebben wij het volgende vraagstuk gekregen: “Is het mogelijk om een interactieve digitale visualisatie te maken voor de data die de universiteit van Utrecht heeft verzameld bij het archeologisch project in Thorikos?”

### Onderzoek

Er zijn verschillende datasets met data die verzameld zijn door de Universiteit van Utrecht, die wij kunnen gaan combineren om tot interessante inzichten te komen. Verder zijn er kaarten en een survey aangeleverd. Deze informatie kan tot inzichten leiden die het werk van de onderzoekers makkelijker maken.

### Opdrachtgever

Sinds 2011 doet de Universiteit van Utrecht, in samenwerking met de Universiteit Gent, onderzoek naar de nederzetting in Thorikos en de mijnbouw in zuidelijk Attika. Gezien het grote belang van Thorikos voor de ontstaansgeschiedenis van de Atheense polis in de vroege IJzertijd en in de Archaïsche Periode, is de Universiteit Utrecht van plan dit project in de komende jaren voort te zetten.

## Functionaliteiten

### Heathmap

Als visualisatie wilde wij als groep een heathmap gaan creëren waar de user de archeologische data kon zien op een kaart geplot. Hiervoor wilde ik gebruik gaan maken van D3.js, dit is een visualisatie library waar data verwerkt kan worden naar een interactieve visualisatie voor de gebruiker.

In deze heathmap wilden wij gebruik gaan maken van filters waarop de gebruiker naar een specifiek scherf kan gaan filteren en door te filteren bij de heathmap zou er een visueel overzicht komen waar een bepaalde scherf is gevonden in Thorikos.

> Dit is uiteindelijk niet gelukt door omstandigheden/tijdsgebrek.

### Filteren

Als hoofd doel wilde wij kunnen filteren in de archeologische data. Als filters hebben we een aantal opties uitgekozen omdat, niet elke data element gebruiksvriendelijk was om er een goed filter van te maken. De opties die na onze iteraties eruit zijn gekomen zijn:

- Year
- Shape Object
- Chronology
- Conservation
- Ware (Lastig geval)

Deze filters zullen gebruikt kunnen worden op de heathmap en op de overzichts pagina. Op de heathmap worden de resultaten aangegeven met kleuren en zullen deze veranderen van licht(weinig) naar donker(veel) en hiermee worden de hoeveelheden aangegeven.

Bij de overzichtspagina zal dit om een lijst gaan met alle scherven en kan de gebruiker deze filteren totdat er een optie overblijft. Op deze manier kan de gebruiker opzoek gaan naar een specifieke scherf.

### Details

Wij wilde een dynamische detail pagina waarop de gebruiker de overige informatie kon vinden over een scherf waar op geklikt is. Hier zijn verschillende data waardes zichtbaar wat uit ons onderzoek/feedback het meest relevant leek. Dit is een component op de overzichts pagina. Dit element is dynamisch bruikbaar en zal veranderen wanneer er op een andere scherf wordt gedrukt.

### PDF download

Floris vertelde ons dat hij graag een goede uitdraai wilt hebben van verschillende data die ze hebben verkregen tijdens het archeologisch onderzoek. Hierbij wilden wij een data uitdraai geven aan de gebruiker waarin te zien was wat voor data er beschikbaar was van de scherf die is geselecteerd.

> Dit is uiteindelijk niet gelukt door omstandigheden/tijdsgebrek.

## Installatie

**Kloon de repository van het project**
```
git clone https://github.com/RooyyDoe/project-thorikos.git
```

### Gebruik

**Voer de code uit**
```
Run the index.html into your browser
```
> of gebruik een live preview in uw eigen code editor als deze aanwezig is.

**Demo** is beschikbaar op: https://rooyydoe.github.io/project-thorikos/

## Toekomst

### Stylen

De style van deze applicatie kan in het vervolg beter nagebootst worden. Ik vind zelf dat het prototype er op sommige punten minder goed uitziet als het design. Dit zou ik graag willen verbeteren in de toekomst en zal hier dan ook dieper op in gaan en tot in de pixel nauwkeurig uitwerken.

### Functionaliteiten

Functionaliteiten die niet afgemaakt zijn of niet aan begonnen zijn zou ik graag willen afmaken. Hierbij wil ik dus een heathmap maken van de dataset en moet er een uitdraai kunnen worden gemaakt van het detail component.

### Framework

Toen ik was begonnen met coderen kwam ik er al snel achter dat componenten dynamisch moesten worden en ik niet precies wist hoe dit mogelijk was in een statische website. Ik wist dat dit een stuk makkelijker ging bij Vue/Svelte tijdens de tech-track van Information-Design. Achteraf heb ik een klein beetje spijt dat ik het niet met een framework heb gedaan denk dat het me aardig wat tijd had gescheeld.

### Dataset cleaning

De dataset heb ik zelf gecleaned en is dus niet gebruiksvriendelijk op deze manier. De gebruiker moet op dit moment de exacte dataset aanleveren hoe ik hem heb ontworpen. Uiteindelijk wil ik een stuk code schrijven wat de dataset perfect opschoont en de exacte data terug geeft die ik nodig heb om mijn applicatie te laten werken.

## Bronnen
* [Project Thorikos](http://thorikosproject.blogspot.com/) - Dit is de blog van het thorikos project overige informatie die we nodig hebben gehad zou hier vandaan komen.
* [MDN](https://developer.mozilla.org/) - Gebruikt voor de overige informatie over javascript.
* [Stack Overflow](https://stackoverflow.com/) - Gebruikt als ik bepaalde dingen niet snapte en extra informatie hierover nodig had.

# Licentie

Meer informatie over [License](https://help.github.com/en/articles/licensing-a-repository)

[MIT](https://github.com/RooyyDoe/project-thorikos/blob/master/LICENSE.txt) © [Roy Kuijper](https://github.com/RooyyDoe)
