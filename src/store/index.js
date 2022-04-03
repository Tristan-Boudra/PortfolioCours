import { createStore } from 'vuex';

export default createStore({
  state: {
    langages: [
      {
        pathName: 'Prog',
        techno: [
          {
            name: 'HTML',
            color: 'DD4B25',
          },
          {
            name: 'CSS',
            color: '254BDD',
          },
          {
            name: 'JavaScript',
            color: 'EBD41C',
          },
          {
            name: 'PHP',
            color: '787CB4',
          },
          {
            name: 'MySql',
            color: 'E48E00',
          },
          {
            name: 'TailwindCSS',
            color: '38BDF8',
          },
          {
            name: 'VueJs',
            color: '3EAF7C',
          },
          {
            name: 'C#',
            color: '4A1163',
          },
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Oxygen',
            color: '281E75',
          },
          {
            name: 'WooCommerce',
            color: '7F54B3',
          },
        ],
      },
    ],
    realisation: [
      {
        id: 0,
        name: 'Portfolio',
        pathName: 'portfolio',
        type: 'Projet professionel',
        techno: [
          {
            name: 'VueJs',
            color: '3EAF7C',
          },
          {
            name: 'TailwindCSS',
            color: '38BDF8',
          },
          {
            name: 'JavaScript',
            color: 'EBD41C',
          },
          {
            name: 'HTML',
            color: 'DD4B25',
          },
        ],
        shortDesc: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        website: '',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/Portfolio',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: '#',
          },
        ],
        img: '@/assets/portfolio.png',
        projectOrigine: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectObjectif: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectDescription: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        maquetteImg: '',
        // maquetteWebsite: 'Figma',
        // maquetteLink: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
        comment: '',
      },
      {
        id: 1,
        name: 'Covoit',
        pathName: 'covoit',
        type: 'Projet de cours',
        techno: [
          {
            name: 'HTML',
            color: 'DD4B25',
          },
          {
            name: 'VueJs',
            color: '3EAF7C',
          },
          {
            name: 'tailwindcss',
            color: '39BDF8',
          },
          {
            name: 'PHP',
            color: '787CB4',
          },
          {
            name: 'MySql',
            color: 'E48E00',
          },
          {
            name: 'JavaScript',
            color: 'EBD41C',
          },
        ],
        shortDesc: 'Web App de covoiturage',
        githubLinks: [
          {
            linkName: 'Github Front',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
          {
            linkName: 'Github Back',
            link: 'https://github.com/ErwanDecoster/Covoit',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: '#',
          },
        ],
        img: 'covoit.webp',
        projectPartenaire: [
          {
            name: 'Tristan',
            link: 'https://boudra-tristan.fr/',
          },
        ],
        projectOrigine: 'Après avoir réfléchi sur ce que l’on voulait faire, nous avons opté de partir sur la création d’une application déjà existante qui est Blablacar. Notre application a pour but d’être gratuite pour tous les utilisateurs. Ceci a pour effet de toucher une plus grande partie de la population en optant pour ce modèle économique.',
        projectObjectif: 'Créer une application ayant une excellente accessibilité pour toutes les tranches d’âge de la population. Créer des fonctionnalités et une interface ergonomique. Avoir une application simple d’utilisation.',
        projectDescription: 'Il s’agit d’un projet consistant à réaliser une web app de covoiturage adapté au mobile et au PC; le but: définir un point de départ et d\'arrivée et choisir les autres utilisateurs que l’on veut prendre sur notre passage ou inversement et trouver un conducteur pour aller la on l’on souhaite.',
        foncionalites: [
          {
            for: 'Conducteur',
            foncionalitesFor: [
              { name: 'Créer un voyage avec un point de départ et d’arrivée ainsi que l’heure de départ.' },
              { name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.' },
              { name: 'Visualiser les personnes acceptées dans son trajet, où est-ce qu’il doit le récupérer, les étapes intermédiaire' },
              { name: 'Accepter ou refuser un utilisateur qui veut rejoindre son trajet.' },
              { name: 'Choix du véhicule pour le voyage, ainsi que de la motorisation.' },
            ],
          },
          {
            for: 'Passager',
            foncionalitesFor: [
              { name: 'Rejoindre un voyage.' },
              { name: 'Voir l\'ensemble des voyages.' },
              { name: 'Voir toutes ces informations relatives à son compte: nom, prénom, téléphone.' },
              { name: 'Modifier ces informations personnelles: nom, prénom, téléphone, mot de passe.' },
              { name: 'Il recherche un conducteur pour faire son trajet, indique le point de départ et d’arrivée ainsi que l’horaire à laquel il part, à ce moment les trajets qui ont le même point d\'arrivée lui sont proposés.' },
              { name: 'Programmer un départ.' },
            ],
          },
        ],
        maquetteImg: '',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/IlDMB37HhdRwhDEbAcXcsz/CoVoit?node-id=0%3A1',
        mcdImg: '',
        mcdLink: '',
        mldImg: '',
        mldLink: '',
        mpdImg: '',
        mpdLink: '',
        comment: '',
      },
      {
        id: 2,
        name: 'CovoitAdmin',
        pathName: 'covoit_admin',
        type: 'Projet de cours',
        techno: [
          {
            name: 'C#',
            color: '4A1163',
          },
          {
            name: 'MySql',
            color: 'E48E00',
          },
        ],
        shortDesc: 'Partie administration de l\'application Covoit',
        website: '',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/CovoitAdmin',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: '#',
          },
        ],
        img: '',
        projectOrigine: 'Le but de mon application est un système d’administration de mon projet web. Elle permettra de faire suite aux demandes des utilisateurs pour modifier des informations personnelles.',
        projectObjectif: 'C’est de pouvoir accéder à toute une partie administration qui permet de modifier les motorisations, réinitialiser les mots de passe, informations personnelles.',
        projectDescription: 'Il s’agit d’un projet consistant à réaliser une application en C# avec l’aide de WPF, permettant de changer toutes les informations de mon application.',
        maquetteImg: '',
        maquetteWebsite: 'Figma',
        maquetteLink: 'https://www.figma.com/file/hV8tFOXZ5o6TAeCFUg5ca2/Untitled?node-id=0%3A1',
        comment: '',
      },
      {
        id: 3,
        name: 'Kathekon',
        pathName: 'kathekon',
        type: 'Projet professionnel',
        techno: [
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Oxygen',
            color: '281E75',
          },
        ],
        shortDesc: 'Site web pour une entreprise spécialisé dans le RSE',
        website: 'https://www.projet-kathekon.com/',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/Kathekon',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: '#',
          },
        ],
        img: '',
        projectOrigine: 'Création d’un site web pour un client spécialisé dans la démarche RSE',
        projectObjectif: 'Répondre aux besoins du clients afin que le site web soit représentatif de son activité',
        projectDescription: '--',
        maquetteImg: '',
        maquetteWebsite: 'Figma',
        maquetteLink: '',
        comment: '',
      },
      {
        id: 4,
        name: 'Vm-Automation',
        pathName: 'vm_automation',
        type: 'Projet professionnel',
        techno: [
          {
            name: 'Wordpress',
            color: '006E9F',
          },
          {
            name: 'Oxygen',
            color: '281E75',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: '#',
          },
        ],
        shortDesc: 'Site web pour une entreprise spécialisé en instrumentation, régulation et automatisation de procédés industriels',
        website: 'https://www.vm-automation.com/',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/VM-Automation',
          },
        ],
        img: '',
        projectOrigine: 'Création d’un site web pour un client spécialisé en instrumentation, régulation et automatisation de procédés industriels',
        projectObjectif: 'Répondre aux besoins du clients afin que le site web soit représentatif de son activité',
        projectDescription: '--',
        maquetteImg: '',
        maquetteWebsite: 'Figma',
        maquetteLink: '',
        comment: '',
      },
      {
        id: 5,
        name: 'Portfolio BTS SIO',
        pathName: 'portfolio_bts_sio',
        type: 'Projet de cours',
        techno: [
          {
            name: 'HTML',
            color: 'DD4B25',
          },
          {
            name: 'CSS',
            color: '254BDD',
          },
          {
            name: 'JavaScript',
            color: 'EBD41C',
          },
        ],
        shortDesc: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        website: 'https://boudra-tristan.fr/',
        githubLinks: [
          {
            linkName: 'Github',
            link: 'https://github.com/Tristan-Boudra/Portfolio-BTS-SIO',
          },
        ],
        figmaLinks: [
          {
            linkName: 'Figma',
            link: 'https://www.figma.com/file/HNjXAxTcOt5VWuJ5YGmR1e/Website?node-id=0%3A1',
          },
        ],
        websiteLinks: [
          {
            linkName: 'Website',
            link: '#',
          },
        ],
        img: '',
        projectOrigine: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectObjectif: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        projectDescription: 'Portfolio réalisé durant la 2ème année de BTS SIO permettant de présenté se que j’ai fais durant mes 2 années',
        maquetteImg: '',
        maquetteWebsite: 'Figma',
        maquetteLink: '',
        comment: '',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
