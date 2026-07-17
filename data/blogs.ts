export interface Blog {
  slug: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured?: boolean;

  content: string[];
}

export const blogs: Blog[] = [
  {
    slug: "understanding-anxiety",
    title: "Understanding Anxiety: More Than Just Feeling Nervous",
    category: "Mental Health",
    author: "Astitva Editorial Team",
    publishedAt: "2026-02-24",
    readTime: "6 min read",
    excerpt:
      "Anxiety can manifest in various ways. Learn how to identify the subtle signs and explore effective coping mechanisms for daily life.",

    image: "/images/blogs/anxiety.jpg",

    featured: true,

    content: [
      "In today's hyper-connected society, our mental health often takes a backseat to professional deadlines and social obligations. At Astitva, we believe that reclaiming your mental space is not a luxury, but a necessity.",

      "Restoration isn't just about sleep; it's about allowing the mind to recover from constant stimulation. Scientific evidence shows that practicing mindfulness helps regulate stress hormones and improve emotional resilience.",

      "Small daily habits such as maintaining healthy routines, limiting digital overload, and seeking professional guidance when needed can make a significant difference in overall well-being.",

      "Remember that asking for help is never a weakness. Early intervention often leads to better emotional health and improved quality of life."
    ]
  },

  {
    slug: "mindful-living-digital-world",
    title: "The Art of Mindful Living in a Digital World",
    category: "Self Care",
    author: "Astitva Editorial Team",
    publishedAt: "2026-03-02",
    readTime: "4 min read",

    excerpt:
      "In an era of constant notifications, finding silence is a superpower. Discover simple habits to reclaim your mental space.",

    image: "/images/blogs/mindfulness.jpg",

    content: []
  },

  {
    slug: "rural-outreach-impact",
    title: "How Our Recent Rural Outreach Impacted Hundreds of Lives",

    category: "NGO News",

    author: "Astitva Editorial Team",

    publishedAt: "2026-03-08",

    readTime: "8 min read",

    excerpt:
      "Our outreach initiative provided counseling, awareness sessions, and psychological support across rural communities.",

    image: "/images/blogs/outreach.jpg",

    content: []
  },

  {
    slug: "cbt-why-it-works",

    title: "Cognitive Behavioral Therapy: Why It Actually Works",

    category: "Psychology",

    author: "Astitva Editorial Team",

    publishedAt: "2026-03-15",

    readTime: "10 min read",

    excerpt:
      "Understanding the science behind Cognitive Behavioral Therapy and why it remains one of the most effective psychological interventions.",

    image: "/images/blogs/cbt.jpg",

    content: []
  }
];

