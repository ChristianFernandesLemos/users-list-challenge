# users-list-challenge – Desenvolvedor Front-End Júnior

Aplicação web desenvolvida com **React**, **Vite** e **TypeScript** para listagem, filtragem e visualização de detalhes de usuários, consumindo a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com).

## Funcionalidades Implementadas

- **Listagem de Usuários:** consumo do endpoint `/users`, exibindo nome e e-mail de cada registro.
- **Busca em Tempo Real:** campo de filtro para pesquisar usuários pelo nome, ignorando maiúsculas, minúsculas, acentos e espaços nas pontas. Exibe a quantidade de resultados e uma mensagem quando nenhum usuário é encontrado.
- **Modal de Detalhes:** ao selecionar um usuário na lista, um modal acessível (`<dialog>`) exibe as informações completas:
  - Nome completo
  - E-mail
  - Telefone
  - Empresa
  - Cidade
- **Feedback Visual de Estados:** indicador animado de carregamento (*loading*) e tratamento de erro com opção de tentar novamente (*retry*).

## Tecnologias e Diferenciais

- **Core:** React, TypeScript (modo `strict`) e Vite.
- **Estilização:** **CSS Modules**, com escopo local de estilos e variáveis CSS para consistência visual.
- **UI/UX e Responsividade:** layout *mobile-first*, que passa de 1 para 2 colunas em telas maiores, com foco visível e suporte a `prefers-reduced-motion`.
- **Acessibilidade:** elemento nativo `<dialog>` (fecha com Esc, clique fora ou botão), `<label>` associado ao campo de busca, `role="status"` e `role="alert"` nos estados, e cards como `<button>` para navegação por teclado.
- **Qualidade de código:** ESLint e Prettier configurados.
- **Organização:** código modularizado, com separação clara entre componentes, hooks, serviços, tipos e utilitários.

## Como Executar o Projeto

Certifique-se de ter o **Node.js** (versão LTS recente) instalado em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ChristianFernandesLemos/users-list-challenge.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd users-list-challenge
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse no navegador:** abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Verifica os tipos (`tsc`) e gera o build de produção |
| `npm run preview` | Serve localmente o build de produção |
| `npm run lint` | Executa o ESLint |
| `npm run format` | Formata o código em `src` com o Prettier |
| `npm run format:check` | Verifica a formatação sem alterar arquivos |

## Estrutura de Pastas

```text
src/
├── components/
│   ├── ErrorMessage/      # Mensagem de erro com botão de nova tentativa
│   ├── Loading/           # Indicador visual de carregamento
│   ├── SearchInput/       # Campo de busca por nome
│   ├── UserCard/          # Cartão individual de usuário na lista
│   ├── UserDetailsModal/  # Modal com as informações detalhadas do usuário
│   └── UserList/          # Grid responsivo da lista de usuários
├── hooks/                 # Hook useUsers (dados, carregamento, erro e retry)
├── services/              # Requisições à API externa
├── types/                 # Interfaces TypeScript (User, Address, Company, Geo)
├── utils/                 # Funções auxiliares (filtro de usuários por nome)
├── App.module.css         # Estilos do componente principal
├── App.tsx                # Componente principal da aplicação
├── index.css              # Estilos globais e variáveis CSS
└── main.tsx               # Ponto de entrada da aplicação
```

## Decisões Técnicas

- **Lógica separada da interface:** a busca e o carregamento dos dados ficam no hook `useUsers` e na função `filterUsersByName`, enquanto os componentes cuidam apenas da apresentação.
- **Cancelamento de requisições:** o hook usa `AbortController` para não atualizar o estado depois que o componente é desmontado.
- **Lista filtrada derivada:** a lista exibida é calculada a partir do termo de busca durante a renderização, sem estado duplicado.
- **Modal com `<dialog>` nativo:** aproveita o comportamento do navegador para bloqueio do fundo, tecla Esc e devolução do foco.
- **Fluxo de versionamento:** branches por funcionalidade, Pull Requests e mensagens de commit no padrão *Conventional Commits*.
