// Crysta Database (auto-generated from Coryn Club API)
// Generated on: 2026-06-26T16:44:09.633Z
// Complete crysta data for all 5 types

export interface CrystaItem {
  id: number;
  name: string;
  type_id: number;
  type_label: string;
  stats: Array<{
    effect_id: number;
    effect_name: string;
    amount: number;
    applies_to: number;
  }>;
  meta: {
    badge: string;
    note: string;
  };
}

// Normal Crysta (Type 20) - 132 items
export const normalCrysta: CrystaItem[] = [
  {
    "id": 8452,
    "name": "AGI+9",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 9,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "Update 03/26/26",
      "note": ""
    }
  },
  {
    "id": 8412,
    "name": "Spying Eye",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 18,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "Update 02/26/26",
      "note": "Dropped by Tanti."
    }
  },
  {
    "id": 8202,
    "name": "Aralago",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 148,
        "effect_name": "Upgrade for",
        "amount": 7498,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "Update 02/26/26",
      "note": ""
    }
  },
  {
    "id": 8003,
    "name": "DEX+8",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 8,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7907,
    "name": "Remnant of Beyond",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": -250,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7752,
    "name": "HP+800",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 800,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7660,
    "name": "VIT+8",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7600,
    "name": "CSPD+160",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 160,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7581,
    "name": "MP+400",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 228,
        "effect_name": "MaxMP",
        "amount": 400,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7383,
    "name": "Accuracy+16",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 16,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7101,
    "name": "Dodge+16",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 16,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7008,
    "name": "ASPD+160",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 160,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6769,
    "name": "ASPD+140",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 140,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6751,
    "name": "Illuminitor",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": -25,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 25,
        "applies_to": 0
      },
      {
        "effect_id": 129,
        "effect_name": "Additional Melee %",
        "amount": 25,
        "applies_to": 0
      },
      {
        "effect_id": 130,
        "effect_name": "Additional Magic %",
        "amount": 25,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6682,
    "name": "DEX+7",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6616,
    "name": "INT+7",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6544,
    "name": "STR+7",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6528,
    "name": "CSPD+140",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 140,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6507,
    "name": "Gigantic Octopus",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 150,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": -4,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": -2,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 177,
        "effect_name": "Reduce Dmg (Bowling) %",
        "amount": -1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6301,
    "name": "Rampion",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": -1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6287,
    "name": "MP+350",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 350,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6117,
    "name": "AGI+7",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6026,
    "name": "Accuracy+14",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 14,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5949,
    "name": "Dodge+14",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 14,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5711,
    "name": "VIT+7",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 7,
        "effect_name": "VIT",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5678,
    "name": "HP+700",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 700,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5377,
    "name": "Panchos Kita Makura",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 95,
        "effect_name": "EXP Gain %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5244,
    "name": "CSPD+120",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 120,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5088,
    "name": "INT +6",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4968,
    "name": "MP+300",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4952,
    "name": "STR+6",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4680,
    "name": "AGI+6",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4571,
    "name": "HP+600",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 600,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4537,
    "name": "Gravicep",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": -100,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": -5,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4514,
    "name": "VIT+6",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 7,
        "effect_name": "VIT",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4448,
    "name": "Dodge+12",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 12,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4371,
    "name": "ASPD+120",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 120,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4323,
    "name": "Shawle",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 139,
        "effect_name": "Anticipate %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 140,
        "effect_name": "Guard Break %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4185,
    "name": "Radibat",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4157,
    "name": "Gerumi",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4108,
    "name": "Dex+6",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4051,
    "name": "Accuracy+12",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 12,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3795,
    "name": "Critical Rate +5",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3724,
    "name": "STR+5",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3652,
    "name": "Carbuncle",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 36,
        "effect_name": "Dodge %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 126,
        "effect_name": "Reflect %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3599,
    "name": "VIT+5",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 7,
        "effect_name": "VIT",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3524,
    "name": "Mithurna Lynx",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": -9,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3404,
    "name": "HP+500",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 500,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3363,
    "name": "Yashiro Azuki",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 95,
        "effect_name": "EXP Gain %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3339,
    "name": "Fanadon",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 170,
        "effect_name": "Reduce Dmg (Player Epicenter) %",
        "amount": -3,
        "applies_to": 0
      },
      {
        "effect_id": 171,
        "effect_name": "Reduce Dmg (Foe Epicenter) %",
        "amount": -3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3328,
    "name": "INT+5",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3207,
    "name": "DEX+5",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2962,
    "name": "ASPD+100",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2910,
    "name": "P. Avatar",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 52,
        "effect_name": "Water resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 53,
        "effect_name": "Wind resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 54,
        "effect_name": "Earth resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 55,
        "effect_name": "Light resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 56,
        "effect_name": "Dark resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 95,
        "effect_name": "EXP Gain %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2876,
    "name": "Dodge+10",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2805,
    "name": "CSPD+100",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2741,
    "name": "Accuracy+10",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2711,
    "name": "AGI+5",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2649,
    "name": "Dodge+8",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 8,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2646,
    "name": "DEX+4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2590,
    "name": "Critical Rate +4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2536,
    "name": "Odelon Machina",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 36,
        "effect_name": "Dodge %",
        "amount": -5,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": -5,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2488,
    "name": "MP+250",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 250,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2445,
    "name": "MP+200",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2401,
    "name": "INT+4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2394,
    "name": "ASPD+80",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 80,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2324,
    "name": "AGI+4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2275,
    "name": "VIT+4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 7,
        "effect_name": "VIT",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2062,
    "name": "HP+400",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 400,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1952,
    "name": "CSPD+80",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 80,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1923,
    "name": "Super Night Mushroom",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 500,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1890,
    "name": "STR+4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1840,
    "name": "Aranea",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 400,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1832,
    "name": "Accuracy+8",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 8,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1756,
    "name": "ASPD+60",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 60,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1752,
    "name": "AGI+3",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1600,
    "name": "Inzanio",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 59,
        "effect_name": "Guard Recharge %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": -1,
        "applies_to": 0
      },
      {
        "effect_id": 73,
        "effect_name": "Weapon ATK",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1594,
    "name": "HP+300",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 300,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1548,
    "name": "Critical Rate+3",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1451,
    "name": "INT+3",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1443,
    "name": "DEX+3",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1402,
    "name": "CSPD+60",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 60,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1399,
    "name": "Scrader",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 16,
        "effect_name": "Natural MP Regen %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1329,
    "name": "MP+150",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 150,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1323,
    "name": "STR+3",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1312,
    "name": "Metal Stinger",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": -1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1269,
    "name": "Megiston",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 7,
        "effect_name": "VIT",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 50,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1191,
    "name": "Dodge+6",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1164,
    "name": "Nurethoth",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": -150,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": -150,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1122,
    "name": "VIT+3",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 7,
        "effect_name": "VIT",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1096,
    "name": "HP+200",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 200,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 832,
    "name": "B.B. Goblin",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": -1,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 813,
    "name": "Masked Warrior",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -3,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": -3,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 806,
    "name": "INT+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 799,
    "name": "Accuracy+4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 632,
    "name": "Caspy",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": -6,
        "applies_to": 0
      },
      {
        "effect_id": 58,
        "effect_name": "Guard Power %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 59,
        "effect_name": "Guard Recharge %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 329,
    "name": "VIT+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 7,
        "effect_name": "VIT",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 327,
    "name": "STR+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 326,
    "name": "STR+1",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 324,
    "name": "Silver Roar",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -8,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 319,
    "name": "Ruin Golem",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 30,
        "effect_name": "MDEF %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 317,
    "name": "MP+50",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 50,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 316,
    "name": "MP+100",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 314,
    "name": "Mochelo",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 312,
    "name": "Minotaur",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 38,
        "effect_name": "ASPD %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 311,
    "name": "Mauez",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 150,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": -4,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 310,
    "name": "King Potum",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": -5,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": -5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 309,
    "name": "INT+1",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 5,
        "effect_name": "INT",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 308,
    "name": "HP+100",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 306,
    "name": "Gigant Knight",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 4,
        "effect_name": "STR %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 304,
    "name": "Gespenst",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 150,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": -1,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": -1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 301,
    "name": "Forest Wolf",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 300,
    "name": "Flare Volg",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 3,
        "effect_name": "STR",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": -4,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 298,
    "name": "Dodge+4",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 296,
    "name": "Dodge+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 295,
    "name": "DEX+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 294,
    "name": "DEX+1",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 11,
        "effect_name": "DEX",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 291,
    "name": "CSPD+40",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 40,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 290,
    "name": "CSPD+20",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 289,
    "name": "Critical Rate+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 288,
    "name": "Critical Rate+1",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 287,
    "name": "Crimsosch",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": -9,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 285,
    "name": "Brutal Dragon Decel",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -50,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 283,
    "name": "Boss Goblin",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": -4,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 282,
    "name": "Boss Colon",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 70,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 30,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 281,
    "name": "Big Coryn",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 280,
    "name": "Astol",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 28,
        "effect_name": "DEF %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 279,
    "name": "ASPD+40",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 40,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 278,
    "name": "ASPD+20",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 276,
    "name": "AGI+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 275,
    "name": "AGI+1",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 9,
        "effect_name": "AGI",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 274,
    "name": "Accuracy+2",
    "type_id": 20,
    "type_label": "[Normal Crysta]",
    "stats": [
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  }
];

