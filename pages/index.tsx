
import Head from 'next/head'
import '../styles/globals.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Site Advogado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div dangerouslySetInnerHTML={ __html: `<!DOCTYPE html>
<html lang="pt-BR">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lauro Advocacia - Excelência Jurídica</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              primary: {
                light: '#0f172a', // navy
                dark: '#f8fafc', // light
              },
              secondary: {
                light: '#047857', // emerald
                dark: '#22d3ee', // cyan
              },
              bglight: '#ffffff',
              bgdark: '#0f172a',
              cardlight: '#f8fafc',
              carddark: '#1e293b',
            },
            fontFamily: {
              sans: ['"Montserrat"', 'sans-serif'],
              display: ['"Playfair Display"', 'serif'],
            },
            animation: {
              'fade-in': 'fadeIn 0.5s ease-in',
              'menu-open': 'menuOpen 0.3s ease-out',
            },
            keyframes: {
              fadeIn: {
                '0%': {
                  opacity: '0'
                },
                '100%': {
                  opacity: '1'
                },
              },
              menuOpen: {
                '0%': {
                  transform: 'scale(0.8)',
                  opacity: '0'
                },
                '100%': {
                  transform: 'scale(1)',
                  opacity: '1'
                },
              }
            }
          }
        }
      }
    </script>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');

      .glass {
        backdrop-filter: blur(16px) saturate(180%);
        -webkit-backdrop-filter: blur(16px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.75);
      }

      .dark .glass {
        background-color: rgba(15, 23, 42, 0.75);
      }

      .title-gradient {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: linear-gradient(90deg, #0f172a 50%, #047857 50%);
      }

      .dark .title-gradient {
        background-image: linear-gradient(90deg, #f8fafc 50%, #22d3ee 50%);
      }

      .btn-glow:hover {
        box-shadow: 0 0 15px rgba(4, 120, 87, 0.5);
      }

      .dark .btn-glow:hover {
        box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
      }

      .nav-link::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #047857;
        transition: width 0.3s;
      }

      .dark .nav-link::after {
        background: #22d3ee;
      }

      .nav-link:hover::after {
        width: 100%;
      }

      .practice-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      }

      .dark .practice-card:hover {
        box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.05);
      }

      .testimonial-card {
        animation: fadeIn 0.6s ease-in;
      }

      .menu-items {
        animation: menuOpen 0.3s ease-out;
      }

      @media (max-width: 768px) {
        .hero-text {
          font-size: 2.5rem;
        }
      }
    </style>
    <script type="text/javascript" src="./index.js" defer=""></script>
    <link rel="stylesheet" href="./index.css">
  </head>

  <body class="bg-white dark:bg-bgdark font-sans text-gray-800 dark:text-gray-200 transition-colors duration-300">
    <!-- Navigation -->
    <nav class="fixed w-full z-50">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div class="text-2xl font-display font-bold">
              <span class="text-primary-light dark:text-primary-dark">LAURO</span>
              <span class="text-secondary-light dark:text-secondary-dark">ADVOCACIA</span>
            </div>
          </div>

          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link font-medium">Início</a>
            <a href="#about" class="nav-link font-medium">Sobre</a>
            <a href="#services" class="nav-link font-medium">Áreas</a>
            <a href="#testimonials" class="nav-link font-medium">Depoimentos</a>
            <a href="#contact" class="nav-link font-medium">Contato</a>
          </div>

          <div class="flex items-center space-x-4">
            <button id="theme-toggle" class="p-2 rounded-full focus:outline-none">
              <i class="fas fa-moon dark:hidden text-gray-700"></i>
              <i class="fas fa-sun hidden dark:block text-yellow-300"></i>
            </button>

            <button id="menu-toggle" class="md:hidden relative z-50 w-10 h-10 rounded-full bg-primary-light dark:bg-primary-dark text-white flex items-center justify-center focus:outline-none">
              <i class="fas fa-bars" id="menu-icon"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-bgdark flex flex-col items-center justify-center space-y-8">
          <button id="close-menu" class="absolute top-6 right-6 text-2xl">
            <i class="fas fa-times"></i>
          </button>
          <a href="#home" class="text-2xl font-medium">Início</a>
          <a href="#about" class="text-2xl font-medium">Sobre</a>
          <a href="#services" class="text-2xl font-medium">Áreas</a>
          <a href="#testimonials" class="text-2xl font-medium">Depoimentos</a>
          <a href="#contact" class="text-2xl font-medium">Contato</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gray-100 dark:bg-gray-900 opacity-50"></div>
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-cover bg-center"></div>

      <div class="container mx-auto px-6 z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="hero-text text-5xl md:text-6xl font-display font-bold mb-6 title-gradient">
            Excelência Jurídica Personalizada
          </h1>
          <p class="text-xl md:text-2xl mb-10 glass rounded-lg p-4 inline-block">
            Soluções legais estratégicas para proteger seus interesses e negócios
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" class="px-8 py-4 bg-secondary-light dark:bg-secondary-dark text-white font-medium rounded-full btn-glow transition-all duration-300">
              Agende uma Consulta
            </a>
            <a href="#contact" class="px-8 py-4 border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              Fale com um Advogado
            </a>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" class="animate-bounce w-10 h-10 rounded-full bg-primary-light dark:bg-primary-dark text-white flex items-center justify-center">
          <i class="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-6">
              <span class="text-primary-light dark:text-primary-dark">Sobre a</span>
              <span class="text-secondary-light dark:text-secondary-dark"> Lauro Advocacia</span>
            </h2>
            <p class="text-lg mb-6">
              Fundada em 2010, a Lauro Advocacia se estabeleceu como uma das mais respeitadas firmas de advocacia do país, combinando tradição jurídica com abordagens inovadoras.
            </p>
            <p class="text-lg mb-8">
              Nossa equipe de advogados altamente qualificados atua com comprometimento total para oferecer soluções personalizadas, sempre priorizando a ética, transparência e excelência técnica.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-secondary-light dark:bg-secondary-dark text-white flex items-center justify-center mr-4">
                  <i class="fas fa-award text-xl"></i>
                </div>
                <span class="font-medium">+50 Prêmios</span>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 rounded-full bg-secondary-light dark:bg-secondary-dark text-white flex items-center justify-center mr-4">
                  <i class="fas fa-user-tie text-xl"></i>
                </div>
                <span class="font-medium">+20 Advogados</span>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 relative">
            <div class="glass rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2069&amp;q=80" alt="Equipe Lauro Advocacia" class="w-full h-auto">
            </div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-light dark:bg-secondary-dark rounded-full flex items-center justify-center shadow-lg">
              <i class="fas fa-balance-scale text-white text-4xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Practice Areas -->
    <section id="services" class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            <span class="text-primary-light dark:text-primary-dark">Nossas</span>
            <span class="text-secondary-light dark:text-secondary-dark"> Áreas de Atuação</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg">
            Oferecemos expertise em diversas áreas do direito, garantindo cobertura jurídica completa para nossos clientes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="practice-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-briefcase text-secondary-light dark:text-secondary-dark text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Direito Empresarial</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Assessoria completa para empresas, desde constituição até contratos complexos e fusões.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="practice-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-home text-secondary-light dark:text-secondary-dark text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Direito Imobiliário</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Atuação em compra e venda, locação, regularização de imóveis e disputas condominiais.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="practice-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-users text-secondary-light dark:text-secondary-dark text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Direito de Família</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Divórcios, inventários, guarda de menores e planejamento sucessório com sensibilidade.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="practice-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-hand-holding-usd text-secondary-light dark:text-secondary-dark text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Direito Tributário</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Planejamento tributário, recuperação de créditos e defesa em processos fiscais.
            </p>
          </div>

          <!-- Card 5 -->
          <div class="practice-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-gavel text-secondary-light dark:text-secondary-dark text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Direito Penal</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Defesa criminal em todas as instâncias, habeas corpus e recursos especializados.
            </p>
          </div>

          <!-- Card 6 -->
          <div class="practice-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-emerald-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mb-6">
              <i class="fas fa-heartbeat text-secondary-light dark:text-secondary-dark text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">Direito Médico</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Responsabilidade médica, planos de saúde e direitos do paciente com expertise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
            <span class="text-primary-light dark:text-primary-dark">Depoimentos</span>
            <span class="text-secondary-light dark:text-secondary-dark"> de Clientes</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg">
            A satisfação de nossos clientes é nossa maior recompensa. Veja o que eles dizem sobre nosso trabalho.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="testimonial-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Maria Silva" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-bold">Maria Silva</h4>
                <p class="text-sm text-gray-500">CEO, TechSolutions</p>
              </div>
            </div>
            <div class="mb-4 flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              "A Lauro Advocacia nos auxiliou em um complexo processo de fusão empresarial com maestria. Profissionais extremamente competentes e atenciosos."
            </p>
          </div>

          <!-- Testimonial 2 -->
          <div class="testimonial-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Carlos Mendes" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-bold">Carlos Mendes</h4>
                <p class="text-sm text-gray-500">Diretor, Imobiliária Horizonte</p>
              </div>
            </div>
            <div class="mb-4 flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              "Resolveram uma disputa condominial que se arrastava há anos em questão de meses. Recomendo a todos que buscam excelência no Direito Imobiliário."
            </p>
          </div>

          <!-- Testimonial 3 -->
          <div class="testimonial-card bg-white dark:bg-carddark rounded-xl p-8 shadow-md">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Ana Lúcia" class="w-full h-full object-cover">
              </div>
              <div>
                <h4 class="font-bold">Ana Lúcia</h4>
                <p class="text-sm text-gray-500">Médica</p>
              </div>
            </div>
            <div class="mb-4 flex text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              "Quando precisei de assistência em um caso de responsabilidade profissional, a Lauro Advocacia me deu todo o suporte necessário com competência e discrição."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section id="contact" class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-primary-light dark:bg-primary-dark opacity-90"></div>
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80')] bg-cover bg-center mix-blend-overlay"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Pronto para Transformar sua Situação Jurídica?
          </h2>
          <p class="text-xl text-gray-200 mb-10">
            Entre em contato hoje mesmo e agende uma consulta com nossos especialistas.
          </p>

          <div class="bg-white dark:bg-carddark rounded-xl shadow-xl p-8 md:p-10 max-w-2xl mx-auto">
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-left text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
                  <input type="text" id="name" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark bg-white dark:bg-gray-800">
                </div>
                <div>
                  <label for="email" class="block text-left text-gray-700 dark:text-gray-300 mb-2">E-mail</label>
                  <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark bg-white dark:bg-gray-800">
                </div>
              </div>
              <div>
                <label for="subject" class="block text-left text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
                <select id="subject" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark bg-white dark:bg-gray-800">
                  <option value="">Selecione o assunto</option>
                  <option value="consultation">Agendamento de Consulta</option>
                  <option value="corporate">Direito Empresarial</option>
                  <option value="realstate">Direito Imobiliário</option>
                  <option value="family">Direito de Família</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              <div>
                <label for="message" class="block text-left text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
                <textarea id="message" rows="4" class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark bg-white dark:bg-gray-800"></textarea>
              </div>
              <button type="submit" class="w-full px-6 py-4 bg-secondary-light dark:bg-secondary-dark text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 btn-glow">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="text-2xl font-display font-bold mb-4">
              <span class="text-white">LAURO</span>
              <span class="text-secondary-light dark:text-secondary-dark">ADVOCACIA</span>
            </div>
            <p class="mb-4">
              Excelência jurídica com compromisso ético e resultados concretos.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 class="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="hover:text-white transition">Início</a></li>
              <li><a href="#about" class="hover:text-white transition">Sobre</a></li>
              <li><a href="#services" class="hover:text-white transition">Áreas de Atuação</a></li>
              <li><a href="#testimonials" class="hover:text-white transition">Depoimentos</a></li>
              <li><a href="#contact" class="hover:text-white transition">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold text-lg mb-4">Áreas de Prática</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white transition">Direito Empresarial</a></li>
              <li><a href="#" class="hover:text-white transition">Direito Imobiliário</a></li>
              <li><a href="#" class="hover:text-white transition">Direito de Família</a></li>
              <li><a href="#" class="hover:text-white transition">Direito Tributário</a></li>
              <li><a href="#" class="hover:text-white transition">Direito Médico</a></li>
            </ul>
          </div>

          <div>
            <h3 class="text-white font-bold text-lg mb-4">Contato</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 mr-3 text-secondary-light dark:text-secondary-dark"></i>
                <span>Av. Paulista, 1000 - São Paulo/SP</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-phone-alt mr-3 text-secondary-light dark:text-secondary-dark"></i>
                <span>(11) 9999-9999</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-envelope mr-3 text-secondary-light dark:text-secondary-dark"></i>
                <span>contato@lauroadvocacia.com.br</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-clock mr-3 text-secondary-light dark:text-secondary-dark"></i>
                <span>Seg-Sex: 9h às 18h</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© 2023 Lauro Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    <script>
      // Theme Toggle
      const themeToggle = document.getElementById('theme-toggle');
      const html = document.documentElement;

      if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }

      themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
      });

      // Mobile Menu Toggle
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      const closeMenu = document.getElementById('close-menu');
      const menuIcon = document.getElementById('menu-icon');

      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
      });

      closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
            });

            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
              mobileMenu.classList.add('hidden');
              menuIcon.classList.remove('fa-times');
              menuIcon.classList.add('fa-bars');
            }
          }
        });
      });

      // Add animation class to testimonial cards when they come into view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.testimonial-card').forEach(card => {
        observer.observe(card);
      });
    </script>

  </body>

</html>` } />
    </>
  );
}
