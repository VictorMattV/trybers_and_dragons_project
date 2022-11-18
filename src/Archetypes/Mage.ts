import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this.archetypeInstances += 1;
    return this.archetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}