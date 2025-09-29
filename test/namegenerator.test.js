const { generateName } = require('../src/lib/nameGenerator');

describe('Pruebas de generateName', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('Debe generar siempre "Jon the Strong" para Human Warrior', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0); 
    const name = generateName('Human', 'Warrior');
    expect(name).toBe('Jon the Strong');
  });

  test('Debe generar siempre "Ela Fireweaver" para Elf Mage', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0);
    const name = generateName('Elf', 'Mage');
    expect(name).toBe('Ela Fireweaver');
  });

  test('Debe generar siempre "Bor of the Shadows" para Dwarf Rogue', () => {
    jest.spyOn(Math, 'random').mockReturnValue(0);
    const name = generateName('Dwarf', 'Rogue');
    expect(name).toBe('Bor of the Shadows');
  });

  test('Debe lanzar error con raza inválida', () => {
    expect(() => generateName('Orc', 'Mage')).toThrow('Raza inválida');
  });

  test('Debe lanzar error con clase inválida', () => {
    expect(() => generateName('Human', 'Paladin')).toThrow('Clase inválida');
  });
});
