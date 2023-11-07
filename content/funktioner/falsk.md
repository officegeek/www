---
title: "FALSK"
description: Retunere altid værdien FALSK
vimeo: 335893726
downloads: 
- text: File xyz
  url: files/funktioner/logik.xlsx
reference: 
  - SAND
  - HVIS
  - OG
  - ELLER
funktioner_kategorier:
- Logik
---

**FALSK** kræver **ingen argumenter** og **returnerer altid** den logiske værdi **FALSK**. Denne funktion er ofte brugt i formler, hvor en logisk værdi er nødvendig, især i kombination med logiske funktioner som *HVIS*, *OG*, og *ELLER*.

<!--more-->

Her er et eksempel på brugen af **FALSK**:

    =HVIS(C4 > 20; SAND; FALSK)

I dette eksempel vil funktionen **HVIS** tjekke, om værdien i celle *A1* er større end *20*. Hvis betingelsen er *sand*, returnerer den **SAND**, og hvis betingelsen er *falsk*, returnerer den **FALSK**.

FALSK-funktionen kan også bruges direkte i en celle for at sætte cellens værdi til FALSE, som så:

    =FALSK()

Dette vil simpelthen sætte cellens værdi til den logiske værdi FALSK.

## UK
FALSE