import { generateName, availableRaces, availableClasses } from '../src';

describe('generateName', () => {
  test('genera un nombre válido para un Humano Guerrero', () => {
    const name = generateName('Human', 'Warrior');
    expect(typeof name).toBe('string');
  });

  test('lanza error con raza inválida', () => {
    expect(() => generateName('Orc', 'Warrior')).toThrow('Raza inválida');
  });

  test('lanza error con clase inválida', () => {
    expect(() => generateName('Human', 'Paladin')).toThrow('Clase inválida');
  });
});
