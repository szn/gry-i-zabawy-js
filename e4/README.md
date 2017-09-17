# Kursy walut na polskich fakturach

Napisz funkcję `getInvoiceCurrency()` przyjmującą dwa argumenty: `date` i
`currency`, która zwróci średni kurs waluty NBP ostatniego dnia roboczego przed
wskazaną datą.

Jest to wartość zgodnie z ustawą o rachunkowości, która nakazuje, aby kurs
wymiany podany na fakturze VAT innej niż w PLN był brany wg "kursu średniego
danej waluty obcej ogłoszonego przez Narodowy Bank Polski na ostatni dzień
roboczy poprzedzający dzień powstania obowiązku podatkowego".

Dla przykładu dla 31 lipca 2017 (niedziela) musimy użyć średniego kursu NBP
z piątku 29 lipca.

Do realizacji zadania użyj API NBP dostępnego na stronie: http://api.nbp.pl
