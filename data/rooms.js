const rooms = {
  wharf: {
    slug: "wharf",
    type: 1, // 1 = standard, 2 = kills straight away, 3 = kills unless pre-requisites satisfied
    friendly_name: "The wharf",
    introduction: "Rain falls all around you, blinding your vision, as the wind howls through the trees. Your ferry crashes against the dock. You step out on to the wharf, itinerary in hand and laptop in backpack. Your legs are wobbly. You throw up.",
    description: "The captain stands at the south of the wharf by the entrance to the boat, almost as if he is guarding it. He eyes you suspiciously.\n\nThe camp leader waits by the path up to the north. His shorts / poncho combination is quite alluring. To the west is the ocean. To the east is the same ocean. The wind is getting stronger.",
    inhabitants: [
      "captain",
      "camp_leader"
    ],
    items: [
      "bird"
    ],
    adjoining_rooms: [
      "path",
      "ocean",
      "boat",
      "ocean"
    ],
  },
  boat: {
    slug: "boat",
    friendly_name: "The boat",
    type: 3
  },
  ocean: {
    slug: "ocean",
    friendly_name: "The ocean",
    introduction: "You fall into the sea. It is deep and cold.",
    type: 2,
  },
  path: {
    slug: "path",
    friendly_name: "The path",
    type: 1,
    introduction: "You walk up the path. It is slick with rain. You think you spot something in the distance. It might just be the dark playing tricks.\n\nYou hear the gravel crunching behind you. You turn around, but there is nothing there. You turn back to see a wild wallaby standing in front of you. There is something hanging from its teeth. On closer inspection, it appears to be a lanyard.",
    description: "The wallaby stares at you intently, its breathing frantic and fast paced. You need to move it along if you want to make it to the warmth of the dining hall up ahead.\n\nTo the east is the ocean, and it is not swimming weather. To the west is the fisherman's shack, a refuge from the storm. To the south is the wharf, but the captain did not look like he wanted to make friends. The camp leader is nowhere to be seen. Maybe that is his lanyard?",
    items: [
      "stick",
    ],
    adjoining_rooms: [
      "ocean",
      "ocean",
      "wharf",
      "fishermans_shack"
    ],
  },
  fishermans_shack: {
    slug: "fishermans_shack",
    friendly_name: "The fisherman's shack",
    type: 1,
    introduction: "You enter the fisherman's shack.",
    description: "Rusty hooks litter the floor and the faint smell of urine litters the air. You can hear the rain pattering on the tin roof and the waves crashing on the shore. To the west is the ocean. There's good fishing out there. To the north and south is more ocean. To the east is the path.",
    items: [
      "fishing_rod",
      "empty_beer_can",
      "lantern"
    ],
    adjoining_rooms: [
      "ocean",
      "path",
      "ocean",
      "ocean"
    ],

  }
}

/* Rooms:
Boat
Wharf
Path
Fisherman's shack
Beach
Cliffs
Volleyball court
Dining hall
Kitchen
Toilet
Garden path
Dorm
Bathroom
*/

export default rooms
