import Hero3D from "@/components/Hero3D";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

const projets = [
  {
    numero: "01",

    titre: "KS Business Suite",

    statut: "PROJET EN COURS",

    description:
      "Mini-ERP destiné aux organisations et aux entreprises. La plateforme vise à centraliser et simplifier la gestion des activités d’une structure, notamment l’organisation des opérations, le suivi des activités, la gestion des utilisateurs et des informations essentielles.",

    technologies: [
      "JavaScript",
      "React",
      "Gestion d'entreprise",
      "ERP",
    ],

    github:
      "https://github.com/lksecurity8-crypto",

    live: "#",
  },

  {
    numero: "02",

    titre: "Presence Flow",

    statut: "PROJET EN COURS",

    description:
      "Application de gestion des présences destinée aux entreprises, établissements scolaires et autres organisations. Elle permet de structurer le suivi des présences et des absences afin de faciliter le contrôle et la gestion quotidienne.",

    technologies: [
      "JavaScript",
      "React",
      "Gestion des présences",
      "Web",
    ],

    github:
      "https://github.com/sergeabena20-max",

    live: "#",
  },

  {
    numero: "03",

    titre: "MN-PRESSING",

    statut: "PROJET TERMINÉ",

    description:
      "Solution web dédiée à la gestion d’un pressing. L’application permet de digitaliser le suivi des clients, des commandes, des vêtements confiés, des statuts de traitement et de l’activité quotidienne.",

    technologies: [
      "JavaScript",
      "React",
      "Gestion",
      "Vercel",
    ],

    github:
      "https://github.com/ksds-bot",

    live:
      "https://mn-pressing.vercel.app",
  },
];
export default function Home() {

  return (

    <main>

      {/* =========================
          NAVIGATION
      ========================== */}

      <header className="nav">

        <a
          href="#accueil"
          className="logo"
        >
          TPKB.
        </a>

        <nav>

          <a href="#a-propos">
            À propos
          </a>

          <a href="#competences">
            Compétences
          </a>

          <a href="#projets">
            Projets
          </a>

          <a href="#installations">
            Installations
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>

      </header>


      {/* =========================
          HERO
      ========================== */}

      <section
        id="accueil"
        className="hero"
      >

        <div className="hero-copy">

          <p className="eyebrow">
            PORTFOLIO • 2026
          </p>

          <h1>

            Tchoupe Pembe

            <span>
              Karl Bryan
            </span>

          </h1>

          <p className="hero-subtitle">

            Développeur web · Informatique ·
            Cybersécurité · Installations électroniques

          </p>

          <a
            className="primary-button"
            href="#projets"
          >

            Découvrir mes projets

            <span>
              ↗
            </span>

          </a>

        </div>


        <Hero3D />


        <div className="scroll-indicator">
          Défiler ↓
        </div>

      </section>


      {/* =========================
          À PROPOS
      ========================== */}

      <Section
        id="a-propos"
        index="01"
        title="À propos de moi"
      >

        <div className="two-columns">

          <p className="lead">

            Je suis Tchoupe Pembe Karl Bryan,
            technicien en maintenance et installation
            des systèmes électroniques et titulaire d’un
            DUT en Génie Informatique.

          </p>


          <p>

            Je poursuis actuellement une Licence de
            Technologie en Cybersécurité.

            <br />
            <br />

            Mon profil se situe à la rencontre du
            développement web, de la maintenance
            informatique, de la sécurité des systèmes
            et des installations techniques.

          </p>

        </div>

      </Section>


      {/* =========================
          COMPÉTENCES
      ========================== */}

      <Section
        id="competences"
        index="02"
        title="Compétences"
      >

        <div className="skill-grid">

          {[
            [
              "01",
              "Développement web",
              "Création d’applications et d’interfaces web.",
            ],

            [
              "02",
              "Cybersécurité",
              "Bases en sécurité des systèmes d’information.",
            ],

            [
              "03",
              "Maintenance informatique",
              "Diagnostic, maintenance et assistance informatique.",
            ],

            [
              "04",
              "Vidéosurveillance",
              "Installation, configuration et mise en service de systèmes de surveillance.",
            ],

            [
              "05",
              "Systèmes électroniques",
              "Maintenance et installation de systèmes électroniques.",
            ],

            [
              "06",
              "Résolution de problèmes",
              "Capacité d’adaptation et recherche de solutions.",
            ],

          ].map(
            ([numero, titre, description]) => (

              <article
                className="skill-card"
                key={numero}
              >

                <span>
                  {numero}
                </span>

                <h3>
                  {titre}
                </h3>

                <p>
                  {description}
                </p>

              </article>

            )
          )}

        </div>

      </Section>


      {/* =========================
          PROJETS
      ========================== */}

      <Section
        id="projets"
        index="03"
        title="Mes projets web"
      >

        <div className="project-grid">

          {projets.map((projet) => (

            <ProjectCard
              key={projet.numero}
              {...projet}
            />

          ))}

        </div>


        <p className="placeholder-note">

          Les véritables projets seront ajoutés
          avec leurs liens GitHub et leurs
          démonstrations Vercel.

        </p>

      </Section>


      {/* =========================
          INSTALLATIONS
      ========================== */}

      <Section
        id="installations"
        index="04"
        title="Mes installations"
      >

        <div className="installation-intro">

          <p className="lead">

            Une galerie dédiée à mes
            réalisations techniques.

          </p>


          <p>

            Les photos de mes installations
            seront ajoutées prochainement.

            La structure du portfolio est prévue
            pour accueillir plusieurs images par
            réalisation.

          </p>

        </div>


        <div className="installation-grid">

          {[
            "Vidéosurveillance",
            "Installations électroniques",
            "Décoration intérieure & peinture",
          ].map((installation, index) => (

            <article
              className="installation-card"
              key={installation}
            >

              <div className="image-placeholder">

                PHOTO{" "}

                {String(index + 1).padStart(2, "0")}

              </div>

              <h3>
                {installation}
              </h3>

              <p>

                Photos et détails de la
                réalisation à ajouter.

              </p>

            </article>

          ))}

        </div>

      </Section>


      {/* =========================
          PARCOURS
      ========================== */}

      <Section
        id="parcours"
        index="05"
        title="Mon parcours"
      >

        <div className="timeline">

          <div>

            <span>
              2024
            </span>

            <h3>

              BT — Maintenance et Installation
              des Systèmes Électroniques

            </h3>

            <p>
              Lycée Technique de Douala Koumassi.
            </p>

          </div>


          <div>

            <span>
              2024 — 2026
            </span>

            <h3>
              DUT — Génie Informatique
            </h3>

            <p>
              IUT de Douala.
            </p>

          </div>


          <div>

            <span>
              2024
            </span>

            <h3>
              Stage académique — Kebelect
            </h3>

            <p>

              Rénovation complète des systèmes
              électroniques d’une maison.

            </p>

          </div>


          <div>

            <span>
              2026
            </span>

            <h3>
              Stage professionnel — Afrilux S.A.
            </h3>

            <p>

              Technicien informatique.

            </p>

          </div>


          <div>

            <span>
              2026 → aujourd’hui
            </span>

            <h3>

              Licence de Technologie —
              Cybersécurité

            </h3>

            <p>
              IUT de Douala.
            </p>

          </div>

        </div>

      </Section>


      {/* =========================
          CERTIFICATIONS
      ========================== */}

      <Section
        id="certifications"
        index="06"
        title="Certifications"
      >

        <article className="certificate">

          <span>
            01
          </span>

          <div>

            <h3>
              Introduction à la cybersécurité
            </h3>

            <p>

              Connaissances fondamentales
              en sécurité des systèmes
              d’information.

            </p>

          </div>

        </article>

      </Section>


      {/* =========================
          CONTACT
      ========================== */}

      <section
        id="contact"
        className="contact"
      >

        <p className="eyebrow">
          07 — CONTACT
        </p>


        <h2>

          Un projet ?

          <br />

          <span>
            Parlons-en.
          </span>

        </h2>


        <div className="contact-grid">

          <div>

            <p>
              Téléphone
            </p>

            <a href="tel:+237692860695">
              692 86 06 95
            </a>

            <a href="tel:+237652591205">
              652 59 12 05
            </a>

          </div>


          <div>

            <p>
              Email
            </p>

            <a href="mailto:dollarbryan8@gmail.com">
              dollarbryan8@gmail.com
            </a>

          </div>


          <div>

            <p>
              Réseaux
            </p>

            <span>
              GitHub · TikTok (à ajouter)
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}

      <footer>

        <strong>
          TPKB.
        </strong>

        <span>
          © 2026 — Tchoupe Pembe Karl Bryan
        </span>

        <span>
          Portfolio personnel
        </span>

      </footer>

    </main>

  );

}
