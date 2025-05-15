# Ana Gaming Test 🎮

Este projeto é uma aplicação web desenvolvida com **Next.js 15+**, **TypeScript** e **Tailwind CSS**, focada em exibir informações sobre apostas esportivas.

## 🔧 Tecnologias Utilizadas

- [Next.js 15+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) para gerenciamento de estado
- [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/) para testes

## 🚀 Como Executar o Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/FabioRocha231/Ana-gaming-test.git
   cd Ana-gaming-test
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   A aplicação estará disponível em `http://localhost:3000`.

4. **Variaveis de ambiente:**
   ```GITHUB_ID= Id do app fornecido pelo github
   GITHUB_SECRET= secret do app fornecido pelo github
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET= cole um uuid v4 aqui
   ODDS_API_URL=https://api.the-odds-api.com
   ODDS_API_KEY= key fornecida pela api acima
   NEXT_PUBLIC_SELF_BASE_URL=http://localhost:3000
   ```

## 🧪 Executando os Testes

Para rodar os testes unitários:

```bash
npm run test
```

## 📁 Estrutura de Pastas

```bash
├── components/        # Componentes reutilizáveis
├── app/             # Páginas da aplicação
├── stores/            # Gerenciamento de estado com Zustand
├── lib/               # Funções utilitárias
├── public/            # Arquivos estáticos
├── tsconfig.json      # Configuração do TypeScript
├── jest.config.js     # Configuração do Jest
└── README.md          # Documentação do projeto
```

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
