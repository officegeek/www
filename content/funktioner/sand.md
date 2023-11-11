---
title: "SAND"
description: Retunere altid værdien SAND
vimeo: 883585908
downloads: 
- text: Fil logik.xlsx
  url: files/funktioner/logik.xlsx
reference: 
  - FALSK
  - HVIS
  - OG
  - ELLER
funktioner_kategorier:
- Logik
---

**SAND** kræver **ingen argumenter** og **returnerer altid** den logiske værdi **SAND**. Denne funktion er ofte brugt i formler, hvor en logisk værdi er nødvendig, især i kombination med logiske funktioner som *HVIS*, *OG*, og *ELLER*.

<!--more-->

Her er et eksempel på brugen af **SAND**:

    =HVIS(C4 <> 20; SAND; FALSK)

![](/image/sand.jpg)

I dette eksempel vil funktionen **HVIS** tjekke, om værdien i celle *A1* er mindre end *20*. Hvis betingelsen er *sand*, returnerer den **SAND**, og hvis betingelsen er *falsk*, returnerer den **FALSK**.

SAND-funktionen kan også bruges direkte i en celle for at sætte cellens værdi til SAND, som så:

    =SAND()

Dette vil simpelthen sætte cellens værdi til den logiske værdi **SAND**.

## UK
TRUE