import{_ as p}from"./Nav.f9f14659.js";import{_ as y}from"./designed_for_knave.e0b4be8f.js";import{_ as u,o as m,c as g,a as e,t as h,p as w,e as b,b as c}from"./entry.b0408cd5.js";import"./nuxt-link.8023a170.js";const x={data(){return{weapons:{prefixes:{"Hero's":"+1 Strength",Puny:"-1 Strength","Hunter's":"+1 Dexterity",Crooked:"-1 Dexterity",Crimson:"+1 Constitution",Weak:"-1 Constitution","Sage's":"+1 Intelligence",Corrupt:"-1 Intelligence","Raven's":"+1 Wisdom",Bent:"-1 Wisdom","Captain's":"+1 Charisma","Coward's":"-1 Charisma",Flayed:"+1 Strength, -1 Dexterity",Precise:"+1 Dexterity, -1 Strength",Giant:"+1 Strength, -1 Intelligence",Enlightening:"+1 Intelligence, -1 Strength","Barbarian's":"+1 Strength, -1 Charisma",Performant:"+1 Charisma, -1 Strength","Wizard's":"+1 Wisdom, -1 Strength",Oxen:"+1 Strength, -1 Wisdom",Brilliant:"+1 Charisma, -1 Dexterity",Bashful:"+1 Dexterity, -1 Charisma",Transcendent:"+1 Wisdom, -1 Charisma",Glowing:"+1 Intelligence, -1 Dexterity",Deadly:"+1 Damage on hit",Honed:"+2 Damage on hit",Sturdy:"+1 to AC",Frail:"-1 to AC",Crystalline:"+3 Damage on hit, doubled quality decay",Cheap:"worth half-price",Used:"worth half-price",Exquisite:"worth double-price",Backstabbing:"double damage when attacking a target from behind","Armor Piercing":"ignores target AC bonuses",Powerful:"knocks target back  5 ft. on hit",Cursed:"double damage to target, but also half damage to the wielder"},weapon:{Dagger:"d6 dmg, 1 slot, 1 hand, 3 quality",Cudgel:"d6 dmg, 1 slot, 1 hand, 3 quality",Staff:"d6 dmg, 1 slot, 1 hand, 3 quality",Spear:"d8 dmg, 2 slots, 1 hand, 3 quality",Sword:"d8 dmg, 2 slots, 1 hand, 3 quality",Mace:"d8 dmg, 2 slots, 1 hand, 3 quality",Axe:"d8 dmg, 2 slots, 1 hand, 3 quality",Halberd:"d10 dmg, 3 slots, 2 hands, 3 quality",Warhammer:"d10 dmg, 3 slots, 2 hands, 3 quality",Longsword:"d10 dmg, 3 slots, 2 hands, 3 quality",Battleaxe:"d10 dmg, 3 slots, 2 hands, 3 quality",Sling:"d4 dmg, 1 slot, 1 hand, 3 quality",Bow:"d6 dmg, 2 slots, 2 hands, 3 quality",Crossbow:"d8 dmg, 3 slots, 2 hands, 3 quality"},suffixes:{"of Incineration":"critical hits engulf the target in flames","of the Vulture":"regain 1 hit point per successful hit","of the Shepherd":"double-damage to wild animals","of Darkness":"blinds the target for 1 turn on hit","of the Sun":"emits a 40 ft. beam of light on hit","of the Prisoner":"target is immobilized by chains for 1 turn on hit","of Echoes":"each attack gets 1 additional swing","of the Glacier's Heart":"critical hits freeze the target solid","of the Executioner":"if your first hit kills the target, you may attack another adjacent target","of the Storm":"critical hits electrocute the target","of the Ages":"critical hits restore 1 quality to the weapon","of the Wraith":"prevents the target from healing for 1 turn on a successful hit","of Pestilence":"poisons the target on a successful hit","of Greed":"gold found on slain foes is doubled","of the Serpent":"any water that touches this weapon slowly absorbs into the weapon indefinitely","of the Magi":"while holding this weapon, you can understand all spoken languages, but cannot speak them","of the Undying":"living flesh that you touch with this weapon cannot decompose or become corrupted","of Splendor":"this weapon glows with bright light up to a 15' radius"}},randomWeaponName:"",randomWeaponDescription:""}},mounted(){this.genRandomWeapon()},methods:{dice(t){return Math.floor(Math.random()*t)+1},genRandomWeapon(){const t=Math.floor(Math.random()*Object.keys(this.weapons.prefixes).length),a=Object.keys(this.weapons.prefixes)[t],s=this.weapons.prefixes[a],d=Math.floor(Math.random()*Object.keys(this.weapons.weapon).length),o=Object.keys(this.weapons.weapon)[d],n=this.weapons.weapon[o];if(this.dice(100)<15){const i=Math.floor(Math.random()*Object.keys(this.weapons.suffixes).length),r=Object.keys(this.weapons.suffixes)[i],_=this.weapons.suffixes[r];this.randomWeaponName=`${a} ${o} ${r}`,this.randomWeaponDescription=`${n}, ${s}, ${_}`}else this.dice(100)<60?(this.randomWeaponName=`${a} ${o}`,this.randomWeaponDescription=`${n}, ${s}`):(this.randomWeaponName=`${o}`,this.randomWeaponDescription=`${n}`)}}},l=t=>(w("data-v-abafc034"),t=t(),b(),t),W={class:"hero is-primary is-bold is-fullheight"},k={class:"hero-body has-bg-img has-text-centered"},v={class:"container is-fluid"},S=l(()=>e("div",{class:"block"},[e("h3",null,"A Weapon Generator")],-1)),C=l(()=>e("div",{class:"block level-item has-text-centered"},[e("img",{alt:"designed for knave",width:"256",src:y})],-1)),$={class:"block"},D=l(()=>e("br",null,null,-1)),q={class:"title is-4"};function B(t,a,s,d,o,n){return m(),g("section",W,[e("div",k,[e("div",v,[S,C,e("div",$,[e("button",{class:"button is-primary is-inverted is-outlined",onClick:a[0]||(a[0]=i=>n.genRandomWeapon())}," Reroll Weapon ")]),e("div",null,[D,e("h4",q,h(o.randomWeaponName),1),e("p",null,h(o.randomWeaponDescription),1)])])])])}const f=u(x,[["render",B],["__scopeId","data-v-abafc034"]]),I={name:"Knave Chargen",components:{Nav:p,KnaveWeapongen:f}};function M(t,a,s,d,o,n){const i=p,r=f;return m(),g("section",null,[c(i),c(r)])}const A=u(I,[["render",M]]);export{A as default};