// Weapon Crysta (Type 21) - 39 items
export const weaponCrysta: CrystaItem[] = [
  {
    "id": 8229,
    "name": "Stormun",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 6,
        "effect_name": "INT %",
        "amount": 5,
        "applies_to": 4
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 38,
        "effect_name": "ASPD %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 53,
        "effect_name": "Wind resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 227,
        "effect_name": "MaxHP %",
        "amount": -9,
        "applies_to": 131072
      },
      {
        "effect_id": 276,
        "effect_name": "Motion Speed %",
        "amount": 2,
        "applies_to": 131072
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7413,
    "name": "Primordial Moonlit",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -200,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 139,
        "effect_name": "Anticipate %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 140,
        "effect_name": "Guard Break %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6746,
    "name": "Xmas Princess in Black",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 4,
        "effect_name": "STR %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 6,
        "effect_name": "INT %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 9,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 9,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -50,
        "applies_to": 1
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": -6,
        "applies_to": 0
      },
      {
        "effect_id": 125,
        "effect_name": "Tumble Unavailable",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5907,
    "name": "Crimson One-Eyed Wolf",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": -16,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": -8,
        "applies_to": 0
      },
      {
        "effect_id": 44,
        "effect_name": "Critical Damage %",
        "amount": 1,
        "applies_to": 65536
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -20,
        "applies_to": 131072
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 8,
        "applies_to": 0
      },
      {
        "effect_id": 139,
        "effect_name": "Anticipate %",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5768,
    "name": "Devil Dango",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -200,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": -15,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5718,
    "name": "Arbogazella",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -28,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 14,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5695,
    "name": "Midsummer Passion",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": 25,
        "applies_to": 0
      },
      {
        "effect_id": 172,
        "effect_name": "Recoil %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5002,
    "name": "Lil Wonder Rat",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 6,
        "applies_to": 8
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4418,
    "name": "Jeandoux",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 4,
        "effect_name": "STR %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4398,
    "name": "Kuzto",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4352,
    "name": "Blancanine the White Fang",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 10,
        "effect_name": "AGI %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -12,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4296,
    "name": "Armasite",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": -15,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4188,
    "name": "Drama Clown",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3820,
    "name": "Neo Maton Sword",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -28,
        "applies_to": 0
      },
      {
        "effect_id": 176,
        "effect_name": "Reduce Dmg (Bullet) %",
        "amount": 14,
        "applies_to": 0
      },
      {
        "effect_id": 177,
        "effect_name": "Reduce Dmg (Bowling) %",
        "amount": 14,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3355,
    "name": "Pomie Chan",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 10,
        "effect_name": "AGI %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -5,
        "applies_to": 0
      },
      {
        "effect_id": 181,
        "effect_name": "Absolute Dodge %",
        "amount": 5,
        "applies_to": 2
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3264,
    "name": "Usasama the Necromancer",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -25,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 12,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 165,
        "effect_name": "Attack MP Recovery %",
        "amount": -50,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3206,
    "name": "Hero Potum",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3155,
    "name": "Megiston The Champion",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2914,
    "name": "Cursed Crysta",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 172,
        "effect_name": "Recoil %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2674,
    "name": "Zahhak Machina",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 124,
        "effect_name": "Physical Barrier",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 128,
        "effect_name": "Magic Barrier",
        "amount": 1000,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2658,
    "name": "Commander Golem",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 124,
        "effect_name": "Physical Barrier",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 129,
        "effect_name": "Additional Melee %",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2469,
    "name": "Grecia",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 59,
        "effect_name": "Guard Recharge %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 75,
        "effect_name": "Neutral Resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 110,
        "effect_name": "% stronger against Neutral",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2300,
    "name": "Evil Magic Sword",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2032,
    "name": "Imitacia",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 140,
        "effect_name": "Guard Break %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1975,
    "name": "Imitator",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 139,
        "effect_name": "Anticipate %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1921,
    "name": "Marchitar",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 36,
        "effect_name": "Dodge %",
        "amount": 15,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1904,
    "name": "Lapin The Necromancer",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 128,
        "effect_name": "Magic Barrier",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 130,
        "effect_name": "Additional Magic %",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1815,
    "name": "Zolban",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 14,
        "effect_name": "Natural HP Regen %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 16,
        "effect_name": "Natural MP Regen %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1759,
    "name": "Nightmare Potum",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -5,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1529,
    "name": "Evil Crystal Beast",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1470,
    "name": "Black Knight of Delusion",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 4,
        "effect_name": "STR %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 28,
        "effect_name": "DEF %",
        "amount": -9,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1338,
    "name": "Zega",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 400,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 52,
        "effect_name": "Water resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1183,
    "name": "Death Colon",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -2000,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1051,
    "name": "Pillar Golem",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 315,
    "name": "Moonlight Potum",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": -90,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 313,
    "name": "Miracle Potum",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 303,
    "name": "Ganglef",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 12,
        "effect_name": "DEX %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 38,
        "effect_name": "ASPD %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 299,
    "name": "Excavated Golem",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 58,
        "effect_name": "Guard Power %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 59,
        "effect_name": "Guard Recharge %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 293,
    "name": "Demon's Gate",
    "type_id": 21,
    "type_label": "[Weapon Crysta]",
    "stats": [
      {
        "effect_id": 12,
        "effect_name": "DEX %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  }
];

// Armor Crysta (Type 22) - 34 items
export const armorCrysta: CrystaItem[] = [
  {
    "id": 8511,
    "name": "Ghostfire Oni",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -100,
        "applies_to": 0
      },
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 1,
        "applies_to": 16384
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7676,
    "name": "Mulgoon's Hand",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 10000,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -100,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7522,
    "name": "Bangrudom",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 12,
        "effect_name": "DEX %",
        "amount": 5,
        "applies_to": 1
      },
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 5,
        "applies_to": 32768
      },
      {
        "effect_id": 38,
        "effect_name": "ASPD %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7422,
    "name": "Altadar",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 4,
        "effect_name": "STR %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 8,
        "effect_name": "VIT %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 11,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 11,
        "applies_to": 32768
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 11,
        "applies_to": 16384
      },
      {
        "effect_id": 233,
        "effect_name": "Stability %",
        "amount": -5,
        "applies_to": 49152
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7364,
    "name": "Aubermight",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 27,
        "effect_name": "DEF",
        "amount": 45,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 30,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6595,
    "name": "Sibylares",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -100,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 15,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5913,
    "name": "DX Fighter",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 5000,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5911,
    "name": "Dr. Leonardo",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 5000,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5417,
    "name": "Doctor Pom Pom",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5273,
    "name": "Kruztor",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 36,
        "effect_name": "Dodge %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 75,
        "effect_name": "Neutral Resistance %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5252,
    "name": "Grim Reaper Scarecrow",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -30,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -15,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5084,
    "name": "Arachnidemon",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": -400,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -400,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 8,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 8,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 4,
        "applies_to": 1
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4941,
    "name": "Phantom Wisp",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 181,
        "effect_name": "Absolute Dodge %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4872,
    "name": "Gopherga",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 3000,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 6,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4563,
    "name": "Demonic Quasar",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4528,
    "name": "Canemofish",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 52,
        "effect_name": "Water resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 141,
        "effect_name": "Barrier Cooldown %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4327,
    "name": "Evil Shadow",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1500,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": -10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4129,
    "name": "Eroded Pilz",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 30,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": -10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3799,
    "name": "Thug Golem",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3704,
    "name": "Iron Empress",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -300,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3464,
    "name": "Noeliel",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 165,
        "effect_name": "Attack MP Recovery %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3283,
    "name": "The Great Witch of Crow",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": -14,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 175,
        "effect_name": "Absolute Accuracy %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3259,
    "name": "Usakichi",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 75,
        "effect_name": "Neutral Resistance %",
        "amount": -1,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3199,
    "name": "Maton Sword",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 4,
        "effect_name": "STR %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": -1000,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2367,
    "name": "Goldoon",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2135,
    "name": "Ifrid",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 600,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 12,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1925,
    "name": "Cerabes",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1742,
    "name": "Cerberus",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1212,
    "name": "Jade Raptor",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 328,
    "name": "Tortuga",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 59,
        "effect_name": "Guard Recharge %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 302,
    "name": "Forestia",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 286,
    "name": "Colon Commander",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 150,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 50,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 284,
    "name": "Boss Roga",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 74,
        "effect_name": "Weapon ATK %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 277,
    "name": "Arcoiris",
    "type_id": 22,
    "type_label": "[Armor Crysta]",
    "stats": [
      {
        "effect_id": 14,
        "effect_name": "Natural HP Regen %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 28,
        "effect_name": "DEF %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  }
];

// Additional Crysta (Type 23) - 45 items
export const additionalCrysta: CrystaItem[] = [
  {
    "id": 8400,
    "name": "Baratok",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 7000,
        "applies_to": 0
      },
      {
        "effect_id": 74,
        "effect_name": "Weapon ATK %",
        "amount": 7,
        "applies_to": 0
      },
      {
        "effect_id": 111,
        "effect_name": "Base Stability %",
        "amount": 7,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "Update 02/26/26",
      "note": ""
    }
  },
  {
    "id": 8390,
    "name": "Mortares",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 12,
        "effect_name": "DEX %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -200,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 13,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 140,
        "effect_name": "Guard Break %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "Update 02/26/26",
      "note": ""
    }
  },
  {
    "id": 8372,
    "name": "Mycodian",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 12,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": -4,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 16,
        "applies_to": 0
      },
      {
        "effect_id": 148,
        "effect_name": "Upgrade for",
        "amount": 6163,
        "applies_to": 0
      },
      {
        "effect_id": 240,
        "effect_name": "Physical Resistance %",
        "amount": 24,
        "applies_to": 16384
      }
    ],
    "meta": {
      "badge": "White Day 2026",
      "note": "White Day 2026 event crysta.\nUpgrades from Evil Lefina."
    }
  },
  {
    "id": 8173,
    "name": "Shadow Devil Cavalier",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7904,
    "name": "Castilia",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 10,
        "applies_to": 524288
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": -900,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 12,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 5,
        "applies_to": 4
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7640,
    "name": "Jibril",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 15,
        "effect_name": "Natural MP Regen",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 16,
        "effect_name": "Natural MP Regen %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 8,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 139,
        "effect_name": "Anticipate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7507,
    "name": "Giant Pelulu",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7333,
    "name": "Falburrows",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 36,
        "effect_name": "Dodge %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 9,
        "applies_to": 16
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 9,
        "applies_to": 0
      },
      {
        "effect_id": 181,
        "effect_name": "Absolute Dodge %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6856,
    "name": "Mage Filecia",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 6,
        "effect_name": "INT %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 9,
        "applies_to": 0
      },
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 140,
        "effect_name": "Guard Break %",
        "amount": 10,
        "applies_to": 8
      },
      {
        "effect_id": 177,
        "effect_name": "Reduce Dmg (Bowling) %",
        "amount": 20,
        "applies_to": 4
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6783,
    "name": "Lunadore",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 96,
        "effect_name": "Drop Rate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6163,
    "name": "Evil Lefina",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 8,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": -4,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 12,
        "applies_to": 0
      },
      {
        "effect_id": 240,
        "effect_name": "Physical Resistance %",
        "amount": 24,
        "applies_to": 16384
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6073,
    "name": "Mieli",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 400,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 400,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6016,
    "name": "Purro",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 96,
        "effect_name": "Drop Rate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5800,
    "name": "Junior Dragon Zyvio",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 140,
        "effect_name": "Guard Break %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5330,
    "name": "Ox King",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5323,
    "name": "Lord of Nezim",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 8,
        "effect_name": "VIT %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 3000,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 3,
        "applies_to": 2
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5189,
    "name": "Bovinio",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 96,
        "effect_name": "Drop Rate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4856,
    "name": "Adaro",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 10,
        "applies_to": 16384
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4489,
    "name": "Mercy",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -15,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4357,
    "name": "Omochi",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 96,
        "effect_name": "Drop Rate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4250,
    "name": "Narumi Hina",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4249,
    "name": "Yashiro Azuki's Dad",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3741,
    "name": "Goldenia",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 2000,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -300,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3620,
    "name": "Handmade Cookie",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 12,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -15,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3607,
    "name": "Grand Pojo",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 96,
        "effect_name": "Drop Rate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3551,
    "name": "Eidenliebe",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 12,
        "applies_to": 0
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -15,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3477,
    "name": "Altoblepas",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3364,
    "name": "Yashiro Azuki's Mom",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 176,
        "effect_name": "Reduce Dmg (Bullet) %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2916,
    "name": "Gespenst II",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 30,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 400,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2842,
    "name": "G. Iconos",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 174,
        "effect_name": "Reduce Dmg (Charge) %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2550,
    "name": "Perro",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 96,
        "effect_name": "Drop Rate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2423,
    "name": "Dusk Machina",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": -10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1987,
    "name": "Corroded Knight Captain",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 27,
        "effect_name": "DEF",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 29,
        "effect_name": "MDEF",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 124,
        "effect_name": "Physical Barrier",
        "amount": 500,
        "applies_to": 0
      },
      {
        "effect_id": 128,
        "effect_name": "Magic Barrier",
        "amount": 500,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1849,
    "name": "Candela",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -200,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 500,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1779,
    "name": "Chocolate Ooze",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 500,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1649,
    "name": "Twilight Dragon",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 4,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1530,
    "name": "Grylle",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1500,
    "name": "Pumpking",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1283,
    "name": "Sunlight Potum",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -5,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -75,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 300,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1119,
    "name": "Grass Dragon Yelb",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 38,
        "effect_name": "ASPD %",
        "amount": 50,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": -10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 641,
    "name": "Ancient Empress",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 50,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": -10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 330,
    "name": "Warmonger",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 321,
    "name": "Seltirios",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -150,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 300,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 307,
    "name": "Golden Skeleton",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 300,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 305,
    "name": "Giant Boar",
    "type_id": 23,
    "type_label": "[Additional Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 50,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 50,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  }
];

