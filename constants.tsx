import { ResearchArea } from './types';

export interface Publication {
  year: string;
  title: string;
  url: string;
  authors: string;
  journal: string;
  volume: string;
  pages: string;
  abstractImg?: string;
  highlight?: string;
  highlightUrl?: string;
  coverImg?: string;
  coverUrl?: string;
}

export interface GroupMember {
  name: string;
  qualification: string;
  email: string;
  image: string;
  link?: string;
}

export interface ProfBio {
  name: string;
  titles: string[];
  education: string;
  career: { year: string; role: string }[];
  awards: { year: string; title: string; link?: string }[];
  lectures: { year: string; title: string; link?: string }[];
  memberships: string[];
  interviews: { year: string; title: string; source: string; link: string; type: 'video' | 'article' | 'audio'; thumbnail?: string }[];
  contact: {
    manchester: string[];
    shanghai: string[];
    email: string;
    twitter: string;
    scholar: string;
    orcid: string;
    researcherId: string;
  };
}

export interface ResearchProject {
  title: string;
  image: string;
  link: string;
}

export interface HomeAsset {
  image: string;
  link: string;
  alt: string;
}

export const SCIENCE_DOMAINS: ResearchArea[] = [
  {
    id: 'molecular-knots',
    title: 'Molecular Knots',
    description: 'Weaving strands of molecules into complex topologies, including Trefoil, Pentafoil, and the record-breaking 819 knot.',
    icon: '🧶',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'robotics',
    title: 'Molecular Robotics',
    description: 'Developing artificial molecular machines that can pick up, move, and release cargo at the nanoscale.',
    icon: '🤖',
    color: 'from-fuchsia-600 to-purple-600'
  },
  {
    id: 'ratchets',
    title: 'Molecular Ratchets',
    description: 'Controlling directionality through information-rich processes, mimicking the Brownian motors of biology.',
    icon: '🔄',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 'active-transport',
    title: 'Active Transport',
    description: 'Building machines that move chemical species against a concentration gradient using light or chemical energy.',
    icon: '🚀',
    color: 'from-sky-500 to-blue-600'
  }
];

export const GROUP_STATS = {
  publications: "500+",
  citations: "45,000+",
  hIndex: "110+",
  location: "University of Manchester"
};

export const MISSION_STATEMENT = "We use chemical synthesis to build increasingly complex artificial molecular machines and explore the frontiers of molecular topology.";

export const HOME_ASSETS = {
  hero: [
    { image: "images/manchester1.png", link: "https://www.catenane.net/pages/vtour.html", alt: "Manchester Lab" },
    { image: "images/manchester2.png", link: "https://www.catenane.net/pages/vtour.html", alt: "Manchester View" }
  ],
  research: [
    { image: "images/general/research-map.png", link: "https://www.catenane.net/pages/research_highlights.html", alt: "Research Map" },
    { image: "images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg", link: "https://www.catenane.net/pages/2016_knot_catalysis.html", alt: "Carta Marina Knot" }
  ],
  footerCards: [
    { image: "images/thumbs/vtourmap_web.jpg", link: "https://www.catenane.net/pages/vtour.html", title: "Virtual Tour", subtitle: "Explore the Lab Environment" },
    { image: "images/general/chemmap_thumb.jpg", link: "https://www.catenane.net/pages/links.html", title: "Molecular Map", subtitle: "Global Research Network" }
  ]
};

