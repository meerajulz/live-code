import React, { useState, useEffect } from 'react';

interface ITestimonialItem {
  text: string;
  title: string;
}

interface ITestimonials extends ISection {
  testimonials: ITestimonialItem[];
}

interface ISection {
  title: string;
  subtitle?: string;
  sectionType: string;
}

interface IData {
  sections: (ISection | ITestimonials)[];
}

const Dashboard = () => {
  const url = 'https://prolog-api.profy.dev/content-page/home';

  const [data, setData] = useState<IData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //fetchData
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        {data?.sections.map((section, index) => {
          if (section.sectionType === 'hero') {
            return (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>
              </div>
            );
          }
          if (
            section.sectionType === 'testimonials' &&
            'testimonials' in section
          ) {
            return (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.subtitle}</p>
                <ul>
                  {section.testimonials.map((testimonial, index) => (
                    <li key={index}>
                      <h3>{testimonial.title}</h3>
                      <p>{testimonial.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
        })}
      </section>
    </div>
  );
};

export default Dashboard;
