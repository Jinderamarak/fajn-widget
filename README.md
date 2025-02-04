# Custom Stream Widget for Polls

![deploy workflow](https://github.com/Jinderamarak/fajn-widget/actions/workflows/deploy.yml/badge.svg)

## Demo

[Latest Deployed Version](https://jinderamarak.github.io/fajn-widget)

[See the widget in action!](https://www.twitch.tv/mazarin1k/clip/DeliciousExpensiveSangSSSsss-LneqrRtKfqXoMZXY)

## Local Development

### Requirements

- Funkční instalace NodeJS spolu s NPM

### Running

```bash
npm install
npm run dev
```

### Building

```bash
npm install
npm run build
```

Build output available in directory `/build`

## Wiget Parameters

- Default values found in `./src/data/config/presets/default.json`
- If the environment is not set, `config` is used
- Boolean values accept strings, values beginning with `n`, `false` or are empty are treated as `false`, rest as `true`

### Environment

- `?environment=widget` or `?environment=config`
- `widget` - widget itself loading data from datasource
- `config` - configuration of the widget

### preset

- `?preset=default`
- Loads preset from file `./src/data/config/presets/xxxxxxx.json`
- Adding new preset requires importing it in `./src/data/config/presets/index.ts`

---

### verticalCenter

- `?verticalCenter=yes`
- Results are vertically centered

### back, front, accent

- `?back=red`
- Accepts any color acceptable to CSS
- `back` - background color
- `front` - foreground color (text)
- `accent` - accent color (lines)

### scale

- `?scale=1`
- Accepts JS numbers
- Sets the scale of the UI

### pullInterval

- `?pullInterval=1000`
- Accepts integer numbers
- Data polling interval in milliseconds

### showTotal

- `?showTotal=yes`
- When true, shows total vote count

### showForEntry

- `?showForEntry=yes`
- When true, shows vote count for each entry

### useEntryPercentage

- `?useEntryPercentage=yes`
- When true, shows percentage instead of votes

### barRelativeTop

- `?barRelativeTop=yes`
- When true, the lines fill the width relative to the entry with max votes instead of all votes

---

# Data Sources

## StaticData

- Testing with static data

### totalVotes

- `?totalVotes=5000`
- Integers, number of total votes

### entryVotes

- `?entryVotes=500`
- Integers

### limit

- `?limit=10`
- Integers, limit of entries

## FajnyApi

- Connects to the FajnyApi in predefined format

### apiUrl

- `?apiUrl=http%3A%2F%2Flocalhost%3A8080`
- URL encoded URL for the API

### category

- `?category=current`
- Voting category passed to the API

### limit

- `?limit=1`
- Limit on entries passed to the API