export const PROF_BIO: ProfBio = {
  name: "David A Leigh",
  titles: ["FRS", "FRSE", "FRSC", "MAE"],
  education: "B.Sc. (1984); Ph. D. (1987) University of Sheffield",
  career: [
    { year: "1987-89", role: "Postdoctoral Research Associate, National Research Council of Canada (Ottawa)" },
    { year: "1989-95", role: "Lecturer in Organic Chemistry, UMIST" },
    { year: "1996-98", role: "Reader in Organic Chemistry, UMIST" },
    { year: "1998-01", role: "Chair of Synthetic Chemistry, University of Warwick" },
    { year: "1998-03", role: "EPSRC Advanced Research Fellow" },
    { year: "2001-12", role: "Forbes Chair of Organic Chemistry, University of Edinburgh" },
    { year: "2012-13", role: "Professor of Organic Chemistry, University of Manchester" },
    { year: "2014-", role: "Sir Samuel Hall Chair of Chemistry, University of Manchester" },
    { year: "2016-26", role: "Royal Society Research Professor" }
  ],
  awards: [
    { year: "2026", title: "ACS Ronald Breslow Award for Achievement in Biomimetic Chemistry", link: "https://cen.acs.org/people/awards/ACS-announces-2026-national-award/103/web/2025/08" },
    { year: "2024", title: "GDCh August Wilhelm von Hofmann Medal", link: "https://en.gdch.de/gdch/prizes-and-awards/gdch-awards/august-wilhelm-von-hofmann-commemorative-medal.html" },
    { year: "2024", title: "Stoddart Prize" },
    { year: "2024", title: "Fellow of the American Academy of Arts and Sciences" },
    { year: "2023", title: "RSC Horizon Prize: Perkin Prize in Physical Organic Chemistry" },
    { year: "2021", title: "Royal Medal, Royal Society of Edinburgh" },
    { year: "2019", title: "Nanoscience Prize (ISNSCE)" },
    { year: "2018", title: "Clarivate Web of Science Highly-Cited Researcher" },
    { year: "2018", title: "ERC Advanced Grant (MolMacIP)" },
    { year: "2017", title: "RSC Perkin Prize for Organic Chemistry" },
    { year: "2014", title: "RSC Pedler Award" },
    { year: "2013", title: "Royal Society Bakerian Medal" },
    { year: "2013", title: "ERC Advanced Grant (Molfactory)" },
    { year: "2010", title: "RSC Tilden Prize" },
    { year: "2009", title: "Fellow of the Royal Society (London)" },
    { year: "2009", title: "RSC Merck Award" },
    { year: "2008", title: "ERC Advanced Grant (WALKINGMOLS)" },
    { year: "2007", title: "Descartes Prize for Research" },
    { year: "2007", title: "Feynman Prize for Nanotechnology" },
    { year: "2007", title: "Chancellor's Award for Research" },
    { year: "2005", title: "Fellow of the Royal Society of Edinburgh" }
  ],
  lectures: [
    { year: "2025", title: "Stoddart Memorial Lecture, ISMSC2025, Kyoto, Japan" },
    { year: "2025", title: "Organic Syntheses Lecture, University of Toronto, Canada" },
    { year: "2024", title: "Donald J. Cram Lecture, UCLA, USA" },
    { year: "2024", title: "Bristol Myers Squibb Lecture, Scripps Research, USA" },
    { year: "2023", title: "Newlands Lecture, Imperial College London" },
    { year: "2022", title: "Lansdowne Lecturer, University of Victoria, Canada" },
    { year: "2021", title: "Stranks Memorial Lecture, RACI, Australia" },
    { year: "2019", title: "World Distinguished Scholar Forum Lecture, Sun Yat-sen University, China" },
    { year: "2013", title: "Bakerian Lecture, Royal Society, London" },
    { year: "2012", title: "Sir Robert Robinson Distinguished Lectureship, Liverpool" }
  ],
  memberships: [
    "American Chemical Society",
    "American Association for the Advancement of Science",
    "Manchester Circle of Magicians",
    "Fellow of the Royal Society of Chemistry",
    "Fellow of the Royal Society of Edinburgh",
    "Fellow of the Royal Society (London)",
    "Academia Europaea",
    "International Guild of Knot Tyers",
    "Governor, Withington Girls’ School"
  ],
  interviews: [
    { year: "2018", title: "Nanobots & Creativity", source: "a capella science", link: "https://youtu.be/ymC5KkVy8zc", type: 'video' },
    { year: "2017", title: "In Situ", source: "Chemistry World", link: "https://www.chemistryworld.com/opinion/in-situ-with-david-leigh/3007438.article", type: 'article' },
    { year: "2017", title: "Rotaxanes", source: "Chemistry World Podcast", link: "https://www.chemistryworld.com/podcasts/rotaxanes/3007468.article", type: 'audio' },
    { year: "2017", title: "Professor David Leigh: Molecular Machines' Promise", source: "Radio New Zealand", link: "https://www.radionz.co.nz/national/programmes/saturday/audio/201832839/professor-david-leigh-molecular-machines'-promise-for-humanity", type: 'audio' }
  ],
  contact: {
    manchester: [
      "Royal Society Research Professor & Sir Samuel Hall Professor of Chemistry",
      "Department of Chemistry, The University of Manchester",
      "Oxford Road, MANCHESTER, M139PL, UK"
    ],
    shanghai: [
      "Distinguished Professor",
      "School of Chemistry and Molecular Engineering",
      "East China Normal University, SHANGHAI, 200062, China"
    ],
    email: "david.leigh@manchester.ac.uk",
    twitter: "@ProfDaveLeigh",
    scholar: "https://scholar.google.co.uk/citations?user=jLubszkAAAAJ",
    orcid: "0000-0002-1202-4507",
    researcherId: "K-5965-2015"
  }
};

