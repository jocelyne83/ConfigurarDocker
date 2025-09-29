import { generateName, availableRaces, availableClasses } from '..lib/namegenerator';


describe('generateName', () => {
  test('debe generar un nombre con prefijo de la raza y sufijo de la clase', () => {
    const race = 'Human';
    const charClass = 'Warrior';
    const name = generateName(race, charClass);

    // Verificar que el nombre comienza con un prefijo válido
    const prefixes = ['Jon', 'Ari', 'Mar', 'Cal', 'Eli', 'Dar', 'Sam', 'Tom', 'Nia', 'Leo'];
    const suffixes = [
      'the Strong',
      'Shieldbearer',
      'of the Blade',
      'Ironfist',
      'Battleborn',
      'the Relentless'
    ];

    const [prefix, ...rest] = name.split(' ');
    const suffix = rest.join(' ');

    expect(prefixes).toContain(prefix);
    expect(suffixes).toContain(suffix);
  });

  test('should generate names only from available races and classes', () => {
    for (const race of availableRaces) {
      for (const charClass of availableClasses) {
        const name = generateName(race, charClass);
        expect(name).toBeTruthy();
        expect(typeof name).toBe('string');
      }
    }
  });
});
