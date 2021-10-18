import { Ability, Trigger, Pet } from "..";

function leopardAbility(level: number): Ability {
  return {
    description: `Start of battle: Deal 50% Attack damage to ${level} random enemies.`,
    trigger: Trigger.StartOfBattle,
    triggeredBy: {
      kind: "Self",
    },
    effect: {
      kind: "DealDamage",
      target: {
        kind: "RandomEnemy",
        n: level,
      },
      amount: { attackDamagePercent: 50 },
    },
  };
}

export const leopard = {
  name: "Leopard",
  unicodeCodePoint: "\u{1F406}",
  tier: 6,
  baseAttack: 6,
  baseHealth: 4,
  packs: ["StandardPack", "ExpansionPack1"],
  level1Ability: {
    ...leopardAbility(1),
    description: `Start of battle: Deal 50% Attack damage to a random enemy.`,
  },
  level2Ability: leopardAbility(2),
  level3Ability: leopardAbility(3),
} as Pet;
