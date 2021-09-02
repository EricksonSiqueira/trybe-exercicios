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

const mageAtack = (mana, intelligence) => {
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

console.log(mageAtack(mage.mana, mage.intelligence));
