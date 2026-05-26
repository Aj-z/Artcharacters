export interface Character {
  name: string;
  cardname: string;
  category: "Hormone" | "Neurotransmitter" | "Wanderer";
  formula: string; // e.g. C10H12N2O for serotonin
  archetype: string; // e.g. "The Peacekeeper"
  image: string;
  altImage: string;
  portrait: string;
  description: string;
  color: {
    primary: string; // e.g., "emerald"
    hex: string;     // e.g., "#10b981"
    bgGradient: string; // Tailwind gradient classes
  };
  attributes: {
    label: string;
    value: number;
  }[];
  trivia: string[];
}

export const characters: Character[] = [
  {
    name: "Hormones // Serotonin",
    cardname: "Serotonin",
    category: "Hormone",
    formula: "C10H12N2O",
    archetype: "The Beacon of Calm",
    image: "https://cdn.cara.app/production/posts/f5e27680-532f-4524-ba9f-ff928a4a6a2a/ajloria-HkVAgxQwLkT8UXuXRglXH-DEFAULTSeratonin_splash6e81c8f2-5df6-4718-bf03-5fa1e16099ca.png",
    altImage: "https://cdn.cara.app/production/posts/a82b5cb7-ca2d-4a31-9899-83b4a71e7c07/ajloria-k9cAoa-XYTrbt3SuODpjZ-MEDIUMseratonin26ead09a1-ab4c-4100-adf7-43417c0d40d6.png",
    portrait: "/characters/Sera.png",
    description: "From a young age, Serotonin was drawn to the quiet corners of nature, where the sunlight filtered softly through leaves and the wind carried gentle whispers. Even as a child, she felt the emotions of those around her deeply, laughing when friends laughed and crying when they cried. She would often sit for hours under trees, listening to the rustle of leaves as if they spoke back to her. Her leaf-controlling powers first appeared in small, playful ways. Loved and cherished by those who knew her sensitivity, Serotonin grew up learning to balance her empathetic heart with mindfulness, finding comfort in meditation, quiet walks, and the small wonders of the natural world. Even then, she was already a little beacon of warmth and calm, ready to lift others’ spirits with a kind word, a laugh, or the soft dance of leaves around her.",
    color: {
      primary: "emerald",
      hex: "#10b981",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    attributes: [
      { label: "Tranquility", value: 95 },
      { label: "Empathy", value: 92 },
      { label: "Vitality", value: 50 },
      { label: "Focus", value: 75 }
    ],
    trivia: [
      "Known as the body's natural mood stabilizer and emotional balancer.",
      "Regulates sleep, digestion, and bone health in addition to emotional well-being.",
      "Deeply connected with nature and slow, mindful breathing patterns."
    ]
  },
  {
    name: "Hormones // Endorphin",
    cardname: "Endorphin",
    category: "Hormone",
    formula: "C158H251N39O46S",
    archetype: "The Quiet Protector",
    image: "https://cdn.cara.app/production/posts/2f77816e-14a3-4588-9bdb-4f9ea4037b13/ajloria-Mg8n7kfxUcvMUiAQH5KNK-DEFAULTendo54cf91f5-a70a-434e-9f83-fc629a08677e.png",
    altImage: "https://cdn.cara.app/production/posts/f479c1ae-55aa-4489-9436-3d15e10d2284/ajloria-uW6iMSMf9ld3hK_zJ-aPG-MEDIUMendorphin1bd9f970a-2d63-4610-b351-dcb47ca94989-(1).png",
    portrait: "/characters/Endo.png",
    description: "Endorphin is the quiet protector. Ever since childhood, he’s been the one to step forward when others hesitate, shielding his friends from harm without a second thought. Though often aloof and reserved, his actions speak louder than words—steady, dependable, and strong when it counts. He hides his own pain behind an easy smile, brushing off wounds with a casual “I’m fine” as long as everyone else is safe. Beneath his cool, laid-back demeanor lies a heart driven by loyalty and quiet courage. Endorphin is the embodiment of resilience and comfort, the one who absorbs the hurt so others can heal, the silent strength that reminds everyone they’re not alone.",
    color: {
      primary: "indigo",
      hex: "#6366f1",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    attributes: [
      { label: "Pain Relief", value: 95 },
      { label: "Resilience", value: 98 },
      { label: "Euphoria", value: 65 },
      { label: "Sociality", value: 45 }
    ],
    trivia: [
      "Produced primarily in response to physical stress, pain, or high-exertion activity.",
      "Serves as an internal natural analgesic, similar to morphine.",
      "Prefers intense training, sparring, and heavy workloads to trigger his quiet focus."
    ]
  },
  {
    name: "Hormones // Dopamine",
    cardname: "Dopamine",
    category: "Hormone",
    formula: "C8H11NO2",
    archetype: "The Ambitious Pioneer",
    image: "https://cdn.cara.app/production/posts/bb4e0780-fd6a-4690-bfd2-c0a9c78e33be/ajloria-FacFWJxVKFPWhuwWt_jn--87ccafc7-efdb-4f41-8d9c-786ef27da547.jpg",
    altImage: "https://cdn.cara.app/production/posts/55c22222-4c03-4aa7-b529-2d43e43a760d/ajloria-cfVg50xLu5zFkGRljCrnn-MEDIUMDopamine1b7bff34b-e77e-489b-a706-ae5f8c2237b1.png",
    portrait: "/characters/dopa.png",
    description: "Dopamine once was a fragile boy—curious, idealistic, and easily swayed by the highs and lows of life. He longed for validation and dreamed of success, believing that independence and achievement were the only paths to strength. After promising never to rely on anyone again, he distanced himself from those who cared for him, focusing solely on building his own future. Yet beneath that determined exterior still beats a heart that remembers warmth, connection, and purpose. Through knowledge and relentless drive, he rose to become one of the most successful and influential individuals of his time. But behind his sharp mind and poised confidence lies the quiet question that defines him: What are you willing to stake? To Dopamine, success means more than power; it is a test of heart, balance, and the courage to rediscover what truly matters.",
    color: {
      primary: "amber",
      hex: "#f59e0b",
      bgGradient: "from-amber-50 to-orange-50"
    },
    attributes: [
      { label: "Drive & Desire", value: 98 },
      { label: "Focus & Pursuit", value: 88 },
      { label: "Reward Feeling", value: 95 },
      { label: "Inner Peace", value: 30 }
    ],
    trivia: [
      "The chemical of expectation, pursuit, and continuous incremental achievement.",
      "Powers the brain's reward prediction and motivates the body to seek out goals.",
      "Carries a persistent restlessness; always seeking the next frontier of knowledge."
    ]
  },
  {
    name: "Hormones // Oxytocin",
    cardname: "Oxytocin",
    category: "Hormone",
    formula: "C43H66N12O12S2",
    archetype: "The Devoted Catalyst",
    image: "https://cdn.cara.app/production/posts/cb58c79e-5f90-4e7f-8546-5f64cb77fe44/ajloria-vJL_JUUEZhTyAHYK83GkH-oxytocin-splash.png",
    altImage: "https://cdn.cara.app/production/posts/3b1612f8-52ca-4129-b8f3-1c9ea45f976e/ajloria-2ewx1RdJK8vRPUaIX8POH-MEDIUMoxytoxin11fe48174-470a-40f1-ba5c-54202de21526.png",
    portrait: "https://cdn.cara.app/production/posts/cb58c79e-5f90-4e7f-8546-5f64cb77fe44/ajloria-vJL_JUUEZhTyAHYK83GkH-oxytocin-splash.png",
    description: "Oxytocin has always been guided by love—the most tender and powerful force within her. As a child, she formed bonds easily, her heart wide open and trusting. But that openness often left her hurt, as others took advantage of her kindness and attachment. Over time, she learned to build walls, not out of coldness, but out of self-preservation. Now known for her advocacies and inspirational life, Oxytocin has transformed her pain into purpose. She uses her voice to uplift others, to remind them that love is not blind devotion, but mindful care for oneself and for others. Yet, even after being broken, Oxytocin never stopped believing in the goodness within people. She continues to offer compassion, giving others a chance to change, to heal, and to be better.",
    color: {
      primary: "pink",
      hex: "#ec4899",
      bgGradient: "from-pink-50 to-rose-50"
    },
    attributes: [
      { label: "Social Bonding", value: 99 },
      { label: "Inner Trust", value: 75 },
      { label: "Sensitivity", value: 92 },
      { label: "Hardened Shield", value: 70 }
    ],
    trivia: [
      "Often nicknamed the 'hug hormone' or 'trust molecule' for social cohesion.",
      "Crucial in forming parent-child attachments and strong, lifelong friendships.",
      "Balances extreme warmth with a self-protective shield forged through experience."
    ]
  },
  {
    name: "Neurotransmitter // Noradrenaline",
    cardname: "Noradrenaline",
    category: "Neurotransmitter",
    formula: "C8H11NO3",
    archetype: "The Calm Strategist",
    image: "https://cdn.cara.app/production/posts/63ecddaf-cd8a-4d82-969e-6f95c6a16372/ajloria-d9J-MS0ImcpiA5_igd4IE-DEFAULTNoradrenalinead500d9e-cddc-48b4-9f65-079c36e24c6a.png",
    altImage: "https://cdn.cara.app/production/posts/63ecddaf-cd8a-4d82-969e-6f95c6a16372/ajloria-d9J-MS0ImcpiA5_igd4IE-DEFAULTNoradrenalinead500d9e-cddc-48b4-9f65-079c36e24c6a.png",
    portrait: "/characters/nora.png",
    description: "Born into poverty, Noradrenaline (or Nora) grew up surrounded by the world’s cruelty and imbalance, witnessing injustices that shaped her understanding of power and morality. Even as a child, her intellect shone brightly; she questioned systems far beyond her years, her curiosity and insight catching the attention of nobles and scholars who recognized her brilliance. With their support, she pursued her studies with relentless dedication, eventually earning her place as a respected scholar and diplomat committed to maintaining peace and justice. Though she carries herself with composure and wisdom, her heart remembers the pain of struggle, driving her to fight for those who cannot speak for themselves.",
    color: {
      primary: "sky",
      hex: "#0ea5e9",
      bgGradient: "from-sky-50 to-teal-50"
    },
    attributes: [
      { label: "Vigilance", value: 95 },
      { label: "Strategic Logic", value: 96 },
      { label: "Diplomatic Grace", value: 90 },
      { label: "Wanderlust", value: 60 }
    ],
    trivia: [
      "Also known as norepinephrine; functions as both a stress hormone and neurotransmitter.",
      "Affects parts of the brain where attention, response, and reactions are controlled.",
      "An essential stabilizer in crisis scenarios, organizing logic while others panic."
    ]
  },
  {
    name: "Neurotransmitter // Glutamate",
    cardname: "Glutamate",
    category: "Neurotransmitter",
    formula: "C5H9NO4",
    archetype: "The Conquered Force",
    image: "https://instagram.fmnl3-4.fna.fbcdn.net/v/t51.82787-15/589016612_18542682853029552_1917497953339027109_n.webp?_nc_cat=102&ig_cache_key=Mzc3ODgyOTM1MjU0MTE3OTQ4Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA3OS5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=IG3ZHkVeBccQ7kNvwFkRNwX&_nc_oc=AdqBhett4j_TzbEpA_pXxcatuG6Jse1LkteNxL5KWfuDMZHX-kS_NyVZ9SaO9V2v3Iw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmnl3-4.fna&_nc_gid=wY5MNEpSYnOqxeSMuloVIg&_nc_ss=7a22e&oh=00_Af5rQ3sZf8qXQNgqCRHRoC4CWa2BNoetA4Hk0If2Ezswcg&oe=6A1B5F5F",
    altImage: "https://cdn.cara.app/production/posts/558d99e1-c495-40ec-824b-dbadf5a55d55/ajloria-ZPex1-YabHTP0Ta73qW---DEFAULTGlutamatedfd73744-cfb4-4da3-b512-a79cfeb7f243.png",
    portrait: "/characters/Glutaportrait.png",
    description: "Descended from the ancient people of the lost ruins, Glutamate is a being of overwhelming strength and hunger, born into a modern world that can barely contain him. In his early years, he wandered like a nomad, living off instinct—devouring whatever he could find, fighting anyone who dared challenge him, yet never feeling truly satisfied. Everything changed when he crossed paths with the monks of the Center, who saw through his wildness and taught him the art of temperance. Through years of discipline, Glutamate learned to restrain his immense power and to channel his cravings into focus. Now, behind his hearty laugh lies a man who has conquered himself.",
    color: {
      primary: "slate",
      hex: "#475569",
      bgGradient: "from-slate-100 to-stone-100"
    },
    attributes: [
      { label: "Excitation (Input)", value: 99 },
      { label: "Raw Capacity", value: 95 },
      { label: "Self-Control", value: 85 },
      { label: "Metabolism", value: 90 }
    ],
    trivia: [
      "The most abundant excitatory neurotransmitter in the mammalian nervous system.",
      "Vital for cognitive functions like learning, long-term memory, and synaptic plasticity.",
      "Maintains a strict balance of temperance; over-excitation can lead to excitotoxicity."
    ]
  },
  {
    name: "Neurotransmitter // Acetylcholine",
    cardname: "Acetylcholine",
    category: "Neurotransmitter",
    formula: "C7H16NO2+",
    archetype: "The Weaver of Truth",
    image: "https://cdn.cara.app/production/posts/1f0bee81-2bbf-4156-8843-329392803ca0/ajloria-wwUtuyYuCYSQ4vPltVtsf-DEFAULTAcetylcholineb71f426a-71f3-46b6-a61a-e5ab7b3781e5.png",
    altImage: "https://cdn.cara.app/production/posts/1f0bee81-2bbf-4156-8843-329392803ca0/ajloria-wwUtuyYuCYSQ4vPltVtsf-DEFAULTAcetylcholineb71f426a-71f3-46b6-a61a-e5ab7b3781e5.png",
    portrait: "/characters/Glutaportrait.png", // alternate portrait fallback
    description: "Born into a noble family of scholars, Acetylcholine had everything the world could offer—wealth, prestige, and access to the greatest libraries. Yet despite her privilege, she found herself restless, yearning not for comfort but for deeper understanding. Unlike her lineage, untouched by magic, she sought to uncover the secrets of existence through pure intellect. Her tireless pursuit led her to defy the regular order of the world—decoding the configuration of particles, bending matter, and even learning to harness the subtle pull of the universe itself. To her, learning is both play and purpose, a dance between logic and wonder.",
    color: {
      primary: "purple",
      hex: "#a855f7",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    attributes: [
      { label: "Cognition & Logic", value: 99 },
      { label: "Curiosity", value: 95 },
      { label: "Matter Altering", value: 88 },
      { label: "Social Affiliation", value: 40 }
    ],
    trivia: [
      "The primary neurotransmitter of the parasympathetic nervous system, guiding rest and digest cycles.",
      "Directly controls voluntary muscle activation and neuroplastic learning rates.",
      "Neutral to labels of good and evil; her allegiance belongs solely to factual comprehension."
    ]
  },
  {
    name: "Neurotransmitter // Adrenaline",
    cardname: "Adrenaline",
    category: "Neurotransmitter",
    formula: "C9H13NO3",
    archetype: "The Alchemist of Danger",
    image: "https://images.cara.app/production/posts/4300ab96-497b-4632-9e24-84b00e903507/ajloria-WwlVkfV2tx_eRrXyCsar3-post-cover-image.jpeg?width=1080&quality=100",
    altImage: "https://images.cara.app/production/posts/4300ab96-497b-4632-9e24-84b00e903507/ajloria-WwlVkfV2tx_eRrXyCsar3-post-cover-image.jpeg?width=1080&quality=100",
    portrait: "https://images.cara.app/production/posts/4300ab96-497b-4632-9e24-84b00e903507/ajloria-WwlVkfV2tx_eRrXyCsar3-post-cover-image.jpeg?width=1080&quality=100", // alternate portrait fallback
    description: "Born into a family once bound to servitude, Adrenaline grew up at the margins of nobility—mocked for his background, ridiculed for his trembling hands, and dismissed as a coward. From childhood, his life was a constant battle between fight and flight, and for years, flight was all he knew. Yet every time he ran, a voice in him whispered that one day he would stand and fight back. That day came, and when it did, he never stopped running toward danger. What began as fear transformed into obsession; the rush that once paralyzed him became his reason to live. Adrenaline turned his body into his own experiment, mastering the edge between life and death through bioengineering and raw willpower.",
    color: {
      primary: "red",
      hex: "#ef4444",
      bgGradient: "from-red-50 to-orange-50"
    },
    attributes: [
      { label: "Willpower", value: 99 },
      { label: "Survival Reflex", value: 98 },
      { label: "Chaos Multiplier", value: 92 },
      { label: "Fear Suppression", value: 95 }
    ],
    trivia: [
      "Also known as epinephrine; initiates the physiological 'fight or flight' stress reaction.",
      "Instantly increases heart rate, dilates airways, and floods skeletal muscles with blood.",
      "Maintains his equipment constantly, utilizing custom biological enhancement serums."
    ]
  },
  {
    name: "Special // Chiyaki (Mr. Grinch)",
    wiki:"Huperzine_A",
    cardname: "Chiyaki",
    category: "Wanderer",
    formula: "C15H18N20",
    archetype: "The Wandering Botanist",
    image: "https://cdn.cara.app/production/posts/385a3ebf-df69-43a1-8699-826398c196e8/ajloria-kZcjdHBlzzVFaIqlx28Qv-alvin-loria-geinshinpng123a.jpg",
    altImage: "https://instagram.fmnl3-4.fna.fbcdn.net/v/t51.82787-15/573548358_18535884886029552_8589098271194230174_n.webp?_nc_cat=101&ig_cache_key=Mzc1NTUzNTU4NzI0NDM3Mjg3OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=7s_rMBbwXC8Q7kNvwGj5Y_1&_nc_oc=AdoKLKYDX8GFgGgIupwbafoyAJ8yJNRmIcQmLEZd0f6UbrsrcJ-zEgSoSsoIkHK4x40&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmnl3-4.fna&_nc_gid=wTb_b8jsww_366IdEOzLoA&_nc_ss=7a22e&oh=00_Af4YPEUTcwZHraTXxZwlpc1bCuId8uo9Rk9dsOHARbuy-w&oe=6A1B6A4F",
    portrait: "/characters/Chiyaki_por.png",
    description: "Chiyaki is a self-effacing wanderer whose endless curiosity pushes him to explore truths that lie beyond the laws of nature, no matter the danger. Born deep within a lush rainforest, far from civilization, his childhood was shaped by the harmony of life and growth that surrounded him. His fascination with the natural world grew from watching plants thrive, and he often said that humans and plants were not so different, both needing nourishment to evolve, whether through nutrients or knowledge. But his tranquil world shattered the day he left home in search of medicine for his ailing grandfather. Raiders attacked their home, and in his absence, his grandfather was slain defending Chiyaki’s sister and the ancient artifact their family had protected for generations. Wracked with grief yet fueled by purpose, Chiyaki and his sister now wander from place to place, seeking the stolen relic and the truths hidden within it. His journey is not just about reclaiming what was lost but understanding the mysteries of existence itself, a quest to bridge the gap between nature, knowledge, and the unseen threads that bind all life.",
    color: {
      primary: "green",
      hex: "#22c55e",
      bgGradient: "from-green-50 to-emerald-50"
    },
    attributes: [
      { label: "Curiosity", value: 95 },
      { label: "Nature Affinity", value: 98 },
      { label: "Resilience", value: 80 },
      { label: "Sorrow", value: 82 }
    ],
    trivia: [
      "Carries rare, wild moss samples capable of healing severe physical wounds instantly.",
      "Maintains a strict organic lifestyle, speaking to wild flora as if they have consciousness.",
      "His costume represents adaptive forest camouflage disguised as festive lore."
    ]
  },
  {
    name: "Special // Null ",
    cardname: "Null",
    category: "Wanderer",
    formula: "NULL-00",
    archetype: "The Illusionist of Peace",
    image: "https://instagram.fmnl3-1.fna.fbcdn.net/v/t51.82787-15/520331207_18513573736029552_6581828912827860482_n.webp?_nc_cat=107&ig_cache_key=MzY3NjM3OTE4MDg3NDMxNDM3Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=RfmJDnoJ4BQQ7kNvwFqj0lC&_nc_oc=AdpqhTN4gCv1S60SZEsyuHVwNIpNxTJdn7FPewo3g5VK5vqTAkvjJP_XY9839kDGo7E&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fmnl3-1.fna&_nc_gid=ro7nmgmzo6Y_Z98uFtv4BQ&_nc_ss=7a22e&oh=00_Af4Psf278zfI-kOh2L7qUBfK-8OtmU_AGZS0roAvXwR9Qg&oe=6A1B4105",
    altImage: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/579965521_874074254956459_436496899290923014_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-LZ06aZV7wgQ7kNvwEXk73y&_nc_oc=AdpPhUc6YJkOOSr1eRslw3ELIBgaHKuRrh--l2g1k4kjxwL0myTlMSkZUuldvInFviE&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=ZsylttD-UM9yaPH2FoV5sA&_nc_ss=7b2a8&oh=00_Af5WHTWsEdtEW-K9hX0BCMxVpZdqSIxUgeS2TXCwB1b0pA&oe=6A1B4E61",
    portrait: "/characters/null.png",
    description: "Null was born in the lawless streets on the outskirts of town, a place where survival depended on sharp instincts and a heart hardened by hardship. Abandoned since birth, with no memory of his parents, he grew up among criminals and scavengers, learning early that deception and cunning were his only means to endure. He became a master of adaptation, able to outwit those around him and blend into any environment, surviving by reading people as easily as others read books. Yet beneath his cold exterior lies a quiet longing for peace, a fragile dream that refuses to die. Despite being shaped by chaos, Null still seeks the impossible serenity he’s never known. Now he drifts from place to place, chasing whispers of the mythical “Fruit of Peace,” said to appear only under gruesome conditions.",
    color: {
      primary: "zinc",
      hex: "#71717a",
      bgGradient: "from-zinc-100 to-stone-100"
    },
    attributes: [
      { label: "Stealth & Decoy", value: 98 },
      { label: "Adaptation Speed", value: 95 },
      { label: "Suspicion", value: 92 },
      { label: "Trust Capacity", value: 15 }
    ],
    trivia: [
      "Has no standard body temperature record; can mimic the sensory heat signature of his surroundings.",
      "Expert lockpicker and codes analyst, trained under the harshest alleyway guilds.",
      "Seeks the fabled 'Fruit of Peace', believed to be hidden deep within botanical ruins."
    ]
  }
];
