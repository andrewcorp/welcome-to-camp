const rooms = {
  wharf: {
    slug: "wharf",
    type: 1, // 1 = standard, 2 = kills straight away, 3 = kills unless pre-requisites satisfied
    friendly_name: "The wharf",
    introduction: "Rain falls all around you, blinding your vision, as the wind howls through the trees. Your ferry crashes against the dock. You step out on to the wharf, itinerary in hand and laptop in backpack. Your legs are wobbly. You throw up.",
    description: "The captain stands behind you at the entrance to the boat, almost as if he is guarding it. He eyes you suspiciously.\n\nThe camp leader waits by the path up ahead. His shorts / poncho combination is quite alluring. To your left is the ocean. To your right is the same ocean. The wind is getting stronger.",
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
    type: 3
  },
  ocean: {
    slug: "ocean",
    introduction: "You fall into the sea. It is deep and cold.",
    type: 2,
  },
  path: {
    slug: "path",
    type: 1,
    introduction: "You walk up the path. It is slick with rain. You think you spot something in the distance. It might just be the dark playing tricks.\n\nYou hear the gravel crunching behind you. You turn around, but there is nothing there. You turn back to see a wild wallaby standing in front of you. There is something hanging from its teeth. On closer inspection, it appears to be a lanyard.",
    description: "Don't die",
    items: [
      "stick",
    ],
    adjoining_rooms: [
      "ocean",
      "ocean",
      "wharf",
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
