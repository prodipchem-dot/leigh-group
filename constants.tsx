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

export interface Responsibility {
  task: string;
  person: string;
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
  slug: string;
}

export interface ResearchHighlight {
  title: string;
  citation: string;
  citationUrl: string;
  content: string[];
  mainImage?: string;
  videoUrl?: string;
}

export const RESEARCH_PROJECTS: ResearchProject[] = [
  { title: "Gel Contraction", image: "images/thumbs/Gelthumbnail.png", slug: "2025-gel-contraction", link: "/research/2025-gel-contraction" },
  { title: "Tape Reading Ratchet", image: "images/thumbs/TapeThumb.png", slug: "2022-tape-reading", link: "/research/2022-tape-reading" },
  { title: "Rotary Motor", image: "images/thumbs/RotaryMotorThumb.png", slug: "2022-rotary-motor", link: "/research/2022-rotary-motor" },
  { title: "Phase Transfer Pump", image: "images/thumbs/PhasePumpThumb.png", slug: "2022-phase-transfer", link: "/research/2022-phase-transfer" },
  { title: "The Vernier", image: "images/thumbs/Vernier_Thumbnail.jpg", slug: "2022-vernier-knot", link: "/research/2022-vernier-knot" },
  { title: "Catalysis Pump", image: "images/thumbs/CatPump_thumbnail.png", slug: "2021-catalysis-pump", link: "/research/2021-catalysis-pump" },
  { title: "2D Mol Woven Fabric", image: "images/thumbs/2Dmat_thumbnail.png", slug: "2020-2d-material", link: "/research/2020-2d-material" },
  { title: "The Endless Knot", image: "images/thumbs/endless_knot_thumbnail.png", slug: "2020-endless-knot", link: "/research/2020-endless-knot" },
  { title: "Tying different knots", image: "images/thumbs/5_2_knot_thumbnail.jpg", slug: "2020-5-2-knot", link: "/research/2020-5-2-knot" },
  { title: "Pulsed Fuel Motors", image: "images/thumbs/pulsed_fuel_motor_thumbnail.jpg", slug: "2017-fuelled-motor", link: "/research/2017-fuelled-motor" },
  { title: "A Molecular Assembler", image: "images/thumbs/assembler_thumbnail.jpg", slug: "2017-molecular-assembler", link: "/research/2017-molecular-assembler" },
  { title: "Molecular 819 Knot", image: "images/thumbs/the819knotcover.jpg", slug: "2017-819-knot", link: "/research/2017-819-knot" },
  { title: "Knot Catalysis", image: "images/thumbs/knotcatalysiscover.jpg", slug: "2016-knot-catalysis", link: "/research/2016-knot-catalysis" },
  { title: "The NanoMotor", image: "images/thumbs/nanomotorcover.jpg", slug: "2016-autonomous-motor", link: "/research/2016-autonomous-motor" },
  { title: "Small-Molecule Robotics", image: "images/thumbs/Transporter2015.jpg", slug: "2015-transporter", link: "/research/2015-transporter" },
  { title: "Star of David Catenane", image: "images/thumbs/StarOfDavid.jpg", slug: "2014-star-of-david", link: "/research/2014-star-of-david" },
  { title: "Making Molecules", image: "images/thumbs/pep_synth_thumb.jpg", slug: "2013-peptide-synthesizer", link: "/research/2013-peptide-synthesizer" },
  { title: "Pentafoil Knot", image: "images/knot_box_2011_stroke3.jpg", slug: "2012-pentafoil-knot", link: "/research/2012-pentafoil-knot" },
  { title: "Molecular Walker", image: "images/natchempaper2009.jpg", slug: "2010-walker", link: "/research/2010-walker" },
  { title: "Hybrid Rotaxanes", image: "images/naturepaper2009.jpg", slug: "2009-hybrid-rotaxane", link: "/research/2009-hybrid-rotaxane" },
  { title: "Information Ratchet", image: "images/mdhomepaper.jpg", slug: "2007-information-ratchet", link: "/research/2007-information-ratchet" }
];

