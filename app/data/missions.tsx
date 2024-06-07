export type MissionCardProps = {
  title: string;
  description: string;
  points: number;
  onClick?: () => void;
};

export type TaskSchema = {
  _id: string;
  mission_title: string;
  mission_type: string;
  mission_description: string;
  mission_point: number;
  mission_link?: string;
  mobile_mission_link?: string;
  mission_joiners?: string[];
  weekly?: boolean;
};

const week1WeeklyTasks: TaskSchema[] = [
  {
    _id: "1",
    mission_title: "Join Telegram Channel",
    mission_type: "joinTelegram",
    mission_description: "Join our Telegram channel to stay updated.",
    mission_point: 30,
  },
  {
    _id: "2",
    mission_title: "Join Discord Channel",
    mission_type: "joinDiscord",
    mission_description:
      "Join our Discord channel to engage with the community.",
    mission_point: 30,
  },
  {
    _id: "3",
    mission_title: "Follow on Twitter",
    mission_type: "twitter",
    mission_description: "Follow us on Twitter for the latest updates.",
    mission_point: 30,
    mission_link: "https://twitter.com/intent/follow?screen_name=datsproject",
    mobile_mission_link:
      "https://twitter.com/intent/follow?screen_name=datsproject",
  },
  {
    _id: "4",
    mission_title: "Follow on Medium",
    mission_type: "visit_website",
    mission_description: "Follow us on Medium to read our articles.",
    mission_point: 30,
    mission_link: "https://medium.com/@dats_project",
    mobile_mission_link: "https://medium.com/@dats_project",
  },
  {
    _id: "5",
    mission_title: "Upvote on Certik",
    mission_type: "certik",
    mission_description: "Upvote our project on Certik to show your support.",
    mission_point: 30,
    mission_link: "https://skynet.certik.com/projects/dats-project",
    mobile_mission_link: "https://skynet.certik.com/projects/dats-project",
  },
  {
    _id: "6",
    mission_title: "Mint Aegis NFT",
    mission_type: "wallet",
    mission_description: "Mint an Aegis NFT to add to your collection.",
    mission_point: 50,
  },
];

const week1DailyTasks: TaskSchema[] = [
  {
    _id: "7",
    mission_title: "Daily Check-In",
    mission_type: "dailyCheck",
    mission_description: "Check in daily to earn points.",
    mission_point: 5,
  },
  {
    _id: "8",
    mission_title: "Share a Tweet",
    mission_type: "twitter",
    mission_description:
      "Share a tweet about the DATS project using the #depin tag.",
    mission_point: 20,
    mission_link: "https://twitter.com/intent/post?text=%23depin",
    mobile_mission_link: "https://twitter.com/intent/post?text=%23depin",
  },
  {
    _id: "9",
    mission_title: "Engage on Twitter",
    mission_type: "twitter",
    mission_description: "Like, retweet, and comment on our tweets.",
    mission_point: 10,
    mission_link:
      "https://twitter.com/intent/like?tweet_id=1797716610691801164",
    mobile_mission_link:
      "https://twitter.com/intent/like?tweet_id=1797716610691801164",
  },
  {
    _id: "10",
    mission_title: "Discord Greetings",
    mission_type: "discord",
    mission_description:
      "Post a 'good morning' or 'good night' message on Discord.",
    mission_point: 5,
  },
];

const week2WeeklyTasks: TaskSchema[] = [
  {
    _id: "11",
    mission_title: "Share a Photo",
    mission_type: "app",
    mission_description: "Share a photo using the application.",
    mission_point: 30,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "12",
    mission_title: "Quote Tweet DATS & VirusTotal",
    mission_type: "twitter",
    mission_description: "Quote tweet DATS & VirusTotal.",
    mission_point: 10,
    mission_link:
      "https://twitter.com/intent/retweet?tweet_id=1797716610691801164",
    mobile_mission_link:
      "https://twitter.com/intent/retweet?tweet_id=1797716610691801164",
  },
  {
    _id: "13",
    mission_title: "Quote Tweet DATS & GlobalSign",
    mission_type: "twitter",
    mission_description: "Quote tweet DATS & GlobalSign.",
    mission_point: 10,
    mission_link:
      "https://twitter.com/intent/retweet?tweet_id=1797716610691801164",
    mobile_mission_link:
      "https://twitter.com/intent/retweet?tweet_id=1797716610691801164",
  },
  {
    _id: "14",
    mission_title: "Mint Blaze NFT",
    mission_type: "wallet",
    mission_description: "Mint a Blaze NFT to add to your collection.",
    mission_point: 50,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "15",
    mission_title: "Subscribe on YouTube",
    mission_type: "joinYoutube",
    mission_description: "Subscribe to our YouTube channel.",
    mission_point: 30,
    mission_link: "https://www.youtube.com/@datsproject?sub_confirmation=1",
    mobile_mission_link:
      "https://www.youtube.com/@datsproject?sub_confirmation=1",
  },
  {
    _id: "16",
    mission_title: "Follow on LinkedIn",
    mission_type: "joinLinkedIn",
    mission_description: "Follow us on LinkedIn for professional updates.",
    mission_point: 30,
    mission_link: "https://www.linkedin.com/company/dats-project",
    mobile_mission_link: "https://www.linkedin.com/company/dats-project",
  },
  {
    _id: "17",
    mission_title: "Obtain Tokens from Faucet",
    mission_type: "wallet",
    mission_description: "Obtain tokens from the faucet.",
    mission_point: 40,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "18",
    mission_title: "Download DATS App",
    mission_type: "app",
    mission_description:
      "Download the DATS App and dedicate your resources to DDoS Test & Cybersecurity Research.",
    mission_point: 75,
    mission_link: "",
    mobile_mission_link: "",
  },
];

