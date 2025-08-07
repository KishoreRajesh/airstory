'use client';

import PostCard from '@/Components/ui/postcard';

const cards = [
  {
    title: "Aarav Mehta",
    imageUrl: "placeholder.png",
    description: "Backend developer with a passion for scalable systems.",
    Role: "Backend Engineer",
    IQ: "135",
    DOB: "12-03-1999",
    Skills: "Node.js, MongoDB, Docker",
    Job: "Amazon"
  },
  {
    title: "Sneha Kapoor",
    imageUrl: "placeholder.png",
    description: "UX designer focused on accessibility and design systems.",
    Role: "UX Designer",
    IQ: "140",
    DOB: "08-08-2001",
    Skills: "Figma, Adobe XD, HTML/CSS",
    Job: "Flipkart"
  },
  {
    title: "Rohan Verma",
    imageUrl: "placeholder.png",
    description: "Frontend lead who loves crafting responsive UIs.",
    Role: "Frontend Engineer",
    IQ: "125",
    DOB: "11-06-2000",
    Skills: "React, Next.js, Tailwind",
    Job: "Paytm"
  },
  {
    title: "Tanya Singh",
    imageUrl: "placeholder.png",
    description: "Cloud enthusiast building scalable infra.",
    Role: "Cloud Engineer",
    IQ: "145",
    DOB: "29-09-1998",
    Skills: "AWS, Terraform, Kubernetes",
    Job: "Google"
  },
  {
    title: "Karan Iyer",
    imageUrl: "placeholder.png",
    description: "Data scientist digging for insights in big data.",
    Role: "Data Scientist",
    IQ: "150",
    DOB: "04-05-1997",
    Skills: "Python, Pandas, ML",
    Job: "Meta"
  },
  {
    title: "Meera Nair",
    imageUrl: "placeholder.png",
    description: "AI researcher focused on NLP.",
    Role: "AI Researcher",
    IQ: "160",
    DOB: "22-11-2002",
    Skills: "PyTorch, Transformers, BERT",
    Job: "OpenAI"
  }
];

export default function HomePage() {
  return (
    <main className="bg-white flex flex-col items-center justify-center gap-6 p-4">
      {/* Display all 6 cards in responsive grid */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((data, idx) => (
            <PostCard key={idx} {...data} />
          ))}
        </div>
      </div>
    </main>
  );
}