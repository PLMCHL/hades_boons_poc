// This is not ideal, but want to keep being able to run this locally without a server, so no loading json directly yet.
var boonsData = [
  {
    "name": "Heartbreak Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e3/Heartbreak_Strike.png",
    "description": "Your Attack deals more damage and inflicts Weak.",
    "notes": "Tier 1\nWeak duration: 3 Sec.",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Heartbreak Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e9/Heartbreak_Flourish.png",
    "description": "Your Special deals more damage and inflicts Weak.",
    "notes": "Tier 1\nWeak Duration: 3 Sec.",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Crush Shot",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/aa/Crush_Shot.png",
    "description": "Your Cast is a wide, short-range blast that inflicts Weak.",
    "notes": "Tier 1\nRange: 300\nWeak Duration: 3 Sec.\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Passion Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/aa/Crush_Shot.png",
    "description": "Your Cast damages foes around you and inflicts Weak.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Passion Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e0/Passion_Dash.png",
    "description": "Your Dash inflicts damage where you end up, inflicting Weak.",
    "notes": "Tier 1\nWeak Duration: 3 Sec.\nDamage Radius: 180",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Aphrodite's Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f0/Aphrodite%27s_Aid.png",
    "description": "Your Call fires a seeking projectile that inflicts Charm.",
    "notes": "Tier 1\nThe charm projectile pierces foes.",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Dying Lament",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/dd/Dying_Lament.png",
    "description": "When foes are slain, they damage nearby foes and inflict Weak.",
    "notes": "Tier 1\nDamage Radius: 200",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Wave of Despair",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/11/Wave_of_Despair.png",
    "description": "After you take damage, damage nearby foes and inflict Weak.",
    "notes": "Tier 1\nDamage Radius: 700",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Different League",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4b/Different_League.png",
    "description": "Resist some damage from nearby foes' attacks.",
    "notes": "Tier 1\nProximity Threshold: 400",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Life Affirmation",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fa/Life_Affirmation.png",
    "description": "Any  or  chamber rewards are worth more.",
    "notes": "Tier 1\nThis boon cannot be upgraded via poms.",
    "tier": "1",
    "god": "Aphrodite"
  },
  {
    "name": "Empty Inside",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c9/Empty_Inside.png",
    "description": "Your Weak effects have a longer duration.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Aphrodite"
  },
  {
    "name": "Sweet Surrender",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a6/Sweet_Surrender.png",
    "description": "Weak-afflicted foes are also more susceptible to damage.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Aphrodite"
  },
  {
    "name": "Broken Resolve",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1b/Broken_Resolve.png",
    "description": "Your Weak effects are more potent.",
    "notes": "Tier 2\nThis boon cannot be upgraded via poms.",
    "tier": "2",
    "god": "Aphrodite"
  },
  {
    "name": "Blown Kiss",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/dc/Blown_Kiss.png",
    "description": "Your Cast shoots farther and is stronger against undamaged foes.",
    "notes": "Tier 2\nCast range is doubled and is also 30% wider.",
    "tier": "2",
    "god": "Aphrodite"
  },
  {
    "name": "Unhealthy Fixation",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/16/Unhealthy_Fixation.png",
    "description": "Your Weak effects also have a 15% chance to Charm foes.\nCharm Duration: 4 Sec.",
    "notes": "Tier 3",
    "tier": "3",
    "god": "Aphrodite"
  },
  {
    "name": "Curse of Agony",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/83/Curse_of_Agony.png",
    "description": "Your Attack inflicts Doom.",
    "notes": "Tier 1\nCurse Delay: 1.1 Sec.",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Curse of Pain",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Curse_of_Pain.png",
    "description": "Your Special inflicts Doom.",
    "notes": "Tier 1\nCurse Delay: 1.1 Sec.",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Slicing Shot",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Slicing_Shot.png",
    "description": "Your Cast sends a Blade Rift hurling ahead.",
    "notes": "Tier 1\nDuration: 4 Sec.\nDamage Interval: 0.1 Sec.\nDamage Radius: 150\nSpeed: 250\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Slicing Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Slicing_Shot.png",
    "description": "Your Cast sends a large Blade Rift hurling ahead for a brief time.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Blade Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/58/Blade_Dash.png",
    "description": "Your Dash creates a Blade Rift where you started.",
    "notes": "Tier 1\nDuration: 0.7 Sec.\nDamage Interval: 0.1 Sec.\nDamage Radius: 150",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Ares' Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/63/Ares%27_Aid.png",
    "description": "Your Call turns you into an Impervious Blade Rift for 1.2 Sec.",
    "notes": "Tier 1\nWrath Cost: 50\nMax Gauge Bonus 6 Sec",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Curse of Vengeance",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/04/Curse_of_Vengeance.png",
    "description": "After you take damage, inflict Doom on surrounding foes.",
    "notes": "Tier 1\nEffect Radius: 450\nCurse Delay: 1.1 Sec.",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Urge to Kill",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/25/Urge_to_Kill.png",
    "description": "Your Attack and Cast deal more damage.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Battle Rage",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a1/Battle_Rage.png",
    "description": "After slaying a foe, your next Attack or Special deals more damage.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Blood Frenzy",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/66/Blood_Frenzy.png",
    "description": "After using Death Defiance, deal more damage that encounter.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Ares"
  },
  {
    "name": "Black Metal",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0a/Black_Metal.png",
    "description": "Your Blade Rift powers deal damage in a wider area.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Ares"
  },
  {
    "name": "Engulfing Vortex",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a3/Engulfing_Vortex.png",
    "description": "Your Blade Rift effects last longer and pull foes in.",
    "notes": "Tier 2\nThis boon cannot be upgraded via poms.",
    "tier": "2",
    "god": "Ares"
  },
  {
    "name": "Dire Misfortune",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3b/Dire_Misfortune.png",
    "description": "Your Doom effects deal more damage when applied multiple times.",
    "notes": "Tier 2\nThis boon cannot be upgraded via poms.",
    "tier": "2",
    "god": "Ares"
  },
  {
    "name": "Impending Doom",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/63/Impending_Doom.png",
    "description": "Your Doom effects deal more damage, after +0.5 Sec.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Ares"
  },
  {
    "name": "Vicious Cycle",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/92/Vicious_Cycle.png",
    "description": "Your Blade Rift effects deal more damage for each consecutive hit.\nDamage Increase per Hit: 2",
    "notes": "Tier 3",
    "tier": "3",
    "god": "Ares"
  },
  {
    "name": "Deadly Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2a/Deadly_Strike.png",
    "description": "Your Attack is stronger, with +15% chance to deal Critical damage.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Artemis"
  },
  {
    "name": "Deadly Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f6/Deadly_Flourish.png",
    "description": "Your Special is stronger, with +20% chance to deal Critical Damage.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Artemis"
  },
  {
    "name": "True Shot",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/35/True_Shot.png",
    "description": "Your Cast seeks foes, with a 10% chance to deal Critical damage.",
    "notes": "Tier 1\nUnblockable by shield-bearing foes\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Artemis"
  },
  {
    "name": "Hunter's Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/35/True_Shot.png",
    "description": "Your Cast damages foes around you, with a 10% Critical chance.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Artemis"
  },
  {
    "name": "Hunter Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/92/Hunter_Dash.png",
    "description": "Your Dash-Strike deals more damage.",
    "notes": "Tier 1\nCannot be combined with Aspect of Lucifer",
    "tier": "1",
    "god": "Artemis"
  },
  {
    "name": "Artemis' Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2b/Artemis%27_Aid.png",
    "description": "Your Call fires a seeking arrow with +35% Critical chance.",
    "notes": "Tier 1\nUnblockable by shield-bearing foes.\nCosts 1/5th of the God Gauge per use (while other Gods' Aids cost 1/4th)\nMax Gauge Bonus - Arrows Fired\u00a0: 10",
    "tier": "1",
    "god": "Artemis"
  },
  {
    "name": "Pressure Points",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b0/Pressure_Points.png",
    "description": "Any damage you deal has a chance to be Critical.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Artemis"
  },
  {
    "name": "Exit Wounds",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d1/Exit_Wounds.png",
    "description": "Your foes take damage when your  stuck in them is dislodged.",
    "notes": "Tier 2\nCannot be combined with Aspect of Beowulf\nCannot be combined with Crystal Beam\nCannot be combined with Slicing Shot\nCannot be combined with Trippy Shot",
    "tier": "2",
    "god": "Artemis"
  },
  {
    "name": "Hide Breaker",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0a/Hide_Breaker.png",
    "description": "Your Critical effects deal even more damage to Armor.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Artemis"
  },
  {
    "name": "Clean Kill",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/94/Clean_Kill.png",
    "description": "Your Critical effects deal even more damage.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Artemis"
  },
  {
    "name": "Hunter Instinct",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Hunter_Instinct.png",
    "description": "Your God Gauge charges faster when you deal Critical damage.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Artemis"
  },
  {
    "name": "Hunter's Mark",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/bd/Hunter%27s_Mark.png",
    "description": "After you deal Critical damage to a foe, a foe near it is Marked.",
    "notes": "Tier 2\nRange: 1200\n'Marked' effect expires after taking Critical damage.",
    "tier": "2",
    "god": "Artemis"
  },
  {
    "name": "Support Fire",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e2/Support_Fire.png",
    "description": "After you Cast, or hit with an Attack or Special, fire a seeking arrow.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Artemis"
  },
  {
    "name": "Fully Loaded",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8b/Fully_Loaded.png",
    "description": "Gain extra  for your Cast.\nMax Ammo: +2  ",
    "notes": "Tier 3",
    "tier": "3",
    "god": "Artemis"
  },
  {
    "name": "Divine Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e6/Divine_Strike.png",
    "description": "Your Attack is stronger, and can Deflect.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Divine Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ea/Divine_Flourish.png",
    "description": "Your Special is stronger, and can Deflect.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Phalanx Shot",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Phalanx_Shot.png",
    "description": "Your Cast damages foes in a small area, and can Deflect.",
    "notes": "Tier 1\nDamage Radius: 250\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Phalanx Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Phalanx_Shot.png",
    "description": "Your Cast damages foes around you, and can Deflect.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Divine Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/66/Divine_Dash.png",
    "description": "Your Dash deals damage and can Deflect.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Athena's Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/91/Athena%27s_Aid.png",
    "description": "Your Call briefly makes you Invulnerable and Deflect all attacks.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Holy Shield",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/17/Holy_Shield.png",
    "description": "After you take damage, damage nearby foes and briefly Deflect.",
    "notes": "Tier 1\nDamage Radius: 225",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Bronze Skin",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c6/Bronze_Skin.png",
    "description": "Resist damage from foes' attacks.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Sure Footing",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/20/Sure_Footing.png",
    "description": "Resist damage from Traps.",
    "notes": "Tier 1\nAllows the player to walk in Asphodel's magma without taking damage for a short amount of time.\nDoes not protect against puddles of magma created by fireballs.\nThis boon cannot be upgraded via poms.",
    "tier": "1",
    "god": "Athena"
  },
  {
    "name": "Proud Bearing",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2e/Proud_Bearing.png",
    "description": "You begin each Encounter with your God Gauge partly full.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Athena"
  },
  {
    "name": "Blinding Flash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/89/Blinding_Flash.png",
    "description": "Your abilities that can Deflect also make foes Exposed for 5 Sec.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Athena"
  },
  {
    "name": "Brilliant Riposte",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e3/Brilliant_Riposte.png",
    "description": "When you Deflect attacks, they deal more damage.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Athena"
  },
  {
    "name": "Deathless Stand",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f1/Deathless_Stand.png",
    "description": "Death Defiance makes you Impervious longer. Replenish 1 charge now.",
    "notes": "Tier 2\nUnsellable",
    "tier": "2",
    "god": "Athena"
  },
  {
    "name": "Last Stand",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/41/Last_Stand.png",
    "description": "Death Defiance restores more  than usual. Replenish 1 charge now.",
    "notes": "Tier 2\nUnsellable",
    "tier": "2",
    "god": "Athena"
  },
  {
    "name": "Divine Protection",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4f/Divine_Protection.png",
    "description": "You have a barrier that negates incoming damage.\nBarrier Cooldown: 20 Sec.",
    "notes": "Tier 3\nAttacks that are successfully blocked do not remove the barrier.",
    "tier": "3",
    "god": "Athena"
  },
  {
    "name": "Frost Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/65/Frost_Strike.png",
    "description": "Your Attack is stronger and inflicts Chill.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Frost Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6d/Frost_Flourish.png",
    "description": "Your Special is stronger and inflicts Chill.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Crystal Beam",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/46/Crystal_Beam.png",
    "description": "Your Cast drops a crystal that fires a beam straight ahead for 5 sec.",
    "notes": "Tier 1\nBeam slowly alters trajectory to hit nearest enemy.\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Icy Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/46/Crystal_Beam.png",
    "description": "Your Cast damages foes around you and inflicts Chill.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Mistral Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d2/Mistral_Dash.png",
    "description": "Your Dash shoots a gust ahead that inflicts Chill.",
    "notes": "Tier 1\nGust travels in the same direction you are facing.\nRange: 300",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Demeter's Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/35/Demeter%27s_Aid.png",
    "description": "Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill.",
    "notes": "Tier 1\nGreater call bonus: increases duration to 15 Sec",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Frozen Touch",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Frozen_Touch.png",
    "description": "After you take damage, damage and completely Chill your foe.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Rare Crop",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/10/Rare_Crop.png",
    "description": "Your Boons become Common, then gain Rarity every 3 Encounter(s).",
    "notes": "Tier 1\nUnsellable\nOnce taken, shows which Boons are being cultivated as part of the Boon Description.\nIf Zagreus loses the Boon that is being cultivated (via purging or exchange), the Rare Crop effect is essentially lost.\nIf taken before the 4th zone, Temple of Styx, each small room before the reward counts as one encounter.",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Ravenous Will",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0d/Ravenous_Will.png",
    "description": "While you have no , take 10% less damage and deal more.",
    "notes": "Tier 1\nThis boon cannot be upgraded via poms.",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Nourished Soul",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c0/Nourished_Soul.png",
    "description": "Any Health effects are more potent. Restore +30% now.",
    "notes": "Tier 1\nUnsellable",
    "tier": "1",
    "god": "Demeter"
  },
  {
    "name": "Snow Burst",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/24/Snow_Burst.png",
    "description": "Whenever you Cast, damage nearby foes and inflict Chill.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Demeter"
  },
  {
    "name": "Arctic Blast",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/30/Arctic_Blast.png",
    "description": "Applying 10 stacks of Chill causes a blast, clearing the effect.",
    "notes": "Tier 2\nThis boon cannot be upgraded via poms.",
    "tier": "2",
    "god": "Demeter"
  },
  {
    "name": "Killing Freeze",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/41/Killing_Freeze.png",
    "description": "Applying Chill to all enemies causes them to Slow and Decay.",
    "notes": "Tier 2\nThis boon cannot be upgraded via poms.",
    "tier": "2",
    "god": "Demeter"
  },
  {
    "name": "Glacial Glare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/83/Glacial_Glare.png",
    "description": "Your Cast fires longer and inflicts Chill.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Demeter"
  },
  {
    "name": "Winter Harvest",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/50/Winter_Harvest.png",
    "description": "Chill-affected foes shatter at 10% hp, inflicting Chill nearby.\nShatter Area Damage: 50",
    "notes": "Tier 3",
    "tier": "3",
    "god": "Demeter"
  },
  {
    "name": "Drunken Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/80/Drunken_Strike.png",
    "description": "Your Attack inflicts Hangover.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Drunken Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/46/Drunken_Flourish.png",
    "description": "Your Special inflicts Hangover.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Trippy Shot",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Trippy_Shot.png",
    "description": "Your Cast lobs a projectile that bursts into Festive Fog.",
    "notes": "Tier 1\nDuration: 5 Sec.\nStun Frequency: 0.25 Sec.\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Trippy Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Trippy_Shot.png",
    "description": "Your Cast damages foes around you, leaving behind Festive Fog.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Drunken Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e2/Drunken_Dash.png",
    "description": "Your Dash inflicts foes near you with Hangover.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Dionysus' Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Dionysus%27_Aid.png",
    "description": "Your Call inflicts Hangover to foes all around you for 1.5 Sec.",
    "notes": "Tier 1\nEffect Range: 600\nMax Gauge Bonus: 9 Sec. Duration",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "After Party",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f3/After_Party.png",
    "description": "If your  is low after Encounters, restore to the threshold.",
    "notes": "Tier 1\nLife Threshold value reduced by Lasting Consequences.\nThis boon cannot be upgraded via poms.\nHeroic Rarity only obtainable with Ambrosia Delight.",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Positive Outlook",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/bd/Positive_Outlook.png",
    "description": "Take less damage while at 40%  or below.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Premium Vintage",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3c/Premium_Vintage.png",
    "description": "Gain  when you pick up Nectar. Receive 1 Nectar now.",
    "notes": "Tier 1\nUnsellable",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Strong Drink",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b3/Strong_Drink.png",
    "description": "Using a Fountain restores all  and gives you bonus damage.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Dionysus"
  },
  {
    "name": "Bad Influence",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8a/Bad_Influence.png",
    "description": "Deal more damage while 3 foes are Hangover-afflicted.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Dionysus"
  },
  {
    "name": "Numbing Sensation",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/41/Numbing_Sensation.png",
    "description": "Your Hangover effects also make foes move slower.",
    "notes": "Tier 2\nSlow Duration: 4 Sec.\nThe rarity modifier used is different from other tier 2 boons.",
    "tier": "2",
    "god": "Dionysus"
  },
  {
    "name": "Peer Pressure",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4a/Peer_Pressure.png",
    "description": "Hangover-afflicted foes contaminate other nearby foes every 4 Sec.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Dionysus"
  },
  {
    "name": "High Tolerance",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/91/High_Tolerance.png",
    "description": "Take less damage while standing in Festive Fog.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Dionysus"
  },
  {
    "name": "Black Out",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/ff/Black_Out.png",
    "description": "Hangover-afflicted foes take bonus damage in Festive Fog.\nFog Combo Damage: +60%",
    "notes": "Tier 3",
    "tier": "3",
    "god": "Dionysus"
  },
  {
    "name": "Swift Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/95/Swift_Strike.png",
    "description": "Your Attack is +X% faster.",
    "notes": "Tier 1\nWorks in decreasing weapon attack charge time by X%",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Swift Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d5/Swift_Flourish.png",
    "description": "Your Special is +X% faster.",
    "notes": "Tier 1\nWorks in decreasing weapon special charge time by X%",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Flurry Cast",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/43/Flurry_Cast.png",
    "description": "Your Cast is +X%  faster and fully automatic.",
    "notes": "Tier 1\nCannot be combined with Aspect of Beowulf\nCannot be combined with Aspect of Hera\nRequires the Infernal Soul Mirror Ability",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Quick Favor",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Quick_Favor.png",
    "description": "Your Call charges up automatically.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Hyper Sprint",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/be/Hyper_Sprint.png",
    "description": "For X seconds after you Dash, become Sturdy and run +100% faster.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Greater Haste",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/5d/Greater_Haste.png",
    "description": "You move X% faster.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Quick Recovery",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/7b/Quick_Recovery.png",
    "description": "After you take damage, quickly Dash to recover up to X%  lost.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Greater Evasion",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3d/Greater_Evasion.png",
    "description": "You have +X% chance to Dodge.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Greatest Reflex",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f8/Greatest_Reflex.png",
    "description": "You can Dash +X more time(s) in a row.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Second Wind",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/62/Second_Wind.png",
    "description": "After using Call, gain Dodge chance and move speed for 6 Sec.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Quick Reload",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Quick_Reload.png",
    "description": "Foes drop  stuck in them faster.",
    "notes": "Tier 1\nCannot be combined with Aspect of Beowulf\nCannot be combined with Crystal Beam\nCannot be combined with Curse of Drowning\nCannot be combined with Slicing Shot\nCannot be combined with Trippy shot\nRequires the Infernal Soul Mirror Ability",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Side Hustle",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/ce/Side_Hustle.png",
    "description": "Each time you enter a Chamber, gain a bit wealth.",
    "notes": "Tier 1\nNot affected by boons that modify wealth gain",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Rush Delivery",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6e/Rush_Delivery.png",
    "description": "You deal bonus damage based on any bonus move speed.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Auto Reload",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Quick_Reload.png",
    "description": "You regenerate  faster.",
    "notes": "Tier 1\nRequires the Stygian Soul Mirror Ability",
    "tier": "1",
    "god": "Hermes"
  },
  {
    "name": "Greater Recall",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/14/Greater_Recall.png",
    "description": "Your  automatically return to you.",
    "notes": "Tier 3\nRequires the Infernal Soul Mirror Ability",
    "tier": "3",
    "god": "Hermes"
  },
  {
    "name": "Bad News",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/43/Flurry_Cast.png",
    "description": "Your cast deals more damage to foes without  on them.\nFirst shot damage: +50%",
    "notes": "Tier 3. \nRequires the Stygian Soul Mirror Ability",
    "tier": "3",
    "god": "Hermes"
  },
  {
    "name": "Tempest Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b2/Tempest_Strike.png",
    "description": "Your Attack deals more damage and knocks foes away.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Tempest Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c7/Tempest_Flourish.png",
    "description": "Your Special deals more damage and knocks foes away.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Flood Shot",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/17/Flood_Shot.png",
    "description": "Your Cast damages foes in an area and knocks them away.",
    "notes": "Tier 1\nDamage Radius: 500\nImpact Velocity: 2500\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Flood Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/17/Flood_Shot.png",
    "description": "Your Cast damages foes around you and knocks them away.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Tidal Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c8/Tidal_Dash.png",
    "description": "Your Dash damages foes in an area and knocks them away.",
    "notes": "Tier 1\nDamage Radius: 300\nImpact Velocity: 2500\nSometimes stuns foes on impact.",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Poseidon's Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ea/Poseidon%27s_Aid.png",
    "description": "Your Call makes you surge into foes while Impervious for 1.2 Sec.",
    "notes": "Tier 1\nMax Gauge Bonus: 7.2 Sec. Duration\nImpact Velocity: 3500",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Typhoon's Fury",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3b/Typhoon%27s_Fury.png",
    "description": "You deal more damage when slamming foes into barriers.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Hydraulic Might",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b4/Hydraulic_Might.png",
    "description": "Your Attack and Special are stronger the first 10 Sec. in Encounter(s).",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Ocean's Bounty",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a7/Ocean%27s_Bounty.png",
    "description": "Any ,  or  chamber rewards are worth more.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Sunken Treasure",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fa/Sunken_Treasure.png",
    "description": "Gain an assortment of , ,  and .",
    "notes": "Tier 1\nConsumable",
    "tier": "1",
    "god": "Poseidon"
  },
  {
    "name": "Razor Shoals",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6a/Razor_Shoals.png",
    "description": "Using knock-away effects also Rupture foes.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Poseidon"
  },
  {
    "name": "Boiling Point",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b5/Boiling_Point.png",
    "description": "Your God Gauge charges faster when you take damage.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Poseidon"
  },
  {
    "name": "Breaking Wave",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/84/Breaking_Wave.png",
    "description": "Slamming foes into walls or corners creates a watery blast in the area.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Poseidon"
  },
  {
    "name": "Wave Pounding",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e3/Wave_Pounding.png",
    "description": "Your boons with Knock-Away effects deal bonus damage to bosses.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Poseidon"
  },
  {
    "name": "Rip Current",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/14/Rip_Current.png",
    "description": "Your Call pulls in foes and the effect lasts longer.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Poseidon"
  },
  {
    "name": "Huge Catch",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/cc/Huge_Catch.png",
    "description": "You have a greater chance to find Fishing Point in each Chamber.",
    "notes": "Tier 3\nFish Spawn Chance: +20%\nThis boon also removes the Chambers Since Last Fishing Point spawn requirement.\nYour first encounter with this boon will be scripted to appear in the first chamber as the only choice, ignoring prerequisites. This happens only once.",
    "tier": "3",
    "god": "Poseidon"
  },
  {
    "name": "Second Wave",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/18/Second_Wave.png",
    "description": "Your knock-away effects shove foes a second time after the first.",
    "notes": "Tier 3\nSecond Knockback Delay: 0.7 Sec.",
    "tier": "3",
    "god": "Poseidon"
  },
  {
    "name": "Lightning Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f6/Lightning_Strike.png",
    "description": "Your Attack emits chain-lightning when you damage a foe.",
    "notes": "Tier 1\nBounces: 4\nBounce Range: 520\nDeals reduced damage per bounce.",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Thunder Flourish",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/ad/Thunder_Flourish.png",
    "description": "Your Special causes a lightning bolt to strike nearby foes.",
    "notes": "Has internal cooldown of .2 per target. (Bolt only triggers, at most, 5 times per second per enemy)\nTier 1\n\nDamage Radius: 200",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Electric Shot",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/01/Electric_Shot.png",
    "description": "Your Cast is a burst of chain-lightning that bounces between foes.",
    "notes": "Tier 1\nBounces: 5\nBounce Range: 720\nCannot be combined with Aspect of Beowulf",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Thunder Flare",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/01/Electric_Shot.png",
    "description": "Your Cast causes a lightning bolt to strike nearby foes.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Thunder Dash",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b4/Thunder_Dash.png",
    "description": "Your Dash causes a lightning bolt to strike nearby foes.",
    "notes": "Tier 1\nRange: 500\nDamage Radius: 200",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Zeus' Aid",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ec/Zeus%27_Aid.png",
    "description": "Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.",
    "notes": "Tier 1\nMax Gauge Bonus: 9 Sec. Duration",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Heaven's Vengeance",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c5/Heaven%27s_Vengeance.png",
    "description": "After you take damage, your foe is struck by lightning.",
    "notes": "Tier 1\nDamage Radius: 120",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Lightning Reflexes",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/25/Lightning_Reflexes.png",
    "description": "After you Dash just before getting hit, a bolt strikes a nearby foes.",
    "notes": "Tier 1",
    "tier": "1",
    "god": "Zeus"
  },
  {
    "name": "Storm Lightning",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6b/Storm_Lightning.png",
    "description": "Your chain-lightning effects bounce more times before expiring.",
    "notes": "Tier 2\nElectric Shot gains 3, 6 or 9 jumps from this boon instead.",
    "tier": "2",
    "god": "Zeus"
  },
  {
    "name": "High Voltage",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d9/High_Voltage.png",
    "description": "Your lightning bolt effects deal damage in a larger area.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Zeus"
  },
  {
    "name": "Double Strike",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/65/Double_Strike.png",
    "description": "Your lightning bolt effects have a chance to strike twice.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Zeus"
  },
  {
    "name": "Static Discharge",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Static_Discharge.png",
    "description": "Your lightning effects also make foes Jolted.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Zeus"
  },
  {
    "name": "Clouded Judgment",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/47/Clouded_Judgment.png",
    "description": "Your God Gauge charges faster when you deal or take damage.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Zeus"
  },
  {
    "name": "Billowing Strength",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3d/Billowing_Strength.png",
    "description": "After using Call, you deal more damage for 15 Sec.",
    "notes": "Tier 2",
    "tier": "2",
    "god": "Zeus"
  },
  {
    "name": "Splitting Bolt",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/58/Splitting_Bolt.png",
    "description": "All your lightning effects create an additional burst.\nLightning Damage: 40",
    "notes": "Tier 3\nThe additional burst is a slow moving spark.\nSpark Speed: 500\nBounces: 5\nBounce Range: 520",
    "tier": "3",
    "god": "Zeus"
  }
];