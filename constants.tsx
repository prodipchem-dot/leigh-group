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
    { image: "images/thumbs/Gelthumbnail.png", alt: "Gel Contraction", link: "/research/2025-gel-contraction" },
    { image: "images/thumbs/TapeThumb.png", alt: "Tape Reading Ratchet", link: "/research/2022-tape-reading" }
  ],
  research: [
    { image: "images/article_pictures/2022RotaryMotor/Feynman.png", alt: "Research Frontiers Map", link: "/research" }
  ],
  footerCards: [
    { title: "Virtual Tour", subtitle: "EXPLORE THE LAB", image: "images/general/vtourmap_web.jpg", link: "/vtour" },
    { title: "The Group", subtitle: "OUR TEAM", image: "images/GroupPhoto2025.jpg", link: "/group" }
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

export const PUBLICATIONS: Record<string, Publication[]> = {
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
      coverUrl: "https://www.catenane.net/pdfs/DAL/angewandtecover.pdf"
    },
    {
      year: "2025",
      title: "Synthesis of a station-less molecular daisy chain",
      url: "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chem.202501369",
      authors: "C Kress, D Häussinger, D A Leigh and M Mayor",
      journal: "Chem Eur J",
      volume: "31",
      pages: "e202501369 (2025)",
      abstractImg: "images/graphical_abstracts/2025/Daisychaingraphicalabstract.jpg",
      highlight: "Editors' Choice: Spotlights 20 May 2025."
    },
    {
      year: "2025",
      title: "A catalysis-driven dual molecular motor",
      url: "https://pubs.acs.org/doi/10.1021/jacs.5c01275",
      authors: "P-L Wang, E Olivieri, S Borsley, G F S Whitehead, A Hasija and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "147",
      pages: "10690-10697 (2025)",
      abstractImg: "images/graphical_abstracts/2025/images_large_ja5c01275_0006.jpg"
    },
    {
      year: "2025",
      title: "Structural influence of the chemical fueling system on a catalysis-driven rotary molecular motor",
      url: "https://pubs.acs.org/doi/10.1021/jacs.5c00028",
      authors: "H-K Liu, T W Mrad, A Troncossi, S Borsley, B M W Roberts, A Betts and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "147",
      pages: "8785-8795 (2025)",
      abstractImg: "images/graphical_abstracts/2025/fuelexploration.jpg"
    },
    {
      year: "2025",
      title: "Transducing chemical energy through catalysis by an artificial molecular motor",
      url: "https://t.co/YWomGAutpU",
      authors: "P-L Wang, S Borsley, M J Power, A Cavasso, N Giuseppone and D A Leigh",
      journal: "Nature",
      volume: "637",
      pages: "594–600 (2025)",
      abstractImg: "images/graphical_abstracts/2025/Gelga.png"
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
      title: "Active template synthesis",
      url: "https://pubs.rsc.org/en/content/articlepdf/2024/CS/D4CS00430B",
      authors: "R Jamagne, M J Power, Z-H Zhang, G Zango, B Gibber and D A Leigh",
      journal: "Chem Soc Rev",
      volume: "53",
      pages: "10216-10252 (2024)",
      abstractImg: "images/graphical_abstracts/2024/activetemplatereview.png"
    },
    {
      year: "2024",
      title: "Folding a molecular strand into a trefoil knot of single handedness with Co(II)/Co(III) chaperones",
      url: "https://doi.org/10.1021/jacs.4c05953",
      authors: "J Zhong, Z Sun, L Zhang, G F S Whitehead, I J Vitorica-Yrezabal and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "146",
      pages: "21762-21768 (2024)",
      abstractImg: "images/graphical_abstracts/2024/foldingtrefoilknot.png"
    },
    {
      year: "2024",
      title: "Mechanical scission of a knotted polymer",
      url: "https://www.nature.com/articles/s41557-024-01510-3",
      authors: "M Zhang, R Nixon, F Schaufelberger, L Pirvu, G De Bo and D A Leigh",
      journal: "Nat Chem",
      volume: "16",
      pages: "1366-1372 (2024)",
      abstractImg: "images/graphical_abstracts/2024/knotbreaking.jpg",
      highlight: "Highlighted in Sci China Chem (2024)."
    },
    {
      year: "2024",
      title: "Macroscopic spiral rotation of microscopic objects induced by nanoscale rotaxane dynamics",
      url: "https://www.sciencedirect.com/science/article/pii/S2451929424001220",
      authors: "A Ryabchun, R Jamagne, J Echavarren, M Patanapongpibul, L Zhang, N Katsonis and D A Leigh",
      journal: "Chem",
      volume: "10",
      pages: "2196-2206 (2024)",
      abstractImg: "images/graphical_abstracts/2024/macroscopicspiral.png"
    },
    {
      year: "2024",
      title: "Molecular ratchets and kinetic asymmetry: Giving chemistry direction",
      url: "https://onlinelibrary.wiley.com/doi/10.1002/anie.202400495",
      authors: "S Borsley, D A Leigh and B M W Roberts",
      journal: "Angew Chem Int Ed",
      volume: "63",
      pages: "e202400495 (2024)",
      abstractImg: "images/graphical_abstracts/2023/ratchetreview.png"
    },
    {
      year: "2024",
      title: "Endergonic synthesis driven by chemical fuelling",
      url: "https://www.nature.com/articles/s44160-024-00493-w",
      authors: "E Olivieri, J M Gallagher, A Betts, T W Mrad, and D A Leigh",
      journal: "Nat Synth",
      volume: "3",
      pages: "707–714 (2024)",
      abstractImg: "images/graphical_abstracts/2023/dielsalder.jpg",
      highlight: "Highlighted in Nat Synth and Chem World (2024)."
    },
    {
      year: "2024",
      title: "Changing liquid crystal helical pitch with a reversible rotaxane switch",
      url: "https://doi.org/10.1002/anie.202401291",
      authors: "S Chen, N Katsonis, D A Leigh, M Patanapongpibul, A Ryabchun and L Zhang",
      journal: "Angew Chem Int Ed",
      volume: "6",
      pages: "e202401291 (2024)",
      abstractImg: "images/graphical_abstracts/2023/liquidhelicalpitch.png"
    },
    {
      year: "2024",
      title: "Stepwise operation of a molecular rotary motor driven by an Appel reaction",
      url: "https://doi.org/10.1021/jacs.3c10266",
      authors: "P Zwick, A Troncossi, S Borsley, I J Vitorica-Yrezabal, and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "146",
      pages: "4467-4472 (2024)",
      abstractImg: "images/graphical_abstracts/2023/appeltizer.png"
    },
    {
      year: "2024",
      title: "Ratcheting synthesis",
      url: "https://www.nature.com/articles/s41570-023-00558-y",
      authors: "S Borsley, J M Gallagher, D A Leigh and B M W Roberts",
      journal: "Nat Rev Chem",
      volume: "8",
      pages: "8-29 (2024)",
      abstractImg: "images/graphical_abstracts/2023/ratchetingsynthesis.png",
      coverImg: "images/covers/thumbs/ratchetingsyntheiscover.gif",
      coverUrl: "https://www.catenane.net/pdfs/pictures/ratchetingsyntheiscover.pdf"
    },
    {
      year: "2024",
      title: "Non-equilibrium structure and dynamics: Giving chemistry direction",
      url: "https://doi.org/10.1142/9789811282324_0013",
      authors: "D A Leigh",
      journal: "Solvay Conferences on Chemistry Proceedings",
      volume: "100",
      pages: "111-115 (2024)",
      abstractImg: "images/graphical_abstracts/2023/Nonequilibriumstructureanddynamics.png"
    },
    {
      year: "2024",
      title: "Conformational selection accelerates catalysis by an organocatalytic molecular motor",
      url: "https://www.cell.com/chem/fulltext/S2451-9294(23)00545-4",
      authors: "J M Gallagher, B M W Roberts, S Borsley and D A Leigh",
      journal: "Chem",
      volume: "10",
      pages: "855-866 (2024)",
      abstractImg: "images/graphical_abstracts/2023/Wobbly.png",
      highlight: "Highlighted in Chem, Commun Chem, and Nat Catal."
    }
  ],
  "2023": [
    {
      year: "2023",
      title: "Switched “on” transient fluorescence output from a pulsed-fuel molecular ratchet",
      url: "https://pubs.acs.org/doi/10.1021/jacs.3c11290",
      authors: "A S Baluna, M Dommaschk, B Groh, S Kassem, D A Leigh, D J Tetlow, D Thomas and L V López",
      journal: "J Am Chem Soc",
      volume: "145",
      pages: "27113-27119 (2023)",
      abstractImg: "images/graphical_abstracts/2023/images_large_ja3c11290_0006.png"
    },
    {
      year: "2023",
      title: "The role of kinetic asymmetry and power strokes in an information ratchet",
      url: "https://authors.elsevier.com/sd/article/S245192942300267X",
      authors: "L Binks, S Borsley, T R Gingrich, D A Leigh, E Penocchio, and B M W Roberts",
      journal: "Chem",
      volume: "9",
      pages: "2902-2917 (2023)",
      abstractImg: "images/graphical_abstracts/2023/BadMotors.png",
      highlight: "Previewed in Matter 6, 2533-2536 (2023)."
    },
    {
      year: "2023",
      title: "Single-molecule studies on artificial small-molecule machines",
      url: "https://www.chinesechemsoc.org/doi/abs/10.31635/ccschem.023.202302949",
      authors: "Z-H Zhang, H-N Feng, G Chi, D A Leigh and L Zhang",
      journal: "CCS Chem",
      volume: "5",
      pages: "2448-2465 (2023)",
      abstractImg: "images/graphical_abstracts/2023/CCSreview.jpg"
    },
    {
      year: "2023",
      title: "In search of Wasserman’s catenane",
      url: "https://pubs.acs.org/doi/10.1021/jacs.3c01939",
      authors: "A S Baluna, A Galan, D A Leigh, G D Smith, J T J Spence, D J Tetlow, I J Vitorica-Yrezabal and M Zhang",
      journal: "J Am Chem Soc",
      volume: "145",
      pages: "9825-9833 (2023)",
      abstractImg: "images/graphical_abstracts/2023/Wasserman.png",
      highlight: "Highlighted in Supramolecular Chemistry, Chem World, and In the Pipeline."
    },
    {
      year: "2023",
      title: "Compact rotaxane superbases",
      url: "https://pubs.acs.org/doi/10.1021/jacs.3c01202",
      authors: "M J Power, D T J Morris, I J Vitorica-Yrezabal and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "145",
      pages: "8593-8599 (2023)",
      abstractImg: "images/graphical_abstracts/2023/Superbase.jpg"
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
      coverUrl: "https://www.catenane.net/images/covers/large/AFMKnot.pdf"
    }
  ],
  "2022": [
    {
      year: "2022",
      title: "Using catalysis to drive chemistry away from equilibrium",
      url: "https://pubs.acs.org/doi/10.1021/jacs.2c08723",
      authors: "S Amano, M Esposito, E Kreidt, D A Leigh, E Penocchio and B M W Roberts",
      journal: "J Am Chem Soc",
      volume: "144",
      pages: "20153-20164 (2022)",
      abstractImg: "images/graphical_abstracts/2022/Curtin-Hammett.jpg"
    },
    {
      year: "2022",
      title: "A tape-reading molecular ratchet",
      url: "https://www.nature.com/articles/s41586-022-05305-9",
      authors: "Y Ren, R Jamagne, D J Tetlow and D A Leigh",
      journal: "Nature",
      volume: "612",
      pages: "78–82 (2022)",
      abstractImg: "images/graphical_abstracts/2022/Turing.png",
      highlight: "Highlighted in Chem World, Phys Org, Wired, and others."
    },
    {
      year: "2022",
      title: "Tuning the force, speed, and efficiency of an autonomous chemically fuelled information ratchet",
      url: "https://pubs.acs.org/doi/full/10.1021/jacs.2c07633",
      authors: "S Borsley, D A Leigh, B M W Roberts and I J Vitorica-Yrezabal",
      journal: "J Am Chem Soc",
      volume: "144",
      pages: "17241-17248 (2022)",
      abstractImg: "images/graphical_abstracts/2022/SpeedAndPower.jpg"
    },
    {
      year: "2022",
      title: "Social self-sorting synthesis of molecular knots",
      url: "https://pubs.acs.org/doi/full/10.1021/jacs.2c07682",
      authors: "Z Ashbridge, O M Knapp, E Kreidt, D A Leigh, L Pirvu and F Schaufelberger",
      journal: "J Am Chem Soc",
      volume: "144",
      pages: "17232-17240 (2022)",
      abstractImg: "images/graphical_abstracts/2022/SelfSorting.jpg"
    },
    {
      year: "2022",
      title: "Transamidation-driven molecular pumps",
      url: "https://pubs.acs.org/doi/10.1021/jacs.2c06807",
      authors: "L Binks, C Tian, S D P Fielden, I J Vitorica-Yrezabal and D A Leigh",
      journal: "J Am Chem Soc",
      volume: "144",
      pages: "15838-15844 (2022)",
      abstractImg: "images/graphical_abstracts/2022/Transamidation.jpg",
      highlight: "Highlighted in Chem World."
    },
    {
      year: "2022",
      title: "Knotting matters: orderly molecular entanglements",
      url: "https://pubs.rsc.org/en/content/articlelanding/2022/cs/d2cs00323f",
      authors: "Z Ashbridge, S D P Fielden, D A Leigh, L Pirvu, F Schaufelberger and L Zhang",
      journal: "Chem Soc Rev",
      volume: "51",
      pages: "7779-7809 (2022)",
      abstractImg: "images/graphical_abstracts/2022/KnottingMatters.png",
      coverImg: "images/covers/thumbs/KnottingMattersThumb.png",
      coverUrl: "https://www.catenane.net/images/covers/large/KnottingMattersThumb.pdf"
    },
    {
      year: "2022",
      title: "Chemical fuels for molecular machinery",
      url: "https://www.nature.com/articles/s41557-022-00970-9",
      authors: "S Borsley, D A Leigh and B M W Roberts",
      journal: "Nat Chem",
      volume: "14",
      pages: "728-738 (2022)",
      abstractImg: "images/graphical_abstracts/2022/FuelsReview.png",
      highlight: "Highlighted in C&EN."
    },
    {
      year: "2022",
      title: "Decorating polymer beads with 10^14 inorganic-organic [2]rotaxanes",
      url: "https://www.nature.com/articles/s42004-022-00689-1",
      authors: "D Asthana et al.",
      journal: "Commun Chem",
      volume: "5",
      pages: "73 (2022)",
      abstractImg: "images/graphical_abstracts/2022/InorgRotax.png",
      highlight: "Highlighted in Chem World."
    },
    {
      year: "2022",
      title: "Foreword in Women in Supramolecular Chemistry",
      url: "https://www.catenane.net/pdfs/DAL/WISC_Foreword.pdf",
      authors: "D A Leigh",
      journal: "Policy Press",
      volume: "XIV-XV",
      pages: "(2022)",
      abstractImg: "images/graphical_abstracts/2022/WISC.png"
    },
    {
      year: "2022",
      title: "Autonomous fuelled directional rotation about a covalent single bond",
      url: "https://www.nature.com/articles/s41586-022-04450-5",
      authors: "S Borsley, E Kreidt, D A Leigh and B M W Roberts",
      journal: "Nature",
      volume: "604",
      pages: "80–85 (2022)",
      abstractImg: "images/article_pictures/2022RotaryMotor/Fig4.png",
      highlight: "Highlighted in Science, Chem World, Phys Org."
    },
    {
      year: "2022",
      title: "Pumping between phases with a pulsed-fuel molecular ratchet",
      url: "https://www.nature.com/articles/s41565-022-01097-1",
      authors: "D Thomas, D J Tetlow, Y Ren, S Kassem, U Karaca and D A Leigh",
      journal: "Nat Nanotechnol",
      volume: "17",
      pages: "701–707 (2022)",
      abstractImg: "images/article_pictures/2022PhaseTransfer/TopImage.png",
      highlight: "Highlighted in Science."
    },
    {
      year: "2022",
      title: "Insights from an information thermodynamics analysis of a synthetic molecular motor",
      url: "https://www.nature.com/articles/s41557-022-00899-z",
      authors: "S Amano, M Esposito, E Kreidt, D A Leigh, E Penocchio and B M W Roberts",
      journal: "Nat Chem",
      volume: "14",
      pages: "530-537 (2022)",
      abstractImg: "images/graphical_abstracts/2021/Inftherm.png"
    },
    {
      year: "2022",
      title: "Vernier template synthesis of molecular knots",
      url: "https://www.science.org/doi/10.1126/science.abm9247",
      authors: "Z Ashbridge, E Kreidt, L Pirvu, F Schaufelberger, J Halldin Stenlid, F Abild-Pedersen and D A Leigh",
      journal: "Science",
      volume: "375",
      pages: "1035-1041 (2022)",
      abstractImg: "images/graphical_abstracts/2022/Vernier.png",
      highlight: "Highlighted in C&EN and multiple Chinese news outlets."
    },
    {
      year: "2022",
      title: "Molecular weaving",
      url: "https://www.nature.com/articles/s41563-021-01179-w",
      authors: "Z-H Zhang, B J Andreassen, D P August, D A Leigh and L Zhang",
      journal: "Nat Mater",
      volume: "21",
      pages: "275-283 (2022)",
      abstractImg: "images/graphical_abstracts/2022/IntWov.png",
      coverImg: "images/covers/thumbs/weaving-nat-mat.png",
      coverUrl: "https://www.catenane.net/images/covers/large/weaving-nat-mat-cover.pdf"
    },
    {
      year: "2022",
      title: "Real-time observation of the dynamics of an individual rotaxane molecular shuttle",
      url: "https://www.sciencedirect.com/science/article/pii/S2451929421005830",
      authors: "S Chen et al.",
      journal: "Chem",
      volume: "8",
      pages: "243-252 (2022)",
      abstractImg: "images/graphical_abstracts/2021/SingleMolChem.png"
    }
  ],
  "2021": [
    {
      year: "2021",
      title: "Chemical engines: Driving systems away from equilibrium",
      url: "https://www.nature.com/articles/s41565-021-00975-4",
      authors: "S Amano, S Borsley, D A Leigh and Z Sun",
      journal: "Nat Nanotechnol",
      volume: "16",
      pages: "1057-1067 (2021)",
      abstractImg: "images/graphical_abstracts/2021/Drivsys.png"
    },
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
      title: "Sequence-selective decapeptide synthesis by the parallel operation of two artificial molecular machines",
      url: "https://pubs.acs.org/doi/full/10.1021/jacs.1c01234",
      authors: "J Echavarren et al.",
      journal: "J Am Chem Soc",
      volume: "143",
      pages: "5158-5165 (2021)",
      abstractImg: "images/graphical_abstracts/2021/spice.png"
    },
    {
      year: "2021",
      title: "A doubly kinetically-gated information ratchet",
      url: "https://pubs.acs.org/doi/10.1021/jacs.1c01172",
      authors: "S Borsley, D A Leigh and B M W Roberts",
      journal: "J Am Chem Soc",
      volume: "143",
      pages: "4414-4420 (2021)",
      abstractImg: "images/graphical_abstracts/2021/ratchet.png"
    },
    {
      year: "2021",
      title: "Site-to-site peptide transport on a molecular platform",
      url: "https://pubs.rsc.org/en/content/articlelanding/2021/sc/d0sc05906d",
      authors: "S Kassem et al.",
      journal: "Chem Sci",
      volume: "12",
      pages: "2065-2070 (2021)",
      abstractImg: "images/graphical_abstracts/2020/transporter.png"
    },
    {
      year: "2021",
      title: "Effects of turn-structure on folding and entanglement in artificial molecular overhand knots",
      url: "https://pubs-rsc-org.manchester.idm.oclc.org/en/content/articlelanding/2021/sc/d0sc05897a",
      authors: "Y Song et al.",
      journal: "Chem Sci",
      volume: "12",
      pages: "1826-1833 (2021)",
      abstractImg: "images/graphical_abstracts/2020/protknot.png"
    },
    {
      year: "2021",
      title: "Real-time fluctuations in single-molecule rotaxane experiments",
      url: "https://pubs.acs.org/doi/pdf/10.1021/jacs.0c12161",
      authors: "D Sluysmans et al.",
      journal: "J Am Chem Soc",
      volume: "143",
      pages: "2348-2352 (2021)",
      abstractImg: "images/graphical_abstracts/2021/AFMrotax.png",
      coverImg: "images/covers/thumbs/AFM_thumb.png",
      coverUrl: "https://www.catenane.net/images/covers/large/AFM.pdf"
    },
    {
      year: "2021",
      title: "A chiral cyclometalated Iridium Star of David [2]catenane",
      url: "https://pubs.acs.org/doi/full/10.1021/jacs.0c12038",
      authors: "D P August et al.",
      journal: "J Am Chem Soc",
      volume: "143",
      pages: "1154-1161 (2021)",
      abstractImg: "images/graphical_abstracts/2021/IrKnot.png",
      highlight: "Highlighted in C&EN and ChemistryViews."
    },
    {
      year: "2021",
      title: "A molecular endless (74) knot",
      url: "https://www.nature.com/articles/s41557-020-00594-x",
      authors: "D A Leigh et al.",
      journal: "Nat Chem",
      volume: "13",
      pages: "117-122 (2021)",
      abstractImg: "images/graphical_abstracts/2020/endless.jpg",
      coverImg: "images/covers/thumbs/7(4).png",
      coverUrl: "https://www.catenane.net/images/covers/large/7(4).png",
      highlight: "Highlighted in Nature, Chem World, Phys Org, and others."
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
      abstractImg: "images/graphical_abstracts/2020/2DMatgraph.png",
      highlight: "Guinness World Record for finest woven fabric. Extensive media coverage."
    },
    {
      year: "2020",
      title: "Transmembrane ion channels formed by a Star of David [2]catenane and a molecular pentafoil knot",
      url: "https://pubs.acs.org/articlesonrequest/AOR-DCVGS8D3KX9MKT57QPIM",
      authors: "D P August et al.",
      journal: "J Am Chem Soc",
      volume: "142",
      pages: "18859-18865 (2020)",
      abstractImg: "images/graphical_abstracts/2020/ionchannel.jpg"
    },
    {
      year: "2020",
      title: "A track-based molecular synthesizer",
      url: "http://disq.us/t/3s9vg81",
      authors: "C T McTernan, G De Bo and D A Leigh",
      journal: "Chem",
      volume: "6",
      pages: "2964-2973 (2020)",
      abstractImg: "images/graphical_abstracts/2020/Wittigator.png",
      coverImg: "images/covers/thumbs/Wittigator.png",
      coverUrl: "https://www.catenane.net/images/covers/large/WittigatorCover.pdf"
    },
    {
      year: "2020",
      title: "Tying different knots in a molecular strand",
      url: "https://www.nature.com/articles/s41586-020-2614-0",
      authors: "D A Leigh et al.",
      journal: "Nature",
      volume: "584",
      pages: "562-568 (2020)",
      abstractImg: "images/graphical_abstracts/2020/5_2_knot.jpg",
      highlight: "C&EN Molecule of the Year 2020. Highlighted in Nature, Phys Org, and others."
    },
    {
      year: "2020",
      title: "Knotting a molecular strand can invert macroscopic effects of chirality",
      url: "https://www-nature-com.manchester.idm.oclc.org/articles/s41557-020-0517-1",
      authors: "N Katsonis et al.",
      journal: "Nat Chem",
      volume: "12",
      pages: "939-944 (2020)",
      abstractImg: "images/graphical_abstracts/2020/Inversion%20pitch.png"
    },
    {
      year: "2020",
      title: "Single-step enantioselective synthesis of mechanically planar chiral [2]rotaxanes",
      url: "https://doi.org/10.1021/jacs.0c03447",
      authors: "C Tian et al.",
      journal: "J Am Chem Soc",
      volume: "142",
      pages: "9803-9808 (2020)",
      abstractImg: "images/graphical_abstracts/2020/MechRot2020.png"
    },
    {
      year: "2020",
      title: "Weak functional group interactions revealed through metal-free active template rotaxane synthesis",
      url: "https://rdcu.be/b1hOp",
      authors: "C Tian et al.",
      journal: "Nat Commun",
      volume: "11",
      pages: "744 (2020)",
      abstractImg: "images/graphical_abstracts/2020/NatComm2020.png"
    }
  ],
  "2019": [
    {
      year: "2019",
      title: "Dynamic control of chiral space through local symmetry breaking in a rotaxane organocatalyst",
      url: "https://onlinelibrary.wiley.com/doi/pdf/10.1002/anie.201908330",
      authors: "M Dommaschk et al.",
      journal: "Angew Chem Int Ed",
      volume: "58",
      pages: "14955-14958 (2019)",
      abstractImg: "images/graphical_abstracts/2019/Rotaxorgano.png"
    },
    {
      year: "2019",
      title: "Self-sorting assembly of molecular trefoil knots of single handedness",
      url: "https://pubs.acs.org/doi/10.1021/jacs.9b06127",
      authors: "J Zhong et al.",
      journal: "J Am Chem Soc",
      volume: "141",
      pages: "14249-14256 (2019)",
      abstractImg: "images/graphical_abstracts/2019/SelfSortingTrefoils.png"
    },
    {
      year: "2019",
      title: "Active template rotaxane synthesis",
      url: "https://pubs.rsc.org/en/content/articlelanding/2019/sc/c9sc02457c",
      authors: "J Echavarren et al.",
      journal: "Chem Sci",
      volume: "10",
      pages: "7269-7273 (2019)",
      abstractImg: "images/graphical_abstracts/2019/Redoxester.jpg"
    },
    {
      year: "2019",
      title: "Dissipative catalysis with a molecular machine",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201905250",
      authors: "C Biagini et al.",
      journal: "Angew Chem Int Ed",
      volume: "58",
      pages: "9876-9880 (2019)",
      abstractImg: "images/graphical_abstracts/2019/Disscatmech.png",
      coverImg: "images/covers/thumbs/Disscat2019.jpg",
      coverUrl: "https://www.catenane.net/images/covers/large/Disscat2019re.pdf"
    },
    {
      year: "2019",
      title: "Stereoselective synthesis of molecular square and granny knots",
      url: "https://pubs.acs.org/doi/10.1021/jacs.9b01819",
      authors: "D A Leigh et al.",
      journal: "J Am Chem Soc",
      volume: "141",
      pages: "6054-6059 (2019)",
      abstractImg: "images/graphical_abstracts/2019/GrannyKnots.png"
    },
    {
      year: "2019",
      title: "Coordination chemistry of a molecular pentafoil knot",
      url: "https://pubs.acs.org/doi/10.1021/jacs.8b12548",
      authors: "L Zhang et al.",
      journal: "J Am Chem Soc",
      volume: "141",
      pages: "3952-3958 (2019)",
      abstractImg: "images/graphical_abstracts/2019/PK%20metals.png"
    },
    {
      year: "2019",
      title: "Probing the dynamics of imine-based pentafoil knot",
      url: "https://pubs.acs.org/doi/10.1021/jacs.8b12800",
      authors: "J-F Ayme et al.",
      journal: "J Am Chem Soc",
      volume: "141",
      pages: "3605-3612 (2019)",
      abstractImg: "images/graphical_abstracts/2019/PKdynamics.jpg"
    },
    {
      year: "2019",
      title: "Effects of knot tightness at the molecular level",
      url: "https://www.pnas.org/content/early/2019/01/24/1815570116.abstract",
      authors: "L Zhang et al.",
      journal: "Proc Natl Acad Sci USA",
      volume: "116",
      pages: "2452-2457 (2019)",
      abstractImg: "images/graphical_abstracts/2019/tightness.png"
    }
  ],
  "2018": [
    {
      year: "2018",
      title: "Analysis of two [2]catenanes",
      url: "https://www.degruyter.com/view/j/znb.ahead-of-print/znb-2018-0179/znb-2018-0179.xml",
      authors: "P Luger et al.",
      journal: "Z. Naturforsch.",
      volume: "73b",
      pages: "677-687 (2018)",
      abstractImg: "images/graphical_abstracts/2018/DFTcatenane.png"
    },
    {
      year: "2018",
      title: "Stereoselective synthesis of a composite knot with nine crossings",
      url: "https://www.nature.com/articles/s41557-018-0124-6",
      authors: "L Zhang et al.",
      journal: "Nature Chem",
      volume: "10",
      pages: "1083-1088 (2018)",
      abstractImg: "images/graphical_abstracts/2018/compositeknot.png",
      coverImg: "images/covers/thumbs/nat%20chem%20composite%20knot%20cover.jpg",
      coverUrl: "https://www.nature.com/nchem/volumes/10/issues/11"
    },
    {
      year: "2018",
      title: "A six-crossing doubly interlocked [2]catenane",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201807135",
      authors: "J J Danon et al.",
      journal: "Angew Chem Int Ed",
      volume: "57",
      pages: "13833-13837 (2018)",
      abstractImg: "images/graphical_abstracts/2018/623link.png"
    },
    {
      year: "2018",
      title: "Spontaneous assembly of rotaxanes",
      url: "https://pubs.acs.org/doi/10.1021/jacs.8b03394",
      authors: "S D P Fielden et al.",
      journal: "J Am Chem Soc",
      volume: "140",
      pages: "6049-6052 (2018)",
      abstractImg: "images/graphical_abstracts/2018/amine-rotaxane.png"
    },
    {
      year: "2018",
      title: "Securing a supramolecular architecture by tying a stopper knot",
      url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201803871",
      authors: "D A Leigh et al.",
      journal: "Angew Chem Int Ed",
      volume: "57",
      pages: "10484-10488 (2018)",
      abstractImg: "images/graphical_abstracts/2018/stopper-knot.png",
      coverImg: "images/covers/thumbs/Frontispiece%20StopperKnotRot%20Angew%202018_thumb.jpg",
      coverUrl: "https://www.catenane.net/images/covers/large/Frontispiece%20StopperKnotRot%20Angew%202018.pdf"
    },
    {
      year: "2018",
      title: "An artificial molecular machine that builds an asymmetric catalyst",
      url: "https://www.nature.com/articles/s41565-018-0105-3",
      authors: "G De Bo et al.",
      journal: "Nature Nanotech",
      volume: "13",
      pages: "381-385 (2018)",
      abstractImg: "images/graphical_abstracts/2018/NatNano_TOC.png",
      coverImg: "images/covers/thumbs/LeighArtMolMachCoverSuggestion_thumb.jpg",
      coverUrl: "https://www.catenane.net/images/covers/large/LeighArtMolMachCoverSuggestion5MB.jpg"
    },
    {
      year: "2018",
      title: "A molecular trefoil knot from a trimeric circular helicate",
      url: "https://pubs.acs.org/doi/10.1021/jacs.8b00738",
      authors: "L Zhang et al.",
      journal: "J Am Chem Soc",
      volume: "140",
      pages: "4982-4985 (2018)",
      abstractImg: "images/graphical_abstracts/2018/trimeric_helicate.png",
      coverImg: "images/covers/thumbs/TrimericCircHelc%20Trefoil%20Knot%20JACS%20cover%20image_thumb.jpg",
      coverUrl: "https://www.catenane.net/images/covers/large/TrimericCircHelc%20Trefoil%20Knot%20JACS%20cover%20image.jpg"
    }
  ],
  "2017": [
    {
      year: "2017",
      title: "Rotary and linear molecular motors driven by pulses of a chemical fuel",
      url: "http://science.sciencemag.org/content/358/6361/340",
      authors: "S Erbas-Cakmak et al.",
      journal: "Science",
      volume: "358",
      pages: "340-343 (2017)",
      abstractImg: "images/article_pictures/chemical_fuelled_motor_2017/chemical_fuelled_motor_cover_cropped.jpg"
    },
    {
      year: "2017",
      title: "Stereodivergent synthesis with a programmable molecular machine",
      url: "http://rdcu.be/v2q1",
      authors: "S Kassem et al.",
      journal: "Nature",
      volume: "549",
      pages: "374-378 (2017)",
      abstractImg: "images/graphical_abstracts/2017/assembler_cover_abstract.jpg"
    },
    {
      year: "2017",
      title: "Braiding a molecular knot with eight crossings",
      url: "http://science.sciencemag.org/content/355/6321/159",
      authors: "J J Danon et al.",
      journal: "Science",
      volume: "355",
      pages: "159-162 (2017)",
      abstractImg: "images/article_pictures/819knot2017/819knot-cut.jpg",
      highlight: "Guinness World Record for tightest knotted structure. Featured in Science, NY Times, The Guardian."
    }
  ],
  "2016": [
    {
      year: "2016",
      title: "Allosteric initiation and regulation of catalysis with a molecular knot",
      url: "http://science.sciencemag.org/content/352/6293/1555",
      authors: "V Marcos et al.",
      journal: "Science",
      volume: "352",
      pages: "1555-1559 (2016)",
      abstractImg: "images/article_pictures/knotcatalysis2016/knotcatalysis_2016_cover.jpg"
    },
    {
      year: "2016",
      title: "An autonomous chemically fuelled small-molecule motor",
      url: "http://www.nature.com/nature/journal/v534/n7606/full/nature18013.html",
      authors: "M R Wilson et al.",
      journal: "Nature",
      volume: "534",
      pages: "235-240 (2016)",
      abstractImg: "images/article_pictures/nanomotor2016/Figure2a.gif"
    }
  ],
  "2015": [
    {
      year: "2015",
      title: "Artificial molecular machines",
      url: "http://pubs.acs.org/doi/abs/10.1021/acs.chemrev.5b00146",
      authors: "S Erbas-Cakmak et al.",
      journal: "Chem Rev",
      volume: "115",
      pages: "10081-10206 (2015)",
      abstractImg: "images/graphical_abstracts/2015/ArtificialMolecularMachines.png"
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
  ],
  "2012": [
    {
      year: "2012",
      title: "A Synthetic Molecular Pentafoil Knot",
      url: "http://www.nature.com/nchem/journal/v4/n1/abs/nchem.1193.html",
      authors: "J-F Ayme et al.",
      journal: "Nature Chem",
      volume: "4",
      pages: "15-20 (2012)",
      abstractImg: "images/graphical_abstracts/nchem_pentafoil.jpg",
      coverImg: "images/covers/thumbs/nat_thumb_2012.jpg",
      coverUrl: "https://www.catenane.net/pdfs/pictures/nat_chem_cover_2012.pdf"
    }
  ],
  "2011": [
    {
      year: "2011",
      title: "Light-Driven Transport of a Molecular Walker",
      url: "http://onlinelibrary.wiley.com/doi/10.1002/anie.201004779/abstract",
      authors: "M J Barrell et al.",
      journal: "Angew Chem Int Ed",
      volume: "50",
      pages: "285-290 (2011)",
      abstractImg: "images/graphical_abstracts/2011/light_walker.gif",
      coverImg: "images/covers/thumbs/angthumb2011.gif",
      coverUrl: "https://www.catenane.net/pdfs/pictures/molwalkercover2011.pdf"
    }
  ]
};
