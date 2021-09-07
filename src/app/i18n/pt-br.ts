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
    },
    COMPANY_DETAILS: {
      TITLE: 'Empresa',
      DESCRIPTION: 'Criar empresa',
      LABEL_NAME: 'Nome da empresa',
      PLACEHOLDER: 'Digite aqui',
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
      LABEL_BUTTON: 'Salvar',
    },
  },
};
//"Lista de usuários"
export default ptBr;
