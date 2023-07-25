const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const providers = [
  {
    id: "apple",
    name: "Apple TV+",
    url: "https://www.apple.com/apple-tv-plus/",
  },
  {
    id: "espn",
    name: "ESPN TV+",
    url: "https://plus.espn.com/",
  },
  {
    id: "hulu",
    name: "Hulu",
    url: "https://www.hulu.com/",
  },
  {
    id: "netflix",
    name: "Netflix",
    url: "https://www.netflix.com/",
  },
  {
    id: "sling",
    name: "Sling TV",
    url: "https://www.sling.com/",
  },
];

const providerPlans = [
  {
    id: 1,
    provider_id: "apple",
    name: "Apple TV+",
    description:
      "Apple TV+ subscribers enjoy critically acclaimed shows and films only on the Apple TV app. Only on the Apple TV+ app with an Apple TV+ subscription. All your TV. All in one app. New Originals every month. Up to six family members. Ad-free and on demand. Watch offline.",
  },
  {
    id: 2,
    provider_id: "sling",
    name: "Sling Orange",
    description: "30+ top channels and ESPN",
  },
  {
    id: 3,
    provider_id: "sling",
    name: "Sling Blue",
    description: "50+ top channels, 50 hour DVR, live news and sports",
  },
  {
    id: 4,
    provider_id: "sling",
    name: "Sling Orang+Blue",
    description:
      "50+ top channels, ESPN, top, 50 hour DVR, live news and sports",
  },
  {
    id: 5,
    provider_id: "hulu",
    name: "Hulu On Demand",
    description: "Award winning Hulu originals, Thousands of shows and more",
  },
  {
    id: 6,
    provider_id: "hulu",
    name: "Hulu + Live TV",
    description:
      "Award winning Hulu originals, Thousands of shows and more, 65+ top TV channels, record live TV",
  },
  {
    id: 7,
    provider_id: "netflix",
    name: "Netflix Basic",
    description: "Unlimited movies, TV shows and more",
  },
  {
    id: 8,
    provider_id: "netflix",
    name: "Netflix Standard",
    description:
      "Unlmiited movies, TV shows, HD available, 2 screens at a time",
  },
  {
    id: 9,
    provider_id: "espn",
    name: "ESPN+",
    description: "Live sports and ESPN+ originals + thousands of live events",
  },
];

const planPrices = [
  {
    id: 1,
    provider_plan_id: 1,
    price: 4.99,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 2,
    provider_plan_id: 1,
    price: 5.99,
    cadence: "MONTH",
    currency: "CAD",
  },
  {
    id: 3,
    provider_plan_id: 2,
    price: 35,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 4,
    provider_plan_id: 3,
    price: 35,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 5,
    provider_plan_id: 4,
    price: 50,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 6,
    provider_plan_id: 5,
    price: 5.99,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 7,
    provider_plan_id: 6,
    price: 64.99,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 8,
    provider_plan_id: 7,
    price: 8.99,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 9,
    provider_plan_id: 8,
    price: 13.99,
    cadence: "MONTH",
    currency: "USD",
  },
  {
    id: 10,
    provider_plan_id: 9,
    price: 5.99,
    cadence: "MONTH",
    currency: "USD",
  },
];

const channels = [
  {
    id: 1,
    call_sign: "espn",
    name: "ESPN",
    type: "NATIONAL",
  },
  {
    id: 2,
    call_sign: "espn2",
    name: "ESPN2",
    type: "NATIONAL",
  },
  {
    id: 3,
    call_sign: "nbc",
    name: "NBC",
    type: "NATIONAL",
  },
  {
    id: 4,
    call_sign: "cbc",
    name: "CBC",
    type: "LOCAL",
  },
];

const providerPlanChannels = [
  {
    id: 1,
    provider_plan_id: 2,
    channel_id: 1,
  },
  {
    id: 2,
    provider_plan_id: 2,
    channel_id: 2,
  },
  {
    id: 3,
    provider_plan_id: 4,
    channel_id: 1,
  },
  {
    id: 4,
    provider_plan_id: 4,
    channel_id: 2,
  },
  {
    id: 5,
    provider_plan_id: 9,
    channel_id: 1,
  },
  {
    id: 6,
    provider_plan_id: 9,
    channel_id: 2,
  },
  {
    id: 7,
    provider_plan_id: 3,
    channel_id: 3,
  },
  {
    id: 8,
    provider_plan_id: 3,
    channel_id: 4,
  },
  {
    id: 9,
    provider_plan_id: 6,
    channel_id: 3,
  },
  {
    id: 10,
    provider_plan_id: 6,
    channel_id: 4,
  },
];

const events = [
  {
    id: 1,
    name: "U.S. Open Third Round - Kei Nishikori vs. Novak Djokovic",
    description:
      "The United States Open Tennis Championships is a hard court tennis tournament. ",
    unix_timestamp: 1630877400,
    type: "SPORT",
  },
  {
    id: 2,
    name: "MLB: Blue Jays vs Baltimore Oreoles",
    description: "",
    unix_timestamp: 1630953000,
    type: "SPORT",
  },
  {
    id: 3,
    name: "Saturday Night Live ",
    description: "",
    unix_timestamp: 1630866600,
    type: "SHOW",
  },
  {
    id: 4,
    name: "60 minutes Season 3 Episode 51",
    description: "",
    unix_timestamp: 1633545000,
    type: "SHOW",
  },
];

const eventChannels = [
  {
    id: 1,
    event_id: 1,
    channel_id: 2,
  },
  {
    id: 2,
    event_id: 2,
    channel_id: 2,
  },
  {
    id: 3,
    event_id: 3,
    channel_id: 3,
  },
  {
    id: 4,
    event_id: 4,
    channel_id: 4,
  },
];

async function main() {
  await prisma.$transaction(
    providers.map((provider) => prisma.providers.create({ data: provider }))
  );
  await prisma.$transaction(
    providerPlans.map((plans) => prisma.providerPlans.create({ data: plans }))
  );
  await prisma.$transaction(
    planPrices.map((price) => prisma.providerPlanPrice.create({ data: price }))
  );
  await prisma.$transaction(
    channels.map((channel) => prisma.channels.create({ data: channel }))
  );
  await prisma.$transaction(
    providerPlanChannels.map((planChannels) =>
      prisma.providerPlanChannels.create({ data: planChannels })
    )
  );
  await prisma.$transaction(
    events.map((event) => prisma.events.create({ data: event }))
  );
  await prisma.$transaction(
    eventChannels.map((eventChannel) => prisma.eventsChannel.create({ data: eventChannel }))
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
