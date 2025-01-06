
**League of Legends Launcher**:  

<p align="center">
<img src="./.github/preview.png">
</p>


# League of Legends Launcher

Este projeto é uma recriação de um **launcher** para o jogo **League of Legends**, desenvolvido como estudo e prática de tecnologias modernas. Ele simula várias funcionalidades do cliente oficial, incluindo autenticação, navegação entre páginas relacionadas ao jogo, lista de amigos, patch notes, e mais.



## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 14**: Framework React com suporte a renderização híbrida.
- **Tailwind CSS**: Framework de design para criar interfaces responsivas.
- **Framer Motion**: Biblioteca para animações dinâmicas e interativas.
- **Ky**: Cliente HTTP leve e eficiente.

### Backend

- **Fastify**: Framework backend rápido e modular.
- **Prisma**: ORM para banco de dados.
- **Redis**: Gerenciamento de dados em cache.
- **Docker**: Para gerenciamento de containers.

### Testes

- **Jest** e **Supertest**: Testes unitários e de integração no backend.
- **Playwright**: Testes End-to-End (E2E) no frontend.
- **React Testing Library (RTL)**: Testes de componentes React.



## 📂 Funcionalidades

- **Autenticação de usuários**:
  - Login e criação de conta com validação de credenciais.
- **Navegação entre páginas do jogo**:
  - Home, patch notes, sobre o CBLOL e loja.
- **Lista de amigos**:
  - Exibição estática de amigos (simulada).
- **Loja**:
  - Exibição de personagens e skins com modais de compra.
- **Simulação de partidas**:
  - Em desenvolvimento, para expandir a interatividade.
- **Design responsivo**:
  - Adaptado para diferentes dispositivos.



## 🛠️ Instalação e Uso

### Pré-requisitos

- **Node.js** (v18+)
- **Docker** (opcional, para rodar o ambiente em contêineres)

### Passos para execução

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/rafaelone/league-of-legends.git
   cd league-of-legends
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   Renomeie o arquivo `.env.example` para `.env` e preencha os valores necessários.

4. **Inicie os serviços (opcional com Docker)**:
   ```bash
   docker-compose up -d
   ```

5. **Execute as migrações do banco de dados**:
   ```bash
   npx prisma migrate dev
   ```

6. **Inicie o servidor local**:
   ```bash
   npm run dev
   ```

7. **Acesse o launcher**:
   Abra o navegador em `http://localhost:3000`.



## 🧪 Testes

### Testes Unitários e de Integração
Execute os testes do backend:
```bash
npm test
```

### Testes End-to-End
Execute os testes do frontend:
```bash
npm run test:e2e
```

### Verificar Cobertura de Testes
```bash
npm run test:coverage
```






## 📖 Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [Fastify Documentation](https://www.fastify.io/docs/latest/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [SST Documentation](https://sst.dev/)



## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch com a sua funcionalidade:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça commit das suas alterações:
   ```bash
   git commit -m "feat: descrição da funcionalidade"
   ```
4. Envie a branch:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request.



## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE). Fique à vontade para utilizá-lo e adaptá-lo.



## 👨‍💻 Autor

Desenvolvido por [Rafael One](https://github.com/rafaelone). Se você gostou deste projeto, deixe uma ⭐ no repositório e compartilhe com a comunidade!


Se precisar de ajustes ou mais detalhes, é só avisar! 🚀