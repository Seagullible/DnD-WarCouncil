var mockOpen5eAPIResponse = {
    "slug": "goblin",
    "name": "Goblin",
    "size": "Small",
    "type": "humanoid",
    "subtype": "goblinoid",
    "group": null,
    "alignment": "neutral evil",
    "armor_class": 15,
    "armor_desc": "leather armor, shield",
    "hit_points": 7,
    "hit_dice": "2d6",
    "speed": {
        "walk": 30
    },
    "strength": 8,
    "dexterity": 14,
    "constitution": 10,
    "intelligence": 10,
    "wisdom": 8,
    "charisma": 8,
    "strength_save": null,
    "dexterity_save": null,
    "constitution_save": null,
    "intelligence_save": null,
    "wisdom_save": null,
    "charisma_save": null,
    "perception": null,
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "darkvision 60 ft., passive Perception 9",
    "languages": "Common, Goblin",
    "challenge_rating": "1/4",
    "actions": [
        {
            "name": "Scimitar",
            "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
            "attack_bonus": 4,
            "damage_dice": "1d6",
            "damage_bonus": 2
        },
        {
            "name": "Shortbow",
            "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
            "attack_bonus": 4,
            "damage_dice": "1d6",
            "damage_bonus": 2
        }
    ],
    "reactions": "",
    "legendary_actions": "",
    "special_abilities": [
        {
            "name": "Nimble Escape",
            "desc": "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
        }
    ],
    "document_slug": "systems-reference-document"
}

module.exports = mockOpen5eAPIResponse;