export const RESEARCH_HIGHLIGHT_CONTENT: Record<string, ResearchHighlight> = {
  "2025-gel-contraction": {
    title: "Transducing chemical energy through catalysis",
    citation: "Peng-Lai Wang, Stefan Borsley, Martin J. Power, Alessandro Cavasso, Nicolas Giuseppone & David A. Leigh, Nature, 637, 594–600 (2025)",
    citationUrl: "https://t.co/YWomGAutpU",
    mainImage: "images/article_pictures/2025_GelContraction/Gelpicture1.png",
    videoUrl: "https://www.catenane.net/media/Cartoonvideo.mp4",
    content: [
      "It seems counter-intuitive that the act of catalysis—simply the acceleration of a chemical reaction—somehow enables work to be done by the catalyst through the transduction of chemical energy from the reaction it accelerates. Yet this is how all of biology is powered. Almost all biomolecular motors are catalysts.",
      "The motor-molecules, introduced by the Leigh group in 2022, generate force by the action of catalysis biasing the kinetics of ground-state conformational changes, the same type of catalysis-driven information ratchet mechanism as biological motor-molecules. Continuous 360° rotation of the rotor about the stator of the motor-molecules twists the polymer chains of the crosslinked network around one another, progressively increasing writhe, tightening entanglements, and causing macroscopic contraction of the gel to ~70% of its original volume.",
      "Once the fuel supply is exhausted, contraction stops and the gel remains kinetically locked in a tensed, contracted state (no relaxation/re-expansion of the gel occurs over the course of several months). However, subsequent addition of the opposite enantiomeric fuelling system powers rotation of the motor-molecules of the contracted gel in the reverse direction, unwinding the entanglements and causing the gel to re-expand."
    ]
  },
  "2022-tape-reading": {
    title: "A Read-Only Molecular Turing Machine",
    citation: "Yansong Ren, Romain Jamagne, Daniel J. Tetlow, David A. Leigh, Nature, 612, 78–82 (2022)",
    citationUrl: "https://www.nature.com/articles/s41586-022-05305-9",
    mainImage: "images/article_pictures/2022TapeReading/Turing.png",
    videoUrl: "https://www.catenane.net/media/TapeVideo.mp4",
    content: [
      "In 1936 Alan Turing published a concept for an abstract computing device called a Turing machine. It envisaged a device that featured a 'head' that could read and write symbols while moving along a tape. This influential thought experiment helped spark the development of modern computer science.",
      "Now scientists at the University of Manchester have made an artificial molecular machine that moves along a molecular tape, changing the reading head's shape in response to 'symbols' on the tape it encounters along the way. The geometrical change alters how light is twisted (clockwise, anticlockwise, or not twisted) by the head and so the sequence of symbols on the molecular tape can be read out as a string of data.",
      "The new nanomachine is a type of machine termed a 'finite state automaton': that is, a Turing machine that moves in one direction through a string-encoded state sequence, with readable outputs but is not (yet) able to write symbols itself."
    ]
  },
  "2022-rotary-motor": {
    title: "There’s plenty of va-va-voom at the bottom!",
    citation: "Stefan Borsley, Elisabeth Kreidt, David A. Leigh, Benjamin M. W. Roberts, Nature, 604, 80–85 (2022)",
    citationUrl: "https://www.nature.com/articles/s41586-022-04450-5",
    mainImage: "images/article_pictures/2022RotaryMotor/Feynman.png",
    videoUrl: "https://www.catenane.net/media/RotaryVid2.mp4",
    content: [
      "The motor-molecule marks the solution to the long-standing problem of continuous directional rotation about a single covalent bond, and offers insights that should prove useful in developing chemically powered artificial molecular machinery. Its simplicity should facilitate its optimisation and interfacing with other components for the performance of work and tasks at the molecular level.",
      "Upon treatment of the motor-molecule with a carbodiimide fuel, intramolecular anhydride formation between the rings, and the anhydride’s hydrolysis, both occur incessantly. Both the anhydride formation and hydrolysis reactions are directionally biased (they occur faster through particular rotamers of the biaryl system). In this way, catalysis of the hydration of the carbodiimide fuel by the motor continually drives net directional rotation of the rotor around the stator.",
      "The mechanism also informs current debates regarding the nature of enzymatic catalysis and biomotor mechanisms. Each 360° rotation of the motor requires the reaction of a fuel molecule and has a directional bias of up to 71:29."
    ]
  },
  "2022-phase-transfer": {
    title: "Adsorption glow up!",
    citation: "Dean Thomas, Daniel J. Tetlow, Yansong Ren, Salma Kassem, Ulvi Karaca & David A. Leigh, Nat. Nanotechnol. (2022)",
    citationUrl: "https://www.nature.com/articles/s41565-022-01097-1",
    mainImage: "images/article_pictures/2022PhaseTransfer/TopImage.png",
    videoUrl: "https://www.catenane.net/media/PhaseTransfer.mp4",
    content: [
      "The sorption of species from solution into, and onto, solid phase materials is a ubiquitous process that underpins the sequestering of waste and pollutants, recovery of precious metals, and numerous other technologies. The Leigh group report on an artificial molecular pump, immobilised on polymer beads, that uses a ratchet mechanism to actively transport substrates from solution onto the beads.",
      "Upon the addition of a pulse of CCl3CO2H fuel, micrometre-diameter polystyrene beads sequester crown ethers. Following consumption of the fuel, the rings are mechanically trapped in a higher energy, out-of-equilibrium, state on the beads and cannot be removed by dilution nor by switching the binding interactions off.",
      "Addition of a second pulse of fuel causes the uptake of more macrocycles, which can be appended with a different fluorescent tag. This drives the system progressively further away from equilibrium and also confers sequence information on the deposited structure."
    ]
  },
  "2022-vernier-knot": {
    title: "Vernier Entanglements",
    citation: "Zoe Ashbridge et al, Science, 375, 1035-1041 (2022)",
    citationUrl: "https://www.science.org/doi/10.1126/science.abm9247",
    mainImage: "images/article_pictures/Vernier_Knot_2022/Underwater.jpg",
    content: [
      "The entanglement of molecular strands has profound structural consequences: it blocks conformations, alters dynamics and enhances structural stability. Systematic strand entanglements affect the properties and functions of both synthetic and biological macromolecules.",
      "Vernier templating relies on a mismatch between the number of binding sites on two complementary components. The Leigh group has adapted the Vernier concept to the assembly of molecular knots by complexing ligand strands with two or four tridentate groups with nine-coordinate lanthanide ions.",
      "A 3:4 (tetratopic strand:metal) Vernier complex gives a 12-crossing triskelion (trefoil-of-trefoils) knot with complete topological stereocontrol. These are the largest, and most topologically complex, discrete arrays of molecular entanglements prepared to date."
    ]
  },
  "2021-catalysis-pump": {
    title: "Pumping through Catalysis",
    citation: "Shuntaro Amano, Stephen D. P. Fielden and David A. Leigh, Nature, 594, 529-534 (2021)",
    citationUrl: "https://www.nature.com/articles/s41586-021-03575-3",
    mainImage: "images/article_pictures/Cat_Pump_2021/1.png",
    videoUrl: "https://www.catenane.net/media/CatPump.mp4",
    content: [
      "All biomolecular motors are autonomous catalysts; they operate continuously as long as unreacted chemical fuel is present and stop once all of the fuel is consumed. This artificial molecular pump (molecule 1) is an autonomous chemically-fueled molecular pump that continuously pumps crown ether macrocycles from bulk solution onto a molecular axle.",
      "The pumping is driven by the catalysis of a reaction that transiently inserts a bulky Fmoc ‘stopper’ at the terminus of the pump to retard the de-threading of captured rings. The result of the pump's action is dissipatively captured in the form of thermodynamically unstable [n]rotaxanes.",
      "Once all of the fuel is consumed, the Fmoc group on the rotaxanes continues to slowly decompose under the basic reaction conditions. With the temporary blocking group gone, the crown ethers dethread, reforming the pump and rings in their original dethreaded state."
    ]
  },
  "2020-2d-material": {
    title: "2D Molecular Weaving",
    citation: "David P. August et al, Nature, 588, 429-435 (2020)",
    citationUrl: "https://t.co/QsWnDNwmT1?amp=1",
    mainImage: "images/article_pictures/2D_Material_2020/1.jpg",
    videoUrl: "https://www.youtube.com/embed/TRR5pDYw8og",
    content: [
      "Textiles, fabrics consisting of woven fibres, are some of the most important materials in everyday life. To date, however, the weaving of strands at the molecular level has largely been limited to coordination polymers and DNA. The Leigh group report the direct, bottom-up, assembly of molecular building blocks into linear organic polymers woven in two-dimensions.",
      "The result was a layered, wholly-organic, 2D-molecularly-woven fabric, in which warp and weft single-chain polymer strands remain associated solely through in-layer mechanical entanglements. The individual layers are only 4 nm thick.",
      "The molecularly-woven fabric's thread count is 40–60 million. In comparison, the finest Egyptian linen has a thread count of 1500. The fabric was found to be almost twice as strong as non-woven material of the same chemical composition."
    ]
  },
  "2020-endless-knot": {
    title: "Endless forms most beautiful",
    citation: "David A. Leigh et al, Nat Chem, 13, 117-122 (2021)",
    citationUrl: "https://go.nature.com/386OLz3",
    mainImage: "images/article_pictures/endless_knot_2020/1.jpg",
    videoUrl: "https://www.catenane.net/media/endless.mp4",
    content: [
      "The endless knot is a basic motif of Celtic interlace, the smallest Chinese knot, and is one of the eight auspicious symbols common to many Eastern religions. Scientists at the University of Manchester have assembled an interwoven 3x3 grid that leads to the 258-atom-long, closed loop, 74 endless knot.",
      "Despite a decade of design it was ultimately an unanticipated BF4- template effect, recognized from interactions in a related Solomon link, that led to the assembly of the key interwoven 3x3 grid. The story illustrates well how cutting-edge scientific research proceeds: facing challenges until some combination of skill and reasoning leads to success.",
      "The ability to weave polymer chains in two-dimensions marks the intersection of polymer science, two-dimensional materials and molecular nanotopology. The practical significance opens the way for bottom-up assembly of woven polymer chains and other entangled materials."
    ]
  },
  "2020-5-2-knot": {
    title: "Thou Shalt Knot…",
    citation: "David A. Leigh et al, Nature, 584, 562-568 (2020)",
    citationUrl: "https://www.nature.com/articles/s41586-020-2614-0",
    mainImage: "images/article_pictures/5_2_knot_2020/5_2_knot_info.jpg",
    videoUrl: "https://www.catenane.net/media/52%20knot.mp4",
    content: [
      "In our everyday world strands can be tied into different knots with distinctive properties. Although molecular-level knots are found in DNA and proteins, to date it has not been possible to tie different types of knots in a particular molecular strand.",
      "The Leigh group have developed a way to tie an artificial 15 nanometer molecular strand into any one of several different knots by interspersing coordination sites for different metal ions along the strand. Selectively activating a set of binding sites causes a ‘tangle’ to form.",
      "In this way, any of three different knots—an unknot (01) macrocycle, a trefoil (31) knot, and a three-twist (52) knot—could be prepared from the same strand by using transition metal and lanthanide ions to guide the molecule through the folding path."
    ]
  },
  "2017-fuelled-motor": {
    title: "Chemically Fuelled Molecular Machinery",
    citation: "Sundus Erbas-Cakmak et al, Science, 358, 340-343 (2017)",
    citationUrl: "http://science.sciencemag.org/content/358/6361/340",
    mainImage: "images/article_pictures/chemical_fuelled_motor_2017/machines%20infograph.jpg",
    videoUrl: "https://www.catenane.net/media/171211_Molecular_motor_2-catenane_web.mp4",
    content: [
      "The design of nanoscale motors in which the components move with net directionality has tantalized scientists since Feynman’s discussion of the physics of a theoretical tiny ratchet-and-pawl. Scientists at the University of Manchester have developed a pulsed chemically-fuelled molecular motor mechanism.",
      "It uses an energy ratchet mechanism, relying on switching between acid and base to simultaneously switch the heights of both energy maxima and energy minima for ring movement. The fuel employed is trichloroacetic acid, which undergoes base-catalyzed decarboxylation.",
      "A single pulse of the fuel can unidirectionally rotate a catenane motor 360°, generating chloroform and CO2 as the only waste products. This simple, effective process generates relatively innocuous waste and can function in a range of rotary and linear molecular motor designs."
    ]
  },
  "2017-molecular-assembler": {
    title: "Building with a Programmable Molecular Robot",
    citation: "Salma Kassem et al, Nature, 549, 374-378 (2017)",
    citationUrl: "http://rdcu.be/v2q1",
    mainImage: "images/article_pictures/assembler2017/assembler_cover.jpg",
    videoUrl: "https://www.catenane.net/media/assembler%20animation.mp4",
    content: [
      "A ‘molecular assembler’ is a hypothetical futuristic concept for a ‘nanobot’ able to guide chemical reactions by positioning reactive molecules with atomic precision. Now scientists at the University of Manchester have developed a molecular robot that moves a substrate between different activating sites.",
      "The molecular robot can be programmed to selectively produce any one of four possible diastereoisomers from a tandem reaction process. The robot manipulates a single substrate molecule, but the process is massively paralleled with more than 10^18 molecular robots operated simultaneously.",
      "Future generations of programmable molecular machines may play significant roles in chemical synthesis and molecular manufacturing, reminiscent of the way that molecular construction is carried out in biology by the ribosome."
    ]
  },
  "2017-819-knot": {
    title: "A Synthetic Molecular 819 Knot",
    citation: "Jonathan J. Danon et al, Science, 355, 159-162 (2017)",
    citationUrl: "http://science.sciencemag.org/content/355/6321/159",
    mainImage: "images/article_pictures/819knot2017/819knot-cut.jpg",
    videoUrl: "https://www.catenane.net/media/2017_Knot_819_molecule_flyaround.mp4",
    content: [
      "Scientists at the University of Manchester have developed a way of braiding three molecular strands enabling tighter and more complex knots to be made than has previously been possible. It is the mostly tightly knotted physical structure known at ~2.5 nm per crossing.",
      "The approach was used to make a molecular knot consisting of a 192-atom continuous loop interwoven with eight non-alternating crossings. Unusually, the molecular knot can be made in right or left handed forms solely by virtue of its topology.",
      "The synthesis illustrates a strategy—the braiding of three strands—that should be applicable to the synthesis of many more types of molecular knots, enabling scientists to probe how knotting affects material strength and elasticity."
    ]
  },
  "2016-knot-catalysis": {
    title: "Allosteric Knot Catalysis",
    citation: "Vanesa Marcos et al, Science, 352, 1555-1559 (2016)",
    citationUrl: "http://science.sciencemag.org/content/352/6293/1555",
    mainImage: "images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg",
    content: [
      "The chemistry of molecular knots is an almost completely unexplored area of the molecular world. Scientists at the University of Manchester have found that as little as 1 mol% of a halophilic synthetic molecular pentafoil knot can promote Lewis acid catalysed reactions.",
      "The catalysis can be allosterically regulated as the active site of the knot is only formed when it binds five metal(II) ions at bipyridine groups that line the outside of—and organise—the halide binding pocket. This promotes carbon-halogen bond cleavage induced by the knot.",
      "The knot architecture is crucial to the catalysis; unknotted species are catalytically inactive. Results suggest that knotting molecules may be a useful strategy for reducing degrees of freedom of flexible chains, enabling them to adopt inaccessible conformations."
    ]
  },
  "2016-autonomous-motor": {
    title: "Cracking Nanomotor, Gromit!",
    citation: "Miriam R. Wilson et al, Nature, 534, 235-240 (2016)",
    citationUrl: "http://www.nature.com/nature/journal/v534/n7606/full/nature18013.html",
    mainImage: "images/article_pictures/nanomotor2016/figure3.jpg",
    videoUrl: "https://www.catenane.net/media/ChemMotorAnim.mp4",
    content: [
      "Scientists at the University of Manchester have invented a synthetic molecular motor that runs off chemical energy in a similar manner to the way motor proteins use ATP. A synthetic molecular ring moves directionally around a molecular track powered by catalysis.",
      "The motor mechanism depends on information transfer about the position of the ring to the track: consumption of the fuel biases the direction of Brownian motion. Physically, this is called an ‘information ratchet’, reminiscent of the Maxwell’s Demon thought experiment.",
      "Synthetic chemically-fuelled molecular motors have the potential to power tasks in nanotechnology, including transporting cargoes along nanometer tracks and being a power source for molecular muscles and factories."
    ]
  },
  "2015-transporter": {
    title: "Molecular Robotics",
    citation: "Salma Kassem et al, Nature Chem, 8, 138-143 (2016)",
    citationUrl: "http://www.nature.com/nchem/journal/vaop/ncurrent/pdf/nchem.2410.pdf",
    mainImage: "images/roboticarmwithmolecule.png",
    videoUrl: "https://www.catenane.net/media/MolRobotArmVideoNatChem2016LowResv2.mp4",
    content: [
      "The concept of using molecules to manipulate other molecules in robotic fashion has some precedence in biology: for example, in metazoan fatty acid synthase a growing fatty acid chain is passed between enzyme domains in the protein superstructure.",
      "Chemists at the University of Manchester have made a molecular machine with a ‘robotic arm’ that is able to pick up a molecular cargo, reposition it, and release it at a second site approximately 2 nm away from the starting position.",
      "The relocation of fragments with a nanoscale robotic arm—making and breaking chemical bonds while the cargo is unable to exchange—is the first step towards the controlled manipulation of structures through programmable robotics."
    ]
  },
  "2014-star-of-david": {
    title: "A Star of David Catenane",
    citation: "David A. Leigh, Robin G. Pritchard and Alexander J. Stephens, Nature Chem, 6, 978–982 (2014)",
    citationUrl: "https://www.catenane.net/pdfs/articles/Leigh%20StarofDavidCat%20NatChem%202014.pdf",
    mainImage: "images/StarOfDavid.png",
    videoUrl: "https://www.catenane.net/media/2014StarOfDavidCatXRay.mp4",
    content: [
      "The Star of David topology, or 6-2-1 link, is an iconic symbol and a fundamental element of structure. It remained an explicit, but until now unrealized, target of synthetic chemistry for a quarter of a century.",
      "Now chemists at the University of Manchester have described the first Star of David molecular link (a triply interlocked [2]catenane). The structure features two triply-entwined 114-membered rings. Confirmation was provided by X-ray crystallography.",
      "Nature links protein rings to make the ‘chainmail’ that forms the shells of certain viruses. Linking and entwining man-made molecular rings may lead to new materials that are strong but light and flexible, like medieval chainmail."
    ]
  },
  "2013-peptide-synthesizer": {
    title: "Making molecules that make molecules",
    citation: "B. Lewandowski et al, Science, 339, 189-193 (2013)",
    citationUrl: "https://www.catenane.net/pdfs/articles/Leigh%20Sequential%20Peptide%20Synthesis%20Science%202013.pdf",
    mainImage: "images/article_pictures/pepsynth_fig1.png",
    videoUrl: "https://www.catenane.net/media/2013peptsynth.mp4",
    content: [
      "Nature builds proteins in complex molecular factories where information from the genetic code is used to programme the linking of building blocks. Professor David Leigh’s group have built an artificial molecular machine that builds chemical structures in a similar way.",
      "The machine features a functionalized ring that moves along a molecular track, picking up building blocks and connecting them in order. Once all blocks are removed from the track, the ring de-threads and synthesis is complete.",
      "In nature molecules are made by other molecules with exquisite efficiency. When scientists learn how to use molecular machines to perform synthesis, it will potentially revolutionize the approach to functional molecule and materials design."
    ]
  },
  "2012-pentafoil-knot": {
    title: "A Synthetic Molecular Pentafoil Knot",
    citation: "Jean-François Ayme et al, Nature Chem, 4, 15-20 (2012)",
    citationUrl: "https://www.catenane.net/pdfs/articles/2012knot_naturechem.pdf",
    mainImage: "images/article_pictures/knotcover_mid.jpg",
    videoUrl: "https://www.catenane.net/media/2012hologram.mp4",
    content: [
      "Knots are found in DNA, proteins, and even polymers where they play important roles in material properties. However, deliberately tying molecules into knots is extremely difficult. The Leigh group succeeded in preparing a pentafoil knot with five crossing points that looks like a five-pointed star.",
      "The thread tied into the star-shaped knot is just 160 atoms in length. The researchers used ‘self-assembly’ to prepare the knot: building blocks were chemically programmed to spontaneously wrap themselves up into the desired topology.",
      "Making knotted structures from simple building blocks in this way should make it easier to understand why entanglements have such important effects on material properties and may aid in making new improved materials."
    ]
  },
  "2010-walker": {
    title: "A Synthetic Small Molecule that Walks down a Track",
    citation: "Max von Delius, Edzard M Geertsema, David A Leigh, Nature Chem, 2, 96-101 (2010)",
    citationUrl: "https://www.catenane.net/pdfs/articles/2010walker_naturechem.pdf",
    mainImage: "images/article_pictures/walker_mid.jpg",
    content: [
      "Spectacular biological examples of walkers include proteins like kinesin, myosin and dynein, driven along cellular tracks powered by ATP. The Leigh group described the first small-molecule system in which a ‘walker’ can be transported directionally along a short molecular track.",
      "The walker moves one foot at a time between footholds. While one foot is moving, the other remains attached (processivity). The feet-track interactions are designed to be dynamic under mutually exclusive sets of chemical conditions.",
      "The ultimate goal of such studies is to produce artificial, linear molecular motors that move directionally along polymeric tracks to transport cargoes and perform complex tasks at the nanoscale."
    ]
  },
  "2009-hybrid-rotaxane": {
    title: "Hybrid Organic-Inorganic Rotaxanes",
    citation: "Chin-Fa Lee et al, Nature, 458, 314-318 (2009)",
    citationUrl: "https://www.catenane.net/pdfs/articles/2009hybrid_rotaxane_nature.pdf",
    mainImage: "images/article_pictures/nature2009_mid.jpg",
    content: [
      "Organic chemistry relies on carbon's ability to form covalent bonds, while metals and inorganic elements can impart magnetic, catalytic and other physical properties. This team described the first discrete rotaxane molecules in which inorganic and organic components are linked mechanically.",
      "An essentially inorganic wheel is assembled around a linear organic axle to form a hybrid structure with dynamic properties such as molecular shuttling. The threaded architecture ensures characteristics of heterometallic nuclear cages are associated with the organic portion.",
      "This provision of a versatile synthetic route for linking inorganic and organic components opens the door to molecules with composite properties, including new behaviours arising from combining features of both types of chemistry."
    ]
  },
  "2007-information-ratchet": {
    title: "Exercising Demons: A Molecular Information Ratchet",
    citation: "Viviana Serreli, Chin-Fa Lee, Euan R. Kay and David A. Leigh, Nature, 445, 523-527 (2007)",
    citationUrl: "https://www.catenane.net/pdfs/articles/2007mdpaper.pdf",
    mainImage: "images/article_pictures/mdcoversmall.jpg",
    content: [
      "Chemists in the Leigh group have created a molecular machine that operates via a mechanism inspired by a 140 year-old thought experiment, 'Maxwell's Demon'. The ‘molecular information ratchet’ uses light energy to fuel information transfer.",
      "In the original thought experiment, a tiny 'demon' opens and closes a gate between gas compartments to sort hot and cold molecules. Subsequent analysis revealed a fundamental link between entropy and information.",
      "In the synthetic molecular machine, information transfer between components enables directional motion. This fundamentally new type of motor-mechanism highlights the link between information theory and molecular-scale dynamics."
    ]
  }
};

