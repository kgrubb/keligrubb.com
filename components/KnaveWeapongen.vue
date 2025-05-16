<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body has-bg-img has-text-centered">
      <div class="container is-fluid">
        <div class="block">
          <h3>A Weapon Generator</h3>
        </div>
        <div class="block level-item has-text-centered">
          <img alt="designed for knave" width="256" src="../assets/designed_for_knave.png">
        </div>
        <div class="block">
          <button class="button is-white is-outlined" @click="genRandomWeapon()">
            Reroll Weapon
          </button>
        </div>
        <div>
          <br>
          <h4 class="title is-4">{{ randomWeaponName }}</h4>
          <p>{{ randomWeaponDescription }}</p>
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
          Precise: '+1 Dexterity, -1 Strength',
          Giant: '+1 Strength, -1 Intelligence',
          Enlightening: '+1 Intelligence, -1 Strength',
          "Barbarian's": '+1 Strength, -1 Charisma',
          Performant: '+1 Charisma, -1 Strength',
          "Wizard's": '+1 Wisdom, -1 Strength',
          Oxen: '+1 Strength, -1 Wisdom',
          Brilliant: '+1 Charisma, -1 Dexterity',
          Bashful: '+1 Dexterity, -1 Charisma',
          Transcendent: '+1 Wisdom, -1 Charisma',
          Glowing: '+1 Intelligence, -1 Dexterity',
          Deadly: '+1 Damage on hit',
          Honed: '+2 Damage on hit',
          Sturdy: '+1 to AC',
          Frail: '-1 to AC',
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
          'of Incineration': 'critical hits engulf the target in flames',
          'of the Vulture': 'regain 1 hit point per successful hit',
          'of the Shepherd': 'double-damage to wild animals',
          'of Darkness': 'blinds the target for 1 turn on hit',
          'of the Sun': 'emits a 40 ft. beam of light on hit',
          'of the Prisoner': 'target is immobilized by chains for 1 turn on hit',
          'of Echoes': 'each attack gets 1 additional swing',
          "of the Glacier's Heart": 'critical hits freeze the target solid',
          'of the Executioner': 'if your first hit kills the target, you may attack another adjacent target',
          'of the Storm': 'critical hits electrocute the target',
          'of the Ages': 'critical hits restore 1 quality to the weapon',
          'of the Wraith': 'prevents the target from healing for 1 turn on a successful hit',
          'of Pestilence': 'poisons the target on a successful hit',
          'of Greed': 'gold found on slain foes is doubled',
          'of the Serpent': 'any water that touches this weapon slowly absorbs into the weapon indefinitely',
          'of the Magi': 'while holding this weapon, you can understand all spoken languages, but cannot speak them',
          'of the Undying': 'living flesh that you touch with this weapon cannot decompose or become corrupted',
          'of Splendor': "this weapon glows with bright light up to a 15' radius",
        },
      },
      randomWeaponName: '',
      randomWeaponDescription: '',
    };
  },
  mounted() {
    this.genRandomWeapon();
  },
  methods: {
    dice(faces) {
      return Math.floor(Math.random() * faces) + 1;
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
        this.randomWeaponName = `${prefixKey} ${weaponKey} ${suffixKey}`;
        this.randomWeaponDescription = `${weaponValue}, ${prefixValue}, ${suffixValue}`;
      } else if (this.dice(100) < 60) {
        this.randomWeaponName = `${prefixKey} ${weaponKey}`;
        this.randomWeaponDescription = `${weaponValue}, ${prefixValue}`;
      } else {
        this.randomWeaponName = `${weaponKey}`;
        this.randomWeaponDescription = `${weaponValue}`;
      }
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
