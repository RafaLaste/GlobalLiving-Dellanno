<div align="center">
  <h1>Global Living - Dell Anno</h1>
</div>

O **Global Living** é um projeto desenvolvido com foco na campanha de globalização da marca **Dell Anno**, referência global em móveis planejados de alto padrão.
  
---

## Índice

- [Sobre](#sobre)
- [Visualização](#visualizacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)

---

<h2 id="sobre">Sobre:</h2>

A proposta do projeto explora o conceito de vida global, destacando a presença da marca em diferentes contextos. Como estudo de caso, foram analisadas as unidades de **São Paulo** e **Nova York**, evidenciando como a identidade da marca se adapta e se mantém consistente em mercados distintos.

---


<h2 id="visualizacao">Visualização:</h2>

<img width="400" alt="image" src="https://github.com/user-attachments/assets/9d92feea-226a-46a9-986a-43cbfa223d7a" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/5b75632e-848b-4cf8-9b21-cfe3afad92b2" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/06367ba6-74bb-404e-a575-b0b50e90f943" />
<img width="400" alt="image" src="https://github.com/user-attachments/assets/a0ce5162-7a80-4c04-ac80-44a9f5a570b9" />

---

<h2 id="tecnologias-utilizadas">Tecnologias Utilizadas:</h2>

### Front-end:
- **React (^19.0.0)**: biblioteca para construção de interfaces de usuário baseadas em componentes
- **TypeScript (~5.7.2)**: adiciona tipagem estática ao JavaScript, aumentando a segurança e manutenção do código
- **Vite (^6.2.0)**: ferramenta de build e ambiente de desenvolvimento rápido

### Estilização:
- **Tailwind CSS (3.4)**: framework utilitário para estilização rápida e responsiva
- **PostCSS (^8.5.3)**: processador de CSS utilizado em conjunto com Tailwind
- **Autoprefixer (^10.4.21)**: adiciona automaticamente prefixos CSS para compatibilidade entre navegadores

### UI e experiência do usuário:
- **GSAP (^3.12.7)**: biblioteca para criação de animações avançadas
- **Lenis (^1.2.3)**: implementação de rolagem suave (smooth scrolling)
- **PhotoSwipe (^5.4.4)**: galeria de imagens e lightboxes

---

<h2 id="arquitetura-do-projeto">Arquitetura principal do Projeto:</h2>

```bash
GlobalLiving-Dellanno
│
├── public             # Arquivos públicos servidos diretamente
├── src                # Pasta principal
│   ├── Components     # Componentes responsáveis pela construção da interface 
│   ├── Data           # Lista com conteúdos estáticos para os componentes (imagens)
│   ├── Layouts        # Estruturas que definem o padrão das páginas
│   ├── Types          # Tipagens compartilhadas entre componentes
│   ├── assets         # Recursos estáticos utilizados na interface
│   ├── pages          # Páginas principais do site
├── App.tsx            # Responsável por centralizar rotas e contexts
├── index.css          # Arquivo global de estilos
├── main.tsx           # Ponto de entrada do projeto React
│

```

---

<h2 id="como-executar-o-projeto">Como Executar o Projeto:</h2>

1. Clone o repositório:

```bash
git clone https://github.com/RafaLaste/GlobalLiving-Dellanno.git
cd GlobalLiving-Dellanno
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:
```bash
npm run dev
```


