import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monster: (Fighter | SimpleFighter)[];

  constructor(character: Fighter, monster: (Fighter | SimpleFighter)[]) {
    super(character);
    this._character = character;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((monster) => {
      this._character.attack(monster);
      monster.attack(this._character);
    });

    if (this._character.lifePoints === -1) {
      return -1;
    }
    return 1;
  }
}