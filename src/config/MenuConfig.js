const menu = [
  {
    _id: "1",
    title: "Equipes",
    icon: "",
    submenu: [
      {
        _id: "1a",
        title: "Incluir Equipe",
        icon: "",
        navigate: "Team"
      },
      {
        _id: "1b",
        title: "Visualizar Equipes",
        icon: "",
        navigate: "Team"
      },
      {
        _id: "1c",
        title: "Voltar",
        icon: ""
      }
    ]
  },
  {
    _id: "2",
    title: "Jogadores",
    icon: "",
    submenu: [
      {
        _id: "2a",
        title: "Incluir Jogador",
        icon: "",
        navigate: "Player"
      },
      {
        _id: "2b",
        title: "Pesquisar Jogadores",
        icon: "",
        navigate: "Player"
      },
      {
        _id: "2c",
        title: "Voltar",
        icon: ""
      }
    ]
  },
  {
    _id: "3",
    title: "Eventos",
    icon: "",
    submenu: [
      {
        _id: "3a",
        title: "Incluir Evento",
        icon: "",
        navigate: "Cup"
      },
      {
        _id: "3b",
        title: "Visualizar Eventos",
        icon: "",
        navigate: "Cup"
      },
      {
        _id: "3c",
        title: "Voltar",
        icon: ""
      }
    ]
  }
];

module.exports = menu;