export const GROUP_MEMBERS: GroupMember[] = [
  { name: "Adam Lehchilli", qualification: "MSci, University of Strasbourg, France", email: "ku.ca.retsehcnam.dargtsop@illihchel.mada", image: "images/team/Adam.jpg" },
  { name: "Alex Betts", qualification: "MChem, University of Aberdeen, UK", email: "ku.ca.retsehcnam.dargtsop@stteb.rednaxela", image: "images/team/AlexB.jpg" },
  { name: "Axel Troncossi", qualification: "MChem, Wageningen University & Research, Netherlands", email: "ku.ca.retsehcnam.dargtsop@issocnort.lexa", image: "images/team/axelt.jpg" },
  { name: "Chuan Gao", qualification: "PhD, University of Strasbourg, France", email: "ku.ca.retsehcnam@oag.nauhc", image: "images/team/Chuan.jpg" },
  { name: "Daniel Lucas Pinho Feitosa Couto", qualification: "MSci, PSL University | Chimie ParisTech, France", email: "ku.ca.retsehcnam.dargtsop@otoucasotiefohnip.saculleinad", image: "images/team/DanielLucas.jpg" },
  { name: "Dr Daniel Tetlow", qualification: "PhD, University of Manchester, UK", email: "ku.ca.retsehcnam@woltet.leinad", image: "images/team/dan_web2.jpg" },
  { name: "Emily Cramp", qualification: "MSci, University of Birmingham, UK", email: "ku.ca.retsehcnam.dargtsop@pmarc.ylime", image: "images/team/Emily.jpg" },
  { name: "Dr Félix Hernández Culebras", qualification: "PhD, Universidad del País Vasco Institute Polymat, Spain", email: "ku.ca.retsehcnam@sarbeluczednanreh.xilef", image: "images/team/Felix.jpg" },
  { name: "Dr Huakui Liu", qualification: "PhD, Shanghai Institute of Organic Chemistry, China", email: "ku.ca.retsehcnam@uil.iukauh", image: "images/team/Huakui.jpg" },
  { name: "Jannik Lion Schiessl", qualification: "MSci, Uni Ulm, Germany", email: "ku.ca.retsehcnam.dargtsop@lsseihcs.kinnaj", image: "images/team/Jannic.jpg" },
  { name: "Jessica Whittingham", qualification: "MChem, University of Manchester, UK", email: "ku.ca.retsehcnam.dargtsop@mahgnittihw.acissej", image: "images/team/JessicaW.jpg" },
  { name: "Joaquin Baixeras Buye", qualification: "MSci, University of Cambridge, UK", email: "ku.ca.retsehcnam.dargtsop@eyubsarexiab.niuqaoj", image: "images/team/Quim.jpg" },
  { name: "Linfeng Tan", qualification: "MSc, Fudan University, China", email: "ku.ca.retsehcnam.dargtsop@nat.gnefnil", image: "images/team/Linfeng.jpg" },
  { name: "Lukas Marrow", qualification: "MChem, University of Oxford, UK", email: "ku.ca.retsehcnam.dargtsop@worram.sakul", image: "images/team/Lukas.jpg" },
  { name: "Maria-Carmen Temian", qualification: "MChem, University of Oxford, UK", email: "ku.ca.retsehcnam.dargtsop@naimet.nemrac-airam", image: "images/team/Maria.jpg" },
  { name: "Matthew Carey", qualification: "MChem, University of Durham, UK", email: "ku.ca.retsehcnam.dargtsop@yerac.wehttam", image: "images/team/Matthew.jpg" },
  { name: "Dr Prodip Howlader", qualification: "PhD, Indian Institute of Science, Bangalore, India", email: "ku.ca.retsehcnam@redalwoh.pidorp", image: "images/team/Prodip.jpg" },
  { name: "Dr Qi Lin", qualification: "PhD, King's College London, UK", email: "ku.ca.retsehcnam@nil.iq", image: "images/team/Qi.jpg" },
  { name: "Sibei Liao", qualification: "MChem, Huazhong University of Science and Technology, China", email: "ku.ca.retsehcnam.dargtsop@oail.iebis", image: "images/team/Sibei.jpg" },
  { name: "Valerie Bruyr", qualification: "Research Technician", email: "ku.ca.retsehcnam@ryurb.eirelav", image: "images/team/valerie.jpg" },
  { name: "Victoria Jiang", qualification: "MSc, University of Bristol, UK", email: "ku.ca.retsehcnam.dargtsop@gnaij.airotciv", image: "images/team/Victoria.jpg" },
  { name: "Lab Monkey", qualification: "PhD, University of Manchester, UK", email: "", image: "images/team/labmonkey.jpg" }
];

