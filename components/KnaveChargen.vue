<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body has-bg-img has-text-centered">
      <div class="container is-fluid">
        <div class="block">
          <h3>A Character Generator</h3>
        </div>
        <div class="block level-item has-text-centered">
          <img alt="designed for knave" width="256" src="../assets/designed_for_knave.png">
        </div>
        <div class="block">
          <button class="button is-white is-outlined" @click="genCharacter()">
            Reroll Character
          </button>
        </div>
        <div class="block">
          <div class="container level is-max-desktop has-border">
            <div class="level-item">
              <p><strong>Name:</strong> {{ Name }}</p>
            </div>
            <div class="level-item">
              <p><strong>HitPoints:</strong> {{ HitPoints }}/{{ HitPoints }}</p>
            </div>
            <div class="level-item">
              <p><strong>Armor Class:</strong> {{ ArmorClass }}</p>
            </div>
          </div>
          <div class="container is-max-desktop">
            <div class="columns">
              <div class="column has-border-right">
                <div>
                  <h3 class="title is-4">You are {{ Name }}</h3>
                  <p>{{ Description }}</p>
                </div>
                <br>
                <div>
                   <h3 class="title is-4">Starting Gear</h3>
                    <ul>
                      <li v-for="(item, index) in StartingGear" :key="index">{{ item }}</li>
                    </ul>
                </div>
              </div>
              <div class="column">
                <div>
                  <h3 class="title is-4">Abilities</h3>
                  <p>Strength: {{ Strength }}</p>
                  <p>Dexterity: {{ Dexterity }}</p>
                  <p>Constitution: {{ Constitution }}</p>
                  <p>Intelligence: {{ Intelligence }}</p>
                  <p>Wisdom: {{ Wisdom }}</p>
                  <p>Charisma: {{ Charisma }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<style>
.has-border {
  border-top: 1px solid rgb(255, 255, 255);
  border-bottom: 1px solid rgb(255, 255, 255);
  padding: 14px 0px;
  margin-bottom: 12px !important;
}
.has-border-right {
  border-right: 1px solid rgb(255, 255, 255);
}
</style>
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
      ArmorClass: 11,
      StartingGear: [],
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
          'Lean',
          'Gaunt',
          'Full',
          'Joyful',
          'Stern',
          'Somber',
          'Serene',
          'Serious',
          'Strong',
          'Young',
          'Noble',
        ],
        skin: [
          'Battle Scarred',
          'Birthmarked',
          'Burn Scarred',
          'Dark',
          'Well Maintained',
          'Oily',
          'Pale',
          'Perfect',
          'Pierced',
          'Pockmarked',
          'Wrinkled',
          'Tattooed',
          'Rosy',
          'Rough',
          'Soft',
          'Unhealthy',
          'Sunburned',
          'Tanned',
          'War Painted',
          'Weathered',
          'Scarred',
          'Smooth',
          'Freckled',
          'Patchy',
          'Glowing',
          'Ashen',
          'Earthy',
          'Youthful',
          'Clear',
          'Calloused',
          'Dull',
        ],
        hair: [
          'No',
          'Braided',
          'Bristly',
          'Cropped',
          'Curly',
          'Disheveled',
          'Dreadlocked',
          'Filthy',
          'Frizzy',
          'Greased',
          'Long',
          'Luxurious',
          'Mohawk',
          'Oily',
          'Ponytail',
          'Silky',
          'Topknot',
          'Wavy',
          'Wispy',
          'Jet-black',
          'Golden',
          'Thick',
          'Auburn',
          'Black',
          'Short',
          'Brown',
          'Blonde',
          'Silvered',
          'Flowing',
          'Glossy',
          'Fiery',
          'Windswept',
          'Spiky',
          'Shaggy',
          'Rusty',
          'Red',
          'White',
        ],
      },
      Description: '',
      firstName: [
        'Adelaide',
        'Adrian',
        'Aisha',
        'Alexandra',
        'Alma',
        'Amara',
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
        'Diego',
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
        'Ibrahim',
        'Icarus',
        'Idris',
        'Imani',
        'Indra',
        'Isaac',
        'Jasmine',
        'Jasper',
        'Jiles',
        'Jill',
        'John',
        'Joshua',
        'Jules',
        'Kayne',
        'Khalid',
        'Koda',
        'Kwame',
        'Lance',
        'Liam',
        'Lincoln',
        'Lionel',
        'Lily',
        'Lina',
        'Linda',
        'Lilian',
        'Lilith',
        'Lucian',
        'Luther',
        'Leopold',
        'Malik',
        'Marcelin',
        'Mateo',
        'Matthew',
        'Merrick',
        'Michael',
        'Mila',
        'Moe',
        'Mortimer',
        'Nia',
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
        'Rohan',
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
        'Tala',
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
        'Ashworth',
        'Autumnloft',
        'Bain',
        'Baptiste',
        'Barrow',
        'Belvedere',
        'Beechwood',
        'Bithesea',
        'Blackwater',
        'Bracken',
        'Broadbent',
        'Calaver',
        'Carter',
        'Carvolo',
        'Crestwood',
        'Culpepper',
        'Dawnsinger',
        'Diallo',
        'Dresden',
        'Droll',
        'Dunlow',
        'Duval',
        'Erelong',
        'Evenwind',
        'Fairweather',
        'Fenwick',
        'Fernsby',
        'Fisk',
        'Fitzgerald',
        'Fletcher',
        'Frost',
        'Galewind',
        'Greycastle',
        'Grimeson',
        'Grimshaw',
        'Gruger',
        'Halcyon',
        'Hanks',
        'Hardwick',
        'Hawker',
        'Hemlock',
        'Ironstone',
        'Jackery',
        'Kreel',
        'Malmora',
        'Maul',
        'Moonridge',
        'Mossbrook',
        'Norman',
        'Oldham',
        'Oakhart',
        'Palmwood',
        'Patel',
        'Portendorfer',
        'Redsky',
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
        'Stonehand',
        'Stormcaller',
        'Sunstone',
        'Swiftwing',
        'Tanaka',
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
        'Whisperwind',
        'Winterheart',
        'Wrynn',
      ],
      armorTable: [
        {
          range: [1, 3], name: 'No armor', slots: 0, quality: 0, acSet: 11,
        },
        {
          range: [4, 14], name: 'Padded Armor', slots: 1, quality: 1, acSet: 12,
        },
        {
          range: [15, 19], name: 'Brigandine', slots: 2, quality: 2, acSet: 13,
        },
        {
          range: [20, 20], name: 'Chainmail', slots: 3, quality: 3, acSet: 14,
        },
      ],
      helmetShieldTable: [
        { range: [1, 13], name: 'None', items: [] },
        {
          range: [14, 16],
          name: 'Helmet',
          items: [{
            name: 'Helmet', details: 'Defense +1', slots: 1, quality: 1, acBonus: 1,
          }],
        },
        {
          range: [17, 19],
          name: 'Shield',
          items: [{
            name: 'Shield', details: 'Defense +1', slots: 1, quality: 1, acBonus: 1,
          }],
        },
        {
          range: [20, 20],
          name: 'Helmet and Shield',
          items: [
            {
              name: 'Helmet', details: 'Defense +1', slots: 1, quality: 1, acBonus: 1,
            },
            {
              name: 'Shield', details: 'Defense +1', slots: 1, quality: 1, acBonus: 1,
            },
          ],
        },
      ],
      dungeoneeringGear: [
        {
          name: 'Rope, 50ft', slots: 1,
        }, {
          name: 'Pulleys', slots: 1,
        },
        {
          name: 'Candles, 5', slots: 1,
        }, {
          name: 'Chain, 10ft', slots: 1,
        },
        {
          name: 'Chalk, 10', slots: 1,
        }, {
          name: 'Crowbar', slots: 1,
        },
        {
          name: 'Tinderbox', slots: 1,
        }, {
          name: 'Grappling hook', slots: 1,
        },
        {
          name: 'Hammer', slots: 1,
        }, {
          name: 'Waterskin', slots: 1,
        },
        {
          name: 'Lantern', slots: 1,
        }, {
          name: 'Lamp oil', slots: 1,
        },
        {
          name: 'Padlock', slots: 1,
        }, {
          name: 'Manacles', slots: 1,
        },
        {
          name: 'Mirror', slots: 1,
        }, {
          name: 'Pole, 10ft', slots: 1,
        },
        {
          name: 'Sack', slots: 1,
        }, {
          name: 'Tent', slots: 2,
        },
        {
          name: 'Spikes, 5', slots: 1,
        }, {
          name: 'Torches, 5', slots: 1,
        },
      ],
      generalGear1: [
        {
          name: 'Air bladder', slots: 1,
        }, {
          name: 'Bear trap', slots: 1,
        },
        {
          name: 'Shovel', slots: 1,
        }, {
          name: 'Bellows', slots: 1,
        },
        {
          name: 'Grease', slots: 1,
        }, {
          name: 'Saw', slots: 1,
        },
        {
          name: 'Bucket', slots: 1,
        }, {
          name: 'Caltrops', slots: 1,
        },
        {
          name: 'Chisel', slots: 1,
        }, {
          name: 'Drill', slots: 1,
        },
        {
          name: 'Fish. rod', slots: 1,
        }, {
          name: 'Marbles', slots: 1,
        },
        {
          name: 'Glue', slots: 1,
        }, {
          name: 'Pick', slots: 1,
        },
        {
          name: 'Hourglass', slots: 1,
        }, {
          name: 'Net', slots: 1,
        },
        {
          name: 'Tongs', slots: 1,
        }, {
          name: 'Lockpicks', slots: 1,
        },
        {
          name: 'Metal file', slots: 1,
        }, {
          name: 'Nails', slots: 1,
        },
      ],
      generalGear2: [
        {
          name: 'Incense', slots: 1,
        }, {
          name: 'Sponge', slots: 1,
        },
        {
          name: 'Lens', slots: 1,
        }, {
          name: 'Perfume', slots: 1,
        },
        {
          name: 'Horn', slots: 1,
        }, {
          name: 'Bottle', slots: 1,
        },
        {
          name: 'Soap', slots: 1,
        }, {
          name: 'Spyglass', slots: 1,
        },
        {
          name: 'Tar pot', slots: 1,
        }, {
          name: 'Twine', slots: 1,
        },
        {
          name: 'Fake jewels', slots: 1,
        }, {
          name: 'Blank book', slots: 1,
        },
        {
          name: 'Card deck', slots: 1,
        }, {
          name: 'Dice set', slots: 1,
        },
        {
          name: 'Cook pots', slots: 1,
        }, {
          name: 'Face paint', slots: 1,
        },
        {
          name: 'Whistle', slots: 1,
        }, {
          name: 'Instrument', slots: 1,
        },
        {
          name: 'Quill & Ink', slots: 1,
        }, {
          name: 'Small bell', slots: 1,
        },
      ],
    };
  },
  mounted() {
    this.genCharacter();
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
      return `You are ${randomPhysique.toLowerCase()} with a ${randomFace.toLowerCase()} face, ${randomSkin.toLowerCase()} skin, and ${randomHair.toLowerCase()} hair.`;
    },
    rollGear() {
      const findInRangedTable = (table, roll) => table.find(
        (e) => e.range[0] <= roll && roll <= e.range[1],
      );

      const processHSItems = (items) => {
        const initialData = { helmetString: null, shieldString: null, hsAcBonus: 0 };
        if (!Array.isArray(items)) return initialData;

        return items.reduce((acc, item) => {
          const detailsString = `slots: ${item.slots}, quality: ${item.quality}`;
          if (item.name === 'Helmet') {
            acc.helmetString = `${item.name}, ${detailsString}`;
            acc.hsAcBonus += item.acBonus || 0;
          } else if (item.name === 'Shield') {
            acc.shieldString = `${item.name}, ${detailsString}`;
            acc.hsAcBonus += item.acBonus || 0;
          }
          return acc;
        }, initialData);
      };

      const selectAndFormatGearItem = (table) => {
        const item = table[this.dice(table.length) - 1];
        return `${item.name}, slots: ${item.slots}`;
      };

      const armorData = findInRangedTable(this.armorTable, this.dice(20));
      const baseAC = armorData?.acSet ?? 11;

      const helmetShieldData = findInRangedTable(this.helmetShieldTable, this.dice(20));
      const { helmetString, shieldString, hsAcBonus } = processHSItems(helmetShieldData?.items);

      const dungeoneeringItem1 = selectAndFormatGearItem(this.dungeoneeringGear);
      const dungeoneeringItem2 = selectAndFormatGearItem(this.dungeoneeringGear);
      const generalGear1Item = selectAndFormatGearItem(this.generalGear1);
      const generalGear2Item = selectAndFormatGearItem(this.generalGear2);
      this.StartingGear.dungeoneeringItem1 = dungeoneeringItem1;
      this.StartingGear.dungeoneeringItem2 = dungeoneeringItem2;
      this.StartingGear.generalGear1Item = generalGear1Item;
      this.StartingGear.generalGear2Item = generalGear2Item;

      this.ArmorClass = baseAC + hsAcBonus;
      if (armorData && armorData.name !== 'No armor') {
        this.StartingGear.armor = `${armorData.name}, ${armorData.details || ''}, slots: ${armorData.slots}, quality: ${armorData.quality}`;
      } else {
        delete this.StartingGear.armor;
      }

      if (helmetString) {
        this.StartingGear.helmet = helmetString;
      } else {
        delete this.StartingGear.helmet;
      }

      if (shieldString) {
        this.StartingGear.shield = shieldString;
      } else {
        delete this.StartingGear.shield;
      }

      const returnedGear = {
        ...(armorData && armorData.name !== 'No armor' && {
          armor: `${armorData.name}, slots: ${armorData.slots}, quality: ${armorData.quality}`,
        }),
        ...(helmetString && { helmet: helmetString }),
        ...(shieldString && { shield: shieldString }),
        dungeoneeringItem1,
        dungeoneeringItem2,
        generalGear1Item,
        generalGear2Item,
      };

      return returnedGear;
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
      this.StartingGear = this.rollGear();
    },
  },
};
</script>
<style scoped>
.has-bg-img {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url("../assets/knave.jpg");
  background-size: cover;
}
</style>
