const commonFirstNames = [
  'Oliver', 'Olivia', 'George', 'Amelia', 'Harry', 'Isla', 'Jack', 'Ava', 'Arthur', 'Mia',
  'Leo', 'Sophia', 'Muhammad', 'Grace', 'Charlie', 'Freya', 'Henry', 'Ella', 'Oscar', 'Emily',
  'Archie', 'Evie', 'Theo', 'Poppy', 'Jacob', 'Isabella', 'Joshua', 'Lily', 'Finn', 'Sophie',
  'James', 'Ivy', 'William', 'Charlotte', 'Ethan', 'Daisy', 'Noah', 'Alice', 'Thomas', 'Harper',
  'Lucas', 'Lola', 'Max', 'Amber', 'Alexander', 'Rosie', 'Daniel', 'Chloe', 'Logan', 'Eva',
  'Joseph', 'Millie', 'David', 'Evelyn', 'Samuel', 'Lily', 'Benjamin', 'Scarlett', 'Sebastian', 'Florence',
  'Mason', 'Aria', 'Harrison', 'Sienna', 'Edward', 'Phoebe', 'Luke', 'Elsie', 'Carter', 'Imogen',
  'Elijah', 'Ruby', 'Lewis', 'Eleanor', 'Isaac', 'Zara', 'Dylan', 'Hannah', 'Aiden', 'Aurora',
  'Felix', 'Penelope', 'Michael', 'Mila', 'Jaxon', 'Ellie', 'Riley', 'Abigail', 'Jesse', 'Maisie',
  'Jackson', 'Erin', 'Nathan', 'Maya', 'Harvey', 'Willow', 'Blake', 'Layla', 'Stanley', 'Esme'
]

const commonLastNames = [
  'Smith', 'Jones', 'Taylor', 'Brown', 'Williams', 'Wilson', 'Evans', 'Patel', 'Patel', 'Johnson',
  'Wright', 'Singh', 'Lee', 'Turner', 'Scott', 'Cooper', 'Hill', 'Green', 'Wood', 'Harrison',
  'Lewis', 'Murphy', 'Allen', 'Baker', 'Walker', 'Cox', 'Hunt', 'Davies', 'Shah', 'Thompson',
  'White', 'Edwards', 'Ward', 'Harris', 'Clarke', 'Jackson', 'Martin', 'Hudson', 'Hussain', 'Carter',
  'Mitchell', 'Khan', 'Roberts', 'Young', 'Stewart', 'Ahmed', 'Hall', 'Moore', 'King', 'Turner',
  'Clark', 'Miller', 'Gupta', 'Thomas', 'Stevens', 'Phillips', 'Bennett', 'Morgan', 'Bell', 'Cox',
  'Bailey', 'Patel', 'Anderson', 'Cook', 'Singh', 'Parker', 'Graham', 'Matthews', 'Williams', 'Powell',
  'Fisher', 'Sharma', 'Reid', 'Perry', 'Price', 'Murray', 'Mills', 'Nelson', 'Lloyd', 'Wallace',
  'Cole', 'Marshall', 'Fox', 'Owen', 'Booth', 'Dixon', 'Grant', 'Mason', 'Knight', 'Rose'
];

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const contacts = Array.from({ length: 101 }, (_, index) => ({
  contactId: index,
  firstName: getRandomElement(commonFirstNames),
  lastName: getRandomElement(commonLastNames)
}));

