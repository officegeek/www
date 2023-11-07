---
title: "HVIS"
description: Returnerer en værdi baseret på, om en betingelse er sand eller falsk
vimeo: 335893726
downloads: 
- text: File xyz
  url: files/funktioner/logik.xlsx
reference: 
  - HVIS.FEJL
  - HVISER
  - SAND
  - FALSK
funktioner_kategorier:
- Logik
---

HVIS er en grundlæggende logisk funktion, der returnerer en værdi baseret på, om en betingelse er sand eller falsk.

<!--more-->

Funktionen tager tre argumenter: 
- en betingelse
- en værdi, der returneres, hvis betingelsen er **sand** (*sandt_resultat*)
- en værdi, der returneres, hvis betingelsen er **falsk** (*falsk_resultat*).

Her er syntaksen for HVIS():

    =HVIS(*betingelse*; *[sandt_resultat]*; *[falsk_resultat]*)

## Salgs eksempel
Antag, at du har en liste over sælgere og deres salg, og du vil markere alle tal over 100.000 med teksten "**Godt salg**" og de andre med "**Forbedring nødvendig**".

![](/static/image/hvis.jpg)

Du kan bruge følgende **HVIS()**-formel i kolonne D:

    =HVIS(C4>100000;"Godt salg";"Forbedring nødvendig")

## UK
IF