export const MONKEY_BUSINESS: Responsibility[] = [
  { task: "Safety Champion", person: "Flavio" },
  { task: "Bay Bosses", person: "Enzo (A), Prodip (B), Maxime (C), Martin (D), Patrick (E), Flavio (F)" },
  { task: "Webpage and IT Management", person: "Maria" },
  { task: "Leigh Group Mailing List", person: "Sau Yin" },
  { task: "Smelly Büchi", person: "Huakui" },
  { task: "NMR", person: "Emily, Patrycja, Alex" },
  { task: "MS", person: "Loli, Axel, Jannik, Jessica" },
  { task: "HPLC", person: "Toufic, Joaquin" },
  { task: "Size exclusion", person: "Patrick" },
  { task: "Automated Columns", person: "Loli, Maxime, Lukas" },
  { task: "SPS", person: "Lukas" },
  { task: "Microwave", person: "Victoria" },
  { task: "UV-vis and photoreactor", person: "Ke, James" },
  { task: "IR spectrophotometer", person: "Patrick" },
  { task: "Melting point", person: "Ke" },
  { task: "Dishwasher", person: "Huakui" },
  { task: "Water purification system", person: "Huakui" },
  { task: "Polarimeter", person: "Peng-Lai" },
  { task: "Centrifuge machine", person: "Peng-Lai" },
  { task: "pH meter", person: "Victoria" },
  { task: "Annual Windermere Trip", person: "Valerie" },
  { task: "Group meeting schedule", person: "Dan" },
  { task: "Applicants schedule", person: "Dan" },
  { task: "Old Trafford ticket distribution", person: "Maria, Prodip" },
  { task: "Solvent, waste rota, Unpacking new chemicals and labcup", person: "Flavio, Ke, Victoria, Peng-Lai, Prodip, Enzo, Maria" },
  { task: "Glassblower + Electronical/Mechanical Workshops", person: "Toufic" }
];

