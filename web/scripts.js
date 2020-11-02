$( document ).ready(function() {var listItems = [
  {
    "description": "Your Attack is stronger, with +15% chance to deal Critical damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2a/Deadly_Strike.png",
    "name": "Deadly Strike",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Artemis"
  },
  {
    "description": "Your Special is stronger, with +20% chance to deal Critical Damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f6/Deadly_Flourish.png",
    "name": "Deadly Flourish",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Artemis"
  },
  {
    "description": "Your Cast seeks foes, with a 10% chance to deal Critical damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/35/True_Shot.png",
    "name": "True Shot",
    "notes": "Tier 1 Unblockable by shield-bearing foes Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Artemis"
  },
  {
    "description": "Your Cast damages foes around you, with a 10% Critical chance.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/35/True_Shot.png",
    "name": "Hunter's Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Artemis"
  },
  {
    "description": "Your Dash-Strike deals more damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/92/Hunter_Dash.png",
    "name": "Hunter Dash",
    "notes": "Tier 1 Cannot be combined with Aspect of Lucifer",
    "prerequisites": "None",
    "god": "Artemis"
  },
  {
    "description": "Your Call fires a seeking arrow with +35% Critical chance.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2b/Artemis%27_Aid.png",
    "name": "Artemis' Aid",
    "notes": "Tier 1 Unblockable by shield-bearing foes. Costs 1/5th of the God Gauge per use (while other Gods' Aids cost 1/4th) Max Gauge Bonus - Arrows Fired : 10",
    "prerequisites": "None",
    "god": "Artemis"
  },
  {
    "description": "Any damage you deal has a chance to be Critical.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b0/Pressure_Points.png",
    "name": "Pressure Points",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Artemis"
  },
  {
    "description": "Your foes take damage when your  stuck in them is dislodged.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d1/Exit_Wounds.png",
    "name": "Exit Wounds",
    "notes": "Tier 2 Cannot be combined with Aspect of Beowulf Cannot be combined with Crystal Beam Cannot be combined with Slicing Shot Cannot be combined with Trippy Shot",
    "prerequisites": "Crush Shot, Electric Shot, Flood Shot, Phalanx Shot, or True Shot",
    "god": "Artemis"
  },
  {
    "description": "Your Critical effects deal even more damage to Armor.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0a/Hide_Breaker.png",
    "name": "Hide Breaker",
    "notes": "Tier 2",
    "prerequisites": "Artemis' Aid, Deadly Flourish, Deadly Strike, Pressure Points, or True Shot",
    "god": "Artemis"
  },
  {
    "description": "Your Critical effects deal even more damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/94/Clean_Kill.png",
    "name": "Clean Kill",
    "notes": "Tier 2",
    "prerequisites": "Artemis' Aid, Deadly Flourish, Deadly Strike, Pressure Points, or True Shot",
    "god": "Artemis"
  },
  {
    "description": "Your God Gauge charges faster when you deal Critical damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Hunter_Instinct.png",
    "name": "Hunter Instinct",
    "notes": "Tier 2",
    "prerequisites": "Deadly Flourish, Deadly Strike, Pressure Points, or True Shot",
    "god": "Artemis"
  },
  {
    "description": "After you deal Critical damage to a foe, a foe near it is Marked.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/bd/Hunter%27s_Mark.png",
    "name": "Hunter's Mark",
    "notes": "Tier 2 Range: 1200 'Marked' effect expires after taking Critical damage.",
    "prerequisites": "Artemis' Aid, Deadly Flourish, Deadly Strike, Pressure Points, or True Shot",
    "god": "Artemis"
  },
  {
    "description": "After you hit with an Attack, Cast or Special, fire a seeking arrow.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e2/Support_Fire.png",
    "name": "Support Fire",
    "notes": "Tier 2",
    "prerequisites": "Artemis' Aid, Deadly Flourish, Deadly Strike, Hunter Dash, Pressure Points, or True Shot",
    "god": "Artemis"
  },
  {
    "description": "Gain extra  for your Cast. Max Ammo: +2",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8b/Fully_Loaded.png",
    "name": "Fully Loaded",
    "notes": "Tier 3",
    "prerequisites": "Requires two of three: Exit Wounds, Pressure Points, or Support Fire",
    "god": "Artemis"
  },
  {
    "description": "Your Critical effects deal even more damage to Weak foes. Bonus Critical Damage vs. Weak: +150%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/9f/Heart_Rend.png",
    "name": "Heart Rend",
    "notes": "",
    "prerequisites": "One of each: Artemis: Deadly Flourish, Deadly Strike, Hunter's Flare, or True Shot Aphrodite: Crush Shot, Heartbreak Flourish, Heartbreak Strike, Passion Dash, or Passion Flare",
    "god": "Artemis"
  },
  {
    "description": "Your Cast creates a faster Blade Rift that seeks the nearest foe. Seek Duration: 3.3 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fd/Hunting_Blades.png",
    "name": "Hunting Blades",
    "notes": "Cannot be combined with Freezing Vortex. Cannot be combined with the Aspect of Beowulf.",
    "prerequisites": "One of each: Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, or Hunter Dash Ares: Slicing Flare or Slicing Shot",
    "god": "Artemis"
  },
  {
    "description": "After you Deflect, briefly gain +20% chance to deal Critical damage. Critical Duration: 2 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/47/Deadly_Reversal.png",
    "name": "Deadly Reversal",
    "notes": "",
    "prerequisites": "One of each: Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, Hunter's Flare, or True Shot Athena: Divine Flourish or Divine Strike",
    "god": "Artemis"
  },
  {
    "description": "Your Cast is stronger and tracks foes more effectively. Beam Damage: +10%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/25/Crystal_Clarity.png",
    "name": "Crystal Clarity",
    "notes": "Cannot be combined with Cold Embrace",
    "prerequisites": "One of each: Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, or Hunter Dash Demeter: Crystal Beam",
    "god": "Artemis"
  },
  {
    "description": "Hangover-afflicted foes are more likely to take Critical damage. Bonus Critical Chance per Hangover Stack: +1.5%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/da/Splitting_Headache.png",
    "name": "Splitting Headache",
    "notes": "",
    "prerequisites": "One of each: Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, or True Shot Dionysus: Dionysus' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike",
    "god": "Artemis"
  },
  {
    "description": "Your Cast fires a second projectile, though it has reduced damage. Secondary Shot Damage: 30%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/ab/Mirage_Shot.png",
    "name": "Mirage Shot",
    "notes": "Cannot be combined with Curse of Drowning",
    "prerequisites": "One of each: Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, Hunter's Flare, or True Shot Poseidon: Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash",
    "god": "Artemis"
  },
  {
    "description": "Your collectible  strike nearby foes with lightning every 1 Sec. Lightning Damage: 70",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/62/Lightning_Rod.png",
    "name": "Lightning Rod",
    "notes": "Requires the Infernal Soul Mirror Ability",
    "prerequisites": "One of each: Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, Hunter Dash, Hunter's Flare, or True Shot Zeus: Electric Flare, Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid",
    "god": "Artemis"
  },
  {
    "description": "Your Attack inflicts Doom.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/83/Curse_of_Agony.png",
    "name": "Curse of Agony",
    "notes": "Tier 1 Curse Delay: 1.1 Sec.",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "Your Attack deals more damage and knocks foes away.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b2/Tempest_Strike.png",
    "name": "Tempest Strike",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "Your Special deals more damage and knocks foes away.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c7/Tempest_Flourish.png",
    "name": "Tempest Flourish",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "Your Special inflicts Doom.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Curse_of_Pain.png",
    "name": "Curse of Pain",
    "notes": "Tier 1 Curse Delay: 1.1 Sec.",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "Your Cast sends a Blade Rift hurling ahead.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Slicing_Shot.png",
    "name": "Slicing Shot",
    "notes": "Tier 1 Duration: 4 Sec. Damage Interval: 0.1 Sec. Damage Radius: 150 Speed: 250 Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "Your Cast damages foes in an area and knocks them away.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/17/Flood_Shot.png",
    "name": "Flood Shot",
    "notes": "Tier 1 Damage Radius: 500 Impact Velocity: 2500 Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "Your Cast sends a large Blade Rift hurling ahead for a brief time.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Slicing_Shot.png",
    "name": "Slicing Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Ares"
  },
  {
    "description": "Your Cast damages foes around you and knocks them away.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/17/Flood_Shot.png",
    "name": "Flood Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Poseidon"
  },
  {
    "description": "Your Dash damages foes in an area and knocks them away.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c8/Tidal_Dash.png",
    "name": "Tidal Dash",
    "notes": "Tier 1 Damage Radius: 300 Impact Velocity: 2500 Sometimes stuns foes on impact.",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "Your Dash creates a Blade Rift where you started.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/58/Blade_Dash.png",
    "name": "Blade Dash",
    "notes": "Tier 1 Duration: 0.7 Sec. Damage Interval: 0.1 Sec. Damage Radius: 150",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "Your Call makes you surge into foes while Impervious for 1.2 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ea/Poseidon%27s_Aid.png",
    "name": "Poseidon's Aid",
    "notes": "Tier 1 Max Gauge Bonus: 7.2 Sec. Duration Impact Velocity: 3500",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "Your Call turns you into an Impervious Blade Rift for 1.2 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/63/Ares%27_Aid.png",
    "name": "Ares' Aid",
    "notes": "Tier 1 Wrath Cost: 50 Max Gauge Bonus 6 Sec",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "After you take damage, inflict Doom on surrounding foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/04/Curse_of_Vengeance.png",
    "name": "Curse of Vengeance",
    "notes": "Tier 1 Effect Radius: 450 Curse Delay: 1.1 Sec.",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "You deal more damage when slamming foes into barriers.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3b/Typhoon%27s_Fury.png",
    "name": "Typhoon's Fury",
    "notes": "Tier 1",
    "prerequisites": "Tempest Strike, Tidal Dash, Flood Shot, Tempest Flourish, or Poseidon's Aid",
    "god": "Poseidon"
  },
  {
    "description": "Your Attack and Special are stronger the first 10 Sec. in Encounter(s).",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b4/Hydraulic_Might.png",
    "name": "Hydraulic Might",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "Your Attack and Cast deal more damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/25/Urge_to_Kill.png",
    "name": "Urge to Kill",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "After slaying a foe, your next Attack or Special deals more damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a1/Battle_Rage.png",
    "name": "Battle Rage",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "Any ,  or  chamber rewards are worth more.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a7/Ocean%27s_Bounty.png",
    "name": "Ocean's Bounty",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "After using Death Defiance, deal more damage that encounter.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/66/Blood_Frenzy.png",
    "name": "Blood Frenzy",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Ares"
  },
  {
    "description": "Gain an assortment of , ,  and .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fa/Sunken_Treasure.png",
    "name": "Sunken Treasure",
    "notes": "Tier 1 Consumable",
    "prerequisites": "None",
    "god": "Poseidon"
  },
  {
    "description": "Using knock-away effects also Rupture foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6a/Razor_Shoals.png",
    "name": "Razor Shoals",
    "notes": "Tier 2",
    "prerequisites": "Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash",
    "god": "Poseidon"
  },
  {
    "description": "Your Blade Rift powers deal damage in a wider area.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0a/Black_Metal.png",
    "name": "Black Metal",
    "notes": "Tier 2",
    "prerequisites": "Ares' Aid, Blade Dash, Slicing Flare, or Slicing Shot",
    "god": "Ares"
  },
  {
    "description": "Your Blade Rift effects last longer and pull foes in.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a3/Engulfing_Vortex.png",
    "name": "Engulfing Vortex",
    "notes": "Tier 2 This boon cannot be upgraded via poms.",
    "prerequisites": "Ares' Aid, Blade Dash, Slicing Flare, or Slicing Shot",
    "god": "Ares"
  },
  {
    "description": "Your God Gauge charges faster when you take damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b5/Boiling_Point.png",
    "name": "Boiling Point",
    "notes": "Tier 2",
    "prerequisites": "Aphrodite's Aid, Ares' Aid, Artemis' Aid, Athena's Aid, Demeter's Aid, Dionysus' Aid, Poseidon's Aid, or Zeus' Aid",
    "god": "Poseidon"
  },
  {
    "description": "Your Doom effects deal more damage when applied multiple times.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3b/Dire_Misfortune.png",
    "name": "Dire Misfortune",
    "notes": "Tier 2 This boon cannot be upgraded via poms.",
    "prerequisites": "Curse of Agony or Curse of Pain",
    "god": "Ares"
  },
  {
    "description": "Slamming foes into walls or corners creates a watery blast in the area.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/84/Breaking_Wave.png",
    "name": "Breaking Wave",
    "notes": "Tier 2",
    "prerequisites": "Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash",
    "god": "Poseidon"
  },
  {
    "description": "Your Doom effects deal more damage, after +0.5 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/63/Impending_Doom.png",
    "name": "Impending Doom",
    "notes": "Tier 2",
    "prerequisites": "Curse of Agony, Curse of Pain, or Curse of Vengeance",
    "god": "Ares"
  },
  {
    "description": "Your boons with Knock-Away effects deal bonus damage to bosses.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e3/Wave_Pounding.png",
    "name": "Wave Pounding",
    "notes": "Tier 2",
    "prerequisites": "Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash",
    "god": "Poseidon"
  },
  {
    "description": "Your Blade Rift effects deal more damage for each consecutive hit. Damage Increase per Hit: 2",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/92/Vicious_Cycle.png",
    "name": "Vicious Cycle",
    "notes": "Tier 3",
    "prerequisites": "Black Metal or Engulfing Vortex",
    "god": "Ares"
  },
  {
    "description": "Your Call pulls in foes and the effect lasts longer.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/14/Rip_Current.png",
    "name": "Rip Current",
    "notes": "Tier 2",
    "prerequisites": "Poseidon's Aid",
    "god": "Poseidon"
  },
  {
    "description": "Your Doom effects continuously strike Weak foes. Successive Hit Damage: 50%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Curse_of_Longing.png",
    "name": "Curse of Longing",
    "notes": "",
    "prerequisites": "One of each: Ares: Curse of Agony or Curse of Pain Aphrodite: Crush Shot, Heartbreak Flourish, Heartbreak Strike, Passion Dash, or Passion Flare",
    "god": "Ares"
  },
  {
    "description": "You have a greater chance to find Fishing Point in each Chamber.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/cc/Huge_Catch.png",
    "name": "Huge Catch",
    "notes": "Tier 3 Fish Spawn Chance: +20% This boon also removes the Chambers Since Last Fishing Point spawn requirement. Your first encounter with this boon will be scripted to appear in the first chamber as the only choice, ignoring prerequisites. This happens only once.",
    "prerequisites": "Ocean's Bounty and Sunken Treasure or Conch Shell",
    "god": "Poseidon"
  },
  {
    "description": "Your Cast creates a faster Blade Rift that seeks the nearest foe. Seek Duration: 3.3 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fd/Hunting_Blades.png",
    "name": "Hunting Blades",
    "notes": "Cannot be combined with Aspect of Beowulf. Cannot be combined with Freezing Vortex.",
    "prerequisites": "One of each: Ares: Slicing Flare or Slicing Shot Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, or Hunter Dash",
    "god": "Ares"
  },
  {
    "description": "Your knock-away effects shove foes a second time after the first.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/18/Second_Wave.png",
    "name": "Second Wave",
    "notes": "Tier 3 Second Knockback Delay: 0.7 Sec.",
    "prerequisites": "One of each: Breaking Wave, Razor Shoals, or Typhoon's Fury Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash",
    "god": "Poseidon"
  },
  {
    "description": "Any Poms of Power you find are more effective. Bonus Lv. from Poms: +1",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/56/Sweet_Nectar.png",
    "name": "Sweet Nectar",
    "notes": "",
    "prerequisites": "One of each: Poseidon: Tempest Strike, Tempest Flourish, Flood Shot, Tidal Dash, or Poseidon's Aid Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, Heartbreak Flourish, or Aphrodite's Aid",
    "god": "Poseidon"
  },
  {
    "description": "Your attacks that can Deflect immediately activate Doom effects. Doom Combo Damage: 40",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/ca/Merciful_End.png",
    "name": "Merciful End",
    "notes": "",
    "prerequisites": "One of each: Ares: Curse of Agony or Curse of Pain Athena: Divine Flourish or Divine Strike",
    "god": "Ares"
  },
  {
    "description": "Your Cast is a pulse that deals damage to foes around you. Pulses per Cast: 3",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/57/Curse_of_Drowning.png",
    "name": "Curse of Drowning",
    "notes": "Cannot be combined with Mirage Shot or Blizzard Shot Cannot be combined with Aspect of Hera",
    "prerequisites": "One of each: Poseidon: Flood Shot Ares: Ares' Aid, Blade Dash, Curse of Agony, or Curse of Pain",
    "god": "Poseidon"
  },
  {
    "description": "Your Cast inflicts Chill, but is smaller and moves slower. Blade Rift size -15%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a1/Freezing_Vortex.png",
    "name": "Freezing Vortex",
    "notes": "Cannot be combined with Hunting Blades",
    "prerequisites": "One of each: Ares: Slicing Flare or Slicing Shot Demeter: Demeter's Aid, Frost Flourish, Frost Strike, or Mistral Dash",
    "god": "Ares"
  },
  {
    "description": "Your Poison effects deal damage faster. Damage Rate: .5 sec -> .35 sec",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/55/Curse_of_Nausea.png",
    "name": "Curse of Nausea",
    "notes": "",
    "prerequisites": "One of each: Ares: Curse of Agony, Curse of Pain, or Curse of Vengeance Dionysus: Dionysus' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike",
    "god": "Ares"
  },
  {
    "description": "Your Cast fires a second projectile, though it has reduced damage. Secondary Shot Damage: 30%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/ab/Mirage_Shot.png",
    "name": "Mirage Shot",
    "notes": "Cannot be combined with Curse of Drowning",
    "prerequisites": "One of each: Poseidon: Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, or True Shot",
    "god": "Poseidon"
  },
  {
    "description": "Your Cast is a pulse that deals damage to foes around you. Pulses per Cast: 3",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/57/Curse_of_Drowning.png",
    "name": "Curse of Drowning",
    "notes": "Cannot be combined with Mirage Shot or Blizzard Shot Cannot be combined with Aspect of Hera",
    "prerequisites": "One of each Ares: Ares' Aid, Blade Dash, Curse of Agony, Curse of Pain Poseidon: Flood Shot",
    "god": "Ares"
  },
  {
    "description": "You cannot be stunned, and resist some damage from Bosses. Boss Damage Reduction: +10%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/cf/Unshakable_Mettle.png",
    "name": "Unshakable Mettle",
    "notes": "Bosses include the Furies, the Bone Hydra, the Heroes of Elysium, the Secret Boss, and Final Boss.",
    "prerequisites": "One of each: Poseidon: Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash Athena: Athena's Aid, Divine Dash, Divine Flourish, Divine Strike, or Phalanx Shot",
    "god": "Poseidon"
  },
  {
    "description": "Your Revenge attacks sometimes occur without taking damage. Auto-Revenge Rate: 3 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0a/Vengeful_Mood.png",
    "name": "Vengeful Mood",
    "notes": "",
    "prerequisites": "One of each: Ares: Ares' Aid, Blade Dash, Curse of Agony, Curse of Pain, Slicing Flare, or Slicing Shot Zeus: Electric Flare, Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid Revenge boon: Curse of Vengeance, Frozen Touch, Heaven's Vengeance, Holy Shield, or Wave of Despair",
    "god": "Ares"
  },
  {
    "description": "Your Cast moves slowly, piercing foes and firing shards around it. Shard Damage: 40",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Blizzard_Shot.png",
    "name": "Blizzard Shot",
    "notes": "Cannot be combined with Aspect of Beowulf Cannot be combined with Curse of Drowning",
    "prerequisites": "One of each: Poseidon: Flood Shot Demeter: Demeter's Aid, Frost Flourish, Frost Strike, or Mistral Dash",
    "god": "Poseidon"
  },
  {
    "description": "Your Attack is +X% faster.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/95/Swift_Strike.png",
    "name": "Swift Strike",
    "notes": "Tier 1 Works in decreasing weapon attack charge time by X%",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "Any Boons you find have superior effects. Minimum Boon Rarity: Epic",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/32/Exclusive_Access.png",
    "name": "Exclusive Access",
    "notes": "",
    "prerequisites": "One of each: Poseidon: Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash Dionysus: Dionysus' Aid, Drunken Dash, Drunken Flourish, Drunken Strike, or Trippy Shot",
    "god": "Poseidon"
  },
  {
    "description": "Your Special is +X% faster.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d5/Swift_Flourish.png",
    "name": "Swift Flourish",
    "notes": "Tier 1 Works in decreasing weapon special charge time by X%",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "Your knock-away effects also cause foes to be struck by lightning. Lightning Damage 40",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c7/Sea_Storm.png",
    "name": "Sea Storm",
    "notes": "",
    "prerequisites": "One of each: Poseidon: Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid",
    "god": "Poseidon"
  },
  {
    "description": "Your Cast is +X%  faster and fully automatic.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/43/Flurry_Cast.png",
    "name": "Flurry Cast",
    "notes": "Tier 1 Cannot be combined with Aspect of Beowulf Cannot be combined with Aspect of Hera Requires the Infernal Soul Mirror Ability",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "Your Call charges up automatically.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Quick_Favor.png",
    "name": "Quick Favor",
    "notes": "Tier 1",
    "prerequisites": "Aphrodite's Aid, Ares' Aid, Artemis' Aid, Athena's Aid, Demeter's Aid, Dionysus' Aid, Poseidon's Aid, or Zeus' Aid",
    "god": "Hermes"
  },
  {
    "description": "For X seconds after you Dash, become Sturdy and run +100% faster.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/be/Hyper_Sprint.png",
    "name": "Hyper Sprint",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "You move X% faster.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/5d/Greater_Haste.png",
    "name": "Greater Haste",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "After you take damage, quickly Dash to recover up to X%  lost.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/7b/Quick_Recovery.png",
    "name": "Quick Recovery",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "You have +X% chance to Dodge.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3d/Greater_Evasion.png",
    "name": "Greater Evasion",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "You can Dash +X more time(s) in a row.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f8/Greatest_Reflex.png",
    "name": "Greatest Reflex",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "After using Call, gain Dodge chance and move speed for 6 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/62/Second_Wind.png",
    "name": "Second Wind",
    "notes": "Tier 1",
    "prerequisites": "Aphrodite's Aid, Ares' Aid, Artemis' Aid, Athena's Aid, Demeter's Aid, Dionysus' Aid, Poseidon's Aid, or Zeus' Aid",
    "god": "Hermes"
  },
  {
    "description": "Foes drop  stuck in them faster.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Quick_Reload.png",
    "name": "Quick Reload",
    "notes": "Tier 1 Cannot be combined with Aspect of Beowulf Cannot be combined with Crystal Beam Cannot be combined with Curse of Drowning Cannot be combined with Slicing Shot Cannot be combined with Trippy shot Requires the Infernal Soul Mirror Ability",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "Each time you enter a Chamber, gain a bit wealth.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/ce/Side_Hustle.png",
    "name": "Side Hustle",
    "notes": "Tier 1 Not affected by boons that modify wealth gain",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "You deal bonus damage based on any bonus move speed.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6e/Rush_Delivery.png",
    "name": "Rush Delivery",
    "notes": "Tier 1",
    "prerequisites": "Greater Haste, Hyper Sprint, or Lambent Plume (Keepsake Ability)",
    "god": "Hermes"
  },
  {
    "description": "You regenerate  faster.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Quick_Reload.png",
    "name": "Auto Reload",
    "notes": "Tier 1 Requires the Stygian Soul Mirror Ability",
    "prerequisites": "None",
    "god": "Hermes"
  },
  {
    "description": "Your  automatically return to you.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/14/Greater_Recall.png",
    "name": "Greater Recall",
    "notes": "Tier 3 Requires the Infernal Soul Mirror Ability",
    "prerequisites": "Flurry Cast, Quick Reload, Auto Reload, or Lambent Plume (Keepsake Ability)",
    "god": "Hermes"
  },
  {
    "description": "Your cast deals more damage to foes without  on them. First shot damage: +50%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/43/Flurry_Cast.png",
    "name": "Bad News",
    "notes": "Tier 3.  Requires the Stygian Soul Mirror Ability",
    "prerequisites": "Auto Reload or Lambent Plume (Keepsake Ability)",
    "god": "Hermes"
  },
  {
    "description": "Your Attack deals more damage and inflicts Weak.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e3/Heartbreak_Strike.png",
    "name": "Heartbreak Strike",
    "notes": "Tier 1 Weak duration: 3 Sec.",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Your Attack is stronger and inflicts Chill.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/65/Frost_Strike.png",
    "name": "Frost Strike",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "Your Special deals more damage and inflicts Weak.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e9/Heartbreak_Flourish.png",
    "name": "Heartbreak Flourish",
    "notes": "Tier 1 Weak Duration: 3 Sec.",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Your Special is stronger and inflicts Chill.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6d/Frost_Flourish.png",
    "name": "Frost Flourish",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "Your Cast drops a crystal that fires a beam straight ahead for 5 sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/46/Crystal_Beam.png",
    "name": "Crystal Beam",
    "notes": "Tier 1 Beam slowly alters trajectory to hit nearest enemy. Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "Your Cast is a wide, short-range blast that inflicts Weak.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/aa/Crush_Shot.png",
    "name": "Crush Shot",
    "notes": "Tier 1 Range: 300 Weak Duration: 3 Sec. Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Your Cast damages foes around you and inflicts Chill.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/46/Crystal_Beam.png",
    "name": "Icy Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Demeter"
  },
  {
    "description": "Your Cast damages foes around you and inflicts Weak.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/aa/Crush_Shot.png",
    "name": "Passion Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Aphrodite"
  },
  {
    "description": "Your Dash inflicts damage where you end up, inflicting Weak.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e0/Passion_Dash.png",
    "name": "Passion Dash",
    "notes": "Tier 1 Weak Duration: 3 Sec. Damage Radius: 180",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Your Dash shoots a gust ahead that inflicts Chill.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d2/Mistral_Dash.png",
    "name": "Mistral Dash",
    "notes": "Tier 1 Gust travels in the same direction you are facing. Range: 300",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "Your Call fires a seeking projectile that inflicts Charm.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f0/Aphrodite%27s_Aid.png",
    "name": "Aphrodite's Aid",
    "notes": "Tier 1 The charm projectile pierces foes.",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Your Call creates a winter vortex for 5 Sec., deals damage every 0.25 Sec inflicting Chill.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/35/Demeter%27s_Aid.png",
    "name": "Demeter's Aid",
    "notes": "Tier 1 Greater call bonus: increases duration to 15 Sec",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "After you take damage, damage and completely Chill your foe.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Frozen_Touch.png",
    "name": "Frozen Touch",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "When foes are slain, they damage nearby foes and inflict Weak.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/dd/Dying_Lament.png",
    "name": "Dying Lament",
    "notes": "Tier 1 Damage Radius: 200",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "After you take damage, damage nearby foes and inflict Weak.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/11/Wave_of_Despair.png",
    "name": "Wave of Despair",
    "notes": "Tier 1 Damage Radius: 700",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Your Boons become Common, then gain Rarity every 3 Encounter(s).",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/10/Rare_Crop.png",
    "name": "Rare Crop",
    "notes": "Tier 1 Unsellable Once taken, shows which Boons are being cultivated as part of the Boon Description. If Zagreus loses the Boon that is being cultivated (via purging or exchange), the Rare Crop effect is essentially lost. If taken before the 4th zone, Temple of Styx, each small room before the reward counts as one encounter.",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "While you have no , take 10% less damage and deal more.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0d/Ravenous_Will.png",
    "name": "Ravenous Will",
    "notes": "Tier 1 This boon cannot be upgraded via poms.",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "Resist some damage from nearby foes' attacks.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4b/Different_League.png",
    "name": "Different League",
    "notes": "Tier 1 Proximity Threshold: 400",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Any  or  chamber rewards are worth more.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fa/Life_Affirmation.png",
    "name": "Life Affirmation",
    "notes": "Tier 1 This boon cannot be upgraded via poms.",
    "prerequisites": "None",
    "god": "Aphrodite"
  },
  {
    "description": "Any Health effects are more potent. Restore +30% now.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c0/Nourished_Soul.png",
    "name": "Nourished Soul",
    "notes": "Tier 1 Unsellable",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "Whenever you Cast, damage nearby foes and inflict Chill.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/24/Snow_Burst.png",
    "name": "Snow Burst",
    "notes": "Tier 2",
    "prerequisites": "None",
    "god": "Demeter"
  },
  {
    "description": "Your Weak effects have a longer duration.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c9/Empty_Inside.png",
    "name": "Empty Inside",
    "notes": "Tier 2",
    "prerequisites": "Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish",
    "god": "Aphrodite"
  },
  {
    "description": "Weak-afflicted foes are also more susceptible to damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a6/Sweet_Surrender.png",
    "name": "Sweet Surrender",
    "notes": "Tier 2",
    "prerequisites": "Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish",
    "god": "Aphrodite"
  },
  {
    "description": "Applying 10 stacks of Chill causes a blast, clearing the effect.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/30/Arctic_Blast.png",
    "name": "Arctic Blast",
    "notes": "Tier 2 This boon cannot be upgraded via poms.",
    "prerequisites": "Demeter's Aid, Frost Flourish, Frost Strike, Mistral Dash, or Snow Burst",
    "god": "Demeter"
  },
  {
    "description": "Your Weak effects are more potent.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1b/Broken_Resolve.png",
    "name": "Broken Resolve",
    "notes": "Tier 2 This boon cannot be upgraded via poms.",
    "prerequisites": "Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish",
    "god": "Aphrodite"
  },
  {
    "description": "Applying Chill to all enemies causes them to Slow and Decay.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/41/Killing_Freeze.png",
    "name": "Killing Freeze",
    "notes": "Tier 2 This boon cannot be upgraded via poms.",
    "prerequisites": "Demeter's Aid, Frost Flourish, Frost Strike, Mistral Dash, or Snow Burst",
    "god": "Demeter"
  },
  {
    "description": "Your Cast fires longer and inflicts Chill.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/83/Glacial_Glare.png",
    "name": "Glacial Glare",
    "notes": "Tier 2",
    "prerequisites": "Crystal Beam",
    "god": "Demeter"
  },
  {
    "description": "Your Cast shoots farther and is stronger against undamaged foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/dc/Blown_Kiss.png",
    "name": "Blown Kiss",
    "notes": "Tier 2 Cast range is doubled and is also 30% wider.",
    "prerequisites": "Crush Shot",
    "god": "Aphrodite"
  },
  {
    "description": "Chill-affected foes shatter at 10% hp, inflicting Chill nearby. Shatter Area Damage: 50",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/50/Winter_Harvest.png",
    "name": "Winter Harvest",
    "notes": "Tier 3",
    "prerequisites": "Requires two of three: Arctic Blast, Ravenous Will, Killing Freeze",
    "god": "Demeter"
  },
  {
    "description": "Your Weak effects also have a 15% chance to Charm foes. Charm Duration: 4 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/16/Unhealthy_Fixation.png",
    "name": "Unhealthy Fixation",
    "notes": "Tier 3",
    "prerequisites": "One of each: Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish Empty Inside, Sweet Surrender or Broken Resolve",
    "god": "Aphrodite"
  },
  {
    "description": "Your Doom effects continuously strike Weak foes. Successive Hit Damage: 50%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/1f/Curse_of_Longing.png",
    "name": "Curse of Longing",
    "notes": "",
    "prerequisites": "One of each: Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish Ares: Curse of Agony or Curse of Pain",
    "god": "Aphrodite"
  },
  {
    "description": "Your Cast crystal fires its beam directly at you for 4 seconds. Bonus Cast Damage: +30%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/21/Cold_Embrace.png",
    "name": "Cold Embrace",
    "notes": "Cannot be combined with Crystal Clarity",
    "prerequisites": "One of each: Demeter: Crystal Beam Aphrodite: Heartbreak Strike, Passion Dash, Heartbreak Flourish, or Aphrodite's Aid",
    "god": "Demeter"
  },
  {
    "description": "Your Cast inflicts Chill, but is smaller and moves slower. Blade Rift size -15%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a1/Freezing_Vortex.png",
    "name": "Freezing Vortex",
    "notes": "Cannot be combined with Hunting Blades",
    "prerequisites": "One of each: Demeter: Demeter's Aid, Frost Flourish, Frost Strike, or Mistral Dash Ares: Slicing Shot",
    "god": "Demeter"
  },
  {
    "description": "Your Critical effects deal even more damage to Weak foes. Bonus Critical Damage vs. Weak: +150%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/9f/Heart_Rend.png",
    "name": "Heart Rend",
    "notes": "",
    "prerequisites": "One of each: Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish Artemis: Deadly Strike, Deadly Flourish, or True Shot",
    "god": "Aphrodite"
  },
  {
    "description": "Your Cast gains any bonuses you have for striking foes from behind. Bonus Backstab Damage: +25%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/10/Parting_Shot.png",
    "name": "Parting Shot",
    "notes": "Cannot be combined with Trippy Shot",
    "prerequisites": "One of each: Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, Heartbreak Flourish, or Aphrodite's Aid Athena: Divine Strike, Phalanx Shot, Divine Flourish, Divine Dash, or Athena's Aid",
    "god": "Aphrodite"
  },
  {
    "description": "Your Cast is stronger and tracks foes more effectively. Beam Damage: +10%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/25/Crystal_Clarity.png",
    "name": "Crystal Clarity",
    "notes": "Cannot be combined with Cold Embrace",
    "prerequisites": "One of each: Demeter: Crystal Beam Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, or Hunter Dash",
    "god": "Demeter"
  },
  {
    "description": "While you have no Death/Stubborn Defiance your  slowly recovers. Life Regeneration: 1  (every 0.8 Sec.)",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/aa/Stubborn_Roots.png",
    "name": "Stubborn Roots",
    "notes": "",
    "prerequisites": "One of each: Demeter: Frost Strike, Mistral Dash, Frost Flourish, Crystal Beam, or Demeter's Aid Athena: Divine Strike, Divine Flourish, Phalanx Shot, Divine Dash, or Athena's Aid",
    "god": "Demeter"
  },
  {
    "description": "Your Cast crystal fires its beam directly at you for 4 seconds. Bonus Cast Damage: +30%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/21/Cold_Embrace.png",
    "name": "Cold Embrace",
    "notes": "Cannot be combined with Crystal Clarity",
    "prerequisites": "One of each: Aphrodite: Heartbreak Strike, Passion Dash, Heartbreak Flourish, or Aphrodite's Aid Demeter: Crystal Beam",
    "god": "Aphrodite"
  },
  {
    "description": "Your Hangover effects stack even more times against Weak foes. Bonus Hangover Stacks: 3",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/45/Low_Tolerance.png",
    "name": "Low Tolerance",
    "notes": "",
    "prerequisites": "One of each: Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish Dionysus: Drunken Strike, Drunken Flourish, Drunken Dash, or Dionysus' Aid",
    "god": "Aphrodite"
  },
  {
    "description": "Your Cast blasts an area with freezing Festive Fog that inflicts Chill. Blast Damage: +50%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8e/Ice_Wine.png",
    "name": "Ice Wine",
    "notes": "Cannot be combined with Blizzard Shot",
    "prerequisites": "One of each: Demeter: Demeter's Aid, Frost Flourish, Frost Strike, Mistral Dash Dionysus: Trippy Shot",
    "god": "Demeter"
  },
  {
    "description": "Any Poms of Power you find are more effective. Bonus Lv. from Poms: +1",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/56/Sweet_Nectar.png",
    "name": "Sweet Nectar",
    "notes": "",
    "prerequisites": "One of each: Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, Heartbreak Flourish, or Aphrodite's Aid Poseidon: Tempest Strike, Tempest Flourish, Flood Shot, Tidal Dash, or Poseidon's Aid",
    "god": "Aphrodite"
  },
  {
    "description": "Your Cast moves slowly, piercing foes and firing shards around it. Shard Damage: 40",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Blizzard_Shot.png",
    "name": "Blizzard Shot",
    "notes": "Cannot be combined with the Aspect of Beowulf Cannot be combined with Curse of Drowning Cannot be combined with Ice Wine",
    "prerequisites": "One of each: Demeter: Demeter's Aid, Frost Flourish, Frost Strike, or Mistral Dash Poseidon: Flood Shot",
    "god": "Demeter"
  },
  {
    "description": "Jolted status does not expire on your enemies' attacks. Jolted duration: 10 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2e/Cold_Fusion.png",
    "name": "Cold Fusion",
    "notes": "",
    "prerequisites": "One of each: Demeter: Demeter's Aid, Frost Flourish, Frost Strike, or Mistral Dash Zeus: Static Discharge",
    "god": "Demeter"
  },
  {
    "description": "Your Call charges up automatically, but is capped at 25%. Auto Gauge Gain: 1% every .2 seconds",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/ca/Smoldering_Air.png",
    "name": "Smoldering Air",
    "notes": "Cannot be combined with Sigil of the Dead",
    "prerequisites": "One of each: Aphrodite: Heartbreak Strike, Heartbreak Flourish, Crush Shot, Passion Dash, or Aphrodite's Aid Zeus: Lightning Strike, Thunder Dash, Thunder Flourish, Electric Shot, or Zeus' Aid",
    "god": "Aphrodite"
  },
  {
    "description": "Your Attack is stronger, and can Deflect.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e6/Divine_Strike.png",
    "name": "Divine Strike",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Your Attack inflicts Hangover.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/80/Drunken_Strike.png",
    "name": "Drunken Strike",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "Your Special inflicts Hangover.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/46/Drunken_Flourish.png",
    "name": "Drunken Flourish",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "Your Special is stronger, and can Deflect.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ea/Divine_Flourish.png",
    "name": "Divine Flourish",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Your Cast damages foes in a small area, and can Deflect.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Phalanx_Shot.png",
    "name": "Phalanx Shot",
    "notes": "Tier 1 Damage Radius: 250 Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Your Cast lobs a projectile that bursts into Festive Fog.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Trippy_Shot.png",
    "name": "Trippy Shot",
    "notes": "Tier 1 Duration: 5 Sec. Stun Frequency: 0.25 Sec. Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "Your Cast damages foes around you, and can Deflect.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Phalanx_Shot.png",
    "name": "Phalanx Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Athena"
  },
  {
    "description": "Your Cast damages foes around you, leaving behind Festive Fog.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/a4/Trippy_Shot.png",
    "name": "Trippy Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Dionysus"
  },
  {
    "description": "Your Dash inflicts foes near you with Hangover.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e2/Drunken_Dash.png",
    "name": "Drunken Dash",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "Your Dash deals damage and can Deflect.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/66/Divine_Dash.png",
    "name": "Divine Dash",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Your Call briefly makes you Invulnerable and Deflect all attacks.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/91/Athena%27s_Aid.png",
    "name": "Athena's Aid",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Your Call inflicts Hangover to foes all around you for 1.5 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/75/Dionysus%27_Aid.png",
    "name": "Dionysus' Aid",
    "notes": "Tier 1 Effect Range: 600 Max Gauge Bonus: 9 Sec. Duration",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "After you take damage, damage nearby foes and briefly Deflect.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/17/Holy_Shield.png",
    "name": "Holy Shield",
    "notes": "Tier 1 Damage Radius: 225",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "If your  is low after Encounters, restore to the threshold.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f3/After_Party.png",
    "name": "After Party",
    "notes": "Tier 1 Life Threshold value reduced by Lasting Consequences. This boon cannot be upgraded via poms. Heroic Rarity only obtainable with Ambrosia Delight.",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "Resist damage from foes' attacks.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c6/Bronze_Skin.png",
    "name": "Bronze Skin",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Take less damage while at 40%  or below.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/bd/Positive_Outlook.png",
    "name": "Positive Outlook",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "Resist damage from Traps.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/20/Sure_Footing.png",
    "name": "Sure Footing",
    "notes": "Tier 1 Allows the player to walk in Asphodel's magma without taking damage for a short amount of time. Does not protect against puddles of magma created by fireballs. This boon cannot be upgraded via poms.",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Gain  when you pick up Nectar. Receive 1 Nectar now.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3c/Premium_Vintage.png",
    "name": "Premium Vintage",
    "notes": "Tier 1 Unsellable",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "Using a Fountain restores all  and gives you bonus damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b3/Strong_Drink.png",
    "name": "Strong Drink",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Dionysus"
  },
  {
    "description": "You begin each Encounter with your God Gauge partly full.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2e/Proud_Bearing.png",
    "name": "Proud Bearing",
    "notes": "Tier 2",
    "prerequisites": "Aphrodite's Aid, Ares' Aid, Artemis' Aid, Athena's Aid, Demeter's Aid, Dionysus' Aid, Poseidon's Aid, or Zeus' Aid",
    "god": "Athena"
  },
  {
    "description": "Deal more damage while 3 foes are Hangover-afflicted.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8a/Bad_Influence.png",
    "name": "Bad Influence",
    "notes": "Tier 2",
    "prerequisites": "Dionysus' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike",
    "god": "Dionysus"
  },
  {
    "description": "Your abilities that can Deflect also make foes Exposed for 5 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/89/Blinding_Flash.png",
    "name": "Blinding Flash",
    "notes": "Tier 2",
    "prerequisites": "Divine Strike, Phalanx Shot, Divine Dash, or Divine Flourish",
    "god": "Athena"
  },
  {
    "description": "When you Deflect attacks, they deal more damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e3/Brilliant_Riposte.png",
    "name": "Brilliant Riposte",
    "notes": "Tier 2",
    "prerequisites": "Divine Strike, Divine Dash, Holy Shield, or Divine Flourish",
    "god": "Athena"
  },
  {
    "description": "Your Hangover effects also make foes move slower.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/41/Numbing_Sensation.png",
    "name": "Numbing Sensation",
    "notes": "Tier 2 Slow Duration: 4 Sec. The rarity modifier used is different from other tier 2 boons.",
    "prerequisites": "Dionysus' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike",
    "god": "Dionysus"
  },
  {
    "description": "Death Defiance makes you Impervious longer. Replenish 1 charge now.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f1/Deathless_Stand.png",
    "name": "Deathless Stand",
    "notes": "Tier 2 Unsellable",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Hangover-afflicted foes contaminate other nearby foes every 4 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4a/Peer_Pressure.png",
    "name": "Peer Pressure",
    "notes": "Tier 2",
    "prerequisites": "Drunken Dash, Drunken Flourish, or Drunken Strike",
    "god": "Dionysus"
  },
  {
    "description": "Death Defiance restores more  than usual. Replenish 1 charge now.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/41/Last_Stand.png",
    "name": "Last Stand",
    "notes": "Tier 2 Unsellable",
    "prerequisites": "None",
    "god": "Athena"
  },
  {
    "description": "Take less damage while standing in Festive Fog.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/91/High_Tolerance.png",
    "name": "High Tolerance",
    "notes": "Tier 2",
    "prerequisites": "Trippy Shot or Trippy Flare",
    "god": "Dionysus"
  },
  {
    "description": "Hangover-afflicted foes take bonus damage in Festive Fog. Fog Combo Damage: +60%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/ff/Black_Out.png",
    "name": "Black Out",
    "notes": "Tier 3",
    "prerequisites": "One of each: Dionysus' Aid, Drunken Flourish, Drunken Strike Trippy Shot",
    "god": "Dionysus"
  },
  {
    "description": "You have a barrier that negates incoming damage. Barrier Cooldown: 20 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4f/Divine_Protection.png",
    "name": "Divine Protection",
    "notes": "Tier 3 Attacks that are successfully blocked do not remove the barrier.",
    "prerequisites": "Brilliant Riposte",
    "god": "Athena"
  },
  {
    "description": "Your Hangover effects stack even more times against Weak foes. Bonus Hangover Stacks: 3",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/45/Low_Tolerance.png",
    "name": "Low Tolerance",
    "notes": "",
    "prerequisites": "One of each: Dionysus: Drunken Strike, Drunken Flourish, Drunken Dash, or Dionysus' Aid Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish",
    "god": "Dionysus"
  },
  {
    "description": "Your Cast gains any bonuses you have for striking foes from behind. Bonus Backstab Damage: +25%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/10/Parting_Shot.png",
    "name": "Parting Shot",
    "notes": "",
    "prerequisites": "One of each: Athena: Divine Strike, Phalanx Shot, Divine Flourish, Divine Dash, or Athena's Aid Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, Heartbreak Flourish, or Aphrodite's Aid",
    "god": "Athena"
  },
  {
    "description": "Your Hangover effects deal damage faster. Damage Rate: .50 sec -> .35 sec",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/55/Curse_of_Nausea.png",
    "name": "Curse of Nausea",
    "notes": "",
    "prerequisites": "One of each: Dionysus: Dionysus' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike Ares: Curse of Agony, Curse of Pain, or Curse of Vengeance",
    "god": "Dionysus"
  },
  {
    "description": "Your attacks that can Deflect immediately activate Doom effects. Doom Combo Damage: 40",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/ca/Merciful_End.png",
    "name": "Merciful End",
    "notes": "",
    "prerequisites": "One of each: Athena: Divine Strike, or Divine Flourish Ares: Curse of Agony or Curse of Pain",
    "god": "Athena"
  },
  {
    "description": "Hangover-afflicted foes are more likely to take Critical damage. Bonus Critical Chance per Hangover Stack: +1.5%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/da/Splitting_Headache.png",
    "name": "Splitting Headache",
    "notes": "",
    "prerequisites": "One of each: Dionysus: Dionysus' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, or True Shot",
    "god": "Dionysus"
  },
  {
    "description": "After you Deflect, briefly gain +20% chance to deal Critical damage. Critical Duration: 2 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/47/Deadly_Reversal.png",
    "name": "Deadly Reversal",
    "notes": "",
    "prerequisites": "One of each: Athena: Divine Strike, or Divine Flourish Artemis: Deadly Strike, Deadly Flourish, True Shot, or Artemis' Aid",
    "god": "Athena"
  },
  {
    "description": "While you have no Death/Stubborn Defiance your  slowly recovers. Life Regeneration: 1  (every 0.8 Sec.)",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/aa/Stubborn_Roots.png",
    "name": "Stubborn Roots",
    "notes": "",
    "prerequisites": "One of each: Athena: Divine Strike, Divine Flourish, Phalanx Shot, Divine Dash, or Athena's Aid Demeter: Frost Strike, Mistral Dash, Frost Flourish, Crystal Beam, or Demeter's Aid",
    "god": "Athena"
  },
  {
    "description": "Your foes' ranged-attack projectiles are slower. Foe Projectile Speed Reduction: +40%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0c/Calculated_Risk.png",
    "name": "Calculated Risk",
    "notes": "",
    "prerequisites": "One of each: Dionysus: Dionysus' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike Athena: Athena's Aid, Divine Dash, Divine Flourish, or Divine Strike",
    "god": "Dionysus"
  },
  {
    "description": "Your foes' ranged-attack projectiles are slower. Foe Projectile Speed Reduction: +40%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0c/Calculated_Risk.png",
    "name": "Calculated Risk",
    "notes": "",
    "prerequisites": "One of each: Athena: Divine Strike, Divine Flourish, Divine Dash, or Athena's Aid Dionysus: Drunken Strike, Drunken Flourish, Drunken Dash, or Dionysus' Aid",
    "god": "Athena"
  },
  {
    "description": "Your Cast blasts an area with freezing Festive Fog that inflicts Chill. Blast Damage: +50%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8e/Ice_Wine.png",
    "name": "Ice Wine",
    "notes": "",
    "prerequisites": "One of each: Dionysus: Trippy Shot Demeter: Demeter's Aid, Frost Flourish, Frost Strike, or Mistral Dash",
    "god": "Dionysus"
  },
  {
    "description": "You cannot be stunned, and resist some damage from Bosses. Boss Damage Reduction: +10%",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/cf/Unshakable_Mettle.png",
    "name": "Unshakable Mettle",
    "notes": "Bosses include the Furies, the Bone Hydra, the Heroes of Elysium, the Secret Boss, and Final Boss.",
    "prerequisites": "One of each: Athena: Divine Strike, Divine Flourish, Phalanx Shot, Divine Dash, or Athena's Aid Poseidon: Tempest Strike, Tidal Dash, Tempest Flourish, Flood Shot, or Poseidon's Aid",
    "god": "Athena"
  },
  {
    "description": "Any Boons you find have superior effects. Minimum Boon Rarity: Epic",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/32/Exclusive_Access.png",
    "name": "Exclusive Access",
    "notes": "",
    "prerequisites": "One of each: Dionysus: Drunken Strike, Drunken Flourish, Trippy Shot, Drunken Dash, or Dionysus' Aid Poseidon: Tempest Strike, Tempest Flourish, Flood Shot, Tidal Dash, or Poseidon's Aid",
    "god": "Dionysus"
  },
  {
    "description": "Your Festive Fog effects also deal lightning damage periodically. Lightning Damage: 80",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e2/Scintillating_Feast.png",
    "name": "Scintillating Feast",
    "notes": "",
    "prerequisites": "One of each: Dionysus: High Tolerance or Trippy Shot Zeus: Lightning Strike, Thunder Flourish, Electric Shot, Thunder Dash, or Zeus' Aid",
    "god": "Dionysus"
  },
  {
    "description": "Your Phalanx Shot Cast bounces between nearby foes. Max Bounces: 5",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/70/Lightning_Phalanx.png",
    "name": "Lightning Phalanx",
    "notes": "",
    "prerequisites": "One of each: Athena: Phalanx Shot Zeus: Lightning Strike, Thunder Flourish, Thunder Dash, or Zeus' Aid",
    "god": "Athena"
  },
  {
    "description": "Your Attack emits chain-lightning when you damage a foe.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f6/Lightning_Strike.png",
    "name": "Lightning Strike",
    "notes": "Tier 1 Bounces: 4 Bounce Range: 520 Deals reduced damage per bounce.",
    "prerequisites": "None",
    "god": "Zeus"
  },
  {
    "description": "Your Special causes a lightning bolt to strike nearby foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/a/ad/Thunder_Flourish.png",
    "name": "Thunder Flourish",
    "notes": "Has internal cooldown of .2 per target. (Bolt only triggers, at most, 5 times per second per enemy) Tier 1  Damage Radius: 200",
    "prerequisites": "None",
    "god": "Zeus"
  },
  {
    "description": "Your Cast is a burst of chain-lightning that bounces between foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/01/Electric_Shot.png",
    "name": "Electric Shot",
    "notes": "Tier 1 Bounces: 5 Bounce Range: 720 Cannot be combined with Aspect of Beowulf",
    "prerequisites": "None",
    "god": "Zeus"
  },
  {
    "description": "Your Cast causes a lightning bolt to strike nearby foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/01/Electric_Shot.png",
    "name": "Thunder Flare",
    "notes": "Tier 1",
    "prerequisites": "Unique to Aspect of Beowulf",
    "god": "Zeus"
  },
  {
    "description": "Your Dash causes a lightning bolt to strike nearby foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b4/Thunder_Dash.png",
    "name": "Thunder Dash",
    "notes": "Tier 1 Range: 500 Damage Radius: 200",
    "prerequisites": "None",
    "god": "Zeus"
  },
  {
    "description": "Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/ec/Zeus%27_Aid.png",
    "name": "Zeus' Aid",
    "notes": "Tier 1 Max Gauge Bonus: 9 Sec. Duration",
    "prerequisites": "None",
    "god": "Zeus"
  },
  {
    "description": "After you take damage, your foe is struck by lightning.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c5/Heaven%27s_Vengeance.png",
    "name": "Heaven's Vengeance",
    "notes": "Tier 1 Damage Radius: 120",
    "prerequisites": "None",
    "god": "Zeus"
  },
  {
    "description": "After you Dash just before getting hit, a bolt strikes a nearby foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/25/Lightning_Reflexes.png",
    "name": "Lightning Reflexes",
    "notes": "Tier 1",
    "prerequisites": "None",
    "god": "Zeus"
  },
  {
    "description": "Your chain-lightning effects bounce more times before expiring.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/6b/Storm_Lightning.png",
    "name": "Storm Lightning",
    "notes": "Tier 2 Electric Shot gains 3, 6 or 9 jumps from this boon instead.",
    "prerequisites": "Electric Shot or Lightning Strike",
    "god": "Zeus"
  },
  {
    "description": "Your lightning bolt effects deal damage in a larger area.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/d/d9/High_Voltage.png",
    "name": "High Voltage",
    "notes": "Tier 2",
    "prerequisites": "Thunder Dash, Thunder Flourish, or Zeus' Aid",
    "god": "Zeus"
  },
  {
    "description": "Your lightning bolt effects have a chance to strike twice.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/65/Double_Strike.png",
    "name": "Double Strike",
    "notes": "Tier 2",
    "prerequisites": "Thunder Dash, Thunder Flourish, or Zeus' Aid",
    "god": "Zeus"
  },
  {
    "description": "Your lightning effects also make foes Jolted.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Static_Discharge.png",
    "name": "Static Discharge",
    "notes": "Tier 2",
    "prerequisites": "Thunder Flourish, Zeus' Aid, Thunder Dash, Heaven's Vengeance, Lightning Strike, Electric Shot, or Lightning Reflexes",
    "god": "Zeus"
  },
  {
    "description": "Your God Gauge charges faster when you deal or take damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/47/Clouded_Judgment.png",
    "name": "Clouded Judgment",
    "notes": "Tier 2",
    "prerequisites": "Aphrodite's Aid, Ares' Aid, Artemis' Aid, Athena's Aid, Demeter's Aid, Dionysus' Aid, Poseidon's Aid, or Zeus' Aid",
    "god": "Zeus"
  },
  {
    "description": "After using Call, you deal more damage for 15 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/3d/Billowing_Strength.png",
    "name": "Billowing Strength",
    "notes": "Tier 2",
    "prerequisites": "Aphrodite's Aid, Ares' Aid, Artemis' Aid, Athena's Aid, Demeter's Aid, Dionysus' Aid, Poseidon's Aid, or Zeus' Aid",
    "god": "Zeus"
  },
  {
    "description": "All your lightning effects create an additional burst. Lightning Damage: 40",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/5/58/Splitting_Bolt.png",
    "name": "Splitting Bolt",
    "notes": "Tier 3 The additional burst is a slow moving spark. Spark Speed: 500 Bounces: 5 Bounce Range: 520",
    "prerequisites": "Double Strike, High Voltage, or Storm Lightning",
    "god": "Zeus"
  },
  {
    "description": "Your Call charges up automatically, but is capped at 25%. Auto Gauge Gain: 1% every .2 seconds",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/ca/Smoldering_Air.png",
    "name": "Smoldering Air",
    "notes": "Cannot be combined with Sigil of the Dead",
    "prerequisites": "One of each: Zeus: Lightning Strike, Thunder Dash, Thunder Flourish, Electric Shot, or Zeus' Aid Aphrodite: Heartbreak Strike, Heartbreak Flourish, Crush Shot, Passion Dash, or Aphrodite's Aid",
    "god": "Zeus"
  },
  {
    "description": "Your Revenge attacks sometimes occur without taking damage. Auto-Revenge Rate: 3 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0a/Vengeful_Mood.png",
    "name": "Vengeful Mood",
    "notes": "",
    "prerequisites": "One of each: Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid Ares: Ares' Aid, Blade Dash, Curse of Agony, Curse of Pain, or Slicing Shot Revenge boon: Curse of Vengeance, Frozen Touch, Heaven's Vengeance, Holy Shield, or Wave of Despair",
    "god": "Zeus"
  },
  {
    "description": "Your collectible  strike nearby foes with lightning every 1 Sec. Lightning Damage: 70",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/6/62/Lightning_Rod.png",
    "name": "Lightning Rod",
    "notes": "",
    "prerequisites": "One of each: Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid Artemis: Artemis' Aid, Deadly Flourish, Deadly Strike, Hunter Dash, or True Shot",
    "god": "Zeus"
  },
  {
    "description": "Your Phalanx Shot Cast bounces between nearby foes. Max Bounces: 5",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/70/Lightning_Phalanx.png",
    "name": "Lightning Phalanx",
    "notes": "",
    "prerequisites": "One of each: Zeus: Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid Athena: Phalanx Shot",
    "god": "Zeus"
  },
  {
    "description": "Jolted status does not expire on your enemies' attacks. Jolted duration: 10 Sec.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/2e/Cold_Fusion.png",
    "name": "Cold Fusion",
    "notes": "",
    "prerequisites": "One of each: Zeus: Static Discharge Demeter: Demeter's Aid, Frost Flourish, Frost Strike, or Mistral Dash",
    "god": "Zeus"
  },
  {
    "description": "Your Festive Fog effects also deal lightning damage periodically. Lightning Damage: 80",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/e/e2/Scintillating_Feast.png",
    "name": "Scintillating Feast",
    "notes": "",
    "prerequisites": "One of each: Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid Dionysus: High Tolerance or Trippy Shot",
    "god": "Zeus"
  },
  {
    "description": "Your knock-away effects also cause foes to be struck by lightning. Lightning Damage 40",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/c7/Sea_Storm.png",
    "name": "Sea Storm",
    "notes": "",
    "prerequisites": "One of each: Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus' Aid Poseidon: Flood Shot, Poseidon's Aid, Tempest Flourish, Tempest Strike, or Tidal Dash",
    "god": "Zeus"
  },
  {
    "description": "Afterward, any  you find is worth +X%.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/38/Chaos_Blessing_Affluence.png",
    "name": "Affluence",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, you deal +X% damage striking foes from behind.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0e/Chaos_Blessing_Eclipse.png",
    "name": "100x100pxAmbush",
    "notes": "Requires the Shadow Presence Mirror Ability",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, you deal +X% damage striking undamaged foes.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/32/Chaos_Blessing_Favor.png",
    "name": "100x100pxAssault",
    "notes": "Requires the Fiery Presence Mirror Ability",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, any  and  you find are worth +X%.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4e/Chaos_Blessing_Flourish.png",
    "name": "Eclipse",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, Boons have +X% chance to be Rare or better.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/8/8c/Chaos_Blessing_Grasp.png",
    "name": "Favor",
    "notes": "Also increase the chance of Epic and Legendary boons by +10%",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, your Special deals +X% damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/1/13/Chaos_Blessing_Lunge.png",
    "name": "Flourish",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, gain +X .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/76/Chaos_Blessing_Shot.png",
    "name": "Grasp",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, your Dash Attack deals +X% damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/4/4f/Chaos_Blessing_Soul.png",
    "name": "Lunge",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, your Cast deals +X% damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/9c/Chaos_Blessing_Strike.png",
    "name": "Shot",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, gain +X .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/2/29/Chaos_Blessing_Defiance.png",
    "name": "Soul",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, your Attack deals +X% damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/9/99/Chaos_Curse_Abyssal.png",
    "name": "Strike",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "Afterward, gain +1 Death Defiance (this escape attempt).",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fd/Chaos_Curse_Addled.png",
    "name": "Defiance",
    "notes": "* This gives Zagreus +1 slot of Defiance, which is only lost after his eventual death Upon depleting, the Defiance slot can be replenished with Kiss of Styx normally",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, you take +300%–500% damage from traps.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/06/Chaos_Curse_Atrophic.png",
    "name": "Abyssal",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, each time you Cast, get hit for 3–5 .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fd/Chaos_Curse_Caustic.png",
    "name": "Addled",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3-4 encounters, your Life Total is reduced by 25–49 .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/f4/Chaos_Curse_Enshrouded.png",
    "name": "Atrophic",
    "notes": "Will not appear if you have less than 50 total health.",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, slain foes toss an Inferno-Bomb at you.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/c/ca/Chaos_Curse_Excruciating.png",
    "name": "Caustic",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 4–5 chambers, chamber reward previews are hidden.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/0/0b/Chaos_Curse_Flayed.png",
    "name": "Enshrouded",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, you take +20%–50% damage.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/f/fe/Chaos_Curse_Maimed.png",
    "name": "Excruciating",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, each time you Special, get hit for 3–5 .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/bf/Chaos_Curse_Pauper.png",
    "name": "Flayed",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, your Dash has -20%–50% reduced range.",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/b/b0/Chaos_Curse_Roiling.png",
    "name": "100x100pxHalting",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, each time you Attack, get hit for 3–5 .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/3/38/Chaos_Curse_Slippery.png",
    "name": "Maimed",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, you cannot earn .",
    "thumbnail": "https://static.wikia.nocookie.net/hades_gamepedia_en/images/7/74/Chaos_Curse_Slothful.png",
    "name": "Pauper's",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, you face +30%–80% more foes.",
    "thumbnail": "",
    "name": "Roiling",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, you cannot collect  for 10–15 seconds.",
    "thumbnail": "",
    "name": "Slippery",
    "notes": "Will not appear when Stygian Soul talent is selected.",
    "prerequisites": "",
    "god": "Chaos"
  },
  {
    "description": "For the next 3–4 encounters, you have -40%–-60% move speed.",
    "thumbnail": "",
    "name": "Slothful",
    "notes": "",
    "prerequisites": "",
    "god": "Chaos"
  }
];

var options = {
  valueNames: [ 'name', 'description', 'god', { attr: 'src', name: 'thumbnail'} ],
  item: 'list-item'
};

var featureList = new List('hades-boons-list', options, listItems);

$('.filter-god').click(function() {
   var godName = $(this).text();
   console.log(godName );
  featureList.filter(function(item) {
    if (item.values().god == godName ) {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('.filter-god-none').click(function() {
  featureList.filter();
  return false;
});
});