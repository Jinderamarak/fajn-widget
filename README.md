# Highly Advanced Polycarbonate Polls Widget

#### Až to zčervená, tak je zle:

![deploy workflow](https://github.com/Jinderamarak/fajn-widget/actions/workflows/deploy.yml/badge.svg)

## Demo

[Nejnovější verze](https://jinderamarak.github.io/fajn-widget)

## Spuštění v lokálním prostředí

### Požadavky

- Funkční instalace NodeJS spolu s NPM

### Spuštění v lokálním prostředí

```bash
npm install
npm run dev
```

### Build aplikace

```bash
npm install
npm run build
```

Vše potřebné je dostupné ve složce `/build`

## Parametry aplikace

- Pokud není parametr přítomen v URL, použije se jeho defaultní hodnota
- Defaultní hodnoty najdeš v `./src/data/config/presets/default.json`
- Pokud není nastavený environment, zobrazí config stránka
- Parametry, u kterých je v příkladu uvedena hodnota `yep` jsou booleanové: hodnoty začínající na `n`, `false` nebo prázdné se vyhodnotí na `false`, zbytek na `true`

### Environment

- `?environment=widget` nebo `?environment=config`
- Akceptuje hodnoty `widget`, `config`
- `widget` - aktualizuje data z data source
- `dev` - naklikani parametru

### preset

- `?preset=default`
- Akceptuje pouze hodnoty `default` nebo `mock` nebo `static`
- Načte preset ze souboru `./src/data/config/presets/xxxxxxx.json`
- Pro pridani noveho presetu je potreba ho importovat v `./src/data/config/presets/index.ts`

---

### verticalCenter

- `?verticalCenter=yep`
- Akceptuje cokoliv nebo nic
- Pokud něco je, vertikálně vycentruje výsledky

### back, front, accent

- `?back=red`
- Akceptuje hodnoty barev, se kterými si poradí CSS
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

---

# Data Sources

## StaticData

- pro testovani se statickyma datama

### totalVotes

- `?totalVotes=5000`
- Akceptuje cele cisla
- Pocet vsech hlasu

### entryVotes

- `?entryVotes=500`
- Akceptuje cele cisla
- nevim, vyzkousej si ruzne cisla

### limit

- `?limit=10`
- Akceptuje cele cisla
- kolik radku her se zobrazi

## FajnyApi

- napojuje se fajn api podle domluveneho formatu

### apiUrl

- `?apiUrl=http%3A%2F%2Flocalhost%3A8080`
- url encoded url pro api

### category

- `?category=current`
- kategorie ktera se prida do api url

### limit

- `?limit=1`
- cele cislo ktere se prida do api url
