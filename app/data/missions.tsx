export type MissionCardProps = {
  title: string;
  description: string;
  image?: string;
  points: number;
  onClick?: () => void;
};

const week1WeeklyTasks: MissionCardProps[] = [
  {
    title: "Join Telegram Channel",
    description: "Join our Telegram channel to stay updated.",
    points: 30,
  },
  {
    title: "Join Discord Channel",
    description: "Join our Discord channel to engage with the community.",
    points: 30,
  },
  {
    title: "Follow on Twitter",
    description: "Follow us on Twitter for the latest updates.",
    points: 30,
  },
  {
    title: "Follow on Medium",
    description: "Follow us on Medium to read our articles.",
    points: 30,
  },
  {
    title: "Upvote on Certik",
    description: "Upvote our project on Certik to show your support.",
    points: 30,
  },
  {
    title: "Mint Aegis NFT",
    description: "Mint an Aegis NFT to add to your collection.",
    points: 50,
  },
];

const week1DailyTasks: MissionCardProps[] = [
  {
    title: "Daily Check-In",
    description: "Check in daily to earn points.",
    points: 5,
  },
  {
    title: "Share a Tweet",
    description: "Share a tweet about the DATS project using the #depin tag.",
    points: 20,
  },
  {
    title: "Engage on Twitter",
    description: "Like, retweet, and comment on our tweets.",
    points: 10,
  },
  {
    title: "Discord Greetings",
    description: "Post a 'good morning' or 'good night' message on Discord.",
    points: 5,
  },
];

const week2WeeklyTasks: MissionCardProps[] = [
  {
    title: "Share a Photo",
    description: "Share a photo using the application.",
    points: 30,
  },
  {
    title: "Quote Tweet DATS & VirusTotal",
    description: "Quote tweet DATS & VirusTotal.",
    points: 10,
  },
  {
    title: "Quote Tweet DATS & GlobalSign",
    description: "Quote tweet DATS & GlobalSign.",
    points: 10,
  },
  {
    title: "Mint Blaze NFT",
    description: "Mint a Blaze NFT to add to your collection.",
    points: 50,
  },
  {
    title: "Subscribe on YouTube",
    description: "Subscribe to our YouTube channel.",
    points: 30,
  },
  {
    title: "Follow on LinkedIn",
    description: "Follow us on LinkedIn for professional updates.",
    points: 30,
  },
  {
    title: "Obtain Tokens from Faucet",
    description: "Obtain tokens from the faucet.",
    points: 40,
  },
  {
    title: "Download DATS App",
    description:
      "Download the DATS App and dedicate your resources to DDoS Test & Cybersecurity Research.",
    points: 75,
  },
];

const week2DailyTasks: MissionCardProps[] = [
  {
    title: "Daily Check-In",
    description: "Check in daily to earn points.",
    points: 5,
  },
  {
    title: "Share a Tweet",
    description: "Share a tweet about the DATS project using the #depin tag.",
    points: 20,
  },
  {
    title: "Engage on Twitter",
    description: "Like, retweet, and comment on our tweets.",
    points: 10,
  },
  {
    title: "Discord Greetings",
    description: "Post a 'good morning' or 'good night' message on Discord.",
    points: 5,
  },
  {
    title: "Invite Friends to DATS App",
    description: "Invite friends to the DATS App.",
    points: 10,
  },
  {
    title: "Engage in App Activities",
    description: "Engage in activities within the app for 1 hour.",
    points: 30,
  },
];

const week3WeeklyTasks: MissionCardProps[] = [
  {
    title: "Mint an ID",
    description: "Mint an ID to add to your collection.",
    points: 50,
  },
  {
    title: "Mint Vortex NFT",
    description: "Mint a Vortex NFT to add to your collection.",
    points: 50,
  },
  {
    title: "Approve Vulnerability Scanning",
    description: "Approve Vulnerability Scanning service in DATS Desktop App.",
    points: 50,
  },
];

const week3DailyTasks: MissionCardProps[] = [
  {
    title: "Daily Check-In",
    description: "Check in daily to earn points.",
    points: 5,
  },
  {
    title: "Share a Tweet",
    description: "Share a tweet about the DATS project using the #depin tag.",
    points: 20,
  },
  {
    title: "Engage on Twitter",
    description: "Like, retweet, and comment on our tweets.",
    points: 10,
  },
  {
    title: "Discord Greetings",
    description: "Post a 'good morning' or 'good night' message on Discord.",
    points: 5,
  },
  {
    title: "Invite Friends to DATS App",
    description: "Invite friends to the DATS App.",
    points: 10,
  },
  {
    title: "Engage in App Activities",
    description: "Engage in activities within the app for 1 hour.",
    points: 30,
  },
];

const week4WeeklyTasks: MissionCardProps[] = [
  {
    title: "Mint DATS Guardian NFT",
    description: "Mint a DATS Guardian NFT to add to your collection.",
    points: 50,
  },
  {
    title: "Explore DATS Desktop App",
    description:
      "Explore the new DATS Desktop App interface featuring Peaq mainnet integration.",
    points: 50,
  },
  {
    title: "Engage with MeetUp Tweet",
    description: "Engage with the DATS Guardians MeetUp tweet.",
    points: 50,
  },
  {
    title: "Dedicate Resources",
    description:
      "Dedicate your resources to Super Computer & Blockchain services in DATS Desktop App.",
    points: 75,
  },
];

const week4DailyTasks: MissionCardProps[] = [
  {
    title: "Daily Check-In",
    description: "Check in daily to earn points.",
    points: 5,
  },
  {
    title: "Share a Tweet",
    description: "Share a tweet about the DATS project using the #depin tag.",
    points: 20,
  },
  {
    title: "Engage on Twitter",
    description: "Like, retweet, and comment on our tweets.",
    points: 10,
  },
  {
    title: "Discord Greetings",
    description: "Post a 'good morning' or 'good night' message on Discord.",
    points: 5,
  },
];

export {
  week1WeeklyTasks,
  week1DailyTasks,
  week2WeeklyTasks,
  week2DailyTasks,
  week3WeeklyTasks,
  week3DailyTasks,
  week4WeeklyTasks,
  week4DailyTasks,
};
