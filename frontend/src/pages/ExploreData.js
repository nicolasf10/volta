const destinations = [
    {
      title : "Rio de Janeiro",
      region : "Brazil",
      description : "Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain.",
      tags : ["type-beach", "type-city", "society-sightseeing", "society-museums", "society-culinary", "society-sports", "society-night", "location-america"],
      images : [
        "https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1663467673813-169dcfc7a04e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80",
        "https://images.unsplash.com/photo-1576547849475-57662ff255ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title : "Barcelona",
      region : "Spain",
      description : "Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
      tags : ["type-beach", "type-city", "society-sightseeing", "society-museums", "society-architecture", "society-sports", "society-night", "location-europe", "society-kid"],
      images : [
        "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1579282240050-352db0a14c21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80"
      ]
    },
    {
      title: "Toronto",
      region: "Canada",
      description: "Toronto is the capital city of the Canadian province of Ontario. It's a major Canadian city known for its iconic CN Tower, diverse neighborhoods, and cultural attractions.",
      tags: [
        "type-city",
        "society-architecture",
        "society-sightseeing",
        "society-museums",
        "society-culinary",
        "society-sports",
        "society-night",
        "location-america",
        "society-kid"
      ],
      images: [
        "https://images.unsplash.com/photo-1507992781348-310259076fe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
        "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1542704792-e30dac463c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title: "Tokyo",
      region: "Japan",
      description: "Tokyo is the capital of Japan, and is known for its bright lights, bustling streets, and modern architecture. From the Imperial Palace to the iconic Tokyo Tower, there is plenty to see and do in this vibrant city.",
      tags: ["type-city", "society-sightseeing", "society-museums", "society-culinary", "society-night", "location-asiaoceania"],
      images: [
        "https://images.unsplash.com/photo-1570521462033-3015e76e7432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        "https://images.unsplash.com/photo-1570543922355-c64a19ab2bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1634110555127-12685786b487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title: "Cape Town",
      region: "South Africa",
      description: "Cape Town is a coastal city in South Africa, known for its stunning natural scenery, including Table Mountain and the nearby Cape of Good Hope. Visitors can also enjoy the city's beaches, vineyards, and vibrant cultural scene.",
      tags: ["type-beach", "type-city", "type-nature", "society-sightseeing", "society-museums", "society-culinary", "location-africa"],
      images: [
        "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1599407384144-77deae48a47a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      ]
    },
    {
      title: "Sydney",
      region: "Australia",
      description: "Sydney is a bustling city on Australia's east coast, known for its iconic landmarks such as the Sydney Opera House and Harbour Bridge. Visitors can also enjoy the city's beaches, parks, and lively arts scene.",
      tags: ["type-beach", "type-city", "society-sightseeing", "society-museums", "society-culinary", "society-night", "location-asiaoceania"],
      images: [
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "https://images.unsplash.com/photo-1559651868-066bcc28f358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      ]
    },
    {
      title: "Venice",
      region: "Italy",
      description: "Venice is a picturesque city in northeastern Italy, known for its canals, historic architecture, and artistic heritage. Visitors can take a gondola ride, visit the famous St. Mark's Basilica, and enjoy the city's many museums and galleries.",
      tags: ["type-city", "society-architecture", "society-sightseeing", "society-museums", "society-culinary", "location-europe"],
      images: [
        "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
        "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1553342385-111fd6bc6ab3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      ]
    },
    {
      title: "Marrakech",
      region: "Morocco",
      description: "Marrakech is a vibrant city in Morocco, known for its bustling markets, historic architecture, and lively cultural scene. Visitors can explore the medina, visit the stunning Bahia Palace, and sample delicious Moroccan cuisine.",
      tags: ["type-city", "society-architecture", "society-sightseeing", "society-culinary", "society-night", "location-africa"],
      images: [
        "https://images.unsplash.com/photo-1580746738099-1cb74f972feb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1848&q=80",
        "https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
      ]
    },
    {
        title: "Seychelles",
        region: "East Africa",
        description: "Seychelles is an archipelago of 115 islands in the Indian Ocean, known for its stunning beaches, coral reefs, and nature reserves. Visitors can go snorkeling, hiking, or simply relax on the beach.",
        tags: ["type-beach", "type-nature", "location-africa", "society-culinary"],
        images: ["https://images.unsplash.com/photo-1553829176-61484f865ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80", "https://images.unsplash.com/photo-1595773382291-06d1b6cbc43b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8U2V5Y2hlbGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1593427264193-1d7bba99d577?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFNleWNoZWxsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Bali",
        region: "Indonesia",
        description: "Bali is a popular destination in Indonesia, known for its beautiful beaches, rice paddies, and Hindu temples. Visitors can enjoy water sports, cultural performances, or simply relax in a luxurious resort.",
        tags: ["type-beach", "type-nature", "society-architecture", "location-asiaoceania"],
        images: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QmFsaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Lapland",
        region: "Finland",
        description: "Lapland is a region in northern Finland, known for its snowy landscapes, the Northern Lights, and Santa Claus. Visitors can go skiing, snowmobiling, or visit reindeer farms and ice hotels.",
        tags: ["type-winter", "type-nature", "location-europe", "society-sports"],
        images: ["https://images.unsplash.com/photo-1594279761639-cb1787798b52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TGFwbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1568607689150-17e625c1586e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8TGFwbGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1536999606895-b6c1971676c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fExhcGxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Cartagena",
        region: "Colombia",
        description: "Cartagena is a historic city on the Caribbean coast of Colombia, known for its colorful colonial architecture, vibrant street life, and delicious cuisine. Visitors can explore the Old Town, visit museums and galleries, or simply enjoy the tropical climate.",
        tags: ["type-city", "society-architecture", "society-sightseeing", "society-culinary", "location-america"],
        images: ["https://images.unsplash.com/photo-1534943441045-1009d7cb0bb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Q2FydGFnZW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1566948758347-4f2c98c2db40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fENhcnRhZ2VuYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1536308037887-165852797016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q2FydGFnZW5hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Queenstown",
        region: "New Zealand",
        description: "Queenstown is a resort town in New Zealand, known for its stunning natural scenery, adventure sports, and vibrant nightlife. Visitors can go bungee jumping, skiing, or hiking, or simply enjoy the beauty of Lake Wakatipu.",
        tags: ["type-nature", "society-sports", "society-night", "location-asiaoceania"],
        images: ["https://images.unsplash.com/photo-1593755673003-8ca8dbf906c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8UXVlZW5zdG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1512017615494-fdf6146235ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UXVlZW5zdG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1600593830144-a29f2855730e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8UXVlZW5zdG93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Santorini",
        region: "Greece",
        description: "Santorini is a volcanic island known for its picturesque white-washed buildings with blue domed roofs, offering a breathtaking view of the Aegean Sea. Take a dip in the warm waters of the Mediterranean, indulge in traditional Greek cuisine and explore the island's ancient ruins.",
        tags: ["type-beach", "society-architecture", "society-sightseeing", "location-europe"],
        images: ["https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8U2FudG9yaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8U2FudG9yaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1560703649-e3055f28bcf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fFNhbnRvcmluaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Patagonia",
        region: "Argentina/Chile",
        description: "Patagonia is a sparsely populated region at the southern end of South America, spanning parts of Argentina and Chile. It's known for its glaciers, mountains, and wildlife, including penguins and guanacos. Visitors can go hiking, kayaking, or simply enjoy the stunning landscapes.",
        tags: ["type-nature", "location-america", 'society-sightseeing', 'society-culinary'],
        images: ["https://images.unsplash.com/photo-1546569397-ab326af881f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF0YWdvbmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGF0YWdvbmlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1494783329112-4a6795291178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhdGFnb25pYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Dubrovnik",
        region: "Croatia",
        description: "Dubrovnik is a beautiful coastal city in Croatia, known for its stunning architecture, rich history, and picturesque beaches. Visitors can explore the old town, walk along the city walls for breathtaking views, and take a day trip to the nearby islands.",
        tags: ["type-city", "society-architecture", "society-sightseeing", "type-beach", "location-europe"],
        images: ["https://images.unsplash.com/photo-1555990793-da11153b2473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8RHVicm92bmlrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1610104052927-ed67e7faefc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8RHVicm92bmlrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1565784623727-8cebf4712b2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8RHVicm92bmlrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Siem Reap",
        region: "Cambodia",
        description: "Siem Reap is a city in Cambodia, known for being the gateway to the famous Angkor Wat temple complex. Visitors can explore the temples, visit the floating villages, and experience the vibrant local culture and cuisine.",
        tags: ["type-city", "society-sightseeing", "society-culinary", "location-asiaoceania"],
        images: ["https://images.unsplash.com/photo-1609949165382-2e442783c8d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8U2llbSUyMFJlYXB8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1568715281772-74fa7a5e6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFNpZW0lMjBSZWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1583500553362-2ae891162e78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFNpZW0lMjBSZWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Bavaria",
        region: "Germany",
        description: "Bavaria is a region in southern Germany known for its stunning natural beauty, picturesque towns and villages, and rich history. Visitors can explore the famous Neuschwanstein Castle, hike in the Bavarian Alps, and enjoy traditional Bavarian food and beer.",
        tags: ["type-nature", "society-sightseeing", "society-culinary", "society-culinary", "location-europe", "society-kid"],
        images: ["https://images.unsplash.com/photo-1551290470-554bf3a4fa80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF2YXJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1593158596286-e4914dab130a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmF2YXJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1571937032383-ba58c30f1653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmF2YXJpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Aspen",
        region: "USA",
        description: "Aspen is a popular winter destination in Colorado, known for its world-class ski resorts and stunning natural scenery. Visitors can hit the slopes, relax in hot springs, and explore the charming downtown area.",
        tags: ["type-winter", "society-sports", "society-culinary", "location-america", "society-kid"],
        images: ["https://images.unsplash.com/photo-1613864557842-388228d9cbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXNwZW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1521849741078-8dae9b55289b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFzcGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1580319204908-eff9d6f0bd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGFzcGVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Zermatt",
        region: "Switzerland",
        description: "Zermatt is a picturesque village in the Swiss Alps, known for its excellent skiing and stunning views of the Matterhorn. Visitors can hit the slopes, enjoy the local cuisine and wine, and take in the stunning alpine scenery.",
        tags: ["type-winter", "society-sports", "society-culinary", "location-europe", "society-kid"],
        images: ["https://images.unsplash.com/photo-1530841344029-ec3ae0fa4cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8WmVybWF0dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1571274834067-3a24675547b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8WmVybWF0dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFplcm1hdHR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Maui",
        region: "Hawaii, USA",
        description: "Maui is a stunning Hawaiian island known for its beautiful beaches, scenic drives, and outdoor activities. Visitors can drive along the Road to Hana, watch the sunrise at Haleakala, or relax on the beaches of Kaanapali or Wailea.",
        tags: ["type-beach", "type-nature", "society-sports", "society-kid", "location-america"],
        images: ["https://images.unsplash.com/photo-1450045439515-ff27c2f2e6b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8TWF1aSUyMGhhd2FpaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1558983731-16245204a27d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8TWF1aSUyMGhhd2FpaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1607896477968-0acc886e30f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fE1hdWklMjBoYXdhaWl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Kruger National Park",
        region: "South Africa",
        description: "Kruger National Park is a wildlife sanctuary that boasts an impressive array of African wildlife, including the Big Five (lions, elephants, leopards, rhinos, and buffalos). Visitors can go on game drives, guided walks, or even hot air balloon rides to see these majestic animals in their natural habitat.",
        tags: ["type-nature", "society-sightseeing", "society-kid", "location-africa"],
        images: ["https://images.unsplash.com/photo-1594916105020-b28f829993b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8S3J1Z2VyJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1612703252506-e2f1f674752d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8S3J1Z2VyJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1621963319398-40c4b226ffa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8S3J1Z2VyJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Yellowstone National Park",
        region: "Wyoming, USA",
        description: "Yellowstone National Park is a natural wonderland that features a diverse range of geothermal features, including hot springs, geysers, and mud pots. Visitors can explore the park's scenic trails, witness the famous Old Faithful geyser, or observe the park's unique wildlife, such as bison, elk, and wolves.",
        tags: ["type-nature", "society-sightseeing", "society-kid", "location-america"],
        images: ["https://images.unsplash.com/photo-1629985692757-48648f4f1fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8WWVsbG93c3RvbmUlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1608233695800-34245ba7274f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8WWVsbG93c3RvbmUlMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1569545957151-ad2f428c2242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFllbGxvd3N0b25lJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Dublin",
        region: "Ireland",
        description: "Dublin is a city steeped in history and culture, from its iconic literary legacy to its ancient cathedrals and castles. Visitors can experience the city's vibrant nightlife, delicious cuisine, and friendly locals.",
        tags: ["type-city", "society-night", "society-culinary", "location-europe"],
        images: ["https://images.unsplash.com/photo-1602061464448-5859b31eb1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHVibGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1605969353711-234dea348ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVibGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHVibGlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "New York City",
        region: "New York, USA",
        description: "New York City is a city that never sleeps, offering endless entertainment options from world-renowned museums and theaters to bustling nightlife and diverse cuisine. Visitors can experience the iconic landmarks such as the Statue of Liberty and the Empire State Building or explore the city's distinct neighborhoods.",
        tags: ["type-city", "society-sightseeing", "society-night", "society-culinary", "society-sports", "location-america"],
        images: ["https://images.unsplash.com/photo-1580752300969-1ceaaa1f3039?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bnljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bnljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGltZXMlMjBzcXVhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"]
      },
      {
        title: "Cancun",
        region: "Mexico",
        description: "Cancun is a tropical paradise known for its stunning beaches, turquoise waters, and vibrant nightlife. Visitors can relax on the beach, explore the nearby Mayan ruins, or experience the local cuisine and culture.",
        tags: ["type-beach", "society-night", "society-culinary", "location-america"],
        images: ["https://images.unsplash.com/photo-1570737543098-0983d88f796d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FuY3VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1568402102990-bc541580b59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fENhbmN1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fENhbmN1bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"],
      },
      {
        title: "Malé",
        region: "Maldives",
        description: "Malé is the bustling capital city of the Maldives, known for its stunning beaches, crystal-clear waters, and vibrant culture. Visitors can explore the city's historic landmarks, enjoy water sports such as snorkeling and diving, or simply relax on the beach.",
        tags: ["type-beach", "society-sightseeing", "society-sports", "location-asiaoceania"],
        images: ["https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZGl2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZGl2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60", "https://images.unsplash.com/photo-1523632117739-12cc7fa95ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGRpdmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"]
      }
]

export default destinations;