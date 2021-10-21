"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPets = void 0;
const ant_1 = require("./pets/ant");
const badger_1 = require("./pets/badger");
const bat_1 = require("./pets/bat");
const beaver_1 = require("./pets/beaver");
const beetle_1 = require("./pets/beetle");
const bison_1 = require("./pets/bison");
const blowfish_1 = require("./pets/blowfish");
const bluebird_1 = require("./pets/bluebird");
const buffalo_1 = require("./pets/buffalo");
const camel_1 = require("./pets/camel");
const cat_1 = require("./pets/cat");
const caterpillar_1 = require("./pets/caterpillar");
const chicken_1 = require("./pets/chicken");
const cow_1 = require("./pets/cow");
const crab_1 = require("./pets/crab");
const cricket_1 = require("./pets/cricket");
const crocodile_1 = require("./pets/crocodile");
const deer_1 = require("./pets/deer");
const dodo_1 = require("./pets/dodo");
const dog_1 = require("./pets/dog");
const dolphin_1 = require("./pets/dolphin");
const dragon_1 = require("./pets/dragon");
const dromedary_1 = require("./pets/dromedary");
const duck_1 = require("./pets/duck");
const eagle_1 = require("./pets/eagle");
const elephant_1 = require("./pets/elephant");
const fish_1 = require("./pets/fish");
const flamingo_1 = require("./pets/flamingo");
const fly_1 = require("./pets/fly");
const giraffe_1 = require("./pets/giraffe");
const goat_1 = require("./pets/goat");
const gorilla_1 = require("./pets/gorilla");
const hatchingChick_1 = require("./pets/hatchingChick");
const hedgehog_1 = require("./pets/hedgehog");
const hippo_1 = require("./pets/hippo");
const horse_1 = require("./pets/horse");
const kangaroo_1 = require("./pets/kangaroo");
const ladybug_1 = require("./pets/ladybug");
const leopard_1 = require("./pets/leopard");
const llama_1 = require("./pets/llama");
const lobster_1 = require("./pets/lobster");
const mammoth_1 = require("./pets/mammoth");
const microbe_1 = require("./pets/microbe");
const monkey_1 = require("./pets/monkey");
const mosquito_1 = require("./pets/mosquito");
const octopus_1 = require("./pets/octopus");
const otter_1 = require("./pets/otter");
const owl_1 = require("./pets/owl");
const ox_1 = require("./pets/ox");
const parrot_1 = require("./pets/parrot");
const peacock_1 = require("./pets/peacock");
const penguin_1 = require("./pets/penguin");
const pig_1 = require("./pets/pig");
const poodle_1 = require("./pets/poodle");
const puppy_1 = require("./pets/puppy");
const rabbit_1 = require("./pets/rabbit");
const rat_1 = require("./pets/rat");
const rhino_1 = require("./pets/rhino");
const rooster_1 = require("./pets/rooster");
const sauropod_1 = require("./pets/sauropod");
const scorpion_1 = require("./pets/scorpion");
const seal_1 = require("./pets/seal");
const shark_1 = require("./pets/shark");
const sheep_1 = require("./pets/sheep");
const shrimp_1 = require("./pets/shrimp");
const skunk_1 = require("./pets/skunk");
const sloth_1 = require("./pets/sloth");
const snail_1 = require("./pets/snail");
const snake_1 = require("./pets/snake");
const spider_1 = require("./pets/spider");
const squirrel_1 = require("./pets/squirrel");
const swan_1 = require("./pets/swan");
const tabbyCat_1 = require("./pets/tabbyCat");
const tiger_1 = require("./pets/tiger");
const tropicalFish_1 = require("./pets/tropicalFish");
const turkey_1 = require("./pets/turkey");
const turtle_1 = require("./pets/turtle");
const tyrannosaurus_1 = require("./pets/tyrannosaurus");
const whale_1 = require("./pets/whale");
const worm_1 = require("./pets/worm");
const pets = [
    // Tier 1
    ant_1.ant,
    beaver_1.beaver,
    beetle_1.beetle,
    bluebird_1.bluebird,
    cricket_1.cricket,
    duck_1.duck,
    fish_1.fish,
    horse_1.horse,
    ladybug_1.ladybug,
    mosquito_1.mosquito,
    otter_1.otter,
    pig_1.pig,
    sloth_1.sloth,
    // Tier 2
    bat_1.bat,
    crab_1.crab,
    dodo_1.dodo,
    dog_1.dog,
    dromedary_1.dromedary,
    elephant_1.elephant,
    flamingo_1.flamingo,
    hedgehog_1.hedgehog,
    peacock_1.peacock,
    rat_1.rat,
    shrimp_1.shrimp,
    spider_1.spider,
    swan_1.swan,
    tabbyCat_1.tabbyCat,
    // Tier 3
    badger_1.badger,
    blowfish_1.blowfish,
    caterpillar_1.caterpillar,
    camel_1.camel,
    hatchingChick_1.hatchingChick,
    giraffe_1.giraffe,
    kangaroo_1.kangaroo,
    owl_1.owl,
    ox_1.ox,
    puppy_1.puppy,
    rabbit_1.rabbit,
    sheep_1.sheep,
    snail_1.snail,
    tropicalFish_1.tropicalFish,
    turtle_1.turtle,
    whale_1.whale,
    // Tier 4
    bison_1.bison,
    buffalo_1.buffalo,
    deer_1.deer,
    dolphin_1.dolphin,
    hippo_1.hippo,
    llama_1.llama,
    lobster_1.lobster,
    monkey_1.monkey,
    penguin_1.penguin,
    poodle_1.poodle,
    rooster_1.rooster,
    skunk_1.skunk,
    squirrel_1.squirrel,
    worm_1.worm,
    // Tier 5
    chicken_1.chicken,
    cow_1.cow,
    crocodile_1.crocodile,
    eagle_1.eagle,
    goat_1.goat,
    microbe_1.microbe,
    parrot_1.parrot,
    rhino_1.rhino,
    scorpion_1.scorpion,
    seal_1.seal,
    shark_1.shark,
    turkey_1.turkey,
    // Tier 6
    cat_1.cat,
    dragon_1.dragon,
    fly_1.fly,
    gorilla_1.gorilla,
    leopard_1.leopard,
    mammoth_1.mammoth,
    octopus_1.octopus,
    sauropod_1.sauropod,
    snake_1.snake,
    tiger_1.tiger,
    tyrannosaurus_1.tyrannosaurus,
];
function getPets() {
    return pets;
}
exports.getPets = getPets;
// const food: Food[] = [
//   // Tier 1
//   // Apple: Give an animal +1/+1.
//   // Honey: Give an animal Honey Bee.
//   // Tier 2
//   // Cupcake: Give an animal +3/+3 until end of battle.
//   // Meat Bone: Give an animal Bone Attack.
//   // Sleeping Pill: Make a friendly animal faint.
//   // Tier 3
//   // Garlic: Give an animal Garlic Armor.
//   // Salad Bowl: Give 2 random animals +1/+1.
//   // Tier 4
//   // Canned Food: Give all current and future shop animals +2/+2.
//   // Pear: Give an animal +2/+2.
//   // Tier 5
//   // Chili: Give an animal Splash Attack.
//   // Chocolate: Give an animal +1 Experience.
//   // Sushi: Give 3 random animals +1/+1.
//   // Tier 6
//   // Melon: Give an animal Melon Armor.
//   // Mushroom: Give an animal Extra Life.
//   // Pizza: Give 2 random animals +2/+2.
//   // Steak: Give an animal Steak Attack.
// ];
// export function getFood(): Food[] {
//   return food;
// }