// Special Crysta (Type 24) - 45 items
export const specialCrysta: CrystaItem[] = [
  {
    "id": 8309,
    "name": "Zeegard",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 46,
        "effect_name": "% stronger against Water",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 52,
        "effect_name": "Water resistance %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 8235,
    "name": "Potumotter III",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 500,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -30,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 75,
        "effect_name": "Neutral Resistance %",
        "amount": 30,
        "applies_to": 0
      },
      {
        "effect_id": 148,
        "effect_name": "Upgrade for",
        "amount": 8234,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 8234,
    "name": "Potumotter II",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 400,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -30,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 75,
        "effect_name": "Neutral Resistance %",
        "amount": 25,
        "applies_to": 0
      },
      {
        "effect_id": 148,
        "effect_name": "Upgrade for",
        "amount": 4478,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 8174,
    "name": "Olobaid",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 56,
        "effect_name": "Dark resistance %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 8136,
    "name": "Zeagrysta",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -100,
        "applies_to": 0
      },
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 5,
        "applies_to": 1
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 8131,
    "name": "Machine God Maple",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 200,
        "applies_to": 0
      },
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 240,
        "effect_name": "Physical Resistance %",
        "amount": 5,
        "applies_to": 16384
      },
      {
        "effect_id": 241,
        "effect_name": "Magic Resistance %",
        "amount": 5,
        "applies_to": 16384
      },
      {
        "effect_id": 283,
        "effect_name": "Fractional Barrier %",
        "amount": 10,
        "applies_to": 16384
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 8060,
    "name": "Black Lixi",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 40,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 10,
        "applies_to": 16384
      },
      {
        "effect_id": 141,
        "effect_name": "Barrier Cooldown %",
        "amount": 10,
        "applies_to": 32768
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7613,
    "name": "Scream Shadow",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 28,
        "effect_name": "DEF %",
        "amount": -40,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7433,
    "name": "Zodiac's Blessing",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 20,
        "effect_name": "ATK",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 22,
        "effect_name": "MATK",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 27,
        "effect_name": "DEF",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 29,
        "effect_name": "MDEF",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 95,
        "effect_name": "EXP Gain %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7362,
    "name": "Aubergine Dragon Auvio",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 500,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 5,
        "applies_to": 524288
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": -12,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 5,
        "applies_to": 524288
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 7163,
    "name": "Vodre",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 43,
        "effect_name": "Critical Damage",
        "amount": -150,
        "applies_to": 0
      },
      {
        "effect_id": 139,
        "effect_name": "Anticipate %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6977,
    "name": "Broker Goblin",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 12,
        "effect_name": "DEX %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 25,
        "applies_to": 1
      },
      {
        "effect_id": 70,
        "effect_name": "Long Range Damage %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 129,
        "effect_name": "Additional Melee %",
        "amount": 50,
        "applies_to": 65536
      },
      {
        "effect_id": 275,
        "effect_name": "Long Range Damage %",
        "amount": 5,
        "applies_to": 262144
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6956,
    "name": "Trus",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 58,
        "effect_name": "Guard Power %",
        "amount": 25,
        "applies_to": 64
      },
      {
        "effect_id": 59,
        "effect_name": "Guard Recharge %",
        "amount": 25,
        "applies_to": 64
      },
      {
        "effect_id": 140,
        "effect_name": "Guard Break %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 168,
        "effect_name": "Stun Unavailable",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6672,
    "name": "Stellar Ooze II",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 16,
        "effect_name": "Natural MP Regen %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 150,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 25,
        "effect_name": "Physical Pierce %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 104,
        "effect_name": "Revive Time %",
        "amount": 60,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 177,
        "effect_name": "Reduce Dmg (Bowling) %",
        "amount": 15,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6610,
    "name": "Ghost Forest Dark Shaman",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -300,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": -10,
        "applies_to": 1
      },
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 5,
        "applies_to": 1
      },
      {
        "effect_id": 26,
        "effect_name": "Magic Pierce %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6343,
    "name": "Wolkissa",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 8,
        "effect_name": "VIT %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 57,
        "effect_name": "Ailment Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 15,
        "applies_to": 1
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 6218,
    "name": "Ignitrus",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 45,
        "effect_name": "% stronger against Fire",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5688,
    "name": "Captain Amiya",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5479,
    "name": "Star Wizard",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 9,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": 9,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -9,
        "applies_to": 8
      },
      {
        "effect_id": 139,
        "effect_name": "Anticipate %",
        "amount": 9,
        "applies_to": 0
      },
      {
        "effect_id": 272,
        "effect_name": "Aggro %",
        "amount": 9,
        "applies_to": 1
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 5185,
    "name": "Dark Captain with B",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 3000,
        "applies_to": 0
      },
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -150,
        "applies_to": 0
      },
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 52,
        "effect_name": "Water resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 53,
        "effect_name": "Wind resistance %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 54,
        "effect_name": "Earth resistance %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4877,
    "name": "Ruzart",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4478,
    "name": "Potumotter",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 400,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -30,
        "applies_to": 0
      },
      {
        "effect_id": 75,
        "effect_name": "Neutral Resistance %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4304,
    "name": "Volgagon",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 40,
        "effect_name": "CSPD %",
        "amount": -80,
        "applies_to": 0
      },
      {
        "effect_id": 42,
        "effect_name": "Critical Rate %",
        "amount": 20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4154,
    "name": "Frenzy Viola",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 250,
        "applies_to": 0
      },
      {
        "effect_id": 129,
        "effect_name": "Additional Melee %",
        "amount": 50,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 4061,
    "name": "Grimuckus",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": 250,
        "applies_to": 0
      },
      {
        "effect_id": 130,
        "effect_name": "Additional Magic %",
        "amount": 50,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3822,
    "name": "Specter of Death",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": -20,
        "applies_to": 0
      },
      {
        "effect_id": 117,
        "effect_name": "Unsheathe Attack %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3625,
    "name": "Seele Zauga",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 31,
        "effect_name": "Physical Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 32,
        "effect_name": "Magic Resistance %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 190,
        "effect_name": "Item Cooldown",
        "amount": -1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3480,
    "name": "Felien",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 33,
        "effect_name": "Accuracy",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 175,
        "effect_name": "Absolute Accuracy %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3343,
    "name": "Crystal Titan",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 1000,
        "applies_to": 0
      },
      {
        "effect_id": 18,
        "effect_name": "MaxHP %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 127,
        "effect_name": "Fractional Barrier %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3158,
    "name": "Titeres",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 35,
        "effect_name": "Dodge",
        "amount": 20,
        "applies_to": 0
      },
      {
        "effect_id": 36,
        "effect_name": "Dodge %",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 10,
        "applies_to": 0
      },
      {
        "effect_id": 181,
        "effect_name": "Absolute Dodge %",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 3135,
    "name": "Venena",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 500,
        "applies_to": 0
      },
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 24,
        "effect_name": "Stability %",
        "amount": 2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2854,
    "name": "Choiyaki Mentai",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": 300,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": -10,
        "applies_to": 0
      },
      {
        "effect_id": 51,
        "effect_name": "Fire resistance %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 69,
        "effect_name": "Short Range Damage %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 173,
        "effect_name": "Reduce Dmg (Floor) %",
        "amount": -20,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 2421,
    "name": "Dragon Witch",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 44,
        "effect_name": "Critical Damage %",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 165,
        "effect_name": "Attack MP Recovery %",
        "amount": -100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1901,
    "name": "Bexiz",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 19,
        "effect_name": "MaxMP",
        "amount": -100,
        "applies_to": 0
      },
      {
        "effect_id": 34,
        "effect_name": "Accuracy %",
        "amount": 15,
        "applies_to": 0
      },
      {
        "effect_id": 41,
        "effect_name": "Critical Rate",
        "amount": 5,
        "applies_to": 0
      },
      {
        "effect_id": 74,
        "effect_name": "Weapon ATK %",
        "amount": 10,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1595,
    "name": "Don Yeti",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 20,
        "effect_name": "ATK",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 37,
        "effect_name": "ASPD",
        "amount": -1000,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1461,
    "name": "Granny",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 22,
        "effect_name": "MATK",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 39,
        "effect_name": "CSPD",
        "amount": -1000,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1319,
    "name": "Goovua",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 10,
        "effect_name": "AGI %",
        "amount": 3,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 6,
        "applies_to": 0
      },
      {
        "effect_id": 116,
        "effect_name": "Unsheathe Attack",
        "amount": 100,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1078,
    "name": "Viscum",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 17,
        "effect_name": "MaxHP",
        "amount": 100,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 1052,
    "name": "Shining Gentleman",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 44,
        "effect_name": "Critical Damage %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 3,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 858,
    "name": "Golden Potum",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 96,
        "effect_name": "Drop Rate %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 830,
    "name": "Violaccoon",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": -6,
        "applies_to": 0
      },
      {
        "effect_id": 60,
        "effect_name": "Evasion Recharge %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 8,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 325,
    "name": "Stone Mercenary",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": -6,
        "applies_to": 0
      },
      {
        "effect_id": 59,
        "effect_name": "Guard Recharge %",
        "amount": 4,
        "applies_to": 0
      },
      {
        "effect_id": 61,
        "effect_name": "Aggro %",
        "amount": 8,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 318,
    "name": "Ooze",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 2,
        "applies_to": 0
      },
      {
        "effect_id": 28,
        "effect_name": "DEF %",
        "amount": -2,
        "applies_to": 0
      },
      {
        "effect_id": 30,
        "effect_name": "MDEF %",
        "amount": -2,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 297,
    "name": "Eerie Crystal",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 68,
        "effect_name": "Attack MP Recovery",
        "amount": 5,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  },
  {
    "id": 292,
    "name": "Dark Mushroom",
    "type_id": 24,
    "type_label": "[Special Crysta]",
    "stats": [
      {
        "effect_id": 21,
        "effect_name": "ATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 23,
        "effect_name": "MATK %",
        "amount": 1,
        "applies_to": 0
      },
      {
        "effect_id": 71,
        "effect_name": "Motion Speed %",
        "amount": 1,
        "applies_to": 0
      }
    ],
    "meta": {
      "badge": "",
      "note": ""
    }
  }
];