export const RESEARCH_PROJECTS: ResearchProject[] = [
  { title: "Gel Contraction", image: "images/thumbs/Gelthumbnail.png", link: "https://www.catenane.net/pages/2025_GelContraction.html" },
  { title: "Tape Reading Ratchet", image: "images/thumbs/TapeThumb.png", link: "https://www.catenane.net/pages/2022_TapeReadingRatchet.html" },
  { title: "Rotary Motor", image: "images/thumbs/RotaryMotorThumb.png", link: "https://www.catenane.net/pages/2022_RotaryMotor.html" },
  { title: "Phase Transfer Pump", image: "images/thumbs/PhasePumpThumb.png", link: "https://www.catenane.net/pages/2022_PhaseTransferPump.html" },
  { title: "The Vernier", image: "images/thumbs/Vernier_Thumbnail.jpg", link: "https://www.catenane.net/pages/2022_Vernier_Knot.html" },
  { title: "Catalysis Pump", image: "images/thumbs/CatPump_thumbnail.png", link: "https://www.catenane.net/pages/2021_Catalysis_Pump.html" },
  { title: "2D Mol Woven Fabric", image: "images/thumbs/2Dmat_thumbnail.png", link: "https://www.catenane.net/pages/2020_2D_Material.html" },
  { title: "The Endless Knot", image: "images/thumbs/endless_knot_thumbnail.png", link: "https://www.catenane.net/pages/2020_endless_knot.html" },
  { title: "Tying different knots", image: "images/thumbs/5_2_knot_thumbnail.jpg", link: "https://www.catenane.net/pages/2020_molecular_5_2_knot.html" },
  { title: "Pulsed Fuel Motors", image: "images/thumbs/pulsed_fuel_motor_thumbnail.jpg", link: "https://www.catenane.net/pages/2017_chemical_fuelled_motor.html" },
  { title: "A Molecular Assembler", image: "images/thumbs/assembler_thumbnail.jpg", link: "https://www.catenane.net/pages/2017_molecular_assembler.html" },
  { title: "Molecular 819 Knot", image: "images/thumbs/the819knotcover.jpg", link: "https://www.catenane.net/pages/2017_819knot.html" },
  { title: "Knot Catalysis", image: "images/thumbs/knotcatalysiscover.jpg", link: "https://www.catenane.net/pages/2016_knot_catalysis.html" },
  { title: "The NanoMotor", image: "images/thumbs/nanomotorcover.jpg", link: "https://www.catenane.net/pages/2016_autonomous_motor.html" },
  { title: "Small-Molecule Robotics", image: "images/thumbs/Transporter2015.jpg", link: "https://www.catenane.net/pages/2015_molecular_transporter.html" },
  { title: "Star of David Catenane", image: "images/thumbs/StarOfDavid.jpg", link: "https://www.catenane.net/pages/2014_star_of_david.html" },
  { title: "Making Molecules", image: "images/thumbs/pep_synth_thumb.jpg", link: "https://www.catenane.net/pages/2013pep_synth.html" },
  { title: "Pentafoil Knot", image: "images/knot_box_2011_stroke3.jpg", link: "https://www.catenane.net/pages/2012knot.html" },
  { title: "Molecular Walker", image: "images/natchempaper2009.jpg", link: "https://www.catenane.net/pages/2010walker.html" },
  { title: "Hybrid Rotaxanes", image: "images/naturepaper2009.jpg", link: "https://www.catenane.net/pages/2009hybrid_rotaxane.html" },
  { title: "Information Ratchet", image: "images/mdhomepaper.jpg", link: "https://www.catenane.net/pages/2007mol_info_ratchet1.html" }
];

