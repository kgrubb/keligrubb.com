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
          <button class="button is-primary is-inverted is-outlined" @click="genCharacter()">
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
              <p><strong>Armor Class:</strong> 11</p>
            </div>
          </div>
          <div class="container is-max-desktop">
            <div class="columns">
              <div class="column has-border-right">
                <div>
                  <h3 class="title is-4">You are {{ Name }}</h3>
                  <p>{{ Description }}</p>
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
      Description: '',
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
<style scoped>
.has-bg-img {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
    url("../assets/knave.jpg");
  background-size: cover;
}
</style>