export const SCIENCE_DOMAINS = [
  { id: 'robotics', title: 'Molecular Robotics', description: 'Development of tiny machines for complex tasks.', icon: 'FlaskConical', color: 'purple' },
  { id: 'topology', title: 'Molecular Knots', description: 'Exploring the topology of intertwined molecules.', icon: 'Atom', color: 'blue' }
];

export const GROUP_STATS = [
  { label: 'Publications', value: '300+' },
  { label: 'Citations', value: '30k+' },
  { label: 'H-Index', value: '95+' }
];

export const MISSION_STATEMENT = "Mapping the topology of the microscopic world through synthesis and innovation.";

export const HOME_ASSETS = {
  hero: [
    { image: "images/manchester1.png", alt: "Manchester University 1", link: "https://www.youtube.com/watch?v=BmSKF5hdIpw" },
    { image: "images/manchester2.png", alt: "Manchester University 2", link: "https://www.youtube.com/watch?v=BmSKF5hdIpw" }
  ],
  research: [
    { image: "images/general/research-map.png", alt: "Group's Research Interests Map", link: "/research" },
    { image: "images/article_pictures/knotcatalysis2016/CartaMarinaKnot.jpg", alt: "Knot Catalysis Visual", link: "/research" }
  ],
  footerCards: [
    { title: "Virtual Tour", subtitle: "EXPLORE THE LAB", image: "images/thumbs/vtourmap_web.jpg", link: "/vtour" },
    { title: "World of Molecular Machines", subtitle: "RESEARCHER MAP", image: "images/general/chemmap_thumb.jpg", link: "https://www.catenane.net/pages/links.html" }
  ],
  quotes: [
    { text: "What I cannot create, I do not understand", author: "Richard P. Feynman" },
    { text: "If you want to conquer the ocean and reach out for new continents don't tell your men to get wood and nails to build a ship, just instil in them the yearning for the expanse of the seas and distant lands", author: "Antoine de Saint-Exupery" }
  ]
};

