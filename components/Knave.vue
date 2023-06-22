<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body has-bg-img">
      <div class="container is-fluid">
        <p>Name: {{ Name }}</p>
        <p>Description: {{ Description }}</p>
        <p>Strength: {{ Strength }}</p>
        <p>Dexterity: {{ Dexterity }}</p>
        <p>Constitution: {{ Constitution }}</p>
        <p>Intelligence: {{ Intelligence }}</p>
        <p>Wisdom: {{ Wisdom }}</p>
        <p>Charisma: {{ Charisma }}</p>
        <br>
        <p>HitPoints: {{ HitPoints }}</p>
        <button
          class="button is-primary is-inverted is-outlined"
          @click="genCharacter()">Create Characte
        r</button>
        <br>
        <br>
        <p> {{ randomWeapon }} </p>
        <button
          class="button is-primary is-inverted is-outlined"
          @click="genRandomWeapon()">Generate Weapon
        </button>
      </div>
    </div>
  </section>

</template>
<script>
export default {
  data() {
    return {
      Name: '',
      Strength: '',
      Dexterity: '',
      Constitution: '',
      Intelligence: '',
      Wisdom: '',
      Charisma: '',
      HitPoints: '',
      StartingGear: {

      },
      character: '',
      characterTraits: {
        physique: [
          'Athletic',
          'Brawny',
          'Corpulent',
          'Delicate',
          'Gaunt',
          'Hulking',
          'Lanky',
          'Ripped',
          'Rugged',
          'Scrawny',
          'Short',
          'Sinewy',
          'Slender',
          'Flabby',
          'Statuesque',
          'Stout',
          'Tiny',
          'Towering',
          'Willowy',
          'Wiry',
        ],
        face: [
          'Bloated',
          'Blunt',
          'Bony',
          'Chiseled',
          'Delicate',
          'Elongated',
          'Patrician',
          'Pinched',
          'Hawkish',
          'Broken',
          'Impish',
          'Narrow',
          'Ratlike',
          'Round',
          'Sunken',
          'Sharp',
          'Soft',
          'Square',
          'Wide',
          'Wolfish',
        ],
        skin: [
          'Battle Scarred',
          'Birthmark',
          'Burn Scarred',
          'Dark',
          'Makeup',
          'Oily',
          'Pale',
          'Perfect',
          'Pierced',
          'Pockmarked',
          'Reeking',
          'Tattooed',
          'Rosy',
          'Rough',
          'Sallow',
          'Sunburned',
          'Tanned',
          'War Painted',
          'Weathered',
          'Whip Scarred',
        ],
        hair: [
          'Bald',
          'Braided',
          'Bristly',
          'Cropped',
          'Curly',
          'Disheveled',
          'Dreadlocks',
          'Filthy',
          'Frizzy',
          'Greased',
          'Limp',
          'Long',
          'Luxurious',
          'Mohawk',
          'Oily',
          'Ponytail',
          'Silky',
          'Topknot',
          'Wavy',
          'Wispy',
        ],
      },
      description: '',
      firstName: [
        'Adelaide',
        'Adrian',
        'Alexandra',
        'Alma',
        'Anders',
        'Angar',
        'Asa',
        'Astrid',
        'Avery',
        'Balthazar',
        'Basil',
        'Beatrix',
        'Bertram',
        'Bianca',
        'Bjorn',
        'Blaxton',
        'Brianna',
        'Bruce',
        'Calum',
        'Cassius',
        'Chadwick',
        'Christopher',
        'Cleo',
        'Clover',
        'Clovis',
        'Connor',
        'Daisy',
        'Daphne',
        'Daren',
        'Darius',
        'Darwin',
        'Davina',
        'Deimos',
        'Destrian',
        'Dudley',
        'Elisabeth',
        'Ellis',
        'Erasmus',
        'Eric',
        'Faustus',
        'Fenley',
        'Fern',
        'Finley',
        'Finn',
        'Fiona',
        'Fitzhugh',
        'Florian',
        'Fox',
        'Gildan',
        'Godwin',
        'Hannibal',
        'Hikari',
        'Ian',
        'Indra',
        'Jasmine',
        'Jasper',
        'Jiles',
        'Jill',
        'John',
        'Joshua',
        'Jules',
        'Kayne',
        'Lilian',
        'Lilith',
        'Lucian',
        'Luther',
        'Leopold',
        'Marcelin',
        'Matthew',
        'Merrick',
        'Michael',
        'Mila',
        'Moe',
        'Mortimer',
        'Nigel',
        'Ogden',
        'Oliver',
        'Orchid',
        'Orion',
        'Oswald',
        'Otto',
        'Owen',
        'Patrick',
        'Percival',
        'Peregrine',
        'Phoebe',
        'Piper',
        'Quentin',
        'Redmaine',
        'Reid',
        'Reinhold',
        'Riley',
        'River',
        'Rowan',
        'Ruin',
        'Silas',
        'Stella',
        'Stilton',
        'Storm',
        'Stratford',
        'Sumesh',
        'Summer',
        'Sybil',
        'Taylor',
        'Tenpiece',
        'Tulip',
        'Violet',
        'Vivian',
        'Waverly',
        'Webster',
        'Wendy',
        'Winona',
        'Zara',
        'Zoe',
      ],
      lastName: [
        'Angler',
        'Autumnloft',
        'Bain',
        'Barrow',
        'Belvedere',
        'Beechwood',
        'Bithesea',
        'Blackwater',
        'Broadbent',
        'Calaver',
        'Carter',
        'Carvolo',
        'Crestwood',
        'Culpepper',
        'Dresden',
        'Droll',
        'Dunlow',
        'Duval',
        'Erelong',
        'Evenwind',
        'Fernsby',
        'Fisk',
        'Fitzgerald',
        'Frost',
        'Galewind',
        'Grimeson',
        'Gruger',
        'Halcyon',
        'Hanks',
        'Hardwick',
        'Hawker',
        'Hemlock',
        'Ironstone',
        'Kreel',
        'Malmora',
        'Maul',
        'Moonridge',
        'Norman',
        'Patel',
        'Portendorfer',
        'Revayne',
        'Rook',
        'Roxley',
        'Samsi',
        'Shadowhorn',
        'Silvertarn',
        'Silvervalley',
        'Skiprock',
        'Skorbeck',
        'Snaketail',
        'Southwark',
        'Swiftwing',
        'Taylor',
        'Teagrass',
        'Treespeaker',
        'Trelenus',
        'Umbermoore',
        'Underhill',
        'Vandermeer',
        'Westergreen',
        'Weston',
        'Wexley',
        'Winterheart',
        'Wrynn',
      ],
      weapons: {
        prefixes: {
          "Hero's": '+1 Strength',
          Puny: '-1 Strength',
          "Hunter's": '+1 Dexterity',
          Crooked: '-1 Dexterity',
          Crimson: '+1 Constitution',
          Weak: '-1 Constitution',
          "Sage's": '+1 Intelligence',
          Corrupt: '-1 Intelligence',
          "Raven's": '+1 Wisdom',
          Bent: '-1 Wisdom',
          "Captain's": '+1 Charisma',
          "Coward's": '-1 Charisma',
          Flayed: '+1 Strength, -1 Dexterity',
          Deadly: '+1 Damage on hit',
          Honed: '+2 Damage on hit',
          Crystalline: '+3 Damage on hit, doubled quality decay',
          Cheap: 'worth half-price',
          Used: 'worth half-price',
          Exquisite: 'worth double-price',
          Backstabbing: 'double damage when attacking a target from behind',
          'Armor Piercing': 'ignores target AC bonuses',
          Powerful: 'knocks target back  5 ft. on hit',
          Cursed: 'double damage to target, but also half damage to the wielder',
        },
        weapon: {
          Dagger: 'd6 dmg, 1 slot, 1 hand, 3 quality',
          Cudgel: 'd6 dmg, 1 slot, 1 hand, 3 quality',
          Staff: 'd6 dmg, 1 slot, 1 hand, 3 quality',
          Spear: 'd8 dmg, 2 slots, 1 hand, 3 quality',
          Sword: 'd8 dmg, 2 slots, 1 hand, 3 quality',
          Mace: 'd8 dmg, 2 slots, 1 hand, 3 quality',
          Axe: 'd8 dmg, 2 slots, 1 hand, 3 quality',
          Halberd: 'd10 dmg, 3 slots, 2 hands, 3 quality',
          Warhammer: 'd10 dmg, 3 slots, 2 hands, 3 quality',
          Longsword: 'd10 dmg, 3 slots, 2 hands, 3 quality',
          Battleaxe: 'd10 dmg, 3 slots, 2 hands, 3 quality',
          Sling: 'd4 dmg, 1 slot, 1 hand, 3 quality',
          Bow: 'd6 dmg, 2 slots, 2 hands, 3 quality',
          Crossbow: 'd8 dmg, 3 slots, 2 hands, 3 quality',
        },
        suffixes: {
          'of the Flames': 'critical hits engulf the target in flames',
          'of the Vulture': 'regain 1 hit point per successful hit',
          'of the Shepherd': 'double-damage to wild animals',
          'of Darkness': 'blinds the target for 1 turn on hit',
          'of the Sun': 'emits a 40 ft. beam of light on hit',
          'of the Prisoner': 'target is immobilized by chains for 1 turn on hit',
          'of Echoes': 'each attack gets 1 additional swing',
          "of the Glacier's Heart": 'critical hits freeze the target solid',
          'of the Executioner': 'if your first hit kills the target, you may attack another adjacent target',
          'of the Storm': 'critical hits electrocute the target',
        },
      },
      randomWeapon: '',
    };
  },
  mounted() {
    this.genCharacter();
    this.genRandomWeapon();
  },
  methods: {
    dice(faces) {
      return Math.floor(Math.random() * faces) + 1;
    },
    rollStat() {
      return Math.min(this.dice(6), this.dice(6), this.dice(6)) + 10;
    },
    rollName() {
      return `${this.firstName[this.dice(this.firstName.length - 1)]} ${this.lastName[this.dice(this.lastName.length - 1)]}`;
    },
    rollDescription() {
      const {
        physique, face, skin, hair,
      } = this.characterTraits;
      const randomPhysique = physique[this.dice(physique.length - 1)];
      const randomFace = face[this.dice(face.length - 1)];
      const randomSkin = skin[this.dice(skin.length - 1)];
      const randomHair = hair[this.dice(hair.length - 1)];
      return `${randomPhysique} with a ${randomFace.toLowerCase()} face, ${randomSkin.toLowerCase()} skin, and ${randomHair.toLowerCase()} hair.`;
    },
    genRandomWeapon() {
      const randomPrefix = Math.floor(Math.random() * Object.keys(this.weapons.prefixes).length);
      const prefixKey = Object.keys(this.weapons.prefixes)[randomPrefix];
      const prefixValue = this.weapons.prefixes[prefixKey];

      const randomWeapon = Math.floor(Math.random() * Object.keys(this.weapons.weapon).length);
      const weaponKey = Object.keys(this.weapons.weapon)[randomWeapon];
      const weaponValue = this.weapons.weapon[weaponKey];

      if (this.dice(100) < 15) {
        const randomSuffix = Math.floor(Math.random() * Object.keys(this.weapons.suffixes).length);
        const suffixKey = Object.keys(this.weapons.suffixes)[randomSuffix];
        const suffixValue = this.weapons.suffixes[suffixKey];
        this.randomWeapon = `${prefixKey} ${weaponKey} ${suffixKey}: ${weaponValue}, ${prefixValue}, ${suffixValue}`;
      } else if (this.dice(100) < 60) {
        this.randomWeapon = `${prefixKey} ${weaponKey}: ${weaponValue}, ${prefixValue}`;
      } else {
        this.randomWeapon = `${weaponKey}: ${weaponValue}`;
      }

      // const weaponLength = Object.keys(this.weapons.weapon).length;
      // const randomWeapon = Math.floor(Math.random() * weaponLength + 1);
      // return `${randomPrefix}${randomWeapon}: ${}`;
    },
    async genCharacter() {
      this.Name = this.rollName();
      this.Description = this.rollDescription();
      this.Strength = this.rollStat();
      this.Dexterity = this.rollStat();
      this.Constitution = this.rollStat();
      this.Intelligence = this.rollStat();
      this.Wisdom = this.rollStat();
      this.Charisma = this.rollStat();
      this.HitPoints = this.dice(8);
    },
  },
};
</script>
