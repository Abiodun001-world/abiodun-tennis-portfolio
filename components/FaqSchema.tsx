import { Helmet } from "react-helmet-async";

export default function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who are your tennis lessons for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My coaching is open to children, teenagers, adults, beginners, intermediate players, and competitive players."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I take tennis lessons in Ibadan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I currently coach at Adamasingba Stadium in Ibadan and I am available to coach at any suitable tennis court within Ibadan."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a tennis lesson cost in Ibadan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Lesson prices vary depending on the type of coaching. Please contact me for the latest pricing and available coaching packages."
        }
      },
      {
        "@type": "Question",
        "name": "Do you coach complete beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I coach complete beginners by teaching the fundamentals of tennis in a simple and enjoyable way."
        }
      },
      {
        "@type": "Question",
        "name": "Do you coach children and adults?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. I coach children, teenagers, university students, and adults."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}