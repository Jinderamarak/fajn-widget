# Highly Advanced Polycarbonate Polls Widget

#### Až to zčervená, tak je zle:
![build workflow](https://github.com/Jinderamarak/fajn-widget/actions/workflows/build.yml/badge.svg)


## Demo
[Nejnovější verze + Omezené parametry](http://alszak.gay/fajnyc/polls/new/)

[Starší verze + Ostatní parametry](http://alszak.gay/fajnyc/polls/old/)

## Spuštění v lokálním prostředí
### Požadavky
 - Funkční instalace NodeJS spolu s NPM

### Spuštění v lokálním prostředí
```bash
npm i
npm run dev
```
Aplikace se spustí na portu 1234

### Build aplikace
```bash
npm i
npm run build
```
Vše potřebné je dostupné ve složce `./.build`

## Parametry aplikace
 - Pokud není parametr přítomen v URL, použije se jeho defaultní hodnota
 - Defaultní hodnoty najdeš úplně nahoře v `./src/AppConfig.ts`
 - Pokud neni nastavený environment, zobrazí config stránka
 - Parametry, u kterých je v příkladu uvedena hodnota `yep` jsou booleanové: hodnoty začínající na `n`, `false` nebo prázdné se vyhodnotí na `false`, zbytek na `true` 

### Environment
 - `?widget=yep` nebo `?dimensions=yep` nebo `?dev=yep`
 - Akceptuje hodnoty `widget`, `dimensions`, `dev`
 - `widget` - aktualizuje data z `url`
 - `dimensions` - zobrazí počet řádků specifikovaných v `testRows`
 - `dev` - Vymýšlí si data

### preset
 - `?preset=fajnyc`
 - Akceptuje pouze hodnoty `fajnyc` nebo `mock`
 - Načte preset ze souboru `./src/configs/xxxxxxx.json`

### verticalCenter
 - `?verticalCenter=yep`
 - Akceptuje cokoliv nebo nic
 - Pokud něco je, vertikálně vycentruje výsledky

### pass
 - `?pass=category%3D1%26limit%3D1`
 - Obsah ve tvaru `p1=h1&p2=h2` atd. a musí být URL encoded (Tak aby si s tím poradil parser ve třídě URLSearchParams)
 - Přidá parametry k `url` při aktualizaci dat

### back, front, accent
 - `?back=red`
 - Akceptuje hodnoty se kterými si poradí CSS
 - `back` - barva pozadí
 - `front` - barva textu
 - `accent` - barva řádků

### scale
 - `?scale=1`
 - Akceptuje desetinná čísla
 - Nastavuje velikost UI

### pullInterval
 - `?pullInterval=1000`
 - Akceptuje celá čísla
 - Pauza mezi aktualizací dat v [ms]

### showTotal
 - `?showTotal=yep`
 - Akceptuje cokoliv nebo nic
 - Pokud něco je, tak zobrazí celkový počet hlasů

### showForEntry
 - `?showForEntry=yep`
 - Akceptuje cokoliv nebo nic
 - Pokud něco je, tak zobrazí počet hlasů u jednotlivých her

### useEntryPercentage
 - `?useEntryPercentage=yep`
 - Akceptuje cokoliv nebo nic
 - Pokud něco je, tak zobrazuje procenta počtu hlasů místo počtu hlasů

### barRelativeTop
 - `?barRelativeTop=yep`
 - Akceptuje cokoliv nebo nic
 - Pokud něco je, tak je výplň řádku relativní k maximálnímu počtu hlasů místo ke všem hlasům

### url
 - `?url=https%3A%2F%2Fgoogle.com`
 - Akceptuje URL encoded url, která poskytuje data v předem domluveném formátu 
 - Url by neměla obsahovat GET parametry, ty se předávají parametrem `pass`
 - Zejména ***nesmí*** končit `?`

### testRows
 - `?testRows=1`
 - Akceptuje celé čísla
 - Zobrazí `n` her při použití `environment=dimensions`