import Hero3D from "@/components/Hero3D";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";


const projets = [

  {
    numero: "01",

    titre: "KS Business Suite",

    statut: "PROJET EN COURS",

    description:
      "Mini-ERP conçu pour accompagner les organisations et les entreprises dans la gestion de leurs activités. L'objectif est de proposer une plateforme centralisée permettant de mieux organiser les opérations, les utilisateurs, les informations et les différents processus internes.",

    technologies: [
      "JavaScript",
      "React",
      "ERP",
      "Gestion",
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
      "Application web dédiée au suivi et à la gestion des présences. Elle est pensée pour répondre aux besoins des entreprises, établissements scolaires et autres organisations souhaitant centraliser le suivi des présences et des absences.",

    technologies: [
      "JavaScript",
      "React",
      "Gestion",
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
      "Application web développée pour digitaliser la gestion d'un pressing. Elle permet de faciliter le suivi des clients, des commandes, des articles confiés, de leur état de traitement ainsi que l'organisation quotidienne de l'activité.",

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

          <a href="#parcours">
            Parcours
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


          <div className="hero-actions">

            <a
              className="primary-button"
              href="#projets"
            >

              Découvrir mes projets

              <span>
                ↗
              </span>

            </a>


            <a
              className="secondary-button"
              href="#contact"
            >

              Me contacter

            </a>

          </div>

        </div>


        <Hero3D />


        <div className="hero-side-text">
          CRÉER
          <br />
          ·
          <br />
          DÉVELOPPER
          <br />
          ·
          <br />
          SÉCURISER
        </div>


        <div className="scroll-indicator">

          <span>
            01
          </span>

          DÉFILER ↓

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
            des systèmes électroniques et titulaire d'un
            DUT en Génie Informatique.

          </p>


          <div>

            <p>

              Mon parcours me permet de travailler
              sur plusieurs domaines complémentaires
              de l'informatique et des systèmes
              électroniques.

            </p>


            <p>

              Je m'intéresse particulièrement au
              développement web, à la cybersécurité,
              à la maintenance informatique et aux
              installations techniques.

            </p>


            <p>

              Je poursuis actuellement une Licence
              de Technologie spécialisée en
              Cybersécurité.

            </p>

          </div>

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


          <article className="skill-card">

            <span>
              01
            </span>

            <h3>
              Développement web
            </h3>

            <p>
              Conception et développement
              d'applications et d'interfaces web
              modernes.
            </p>

          </article>


          <article className="skill-card">

            <span>
              02
            </span>

            <h3>
              Cybersécurité
            </h3>

            <p>
              Compréhension des principes de
              sécurité informatique et protection
              des systèmes.
            </p>

          </article>


          <article className="skill-card">

            <span>
              03
            </span>

            <h3>
              Maintenance informatique
            </h3>

            <p>
              Diagnostic, maintenance et
              résolution de problèmes
              informatiques.
            </p>

          </article>


          <article className="skill-card">

            <span>
              04
            </span>

            <h3>
              Réseaux informatiques
            </h3>

            <p>
              Installation et compréhension des
              infrastructures et réseaux
              informatiques.
            </p>

          </article>


          <article className="skill-card">

            <span>
              05
            </span>

            <h3>
              Vidéosurveillance
            </h3>

            <p>
              Installation et mise en service
              de systèmes de vidéosurveillance.
            </p>

          </article>


          <article className="skill-card">

            <span>
              06
            </span>

            <h3>
              Systèmes électroniques
            </h3>

            <p>
              Installation, maintenance et
              intervention sur différents systèmes
              électroniques.
            </p>

          </article>


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

        <div className="project-intro">

          <p className="lead">

            Des solutions numériques pensées
            pour répondre à des problèmes
            concrets.

          </p>

          <p>

            Cette section accueillera également
            les captures d'écran de mes projets.
            Elles seront ajoutées ultérieurement.

          </p>

        </div>


        <div className="project-grid">

          {projets.map(
            (projet) => (

              <ProjectCard
                key={projet.numero}
                {...projet}
              />

            )
          )}

        </div>

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

            Des réalisations techniques
            réalisées sur le terrain.

          </p>


          <p>

            Cette galerie sera prochainement
            complétée avec les photographies
            de mes différentes installations.

          </p>

        </div>


        <div className="installation-grid">


          <article className="installation-card">

            <div className="image-placeholder">

              PHOTO 01

            </div>

            <h3>
              Vidéosurveillance
            </h3>

            <p>
              Photos et détails de l'installation
              à ajouter.
            </p>

          </article>


          <article className="installation-card">

            <div className="image-placeholder">

              PHOTO 02

            </div>

            <h3>
              Installations électroniques
            </h3>

            <p>
              Photos et détails de l'installation
              à ajouter.
            </p>

          </article>


          <article className="installation-card">

            <div className="image-placeholder">

              PHOTO 03

            </div>

            <h3>
              Maintenance informatique
            </h3>

            <p>
              Photos et détails de l'intervention
              à ajouter.
            </p>

          </article>


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
              Participation à la rénovation
              complète des systèmes électroniques
              d'une maison.
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
              2026 → aujourd'hui
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
              Certification attestant de
              connaissances fondamentales
              en cybersécurité.
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

            <a
              href="mailto:dollarbryan8@gmail.com"
            >
              dollarbryan8@gmail.com
            </a>

          </div>


          <div>

            <p>
              Réseaux sociaux
            </p>

            <span>
              TikTok — à ajouter
            </span>

            <span>
              GitHub — à ajouter
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
