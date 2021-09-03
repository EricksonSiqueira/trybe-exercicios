const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const generateRandomNumber = (max, min) => Math.round(Math.random(max) * (max - min) + min);

const dragonDamage = (maxDmg) => generateRandomNumber(maxDmg, 15);

const warriorDamage = (minDmg, maxDmg) => generateRandomNumber((minDmg * maxDmg), minDmg);

const mageDamage = (mana, intelligence) => {
  const stats = {
    manaSpent: 0,
    damage: "Not enough mana",
  }
  if(mana > 15){
    const minDmg = intelligence;
    const maxDmg = intelligence * 2;
    stats.manaSpent = 15;
    stats.damage = generateRandomNumber(maxDmg, minDmg);
  }
  return stats;
};

//Parte 2
const gameActions = {
  // Crie as HOFs neste objeto.
  warriorAtack: function (warriorDamageFunc) {
    const warriorDmg = warriorDamageFunc(warrior.strength, warrior.weaponDmg);
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  mageAtack: function (mageDamageFunc) {
    const mageDmg = mageDamageFunc(mage.mana, mage.intelligence);
    dragon.healthPoints -= mageDmg.damage;
    mage.damage = mageDmg.damage;
    mage.mana = mageDmg.manaSpent;
  },
  dragonAtack: function(dragonDamage) {
    const dragonDmg = dragonDamage(dragon.strength);
    warrior.healthPoints -= dragonDmg;
    mage.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorAtack(warriorDamage);
gameActions.mageAtack(mageDamage);
gameActions.dragonAtack(dragonDamage);
console.log(gameActions.turnResults());
