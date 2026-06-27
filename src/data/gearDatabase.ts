// Additional & Special Gear Database
// Scraped from Coryn Club - 1137 unique items

export interface GearItem {
  id: number;
  name: string;
  category: 'accessory' | 'shield' | 'avatar' | 'food' | 'potion';
  def?: number;
  stats: Array<{
    stat: string;
    value: number;
  }>;
}

export const additionalGearList: GearItem[] = [
  {
    id: 8524,
    name: 'Ghostfire Shoulder Pad',
    category: 'accessory',
    def: 275,
    stats: [
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Anticipate %', value: 15 },
    ]
  },
  {
    id: 8523,
    name: 'Ghostfire Mask',
    category: 'accessory',
    def: 68,
    stats: [
      { stat: 'ATK %', value: 6 },
      { stat: 'CSPD', value: 1200 },
      { stat: 'Attack MP Recovery', value: 12 },
      { stat: 'Short Range Damage %', value: 6 },
      { stat: 'Fractional Barrier %', value: 12 },
    ]
  },
  {
    id: 8505,
    name: 'Sakura Butterfly Hair Ornament',
    category: 'accessory',
    def: 0,
    stats: [
    ]
  },
  {
    id: 8499,
    name: 'Dango Hairpin',
    category: 'accessory',
    def: 61,
    stats: [
      { stat: 'Natural MP Regen', value: 35 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 8497,
    name: 'Spring Day Hat',
    category: 'accessory',
    def: 0,
    stats: [
    ]
  },
  {
    id: 8495,
    name: 'Squirinja Head',
    category: 'accessory',
    def: 233,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Reduce Dmg (Floor) %', value: 25 },
      { stat: 'Reduce Dmg (Meteor) %', value: 25 },
      { stat: 'MaxHP %', value: -20 },
    ]
  },
  {
    id: 8488,
    name: 'Shadow Horn',
    category: 'accessory',
    def: 24,
    stats: [
      { stat: 'AGI %', value: 9 },
      { stat: 'MaxHP', value: 5000 },
      { stat: 'ATK %', value: 9 },
      { stat: 'Accuracy', value: 100 },
      { stat: 'Accuracy %', value: 40 },
      { stat: 'Neutral Resistance %', value: -25 },
      { stat: 'Absolute Accuracy %', value: 4 },
    ]
  },
  {
    id: 8487,
    name: 'Shadow Horn',
    category: 'accessory',
    def: 24,
    stats: [
      { stat: 'AGI %', value: 8 },
      { stat: 'MaxHP', value: 5000 },
      { stat: 'ATK %', value: 8 },
      { stat: 'Accuracy', value: 100 },
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Neutral Resistance %', value: -25 },
      { stat: 'Absolute Accuracy %', value: 3 },
    ]
  },
  {
    id: 8486,
    name: 'Nin-Ninja Headscarf',
    category: 'accessory',
    def: 124,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Guard Break %', value: 30 },
      { stat: 'Absolute Dodge %', value: 15 },
      { stat: 'Item Cooldown', value: -1 },
    ]
  },
  {
    id: 8485,
    name: 'Nin-Ninja Headscarf',
    category: 'accessory',
    def: 124,
    stats: [
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Guard Break %', value: 25 },
      { stat: 'Absolute Dodge %', value: 15 },
      { stat: 'Item Cooldown', value: -1 },
    ]
  },
  {
    id: 8484,
    name: 'Nin-Ninja Headscarf',
    category: 'accessory',
    def: 124,
    stats: [
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Guard Break %', value: 20 },
      { stat: 'Absolute Dodge %', value: 15 },
      { stat: 'Item Cooldown', value: -1 },
    ]
  },
  {
    id: 8483,
    name: 'Sakura Beast Horn',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MATK %', value: 10 },
      { stat: 'CSPD %', value: 10 },
      { stat: 'Additional Magic %', value: 100 },
    ]
  },
  {
    id: 8480,
    name: 'Taiyaki',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'Natural MP Regen', value: 50 },
      { stat: 'Revive Time %', value: -30 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 8465,
    name: 'Happy Champagne',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR %', value: 10 },
      { stat: 'INT %', value: 10 },
      { stat: 'VIT %', value: 10 },
      { stat: 'AGI %', value: 10 },
      { stat: 'DEX %', value: 10 },
      { stat: 'EXP Gain %', value: 20 },
      { stat: 'Drop Rate %', value: 10 },
    ]
  },
  {
    id: 8464,
    name: 'Pom Kitagawa',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR %', value: 10 },
      { stat: 'INT %', value: 10 },
      { stat: 'VIT %', value: 10 },
      { stat: 'AGI %', value: 10 },
      { stat: 'DEX %', value: 10 },
      { stat: 'EXP Gain %', value: 20 },
      { stat: 'Drop Rate %', value: 10 },
    ]
  },
  {
    id: 8459,
    name: 'Light Blue Tasset',
    category: 'accessory',
    def: 262,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Physical Pierce %', value: 15 },
    ]
  },
  {
    id: 8458,
    name: 'Floppy Ear Headband',
    category: 'accessory',
    def: 54,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ASPD', value: 500 },
      { stat: 'CSPD', value: 500 },
    ]
  },
  {
    id: 8441,
    name: 'Scale Hat',
    category: 'accessory',
    def: 219,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Guard Power %', value: 20 },
      { stat: 'Guard Recharge %', value: 20 },
    ]
  },
  {
    id: 8424,
    name: 'Frilly Rose Corsage',
    category: 'accessory',
    def: 116,
    stats: [
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'CSPD %', value: 20 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Invincible Aid (sec)', value: 2 },
    ]
  },
  {
    id: 8423,
    name: 'Crown Ribbon',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'MATK %', value: 12 },
      { stat: 'Stability %', value: 20 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Reduce Explosion %', value: 40 },
    ]
  },
  {
    id: 8416,
    name: 'Myco Hat',
    category: 'accessory',
    def: 72,
    stats: [
      { stat: 'MATK %', value: 13 },
      { stat: 'CSPD %', value: 15 },
      { stat: 'Fire resistance %', value: -25 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 8413,
    name: 'Arm Corsets',
    category: 'accessory',
    def: 54,
    stats: [
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Dark resistance %', value: 20 },
      { stat: 'Magic Barrier', value: 2000 },
    ]
  },
  {
    id: 8409,
    name: 'Sniper Lens',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Physical Pierce %', value: 20 },
      { stat: 'Long Range Damage %', value: 12 },
    ]
  },
  {
    id: 8408,
    name: 'Blue Detachable Collar',
    category: 'accessory',
    def: 93,
    stats: [
      { stat: 'CSPD %', value: 30 },
      { stat: 'Motion Speed %', value: 5 },
      { stat: 'Invincible Aid (sec)', value: 2 },
    ]
  },
  {
    id: 8382,
    name: 'Cupcake Head',
    category: 'accessory',
    def: 61,
    stats: [
      { stat: 'STR %', value: 12 },
      { stat: 'MATK %', value: 12 },
      { stat: 'Critical Rate', value: 24 },
      { stat: 'Fire resistance %', value: -20 },
    ]
  },
  {
    id: 8381,
    name: 'Blue Rose Hat',
    category: 'accessory',
    def: 53,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'CSPD', value: 500 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Reduce Dmg (Meteor) %', value: 25 },
    ]
  },
  {
    id: 8380,
    name: 'Blue Rose Bear Ears',
    category: 'accessory',
    def: 53,
    stats: [
      { stat: 'ATK %', value: 11 },
      { stat: 'CSPD', value: 500 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Reduce Vortex %', value: 25 },
    ]
  },
  {
    id: 8368,
    name: 'Carousel Parasol',
    category: 'accessory',
    def: 222,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'MATK %', value: 11 },
      { stat: 'Water resistance %', value: 10 },
      { stat: 'Reduce Dmg (Meteor) %', value: 40 },
    ]
  },
  {
    id: 8314,
    name: 'Fragrant Cape',
    category: 'accessory',
    def: 205,
    stats: [
      { stat: 'MATK %', value: 10 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Fractional Barrier %', value: 10 },
    ]
  },
  {
    id: 8312,
    name: 'Margrave Visage',
    category: 'accessory',
    def: 123,
    stats: [
      { stat: 'MATK %', value: 12 },
      { stat: 'ASPD', value: 600 },
      { stat: 'CSPD %', value: 40 },
      { stat: 'Dark resistance %', value: -30 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Fractional Barrier %', value: 15 },
    ]
  },
  {
    id: 8310,
    name: 'Monster Face Paint',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'Critical Damage', value: 11 },
      { stat: 'Aggro %', value: 11 },
    ]
  },
  {
    id: 8308,
    name: 'Black Heart Hair Bow',
    category: 'accessory',
    def: 53,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'CSPD %', value: 20 },
    ]
  },
  {
    id: 8305,
    name: 'Antler Crown',
    category: 'accessory',
    def: 56,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Drop Rate %', value: 1 },
    ]
  },
  {
    id: 8302,
    name: 'Antique Belt',
    category: 'accessory',
    def: 106,
    stats: [
      { stat: 'DEX %', value: 11 },
      { stat: 'Stability %', value: 5 },
      { stat: 'ASPD', value: 400 },
      { stat: 'CSPD', value: 400 },
    ]
  },
  {
    id: 8299,
    name: 'Choco Pen Head Accessory',
    category: 'accessory',
    def: 39,
    stats: [
      { stat: 'INT %', value: 10 },
      { stat: 'AGI %', value: 10 },
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Magic Pierce %', value: 15 },
    ]
  },
  {
    id: 8298,
    name: 'Lovey-Dovey Heart L',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'ASPD', value: 500 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Reduce Dmg (Bullet) %', value: 25 },
    ]
  },
  {
    id: 8297,
    name: 'Lovey-Dovey Heart R',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'ATK %', value: 11 },
      { stat: 'ASPD', value: 500 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Reduce Dmg (Floor) %', value: 25 },
    ]
  },
  {
    id: 8296,
    name: 'Love Cup Head Accessory',
    category: 'accessory',
    def: 58,
    stats: [
      { stat: 'DEX %', value: 10 },
      { stat: 'Aggro %', value: -10 },
      { stat: 'Unsheathe Attack %', value: 13 },
    ]
  },
  {
    id: 8290,
    name: 'Forbidden Shawle\'s Hair',
    category: 'accessory',
    def: 106,
    stats: [
      { stat: 'ATK %', value: 11 },
      { stat: 'ASPD %', value: 90 },
      { stat: 'Light resistance %', value: -80 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 8289,
    name: 'Flower Hairpin',
    category: 'accessory',
    def: 21,
    stats: [
      { stat: 'Stability %', value: 20 },
      { stat: 'CSPD %', value: 20 },
    ]
  },
  {
    id: 8287,
    name: 'Forf Mask',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'DEX %', value: 11 },
      { stat: '% stronger against Water', value: 11 },
      { stat: 'Water resistance %', value: 15 },
      { stat: 'Wind resistance %', value: -20 },
    ]
  },
  {
    id: 8279,
    name: 'Lunation Chocker',
    category: 'accessory',
    def: 64,
    stats: [
      { stat: 'MATK %', value: 12 },
      { stat: 'Magic Pierce %', value: 20 },
      { stat: 'MATK UP (STR %)', value: 50 },
    ]
  },
  {
    id: 8274,
    name: 'Kunai in Mouth',
    category: 'accessory',
    def: 22,
    stats: [
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Motion Speed %', value: 10 },
    ]
  },
  {
    id: 8271,
    name: 'Xmas Arm Warmers',
    category: 'accessory',
    def: 102,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'CSPD', value: 1000 },
      { stat: 'Guard Recharge %', value: 5 },
    ]
  },
  {
    id: 8269,
    name: 'Xmas Cape',
    category: 'accessory',
    def: 205,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 8265,
    name: 'Christmas Tree Cape',
    category: 'accessory',
    def: 186,
    stats: [
      { stat: 'MATK %', value: 8 },
      { stat: 'Magic Pierce %', value: 16 },
      { stat: 'Aggro %', value: 4 },
      { stat: 'Reduce Dmg (Straight Line) %', value: 32 },
    ]
  },
  {
    id: 8260,
    name: 'Spruce Ribbon',
    category: 'accessory',
    def: 25,
    stats: [
      { stat: 'Revive Time %', value: -10 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 8258,
    name: 'Spiky Choker',
    category: 'accessory',
    def: 51,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Ailment Resistance %', value: 15 },
      { stat: 'Aggro %', value: 30 },
    ]
  },
  {
    id: 8253,
    name: 'Leather Corset',
    category: 'accessory',
    def: 109,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'ATK %', value: 11 },
      { stat: 'Attack MP Recovery', value: 7 },
    ]
  },
  {
    id: 8245,
    name: 'Klein Feather',
    category: 'accessory',
    def: 103,
    stats: [
      { stat: 'AGI %', value: 10 },
      { stat: 'MaxHP', value: 500 },
      { stat: 'Critical Rate', value: 25 },
    ]
  },
  {
    id: 8244,
    name: 'Wolf Hat',
    category: 'accessory',
    def: 123,
    stats: [
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Dodge', value: 100 },
      { stat: 'Short Range Damage %', value: 10 },
    ]
  },
  {
    id: 8243,
    name: 'Matador Cape',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'Guard Power %', value: 10 },
      { stat: 'Guard Recharge %', value: 10 },
      { stat: 'Short Range Damage %', value: 11 },
      { stat: 'ATK UP (AGI %)', value: 50 },
      { stat: 'Absolute Dodge %', value: 10 },
    ]
  },
  {
    id: 8233,
    name: 'Devil Cavalier Cape',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'ATK %', value: 12 },
      { stat: 'Light resistance %', value: -6 },
      { stat: 'Evasion Recharge %', value: 24 },
      { stat: 'Anticipate %', value: 12 },
    ]
  },
  {
    id: 8232,
    name: 'Cavalier Horse-Face Helm',
    category: 'accessory',
    def: 208,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Long Range Damage %', value: 12 },
    ]
  },
  {
    id: 8222,
    name: 'Pirate Hat',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Physical Resistance %', value: -25 },
      { stat: 'Magic Resistance %', value: -25 },
      { stat: 'ASPD', value: 1000 },
      { stat: 'Evasion Recharge %', value: 25 },
    ]
  },
  {
    id: 8215,
    name: 'Potum Beer Dispenser',
    category: 'accessory',
    def: 255,
    stats: [
      { stat: 'Fire resistance %', value: 30 },
      { stat: 'Ailment Resistance %', value: 6 },
      { stat: 'Motion Speed %', value: 9 },
      { stat: 'Neutral Resistance %', value: 15 },
      { stat: 'Anticipate %', value: 12 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 8214,
    name: 'Watermelon Head',
    category: 'accessory',
    def: 222,
    stats: [
      { stat: 'Natural MP Regen', value: 30 },
      { stat: 'Critical Rate', value: 40 },
      { stat: 'Aggro %', value: 60 },
      { stat: 'Fractional Barrier %', value: 20 },
    ]
  },
  {
    id: 8213,
    name: 'Lil\' Shark on the Head',
    category: 'accessory',
    def: 103,
    stats: [
      { stat: 'Critical Rate %', value: 80 },
      { stat: 'Short Range Damage %', value: 10 },
      { stat: 'Guard Break %', value: 4 },
      { stat: 'Reduce Dmg (Player Epicenter) %', value: 30 },
    ]
  },
  {
    id: 8212,
    name: 'Pirate Skull Hat',
    category: 'accessory',
    def: 205,
    stats: [
      { stat: 'DEX %', value: 10 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Light resistance %', value: -30 },
      { stat: 'Long Range Damage %', value: 10 },
    ]
  },
  {
    id: 8204,
    name: 'Duat Mask',
    category: 'accessory',
    def: 127,
    stats: [
      { stat: 'CSPD %', value: 20 },
      { stat: 'Motion Speed %', value: 10 },
      { stat: 'Absolute Dodge %', value: 15 },
    ]
  },
  {
    id: 8197,
    name: 'Curious Kappa',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Water resistance %', value: 20 },
    ]
  },
  {
    id: 8194,
    name: 'Gothic Choco Hat',
    category: 'accessory',
    def: 68,
    stats: [
      { stat: 'AGI %', value: 8 },
      { stat: 'Fire resistance %', value: -10 },
      { stat: 'Short Range Damage %', value: 12 },
    ]
  },
  {
    id: 8177,
    name: 'Potum Crown',
    category: 'accessory',
    def: 193,
    stats: [
      { stat: 'MaxHP %', value: -40 },
      { stat: 'Fire resistance %', value: 10 },
      { stat: 'Water resistance %', value: 10 },
      { stat: 'Wind resistance %', value: 10 },
      { stat: 'Earth resistance %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
      { stat: 'Dark resistance %', value: 10 },
      { stat: 'Guard Recharge %', value: 10 },
      { stat: 'Evasion Recharge %', value: 10 },
    ]
  },
  {
    id: 8166,
    name: 'Shark Tail',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ASPD %', value: 15 },
      { stat: 'CSPD %', value: 15 },
      { stat: 'Critical Rate %', value: 20 },
      { stat: 'Evasion Recharge %', value: 5 },
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Long Range Damage %', value: 10 },
    ]
  },
  {
    id: 8155,
    name: 'Round-Eared Hat',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'ASPD %', value: 30 },
      { stat: 'CSPD', value: 600 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 8130,
    name: 'Big Ninjutsu Scroll',
    category: 'accessory',
    def: 226,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'CSPD', value: 900 },
      { stat: 'Attack MP Recovery', value: 6 },
    ]
  },
  {
    id: 8104,
    name: 'Shadow Horn',
    category: 'accessory',
    def: 24,
    stats: [
      { stat: 'AGI %', value: 10 },
      { stat: 'MaxHP', value: 5000 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Accuracy', value: 100 },
      { stat: 'Accuracy %', value: 50 },
      { stat: 'Neutral Resistance %', value: -25 },
      { stat: 'Absolute Accuracy %', value: 5 },
    ]
  },
  {
    id: 8101,
    name: 'Gingerbread Man Santa',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'INT %', value: 10 },
      { stat: 'MaxHP', value: 9000 },
      { stat: 'MATK %', value: 11 },
      { stat: 'Dark resistance %', value: 8 },
    ]
  },
  {
    id: 8099,
    name: 'Macaron Head',
    category: 'accessory',
    def: 226,
    stats: [
      { stat: 'Magic Pierce %', value: 25 },
      { stat: 'CSPD', value: 750 },
      { stat: 'CSPD %', value: 50 },
    ]
  },
  {
    id: 8097,
    name: 'Blue Rose Wings',
    category: 'accessory',
    def: 109,
    stats: [
      { stat: 'MaxHP', value: -2000 },
      { stat: 'Dodge', value: 100 },
      { stat: 'ASPD', value: 1000 },
      { stat: 'Evasion Recharge %', value: 10 },
      { stat: 'Short Range Damage %', value: 11 },
      { stat: 'Long Range Damage %', value: -10 },
    ]
  },
  {
    id: 8096,
    name: 'Flower Bag',
    category: 'accessory',
    def: 219,
    stats: [
      { stat: 'Accuracy', value: 20 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Wind resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 20 },
    ]
  },
  {
    id: 8095,
    name: 'Choco Bear Ears',
    category: 'accessory',
    def: 190,
    stats: [
      { stat: 'CSPD %', value: 30 },
      { stat: 'Critical Damage %', value: 15 },
      { stat: 'Aggro %', value: -60 },
    ]
  },
  {
    id: 8094,
    name: 'Lovestruck Heart',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Stability %', value: -5 },
      { stat: 'Accuracy %', value: 50 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 8065,
    name: 'Marshmallow Headband',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Fire resistance %', value: 25 },
      { stat: 'Weapon ATK %', value: 25 },
    ]
  },
  {
    id: 8061,
    name: 'Sweetheart Choco Mask',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'MP', value: -300 },
    ]
  },
  {
    id: 8058,
    name: 'Heavy Iron Waist Armor',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Magic Resistance %', value: 25 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Motion Speed %', value: -1 },
    ]
  },
  {
    id: 8055,
    name: 'Big Gob Hat',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'ATK %', value: 11 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Attack MP Recovery', value: 9 },
    ]
  },
  {
    id: 8051,
    name: 'Donut Glasses',
    category: 'accessory',
    def: 172,
    stats: [
      { stat: 'MaxHP', value: 10 },
      { stat: 'MaxMP', value: 72 },
      { stat: 'Accuracy', value: 72 },
      { stat: 'Critical Damage', value: 10 },
    ]
  },
  {
    id: 8045,
    name: 'Rose Eyepatch',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Fire resistance %', value: -30 },
      { stat: 'Unsheathe Attack %', value: 10 },
      { stat: 'Anticipate %', value: 20 },
    ]
  },
  {
    id: 8040,
    name: 'Winking Gingerbread Man',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Physical Pierce %', value: 18 },
      { stat: 'Critical Rate %', value: -5 },
      { stat: 'Reduce Dmg (Meteor) %', value: 27 },
    ]
  },
  {
    id: 8037,
    name: 'Dango Hat (Skewer)',
    category: 'accessory',
    def: 169,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'MaxHP', value: 3600 },
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Unsheathe Attack %', value: 12 },
      { stat: 'Reduce Dmg (Floor) %', value: -36 },
    ]
  },
  {
    id: 8027,
    name: 'Spiky WIg',
    category: 'accessory',
    def: 111,
    stats: [
      { stat: 'ASPD %', value: 10 },
      { stat: 'CSPD %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Light resistance %', value: -30 },
      { stat: 'Attack MP Recovery', value: 10 },
      { stat: 'Anticipate %', value: 10 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 8026,
    name: 'Gift Box Earrings',
    category: 'accessory',
    def: 36,
    stats: [
      { stat: 'EXP Gain %', value: 10 },
      { stat: 'Pet EXP %', value: 10 },
      { stat: 'Gem Dust Drop Amount %', value: 10 },
    ]
  },
  {
    id: 8015,
    name: 'Accessory Twin Tails',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'AGI %', value: 10 },
      { stat: 'Critical Rate %', value: 10 },
      { stat: 'Long Range Damage %', value: 10 },
      { stat: 'Reduce Explosion %', value: 30 },
    ]
  },
  {
    id: 7988,
    name: 'Shiny Viridian Hair Ornament',
    category: 'accessory',
    def: 234,
    stats: [
      { stat: 'Accuracy %', value: 24 },
      { stat: 'Unsheathe Attack %', value: 12 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Fractional Barrier %', value: 18 },
    ]
  },
  {
    id: 7982,
    name: 'Devil Veil',
    category: 'accessory',
    def: 106,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 7961,
    name: 'Creepy Choker',
    category: 'accessory',
    def: 106,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 7953,
    name: 'Burning Flower',
    category: 'accessory',
    def: 106,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 7553,
    name: 'Deadly Spiral Horn',
    category: 'accessory',
    def: 106,
    stats: [
      { stat: 'MATK %', value: 11 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 7981,
    name: 'Dancer Skirt',
    category: 'accessory',
    def: 212,
    stats: [
      { stat: 'Accuracy %', value: 60 },
      { stat: 'CSPD %', value: 120 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Absolute Accuracy %', value: 15 },
    ]
  },
  {
    id: 7949,
    name: 'Dandelion Fluff',
    category: 'accessory',
    def: 212,
    stats: [
      { stat: 'Accuracy %', value: 60 },
      { stat: 'CSPD %', value: 120 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Absolute Accuracy %', value: 15 },
    ]
  },
  {
    id: 7710,
    name: 'Spiral Tree Bark',
    category: 'accessory',
    def: 212,
    stats: [
      { stat: 'Accuracy %', value: 60 },
      { stat: 'CSPD %', value: 120 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Absolute Accuracy %', value: 15 },
    ]
  },
  {
    id: 7954,
    name: 'Rafflesia Hat',
    category: 'accessory',
    def: 187,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Aggro %', value: -20 },
    ]
  },
  {
    id: 7945,
    name: 'Dead Soul Veil',
    category: 'accessory',
    def: 164,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Short Range Damage %', value: 11 },
      { stat: 'Reduce Dmg (Charge) %', value: -8 },
    ]
  },
  {
    id: 7924,
    name: 'Cute Bolt',
    category: 'accessory',
    def: 164,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Short Range Damage %', value: 11 },
      { stat: 'Reduce Dmg (Charge) %', value: -8 },
    ]
  },
  {
    id: 7941,
    name: 'Mummy Roll Cake',
    category: 'accessory',
    def: 164,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Short Range Damage %', value: 11 },
      { stat: 'Reduce Dmg (Charge) %', value: -8 },
    ]
  },
  {
    id: 7944,
    name: 'Zombie Bunny Backpack',
    category: 'accessory',
    def: 318,
    stats: [
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Dark resistance %', value: 30 },
      { stat: 'Long Range Damage %', value: 3 },
    ]
  },
  {
    id: 7924,
    name: 'Cute Bolt',
    category: 'accessory',
    def: 318,
    stats: [
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Dark resistance %', value: 30 },
      { stat: 'Long Range Damage %', value: 3 },
    ]
  },
  {
    id: 7938,
    name: 'Morning Star Gummy',
    category: 'accessory',
    def: 318,
    stats: [
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Dark resistance %', value: 30 },
      { stat: 'Long Range Damage %', value: 3 },
    ]
  },
  {
    id: 7943,
    name: 'Zomby Trophy',
    category: 'accessory',
    def: 410,
    stats: [
      { stat: 'ASPD', value: 700 },
      { stat: 'Critical Rate', value: 35 },
      { stat: 'Light resistance %', value: -35 },
      { stat: 'ATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 7924,
    name: 'Cute Bolt',
    category: 'accessory',
    def: 410,
    stats: [
      { stat: 'ASPD', value: 700 },
      { stat: 'Critical Rate', value: 35 },
      { stat: 'Light resistance %', value: -35 },
      { stat: 'ATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 7935,
    name: 'Zombie Meat',
    category: 'accessory',
    def: 410,
    stats: [
      { stat: 'ASPD', value: 700 },
      { stat: 'Critical Rate', value: 35 },
      { stat: 'Light resistance %', value: -35 },
      { stat: 'ATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 7936,
    name: 'Face Scar',
    category: 'accessory',
    def: 48,
    stats: [
      { stat: 'Natural MP Regen', value: 25 },
      { stat: 'MaxHP', value: 7500 },
      { stat: 'Short Range Damage %', value: 1 },
    ]
  },
  {
    id: 7931,
    name: 'Crimson Moon Cape',
    category: 'accessory',
    def: 187,
    stats: [
      { stat: 'DEX %', value: 10 },
      { stat: 'MaxMP', value: 250 },
      { stat: 'ASPD', value: 500 },
      { stat: 'Critical Damage %', value: 10 },
      { stat: 'Fire resistance %', value: 25 },
    ]
  },
  {
    id: 7930,
    name: 'Crimson Moon Cape',
    category: 'accessory',
    def: 187,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'MaxMP', value: 250 },
      { stat: 'ASPD', value: 400 },
      { stat: 'Critical Damage %', value: 10 },
      { stat: 'Fire resistance %', value: 25 },
    ]
  },
  {
    id: 7929,
    name: 'Crimson Moon Cape',
    category: 'accessory',
    def: 187,
    stats: [
      { stat: 'DEX %', value: 8 },
      { stat: 'MaxMP', value: 250 },
      { stat: 'ASPD', value: 300 },
      { stat: 'Critical Damage %', value: 10 },
      { stat: 'Fire resistance %', value: 25 },
    ]
  },
  {
    id: 7927,
    name: 'Crimson Moon Hat',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'INT %', value: 10 },
      { stat: 'MaxMP', value: 250 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'CSPD %', value: 50 },
      { stat: 'Fire resistance %', value: 25 },
    ]
  },
  {
    id: 7926,
    name: 'Crimson Moon Hat',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'INT %', value: 9 },
      { stat: 'MaxMP', value: 250 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'CSPD %', value: 40 },
      { stat: 'Fire resistance %', value: 25 },
    ]
  },
  {
    id: 7925,
    name: 'Crimson Moon Hat',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'INT %', value: 8 },
      { stat: 'MaxMP', value: 250 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Fire resistance %', value: 25 },
    ]
  },
  {
    id: 7923,
    name: 'Skull RIbbons',
    category: 'accessory',
    def: 199,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'Critical Rate', value: 6 },
      { stat: 'Long Range Damage %', value: 10 },
    ]
  },
  {
    id: 7924,
    name: 'Cute Bolt',
    category: 'accessory',
    def: 199,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'Critical Rate', value: 6 },
      { stat: 'Long Range Damage %', value: 10 },
    ]
  },
  {
    id: 7910,
    name: 'Ectopiezm',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Motion Speed %', value: 4 },
      { stat: 'Anticipate %', value: 30 },
    ]
  },
  {
    id: 7909,
    name: 'Phantom Cape',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP %', value: 30 },
      { stat: 'Aggro %', value: -50 },
      { stat: 'Motion Speed %', value: 5 },
      { stat: 'Absolute Dodge %', value: 10 },
    ]
  },
  {
    id: 7921,
    name: 'Broken Huge Syringe',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP %', value: 30 },
      { stat: 'Aggro %', value: -50 },
      { stat: 'Motion Speed %', value: 5 },
      { stat: 'Absolute Dodge %', value: 10 },
    ]
  },
  {
    id: 7901,
    name: 'Curious Kappa',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Water resistance %', value: 20 },
    ]
  },
  {
    id: 7898,
    name: 'Yermo Turban',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'STR %', value: 10 },
      { stat: 'INT %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
    ]
  },
  {
    id: 7796,
    name: 'Breeta Mask',
    category: 'accessory',
    def: 205,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'Stability %', value: 8 },
    ]
  },
  {
    id: 7795,
    name: 'Spring Day Headdress',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Long Range Damage %', value: 10 },
      { stat: 'Reduce Vortex %', value: 30 },
    ]
  },
  {
    id: 7744,
    name: 'Pacifier',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'VIT %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'MATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 7663,
    name: 'Flower Crystal',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'VIT %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'MATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 7582,
    name: 'Sea Cucumber',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'VIT %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'MATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 6641,
    name: 'Brassozard Claw',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'VIT %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'MATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 7743,
    name: 'Retro Sunglasses',
    category: 'accessory',
    def: 150,
    stats: [
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Attack MP Recovery', value: 8 },
      { stat: 'Unsheathe Attack %', value: 12 },
    ]
  },
  {
    id: 7657,
    name: 'Tektite',
    category: 'accessory',
    def: 150,
    stats: [
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Attack MP Recovery', value: 8 },
      { stat: 'Unsheathe Attack %', value: 12 },
    ]
  },
  {
    id: 7591,
    name: 'Creepy Mask',
    category: 'accessory',
    def: 150,
    stats: [
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Attack MP Recovery', value: 8 },
      { stat: 'Unsheathe Attack %', value: 12 },
    ]
  },
  {
    id: 6300,
    name: 'Devil\'s Skull',
    category: 'accessory',
    def: 150,
    stats: [
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Attack MP Recovery', value: 8 },
      { stat: 'Unsheathe Attack %', value: 12 },
    ]
  },
  {
    id: 7742,
    name: 'Nonwoven Mask',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'Wind resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Reduce Vortex %', value: 30 },
    ]
  },
  {
    id: 7717,
    name: 'Dirty Thick Cloth',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'Wind resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Reduce Vortex %', value: 30 },
    ]
  },
  {
    id: 7591,
    name: 'Creepy Mask',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'Wind resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Reduce Vortex %', value: 30 },
    ]
  },
  {
    id: 7741,
    name: 'Epaulet Cape',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Long Range Damage %', value: 10 },
      { stat: 'Additional Melee %', value: 100 },
      { stat: 'ASPD', value: 500 },
    ]
  },
  {
    id: 7709,
    name: 'Tangled Roots',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Long Range Damage %', value: 10 },
      { stat: 'Additional Melee %', value: 100 },
      { stat: 'ASPD', value: 500 },
    ]
  },
  {
    id: 7596,
    name: 'Broken Parliamentary Badge',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Long Range Damage %', value: 10 },
      { stat: 'Additional Melee %', value: 100 },
      { stat: 'ASPD', value: 500 },
    ]
  },
  {
    id: 7463,
    name: 'Abyssal Creature Fang',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Long Range Damage %', value: 10 },
      { stat: 'Additional Melee %', value: 100 },
      { stat: 'ASPD', value: 500 },
    ]
  },
  {
    id: 7719,
    name: 'Sylvan Cowl',
    category: 'accessory',
    def: 136,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'ASPD %', value: 5 },
      { stat: 'CSPD %', value: 5 },
    ]
  },
  {
    id: 7711,
    name: 'Leaf Mask',
    category: 'accessory',
    def: 177,
    stats: [
      { stat: 'VIT', value: 10 },
      { stat: 'Attack MP Recovery', value: 20 },
      { stat: 'ATK UP (STR %)', value: 30 },
    ]
  },
  {
    id: 7683,
    name: 'Mulgoon Hood',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Aggro %', value: -15 },
      { stat: '% stronger against Neutral', value: 15 },
    ]
  },
  {
    id: 7682,
    name: 'Mulgoon Hood',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: '% stronger against Dark', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 7681,
    name: 'Mulgoon Hood',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: '% stronger against Light', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 7680,
    name: 'Mulgoon Hood',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: '% stronger against Earth', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 7679,
    name: 'Mulgoon Hood',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: '% stronger against Wind', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 7678,
    name: 'Mulgoon Hood',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: '% stronger against Water', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 7677,
    name: 'Mulgoon Hood',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: '% stronger against Fire', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 7667,
    name: 'Happy Flower',
    category: 'accessory',
    def: 181,
    stats: [
      { stat: 'Aggro %', value: -100 },
      { stat: 'Revive Time %', value: -50 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 7655,
    name: 'Interesse Tiara',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'INT', value: 10 },
      { stat: 'MaxMP', value: 1200 },
      { stat: 'Magic Resistance %', value: 40 },
      { stat: 'Aggro %', value: -56 },
    ]
  },
  {
    id: 7654,
    name: 'Interesse Crown',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'STR', value: 10 },
      { stat: 'MaxHP', value: 2400 },
      { stat: 'Physical Resistance %', value: 40 },
      { stat: 'Aggro %', value: 56 },
    ]
  },
  {
    id: 7653,
    name: 'Flügel Wings',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Magic Resistance %', value: 30 },
      { stat: 'ASPD %', value: 30 },
      { stat: 'Critical Rate %', value: 60 },
      { stat: 'Short Range Damage %', value: 7 },
      { stat: 'Neutral Resistance %', value: 30 },
    ]
  },
  {
    id: 7652,
    name: 'Flügel Wings',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'ASPD %', value: 20 },
      { stat: 'Critical Rate %', value: 40 },
      { stat: 'Short Range Damage %', value: 7 },
      { stat: 'Neutral Resistance %', value: 20 },
    ]
  },
  {
    id: 7651,
    name: 'Flügel Wings',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'ASPD %', value: 10 },
      { stat: 'Critical Rate %', value: 20 },
      { stat: 'Short Range Damage %', value: 7 },
      { stat: 'Neutral Resistance %', value: 10 },
    ]
  },
  {
    id: 7650,
    name: 'Flügel Halo',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Resistance %', value: 30 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Critical Rate %', value: 60 },
      { stat: 'Long Range Damage %', value: 7 },
      { stat: 'Neutral Resistance %', value: 30 },
    ]
  },
  {
    id: 7649,
    name: 'Flügel Halo',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'CSPD %', value: 20 },
      { stat: 'Critical Rate %', value: 40 },
      { stat: 'Long Range Damage %', value: 7 },
      { stat: 'Neutral Resistance %', value: 20 },
    ]
  },
  {
    id: 7648,
    name: 'Flügel Halo',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'CSPD %', value: 10 },
      { stat: 'Critical Rate %', value: 20 },
      { stat: 'Long Range Damage %', value: 7 },
      { stat: 'Neutral Resistance %', value: 10 },
    ]
  },
  {
    id: 7635,
    name: 'Red Hanten',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'VIT %', value: 3 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 7633,
    name: 'Sakura Stole II',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Dark resistance %', value: 15 },
    ]
  },
  {
    id: 7632,
    name: 'Sakura Bonsai',
    category: 'accessory',
    def: 187,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Evasion Recharge %', value: 15 },
    ]
  },
  {
    id: 7631,
    name: 'Sakura Shamisen',
    category: 'accessory',
    def: 99,
    stats: [
      { stat: 'MATK %', value: 10 },
      { stat: 'CSPD %', value: 50 },
      { stat: 'Critical Rate %', value: -20 },
    ]
  },
  {
    id: 7630,
    name: 'Sakura Shoulder Pad',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Short Range Damage %', value: 10 },
      { stat: 'Weapon ATK %', value: 10 },
      { stat: 'Magic Barrier', value: 4000 },
      { stat: 'Additional Melee %', value: 100 },
    ]
  },
  {
    id: 7629,
    name: 'Sakura Fan',
    category: 'accessory',
    def: 181,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Rate %', value: 30 },
    ]
  },
  {
    id: 7628,
    name: 'Waffle Hair Ornament',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Natural MP Regen', value: 50 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 7627,
    name: 'Corynkuchen',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Ailment Resistance %', value: 40 },
    ]
  },
  {
    id: 7626,
    name: 'Melty Chocolate Glasses',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Light resistance %', value: 30 },
      { stat: 'Aggro %', value: 30 },
      { stat: 'Reflect %', value: 30 },
    ]
  },
  {
    id: 7625,
    name: 'White Day Ribbon',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Magic Pierce %', value: 20 },
    ]
  },
  {
    id: 7612,
    name: 'Fine Beard',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Magic Pierce %', value: 5 },
      { stat: 'CSPD %', value: 50 },
      { stat: 'Critical Rate %', value: 50 },
    ]
  },
  {
    id: 7497,
    name: 'Sanguine Fragment',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Magic Pierce %', value: 5 },
      { stat: 'CSPD %', value: 50 },
      { stat: 'Critical Rate %', value: 50 },
    ]
  },
  {
    id: 7545,
    name: 'Swaying Mane',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Magic Pierce %', value: 5 },
      { stat: 'CSPD %', value: 50 },
      { stat: 'Critical Rate %', value: 50 },
    ]
  },
  {
    id: 7611,
    name: 'Ocean Frill Cape',
    category: 'accessory',
    def: 174,
    stats: [
      { stat: 'MaxMP', value: 800 },
      { stat: 'Water resistance %', value: 20 },
      { stat: 'Earth resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 8 },
    ]
  },
  {
    id: 7545,
    name: 'Swaying Mane',
    category: 'accessory',
    def: 174,
    stats: [
      { stat: 'MaxMP', value: 800 },
      { stat: 'Water resistance %', value: 20 },
      { stat: 'Earth resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 8 },
    ]
  },
  {
    id: 7570,
    name: 'Cute Marine Wing',
    category: 'accessory',
    def: 174,
    stats: [
      { stat: 'MaxMP', value: 800 },
      { stat: 'Water resistance %', value: 20 },
      { stat: 'Earth resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 8 },
    ]
  },
  {
    id: 7610,
    name: 'Braid with Ribbon',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate %', value: 100 },
      { stat: 'Short Range Damage %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 7533,
    name: 'Silky Furry Tail',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate %', value: 100 },
      { stat: 'Short Range Damage %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 7745,
    name: 'Ancient Fish Gill',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate %', value: 100 },
      { stat: 'Short Range Damage %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 6134,
    name: 'Mutated Sphere Core',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate %', value: 100 },
      { stat: 'Short Range Damage %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 7609,
    name: 'Horse Tail',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Dodge %', value: 60 },
      { stat: 'ASPD %', value: 120 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Absolute Dodge %', value: 15 },
    ]
  },
  {
    id: 7533,
    name: 'Silky Furry Tail',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Dodge %', value: 60 },
      { stat: 'ASPD %', value: 120 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Absolute Dodge %', value: 15 },
    ]
  },
  {
    id: 6341,
    name: 'Cloudbow Light',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Dodge %', value: 60 },
      { stat: 'ASPD %', value: 120 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Absolute Dodge %', value: 15 },
    ]
  },
  {
    id: 7599,
    name: 'Soap Bubbles',
    category: 'accessory',
    def: 2,
    stats: [
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Aggro %', value: -60 },
      { stat: 'Fractional Barrier %', value: 20 },
      { stat: 'Barrier Cooldown %', value: 20 },
    ]
  },
  {
    id: 7584,
    name: 'Stroom Helm',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Natural HP Regen %', value: 100 },
      { stat: 'MaxHP', value: 10000 },
    ]
  },
  {
    id: 7535,
    name: 'Pierrot Collar',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'CSPD %', value: 60 },
      { stat: 'Absolute Dodge %', value: 3 },
    ]
  },
  {
    id: 7513,
    name: 'Charming Lips',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'Physical Resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Motion Speed %', value: 10 },
    ]
  },
  {
    id: 7551,
    name: 'Bone-In Short Rib',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'Physical Resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Motion Speed %', value: 10 },
    ]
  },
  {
    id: 7560,
    name: 'Thick Cut Sashimi',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'Physical Resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Motion Speed %', value: 10 },
    ]
  },
  {
    id: 7508,
    name: 'Glacial Wings',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Accuracy %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 7506,
    name: 'Fin Ears',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Anticipate %', value: 10 },
    ]
  },
  {
    id: 7449,
    name: 'Abyssal Kelp',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Anticipate %', value: 10 },
    ]
  },
  {
    id: 7162,
    name: 'Aquamarine Pearl',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Anticipate %', value: 10 },
    ]
  },
  {
    id: 7505,
    name: 'Balaclava',
    category: 'accessory',
    def: 94,
    stats: [
      { stat: 'CSPD', value: 700 },
      { stat: 'Aggro %', value: -70 },
      { stat: 'CSPD', value: 300 },
    ]
  },
  {
    id: 7563,
    name: 'Potum\'s Shark Skin',
    category: 'accessory',
    def: 94,
    stats: [
      { stat: 'CSPD', value: 700 },
      { stat: 'Aggro %', value: -70 },
      { stat: 'CSPD', value: 300 },
    ]
  },
  {
    id: 7561,
    name: 'Mass of Seaweed',
    category: 'accessory',
    def: 94,
    stats: [
      { stat: 'CSPD', value: 700 },
      { stat: 'Aggro %', value: -70 },
      { stat: 'CSPD', value: 300 },
    ]
  },
  {
    id: 7504,
    name: 'Otter Scarf',
    category: 'accessory',
    def: 199,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 7431,
    name: 'Longevity Eyebrow',
    category: 'accessory',
    def: 199,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 7386,
    name: 'Sensitive Whisker',
    category: 'accessory',
    def: 199,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 7503,
    name: 'Knife Holder',
    category: 'accessory',
    def: 18,
    stats: [
      { stat: 'Accuracy', value: 50 },
      { stat: 'ASPD %', value: 75 },
    ]
  },
  {
    id: 7444,
    name: 'Sharp Pectoral Fin',
    category: 'accessory',
    def: 18,
    stats: [
      { stat: 'Accuracy', value: 50 },
      { stat: 'ASPD %', value: 75 },
    ]
  },
  {
    id: 7461,
    name: 'Googly Eye',
    category: 'accessory',
    def: 18,
    stats: [
      { stat: 'Accuracy', value: 50 },
      { stat: 'ASPD %', value: 75 },
    ]
  },
  {
    id: 7502,
    name: 'Uncontrollable Evil Eye',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'Accuracy %', value: -9 },
      { stat: 'Dark resistance %', value: 9 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 7449,
    name: 'Abyssal Kelp',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'Accuracy %', value: -9 },
      { stat: 'Dark resistance %', value: 9 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 5077,
    name: 'Sealing Talisman Piece',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'Accuracy %', value: -9 },
      { stat: 'Dark resistance %', value: 9 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 6216,
    name: 'Burning Desire',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'Accuracy %', value: -9 },
      { stat: 'Dark resistance %', value: 9 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 7501,
    name: 'Ice Cube',
    category: 'accessory',
    def: 350,
    stats: [
      { stat: 'Fire resistance %', value: 25 },
      { stat: 'Motion Speed %', value: -50 },
      { stat: 'Reduce Dmg (Bullet) %', value: 50 },
    ]
  },
  {
    id: 7453,
    name: 'Coral Rock',
    category: 'accessory',
    def: 350,
    stats: [
      { stat: 'Fire resistance %', value: 25 },
      { stat: 'Motion Speed %', value: -50 },
      { stat: 'Reduce Dmg (Bullet) %', value: 50 },
    ]
  },
  {
    id: 6950,
    name: 'Hot Glass',
    category: 'accessory',
    def: 350,
    stats: [
      { stat: 'Fire resistance %', value: 25 },
      { stat: 'Motion Speed %', value: -50 },
      { stat: 'Reduce Dmg (Bullet) %', value: 50 },
    ]
  },
  {
    id: 7500,
    name: 'Aqua Shoulder Pads',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Water resistance %', value: 15 },
      { stat: 'Attack MP Recovery', value: 9 },
      { stat: 'Magic Barrier', value: 3000 },
    ]
  },
  {
    id: 7566,
    name: 'Hard Fish Scale',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Water resistance %', value: 15 },
      { stat: 'Attack MP Recovery', value: 9 },
      { stat: 'Magic Barrier', value: 3000 },
    ]
  },
  {
    id: 7456,
    name: 'Glossy Shell',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Water resistance %', value: 15 },
      { stat: 'Attack MP Recovery', value: 9 },
      { stat: 'Magic Barrier', value: 3000 },
    ]
  },
  {
    id: 7499,
    name: 'Shako',
    category: 'accessory',
    def: 181,
    stats: [
      { stat: 'DEX %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Accuracy %', value: 10 },
    ]
  },
  {
    id: 7370,
    name: 'Big Red Claw',
    category: 'accessory',
    def: 181,
    stats: [
      { stat: 'DEX %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Accuracy %', value: 10 },
    ]
  },
  {
    id: 7148,
    name: 'Old Tortoise Mustache',
    category: 'accessory',
    def: 181,
    stats: [
      { stat: 'DEX %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Accuracy %', value: 10 },
    ]
  },
  {
    id: 6955,
    name: 'Scorching Core',
    category: 'accessory',
    def: 181,
    stats: [
      { stat: 'DEX %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Accuracy %', value: 10 },
    ]
  },
  {
    id: 7481,
    name: 'Cookie Head',
    category: 'accessory',
    def: 333,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Earth resistance %', value: 10 },
    ]
  },
  {
    id: 7480,
    name: 'White Knit Cap',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 7478,
    name: 'Wreath Crown',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'DEX %', value: 8 },
      { stat: 'MATK %', value: 9 },
      { stat: 'Ailment Resistance %', value: 7 },
    ]
  },
  {
    id: 7476,
    name: 'Antique Helmet',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Aggro %', value: 20 },
      { stat: 'Weapon ATK %', value: 15 },
      { stat: 'Neutral Resistance %', value: 20 },
      { stat: 'ATK UP (VIT %)', value: 100 },
      { stat: 'MATK UP (VIT %)', value: 100 },
    ]
  },
  {
    id: 7450,
    name: 'Side Ponytail',
    category: 'accessory',
    def: 84,
    stats: [
      { stat: 'AGI %', value: 9 },
      { stat: 'ATK %', value: 9 },
      { stat: 'Dodge %', value: 9 },
    ]
  },
  {
    id: 7434,
    name: 'Dark Night Lantern',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP %', value: 30 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Ailment Resistance %', value: 25 },
      { stat: 'Aggro %', value: 35 },
    ]
  },
  {
    id: 7932,
    name: 'Blood Coffee',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP %', value: 30 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Ailment Resistance %', value: 25 },
      { stat: 'Aggro %', value: 35 },
    ]
  },
  {
    id: 7375,
    name: 'Battie Scone',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP %', value: 30 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Ailment Resistance %', value: 25 },
      { stat: 'Aggro %', value: 35 },
    ]
  },
  {
    id: 7423,
    name: 'Happy Halloween',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'MaxMP', value: 900 },
      { stat: 'Physical Resistance %', value: 30 },
      { stat: 'Attack MP Recovery', value: 6 },
    ]
  },
  {
    id: 7932,
    name: 'Blood Coffee',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'MaxMP', value: 900 },
      { stat: 'Physical Resistance %', value: 30 },
      { stat: 'Attack MP Recovery', value: 6 },
    ]
  },
  {
    id: 7375,
    name: 'Battie Scone',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'MaxMP', value: 900 },
      { stat: 'Physical Resistance %', value: 30 },
      { stat: 'Attack MP Recovery', value: 6 },
    ]
  },
  {
    id: 7416,
    name: 'Steel Helm',
    category: 'accessory',
    def: 85,
    stats: [
      { stat: 'MaxHP %', value: 50 },
      { stat: 'ASPD %', value: 40 },
      { stat: 'CSPD', value: 800 },
      { stat: 'Reduce Dmg (Bullet) %', value: 30 },
    ]
  },
  {
    id: 7410,
    name: 'Halloween Umbrella',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Critical Rate', value: 6 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 7932,
    name: 'Blood Coffee',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Critical Rate', value: 6 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 7401,
    name: 'Leafie Gummy',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'ATK %', value: 10 },
      { stat: 'Critical Rate', value: 6 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 7409,
    name: 'Halloween Teddy',
    category: 'accessory',
    def: 122,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Fractional Barrier %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 7932,
    name: 'Blood Coffee',
    category: 'accessory',
    def: 122,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Fractional Barrier %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 7401,
    name: 'Leafie Gummy',
    category: 'accessory',
    def: 122,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Fractional Barrier %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 7408,
    name: 'Dandy Wolf',
    category: 'accessory',
    def: 151,
    stats: [
      { stat: 'Physical Pierce %', value: 20 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 7932,
    name: 'Blood Coffee',
    category: 'accessory',
    def: 151,
    stats: [
      { stat: 'Physical Pierce %', value: 20 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 7398,
    name: 'Pumpkie Parfait',
    category: 'accessory',
    def: 151,
    stats: [
      { stat: 'Physical Pierce %', value: 20 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 7407,
    name: 'Mummy Head Wrap',
    category: 'accessory',
    def: 302,
    stats: [
      { stat: 'Critical Rate', value: 18 },
      { stat: 'Fire resistance %', value: -18 },
      { stat: 'Short Range Damage %', value: 9 },
      { stat: 'Unsheathe Attack %', value: -9 },
    ]
  },
  {
    id: 7388,
    name: 'Vampire Hat',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxHP %', value: 40 },
      { stat: 'Critical Rate %', value: 80 },
      { stat: 'Wind resistance %', value: 20 },
    ]
  },
  {
    id: 7387,
    name: 'Gradation Scarf',
    category: 'accessory',
    def: 118,
    stats: [
      { stat: 'MaxHP', value: 900 },
      { stat: 'Critical Damage', value: 9 },
      { stat: 'Water resistance %', value: 9 },
    ]
  },
  {
    id: 7330,
    name: 'Wandering Soul',
    category: 'accessory',
    def: 68,
    stats: [
      { stat: 'MaxHP %', value: -111 },
      { stat: 'Neutral Resistance %', value: 50 },
      { stat: 'Revive Time %', value: 555 },
    ]
  },
  {
    id: 7328,
    name: 'Floating Paper Lantern',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'Accuracy', value: 25 },
      { stat: 'Accuracy %', value: 25 },
      { stat: 'Dark resistance %', value: 25 },
    ]
  },
  {
    id: 7322,
    name: 'Beer Mug Head',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 7327,
    name: 'Summer Day Memory',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 802,
    name: 'Golden Honey',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 267,
    name: 'Soda Water',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 7321,
    name: 'Goldfish Hairpin',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Fire resistance %', value: 30 },
    ]
  },
  {
    id: 6509,
    name: 'Summer Shell II',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Fire resistance %', value: 30 },
    ]
  },
  {
    id: 7329,
    name: 'Sun-Protective Robe',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Fire resistance %', value: 30 },
    ]
  },
  {
    id: 4453,
    name: 'Jiggling Fin',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Fire resistance %', value: 30 },
    ]
  },
  {
    id: 7320,
    name: 'Paper Talisman',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK', value: 200 },
      { stat: 'MATK', value: 200 },
      { stat: 'CSPD', value: 400 },
      { stat: 'Fire resistance %', value: -25 },
    ]
  },
  {
    id: 6509,
    name: 'Summer Shell II',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK', value: 200 },
      { stat: 'MATK', value: 200 },
      { stat: 'CSPD', value: 400 },
      { stat: 'Fire resistance %', value: -25 },
    ]
  },
  {
    id: 7326,
    name: 'Bake-Danuki\'s Leaf',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK', value: 200 },
      { stat: 'MATK', value: 200 },
      { stat: 'CSPD', value: 400 },
      { stat: 'Fire resistance %', value: -25 },
    ]
  },
  {
    id: 1156,
    name: 'Shining Soul Stone',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK', value: 200 },
      { stat: 'MATK', value: 200 },
      { stat: 'CSPD', value: 400 },
      { stat: 'Fire resistance %', value: -25 },
    ]
  },
  {
    id: 7304,
    name: '8th Anniv Ribbon',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'INT %', value: 8 },
      { stat: 'VIT %', value: 8 },
      { stat: 'AGI %', value: 8 },
      { stat: 'DEX %', value: 8 },
      { stat: 'Magic Barrier', value: 800 },
    ]
  },
  {
    id: 7303,
    name: '8th Anniv Hat',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'STR %', value: 8 },
      { stat: 'INT %', value: 8 },
      { stat: 'VIT %', value: 8 },
      { stat: 'AGI %', value: 8 },
      { stat: 'DEX %', value: 8 },
      { stat: 'Physical Barrier', value: 800 },
    ]
  },
  {
    id: 7179,
    name: 'Collared Short Cape',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'ATK %', value: 9 },
      { stat: 'ATK DOWN (AGI %)', value: 100 },
      { stat: 'Anticipate %', value: 18 },
    ]
  },
  {
    id: 7160,
    name: 'Moist Thin Wing',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'ATK %', value: 9 },
      { stat: 'ATK DOWN (AGI %)', value: 100 },
      { stat: 'Anticipate %', value: 18 },
    ]
  },
  {
    id: 7099,
    name: 'Ice Wolf Fur',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'STR %', value: 9 },
      { stat: 'ATK %', value: 9 },
      { stat: 'ATK DOWN (AGI %)', value: 100 },
      { stat: 'Anticipate %', value: 18 },
    ]
  },
  {
    id: 7178,
    name: 'Censor Bar',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Accuracy %', value: -20 },
      { stat: 'Critical Rate', value: 40 },
      { stat: 'Light resistance %', value: 30 },
    ]
  },
  {
    id: 7156,
    name: 'Glowing Petal',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Accuracy %', value: -20 },
      { stat: 'Critical Rate', value: 40 },
      { stat: 'Light resistance %', value: 30 },
    ]
  },
  {
    id: 7108,
    name: 'Frozen Stone',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Accuracy %', value: -20 },
      { stat: 'Critical Rate', value: 40 },
      { stat: 'Light resistance %', value: 30 },
    ]
  },
  {
    id: 6331,
    name: 'Gloomy Gaze',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Accuracy %', value: -20 },
      { stat: 'Critical Rate', value: 40 },
      { stat: 'Light resistance %', value: 30 },
    ]
  },
  {
    id: 7167,
    name: 'Water Priest Draconic Horns',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Motion Speed %', value: 5 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Additional Melee %', value: 200 },
    ]
  },
  {
    id: 7153,
    name: 'Waistlet',
    category: 'accessory',
    def: 41,
    stats: [
      { stat: 'Natural MP Regen %', value: 9 },
      { stat: 'Magic Pierce %', value: 9 },
      { stat: 'Critical Damage %', value: 9 },
    ]
  },
  {
    id: 7149,
    name: 'Solid Guard Helmet',
    category: 'accessory',
    def: 314,
    stats: [
      { stat: 'MDEF %', value: 10 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Neutral Resistance %', value: 30 },
    ]
  },
  {
    id: 7131,
    name: 'Gothic Witch Hat',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Magic Pierce %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Critical Rate %', value: 50 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 6691,
    name: 'Strange Eye',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Magic Pierce %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Critical Rate %', value: 50 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 7112,
    name: 'Crimson Glow Sphere',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Magic Pierce %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Critical Rate %', value: 50 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 7130,
    name: 'Bunny Hood',
    category: 'accessory',
    def: 170,
    stats: [
      { stat: 'AGI %', value: 4 },
      { stat: 'ATK %', value: 4 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 7107,
    name: 'Ice Crystal Tail',
    category: 'accessory',
    def: 170,
    stats: [
      { stat: 'AGI %', value: 4 },
      { stat: 'ATK %', value: 4 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 7109,
    name: 'Aurora Sash',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Critical Damage %', value: 4 },
      { stat: 'Fire resistance %', value: -10 },
    ]
  },
  {
    id: 7097,
    name: 'Teardrop',
    category: 'accessory',
    def: 14,
    stats: [
      { stat: 'MATK %', value: 8 },
      { stat: 'Stability %', value: 4 },
      { stat: 'Weapon ATK %', value: 2 },
    ]
  },
  {
    id: 7080,
    name: 'Big Horns',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Stability %', value: 6 },
      { stat: 'Motion Speed %', value: 3 },
    ]
  },
  {
    id: 7000,
    name: 'Stone Sternal Bone',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Stability %', value: 6 },
      { stat: 'Motion Speed %', value: 3 },
    ]
  },
  {
    id: 7041,
    name: 'Big Neck Frill',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Stability %', value: 6 },
      { stat: 'Motion Speed %', value: 3 },
    ]
  },
  {
    id: 7027,
    name: 'Blackish Brown Bristles',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Stability %', value: 6 },
      { stat: 'Motion Speed %', value: 3 },
    ]
  },
  {
    id: 7079,
    name: 'Shaman Shoulder Pad',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'Natural HP Regen %', value: 25 },
      { stat: 'ASPD %', value: 25 },
      { stat: 'CSPD %', value: 25 },
      { stat: 'Light resistance %', value: 25 },
      { stat: 'Dark resistance %', value: 25 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 5515,
    name: 'Adamantite Horn',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'Natural HP Regen %', value: 25 },
      { stat: 'ASPD %', value: 25 },
      { stat: 'CSPD %', value: 25 },
      { stat: 'Light resistance %', value: 25 },
      { stat: 'Dark resistance %', value: 25 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 6996,
    name: 'Sleek Horse Hair',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'Natural HP Regen %', value: 25 },
      { stat: 'ASPD %', value: 25 },
      { stat: 'CSPD %', value: 25 },
      { stat: 'Light resistance %', value: 25 },
      { stat: 'Dark resistance %', value: 25 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 6764,
    name: 'Dim Eyeball',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'Natural HP Regen %', value: 25 },
      { stat: 'ASPD %', value: 25 },
      { stat: 'CSPD %', value: 25 },
      { stat: 'Light resistance %', value: 25 },
      { stat: 'Dark resistance %', value: 25 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 7078,
    name: 'Jade Hair Clip',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'Revive Time %', value: -50 },
      { stat: 'Physical Barrier', value: 3000 },
      { stat: 'Fractional Barrier %', value: 20 },
      { stat: 'Magic Barrier', value: 4000 },
      { stat: 'Barrier Cooldown %', value: 10 },
    ]
  },
  {
    id: 6545,
    name: 'Endless Storm',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'Revive Time %', value: -50 },
      { stat: 'Physical Barrier', value: 3000 },
      { stat: 'Fractional Barrier %', value: 20 },
      { stat: 'Magic Barrier', value: 4000 },
      { stat: 'Barrier Cooldown %', value: 10 },
    ]
  },
  {
    id: 6763,
    name: 'Beautiful Mineral',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'Revive Time %', value: -50 },
      { stat: 'Physical Barrier', value: 3000 },
      { stat: 'Fractional Barrier %', value: 20 },
      { stat: 'Magic Barrier', value: 4000 },
      { stat: 'Barrier Cooldown %', value: 10 },
    ]
  },
  {
    id: 7077,
    name: 'Dragon Cape',
    category: 'accessory',
    def: 314,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'Physical Pierce %', value: 9 },
      { stat: 'Magic Pierce %', value: 9 },
      { stat: 'Unsheathe Attack %', value: 8 },
    ]
  },
  {
    id: 7036,
    name: 'Hot Dragon Scale',
    category: 'accessory',
    def: 314,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'Physical Pierce %', value: 9 },
      { stat: 'Magic Pierce %', value: 9 },
      { stat: 'Unsheathe Attack %', value: 8 },
    ]
  },
  {
    id: 7004,
    name: 'Rose Oil',
    category: 'accessory',
    def: 314,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'Physical Pierce %', value: 9 },
      { stat: 'Magic Pierce %', value: 9 },
      { stat: 'Unsheathe Attack %', value: 8 },
    ]
  },
  {
    id: 7076,
    name: 'Newsboy Cap',
    category: 'accessory',
    def: 118,
    stats: [
      { stat: 'Stability %', value: 20 },
      { stat: 'Physical Resistance %', value: -20 },
      { stat: 'Magic Resistance %', value: -20 },
    ]
  },
  {
    id: 6953,
    name: 'Hard Beard',
    category: 'accessory',
    def: 118,
    stats: [
      { stat: 'Stability %', value: 20 },
      { stat: 'Physical Resistance %', value: -20 },
      { stat: 'Magic Resistance %', value: -20 },
    ]
  },
  {
    id: 6680,
    name: 'Thin Eyeball',
    category: 'accessory',
    def: 118,
    stats: [
      { stat: 'Stability %', value: 20 },
      { stat: 'Physical Resistance %', value: -20 },
      { stat: 'Magic Resistance %', value: -20 },
    ]
  },
  {
    id: 7030,
    name: 'Thick Determined Eyebrows',
    category: 'accessory',
    def: 226,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Guard Power %', value: 10 },
      { stat: 'Guard Recharge %', value: 10 },
    ]
  },
  {
    id: 7026,
    name: 'Schmet Hairpin',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'INT %', value: 9 },
      { stat: 'MATK %', value: 9 },
      { stat: 'Magic Resistance %', value: 9 },
    ]
  },
  {
    id: 6999,
    name: 'Sheep Hood',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 6991,
    name: 'Tomtits Gathering Spot',
    category: 'accessory',
    def: 48,
    stats: [
      { stat: 'CSPD %', value: 40 },
      { stat: 'Weapon ATK', value: 30 },
      { stat: 'Unsheathe Attack %', value: 8 },
    ]
  },
  {
    id: 6985,
    name: 'Angel Potum Chocolate',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Anticipate %', value: 10 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 6975,
    name: 'Suspicious Order Form',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Anticipate %', value: 10 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 6967,
    name: 'High Quality Sugar',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Anticipate %', value: 10 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 6964,
    name: 'Cocoa Powder',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Anticipate %', value: 10 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 6983,
    name: 'Heart Chef Hat',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Magic Pierce %', value: 15 },
    ]
  },
  {
    id: 6974,
    name: 'Bad Liquor',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Magic Pierce %', value: 15 },
    ]
  },
  {
    id: 6964,
    name: 'Cocoa Powder',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Magic Pierce %', value: 15 },
    ]
  },
  {
    id: 6970,
    name: 'Cacao Paste',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Magic Pierce %', value: 15 },
    ]
  },
  {
    id: 6982,
    name: 'Broker Hat',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'Critical Damage %', value: 8 },
      { stat: 'Long Range Damage %', value: 4 },
    ]
  },
  {
    id: 6976,
    name: 'Broker Mask',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 6966,
    name: 'Pancake Hat',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 7500 },
      { stat: 'MaxMP', value: 250 },
      { stat: 'Reduce Dmg (Meteor) %', value: 50 },
    ]
  },
  {
    id: 6951,
    name: 'Iron Choker',
    category: 'accessory',
    def: 76,
    stats: [
      { stat: 'Accuracy', value: 50 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 6941,
    name: 'Round Sunglasses',
    category: 'accessory',
    def: 124,
    stats: [
      { stat: 'AGI %', value: 9 },
      { stat: 'Critical Rate', value: 18 },
    ]
  },
  {
    id: 6919,
    name: 'Cherry Pink Certificate',
    category: 'accessory',
    def: 124,
    stats: [
      { stat: 'AGI %', value: 9 },
      { stat: 'Critical Rate', value: 18 },
    ]
  },
  {
    id: 6940,
    name: 'Japanese Style Bucket Hat',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP', value: 2500 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 6918,
    name: 'Sakura Warrior Emblem',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP', value: 2500 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 6922,
    name: 'Swordsbear Treasured Sake',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxHP', value: 2500 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 6939,
    name: 'Stylish Kasa',
    category: 'accessory',
    def: 262,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'Attack MP Recovery', value: 9 },
      { stat: 'Unsheathe Attack %', value: 9 },
    ]
  },
  {
    id: 6918,
    name: 'Sakura Warrior Emblem',
    category: 'accessory',
    def: 262,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'Attack MP Recovery', value: 9 },
      { stat: 'Unsheathe Attack %', value: 9 },
    ]
  },
  {
    id: 6922,
    name: 'Swordsbear Treasured Sake',
    category: 'accessory',
    def: 262,
    stats: [
      { stat: 'DEX %', value: 9 },
      { stat: 'Attack MP Recovery', value: 9 },
      { stat: 'Unsheathe Attack %', value: 9 },
    ]
  },
  {
    id: 6938,
    name: 'Ribbon Kanzashi',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MATK %', value: 8 },
      { stat: 'Critical Rate', value: 25 },
      { stat: '% stronger against Neutral', value: 4 },
    ]
  },
  {
    id: 6918,
    name: 'Sakura Warrior Emblem',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MATK %', value: 8 },
      { stat: 'Critical Rate', value: 25 },
      { stat: '% stronger against Neutral', value: 4 },
    ]
  },
  {
    id: 6921,
    name: 'Swordsbear Fluffy Beard',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MATK %', value: 8 },
      { stat: 'Critical Rate', value: 25 },
      { stat: '% stronger against Neutral', value: 4 },
    ]
  },
  {
    id: 6937,
    name: 'Warbler on the Head',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'VIT %', value: 9 },
      { stat: 'ASPD', value: 450 },
      { stat: 'CSPD', value: 450 },
    ]
  },
  {
    id: 6918,
    name: 'Sakura Warrior Emblem',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'VIT %', value: 9 },
      { stat: 'ASPD', value: 450 },
      { stat: 'CSPD', value: 450 },
    ]
  },
  {
    id: 6925,
    name: 'Baavgai Hat',
    category: 'accessory',
    def: 350,
    stats: [
      { stat: 'MaxHP %', value: 10 },
      { stat: 'ATK %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'ASPD', value: -1350 },
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 6911,
    name: 'DL Memorial Badge',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'ASPD', value: 500 },
      { stat: 'CSPD', value: 500 },
      { stat: 'EXP Gain %', value: 10 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 6868,
    name: 'White Day Earrings',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Critical Rate', value: 9 },
      { stat: 'Attack MP Recovery', value: 9 },
    ]
  },
  {
    id: 6854,
    name: 'Biscuit Horns',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Critical Rate', value: 9 },
      { stat: 'Attack MP Recovery', value: 9 },
    ]
  },
  {
    id: 6855,
    name: 'Heart-Shaped Spit Piece',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'Critical Rate', value: 9 },
      { stat: 'Attack MP Recovery', value: 9 },
    ]
  },
  {
    id: 6867,
    name: 'Choco Biscuit Bear',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Physical Resistance %', value: -10 },
      { stat: 'Magic Resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 6850,
    name: 'Almond Powder',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Physical Resistance %', value: -10 },
      { stat: 'Magic Resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 6844,
    name: 'Unsalted Butter',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Physical Resistance %', value: -10 },
      { stat: 'Magic Resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 6855,
    name: 'Heart-Shaped Spit Piece',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Physical Resistance %', value: -10 },
      { stat: 'Magic Resistance %', value: 40 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 6866,
    name: 'Coryn Cupcake',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'INT %', value: 4 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Additional Magic %', value: 120 },
    ]
  },
  {
    id: 6847,
    name: 'Rich-Tasting Egg',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'INT %', value: 4 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Additional Magic %', value: 120 },
    ]
  },
  {
    id: 6850,
    name: 'Almond Powder',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'INT %', value: 4 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Additional Magic %', value: 120 },
    ]
  },
  {
    id: 6854,
    name: 'Biscuit Horns',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'INT %', value: 4 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Additional Magic %', value: 120 },
    ]
  },
  {
    id: 6865,
    name: 'Heart Chocolate Biscuit',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Guard Break %', value: 14 },
    ]
  },
  {
    id: 6862,
    name: 'Cookie Wings',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'DEX %', value: 5 },
      { stat: 'Accuracy %', value: 25 },
      { stat: 'Long Range Damage %', value: 10 },
    ]
  },
  {
    id: 6860,
    name: 'Crust Plate',
    category: 'accessory',
    def: 338,
    stats: [
      { stat: 'ASPD %', value: 30 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Aggro %', value: 30 },
    ]
  },
  {
    id: 6859,
    name: 'Cookie Horns',
    category: 'accessory',
    def: 157,
    stats: [
      { stat: 'MaxMP', value: 90 },
      { stat: 'MATK %', value: 9 },
      { stat: 'Magic Pierce %', value: 9 },
      { stat: 'Reduce Dmg (Charge) %', value: -45 },
    ]
  },
  {
    id: 6846,
    name: 'Candy Paper Bag',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'Natural MP Regen %', value: 30 },
      { stat: 'Barrier Cooldown %', value: 20 },
      { stat: 'Item Cooldown', value: -1 },
    ]
  },
  {
    id: 6784,
    name: 'Zodiac Hat: Rabbit',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR', value: 1 },
      { stat: 'INT', value: 1 },
      { stat: 'VIT', value: 1 },
      { stat: 'AGI', value: 1 },
      { stat: 'DEX', value: 1 },
    ]
  },
  {
    id: 6765,
    name: 'Shady Hoodie',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'INT %', value: 8 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'ATK %', value: 8 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 6756,
    name: 'Xmas Sock',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'MATK %', value: 8 },
      { stat: 'ASPD', value: 400 },
      { stat: 'CSPD %', value: 60 },
    ]
  },
  {
    id: 6753,
    name: 'Black Snow',
    category: 'accessory',
    def: 175,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'MATK %', value: 8 },
      { stat: 'ASPD', value: 400 },
      { stat: 'CSPD %', value: 60 },
    ]
  },
  {
    id: 6755,
    name: 'Finpen Snowman',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Reduce Dmg (Player Epicenter) %', value: 25 },
    ]
  },
  {
    id: 6753,
    name: 'Black Snow',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Reduce Dmg (Player Epicenter) %', value: 25 },
    ]
  },
  {
    id: 6754,
    name: 'Ornament Earrings',
    category: 'accessory',
    def: 25,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Stability %', value: 15 },
    ]
  },
  {
    id: 6753,
    name: 'Black Snow',
    category: 'accessory',
    def: 25,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Stability %', value: 15 },
    ]
  },
  {
    id: 6752,
    name: 'Santa Potum Plushie',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dark resistance %', value: 3 },
    ]
  },
  {
    id: 5118,
    name: 'Crystal Snow',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dark resistance %', value: 3 },
    ]
  },
  {
    id: 6745,
    name: 'Holy Night Scarf',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'MATK %', value: 9 },
      { stat: 'Magic Resistance %', value: 30 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Light resistance %', value: 30 },
    ]
  },
  {
    id: 6744,
    name: 'Holy Night Muffler',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'ATK %', value: 9 },
      { stat: 'Physical Resistance %', value: 30 },
      { stat: 'ASPD %', value: 30 },
      { stat: 'Light resistance %', value: 30 },
    ]
  },
  {
    id: 6742,
    name: 'Cat Tail Hat',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Motion Speed %', value: 3 },
      { stat: 'Weapon ATK %', value: 3 },
    ]
  },
  {
    id: 6738,
    name: 'Ice Wing Hair Ornament',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'Water resistance %', value: 30 },
      { stat: 'Aggro %', value: -90 },
      { stat: 'Short Range Damage %', value: 7 },
    ]
  },
  {
    id: 6737,
    name: 'Xmas Lights Hair Ornament',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Critical Rate', value: 7 },
      { stat: 'Critical Damage', value: 7 },
      { stat: '% stronger against Light', value: 7 },
      { stat: '% stronger against Dark', value: 6 },
      { stat: 'Light resistance %', value: 6 },
      { stat: 'Dark resistance %', value: 6 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6733,
    name: 'Gift Potum',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Critical Damage', value: 10 },
    ]
  },
  {
    id: 5428,
    name: 'Magic Yarn',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Critical Damage', value: 10 },
    ]
  },
  {
    id: 5277,
    name: 'Scary Black Shadow Face',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Critical Damage', value: 10 },
    ]
  },
  {
    id: 5371,
    name: 'Inferno Curse Bone Feather',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Critical Damage', value: 10 },
    ]
  },
  {
    id: 5456,
    name: 'Amorphous Substance',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'ATK %', value: 10 },
      { stat: 'MATK %', value: 10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Critical Damage', value: 10 },
    ]
  },
  {
    id: 6732,
    name: 'Coryn Mask',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'MaxHP %', value: 40 },
      { stat: 'Physical Resistance %', value: 5 },
      { stat: 'Magic Resistance %', value: 5 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 5428,
    name: 'Magic Yarn',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'MaxHP %', value: 40 },
      { stat: 'Physical Resistance %', value: 5 },
      { stat: 'Magic Resistance %', value: 5 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 4393,
    name: 'Quality Herb',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'MaxHP %', value: 40 },
      { stat: 'Physical Resistance %', value: 5 },
      { stat: 'Magic Resistance %', value: 5 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 4469,
    name: 'Floating Corroded Crystal Bit',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'MaxHP %', value: 40 },
      { stat: 'Physical Resistance %', value: 5 },
      { stat: 'Magic Resistance %', value: 5 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 4698,
    name: 'Crystal Goshawk Blade',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'MaxHP %', value: 40 },
      { stat: 'Physical Resistance %', value: 5 },
      { stat: 'Magic Resistance %', value: 5 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 6720,
    name: 'Scale Horns',
    category: 'accessory',
    def: 236,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Accuracy %', value: 40 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 6699,
    name: 'Crooked Horn',
    category: 'accessory',
    def: 236,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Accuracy %', value: 40 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 6626,
    name: 'Wyvern Horn',
    category: 'accessory',
    def: 236,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Accuracy %', value: 40 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 6539,
    name: 'Dragon Snake Shed',
    category: 'accessory',
    def: 236,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Accuracy %', value: 40 },
      { stat: 'Short Range Damage %', value: 9 },
    ]
  },
  {
    id: 6719,
    name: 'Seer\'s Veil',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'CSPD %', value: 25 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6689,
    name: 'Corroded Red Crystal',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'CSPD %', value: 25 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6539,
    name: 'Dragon Snake Shed',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'CSPD %', value: 25 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6696,
    name: 'Raptor Mask',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dodge', value: 100 },
      { stat: 'Evasion Recharge %', value: 50 },
      { stat: 'ATK UP (DEX %)', value: 50 },
    ]
  },
  {
    id: 6670,
    name: 'Pride Glasses',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Natural MP Regen %', value: 40 },
      { stat: 'Critical Rate', value: 50 },
      { stat: 'Light resistance %', value: 10 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Revive Time %', value: -20 },
    ]
  },
  {
    id: 6669,
    name: 'Coin Purse',
    category: 'accessory',
    def: 75,
    stats: [
      { stat: 'CSPD %', value: 50 },
      { stat: 'Dark resistance %', value: -25 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 6630,
    name: 'Elongated Tongue',
    category: 'accessory',
    def: 75,
    stats: [
      { stat: 'CSPD %', value: 50 },
      { stat: 'Dark resistance %', value: -25 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 6650,
    name: 'Trickster Wings',
    category: 'accessory',
    def: 169,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'CSPD', value: 500 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 6649,
    name: 'Trickster Kerato',
    category: 'accessory',
    def: 169,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'ASPD', value: 500 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 6628,
    name: 'Dragon Helmet',
    category: 'accessory',
    def: 290,
    stats: [
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Aggro %', value: 30 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 6624,
    name: 'Floral Hat',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'Natural HP Regen %', value: 25 },
      { stat: 'MaxHP', value: 2500 },
      { stat: 'Critical Rate %', value: 25 },
    ]
  },
  {
    id: 6608,
    name: 'Ghost\'s Sweets Basket',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 7500 },
      { stat: 'Critical Rate %', value: 25 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 6602,
    name: 'Bewitched Lantern Gummy',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 7500 },
      { stat: 'Critical Rate %', value: 25 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 6581,
    name: 'Pumpkin Waistband',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 7500 },
      { stat: 'Critical Rate %', value: 25 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 6607,
    name: 'Grim Reaper\'s Hood',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'ATK %', value: 4 },
      { stat: 'Critical Rate %', value: -20 },
      { stat: 'Evasion Recharge %', value: 12 },
      { stat: 'Unsheathe Attack %', value: 8 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6602,
    name: 'Bewitched Lantern Gummy',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'ATK %', value: 4 },
      { stat: 'Critical Rate %', value: -20 },
      { stat: 'Evasion Recharge %', value: 12 },
      { stat: 'Unsheathe Attack %', value: 8 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6585,
    name: 'Halloween Meteorite',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'ATK %', value: 4 },
      { stat: 'Critical Rate %', value: -20 },
      { stat: 'Evasion Recharge %', value: 12 },
      { stat: 'Unsheathe Attack %', value: 8 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6606,
    name: 'Head Plop Ghost',
    category: 'accessory',
    def: 240,
    stats: [
      { stat: 'ASPD', value: 750 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'ATK DOWN (AGI %)', value: 100 },
    ]
  },
  {
    id: 6602,
    name: 'Bewitched Lantern Gummy',
    category: 'accessory',
    def: 240,
    stats: [
      { stat: 'ASPD', value: 750 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'ATK DOWN (AGI %)', value: 100 },
    ]
  },
  {
    id: 6589,
    name: 'Salad Dressing',
    category: 'accessory',
    def: 240,
    stats: [
      { stat: 'ASPD', value: 750 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'ATK DOWN (AGI %)', value: 100 },
    ]
  },
  {
    id: 6605,
    name: 'Guide Ghost',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'Physical Resistance %', value: 5 },
      { stat: 'Magic Resistance %', value: 5 },
      { stat: 'Aggro %', value: 50 },
      { stat: 'Reduce Dmg (Floor) %', value: 30 },
      { stat: 'Reduce Dmg (Bowling) %', value: 30 },
    ]
  },
  {
    id: 6602,
    name: 'Bewitched Lantern Gummy',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'Physical Resistance %', value: 5 },
      { stat: 'Magic Resistance %', value: 5 },
      { stat: 'Aggro %', value: 50 },
      { stat: 'Reduce Dmg (Floor) %', value: 30 },
      { stat: 'Reduce Dmg (Bowling) %', value: 30 },
    ]
  },
  {
    id: 6604,
    name: 'Halloween Hat',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'CSPD %', value: 25 },
      { stat: 'Critical Rate %', value: 75 },
      { stat: 'Fractional Barrier %', value: 5 },
    ]
  },
  {
    id: 6602,
    name: 'Bewitched Lantern Gummy',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'CSPD %', value: 25 },
      { stat: 'Critical Rate %', value: 75 },
      { stat: 'Fractional Barrier %', value: 5 },
    ]
  },
  {
    id: 6583,
    name: 'Floating Pumpkin Lanterns',
    category: 'accessory',
    def: 27,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Physical Barrier', value: 2000 },
      { stat: 'Magic Barrier', value: 2000 },
    ]
  },
  {
    id: 6564,
    name: 'Bunny Ribbon Hood',
    category: 'accessory',
    def: 158,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'MATK %', value: 9 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Aggro %', value: -20 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 6563,
    name: 'Bunny Button Hood',
    category: 'accessory',
    def: 158,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'ATK %', value: 9 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Aggro %', value: -20 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 6562,
    name: 'Exotic Waist Apron',
    category: 'accessory',
    def: 122,
    stats: [
      { stat: 'ATK %', value: -9 },
      { stat: 'MATK %', value: 9 },
      { stat: 'CSPD', value: 900 },
      { stat: 'Earth resistance %', value: 20 },
    ]
  },
  {
    id: 6543,
    name: 'Quake Sound',
    category: 'accessory',
    def: 122,
    stats: [
      { stat: 'ATK %', value: -9 },
      { stat: 'MATK %', value: 9 },
      { stat: 'CSPD', value: 900 },
      { stat: 'Earth resistance %', value: 20 },
    ]
  },
  {
    id: 6294,
    name: 'Poisonous Root Veggie',
    category: 'accessory',
    def: 122,
    stats: [
      { stat: 'ATK %', value: -9 },
      { stat: 'MATK %', value: 9 },
      { stat: 'CSPD', value: 900 },
      { stat: 'Earth resistance %', value: 20 },
    ]
  },
  {
    id: 6561,
    name: 'Flying Dragon Cape',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'Stability %', value: -2 },
      { stat: 'Physical Pierce %', value: 20 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6534,
    name: 'Flying Dragon Wing',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'Stability %', value: -2 },
      { stat: 'Physical Pierce %', value: 20 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6286,
    name: 'Black Stone Bone',
    category: 'accessory',
    def: 163,
    stats: [
      { stat: 'Stability %', value: -2 },
      { stat: 'Physical Pierce %', value: 20 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6532,
    name: 'Holy Hood',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'Magic Resistance %', value: 30 },
      { stat: 'Dark resistance %', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
    ]
  },
  {
    id: 6520,
    name: 'Tanuki Hat',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'Natural MP Regen', value: 25 },
      { stat: 'Natural MP Regen %', value: 50 },
      { stat: 'MaxMP', value: 125 },
    ]
  },
  {
    id: 6514,
    name: 'Guardian\'s Mask',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'INT %', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 4576,
    name: 'Old Casket',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'INT %', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 3794,
    name: 'Dark Dragon Shrine Stone',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'INT %', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 6513,
    name: 'Pure Ribbon',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Ailment Resistance %', value: 15 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 4118,
    name: 'Temptation Flower',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Ailment Resistance %', value: 15 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 3657,
    name: 'Red Satin Fabric',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Ailment Resistance %', value: 15 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 6512,
    name: 'Crimson Hachimaki',
    category: 'accessory',
    def: 59,
    stats: [
      { stat: 'STR %', value: 5 },
      { stat: 'Fire resistance %', value: 15 },
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 4455,
    name: 'Bloody Red Gemstone',
    category: 'accessory',
    def: 59,
    stats: [
      { stat: 'STR %', value: 5 },
      { stat: 'Fire resistance %', value: 15 },
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 4978,
    name: 'Raging Soul',
    category: 'accessory',
    def: 59,
    stats: [
      { stat: 'STR %', value: 5 },
      { stat: 'Fire resistance %', value: 15 },
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6511,
    name: 'Small Fox Mask',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Unsheathe Attack %', value: 5 },
      { stat: 'Anticipate %', value: 20 },
    ]
  },
  {
    id: 4394,
    name: 'Broken Kuzto Mask',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Unsheathe Attack %', value: 5 },
      { stat: 'Anticipate %', value: 20 },
    ]
  },
  {
    id: 5243,
    name: 'Ancient Scroll',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Unsheathe Attack %', value: 5 },
      { stat: 'Anticipate %', value: 20 },
    ]
  },
  {
    id: 6506,
    name: 'Hachimaki Baby Octopus',
    category: 'accessory',
    def: 8,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Critical Rate', value: 35 },
      { stat: 'Reduce Dmg (Bowling) %', value: 25 },
    ]
  },
  {
    id: 6497,
    name: 'Gladiator\'s Helm',
    category: 'accessory',
    def: 43,
    stats: [
      { stat: 'Physical Resistance %', value: 12 },
      { stat: 'Magic Resistance %', value: -6 },
      { stat: 'Guard Power %', value: 12 },
      { stat: 'Short Range Damage %', value: 6 },
    ]
  },
  {
    id: 6495,
    name: '7th Anniv Ribbon',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'STR %', value: 7 },
      { stat: 'INT %', value: 7 },
      { stat: 'VIT %', value: 7 },
      { stat: 'AGI %', value: 7 },
      { stat: 'DEX %', value: 7 },
      { stat: 'Magic Barrier', value: 700 },
    ]
  },
  {
    id: 6494,
    name: '7th Anniv Beret',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'STR %', value: 7 },
      { stat: 'INT %', value: 7 },
      { stat: 'VIT %', value: 7 },
      { stat: 'AGI %', value: 7 },
      { stat: 'DEX %', value: 7 },
      { stat: 'Physical Barrier', value: 700 },
    ]
  },
  {
    id: 6361,
    name: 'Seria Crown',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'STR', value: 9 },
      { stat: 'MaxHP', value: 2100 },
      { stat: 'Physical Resistance %', value: 35 },
      { stat: 'Aggro %', value: 49 },
    ]
  },
  {
    id: 6360,
    name: 'Seria Tiara',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'INT', value: 9 },
      { stat: 'MaxMP', value: 1050 },
      { stat: 'Magic Resistance %', value: 35 },
      { stat: 'Aggro %', value: -49 },
    ]
  },
  {
    id: 6352,
    name: 'Clip-On Hood',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ASPD', value: 500 },
      { stat: 'Critical Rate %', value: 100 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 6335,
    name: 'Fleecy Cloud',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ASPD', value: 500 },
      { stat: 'Critical Rate %', value: 100 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 6048,
    name: 'Bloody Stone',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ASPD', value: 500 },
      { stat: 'Critical Rate %', value: 100 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 6351,
    name: 'Ocarina Strap',
    category: 'accessory',
    def: 127,
    stats: [
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Aggro %', value: -45 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 6338,
    name: 'Beige Sail',
    category: 'accessory',
    def: 127,
    stats: [
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Aggro %', value: -45 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 6284,
    name: 'Octo Bubble',
    category: 'accessory',
    def: 127,
    stats: [
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Aggro %', value: -45 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 6336,
    name: 'Furball Accessories',
    category: 'accessory',
    def: 14,
    stats: [
      { stat: 'DEX %', value: 7 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Critical Rate', value: 6 },
    ]
  },
  {
    id: 6314,
    name: 'Bicolor Stole',
    category: 'accessory',
    def: 160,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'MATK %', value: 9 },
      { stat: 'Aggro %', value: -18 },
    ]
  },
  {
    id: 5716,
    name: 'Sacred Forest Sound',
    category: 'accessory',
    def: 160,
    stats: [
      { stat: 'ATK %', value: 9 },
      { stat: 'MATK %', value: 9 },
      { stat: 'Aggro %', value: -18 },
    ]
  },
  {
    id: 6313,
    name: 'Wing Eyemask',
    category: 'accessory',
    def: 76,
    stats: [
      { stat: 'Stability %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Short Range Damage %', value: 5 },
    ]
  },
  {
    id: 6212,
    name: 'Geometric Wing',
    category: 'accessory',
    def: 76,
    stats: [
      { stat: 'Stability %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Short Range Damage %', value: 5 },
    ]
  },
  {
    id: 5769,
    name: 'Glossy Feather',
    category: 'accessory',
    def: 76,
    stats: [
      { stat: 'Stability %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Short Range Damage %', value: 5 },
    ]
  },
  {
    id: 6299,
    name: 'Apple Beret',
    category: 'accessory',
    def: 123,
    stats: [
      { stat: 'Natural MP Regen %', value: 5 },
      { stat: 'ATK %', value: 8 },
      { stat: 'Critical Rate', value: 15 },
    ]
  },
  {
    id: 6285,
    name: 'Scoop Eyepatch',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'DEX %', value: 4 },
      { stat: 'ASPD %', value: -100 },
      { stat: 'Long Range Damage %', value: 8 },
    ]
  },
  {
    id: 6268,
    name: 'Cloak of Mist & Cloud',
    category: 'accessory',
    def: 151,
    stats: [
      { stat: 'MATK %', value: 9 },
      { stat: 'Aggro %', value: -50 },
      { stat: 'Fractional Barrier %', value: 20 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 6261,
    name: 'Panda Head',
    category: 'accessory',
    def: 300,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'EXP Gain %', value: 5 },
    ]
  },
  {
    id: 6258,
    name: 'Golden Bamboo',
    category: 'accessory',
    def: 300,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'EXP Gain %', value: 5 },
    ]
  },
  {
    id: 6259,
    name: 'Panda Hood',
    category: 'accessory',
    def: 150,
    stats: [
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'EXP Gain %', value: 5 },
    ]
  },
  {
    id: 6258,
    name: 'Golden Bamboo',
    category: 'accessory',
    def: 150,
    stats: [
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'EXP Gain %', value: 5 },
    ]
  },
  {
    id: 6255,
    name: 'Solar Halo',
    category: 'accessory',
    def: 260,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Barrier Cooldown %', value: 20 },
    ]
  },
  {
    id: 6254,
    name: 'Chonmage Eyepatch',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'ASPD', value: 500 },
      { stat: 'Evasion Recharge %', value: 25 },
      { stat: 'Unsheathe Attack %', value: 9 },
    ]
  },
  {
    id: 6235,
    name: 'Rabbit Ear Glasses',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'AGI %', value: 2 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Barrier Cooldown %', value: -10 },
    ]
  },
  {
    id: 3407,
    name: 'Small Egg',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'AGI %', value: 2 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Barrier Cooldown %', value: -10 },
    ]
  },
  {
    id: 2881,
    name: 'Media Lense',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'AGI %', value: 2 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Barrier Cooldown %', value: -10 },
    ]
  },
  {
    id: 2644,
    name: 'Long Thin Iron Plate',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'AGI %', value: 2 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Barrier Cooldown %', value: -10 },
    ]
  },
  {
    id: 6234,
    name: 'Easter Egg Pom Bag',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'MaxHP %', value: -40 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Unsheathe Attack', value: 100 },
      { stat: 'Unsheathe Attack %', value: 6 },
    ]
  },
  {
    id: 4445,
    name: 'Cracked Eggshell',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'MaxHP %', value: -40 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Unsheathe Attack', value: 100 },
      { stat: 'Unsheathe Attack %', value: 6 },
    ]
  },
  {
    id: 3658,
    name: 'High Grade Frill Fabric',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'MaxHP %', value: -40 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Unsheathe Attack', value: 100 },
      { stat: 'Unsheathe Attack %', value: 6 },
    ]
  },
  {
    id: 2274,
    name: 'Potum Ear',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'MaxHP %', value: -40 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Unsheathe Attack', value: 100 },
      { stat: 'Unsheathe Attack %', value: 6 },
    ]
  },
  {
    id: 6233,
    name: 'Extravagant Cape',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'MATK %', value: 7 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Physical Barrier', value: 1000 },
    ]
  },
  {
    id: 6213,
    name: 'Strange Arm',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'MATK %', value: 7 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Physical Barrier', value: 1000 },
    ]
  },
  {
    id: 6187,
    name: 'Magma Skin',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'MATK %', value: 7 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Physical Barrier', value: 1000 },
    ]
  },
  {
    id: 6232,
    name: 'Parvenu Necklace',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Flinch Unavailable', value: 1 },
      { stat: 'Additional Magic %', value: 200 },
    ]
  },
  {
    id: 6190,
    name: 'Fine Coal',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Flinch Unavailable', value: 1 },
      { stat: 'Additional Magic %', value: 200 },
    ]
  },
  {
    id: 6132,
    name: 'Mutated Rock',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Flinch Unavailable', value: 1 },
      { stat: 'Additional Magic %', value: 200 },
    ]
  },
  {
    id: 5778,
    name: 'Sheep Crystal',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Flinch Unavailable', value: 1 },
      { stat: 'Additional Magic %', value: 200 },
    ]
  },
  {
    id: 6215,
    name: 'Alchemy Belt',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Invincible Aid (sec)', value: 3 },
      { stat: 'Item Cooldown', value: -0.0 },
    ]
  },
  {
    id: 6211,
    name: 'Heavy Knight Helmet',
    category: 'accessory',
    def: 250,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Guard Power %', value: 20 },
      { stat: 'Guard Recharge %', value: 20 },
    ]
  },
  {
    id: 6192,
    name: 'Clement Headband',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'DEX %', value: 7 },
      { stat: 'Natural MP Regen %', value: -12 },
      { stat: 'ATK %', value: 8 },
      { stat: 'Critical Rate', value: 5 },
    ]
  },
  {
    id: 6178,
    name: 'Candy Scarf',
    category: 'accessory',
    def: 151,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Additional Melee %', value: 200 },
    ]
  },
  {
    id: 6177,
    name: 'Goggle Cape',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Neutral Resistance %', value: 25 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 6124,
    name: 'Mutated Floating Body',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Neutral Resistance %', value: 25 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 5960,
    name: 'Jackal\'s Fur',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Neutral Resistance %', value: 25 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 6176,
    name: 'Viking Helmet',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'ASPD %', value: 15 },
    ]
  },
  {
    id: 6128,
    name: 'Dangerous Cnidoblast',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'ASPD %', value: 15 },
    ]
  },
  {
    id: 6044,
    name: 'Sickle-Like Front Leg',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'ASPD %', value: 15 },
    ]
  },
  {
    id: 6175,
    name: 'Macaron Potum',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Stability %', value: 8 },
    ]
  },
  {
    id: 6161,
    name: 'Torn Wrapping Paper',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Stability %', value: 8 },
    ]
  },
  {
    id: 6166,
    name: 'Ritzy Ribbon',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Stability %', value: 8 },
    ]
  },
  {
    id: 6174,
    name: 'Blue Heart Glasses',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: '% stronger against Light', value: 10 },
      { stat: 'Light resistance %', value: 25 },
    ]
  },
  {
    id: 6155,
    name: 'Sweet and Sour Vine',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: '% stronger against Light', value: 10 },
      { stat: 'Light resistance %', value: 25 },
    ]
  },
  {
    id: 6159,
    name: 'Sparkly Cream',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: '% stronger against Light', value: 10 },
      { stat: 'Light resistance %', value: 25 },
    ]
  },
  {
    id: 6162,
    name: 'Troublesome Cookie Crumb',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: '% stronger against Light', value: 10 },
      { stat: 'Light resistance %', value: 25 },
    ]
  },
  {
    id: 6173,
    name: 'Collar Tie',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'AGI %', value: 7 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Critical Damage', value: 7 },
    ]
  },
  {
    id: 6157,
    name: 'Fruit Pellicle',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'AGI %', value: 7 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Critical Damage', value: 7 },
    ]
  },
  {
    id: 6159,
    name: 'Sparkly Cream',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'AGI %', value: 7 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Critical Damage', value: 7 },
    ]
  },
  {
    id: 6162,
    name: 'Troublesome Cookie Crumb',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'AGI %', value: 7 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Critical Damage', value: 7 },
    ]
  },
  {
    id: 6172,
    name: 'Macaron Earmuffs',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 6155,
    name: 'Sweet and Sour Vine',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 6157,
    name: 'Fruit Pellicle',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 6161,
    name: 'Torn Wrapping Paper',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 6169,
    name: 'Evil Tiara',
    category: 'accessory',
    def: 14,
    stats: [
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Long Range Damage %', value: -10 },
    ]
  },
  {
    id: 6160,
    name: 'Rainbow Feather Cape',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'MaxHP', value: 2500 },
      { stat: 'Fire resistance %', value: 25 },
      { stat: 'Water resistance %', value: 25 },
      { stat: 'Wind resistance %', value: 25 },
      { stat: 'Earth resistance %', value: 25 },
      { stat: 'Aggro %', value: -25 },
      { stat: 'Revive Time %', value: -25 },
    ]
  },
  {
    id: 6150,
    name: 'Pom Knit Cap',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'MaxHP %', value: 10 },
      { stat: 'Accuracy %', value: 10 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'ASPD', value: 100 },
      { stat: 'CSPD', value: 100 },
      { stat: 'Critical Rate %', value: 10 },
      { stat: '% stronger against Neutral', value: 10 },
    ]
  },
  {
    id: 6149,
    name: 'Pile of Snow',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP %', value: 25 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'Revive Time %', value: -30 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6148,
    name: 'Clingy Snow Fox',
    category: 'accessory',
    def: 150,
    stats: [
      { stat: 'MaxHP', value: 1400 },
      { stat: 'Unsheathe Attack %', value: 7 },
      { stat: 'Invincible Aid (sec)', value: 2 },
    ]
  },
  {
    id: 6147,
    name: 'Long-Tailed Tit',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'Aggro %', value: -6 },
      { stat: 'Short Range Damage %', value: 6 },
      { stat: 'ATK UP (INT %)', value: 60 },
    ]
  },
  {
    id: 6146,
    name: 'Hoop Earrings',
    category: 'accessory',
    def: 88,
    stats: [
      { stat: 'INT %', value: 8 },
      { stat: 'CSPD %', value: 70 },
      { stat: 'Additional Magic %', value: 130 },
    ]
  },
  {
    id: 6029,
    name: 'Lost Cat Mana',
    category: 'accessory',
    def: 88,
    stats: [
      { stat: 'INT %', value: 8 },
      { stat: 'CSPD %', value: 70 },
      { stat: 'Additional Magic %', value: 130 },
    ]
  },
  {
    id: 6121,
    name: 'Traveler\'s Waistcloth',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'Natural MP Regen %', value: 20 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'ATK %', value: 8 },
      { stat: 'Accuracy %', value: 8 },
    ]
  },
  {
    id: 6092,
    name: 'Mieli\'s Hat',
    category: 'accessory',
    def: 166,
    stats: [
      { stat: 'ASPD %', value: 15 },
      { stat: 'CSPD %', value: 15 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Reduce Dmg (Floor) %', value: 30 },
    ]
  },
  {
    id: 6091,
    name: 'Pompadour Wig',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'VIT', value: 8 },
      { stat: 'MaxHP', value: 4649 },
      { stat: 'Magic Resistance %', value: 25 },
      { stat: 'Short Range Damage %', value: 4 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 5956,
    name: 'Dream Fragment',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'VIT', value: 8 },
      { stat: 'MaxHP', value: 4649 },
      { stat: 'Magic Resistance %', value: 25 },
      { stat: 'Short Range Damage %', value: 4 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 4701,
    name: 'Leader\'s Hair Accessory',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'VIT', value: 8 },
      { stat: 'MaxHP', value: 4649 },
      { stat: 'Magic Resistance %', value: 25 },
      { stat: 'Short Range Damage %', value: 4 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 6025,
    name: 'Wisdom Charm',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'VIT', value: 8 },
      { stat: 'MaxHP', value: 4649 },
      { stat: 'Magic Resistance %', value: 25 },
      { stat: 'Short Range Damage %', value: 4 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 6090,
    name: 'Messenger Bag',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'Dodge %', value: 40 },
      { stat: 'Evasion Recharge %', value: 32 },
      { stat: 'Attack MP Recovery', value: 16 },
      { stat: 'Motion Speed %', value: 2 },
    ]
  },
  {
    id: 6028,
    name: 'Cat Wing',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'Dodge %', value: 40 },
      { stat: 'Evasion Recharge %', value: 32 },
      { stat: 'Attack MP Recovery', value: 16 },
      { stat: 'Motion Speed %', value: 2 },
    ]
  },
  {
    id: 5965,
    name: 'Rugged Beard',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'Dodge %', value: 40 },
      { stat: 'Evasion Recharge %', value: 32 },
      { stat: 'Attack MP Recovery', value: 16 },
      { stat: 'Motion Speed %', value: 2 },
    ]
  },
  {
    id: 6084,
    name: 'Amoretto Potum',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Attack MP Recovery', value: 4 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 6069,
    name: 'Royal Jelly',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Attack MP Recovery', value: 4 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 6075,
    name: 'Gold Flower',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Attack MP Recovery', value: 4 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 6083,
    name: 'Blue Rose Earrings',
    category: 'accessory',
    def: 77,
    stats: [
      { stat: 'STR %', value: 4 },
      { stat: 'Evasion Recharge %', value: 16 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6069,
    name: 'Royal Jelly',
    category: 'accessory',
    def: 77,
    stats: [
      { stat: 'STR %', value: 4 },
      { stat: 'Evasion Recharge %', value: 16 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6074,
    name: 'Yellow Petal',
    category: 'accessory',
    def: 77,
    stats: [
      { stat: 'STR %', value: 4 },
      { stat: 'Evasion Recharge %', value: 16 },
      { stat: 'Long Range Damage %', value: 8 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6082,
    name: 'Cake Parasol',
    category: 'accessory',
    def: 195,
    stats: [
      { stat: 'Magic Pierce %', value: 15 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Light resistance %', value: 20 },
      { stat: 'Magic Barrier', value: 2500 },
    ]
  },
  {
    id: 6081,
    name: 'Love Letter Hat',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'AGI', value: 8 },
      { stat: 'ASPD', value: 320 },
      { stat: 'ASPD %', value: 64 },
      { stat: 'Weapon ATK %', value: 16 },
    ]
  },
  {
    id: 6068,
    name: 'Mieli\'s Lovely Wing',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'AGI', value: 8 },
      { stat: 'ASPD', value: 320 },
      { stat: 'ASPD %', value: 64 },
      { stat: 'Weapon ATK %', value: 16 },
    ]
  },
  {
    id: 6080,
    name: 'Heart Beret',
    category: 'accessory',
    def: 115,
    stats: [
      { stat: 'MDEF %', value: 15 },
      { stat: '% stronger against Dark', value: 10 },
      { stat: 'Neutral Resistance %', value: 5 },
    ]
  },
  {
    id: 6068,
    name: 'Mieli\'s Lovely Wing',
    category: 'accessory',
    def: 115,
    stats: [
      { stat: 'MDEF %', value: 15 },
      { stat: '% stronger against Dark', value: 10 },
      { stat: 'Neutral Resistance %', value: 5 },
    ]
  },
  {
    id: 6050,
    name: 'Fire Bandana',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'ATK %', value: 4 },
      { stat: 'Magic Resistance %', value: -15 },
      { stat: 'ASPD', value: 400 },
      { stat: 'Critical Rate', value: 25 },
    ]
  },
  {
    id: 6038,
    name: 'Fuse',
    category: 'accessory',
    def: 12,
    stats: [
      { stat: 'MaxHP %', value: 50 },
      { stat: 'Reflect %', value: 30 },
      { stat: 'Recoil %', value: 1 },
    ]
  },
  {
    id: 6030,
    name: 'Crystal Ear Cuffs',
    category: 'accessory',
    def: 86,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Stability %', value: 3 },
      { stat: 'Long Range Damage %', value: 3 },
    ]
  },
  {
    id: 6017,
    name: 'Zodiac Hat: Tiger',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR', value: 1 },
      { stat: 'INT', value: 1 },
      { stat: 'VIT', value: 1 },
      { stat: 'AGI', value: 1 },
      { stat: 'DEX', value: 1 },
    ]
  },
  {
    id: 5991,
    name: 'Safari Hat',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Earth resistance %', value: 30 },
      { stat: 'Aggro %', value: -30 },
    ]
  },
  {
    id: 5720,
    name: 'Green Lizard Skin',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Earth resistance %', value: 30 },
      { stat: 'Aggro %', value: -30 },
    ]
  },
  {
    id: 5710,
    name: 'Herbivore\'s Spine',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Earth resistance %', value: 30 },
      { stat: 'Aggro %', value: -30 },
    ]
  },
  {
    id: 5988,
    name: 'Safety Helmet',
    category: 'accessory',
    def: 270,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Anticipate %', value: 20 },
      { stat: 'Reduce Dmg (Bullet) %', value: 20 },
      { stat: 'Reduce Dmg (Meteor) %', value: 25 },
    ]
  },
  {
    id: 5955,
    name: 'Cracked Acorn Hat',
    category: 'accessory',
    def: 270,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Anticipate %', value: 20 },
      { stat: 'Reduce Dmg (Bullet) %', value: 20 },
      { stat: 'Reduce Dmg (Meteor) %', value: 25 },
    ]
  },
  {
    id: 5509,
    name: 'Bold Gaze',
    category: 'accessory',
    def: 270,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Anticipate %', value: 20 },
      { stat: 'Reduce Dmg (Bullet) %', value: 20 },
      { stat: 'Reduce Dmg (Meteor) %', value: 25 },
    ]
  },
  {
    id: 4980,
    name: 'Flame of Misfortune',
    category: 'accessory',
    def: 270,
    stats: [
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Anticipate %', value: 20 },
      { stat: 'Reduce Dmg (Bullet) %', value: 20 },
      { stat: 'Reduce Dmg (Meteor) %', value: 25 },
    ]
  },
  {
    id: 5987,
    name: 'Shabby Bear',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 5951,
    name: 'Tough Thick Skin',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 5776,
    name: 'Beautiful Wool',
    category: 'accessory',
    def: 97,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 5932,
    name: 'Santa Skirt',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'ASPD %', value: 20 },
      { stat: 'CSPD %', value: 20 },
      { stat: 'Drop Rate %', value: 2 },
    ]
  },
  {
    id: 5931,
    name: 'Santa Hooded Cape',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'Aggro %', value: -15 },
      { stat: 'Attack MP Recovery', value: 10 },
      { stat: 'ATK UP (DEX %)', value: 50 },
    ]
  },
  {
    id: 5927,
    name: 'Party Dino Head',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Motion Speed %', value: 1 },
      { stat: 'Weapon ATK', value: 20 },
    ]
  },
  {
    id: 6726,
    name: 'Sacred Snow Crystal',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Motion Speed %', value: 1 },
      { stat: 'Weapon ATK', value: 20 },
    ]
  },
  {
    id: 5926,
    name: 'Santa Potum Bag',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Ailment Resistance %', value: 10 },
    ]
  },
  {
    id: 6726,
    name: 'Sacred Snow Crystal',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Ailment Resistance %', value: 10 },
    ]
  },
  {
    id: 5925,
    name: 'Christmas Tree',
    category: 'accessory',
    def: 195,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'Physical Pierce %', value: 16 },
      { stat: 'Aggro %', value: 4 },
      { stat: 'Reduce Dmg (Charge) %', value: 32 },
    ]
  },
  {
    id: 6726,
    name: 'Sacred Snow Crystal',
    category: 'accessory',
    def: 195,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'Physical Pierce %', value: 16 },
      { stat: 'Aggro %', value: 4 },
      { stat: 'Reduce Dmg (Charge) %', value: 32 },
    ]
  },
  {
    id: 5924,
    name: 'Santa Scarf',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'MaxHP', value: 1500 },
      { stat: 'MATK %', value: 7 },
      { stat: 'Critical Rate %', value: 20 },
    ]
  },
  {
    id: 6726,
    name: 'Sacred Snow Crystal',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'MaxHP', value: 1500 },
      { stat: 'MATK %', value: 7 },
      { stat: 'Critical Rate %', value: 20 },
    ]
  },
  {
    id: 5923,
    name: 'Cake Head',
    category: 'accessory',
    def: 62,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Accuracy %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5922,
    name: 'Viking Helmet',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP %', value: 15 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'ASPD %', value: 15 },
    ]
  },
  {
    id: 5921,
    name: 'Folklore Headband',
    category: 'accessory',
    def: 32,
    stats: [
      { stat: 'Accuracy', value: 14 },
      { stat: 'Critical Rate', value: 18 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 5905,
    name: 'Potum Ghost Behind U',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'MATK %', value: 8 },
      { stat: 'Neutral Resistance %', value: 8 },
      { stat: 'Fractional Barrier %', value: 8 },
    ]
  },
  {
    id: 5900,
    name: 'Witch Cat on the Head',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 6603,
    name: 'Moonshade Candy',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 5899,
    name: 'Gloomy Pumpkin Head',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Fire resistance %', value: 10 },
      { stat: 'Water resistance %', value: 10 },
      { stat: 'Wind resistance %', value: 10 },
      { stat: 'Earth resistance %', value: 10 },
    ]
  },
  {
    id: 6603,
    name: 'Moonshade Candy',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Fire resistance %', value: 10 },
      { stat: 'Water resistance %', value: 10 },
      { stat: 'Wind resistance %', value: 10 },
      { stat: 'Earth resistance %', value: 10 },
    ]
  },
  {
    id: 5898,
    name: 'Frankenstein Bolt',
    category: 'accessory',
    def: 240,
    stats: [
      { stat: 'Accuracy %', value: 40 },
      { stat: 'Ailment Resistance %', value: 20 },
      { stat: 'ATK UP (VIT %)', value: 80 },
    ]
  },
  {
    id: 5897,
    name: 'Wolf Ears',
    category: 'accessory',
    def: 123,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Additional Melee %', value: 50 },
      { stat: 'Anticipate %', value: 25 },
      { stat: 'ATK UP (AGI %)', value: 50 },
    ]
  },
  {
    id: 5889,
    name: 'Old Wolf Iron Lock',
    category: 'accessory',
    def: 123,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Additional Melee %', value: 50 },
      { stat: 'Anticipate %', value: 25 },
      { stat: 'ATK UP (AGI %)', value: 50 },
    ]
  },
  {
    id: 5896,
    name: 'Bat Ear Hat',
    category: 'accessory',
    def: 115,
    stats: [
      { stat: 'Dodge', value: 60 },
      { stat: 'Long Range Damage %', value: 7 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 5891,
    name: 'Ghost Candy',
    category: 'accessory',
    def: 86,
    stats: [
      { stat: 'MATK', value: 70 },
      { stat: 'MATK %', value: 7 },
      { stat: 'CSPD', value: 700 },
      { stat: 'Critical Rate', value: -666 },
    ]
  },
  {
    id: 5805,
    name: 'Medic Hat',
    category: 'accessory',
    def: 156,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Aggro %', value: -50 },
      { stat: 'Fractional Barrier %', value: 20 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 5505,
    name: 'Polka Dot Gemstone',
    category: 'accessory',
    def: 156,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Aggro %', value: -50 },
      { stat: 'Fractional Barrier %', value: 20 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 5804,
    name: 'Tribal Turban',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Ailment Resistance %', value: 10 },
    ]
  },
  {
    id: 5790,
    name: 'Monkey Fang',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Ailment Resistance %', value: 10 },
    ]
  },
  {
    id: 5723,
    name: 'Striped Fur',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Ailment Resistance %', value: 10 },
    ]
  },
  {
    id: 5803,
    name: 'Kitty Tail',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'AGI %', value: 5 },
      { stat: 'Stability %', value: 15 },
    ]
  },
  {
    id: 5781,
    name: 'Big Ear',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'AGI %', value: 5 },
      { stat: 'Stability %', value: 15 },
    ]
  },
  {
    id: 5500,
    name: 'Thick Epidermis',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'AGI %', value: 5 },
      { stat: 'Stability %', value: 15 },
    ]
  },
  {
    id: 4527,
    name: 'Crystal Pouch',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'AGI %', value: 5 },
      { stat: 'Stability %', value: 15 },
    ]
  },
  {
    id: 5802,
    name: 'Kilt',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'ASPD %', value: 20 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Reduce Dmg (Floor) %', value: 15 },
    ]
  },
  {
    id: 5725,
    name: 'Wonderful Stone',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'ASPD %', value: 20 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Reduce Dmg (Floor) %', value: 15 },
    ]
  },
  {
    id: 5500,
    name: 'Thick Epidermis',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'ASPD %', value: 20 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Reduce Dmg (Floor) %', value: 15 },
    ]
  },
  {
    id: 5246,
    name: 'Cracked Acorn Shoe',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'ATK %', value: 8 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'ASPD %', value: 20 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Reduce Dmg (Floor) %', value: 15 },
    ]
  },
  {
    id: 5791,
    name: 'Menpo Mask',
    category: 'accessory',
    def: 190,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Unsheathe Attack %', value: 7 },
    ]
  },
  {
    id: 5775,
    name: 'Furball Earrings',
    category: 'accessory',
    def: 86,
    stats: [
      { stat: 'Critical Rate', value: 30 },
    ]
  },
  {
    id: 5766,
    name: 'Rabbit Lantern',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Long Range Damage %', value: 6 },
      { stat: 'Reduce Dmg (Player Epicenter) %', value: 20 },
    ]
  },
  {
    id: 5733,
    name: 'Moon Dango',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Long Range Damage %', value: 6 },
      { stat: 'Reduce Dmg (Player Epicenter) %', value: 20 },
    ]
  },
  {
    id: 3244,
    name: 'Otsukimi Dango',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Long Range Damage %', value: 6 },
      { stat: 'Reduce Dmg (Player Epicenter) %', value: 20 },
    ]
  },
  {
    id: 5765,
    name: 'Crescent Moon Helmet',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Attack MP Recovery', value: 4 },
      { stat: 'Short Range Damage %', value: 6 },
      { stat: 'Reduce Dmg (Meteor) %', value: 20 },
    ]
  },
  {
    id: 5764,
    name: 'Dango Hat',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Anticipate %', value: 15 },
      { stat: 'Guard Break %', value: 15 },
    ]
  },
  {
    id: 5731,
    name: 'Devil Dango\'s Heart',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Anticipate %', value: 15 },
      { stat: 'Guard Break %', value: 15 },
    ]
  },
  {
    id: 5750,
    name: 'Scholar\'s Glasses',
    category: 'accessory',
    def: 3,
    stats: [
      { stat: 'ATK', value: 25 },
      { stat: 'MATK', value: 25 },
    ]
  },
  {
    id: 5749,
    name: 'Scholar\'s Glasses',
    category: 'accessory',
    def: 3,
    stats: [
      { stat: 'ATK', value: 20 },
      { stat: 'MATK', value: 20 },
    ]
  },
  {
    id: 5748,
    name: 'Scholar\'s Glasses',
    category: 'accessory',
    def: 3,
    stats: [
      { stat: 'ATK', value: 15 },
      { stat: 'MATK', value: 15 },
    ]
  },
  {
    id: 5747,
    name: 'Scholar\'s Glasses',
    category: 'accessory',
    def: 3,
    stats: [
      { stat: 'ATK', value: 10 },
      { stat: 'MATK', value: 10 },
    ]
  },
  {
    id: 5746,
    name: 'Warrior Helm',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'ATK', value: 50 },
    ]
  },
  {
    id: 5745,
    name: 'Warrior Helm',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'ATK', value: 40 },
    ]
  },
  {
    id: 5744,
    name: 'Warrior Helm',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'ATK', value: 30 },
    ]
  },
  {
    id: 5743,
    name: 'Warrior Helm',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'ATK', value: 20 },
    ]
  },
  {
    id: 5742,
    name: 'Mage Hat',
    category: 'accessory',
    def: 4,
    stats: [
      { stat: 'MATK', value: 50 },
    ]
  },
  {
    id: 5741,
    name: 'Mage Hat',
    category: 'accessory',
    def: 4,
    stats: [
      { stat: 'MATK', value: 40 },
    ]
  },
  {
    id: 5740,
    name: 'Mage Hat',
    category: 'accessory',
    def: 4,
    stats: [
      { stat: 'MATK', value: 30 },
    ]
  },
  {
    id: 5739,
    name: 'Mage Hat',
    category: 'accessory',
    def: 4,
    stats: [
      { stat: 'MATK', value: 20 },
    ]
  },
  {
    id: 5736,
    name: 'Mage Hat',
    category: 'accessory',
    def: 4,
    stats: [
      { stat: 'MATK', value: 10 },
    ]
  },
  {
    id: 5735,
    name: 'Scholar\'s Glasses',
    category: 'accessory',
    def: 3,
    stats: [
      { stat: 'ATK', value: 5 },
      { stat: 'MATK', value: 5 },
    ]
  },
  {
    id: 5734,
    name: 'Warrior Helm',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'ATK', value: 10 },
    ]
  },
  {
    id: 5722,
    name: 'Forester\'s Hat',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'MATK %', value: 8 },
      { stat: 'Attack MP Recovery', value: 8 },
      { stat: 'Additional Magic %', value: 80 },
    ]
  },
  {
    id: 5715,
    name: 'Insect Cage',
    category: 'accessory',
    def: 64,
    stats: [
      { stat: 'Natural MP Regen %', value: 15 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 5693,
    name: 'Aloha Sun',
    category: 'accessory',
    def: 33,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Water resistance %', value: -10 },
      { stat: 'Aggro %', value: 40 },
      { stat: 'Guard Break %', value: 20 },
    ]
  },
  {
    id: 5673,
    name: 'Seabed Crystal Stone',
    category: 'accessory',
    def: 33,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Water resistance %', value: -10 },
      { stat: 'Aggro %', value: 40 },
      { stat: 'Guard Break %', value: 20 },
    ]
  },
  {
    id: 1825,
    name: 'Splendor Crystal',
    category: 'accessory',
    def: 33,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Water resistance %', value: -10 },
      { stat: 'Aggro %', value: 40 },
      { stat: 'Guard Break %', value: 20 },
    ]
  },
  {
    id: 5672,
    name: 'Super Kelp',
    category: 'accessory',
    def: 33,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Water resistance %', value: -10 },
      { stat: 'Aggro %', value: 40 },
      { stat: 'Guard Break %', value: 20 },
    ]
  },
  {
    id: 5692,
    name: 'Finpen Backpack',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5673,
    name: 'Seabed Crystal Stone',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 1025,
    name: 'Polyester Cloth',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5676,
    name: 'Sweet Shrimp',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5691,
    name: 'Scuba Ranger Helmet',
    category: 'accessory',
    def: 250,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Water resistance %', value: 15 },
    ]
  },
  {
    id: 5673,
    name: 'Seabed Crystal Stone',
    category: 'accessory',
    def: 250,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Water resistance %', value: 15 },
    ]
  },
  {
    id: 3215,
    name: 'Crushed Helmet',
    category: 'accessory',
    def: 250,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Water resistance %', value: 15 },
    ]
  },
  {
    id: 5682,
    name: 'Yuveria\'s Huge Claw',
    category: 'accessory',
    def: 250,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Water resistance %', value: 15 },
    ]
  },
  {
    id: 5690,
    name: 'Mr. Fan',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Wind resistance %', value: 30 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Aggro %', value: -30 },
      { stat: 'Reduce Dmg (Bowling) %', value: 30 },
    ]
  },
  {
    id: 2403,
    name: 'Curved Blade',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Wind resistance %', value: 30 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Aggro %', value: -30 },
      { stat: 'Reduce Dmg (Bowling) %', value: 30 },
    ]
  },
  {
    id: 5680,
    name: 'Salty Rope',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Wind resistance %', value: 30 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Aggro %', value: -30 },
      { stat: 'Reduce Dmg (Bowling) %', value: 30 },
    ]
  },
  {
    id: 5689,
    name: 'Finpen Buoy',
    category: 'accessory',
    def: 75,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Revive Time %', value: -20 },
    ]
  },
  {
    id: 4370,
    name: 'Dark Green Crystal',
    category: 'accessory',
    def: 75,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Revive Time %', value: -20 },
    ]
  },
  {
    id: 5681,
    name: 'Huge Anchor',
    category: 'accessory',
    def: 75,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Revive Time %', value: -20 },
    ]
  },
  {
    id: 5684,
    name: 'Scuba Ranger Tank',
    category: 'accessory',
    def: 125,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate %', value: 40 },
      { stat: 'Motion Speed %', value: 2 },
    ]
  },
  {
    id: 5663,
    name: '6th Anniv Hat',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'STR %', value: 6 },
      { stat: 'INT %', value: 6 },
      { stat: 'VIT %', value: 6 },
      { stat: 'AGI %', value: 6 },
      { stat: 'DEX %', value: 6 },
      { stat: 'Physical Barrier', value: 600 },
    ]
  },
  {
    id: 5662,
    name: '6th Anniv Ribbon',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'STR %', value: 6 },
      { stat: 'INT %', value: 6 },
      { stat: 'VIT %', value: 6 },
      { stat: 'AGI %', value: 6 },
      { stat: 'DEX %', value: 6 },
      { stat: 'Magic Barrier', value: 600 },
    ]
  },
  {
    id: 5506,
    name: 'Portable Sake Jug',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Critical Rate', value: -5 },
      { stat: 'Attack MP Recovery', value: 7 },
      { stat: 'ATK UP (AGI %)', value: 60 },
    ]
  },
  {
    id: 5499,
    name: 'Picnic Bag',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Reduce Dmg (Floor) %', value: 30 },
      { stat: 'MATK UP (DEX %)', value: 50 },
    ]
  },
  {
    id: 5495,
    name: 'Safari Hat',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Earth resistance %', value: 30 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 5485,
    name: 'Iron Witch Veil',
    category: 'accessory',
    def: 67,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Magic Pierce %', value: 20 },
      { stat: 'CSPD', value: 400 },
    ]
  },
  {
    id: 5484,
    name: 'Iron Witch Wings',
    category: 'accessory',
    def: 135,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'Evasion Recharge %', value: 20 },
      { stat: 'Absolute Dodge %', value: 10 },
    ]
  },
  {
    id: 5478,
    name: 'Stardust Shoulder Guard',
    category: 'accessory',
    def: 160,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dodge', value: -40 },
      { stat: 'Aggro %', value: 50 },
      { stat: 'Fractional Barrier %', value: 10 },
      { stat: 'Anticipate %', value: 20 },
    ]
  },
  {
    id: 5477,
    name: 'Naiata\'s Tiara',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'Physical Pierce %', value: 15 },
      { stat: 'Accuracy %', value: 100 },
      { stat: 'ASPD', value: -1000 },
      { stat: 'Critical Rate', value: 25 },
    ]
  },
  {
    id: 5466,
    name: 'Unity Tiara',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'INT', value: 8 },
      { stat: 'MaxMP', value: 900 },
      { stat: 'Magic Resistance %', value: 30 },
      { stat: 'Aggro %', value: -42 },
    ]
  },
  {
    id: 5465,
    name: 'Unity Crown',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'STR', value: 8 },
      { stat: 'MaxHP', value: 1800 },
      { stat: 'Physical Resistance %', value: 30 },
      { stat: 'Aggro %', value: 42 },
    ]
  },
  {
    id: 5463,
    name: 'Weather Doll',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'Water resistance %', value: 20 },
      { stat: 'Physical Barrier', value: 1000 },
      { stat: 'Magic Barrier', value: 1000 },
      { stat: 'Additional Melee %', value: 100 },
      { stat: 'Additional Magic %', value: 100 },
      { stat: 'Barrier Cooldown %', value: 20 },
    ]
  },
  {
    id: 5450,
    name: 'Iron Ball Leg Cuff',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Dodge %', value: -100 },
      { stat: 'ASPD %', value: -100 },
      { stat: 'ATK UP (AGI %)', value: 100 },
    ]
  },
  {
    id: 5439,
    name: 'Energy Bottle EX',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Dodge %', value: -100 },
      { stat: 'ASPD %', value: -100 },
      { stat: 'ATK UP (AGI %)', value: 100 },
    ]
  },
  {
    id: 2402,
    name: 'Torn Chain',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Dodge %', value: -100 },
      { stat: 'ASPD %', value: -100 },
      { stat: 'ATK UP (AGI %)', value: 100 },
    ]
  },
  {
    id: 110,
    name: 'Huge Iron Ball',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'Dodge %', value: -100 },
      { stat: 'ASPD %', value: -100 },
      { stat: 'ATK UP (AGI %)', value: 100 },
    ]
  },
  {
    id: 5449,
    name: 'Recorder',
    category: 'accessory',
    def: 230,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Aggro %', value: -30 },
      { stat: 'Anticipate %', value: 10 },
    ]
  },
  {
    id: 5431,
    name: 'Ether Lipid',
    category: 'accessory',
    def: 230,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Aggro %', value: -30 },
      { stat: 'Anticipate %', value: 10 },
    ]
  },
  {
    id: 5267,
    name: 'Scarecrow\'s Emotion',
    category: 'accessory',
    def: 230,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Aggro %', value: -30 },
      { stat: 'Anticipate %', value: 10 },
    ]
  },
  {
    id: 2459,
    name: 'Magic Lens',
    category: 'accessory',
    def: 230,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Aggro %', value: -30 },
      { stat: 'Anticipate %', value: 10 },
    ]
  },
  {
    id: 5448,
    name: 'Dust Cloud Poncho',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'AGI %', value: 6 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Damage %', value: 7 },
      { stat: 'Earth resistance %', value: 16 },
    ]
  },
  {
    id: 5438,
    name: 'Glowing Liposome',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'AGI %', value: 6 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Damage %', value: 7 },
      { stat: 'Earth resistance %', value: 16 },
    ]
  },
  {
    id: 4984,
    name: 'Sea Otter Fur',
    category: 'accessory',
    def: 110,
    stats: [
      { stat: 'AGI %', value: 6 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Damage %', value: 7 },
      { stat: 'Earth resistance %', value: 16 },
    ]
  },
  {
    id: 5447,
    name: 'Lace Ribbon',
    category: 'accessory',
    def: 58,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Magic Pierce %', value: 8 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 5429,
    name: 'Mysterious Meringue',
    category: 'accessory',
    def: 58,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Magic Pierce %', value: 8 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 5361,
    name: 'Spirabol\'s Heart',
    category: 'accessory',
    def: 58,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Magic Pierce %', value: 8 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 5427,
    name: 'Pom Pom Halos',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'EXP Gain %', value: 20 },
      { stat: 'Drop Rate %', value: -20 },
      { stat: 'Physical Barrier', value: 777 },
      { stat: 'Magic Barrier', value: 777 },
    ]
  },
  {
    id: 3203,
    name: 'Heroic Butter Cake',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'EXP Gain %', value: 20 },
      { stat: 'Drop Rate %', value: -20 },
      { stat: 'Physical Barrier', value: 777 },
      { stat: 'Magic Barrier', value: 777 },
    ]
  },
  {
    id: 3530,
    name: 'Golden Pom Liquor',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'EXP Gain %', value: 20 },
      { stat: 'Drop Rate %', value: -20 },
      { stat: 'Physical Barrier', value: 777 },
      { stat: 'Magic Barrier', value: 777 },
    ]
  },
  {
    id: 5415,
    name: 'Potum Beans',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'EXP Gain %', value: 20 },
      { stat: 'Drop Rate %', value: -20 },
      { stat: 'Physical Barrier', value: 777 },
      { stat: 'Magic Barrier', value: 777 },
    ]
  },
  {
    id: 5414,
    name: 'Pom Biscuit',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'EXP Gain %', value: 20 },
      { stat: 'Drop Rate %', value: -20 },
      { stat: 'Physical Barrier', value: 777 },
      { stat: 'Magic Barrier', value: 777 },
    ]
  },
  {
    id: 5426,
    name: 'Clingy Potum',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: '% stronger against Neutral', value: 5 },
    ]
  },
  {
    id: 3743,
    name: 'King Piton Claw',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: '% stronger against Neutral', value: 5 },
    ]
  },
  {
    id: 4078,
    name: 'Tuscog Claw',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: '% stronger against Neutral', value: 5 },
    ]
  },
  {
    id: 4297,
    name: 'Pyxtica\'s Crystal Fang',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'Critical Rate', value: 25 },
      { stat: '% stronger against Neutral', value: 5 },
    ]
  },
  {
    id: 5425,
    name: 'Head Plop Potum',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'Accuracy %', value: 20 },
      { stat: 'ASPD %', value: 40 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 2755,
    name: 'Broken Driver',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'Accuracy %', value: 20 },
      { stat: 'ASPD %', value: 40 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 2894,
    name: 'Ultimate Machina Arm',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'Accuracy %', value: 20 },
      { stat: 'ASPD %', value: 40 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 3218,
    name: 'Tweed Fabric',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'Accuracy %', value: 20 },
      { stat: 'ASPD %', value: 40 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 5424,
    name: 'Clingy Coryn',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'CSPD', value: 700 },
    ]
  },
  {
    id: 1837,
    name: 'Aranea Silk',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'CSPD', value: 700 },
    ]
  },
  {
    id: 1970,
    name: 'Broken Dark Great Sword',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'CSPD', value: 700 },
    ]
  },
  {
    id: 2129,
    name: 'Ifrid\'s Robot Leg',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'CSPD', value: 700 },
    ]
  },
  {
    id: 5423,
    name: 'Head Plop Coryn',
    category: 'accessory',
    def: 37,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
    ]
  },
  {
    id: 1115,
    name: 'Grass Dragon\'s Scale',
    category: 'accessory',
    def: 37,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
    ]
  },
  {
    id: 1157,
    name: 'Cracked Face Stone',
    category: 'accessory',
    def: 37,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
    ]
  },
  {
    id: 1392,
    name: 'Unknown Part',
    category: 'accessory',
    def: 37,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
    ]
  },
  {
    id: 5422,
    name: 'Clingy Raffy',
    category: 'accessory',
    def: 21,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Aggro %', value: -45 },
    ]
  },
  {
    id: 127,
    name: 'Luminous Magic Water',
    category: 'accessory',
    def: 21,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Aggro %', value: -45 },
    ]
  },
  {
    id: 93,
    name: 'Goddess Sculpture',
    category: 'accessory',
    def: 21,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Aggro %', value: -45 },
    ]
  },
  {
    id: 637,
    name: 'Empress Aura',
    category: 'accessory',
    def: 21,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Aggro %', value: -45 },
    ]
  },
  {
    id: 5421,
    name: 'Head Plop Raffy',
    category: 'accessory',
    def: 9,
    stats: [
      { stat: 'MaxHP', value: 1000 },
      { stat: 'Accuracy', value: 10 },
      { stat: 'Unsheathe Attack', value: 100 },
    ]
  },
  {
    id: 22,
    name: 'Boss Colon Skin',
    category: 'accessory',
    def: 9,
    stats: [
      { stat: 'MaxHP', value: 1000 },
      { stat: 'Accuracy', value: 10 },
      { stat: 'Unsheathe Attack', value: 100 },
    ]
  },
  {
    id: 16,
    name: 'Black Crystal Fragment',
    category: 'accessory',
    def: 9,
    stats: [
      { stat: 'MaxHP', value: 1000 },
      { stat: 'Accuracy', value: 10 },
      { stat: 'Unsheathe Attack', value: 100 },
    ]
  },
  {
    id: 35,
    name: 'Brutal Dragon Skin',
    category: 'accessory',
    def: 9,
    stats: [
      { stat: 'MaxHP', value: 1000 },
      { stat: 'Accuracy', value: 10 },
      { stat: 'Unsheathe Attack', value: 100 },
    ]
  },
  {
    id: 5419,
    name: 'Potum Hood',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'MaxHP', value: 500 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
    ]
  },
  {
    id: 5413,
    name: 'Potum Backpack',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
    ]
  },
  {
    id: 5383,
    name: 'Kinaco Scarf',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Absolute Accuracy %', value: 10 },
    ]
  },
  {
    id: 5382,
    name: 'Traffic Cone Earmuffs',
    category: 'accessory',
    def: 31,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Aggro %', value: 50 },
    ]
  },
  {
    id: 5381,
    name: 'Granny on Shoulder',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'MATK %', value: 7 },
      { stat: 'ASPD', value: 400 },
      { stat: 'CSPD', value: 400 },
    ]
  },
  {
    id: 5376,
    name: 'Kinaco Earmuffs',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 600 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 5369,
    name: 'Crystal Horns',
    category: 'accessory',
    def: 145,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Earth resistance %', value: -15 },
      { stat: 'Aggro %', value: -30 },
    ]
  },
  {
    id: 5358,
    name: 'Shark Hood',
    category: 'accessory',
    def: 21,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Water resistance %', value: 10 },
      { stat: 'Aggro %', value: -10 },
    ]
  },
  {
    id: 5352,
    name: 'Spike Earrings',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'Accuracy', value: 50 },
      { stat: 'ASPD', value: 500 },
      { stat: 'Reduce Dmg (Floor) %', value: 20 },
    ]
  },
  {
    id: 5353,
    name: 'Turbid Particle',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'Accuracy', value: 50 },
      { stat: 'ASPD', value: 500 },
      { stat: 'Reduce Dmg (Floor) %', value: 20 },
    ]
  },
  {
    id: 4071,
    name: 'Sharp Poison Needle',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'Accuracy', value: 50 },
      { stat: 'ASPD', value: 500 },
      { stat: 'Reduce Dmg (Floor) %', value: 20 },
    ]
  },
  {
    id: 5351,
    name: 'Hoop Skirt',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Unsheathe Attack %', value: 7 },
      { stat: 'Reduce Dmg (Bowling) %', value: 14 },
    ]
  },
  {
    id: 5364,
    name: 'Broken Aquaball',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Unsheathe Attack %', value: 7 },
      { stat: 'Reduce Dmg (Bowling) %', value: 14 },
    ]
  },
  {
    id: 5085,
    name: 'Solid Wood',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Unsheathe Attack %', value: 7 },
      { stat: 'Reduce Dmg (Bowling) %', value: 14 },
    ]
  },
  {
    id: 5350,
    name: 'Rose Bonnet',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5322,
    name: 'Black Rock Crystal',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5066,
    name: 'Hat Brim',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5329,
    name: 'Pillow Kitagawa\'s Hat',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MaxHP', value: 1000 },
      { stat: 'Critical Rate', value: 30 },
      { stat: 'Attack MP Recovery', value: 5 },
      { stat: 'Revive Time %', value: 45 },
    ]
  },
  {
    id: 5327,
    name: 'Straye Armband',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 300 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'Attack MP Recovery', value: 2 },
    ]
  },
  {
    id: 5326,
    name: 'Resistle Armband',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 300 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'MDEF', value: 30 },
    ]
  },
  {
    id: 5325,
    name: 'Technista Armband',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 300 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'DEF %', value: 30 },
    ]
  },
  {
    id: 5324,
    name: 'Fixion Armband',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 300 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'Accuracy', value: 10 },
    ]
  },
  {
    id: 5317,
    name: 'Fur Collar',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'MaxMP', value: 50 },
      { stat: 'Magic Pierce %', value: 20 },
      { stat: 'Accuracy %', value: 4 },
    ]
  },
  {
    id: 5316,
    name: 'Superbia Head Chain',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'MaxHP %', value: 5 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Critical Rate %', value: 30 },
      { stat: 'Barrier Cooldown %', value: 10 },
    ]
  },
  {
    id: 5314,
    name: 'Candles of Hatred',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Water resistance %', value: -10 },
      { stat: 'Reflect %', value: 20 },
    ]
  },
  {
    id: 5265,
    name: 'Crow Feather',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Water resistance %', value: -10 },
      { stat: 'Reflect %', value: 20 },
    ]
  },
  {
    id: 4951,
    name: 'Cry of Sorrow',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Water resistance %', value: -10 },
      { stat: 'Reflect %', value: 20 },
    ]
  },
  {
    id: 5313,
    name: 'Amber Charm',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'Ailment Resistance %', value: 13 },
      { stat: 'Physical Barrier', value: 1300 },
      { stat: 'Magic Barrier', value: 1300 },
    ]
  },
  {
    id: 5247,
    name: 'Colon Leaf Crest',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'Ailment Resistance %', value: 13 },
      { stat: 'Physical Barrier', value: 1300 },
      { stat: 'Magic Barrier', value: 1300 },
    ]
  },
  {
    id: 4957,
    name: 'Life Essence',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'Ailment Resistance %', value: 13 },
      { stat: 'Physical Barrier', value: 1300 },
      { stat: 'Magic Barrier', value: 1300 },
    ]
  },
  {
    id: 5312,
    name: 'Waist Armor',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ASPD %', value: 15 },
      { stat: 'Neutral Resistance %', value: 20 },
      { stat: '% stronger against Neutral', value: 10 },
    ]
  },
  {
    id: 4608,
    name: 'Gorgeous Cupule',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ASPD %', value: 15 },
      { stat: 'Neutral Resistance %', value: 20 },
      { stat: '% stronger against Neutral', value: 10 },
    ]
  },
  {
    id: 4458,
    name: 'Tough Waistband',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ASPD %', value: 15 },
      { stat: 'Neutral Resistance %', value: 20 },
      { stat: '% stronger against Neutral', value: 10 },
    ]
  },
  {
    id: 5311,
    name: 'Trunk Backpack',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Guard Recharge %', value: 10 },
      { stat: 'Reduce Dmg (Bowling) %', value: 20 },
    ]
  },
  {
    id: 4519,
    name: 'Sturdy Papula',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Guard Recharge %', value: 10 },
      { stat: 'Reduce Dmg (Bowling) %', value: 20 },
    ]
  },
  {
    id: 4451,
    name: 'Mutated Wood',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Guard Recharge %', value: 10 },
      { stat: 'Reduce Dmg (Bowling) %', value: 20 },
    ]
  },
  {
    id: 5310,
    name: 'Rose Charm',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Reflect %', value: 10 },
      { stat: 'Reduce Dmg (Floor) %', value: 20 },
    ]
  },
  {
    id: 4378,
    name: 'Elf Berry',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Reflect %', value: 10 },
      { stat: 'Reduce Dmg (Floor) %', value: 20 },
    ]
  },
  {
    id: 5295,
    name: 'Gift Head',
    category: 'accessory',
    def: 111,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 5298,
    name: 'White Sugar',
    category: 'accessory',
    def: 111,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 5282,
    name: 'Cute Ornament String',
    category: 'accessory',
    def: 111,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 4463,
    name: 'Spinning Cube',
    category: 'accessory',
    def: 111,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Attack MP Recovery', value: 15 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 5294,
    name: 'Purity Stole',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'Stability %', value: 15 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 5297,
    name: 'Cake Flour',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'Stability %', value: 15 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 5281,
    name: 'Amezaiku Wings',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'Stability %', value: 15 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 5293,
    name: 'Purity Ribbon',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: '% stronger against Earth', value: 10 },
      { stat: 'Additional Magic %', value: 100 },
    ]
  },
  {
    id: 5296,
    name: 'Royal Syrup',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: '% stronger against Earth', value: 10 },
      { stat: 'Additional Magic %', value: 100 },
    ]
  },
  {
    id: 5298,
    name: 'White Sugar',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: '% stronger against Earth', value: 10 },
      { stat: 'Additional Magic %', value: 100 },
    ]
  },
  {
    id: 5285,
    name: 'Superbia Head Chain',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'MaxHP %', value: -5 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Critical Rate %', value: 30 },
      { stat: 'Barrier Cooldown %', value: 10 },
    ]
  },
  {
    id: 5284,
    name: 'Superbia Head Chain',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'MaxHP %', value: -15 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Critical Rate %', value: 30 },
      { stat: 'Barrier Cooldown %', value: 7 },
    ]
  },
  {
    id: 5283,
    name: 'Superbia Head Chain',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'MaxHP %', value: -25 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Critical Rate %', value: 30 },
      { stat: 'Barrier Cooldown %', value: 4 },
    ]
  },
  {
    id: 5268,
    name: 'Tattered Cloak',
    category: 'accessory',
    def: 72,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Magic Barrier', value: 666 },
      { stat: 'Reduce Dmg (Foe Epicenter) %', value: 25 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 5259,
    name: 'Fluffy Snow Owl',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Magic Barrier', value: 2000 },
      { stat: 'Additional Magic %', value: 60 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 5258,
    name: 'Fluffy Snow Scarf',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Critical Damage', value: 5 },
    ]
  },
  {
    id: 5253,
    name: 'Fluffy Snow Hat',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP %', value: 30 },
      { stat: 'Wind resistance %', value: 10 },
      { stat: 'Aggro %', value: -20 },
    ]
  },
  {
    id: 5239,
    name: 'Aching Right Arm',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'STR %', value: 7 },
      { stat: 'ATK %', value: 8 },
      { stat: 'Ailment Resistance %', value: -10 },
      { stat: 'Guard Break %', value: 9 },
    ]
  },
  {
    id: 5238,
    name: 'Artificial Nails',
    category: 'accessory',
    def: 11,
    stats: [
      { stat: 'Flinch Unavailable', value: 1 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Stun Unavailable', value: 1 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 5230,
    name: 'Magical Stole',
    category: 'accessory',
    def: 25,
    stats: [
      { stat: 'INT %', value: 7 },
      { stat: 'MaxHP', value: 700 },
      { stat: 'MATK %', value: 7 },
    ]
  },
  {
    id: 5236,
    name: 'Enty Cloth',
    category: 'accessory',
    def: 25,
    stats: [
      { stat: 'INT %', value: 7 },
      { stat: 'MaxHP', value: 700 },
      { stat: 'MATK %', value: 7 },
    ]
  },
  {
    id: 5073,
    name: 'Metal Shackles',
    category: 'accessory',
    def: 25,
    stats: [
      { stat: 'INT %', value: 7 },
      { stat: 'MaxHP', value: 700 },
      { stat: 'MATK %', value: 7 },
    ]
  },
  {
    id: 5229,
    name: 'Bubble Helmet',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Physical Resistance %', value: 13 },
      { stat: 'Magic Resistance %', value: 13 },
      { stat: 'Water resistance %', value: 9 },
      { stat: 'Fractional Barrier %', value: 15 },
    ]
  },
  {
    id: 4627,
    name: 'Floating Sphere',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Physical Resistance %', value: 13 },
      { stat: 'Magic Resistance %', value: 13 },
      { stat: 'Water resistance %', value: 9 },
      { stat: 'Fractional Barrier %', value: 15 },
    ]
  },
  {
    id: 4575,
    name: 'Mystical Glass Sphere',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Physical Resistance %', value: 13 },
      { stat: 'Magic Resistance %', value: 13 },
      { stat: 'Water resistance %', value: 9 },
      { stat: 'Fractional Barrier %', value: 15 },
    ]
  },
  {
    id: 5228,
    name: 'Explorer Canteen',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: '% stronger against Fire', value: 10 },
      { stat: 'Fire resistance %', value: 20 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 4377,
    name: 'Labilans Wood',
    category: 'accessory',
    def: 82,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: '% stronger against Fire', value: 10 },
      { stat: 'Fire resistance %', value: 20 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 5227,
    name: 'Gladiator Helmet',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'MaxHP %', value: 25 },
      { stat: 'Stability %', value: 15 },
      { stat: 'Critical Rate', value: 5 },
    ]
  },
  {
    id: 4901,
    name: 'Geometric Metal Bit',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'MaxHP %', value: 25 },
      { stat: 'Stability %', value: 15 },
      { stat: 'Critical Rate', value: 5 },
    ]
  },
  {
    id: 4618,
    name: 'Electrified Lightning Rod',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'MaxHP %', value: 25 },
      { stat: 'Stability %', value: 15 },
      { stat: 'Critical Rate', value: 5 },
    ]
  },
  {
    id: 5219,
    name: 'Strawberry Beret',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'MATK %', value: 8 },
      { stat: 'MDEF %', value: 16 },
      { stat: 'Aggro %', value: -10 },
      { stat: 'Attack MP Recovery', value: 3 },
    ]
  },
  {
    id: 5214,
    name: 'Lovely Chocolate',
    category: 'accessory',
    def: 31,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Aggro %', value: 40 },
    ]
  },
  {
    id: 5225,
    name: 'Berry Scaly Horn',
    category: 'accessory',
    def: 31,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Aggro %', value: 40 },
    ]
  },
  {
    id: 5222,
    name: 'Strange Liqueur',
    category: 'accessory',
    def: 31,
    stats: [
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Aggro %', value: 40 },
    ]
  },
  {
    id: 5213,
    name: 'Plush Bear Hat',
    category: 'accessory',
    def: 142,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5224,
    name: 'Whipped Cream',
    category: 'accessory',
    def: 142,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5223,
    name: 'Macapicoa Nut',
    category: 'accessory',
    def: 142,
    stats: [
      { stat: 'MaxHP', value: 4000 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5212,
    name: 'Cookie Earrings',
    category: 'accessory',
    def: 9,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
    ]
  },
  {
    id: 5224,
    name: 'Whipped Cream',
    category: 'accessory',
    def: 9,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
    ]
  },
  {
    id: 5221,
    name: 'Buttercream Flower',
    category: 'accessory',
    def: 9,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
    ]
  },
  {
    id: 5211,
    name: 'Lace Headdress',
    category: 'accessory',
    def: 89,
    stats: [
      { stat: 'DEX %', value: 6 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Unsheathe Attack %', value: 8 },
    ]
  },
  {
    id: 5222,
    name: 'Strange Liqueur',
    category: 'accessory',
    def: 89,
    stats: [
      { stat: 'DEX %', value: 6 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Unsheathe Attack %', value: 8 },
    ]
  },
  {
    id: 5223,
    name: 'Macapicoa Nut',
    category: 'accessory',
    def: 89,
    stats: [
      { stat: 'DEX %', value: 6 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Unsheathe Attack %', value: 8 },
    ]
  },
  {
    id: 5210,
    name: 'Candy Hair Bow',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: '% stronger against Wind', value: 10 },
      { stat: 'Additional Melee %', value: 100 },
    ]
  },
  {
    id: 5221,
    name: 'Buttercream Flower',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: '% stronger against Wind', value: 10 },
      { stat: 'Additional Melee %', value: 100 },
    ]
  },
  {
    id: 5223,
    name: 'Macapicoa Nut',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: '% stronger against Wind', value: 10 },
      { stat: 'Additional Melee %', value: 100 },
    ]
  },
  {
    id: 5203,
    name: 'Oni Mask',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Natural HP Regen %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'DEF %', value: 10 },
    ]
  },
  {
    id: 4155,
    name: 'Dark Red Fluid',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Natural HP Regen %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'DEF %', value: 10 },
    ]
  },
  {
    id: 5074,
    name: 'Skull Mask Fragment',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Natural HP Regen %', value: 10 },
      { stat: 'ATK %', value: 10 },
      { stat: 'DEF %', value: 10 },
    ]
  },
  {
    id: 5202,
    name: 'Lucky Sushi Roll & Potum',
    category: 'accessory',
    def: 45,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Revive Time %', value: 30 },
    ]
  },
  {
    id: 4961,
    name: 'Climber\'s Paw Pad',
    category: 'accessory',
    def: 45,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Revive Time %', value: 30 },
    ]
  },
  {
    id: 4642,
    name: 'Airbag Vest',
    category: 'accessory',
    def: 45,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Revive Time %', value: 30 },
    ]
  },
  {
    id: 5201,
    name: 'Oni Horns Headband',
    category: 'accessory',
    def: 77,
    stats: [
      { stat: 'Natural MP Regen', value: 20 },
      { stat: 'Magic Pierce %', value: 20 },
    ]
  },
  {
    id: 4681,
    name: 'Sandstone Tiny Horn',
    category: 'accessory',
    def: 77,
    stats: [
      { stat: 'Natural MP Regen', value: 20 },
      { stat: 'Magic Pierce %', value: 20 },
    ]
  },
  {
    id: 4687,
    name: 'Coarse Fur',
    category: 'accessory',
    def: 77,
    stats: [
      { stat: 'Natural MP Regen', value: 20 },
      { stat: 'Magic Pierce %', value: 20 },
    ]
  },
  {
    id: 5190,
    name: 'Zodiac Hat: Ox',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR', value: 1 },
      { stat: 'INT', value: 1 },
      { stat: 'VIT', value: 1 },
      { stat: 'AGI', value: 1 },
      { stat: 'DEX', value: 1 },
    ]
  },
  {
    id: 5183,
    name: 'Zega Mask',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'MaxHP', value: 6000 },
      { stat: 'Physical Pierce %', value: -10 },
      { stat: 'Magic Pierce %', value: -10 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
    ]
  },
  {
    id: 5122,
    name: 'Fluffy Earmuffs',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'VIT %', value: 7 },
      { stat: 'ATK %', value: 7 },
      { stat: 'Attack MP Recovery', value: 7 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 5121,
    name: 'Snowman Hood',
    category: 'accessory',
    def: 130,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Aggro %', value: -20 },
      { stat: 'Guard Break %', value: 30 },
      { stat: 'Reduce Dmg (Bullet) %', value: 25 },
    ]
  },
  {
    id: 5120,
    name: 'Snowman Earmuffs',
    category: 'accessory',
    def: 65,
    stats: [
      { stat: 'ASPD %', value: 30 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Short Range Damage %', value: 5 },
      { stat: 'Barrier Cooldown %', value: 10 },
    ]
  },
  {
    id: 5119,
    name: 'Xmas Scarf',
    category: 'accessory',
    def: 70,
    stats: [
      { stat: 'Accuracy %', value: 30 },
      { stat: 'Water resistance %', value: 15 },
      { stat: 'Wind resistance %', value: 15 },
    ]
  },
  {
    id: 5116,
    name: 'Xmas Ribbon',
    category: 'accessory',
    def: 39,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Critical Rate %', value: 5 },
      { stat: 'Weapon ATK %', value: 15 },
    ]
  },
  {
    id: 5115,
    name: 'Reindeer Beanie',
    category: 'accessory',
    def: 190,
    stats: [
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Reduce Dmg (Bowling) %', value: 20 },
      { stat: 'ATK UP (STR %)', value: 50 },
    ]
  },
  {
    id: 5111,
    name: 'Snowman Kit',
    category: 'accessory',
    def: 111,
    stats: [
      { stat: 'Magic Pierce %', value: 15 },
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Water resistance %', value: 15 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 5106,
    name: 'Bunny Beanie',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 3437,
    name: 'Fluck Egg',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 3634,
    name: 'Knit Fabric',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 249,
    name: 'Carrot',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dodge %', value: 10 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 5092,
    name: 'Double-Bun Ribbons',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Accuracy', value: 30 },
      { stat: 'Accuracy %', value: 15 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 5071,
    name: 'Frosch Mushroom',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Accuracy', value: 30 },
      { stat: 'Accuracy %', value: 15 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 4950,
    name: 'Phantom Cloth',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Accuracy', value: 30 },
      { stat: 'Accuracy %', value: 15 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 4366,
    name: 'Round Insect Cage',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Accuracy', value: 30 },
      { stat: 'Accuracy %', value: 15 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 5091,
    name: 'Giant Rosary',
    category: 'accessory',
    def: 157,
    stats: [
      { stat: 'AGI %', value: 6 },
      { stat: 'Attack MP Recovery', value: 6 },
      { stat: 'Short Range Damage %', value: 6 },
    ]
  },
  {
    id: 5075,
    name: 'Vengeful Soul',
    category: 'accessory',
    def: 157,
    stats: [
      { stat: 'AGI %', value: 6 },
      { stat: 'Attack MP Recovery', value: 6 },
      { stat: 'Short Range Damage %', value: 6 },
    ]
  },
  {
    id: 3170,
    name: 'Crooked Nucleic Acid',
    category: 'accessory',
    def: 157,
    stats: [
      { stat: 'AGI %', value: 6 },
      { stat: 'Attack MP Recovery', value: 6 },
      { stat: 'Short Range Damage %', value: 6 },
    ]
  },
  {
    id: 2651,
    name: 'Hard Nut',
    category: 'accessory',
    def: 157,
    stats: [
      { stat: 'AGI %', value: 6 },
      { stat: 'Attack MP Recovery', value: 6 },
      { stat: 'Short Range Damage %', value: 6 },
    ]
  },
  {
    id: 5090,
    name: 'Pumpkin Mask',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'MaxHP', value: 100 },
      { stat: 'MaxMP', value: 100 },
      { stat: 'Fire resistance %', value: 1 },
      { stat: 'Dark resistance %', value: 1 },
    ]
  },
  {
    id: 5060,
    name: 'Amber Charm',
    category: 'accessory',
    def: 48,
    stats: [
      { stat: 'Ailment Resistance %', value: 11 },
      { stat: 'Physical Barrier', value: 1200 },
      { stat: 'Magic Barrier', value: 1300 },
    ]
  },
  {
    id: 5001,
    name: 'Mermaid Waist Ornament',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 4954,
    name: 'Fish Tusk',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 4953,
    name: 'Transparent Fin',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 4454,
    name: 'Hard Water',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 5000,
    name: 'Phantom Thief Ricotta',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ATK %', value: 8 },
      { stat: 'Critical Rate %', value: 50 },
      { stat: 'Stun Unavailable', value: 1 },
      { stat: 'Reduce Dmg (Bowling) %', value: 25 },
    ]
  },
  {
    id: 4987,
    name: 'Devil Half Mask',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'Physical Pierce %', value: 9 },
      { stat: 'Critical Damage %', value: 3 },
      { stat: 'Magic Barrier', value: 100 },
    ]
  },
  {
    id: 4975,
    name: 'Magical Stole',
    category: 'accessory',
    def: 25,
    stats: [
      { stat: 'INT %', value: 7 },
      { stat: 'MaxHP', value: 500 },
      { stat: 'MATK %', value: 6 },
    ]
  },
  {
    id: 4960,
    name: 'Magician Mantle',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'ASPD %', value: 15 },
      { stat: 'Additional Magic %', value: 75 },
      { stat: 'MATK UP (STR %)', value: 50 },
    ]
  },
  {
    id: 4948,
    name: 'Ghost Cape',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Evasion Recharge %', value: 20 },
      { stat: 'Physical Barrier', value: 2000 },
      { stat: 'Fractional Barrier %', value: 10 },
    ]
  },
  {
    id: 4938,
    name: 'Trick Topaz',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Evasion Recharge %', value: 20 },
      { stat: 'Physical Barrier', value: 2000 },
      { stat: 'Fractional Barrier %', value: 10 },
    ]
  },
  {
    id: 4947,
    name: 'Magic Cone',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'CSPD', value: 600 },
      { stat: 'Magic Barrier', value: 1000 },
    ]
  },
  {
    id: 4938,
    name: 'Trick Topaz',
    category: 'accessory',
    def: 90,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'CSPD', value: 600 },
      { stat: 'Magic Barrier', value: 1000 },
    ]
  },
  {
    id: 4946,
    name: 'Pumpkin Earrings',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MATK', value: 100 },
      { stat: 'MDEF', value: 100 },
      { stat: 'Accuracy', value: 100 },
    ]
  },
  {
    id: 4938,
    name: 'Trick Topaz',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MATK', value: 100 },
      { stat: 'MDEF', value: 100 },
      { stat: 'Accuracy', value: 100 },
    ]
  },
  {
    id: 4940,
    name: 'Masquerade Hat',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Physical Pierce %', value: 14 },
      { stat: 'Accuracy %', value: 12 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 4929,
    name: 'Chiroptera Tiara',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'Accuracy %', value: 5 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Unsheathe Attack %', value: 10 },
    ]
  },
  {
    id: 4906,
    name: 'Cape of Divinity',
    category: 'accessory',
    def: 86,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'MDEF %', value: 10 },
      { stat: 'Magic Resistance %', value: 30 },
    ]
  },
  {
    id: 4903,
    name: 'Steampunk Cap',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'MATK %', value: 7 },
      { stat: 'Magic Resistance %', value: -6 },
      { stat: 'Accuracy %', value: 6 },
    ]
  },
  {
    id: 4900,
    name: 'Duel Mask',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Stability %', value: 5 },
      { stat: 'ATK UP (AGI %)', value: 50 },
    ]
  },
  {
    id: 4894,
    name: 'Demon Empress Cape',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxHP', value: -3000 },
      { stat: 'MATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Long Range Damage %', value: 4 },
    ]
  },
  {
    id: 4909,
    name: 'Empress Ogre Hair',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxHP', value: -3000 },
      { stat: 'MATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Long Range Damage %', value: 4 },
    ]
  },
  {
    id: 4921,
    name: 'Empress Ogre Crystal',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxHP', value: -3000 },
      { stat: 'MATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Long Range Damage %', value: 4 },
    ]
  },
  {
    id: 4897,
    name: 'Strange Dust',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxHP', value: -3000 },
      { stat: 'MATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Long Range Damage %', value: 4 },
    ]
  },
  {
    id: 4893,
    name: 'Demon Empress Neck Warmer',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxMP', value: -300 },
      { stat: 'ATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Short Range Damage %', value: 4 },
    ]
  },
  {
    id: 4909,
    name: 'Empress Ogre Hair',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxMP', value: -300 },
      { stat: 'ATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Short Range Damage %', value: 4 },
    ]
  },
  {
    id: 4915,
    name: 'Empress Ogre Fang',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxMP', value: -300 },
      { stat: 'ATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Short Range Damage %', value: 4 },
    ]
  },
  {
    id: 4897,
    name: 'Strange Dust',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'MaxMP', value: -300 },
      { stat: 'ATK %', value: 3 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Short Range Damage %', value: 4 },
    ]
  },
  {
    id: 4892,
    name: 'Honeybee Antennae',
    category: 'accessory',
    def: 91,
    stats: [
      { stat: 'Dodge', value: 20 },
      { stat: 'Dodge %', value: 20 },
      { stat: 'Evasion Recharge %', value: 20 },
    ]
  },
  {
    id: 4904,
    name: 'Corroded Leather',
    category: 'accessory',
    def: 91,
    stats: [
      { stat: 'Dodge', value: 20 },
      { stat: 'Dodge %', value: 20 },
      { stat: 'Evasion Recharge %', value: 20 },
    ]
  },
  {
    id: 4695,
    name: 'Spiky Shoulder Pads',
    category: 'accessory',
    def: 91,
    stats: [
      { stat: 'Dodge', value: 20 },
      { stat: 'Dodge %', value: 20 },
      { stat: 'Evasion Recharge %', value: 20 },
    ]
  },
  {
    id: 78,
    name: 'Flower Nectar',
    category: 'accessory',
    def: 91,
    stats: [
      { stat: 'Dodge', value: 20 },
      { stat: 'Dodge %', value: 20 },
      { stat: 'Evasion Recharge %', value: 20 },
    ]
  },
  {
    id: 4889,
    name: 'Skirt Belt',
    category: 'accessory',
    def: 64,
    stats: [
      { stat: 'Natural HP Regen', value: 1 },
      { stat: 'Accuracy', value: 100 },
      { stat: 'Attack MP Recovery', value: 1 },
    ]
  },
  {
    id: 4875,
    name: 'Cute Octopus Hat',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'VIT', value: 6 },
      { stat: 'Water resistance %', value: 6 },
      { stat: 'Attack MP Recovery', value: 12 },
    ]
  },
  {
    id: 4873,
    name: 'Morning Glory Hair Ornament',
    category: 'accessory',
    def: 43,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 4869,
    name: 'Watermelon Slice',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'MaxHP', value: 300 },
      { stat: 'Aggro %', value: -40 },
    ]
  },
  {
    id: 4851,
    name: 'Gladiator\'s Helm',
    category: 'accessory',
    def: 43,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: -10 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Short Range Damage %', value: 5 },
    ]
  },
  {
    id: 4845,
    name: '5th Anniv Headband',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR %', value: 5 },
      { stat: 'INT %', value: 5 },
      { stat: 'VIT %', value: 5 },
      { stat: 'AGI %', value: 5 },
      { stat: 'DEX %', value: 5 },
      { stat: 'MDEF', value: 500 },
    ]
  },
  {
    id: 4844,
    name: '5th Anniv Hat',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR %', value: 5 },
      { stat: 'INT %', value: 5 },
      { stat: 'VIT %', value: 5 },
      { stat: 'AGI %', value: 5 },
      { stat: 'DEX %', value: 5 },
      { stat: 'DEF', value: 500 },
    ]
  },
  {
    id: 4702,
    name: 'Sand Bandit Mask',
    category: 'accessory',
    def: 140,
    stats: [
      { stat: 'Physical Pierce %', value: 12 },
      { stat: 'Earth resistance %', value: 12 },
      { stat: 'Unsheathe Attack %', value: 12 },
      { stat: 'Invincible Aid (sec)', value: 3 },
    ]
  },
  {
    id: 4664,
    name: 'Mohawk Wig',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'ASPD %', value: 30 },
      { stat: 'Revive Time %', value: -20 },
    ]
  },
  {
    id: 3436,
    name: 'Vivid Crest',
    category: 'accessory',
    def: 200,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'ASPD %', value: 30 },
      { stat: 'Revive Time %', value: -20 },
    ]
  },
  {
    id: 4663,
    name: 'Warlock Face Cover',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Magic Pierce %', value: 8 },
      { stat: 'CSPD %', value: 40 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 4686,
    name: 'Broken Sand Bandits Mask',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Magic Pierce %', value: 8 },
      { stat: 'CSPD %', value: 40 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 4623,
    name: 'Illegible Academic Book',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Magic Pierce %', value: 8 },
      { stat: 'CSPD %', value: 40 },
      { stat: 'Aggro %', value: -15 },
    ]
  },
  {
    id: 4662,
    name: 'Nom Nom Bone',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Dodge %', value: 4 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 4678,
    name: 'White Beak',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Dodge %', value: 4 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 4626,
    name: 'Broken Artificial Arm',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Dodge %', value: 4 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 4531,
    name: 'Fish Bone Cracker',
    category: 'accessory',
    def: 47,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Dodge %', value: 4 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 4655,
    name: 'Traveler\'s Belt',
    category: 'accessory',
    def: 2,
    stats: [
      { stat: 'Natural HP Regen %', value: 5 },
    ]
  },
  {
    id: 4654,
    name: 'Neck Goggles',
    category: 'accessory',
    def: 7,
    stats: [
      { stat: 'Stability %', value: 5 },
    ]
  },
  {
    id: 4653,
    name: 'Magic Lantern',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'Accuracy %', value: 10 },
    ]
  },
  {
    id: 4652,
    name: 'Scratched Hachigane',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP', value: 120 },
      { stat: 'Revive Time %', value: -10 },
    ]
  },
  {
    id: 4643,
    name: 'Patissia\'s Hat',
    category: 'accessory',
    def: 151,
    stats: [
      { stat: 'Critical Rate', value: 9 },
      { stat: 'Critical Damage', value: 9 },
      { stat: 'Aggro %', value: -9 },
      { stat: 'Anticipate %', value: 9 },
      { stat: 'Guard Break %', value: 9 },
      { stat: 'Reduce Dmg (Charge) %', value: -45 },
    ]
  },
  {
    id: 4636,
    name: 'Darling Tiara',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'INT', value: 7 },
      { stat: 'MaxMP', value: 750 },
      { stat: 'Magic Resistance %', value: 25 },
      { stat: 'Aggro %', value: -35 },
    ]
  },
  {
    id: 4635,
    name: 'Darling Crown',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'STR', value: 7 },
      { stat: 'MaxHP', value: 1500 },
      { stat: 'Physical Resistance %', value: 25 },
      { stat: 'Aggro %', value: 35 },
    ]
  },
  {
    id: 4634,
    name: 'Mummy Headscarf',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Critical Rate %', value: 20 },
      { stat: 'Light resistance %', value: 15 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 4611,
    name: 'Chitinous Crimson Sphere',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Critical Rate %', value: 20 },
      { stat: 'Light resistance %', value: 15 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 4573,
    name: 'Tattered Bandage',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Critical Rate %', value: 20 },
      { stat: 'Light resistance %', value: 15 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 4624,
    name: 'Librarian Hat',
    category: 'accessory',
    def: 48,
    stats: [
      { stat: 'MaxHP', value: 900 },
      { stat: 'MATK %', value: 6 },
      { stat: 'MDEF %', value: 14 },
    ]
  },
  {
    id: 4610,
    name: 'Gladiator Helmet',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'MaxHP %', value: 21 },
      { stat: 'Stability %', value: 14 },
      { stat: 'Critical Rate', value: 5 },
    ]
  },
  {
    id: 4606,
    name: 'Fruit Cap',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'MDEF %', value: 80 },
      { stat: 'Ailment Resistance %', value: 15 },
    ]
  },
  {
    id: 4543,
    name: 'Sakura School Cap',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'MATK %', value: 7 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
    ]
  },
  {
    id: 4551,
    name: 'Twilight Sakura Red Stone',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'MATK %', value: 7 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
    ]
  },
  {
    id: 4549,
    name: 'Corroded Yozakura',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'MATK %', value: 7 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
    ]
  },
  {
    id: 4550,
    name: 'Sakura Eater Crystal',
    category: 'accessory',
    def: 40,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'MATK %', value: 7 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
    ]
  },
  {
    id: 4542,
    name: 'Princess Sakuya Crown',
    category: 'accessory',
    def: 88,
    stats: [
      { stat: 'ASPD', value: 750 },
      { stat: 'Additional Magic %', value: 75 },
    ]
  },
  {
    id: 4551,
    name: 'Twilight Sakura Red Stone',
    category: 'accessory',
    def: 88,
    stats: [
      { stat: 'ASPD', value: 750 },
      { stat: 'Additional Magic %', value: 75 },
    ]
  },
  {
    id: 4549,
    name: 'Corroded Yozakura',
    category: 'accessory',
    def: 88,
    stats: [
      { stat: 'ASPD', value: 750 },
      { stat: 'Additional Magic %', value: 75 },
    ]
  },
  {
    id: 4541,
    name: 'Twilight Sakura Cape',
    category: 'accessory',
    def: 72,
    stats: [
      { stat: 'Accuracy %', value: 15 },
      { stat: 'Aggro %', value: -15 },
      { stat: 'Anticipate %', value: 30 },
    ]
  },
  {
    id: 4551,
    name: 'Twilight Sakura Red Stone',
    category: 'accessory',
    def: 72,
    stats: [
      { stat: 'Accuracy %', value: 15 },
      { stat: 'Aggro %', value: -15 },
      { stat: 'Anticipate %', value: 30 },
    ]
  },
  {
    id: 4526,
    name: 'Waist Armor',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ASPD %', value: 15 },
      { stat: 'Neutral Resistance %', value: 18 },
      { stat: '% stronger against Neutral', value: 9 },
    ]
  },
  {
    id: 4503,
    name: 'Hexa Glasses',
    category: 'accessory',
    def: 41,
    stats: [
      { stat: 'Accuracy', value: 15 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 4499,
    name: 'Hexa Glasses',
    category: 'accessory',
    def: 41,
    stats: [
      { stat: 'Accuracy', value: 30 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 4508,
    name: 'Flapping Hell Ears',
    category: 'accessory',
    def: 41,
    stats: [
      { stat: 'Accuracy', value: 30 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 4459,
    name: 'Goblin Crystal',
    category: 'accessory',
    def: 41,
    stats: [
      { stat: 'Accuracy', value: 30 },
      { stat: 'Attack MP Recovery', value: 15 },
    ]
  },
  {
    id: 4498,
    name: 'Bull Horns',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Stability %', value: 12 },
      { stat: 'Critical Rate %', value: 24 },
      { stat: 'Aggro %', value: -6 },
    ]
  },
  {
    id: 4530,
    name: 'Sharp Twisted Horns',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Stability %', value: 12 },
      { stat: 'Critical Rate %', value: 24 },
      { stat: 'Aggro %', value: -6 },
    ]
  },
  {
    id: 4494,
    name: 'Rose Bun Wig',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Ailment Resistance %', value: 14 },
    ]
  },
  {
    id: 4481,
    name: 'Tortoiseshell Frame',
    category: 'accessory',
    def: 43,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Accuracy', value: 15 },
      { stat: 'Critical Rate', value: 15 },
    ]
  },
  {
    id: 4488,
    name: 'Piping Hot Syrup',
    category: 'accessory',
    def: 43,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Accuracy', value: 15 },
      { stat: 'Critical Rate', value: 15 },
    ]
  },
  {
    id: 4490,
    name: 'Fluffy Marshmallow',
    category: 'accessory',
    def: 43,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Accuracy', value: 15 },
      { stat: 'Critical Rate', value: 15 },
    ]
  },
  {
    id: 4480,
    name: 'Sling Bag with Gift',
    category: 'accessory',
    def: 85,
    stats: [
      { stat: 'MATK %', value: 5 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 4488,
    name: 'Piping Hot Syrup',
    category: 'accessory',
    def: 85,
    stats: [
      { stat: 'MATK %', value: 5 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 4490,
    name: 'Fluffy Marshmallow',
    category: 'accessory',
    def: 85,
    stats: [
      { stat: 'MATK %', value: 5 },
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 4479,
    name: 'Scary Scarf',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Unsheathe Attack %', value: 10 },
      { stat: 'Fractional Barrier %', value: 1 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 4466,
    name: 'Blood Crystal',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Unsheathe Attack %', value: 10 },
      { stat: 'Fractional Barrier %', value: 1 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 4450,
    name: 'Perilous Essence',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Unsheathe Attack %', value: 10 },
      { stat: 'Fractional Barrier %', value: 1 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 4286,
    name: 'Goggling Eyes',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Unsheathe Attack %', value: 10 },
      { stat: 'Fractional Barrier %', value: 1 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 4475,
    name: 'Potum Backpack',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Magic Pierce %', value: 10 },
    ]
  },
  {
    id: 4464,
    name: 'Bubble Helmet',
    category: 'accessory',
    def: 87,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Water resistance %', value: 10 },
      { stat: 'Fractional Barrier %', value: 10 },
    ]
  },
  {
    id: 4444,
    name: 'Fluffy Cape',
    category: 'accessory',
    def: 79,
    stats: [
      { stat: 'MaxHP', value: 700 },
      { stat: 'MaxMP', value: 350 },
      { stat: 'Wind resistance %', value: 10 },
    ]
  },
  {
    id: 4438,
    name: 'Potum Hood',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'MaxHP', value: 500 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
    ]
  },
  {
    id: 4431,
    name: 'Trench Cape',
    category: 'accessory',
    def: 91,
    stats: [
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'CSPD', value: 250 },
      { stat: 'Aggro %', value: -20 },
    ]
  },
  {
    id: 4387,
    name: 'Smooth Fine Hair',
    category: 'accessory',
    def: 91,
    stats: [
      { stat: 'Magic Pierce %', value: 10 },
      { stat: 'CSPD', value: 250 },
      { stat: 'Aggro %', value: -20 },
    ]
  },
  {
    id: 4423,
    name: 'Wrapping Ribbon II',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MATK %', value: 7 },
      { stat: 'Ailment Resistance %', value: 14 },
    ]
  },
  {
    id: 4419,
    name: 'Mochelo Hat',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxHP %', value: 30 },
      { stat: 'ATK %', value: 6 },
      { stat: 'Long Range Damage %', value: -18 },
    ]
  },
  {
    id: 4407,
    name: 'Donut Earmuffs',
    category: 'accessory',
    def: 44,
    stats: [
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Accuracy %', value: 20 },
      { stat: 'Evasion Recharge %', value: 10 },
      { stat: 'Reduce Dmg (Straight Line) %', value: 30 },
    ]
  },
  {
    id: 4416,
    name: 'Jeandoux Soft Fur',
    category: 'accessory',
    def: 44,
    stats: [
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Accuracy %', value: 20 },
      { stat: 'Evasion Recharge %', value: 10 },
      { stat: 'Reduce Dmg (Straight Line) %', value: 30 },
    ]
  },
  {
    id: 1454,
    name: 'Ancient Shell',
    category: 'accessory',
    def: 44,
    stats: [
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'Accuracy %', value: 20 },
      { stat: 'Evasion Recharge %', value: 10 },
      { stat: 'Reduce Dmg (Straight Line) %', value: 30 },
    ]
  },
  {
    id: 4406,
    name: 'Heart Knapsack',
    category: 'accessory',
    def: 81,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 4416,
    name: 'Jeandoux Soft Fur',
    category: 'accessory',
    def: 81,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 3549,
    name: 'Love Cacao',
    category: 'accessory',
    def: 81,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 4403,
    name: 'Snowboard',
    category: 'accessory',
    def: 80,
    stats: [
      { stat: 'Dodge %', value: 20 },
      { stat: 'Evasion Recharge %', value: 15 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Reduce Dmg (Floor) %', value: 30 },
      { stat: 'Absolute Dodge %', value: 5 },
    ]
  },
  {
    id: 4402,
    name: 'Snowboard Googles',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Accuracy', value: 50 },
      { stat: 'Wind resistance %', value: 5 },
      { stat: 'Reduce Dmg (Charge) %', value: 30 },
    ]
  },
  {
    id: 4401,
    name: 'Demon Potum',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Physical Resistance %', value: 20 },
    ]
  },
  {
    id: 4062,
    name: 'Fluffy Soft Fur',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Physical Resistance %', value: 20 },
    ]
  },
  {
    id: 4287,
    name: 'Horn-Like Bud',
    category: 'accessory',
    def: 60,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Physical Resistance %', value: 20 },
    ]
  },
  {
    id: 4400,
    name: 'Thunder Drums',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'CSPD %', value: 20 },
      { stat: 'Critical Rate', value: 15 },
      { stat: '% stronger against Water', value: 10 },
      { stat: 'Wind resistance %', value: 25 },
    ]
  },
  {
    id: 4098,
    name: 'Ein Wood',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'CSPD %', value: 20 },
      { stat: 'Critical Rate', value: 15 },
      { stat: '% stronger against Water', value: 10 },
      { stat: 'Wind resistance %', value: 25 },
    ]
  },
  {
    id: 138,
    name: 'Minotaur Skin',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'CSPD %', value: 20 },
      { stat: 'Critical Rate', value: 15 },
      { stat: '% stronger against Water', value: 10 },
      { stat: 'Wind resistance %', value: 25 },
    ]
  },
  {
    id: 4399,
    name: 'Tiger Fur Cape',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'Critical Rate', value: 25 },
    ]
  },
  {
    id: 3648,
    name: 'Carbuncle Fur',
    category: 'accessory',
    def: 73,
    stats: [
      { stat: 'Critical Rate', value: 25 },
    ]
  },
  {
    id: 4395,
    name: 'Kuzto Mask',
    category: 'accessory',
    def: 105,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Fractional Barrier %', value: 25 },
      { stat: 'Reduce Dmg (Floor) %', value: -50 },
    ]
  },
  {
    id: 4390,
    name: 'Fur Collar',
    category: 'accessory',
    def: 120,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Magic Pierce %', value: 15 },
      { stat: 'Accuracy %', value: 20 },
    ]
  },
  {
    id: 4389,
    name: 'Trunk Backpack',
    category: 'accessory',
    def: 182,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Guard Recharge %', value: 5 },
      { stat: 'Reduce Dmg (Bowling) %', value: 20 },
    ]
  },
  {
    id: 4367,
    name: 'Mysterious Hood',
    category: 'accessory',
    def: 55,
    stats: [
      { stat: 'INT %', value: 5 },
      { stat: 'MaxMP', value: 450 },
      { stat: 'CSPD', value: 400 },
    ]
  },
  {
    id: 4362,
    name: 'Flower Earrings',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 4288,
    name: 'Torn Necklace',
    category: 'accessory',
    def: 38,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Light resistance %', value: 10 },
    ]
  },
  {
    id: 4361,
    name: 'Emblem Cloak',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'ASPD', value: 400 },
      { stat: 'Critical Damage', value: 7 },
      { stat: 'Evasion Recharge %', value: 6 },
    ]
  },
  {
    id: 4388,
    name: 'Alpoca Fur',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'ASPD', value: 400 },
      { stat: 'Critical Damage', value: 7 },
      { stat: 'Evasion Recharge %', value: 6 },
    ]
  },
  {
    id: 4285,
    name: 'Old Metal Part',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'ASPD', value: 400 },
      { stat: 'Critical Damage', value: 7 },
      { stat: 'Evasion Recharge %', value: 6 },
    ]
  },
  {
    id: 4058,
    name: 'Blue Fortune',
    category: 'accessory',
    def: 95,
    stats: [
      { stat: 'ASPD', value: 400 },
      { stat: 'Critical Damage', value: 7 },
      { stat: 'Evasion Recharge %', value: 6 },
    ]
  },
  {
    id: 4358,
    name: 'Zodiac Hat: Rat',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR', value: 1 },
      { stat: 'INT', value: 1 },
      { stat: 'VIT', value: 1 },
      { stat: 'AGI', value: 1 },
      { stat: 'DEX', value: 1 },
    ]
  },
  {
    id: 4354,
    name: 'Blancanine Ears',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'ATK %', value: 7 },
      { stat: 'Stability %', value: 5 },
      { stat: 'ASPD', value: 250 },
      { stat: '% stronger against Neutral', value: -5 },
    ]
  },
  {
    id: 4344,
    name: '1st Anniv Hat',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR %', value: 1 },
      { stat: 'INT %', value: 1 },
      { stat: 'VIT %', value: 1 },
      { stat: 'AGI %', value: 1 },
      { stat: 'DEX %', value: 1 },
      { stat: 'DEF', value: 100 },
    ]
  },
  {
    id: 4343,
    name: '1st Anniv Ribbon',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'STR %', value: 1 },
      { stat: 'INT %', value: 1 },
      { stat: 'VIT %', value: 1 },
      { stat: 'AGI %', value: 1 },
      { stat: 'DEX %', value: 1 },
      { stat: 'MDEF', value: 100 },
    ]
  },
  {
    id: 4340,
    name: 'Velly\'s Hat',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Dark resistance %', value: 20 },
      { stat: 'Aggro %', value: -20 },
      { stat: 'Neutral Resistance %', value: 20 },
    ]
  },
  {
    id: 4342,
    name: 'Glacial Ice Flower',
    category: 'accessory',
    def: 50,
    stats: [
      { stat: 'Dark resistance %', value: 20 },
      { stat: 'Aggro %', value: -20 },
      { stat: 'Neutral Resistance %', value: 20 },
    ]
  },
  {
    id: 4339,
    name: 'Ice Rose Corsage',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Magic Barrier', value: 4000 },
    ]
  },
  {
    id: 4342,
    name: 'Glacial Ice Flower',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Magic Barrier', value: 4000 },
    ]
  },
  {
    id: 4338,
    name: 'Ice Cape',
    category: 'accessory',
    def: 85,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 4342,
    name: 'Glacial Ice Flower',
    category: 'accessory',
    def: 85,
    stats: [
      { stat: 'ATK %', value: 5 },
      { stat: 'Physical Pierce %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 4337,
    name: 'Snowflake Earrings',
    category: 'accessory',
    def: 63,
    stats: [
      { stat: 'INT', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 4342,
    name: 'Glacial Ice Flower',
    category: 'accessory',
    def: 63,
    stats: [
      { stat: 'INT', value: 5 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  }
];

export const specialGearList: GearItem[] = [
  {
    id: 8501,
    name: 'Tanuki Drum Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'Evasion Recharge %', value: 35 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 8456,
    name: 'Tree Spirit Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 15 },
      { stat: 'CSPD', value: 300 },
    ]
  },
  {
    id: 8384,
    name: 'Chefiluro Charm',
    category: 'accessory',
    def: 2,
    stats: [
      { stat: 'DEX %', value: 2 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Reduce Dmg (Bullet) %', value: 20 },
    ]
  },
  {
    id: 8300,
    name: 'Bitter Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Ailment Resistance %', value: 7 },
    ]
  },
  {
    id: 8293,
    name: 'Dark Ice Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Anticipate %', value: 5 },
      { stat: 'Guard Break %', value: 5 },
      { stat: 'Reduce Dmg (Bowling) %', value: 20 },
    ]
  },
  {
    id: 8292,
    name: 'Dark Ice Ring (Power)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ATK %', value: 3 },
      { stat: 'Additional Melee %', value: 50 },
      { stat: 'Anticipate %', value: 7 },
      { stat: 'Reduce Dmg (Bowling) %', value: 10 },
    ]
  },
  {
    id: 8291,
    name: 'Dark Ice Ring (Magic)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'MATK %', value: 3 },
      { stat: 'Additional Magic %', value: 50 },
      { stat: 'Guard Break %', value: 7 },
      { stat: 'Reduce Dmg (Bowling) %', value: 10 },
    ]
  },
  {
    id: 8270,
    name: 'Gospel Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 350 },
      { stat: 'Critical Rate', value: 25 },
    ]
  },
  {
    id: 8242,
    name: 'Crimson Onyx Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Weapon ATK %', value: 10 },
    ]
  },
  {
    id: 8241,
    name: 'Crimson Onyx Necklace',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Natural MP Regen %', value: 20 },
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Aggro %', value: 20 },
    ]
  },
  {
    id: 8228,
    name: 'Crocodile Leather Strap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate %', value: 40 },
      { stat: 'Guard Break %', value: 6 },
    ]
  },
  {
    id: 8221,
    name: 'Sea Foam Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'CSPD %', value: 20 },
      { stat: 'Weapon ATK %', value: 10 },
    ]
  },
  {
    id: 8201,
    name: 'Adamantite Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 8193,
    name: 'Fabric Bunny Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI %', value: 2 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'ASPD', value: 300 },
      { stat: 'Evasion Recharge %', value: 5 },
    ]
  },
  {
    id: 8170,
    name: 'Gorilla Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 3500 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Stability %', value: -2 },
      { stat: 'Critical Rate', value: 25 },
    ]
  },
  {
    id: 8100,
    name: 'Terrestrial Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Ailment Resistance %', value: 10 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 8091,
    name: 'Fragrant Fox Furnace',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: '% stronger against Wind', value: 5 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 8054,
    name: 'Beastlord Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Dodge', value: 50 },
      { stat: 'Critical Rate %', value: -50 },
      { stat: 'Motion Speed %', value: 5 },
    ]
  },
  {
    id: 8049,
    name: 'Warm Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Critical Rate', value: 20 },
      { stat: 'Fractional Barrier %', value: 5 },
    ]
  },
  {
    id: 8033,
    name: 'Inverted Tree Crest',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP %', value: -25 },
      { stat: 'MaxMP', value: 400 },
      { stat: 'Dark resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 4 },
    ]
  },
  {
    id: 8032,
    name: 'Inverted Tree Crest',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP %', value: -20 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dark resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 3 },
    ]
  },
  {
    id: 8031,
    name: 'Inverted Tree Crest',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP %', value: -15 },
      { stat: 'MaxMP', value: 200 },
      { stat: 'Dark resistance %', value: 20 },
      { stat: 'Attack MP Recovery', value: 2 },
    ]
  },
  {
    id: 7957,
    name: 'Pyroxene Nugget',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: '% stronger against Dark', value: 5 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 7942,
    name: 'Booster Cast',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Magic Resistance %', value: 20 },
      { stat: 'Motion Speed %', value: -10 },
      { stat: 'EXP Gain %', value: 10 },
    ]
  },
  {
    id: 7715,
    name: 'Dragonfly Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 10 },
      { stat: 'Evasion Recharge %', value: 30 },
      { stat: 'Additional Melee %', value: 50 },
    ]
  },
  {
    id: 7659,
    name: 'Falling Star Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Wind resistance %', value: 30 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 7636,
    name: 'Smart Puppy Talisman',
    category: 'accessory',
    def: 11,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'CSPD %', value: 30 },
      { stat: 'Neutral Resistance %', value: 20 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 7607,
    name: 'Purple Pearl Talisman',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'STR %', value: 1 },
      { stat: 'INT %', value: 1 },
      { stat: 'DEX %', value: 1 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'AGI %', value: 1 },
    ]
  },
  {
    id: 7606,
    name: 'Green Pearl Talisman',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'STR %', value: 1 },
      { stat: 'INT %', value: 1 },
      { stat: 'AGI %', value: 1 },
      { stat: 'DEX %', value: 1 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate', value: 10 },
      { stat: 'Weapon ATK %', value: 5 },
    ]
  },
  {
    id: 7605,
    name: 'Blue Pearl Talisman',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'STR %', value: 1 },
      { stat: 'INT %', value: 1 },
      { stat: 'AGI %', value: 1 },
      { stat: 'DEX %', value: 1 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Magic Pierce %', value: 5 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 7604,
    name: 'Red Pearl Talisman',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'STR %', value: 1 },
      { stat: 'INT %', value: 1 },
      { stat: 'AGI %', value: 1 },
      { stat: 'DEX %', value: 1 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Physical Pierce %', value: 5 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 7603,
    name: 'Pearl Talisman',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'STR %', value: 1 },
      { stat: 'INT %', value: 1 },
      { stat: 'AGI %', value: 1 },
      { stat: 'DEX %', value: 1 },
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 7601,
    name: 'Scary Face Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Light resistance %', value: 30 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 7585,
    name: 'Talisman of Deep Silence',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Earth resistance %', value: 30 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 7521,
    name: 'Broker\'s Insignia',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'Stability %', value: -20 },
      { stat: 'Dodge %', value: -20 },
      { stat: 'Aggro %', value: 20 },
      { stat: 'Anticipate %', value: 10 },
      { stat: 'Guard Break %', value: 10 },
    ]
  },
  {
    id: 7510,
    name: 'Nymon\'s Presence',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: '% stronger against Earth', value: 5 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 7454,
    name: 'Seahorse Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 7438,
    name: 'Lovely Ocean Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Fire resistance %', value: 30 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 7420,
    name: 'Steel Ring (Resist)',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 1500 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Resistance %', value: 15 },
      { stat: 'Magic Resistance %', value: 15 },
    ]
  },
  {
    id: 7419,
    name: 'Steel Ring (Flash)',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 1500 },
      { stat: 'Critical Rate %', value: 60 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 7418,
    name: 'Steel Ring (Magic)',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 1500 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'MATK %', value: 5 },
      { stat: 'Aggro %', value: -10 },
    ]
  },
  {
    id: 7417,
    name: 'Steel Ring (Power)',
    category: 'accessory',
    def: 100,
    stats: [
      { stat: 'MaxHP', value: 1500 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: 5 },
      { stat: 'Aggro %', value: -10 },
    ]
  },
  {
    id: 7379,
    name: 'Bitter Pumpkin Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 3 },
      { stat: 'Motion Speed %', value: 3 },
    ]
  },
  {
    id: 7345,
    name: 'Sea Fog Compass',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 10000 },
      { stat: 'CSPD', value: 1000 },
      { stat: 'Ailment Resistance %', value: -50 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 7344,
    name: 'Ghost Telescope',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Stability %', value: 5 },
      { stat: 'Accuracy %', value: 5 },
      { stat: 'Light resistance %', value: -15 },
    ]
  },
  {
    id: 7343,
    name: 'Cursed Gold Coin',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Drop Rate %', value: -100 },
    ]
  },
  {
    id: 7145,
    name: 'Coral Peach Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dark resistance %', value: 30 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 7141,
    name: 'Starfish Shuriken',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Stability %', value: -10 },
      { stat: 'Critical Rate', value: 20 },
    ]
  },
  {
    id: 7094,
    name: 'Ice Bird Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Water resistance %', value: 30 },
      { stat: 'Neutral Resistance %', value: 15 },
    ]
  },
  {
    id: 6995,
    name: 'Rock Horn Beast Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 20 },
      { stat: 'Anticipate %', value: 5 },
    ]
  },
  {
    id: 6987,
    name: 'Chocolate Charm III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6977,
    name: 'Broker Goblin',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6986,
    name: 'Chocolate Ring III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 550 },
      { stat: 'ATK', value: 40 },
      { stat: 'ASPD', value: 400 },
    ]
  },
  {
    id: 6977,
    name: 'Broker Goblin',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 550 },
      { stat: 'ATK', value: 40 },
      { stat: 'ASPD', value: 400 },
    ]
  },
  {
    id: 6969,
    name: 'Toe Beans Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 6936,
    name: 'Bear Warrior Obi',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Critical Rate', value: 15 },
      { stat: 'Short Range Damage %', value: 2 },
    ]
  },
  {
    id: 6935,
    name: 'Sakura Bear Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEF %', value: 10 },
      { stat: 'MDEF %', value: 10 },
      { stat: 'Ailment Resistance %', value: 10 },
    ]
  },
  {
    id: 6934,
    name: 'Salmon Jerky Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Magic Pierce %', value: 5 },
    ]
  },
  {
    id: 6849,
    name: 'Sable Bracelet',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Stability %', value: 5 },
      { stat: 'DEF %', value: 5 },
      { stat: 'Aggro %', value: -5 },
    ]
  },
  {
    id: 6725,
    name: 'Dexterity Talisman VI',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6708,
    name: 'Filrocas Core',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6724,
    name: 'Speed Talisman VI',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6708,
    name: 'Filrocas Core',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6205,
    name: 'Short Red Claw',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6723,
    name: 'Stamina Talisman VI',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6708,
    name: 'Filrocas Core',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6131,
    name: 'Geometric Armor Bit',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6722,
    name: 'Magic Talisman VI',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6708,
    name: 'Filrocas Core',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6334,
    name: 'Cloud Cat Horn',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6721,
    name: 'Muscle Talisman VI',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6708,
    name: 'Filrocas Core',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6297,
    name: 'Tiger Arm Claw',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 12 },
      { stat: 'MaxMP', value: 700 },
    ]
  },
  {
    id: 6686,
    name: 'Dragon Ring',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MaxHP', value: 3000 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 6611,
    name: 'Dark Shaman Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 800 },
      { stat: 'CSPD', value: 200 },
      { stat: 'Aggro %', value: -50 },
    ]
  },
  {
    id: 6524,
    name: 'Stump Drum',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'MaxHP %', value: 25 },
      { stat: 'Critical Rate', value: 25 },
      { stat: 'Aggro %', value: 25 },
    ]
  },
  {
    id: 6493,
    name: 'Anniv Festive Ring III',
    category: 'accessory',
    def: 3,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'EXP Gain %', value: 15 },
    ]
  },
  {
    id: 6492,
    name: 'Anniv Festive Bangle III',
    category: 'accessory',
    def: 3,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'Critical Rate', value: 10 },
    ]
  },
  {
    id: 6266,
    name: 'Glory Ring (Restore)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate %', value: 10 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 6265,
    name: 'Glory Ring (Melee)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Aggro %', value: -10 },
      { stat: 'Short Range Damage %', value: 1 },
    ]
  },
  {
    id: 6264,
    name: 'Glory Ring (Magic Sword)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ATK %', value: 3 },
      { stat: 'MATK %', value: 3 },
    ]
  },
  {
    id: 6263,
    name: 'Glory Ring (Indirect)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Aggro %', value: -10 },
      { stat: 'Long Range Damage %', value: 1 },
    ]
  },
  {
    id: 6262,
    name: 'Glory Ring (Memory)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Aggro %', value: 10 },
      { stat: 'EXP Gain %', value: 10 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 6238,
    name: 'Robust Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: 4 },
      { stat: 'Stability %', value: 3 },
      { stat: 'Critical Rate %', value: 20 },
    ]
  },
  {
    id: 6270,
    name: 'Empty Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: 4 },
      { stat: 'Stability %', value: 3 },
      { stat: 'Critical Rate %', value: 20 },
    ]
  },
  {
    id: 1921,
    name: 'Marchitar',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: 4 },
      { stat: 'Stability %', value: 3 },
      { stat: 'Critical Rate %', value: 20 },
    ]
  },
  {
    id: 6237,
    name: 'Adamantite Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 6270,
    name: 'Empty Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 1923,
    name: 'Super Night Mushroom',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 5000 },
      { stat: 'Neutral Resistance %', value: 25 },
    ]
  },
  {
    id: 6236,
    name: 'Prajna Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT %', value: 3 },
      { stat: 'MATK %', value: 4 },
      { stat: 'CSPD %', value: 20 },
    ]
  },
  {
    id: 6270,
    name: 'Empty Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT %', value: 3 },
      { stat: 'MATK %', value: 4 },
      { stat: 'CSPD %', value: 20 },
    ]
  },
  {
    id: 1925,
    name: 'Cerabes',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT %', value: 3 },
      { stat: 'MATK %', value: 4 },
      { stat: 'CSPD %', value: 20 },
    ]
  },
  {
    id: 6207,
    name: 'Valley Guardian Stone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: 7 },
      { stat: 'Magic Resistance %', value: 6 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 6156,
    name: 'Gleeful Vine Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: -20 },
      { stat: 'MATK %', value: -20 },
      { stat: 'Stability %', value: 10 },
      { stat: 'Pet EXP %', value: 15 },
    ]
  },
  {
    id: 6034,
    name: 'Great Nature Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 2000 },
      { stat: 'Aggro %', value: -10 },
      { stat: 'Revive Time %', value: -10 },
    ]
  },
  {
    id: 5929,
    name: 'Noeliel Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 1000 },
      { stat: 'Motion Speed %', value: -1 },
    ]
  },
  {
    id: 3464,
    name: 'Noeliel',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 1000 },
      { stat: 'Motion Speed %', value: -1 },
    ]
  },
  {
    id: 5893,
    name: 'Mischievous Pocket Watch',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Physical Resistance %', value: -90 },
      { stat: 'Magic Resistance %', value: -90 },
      { stat: 'ASPD', value: 1000 },
    ]
  },
  {
    id: 5779,
    name: 'Road Sheep Talisman',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'Natural MP Regen %', value: 5 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Stability %', value: 5 },
      { stat: 'CSPD %', value: 5 },
    ]
  },
  {
    id: 5677,
    name: 'Glowing Sea Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Stability %', value: 10 },
      { stat: 'Ailment Resistance %', value: 5 },
      { stat: 'Pet EXP %', value: 15 },
    ]
  },
  {
    id: 5464,
    name: 'Sofys Talisman II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1000 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 5440,
    name: 'Specistida',
    category: 'accessory',
    def: 15,
    stats: [
      { stat: 'MaxHP %', value: 5 },
      { stat: 'Physical Pierce %', value: 5 },
      { stat: 'Aggro %', value: -5 },
    ]
  },
  {
    id: 5399,
    name: 'Full Blossom Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'ASPD', value: 750 },
      { stat: 'CSPD', value: 750 },
      { stat: 'Ailment Resistance %', value: -8 },
    ]
  },
  {
    id: 5398,
    name: 'Night Sakura Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 750 },
      { stat: 'Ailment Resistance %', value: -4 },
    ]
  },
  {
    id: 5397,
    name: 'Day Sakura Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ASPD', value: 750 },
      { stat: 'CSPD', value: 250 },
      { stat: 'Ailment Resistance %', value: -4 },
    ]
  },
  {
    id: 5396,
    name: 'Sakura Charmstone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ASPD', value: 250 },
      { stat: 'CSPD', value: 250 },
      { stat: 'Ailment Resistance %', value: -2 },
    ]
  },
  {
    id: 5355,
    name: 'Painless Left Arm',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 5272,
    name: 'Scarecrow Marker',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Aggro %', value: 15 },
    ]
  },
  {
    id: 5270,
    name: 'Buzz Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Attack MP Recovery', value: 10 },
      { stat: 'Long Range Damage %', value: -5 },
    ]
  },
  {
    id: 5220,
    name: 'Pico Cream Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 600 },
      { stat: 'Evasion Recharge %', value: 10 },
    ]
  },
  {
    id: 5206,
    name: 'Stoodie\'s Ring III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ATK %', value: -20 },
      { stat: 'MATK %', value: -20 },
      { stat: 'Gem Dust Drop Amount %', value: 50 },
    ]
  },
  {
    id: 5209,
    name: 'Experiment Report II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ATK %', value: -20 },
      { stat: 'MATK %', value: -20 },
      { stat: 'Gem Dust Drop Amount %', value: 50 },
    ]
  },
  {
    id: 2638,
    name: 'Normal Gem III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ATK %', value: -20 },
      { stat: 'MATK %', value: -20 },
      { stat: 'Gem Dust Drop Amount %', value: 50 },
    ]
  },
  {
    id: 2341,
    name: 'Magic Cannon Part',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 100 },
      { stat: 'ATK %', value: -20 },
      { stat: 'MATK %', value: -20 },
      { stat: 'Gem Dust Drop Amount %', value: 50 },
    ]
  },
  {
    id: 5205,
    name: 'Stoodie\'s Ring II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: -10 },
      { stat: 'MATK %', value: -10 },
      { stat: 'Gem Dust Drop Amount %', value: 30 },
    ]
  },
  {
    id: 5208,
    name: 'Experiment Report I',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: -10 },
      { stat: 'MATK %', value: -10 },
      { stat: 'Gem Dust Drop Amount %', value: 30 },
    ]
  },
  {
    id: 1403,
    name: 'Normal Gem II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: -10 },
      { stat: 'MATK %', value: -10 },
      { stat: 'Gem Dust Drop Amount %', value: 30 },
    ]
  },
  {
    id: 1391,
    name: 'Big Scrap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: -10 },
      { stat: 'MATK %', value: -10 },
      { stat: 'Gem Dust Drop Amount %', value: 30 },
    ]
  },
  {
    id: 5204,
    name: 'Stoodie\'s Ring I',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Gem Dust Drop Amount %', value: 10 },
    ]
  },
  {
    id: 5208,
    name: 'Experiment Report I',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Gem Dust Drop Amount %', value: 10 },
    ]
  },
  {
    id: 426,
    name: 'Normal Gem',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Gem Dust Drop Amount %', value: 10 },
    ]
  },
  {
    id: 130,
    name: 'Magic Armor Fragment',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Gem Dust Drop Amount %', value: 10 },
    ]
  },
  {
    id: 5112,
    name: 'Sacred Bell Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 500 },
      { stat: 'Dark resistance %', value: 5 },
    ]
  },
  {
    id: 5107,
    name: 'Solar Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Light resistance %', value: 5 },
      { stat: 'Dark resistance %', value: -10 },
      { stat: 'Additional Magic %', value: 30 },
    ]
  },
  {
    id: 5064,
    name: 'Spring Breeze Talisman',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Wind resistance %', value: 25 },
    ]
  },
  {
    id: 4964,
    name: 'Sunshine Talisman',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Light resistance %', value: 25 },
    ]
  },
  {
    id: 4930,
    name: 'Astral Lamp',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Natural MP Regen %', value: 20 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Magic Pierce %', value: 10 },
    ]
  },
  {
    id: 4887,
    name: 'Anniv Festive Ring II',
    category: 'accessory',
    def: 2,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 4886,
    name: 'Anniv Festive Bangle II',
    category: 'accessory',
    def: 2,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate', value: 5 },
    ]
  },
  {
    id: 4885,
    name: 'Anniv Festive Ring',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Long Range Damage %', value: 1 },
    ]
  },
  {
    id: 4884,
    name: 'Anniv Festive Bangle',
    category: 'accessory',
    def: 1,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Short Range Damage %', value: 1 },
    ]
  },
  {
    id: 4590,
    name: 'Rosetta Stone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: -10 },
      { stat: 'Magic Resistance %', value: -10 },
      { stat: 'CSPD', value: 1000 },
    ]
  },
  {
    id: 4588,
    name: 'Sealing Bandage',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR %', value: -50 },
      { stat: 'INT %', value: -50 },
      { stat: 'VIT %', value: -50 },
      { stat: 'AGI %', value: -50 },
      { stat: 'DEX %', value: -50 },
    ]
  },
  {
    id: 4587,
    name: 'Ankh of Resurrection',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Ailment Resistance %', value: 3 },
      { stat: 'Invincible Aid (sec)', value: 1 },
    ]
  },
  {
    id: 4586,
    name: 'Rosetta Shard',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: -2 },
      { stat: 'Magic Resistance %', value: -2 },
      { stat: 'CSPD', value: 100 },
    ]
  },
  {
    id: 4510,
    name: 'Dark Night Talisman',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Dark resistance %', value: 25 },
    ]
  },
  {
    id: 4452,
    name: 'Supple Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Aggro %', value: 5 },
      { stat: 'Fractional Barrier %', value: 10 },
    ]
  },
  {
    id: 4413,
    name: 'Chocolate Leaf Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1200 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 4411,
    name: 'Seashell Choco Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'CSPD', value: 300 },
      { stat: 'Flinch Unavailable', value: 1 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 4375,
    name: 'Tree Talisman',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Earth resistance %', value: 25 },
    ]
  },
  {
    id: 4273,
    name: 'Scorching Talisman',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Fire resistance %', value: 25 },
    ]
  },
  {
    id: 4146,
    name: 'Dexterity Talisman V',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4130,
    name: 'Corroded Mushroom Cap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3798,
    name: 'Pancake Ice Flower',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4145,
    name: 'Speed Talisman V',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4130,
    name: 'Corroded Mushroom Cap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3475,
    name: 'Squawker Horn',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4144,
    name: 'Stamina Talisman V',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4130,
    name: 'Corroded Mushroom Cap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3338,
    name: 'Lizard Spirit Stone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4143,
    name: 'Magic Talisman V',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4130,
    name: 'Corroded Mushroom Cap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3650,
    name: 'Shining Mirror',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4142,
    name: 'Muscle Talisman V',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4130,
    name: 'Corroded Mushroom Cap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3522,
    name: 'Lucid White Spirit Stone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 10 },
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 4141,
    name: 'Big Tree Talisman',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'MaxHP %', value: 10 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 3744,
    name: 'White Heart',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'MaxHP %', value: 10 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 3342,
    name: 'Titan Heart',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'MaxHP %', value: 10 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 1099,
    name: 'Aged Sap',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'MaxHP %', value: 10 },
      { stat: 'Earth resistance %', value: 15 },
      { stat: 'Ailment Resistance %', value: 5 },
    ]
  },
  {
    id: 4023,
    name: 'Duo Additional Book',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Additional Melee %', value: 15 },
      { stat: 'Additional Magic %', value: 15 },
    ]
  },
  {
    id: 4022,
    name: 'Additional Magic Book',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'CSPD %', value: 3 },
      { stat: 'Additional Magic %', value: 30 },
    ]
  },
  {
    id: 4017,
    name: 'Additional Melee Book',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ASPD %', value: 3 },
      { stat: 'Additional Melee %', value: 30 },
    ]
  },
  {
    id: 4014,
    name: 'Ancient Shell Necklace',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Attack MP Recovery', value: 1 },
      { stat: 'Flinch Unavailable', value: 1 },
    ]
  },
  {
    id: 3817,
    name: 'Dark Talisman (Unknown)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 900 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'ASPD', value: -1000 },
      { stat: 'CSPD', value: -1000 },
      { stat: 'Item Cooldown', value: -1 },
    ]
  },
  {
    id: 3816,
    name: 'Dark Talisman (Resist)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 900 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Magic Resistance %', value: 10 },
    ]
  },
  {
    id: 3815,
    name: 'Dark Talisman (Flash)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 900 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Critical Rate', value: 5 },
      { stat: 'Motion Speed %', value: 1 },
    ]
  },
  {
    id: 3814,
    name: 'Dark Talisman (Magic)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 900 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'MATK %', value: 3 },
      { stat: 'Anticipate %', value: 3 },
    ]
  },
  {
    id: 3813,
    name: 'Dark Talisman (Power)',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 900 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: 3 },
      { stat: 'Guard Break %', value: 3 },
    ]
  },
  {
    id: 3720,
    name: 'Snowland Talisman',
    category: 'accessory',
    def: 20,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Water resistance %', value: 25 },
    ]
  },
  {
    id: 3706,
    name: 'Anti Melee System',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Magic Resistance %', value: -10 },
      { stat: 'Physical Barrier', value: 2000 },
    ]
  },
  {
    id: 3633,
    name: 'Enlightened Bangle',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'STR %', value: 3 },
      { stat: 'INT %', value: 3 },
      { stat: 'VIT %', value: 3 },
      { stat: 'AGI %', value: 3 },
      { stat: 'DEX %', value: 3 },
    ]
  },
  {
    id: 3614,
    name: 'Cookie Talisman II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1800 },
    ]
  },
  {
    id: 3619,
    name: 'Quality Flour',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1800 },
    ]
  },
  {
    id: 3620,
    name: 'Handmade Cookie',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1800 },
    ]
  },
  {
    id: 3613,
    name: 'Cookie Ring II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'MATK', value: 20 },
      { stat: 'CSPD', value: 200 },
    ]
  },
  {
    id: 3619,
    name: 'Quality Flour',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'MATK', value: 20 },
      { stat: 'CSPD', value: 200 },
    ]
  },
  {
    id: 3620,
    name: 'Handmade Cookie',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'MATK', value: 20 },
      { stat: 'CSPD', value: 200 },
    ]
  },
  {
    id: 3541,
    name: 'Chocolate Charm II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3548,
    name: 'Prime Chocolate Chip',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3551,
    name: 'Eidenliebe',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 600 },
    ]
  },
  {
    id: 3540,
    name: 'Chocolate Ring II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'ATK', value: 20 },
      { stat: 'ASPD', value: 200 },
    ]
  },
  {
    id: 3548,
    name: 'Prime Chocolate Chip',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'ATK', value: 20 },
      { stat: 'ASPD', value: 200 },
    ]
  },
  {
    id: 3551,
    name: 'Eidenliebe',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 450 },
      { stat: 'ATK', value: 20 },
      { stat: 'ASPD', value: 200 },
    ]
  },
  {
    id: 3478,
    name: 'Gapapa!',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 588 },
      { stat: 'MaxMP', value: 588 },
      { stat: 'Physical Barrier', value: 588 },
      { stat: 'Magic Barrier', value: 588 },
    ]
  },
  {
    id: 3459,
    name: 'Navida Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 2 },
      { stat: 'INT', value: 2 },
      { stat: 'AGI', value: 2 },
      { stat: 'DEX', value: 2 },
      { stat: 'MaxHP %', value: -2 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 3408,
    name: 'Happiness Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Pet EXP %', value: 10 },
    ]
  },
  {
    id: 3262,
    name: 'Caravan Cord',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 3261,
    name: 'Proof of Resistance',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 3214,
    name: 'Hallucination Spore',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Aggro %', value: -25 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 3213,
    name: 'Guidance Lantern',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ASPD %', value: -10 },
      { stat: 'Aggro %', value: 25 },
    ]
  },
  {
    id: 2896,
    name: 'Machina Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Ailment Resistance %', value: -10 },
    ]
  },
  {
    id: 2801,
    name: 'Hard Shell Talisman',
    category: 'accessory',
    def: 21,
    stats: [
      { stat: 'DEF %', value: 10 },
      { stat: 'MDEF %', value: -30 },
      { stat: 'Physical Resistance %', value: 10 },
      { stat: 'Aggro %', value: 10 },
      { stat: 'Physical Barrier', value: 1000 },
    ]
  },
  {
    id: 2673,
    name: 'Twin-Head Dragon Talisman',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ATK %', value: -3 },
      { stat: 'MATK %', value: -3 },
      { stat: 'Flinch Unavailable', value: 1 },
      { stat: 'Tumble Unavailable', value: 1 },
      { stat: 'Stun Unavailable', value: 1 },
    ]
  },
  {
    id: 2633,
    name: 'Weaken Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR %', value: -100 },
      { stat: 'INT %', value: -100 },
      { stat: 'VIT %', value: -100 },
      { stat: 'AGI %', value: -100 },
      { stat: 'DEX %', value: -100 },
    ]
  },
  {
    id: 2613,
    name: 'Death Truffle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR %', value: -100 },
      { stat: 'INT %', value: -100 },
      { stat: 'VIT %', value: -100 },
      { stat: 'AGI %', value: -100 },
      { stat: 'DEX %', value: -100 },
    ]
  },
  {
    id: 1967,
    name: 'Paralyzing Powder',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR %', value: -100 },
      { stat: 'INT %', value: -100 },
      { stat: 'VIT %', value: -100 },
      { stat: 'AGI %', value: -100 },
      { stat: 'DEX %', value: -100 },
    ]
  },
  {
    id: 264,
    name: 'Sand Mole Meat',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR %', value: -100 },
      { stat: 'INT %', value: -100 },
      { stat: 'VIT %', value: -100 },
      { stat: 'AGI %', value: -100 },
      { stat: 'DEX %', value: -100 },
    ]
  },
  {
    id: 282,
    name: 'Boss Colon',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR %', value: -100 },
      { stat: 'INT %', value: -100 },
      { stat: 'VIT %', value: -100 },
      { stat: 'AGI %', value: -100 },
      { stat: 'DEX %', value: -100 },
    ]
  },
  {
    id: 2632,
    name: 'Dexterity Talisman IV',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2671,
    name: 'Twin Head Dragon Tail',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2451,
    name: 'Broken Magazine',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2631,
    name: 'Speed Talisman IV',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2671,
    name: 'Twin Head Dragon Tail',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2277,
    name: 'Long Thin Tail',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2630,
    name: 'Stamina Talisman IV',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2671,
    name: 'Twin Head Dragon Tail',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2454,
    name: 'Iron Carapace',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2629,
    name: 'Magic Talisman IV',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2671,
    name: 'Twin Head Dragon Tail',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2338,
    name: 'Silk Glove',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2628,
    name: 'Muscle Talisman IV',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2671,
    name: 'Twin Head Dragon Tail',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2411,
    name: 'Monster\'s Big Arm',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 8 },
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 2437,
    name: 'Beast Fang Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Attack MP Recovery', value: 1 },
    ]
  },
  {
    id: 2378,
    name: 'Pumpkin Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'CSPD', value: 300 },
      { stat: 'Critical Rate', value: 3 },
    ]
  },
  {
    id: 2369,
    name: 'Pumpkin Diamond',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'CSPD', value: 300 },
      { stat: 'Critical Rate', value: 3 },
    ]
  },
  {
    id: 2361,
    name: 'Ring of Universe',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 1 },
      { stat: 'INT', value: 1 },
      { stat: 'VIT', value: 1 },
      { stat: 'AGI', value: 1 },
      { stat: 'DEX', value: 1 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 2354,
    name: 'Powered Gear',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: 1 },
      { stat: 'DEF %', value: -3 },
      { stat: 'MDEF %', value: -3 },
      { stat: 'Dodge %', value: -3 },
      { stat: 'Critical Damage %', value: 1 },
      { stat: 'Unsheathe Attack %', value: 1 },
    ]
  },
  {
    id: 2353,
    name: 'Shield Plus',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Guard Power %', value: 10 },
      { stat: 'Guard Recharge %', value: 10 },
    ]
  },
  {
    id: 2296,
    name: 'Beast Talisman',
    category: 'accessory',
    def: 10,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Light resistance %', value: 4 },
      { stat: 'ATK UP (VIT %)', value: 5 },
    ]
  },
  {
    id: 2271,
    name: 'Lost Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MDEF %', value: -15 },
      { stat: 'Guard Power %', value: 5 },
      { stat: 'Guard Recharge %', value: 5 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 2110,
    name: 'Steeplejack Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 1 },
      { stat: 'AGI', value: 1 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'Tumble Unavailable', value: 1 },
    ]
  },
  {
    id: 2048,
    name: 'Bow Thimble ZC',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Accuracy', value: 15 },
    ]
  },
  {
    id: 2047,
    name: 'Sailor\'s Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 500 },
      { stat: 'MaxMP', value: 250 },
      { stat: '% stronger against Water', value: 2 },
      { stat: 'Fire resistance %', value: 4 },
    ]
  },
  {
    id: 2008,
    name: 'Dark Knight Amulet',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Dodge', value: 3 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 2003,
    name: 'Dark Fighter Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'Accuracy', value: 3 },
      { stat: 'Aggro %', value: 25 },
    ]
  },
  {
    id: 1924,
    name: 'Yozakura Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Barrier', value: 1000 },
      { stat: 'Magic Barrier', value: 1000 },
      { stat: 'Barrier Cooldown %', value: -150 },
    ]
  },
  {
    id: 1888,
    name: 'Moxiz Strap',
    category: 'accessory',
    def: 30,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'ATK %', value: 1 },
      { stat: 'MATK %', value: 1 },
      { stat: 'Fire resistance %', value: -3 },
      { stat: 'Water resistance %', value: -3 },
      { stat: 'Wind resistance %', value: -3 },
      { stat: 'Earth resistance %', value: -3 },
    ]
  },
  {
    id: 1848,
    name: 'Cookie Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1000 },
    ]
  },
  {
    id: 1850,
    name: 'Candy Fragment',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1000 },
    ]
  },
  {
    id: 1849,
    name: 'Candela',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 1000 },
    ]
  },
  {
    id: 1847,
    name: 'Cookie Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 350 },
      { stat: 'MATK', value: 10 },
      { stat: 'CSPD', value: 100 },
    ]
  },
  {
    id: 1850,
    name: 'Candy Fragment',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 350 },
      { stat: 'MATK', value: 10 },
      { stat: 'CSPD', value: 100 },
    ]
  },
  {
    id: 1849,
    name: 'Candela',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 350 },
      { stat: 'MATK', value: 10 },
      { stat: 'CSPD', value: 100 },
    ]
  },
  {
    id: 1823,
    name: 'Spirit Tree Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Attack MP Recovery', value: 5 },
      { stat: 'Additional Magic %', value: 25 },
    ]
  },
  {
    id: 1791,
    name: 'Chocolate Charm',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 1779,
    name: 'Chocolate Ooze',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 1781,
    name: 'Chocolate Chip',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
    ]
  },
  {
    id: 1790,
    name: 'Chocolate Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 350 },
      { stat: 'ATK', value: 10 },
      { stat: 'ASPD', value: 100 },
    ]
  },
  {
    id: 1779,
    name: 'Chocolate Ooze',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 350 },
      { stat: 'ATK', value: 10 },
      { stat: 'ASPD', value: 100 },
    ]
  },
  {
    id: 1781,
    name: 'Chocolate Chip',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 350 },
      { stat: 'ATK', value: 10 },
      { stat: 'ASPD', value: 100 },
    ]
  },
  {
    id: 1758,
    name: 'Toughness Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP %', value: 20 },
      { stat: 'Critical Damage %', value: -5 },
      { stat: 'Aggro %', value: 10 },
    ]
  },
  {
    id: 1572,
    name: 'Snow Potum Doll',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 300 },
      { stat: 'Accuracy %', value: 12 },
      { stat: 'Dark resistance %', value: -6 },
    ]
  },
  {
    id: 1545,
    name: 'Dexterity Talisman III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1526,
    name: 'Evil Crystal Beast Claw',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1380,
    name: 'Broken Clock Hand',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1544,
    name: 'Speed Talisman III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1526,
    name: 'Evil Crystal Beast Claw',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1520,
    name: 'Thin Fabric of Netherworld',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1543,
    name: 'Stamina Talisman III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1526,
    name: 'Evil Crystal Beast Claw',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1445,
    name: 'Tough Carapace',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1542,
    name: 'Magic Talisman III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1457,
    name: 'Magic Charged Branch',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1541,
    name: 'Muscle Talisman III',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1304,
    name: 'Akaku Sand',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 6 },
      { stat: 'MaxMP', value: 400 },
    ]
  },
  {
    id: 1508,
    name: 'Potum Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
      { stat: 'Dodge %', value: 12 },
      { stat: 'Light resistance %', value: -6 },
    ]
  },
  {
    id: 1426,
    name: 'Time Warp Watch',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: -9 },
      { stat: 'Magic Resistance %', value: -9 },
      { stat: 'ASPD', value: 1000 },
    ]
  },
  {
    id: 1385,
    name: 'Broken Watch',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: -6 },
      { stat: 'Magic Resistance %', value: -6 },
      { stat: 'ASPD', value: 100 },
    ]
  },
  {
    id: 1384,
    name: 'Handless Watch',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Physical Resistance %', value: -3 },
      { stat: 'Magic Resistance %', value: -3 },
      { stat: 'ASPD', value: 10 },
    ]
  },
  {
    id: 1352,
    name: 'Proof of Victory',
    category: 'accessory',
    def: 0,
    stats: [
    ]
  },
  {
    id: 1350,
    name: 'Sofys Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 1345,
    name: 'Misanga',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'Critical Rate %', value: 1 },
    ]
  },
  {
    id: 1344,
    name: 'Caravan Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 1195,
    name: 'Ghilly Sheet',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Dodge', value: 8 },
      { stat: 'ASPD %', value: -20 },
      { stat: 'CSPD', value: -20 },
      { stat: 'Aggro %', value: -40 },
    ]
  },
  {
    id: 1090,
    name: 'Unsheathe Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 3 },
      { stat: 'Accuracy', value: 3 },
      { stat: 'Unsheathe Attack', value: 30 },
      { stat: 'Unsheathe Attack %', value: 3 },
    ]
  },
  {
    id: 1116,
    name: 'Grass Dragon\'s Petal',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 3 },
      { stat: 'Accuracy', value: 3 },
      { stat: 'Unsheathe Attack', value: 30 },
      { stat: 'Unsheathe Attack %', value: 3 },
    ]
  },
  {
    id: 828,
    name: 'Bear Fur',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 3 },
      { stat: 'Accuracy', value: 3 },
      { stat: 'Unsheathe Attack', value: 30 },
      { stat: 'Unsheathe Attack %', value: 3 },
    ]
  },
  {
    id: 1089,
    name: 'Adroit Mage\'s Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 3 },
      { stat: 'DEX', value: 3 },
      { stat: 'MATK %', value: 1 },
      { stat: 'CSPD', value: 100 },
    ]
  },
  {
    id: 638,
    name: 'Empress Hair Accessory',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 3 },
      { stat: 'DEX', value: 3 },
      { stat: 'MATK %', value: 1 },
      { stat: 'CSPD', value: 100 },
    ]
  },
  {
    id: 64,
    name: 'Eerie Stone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 3 },
      { stat: 'DEX', value: 3 },
      { stat: 'MATK %', value: 1 },
      { stat: 'CSPD', value: 100 },
    ]
  },
  {
    id: 1088,
    name: 'Adroit Warrior\'s Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 3 },
      { stat: 'DEX', value: 3 },
      { stat: 'ATK %', value: 1 },
      { stat: 'ASPD', value: 100 },
    ]
  },
  {
    id: 824,
    name: 'Great Sword Fragment',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 3 },
      { stat: 'DEX', value: 3 },
      { stat: 'ATK %', value: 1 },
      { stat: 'ASPD', value: 100 },
    ]
  },
  {
    id: 55,
    name: 'Crustacean Steel',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 3 },
      { stat: 'DEX', value: 3 },
      { stat: 'ATK %', value: 1 },
      { stat: 'ASPD', value: 100 },
    ]
  },
  {
    id: 1042,
    name: 'Ice Crystal Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: '% stronger against Fire', value: 5 },
      { stat: 'Water resistance %', value: 5 },
      { stat: 'Wind resistance %', value: -5 },
    ]
  },
  {
    id: 1012,
    name: 'Pendulum',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Critical Rate', value: 5 },
    ]
  },
  {
    id: 1010,
    name: 'Aristocrat Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 400 },
      { stat: 'ATK %', value: -10 },
      { stat: 'MATK %', value: -10 },
    ]
  },
  {
    id: 910,
    name: 'Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 821,
    name: 'Philosopher\'s Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT %', value: 3 },
      { stat: 'MaxMP', value: 300 },
      { stat: 'CSPD %', value: 30 },
    ]
  },
  {
    id: 739,
    name: 'Bow Thimble',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Accuracy', value: 30 },
    ]
  },
  {
    id: 87,
    name: 'Frog Webbed Foot',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Accuracy', value: 30 },
    ]
  },
  {
    id: 58,
    name: 'Dark Gray Claw',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Accuracy', value: 30 },
    ]
  },
  {
    id: 134,
    name: 'Mauez\'s Broken Rod',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Accuracy', value: 30 },
    ]
  },
  {
    id: 738,
    name: 'Ring of Greed',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ATK %', value: -25 },
      { stat: 'MATK %', value: -25 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 2,
    name: 'Ancient Gold Coin',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ATK %', value: -25 },
      { stat: 'MATK %', value: -25 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 176,
    name: 'Relic Scrap',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 500 },
      { stat: 'ATK %', value: -25 },
      { stat: 'MATK %', value: -25 },
      { stat: 'Attack MP Recovery', value: 5 },
    ]
  },
  {
    id: 737,
    name: 'Dexterity Talisman II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 160,
    name: 'Poison Essence',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 736,
    name: 'Speed Talisman II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 120,
    name: 'Little Wyvern Wing',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 735,
    name: 'Stamina Talisman II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 60,
    name: 'Dented Little Helmet',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 734,
    name: 'Magic Talisman II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 45,
    name: 'Clear Water',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 733,
    name: 'Muscle Talisman II',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 240,
    name: 'Young Branch',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 4 },
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 732,
    name: 'Magic Swordsman\'s Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: -25 },
      { stat: 'MATK %', value: -25 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 157,
    name: 'Pebble',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'ATK %', value: -25 },
      { stat: 'MATK %', value: -25 },
      { stat: 'Attack MP Recovery', value: 10 },
    ]
  },
  {
    id: 731,
    name: 'Magician\'s Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 1000 },
      { stat: 'ATK %', value: -25 },
      { stat: 'MATK %', value: -25 },
    ]
  },
  {
    id: 157,
    name: 'Pebble',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 1000 },
      { stat: 'ATK %', value: -25 },
      { stat: 'MATK %', value: -25 },
    ]
  },
  {
    id: 730,
    name: 'Spy\'s Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 73,
    name: 'Fire Resistant Fabric',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 46,
    name: 'Clot of Black Mist',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Aggro %', value: -25 },
    ]
  },
  {
    id: 729,
    name: 'Knight\'s Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Aggro %', value: 25 },
    ]
  },
  {
    id: 241,
    name: 'Zoktzda Stone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Aggro %', value: 25 },
    ]
  },
  {
    id: 232,
    name: 'Wandering Spirit',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 250 },
      { stat: 'Aggro %', value: 25 },
    ]
  },
  {
    id: 728,
    name: 'Hard Arm Guard',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 400 },
      { stat: 'ASPD %', value: -10 },
    ]
  },
  {
    id: 136,
    name: 'Minotaur Hoof',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 400 },
      { stat: 'ASPD %', value: -10 },
    ]
  },
  {
    id: 80,
    name: 'Fluffy Fur',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 400 },
      { stat: 'ASPD %', value: -10 },
    ]
  },
  {
    id: 52,
    name: 'Cracked Stone',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 400 },
      { stat: 'ASPD %', value: -10 },
    ]
  },
  {
    id: 727,
    name: 'Magician\'s Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 11,
    name: 'Bead Fragment',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 300 },
    ]
  },
  {
    id: 726,
    name: 'Warrior\'s Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 200 },
      { stat: 'Attack MP Recovery', value: 3 },
    ]
  },
  {
    id: 196,
    name: 'Small Article',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 200 },
      { stat: 'Attack MP Recovery', value: 3 },
    ]
  },
  {
    id: 725,
    name: 'Dexterity Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 197,
    name: 'Small Gloves',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'DEX', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 724,
    name: 'Speed Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 235,
    name: 'Wind Slash Feather',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'AGI', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 723,
    name: 'Stamina Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 99,
    name: 'Hard Dragon Skin',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'VIT', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 722,
    name: 'Magic Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 269,
    name: 'Sour Nut',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'INT', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 721,
    name: 'Muscle Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 272,
    name: 'Tough Meat',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'STR', value: 2 },
      { stat: 'MaxMP', value: 200 },
    ]
  },
  {
    id: 619,
    name: 'Aromatic Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Natural HP Regen %', value: 10 },
      { stat: 'Natural MP Regen %', value: 10 },
      { stat: 'Aggro %', value: 30 },
    ]
  },
  {
    id: 575,
    name: 'Warrior\'s Bangle',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxHP', value: 100 },
      { stat: 'Attack MP Recovery', value: 3 },
    ]
  },
  {
    id: 557,
    name: 'Spy\'s Talisman',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'MaxMP', value: 200 },
      { stat: 'Aggro %', value: -20 },
    ]
  },
  {
    id: 548,
    name: 'Sand Veil Ring',
    category: 'accessory',
    def: 0,
    stats: [
      { stat: 'Earth resistance %', value: 5 },
      { stat: 'Evasion Recharge %', value: 1 },
      { stat: 'Aggro %', value: -30 },
    ]
  },
  {
    id: 525,
    name: 'Mistletoe Talisman',
    category: 'accessory',
    def: 6,
    stats: [
      { stat: 'MaxHP %', value: 6 },
      { stat: 'Physical Resistance %', value: 4 },
      { stat: 'Magic Resistance %', value: 4 },
      { stat: 'Neutral Resistance %', value: 2 },
    ]
  }
];

export function getGearByCategory(category: GearItem['category']): GearItem[] {
  const allGear = [...additionalGearList, ...specialGearList];
  return allGear.filter(item => item.category === category);
}

export function getAllAdditionalGear(): GearItem[] {
  return additionalGearList;
}

export function getAllSpecialGear(): GearItem[] {
  return specialGearList;
}

export function searchGear(query: string): GearItem[] {
  if (!query.trim()) return [...additionalGearList, ...specialGearList];
  const lowerQuery = query.toLowerCase();
  const allGear = [...additionalGearList, ...specialGearList];
  return allGear.filter(item => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
}