export const PUBLICATIONS: { [year: string]: Publication[] } = {
  "2026": [
    {
      year: "2026",
      title: "Chiral catalysis-driven rotary molecular motors",
      url: "https://www.nature.com/articles/s41557-025-02050-0",
      authors: "H-K Liu, B M W Roberts, S Borsley, R W Adams, G F S Whitehead, A Hasija and D A Leigh",
      journal: "Nat Chem",
      volume: "148",
      pages: "published online 16 January 2026",
      abstractImg: "images/graphical_abstracts/2026/chiralcatalysisdrivenmolecularmotors.png"
    },
    {
      year: "2026",
      title: "Clean electrospray deposition of porphyrin molecules and polyethylene glycol chains onto a Au(100) surface",
      url: "https://doi.org/10.1021/acs.jpcc.5c06482",
      authors: "K Kolar, M Kappe, H Siboni, I Gazizullin, G J Simpson, C Nacci, C M Storey, D A Leigh and L Grill",
      journal: "J Phys Chem C",
      volume: "130",
      pages: "650-660 (2026)",
      abstractImg: "images/graphical_abstracts/2026/cleanelectrospray.png"
    },
    {
      year: "2026",
      title: "Structure-performance relationships for catalysis-driven molecular machinery",
      url: "https://www-sciencedirect-com.manchester.idm.oclc.org/science/article/pii/S245192942500333X",
      authors: "J Baixeras Buye, J M Gallagher, D A Leigh",
      journal: "Chem",
      volume: "12",
      pages: "102742 (2026)",
      abstractImg: "images/graphical_abstracts/2025/reviewchemabstract.png"
    }
  ],
  "2025": [
    {
      year: "2025",
      title: "Reaction: Of myths, misconceptions and motors—a matter of equilibrium",
      url: "https://doi.org/10.1016/j.chempr.2025.102745",
      authors: "D A Leigh",
      journal: "Chem",
      volume: "11",
      pages: "102745 (2025)",
      abstractImg: "images/graphical_abstracts/2025/chemdaveabstract.png"
    },
    {
      year: "2025",
      title: "Multiple template site Nitrogen atom deletions from rotaxanes, catenanes, and a molecular knot",
      url: "https://pubs.acs.org/doi/10.1021/jacs.5c12617",
      authors: "D P Couto, Q Lin, J B M Whittingham, D J Tetlow, J Zhong, P Howlader, and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "147",
      pages: "33304-33314 (2025)",
      abstractImg: "images/graphical_abstracts/2025/images_large_ja5c12617_0008.jpg"
    },
    {
      year: "2025",
      title: "Crown ether–peptide rotaxanes",
      url: "https://onlinelibrary.wiley.com/doi/full/10.1002/anie.202513115",
      authors: "P-L Wang, P Chen, R Yang, D J Tetlow, Z-H Zhang, J Han, S D P Fielden, P Howlader, L Zhang and D A Leigh",
      journal: "Angew Chem Int Ed",
      volume: "64",
      pages: "e202513115 (2025)",
      abstractImg: "images/graphical_abstracts/2025/crownetherpeptidethumbnail.png"
    },
    {
      year: "2025",
      title: "In situ quantification of directional rotation by a catalysis-driven azaindole-N-oxide–phenoic acid molecular motor",
      url: "https://pubs.acs.org/doi/10.1021/jacs.5c10520",
      authors: "H-K Liu, A Troncossi, B M W Roberts, S Borsley and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "147",
      pages: "29534–29541 (2025)",
      abstractImg: "images/graphical_abstracts/2025/noxideabstract.jpg"
    },
    {
      year: "2025",
      title: "Metal-free active template synthesis of catenanes",
      url: "https://doi-org.manchester.idm.oclc.org/10.1002/anov.70004",
      authors: "J Zhong, E Olivieri, P Zwick, A Troncossi, A S Baluna, D J Tetlow, G F S Whitehead, A Hasija and D A Leigh",
      journal: "Angew Chem Novit",
      volume: "1",
      pages: "e70004 (2025)",
      abstractImg: "images/graphical_abstracts/2025/mfreeactivetemplate.png",
      highlight: "Cover feature. Highlighted by J.-C. Chambron in Angew Chem Int Ed, 64, e202520104 (2025).",
      coverImg: "images/covers/thumbs/angewandtecover.jpg",
      coverUrl: "pdfs/DAL/angewandtecover.pdf"
    },
    {
      year: "2025",
      title: "Synthesis of a station-less molecular daisy chain",
      url: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.202501369",
      authors: "C Kress, D Häussinger, D A Leigh and M Mayor",
      journal: "Chem Eur J",
      volume: "31",
      pages: "e202501369 (2025)",
      abstractImg: "images/graphical_abstracts/2025/Daisychaingraphicalabstract.jpg"
    }
  ],
  "2024": [
    {
      year: "2024",
      title: "Out-of-equilibrium compartments: Thinking inside the box",
      url: "https://www.cell.com/chem/abstract/S2451-9294(24)00501-1",
      authors: "J M Gallagher, J Baixeras Buye, and D A Leigh",
      journal: "Chem",
      volume: "10",
      pages: "3526-3528 (2024)",
      abstractImg: "images/graphical_abstracts/2024/outofequilibriumcompartments.png"
    },
    {
      year: "2024",
      title: "Skeletal editing of mechanically interlocked molecules: Nitrogen atom deletion from crown ether-dibenzylammonium rotaxanes",
      url: "https://pubs.acs.org/doi/10.1021/jacs.4c09066",
      authors: "M Gauthier, J B M Whittingham, A Hasija, D J Tetlow, and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "146",
      pages: "29496-29502 (2024)",
      abstractImg: "images/graphical_abstracts/2024/thumbnail_jacs.4c09066.social.png",
      highlight: "Highlighted in Chem World and ChemPlusChem."
    },
    {
      year: "2024",
      title: "Mechanical scission of a knotted polymer",
      url: "https://www.nature.com/articles/s41557-024-01510-3",
      authors: "M Zhang, R Nixon, F Schaufelberger, L Pirvu, G De Bo and D A Leigh",
      journal: "Nat Chem",
      volume: "16",
      pages: "1366-1372 (2024)",
      abstractImg: "images/graphical_abstracts/2024/knotbreaking.jpg"
    }
  ],
  "2023": [
    {
      year: "2023",
      title: "The role of kinetic asymmetry and power strokes in an information ratchet",
      url: "https://authors.elsevier.com/sd/article/S245192942300267X",
      authors: "L Binks, S Borsley, T R Gingrich, D A Leigh, E Penocchio, and B M W Roberts",
      journal: "Chem",
      volume: "9",
      pages: "2902-2917 (2023)",
      abstractImg: "images/graphical_abstracts/2023/BadMotors.png"
    },
    {
      year: "2023",
      title: "In search of Wasserman’s catenane",
      url: "https://pubs.acs.org/doi/10.1021/jacs.3c01939",
      authors: "A S Baluna, A Galan, D A Leigh, G D Smith, J T J Spence, D J Tetlow, I J Vitorica-Yrezabal and M Zhang",
      journal: "J Am Chem Soc",
      volume: "145",
      pages: "9825-9833 (2023)",
      abstractImg: "images/graphical_abstracts/2023/Wasserman.png"
    },
    {
      year: "2023",
      title: "Mechanical tightening of a synthetic molecular knot",
      url: "https://www.sciencedirect.com/science/article/pii/S245192942200657X",
      authors: "M Calvaresi, A-S Duwez, D A Leigh, D Sluysmans, Y Song, F Zerbetto and L Zhang",
      journal: "Chem",
      volume: "9",
      pages: "65-75 (2023)",
      abstractImg: "images/graphical_abstracts/2023/AFMKnot.jpg",
      coverImg: "images/covers/thumbs/AFMKnot.jpg",
      coverUrl: "images/covers/large/AFMKnot.pdf"
    }
  ],
  "2022": [
    {
      year: "2022",
      title: "A tape-reading molecular ratchet",
      url: "https://www.nature.com/articles/s41586-022-05305-9",
      authors: "Y Ren, R Jamagne, D J Tetlow and D A Leigh",
      journal: "Nature",
      volume: "612",
      pages: "78–82 (2022)",
      abstractImg: "images/graphical_abstracts/2022/Turing.png"
    },
    {
      year: "2022",
      title: "Vernier template synthesis of molecular knots",
      url: "https://www.science.org/doi/10.1126/science.abm9247",
      authors: "Z Ashbridge, E Kreidt, L Pirvu, F Schaufelberger, J Halldin Stenlid, F Abild-Pedersen and D A Leigh",
      journal: "Science",
      volume: "375",
      pages: "1035-1041 (2022)",
      abstractImg: "images/graphical_abstracts/2022/Vernier.png"
    }
  ],
  "2021": [
    {
      year: "2021",
      title: "A catalysis-driven artificial molecular pump",
      url: "https://www.nature.com/articles/s41586-021-03575-3",
      authors: "S Amano, S D P Fielden and D A Leigh",
      journal: "Nature",
      volume: "594",
      pages: "529-534 (2021)",
      abstractImg: "images/graphical_abstracts/2021/VidKey.png"
    },
    {
      year: "2021",
      title: "A molecular endless (74) knot",
      url: "https://www.nature.com/articles/s41557-020-00594-x",
      authors: "D A Leigh, J J Danon, S D P Fielden, J-F Lemonnier, G F S Whitehead and S L Woltering",
      journal: "Nat Chem",
      volume: "13",
      pages: "117-122 (2021)",
      abstractImg: "images/graphical_abstracts/2020/endless.jpg",
      coverImg: "images/covers/thumbs/7(4).png",
      coverUrl: "images/covers/large/7(4).png"
    }
  ],
  "2020": [
    {
      year: "2020",
      title: "Self-assembly of a layered two-dimensional molecularly woven fabric",
      url: "https://www.nature.com/articles/s41586-020-3019-9",
      authors: "D P August et al.",
      journal: "Nature",
      volume: "588",
      pages: "429-435 (2020)",
      abstractImg: "images/graphical_abstracts/2020/2DMatgraph.png"
    }
  ],
  "2017": [
    {
      year: "2017",
      title: "Braiding a molecular knot with eight crossings",
      url: "http://science.sciencemag.org/content/355/6321/159",
      authors: "J J Danon et al.",
      journal: "Science",
      volume: "355",
      pages: "159-162 (2017)",
      abstractImg: "images/article_pictures/819knot2017/819knot-cut.jpg"
    }
  ],
  "2013": [
    {
      year: "2013",
      title: "Sequence-Specific Peptide Synthesis by an Artificial Small-Molecule Machine",
      url: "http://www.sciencemag.org/content/339/6116/189.abstract",
      authors: "B. Lewandowski et al.",
      journal: "Science",
      volume: "339",
      pages: "189-193 (2013)",
      abstractImg: "images/graphical_abstracts/2013/peptide_synthesizer_cartoon_small.jpg"
    }
  ]
};
