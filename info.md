# java biglietto del treno 

## esecuzione 

- per prima cosa creiamo le due variabili ( age e kilometer) e una variabile sconto a cui assegnamo 0
- chiediamo all' utente di dirci l eta e assegnamo il volore ad age
- chiediamo all' utente di dirci i km da percorrere e assegnamo il valore a kilometer 
- controlliamo che tutti e due le variabili siano numeriche 
     - se non lo sono diciamo che ci occorrono delle informazioni corrette 
     - se lo sono controlliamo l eta 
        - se l eta è minore di 18  assegnamo alla variaile sconto 20
        - se l eta è magiore di 65 assegnamo alla variabile sconto 40
    - ora mostriamo a schermo : il prezzo è ( kilometer -( ( kilometer * sconto ) /100))