// Combine all crysta
export const allCrysta: CrystaItem[] = [
  ...normalCrysta,
  ...weaponCrysta,
  ...armorCrysta,
  ...additionalCrysta,
  ...specialCrysta
];

/**
 * Search crysta by name or type
 */
export function searchCrysta(query: string): CrystaItem[] {
  if (!query.trim()) return allCrysta;
  
  const lowerQuery = query.toLowerCase();
  return allCrysta.filter(crysta => 
    crysta.name.toLowerCase().includes(lowerQuery) ||
    crysta.type_label.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Filter crysta by type_id
 */
export function filterCrystaByType(typeId: number): CrystaItem[] {
  return allCrysta.filter(crysta => crysta.type_id === typeId);
}

/**
 * Get crysta by ID
 */
export function getCrystaById(id: number): CrystaItem | undefined {
  return allCrysta.find(crysta => crysta.id === id);
}

/**
 * Get available crysta types for equipment
 */
export function getCrystaForEquipment(equipmentType: 'weapon' | 'armor' | 'additional' | 'special'): CrystaItem[] {
  switch (equipmentType) {
    case 'weapon':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 21); // Normal + Weapon
    case 'armor':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 22); // Normal + Armor
    case 'additional':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 23); // Normal + Additional
    case 'special':
      return allCrysta.filter(c => c.type_id === 20 || c.type_id === 24); // Normal + Special
    default:
      return allCrysta;
  }
}

/**
 * Get unique type categories
 */
export function getCrystaTypes(): Array<{ id: number; label: string; count: number }> {
  return [
    { id: 20, label: "Normal Crysta", count: normalCrysta.length },
    { id: 21, label: "Weapon Crysta", count: weaponCrysta.length },
    { id: 22, label: "Armor Crysta", count: armorCrysta.length },
    { id: 23, label: "Additional Crysta", count: additionalCrysta.length },
    { id: 24, label: "Special Crysta", count: specialCrysta.length }
  ];
}
