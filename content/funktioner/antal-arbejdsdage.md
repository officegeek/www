---
title: ANTAL.ARBEJDSDAGE
description: Find antallet af arbejdsdage mellem to datoer.
vimeo: 335893726
downloads: 
- text: File xyz
  url: files/blog/chartgpt.xlsm
reference: 
  - ARBEJDSDAG
  - ANTAL.ARBEJDSDAGE.INTL
  - ARBEJDSDAG.INTL
funktioner_kategorier:
- Dato og klokkeslæt
---

Funktionen ANTAL.ARBEJDSDAGE returnerer antallet af arbejdsdage mellem to datoer, eksklusiv weekender og helligdage.

<!--more-->

Her er et eksempel på brugen af ANTAL.ARBEJDSDAGE

    =ANTAL.ARBEJDSDAGE(STARTSDATO; SLUTDATO; [Helligdage])

- **STARTSDATO**: Den dato du vil starte tællingen fra.
- **SLUTDATO**: Den dato du vil tælle til.
- [**Helligdage**]: En valgfri liste over datoer, der skal betragtes som helligdage og derfor ikke tælles som arbejdsdage.