const finalContacts = [
  {
    contactId: 0,
    firstName: "Olivia",
    lastName: "Mills",
  },
  {
    contactId: 1,
    firstName: "Millie",
    lastName: "Patel",
  },
  {
    contactId: 2,
    firstName: "Lily",
    lastName: "Owen",
  },
  {
    contactId: 3,
    firstName: "Elijah",
    lastName: "Murray",
  },
  {
    contactId: 4,
    firstName: "Phoebe",
    lastName: "Bell",
  },
  {
    contactId: 5,
    firstName: "Mason",
    lastName: "Hill",
  },
  {
    contactId: 6,
    firstName: "Jaxon",
    lastName: "Martin",
  },
  {
    contactId: 7,
    firstName: "Imogen",
    lastName: "Ahmed",
  },
  {
    contactId: 8,
    firstName: "Harry",
    lastName: "Lee",
  },
  {
    contactId: 9,
    firstName: "Muhammad",
    lastName: "Bailey",
  },
  {
    contactId: 10,
    firstName: "Dylan",
    lastName: "Taylor",
  },
  {
    contactId: 11,
    firstName: "Maisie",
    lastName: "Gupta",
  },
  {
    contactId: 12,
    firstName: "Mason",
    lastName: "Miller",
  },
  {
    contactId: 13,
    firstName: "Daisy",
    lastName: "Shah",
  },
  {
    contactId: 14,
    firstName: "Elijah",
    lastName: "Wilson",
  },
  {
    contactId: 15,
    firstName: "Amelia",
    lastName: "Patel",
  },
  {
    contactId: 16,
    firstName: "Arthur",
    lastName: "Lloyd",
  },
  {
    contactId: 17,
    firstName: "Aria",
    lastName: "Hunt",
  },
  {
    contactId: 18,
    firstName: "Sienna",
    lastName: "Murphy",
  },
  {
    contactId: 19,
    firstName: "Dylan",
    lastName: "Powell",
  },
  {
    contactId: 20,
    firstName: "Phoebe",
    lastName: "Turner",
  },
  {
    contactId: 21,
    firstName: "Elsie",
    lastName: "Evans",
  },
  {
    contactId: 22,
    firstName: "Leo",
    lastName: "Khan",
  },
  {
    contactId: 23,
    firstName: "Emily",
    lastName: "Allen",
  },
  {
    contactId: 24,
    firstName: "Aurora",
    lastName: "Jackson",
  },
  {
    contactId: 25,
    firstName: "David",
    lastName: "Hunt",
  },
  {
    contactId: 26,
    firstName: "Lily",
    lastName: "Patel",
  },
  {
    contactId: 27,
    firstName: "Lewis",
    lastName: "Smith",
  },
  {
    contactId: 28,
    firstName: "Sienna",
    lastName: "Shah",
  },
  {
    contactId: 29,
    firstName: "Emily",
    lastName: "Patel",
  },
  {
    contactId: 30,
    firstName: "Erin",
    lastName: "Knight",
  },
  {
    contactId: 31,
    firstName: "Scarlett",
    lastName: "Moore",
  },
  {
    contactId: 32,
    firstName: "Alexander",
    lastName: "Murray",
  },
  {
    contactId: 33,
    firstName: "Abigail",
    lastName: "Bell",
  },
  {
    contactId: 34,
    firstName: "Poppy",
    lastName: "Murray",
  },
  {
    contactId: 35,
    firstName: "Eva",
    lastName: "Miller",
  },
  {
    contactId: 36,
    firstName: "Edward",
    lastName: "Cox",
  },
  {
    contactId: 37,
    firstName: "Isabella",
    lastName: "Matthews",
  },
  {
    contactId: 38,
    firstName: "Amelia",
    lastName: "Harrison",
  },
  {
    contactId: 39,
    firstName: "Theo",
    lastName: "Mason",
  },
  {
    contactId: 40,
    firstName: "Benjamin",
    lastName: "Powell",
  },
  {
    contactId: 41,
    firstName: "Aurora",
    lastName: "Bell",
  },
  {
    contactId: 42,
    firstName: "Jackson",
    lastName: "Roberts",
  },
  {
    contactId: 43,
    firstName: "Riley",
    lastName: "Smith",
  },
  {
    contactId: 44,
    firstName: "Jesse",
    lastName: "Parker",
  },
  {
    contactId: 45,
    firstName: "Amber",
    lastName: "Graham",
  },
  {
    contactId: 46,
    firstName: "Mia",
    lastName: "Baker",
  },
  {
    contactId: 47,
    firstName: "William",
    lastName: "Mitchell",
  },
  {
    contactId: 48,
    firstName: "Max",
    lastName: "White",
  },
  {
    contactId: 49,
    firstName: "Ellie",
    lastName: "Williams",
  },
  {
    contactId: 50,
    firstName: "Esme",
    lastName: "Williams",
  },
  {
    contactId: 51,
    firstName: "Samuel",
    lastName: "Lewis",
  },
  {
    contactId: 52,
    firstName: "Daisy",
    lastName: "Cole",
  },
  {
    contactId: 53,
    firstName: "Noah",
    lastName: "Matthews",
  },
  {
    contactId: 54,
    firstName: "Henry",
    lastName: "Fisher",
  },
  {
    contactId: 55,
    firstName: "Hannah",
    lastName: "Patel",
  },
  {
    contactId: 56,
    firstName: "Charlotte",
    lastName: "Thompson",
  },
  {
    contactId: 57,
    firstName: "Erin",
    lastName: "Cooper",
  },
  {
    contactId: 58,
    firstName: "Millie",
    lastName: "Miller",
  },
  {
    contactId: 59,
    firstName: "Millie",
    lastName: "Khan",
  },
  {
    contactId: 60,
    firstName: "Nathan",
    lastName: "Stewart",
  },
  {
    contactId: 61,
    firstName: "Rosie",
    lastName: "Shah",
  },
  {
    contactId: 62,
    firstName: "Abigail",
    lastName: "Smith",
  },
  {
    contactId: 63,
    firstName: "Lily",
    lastName: "Powell",
  },
  {
    contactId: 64,
    firstName: "Mila",
    lastName: "Green",
  },
  {
    contactId: 65,
    firstName: "Maisie",
    lastName: "Booth",
  },
  {
    contactId: 66,
    firstName: "Isabella",
    lastName: "Harris",
  },
  {
    contactId: 67,
    firstName: "Elijah",
    lastName: "Hall",
  },
  {
    contactId: 68,
    firstName: "Max",
    lastName: "White",
  },
  {
    contactId: 69,
    firstName: "Rosie",
    lastName: "Murray",
  },
  {
    contactId: 70,
    firstName: "Isla",
    lastName: "Price",
  },
  {
    contactId: 71,
    firstName: "Felix",
    lastName: "Evans",
  },
  {
    contactId: 72,
    firstName: "Harrison",
    lastName: "Roberts",
  },
  {
    contactId: 73,
    firstName: "Poppy",
    lastName: "Hunt",
  },
  {
    contactId: 74,
    firstName: "Logan",
    lastName: "Moore",
  },
  {
    contactId: 75,
    firstName: "Harvey",
    lastName: "Harrison",
  },
  {
    contactId: 76,
    firstName: "Jacob",
    lastName: "Brown",
  },
  {
    contactId: 77,
    firstName: "Nathan",
    lastName: "Ahmed",
  },
  {
    contactId: 78,
    firstName: "Mason",
    lastName: "Parker",
  },
  {
    contactId: 79,
    firstName: "Penelope",
    lastName: "Khan",
  },
  {
    contactId: 80,
    firstName: "Aurora",
    lastName: "Price",
  },
  {
    contactId: 81,
    firstName: "Benjamin",
    lastName: "Green",
  },
  {
    contactId: 82,
    firstName: "Oscar",
    lastName: "Marshall",
  },
  {
    contactId: 83,
    firstName: "Michael",
    lastName: "Stevens",
  },
  {
    contactId: 84,
    firstName: "Sophie",
    lastName: "Jackson",
  },
  {
    contactId: 85,
    firstName: "Hannah",
    lastName: "Grant",
  },
  {
    contactId: 86,
    firstName: "Daisy",
    lastName: "Hudson",
  },
  {
    contactId: 87,
    firstName: "Benjamin",
    lastName: "Jones",
  },
  {
    contactId: 88,
    firstName: "Max",
    lastName: "Wood",
  },
  {
    contactId: 89,
    firstName: "Florence",
    lastName: "Hall",
  },
  {
    contactId: 90,
    firstName: "Layla",
    lastName: "Hunt",
  },
  {
    contactId: 91,
    firstName: "Rosie",
    lastName: "Jackson",
  },
  {
    contactId: 92,
    firstName: "Penelope",
    lastName: "Reid",
  },
  {
    contactId: 93,
    firstName: "Imogen",
    lastName: "Mason",
  },
  {
    contactId: 94,
    firstName: "Millie",
    lastName: "Turner",
  },
  {
    contactId: 95,
    firstName: "Henry",
    lastName: "Khan",
  },
  {
    contactId: 96,
    firstName: "Aria",
    lastName: "Perry",
  },
  {
    contactId: 97,
    firstName: "Max",
    lastName: "Patel",
  },
  {
    contactId: 98,
    firstName: "Eleanor",
    lastName: "Knight",
  },
  {
    contactId: 99,
    firstName: "Grace",
    lastName: "Reid",
  },
  {
    contactId: 100,
    firstName: "Archie",
    lastName: "Matthews",
  },
]

// Printing all 101 datasets
contacts.forEach(contact => {
  console.log(`Contact ID: ${contact.contactId}, First Name: ${contact.firstName}, Last Name: ${contact.lastName}`);
});