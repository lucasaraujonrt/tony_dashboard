/* tslint:disable:object-literal-sort-keys */
const ptBr = {
  APPLICATION: {
    CURRENCY: 'BRL',
    ERRORS: {
      GENERIC: 'Parece que algo não saiu bem. Tente novamente mais tarde.',
      USER_ALREADY_EXISTS: 'Já existe um usuário com o e-mail cadastrado.',
      INVALID_KEY: 'Key do i18n inválida ou inexistente.',

      EMPTY_FORM: 'Todos os campos são obrigatórios',
      EMPTY_NAME: 'O campo "nome" é requerido.',
      EMPTY_STATES: 'O campo "estados" é requerido.',
      EMPTY_DESCRIPTION: 'O campo "descrição" é requerido.',
      EMPTY_SCREEN_TYPE: 'O campo "botão no app" é requerido',
      EMPTY_URL: 'O campo "Navegar para url" é requerido',
      EMPTY_TO_SCREEN_TYPE: 'O campo "Navegar para" é requerido',
      EMPTY_CELLPHONE: 'O campo "telefone" é requerido.',
      EMPTY_EMAIL: 'O campo "e-mail" é requerido.',
      EMPTY_PASSWORD: 'O campo "senha" é requerido.',
      MISMATCH_PASSWORD: 'As senhas não são iguais.',

      EMPTY_SYNOD_ID: 'O campo "sínodo" é requerido.',
      EMPTY_ZIPCODE: 'O campo "CEP" é requerido.',
      EMPTY_STREET: 'O campo "rua" é requerido.',
      EMPTY_NUMBER: 'O campo "número" é requerido.',
      EMPTY_NEIGHBORHOOD: 'O campo "bairro" é requerido.',
      EMPTY_CITY: 'O campo "cidade" é requerido.',
      EMPTY_STATE: 'O campo "estado" é requerido.',

      INSTANCE: {
        REFRESH_TOKEN: 'Token expirado. Faça Login novamente!',
        LOGIN: 'Faça Login novamente!',
      },
    },
    LANG: 'pt-BR',
  },
  COMPONENTS: {
    ADVANCED_FILTER: {
      FILTER: 'Filtrar',
      CLEAN: 'limpar',
    },
    ADVANCED_BUTTON: {
      SIGN_IN: 'Entrar',
      CLEAN: 'limpar',
    },
    LINK: {
      FORGOT_PASSWORD: 'Esqueci minha senha',
    },
    SEARCH_BAR: {
      SEARCH: {
        LABEL: 'O que deseja procurar?',
      },
    },
    ADVANCED_FILE_UPLOAD: {
      ERROR: 'Por favor insira uma imagem no formato png ou jpg',
    },
    DATA_TABLE_ACTIONS: {
      EDIT: {
        LABEL: 'Editar',
      },
      VIEW: {
        LABEL: 'Visualizar',
      },
      DELETE: {
        LABEL: 'Deletar',
      },
      PRINT: {
        LABEL: 'Imprimir',
      },
      OPEN: {
        LABEL: 'Abrir',
      },
      HISTORY: {
        LABEL: 'Histórico',
      },
    },
    PANEL_CONTENT_TOP_BAR: {
      PAGES: {
        DASHBOARD: {
          TITLE: 'Dashboard',
          LOGOUT: 'Sair',
        },
        MARKETING: {
          TITLE: 'Marketing',
        },
        TREASURY: {
          TITLE: 'Tesouraria',
        },
      },
    },
  },

  SHARED: {
    ADD: 'Adicionar',
    PLACEHOLDER: 'Digite aqui',
    SAVE: 'Salvar',
  },

  PAGES: {
    LOGIN: {
      TITLE: 'Tony dashboard',
      DESCRIPTION: 'Faça seu login',
      FIELDS: {
        EMAIL: {
          LABEL: 'E-mail',
          PLACEHOLDER: 'Digite seu email',
        },
        PASSWORD: {
          LABEL: 'Senha',
          PLACEHOLDER: 'Digite sua senha',
        },
      },
    },
    PANEL: {
      USER: {
        SIDEBAR_TITLE: 'Usuários',
        DETAILS: {
          TITLE: {
            EDIT: 'Editar usuário',
            ADD: 'Adicionar usuário',
          },
          DESCRIPTION: {
            EDIT: 'Altere os campos para editar o usuário',
            ADD: 'Preencha os campos para criar o usuário',
          },
        },
        REPORT: {
          TITLE: 'Lista de usuários',
          DESCRIPTION: 'Usuários ativos no chatbot',
        },
      },
      COMPANY: {
        DETAILS: {
          TITLE: {
            EDIT: 'Editar empresa',
            ADD: 'Adicionar empresa',
          },
          DESCRIPTION: {
            EDIT: 'Altere os campos para editar a empresa',
            ADD: 'Preencha os campos para criar a empresa',
          },
        },
        REPORT: {
          TITLE: 'Lista de empresas',
          DESCRIPTION: 'Empresas ativas',
        },
      },
      SERVICE_CALL: {
        DETAILS: {
          TITLE: {
            EDIT: 'Editar chamado',
            ADD: 'Adicionar chamado',
          },
          DESCRIPTION: {
            EDIT: 'Altere os campos para editar o chamado',
            ADD: 'Preencha os campos para criar o chamado',
          },
        },
        REPORT: {
          TITLE: 'Lista de chamados',
          DESCRIPTION: 'Chamados ativos',
        },
      },
      SECTOR: {
        DETAILS: {
          TITLE: {
            EDIT: 'Editar setor',
            ADD: 'Adicionar setor',
          },
          DESCRIPTION: {
            EDIT: 'Altere os campos para editar o setor',
            ADD: 'Preencha os campos para criar o setor',
          },
        },
        REPORT: {
          TITLE: 'Lista de setores',
          DESCRIPTION: 'Setores ativos',
        },
      },
    },
    COMPANY_DETAILS: {
      TITLE: 'Empresa',
      DESCRIPTION: 'Criar empresa',
      LABEL_NAME: 'Nome da empresa',
      LABEL_FANTASY: 'Nome fantasia',
      LABEL_PHONE: 'Telefone',
      LABEL_EMAIL: 'E-mail',
      LABEL_SEGMENT: 'Segmento',
      LABEL_ADDRESS: 'Endereço',
      LABEL_NUMBER: 'Número',
      LABEL_CEP: 'CEP',
      LABEL_DISTRICT: 'Bairro',
      LABEL_CITY: 'Cidade',
      LABEL_UF: 'UF',
      LABEL_AREA: 'Área de atuação',
      LABEL_CNPJ: 'CNPJ',
    },
    USER_DETAILS: {
      TITLE: 'Usuário',
      DESCRIPTION: 'Criar usuário',
      LABEL_NAME: 'Nome do usuário',
      LABEL_PHONE: 'Telefone do usuário',
      LABEL_PROFILE_TYPE: 'Administrador',
      LABEL_EMAIL: 'E-mail do usuário',
      LABEL_PASSWORD: 'Senha do usuário',
      LABEL_CONFIRM_PASSWORD: 'Confirme a senha',
    },
    SERVICE_CALL_DETAILS: {
      TITLE: 'Chamado',
      DESCRIPTION: 'Criar chamado',
      LABEL_PRIORITY: 'Prioridade',
      LABEL_STATUS: 'Status',
      LABEL_DESCRIPTION: 'Descrição',
      LABEL_SECTOR: 'Setor',
      LABEL_CLIENT: 'Cliente',
      LABEL_EMPLOYEE: 'Colaborador',
    },
    SECTOR_DETAILS: {
      TITLE: 'Setor',
      DESCRIPTION: 'Criar setor',
      LABEL_NAME: 'Nome do setor',
    },
  },
};

export default ptBr;
