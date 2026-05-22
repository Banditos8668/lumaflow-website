export const businessData = {
  businessName: "Rada's Beauty",
  ownerName: "Rada Altwein",
  phone: "+41 78 795 21 35",
  address: "Badenerstrasse 653, 8048 Zürich",
  hours: "Mo–Sa nach Vereinbarung",

  headline: "Ihre persönliche\nKosmetikerin in Zürich.",
  subline: "Rada Altwein behandelt Sie selbst – ohne Hektik, ohne Warteschlange. Individuelle Pflege seit über 20 Jahren in Zürich Altstetten.",

  services: [
    {
      name: "Manicure",
      description: "Gepflegte Hände, die auffallen. Jede Maniküre sorgfältig und individuell – vom Classic bis zum langlebigen Gel oder Shellac.",
      treatments: ["Classic Maniküre", "Gel / Shellac", "Nagelpflege & Lack"],
      startingPrice: "ab CHF 55",
      duration: "ab 45 Min.",
      imageSlot: "service-manicure",
      popular: true,
    },
    {
      name: "Pedicure",
      description: "Verwöhnte, gepflegte Füsse – gründlich und entspannend. Ergebnisse, die man noch Wochen später sieht und fühlt.",
      treatments: ["Classic Pediküre", "Spa Pediküre", "Shellac Pediküre"],
      startingPrice: "ab CHF 70",
      duration: "ab 60 Min.",
      imageSlot: "service-pedicure",
    },
    {
      name: "Haarentfernung",
      description: "Glatte Haut, die lange bleibt. Warmwachs für Beine, Achseln und Bikinizone – sanft, gründlich, langanhaltend.",
      treatments: ["Beine", "Achseln", "Bikinizone", "Oberlippe"],
      startingPrice: "ab CHF 15",
      duration: "ab 10 Min.",
      imageSlot: "service-waxing",
    },
    {
      name: "Gesichtsbehandlung",
      description: "Klare, gepflegte Haut – abgestimmt auf Ihren Hauttyp. Von der Tiefenreinigung bis zur Anti-Aging-Behandlung.",
      treatments: ["Tiefenreinigung", "Anti-Aging", "Hydration Boost"],
      startingPrice: "ab CHF 85",
      duration: "ab 60 Min.",
      imageSlot: "service-gesicht",
      popular: true,
    },
    {
      name: "Bodyforming (DiViNiA)",
      description: "Körper-Contouring mit DiViNiA-Technologie: Straffung, Konturierung und Cellulite-Reduktion. Sichtbar bereits nach wenigen Behandlungen.",
      treatments: ["Erstbehandlung", "Folgebehandlung", "5er Paket"],
      startingPrice: "ab CHF 80",
      duration: "ab 45 Min.",
      imageSlot: "service-bodyforming",
    },
    {
      name: "Augenbrauen & Wimpern",
      description: "Ausdrucksstarker Blick, natürlich betont. Augenbrauenforming, Wimpernlifting und Färben – perfekt aufeinander abgestimmt.",
      treatments: ["Augenbrauenforming", "Wimpernlifting", "Kombi-Paket"],
      startingPrice: "ab CHF 22",
      duration: "ab 15 Min.",
      imageSlot: "service-augenbrauen",
    },
  ],

  bookingCategories: [
    {
      id: "manicure",
      name: "Manicure",
      services: [
        { name: "Classic Maniküre", duration: "45 Min.", price: "CHF 55" },
        { name: "Gel Maniküre", duration: "60 Min.", price: "CHF 75" },
        { name: "Shellac Maniküre", duration: "75 Min.", price: "CHF 85" },
        { name: "Nagelpflege (ohne Lack)", duration: "30 Min.", price: "CHF 40" },
      ],
    },
    {
      id: "pedicure",
      name: "Pedicure",
      services: [
        { name: "Classic Pediküre", duration: "60 Min.", price: "CHF 70" },
        { name: "Spa Pediküre", duration: "75 Min.", price: "CHF 90" },
        { name: "Shellac Pediküre", duration: "90 Min.", price: "CHF 100" },
      ],
    },
    {
      id: "damen-waxing",
      name: "Haarentfernung",
      services: [
        { name: "Oberlippe", duration: "10 Min.", price: "CHF 15" },
        { name: "Achseln", duration: "15 Min.", price: "CHF 22" },
        { name: "Bikinizone", duration: "20 Min.", price: "CHF 32" },
        { name: "Beine (Unterschenkel)", duration: "30 Min.", price: "CHF 42" },
        { name: "Beine (komplett)", duration: "45 Min.", price: "CHF 62" },
      ],
    },
    {
      id: "gesicht",
      name: "Gesichtsbehandlung",
      services: [
        { name: "Tiefenreinigung", duration: "60 Min.", price: "CHF 85" },
        { name: "Anti-Aging Behandlung", duration: "75 Min.", price: "CHF 110" },
        { name: "Hydration Boost", duration: "60 Min.", price: "CHF 90" },
      ],
    },
    {
      id: "bodyforming",
      name: "Bodyforming (DiViNiA)",
      services: [
        { name: "Erstbehandlung inkl. Beratung", duration: "60 Min.", price: "CHF 95" },
        { name: "Folgebehandlung", duration: "45 Min.", price: "CHF 80" },
        { name: "5er Paket", duration: "je 45 Min.", price: "CHF 350" },
      ],
    },
    {
      id: "augenbrauen",
      name: "Augenbrauen & Wimpern",
      services: [
        { name: "Augenbrauenforming", duration: "20 Min.", price: "CHF 28" },
        { name: "Augenbrauenfärben", duration: "15 Min.", price: "CHF 22" },
        { name: "Wimpernlifting", duration: "45 Min.", price: "CHF 68" },
        { name: "Augenbrauen & Wimpern kombi", duration: "60 Min.", price: "CHF 78" },
      ],
    },
  ],

  aboutParagraphs: [
    "Seit über zwanzig Jahren widme ich mich der persönlichen Pflege meiner Kundinnen und Kunden. Jede Behandlung wird individuell auf Sie abgestimmt. Kein Fliessband, keine Hektik.",
    "Ich arbeite ausschliesslich mit geprüften, hochwertigen Produkten. Ihr Wohlbefinden steht dabei immer im Mittelpunkt.",
  ],

  testimonials: [
    {
      text: "Rada nimmt sich wirklich Zeit für jede Behandlung. Ich komme seit Jahren regelmässig und fühle mich immer gut aufgehoben.",
      author: "Sandra M.",
      service: "Manicure & Pedicure",
      stars: 5,
    },
    {
      text: "Die Pediküre ist einfach wunderbar. Sorgfältig, gründlich und das Ergebnis hält lange. Sehr empfehlenswert.",
      author: "Christine B.",
      service: "Gesichtsbehandlung",
      stars: 5,
    },
    {
      text: "Tolle Beratung und sehr professionelle Behandlung. Das Studio ist einladend und ich komme gerne wieder.",
      author: "Fatima K.",
      service: "Bodyforming",
      stars: 5,
    },
  ],

  faqs: [
    {
      question: "Wie kann ich einen Termin vereinbaren?",
      answer:
        "Sie können mich telefonisch unter +41 78 795 21 35 erreichen oder das Kontaktformular auf dieser Seite nutzen. Ich melde mich innerhalb von 24 Stunden bei Ihnen.",
    },
    {
      question: "Was passiert, wenn ich meinen Termin absagen muss?",
      answer:
        "Bitte sagen Sie mindestens 24 Stunden vorher ab, damit ich den Termin neu vergeben kann. Bei späteren Absagen behalte ich mir vor, 50 % des Behandlungspreises in Rechnung zu stellen.",
    },
    {
      question: "Welche Behandlungen eignen sich für Erstkundinnen?",
      answer:
        "Für einen ersten Besuch empfehle ich eine Classic Maniküre oder eine Gesichtsbehandlung. So lernen wir uns kennen und ich kann auf Ihre Haut und Ihre Wünsche eingehen.",
    },
    {
      question: "Wie lange dauern die Behandlungen normalerweise?",
      answer:
        "Das hängt von der gewählten Behandlung ab. Eine Maniküre dauert etwa 45 bis 60 Minuten, eine Pediküre 60 bis 75 Minuten und eine Gesichtsbehandlung 60 bis 90 Minuten.",
    },
    {
      question: "Welche Produkte verwenden Sie?",
      answer:
        "Ich arbeite ausschliesslich mit geprüften, dermatologisch getesteten Produkten hoher Qualität. Auf Wunsch informiere ich Sie gerne beim Termin über die verwendeten Marken.",
    },
    {
      question: "Gibt es Parkmöglichkeiten oder ÖV in der Nähe?",
      answer:
        "Ja, das Studio ist gut erreichbar. Mit dem Tram 2 bis Grimselstrasse oder Bus 80 bis Lindenplatz. Parkplätze sind in der Nähe des Studios vorhanden.",
    },
    {
      question: "Wie bereite ich mich auf meinen Termin vor?",
      answer:
        "Bitte kommen Sie mit sauberem, unbehandeltem Haar und wenn möglich ohne Nagellack. Für Waxing-Behandlungen sollte das Haar mindestens 0,5 cm lang sein.",
    },
    {
      question: "Kann ich mehrere Behandlungen kombinieren?",
      answer:
        "Ja, sehr gerne. Viele Kundinnen kombinieren zum Beispiel Maniküre und Pediküre oder Augenbrauen und Wimpern an einem Termin. Sprechen Sie mich einfach an.",
    },
  ],
}
