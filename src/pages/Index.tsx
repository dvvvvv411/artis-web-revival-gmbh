import artisLogo from "@/assets/artis-logo.jpg";

const Index = () => {
  return (
    <div className="builder-container min-h-screen">
      {/* Logo Section */}
      <div className="builder-logo-section">
        <img 
          src={artisLogo} 
          alt="artis GmbH Logo" 
          style={{ maxWidth: "300px", height: "auto" }}
        />
      </div>

      {/* Welcome Section */}
      <div className="builder-content-block">
        <h1 style={{ 
          fontSize: "24px", 
          fontWeight: "bold", 
          color: "hsl(var(--foreground))",
          marginBottom: "20px",
          lineHeight: "1.4"
        }}>
          Willkommen bei der artis GmbH –<br />
          Ihrem Partner für Bauplanung und 3D-Scanner-Technik
        </h1>
        
        <p style={{ 
          fontSize: "16px", 
          color: "hsl(var(--muted-foreground))",
          marginBottom: "30px"
        }}>
          Professionelle Ingenieurdienstleistungen und modernste 3D-Scanner-Technologie für Ihre Bauprojekte.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="builder-content-block">
        <div style={{ marginBottom: "20px" }}>
          <a href="#" className="builder-button">
            → Zum Ingenieurbüro
          </a>
        </div>
        <div>
          <a href="#" className="builder-button">
            → 3D-Scanner Vermietung
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="builder-content-block">
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          margin: "20px 0"
        }}>
          <tr>
            <td style={{ 
              width: "33%", 
              padding: "15px",
              textAlign: "center",
              borderRight: "1px solid hsl(var(--border))"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "hsl(var(--foreground))" }}>
                Bauplanung
              </h3>
              <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))" }}>
                Professionelle Planung und Statik für Ihr Bauvorhaben
              </p>
            </td>
            <td style={{ 
              width: "33%", 
              padding: "15px",
              textAlign: "center",
              borderRight: "1px solid hsl(var(--border))"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "hsl(var(--foreground))" }}>
                3D-Scanner
              </h3>
              <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))" }}>
                Modernste Vermessungstechnik zum Mieten oder Kaufen
              </p>
            </td>
            <td style={{ 
              width: "33%", 
              padding: "15px",
              textAlign: "center"
            }}>
              <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "hsl(var(--foreground))" }}>
                Service
              </h3>
              <p style={{ fontSize: "14px", color: "hsl(var(--muted-foreground))" }}>
                Persönliche Betreuung von der Planung bis zur Umsetzung
              </p>
            </td>
          </tr>
        </table>
      </div>

      {/* Footer */}
      <div className="builder-footer">
        Letzte Aktualisierung: Juli 2025 | © artis GmbH
      </div>
    </div>
  );
};

export default Index;
