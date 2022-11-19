import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this.strength;
  }

  receiveDamage(attackPoints: number): number {
    const dmg = this._lifePoints - attackPoints;

    if (dmg > 0) {
      this._lifePoints -= dmg;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
  
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
}