const week2DailyTasks: TaskSchema[] = [
  {
    _id: "19",
    mission_title: "Daily Check-In",
    mission_type: "dailyCheck",
    mission_description: "Check in daily to earn points.",
    mission_point: 5,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "20",
    mission_title: "Share a Tweet",
    mission_type: "twitter",
    mission_description:
      "Share a tweet about the DATS project using the #depin tag.",
    mission_point: 20,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "21",
    mission_title: "Engage on Twitter",
    mission_type: "twitter",
    mission_description: "Like, retweet, and comment on our tweets.",
    mission_point: 10,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "22",
    mission_title: "Discord Greetings",
    mission_type: "discord",
    mission_description:
      "Post a 'good morning' or 'good night' message on Discord.",
    mission_point: 5,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "23",
    mission_title: "Invite Friends to DATS App",
    mission_type: "app",
    mission_description: "Invite friends to the DATS App.",
    mission_point: 10,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "24",
    mission_title: "Engage in App Activities",
    mission_type: "app",
    mission_description: "Engage in activities within the app for 1 hour.",
    mission_point: 30,
    mission_link: "",
    mobile_mission_link: "",
  },
];
const week3WeeklyTasks: TaskSchema[] = [
  {
    _id: "25",
    mission_title: "Mint an ID",
    mission_type: "wallet",
    mission_description: "Mint an ID to add to your collection.",
    mission_point: 50,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "26",
    mission_title: "Mint Vortex NFT",
    mission_type: "wallet",
    mission_description: "Mint a Vortex NFT to add to your collection.",
    mission_point: 50,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "27",
    mission_title: "Approve Vulnerability Scanning",
    mission_type: "app",
    mission_description:
      "Approve Vulnerability Scanning service in DATS Desktop App.",
    mission_point: 50,
    mission_link: "",
    mobile_mission_link: "",
  },
];

const week3DailyTasks: TaskSchema[] = [
  {
    _id: "28",
    mission_title: "Daily Check-In",
    mission_type: "dailyCheck",
    mission_description: "Check in daily to earn points.",
    mission_point: 5,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "29",
    mission_title: "Share a Tweet",
    mission_type: "twitter",
    mission_description:
      "Share a tweet about the DATS project using the #depin tag.",
    mission_point: 20,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "30",
    mission_title: "Engage on Twitter",
    mission_type: "twitter",
    mission_description: "Like, retweet, and comment on our tweets.",
    mission_point: 10,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "31",
    mission_title: "Discord Greetings",
    mission_type: "discord",
    mission_description:
      "Post a 'good morning' or 'good night' message on Discord.",
    mission_point: 5,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "32",
    mission_title: "Invite Friends to DATS App",
    mission_type: "app",
    mission_description: "Invite friends to the DATS App.",
    mission_point: 10,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "33",
    mission_title: "Engage in App Activities",
    mission_type: "app",
    mission_description: "Engage in activities within the app for 1 hour.",
    mission_point: 30,
    mission_link: "",
    mobile_mission_link: "",
  },
];

const week4WeeklyTasks: TaskSchema[] = [
  {
    _id: "34",
    mission_title: "Mint DATS Guardian NFT",
    mission_type: "wallet",
    mission_description: "Mint a DATS Guardian NFT to add to your collection.",
    mission_point: 50,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "35",
    mission_title: "Explore DATS Desktop App",
    mission_type: "app",
    mission_description:
      "Explore the new DATS Desktop App interface featuring Peaq mainnet integration.",
    mission_point: 50,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "36",
    mission_title: "Engage with MeetUp Tweet",
    mission_type: "twitter",
    mission_description: "Engage with the DATS Guardians MeetUp tweet.",
    mission_point: 50,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "37",
    mission_title: "Dedicate Resources",
    mission_type: "app",
    mission_description:
      "Dedicate your resources to Super Computer & Blockchain services in DATS Desktop App.",
    mission_point: 75,
    mission_link: "",
    mobile_mission_link: "",
  },
];
const week4DailyTasks: TaskSchema[] = [
  {
    _id: "38",
    mission_title: "Daily Check-In",
    mission_type: "dailyCheck",
    mission_description: "Check in daily to earn points.",
    mission_point: 5,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "39",
    mission_title: "Share a Tweet",
    mission_type: "twitter",
    mission_description:
      "Share a tweet about the DATS project using the #depin tag.",
    mission_point: 20,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "40",
    mission_title: "Engage on Twitter",
    mission_type: "twitter",
    mission_description: "Like, retweet, and comment on our tweets.",
    mission_point: 10,
    mission_link: "",
    mobile_mission_link: "",
  },
  {
    _id: "41",
    mission_title: "Discord Greetings",
    mission_type: "discord",
    mission_description:
      "Post a 'good morning' or 'good night' message on Discord.",
    mission_point: 5,
    mission_link: "",
    mobile_mission_link: "",
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