export const PROF_BIO: ProfBio = {
  name: "Professor David A Leigh",
  titles: ["FRS", "FRSE", "FRSC", "MAE"],
  education: "BSc PhD (University of Sheffield)",
  career: [
    { year: "2012-", role: "Royal Society Research Professor & Sir Samuel Hall Chair of Chemistry, University of Manchester" },
    { year: "2016-", role: "Distinguished Professor, East China Normal University, Shanghai" },
    { year: "2001-2012", role: "Forbes Chair of Organic Chemistry, University of Edinburgh" }
  ],
  awards: [
    { year: "2023", title: "Royal Medal of the Royal Society" },
    { year: "2021", title: "ISNSCE Nanoscience Prize" },
    { year: "2017", title: "RSC Sir David Attenborough Award" }
  ],
  lectures: [],
  memberships: [
    "Fellow of the Royal Society (elected 2009)",
    "Member of the Academia Europaea (elected 2012)",
    "Fellow of the Royal Society of Edinburgh (elected 2005)"
  ],
  interviews: [],
  contact: {
    manchester: ["Manchester Institute of Biotechnology", "University of Manchester", "Manchester M1 7DN", "UK"],
    shanghai: ["School of Chemistry and Molecular Engineering", "East China Normal University", "Shanghai 200241", "China"],
    email: "david.leigh@manchester.ac.uk",
    twitter: "@LeighGroup",
    scholar: "https://scholar.google.com/citations?user=Y_D_S8QAAAAJ",
    orcid: "0000-0002-1202-1014",
    researcherId: "B-5301-2009"
  }
};

