# users-list-challengeo – Desenvolvedor Front-End Júnior

Aplicação web desenvolvida com **React**, **Vite** e **TypeScript** para listagem, filtragem e visualização de detalhes de usuários consumindo a API pública [JSONPlaceholder](https://typicode.com).

## Funcionalidades Implementadas

- **Listagem de Usuários:** Consumo da API `/users` exibindo nome e e-mail de cada registro.
- **Busca em Tempo Real:** Campo de filtro dinâmico para pesquisar usuários pelo nome.
- **Modal de Detalhes:** Ao selecionar um usuário na lista, um modal acessível (`<dialog>`) exibe informações completas:
  - Nome completo
  - E-mail
  - Telefone
  - Empresa
  - Cidade
- **Feedback Visual de Estados:** Indicador animado de carregamento (*loading*) e tratamento de erro com opção para tentar novamente (*retry*).

## Tecnologias e Diferenciais

- **Core:** React, TypeScript e Vite.
- **Estilização:** **CSS Modules** para escopo local de estilos, evitando conflitos de classes.
- **UI/UX & Responsividade:** Layout *mobile-first* que adapta a lista de 1 para 2 colunas em telas maiores, variáveis CSS para consistência visual e suporte a `prefers-reduced-motion`.
- **Organização:** Código modularizado com separação clara entre componentes, tipagens e serviços/requisições.

## Como Executar o Projeto

Certifique-se de ter o **Node.js** instalado em sua máquina.

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ChristianFernandesLemos/users-list-challenge
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

5. **Acesse no navegador:** Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Estrutura de Pastas

```text
src/               # Recursos estáticos da aplicação
├── components/
│   ├── ErrorMessage/      # Componente de exibição de erro e botão de retry
│   ├── Loading/           # Indicador visual de carregamento
│   ├── SearchInput/       # Campo de busca por nome
│   ├── UserCard/          # Cartão individual de usuário na lista
│   ├── UserDetailsModal/  # Modal com informações detalhadas do usuário
│   └── UserList/          # Grid responsivo da lista de usuários
├── hooks/                 # Custom hooks para gerenciamento de estado e lógica
├── services/              # Comunicação e requisições com a API externa
├── types/                 # Interfaces e tipagens TypeScript
├── utils/                 # Funções auxiliares e utilitárias
├── App.module.css         # Estilos com escopo local do componente principal
├── App.tsx                # Componente principal da aplicação
├── index.css              # Estilos globais e variáveis CSS
└── main.tsx               # Ponto de entrada da aplicação
```

