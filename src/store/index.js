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
        ],
      },
    ],
    projets: [
      {
        id: 0,
        name: 'Covoit',
        description: 'Après avoir réfléchi sur ce que l’on voulait faire, nous avons opté de partir sur la création d’une application déjà existante qui est Blablacar. Notre application a pour but d’être gratuite pour tous les utilisateurs.',
        image: '',
        type: 'Projet de cours',
        techno: [
          {
            name: 'HTML',
            color: 'DD4B25',
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