export const GROUP_MEMBERS: GroupMember[] = [
  { name: "David Leigh", qualification: "Professor", email: "hgeil.divad", image: "images/team/dave.jpg" },
  { name: "Stefan Borsley", qualification: "Postdoc", email: "yelsrob.nafetS", image: "images/team/stefan.jpg" },
  { name: "Salma Kassem", qualification: "Postdoc", email: "messak.amlaS", image: "images/team/salma.jpg" }
];

export const SHANGHAI_MEMBERS: GroupMember[] = [
  { name: "Dr Peng Chen", qualification: "PhD, East China Normal University, China", email: "nc.ude.unce.mehc@nehcp", image: "images/current_members/ecnu/peng_web.jpg" },
  { name: "Dr Sujun Chen", qualification: "PhD, East China University of Science and Technology, China", email: "nc.ude.unce.mehc@nehcjs", image: "images/current_members/ecnu/sujun_web.jpg" },
  { name: "Dr Zhanhu Sun", qualification: "PhD, RWTH Aachen University, Germany", email: "nc.ude.unce.mehc@nushz", image: "images/current_members/ecnu/Zhanhu_web.jpg" },
  { name: "Dr Zhi-Hui Zhang", qualification: "PhD, University of Southampton, UK", email: "nc.ude.unce.mehc@iuhihzgnahz", image: "images/current_members/ecnu/Peggyweb.jpg" }
];

