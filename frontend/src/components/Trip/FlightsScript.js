KAYAK.embed({
    container: document.getElementById("kayakSearchWidgetContainer"),
    hostname: "www.kayak.com",
    autoPosition: true,
    defaultProduct: "hotels",
    enabledProducts: ["hotels", "flights"],
    startDate: "2018-10-02",
    endDate: "2018-10-28",
    origin: "New York, NY",
    destination: "Boston, MA",
    ssl: true,
    affiliateId: "acme_corp",
    isInternalLoad: false,
    lc: "en",
    cc: "us",
    mc: "EUR"
});