import DataSource from "../DataSource";
import { Voting } from "../../types";

const GameNames = [
  "Elden Ring",
  "God of War Ragnarök",
  "Halo Infinite",
  "Horizon Forbidden West",
  "Starfield",
  "The Legend of Zelda: Breath of the Wild 2",
  "The Elder Scrolls VI",
  "Final Fantasy XVI",
  "Gran Turismo 7",
  "Forza Horizon 5",
  "Gotham Knights",
  "Minecraft",
  "Deathloop",
  "Far Cry 6",
  "Ratchet & Clank: Rift Apart",
  "Kena: Bridge of Spirits",
  "Psychonauts 2",
  "Resident Evil Village",
  "GhostWire: Tokyo",
  "Back 4 Blood",
  "Dying Light 2",
  "Rainbow Six Quarantine",
  "Vampire: The Masquerade - Bloodlines 2",
  "The Lord of the Rings: Gollum",
  "The Callisto Protocol",
  "Atomic Heart",
  "The Medium",
  "Returnal",
  "Chivalry 2",
  "S.T.A.L.K.E.R. 2",
  "The Ascent",
  "CrossfireX",
  "Scorn",
  "The Outlast Trials",
  "The Stanley Parable: Ultra Deluxe",
  "Tunic",
  "Twelve Minutes",
  "The Gunk",
  "The Good Life",
  "The Artful Escape",
  "The Big Con",
  "The Forgotten City",
  "The Last Night",
  "The Wolf Among Us 2",
  "Trek to Yomi",
  "Tunic",
  "Twelve Minutes",
  "Unexplored 2: The Wayfarer's Legacy",
  "Warhammer 40,000: Darktide",
  "Way to the Woods",
  "The Witch Queen",
  "Senua's Saga: Hellblade II",
  "Fable",
  "Everwild",
  "Avowed",
];

export default class StaticDataSource implements DataSource {
  private readonly totalVotes: number;
  private readonly entryVotes: number;

  constructor(totalVotes: number, entryVotes: number) {
    this.totalVotes = totalVotes;
    this.entryVotes = entryVotes;
  }

  async fetchData(_category: string, limit: number): Promise<Voting> {
    const totalVotes = this.totalVotes + Math.random() * this.totalVotes;
    const entries = GameNames.slice(0, limit).map((name, index) => ({
      id: index,
      name,
      votes: this.entryVotes + Math.random() * this.entryVotes,
    }));

    return {
      totalVotes,
      entries,
    };
  }
}
