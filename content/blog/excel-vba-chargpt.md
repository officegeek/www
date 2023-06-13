---
title: Brug ChatGPT til VBA kode
image: /images/blog/indholdsfortegnelse.jpg
summary: Hvordan du bruger ChatGPT til at udvikle Excel VBA kode
date: 2023-06-12
categories:
- excel
- vba
---

# ChatGPT og Excel Makro
Jeg har i mange år undervist i Excel VBA og et af de spørgsmål jeg har fået flest gange er noget i denne retning:

### Hvordan kan jeg selv finde ud af hvad de forskellige kommandoer/Funktioner hedder?

Jeg har indtil nu ikke haft et helt rigtigt svar, det er blevet til noget i retning af: *Det finder du ud af med tiden, prøv dig frem osv.*

Nu har jeg et bedre forslag, beskriv i almendelig klart tekst hvad det er du gerne vil have udført. Sæt det ind i [CharGPT](https://chat.openai.com) og du får enten noget kode der virker med det sammen eller i det mindste et rigtigt godt udgangspunkt.

En makro som jeg brugere tit indsætter et nyt ark med en indholdsfortegnelse over de forskellige ark og link til dem. Super anvendeligt når jeg udleverer eksempel filer på mine kurser.

Jeg prøvede med denne beskrivelse:

*Opret en Excel makro, der opretter et nyt ark med navnet Indhold. Indholds arket skal placeres som det første ark. Hvis det allerede eksister skal brugeren spørges om det skal slettes.*

*Loop igennem alle ark i Excel filen og tilføj et hyperlink til hvert ark i kolonne A i Indholds arket. Autotilpas bredden på kolonne A.*

![chatgpt](/images/blog/excel-vba-chatgpt.jpg)

## Uredigeret makro kode fra ChatGPT
```vba
Sub OpretIndholdsArk()
    Dim wb As Workbook
    Dim ws As Worksheet
    Dim indholdsArk As Worksheet
    Dim brugerSvar As VbMsgBoxResult
    Dim hyperlinkRække As Long
    
    ' Hent reference til arbejdsbogen og indholdsarket
    Set wb = ThisWorkbook
    On Error Resume Next
    Set indholdsArk = wb.Sheets("Indhold")
    On Error GoTo 0
    
    ' Tjek om indholdsarket allerede eksisterer
    If Not indholdsArk Is Nothing Then
        ' Spørg brugeren om indholdsarket skal slettes
        brugerSvar = MsgBox("Indholdsarket eksisterer allerede. Vil du slette det og fortsætte?", vbQuestion + vbYesNo)
        
        ' Afslut makroen, hvis brugeren vælger Nej
        If brugerSvar = vbNo Then Exit Sub
        
        ' Slet indholdsarket
        Application.DisplayAlerts = False
        indholdsArk.Delete
        Application.DisplayAlerts = True
    End If
    
    ' Opret et nyt indholdsark og placer det som det første ark
    Set indholdsArk = wb.Sheets.Add(Before:=wb.Sheets(1))
    indholdsArk.Name = "Indhold"
    
    ' Loop igennem alle ark i arbejdsbogen
    For Each ws In wb.Sheets
        ' Tilføj et hyperlink til indholdsarket i kolonne A
        hyperlinkRække = indholdsArk.Cells(indholdsArk.Rows.Count, 1).End(xlUp).Row + 1
        indholdsArk.Hyperlinks.Add Anchor:=indholdsArk.Cells(hyperlinkRække, 1), _
            Address:="", SubAddress:="'" & ws.Name & "'!A1", TextToDisplay:=ws.Name
    Next ws
    
    ' Autotilpas bredden på kolonne A
    indholdsArk.Columns("A").AutoFit
    
    ' Aktiver indholdsarket
    indholdsArk.Activate
End Sub
```

![Indholdsfortegnelse](/images/blog/indholdsfortegnelse.jpg)

Jeg har **intet ændret** i koden og den virker som den skal!

Prøv selv at indsætte mit forslag eller dit eget i [ChartGpt](https://chat.openai.com) og sæt resultat ind i et Excel VBA Module - Kør makroen!.

Du kan hente en Excel fil hvor koden er indsat: [chartgpt.xlsm](/files/blog/chartgpt.xlsm)