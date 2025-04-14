// Using book images temporarily - replace with actual team member photos in production
import book1 from "../../public/book1.jpg";
import book2 from "../../public/book2.jpg";
import book3 from "../../public/book3.jpg";

export const teamData = [
  {
    id: 1,
    name: "Alexandra Chen",
    position: "Founder & CEO",
    department: "Management",
    photo: book1,
    bio: "Alexandra founded Bookstore with a vision to connect readers with stories that inspire and transform. With over 15 years in publishing, she brings a wealth of experience and a deep passion for literature.",
    fullBio:
      "After graduating from Harvard Business School, Alexandra worked with major publishing houses before identifying a gap in the market for a more personalized book shopping experience. She launched Bookstore in 2018, combining her business acumen with her love for books. Under her leadership, the company has grown from a small startup to a beloved destination for book lovers worldwide.",
    quote:
      "Books are portals to new worlds, new perspectives, and new possibilities. Our mission is to make these portals accessible to everyone.",
    isLeader: true,
    leadershipTitle: "Founder",
    order: 1,
    expertise: [
      "Business Strategy",
      "Publishing Industry",
      "Literary Curation",
      "Brand Development",
    ],
    education: [
      "MBA, Harvard Business School",
      "BA English Literature, Yale University",
    ],
    social: {
      email: "alexandra@bookstore.com",
      linkedin: "https://linkedin.com/in/alexandra-chen",
      twitter: "https://twitter.com/alexandrachen",
    },
  },
  {
    id: 2,
    name: "Marcus Johnson",
    position: "Chief Operating Officer",
    department: "Management",
    photo: book2,
    bio: "Marcus oversees daily operations and strategic initiatives at Bookstore. His background in retail management and e-commerce has been instrumental in optimizing our customer experience both online and in-store.",
    fullBio:
      "Before joining Bookstore, Marcus held leadership positions at major retail chains and e-commerce platforms. His expertise in operations, logistics, and digital transformation has helped Bookstore achieve exceptional efficiency while maintaining the personalized touch that customers value. Marcus is passionate about creating seamless shopping experiences that honor the unique journey of discovering books.",
    isLeader: true,
    order: 2,
    expertise: [
      "Operations Management",
      "E-commerce",
      "Supply Chain Optimization",
      "Retail Strategy",
    ],
    education: ["MS Business Analytics, MIT", "BBA, University of Michigan"],
    social: {
      email: "marcus@bookstore.com",
      linkedin: "https://linkedin.com/in/marcus-johnson",
    },
  },
  {
    id: 3,
    name: "Sophia Patel",
    position: "Head of Curation",
    department: "Editorial",
    photo: book3,
    bio: "Sophia leads our expert team of book curators, ensuring our selection represents diverse voices, genres, and perspectives. Her editorial background and keen eye for emerging literary trends keep our offerings fresh and relevant.",
    quote:
      "Curation is about balance—between classics and contemporary, familiar and challenging, comfort and growth.",
    isLeader: true,
    order: 3,
    expertise: [
      "Editorial Direction",
      "Literary Trends",
      "Diverse Literature",
      "Content Strategy",
    ],
    education: ["MA Comparative Literature, Columbia University"],
    social: {
      email: "sophia@bookstore.com",
      twitter: "https://twitter.com/sophiapatel",
    },
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Marketing Director",
    department: "Marketing",
    photo: book2,
    bio: "David crafts the storytelling around our brand and curates our community events. His background in digital marketing and literary journalism brings a unique perspective to how we connect books with readers.",
    isLeader: true,
    expertise: [
      "Digital Marketing",
      "Brand Storytelling",
      "Community Building",
      "Content Creation",
    ],
    social: {
      email: "david@bookstore.com",
      linkedin: "https://linkedin.com/in/david-rodriguez",
      twitter: "https://twitter.com/davidrodriguez",
    },
  },
  {
    id: 5,
    name: "Emma Wilson",
    position: "Customer Experience Manager",
    department: "Customer Service",
    photo: book1,
    bio: "Emma ensures that every interaction with Bookstore exceeds expectations. Her team is dedicated to providing personalized recommendations and assistance to help readers find their perfect next book.",
    expertise: [
      "Customer Satisfaction",
      "Retail Management",
      "Reader Advisory",
    ],
    social: {
      email: "emma@bookstore.com",
    },
  },
  {
    id: 6,
    name: "James Lee",
    position: "Fiction Specialist",
    department: "Editorial",
    photo: book3,
    bio: "James brings his encyclopedic knowledge of fiction across genres to our curation team. From classic literature to contemporary fiction, his recommendations have garnered a devoted following among our customers.",
    expertise: [
      "Fiction",
      "Literary Analysis",
      "Genre Fiction",
      "Emerging Authors",
    ],
    education: [
      "MFA Creative Writing, Iowa Writers' Workshop",
      "BA English, UCLA",
    ],
    social: {
      email: "james@bookstore.com",
      twitter: "https://twitter.com/jameslee",
    },
  },
  {
    id: 7,
    name: "Olivia Brown",
    position: "Children's Literature Specialist",
    department: "Editorial",
    photo: book1,
    bio: "Olivia's passion for children's literature makes her an invaluable member of our team. She carefully selects books that inspire young readers and support their development at every stage.",
    expertise: [
      "Children's Literature",
      "Young Adult Fiction",
      "Educational Resources",
    ],
    education: [
      "MS Education, Bank Street College",
      "BA Children's Literature, Simmons University",
    ],
    social: {
      email: "olivia@bookstore.com",
    },
  },
  {
    id: 8,
    name: "Michael Zhang",
    position: "E-commerce Manager",
    department: "Technology",
    photo: book2,
    bio: "Michael leads our digital presence, ensuring that our online store provides a browsing experience that rivals the charm of physical bookstores. His technical expertise is matched by his appreciation for literature.",
    expertise: [
      "E-commerce Platforms",
      "UX Design",
      "Web Development",
      "Digital Strategy",
    ],
    education: ["BS Computer Science, Stanford University"],
    social: {
      email: "michael@bookstore.com",
      linkedin: "https://linkedin.com/in/michael-zhang",
    },
  },
  {
    id: 9,
    name: "Natalie Washington",
    position: "Events Coordinator",
    department: "Marketing",
    photo: book3,
    bio: "Natalie creates memorable experiences through author readings, book clubs, and literary gatherings. Her background in event planning and literary arts brings creativity and precision to our community programming.",
    expertise: ["Event Planning", "Community Engagement", "Author Relations"],
    social: {
      email: "natalie@bookstore.com",
      twitter: "https://twitter.com/nataliewashington",
    },
  },
  {
    id: 10,
    name: "Robert Kim",
    position: "Non-fiction Specialist",
    department: "Editorial",
    photo: book1,
    bio: "Robert's expertise spans history, science, philosophy, and memoir. He excels at finding compelling non-fiction that educates, challenges, and inspires our customers to see the world in new ways.",
    expertise: [
      "Non-fiction",
      "Historical Works",
      "Science Writing",
      "Memoirs & Biographies",
    ],
    education: [
      "PhD History, University of Chicago",
      "MA Journalism, Columbia University",
    ],
    social: {
      email: "robert@bookstore.com",
      linkedin: "https://linkedin.com/in/robert-kim",
    },
  },
  {
    id: 11,
    name: "Sarah Miller",
    position: "Finance Manager",
    department: "Finance",
    photo: book2,
    bio: "Sarah oversees the financial health of Bookstore, balancing our commitment to quality with sustainable business practices. Her strategic approach ensures we can continue serving book lovers for years to come.",
    expertise: [
      "Financial Planning",
      "Business Analytics",
      "Sustainable Growth Strategies",
    ],
    education: ["CPA", "MBA Finance, NYU Stern"],
    social: {
      email: "sarah@bookstore.com",
      linkedin: "https://linkedin.com/in/sarah-miller",
    },
  },
  {
    id: 12,
    name: "Thomas Clark",
    position: "Store Designer",
    department: "Operations",
    photo: book3,
    bio: "Thomas creates the warm, inviting physical spaces that make our bookstores destinations for discovery and comfort. His background in architecture and interior design informs our distinctive aesthetic.",
    expertise: [
      "Retail Design",
      "Interior Architecture",
      "Visual Merchandising",
    ],
    education: ["Master of Architecture, Rhode Island School of Design"],
    social: {
      email: "thomas@bookstore.com",
    },
  },
];
