import { Users, Award, Target, Heart } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Präzision",
      description: "Wir arbeiten mit höchster Genauigkeit und Sorgfalt in allen Projekten."
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Unsere langjährige Erfahrung garantiert erstklassige Ergebnisse."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Gemeinsam erreichen wir die besten Lösungen für unsere Kunden."
    },
    {
      icon: Heart,
      title: "Leidenschaft",
      description: "Mit Begeisterung und Engagement setzen wir Ihre Visionen um."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Michael Weber",
      position: "Geschäftsführer & Gründer",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
      description: "Mit über 20 Jahren Erfahrung im Ingenieurwesen leitet Dr. Weber unser Team mit Expertise und Vision."
    },
    {
      name: "Sarah Schmidt",
      position: "Leiterin Konstruktion",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face",
      description: "Spezialistin für innovative Konstruktionslösungen und moderne CAD-Technologien."
    },
    {
      name: "Thomas Müller",
      position: "3D-Scanner Experte",
      image: "https://images.unsplash.com/photo-1483058712412-4278bba3f11f?w=400&h=400&fit=crop&crop=face",
      description: "Unser Experte für hochpräzise 3D-Vermessung und digitale Erfassung komplexer Strukturen."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Banner Section */}
      <section className="corporate-banner">
        <div className="corporate-container">
          <h1 className="text-4xl font-bold text-white mb-4">Über uns</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Seit 2005 ist die artis GmbH Ihr zuverlässiger Partner für innovative Ingenieurbüro-Dienstleistungen 
            und professionelle 3D-Scanner-Lösungen. Unser erfahrenes Team vereint traditionelle Ingenieurskunst 
            mit modernster Technologie, um Ihnen maßgeschneiderte Lösungen für Ihre Projekte zu bieten.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="corporate-container">
          <h2 className="text-3xl font-bold text-center mb-4">Unsere Werte</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Diese Grundprinzipien leiten unser Handeln und definieren unseren Anspruch an Exzellenz.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="corporate-service-box">
                <div className="corporate-service-icon">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="corporate-container">
          <h2 className="text-3xl font-bold text-center mb-4">Unser Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Lernen Sie die Experten kennen, die hinter unserem Erfolg stehen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary text-white">
        <div className="corporate-container text-center">
          <h2 className="text-3xl font-bold mb-6">Unser Anspruch</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            "Bei artis GmbH verbinden wir traditionelle Ingenieurskunst mit modernster Technologie. 
            Unser Ziel ist es, für jeden Kunden die optimale Lösung zu finden und dabei höchste 
            Qualitätsstandards zu erfüllen."
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;