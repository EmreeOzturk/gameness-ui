export type MissionCardProps = {
  title: string;
  description: string;
  image?: string;
  points: number;
  onClick?: () => void;
};

const mockMissionData: MissionCardProps[] = [
  {
    title: "Complete Your Profile",
    description: "Fill out your profile information to earn points.",
    points: 50,
    onClick: () => console.log("Profile mission clicked"),
  },
  {
    title: "First Trade",
    description: "Make your first trade to earn points.",
    points: 100,
    onClick: () => console.log("First trade mission clicked"),
  },
  {
    title: "Invite a Friend",
    description: "Invite a friend to join the app and earn points.",
    points: 150,
    onClick: () => console.log("Invite mission clicked"),
  },
  {
    title: "Daily Check-In",
    description: "Check in daily to earn points.",
    points: 10,
    onClick: () => console.log("Daily check-in mission clicked"),
  },
  {
    title: "Watch Tutorial",
    description: "Watch a tutorial video to learn about crypto trading.",
    points: 20,
    onClick: () => console.log("Tutorial mission clicked"),
  },
  // {
  //   title: "Join Community",
  //   description: "Join our community forum to discuss crypto.",
  //   points: 30,
  //   onClick: () => console.log("Community mission clicked"),
  // },
  // {
  //   title: "Complete Survey",
  //   description: "Complete a survey to help us improve.",
  //   points: 40,
  //   onClick: () => console.log("Survey mission clicked"),
  // },
  // {
  //   title: "Set Up 2FA",
  //   description: "Set up two-factor authentication for your account.",
  //   points: 60,
  //   onClick: () => console.log("2FA mission clicked"),
  // },
  // {
  //   title: "Read Article",
  //   description: "Read an article about crypto trends.",
  //   points: 15,
  //   onClick: () => console.log("Article mission clicked"),
  // },
  // {
  //   title: "Follow Us on Twitter",
  //   description: "Follow our official Twitter account.",
  //   points: 25,
  //   onClick: () => console.log("Twitter mission clicked"),
  // },
  // {
  //   title: "Join Telegram Group",
  //   description: "Join our official Telegram group.",
  //   points: 25,
  //   onClick: () => console.log("Telegram mission clicked"),
  // },
  // {
  //   title: "Complete KYC",
  //   description: "Complete the KYC process to verify your identity.",
  //   points: 200,
  //   onClick: () => console.log("KYC mission clicked"),
  // },
  // {
  //   title: "Deposit Funds",
  //   description: "Deposit funds into your account.",
  //   image: "/images/deposit.png",
  //   points: 75,
  //   onClick: () => console.log("Deposit mission clicked"),
  // },
  // {
  //   title: "Withdraw Funds",
  //   description: "Withdraw funds from your account.",
  //   points: 75,
  //   onClick: () => console.log("Withdraw mission clicked"),
  // },
  // {
  //   title: "Trade $1000",
  //   description: "Trade a total of $1000 worth of crypto.",
  //   points: 300,
  //   onClick: () => console.log("Trade $1000 mission clicked"),
  // },
  // {
  //   title: "Stake Tokens",
  //   description: "Stake your tokens to earn rewards.",
  //   points: 120,
  //   onClick: () => console.log("Stake mission clicked"),
  // },
  // {
  //   title: "Vote on Proposal",
  //   description: "Participate in a governance vote.",
  //   points: 50,
  //   onClick: () => console.log("Vote mission clicked"),
  // },
  // {
  //   title: "Join Beta Program",
  //   description: "Join our beta testing program.",
  //   points: 80,
  //   onClick: () => console.log("Beta mission clicked"),
  // },
  // {
  //   title: "Complete Quiz",
  //   description: "Complete a quiz to test your crypto knowledge.",
  //   points: 35,
  //   onClick: () => console.log("Quiz mission clicked"),
  // },
  // {
  //   title: "Refer 5 Friends",
  //   description: "Refer 5 friends to join the app.",
  //   points: 250,
  //   onClick: () => console.log("Refer 5 friends mission clicked"),
  // },
  // {
  //   title: "Earn $100",
  //   description: "Earn a total of $100 through trading.",
  //   points: 400,
  //   onClick: () => console.log("Earn $100 mission clicked"),
  // },
  // {
  //   title: "Create a Wallet",
  //   description: "Create a new crypto wallet.",
  //   points: 70,
  //   onClick: () => console.log("Wallet mission clicked"),
  // },
  // {
  //   title: "Join Discord",
  //   description: "Join our official Discord server.",
  //   points: 25,
  //   onClick: () => console.log("Discord mission clicked"),
  // },
  // {
  //   title: "Participate in AMA",
  //   description: "Participate in an Ask Me Anything session.",
  //   points: 45,
  //   onClick: () => console.log("AMA mission clicked"),
  // },
  // {
  //   title: "Share on Facebook",
  //   description: "Share our app on Facebook.",
  //   points: 20,
  //   onClick: () => console.log("Facebook mission clicked"),
  // },
];

export default mockMissionData;
