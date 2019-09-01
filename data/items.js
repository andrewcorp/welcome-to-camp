const items = {
  bird: {
    friendlyName: "Bird",
    description: "A bird of prey. It sort of looks like a sea eagle. Maybe its feathers will be useful for something.",
    usage: "You pluck a feather from the bird's tail.",
    effect: {
      correct: {
        description: "You tie the feather to your arrow. In one swift motion, you draw your bow and send an arrow straight into the boat captain's heart. The boat is yours for the taking.",
        kills: "captain"
      },
      incorrect: {
        description: "The bird turns and claws at your eyes. You stumble blindly, looking for something to steady yourself. In a panic, you wander too close the edge of the rocks and fall to your death.",
        kills: "player"
      }
    },
    conditions: {
      room: "wharf",
      items: [
        "bow",
        "stick"
      ]
    }
  },
  stick: {
    friendlyName: "A stick"
  }
}

export default items
