---
title: ARBEJDSDAG.INTL
description: Find dato plus et antal arbejdsdage.
vimeo: 335893726
downloads: 
- text: File arbejdsdag
  url: files/blog/chartgpt.xlsm
reference: 
  - ARBEJDSDAG
  - ANTAL.ARBEJDSDAGE
  - ARBEJDSDAG.INTL
funktioner_kategorier:
- Dato og klokkeslæt
---

**ARBEJDSDAG.INTL** er en udvidelse af **ARBEJDSDAG**, som giver dig mulighed for at definere, hvilke dage der skal betragtes som weekender. Dette er særligt nyttigt i lande eller kulturer, hvor weekenderne ikke nødvendigvis falder på lørdag og søndag.

<!--more-->

Her er syntaksen for **ARBEJDSDAG.INTL**

    =ARBEJDSDAG.INTL(startdato; dage; [weekend]; [feriedage])

- **startdato**: Den dato du vil starte tællingen fra.
- **dage**: Det antal arbejdsdage du vil lægge til eller trække fra.
- **[weekend]**: En, valgfri, kode eller et streng, der angiver hvilke dage der er weekender.
- **[feriedage]**: En valgfri liste over datoer, der skal betragtes som fridage/helligdage og derfor ikke tælles som arbejdsdage.

*Weekend-koden* kan være et tal eller en streng, der angiver hvilke dage der er weekender:

### Weekend tal

| Weekend Tal | Weekenddage     |
|-------------|-----------------|
| 1           | lørdag, søndag  |
| 2           | søndag, mandag  |
| 3           | mandag, tirsdag |
| 4           | tirsdag, onsdag |
| 5           | onsdag, torsdag |
| 6           | torsdag, fredag |
| 7           | fredag, lørdag  |
| 11          | kun søndag      |
| 12          | kun mandag      |
| 13          | kun tirsdag     |
| 14          | kun onsdag      |
| 15          | kun torsdag     |
| 16          | kun fredag      |
| 17          | kun lørdag      |

### Streng
- Strengen består af syv tegn (*0 eller 1*) for hver dag i ugen, startende med mandag, hvor 
  - "**1**" angiver en *fridag*
  - "**0**" angiver en *arbejdsdag*.
- **0000011** resulterer i en weekend, der er *lørdag* og *søndag*.



## Eksempel
Du vil finde datoen 10 arbejdsdage fra den *1. marts 2023*, og i din organisation betragtes *fredag* og *lørdag* som weekender. Der er en helligdag den *8. marts*. 

![](./image/arbejdsdag-intl.jpg)

Du kan bruge følgende formel:

    =ARBEJDSDAG.INTL(C3;C4;7;C7)
      eller
    =ARBEJDSDAG.INTL(C3; C4; "0000110"; C7)


- **startdato**: 01-03-2023 (*C3*)
- **dage**: 10 (*C4*)
- **weekend**: 0001001
- **feriedage**: *C7*

**Resultat**: 17-04-2023

## UK
WORKDAY.INTL