export const PUBLICATIONS: Record<string, Publication[]> = {
  "2025": [
    {
      year: "2025",
      title: "Transducing chemical energy through catalysis",
      url: "https://t.co/YWomGAutpU",
      authors: "Peng-Lai Wang, Stefan Borsley, Martin J. Power, Alessandro Cavasso, Nicolas Giuseppone & David A. Leigh",
      journal: "Nature",
      volume: "637",
      pages: "594–600",
      abstractImg: "images/article_pictures/2025_GelContraction/Gelpicture1.png"
    }
  ],
  "2024": [
    {
      year: "2024",
      title: "Molecular ratchets and kinetic asymmetry: Giving chemistry direction",
      url: "https://onlinelibrary.wiley.com/doi/10.1002/anie.202400495",
      authors: "S Borsley, D A Leigh, B M W Roberts",
      journal: "Angew. Chem. Int. Ed.",
      volume: "63",
      pages: "e202400495",
      abstractImg: "images/article_pictures/2022RotaryMotor/Fig1.png"
    },
    {
      year: "2024",
      title: "Structure-performance relationships for catalysis-driven molecular machinery",
      url: "https://doi.org/10.1016/j.chempr.2024.01.002",
      authors: "J Baixeras Buye, J M Gallagher, D A Leigh",
      journal: "Chem",
      volume: "10",
      pages: "1-15"
    }
  ],
  "2023": [
    {
      year: "2023",
      title: "Reaction: Of myths, misconceptions and motors—a matter of equilibrium",
      url: "https://doi.org/10.1016/j.chempr.2023.10.001",
      authors: "D A Leigh",
      journal: "Chem",
      volume: "11",
      pages: "102745"
    }
  ],
  "2022": [
    {
      year: "2022",
      title: "A Read-Only Molecular Turing Machine",
      url: "https://www.nature.com/articles/s41586-022-05305-9",
      authors: "Yansong Ren, Romain Jamagne, Daniel J. Tetlow, David A. Leigh",
      journal: "Nature",
      volume: "612",
      pages: "78–82",
      abstractImg: "images/article_pictures/2022TapeReading/Turing.png"
    },
    {
      year: "2022",
      title: "Autonomous fuelled directional rotation about a covalent single bond",
      url: "https://www.nature.com/articles/s41586-022-04450-5",
      authors: "S Borsley, E Kreidt, D A Leigh, B M W Roberts",
      journal: "Nature",
      volume: "604",
      pages: "80-85"
    },
    {
        year: "2022",
        title: "Vernier Entanglements",
        url: "https://www.science.org/doi/10.1126/science.abm9247",
        authors: "Zoe Ashbridge et al",
        journal: "Science",
        volume: "375",
        pages: "1035-1041"
    }
  ],
  "2021": [
    {
      year: "2021",
      title: "A catalysis-driven artificial molecular pump",
      url: "https://www.nature.com/articles/s41586-021-03575-3",
      authors: "S Amano, S D P Fielden, D A Leigh",
      journal: "Nature",
      volume: "594",
      pages: "529-534"
    },
    {
      year: "2021",
      title: "A molecular endless (74) knot",
      url: "https://www.nature.com/articles/s41557-020-00594-x",
      authors: "D A Leigh, J J Danon, S D P Fielden, J-F Lemonnier, G F S Whitehead, S L Woltering",
      journal: "Nat. Chem.",
      volume: "13",
      pages: "117-122"
    }
  ],
  "2020": [
    {
      year: "2020",
      title: "Tying different knots in a molecular strand",
      url: "https://www.nature.com/articles/s41586-020-2614-0",
      authors: "D A Leigh, F Schaufelberger, L Pirvu, J Halldin Stenlid, D P August, J Segard",
      journal: "Nature",
      volume: "584",
      pages: "562-568"
    },
    {
      year: "2020",
      title: "Self-assembly of a layered two-dimensional molecularly woven fabric",
      url: "https://www.nature.com/articles/s41586-020-3013-y",
      authors: "D P August, R A W Dryfe, S J Haigh, P R C Kent, D A Leigh et al",
      journal: "Nature",
      volume: "588",
      pages: "429-435"
    }
  ]
};
