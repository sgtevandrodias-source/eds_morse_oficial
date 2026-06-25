const RANKING_GLOBAL_API_URL = "https://eds-morse-ranking-api.sgtevandrodias.workers.dev/ranking";
const VERSAO_APP_EDS_MORSE = "1.0.0";

const telaEntradaOperador = document.getElementById("telaEntradaOperador");
const telaInicial = document.getElementById("telaInicial");
const telaMissao = document.getElementById("telaMissao");
const telaBiblioteca = document.getElementById("telaBiblioteca");
const telaCampanha = document.getElementById("telaCampanha");
const telaLicao = document.getElementById("telaLicao");
const telaJogo = document.getElementById("telaJogo");
const telaFinal = document.getElementById("telaFinal");
const telaTransicaoFase = document.getElementById("telaTransicaoFase");
const telaFimJogo = document.getElementById("telaFimJogo");
const telaRanking = document.getElementById("telaRanking");
const telaRelatorioOperador = document.getElementById("telaRelatorioOperador");
const telaManipulador = document.getElementById("telaManipulador");

const telaSalaSecretaSenha = document.getElementById("telaSalaSecretaSenha");
const telaSalaSecretaFragmentos = document.getElementById("telaSalaSecretaFragmentos");
const telaSalaSecretaFinal = document.getElementById("telaSalaSecretaFinal");

const inputNomeOperador = document.getElementById("inputNomeOperador");
const btnConfirmarEntradaOperador = document.getElementById("btnConfirmarEntradaOperador");
const feedbackEntradaOperador = document.getElementById("feedbackEntradaOperador");
const btnIdiomaPt = document.getElementById("btnIdiomaPt");
const btnIdiomaEn = document.getElementById("btnIdiomaEn");
let idiomaAtual = localStorage.getItem("edsMorseIdioma") || "pt";
const IDIOMAS = {
  pt: {
    idioma_portugues: "🇧🇷 Português",
    idioma_ingles: "🇺🇸 English",
    entrada_instrucao: "Escolha o idioma e informe seu nome de operador para iniciar.",
    entrada_nome_label: "Nome do operador",
    entrada_nome_placeholder: "Digite um nome ou codinome...",
    entrada_botao: "Entrar",
    entrada_erro_nome: "Digite um nome de operador.",
  
    marca_chamada: "DIVIRTA-SE COM",
    slogan: "Quando o complexo falha, o simples prevalece.",
    desenvolvido_por: "Desenvolvido por",
  
    operador_label: "OPERADOR",
    operador_formacao: "Operador em formação",
    canal_restrito: "CANAL RESTRITO",
  
    posicao: "🌍 Posição",
    wpm: "⚡ WPM",
    fases: "🎯 Fases",
    medalhas: "🏅 Medalhas",
  
    jogar: "🎮 Jogar",
    missao: "📡 Missão",
    treino_livre: "Treino Livre",
    biblioteca: "📖 Biblioteca",
    ranking: "🏆 Ranking",
    regras_faq: "📡 Regras e FAQ",
    ranking_badge: "COMPETIÇÃO GLOBAL",
ranking_titulo: "Ranking Global",
ranking_subtitulo: "Classificação dos operadores.",
ranking_minha_posicao: "Minha posição",
ranking_fora: "Fora do ranking",
ranking_fora_msg: "Conclua uma missão aprovada com este nome de operador para aparecer no Ranking Global.",
ranking_podio_titulo: "🏆 Pódio Global",
ranking_podio_subtitulo: "Os operadores no topo da rede",
ranking_buscar_operador: "BUSCAR OPERADOR",
ranking_placeholder_busca: "Digite o nome do operador...",
ranking_botao_buscar: "Buscar",
ranking_botao_limpar: "Limpar",
ranking_busca_desc: "Busque um amigo pelo nome ou codinome usado no Ranking Global.",
ranking_top_global: "🌍 Top Global",
ranking_resultados_busca: "Resultados da busca",
ranking_operador_singular: "operador",
ranking_operador_plural: "operadores",
ranking_encontrado_singular: "encontrado",
ranking_encontrado_plural: "encontrados",
ranking_nivel: "Nível",
ranking_fase_singular: "fase",
ranking_fase_plural: "fases",
ranking_medalha_singular: "medalha",
ranking_medalha_plural: "medalhas",
ranking_pontos: "pts",
ranking_carregando: "Carregando Ranking Global...",
ranking_erro_carregar: "Não foi possível carregar o Ranking Global agora.",
ranking_meu_relatorio: "📊 Meu relatório",
ranking_mapa_jogo: "Mapa do jogo",
ranking_inicio: "Início",
    missao_colapso_titulo: "📡 O COLAPSO",
missao_colapso_botao_voltar: "Voltar ao início",
missao_colapso_botao_iniciar: "Iniciar Missão",
missao_colapso_textos: [
  "Após um grande bug nos sistemas de telecomunicações, a única forma de se comunicar é por meio de equipamentos simples de rádio usando código Morse.",
  "Para sobreviver ao caos, você precisa dominar o código, transmitir mensagens e manter contato com outros operadores.",
  "Avance pelas missões mantendo rendimento acima de 80% e alcance a meta operacional de 12 palavras por minuto."
],
regras_badge: "Manual do operador",
regras_titulo: "📘 Regras e FAQ",
regras_subtitulo: "Entenda como jogar, pontuar e participar do Ranking Global do EDS MORSE.",

regras_como_jogar_titulo: "🎮 Como jogar",
regras_como_jogar_p1: "O EDS MORSE é um jogo de Código Morse. Em cada fase, o operador precisa transmitir ou reconhecer sinais usando pontos e traços.",
regras_como_jogar_p2: "Pressionamentos curtos representam pontos. Pressionamentos longos representam traços. Complete as missões com atenção, ritmo e precisão.",

regras_aprovacao_titulo: "✅ Aprovação nas fases",
regras_aprovacao_p1: "Para concluir uma fase, o operador precisa alcançar pelo menos <strong>80% de aproveitamento</strong>.",
regras_aprovacao_p2: "Abaixo de 80%, a fase precisa ser repetida. Com 90% ou mais, o operador pode receber bônus e recompensas adicionais.",

regras_pontuacao_titulo: "🏆 Pontuação",
regras_pontuacao_p1: "Cada missão gera uma pontuação própria. Acertos seguidos aumentam a pontuação, enquanto erros reduzem o desempenho.",
regras_pontuacao_p2: "O tempo, o aproveitamento e o WPM também podem influenciar o resultado final da missão.",

regras_progresso_titulo: "📈 Progresso do operador",
regras_progresso_p1: "O progresso do operador é a soma dos melhores resultados alcançados nas fases concluídas.",
regras_progresso_p2: "Repetir uma fase só aumenta o progresso se o novo resultado for melhor que o anterior.",

regras_ranking_titulo: "🌍 Ranking Global",
regras_ranking_p1: "O Ranking Global mostra o melhor desempenho de cada operador.",
regras_ranking_p2: "Cada nome de operador fica vinculado ao primeiro aparelho que usou esse nome. Outro aparelho não poderá usar o mesmo nome.",
regras_ranking_p3: "A ordem do ranking considera: pontos acumulados, modo mais avançado, nível alcançado, aproveitamento, WPM e tempo.",

regras_faq_titulo: "❓ FAQ",
faq_nome_bloqueado_q: "Por que meu nome foi bloqueado?",
faq_nome_bloqueado_a: "Porque esse nome já foi usado em outro aparelho. Cada nome de operador é único no Ranking Global.",
faq_tempo_q: "Por que estou atrás de outro jogador mesmo tendo melhor tempo?",
faq_tempo_a: "Porque o primeiro critério do Ranking Global é o progresso acumulado do operador. O tempo é usado como critério de desempate.",
faq_pontuacao_q: "Minha pontuação sempre aumenta quando repito uma fase?",
faq_pontuacao_a: "Não. O progresso só aumenta se você superar seu melhor resultado naquela fase.",
faq_internet_q: "O ranking funciona sem internet?",
faq_internet_a: "O jogo pode funcionar instalado como PWA, mas o Ranking Global precisa de internet para enviar e carregar resultados.",
faq_wpm_q: "O que é WPM?",
faq_wpm_a: "WPM significa Words Per Minute, ou palavras por minuto. É uma medida de velocidade usada em Código Morse.",

regras_acompanhe_titulo: "📡 Acompanhe o projeto",
regras_instagram: "Instagram oficial:",
regras_email: "E-mail:",
regras_assinatura: "EDS MORSE — Quando o complexo falha, o simples prevalece.",
    campanha_progresso: "Progresso",
    campanha_titulo: "Formação do Operador Morse",
    inicio: "Início",
    modo_liberado: "Liberado",
    modo_bloqueado: "Bloqueado",
    modo_iniciante: "Iniciante",
    modo_iniciante_desc: "Aprenda letras, números, palavras e frases usando botões de apoio para separar letras e palavras.",
    modo_iniciante_status: "Nível atual: 1",
    modo_intermediario: "Intermediário",
    modo_intermediario_desc: "Sem botões de espaço. O sistema interpretará a pausa entre sinais, letras e palavras.",
    modo_intermediario_status: "Conclua o Iniciante para liberar",
    modo_avancado: "Avançado",
    modo_avancado_desc: "Mensagens operacionais, menos dicas, ritmo rígido, tempo limite e cobrança real de transmissão.",
    modo_avancado_status: "Conclua o Intermediário para liberar",
    modo_atual_iniciante: "Modo Iniciante",
    mapa_progresso: "Mapa de progresso",
    continuar: "Continuar",
  
    biblioteca_titulo: "Biblioteca Morse",
biblioteca_desc: "Escolha uma área de estudo. Consulte, ouça e pratique os sinais.",

alfabeto: "Alfabeto",
numeros: "Números",
codigo_q: "Código Q",
sinais_servico: "Sinais de Serviço",
abreviacoes: "Abreviações",
caracteres_especiais: "Caracteres Especiais",
treino_auditivo: "Treino Auditivo",

alfabeto_morse_titulo: "Alfabeto Morse",
numeros_morse_titulo: "Números em Morse",
codigo_q_titulo: "Código Q",
sinais_servico_titulo: "Sinais de Serviço",
abreviacoes_titulo: "Abreviações Morse",
caracteres_especiais_titulo: "Caracteres Especiais",

alfabeto_desc: "Consulte as letras, seus códigos e mnemônicos fônicos. Toque em um card para ouvir.",
numeros_desc: "Consulte os números e seus códigos. Toque em um card para ouvir.",
codigo_q_desc: "Selecione uma categoria do Código Q.",
categoria_q_desc: "Toque em um cartão para ouvir o código e consultar o significado.",
sinais_servico_desc: "Sinais usados para controlar, corrigir e organizar a comunicação Morse.",
abreviacoes_desc: "Abreviações comuns usadas em comunicação Morse e rádio.",

q_operacao: "Operação",
q_operacao_desc: "Comunicação entre operadores",
q_estacao: "Estação",
q_estacao_desc: "Localização e identificação",
q_qualidade: "Qualidade",
q_qualidade_desc: "Sinais, ruídos e interferências",
q_trafego: "Tráfego",
q_trafego_desc: "Mensagens e radiogramas",

q_operacao_titulo: "Código Q — Operação",
q_estacao_titulo: "Código Q — Estação",
q_qualidade_titulo: "Código Q — Qualidade",
q_trafego_titulo: "Código Q — Tráfego",

voltar_inicio: "Voltar ao início",
voltar_codigo_q: "Voltar ao Código Q",
toque_para_ouvir: "Toque para ouvir",
    treino_livre_titulo: "Treino Livre",
    codigo_transmitido: "Código Transmitido",
     decodificacao_aproximada: "Decodificação Aproximada",
     modo_interpretacao: "Modo de Interpretação",
     iniciante: "Iniciante",
     transmitir: "Transmitir",
limpar: "Limpar",
modo_livre_desc_iniciante: "Ritmo confortável para treino inicial.",
jogo_missao: "MISSÃO",
jogo_acertos: "ACERTOS",
jogo_tecle: "TECLE:",
jogo_codigo_enviado: "CÓDIGO ENVIADO",
jogo_transmitir: "TRANSMITIR",
jogo_enviar: "ENVIAR",
jogo_espaco_letra: "Espaço letra",
jogo_espaco_palavra: "Espaço palavra",
jogo_limpar: "Limpar",
jogo_reiniciar_nivel: "Reiniciar nível",
jogo_mapa_jogo: "Mapa do jogo",
modo_livre_desc_pro: "Resposta mais rápida para operador experiente.",
letra: "Letra",
palavra: "Palavra",
treino_auditivo_titulo: "Treino Auditivo",
melhor_aproveitamento: "Melhor aproveitamento",
treinos_realizados: "Treinos realizados",
caracteres_isolados: "Caracteres isolados",
caracteres_isolados_desc: "Letras, números e sinais simples. Ideal para começar a reconhecer sons individuais.",
iniciar_treino: "Iniciar treino",
treino_auditivo_desc: "Ouça Código Morse, digite o que recebeu e treine sua escuta progressivamente.",
grupos_5: "Grupos de 5",
grupos_5_desc: "Sequências aleatórias com cinco caracteres. Treino operacional de escuta e memória.",
frases_curtas: "Frases curtas",
frases_curtas_desc: "Mensagens operacionais e cotidianas para um treino mais realista.",
sala_escuta: "SALA DE ESCUTA",
voltar_biblioteca: "Voltar para Biblioteca",

desafio: "Desafio",
escuta_livre: "Escuta Livre",
ouvir: "Ouvir",
mostrar_resposta: "Mostrar resposta",
digite_o_que_ouviu: "Digite o que você ouviu",
confirmar: "Confirmar",
resposta: "Resposta",
sem_observacao: "Sem observação cadastrada.",
erro_resposta_vazia: "Digite uma resposta antes de confirmar.",
correto: "Correto!",
incorreto: "Incorreto.",
resposta_correta_era: "A resposta correta era",
voce_digitou: "Você digitou",

resultado_auditivo: "Resultado Auditivo",
treino_concluido: "Treino concluído",
treino_concluido_msg: "Você concluiu o desafio auditivo. Continue treinando para fortalecer sua escuta.",
escuta_elite: "Escuta de elite",
escuta_elite_msg: "Excelente desempenho. Seu ouvido já está reconhecendo os sinais com muita precisão.",
escuta_operacional: "Escuta operacional",
escuta_operacional_msg: "Bom desempenho. Você já consegue operar com segurança nessa categoria.",
escuta_formacao: "Escuta em formação",
escuta_formacao_msg: "Você concluiu o treino, mas ainda precisa reforçar essa categoria.",

categoria: "Categoria",
aproveitamento: "Aproveitamento",
acertos: "Acertos",
pontos: "Pontos",
situacao_escuta: "Situação da escuta",
treino_auditivo_registrado: "Treino Auditivo registrado",
treino_auditivo_registrado_msg: "Esse resultado prepara o operador para as missões avançadas com mensagens recebidas por áudio.",
medalhas_distintivos: "Medalhas e Distintivos",
escuta_ativa: "Escuta Ativa",
nenhuma_nova_medalha: "Nenhuma nova medalha nesta rodada.",
refazer_desafio: "Refazer desafio",
voltar_treino_auditivo: "Voltar ao Treino Auditivo",

categoria_caracteres_isolados: "Caracteres isolados",
categoria_grupos_5: "Grupos de 5",
categoria_frases_curtas: "Frases curtas",
categoria_letras: "Letras",
categoria_numeros: "Números",
categoria_codigo_q: "Código Q",
categoria_sinais: "Sinais de Serviço",
categoria_abreviacoes: "Abreviações",
categoria_caracteres: "Caracteres Especiais",
categoria_palavras: "Palavras comuns",
categoria_frases: "Frases operacionais",
categoria_mensagens: "Mensagens operacionais",
categoria_misto: "Treino misto",

tipo_caractere_isolado: "Caractere isolado",
tipo_grupo_5: "Grupo de 5",
tipo_frase_curta: "Frase curta",
desc_caractere_isolado: "Ouça e reconheça o sinal.",
desc_grupo_5: "Ouça o grupo completo e digite os cinco caracteres.",
desc_frase_curta: "Ouça a frase completa e digite o que recebeu.",
      },
  
  en: {
    idioma_portugues: "🇧🇷 Português",
    idioma_ingles: "🇺🇸 English",
    entrada_instrucao: "Choose your language and enter your operator name to start.",
    entrada_nome_label: "Operator name",
    entrada_nome_placeholder: "Enter a name or codename...",
    entrada_botao: "Enter",
    entrada_erro_nome: "Enter an operator name.",
  
    marca_chamada: "HAVE FUN WITH",
    slogan: "When complex systems fail, simple ones prevail.",
    desenvolvido_por: "Developed by",
  
    operador_label: "OPERATOR",
    operador_formacao: "Operator in training",
    canal_restrito: "RESTRICTED CHANNEL",
  
    posicao: "🌍 Position",
    wpm: "⚡ WPM",
    fases: "🎯 Stages",
    medalhas: "🏅 Medals",
  
    jogar: "🎮 Play",
    missao: "📡 Mission",
    treino_livre: "Free Practice",
    biblioteca: "📖 Library",
    ranking: "🏆 Ranking",
    regras_faq: "📡 Rules & FAQ",
    ranking_badge: "GLOBAL COMPETITION",
ranking_titulo: "Global Ranking",
ranking_subtitulo: "Operator standings.",
ranking_minha_posicao: "My position",
ranking_fora: "Out of ranking",
ranking_fora_msg: "Complete an approved mission with this operator name to appear in the Global Ranking.",
ranking_podio_titulo: "🏆 Global Podium",
ranking_podio_subtitulo: "The operators at the top of the network",
ranking_buscar_operador: "SEARCH OPERATOR",
ranking_placeholder_busca: "Enter the operator name...",
ranking_botao_buscar: "Search",
ranking_botao_limpar: "Clear",
ranking_busca_desc: "Search for a friend by the name or codename used in the Global Ranking.",
ranking_top_global: "🌍 Global Top",
ranking_resultados_busca: "Search results",
ranking_operador_singular: "operator",
ranking_operador_plural: "operators",
ranking_encontrado_singular: "result",
ranking_encontrado_plural: "results",
ranking_nivel: "Level",
ranking_fase_singular: "stage",
ranking_fase_plural: "stages",
ranking_medalha_singular: "medal",
ranking_medalha_plural: "medals",
ranking_pontos: "pts",
ranking_carregando: "Loading Global Ranking...",
ranking_erro_carregar: "The Global Ranking could not be loaded right now.",
ranking_meu_relatorio: "📊 My report",
ranking_mapa_jogo: "Game map",
ranking_inicio: "Home",
    missao_colapso_titulo: "📡 THE COLLAPSE",
    missao_colapso_botao_voltar: "Back to Home",
    missao_colapso_botao_iniciar: "Start Mission",
    missao_colapso_textos: [
      "After a major bug in telecommunications systems, the only way to communicate is through simple radio equipment using Morse code.",
      "To survive the chaos, you must master the code, transmit messages and keep contact with other operators.",
      "Advance through the missions by keeping your performance above 80% and reach the operational target of 12 words per minute."
    ],
    regras_badge: "Operator Manual",
regras_titulo: "📘 Rules & FAQ",
regras_subtitulo: "Learn how to play, score points and join the EDS MORSE Global Ranking.",

regras_como_jogar_titulo: "🎮 How to play",
regras_como_jogar_p1: "EDS MORSE is a Morse Code game. In each stage, the operator must transmit or recognize signals using dots and dashes.",
regras_como_jogar_p2: "Short presses represent dots. Long presses represent dashes. Complete the missions with attention, rhythm and precision.",

regras_aprovacao_titulo: "✅ Stage approval",
regras_aprovacao_p1: "To complete a stage, the operator must reach at least <strong>80% accuracy</strong>.",
regras_aprovacao_p2: "Below 80%, the stage must be repeated. With 90% or more, the operator may receive bonuses and additional rewards.",

regras_pontuacao_titulo: "🏆 Score",
regras_pontuacao_p1: "Each mission generates its own score. Consecutive correct answers increase the score, while mistakes reduce performance.",
regras_pontuacao_p2: "Time, accuracy and WPM may also influence the final mission result.",

regras_progresso_titulo: "📈 Operator progress",
regras_progresso_p1: "Operator progress is the sum of the best results achieved in completed stages.",
regras_progresso_p2: "Repeating a stage only increases progress if the new result is better than the previous one.",

regras_ranking_titulo: "🌍 Global Ranking",
regras_ranking_p1: "The Global Ranking shows the best performance of each operator.",
regras_ranking_p2: "Each operator name is linked to the first device that used that name. Another device cannot use the same name.",
regras_ranking_p3: "The ranking order considers: accumulated points, most advanced mode, highest level reached, accuracy, WPM and time.",

regras_faq_titulo: "❓ FAQ",
faq_nome_bloqueado_q: "Why was my name blocked?",
faq_nome_bloqueado_a: "Because that name has already been used on another device. Each operator name is unique in the Global Ranking.",
faq_tempo_q: "Why am I behind another player even with a better time?",
faq_tempo_a: "Because the first Global Ranking criterion is the operator's accumulated progress. Time is used as a tiebreaker.",
faq_pontuacao_q: "Does my score always increase when I repeat a stage?",
faq_pontuacao_a: "No. Progress only increases if you beat your best result in that stage.",
faq_internet_q: "Does the ranking work without internet?",
faq_internet_a: "The game can work when installed as a PWA, but the Global Ranking needs internet to send and load results.",
faq_wpm_q: "What is WPM?",
faq_wpm_a: "WPM means Words Per Minute. It is a speed measurement used in Morse Code.",

regras_acompanhe_titulo: "📡 Follow the project",
regras_instagram: "Official Instagram:",
regras_email: "E-mail:",
regras_assinatura: "EDS MORSE — When complex systems fail, simple ones prevail.",
    campanha_progresso: "Progress",
    campanha_titulo: "Morse Operator Training",
    inicio: "Home",
    modo_liberado: "Unlocked",
    modo_bloqueado: "Locked",
    modo_iniciante: "Beginner",
    modo_iniciante_desc: "Learn letters, numbers, words and phrases using support buttons to separate letters and words.",
    modo_iniciante_status: "Current level: 1",
    modo_intermediario: "Intermediate",
    modo_intermediario_desc: "No space buttons. The system interprets pauses between signals, letters and words.",
    modo_intermediario_status: "Complete Beginner mode to unlock",
    modo_avancado: "Advanced",
    modo_avancado_desc: "Operational messages, fewer hints, strict rhythm, time limits and realistic transmission demands.",
    modo_avancado_status: "Complete Intermediate mode to unlock",
    modo_atual_iniciante: "Beginner Mode",
    mapa_progresso: "Progress Map",
    continuar: "Continue",
  
    biblioteca_titulo: "Morse Library",
biblioteca_desc: "Choose a study area. Read, listen and practice the signals.",

alfabeto: "Alphabet",
numeros: "Numbers",
codigo_q: "Q Codes",
sinais_servico: "Service Signals",
abreviacoes: "Abbreviations",
caracteres_especiais: "Special Characters",
treino_auditivo: "Listening Practice",

alfabeto_morse_titulo: "Morse Alphabet",
numeros_morse_titulo: "Morse Numbers",
codigo_q_titulo: "Q Codes",
sinais_servico_titulo: "Service Signals",
abreviacoes_titulo: "Morse Abbreviations",
caracteres_especiais_titulo: "Special Characters",

alfabeto_desc: "Check the letters, their codes and sound mnemonics. Tap a card to listen.",
numeros_desc: "Check the numbers and their Morse codes. Tap a card to listen.",
codigo_q_desc: "Select a Q Code category.",
categoria_q_desc: "Tap a card to listen to the code and check its meaning.",
sinais_servico_desc: "Signals used to control, correct and organize Morse communication.",
abreviacoes_desc: "Common abbreviations used in Morse and radio communication.",

q_operacao: "Operation",
q_operacao_desc: "Communication between operators",
q_estacao: "Station",
q_estacao_desc: "Location and identification",
q_qualidade: "Signal Quality",
q_qualidade_desc: "Signals, noise and interference",
q_trafego: "Traffic",
q_trafego_desc: "Messages and radiograms",

q_operacao_titulo: "Q Codes — Operation",
q_estacao_titulo: "Q Codes — Station",
q_qualidade_titulo: "Q Codes — Signal Quality",
q_trafego_titulo: "Q Codes — Traffic",

voltar_inicio: "Back to Home",
voltar_codigo_q: "Back to Q Codes",
toque_para_ouvir: "Tap to listen",
    treino_livre_titulo: "Free Practice",
codigo_transmitido: "Transmitted Code",
decodificacao_aproximada: "Approximate Decoding",
modo_interpretacao: "Interpretation Mode",
iniciante: "Beginner",
transmitir: "Transmit",
limpar: "Clear",
modo_livre_desc_iniciante: "Comfortable pace for initial training.",
jogo_missao: "MISSION",
jogo_acertos: "CORRECT",
jogo_tecle: "KEY:",
jogo_codigo_enviado: "SENT CODE",
jogo_transmitir: "TRANSMIT",
jogo_enviar: "SEND",
jogo_espaco_letra: "Letter space",
jogo_espaco_palavra: "Word space",
jogo_limpar: "Clear",
jogo_reiniciar_nivel: "Restart level",
jogo_mapa_jogo: "Game map",
modo_livre_desc_pro: "Faster response for experienced operators.",
letra: "Letter",
palavra: "Word",
treino_auditivo_titulo: "Listening Practice",
melhor_aproveitamento: "Best Accuracy",
treinos_realizados: "Sessions Completed",
caracteres_isolados: "Single Characters",
caracteres_isolados_desc: "Letters, numbers and simple signals. Ideal for learning to recognize individual sounds.",
iniciar_treino: "Start Practice",
treino_auditivo_desc: "Listen to Morse Code, type what you receive and train your ear progressively.",

grupos_5: "Groups of 5",
grupos_5_desc: "Random sequences with five characters. Operational listening and memory training.",

frases_curtas: "Short Phrases",
frases_curtas_desc: "Operational and everyday messages for realistic training.",

sala_escuta: "LISTENING ROOM",
voltar_biblioteca: "Back to Library",

desafio: "Challenge",
escuta_livre: "Free Listening",
ouvir: "Listen",
mostrar_resposta: "Show answer",
digite_o_que_ouviu: "Type what you heard",
confirmar: "Confirm",
resposta: "Answer",
sem_observacao: "No note registered.",
erro_resposta_vazia: "Type an answer before confirming.",
correto: "Correct!",
incorreto: "Incorrect.",
resposta_correta_era: "The correct answer was",
voce_digitou: "You typed",

resultado_auditivo: "Listening Result",
treino_concluido: "Practice completed",
treino_concluido_msg: "You completed the listening challenge. Keep practicing to strengthen your ear.",
escuta_elite: "Elite Listening",
escuta_elite_msg: "Excellent performance. Your ear is already recognizing the signals with high precision.",
escuta_operacional: "Operational Listening",
escuta_operacional_msg: "Good performance. You can already operate safely in this category.",
escuta_formacao: "Listening in Training",
escuta_formacao_msg: "You completed the practice, but this category still needs reinforcement.",

categoria: "Category",
aproveitamento: "Accuracy",
acertos: "Correct",
pontos: "Points",
situacao_escuta: "Listening Status",
treino_auditivo_registrado: "Listening Practice Registered",
treino_auditivo_registrado_msg: "This result prepares the operator for advanced missions with audio-received messages.",
medalhas_distintivos: "Medals and Badges",
escuta_ativa: "Active Listening",
nenhuma_nova_medalha: "No new medal this round.",
refazer_desafio: "Retry challenge",
voltar_treino_auditivo: "Back to Listening Practice",

categoria_caracteres_isolados: "Single Characters",
categoria_grupos_5: "Groups of 5",
categoria_frases_curtas: "Short Phrases",
categoria_letras: "Letters",
categoria_numeros: "Numbers",
categoria_codigo_q: "Q Codes",
categoria_sinais: "Service Signals",
categoria_abreviacoes: "Abbreviations",
categoria_caracteres: "Special Characters",
categoria_palavras: "Common Words",
categoria_frases: "Operational Phrases",
categoria_mensagens: "Operational Messages",
categoria_misto: "Mixed Practice",

tipo_caractere_isolado: "Single Character",
tipo_grupo_5: "Group of 5",
tipo_frase_curta: "Short Phrase",
desc_caractere_isolado: "Listen and recognize the signal.",
desc_grupo_5: "Listen to the full group and type the five characters.",
desc_frase_curta: "Listen to the full phrase and type what you received.",
  }
  };
function t(chave) {
  return IDIOMAS[idiomaAtual]?.[chave] || IDIOMAS.pt[chave] || chave;
}

const inputSenhaSalaSecreta = document.getElementById("inputSenhaSalaSecreta");
const feedbackSenhaSalaSecreta = document.getElementById("feedbackSenhaSalaSecreta");
const btnValidarSenhaSalaSecreta = document.getElementById("btnValidarSenhaSalaSecreta");
const btnVoltarInicioSalaSecretaSenha = document.getElementById("btnVoltarInicioSalaSecretaSenha");

const fragmentosInterceptadosSalaSecreta = document.getElementById("fragmentosInterceptadosSalaSecreta");
const feedbackFragmentosSalaSecreta = document.getElementById("feedbackFragmentosSalaSecreta");
const btnValidarFragmentosSalaSecreta = document.getElementById("btnValidarFragmentosSalaSecreta");
const btnVoltarSenhaSalaSecreta = document.getElementById("btnVoltarSenhaSalaSecreta");
const btnVoltarInicioSalaSecretaFragmentos = document.getElementById("btnVoltarInicioSalaSecretaFragmentos");

const textoTransmissaoFinalSecreta = document.getElementById("textoTransmissaoFinalSecreta");
const codigoTransmissaoFinalSecreta = document.getElementById("codigoTransmissaoFinalSecreta");
const btnOuvirTransmissaoFinalSecreta = document.getElementById("btnOuvirTransmissaoFinalSecreta");
const btnSalaSecretaRanking = document.getElementById("btnSalaSecretaRanking");
const btnSalaSecretaInicio = document.getElementById("btnSalaSecretaInicio");

const btnEntrarCampanha = document.getElementById("btnEntrarCampanha");
const btnAbrirMissao = document.getElementById("btnAbrirMissao");
const btnVoltarInicioMissao = document.getElementById("btnVoltarInicioMissao");
const btnIniciarPelaMissao = document.getElementById("btnIniciarPelaMissao");
const btnAbrirBiblioteca = document.getElementById("btnAbrirBiblioteca");
const btnBibAlfabeto = document.getElementById("btnBibAlfabeto");
const btnBibNumeros = document.getElementById("btnBibNumeros");
const btnBibCodigoQ = document.getElementById("btnBibCodigoQ");
const btnBibSinaisServico = document.getElementById("btnBibSinaisServico");
const btnBibAbreviacoes = document.getElementById("btnBibAbreviacoes");
const btnBibCaracteresEspeciais = document.getElementById("btnBibCaracteresEspeciais");
const btnBibTreinoAuditivo = document.getElementById("btnBibTreinoAuditivo");
const btnAbrirRanking = document.getElementById("btnAbrirRanking");
const btnAbrirManipulador = document.getElementById("btnAbrirManipulador");
const btnVoltarInicioCampanha = document.getElementById("btnVoltarInicioCampanha");
const btnContinuarNivel = document.getElementById("btnContinuarNivel");

const btnMorse = document.getElementById("btnMorse");
const btnLimpar = document.getElementById("btnLimpar");
const btnEnviar = document.getElementById("btnEnviar");
const btnEspacoLetra = document.getElementById("btnEspacoLetra");
const btnEspacoPalavra = document.getElementById("btnEspacoPalavra");
const btnReiniciar = document.getElementById("btnReiniciar");
const btnVoltarCampanha = document.getElementById("btnVoltarCampanha");

const btnJogarNovamente = document.getElementById("btnJogarNovamente");
const btnProximoNivel = document.getElementById("btnProximoNivel");
const btnMapaResultado = document.getElementById("btnMapaResultado");
const btnRankingFinal = document.getElementById("btnRankingFinal");

const fimJogoOperador = document.getElementById("fimJogoOperador");
const fimJogoPatente = document.getElementById("fimJogoPatente");
const fimJogoPontos = document.getElementById("fimJogoPontos");
const fimJogoWpm = document.getElementById("fimJogoWpm");
const textoFimJogoResumo = document.getElementById("textoFimJogoResumo");

const btnFimJogoRanking = document.getElementById("btnFimJogoRanking");
const btnFimJogoMapa = document.getElementById("btnFimJogoMapa");
const btnFimJogoInicio = document.getElementById("btnFimJogoInicio");
const btnFimJogoSalaSecreta = document.getElementById("btnFimJogoSalaSecreta");

const transicaoFaseBadge = document.getElementById("transicaoFaseBadge");
const transicaoFaseTitulo = document.getElementById("transicaoFaseTitulo");
const transicaoFaseSubtitulo = document.getElementById("transicaoFaseSubtitulo");
const transicaoFaseTexto = document.getElementById("transicaoFaseTexto");

const transicaoLinha1 = document.getElementById("transicaoLinha1");
const transicaoLinha2 = document.getElementById("transicaoLinha2");
const transicaoLinha3 = document.getElementById("transicaoLinha3");

const transicaoOperador = document.getElementById("transicaoOperador");
const transicaoPatente = document.getElementById("transicaoPatente");
const transicaoAproveitamento = document.getElementById("transicaoAproveitamento");
const transicaoPontos = document.getElementById("transicaoPontos");

const btnTransicaoContinuar = document.getElementById("btnTransicaoContinuar");
const btnTransicaoMapa = document.getElementById("btnTransicaoMapa");
const btnTransicaoInicio = document.getElementById("btnTransicaoInicio");

let resultadoTransicaoFaseAtual = null;
let temporizadorFinalAutomatico = null;
let temporizadorEfeitoFimJogo = null;
let btnEnviarParentOriginal = null;
let btnEnviarNextOriginal = null;
const btnAbrirRelatorioOperador = document.getElementById("btnAbrirRelatorioOperador");
const btnVoltarCampanhaRanking = document.getElementById("btnVoltarCampanhaRanking");
const btnVoltarInicio = document.getElementById("btnVoltarInicio");
const btnLimparRanking = document.getElementById("btnLimparRanking");

const relatorioOperadorConteudo = document.getElementById("relatorioOperadorConteudo");
const btnVoltarRankingRelatorio = document.getElementById("btnVoltarRankingRelatorio");
const btnInicioRelatorioOperador = document.getElementById("btnInicioRelatorioOperador");

const telaRegrasFAQ = document.getElementById("telaRegrasFAQ");
const btnAbrirRegrasFAQ = document.getElementById("btnAbrirRegrasFAQ");
const btnVoltarInicioRegrasFAQ = document.getElementById("btnVoltarInicioRegrasFAQ");

const textoMissao = document.getElementById("textoMissao");
const codigoDigitado = document.getElementById("codigoDigitado");
const feedback = document.getElementById("feedback");
const pontuacaoEl = document.getElementById("pontuacao");
const contadorMissaoEl = document.getElementById("contadorMissao");
const acertosEl = document.getElementById("acertos");
const nomeOperadorEl = document.getElementById("nomeOperador");
const faseAtualEl = document.getElementById("faseAtual");
const dicaMissaoEl = document.getElementById("dicaMissao");
const badgeNivel = document.getElementById("badgeNivel");
const badgePatente = document.getElementById("badgePatente");
const timerMissaoEl = document.getElementById("timerMissao");

const resultadoBadge = document.getElementById("resultadoBadge");
const tituloResultado = document.getElementById("tituloResultado");
const resultadoFinal = document.getElementById("resultadoFinal");
const resultadoAproveitamento = document.getElementById("resultadoAproveitamento");
const resultadoTempo = document.getElementById("resultadoTempo");
const resultadoWpm = document.getElementById("resultadoWpm");
const resultadoPontos = document.getElementById("resultadoPontos");

const listaRanking = document.getElementById("listaRanking");
const gridBibliotecaMorse = document.getElementById("gridBibliotecaMorse");
const menuBiblioteca = document.querySelector(".menu-biblioteca");
const tituloBiblioteca = document.getElementById("tituloBiblioteca");
const descricaoBiblioteca = document.getElementById("descricaoBiblioteca");
const btnVoltarMenuBiblioteca = document.getElementById("btnVoltarMenuBiblioteca");
const btnVoltarCodigoQ = document.getElementById("btnVoltarCodigoQ");
const btnVoltarInicioBiblioteca = document.getElementById("btnVoltarInicioBiblioteca");
const gridNiveis = document.getElementById("gridNiveis");
const statusIniciante = document.getElementById("statusIniciante");
const labelModoAtual = document.getElementById("labelModoAtual");
const tituloLicao = document.getElementById("tituloLicao");
const descricaoLicao = document.getElementById("descricaoLicao");
const gridCartoesLicao = document.getElementById("gridCartoesLicao");
const btnIniciarTreinoLicao = document.getElementById("btnIniciarTreinoLicao");
const btnVoltarMapaLicao = document.getElementById("btnVoltarMapaLicao");

const cardModoIniciante = document.getElementById("cardModoIniciante");
const cardModoIntermediario = document.getElementById("cardModoIntermediario");
const cardModoAvancado = document.getElementById("cardModoAvancado");

const painelRitmo = document.getElementById("painelRitmo");
const cardProgresso = document.querySelector(".card.progresso");
const valorWpm = document.getElementById("valorWpm");
const valorPausaLetra = document.getElementById("valorPausaLetra");
const valorPausaPalavra = document.getElementById("valorPausaPalavra");
const botoesWpm = document.querySelectorAll(".btn-wpm");
const botoesTomLicao = document.querySelectorAll(".btnTom");
const botoesWpmLicao = document.querySelectorAll(".btnWpm");

const btnMenosLetra = document.getElementById("btnMenosLetra");
const btnMaisLetra = document.getElementById("btnMaisLetra");
const btnMenosPalavra = document.getElementById("btnMenosPalavra");
const btnMaisPalavra = document.getElementById("btnMaisPalavra");
const btnMorseManipulador = document.getElementById("btnMorseManipulador");
const btnEspacoLetraManipulador = document.getElementById("btnEspacoLetraManipulador");
const btnEspacoPalavraManipulador = document.getElementById("btnEspacoPalavraManipulador");
const btnLimparManipulador = document.getElementById("btnLimparManipulador");
const btnVoltarInicioManipulador = document.getElementById("btnVoltarInicioManipulador");

const btnManipuladorIniciante = document.getElementById("btnManipuladorIniciante");
const btnManipuladorPro = document.getElementById("btnManipuladorPro");
const statusModoManipulador = document.getElementById("statusModoManipulador");

const codigoManipulador = document.getElementById("codigoManipulador");
const textoManipulador = document.getElementById("textoManipulador");
const feedbackManipulador = document.getElementById("feedbackManipulador");
const TABELA_MORSE = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..",
  0: "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-",
  5: ".....", 6: "-....", 7: "--...", 8: "---..", 9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "/": "-..-.",
  "=": "-...-",
  "+": ".-.-.",
  "@": ".--.-."
};
;

const SALA_SECRETA_SENHA = "JESUS";
const SALA_SECRETA_CHAVE_CORRETA = ["DISCI", "PLINA", "EFOCO", "SUPER", "AMLIM", "ITES@"];
const SALA_SECRETA_FRAGMENTOS_EMBARALHADOS = ["SUPER", "DISCI", "ITES@", "EFOCO", "AMLIM", "PLINA"];

const SALA_SECRETA_PONTOS_CAMPANHA = [
  { modo: "Iniciante", nivel: 1, fragmento: "SUPER" },
  { modo: "Iniciante", nivel: 20, fragmento: "DISCI" },
  { modo: "Intermediário", nivel: 1, fragmento: "ITES@" },
  { modo: "Intermediário", nivel: 20, fragmento: "EFOCO" },
  { modo: "Avançado", nivel: 1, fragmento: "AMLIM" },
  { modo: "Avançado", nivel: 12, fragmento: "PLINA" }
];

const SALA_SECRETA_MENSAGEM_FINAL =
  "PARABENS. VOCE DEMONSTROU PERSISTENCIA FOCO CORAGEM E INTELIGENCIA. BEM VINDO AO SELETO GRUPO DE TELEGRAFISTAS DO EDS MORSE.";

let contadorToquesLogoSalaSecreta = 0;
let temporizadorToquesLogoSalaSecreta = null;

function textoParaMorse(texto) {
  return texto
    .toUpperCase()
    .split("")
    .map((caractere) => {
      if (caractere === " ") return "/";
      return TABELA_MORSE[caractere] || "";
    })
    .filter(Boolean)
    .join(" ");
}

const DICAS_FONICAS = {
  A: "mi DÁ",
  B: "GOL di bi bi",
  C: "BÁ ti BÁ ti",
  D: "GOL di di",
  E: "bi",
  F: "fi ti PAL di",
  G: "PAI DÉ gua",
  H: "pi pi pi pi",
  I: "pi pi",
  J: "vem CÁ JO SÉ",
  K: "DÁ ki DÁ",
  L: "mi DÁ li li",
  M: "MA RÉ",
  N: "NÁ ri",
  O: "TO RO RÓ",
  P: "si NAL VER di",
  Q: "QUEM VEM di LÁ",
  R: "ci DA di",
  S: "si ri ri",
  T: "TÁ",
  U: "u ru BU",
  V: "ma ra ca NÃ",
  W: "ci LA DA",
  X: "LEI tí com CHÁ",
  Y: "GOL di VA VA",
  Z: "ZÁ ZÁ li li",

  1: "vem CA JO SA FÁ",
  2: "ca pi TÃO GAL VÃO",
  3: "co pa ca BA NA",
  4: "pe ga pa ca PA",
  5: "pe ga pa ca pi",
  6: "GOL si ri pi pi",
  7: "SAU DA di di ti",
  8: "VAL DE MAR di di",
  9: "VAL DE MAR NA ri",
  0: "VAL DE MAR MA RE"
};
const DICAS_FONICAS_EN = {
  A: "a-PU",
  B: "BOB is the man",
  C: "CO-ca CO-la",
  D: "DAD did it",
  E: "eh!",
  F: "did i FAIL it?",
  G: "GOOD GRAV-y",
  H: "ha ha ha ha",
  I: "did it",
  J: "let's JUMP, JUMP, JUMP",
  K: "KICK the CAN",
  L: "a LIGHT is lit",
  M: "MA-MA",
  N: "NAME it",
  O: "OH MY GOD",
  P: "is PA-PA in?",
  Q: "GOD SAVE the QUEEN",
  R: "a RABB-it",
  S: "ss-ss-ss",
  T: "TALL",
  U: "u-ni-FORM",
  V: "vee-vee-vee VAH",
  W: "the WORLD WAR",
  X: "X marks the SPOT",
  Y: "YELL-ow YO-YO",
  Z: "ZSA ZSA did it"
};
function getDicaFonico(alvo) {
  const texto = String(alvo).toUpperCase();

  if (/^[A-Z]$/.test(texto)) {
    if (idiomaAtual === "en") {
      return DICAS_FONICAS_EN[texto] || "";
    }

    return DICAS_FONICAS[texto] || "Dica em cadastro";
  }

  if (/^[0-9]$/.test(texto)) {
    if (idiomaAtual === "en") {
      return "";
    }

    return DICAS_FONICAS[texto] || "Dica em cadastro";
  }

  return idiomaAtual === "en"
    ? "Transmit with the correct rhythm, respecting natural pauses."
    : "Transmita no ritmo correto, usando as pausas naturais.";
}
function gerarHtmlMorseVisual(codigoMorse) {
  const codigo = String(codigoMorse || "").trim();

  if (!codigo) {
    return `<span class="simbolo-morse texto-morse-vazio">—</span>`;
  }

  return codigo
    .split("")
    .map((simbolo) => {
      if (simbolo === ".") {
        return `<span class="simbolo-morse ponto-morse" aria-label="ponto"></span>`;
      }

      if (simbolo === "-") {
        return `<span class="simbolo-morse traco-morse" aria-label="traço"></span>`;
      }

      if (simbolo === "/") {
        return `<span class="simbolo-morse separador-palavra-morse">/</span>`;
      }

      if (simbolo === " ") {
        return `<span class="espaco-morse-visual"></span>`;
      }

      return `<span class="simbolo-morse texto-morse-vazio">${escaparHtml(simbolo)}</span>`;
    })
    .join("");
}
function gerarHtmlMorseVisualAgrupadoPorLetra(codigoMorse) {
  const codigo = normalizarCodigo(codigoMorse);

  if (!codigo) {
    return `<span class="simbolo-morse texto-morse-vazio">—</span>`;
  }

  return codigo
    .split(" ")
    .map((parte) => {
      if (parte === "/") {
        return `<span class="separador-palavra-morse separador-palavra-grande">/</span>`;
      }

      const simbolosDaLetra = parte
        .split("")
        .map((simbolo) => {
          if (simbolo === ".") {
            return `<span class="simbolo-morse ponto-morse" aria-label="ponto"></span>`;
          }

          if (simbolo === "-") {
            return `<span class="simbolo-morse traco-morse" aria-label="traço"></span>`;
          }

          return "";
        })
        .join("");

      return `
        <span class="morse-letra-grupo">
          ${simbolosDaLetra}
        </span>
      `;
    })
    .join("");
}
function nivelIntermediarioCodigoParaTexto(nivel = getNivelAtual()) {
  return (
    modoAtual === MODO_INTERMEDIARIO &&
    nivel &&
    nivel.tipoMissao === "intermediario_codigo_texto"
  );
}

function missaoUsaCodigoComoAlvo(nivel = getNivelAtual()) {
  return (
    (
      modoAtual === MODO_INICIANTE &&
      nivel &&
      Number(nivel.numero) >= 18
    ) ||
    nivelIntermediarioCodigoParaTexto(nivel)
  );
}
function renderizarGuiaMorseMissao(missao, dicaFonico, nivel = null) {
  const alvo = String(missao?.alvo || "").toUpperCase();
  const codigo = String(missao?.codigo || "").trim();

  const ehCaractereUnico = /^[A-Z0-9]$/.test(alvo);

  const usarCodigoComoAlvo = missaoUsaCodigoComoAlvo(nivel);
  const faseCodigoParaTexto = nivelIntermediarioCodigoParaTexto(nivel);
  if (modoAtual === MODO_AVANCADO) {
    dicaMissaoEl.innerHTML = `
      <div class="morse-dica-operacional">
        Transmita no ritmo correto, respeitando pausas entre letras e palavras.
      </div>
    `;

    return;
  }

  if (faseCodigoParaTexto) {
    dicaMissaoEl.innerHTML = `
      <div class="morse-label-discreta">Tradução em português</div>

      <div class="morse-dica-operacional">
        A tradução aparecerá no painel abaixo conforme você transmitir o código.
      </div>
    `;

    return;
  }

  if (ehCaractereUnico) {
    dicaMissaoEl.innerHTML = `
    <div class="morse-simbolos-grandes morse-frase-simbolos">
    ${gerarHtmlMorseVisualAgrupadoPorLetra(codigo)}
  </div>

      <div class="morse-dica-fonica">
        ${escaparHtml(dicaFonico)}
      </div>
    `;

    return;
  }

  if (usarCodigoComoAlvo) {
    dicaMissaoEl.innerHTML = `
      <div class="morse-label-discreta">Código Morse</div>
  
      <div class="morse-simbolos-grandes morse-frase-simbolos">
        ${gerarHtmlMorseVisualAgrupadoPorLetra(codigo)}
      </div>
    `;
  
    return;
  }

  dicaMissaoEl.innerHTML = `
    <div class="morse-label-discreta">Código Morse</div>

    <div class="morse-linha-texto">
      ${escaparHtml(codigo)}
    </div>

    <div class="morse-dica-operacional">
      Transmita no ritmo correto, respeitando pausas entre letras e palavras.
    </div>
  `;
}
const MODO_INICIANTE = "iniciante";
const CONQUISTAS = {
  primeiro_sinal: {
    nome: "📡 Primeiro Sinal",
    descricao: "Envie sua primeira transmissão após o colapso."
  },

  transmissao_limpa: {
    nome: "🎯 Transmissão Limpa",
    descricao: "Conclua uma missão com 100%."
  },

  sinal_rapido: {
    nome: "⚡ Sinal Rápido",
    descricao: "Conclua uma missão em menos de 60 segundos."
  },

  escuta_ativa: {
    nome: "🎧 Escuta Ativa",
    descricao: "Conclua um desafio auditivo."
  },

  operador_escuta: {
    nome: "🎖️ Operador de Escuta",
    descricao: "Conclua a Escuta Operacional."
  },

  canal_estavel: {
    nome: "🔥 Canal Estável",
    descricao: "Alcance 10 acertos consecutivos."
  },

  operador_12wpm: {
    nome: "📻 Operador 12 WPM",
    descricao: "Alcance a meta operacional de 12 WPM."
  },

  rede_restabelecida: {
    nome: "🚨 Rede Restabelecida",
    descricao: "Conclua o modo Iniciante."
  }
};

function getChaveConquistas() {
  return `operadorMorseConquistas_${getChaveOperador()}`;
}

function obterConquistasDesbloqueadas() {
  try {
    return JSON.parse(localStorage.getItem(getChaveConquistas())) || [];
  } catch (erro) {
    return [];
  }
}

function salvarConquistasDesbloqueadas(lista) {
  localStorage.setItem(getChaveConquistas(), JSON.stringify(lista));
}

function desbloquearConquista(idConquista) {
  if (!CONQUISTAS[idConquista]) return false;

  const conquistas = obterConquistasDesbloqueadas();

  if (conquistas.includes(idConquista)) {
    return false;
  }

  conquistas.push(idConquista);
  salvarConquistasDesbloqueadas(conquistas);

  // mostrarAvisoConquista(idConquista);

  return true;
}

let filaAvisosConquista = [];
let exibindoAvisoConquista = false;

function mostrarAvisoConquista(idConquista) {
  const conquista = CONQUISTAS[idConquista];
  if (!conquista) return;

  filaAvisosConquista.push(conquista);
  processarFilaAvisosConquista();
}

function processarFilaAvisosConquista() {
  if (exibindoAvisoConquista || !filaAvisosConquista.length) return;

  exibindoAvisoConquista = true;
  const conquista = filaAvisosConquista.shift();

  const aviso = document.createElement("div");
  aviso.className = "aviso-conquista";
  aviso.innerHTML = `
    <span>Conquista desbloqueada</span>
    <strong>${escaparHtml(conquista.nome)}</strong>
    <small>${escaparHtml(conquista.descricao)}</small>
  `;

  document.body.appendChild(aviso);

  setTimeout(() => {
    aviso.classList.add("visivel");
  }, 50);

  setTimeout(() => {
    aviso.classList.remove("visivel");

    setTimeout(() => {
      aviso.remove();
      exibindoAvisoConquista = false;
      processarFilaAvisosConquista();
    }, 400);
  }, 3000);
}

function mostrarAvisoRapido(titulo, texto) {
  const avisoAntigo = document.querySelector(".aviso-rapido");
  if (avisoAntigo) avisoAntigo.remove();

  const aviso = document.createElement("div");
  aviso.className = "aviso-rapido";
  aviso.innerHTML = `
    <strong>${escaparHtml(titulo)}</strong>
    <small>${escaparHtml(texto)}</small>
  `;

  document.body.appendChild(aviso);

  setTimeout(() => {
    aviso.classList.add("visivel");
  }, 50);

  setTimeout(() => {
    aviso.classList.remove("visivel");
    setTimeout(() => aviso.remove(), 350);
  }, 3100);
}

const MODO_INTERMEDIARIO = "intermediario";
const MODO_AVANCADO = "avancado";

function gerarGruposAvancados(qtd = 200, tamanho = 5) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const grupos = [];

  while (grupos.length < qtd) {
    let grupo = "";

    for (let i = 0; i < tamanho; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      grupo += caracteres[indice];
    }

    if (!grupos.includes(grupo)) {
      grupos.push(grupo);
    }
  }

  return grupos;
}

const BANCO_GRUPOS_AVANCADOS = gerarGruposAvancados(200, 5);
const MENSAGENS_ESCUTA_AVANCADA = [
  "QTC UU",
  "GOOD NEWS",
  "WE ARE SAVED",
  "COMMUNICATIONS ON",
  "HELP IS COMING",
  "THANK YOU",
  "THANK GOD",
  "SEE YOU SOON"
];

const BANCO_GRUPOS_ESCUTA_AVANCADA = [
  "QTCUU",
  "GOODN",
  "EWSWE",
  "ARESA",
  "VEDCO",
  "MMUNI",
  "CATIO",
  "NSONH",
  "HELPI",
  "SCOMI",
  "NGTHA",
  "NKYOU",
  "THANK",
  "GODSE",
  "EYOUU",
  "SOONO"
];
const NIVEIS_AVANCADO = [
  {
    numero: 1,
    patente: "Operador Avançado I",
    titulo: "Missão Avançada 01 – Grupos de 5",
    descricao: "Transmita grupos aleatórios de cinco letras e números usando manipulação natural.",
    missoes: BANCO_GRUPOS_AVANCADOS.slice(0, 10)
  },
  {
    numero: 2,
    patente: "Operador Avançado II",
    titulo: "Missão Avançada 02 – Grupos Alfanuméricos",
    descricao: "Transmita grupos mistos com letras e números. A precisão começa a pesar mais.",
    missoes: [
      "A7K2M",
      "Q9TR4",
      "B5Z1P",
      "M8D3X",
      "C4L9N",
      "R2V6Q",
      "T7H1S",
      "K3P8W",
      "Z5N2A",
      "G9F4J"
    ]
  },
  {
    numero: 3,
    patente: "Operador de Chamada",
    titulo: "Missão Avançada 03 – Indicativos de Estação",
    descricao: "Simule chamadas de rádio com indicativos operacionais.",
    missoes: [
      "PY1ABC",
      "PT2EDS",
      "ZZ9MOR",
      "K7RAD",
      "BR4QSL",
      "PX3NET",
      "PY2QTC",
      "PT9QRV",
      "RA1MOR",
      "TX5EDS"
    ]
  },
  {
    numero: 4,
    patente: "Operador Código Q",
    titulo: "Missão Avançada 04 – Código Q Operacional",
    descricao: "Use códigos Q em sequência, como em uma operação real de rádio.",
    missoes: [
      "QSL",
      "QRV",
      "QTH",
      "QRM",
      "QRN",
      "QTC",
      "QRA",
      "QRT",
      "QRX",
      "QSY"
    ]
  },
  {
    numero: 5,
    patente: "Operador de Tráfego",
    titulo: "Missão Avançada 05 – Mensagens Curtas",
    descricao: "Transmita mensagens curtas com pausas entre palavras.",
    missoes: [
      "BASE QRV",
      "QSL RECEBIDO",
      "SINAL FORTE",
      "POSTO 2 OK",
      "RADIO QRV",
      "QTC BASE",
      "TORRE QSL",
      "POSTO QRV",
      "CANAL LIVRE",
      "CAMBIO"
    ]
  },
  {
    numero: 6,
    patente: "Operador sob Pressão",
    titulo: "Missão Avançada 06 – Tráfego com Números",
    descricao: "Mensagens operacionais com números de posto, rota, base e confirmação.",
    missoes: [
      "BASE 1 QRV",
      "POSTO 2 QSL",
      "ROTA 3 OK",
      "TORRE 4 QRV",
      "QTC 5 BASE",
      "RADIO 7 QSL",
      "SINAL 9 FORTE",
      "POSTO 8 OK",
      "BASE 6 CAMBIO",
      "QRV SETOR 2"
    ]
  },
  {
    numero: 7,
    patente: "Operador de Emergência",
    titulo: "Missão Avançada 07 – Mensagens de Emergência",
    descricao: "Transmita mensagens críticas. Erros reduzem a eficiência da rede.",
    missoes: [
      "SOS APOIO",
      "QTC URGENTE",
      "BASE EM ALERTA",
      "POSTO SEM SINAL",
      "ROTA BLOQUEADA",
      "EQUIPE QRV",
      "RADIO FALHA",
      "SINAL FRACO",
      "APOIO A CAMINHO",
      "MANTER ESCUTA"
    ]
  },
  {
    numero: 8,
    patente: "Operador de Rede",
    titulo: "Missão Avançada 08 – Coordenação de Rede",
    descricao: "Coordene postos e estações com mensagens mais longas.",
    missoes: [
      "BASE ALFA QRV",
      "POSTO BRAVO QSL",
      "TORRE CHARLIE OK",
      "EQUIPE DELTA QRV",
      "QTC BASE ALFA",
      "ROTA SEGURA 3",
      "CANAL LIVRE QSL",
      "SINAL FORTE 9",
      "OPERADOR AGUARDE",
      "TRANSMISSAO OK"
    ]
  },
  {
    numero: 9,
    patente: "Comandante de Estação",
    titulo: "Missão Avançada 09 – Mensagens Operacionais",
    descricao: "Transmita mensagens completas mantendo ritmo, precisão e controle das pausas.",
    missoes: [
      "QTC BASE SINAL FORTE",
      "OPERADOR QRV POSTO 3",
      "ROTA SEGURA CONFIRMADA",
      "BASE ALFA AGUARDE",
      "POSTO BRAVO SEM SINAL",
      "RADIO BASE QSL 9",
      "EQUIPE DELTA EM ROTA",
      "CANAL LIVRE PARA QTC",
      "TRANSMISSAO FINALIZADA",
      "REDE OPERACIONAL"
    ]
  },
  {
    numero: 10,
    patente: "Operador de Estação",
    titulo: "Missão Avançada 10 – Prova de Estação",
    descricao: "Prova avançada. Mistura grupos, códigos Q, números, indicativos e mensagens completas.",
    missoes: [
      "PY2EDS QRV",
      "QTC BASE ALFA 7",
      "K7RAD QSL",
      "A7K2M",
      "POSTO 3 SINAL FORTE",
      "QRV PARA TRANSMITIR",
      "ROTA 5 CONFIRMADA",
      "BASE QSL RECEBIDO",
      "TX5EDS QTC URGENTE",
      "REDE OPERACIONAL"
    ]
  },
  {
    numero: 11,
    patente: "Copista de Grupos",
    titulo: "Missão Avançada 11 – Escuta de Grupos de 5",
    descricao: "Ouça grupos de cinco letras formados a partir das mensagens finais e digite exatamente o que recebeu.",
    tipoMissao: "recepcao",
    missoes: BANCO_GRUPOS_ESCUTA_AVANCADA.slice(0, 10)
  },
  {
    numero: 12,
    patente: "Operador de Escuta Avançada",
    titulo: "Missão Avançada 12 – Escuta de Mensagens Simples",
    descricao: "Ouça mensagens simples em Morse e digite a mensagem recebida.",
    tipoMissao: "recepcao",
    missoes: MENSAGENS_ESCUTA_AVANCADA
  }
];

const MENSAGENS_NARRATIVAS_AVANCADO = {
  1: {
    titulo: "📡 Canal avançado estabelecido",
    texto: "A Rede ADR entrou em operação avançada. Grupos de cinco caracteres serão usados para autenticação, rotas e mensagens críticas."
  },
  2: {
    titulo: "🔢 Tráfego alfanumérico iniciado",
    texto: "A rede passou a usar grupos mistos com letras e números. A precisão agora define a confiabilidade do operador."
  },
  3: {
    titulo: "📻 Indicativos reconhecidos",
    texto: "As estações começaram a se identificar. Você já consegue transmitir chamadas operacionais com mais segurança."
  },
  4: {
    titulo: "📡 Código Q em operação",
    texto: "A comunicação ficou mais rápida. Os códigos Q permitem transmitir informações importantes com poucas letras."
  },
  5: {
    titulo: "✉️ Mensagens curtas transmitidas",
    texto: "Você já consegue enviar mensagens operacionais curtas mantendo pausas corretas entre palavras."
  },
  6: {
    titulo: "🔐 Tráfego numerado confirmado",
    texto: "Postos, rotas e bases começaram a usar identificação numérica. A rede depende da sua atenção aos detalhes."
  },
  7: {
    titulo: "🚨 Emergência controlada",
    texto: "Mensagens críticas foram transmitidas sob pressão. O operador avançado precisa manter calma, ritmo e precisão."
  },
  8: {
    titulo: "🌐 Rede coordenada",
    texto: "As estações passaram a operar em conjunto. Sua transmissão ajudou a coordenar postos, equipes e canais."
  },
  9: {
    titulo: "🎯 Tráfego operacional completo",
    texto: "Você transmitiu mensagens maiores com controle de ritmo, pausas e clareza. A rede já pode confiar no seu sinal."
  },
  10: {
    titulo: "🏆 Prova de estação concluída",
    texto: "Você concluiu a prova avançada. A Rede ADR reconhece sua capacidade como Operador de Estação."
  },
  11: {
    titulo: "🎧 Grupos copiados com sucesso",
    texto: "Você passou da transmissão para a recepção. Copiar grupos de cinco letras exige ouvido firme, memória curta e atenção total."
  },
  12: {
    titulo: "📡 Escuta avançada concluída",
    texto: "Você recebeu mensagens simples em Morse e registrou o conteúdo corretamente. A Rede ADR reconhece sua capacidade de escuta operacional."
  }
};

const APROVEITAMENTO_MINIMO = 80;
const APROVEITAMENTO_BONUS = 90;
const META_WPM = 12;

const PATENTE_FINAL_INICIANTE = "Mestre Morse";
const PATENTE_FINAL_INTERMEDIARIO = "Operador Intermediário";
const PATENTE_FINAL_AVANCADO = "Operador de Escuta Avançada";

let frequenciaSidetone = Number(localStorage.getItem("operadorMorseTomHz") || "800");

// Força um tom mais claro no PWA, evitando ficar preso em tom grave salvo anteriormente.
if (!frequenciaSidetone || frequenciaSidetone < 700) {
  frequenciaSidetone = 800;
  localStorage.setItem("operadorMorseTomHz", String(frequenciaSidetone));
}

const VOLUME_MORSE = 0.22;

let wpmAtual = Number(localStorage.getItem("operadorMorseWpm") || "12");

let unidadeMorseMs = 1200 / wpmAtual;
let pausaAutoLetraMs = Math.round(unidadeMorseMs * 3);
let pausaAutoPalavraMs = Math.round(unidadeMorseMs * 7);
let limitePontoTracoMs = unidadeMorseMs * 2;

const NIVEIS_INICIANTE = [
  {
    numero: 1,
    patente: "Noob",
    titulo: "Missão 01 – Primeiro Contato",
    descricao: "Você ainda é um Noob. Após o colapso das comunicações, encontrou um rádio funcional. Aprenda os primeiros sinais.",
    missoes: ["F", "G", "H", "J", "M", "R", "U"]
  },
  {
    numero: 2,
    patente: "Novato",
    titulo: "Missão 02 – Canal Seguro",
    descricao: "Agora você é um Novato. Uma frequência segura foi encontrada e precisa ser explorada.",
    missoes: ["B", "D", "K", "N", "T", "V", "Y"]
  },
  {
    numero: 3,
    patente: "Aprendiz",
    titulo: "Missão 03 – Rede de Emergência",
    descricao: "Outros sobreviventes começaram a responder. Amplie sua capacidade de comunicação.",
    missoes: ["C", "E", "I", "L", "S", "W", "O"]
  },
  {
    numero: 4,
    patente: "Explorador",
    titulo: "Missão 04 – Mensagem Prioritária",
    descricao: "As primeiras mensagens importantes estão chegando. Um erro pode custar caro.",
    missoes: ["A", "P", "Q", "X", "Z", "4", "5"]
  },
  {
    numero: 5,
    patente: "Conectado",
    titulo: "Missão 05 – Último Sinal",
    descricao: "Os números são essenciais para coordenadas e horários. Domine-os para permanecer conectado.",
    missoes: ["1", "2", "3", "6", "7", "8", "9", "0"]
  },
  {
    numero: 6,
    patente: "Decodificador",
    titulo: "Missão 06 – Teste de Operador",
    descricao: "Hora de provar que você consegue reconhecer e transmitir os sinais aprendidos.",
    missoes: ["F", "B", "C", "A", "J", "K", "O", "X"]
  },
  {
    numero: 7,
    patente: "Operador Júnior",
    titulo: "Missão 07 – Teste Numérico",
    descricao: "As transmissões agora incluem números operacionais. A precisão é fundamental.",
    missoes: ["1", "5", "9", "0", "2", "6", "8", "3"]
  },
  {
    numero: 8,
    patente: "Caçador de Sinais",
    titulo: "Missão 08 – Grupos Táticos I",
    descricao: "Os sinais estão ficando mais complexos. Identifique padrões rapidamente.",
    missoes: ["FGH", "JMR", "BDK", "NTV", "CEI"]
  },
  {
    numero: 9,
    patente: "Hacker do Rádio",
    titulo: "Missão 09 – Grupos Táticos II",
    descricao: "Grandes blocos de sinais exigem memória, atenção e velocidade.",
    missoes: ["LWS", "APQ", "XYZ", "MOR", "RUT"]
  },
  {
    numero: 10,
    patente: "Técnico de Rede",
    titulo: "Missão 10 – Canal Criptografado",
    descricao: "Misture letras e números para manter a rede segura e organizada.",
    missoes: ["A1", "B2", "C3", "D4", "E5", "F6"]
  },
  {
    numero: 11,
    patente: "Operador de Emergência",
    titulo: "Missão 11 – Protocolos de Rádio",
    descricao: "Aprenda os códigos utilizados pelos operadores para agilizar a comunicação.",
    missoes: ["QRA", "QTH", "QSL", "QTC", "QRV", "QRM"]
  },
  {
    numero: 12,
    patente: "Mensageiro",
    titulo: "Missão 12 – Mensagens Curtas",
    descricao: "Chegou a hora de transmitir palavras completas para outros operadores.",
    missoes: ["SOS", "RIO", "MAR", "SOL", "REDE", "SINAL"]
  },
  {
    numero: 13,
    patente: "Especialista",
    titulo: "Missão 13 – Rede Regional",
    descricao: "As mensagens estão ficando maiores. Mantenha o ritmo e a precisão.",
    missoes: ["MORSE", "RADIO", "TORRE", "POSTO", "BASE", "FOCO"]
  },
  {
    numero: 14,
    patente: "Pro",
    titulo: "Missão 14 – Centro de Comunicações",
    descricao: "Você já opera uma estação importante da rede de sobreviventes.",
    missoes: ["MISSAO", "COMANDO", "ANTENA", "ESTACAO", "OPERADOR"]
  },
  {
    numero: 15,
    patente: "Elite",
    titulo: "Missão 15 – Tráfego Prioritário",
    descricao: "Mensagens urgentes estão circulando. Não há espaço para distrações.",
    missoes: ["QSL OK", "BASE QRV", "SINAL OK", "RADIO 1", "POSTO 2"]
  },
  {
    numero: 16,
    patente: "Mestre dos Sinais",
    titulo: "Missão 16 – Operação Coordenada",
    descricao: "Coordene informações usando palavras e números com fluidez.",
    missoes: ["BASE 1", "POSTO 2", "TORRE 3", "QTC 5", "RADIO 9"]
  },
  {
    numero: 17,
    patente: "Guardião da Rede",
    titulo: "Missão 17 – Posto Avançado",
    descricao: "A rede depende da sua habilidade para manter os postos conectados.",
    missoes: ["QTC BASE", "QSL RADIO", "QRV POSTO", "SINAL FORTE", "BASE QRV"]
  },
  {
    numero: 18,
    patente: "Lenda Digital",
    titulo: "Missão 18 – Rede Nacional",
    descricao: "As transmissões atravessam longas distâncias. A margem para erro desapareceu.",
    missoes: ["RADIO BASE 1", "POSTO QRV 2", "QTC SINAL 3", "BASE QSL 4", "TORRE QRV 5"]
  },
  {
    numero: 19,
    patente: "Herói do Sinal",
    titulo: "Missão 19 – Operador Estratégico",
    descricao: "Mensagens extensas exigem foco total. Sua concentração será testada.",
    missoes: ["OPERADOR MORSE", "RADIO BASE QRV", "QTC SINAL FORTE", "POSTO QSL 123"]
  },
  {
    numero: 20,
    patente: "Mestre Morse",
    titulo: "Missão 20 – O Último Sinal",
    descricao: "A sobrevivência da rede depende de você. Prove que domina o código Morse.",
    missoes: ["OPERADOR MORSE QRV", "QTC BASE SINAL 12", "RADIO POSTO QSL 9", "TRANSMISSAO OK 5"]
  }
];
const NIVEIS_INICIANTE_EN = [
  {
    numero: 1,
    patente: "Noob",
    titulo: "Mission 01 – First Contact",
    descricao: "You are still a Noob. After the communications collapse, you found a working radio. Learn the first signals.",
    missoes: ["F", "G", "H", "J", "M", "R", "U"]
  },
  {
    numero: 2,
    patente: "Rookie",
    titulo: "Mission 02 – Safe Channel",
    descricao: "Now you are a Rookie. A safe frequency has been found and needs to be explored.",
    missoes: ["B", "D", "K", "N", "T", "V", "Y"]
  },
  {
    numero: 3,
    patente: "Apprentice",
    titulo: "Mission 03 – Emergency Network",
    descricao: "Other survivors started responding. Expand your communication skills.",
    missoes: ["C", "E", "I", "L", "S", "W", "O"]
  },
  {
    numero: 4,
    patente: "Explorer",
    titulo: "Mission 04 – Priority Message",
    descricao: "The first important messages are coming in. A mistake can cost a lot.",
    missoes: ["A", "P", "Q", "X", "Z", "4", "5"]
  },
  {
    numero: 5,
    patente: "Connected",
    titulo: "Mission 05 – Last Signal",
    descricao: "Numbers are essential for coordinates and schedules. Master them to stay connected.",
    missoes: ["1", "2", "3", "6", "7", "8", "9", "0"]
  },
  {
    numero: 6,
    patente: "Decoder",
    titulo: "Mission 06 – Operator Test",
    descricao: "It is time to prove that you can recognize and transmit the signals you have learned.",
    missoes: ["F", "B", "C", "A", "J", "K", "O", "X"]
  },
  {
    numero: 7,
    patente: "Junior Operator",
    titulo: "Mission 07 – Number Test",
    descricao: "Transmissions now include operational numbers. Precision is essential.",
    missoes: ["1", "5", "9", "0", "2", "6", "8", "3"]
  },
  {
    numero: 8,
    patente: "Signal Hunter",
    titulo: "Mission 08 – Tactical Groups I",
    descricao: "The signals are getting more complex. Identify patterns quickly.",
    missoes: ["FGH", "JMR", "BDK", "NTV", "CEI"]
  },
  {
    numero: 9,
    patente: "Radio Hacker",
    titulo: "Mission 09 – Tactical Groups II",
    descricao: "Larger signal blocks require memory, attention and speed.",
    missoes: ["LWS", "APQ", "XYZ", "MOR", "RUT"]
  },
  {
    numero: 10,
    patente: "Network Technician",
    titulo: "Mission 10 – Encrypted Channel",
    descricao: "Mix letters and numbers to keep the network safe and organized.",
    missoes: ["A1", "B2", "C3", "D4", "E5", "F6"]
  },
  {
    numero: 11,
    patente: "Emergency Operator",
    titulo: "Mission 11 – Radio Protocols",
    descricao: "Learn the codes used by operators to speed up communication.",
    missoes: ["QRA", "QTH", "QSL", "QTC", "QRV", "QRM"]
  },
  {
    numero: 12,
    patente: "Messenger",
    titulo: "Mission 12 – Short Messages",
    descricao: "It is time to transmit complete words to other operators.",
    missoes: ["SOS", "SEA", "SUN", "NET", "SIGNAL", "BASE"]
  },
  {
    numero: 13,
    patente: "Specialist",
    titulo: "Mission 13 – Regional Network",
    descricao: "The messages are getting longer. Keep your rhythm and precision.",
    missoes: ["MORSE", "RADIO", "TOWER", "POST", "BASE", "FOCUS"]
  },
  {
    numero: 14,
    patente: "Pro",
    titulo: "Mission 14 – Communications Center",
    descricao: "You are now operating an important station in the survivors network.",
    missoes: ["MISSION", "COMMAND", "ANTENNA", "STATION", "OPERATOR"]
  },
  {
    numero: 15,
    patente: "Elite",
    titulo: "Mission 15 – Priority Traffic",
    descricao: "Urgent messages are circulating. There is no room for distraction.",
    missoes: ["QSL OK", "BASE QRV", "SIGNAL OK", "RADIO 1", "POST 2"]
  },
  {
    numero: 16,
    patente: "Signal Master",
    titulo: "Mission 16 – Coordinated Operation",
    descricao: "Coordinate information using words and numbers with fluency.",
    missoes: ["BASE 1", "POST 2", "TOWER 3", "QTC 5", "RADIO 9"]
  },
  {
    numero: 17,
    patente: "Network Guardian",
    titulo: "Mission 17 – Advanced Post",
    descricao: "The network depends on your ability to keep distant posts connected.",
    missoes: ["QTC BASE", "QSL RADIO", "QRV POST", "STRONG SIGNAL", "BASE QRV"]
  },
  {
    numero: 18,
    patente: "Digital Legend",
    titulo: "Mission 18 – National Network",
    descricao: "Transmissions are crossing long distances. The margin for error has disappeared.",
    missoes: ["RADIO BASE 1", "POST QRV 2", "QTC SIGNAL 3", "BASE QSL 4", "TOWER QRV 5"]
  },
  {
    numero: 19,
    patente: "Signal Hero",
    titulo: "Mission 19 – Strategic Operator",
    descricao: "Long messages require total focus. Your concentration will be tested.",
    missoes: ["MORSE OPERATOR", "RADIO BASE QRV", "QTC STRONG SIGNAL", "POST QSL 123"]
  },
  {
    numero: 20,
    patente: "Morse Master",
    titulo: "Mission 20 – The Last Signal",
    descricao: "The survival of the network depends on you. Prove that you master Morse code.",
    missoes: ["MORSE OPERATOR QRV", "QTC BASE SIGNAL 12", "RADIO POST QSL 9", "TRANSMISSION OK 5"]
  }
];

const MENSAGENS_NARRATIVAS_INICIANTE = {
  1: {
    titulo: "📡 Primeiro contato confirmado",
    texto: "O rádio respondeu. Ainda há sinal no meio do caos."
  },
  2: {
    titulo: "📡 Canal seguro aberto",
    texto: "A frequência foi estabilizada. A rede começa a respirar."
  },
  3: {
    titulo: "🚨 Rede de emergência ativada",
    texto: "Novas estações começaram a responder aos seus sinais."
  },
  4: {
    titulo: "📨 Mensagem prioritária entregue",
    texto: "Sua transmissão chegou limpa. A confiança na rede aumentou."
  },
  5: {
    titulo: "🔢 Coordenadas recebidas",
    texto: "Os números agora permitem localizar postos e rotas."
  },
  6: {
    titulo: "📻 Operador em teste aprovado",
    texto: "Você demonstrou que consegue reconhecer e transmitir sinais variados."
  },
  7: {
    titulo: "🧭 Dados numéricos confirmados",
    texto: "As transmissões com números já podem ser usadas para horários, rotas e referências."
  },
  8: {
    titulo: "🧠 Grupos táticos reconhecidos",
    texto: "Seu cérebro começa a identificar blocos de sinais, não apenas letras isoladas."
  },
  9: {
    titulo: "📶 Sinal complexo decodificado",
    texto: "Mensagens maiores foram transmitidas sem quebrar o ritmo da rede."
  },
  10: {
    titulo: "🔐 Canal organizado",
    texto: "Letras e números agora viajam juntos pela rede com mais segurança."
  },
  11: {
    titulo: "📡 Protocolos de rádio iniciados",
    texto: "Os primeiros códigos Q entraram em operação. A comunicação ficou mais rápida."
  },
  12: {
    titulo: "✉️ Mensagens curtas entregues",
    texto: "Você já consegue transmitir palavras completas para outros operadores."
  },
  13: {
    titulo: "🌐 Rede regional em expansão",
    texto: "A rede alcança novas estações e começa a formar uma malha de comunicação."
  },
  14: {
    titulo: "🏢 Centro de comunicações ativo",
    texto: "Você assumiu uma posição importante dentro da rede de sobreviventes."
  },
  15: {
    titulo: "🚨 Tráfego prioritário controlado",
    texto: "Mensagens urgentes circularam com precisão. A rede confia mais em você."
  },
  16: {
    titulo: "🧩 Operação coordenada",
    texto: "Palavras e números foram combinados para orientar postos e equipes."
  },
  17: {
    titulo: "🛡️ Posto avançado conectado",
    texto: "A rede alcançou uma área distante. Novos operadores podem receber apoio."
  },
  18: {
    titulo: "📡 Rede de longo alcance",
    texto: "As transmissões cruzaram grandes distâncias e mantiveram a rede viva."
  },
  19: {
    titulo: "🎯 Operador estratégico",
    texto: "Você lidou com mensagens extensas mantendo foco, ritmo e precisão."
  },
  20: {
    titulo: "🚨 Rede restabelecida",
    texto: "As comunicações básicas voltaram a funcionar. O treinamento inicial foi concluído."
  }
};

function getMensagemNarrativaNivel(resultado) {
  if (!resultado) return null;

  if (resultado.modo === "Iniciante") {
    return MENSAGENS_NARRATIVAS_INICIANTE[resultado.nivel] || null;
  }

  if (resultado.modo === "Avançado") {
    return MENSAGENS_NARRATIVAS_AVANCADO[resultado.nivel] || null;
  }

  return null;
}

const NIVEIS_INTERMEDIARIO_BASE = [
  { numero: 1, patente: "Operador em Treinamento", titulo: "Sem Rodinhas", descricao: "Letras simples sem botões de espaço.", missoes: ["E", "T", "A", "N", "M"] },
  { numero: 2, patente: "Operador Aprendiz", titulo: "Pausa entre Letras", descricao: "A pausa média separa automaticamente as letras.", missoes: ["I", "S", "O", "R", "K"] },
  { numero: 3, patente: "Operador Auxiliar", titulo: "Ritmo Fônico I", descricao: "Reconheça o desenho sonoro das letras.", missoes: ["D", "U", "C", "P", "L"] },
  { numero: 4, patente: "Operador de Rede", titulo: "Ritmo Fônico II", descricao: "Padrões longos exigem memória auditiva.", missoes: ["F", "G", "H", "V", "B", "Z"] },
  { numero: 5, patente: "Operador de Posto", titulo: "Palavras Curtas", descricao: "A pausa longa vira separação de palavra.", missoes: ["SOS", "QSL", "QTH", "QRA", "QRV"] },
  { numero: 6, patente: "Operador Tático", titulo: "Palavras Médias", descricao: "Agora o cérebro começa a ouvir blocos.", missoes: ["RADIO", "SINAL", "TORRE", "POSTO", "MORSE"] },
  { numero: 7, patente: "Operador de Mensagem", titulo: "Frases Curtas", descricao: "Separe palavras apenas com pausa.", missoes: ["QSL OK", "BASE QRV", "SINAL OK", "RADIO 1", "POSTO 2"] },
  { numero: 8, patente: "Operador Chefe", titulo: "Frases Operacionais", descricao: "Pouco apoio visual. Mais escuta e ritmo.", missoes: ["QTC BASE", "RADIO QRV", "POSTO QSL", "SINAL FORTE", "TORRE OK"] },
  { numero: 9, patente: "Instrutor Morse", titulo: "Mensagem Operacional", descricao: "Mensagens maiores, sem botão auxiliar.", missoes: ["RADIO BASE QRV", "QTC SINAL 3", "POSTO QSL 2", "BASE RADIO OK", "TORRE SINAL 9"] },
  { numero: 10, patente: "Especialista Morse", titulo: "Missão Final Intermediária", descricao: "Transmissão completa por ritmo e pausa.", missoes: ["OPERADOR QRV", "QTC BASE SINAL", "RADIO POSTO QSL", "SINAL FORTE OK", "MISSAO INTERMEDIARIA"] }
];

function gerarNiveisIntermediarioDuplicados(niveisBase) {
  const niveis = [];

  niveisBase.forEach((nivelBase, indice) => {
    const numeroNormal = indice * 2 + 1;
    const numeroCodigo = indice * 2 + 2;

    niveis.push({
      ...nivelBase,
      numero: numeroNormal,
      titulo: `${nivelBase.titulo}`,
      descricao: nivelBase.descricao,
      tipoMissao: "intermediario_normal"
    });

    niveis.push({
      ...nivelBase,
      numero: numeroCodigo,
      patente: `${nivelBase.patente} — Código`,
      titulo: `${nivelBase.titulo} — Código para texto`,
      descricao: "Tecle o código Morse apresentado. A tradução em português só aparecerá depois da sua transmissão.",
      tipoMissao: "intermediario_codigo_texto",
      faseDuplicadaDe: numeroNormal
    });
  });

  return niveis;
}

const NIVEIS_INTERMEDIARIO = gerarNiveisIntermediarioDuplicados(NIVEIS_INTERMEDIARIO_BASE);

let nomeOperador = "Operador";
let modoAtual = MODO_INICIANTE;
let nivelAtualIndex = 0;
let missaoAtualIndex = 0;

let codigoAtual = "";
let pontuacao = 0;
let acertosNivel = 0;
let errosNivel = 0;
let sequenciaAcertos = 0;

let inicioNivelMs = 0;
let fimNivelMs = 0;
let inicioMissaoMs = 0;

let pressionando = false;
let inicioPressionamento = 0;

let audioContext = null;
let osciladorMorse = null;
let ganhoMorse = null;
let filtroMorse = null;
let motorChavePronto = false;
let chaveMorseAtiva = false;
let ultimoAcionamentoChaveMs = 0;
let volumeAtualChave = 0.00001;

let somChaveAtual = null;
let sonsChaveAtivos = [];

let ultimoResultado = null;
let temporizadorLetra = null;
let temporizadorPalavra = null;
let intervaloTimerMissao = null;

function recalcularTemposPorWpm() {
  unidadeMorseMs = 1200 / wpmAtual;
  pausaAutoLetraMs = Math.round(unidadeMorseMs * 3);
  pausaAutoPalavraMs = Math.round(unidadeMorseMs * 7);
  limitePontoTracoMs = unidadeMorseMs * 2;
}

function selecionarWpm(novoWpm) {
  wpmAtual = Number(novoWpm);
  localStorage.setItem("operadorMorseWpm", String(wpmAtual));
  recalcularTemposPorWpm();
  atualizarPainelRitmo();

  feedback.textContent =
    `WPM ajustado para ${wpmAtual}. Letra: ${pausaAutoLetraMs} ms • Palavra: ${pausaAutoPalavraMs} ms.`;
  feedback.className = "feedback alerta";
}

function getNomeOperadorAtual() {
  return inputNomeOperador.value.trim() || nomeOperador || "Operador";
}

function gerarSlugOperador(nome) {
  return String(nome || "operador")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "operador";
}
function obterIdOperadorLocal() {
  let id = localStorage.getItem("edsMorseOperadorLocalId");

  if (!id) {
    if (crypto && crypto.randomUUID) {
      id = `op_${crypto.randomUUID()}`;
    } else {
      id = `op_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    }

    localStorage.setItem("edsMorseOperadorLocalId", id);
  }

  return id;
}
function getChaveOperador() {
  return gerarSlugOperador(getNomeOperadorAtual());
}

function chaveNivelLiberado(modo = modoAtual) {
  return `operadorMorseNivelLiberado_${modo}_${getChaveOperador()}`;
}

function chaveInicianteConcluido() {
  return `operadorMorseInicianteConcluido_${getChaveOperador()}`;
}

function chaveIntermediarioConcluido() {
  return `operadorMorseIntermediarioConcluido_${getChaveOperador()}`;
}

function chaveAvancadoConcluido() {
  return `operadorMorseAvancadoConcluido_${getChaveOperador()}`;
}

function chaveCarreiraOperador() {
  return `operadorMorseCarreira_${getChaveOperador()}`;
}

function obterCarreiraOperador() {
  const carreiraPadrao = {
    pontosTotais: 0,
    fasesConcluidas: [],
    medalhas: [],
    titulos: [],
    melhorTempoSegundos: null,
    melhorAproveitamento: 0,
    melhorWpm: 0,
    ultimaAtualizacao: null
  };

  try {
    const dadosSalvos = JSON.parse(
      localStorage.getItem(chaveCarreiraOperador()) || "null"
    );

    return {
      ...carreiraPadrao,
      ...(dadosSalvos || {})
    };
  } catch (erro) {
    return carreiraPadrao;
  }
}

function salvarCarreiraOperador(carreira) {
  localStorage.setItem(
    chaveCarreiraOperador(),
    JSON.stringify(carreira)
  );
}

function gerarIdFaseCarreira(resultado) {
  return `${resultado.modo}_${resultado.nivel}`;
}

function obterPremiosDaFase(resultado) {
  const premios = [];

  const modo = resultado.modo || "Modo";
  const nivel = resultado.nivel || 0;
  const aproveitamento = Number(resultado.aproveitamento || 0);
  const tempoSegundos = Number(resultado.tempoSegundos || 0);

  if (aproveitamento >= 80) {
    premios.push({
      tipo: "medalha",
      id: `${modo}_${nivel}_conclusao`,
      nome: `Medalha de Conclusão — ${modo} ${nivel}`,
      descricao: "Concedida por concluir a fase com aproveitamento mínimo operacional."
    });
  }

  if (aproveitamento >= 90) {
    premios.push({
      tipo: "medalha",
      id: `${modo}_${nivel}_excelencia`,
      nome: `Medalha de Excelência — ${modo} ${nivel}`,
      descricao: "Concedida por concluir a fase com desempenho superior a 90%."
    });
  }

  if (aproveitamento === 100) {
    premios.push({
      tipo: "medalha",
      id: `${modo}_${nivel}_perfeita`,
      nome: `Transmissão Perfeita — ${modo} ${nivel}`,
      descricao: "Concedida por concluir a fase sem erros."
    });
  }

  if (tempoSegundos > 0 && tempoSegundos <= 60) {
    premios.push({
      tipo: "distintivo",
      id: `${modo}_${nivel}_rapidez`,
      nome: `Distintivo de Rapidez — ${modo} ${nivel}`,
      descricao: "Concedido por concluir a fase em até 60 segundos."
    });
  }

  if (modo === "Iniciante" && nivel === 20 && aproveitamento >= 80) {
    premios.push({
      tipo: "titulo",
      id: "titulo_operador_morse_inicial",
      nome: "Operador Morse Inicial",
      descricao: "Título concedido por concluir toda a formação inicial."
    });
  }

  if (modo === "Intermediário" && nivel === 20 && aproveitamento >= 80) {
    premios.push({
      tipo: "titulo",
      id: "titulo_operador_intermediario",
      nome: "Operador Morse Intermediário",
      descricao: "Título concedido por concluir a etapa intermediária."
    });
  }

  if (modo === "Avançado" && aproveitamento >= 80) {
    premios.push({
      tipo: "medalha",
      id: `${modo}_${nivel}_operacao_avancada`,
      nome: `Medalha de Operação Avançada — Fase ${nivel}`,
      descricao: "Concedida por concluir uma fase avançada com desempenho operacional."
    });
  }
  
  if (modo === "Avançado" && aproveitamento >= 90) {
    premios.push({
      tipo: "distintivo",
      id: `${modo}_${nivel}_elite_avancada`,
      nome: `Distintivo de Elite Avançada — Fase ${nivel}`,
      descricao: "Concedido por concluir uma fase avançada com aproveitamento superior a 90%."
    });
  }
  
  if (modo === "Avançado" && nivel === 12 && aproveitamento >= 80) {
    premios.push({
      tipo: "titulo",
      id: "titulo_operador_estacao",
      nome: "Operador de Estação",
      descricao: "Título concedido por concluir toda a fase avançada, incluindo a escuta operacional."
    });
  }
  
  if (modo === "Avançado" && nivel === 12 && aproveitamento >= 90) {
    premios.push({
      tipo: "titulo",
      id: "titulo_comandante_estacao",
      nome: "Comandante de Estação",
      descricao: "Título concedido por concluir a fase avançada com desempenho superior."
    });
  }
  
  if (modo === "Avançado" && nivel === 12 && aproveitamento === 100) {
    premios.push({
      tipo: "titulo",
      id: "titulo_mestre_telegrafista",
      nome: "Mestre Telegrafista",
      descricao: "Título máximo concedido por concluir toda a fase avançada sem erros."
    });
  }

  return premios;
}

function calcularBonusTempoNivel(resultado) {
  const tempoSegundos = Number(resultado.tempoSegundos || 0);
  const aproveitamento = Number(resultado.aproveitamento || 0);

  if (!resultado.aprovado || tempoSegundos <= 0) {
    return 0;
  }

  let bonusTempo = 0;

  if (tempoSegundos <= 30) {
    bonusTempo = 120;
  } else if (tempoSegundos <= 45) {
    bonusTempo = 90;
  } else if (tempoSegundos <= 60) {
    bonusTempo = 60;
  } else if (tempoSegundos <= 90) {
    bonusTempo = 35;
  } else if (tempoSegundos <= 120) {
    bonusTempo = 20;
  }

  if (aproveitamento === 100) {
    bonusTempo += 30;
  }

  if (resultado.wpm >= META_WPM) {
    bonusTempo += 25;
  }

  return bonusTempo;
}

function registrarResultadoNaCarreira(resultado) {
  if (!resultado || !resultado.aprovado) {
    return null;
  }

  const carreira = obterCarreiraOperador();
  const idFase = gerarIdFaseCarreira(resultado);
  const premiosPossiveisDaFase = obterPremiosDaFase(resultado);
  const premiosNovosDaFase = [];
  const bonusTempo = calcularBonusTempoNivel(resultado);

  const pontosDaFase = Number(resultado.pontos || 0);
  const pontosComBonusTempo = pontosDaFase + bonusTempo;

  const faseJaRegistrada = carreira.fasesConcluidas.find(
    (fase) => fase.id === idFase
  );

  let pontosSomados = 0;
  let superouMelhorFase = false;

  if (!faseJaRegistrada) {
    pontosSomados = pontosComBonusTempo;

    carreira.fasesConcluidas.push({
      id: idFase,
      modo: resultado.modo,
      nivel: resultado.nivel,
      titulo: resultado.titulo,
      melhorPontuacao: pontosComBonusTempo,
      pontosBase: pontosDaFase,
      bonusTempo,
      melhorTempoSegundos: resultado.tempoSegundos,
      melhorAproveitamento: resultado.aproveitamento,
      melhorWpm: resultado.wpm,
      data: resultado.data
    });
  } else if (pontosComBonusTempo > faseJaRegistrada.melhorPontuacao) {
    superouMelhorFase = true;
    pontosSomados = pontosComBonusTempo - faseJaRegistrada.melhorPontuacao;

    faseJaRegistrada.melhorPontuacao = pontosComBonusTempo;
    faseJaRegistrada.pontosBase = pontosDaFase;
    faseJaRegistrada.bonusTempo = bonusTempo;
    faseJaRegistrada.melhorTempoSegundos = resultado.tempoSegundos;
    faseJaRegistrada.melhorAproveitamento = Math.max(
      faseJaRegistrada.melhorAproveitamento || 0,
      resultado.aproveitamento
    );
    faseJaRegistrada.melhorWpm = Math.max(
      faseJaRegistrada.melhorWpm || 0,
      resultado.wpm
    );
    faseJaRegistrada.data = resultado.data;
  }

  carreira.pontosTotais += pontosSomados;

  premiosPossiveisDaFase.forEach((premio) => {
    if (premio.tipo === "titulo") {
      const jaTemTitulo = carreira.titulos.some(
        (titulo) => titulo.id === premio.id
      );

      if (!jaTemTitulo) {
        carreira.titulos.push(premio);
        premiosNovosDaFase.push(premio);
      }

      return;
    }

    const jaTemMedalha = carreira.medalhas.some(
      (medalha) => medalha.id === premio.id
    );

    if (!jaTemMedalha) {
      carreira.medalhas.push(premio);
      premiosNovosDaFase.push(premio);
    }
  });

  if (
    carreira.melhorTempoSegundos === null ||
    resultado.tempoSegundos < carreira.melhorTempoSegundos
  ) {
    carreira.melhorTempoSegundos = resultado.tempoSegundos;
  }

  carreira.melhorAproveitamento = Math.max(
    carreira.melhorAproveitamento || 0,
    resultado.aproveitamento
  );

  carreira.melhorWpm = Math.max(
    carreira.melhorWpm || 0,
    resultado.wpm
  );

  carreira.ultimaAtualizacao = new Date().toISOString();

  salvarCarreiraOperador(carreira);

  return {
    carreira,
    pontosSomados,
    pontosDaFase,
    bonusTempo,
    pontosComBonusTempo,
    superouMelhorFase,
    premiosDaFase: premiosNovosDaFase
  };
}

inicializarEntradaSecretaLogo();

if (btnValidarSenhaSalaSecreta) {
  btnValidarSenhaSalaSecreta.addEventListener("click", validarSenhaSalaSecreta);
}

if (inputSenhaSalaSecreta) {
  inputSenhaSalaSecreta.addEventListener("keydown", (evento) => {
    if (evento.code === "Enter") {
      evento.preventDefault();
      validarSenhaSalaSecreta();
    }
  });
}

if (btnVoltarInicioSalaSecretaSenha) {
  btnVoltarInicioSalaSecretaSenha.addEventListener("click", voltarInicio);
}

if (btnValidarFragmentosSalaSecreta) {
  btnValidarFragmentosSalaSecreta.addEventListener("click", validarFragmentosSalaSecreta);
}

if (btnVoltarSenhaSalaSecreta) {
  btnVoltarSenhaSalaSecreta.addEventListener("click", abrirTelaSenhaSalaSecreta);
}

if (btnVoltarInicioSalaSecretaFragmentos) {
  btnVoltarInicioSalaSecretaFragmentos.addEventListener("click", voltarInicio);
}

if (btnOuvirTransmissaoFinalSecreta) {
  btnOuvirTransmissaoFinalSecreta.addEventListener("click", tocarTransmissaoFinalSalaSecreta);
}

if (btnSalaSecretaRanking) {
  btnSalaSecretaRanking.addEventListener("click", abrirRanking);
}

if (btnSalaSecretaInicio) {
  btnSalaSecretaInicio.addEventListener("click", voltarInicio);
}

document.querySelectorAll("[id^='inputFragmentoSecreto']").forEach((input, indice, lista) => {
  input.addEventListener("input", () => {
    input.value = normalizarEntradaSalaSecreta(input.value);

    if (input.value.length >= 5 && lista[indice + 1]) {
      lista[indice + 1].focus();
    }
  });

  input.addEventListener("keydown", (evento) => {
    if (evento.code === "Enter") {
      evento.preventDefault();
      validarFragmentosSalaSecreta();
    }
  });
});

if (btnIdiomaPt) {
  btnIdiomaPt.addEventListener("click", () => {
    idiomaAtual = "pt";
    localStorage.setItem("edsMorseIdioma", idiomaAtual);
    aplicarIdiomaInterface();
  });
}

if (btnIdiomaEn) {
  btnIdiomaEn.addEventListener("click", () => {
    idiomaAtual = "en";
    localStorage.setItem("edsMorseIdioma", idiomaAtual);
    aplicarIdiomaInterface();
  });
}

if (btnConfirmarEntradaOperador) {
  btnConfirmarEntradaOperador.addEventListener("click", confirmarEntradaOperador);
}

if (inputNomeOperador) {
  inputNomeOperador.addEventListener("keydown", (evento) => {
    if (evento.code === "Enter") {
      evento.preventDefault();
      confirmarEntradaOperador();
    }
  });
}
btnAbrirMissao.addEventListener("click", abrirMissao);
btnVoltarInicioMissao.addEventListener("click", voltarInicio);
btnIniciarPelaMissao.addEventListener("click", entrarCampanha);
btnEntrarCampanha.addEventListener("click", entrarCampanha);
btnAbrirBiblioteca.addEventListener("click", abrirBiblioteca);
btnBibAlfabeto.addEventListener("click", abrirBibliotecaAlfabeto);
btnBibNumeros.addEventListener("click", abrirBibliotecaNumeros);
btnBibCodigoQ.addEventListener("click", abrirBibliotecaCodigoQ);
btnBibSinaisServico.addEventListener("click", abrirBibliotecaSinaisServico);
btnBibAbreviacoes.addEventListener("click", abrirBibliotecaAbreviacoes);
btnBibCaracteresEspeciais.addEventListener("click", abrirBibliotecaCaracteresEspeciais);
btnBibTreinoAuditivo.addEventListener("click", abrirBibliotecaTreinoAuditivo);
btnAbrirRanking.addEventListener("click", abrirRanking);
btnAbrirRegrasFAQ.addEventListener("click", abrirRegrasFAQ);

btnAbrirManipulador.addEventListener("click", () => {
  mostrarTela(telaManipulador);
});

btnVoltarInicioBiblioteca.addEventListener("click", voltarInicio);
btnVoltarMenuBiblioteca.addEventListener("click", abrirBiblioteca);
btnVoltarCodigoQ.addEventListener("click", abrirBibliotecaCodigoQ);
btnVoltarInicioCampanha.addEventListener("click", voltarInicio);
btnContinuarNivel.addEventListener("click", continuarNivelAtual);

btnLimpar.addEventListener("click", limparCodigo);
btnEnviar.addEventListener("click", confirmarEnvio);
btnEspacoLetra.addEventListener("click", inserirEspacoLetra);
btnEspacoPalavra.addEventListener("click", inserirEspacoPalavra);
btnReiniciar.addEventListener("click", reiniciarNivel);
btnVoltarCampanha.addEventListener("click", entrarCampanha);

btnJogarNovamente.addEventListener("click", repetirNivel);
btnProximoNivel.addEventListener("click", avancarProximoNivel);
btnMapaResultado.addEventListener("click", entrarCampanha);
btnRankingFinal.addEventListener("click", abrirRanking);

if (btnFimJogoRanking) {
  btnFimJogoRanking.addEventListener("click", abrirRanking);
}

if (btnFimJogoMapa) {
  btnFimJogoMapa.addEventListener("click", entrarCampanha);
}

if (btnFimJogoInicio) {
  btnFimJogoInicio.addEventListener("click", voltarInicio);
}
if (btnFimJogoSalaSecreta) {
  btnFimJogoSalaSecreta.addEventListener("click", () => {
    abrirSalaSecretaFragmentosDireto();
  });
}
if (btnTransicaoContinuar) {
  btnTransicaoContinuar.addEventListener("click", continuarAposTransicaoFase);
}

if (btnTransicaoMapa) {
  btnTransicaoMapa.addEventListener("click", entrarCampanha);
}

if (btnTransicaoInicio) {
  btnTransicaoInicio.addEventListener("click", voltarInicio);
}

if (btnAbrirRelatorioOperador) {
  btnAbrirRelatorioOperador.addEventListener("click", abrirRelatorioOperador);
}

btnVoltarCampanhaRanking.addEventListener("click", entrarCampanha);
btnVoltarInicio.addEventListener("click", voltarInicio);
btnLimparRanking.addEventListener("click", limparRanking);

if (btnVoltarRankingRelatorio) {
  btnVoltarRankingRelatorio.addEventListener("click", abrirRanking);
}

if (btnInicioRelatorioOperador) {
  btnInicioRelatorioOperador.addEventListener("click", voltarInicio);
}

btnVoltarInicioRegrasFAQ.addEventListener("click", voltarInicio);


btnIniciarTreinoLicao.addEventListener("click", () => {
  iniciarNivel(nivelAtualIndex);
});

btnVoltarMapaLicao.addEventListener("click", entrarCampanha);

cardModoIniciante.addEventListener("click", abrirModoIniciante);
cardModoIntermediario.addEventListener("click", abrirModoIntermediario);
cardModoAvancado.addEventListener("click", abrirModoAvancado);

botoesWpm.forEach((botao) => {
  botao.addEventListener("click", () => {
    selecionarWpm(botao.dataset.wpm);
  });
});

botoesTomLicao.forEach((botao) => {
  botao.addEventListener("click", () => {
    frequenciaSidetone = Number(botao.dataset.hz);
    localStorage.setItem("operadorMorseTomHz", String(frequenciaSidetone));

    botoesTomLicao.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

botoesWpmLicao.forEach((botao) => {
  botao.addEventListener("click", () => {
    selecionarWpm(botao.dataset.wpm);

    botoesWpmLicao.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
  });
});

if (btnMenosLetra) btnMenosLetra.style.display = "none";
if (btnMaisLetra) btnMaisLetra.style.display = "none";
if (btnMenosPalavra) btnMenosPalavra.style.display = "none";
if (btnMaisPalavra) btnMaisPalavra.style.display = "none";

btnMorse.addEventListener("pointerdown", iniciarPressionamento);
btnMorse.addEventListener("pointerup", finalizarPressionamento);
btnMorse.addEventListener("pointercancel", cancelarPressionamento);
btnMorse.addEventListener("lostpointercapture", finalizarPressionamento);

btnMorseManipulador.addEventListener("pointerdown", iniciarPressionamentoManipulador);
btnMorseManipulador.addEventListener("pointerup", finalizarPressionamentoManipulador);
btnMorseManipulador.addEventListener("pointercancel", cancelarPressionamentoManipulador);
btnMorseManipulador.addEventListener("lostpointercapture", finalizarPressionamentoManipulador);

if (btnManipuladorIniciante) {
  btnManipuladorIniciante.addEventListener("click", () => {
    selecionarModoManipuladorLivre("iniciante");
  });
}

if (btnManipuladorPro) {
  btnManipuladorPro.addEventListener("click", () => {
    selecionarModoManipuladorLivre("pro");
  });
}

btnLimparManipulador.addEventListener("click", limparTudoManipuladorLivre);
btnVoltarInicioManipulador.addEventListener("click", voltarInicio);

document.addEventListener("keydown", (evento) => {
  const estaNoJogo = telaJogo.classList.contains("ativa");
  const estaNoManipulador = telaManipulador.classList.contains("ativa");

  if (!estaNoJogo && !estaNoManipulador) return;

  if (estaNoManipulador) {
    if (evento.code === "Space") {
      if (pressionandoManipulador) return;
      evento.preventDefault();
      iniciarPressionamentoManipulador();
    }

    if (evento.code === "Backspace") {
      evento.preventDefault();
      limparTudoManipuladorLivre();
    }

    return;
  }

  if (evento.code === "Space") {
    if (pressionando) return;
    evento.preventDefault();
    iniciarPressionamento();
  }

  if (evento.code === "Enter") {
    evento.preventDefault();
    confirmarEnvio();
  }

  if (evento.code === "Backspace") {
    const estaDigitandoEmCampo =
      evento.target &&
      (
        evento.target.tagName === "INPUT" ||
        evento.target.tagName === "TEXTAREA"
      );
  
    if (estaDigitandoEmCampo) {
      return;
    }
  
    evento.preventDefault();
    limparCodigo();
  }
});

document.addEventListener("keyup", (evento) => {
  const estaNoJogo = telaJogo.classList.contains("ativa");
  const estaNoManipulador = telaManipulador.classList.contains("ativa");

  if (!estaNoJogo && !estaNoManipulador) return;

  if (estaNoManipulador) {
    if (evento.code === "Space") {
      evento.preventDefault();
      finalizarPressionamentoManipulador();
    }

    return;
  }

  if (evento.code === "Space") {
    evento.preventDefault();
    finalizarPressionamento();
  }
});

carregarPreferencias();
aplicarIdiomaInterface();
recalcularTemposPorWpm();
atualizarPainelRitmo();

history.replaceState(
  {
    telaId: "telaInicial",
    modo: MODO_INICIANTE,
    visualizandoMapaModo: false
  },
  "",
  ""
);


function getChaveFragmentosSalaSecreta() {
  return `edsMorseSalaSecretaFragmentos_${getChaveOperador()}`;
}

function getChaveSalaSecretaLiberada() {
  return `edsMorseSalaSecretaLiberada_${getChaveOperador()}`;
}

function obterFragmentosSalaSecreta() {
  try {
    return JSON.parse(localStorage.getItem(getChaveFragmentosSalaSecreta())) || [];
  } catch (erro) {
    return [];
  }
}

function salvarFragmentosSalaSecreta(fragmentos) {
  localStorage.setItem(getChaveFragmentosSalaSecreta(), JSON.stringify(fragmentos));
}

function normalizarEntradaSalaSecreta(valor) {
  return String(valor || "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Z0-9@]/g, "")
    .slice(0, 5);
}

function inicializarEntradaSecretaLogo() {
  const alvoLogo =
    document.querySelector("#telaInicial .marca-jogo") ||
    document.querySelector("#telaInicial h1");

  if (!alvoLogo) return;

  alvoLogo.classList.add("logo-sala-secreta");

  alvoLogo.addEventListener("click", () => {
    contadorToquesLogoSalaSecreta += 1;

    if (temporizadorToquesLogoSalaSecreta) {
      clearTimeout(temporizadorToquesLogoSalaSecreta);
    }

    temporizadorToquesLogoSalaSecreta = setTimeout(() => {
      contadorToquesLogoSalaSecreta = 0;
    }, 2200);

    if (contadorToquesLogoSalaSecreta >= 5) {
      contadorToquesLogoSalaSecreta = 0;
      clearTimeout(temporizadorToquesLogoSalaSecreta);
      abrirTelaSenhaSalaSecreta();
    }
  });
}

function abrirTelaSenhaSalaSecreta() {
  if (!telaSalaSecretaSenha) return;

  pararTodosOsSons();

  if (inputSenhaSalaSecreta) {
    inputSenhaSalaSecreta.value = "";
  }

  if (feedbackSenhaSalaSecreta) {
    feedbackSenhaSalaSecreta.textContent = "";
    feedbackSenhaSalaSecreta.className = "feedback";
  }

  mostrarTela(telaSalaSecretaSenha);

  setTimeout(() => {
    if (inputSenhaSalaSecreta) inputSenhaSalaSecreta.focus();
  }, 250);
}

function validarSenhaSalaSecreta() {
  const senha = normalizarRespostaAuditiva(inputSenhaSalaSecreta?.value || "")
    .replace(/\s+/g, "");

  if (senha === SALA_SECRETA_SENHA) {
    tocarAcerto();

    if (feedbackSenhaSalaSecreta) {
      feedbackSenhaSalaSecreta.textContent = "Acesso autorizado. Canal restrito aberto.";
      feedbackSenhaSalaSecreta.className = "feedback sucesso";
    }

    setTimeout(abrirTelaFragmentosSalaSecreta, 700);
    return;
  }

  tocarErro();

  if (feedbackSenhaSalaSecreta) {
    feedbackSenhaSalaSecreta.textContent = "Senha incorreta. Continue escutando a rede.";
    feedbackSenhaSalaSecreta.className = "feedback erro";
  }

  if (inputSenhaSalaSecreta) {
    inputSenhaSalaSecreta.select();
  }
}

function abrirTelaFragmentosSalaSecreta() {
  if (!telaSalaSecretaFragmentos) return;

  preencherFragmentosInterceptadosSalaSecreta();

  document.querySelectorAll("[id^='inputFragmentoSecreto']").forEach((input) => {
    input.value = "";
  });

  if (feedbackFragmentosSalaSecreta) {
    feedbackFragmentosSalaSecreta.textContent = "";
    feedbackFragmentosSalaSecreta.className = "feedback";
  }

  mostrarTela(telaSalaSecretaFragmentos);

  setTimeout(() => {
    const primeiroInput = document.getElementById("inputFragmentoSecreto1");
    if (primeiroInput) primeiroInput.focus();
  }, 250);
}

function abrirSalaSecretaFragmentosDireto() {
  if (!telaSalaSecretaFragmentos) return;

  preencherFragmentosInterceptadosSalaSecreta();

  document.querySelectorAll("[id^='inputFragmentoSecreto']").forEach((input) => {
    input.value = "";
  });

  if (feedbackFragmentosSalaSecreta) {
    feedbackFragmentosSalaSecreta.textContent = "";
    feedbackFragmentosSalaSecreta.className = "feedback";
  }

  mostrarTela(telaSalaSecretaFragmentos);

  setTimeout(() => {
    const primeiroInput = document.getElementById("inputFragmentoSecreto1");
    if (primeiroInput) primeiroInput.focus();
  }, 250);
}

function preencherFragmentosInterceptadosSalaSecreta() {
  if (!fragmentosInterceptadosSalaSecreta) return;

  const coletados = obterFragmentosSalaSecreta();

  const lista = SALA_SECRETA_FRAGMENTOS_EMBARALHADOS.map((fragmento) => {
    const jaInterceptado = coletados.includes(fragmento);

    return `
      <span class="${jaInterceptado ? "fragmento-coletado" : "fragmento-nao-coletado"}">
        ${jaInterceptado ? escaparHtml(fragmento) : "?????"}
      </span>
    `;
  }).join("");

  fragmentosInterceptadosSalaSecreta.innerHTML = `
    <span class="label">Fragmentos interceptados</span>
    <div class="fragmentos-linha">
      ${lista}
    </div>
    <small>
      Dica: os grupos podem aparecer fora da ordem. Reconstrua a mensagem original.
    </small>
  `;
}

function validarFragmentosSalaSecreta() {
  const respostas = SALA_SECRETA_CHAVE_CORRETA.map((_, indice) => {
    const input = document.getElementById(`inputFragmentoSecreto${indice + 1}`);
    return normalizarEntradaSalaSecreta(input?.value || "");
  });

  const acertou = respostas.every((valor, indice) => {
    return valor === SALA_SECRETA_CHAVE_CORRETA[indice];
  });

  if (!acertou) {
    tocarErro();

    if (feedbackFragmentosSalaSecreta) {
      feedbackFragmentosSalaSecreta.textContent =
        "Chave incompleta ou incorreta. Reorganize os fragmentos interceptados.";
      feedbackFragmentosSalaSecreta.className = "feedback erro";
    }

    return;
  }

  tocarAcerto();
  localStorage.setItem(getChaveSalaSecretaLiberada(), "sim");

  if (feedbackFragmentosSalaSecreta) {
    feedbackFragmentosSalaSecreta.textContent =
      "Acesso autorizado. Transmissão final liberada.";
    feedbackFragmentosSalaSecreta.className = "feedback sucesso";
  }

  setTimeout(abrirTelaFinalSalaSecreta, 800);
}

function abrirTelaFinalSalaSecreta() {
  if (!telaSalaSecretaFinal) return;

  if (textoTransmissaoFinalSecreta) {
    textoTransmissaoFinalSecreta.textContent =
      "Parabéns. Você demonstrou persistência, foco, coragem e inteligência. Bem-vindo ao seleto grupo de telegrafistas do EDS MORSE.";
  }

  if (codigoTransmissaoFinalSecreta) {
    codigoTransmissaoFinalSecreta.textContent = textoParaMorse(SALA_SECRETA_MENSAGEM_FINAL);
  }

  mostrarTela(telaSalaSecretaFinal);
}

function tocarTransmissaoFinalSalaSecreta() {
  prepararAudio();
  tocarSequenciaMorse(textoParaMorse(SALA_SECRETA_MENSAGEM_FINAL));
}

function processarFragmentoSecretoResultado(resultado) {
  if (!resultado || !resultado.aprovado) return;

  const ponto = SALA_SECRETA_PONTOS_CAMPANHA.find((item) => {
    return item.modo === resultado.modo && Number(item.nivel) === Number(resultado.nivel);
  });

  if (!ponto) return;

  const fragmentos = obterFragmentosSalaSecreta();

  if (!fragmentos.includes(ponto.fragmento)) {
    fragmentos.push(ponto.fragmento);
    salvarFragmentosSalaSecreta(fragmentos);
  }

  setTimeout(() => {
    mostrarAvisoFragmentoSecreto(ponto.fragmento, fragmentos.length);
  }, 900);
}

function mostrarAvisoFragmentoSecreto(fragmento, totalColetado) {
  const avisoAntigo = document.querySelector(".aviso-fragmento-secreto");
  if (avisoAntigo) avisoAntigo.remove();

  const aviso = document.createElement("div");
  aviso.className = "aviso-fragmento-secreto";
  aviso.innerHTML = `
    <span>TRANSMISSÃO FRAGMENTADA</span>
    <strong>ANOTE: ${escaparHtml(fragmento)}</strong>
    <small>Fragmento ${Math.min(totalColetado, 6)}/6 interceptado. Guarde este grupo.</small>
  `;

  document.body.appendChild(aviso);

  setTimeout(() => {
    aviso.classList.add("visivel");
  }, 50);

  setTimeout(() => {
    aviso.classList.remove("visivel");
    setTimeout(() => aviso.remove(), 450);
  }, 7200);
}
function aplicarIdiomaInterface() {
  document.documentElement.lang = idiomaAtual === "en" ? "en" : "pt-BR";

  const btnPt = document.getElementById("btnIdiomaPt");
  const btnEn = document.getElementById("btnIdiomaEn");

  if (btnPt) btnPt.textContent = t("idioma_portugues");
  if (btnEn) btnEn.textContent = t("idioma_ingles");

  if (btnIdiomaPt && btnIdiomaEn) {
    btnIdiomaPt.classList.toggle("ativo", idiomaAtual === "pt");
    btnIdiomaEn.classList.toggle("ativo", idiomaAtual === "en");
  }

  const entradaInstrucao = document.querySelector("#telaEntradaOperador .entrada-instrucao");
  if (entradaInstrucao) entradaInstrucao.textContent = t("entrada_instrucao");

  const labelNomeEntrada = document.querySelector("#telaEntradaOperador label[for='inputNomeOperador']");
  if (labelNomeEntrada) labelNomeEntrada.textContent = t("entrada_nome_label");

  if (inputNomeOperador) inputNomeOperador.placeholder = t("entrada_nome_placeholder");

  if (btnConfirmarEntradaOperador) btnConfirmarEntradaOperador.textContent = t("entrada_botao");

  const slogans = document.querySelectorAll(".subtitulo-hero");
  slogans.forEach((el) => {
    el.textContent = t("slogan");
  });

  const chamadasMarca = document.querySelectorAll(".marca-jogo-texto span");
  chamadasMarca.forEach((el) => {
    if (el.textContent.trim() === "DIVIRTA-SE COM" || el.textContent.trim() === "HAVE FUN WITH") {
      el.textContent = t("marca_chamada");
    }
  });

  const labelOperador = document.querySelector(".label-operador-impacto");
  if (labelOperador) labelOperador.textContent = t("operador_label");

  const canalOperador = document.querySelector(".canal-operador");
  if (canalOperador) canalOperador.textContent = t("canal_restrito");

  const homePatente = document.getElementById("homeOperadorPatente");
  if (homePatente && homePatente.textContent.trim() === "Operador em formação") {
    homePatente.textContent = t("operador_formacao");
  }

  const stats = document.querySelectorAll(".painel-operador-stats span");
  if (stats[0]) stats[0].textContent = t("posicao");
  if (stats[1]) stats[1].textContent = t("wpm");
  if (stats[2]) stats[2].textContent = t("fases");
  if (stats[3]) stats[3].textContent = t("medalhas");

  if (btnEntrarCampanha) btnEntrarCampanha.textContent = t("jogar");
  if (btnAbrirMissao) btnAbrirMissao.textContent = t("missao");

  if (btnAbrirManipulador) {
    btnAbrirManipulador.innerHTML = `
      <span class="icone-chave-telegrafica" aria-hidden="true"></span>
      <span>${t("treino_livre")}</span>
    `;
  }

  if (btnAbrirBiblioteca) btnAbrirBiblioteca.textContent = t("biblioteca");
  if (btnAbrirRanking) btnAbrirRanking.textContent = t("ranking");
  if (btnAbrirRegrasFAQ) btnAbrirRegrasFAQ.textContent = t("regras_faq");
  const labelProgresso = document.querySelector("#telaCampanha .label");
  if (labelProgresso) {
    labelProgresso.textContent = t("campanha_progresso");
  }

  const tituloCampanha = document.querySelector("#telaCampanha .cabecalho-app strong");
  if (tituloCampanha) {
    tituloCampanha.textContent = t("campanha_titulo");
  }

  if (btnVoltarInicioCampanha) {
    btnVoltarInicioCampanha.textContent = t("inicio");
  }

  const cardIniciante = document.querySelector("#cardModoIniciante h2");
  if (cardIniciante) cardIniciante.textContent = t("modo_iniciante");

  const cardIntermediario = document.querySelector("#cardModoIntermediario h2");
  if (cardIntermediario) cardIntermediario.textContent = t("modo_intermediario");

  const cardAvancado = document.querySelector("#cardModoAvancado h2");
  if (cardAvancado) cardAvancado.textContent = t("modo_avancado");

  const btnContinuarNivel = document.getElementById("btnContinuarNivel");
  if (btnContinuarNivel) {
    btnContinuarNivel.textContent = t("continuar");
  }

  const tituloMapa = document.querySelector(".mapa-campanha .titulo-secao h2");
  if (tituloMapa) {
    tituloMapa.textContent = t("mapa_progresso");
  }
  const badges = document.querySelectorAll(".modo-topo .badge");

if (badges[0]) badges[0].textContent = t("modo_liberado");
if (badges[1]) badges[1].textContent = t("modo_bloqueado");
if (badges[2]) badges[2].textContent = t("modo_bloqueado");

const descricoes = document.querySelectorAll(".modo-card p");

if (descricoes[0]) descricoes[0].textContent = t("modo_iniciante_desc");
if (descricoes[1]) descricoes[1].textContent = t("modo_intermediario_desc");
if (descricoes[2]) descricoes[2].textContent = t("modo_avancado_desc");
if (tituloBiblioteca) {
  tituloBiblioteca.textContent = `📚 ${t("biblioteca_titulo")}`;
}

if (btnBibAlfabeto) {
  btnBibAlfabeto.textContent = `🔤 ${t("alfabeto")}`;
}

if (btnBibNumeros) {
  btnBibNumeros.textContent = `🔢 ${t("numeros")}`;
}

if (btnBibCodigoQ) {
  btnBibCodigoQ.textContent = `📡 ${t("codigo_q")}`;
}

if (btnBibSinaisServico) {
  btnBibSinaisServico.textContent = `⚡ ${t("sinais_servico")}`;
}

if (btnBibAbreviacoes) {
  btnBibAbreviacoes.textContent = `📚 ${t("abreviacoes")}`;
}

if (btnBibCaracteresEspeciais) {
  btnBibCaracteresEspeciais.textContent = `🔣 ${t("caracteres_especiais")}`;
}

if (btnBibTreinoAuditivo) {
  btnBibTreinoAuditivo.textContent = `🎧 ${t("treino_auditivo")}`;
}

if (btnVoltarInicioBiblioteca) {
  btnVoltarInicioBiblioteca.textContent = t("voltar_inicio");
}

if (btnVoltarMenuBiblioteca) {
  btnVoltarMenuBiblioteca.textContent = idiomaAtual === "en" ? "Back to Library" : "Voltar à Biblioteca";
}

if (btnVoltarCodigoQ) {
  btnVoltarCodigoQ.textContent = idiomaAtual === "en" ? "Back to Q Codes" : "Voltar ao Código Q";
}
const badgeTreinoLivre = document.querySelector(".badge-treino-livre");
if (badgeTreinoLivre) {
  badgeTreinoLivre.textContent = t("treino_livre_titulo").toUpperCase();
}

const labelCodigoManipulador = document.querySelector(".painel-manipulador span");
if (labelCodigoManipulador) {
  labelCodigoManipulador.textContent = t("codigo_transmitido");
}

const labelDecodificacao = document.querySelector(".painel-decodificado .label");
if (labelDecodificacao) {
  labelDecodificacao.textContent = t("decodificacao_aproximada");
}

const labelModoManipulador = document.querySelector(".painel-modo-manipulador > span");
if (labelModoManipulador) {
  labelModoManipulador.textContent = t("modo_interpretacao");
}

if (btnManipuladorIniciante) {
  btnManipuladorIniciante.textContent = t("iniciante");
}

if (btnManipuladorPro) {
  btnManipuladorPro.textContent = "Pro";
}

if (btnMorseManipulador) {
  btnMorseManipulador.textContent = t("transmitir").toUpperCase();
}

if (btnLimparManipulador) {
  btnLimparManipulador.textContent = t("limpar");
}

if (btnVoltarInicioManipulador) {
  btnVoltarInicioManipulador.textContent = t("inicio");
}
const assinaturaInicialTexto = document.querySelector(".assinatura-inicial div");

if (assinaturaInicialTexto) {
  assinaturaInicialTexto.textContent = t("desenvolvido_por");
}
const tituloMissaoColapso = document.querySelector("#telaMissao .badge");

if (tituloMissaoColapso) {
  tituloMissaoColapso.textContent = t("missao_colapso_titulo");
}

if (btnVoltarInicioMissao) {
  btnVoltarInicioMissao.textContent = t("missao_colapso_botao_voltar");
}

if (btnIniciarPelaMissao) {
  btnIniciarPelaMissao.textContent = t("missao_colapso_botao_iniciar");
}
if (btnMorse) {
  btnMorse.textContent = t("jogo_transmitir");
}

if (btnEnviar) {
  btnEnviar.innerHTML = `
    <span>➤</span>
    <span>${t("jogo_enviar")}</span>
  `;
}

if (btnEspacoLetra) {
  btnEspacoLetra.textContent = t("jogo_espaco_letra");
}

if (btnEspacoPalavra) {
  btnEspacoPalavra.textContent = t("jogo_espaco_palavra");
}

if (btnLimpar) {
  btnLimpar.textContent = t("jogo_limpar");
}

if (btnReiniciar) {
  btnReiniciar.textContent = t("jogo_reiniciar_nivel");
}

if (btnVoltarCampanha) {
  btnVoltarCampanha.textContent = t("jogo_mapa_jogo");
}

const labelsTopoJogo = document.querySelectorAll("#telaJogo .topo-jogo .label");

if (labelsTopoJogo[0]) {
  labelsTopoJogo[0].textContent = idiomaAtual === "en" ? "Level" : "Nível";
}

if (labelsTopoJogo[1]) {
  labelsTopoJogo[1].textContent = idiomaAtual === "en" ? "Score" : "Pontuação";
}

const labelCodigoEnviadoJogo = document.querySelector(".codigo-enviado-card span");

if (labelCodigoEnviadoJogo) {
  labelCodigoEnviadoJogo.textContent = t("jogo_codigo_enviado");
}
document.querySelectorAll("[data-i18n]").forEach((el) => {
  el.textContent = t(el.dataset.i18n);
});

document.querySelectorAll("[data-i18n-html]").forEach((el) => {
  el.innerHTML = t(el.dataset.i18nHtml);
});
if (btnAbrirRelatorioOperador) {
  btnAbrirRelatorioOperador.textContent = t("ranking_meu_relatorio");
}

if (btnVoltarCampanhaRanking) {
  btnVoltarCampanhaRanking.textContent = t("ranking_mapa_jogo");
}

if (btnVoltarInicio) {
  btnVoltarInicio.textContent = t("ranking_inicio");
}
}
const badgeRanking = document.querySelector("#telaRanking .badge");

if (badgeRanking) {
  badgeRanking.textContent = t("ranking_badge");
}

const tituloRanking = document.querySelector("#telaRanking h1");

if (tituloRanking) {
  tituloRanking.textContent = t("ranking_titulo");
}

const subtituloRanking = document.querySelector("#telaRanking .subtitulo-ranking");

if (subtituloRanking) {
  subtituloRanking.textContent = t("ranking_subtitulo");
}
function confirmarEntradaOperador() {
  const nomeDigitado = inputNomeOperador.value.trim();

  if (!nomeDigitado || nomeDigitado.length < 2) {
    if (feedbackEntradaOperador) {
      feedbackEntradaOperador.textContent = "Digite um nome de operador.";
      feedbackEntradaOperador.className = "feedback entrada-feedback erro";
    }

    inputNomeOperador.focus();
    return;
  }

  nomeOperador = nomeDigitado;
  localStorage.setItem("operadorMorseNome", nomeDigitado);
  localStorage.setItem("edsMorseIdioma", idiomaAtual);

  if (feedbackEntradaOperador) {
    feedbackEntradaOperador.textContent = "";
    feedbackEntradaOperador.className = "feedback entrada-feedback";
  }

  atualizarPainelInicialOperador();
  mostrarTela(telaInicial);
}
function carregarPreferencias() {
  const nomeSalvo = localStorage.getItem("operadorMorseNome");

  if (nomeSalvo) {
    nomeOperador = nomeSalvo;
    inputNomeOperador.value = "";
  }

  modoAtual = MODO_INICIANTE;
  nivelAtualIndex = obterNivelLiberado(MODO_INICIANTE);
}

function mostrarTela(tela, registrarHistorico = true) {
  pararTodosOsSons();
  if (temporizadorFinalAutomatico) {
    clearTimeout(temporizadorFinalAutomatico);
    temporizadorFinalAutomatico = null;
  }
  
  if (temporizadorEfeitoFimJogo && tela !== telaFimJogo) {
    clearTimeout(temporizadorEfeitoFimJogo);
    temporizadorEfeitoFimJogo = null;
    document.body.classList.remove("fim-jogo-celebracao");
  }
  if (telaEntradaOperador) telaEntradaOperador.classList.remove("ativa");
  telaInicial.classList.remove("ativa");
  telaMissao.classList.remove("ativa");
  telaBiblioteca.classList.remove("ativa");
  telaCampanha.classList.remove("ativa");
  telaLicao.classList.remove("ativa");
  telaJogo.classList.remove("ativa");
  telaFinal.classList.remove("ativa");
  if (telaTransicaoFase) telaTransicaoFase.classList.remove("ativa");
  telaFimJogo.classList.remove("ativa");
  telaRanking.classList.remove("ativa");
if (telaRelatorioOperador) telaRelatorioOperador.classList.remove("ativa");
telaRegrasFAQ.classList.remove("ativa");
telaManipulador.classList.remove("ativa");
  if (telaSalaSecretaSenha) telaSalaSecretaSenha.classList.remove("ativa");
  if (telaSalaSecretaFragmentos) telaSalaSecretaFragmentos.classList.remove("ativa");
  if (telaSalaSecretaFinal) telaSalaSecretaFinal.classList.remove("ativa");

  tela.classList.add("ativa");

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

  tela.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

  if (registrarHistorico) {
    registrarEstadoNavegacao();
  }
}

const MAPA_TELAS_APP = {
  telaEntradaOperador,
  telaInicial,
  telaMissao,
  telaBiblioteca,
  telaCampanha,
  telaLicao,
  telaJogo,
  telaFinal,
  telaTransicaoFase,
  telaFimJogo,
  telaRanking,
telaRelatorioOperador,
telaRegrasFAQ,
telaManipulador,
  telaSalaSecretaSenha,
  telaSalaSecretaFragmentos,
  telaSalaSecretaFinal
};

function getIdTelaAtual() {
  const telaAtiva = document.querySelector(".tela.ativa");
  return telaAtiva ? telaAtiva.id : "telaInicial";
}

function registrarEstadoNavegacao() {
  const estado = {
    telaId: getIdTelaAtual(),
    modo: modoAtual,
    visualizandoMapaModo: document.body.classList.contains("visualizando-mapa-modo")
  };

  history.pushState(estado, "", "");
}

function aplicarEstadoNavegacao(estado) {
  if (!estado || !estado.telaId) {
    mostrarTela(telaInicial, false);
    return;
  }

  if (estado.modo) {
    modoAtual = estado.modo;
  }

  document.body.classList.toggle(
    "visualizando-mapa-modo",
    !!estado.visualizandoMapaModo
  );

  const tela = MAPA_TELAS_APP[estado.telaId] || telaInicial;

  if (tela === telaCampanha) {
    renderizarCampanha();
  }

  mostrarTela(tela, false);
}

window.addEventListener("popstate", (evento) => {
  pararTodosOsSons();

  const telaAtual = getIdTelaAtual();

  if (telaAtual === "telaInicial") {
    history.pushState(
      {
        telaId: "telaInicial",
        modo: MODO_INICIANTE,
        visualizandoMapaModo: false
      },
      "",
      ""
    );

    return;
  }

  aplicarEstadoNavegacao(evento.state);
});

function voltarInicio() {
  document.body.classList.remove("visualizando-mapa-modo");

  mostrarTela(telaInicial, false);

  history.replaceState(
    {
      telaId: "telaInicial",
      modo: MODO_INICIANTE,
      visualizandoMapaModo: false
    },
    "",
    ""
  );

  history.pushState(
    {
      telaId: "telaInicial",
      modo: MODO_INICIANTE,
      visualizandoMapaModo: false
    },
    "",
    ""
  );
}
function abrirRegrasFAQ() {
  document.body.classList.remove("visualizando-mapa-modo");
  mostrarTela(telaRegrasFAQ);
}
function abrirMissao() {
  mostrarTela(telaMissao);
  prepararAudio();
  animarTextoMissao();
}

let temporizadorDigitacaoMissao = null;
let osciladoresMissaoAnimada = [];

function getTextoMissaoColapso() {
  return IDIOMAS[idiomaAtual]?.missao_colapso_textos ||
    IDIOMAS.pt.missao_colapso_textos ||
    [];
}

function animarTextoMissao() {
  const areaTexto = document.getElementById("textoMissaoAnimado");
  if (!areaTexto) return;

  if (temporizadorDigitacaoMissao) {
    clearTimeout(temporizadorDigitacaoMissao);
    temporizadorDigitacaoMissao = null;
  }

  areaTexto.innerHTML = "";

  const textosMissao = getTextoMissaoColapso();

  const paragrafos = textosMissao.map(() => {
    const p = document.createElement("p");
    areaTexto.appendChild(p);
    return p;
  });

  let indiceParagrafo = 0;
  let indiceLetra = 0;

  function digitarProximoCaractere() {
    if (indiceParagrafo >= textosMissao.length) {
      temporizadorDigitacaoMissao = null;
      return;
    }

    const textoAtual = textosMissao[indiceParagrafo];
    const caractere = textoAtual[indiceLetra];

    paragrafos[indiceParagrafo].textContent += caractere;

    const duracaoMorse = tocarSinalDigitacaoMissao(caractere);

    indiceLetra += 1;

    if (indiceLetra >= textoAtual.length) {
      indiceParagrafo += 1;
      indiceLetra = 0;
      temporizadorDigitacaoMissao = setTimeout(digitarProximoCaractere, 520);
      return;
    }

    const pausaVisual = caractere === "." || caractere === "," ? 260 : 40;
    const pausa = Math.max(duracaoMorse, pausaVisual);

    temporizadorDigitacaoMissao = setTimeout(digitarProximoCaractere, pausa);
  }

  digitarProximoCaractere();
}

function tocarSinalDigitacaoMissao(caractere) {
  const unidadeMissaoMs = 48;
  const caractereNormalizado = String(caractere || "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (caractereNormalizado === " ") {
    return unidadeMissaoMs * 7;
  }

  const codigoMorse = TABELA_MORSE[caractereNormalizado];

  if (!codigoMorse) {
    return unidadeMissaoMs * 2;
  }

  prepararAudio();

  if (!audioContext) {
    return unidadeMissaoMs * 3;
  }

  let tempoAtual = audioContext.currentTime;
  const unidadeSegundos = unidadeMissaoMs / 1000;

  codigoMorse.split("").forEach((simbolo, indice) => {
    const duracao = simbolo === "." ? unidadeSegundos : unidadeSegundos * 3;

    tocarTomCurtoMissao(tempoAtual, duracao);

    tempoAtual += duracao;

    if (indice < codigoMorse.length - 1) {
      tempoAtual += unidadeSegundos;
    }
  });

  const duracaoTotalMs =
    codigoMorse
      .split("")
      .reduce((total, simbolo) => {
        return total + (simbolo === "." ? unidadeMissaoMs : unidadeMissaoMs * 3);
      }, 0) +
    Math.max(0, codigoMorse.length - 1) * unidadeMissaoMs +
    unidadeMissaoMs * 3;

  return duracaoTotalMs;
}

function tocarTomCurtoMissao(inicioAudio, duracaoSegundos) {
  const oscilador = audioContext.createOscillator();
  const ganho = audioContext.createGain();

  oscilador.type = "sine";
  oscilador.frequency.value = frequenciaSidetone || 650;

  ganho.gain.setValueAtTime(0.0001, inicioAudio);
  ganho.gain.exponentialRampToValueAtTime(0.035, inicioAudio + 0.008);
  ganho.gain.setValueAtTime(0.035, inicioAudio + Math.max(0.01, duracaoSegundos - 0.012));
  ganho.gain.exponentialRampToValueAtTime(0.0001, inicioAudio + duracaoSegundos);

  oscilador.connect(ganho);
  ganho.connect(audioContext.destination);

  osciladoresMissaoAnimada.push(oscilador);

  oscilador.onended = () => {
    osciladoresMissaoAnimada = osciladoresMissaoAnimada.filter((item) => item !== oscilador);
  };

  oscilador.start(inicioAudio);
  oscilador.stop(inicioAudio + duracaoSegundos + 0.02);
}

function pararAnimacaoMissao() {
  if (temporizadorDigitacaoMissao) {
    clearTimeout(temporizadorDigitacaoMissao);
    temporizadorDigitacaoMissao = null;
  }

  osciladoresMissaoAnimada.forEach((oscilador) => {
    try {
      oscilador.stop();
    } catch (erro) {}
  });

  osciladoresMissaoAnimada = [];
}

function pararTodosOsSons() {
  pararAnimacaoMissao();
  pararSequenciaMorse();

  if (typeof pararTomMorse === "function") {
    pararTomMorse();
  }
  sonsChaveAtivos.forEach((som) => {
    try {
      som.oscilador.stop();
    } catch (erro) {}
  });

  sonsChaveAtivos = [];
  somChaveAtual = null;

  if (typeof pararTimerMissao === "function") {
    pararTimerMissao();
  }

  if (temporizadorLetra) {
    clearTimeout(temporizadorLetra);
    temporizadorLetra = null;
  }

  if (temporizadorPalavra) {
    clearTimeout(temporizadorPalavra);
    temporizadorPalavra = null;
  }
}
function abrirBiblioteca() {
  tituloBiblioteca.textContent = `📚 ${t("biblioteca_titulo")}`;
  descricaoBiblioteca.textContent = t("biblioteca_desc");

  gridBibliotecaMorse.innerHTML = "";
  btnVoltarMenuBiblioteca.style.display = "none";
  btnVoltarCodigoQ.style.display = "none";
  btnVoltarInicioBiblioteca.style.display = "inline-block";
  menuBiblioteca.style.display = "grid";

  mostrarTela(telaBiblioteca);
}

function montarCardsBiblioteca(itens) {
  gridBibliotecaMorse.innerHTML = itens
    .map((item) => {
      const morse = TABELA_MORSE[item];
      const fonico = getDicaFonico(item);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(item)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          ${
            fonico
              ? `<span class="fonico">${escaparHtml(fonico)}</span>`
              : ""
          }
          <span class="ouvir">${t("toque_para_ouvir")}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });
}

function abrirBibliotecaAlfabeto() {
  tituloBiblioteca.textContent = `🔤 ${t("alfabeto_morse_titulo")}`;
  descricaoBiblioteca.textContent = t("alfabeto_desc");

  const letras = Object.keys(TABELA_MORSE).filter((item) => /^[A-Z]$/.test(item));
  montarCardsBiblioteca(letras);

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  menuBiblioteca.style.display = "none";

  telaBiblioteca.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
function abrirBibliotecaNumeros() {
  tituloBiblioteca.textContent = `🔢 ${t("numeros_morse_titulo")}`;
  descricaoBiblioteca.textContent = t("numeros_desc");

  const numeros = Object.keys(TABELA_MORSE).filter((item) => /^[0-9]$/.test(item));
  montarCardsBiblioteca(numeros);

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  menuBiblioteca.style.display = "none";

  telaBiblioteca.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}
function abrirBibliotecaCodigoQ() {
  tituloBiblioteca.textContent = `📡 ${t("codigo_q_titulo")}`;
  descricaoBiblioteca.textContent = t("codigo_q_desc");

  gridBibliotecaMorse.innerHTML = `
    <button class="cartao-caractere categoria-q" id="btnQOperacao">
      <span class="letra">📡</span>
      <span class="morse">${t("q_operacao")}</span>
      <span class="fonico">${t("q_operacao_desc")}</span>
    </button>

    <button class="cartao-caractere categoria-q" id="btnQEstacao">
      <span class="letra">🏠</span>
      <span class="morse">${t("q_estacao")}</span>
      <span class="fonico">${t("q_estacao_desc")}</span>
    </button>

    <button class="cartao-caractere categoria-q" id="btnQQualidade">
      <span class="letra">📶</span>
      <span class="morse">${t("q_qualidade")}</span>
      <span class="fonico">${t("q_qualidade_desc")}</span>
    </button>

    <button class="cartao-caractere categoria-q" id="btnQTrafego">
      <span class="letra">📨</span>
      <span class="morse">${t("q_trafego")}</span>
      <span class="fonico">${t("q_trafego_desc")}</span>
    </button>
  `;

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  document.getElementById("btnQOperacao").addEventListener("click", abrirQOperacao);
  document.getElementById("btnQEstacao").addEventListener("click", abrirQEstacao);
  document.getElementById("btnQQualidade").addEventListener("click", abrirQQualidade);
  document.getElementById("btnQTrafego").addEventListener("click", abrirQTrafego);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const CODIGO_Q = {
  operacao: [
    { codigo: "QRL", significado: "A frequência está ocupada." },
    { codigo: "QRM", significado: "Sofro interferência de outra estação." },
    { codigo: "QRN", significado: "Sofro interferência atmosférica." },
    { codigo: "QRO", significado: "Aumente a potência de transmissão." },
    { codigo: "QRP", significado: "Diminua a potência de transmissão." },
    { codigo: "QRQ", significado: "Transmita mais depressa." },
    { codigo: "QRS", significado: "Transmita mais devagar." },
    { codigo: "QRT", significado: "Cesse a transmissão." },
    { codigo: "QRV", significado: "Estou preparado." },
    { codigo: "QRX", significado: "Aguarde. Chamarei novamente." },
    { codigo: "QSY", significado: "Mude para outra frequência." }
  ],

  estacao: [
    { codigo: "QRA", significado: "Qual é o nome da sua estação?" },
    { codigo: "QRB", significado: "Qual a distância entre nossas estações?" },
    { codigo: "QRG", significado: "Qual é minha frequência exata?" },
    { codigo: "QRH", significado: "Minha frequência varia?" },
    { codigo: "QRZ", significado: "Quem está me chamando?" },
    { codigo: "QTH", significado: "Qual é sua localização?" },
    { codigo: "QTR", significado: "Qual é a hora certa?" }
  ],

  qualidade: [
    { codigo: "QRI", significado: "Qual é a tonalidade da minha transmissão?" },
    { codigo: "QRK", significado: "Qual é a inteligibilidade dos meus sinais?" },
    { codigo: "QSA", significado: "Qual é a intensidade dos meus sinais?" },
    { codigo: "QSB", significado: "Seus sinais estão variando." },
    { codigo: "QSD", significado: "Minha transmissão está defeituosa?" },
    { codigo: "QSK", significado: "Posso ouvir entre seus sinais." }
  ],

  trafego: [
    { codigo: "QSL", significado: "Confirmo o recebimento." },
    { codigo: "QSM", significado: "Repita a última mensagem." },
    { codigo: "QSN", significado: "Você me escutou?" },
    { codigo: "QSO", significado: "Posso comunicar diretamente." },
    { codigo: "QSP", significado: "Retransmitirei a mensagem." },
    { codigo: "QSR", significado: "Repita sua chamada." },
    { codigo: "QSS", significado: "Frequência de trabalho." },
    { codigo: "QSU", significado: "Transmita ou responda nesta frequência." },
    { codigo: "QSV", significado: "Transmita uma série de V." },
    { codigo: "QSW", significado: "Transmitirei nesta frequência." },
    { codigo: "QSX", significado: "Escutarei em outra frequência." },
    { codigo: "QTA", significado: "Cancele a mensagem anterior." },
    { codigo: "QTC", significado: "Tenho mensagem para transmitir." },
    { codigo: "QRU", significado: "Não tenho nada para você." },
    { codigo: "QSJ", significado: "Valor ou taxa da comunicação." }
  ]
};
const CODIGO_Q_EN = {
  operacao: [
    { codigo: "QRL", significado: "The frequency is busy." },
    { codigo: "QRM", significado: "I am experiencing interference from another station." },
    { codigo: "QRN", significado: "I am experiencing atmospheric interference." },
    { codigo: "QRO", significado: "Increase transmitter power." },
    { codigo: "QRP", significado: "Decrease transmitter power." },
    { codigo: "QRQ", significado: "Send faster." },
    { codigo: "QRS", significado: "Send more slowly." },
    { codigo: "QRT", significado: "Stop transmitting." },
    { codigo: "QRV", significado: "I am ready." },
    { codigo: "QRX", significado: "Wait. I will call again." },
    { codigo: "QSY", significado: "Change to another frequency." }
  ],

  estacao: [
    { codigo: "QRA", significado: "What is the name of your station?" },
    { codigo: "QRB", significado: "What is the distance between our stations?" },
    { codigo: "QRG", significado: "What is my exact frequency?" },
    { codigo: "QRH", significado: "Does my frequency vary?" },
    { codigo: "QRZ", significado: "Who is calling me?" },
    { codigo: "QTH", significado: "What is your location?" },
    { codigo: "QTR", significado: "What is the correct time?" }
  ],

  qualidade: [
    { codigo: "QRI", significado: "What is the tone of my transmission?" },
    { codigo: "QRK", significado: "What is the readability of my signals?" },
    { codigo: "QSA", significado: "What is the strength of my signals?" },
    { codigo: "QSB", significado: "Your signals are fading." },
    { codigo: "QSD", significado: "Is my transmission defective?" },
    { codigo: "QSK", significado: "I can hear between your signals." }
  ],

  trafego: [
    { codigo: "QSL", significado: "I acknowledge receipt." },
    { codigo: "QSM", significado: "Repeat the last message." },
    { codigo: "QSN", significado: "Did you hear me?" },
    { codigo: "QSO", significado: "I can communicate directly." },
    { codigo: "QSP", significado: "I will relay the message." },
    { codigo: "QSR", significado: "Repeat your call." },
    { codigo: "QSS", significado: "Working frequency." },
    { codigo: "QSU", significado: "Send or reply on this frequency." },
    { codigo: "QSV", significado: "Send a series of V." },
    { codigo: "QSW", significado: "I will transmit on this frequency." },
    { codigo: "QSX", significado: "I will listen on another frequency." },
    { codigo: "QTA", significado: "Cancel the previous message." },
    { codigo: "QTC", significado: "I have a message to send." },
    { codigo: "QRU", significado: "I have nothing for you." },
    { codigo: "QSJ", significado: "Communication charge or fee." }
  ]
};
const MORSE_SINAIS_SERVICO = {
  AR: ".-.-.",
  AS: ".-...",
  BT: "-...-",
  HH: "........",
  IMI: "..--..",
  KN: "-.--.",
  SK: "...-.-",
  VA: "...-.-"
};

function obterMorseSinalServico(codigo) {
  const chave = String(codigo || "").toUpperCase().trim();

  if (MORSE_SINAIS_SERVICO[chave]) {
    return MORSE_SINAIS_SERVICO[chave];
  }

  return textoParaMorse(chave);
}
const SINAIS_SERVICO = [
  { codigo: "AR", significado: "Fim da transmissão." },
  { codigo: "AS", significado: "Espere." },
  { codigo: "BT", significado: "Separação entre partes da mensagem." },
  { codigo: "C", significado: "Certo. Confirmativo." },
  { codigo: "DE", significado: "De. Indica a estação que está transmitindo." },
  { codigo: "HH", significado: "Erro. Vou corrigir." },
  { codigo: "IMI", significado: "Repita. Interrogação ou pedido de repetição." },
  { codigo: "K", significado: "Câmbio. Transmita." },
  { codigo: "KN", significado: "Câmbio apenas para a estação chamada." },
  { codigo: "NR", significado: "Número." },
  { codigo: "R", significado: "Recebido." },
  { codigo: "RPT", significado: "Repita." },
  { codigo: "SK", significado: "Fim do contato." },
  { codigo: "VA", significado: "Fim de trabalho." },
  { codigo: "U", significado: "Urgente." },
  { codigo: "UU", significado: "Urgentíssimo." },
  { codigo: "WA", significado: "Palavra após." },
  { codigo: "WB", significado: "Palavra antes." }
];
const SINAIS_SERVICO_EN = [
  { codigo: "AR", significado: "End of transmission." },
  { codigo: "AS", significado: "Wait." },
  { codigo: "BT", significado: "Separation between parts of the message." },
  { codigo: "C", significado: "Correct. Affirmative." },
  { codigo: "DE", significado: "From. Indicates the station that is transmitting." },
  { codigo: "HH", significado: "Error. I will correct it." },
  { codigo: "IMI", significado: "Repeat. Question or request for repetition." },
  { codigo: "K", significado: "Over. Transmit." },
  { codigo: "KN", significado: "Over only to the called station." },
  { codigo: "NR", significado: "Number." },
  { codigo: "R", significado: "Received." },
  { codigo: "RPT", significado: "Repeat." },
  { codigo: "SK", significado: "End of contact." },
  { codigo: "VA", significado: "End of work." },
  { codigo: "U", significado: "Urgent." },
  { codigo: "UU", significado: "Very urgent." },
  { codigo: "WA", significado: "Word after." },
  { codigo: "WB", significado: "Word before." }
];

const ABREVIACOES_MORSE = [
  { codigo: "AGN", significado: "Novamente." },
  { codigo: "ANT", significado: "Antena." },
  { codigo: "BK", significado: "Interrompa / volte a transmitir." },
  { codigo: "CQ", significado: "Chamando qualquer estação." },
  { codigo: "CUL", significado: "Até logo. Nos vemos depois." },
  { codigo: "DE", significado: "De. Indica quem está transmitindo." },
  { codigo: "DX", significado: "Comunicação a longa distância." },
  { codigo: "FER", significado: "Por / para." },
  { codigo: "GA", significado: "Boa tarde." },
  { codigo: "GB", significado: "Adeus." },
  { codigo: "GE", significado: "Boa noite." },
  { codigo: "GL", significado: "Boa sorte." },
  { codigo: "GM", significado: "Bom dia." },
  { codigo: "GUD", significado: "Bom." },
  { codigo: "HI", significado: "Risada em telegrafia." },
  { codigo: "HR", significado: "Aqui." },
  { codigo: "HW", significado: "Como você copia?" },
  { codigo: "OM", significado: "Operador / amigo operador." },
  { codigo: "OP", significado: "Operador." },
  { codigo: "PSE", significado: "Por favor." },
  { codigo: "RIG", significado: "Equipamento de rádio." },
  { codigo: "RPT", significado: "Repita." },
  { codigo: "RST", significado: "Relatório de sinal: legibilidade, intensidade e tom." },
  { codigo: "RX", significado: "Receptor / receber." },
  { codigo: "TX", significado: "Transmissor / transmitir." },
  { codigo: "TNX", significado: "Obrigado." },
  { codigo: "TU", significado: "Obrigado." },
  { codigo: "UR", significado: "Seu / sua." },
  { codigo: "WX", significado: "Tempo / clima." },
  { codigo: "YL", significado: "Jovem senhora / operadora." },
  { codigo: "XYL", significado: "Esposa." },
  { codigo: "73", significado: "Saudações / cordial abraço." },
  { codigo: "88", significado: "Abraços e beijos." }
];
const ABREVIACOES_MORSE_EN = [
  { codigo: "AGN", significado: "Again." },
  { codigo: "ANT", significado: "Antenna." },
  { codigo: "BK", significado: "Break / back to transmission." },
  { codigo: "CQ", significado: "Calling any station." },
  { codigo: "CUL", significado: "See you later." },
  { codigo: "DE", significado: "From. Indicates who is transmitting." },
  { codigo: "DX", significado: "Long-distance communication." },
  { codigo: "FER", significado: "For." },
  { codigo: "GA", significado: "Good afternoon." },
  { codigo: "GB", significado: "Goodbye." },
  { codigo: "GE", significado: "Good evening." },
  { codigo: "GL", significado: "Good luck." },
  { codigo: "GM", significado: "Good morning." },
  { codigo: "GUD", significado: "Good." },
  { codigo: "HI", significado: "Laughter in telegraphy." },
  { codigo: "HR", significado: "Here." },
  { codigo: "HW", significado: "How do you copy?" },
  { codigo: "OM", significado: "Operator / fellow operator." },
  { codigo: "OP", significado: "Operator." },
  { codigo: "PSE", significado: "Please." },
  { codigo: "RIG", significado: "Radio equipment." },
  { codigo: "RPT", significado: "Repeat." },
  { codigo: "RST", significado: "Signal report: readability, strength and tone." },
  { codigo: "RX", significado: "Receiver / receive." },
  { codigo: "TX", significado: "Transmitter / transmit." },
  { codigo: "TNX", significado: "Thanks." },
  { codigo: "TU", significado: "Thank you." },
  { codigo: "UR", significado: "Your." },
  { codigo: "WX", significado: "Weather." },
  { codigo: "YL", significado: "Young lady / female operator." },
  { codigo: "XYL", significado: "Wife." },
  { codigo: "73", significado: "Best regards." },
  { codigo: "88", significado: "Hugs and kisses." }
];

const CARACTERES_ESPECIAIS_MORSE = [
  { codigo: ".", significado: "Ponto final." },
  { codigo: ",", significado: "Vírgula." },
  { codigo: "?", significado: "Interrogação." },
  { codigo: "/", significado: "Barra." },
  { codigo: "=", significado: "Igual / separação." },
  { codigo: "+", significado: "Mais." },
  { codigo: "@", significado: "Arroba." }
];
const CARACTERES_ESPECIAIS_MORSE_EN = [
  { codigo: ".", significado: "Period." },
  { codigo: ",", significado: "Comma." },
  { codigo: "?", significado: "Question mark." },
  { codigo: "/", significado: "Slash." },
  { codigo: "=", significado: "Equal sign / separator." },
  { codigo: "+", significado: "Plus sign." },
  { codigo: "@", significado: "At sign." }
];

const PALAVRAS_COMUNS_MORSE = [
  "SOL", "MAR", "RIO", "LUZ", "SOM", "FIO", "RUA", "AR", "REDE", "BASE",
  "RADIO", "MORSE", "SINAL", "TORRE", "POSTO", "ANTENA", "CANAL", "CHAVE", "FONIA", "CABO",
  "MISSAO", "COMANDO", "ORDEM", "ALERTA", "APOIO", "GRUPO", "EQUIPE", "PONTO", "ROTA", "MAPA",
  "ENVIE", "RECEBA", "REPITA", "CONFIRME", "AGUARDE", "COPIE", "CHAME", "ESCUTE", "TRANSMITA", "RESPONDA",
  "NORTE", "SUL", "LESTE", "OESTE", "CENTRO", "AREA", "SETOR", "LINHA", "LOCAL", "TEMPO",
  "COLAPSO", "SOBREVIVA", "ENERGIA", "SISTEMA", "FALHA", "CODIGO", "OPERADOR", "ESTACAO", "EMERGENCIA", "CONTATO",
  "FOCO", "RITMO", "PAUSA", "PONTO", "TRACO", "LETRA", "NUMERO", "PALAVRA", "FRASE", "AUDIO",
  "PATRULHA", "GUARDA", "PONTE", "CAMPO", "ABRIGO", "PORTAO", "VIATURA", "MOTOR", "BATERIA", "ALARME",
  "MENSAGEM", "TRANSMISSAO", "FREQUENCIA", "INTERFERENCIA", "CONFIRMACAO", "LOCALIZACAO", "COORDENADA", "PRIORIDADE", "DESTINO", "ORIGEM",
  "FORTE", "FRACO", "CLARO", "RUIDO", "PRONTO", "SEGURO", "URGENTE", "FINAL", "INICIO", "CAMBIO"
];

const FRASES_OPERACIONAIS_MORSE = [
  "QSL OK",
  "BASE QRV",
  "SINAL OK",
  "RADIO 1",
  "POSTO 2",
  "TORRE QRV",
  "QTC BASE",
  "QRV POSTO",
  "SINAL FORTE",
  "CAMBIO",
  "BASE QSL",
  "RADIO QRV",
  "POSTO QSL",
  "TORRE OK",
  "QRM FORTE",
  "QRN FRACO",
  "QTC SINAL",
  "BASE 1",
  "POSTO 3",
  "RADIO BASE"
];

const MENSAGENS_OPERACIONAIS_MORSE = [
  "QSL RECEBIDO",
  "QRV PARA TRANSMITIR",
  "QAP ESTACAO ALFA",
  "QTH BRASILIA",
  "SOS NECESSITO APOIO",
  "POSTO BRAVO CONFIRMAR",
  "EQUIPE ALFA LOCALIZADA",
  "INICIAR RESGATE",
  "ROTA SEGURA CONFIRMADA",
  "MENSAGEM RECEBIDA",
  "BASE ALFA QRV",
  "CANAL LIVRE PARA QTC",
  "SINAL FRACO REPITA",
  "INTERFERENCIA FORTE",
  "OPERADOR AGUARDE",
  "COORDENADA RECEBIDA",
  "PONTO DE APOIO ATIVO",
  "ABRIGO LOCALIZADO",
  "TRANSMISSAO FINALIZADA",
  "REDE OPERACIONAL"
];
function gerarBancoGruposDeCincoTreinoAuditivo(qtd = 500) {
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const grupos = new Set();

  while (grupos.size < qtd) {
    let grupo = "";

    for (let i = 0; i < 5; i++) {
      grupo += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    grupos.add(grupo);
  }

  return Array.from(grupos);
}

const BANCO_GRUPOS_5_TREINO_AUDITIVO = gerarBancoGruposDeCincoTreinoAuditivo(500);

const BASE_FRASES_TREINO_AUDITIVO = [
  "BOM DIA",
  "BOA NOITE",
  "TUDO BEM",
  "ATE LOGO",
  "OBRIGADO",
  "ESTOU AQUI",
  "VAMOS LA",
  "DEU CERTO",
  "BASE QRV",
  "QSL RECEBIDO",
  "RADIO BASE",
  "POSTO 2 OK",
  "SINAL FORTE",
  "SINAL FRACO",
  "MANTER ESCUTA",
  "CANAL LIVRE",
  "QTC BASE",
  "TORRE QRV",
  "BASE QSL",
  "RADIO QRV",
  "POSTO QSL",
  "TORRE OK",
  "QRM FORTE",
  "QRN FRACO",
  "QTC SINAL",
  "BASE 1",
  "POSTO 3",
  "RADIO BASE",
  "OPERADOR QRV",
  "QTC RECEBIDO",
  "MENSAGEM OK",
  "CANAL OK",
  "REDE ATIVA",
  "REDE OPERACIONAL",
  "ESTACAO ALFA",
  "ESTACAO BRAVO",
  "ESTACAO DELTA",
  "COMUNICACAO OK",
  "TRANSMISSAO OK",
  "AGUARDE QTC",
  "QAP NA ESCUTA",
  "QRV PARA TRANSMITIR",
  "QTH BRASILIA",
  "APOIO A CAMINHO",
  "EQUIPE EM ROTA",
  "ROTA SEGURA",
  "BASE OPERACIONAL",
  "PONTO DE CONTROLE",
  "POSTO DE OBSERVACAO",
  "ALVO LOCALIZADO",
  "BUSCA INICIADA",
  "BUSCA FINALIZADA",
  "MATERIAL RECEBIDO",
  "MATERIAL ENTREGUE",
  "VIATURA PRONTA",
  "OPERACAO INICIADA",
  "OPERACAO CONCLUIDA",
  "SOLICITO APOIO",
  "SOLICITO INFORMES",
  "MANTER POSICAO",
  "PROSSEGUIR MISSAO",
  "RETORNAR BASE",
  "CHEGADA CONFIRMADA",
  "SAIDA CONFIRMADA",
  "TESTE DE RADIO",
  "CONTATO ESTABELECIDO",
  "CONTATO PERDIDO",
  "FREQUENCIA LIVRE",
  "FREQUENCIA OCUPADA",
  "INTERFERENCIA FORTE",
  "REPITA MENSAGEM",
  "COPIE MENSAGEM",
  "ENVIE QTC",
  "AGUARDE RESPOSTA",
  "SINAL CLARO",
  "SINAL LIMPO",
  "CANAL SEGURO",
  "BASE EM ALERTA",
  "POSTO SEM SINAL",
  "ROTA BLOQUEADA",
  "EQUIPE QRV",
  "RADIO FALHA",
  "MANTER CANAL",
  "TRANSMITA AGORA",
  "COPIADO BASE",
  "CAMBIO FINAL",
  "FIM DE TRANSMISSAO",
  "QRU NO MOMENTO",
  "QRT TEMPORARIO",
  "QSY CANAL 2",
  "QRX AGUARDE",
  "QSL COPIADO"
];
const BASE_FRASES_TREINO_AUDITIVO_EN = [
  "GOOD MORNING",
  "GOOD NIGHT",
  "ALL OK",
  "SEE YOU",
  "THANK YOU",
  "I AM HERE",
  "LETS GO",
  "IT WORKED",
  "BASE QRV",
  "QSL RECEIVED",
  "RADIO BASE",
  "POST 2 OK",
  "STRONG SIGNAL",
  "WEAK SIGNAL",
  "KEEP LISTENING",
  "CLEAR CHANNEL",
  "QTC BASE",
  "TOWER QRV",
  "BASE QSL",
  "RADIO QRV",
  "POST QSL",
  "TOWER OK",
  "STRONG QRM",
  "WEAK QRN",
  "QTC SIGNAL",
  "BASE 1",
  "POST 3",
  "RADIO BASE",
  "OPERATOR QRV",
  "QTC RECEIVED",
  "MESSAGE OK",
  "CHANNEL OK",
  "NETWORK ACTIVE",
  "NETWORK OPERATIONAL",
  "STATION ALPHA",
  "STATION BRAVO",
  "STATION DELTA",
  "COMMUNICATION OK",
  "TRANSMISSION OK",
  "WAIT FOR QTC",
  "QAP LISTENING",
  "QRV TO TRANSMIT",
  "QTH BRASILIA",
  "HELP IS COMING",
  "TEAM EN ROUTE",
  "SAFE ROUTE",
  "OPERATIONAL BASE",
  "CONTROL POINT",
  "OBSERVATION POST",
  "TARGET LOCATED",
  "SEARCH STARTED",
  "SEARCH FINISHED",
  "MATERIAL RECEIVED",
  "MATERIAL DELIVERED",
  "VEHICLE READY",
  "OPERATION STARTED",
  "OPERATION COMPLETED",
  "REQUEST SUPPORT",
  "REQUEST REPORTS",
  "HOLD POSITION",
  "CONTINUE MISSION",
  "RETURN TO BASE",
  "ARRIVAL CONFIRMED",
  "DEPARTURE CONFIRMED",
  "RADIO TEST",
  "CONTACT ESTABLISHED",
  "CONTACT LOST",
  "FREQUENCY CLEAR",
  "FREQUENCY BUSY",
  "STRONG INTERFERENCE",
  "REPEAT MESSAGE",
  "COPY MESSAGE",
  "SEND QTC",
  "WAIT FOR REPLY",
  "CLEAR SIGNAL",
  "CLEAN SIGNAL",
  "SECURE CHANNEL",
  "BASE ON ALERT",
  "POST NO SIGNAL",
  "ROUTE BLOCKED",
  "TEAM QRV",
  "RADIO FAILURE",
  "KEEP CHANNEL",
  "TRANSMIT NOW",
  "COPIED BASE",
  "FINAL OVER",
  "END OF TRANSMISSION",
  "QRU AT THIS TIME",
  "TEMPORARY QRT",
  "QSY CHANNEL 2",
  "QRX WAIT",
  "QSL COPIED"
];

function gerarBancoFrasesCurtasTreinoAuditivo(qtd = 300) {
  const frases = new Set(BASE_FRASES_TREINO_AUDITIVO);

  const sujeitos = [
    "BASE",
    "POSTO",
    "RADIO",
    "TORRE",
    "EQUIPE",
    "OPERADOR",
    "ESTACAO",
    "REDE",
    "CANAL",
    "ROTA"
  ];

  const acoes = [
    "QRV",
    "QSL",
    "OK",
    "AGUARDE",
    "COPIE",
    "TRANSMITA",
    "CONFIRME",
    "RETORNE",
    "PROSSIGA",
    "MANTENHA"
  ];

  const complementos = [
    "AGORA",
    "BASE",
    "POSTO 1",
    "POSTO 2",
    "SETOR 3",
    "CANAL 4",
    "SINAL 5",
    "ROTA 6",
    "QTC 7",
    "RADIO 9"
  ];

  for (const sujeito of sujeitos) {
    for (const acao of acoes) {
      for (const complemento of complementos) {
        frases.add(`${sujeito} ${acao} ${complemento}`);

        if (frases.size >= qtd) {
          return Array.from(frases).slice(0, qtd);
        }
      }
    }
  }

  return Array.from(frases).slice(0, qtd);
}
function gerarBancoFrasesCurtasTreinoAuditivoEn(qtd = 300) {
  const frases = new Set(BASE_FRASES_TREINO_AUDITIVO_EN);

  const sujeitos = [
    "BASE",
    "POST",
    "RADIO",
    "TOWER",
    "TEAM",
    "OPERATOR",
    "STATION",
    "NETWORK",
    "CHANNEL",
    "ROUTE"
  ];

  const acoes = [
    "QRV",
    "QSL",
    "OK",
    "WAIT",
    "COPY",
    "TRANSMIT",
    "CONFIRM",
    "RETURN",
    "PROCEED",
    "HOLD"
  ];

  const complementos = [
    "NOW",
    "BASE",
    "POST 1",
    "POST 2",
    "SECTOR 3",
    "CHANNEL 4",
    "SIGNAL 5",
    "ROUTE 6",
    "QTC 7",
    "RADIO 9"
  ];

  for (const sujeito of sujeitos) {
    for (const acao of acoes) {
      for (const complemento of complementos) {
        frases.add(`${sujeito} ${acao} ${complemento}`);

        if (frases.size >= qtd) {
          return Array.from(frases).slice(0, qtd);
        }
      }
    }
  }

  return Array.from(frases).slice(0, qtd);
}
const BANCO_FRASES_CURTAS_TREINO_AUDITIVO =
  gerarBancoFrasesCurtasTreinoAuditivo(300);
 
const BANCO_FRASES_CURTAS_TREINO_AUDITIVO_EN =
  gerarBancoFrasesCurtasTreinoAuditivoEn(300);

const ESCUTA_OPERACIONAL_BIBLIOTECA = [
  "QSL RECEBIDO",
  "QTH BRASILIA",
  "QRV PARA TRANSMITIR",
  "QAP NA ESCUTA",
  "SOS NECESSITO APOIO",
  "REDE OPERACIONAL",
  "ESTACAO ALFA",
  "ESTACAO BRAVO",
  "ESTACAO CHARLIE",
  "ESTACAO DELTA",
  "COMUNICACAO ESTABELECIDA",
  "TRANSMISSAO FINALIZADA",
  "AGUARDANDO INSTRUCOES",
  "MENSAGEM RECEBIDA",
  "MENSAGEM CONFIRMADA",
  "OPERADOR PRONTO",
  "FREQUENCIA LIVRE",
  "FREQUENCIA OCUPADA",
  "INICIAR TRANSMISSAO",
  "FINALIZAR TRANSMISSAO",
  "QSL COPIADO",
  "QAP PERMANENTE",
  "QTH CONFIRMADO",
  "QRV IMEDIATO",
  "APOIO A CAMINHO",
  "EQUIPE EM DESLOCAMENTO",
  "ROTA SEGURA",
  "BASE OPERACIONAL",
  "PONTO DE CONTROLE",
  "POSTO DE OBSERVACAO",
  "ALVO LOCALIZADO",
  "BUSCA INICIADA",
  "BUSCA FINALIZADA",
  "MATERIAL RECEBIDO",
  "MATERIAL ENTREGUE",
  "COMBUSTIVEL OK",
  "VIATURA PRONTA",
  "OPERACAO INICIADA",
  "OPERACAO CONCLUIDA",
  "SOLICITO APOIO",
  "SOLICITO INFORMACOES",
  "MANTER ESCUTA",
  "MANTER POSICAO",
  "PROSSEGUIR MISSAO",
  "RETORNAR BASE",
  "CHEGADA CONFIRMADA",
  "SAIDA CONFIRMADA",
  "TESTE DE COMUNICACAO",
  "CONTATO ESTABELECIDO",
  "CONTATO PERDIDO"
];
const ESCUTA_OPERACIONAL_BIBLIOTECA_EN = [
  "QSL RECEIVED",
  "QTH BRASILIA",
  "QRV TO TRANSMIT",
  "QAP LISTENING",
  "SOS NEED SUPPORT",
  "NETWORK OPERATIONAL",
  "STATION ALPHA",
  "STATION BRAVO",
  "STATION CHARLIE",
  "STATION DELTA",
  "COMMUNICATION ESTABLISHED",
  "TRANSMISSION FINISHED",
  "WAITING FOR INSTRUCTIONS",
  "MESSAGE RECEIVED",
  "MESSAGE CONFIRMED",
  "OPERATOR READY",
  "FREQUENCY CLEAR",
  "FREQUENCY BUSY",
  "START TRANSMISSION",
  "END TRANSMISSION",
  "QSL COPIED",
  "QAP PERMANENT",
  "QTH CONFIRMED",
  "QRV IMMEDIATE",
  "HELP IS COMING",
  "TEAM MOVING",
  "SAFE ROUTE",
  "OPERATIONAL BASE",
  "CONTROL POINT",
  "OBSERVATION POST",
  "TARGET LOCATED",
  "SEARCH STARTED",
  "SEARCH FINISHED",
  "MATERIAL RECEIVED",
  "MATERIAL DELIVERED",
  "FUEL OK",
  "VEHICLE READY",
  "OPERATION STARTED",
  "OPERATION COMPLETED",
  "REQUEST SUPPORT",
  "REQUEST INFORMATION",
  "KEEP LISTENING",
  "HOLD POSITION",
  "CONTINUE MISSION",
  "RETURN TO BASE",
  "ARRIVAL CONFIRMED",
  "DEPARTURE CONFIRMED",
  "COMMUNICATION TEST",
  "CONTACT ESTABLISHED",
  "CONTACT LOST"
];
function getBancoEscutaOperacional() {
  return idiomaAtual === "en"
    ? ESCUTA_OPERACIONAL_BIBLIOTECA_EN
    : ESCUTA_OPERACIONAL_BIBLIOTECA;
}
function embaralharArray(array) {
  const copia = [...array];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

let escutaOperacional = {
  indice: 0,
  acertos: 0,
  erros: 0,
  pontos: 0
};

let ouvirDigitar = {
  indice: 0,
  acertos: 0,
  erros: 0,
  pontos: 0,
  missoes: []
};

let treinoAuditivo = {
  modo: "livre",
  categoria: "letras",
  itens: [],
  itemAtual: null,
  rodada: 0,
  totalRodadas: 10,
  acertos: 0,
  erros: 0,
  pontos: 0,
  sequencia: 0,
  repeticoesItem: 0,
  historico: []
};

function mostrarCategoriaQ(titulo, itens) {
  tituloBiblioteca.textContent = titulo;
  descricaoBiblioteca.textContent = t("categoria_q_desc");

  btnVoltarMenuBiblioteca.style.display = "none";
  btnVoltarCodigoQ.style.display = "inline-block";
  menuBiblioteca.style.display = "none";

  gridBibliotecaMorse.innerHTML = itens
    .map((item) => {
      const morse = textoParaMorse(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(item.codigo)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(item.significado)}</span>
          <span class="ouvir">${t("toque_para_ouvir")}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });
}

function abrirQOperacao() {
  const itens = idiomaAtual === "en" ? CODIGO_Q_EN.operacao : CODIGO_Q.operacao;
  mostrarCategoriaQ(`📡 ${t("q_operacao_titulo")}`, itens);
}

function abrirQEstacao() {
  const itens = idiomaAtual === "en" ? CODIGO_Q_EN.estacao : CODIGO_Q.estacao;
  mostrarCategoriaQ(`🏠 ${t("q_estacao_titulo")}`, itens);
}

function abrirQQualidade() {
  const itens = idiomaAtual === "en" ? CODIGO_Q_EN.qualidade : CODIGO_Q.qualidade;
  mostrarCategoriaQ(`📶 ${t("q_qualidade_titulo")}`, itens);
}

function abrirQTrafego() {
  const itens = idiomaAtual === "en" ? CODIGO_Q_EN.trafego : CODIGO_Q.trafego;
  mostrarCategoriaQ(`📨 ${t("q_trafego_titulo")}`, itens);
}
function abrirBibliotecaSinaisServico() {
  tituloBiblioteca.textContent = `⚡ ${t("sinais_servico_titulo")}`;
  descricaoBiblioteca.textContent = t("sinais_servico_desc");

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  const listaSinais = idiomaAtual === "en"
    ? SINAIS_SERVICO_EN
    : SINAIS_SERVICO;

  gridBibliotecaMorse.innerHTML = listaSinais
    .map((item) => {
      const morse = obterMorseSinalServico(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(item.codigo)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(item.significado)}</span>
          <span class="ouvir">${t("toque_para_ouvir")}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function abrirBibliotecaAbreviacoes() {
  tituloBiblioteca.textContent = `📚 ${t("abreviacoes_titulo")}`;
  descricaoBiblioteca.textContent = t("abreviacoes_desc");

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  const listaAbreviacoes = idiomaAtual === "en"
    ? ABREVIACOES_MORSE_EN
    : ABREVIACOES_MORSE;

  gridBibliotecaMorse.innerHTML = listaAbreviacoes
    .map((item) => {
      const morse = textoParaMorse(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(item.codigo)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(item.significado)}</span>
          <span class="ouvir">${t("toque_para_ouvir")}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function abrirBibliotecaCaracteresEspeciais() {
  tituloBiblioteca.textContent = `🔣 ${t("caracteres_especiais_titulo")}`;
  descricaoBiblioteca.textContent = "";

  btnVoltarMenuBiblioteca.style.display = "inline-block";
  btnVoltarCodigoQ.style.display = "none";
  menuBiblioteca.style.display = "none";

  const listaCaracteres = idiomaAtual === "en"
    ? CARACTERES_ESPECIAIS_MORSE_EN
    : CARACTERES_ESPECIAIS_MORSE;

  gridBibliotecaMorse.innerHTML = listaCaracteres
    .map((item) => {
      const morse = textoParaMorse(item.codigo);

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(item.codigo)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">${escaparHtml(item.significado)}</span>
          <span class="ouvir">${t("toque_para_ouvir")}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("#gridBibliotecaMorse .cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function abrirBibliotecaTreinoAuditivo() {
  tituloBiblioteca.textContent = "";
  descricaoBiblioteca.textContent = "";

  btnVoltarMenuBiblioteca.style.display = "none";
  btnVoltarCodigoQ.style.display = "none";
  btnVoltarInicioBiblioteca.style.display = "none";
  menuBiblioteca.style.display = "none";

  montarMenuTreinoAuditivo();
  mostrarTela(telaBiblioteca);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function iniciarOuvirDigitar() {
  const sorteadas = embaralharArray(
    getBancoEscutaOperacional()
  ).slice(0, 5);

  ouvirDigitar = {
    indice: 0,
    acertos: 0,
    erros: 0,
    pontos: 0,
    missoes: sorteadas
  };

  renderizarOuvirDigitar();
}

function renderizarOuvirDigitar(mostrarResposta = false, mensagem = "") {
  const mensagemCorreta = ouvirDigitar.missoes[ouvirDigitar.indice];

  if (!mensagemCorreta) {
    finalizarOuvirDigitar();
    return;
  }

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo tela-escuta-clean">
      <div class="treino-auditivo-topo">
        <span class="badge">Ouvir e Digitar</span>
        <h2>⌨️ Missão ${ouvirDigitar.indice + 1}/5</h2>
        <p>Ouça a mensagem e digite exatamente o que recebeu.</p>
      </div>

      <div class="botoes-escuta-clean">
        <button id="btnOuvirMensagemDigitada" class="btn principal">
          Ouvir mensagem
        </button>
      </div>

      ${
        mostrarResposta
          ? ""
          : `
            <div class="campo-resposta-auditiva campo-clean">
              <label for="inputOuvirDigitar">Digite a mensagem recebida</label>

              <input
                id="inputOuvirDigitar"
                type="text"
                autocomplete="off"
                placeholder="Ex: QSL RECEBIDO"
              />

              <button id="btnConfirmarOuvirDigitar" class="btn principal">
                Confirmar
              </button>
            </div>
          `
      }

      <div id="areaRespostaOuvirDigitar" class="resposta-treino resposta-clean">
        ${
          mostrarResposta
            ? `
              <span class="label">Mensagem correta</span>
              <strong>${escaparHtml(mensagemCorreta)}</strong>
              <div class="morse-resposta">${escaparHtml(textoParaMorse(mensagemCorreta))}</div>
            `
            : `
              <span class="label">Mensagem correta</span>
              <strong>—</strong>
            `
        }
      </div>

      <div id="feedbackOuvirDigitar" class="feedback ${mensagem ? "alerta" : ""}">
        ${escaparHtml(mensagem)}
      </div>
    </div>
  `;

  document
    .getElementById("btnOuvirMensagemDigitada")
    .addEventListener("click", () => {
      tocarSequenciaMorse(textoParaMorse(mensagemCorreta));
    });

  const btnConfirmar = document.getElementById("btnConfirmarOuvirDigitar");
  const input = document.getElementById("inputOuvirDigitar");

  if (btnConfirmar && input) {
    input.focus();

    btnConfirmar.addEventListener("click", confirmarOuvirDigitar);

    input.addEventListener("keydown", (evento) => {
      if (evento.code === "Enter") {
        evento.preventDefault();
        confirmarOuvirDigitar();
      }
    });
  }
}
function confirmarOuvirDigitar() {
  const input = document.getElementById("inputOuvirDigitar");
  if (!input) return;

  const mensagemCorreta = ouvirDigitar.missoes[ouvirDigitar.indice];
  const respostaUsuario = normalizarRespostaAuditiva(input.value);
  const respostaCorreta = normalizarRespostaAuditiva(mensagemCorreta);

  input.blur();

  if (!respostaUsuario) {
    renderizarOuvirDigitar(false, "Digite uma resposta antes de confirmar.");
    return;
  }

  if (respostaUsuario === respostaCorreta) {
    ouvirDigitar.acertos += 1;
    ouvirDigitar.pontos += 25;

    tocarAcerto();

    setTimeout(() => {
      renderizarOuvirDigitar(true, "Correto!");

      setTimeout(() => {
        proximaOuvirDigitar();
      }, 1000);
    }, 250);

    return;
  }

  ouvirDigitar.erros += 1;

  tocarErro();

  setTimeout(() => {
    renderizarOuvirDigitar(true, "Incorreto.");

    setTimeout(() => {
      proximaOuvirDigitar();
    }, 1000);
  }, 250);
}

function proximaOuvirDigitar() {
  ouvirDigitar.indice += 1;
  renderizarOuvirDigitar(false);
}

function finalizarOuvirDigitar() {
  const total = ouvirDigitar.missoes.length || 1;

  const aproveitamento = Math.round(
    (ouvirDigitar.acertos / total) * 100
  );

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-finalizado">
      <span class="badge">Ouvir e Digitar</span>

      <h2>⌨️ Treino concluído</h2>

      <p>
        Você concluiu o modo Ouvir e Digitar, treinando recepção real de mensagens Morse.
      </p>

      <div class="quadro-treino-status">
        <div>
          <span class="label">Aproveitamento</span>
          <strong>${aproveitamento}%</strong>
        </div>

        <div>
          <span class="label">Acertos</span>
          <strong>${ouvirDigitar.acertos}</strong>
        </div>

        <div>
          <span class="label">Erros</span>
          <strong>${ouvirDigitar.erros}</strong>
        </div>

        <div>
          <span class="label">Pontos</span>
          <strong>${ouvirDigitar.pontos}</strong>
        </div>
      </div>

      <div class="relatorio-operacional">
        <div class="relatorio-bloco">
          <span class="label">Situação da escuta</span>
          <h2>🎧 Recepção por digitação</h2>
          <p>
            Você treinou a habilidade de ouvir uma transmissão Morse e registrar a mensagem recebida.
          </p>
        </div>
      </div>

      <div class="botoes-resultado">
        <button id="btnRefazerOuvirDigitar" class="btn principal">
          Refazer treino
        </button>

        <button id="btnVoltarTreinoOuvirDigitarFinal" class="btn secundario">
          Voltar ao Treino Auditivo
        </button>
      </div>
    </div>
  `;

  document
    .getElementById("btnRefazerOuvirDigitar")
    .addEventListener("click", iniciarOuvirDigitar);

  document
    .getElementById("btnVoltarTreinoOuvirDigitarFinal")
    .addEventListener("click", montarMenuTreinoAuditivo);
}

function iniciarEscutaOperacional() {
  const sorteadas = embaralharArray(
    getBancoEscutaOperacional()
  ).slice(0, 5);

  escutaOperacional = {
    indice: 0,
    acertos: 0,
    erros: 0,
    pontos: 0,
    missoes: sorteadas
  };

  renderizarEscutaOperacional();
}

function renderizarEscutaOperacional() {
  const mensagemCorreta = escutaOperacional.missoes[escutaOperacional.indice];

  if (!mensagemCorreta) {
    finalizarEscutaOperacional();
    return;
  }

  const distratores = embaralharArray(
    getBancoEscutaOperacional().filter((item) => item !== mensagemCorreta)
  ).slice(0, 3);

  const opcoes = embaralharArray([
    mensagemCorreta,
    ...distratores
  ]);

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo tela-escuta-clean">
      <div class="treino-auditivo-topo">
        <span class="badge">Escuta Operacional</span>
        <h2>📡 Missão ${escutaOperacional.indice + 1}/5</h2>
        <p>Ouça a mensagem e escolha a alternativa correta.</p>
      </div>

      <div class="botoes-escuta-clean">
        <button id="btnOuvirEscutaOperacional" class="btn principal">
          Ouvir mensagem
        </button>
      </div>

      <div class="lista-treino-auditivo">
        ${opcoes
          .map((opcao) => `
            <button class="btn secundario btn-opcao-escuta" data-resposta="${escaparHtml(opcao)}">
              ${escaparHtml(opcao)}
            </button>
          `)
          .join("")}
      </div>

      <div id="areaRespostaEscutaOperacional" class="resposta-treino resposta-clean" style="display:none;"></div>

      <div id="feedbackEscutaOperacional" class="feedback"></div>
    </div>
  `;

  document
    .getElementById("btnOuvirEscutaOperacional")
    .addEventListener("click", () => {
      tocarSequenciaMorse(textoParaMorse(mensagemCorreta));
    });

  document.querySelectorAll(".btn-opcao-escuta").forEach((botao) => {
    botao.addEventListener("click", () => {
      responderEscutaOperacional(botao.dataset.resposta);
    });
  });
}
function responderEscutaOperacional(respostaSelecionada) {
  const mensagemCorreta = escutaOperacional.missoes[escutaOperacional.indice];
  const feedback = document.getElementById("feedbackEscutaOperacional");
  const areaResposta = document.getElementById("areaRespostaEscutaOperacional");

  if (!mensagemCorreta || !feedback) return;

  const acertou =
    normalizarRespostaAuditiva(respostaSelecionada) ===
    normalizarRespostaAuditiva(mensagemCorreta);

  document.querySelectorAll(".btn-opcao-escuta").forEach((botao) => {
    botao.disabled = true;
  });

  if (acertou) {
    escutaOperacional.acertos += 1;
    escutaOperacional.pontos += 20;
    tocarAcerto();
    feedback.textContent = "Correto!";
    feedback.className = "feedback sucesso";
  } else {
    escutaOperacional.erros += 1;
    tocarErro();
    feedback.textContent = "Incorreto.";
    feedback.className = "feedback erro";
  }

  if (areaResposta) {
    areaResposta.style.display = "block";
    areaResposta.innerHTML = `
      <span class="label">Mensagem correta</span>
      <strong>${escaparHtml(mensagemCorreta)}</strong>
      <div class="morse-resposta">${escaparHtml(textoParaMorse(mensagemCorreta))}</div>
    `;
  }

  setTimeout(() => {
    escutaOperacional.indice += 1;
    renderizarEscutaOperacional();
  }, 1000);
}
function finalizarEscutaOperacional() {
  const aproveitamento = Math.round(
    (escutaOperacional.acertos / escutaOperacional.missoes.length) * 100
  );

  const novaConquista = desbloquearConquista("operador_escuta");

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-finalizado">

      <span class="badge">Escuta Operacional</span>

      <h2>📡 Operação Concluída</h2>

      <p>
        Você concluiu todas as missões de escuta operacional.
      </p>

      <div class="quadro-treino-status">
        <div>
          <span class="label">Aproveitamento</span>
          <strong>${aproveitamento}%</strong>
        </div>

        <div>
          <span class="label">Acertos</span>
          <strong>${escutaOperacional.acertos}</strong>
        </div>

        <div>
          <span class="label">Erros</span>
          <strong>${escutaOperacional.erros}</strong>
        </div>

        <div>
          <span class="label">Pontos</span>
          <strong>${escutaOperacional.pontos}</strong>
        </div>
      </div>

      <div class="relatorio-operacional">
        <div class="relatorio-bloco">
          <span class="label">Situação</span>
          <h2>🎧 Operador de Escuta</h2>
          <p>
            Você demonstrou capacidade de reconhecer mensagens completas em código Morse.
          </p>
        </div>

        <div class="relatorio-bloco">
          <span class="label">Conquistas</span>
          <ul>
            ${
              novaConquista
                ? "<li>🎖️ Operador de Escuta desbloqueado</li>"
                : "<li>Nenhuma nova conquista nesta operação.</li>"
            }
          </ul>
        </div>
      </div>

      <div class="botoes-resultado">
        <button id="btnRefazerEscutaOperacional" class="btn principal">
          Refazer operação
        </button>

        <button id="btnVoltarTreinoEscutaFinal" class="btn secundario">
          Voltar ao Treino Auditivo
        </button>
      </div>
    </div>
  `;

  document
    .getElementById("btnRefazerEscutaOperacional")
    .addEventListener("click", iniciarEscutaOperacional);

  document
    .getElementById("btnVoltarTreinoEscutaFinal")
    .addEventListener("click", montarMenuTreinoAuditivo);
}

function montarMenuTreinoAuditivo() {
  const progressoAuditivo = obterProgressoAuditivo();

  tituloBiblioteca.textContent = "";
  descricaoBiblioteca.textContent = "";

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-auditivo-premium">
      <div class="treino-premium-topo">
        <span class="badge badge-sala-escuta">
          <span class="icone-ondas-mini"></span>
          ${t("sala_escuta")}
        </span>

        <div class="titulo-treino-premium">
          <span class="icone-fone-premium" aria-hidden="true"></span>

          <div>
          <h2>${t("treino_auditivo_titulo")}</h2>
            <p>
            ${t("treino_auditivo_desc")}
            </p>
          </div>
        </div>
      </div>

      <div class="treino-stats-premium">
        <div class="stat-auditivo-premium">
          <div class="icone-stat-auditivo trofeu-css"></div>

          <div>
            <span>${t("melhor_aproveitamento")}</span>
            <strong>${progressoAuditivo.melhor}%</strong>
          </div>
        </div>

        <div class="stat-auditivo-premium">
          <div class="icone-stat-auditivo barras-css">
            <i></i><i></i><i></i>
          </div>

          <div>
            <span>${t("treinos_realizados")}</span>
            <strong>${progressoAuditivo.total}</strong>
          </div>
        </div>
      </div>

      <div class="grid-treino-auditivo-premium">
        <article class="card-treino-auditivo-premium">
          <div class="icone-card-auditivo morse-mini">
            <span></span>
            <b></b>
            <span></span>
          </div>

          <div class="conteudo-card-auditivo">
            <h3>${t("caracteres_isolados")}</h3>
            <p>
            ${t("caracteres_isolados_desc")}
            </p>
          </div>

          <button class="btn principal btn-iniciar-treino-auditivo btn-treino-premium" data-categoria="caracteres_isolados">
            <span>${t("iniciar_treino")}</span>
            <strong>→</strong>
          </button>
        </article>

        <article class="card-treino-auditivo-premium">
          <div class="icone-card-auditivo grupo5-mini">
            5
          </div>

          <div class="conteudo-card-auditivo">
            <h3>${t("grupos_5")}</h3>
            <p>
            ${t("grupos_5_desc")}
            </p>
          </div>

          <button class="btn principal btn-iniciar-treino-auditivo btn-treino-premium" data-categoria="grupos_5">
            <span>${t("iniciar_treino")}</span>
            <strong>→</strong>
          </button>
        </article>

        <article class="card-treino-auditivo-premium">
          <div class="icone-card-auditivo frase-mini">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="conteudo-card-auditivo">
            <h3>${t("frases_curtas")}</h3>
            <p>
            ${t("frases_curtas_desc")}
            </p>
          </div>

          <button class="btn principal btn-iniciar-treino-auditivo btn-treino-premium" data-categoria="frases_curtas">
            <span>${t("iniciar_treino")}</span>
            <strong>→</strong>
          </button>
        </article>
      </div>

      <div class="botoes-resultado bloco-voltar-treino">
      <button id="btnVoltarBibliotecaTreinoMenu" class="btn secundario">
      ${t("voltar_biblioteca")}
      </button>
      </div>
    </div>
  `;

  document.querySelectorAll(".btn-iniciar-treino-auditivo").forEach((botao) => {
    botao.addEventListener("click", () => {
      iniciarTreinoAuditivo(botao.dataset.categoria, "desafio");
    });
  });

  document
    .getElementById("btnVoltarBibliotecaTreinoMenu")
    .addEventListener("click", abrirBiblioteca);
}
function criarLinhaCategoriaTreino(categoria, titulo) {
  return `
    <div class="linha-categoria-treino">
      <h3>${escaparHtml(titulo)}</h3>

      <div class="botoes-card-treino">
        <button class="btn secundario btn-treino-livre" data-categoria="${escaparHtml(categoria)}">
          Livre
        </button>

        <button class="btn principal btn-treino-desafio" data-categoria="${escaparHtml(categoria)}">
          Desafio
        </button>
      </div>
    </div>
  `;
}

function iniciarTreinoAuditivo(categoria, modo) {
  treinoAuditivo = {
    modo,
    categoria,
    itens: obterItensTreinoAuditivo(categoria),
    itemAtual: null,
    rodada: 0,
    totalRodadas: modo === "desafio" ? 10 : 0,
    acertos: 0,
    erros: 0,
    pontos: 0,
    sequencia: 0,
    repeticoesItem: 0,
    historico: []
  };

  if (!treinoAuditivo.itens.length) {
    alert("Não há itens cadastrados para esta categoria.");
    return;
  }

  sortearNovoItemTreinoAuditivo();
  renderizarTelaTreinoAuditivo();
}

function obterItensTreinoAuditivo(categoria) {
  const caracteresIsolados = [
    ...Object.keys(TABELA_MORSE).filter((item) => /^[A-Z]$/.test(item)),
    ...Object.keys(TABELA_MORSE).filter((item) => /^[0-9]$/.test(item)),
    ".",
    ",",
    "?",
    "/",
    "=",
    "+"
  ].map((item) => criarItemTreino(item, "Caractere isolado", "Ouça e reconheça o sinal."));

  const grupos5 = BANCO_GRUPOS_5_TREINO_AUDITIVO.map((item) =>
    criarItemTreino(item, "Grupo de 5", "Ouça o grupo completo e digite os cinco caracteres.")
  );

  const bancoFrasesCurtas = idiomaAtual === "en"
  ? BANCO_FRASES_CURTAS_TREINO_AUDITIVO_EN
  : BANCO_FRASES_CURTAS_TREINO_AUDITIVO;

const frasesCurtas = bancoFrasesCurtas.map((item) =>
  criarItemTreino(item, t("tipo_frase_curta"), t("desc_frase_curta"))
);

  const todos = [
    ...caracteresIsolados,
    ...grupos5,
    ...frasesCurtas
  ];

  const mapa = {
    caracteres_isolados: caracteresIsolados,
    grupos_5: grupos5,
    frases_curtas: frasesCurtas,
    misto: todos
  };

  return mapa[categoria] || todos;
}
function criarItemTreino(resposta, tipo, significado) {
  const texto = String(resposta).toUpperCase();

  return {
    resposta: texto,
    tipo,
    significado: significado || "",
    morse: tipo === "Sinal de Serviço"
      ? obterMorseSinalServico(texto)
      : textoParaMorse(texto)
  };
}

function sortearNovoItemTreinoAuditivo() {
  const itensDisponiveis = treinoAuditivo.itens.filter((item) => {
    return !treinoAuditivo.historico.includes(item.resposta);
  });

  const lista = itensDisponiveis.length ? itensDisponiveis : treinoAuditivo.itens;
  const indice = Math.floor(Math.random() * lista.length);

  treinoAuditivo.itemAtual = lista[indice];
  treinoAuditivo.repeticoesItem = 0;

  treinoAuditivo.historico.push(treinoAuditivo.itemAtual.resposta);

  if (treinoAuditivo.historico.length > 8) {
    treinoAuditivo.historico.shift();
  }

  if (treinoAuditivo.modo === "desafio") {
    treinoAuditivo.rodada += 1;
  }
}
function renderizarTelaTreinoAuditivo(mostrarResposta = false, mensagem = "") {
  const item = treinoAuditivo.itemAtual;
  const ehDesafio = treinoAuditivo.modo === "desafio";

  const tituloTela = ehDesafio ? t("desafio") : t("escuta_livre");
  const mensagemTraduzida = mensagem
  ? (IDIOMAS[idiomaAtual]?.[mensagem] || IDIOMAS.pt[mensagem] || mensagem)
  : "";

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo tela-escuta-clean">
      <div class="treino-auditivo-topo">
        <h2>${escaparHtml(tituloTela)}</h2>
        <p>${escaparHtml(nomeCategoriaTreino(treinoAuditivo.categoria))}</p>
      </div>

      <div class="botoes-escuta-clean">
        <button id="btnOuvirTreino" class="btn principal">
          ${t("ouvir")}
        </button>

        ${
          ehDesafio
            ? ""
            : `
              <button id="btnMostrarRespostaTreino" class="btn secundario">
                ${t("mostrar_resposta")}
              </button>
            `
        }
      </div>

      ${
        ehDesafio
          ? `
            <div class="campo-resposta-auditiva campo-clean">
              <label for="inputRespostaAuditiva">${t("digite_o_que_ouviu")}</label>
              <input
                id="inputRespostaAuditiva"
                type="text"
                autocomplete="off"
                placeholder="Ex: A, 7, QSL, BASE"
              />
            </div>

            <button id="btnConfirmarRespostaAuditiva" class="btn principal">
              ${t("confirmar")}
            </button>
          `
          : ""
      }

      <div class="resposta-auditiva-box ${mostrarResposta ? "visivel" : ""}">
        <span>${t("resposta")}</span>

        <strong>
          ${
            mostrarResposta
              ? escaparHtml(item.resposta)
              : "—"
          }
        </strong>

        <small>
        ${
          mostrarResposta
            ? escaparHtml(traduzirObservacaoAuditiva(item.significado))
            : ""
        }
      </small>
      </div>

      ${
        mensagemTraduzida
          ? `<div class="feedback ${mostrarResposta ? "sucesso" : "alerta"}">${escaparHtml(mensagemTraduzida)}</div>`
          : ""
      }
    </div>
  `;

  document
    .getElementById("btnOuvirTreino")
    .addEventListener("click", ouvirItemTreinoAuditivo);

  if (!ehDesafio) {
    const btnMostrarResposta = document.getElementById("btnMostrarRespostaTreino");

    if (btnMostrarResposta) {
      btnMostrarResposta.addEventListener("click", () => {
        renderizarTelaTreinoAuditivo(true);
      });
    }
  }

  if (ehDesafio) {
    const input = document.getElementById("inputRespostaAuditiva");
    const btnConfirmar = document.getElementById("btnConfirmarRespostaAuditiva");

    if (input) {
      input.focus();

      input.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter") {
          confirmarRespostaAuditiva();
        }
      });
    }

    if (btnConfirmar) {
      btnConfirmar.addEventListener("click", confirmarRespostaAuditiva);
    }
  }
}
function ouvirItemTreinoAuditivo() {
  if (!treinoAuditivo.itemAtual) return;

  treinoAuditivo.repeticoesItem += 1;
  tocarSequenciaMorse(treinoAuditivo.itemAtual.morse);
}
function confirmarRespostaAuditiva() {
  const input = document.getElementById("inputRespostaAuditiva");
  if (!input) return;

  input.setAttribute("readonly", "readonly");
input.blur();

setTimeout(() => {
  input.removeAttribute("readonly");
}, 300);

  const respostaUsuario = normalizarRespostaAuditiva(input.value);
  const respostaCorreta = normalizarRespostaAuditiva(treinoAuditivo.itemAtual.resposta);

  if (!respostaUsuario) {
    renderizarTelaTreinoAuditivo(false, "erro_resposta_vazia");
  
    setTimeout(() => {
      const novoInput = document.getElementById("inputRespostaAuditiva");
  
      if (novoInput) {
        novoInput.blur();
      }
    }, 80);
  
    return;
  }
  if (respostaUsuario === respostaCorreta) {
    treinoAuditivo.acertos += 1;
    treinoAuditivo.sequencia += 1;

    let pontosGanhos = 10;

    if (treinoAuditivo.repeticoesItem <= 1) pontosGanhos += 5;
    if (treinoAuditivo.sequencia === 3) pontosGanhos += 10;
    if (treinoAuditivo.sequencia === 5) pontosGanhos += 20;

    treinoAuditivo.pontos += pontosGanhos;

    tocarAcerto();

    setTimeout(() => {
      renderizarTelaTreinoAuditivo(true, "correto");

      setTimeout(() => {
        proximoItemTreinoAuditivo();
      }, 1000);
    }, 250);

    return;
  }

  treinoAuditivo.erros += 1;
  treinoAuditivo.sequencia = 0;

  tocarErro();

  setTimeout(() => {
    renderizarTelaTreinoAuditivo(true, "incorreto");

    setTimeout(() => {
      proximoItemTreinoAuditivo();
    }, 1000);
  }, 250);
}
function proximoItemTreinoAuditivo() {
  if (treinoAuditivo.modo === "desafio" && treinoAuditivo.rodada >= treinoAuditivo.totalRodadas) {
    finalizarDesafioAuditivo();
    return;
  }

  sortearNovoItemTreinoAuditivo();
  renderizarTelaTreinoAuditivo(false);
}

function finalizarDesafioAuditivo() {
  const total = treinoAuditivo.acertos + treinoAuditivo.erros;
  const aproveitamento = total > 0
    ? Math.round((treinoAuditivo.acertos / total) * 100)
    : 0;

  let estrelas = "⭐";
  let titulo = t("treino_concluido");
  let mensagem = t("treino_concluido_msg");

  if (aproveitamento >= 90) {
    estrelas = "⭐⭐⭐";
    titulo = t("escuta_elite");
    mensagem = t("escuta_elite_msg");
  } else if (aproveitamento >= 80) {
    estrelas = "⭐⭐";
    titulo = t("escuta_operacional");
    mensagem = t("escuta_operacional_msg");
  } else if (aproveitamento >= 70) {
    estrelas = "⭐";
    titulo = t("escuta_formacao");
    mensagem = t("escuta_formacao_msg");
  }

  salvarResultadoTreinoAuditivo(aproveitamento);

  const novaConquista = desbloquearConquista("escuta_ativa");

  gridBibliotecaMorse.innerHTML = `
    <div class="painel-treino-auditivo treino-finalizado">
      <span class="badge">${t("resultado_auditivo")}</span>

      <h2>${estrelas}</h2>

      <h3>${escaparHtml(titulo)}</h3>

      <p>${escaparHtml(mensagem)}</p>

      <div class="quadro-treino-status">
        <div>
          <span class="label">${t("categoria")}</span>
          <strong>${escaparHtml(nomeCategoriaTreino(treinoAuditivo.categoria))}</strong>
        </div>

        <div>
          <span class="label">${t("aproveitamento")}</span>
          <strong>${aproveitamento}%</strong>
        </div>

        <div>
          <span class="label">${t("acertos")}</span>
          <strong>${treinoAuditivo.acertos}</strong>
        </div>

        <div>
          <span class="label">${t("pontos")}</span>
          <strong>${treinoAuditivo.pontos}</strong>
        </div>
      </div>

      <div class="relatorio-operacional">
        <div class="relatorio-bloco">
          <span class="label">${t("situacao_escuta")}</span>
          <h2>🎧 ${t("treino_auditivo_registrado")}</h2>
          <p>${t("treino_auditivo_registrado_msg")}</p>
        </div>

        <div class="relatorio-bloco">
          <span class="label">${t("medalhas_distintivos")}</span>
          <ul>
            ${
              novaConquista
                ? `<li>🎧 ${t("escuta_ativa")}</li>`
                : `<li>${t("nenhuma_nova_medalha")}</li>`
            }
          </ul>
        </div>
      </div>

      <div class="botoes-resultado">
        <button id="btnRefazerDesafioAuditivo" class="btn principal">
          ${t("refazer_desafio")}
        </button>

        <button id="btnVoltarMenuTreinoFinal" class="btn secundario">
          ${t("voltar_treino_auditivo")}
        </button>

        <button id="btnVoltarBibliotecaTreinoFinal" class="btn discreto">
          ${t("voltar_biblioteca")}
        </button>
      </div>
    </div>
  `;

  document.getElementById("btnRefazerDesafioAuditivo").addEventListener("click", () => {
    iniciarTreinoAuditivo(treinoAuditivo.categoria, "desafio");
  });

  document.getElementById("btnVoltarMenuTreinoFinal").addEventListener("click", montarMenuTreinoAuditivo);
  document.getElementById("btnVoltarBibliotecaTreinoFinal").addEventListener("click", abrirBiblioteca);
}

function obterProgressoAuditivo() {
  const dados = JSON.parse(
    localStorage.getItem("edsMorseProgressoAuditivo") || "{}"
  );

  const categorias = Object.keys(dados);

  let melhor = 0;
  let total = 0;

  categorias.forEach((categoria) => {
    const item = dados[categoria];

    if (!item) return;

    total += item.tentativas || 0;

    if ((item.melhor || 0) > melhor) {
      melhor = item.melhor;
    }
  });

  return {
    concluidas: categorias.length,
    melhor,
    total
  };
}

function salvarResultadoTreinoAuditivo(aproveitamento) {
  const dados = JSON.parse(
    localStorage.getItem("edsMorseProgressoAuditivo") || "{}"
  );

  const categoria = treinoAuditivo.categoria;

  if (!dados[categoria]) {
    dados[categoria] = {
      melhor: 0,
      tentativas: 0
    };
  }

  dados[categoria].tentativas += 1;

  if (aproveitamento > dados[categoria].melhor) {
    dados[categoria].melhor = aproveitamento;
  }

  localStorage.setItem(
    "edsMorseProgressoAuditivo",
    JSON.stringify(dados)
  );
}

function obterResultadoTreinoAuditivo() {
  const chave = `operadorMorseTreinoAuditivo_${getChaveOperador()}`;

  try {
    return JSON.parse(localStorage.getItem(chave)) || {};
  } catch (erro) {
    return {};
  }
}

function normalizarRespostaAuditiva(valor) {
  return String(valor || "")
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function nomeCategoriaTreino(categoria) {
  const nomes = {
    caracteres_isolados: t("categoria_caracteres_isolados"),
    grupos_5: t("categoria_grupos_5"),
    frases_curtas: t("categoria_frases_curtas"),

    letras: t("categoria_letras"),
    numeros: t("categoria_numeros"),
    codigoQ: t("categoria_codigo_q"),
    sinais: t("categoria_sinais"),
    abreviacoes: t("categoria_abreviacoes"),
    caracteres: t("categoria_caracteres"),
    palavras: t("categoria_palavras"),
    frases: t("categoria_frases"),
    mensagens: t("categoria_mensagens"),
    misto: t("categoria_misto")
  };

  return nomes[categoria] || t("treino_auditivo_titulo");
}
function traduzirObservacaoAuditiva(texto) {
  const bruto = String(texto || "").trim();

  const mapa = {
    "Ouça e reconheça o sinal.": "desc_caractere_isolado",
    "Ouça o grupo completo e digite os cinco caracteres.": "desc_grupo_5",
    "Ouça a frase completa e digite o que recebeu.": "desc_frase_curta",
    "Sem observação cadastrada.": "sem_observacao"
  };

  const chave = mapa[bruto];

  if (chave) {
    return t(chave);
  }

  return bruto || t("sem_observacao");
}
function salvarNomeOperador() {
  nomeOperador = getNomeOperadorAtual();
  inputNomeOperador.value = nomeOperador;
  localStorage.setItem("operadorMorseNome", nomeOperador);
}

function getRankingApiBaseUrl() {
  return RANKING_GLOBAL_API_URL.replace(/\/ranking$/, "");
}

async function verificarNomeOperadorAntesDeJogar() {
  const operador = getNomeOperadorAtual();

  if (!operador || operador.trim().length < 2) {
    mostrarAvisoRapido(
      "Nome inválido",
      "Digite um nome de operador com pelo menos 2 caracteres."
    );

    if (inputNomeOperador) {
      inputNomeOperador.focus();
    }

    return false;
  }

  const parametros = new URLSearchParams();
  parametros.set("operador", operador);
  parametros.set("operadorLocalId", obterIdOperadorLocal());

  try {
    const resposta = await fetch(
      `${getRankingApiBaseUrl()}/operador?${parametros.toString()}`
    );

    const retorno = await resposta.json();

    if (retorno && retorno.ok && retorno.disponivel) {
      return true;
    }

    mostrarAvisoRapido(
      "Nome indisponível",
      retorno?.erro || "Este nome já está sendo usado por outro aparelho."
    );

    if (inputNomeOperador) {
      inputNomeOperador.focus();
      inputNomeOperador.select();
    }

    return false;
  } catch (erro) {
    console.warn("Falha ao verificar nome do operador:", erro);

    mostrarAvisoRapido(
      "Ranking Global",
      "Não foi possível verificar o nome agora. Confira sua conexão."
    );

    return false;
  }
}

async function entrarCampanha() {
  const nomeLiberado = await verificarNomeOperadorAntesDeJogar();

  if (!nomeLiberado) {
    return;
  }

  salvarNomeOperador();
  document.body.classList.remove("visualizando-mapa-modo");
  renderizarCampanha();
  mostrarTela(telaCampanha);
}
function getNiveisModo(modo = modoAtual) {
  if (modo === MODO_AVANCADO) {
    return NIVEIS_AVANCADO;
  }

  if (modo === MODO_INTERMEDIARIO) {
    return NIVEIS_INTERMEDIARIO;
  }

  if (idiomaAtual === "en") {
    return NIVEIS_INICIANTE_EN;
  }

  return NIVEIS_INICIANTE;
}

function getNomeModo(modo = modoAtual) {
  if (modo === MODO_AVANCADO) {
    return idiomaAtual === "en" ? "Advanced" : "Avançado";
  }

  if (modo === MODO_INTERMEDIARIO) {
    return idiomaAtual === "en" ? "Intermediate" : "Intermediário";
  }

  return idiomaAtual === "en" ? "Beginner" : "Iniciante";
}

function modoInicianteConcluido() {
  return localStorage.getItem(chaveInicianteConcluido()) === "sim";
}

function modoIntermediarioConcluido() {
  return localStorage.getItem(chaveIntermediarioConcluido()) === "sim";
}

function rolarParaMapaCampanha() {
  const mapa = document.querySelector(".mapa-campanha");
  if (!mapa) return;

  mapa.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

async function abrirModoIniciante() {
  const nomeLiberado = await verificarNomeOperadorAntesDeJogar();

  if (!nomeLiberado) {
    return;
  }

  salvarNomeOperador();
  modoAtual = MODO_INICIANTE;
  abrirTelaMapaModo();
}

async function abrirModoIntermediario() {
  const nomeLiberado = await verificarNomeOperadorAntesDeJogar();

  if (!nomeLiberado) {
    return;
  }

  salvarNomeOperador();

  if (!modoInicianteConcluido()) {
    mostrarAvisoRapido(
      "Modo bloqueado",
      "Conclua o modo Iniciante para liberar o Intermediário."
    );
    return;
  }

  modoAtual = MODO_INTERMEDIARIO;
  abrirTelaMapaModo();
}

async function abrirModoAvancado() {
  const nomeLiberado = await verificarNomeOperadorAntesDeJogar();

  if (!nomeLiberado) {
    return;
  }

  salvarNomeOperador();

  if (!modoIntermediarioConcluido()) {
    mostrarAvisoRapido(
      "Modo bloqueado",
      "Conclua o modo Intermediário para liberar o Avançado."
    );
    return;
  }

  modoAtual = MODO_AVANCADO;
  abrirTelaMapaModo();
}
function abrirTelaMapaModo() {
  document.body.classList.add("visualizando-mapa-modo");
  renderizarCampanha();

  const telaAtiva = document.querySelector(".tela.ativa");
  if (telaAtiva) {
    telaAtiva.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

  registrarEstadoNavegacao();
}

function atualizarCardModo(idCard, liberado, textoBadge, textoStatus) {
  const card = document.getElementById(idCard);
  if (!card) return;

  const badge = card.querySelector(".badge");
  const status = card.querySelector(".modo-status span");

  card.classList.toggle("bloqueado", !liberado);
  card.classList.toggle("ativo", liberado);

  if (badge) {
    badge.textContent = textoBadge;
    badge.className = liberado ? "badge sucesso" : "badge alerta";
  }

  if (status) status.textContent = textoStatus;
}

function aplicarModoVisualJogo() {
  const manipulacaoNatural =
  modoAtual === MODO_INTERMEDIARIO || modoAtual === MODO_AVANCADO;

btnEspacoLetra.style.display = manipulacaoNatural ? "none" : "inline-block";
btnEspacoPalavra.style.display = manipulacaoNatural ? "none" : "inline-block";
  if (painelRitmo) {
    painelRitmo.classList.toggle(
      "ativo",
      modoAtual === MODO_INTERMEDIARIO
    );
  }

  if (cardProgresso) {
    cardProgresso.style.display =
      modoAtual === MODO_AVANCADO ? "none" : "";
  }

  document.body.classList.toggle(
    "modo-avancado",
    modoAtual === MODO_AVANCADO
  );
  document.body.classList.toggle(
    "modo-iniciante",
    modoAtual === MODO_INICIANTE
  );

  document.body.classList.toggle(
    "modo-intermediario",
    modoAtual === MODO_INTERMEDIARIO
  );  

  if (timerMissaoEl) {
    timerMissaoEl.style.display =
      modoAtual === MODO_AVANCADO ? "inline-flex" : "none";
  }

  atualizarPainelRitmo();
}

function atualizarPainelRitmo() {
  if (valorWpm) valorWpm.textContent = `${wpmAtual} WPM`;
  if (valorPausaLetra) valorPausaLetra.textContent = `${pausaAutoLetraMs} ms`;
  if (valorPausaPalavra) valorPausaPalavra.textContent = `${pausaAutoPalavraMs} ms`;

  botoesWpm.forEach((botao) => {
    botao.classList.toggle("ativo", Number(botao.dataset.wpm) === wpmAtual);
  });
}

function obterNivelLiberado(modo = modoAtual) {
  const niveis = getNiveisModo(modo);
  const salvo = Number(localStorage.getItem(chaveNivelLiberado(modo)) || "0");

  if (Number.isNaN(salvo)) return 0;

  return Math.min(Math.max(salvo, 0), niveis.length - 1);
}

function renderizarCampanha() {
  const operador = getNomeOperadorAtual();
  const nivelLiberado = obterNivelLiberado(modoAtual);
  const niveis = getNiveisModo(modoAtual);

  const inicianteConcluido = modoInicianteConcluido();
  const intermediarioConcluido = modoIntermediarioConcluido();

  statusIniciante.textContent =
    `${operador}: ${getNomeModo(modoAtual)} — ${idiomaAtual === "en" ? "unlocked level" : "nível liberado"} ${nivelLiberado + 1}`;

  if (labelModoAtual) {
    if (modoAtual === MODO_INICIANTE) {
      labelModoAtual.textContent = idiomaAtual === "en" ? "Beginner Mode" : "Modo Iniciante";
    } else if (modoAtual === MODO_INTERMEDIARIO) {
      labelModoAtual.textContent = idiomaAtual === "en" ? "Intermediate Mode" : "Modo Intermediário";
    } else if (modoAtual === MODO_AVANCADO) {
      labelModoAtual.textContent = idiomaAtual === "en" ? "Advanced Mode" : "Modo Avançado";
    }
  }

  const tituloSecao = document.querySelector(".titulo-secao");

  if (tituloSecao) {
    const botaoVoltarModosExistente = document.getElementById("btnVoltarModos");

    if (botaoVoltarModosExistente) {
      botaoVoltarModosExistente.remove();
    }

    if (document.body.classList.contains("visualizando-mapa-modo")) {
      const botaoVoltarModos = document.createElement("button");
      botaoVoltarModos.id = "btnVoltarModos";
      botaoVoltarModos.className = "btn secundario compacto";
      botaoVoltarModos.textContent = idiomaAtual === "en" ? "← Modes" : "← Modos";

      botaoVoltarModos.addEventListener("click", () => {
        document.body.classList.remove("visualizando-mapa-modo");
        renderizarCampanha();

        const telaAtiva = document.querySelector(".tela.ativa");
        if (telaAtiva) {
          telaAtiva.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
          });
        }
      });

      tituloSecao.appendChild(botaoVoltarModos);
    }
  }

  const avancadoConcluido =
    localStorage.getItem(chaveAvancadoConcluido()) === "sim";

  atualizarCardModo(
    "cardModoIniciante",
    true,
    inicianteConcluido
      ? (idiomaAtual === "en" ? "Completed" : "Concluído")
      : t("modo_liberado"),
    inicianteConcluido
      ? (idiomaAtual === "en" ? "Initial training completed" : "Formação inicial concluída")
      : (idiomaAtual === "en" ? "Click to start your training" : "Clique para iniciar sua formação")
  );

  atualizarCardModo(
    "cardModoIntermediario",
    inicianteConcluido,
    modoIntermediarioConcluido()
      ? (idiomaAtual === "en" ? "Completed" : "Concluído")
      : inicianteConcluido
        ? t("modo_liberado")
        : t("modo_bloqueado"),
    modoIntermediarioConcluido()
      ? (idiomaAtual === "en" ? "Intermediate stage completed" : "Etapa intermediária concluída")
      : inicianteConcluido
        ? (idiomaAtual === "en" ? "Click to train without space buttons" : "Clique para treinar sem botões de espaço")
        : t("modo_intermediario_status")
  );

  atualizarCardModo(
    "cardModoAvancado",
    intermediarioConcluido,
    avancadoConcluido
      ? (idiomaAtual === "en" ? "Completed" : "Concluído")
      : intermediarioConcluido
        ? t("modo_liberado")
        : t("modo_bloqueado"),
    avancadoConcluido
      ? (idiomaAtual === "en" ? "Advanced mode completed" : "Modo avançado concluído")
      : intermediarioConcluido
        ? (idiomaAtual === "en" ? "Advanced mode unlocked" : "Modo Avançado liberado")
        : t("modo_avancado_status")
  );

  gridNiveis.innerHTML = niveis
    .map((nivel, index) => {
      const bloqueado = index > nivelLiberado;
      const concluido = index < nivelLiberado;
      const atual = index === nivelLiberado;

      let classe = "nivel-card";
      if (bloqueado) classe += " bloqueado";
      if (concluido) classe += " concluido";
      if (atual) classe += " atual";

      const icone = bloqueado ? "🔒" : concluido ? "✓" : "▶";

      return `
        <button class="${classe}" data-index="${index}" ${bloqueado ? "disabled" : ""}>
          <div class="nivel-linha">
            <span class="nivel-numero">${getNomeModo(modoAtual)} ${nivel.numero}</span>
            <span class="nivel-lock">${icone}</span>
          </div>
          <strong>${escaparHtml(nivel.patente)}</strong>
          <span>${escaparHtml(nivel.titulo)}</span>
          <span>${escaparHtml(nivel.descricao)}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".nivel-card:not(.bloqueado)").forEach((card) => {
    card.addEventListener("click", () => iniciarNivel(Number(card.dataset.index)));
  });
}

function continuarNivelAtual() {
  iniciarNivel(obterNivelLiberado(modoAtual));
}

function abrirCartaoLicao(index) {
  const niveis = getNiveisModo(modoAtual);
  const nivel = niveis[index];

  nivelAtualIndex = index;

  tituloLicao.textContent = `${getNomeModo(modoAtual)} ${nivel.numero} — ${nivel.titulo}`;
  descricaoLicao.textContent = nivel.descricao;

  gridCartoesLicao.innerHTML = nivel.missoes
    .map((item) => {
      const texto = String(item).toUpperCase();
      const morse = textoParaMorse(texto);

      if (/^[A-Z0-9]$/.test(texto)) {
        return `
          <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
            <span class="letra">${escaparHtml(texto)}</span>
            <span class="morse">${escaparHtml(morse)}</span>
            <span class="fonico">${escaparHtml(getDicaFonico(texto))}</span>
            <span class="ouvir">${t("toque_para_ouvir")}</span>
          </button>
        `;
      }

      return `
        <button class="cartao-caractere cartao-clicavel" data-morse="${escaparHtml(morse)}">
          <span class="letra">${escaparHtml(texto)}</span>
          <span class="morse">${escaparHtml(morse)}</span>
          <span class="fonico">Treino de grupo</span>
          <span class="ouvir">${t("toque_para_ouvir")}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".cartao-clicavel").forEach((card) => {
    card.addEventListener("click", () => {
      tocarSequenciaMorse(card.dataset.morse);
    });
  });

  mostrarTela(telaLicao);
}

function iniciarNivel(index) {
  prepararAudio();
  salvarNomeOperador();

  const nivelLiberado = obterNivelLiberado(modoAtual);
  const niveis = getNiveisModo(modoAtual);
  const indexSeguro = Math.min(Math.max(index, 0), nivelLiberado);

  nivelAtualIndex = Math.min(Math.max(indexSeguro, 0), niveis.length - 1);
  missaoAtualIndex = 0;
  codigoAtual = "";
  pontuacao = 0;
  acertosNivel = 0;
  errosNivel = 0;
  sequenciaAcertos = 0;
  pressionando = false;
  inicioNivelMs = performance.now();

  limparTemporizadoresPausa();

  mostrarTela(telaJogo, false);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  carregarMissao();
  atualizarPlacar();
  aplicarModoVisualJogo();
}

function reiniciarNivel() {
  pararTomMorse();
  iniciarNivel(nivelAtualIndex);
}

function repetirNivel() {
  reiniciarNivel();
}

function avancarProximoNivel() {
  if (!ultimoResultado || !ultimoResultado.aprovado) {
    repetirNivel();
    return;
  }

  const niveis = getNiveisModo(modoAtual);

  if (nivelAtualIndex >= niveis.length - 1) {
    entrarCampanha();
    return;
  }

  iniciarNivel(nivelAtualIndex + 1);
}
function getNivelAtual() {
  return getNiveisModo(modoAtual)[nivelAtualIndex];
}

function getMissaoAtual() {
  const nivel = getNivelAtual();
  const alvo = nivel.missoes[missaoAtualIndex];

  return {
    alvo,
    codigo: textoParaMorse(alvo),
    tipo: nivel.titulo
  };
}
function nivelEhRecepcaoAvancada(nivel = getNivelAtual()) {
  return modoAtual === MODO_AVANCADO && nivel && nivel.tipoMissao === "recepcao";
}

function garantirPainelRecepcaoAvancada() {
  let painel = document.getElementById("painelRecepcaoAvancada");

  if (painel) return painel;

  painel = document.createElement("div");
  painel.id = "painelRecepcaoAvancada";
  painel.className = "painel-recepcao-avancada";

  const acoesJogo = document.querySelector("#telaJogo .acoes");

  if (acoesJogo && acoesJogo.parentNode) {
    acoesJogo.parentNode.insertBefore(painel, acoesJogo);
  }

  return painel;
}

function restaurarInterfaceTransmissao() {
  const painel = garantirPainelRecepcaoAvancada();

  painel.style.display = "none";
  painel.innerHTML = "";

  btnMorse.style.display = "";
  btnEnviar.style.display = "";
  if (btnEnviarParentOriginal && btnEnviar.parentNode !== btnEnviarParentOriginal) {
    btnEnviarParentOriginal.insertBefore(btnEnviar, btnEnviarNextOriginal);
  }
  btnEspacoLetra.style.display = "";
  btnEspacoPalavra.style.display = "";
  btnLimpar.style.display = "";

  btnEnviar.innerHTML = `
    <span class="icone-enviar-missao">➤</span>
    <span>ENVIAR</span>
  `;
}

function configurarInterfaceRecepcaoAvancada(missao) {
  const painel = garantirPainelRecepcaoAvancada();

  btnMorse.style.display = "none";
  btnEspacoLetra.style.display = "none";
  btnEspacoPalavra.style.display = "none";
  btnLimpar.style.display = "none";
  btnEnviar.textContent = "Confirmar recepção";

  textoMissao.textContent = "Receba a transmissão";
  dicaMissaoEl.textContent = "Ouça o Morse e digite exatamente a mensagem recebida.";
  codigoDigitado.textContent = "Mensagem oculta";

  painel.style.display = "grid";
  painel.innerHTML = `
    <div class="card-recepcao-avancada">
      <span class="label">Escuta operacional</span>

      <button id="btnOuvirRecepcaoAvancada" class="btn principal">
        🔊 Ouvir transmissão
      </button>

      <div class="campo-resposta-auditiva campo-recepcao-jogo">
        <label for="inputRecepcaoAvancada">Digite o que você recebeu</label>

        <input
          id="inputRecepcaoAvancada"
          type="text"
          autocomplete="off"
          placeholder="Ex: THANK GOD"
        />
      </div>

      <div id="areaBotaoConfirmarRecepcao" class="area-confirmar-recepcao"></div>
      <small>
        Dica: use espaço entre palavras quando houver pausa longa.
      </small>
    </div>
  `;
  const areaBotaoConfirmar = document.getElementById("areaBotaoConfirmarRecepcao");

  if (areaBotaoConfirmar && btnEnviar) {
    if (!btnEnviarParentOriginal) {
      btnEnviarParentOriginal = btnEnviar.parentNode;
      btnEnviarNextOriginal = btnEnviar.nextSibling;
    }
  
    areaBotaoConfirmar.appendChild(btnEnviar);
  }
  const btnOuvir = document.getElementById("btnOuvirRecepcaoAvancada");
  const input = document.getElementById("inputRecepcaoAvancada");

  if (btnOuvir) {
    btnOuvir.addEventListener("click", () => {
      tocarSequenciaMorse(missao.codigo);
      feedback.textContent = "Transmissão em andamento. Copie com calma.";
      feedback.className = "feedback alerta";
    });
  }

  if (input) {
    input.focus();

    input.addEventListener("keydown", (evento) => {
      if (evento.code === "Enter") {
        evento.preventDefault();
        confirmarEnvio();
      }
    });
  }
}

function confirmarRecepcaoAvancada() {
  const missao = getMissaoAtual();
  const input = document.getElementById("inputRecepcaoAvancada");

  if (!input) return;

  const respostaUsuario = normalizarRespostaAuditiva(input.value);
  const respostaCorreta = normalizarRespostaAuditiva(missao.alvo);

  if (!respostaUsuario) {
    tocarErro();
    feedback.textContent = "Digite a mensagem recebida antes de confirmar.";
    feedback.className = "feedback erro";
    return;
  }

  if (respostaUsuario === respostaCorreta) {
    acertosNivel += 1;
    sequenciaAcertos += 1;

    const pontosGanhos = calcularPontosAcerto() + 80;
    pontuacao += pontosGanhos;

    tocarAcerto();
    feedback.textContent = `Correto! Mensagem copiada. +${pontosGanhos} pontos.`;
    feedback.className = "feedback sucesso";
  } else {
    errosNivel += 1;
    sequenciaAcertos = 0;
    pontuacao = Math.max(0, pontuacao - 35);

    tocarErro();
    feedback.textContent = `Incorreto. Correto: ${missao.alvo}`;
    feedback.className = "feedback erro";
  }

  input.setAttribute("readonly", "readonly");

  atualizarPlacar();

const nivelAtual = getNivelAtual();
const ultimaMissaoDoNivel =
  nivelAtual && missaoAtualIndex >= nivelAtual.missoes.length - 1;

if (btnEnviar) btnEnviar.disabled = true;

setTimeout(() => {
  if (btnEnviar) btnEnviar.disabled = false;

  if (ultimaMissaoDoNivel) {
    finalizarNivel();
    return;
  }

  proximaMissao();
}, 1100);
}
function carregarMissao() {
  const nivel = getNivelAtual();
  const missao = getMissaoAtual();

  nomeOperadorEl.textContent = `${getNomeModo(modoAtual)} ${nivel.numero}`;

  badgeNivel.textContent =
  `${t("jogo_missao")} ${missaoAtualIndex + 1}/${nivel.missoes.length}`;

  badgePatente.textContent =
  `${t("jogo_acertos")} ${acertosNivel}/${nivel.missoes.length}`;

    const usarCodigoComoAlvo = missaoUsaCodigoComoAlvo(nivel);
  const faseCodigoParaTexto = nivelIntermediarioCodigoParaTexto(nivel);

  textoMissao.classList.toggle("texto-tecle-codigo", usarCodigoComoAlvo);

  textoMissao.textContent = faseCodigoParaTexto
  ? `${t("jogo_tecle")} ${missao.codigo}`
  : usarCodigoComoAlvo
    ? t("jogo_tecle")
    : `${t("jogo_tecle")} ${missao.alvo}`;

  const dicaFonico = getDicaFonico(missao.alvo);

  if (nivelEhRecepcaoAvancada(nivel)) {
    configurarInterfaceRecepcaoAvancada(missao);
  } else {
    restaurarInterfaceTransmissao();
    renderizarGuiaMorseMissao(missao, dicaFonico, nivel);
  }
  const labelCodigoEnviado = document.querySelector(".codigo-enviado-card span");

  if (labelCodigoEnviado) {
    labelCodigoEnviado.textContent = usarCodigoComoAlvo
      ? "Texto enviado"
      : "Código enviado";
  }
  contadorMissaoEl.textContent = `${missaoAtualIndex + 1}/${nivel.missoes.length}`;
  faseAtualEl.textContent = missao.tipo;

  codigoAtual = "";
  atualizarCodigoNaTela();

  feedback.textContent = "";
  feedback.className = "feedback";
  inicioMissaoMs = performance.now();

  if (modoAtual === MODO_AVANCADO) {
    iniciarTimerMissao();
  } else {
    pararTimerMissao();

    if (timerMissaoEl) {
      timerMissaoEl.style.display = "none";
    }
  }

  aplicarModoVisualJogo();
}

function confirmarEnvio() {
  limparTemporizadoresPausa();

  if (nivelEhRecepcaoAvancada()) {
    confirmarRecepcaoAvancada();
    return;
  }

  const missao = getMissaoAtual();

  if (!codigoAtual.trim()) {
    tocarErro();
    feedback.textContent = "Transmita pelo menos um ponto ou traço antes de confirmar.";
    feedback.className = "feedback erro";
    return;
  }

  const enviado = normalizarCodigo(codigoAtual);
  const correto = normalizarCodigo(missao.codigo);

  if (enviado === correto) {
    acertosNivel += 1;
    sequenciaAcertos += 1;

    if (sequenciaAcertos >= 10) {
      desbloquearConquista("canal_estavel");
    }

    const pontosGanhos = calcularPontosAcerto();
    pontuacao += pontosGanhos;

    tocarAcerto();
    feedback.textContent = `Correto! +${pontosGanhos} pontos.`;
    feedback.className = "feedback sucesso";
  } else {
    errosNivel += 1;
    sequenciaAcertos = 0;
    if (modoAtual === MODO_AVANCADO) {
      pontuacao = Math.max(0, pontuacao - 25);
    } else {
      pontuacao = Math.max(0, pontuacao - 2);
    }

    tocarErro();
    feedback.textContent = `Incorreto. Correto: ${missao.codigo}`;
    feedback.className = "feedback erro";
  }

  atualizarPlacar();

const nivelAtual = getNivelAtual();
const ultimaMissaoDoNivel =
  nivelAtual && missaoAtualIndex >= nivelAtual.missoes.length - 1;

if (btnEnviar) btnEnviar.disabled = true;

setTimeout(() => {
  if (btnEnviar) btnEnviar.disabled = false;

  if (ultimaMissaoDoNivel) {
    finalizarNivel();
    return;
  }

  proximaMissao();
}, 900);
}

function calcularPontosAcerto() {
  if (modoAtual === MODO_AVANCADO) {
    const tempoMissaoSegundos = Math.max(
      1,
      Math.round((performance.now() - inicioMissaoMs) / 1000)
    );

    let pontos = 120;

    if (tempoMissaoSegundos <= 8) {
      pontos += 90;
    } else if (tempoMissaoSegundos <= 12) {
      pontos += 70;
    } else if (tempoMissaoSegundos <= 18) {
      pontos += 45;
    } else if (tempoMissaoSegundos <= 25) {
      pontos += 25;
    }

    if (sequenciaAcertos >= 10) {
      pontos += 100;
    } else if (sequenciaAcertos >= 7) {
      pontos += 70;
    } else if (sequenciaAcertos >= 5) {
      pontos += 45;
    } else if (sequenciaAcertos >= 3) {
      pontos += 25;
    }

    return pontos;
  }

  if (sequenciaAcertos >= 5) return 15;
  if (sequenciaAcertos >= 3) return 13;
  if (sequenciaAcertos >= 2) return 12;
  return 10;
}
function proximaMissao() {
  const nivel = getNivelAtual();

  missaoAtualIndex += 1;

  if (missaoAtualIndex >= nivel.missoes.length) {
    finalizarNivel();
    return;
  }

  carregarMissao();
}

function atualizarPlacar() {
  pontuacaoEl.textContent = pontuacao;
  acertosEl.textContent = acertosNivel;

  const nivel = getNivelAtual();

  if (badgePatente && nivel) {
    badgePatente.textContent =
  `${t("jogo_acertos")} ${acertosNivel}/${nivel.missoes.length}`;
  }
}

function finalizarNivel() {
  fimNivelMs = performance.now();

  const nivel = getNivelAtual();
  const niveis = getNiveisModo(modoAtual);
  const totalMissoes = nivel.missoes.length;
  const aproveitamento = Math.round((acertosNivel / totalMissoes) * 100);
  const tempoSegundos = Math.max(1, Math.round((fimNivelMs - inicioNivelMs) / 1000));
  const wpm = calcularWpmNivel(tempoSegundos);
  const aprovado = aproveitamento >= APROVEITAMENTO_MINIMO;
  const bonus = aproveitamento >= APROVEITAMENTO_BONUS;
  const excelenciaWpm = wpm >= META_WPM;

  let pontosFinais = pontuacao;

  if (modoAtual === MODO_AVANCADO) {
    if (aprovado) pontosFinais += 100;
    if (bonus) pontosFinais += 150;
    if (aproveitamento === 100) pontosFinais += 250;
    if (excelenciaWpm && aprovado) pontosFinais += 150;
  } else {
    if (bonus) pontosFinais += 25;
    if (excelenciaWpm && aprovado) pontosFinais += 25;
  }

  pontuacao = pontosFinais;

  let campanhaFinalizada = false;
  let patenteResultado = nivel.patente;

  if (aprovado && nivelAtualIndex === niveis.length - 1) {
    campanhaFinalizada = true;

    if (modoAtual === MODO_AVANCADO) {
      patenteResultado = PATENTE_FINAL_AVANCADO;
    } else if (modoAtual === MODO_INTERMEDIARIO) {
      patenteResultado = PATENTE_FINAL_INTERMEDIARIO;
    } else {
      patenteResultado = PATENTE_FINAL_INICIANTE;
    }
  }

  ultimoResultado = {
    nome: nomeOperador,
    chaveOperador: getChaveOperador(),
    modo: getNomeModo(modoAtual),
    patente: patenteResultado,
    nivel: nivel.numero,
    titulo: campanhaFinalizada
      ? `Modo ${getNomeModo(modoAtual)} concluído`
      : nivel.titulo,
    pontos: pontosFinais,
    aproveitamento,
    tempoSegundos,
    wpm,
    wpmConfigurado: wpmAtual,
    aprovado,
    bonus,
    excelenciaWpm,
    data: new Date().toLocaleDateString("pt-BR")
  };

  if (aprovado) {
    try {
      salvarRanking(ultimoResultado);
    } catch (erro) {
      console.warn("Falha ao salvar ranking local:", erro);
    }
  }

  let registroCarreira = null;

  try {
    registroCarreira = registrarResultadoNaCarreira(ultimoResultado);
  } catch (erro) {
    console.warn("Falha ao registrar progresso do operador:", erro);
  }

  ultimoResultado.registroCarreira = registroCarreira;

  try {
    enviarResultadoRankingGlobal(ultimoResultado);
  } catch (erro) {
    console.warn("Falha ao iniciar envio para Ranking Global:", erro);
  }

  if (aprovado) {
    try {
      liberarProximoNivel(campanhaFinalizada);
    } catch (erro) {
      console.warn("Falha ao liberar próximo nível:", erro);
    }
  }

  if (aprovado) {
    try {
      processarFragmentoSecretoResultado(ultimoResultado);
    } catch (erro) {
      console.warn("Falha ao processar fragmento secreto:", erro);
    }
  }

  try {
    mostrarResultadoNivel(ultimoResultado, campanhaFinalizada);
  } catch (erro) {
    console.error("Falha ao mostrar resultado do nível:", erro);

    if (campanhaFinalizada && aprovado) {
      mostrarTransicaoFase(ultimoResultado);
      return;
    }

    mostrarTela(telaFinal, false);
  }
}
function liberarProximoNivel(campanhaFinalizada) {
  const niveis = getNiveisModo(modoAtual);
  const nivelLiberadoAtual = obterNivelLiberado(modoAtual);

  if (campanhaFinalizada) {
    localStorage.setItem(chaveNivelLiberado(modoAtual), String(niveis.length - 1));

    if (modoAtual === MODO_INICIANTE) {
      localStorage.setItem(chaveInicianteConcluido(), "sim");
    }

    if (modoAtual === MODO_INTERMEDIARIO) {
      localStorage.setItem(chaveIntermediarioConcluido(), "sim");
    }

    if (modoAtual === MODO_AVANCADO) {
      localStorage.setItem(chaveAvancadoConcluido(), "sim");
    }

    return;
  }

  const proximoIndex = Math.min(nivelAtualIndex + 1, niveis.length - 1);

  if (proximoIndex > nivelLiberadoAtual) {
    localStorage.setItem(chaveNivelLiberado(modoAtual), String(proximoIndex));
  }
}
function mostrarFimDoJogo(resultado) {
  const carreira = obterCarreiraOperador();

  const nomeOperadorFinal = getNomeOperadorAtual();
  const patenteFinal = PATENTE_FINAL_AVANCADO;
  const pontosFinal = carreira?.pontosTotais || resultado?.pontos || 0;
  const wpmFinal = Number(resultado?.wpm || 0).toFixed(1);

  if (fimJogoOperador) {
    fimJogoOperador.textContent = nomeOperadorFinal;
  }

  if (fimJogoPatente) {
    fimJogoPatente.textContent = patenteFinal;
  }

  if (fimJogoPontos) {
    fimJogoPontos.textContent = pontosFinal;
  }

  if (fimJogoWpm) {
    fimJogoWpm.textContent = wpmFinal;
  }

  if (textoFimJogoResumo) {
    textoFimJogoResumo.textContent =
      "A Rede ADR foi restabelecida. O sinal voltou a cruzar o silêncio. Sua última transmissão confirmou que ainda havia esperança.";
  }

  mostrarTela(telaFimJogo, false);
  iniciarEfeitoFinalJogo();
  tocarMusicaFinalJogo();
}
function tocarMusicaFinalJogo() {
  try {
    prepararAudio();

    if (!audioContext) return;

    const agora = audioContext.currentTime;

    const notas = [
      { freq: 392.0, inicio: 0.00, duracao: 0.18 },
      { freq: 523.25, inicio: 0.20, duracao: 0.18 },
      { freq: 659.25, inicio: 0.40, duracao: 0.22 },
      { freq: 783.99, inicio: 0.66, duracao: 0.24 },
      { freq: 1046.5, inicio: 0.98, duracao: 0.42 },
      { freq: 783.99, inicio: 1.44, duracao: 0.18 },
      { freq: 1046.5, inicio: 1.66, duracao: 0.55 }
    ];

    notas.forEach((nota) => {
      const oscilador = audioContext.createOscillator();
      const ganho = audioContext.createGain();
      const filtro = audioContext.createBiquadFilter();

      oscilador.type = "sine";
      oscilador.frequency.setValueAtTime(nota.freq, agora + nota.inicio);

      filtro.type = "lowpass";
      filtro.frequency.setValueAtTime(2400, agora + nota.inicio);

      ganho.gain.setValueAtTime(0.0001, agora + nota.inicio);
      ganho.gain.exponentialRampToValueAtTime(0.085, agora + nota.inicio + 0.025);
      ganho.gain.setValueAtTime(
        0.085,
        agora + nota.inicio + Math.max(0.04, nota.duracao - 0.05)
      );
      ganho.gain.exponentialRampToValueAtTime(
        0.0001,
        agora + nota.inicio + nota.duracao
      );

      oscilador.connect(filtro);
      filtro.connect(ganho);
      ganho.connect(audioContext.destination);

      oscilador.start(agora + nota.inicio);
      oscilador.stop(agora + nota.inicio + nota.duracao + 0.05);
    });

    setTimeout(() => {
      tocarSequenciaMorse("--.- ... .-..");
    }, 2300);
  } catch (erro) {
    console.warn("Não foi possível tocar a música final:", erro);
  }
}

function iniciarEfeitoFinalJogo() {
  document.body.classList.add("fim-jogo-celebracao");

  if (temporizadorEfeitoFimJogo) {
    clearTimeout(temporizadorEfeitoFimJogo);
  }

  temporizadorEfeitoFimJogo = setTimeout(() => {
    document.body.classList.remove("fim-jogo-celebracao");
    temporizadorEfeitoFimJogo = null;
  }, 9500);
}

function getDadosTransicaoFase(resultado) {
  const modo = resultado?.modo || "";

  if (modo === "Iniciante") {
    return {
      classe: "transicao-iniciante",
      badge: "FORMAÇÃO INICIANTE CONCLUÍDA",
      titulo: "Iniciante concluído.",
      subtitulo: "O primeiro sinal atravessou o silêncio.",
      texto:
        "Você dominou os fundamentos do Código Morse. A Rede ADR reconhece sua formação inicial e libera o canal intermediário.",
      linha1: "> CANAL BÁSICO: RESTABELECIDO",
      linha2: "> FORMAÇÃO INICIAL: VALIDADA",
      linha3: "> MODO INTERMEDIÁRIO: LIBERADO",
      botao: "Avançar para o Intermediário"
    };
  }

  if (modo === "Intermediário") {
    return {
      classe: "transicao-intermediario",
      badge: "CANAL INTERMEDIÁRIO DOMINADO",
      titulo: "Intermediário concluído.",
      subtitulo: "Você não depende mais das rodinhas.",
      texto:
        "As pausas, o ritmo e a escuta operacional agora fazem parte da sua transmissão. A rede libera o canal avançado.",
      linha1: "> PAUSAS AUTOMÁTICAS: DOMINADAS",
      linha2: "> RITMO OPERACIONAL: ESTÁVEL",
      linha3: "> MODO AVANÇADO: LIBERADO",
      botao: "Avançar para o Avançado"
    };
  }

  return {
    classe: "transicao-avancado",
    badge: "REDE ADR RESTABELECIDA",
    titulo: "Avançado concluído.",
    subtitulo: "A última mensagem foi recebida.",
    texto:
      "Você concluiu a operação avançada. A comunicação voltou a cruzar o silêncio. O simples prevaleceu.",
    linha1: "> CANAL GLOBAL: RESTABELECIDO",
    linha2: "> OPERADOR DE ESCUTA: VALIDADO",
    linha3: "> TRANSMISSÃO FINAL: QSL",
    botao: "Ver fim de jogo"
  };
}

function mostrarTransicaoFase(resultado) {
  if (!resultado || !telaTransicaoFase) return;

  if (temporizadorFinalAutomatico) {
    clearTimeout(temporizadorFinalAutomatico);
    temporizadorFinalAutomatico = null;
  }

  resultadoTransicaoFaseAtual = resultado;

  const dados = getDadosTransicaoFase(resultado);

  telaTransicaoFase.classList.remove(
    "transicao-iniciante",
    "transicao-intermediario",
    "transicao-avancado",
    "transicao-final-automatica"
  );

  telaTransicaoFase.classList.add(dados.classe);

  if (resultado.modo === "Avançado" && resultado.aprovado) {
    telaTransicaoFase.classList.add("transicao-final-automatica");
  }

  if (transicaoFaseBadge) transicaoFaseBadge.textContent = dados.badge;
  if (transicaoFaseTitulo) transicaoFaseTitulo.textContent = dados.titulo;
  if (transicaoFaseSubtitulo) transicaoFaseSubtitulo.textContent = dados.subtitulo;
  if (transicaoFaseTexto) transicaoFaseTexto.textContent = dados.texto;

  if (transicaoLinha1) transicaoLinha1.textContent = dados.linha1;
  if (transicaoLinha2) transicaoLinha2.textContent = dados.linha2;
  if (transicaoLinha3) transicaoLinha3.textContent = dados.linha3;

  if (transicaoOperador) transicaoOperador.textContent = getNomeOperadorAtual();
  if (transicaoPatente) transicaoPatente.textContent = resultado.patente || "Operador";
  if (transicaoAproveitamento) transicaoAproveitamento.textContent = `${resultado.aproveitamento}%`;
  if (transicaoPontos) transicaoPontos.textContent = resultado.pontos || 0;

  if (btnTransicaoContinuar) {
    btnTransicaoContinuar.textContent =
      resultado.modo === "Avançado" && resultado.aprovado
        ? "Abrindo transmissão final..."
        : dados.botao;
  }

  mostrarTela(telaTransicaoFase, false);

  if (resultado.modo === "Avançado" && resultado.aprovado) {
    tocarMusicaFinalJogo();

    temporizadorFinalAutomatico = setTimeout(() => {
      mostrarFimDoJogo(resultado);
    }, 7200);

    return;
  }

  tocarMusicaFimFase(true);
}
function continuarAposTransicaoFase() {
  const resultado = resultadoTransicaoFaseAtual;

  if (!resultado) {
    entrarCampanha();
    return;
  }

  if (resultado.modo === "Iniciante") {
    modoAtual = MODO_INTERMEDIARIO;
    nivelAtualIndex = obterNivelLiberado(MODO_INTERMEDIARIO);
    document.body.classList.add("visualizando-mapa-modo");
    renderizarCampanha();
    mostrarTela(telaCampanha, false);
    return;
  }

  if (resultado.modo === "Intermediário") {
    modoAtual = MODO_AVANCADO;
    nivelAtualIndex = obterNivelLiberado(MODO_AVANCADO);
    document.body.classList.add("visualizando-mapa-modo");
    renderizarCampanha();
    mostrarTela(telaCampanha, false);
    return;
  }

  if (resultado.modo === "Avançado") {
    mostrarFimDoJogo(resultado);
    return;
  }

  entrarCampanha();
}
function mostrarResultadoNivel(resultado, campanhaFinalizada = false) {
  if (
    campanhaFinalizada &&
    resultado &&
    resultado.aprovado
  ) {
    mostrarTransicaoFase(resultado);
    return;
  }

  mostrarTela(telaFinal, false);
  tocarMusicaFimFase(resultado.aprovado);
  if (tituloResultado) {
    tituloResultado.style.display = resultado.aprovado ? "none" : "";
  }
  
  if (resultadoFinal) {
    resultadoFinal.style.display = resultado.aprovado ? "none" : "";
  }

  const conquistasNovas = verificarConquistasDoNivel(resultado, campanhaFinalizada) || [];
  const mensagemNarrativa = getMensagemNarrativaNivel(resultado);

  resultadoAproveitamento.textContent = `${resultado.aproveitamento}%`;
  resultadoTempo.textContent = formatarTempo(resultado.tempoSegundos);
  resultadoWpm.textContent = resultado.wpm.toFixed(1);
  resultadoPontos.textContent = resultado.pontos;

  if (!resultado.aprovado) {
    resultadoBadge.textContent = "MISSÃO NÃO CUMPRIDA";
    resultadoBadge.className = "badge erro";
  
    tituloResultado.style.display = "";
    resultadoFinal.style.display = "";
  
    tituloResultado.textContent = "Tente novamente";
    resultadoFinal.textContent =
      `Você ficou com ${resultado.aproveitamento}% de aproveitamento. O mínimo é 80%. Repita a missão para manter a rede operacional.`;
  
    btnProximoNivel.style.display = "none";
    btnJogarNovamente.textContent = "Repetir nível";

    const relatorio = document.getElementById("relatorioOperacionalResultado");
    if (relatorio) {
      relatorio.innerHTML = "";
      relatorio.style.display = "none";
    }
  
    return;
  }
  if (campanhaFinalizada) {
    resultadoBadge.textContent = `Campanha ${getNomeModo(modoAtual)} concluída`;
    tituloResultado.textContent = "Rede restabelecida";
    if (resultado.modo === "Avançado") {
      resultadoFinal.textContent =
        `Você concluiu uma missão avançada com ${resultado.aproveitamento}% de aproveitamento, em ${formatarTempo(resultado.tempoSegundos)}, alcançando ${resultado.wpm.toFixed(1)} WPM aproximado. No modo Avançado, tempo, precisão e sequência de acertos pesam muito mais no ranking.`;
    } else {
      resultadoFinal.textContent =
        `Você concluiu a missão com ${resultado.aproveitamento}% de aproveitamento, em ${formatarTempo(resultado.tempoSegundos)}, alcançando ${resultado.wpm.toFixed(1)} WPM aproximado.`;
    }
    btnProximoNivel.style.display = "none";
    btnJogarNovamente.textContent = "Refazer missão final";
    renderizarRelatorioOperacional(resultado, mensagemNarrativa, conquistasNovas, campanhaFinalizada);
    return;
  }

  resultadoBadge.textContent = "MISSÃO CUMPRIDA";
resultadoBadge.className = "badge sucesso";

tituloResultado.textContent = "Relatório da missão";

  resultadoFinal.textContent =
    `Você concluiu a missão com ${resultado.aproveitamento}% de aproveitamento, em ${formatarTempo(resultado.tempoSegundos)}, alcançando ${resultado.wpm.toFixed(1)} WPM aproximado.`;

  btnProximoNivel.style.display = "inline-block";
  btnJogarNovamente.textContent = "Repetir missão";

  renderizarRelatorioOperacional(resultado, mensagemNarrativa, conquistasNovas, campanhaFinalizada);
}
function getIconePremio(tipo) {
  if (tipo === "titulo") return "🎖️";
  if (tipo === "distintivo") return "⚡";
  if (tipo === "medalha") return "🏅";

  return "🏆";
}

function getClassePremio(tipo) {
  if (tipo === "titulo") return "premio-titulo";
  if (tipo === "distintivo") return "premio-distintivo";
  if (tipo === "medalha") return "premio-medalha";

  return "premio-generico";
}

function montarCardsPremiosDaFase(premiosDaFase = []) {
  if (!premiosDaFase.length) {
    return `
      <div class="premios-vazio">
        <span>📡</span>
        <strong>Nenhum novo prêmio nesta missão</strong>
        <small>As recompensas desta fase já podem ter sido conquistadas anteriormente. Continue melhorando sua pontuação e seu tempo operacional.</small>
      </div>
    `;
  }
  return premiosDaFase
    .map((premio) => {
      const icone = getIconePremio(premio.tipo);
      const classe = getClassePremio(premio.tipo);

      return `
        <article class="card-premio ${classe}">
          <div class="icone-premio">${icone}</div>

          <div>
            <span>${escaparHtml(premio.tipo || "prêmio")}</span>
            <strong>${escaparHtml(premio.nome)}</strong>
            <small>${escaparHtml(premio.descricao || "Recompensa adicionada ao progresso do operador.")}</small>
          </div>
        </article>
      `;
    })
    .join("");
}
function renderizarRelatorioOperacional(resultado, mensagemNarrativa, conquistasNovas, campanhaFinalizada) {
  const relatorio = document.getElementById("relatorioOperacionalResultado");
  if (!relatorio) return;

  relatorio.style.display = "grid";

  const registroCarreira = resultado.registroCarreira || null;

  const proximaPromocao = resultado.aprovado
    ? (campanhaFinalizada ? resultado.patente : proximaPatenteTexto())
    : resultado.patente;

  const tituloRede = mensagemNarrativa?.titulo || "📡 Rede atualizada";
  const textoRede = mensagemNarrativa?.texto || "A rede avançou para a próxima etapa.";

  const pontosMissao = registroCarreira
    ? Number(registroCarreira.pontosDaFase || 0)
    : Number(resultado.pontos || 0);

  const bonusTempo = registroCarreira
    ? Number(registroCarreira.bonusTempo || 0)
    : 0;

  const ganhoMissao = registroCarreira
    ? Number(registroCarreira.pontosSomados || 0)
    : Number(resultado.pontos || 0);

  const totalAcumulado = registroCarreira
    ? Number(registroCarreira.carreira?.pontosTotais || 0)
    : Number(resultado.pontos || 0);

  const premiosDaFase = registroCarreira?.premiosDaFase || [];

  const htmlPromocao = resultado.aprovado
    ? `
      <div class="relatorio-bloco relatorio-destaque-promocao">
        <span class="label">Promoção</span>
        <h2>🎖️ Você foi promovido a ${escaparHtml(proximaPromocao)}</h2>
      </div>
    `
    : "";

  const htmlPontuacao = registroCarreira
    ? `
      <div class="relatorio-bloco relatorio-pontuacao-simples">
        <span class="label">Seu progresso</span>
        <h2>🏆 Pontuação</h2>

        <div class="pontuacao-linhas">
          <div>
            <span>Pontos da missão</span>
            <strong>${pontosMissao} pts</strong>
          </div>

          <div>
            <span>Bônus</span>
            <strong>+${bonusTempo} pts</strong>
          </div>

          <div>
            <span>Ganho nesta missão</span>
            <strong>+${ganhoMissao} pts</strong>
          </div>

          <div>
            <span>Progresso Total</span>
            <strong>${totalAcumulado} pts</strong>
          </div>
        </div>
      </div>
    `
    : "";

  const htmlRecompensas = premiosDaFase.length
    ? `
      <div class="relatorio-bloco relatorio-recompensas-simples">
        <span class="label">Recompensas</span>
        <h2>🎁 ${premiosDaFase.length} recompensa${premiosDaFase.length > 1 ? "s" : ""} conquistada${premiosDaFase.length > 1 ? "s" : ""}</h2>

        <div class="lista-recompensas-simples">
          ${premiosDaFase
            .map((premio) => {
              const icone = premio.tipo === "distintivo"
                ? "⚡"
                : premio.tipo === "titulo"
                  ? "🎖️"
                  : "🏅";

              const nomeLimpo = String(premio.nome || "Recompensa")
                .replace(/\s+—\s+Iniciante\s+\d+/gi, "")
                .replace(/\s+—\s+Intermediário\s+\d+/gi, "")
                .replace(/\s+—\s+Avançado\s+\d+/gi, "")
                .replace(/\s+—\s+Fase\s+\d+/gi, "");

              return `
                <div class="recompensa-linha">
                  <span>${icone}</span>
                  <strong>${escaparHtml(nomeLimpo)}</strong>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    `
    : "";

  relatorio.innerHTML = `
    ${htmlPromocao}

    <div class="relatorio-bloco relatorio-rede-simples">
      <span class="label">Situação da Rede</span>
      <h2>${escaparHtml(tituloRede)}</h2>
      <p>${escaparHtml(textoRede)}</p>
    </div>

    ${htmlPontuacao}

    ${htmlRecompensas}
  `;
}
function verificarConquistasDoNivel(resultado, campanhaFinalizada) {
  if (!resultado || !resultado.aprovado) return [];

  const novas = [];

  function tentar(idConquista) {
    const desbloqueou = desbloquearConquista(idConquista);
    if (desbloqueou) novas.push(idConquista);
  }

  tentar("primeiro_sinal");

  if (resultado.aproveitamento === 100) {
    tentar("transmissao_limpa");
  }

  if (resultado.tempoSegundos <= 60) {
    tentar("sinal_rapido");
  }

  if (resultado.wpm >= META_WPM) {
    tentar("operador_12wpm");
  }

  if (campanhaFinalizada && resultado.modo === "Iniciante") {
    tentar("rede_restabelecida");
  }

  return novas;
}

function proximaPatenteTexto() {
  const niveis = getNiveisModo(modoAtual);

  if (nivelAtualIndex >= niveis.length - 1) {
    if (modoAtual === MODO_AVANCADO) return PATENTE_FINAL_AVANCADO;
    if (modoAtual === MODO_INTERMEDIARIO) return PATENTE_FINAL_INTERMEDIARIO;
    return PATENTE_FINAL_INICIANTE;
  }

  return niveis[nivelAtualIndex + 1].patente;
}

function iniciarPressionamento(evento) {
  if (evento) {
    evento.preventDefault();

    if (evento.pointerId !== undefined && btnMorse.setPointerCapture) {
      try {
        btnMorse.setPointerCapture(evento.pointerId);
      } catch (erro) {}
    }
  }

  prepararAudio();

  if (pressionando) return;

  limparTemporizadoresPausa();

  pressionando = true;
  inicioPressionamento = performance.now();

  btnMorse.classList.add("pressionado");
  iniciarTomMorse();
}

function finalizarPressionamento(evento) {
  if (evento) {
    evento.preventDefault();

    if (evento.pointerId !== undefined && btnMorse.releasePointerCapture) {
      try {
        btnMorse.releasePointerCapture(evento.pointerId);
      } catch (erro) {}
    }
  }

  if (!pressionando) return;

  const fimPressionamento = performance.now();
  const duracao = fimPressionamento - inicioPressionamento;

  pressionando = false;
  btnMorse.classList.remove("pressionado");

  pararTomMorse();

  const simbolo = duracao < limitePontoTracoMs ? "." : "-";

  adicionarSimbolo(simbolo);
mostrarFeedbackManipulacao(simbolo, duracao);

if (modoAtual === MODO_INTERMEDIARIO || modoAtual === MODO_AVANCADO) {
  fecharSeparacaoPeloAlvo();
  agendarSeparacaoAutomatica();
}
}

function cancelarPressionamento(evento) {
  if (evento) evento.preventDefault();

  if (!pressionando) return;

  pressionando = false;
  btnMorse.classList.remove("pressionado");
  pararTomMorse();
}

function adicionarSimbolo(simbolo) {
  codigoAtual += simbolo;
  atualizarCodigoNaTela();
}

function inserirEspacoLetra() {
  piscarBotao(btnEspacoLetra);

  if (!codigoAtual.trim()) return;

  if (!codigoAtual.endsWith(" ")) {
    codigoAtual += " ";
  }

  atualizarCodigoNaTela();
}

function inserirEspacoPalavra() {
  piscarBotao(btnEspacoPalavra);

  if (!codigoAtual.trim()) return;

  codigoAtual = codigoAtual.trim();

  if (!codigoAtual.endsWith("/")) {
    codigoAtual += " / ";
  }

  atualizarCodigoNaTela();
}
function fecharSeparacaoPeloAlvo() {
  if (modoAtual !== MODO_INTERMEDIARIO && modoAtual !== MODO_AVANCADO) {
    return;
  }

  if (!codigoAtual.trim()) return;

  const missao = getMissaoAtual();
  if (!missao || !missao.codigo) return;

  const codigoCorreto = normalizarCodigo(missao.codigo);
  const tokensCorretos = codigoCorreto.split(" ").filter(Boolean);

  const codigoLimpo = normalizarCodigo(codigoAtual);
  const tokensEnviados = codigoLimpo.split(" ").filter(Boolean);

  if (!tokensEnviados.length) return;

  const tokenAtual = tokensEnviados[tokensEnviados.length - 1];
  const indiceAtual = tokensEnviados.length - 1;

  const tokenEsperado = tokensCorretos[indiceAtual];
  const proximoTokenEsperado = tokensCorretos[indiceAtual + 1];

  if (!tokenEsperado) return;

  if (tokenAtual !== tokenEsperado) {
    return;
  }

  if (!proximoTokenEsperado) {
    return;
  }

  codigoAtual = codigoLimpo;

  if (proximoTokenEsperado === "/") {
    codigoAtual += " / ";
    atualizarCodigoNaTela();
    mostrarFeedbackPausa("✓ Palavra fechada");
    return;
  }

  codigoAtual += " ";
  atualizarCodigoNaTela();
  mostrarFeedbackPausa("✓ Letra fechada");
}
function agendarSeparacaoAutomatica() {
  limparTemporizadoresPausa();

  temporizadorLetra = setTimeout(() => {
    if (!codigoAtual.trim()) return;

    const missao = getMissaoAtual();
    const enviado = normalizarCodigo(codigoAtual);
    const correto = normalizarCodigo(missao.codigo);

    if (enviado === correto) {
      return;
    }

    if (!codigoAtual.endsWith(" ") && !codigoAtual.endsWith("/")) {
      codigoAtual += " ";
      atualizarCodigoNaTela();
      mostrarFeedbackPausa("✓ Letra fechada");
    }
  }, pausaAutoLetraMs);

  temporizadorPalavra = setTimeout(() => {
    if (!codigoAtual.trim()) return;

    const missao = getMissaoAtual();
    const enviado = normalizarCodigo(codigoAtual);
    const correto = normalizarCodigo(missao.codigo);

    if (enviado === correto) {
      return;
    }

    const codigoComBarra = normalizarCodigo(`${codigoAtual.trim()} /`);

    if (!correto.startsWith(codigoComBarra)) {
      return;
    }

    codigoAtual = codigoAtual.trim();

    if (!codigoAtual.endsWith("/")) {
      codigoAtual += " / ";
      atualizarCodigoNaTela();
      mostrarFeedbackPausa("✓ Palavra fechada");
    }
  }, pausaAutoPalavraMs);
}
function mostrarFeedbackPausa(texto) {
  feedback.innerHTML = `<span class="feedback-pausa">${texto}</span>`;
  feedback.className = "feedback alerta";
}

function limparTemporizadoresPausa() {
  if (temporizadorLetra) clearTimeout(temporizadorLetra);
  if (temporizadorPalavra) clearTimeout(temporizadorPalavra);

  temporizadorLetra = null;
  temporizadorPalavra = null;
}

function piscarBotao(botao) {
  if (!botao) return;

  botao.classList.add("piscou");

  setTimeout(() => {
    botao.classList.remove("piscou");
  }, 140);
}

function decodificarMorseDigitadoParaTexto(codigo) {
  const mapaInvertido = Object.fromEntries(
    Object.entries(TABELA_MORSE).map(([letra, morse]) => [morse, letra])
  );

  const codigoNormalizado = normalizarCodigo(codigo);

  if (!codigoNormalizado) {
    return "—";
  }

  return codigoNormalizado
    .split(" ")
    .map((parte) => {
      if (parte === "/") {
        return " ";
      }

      return mapaInvertido[parte] || "";
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim() || "—";
}

function atualizarCodigoNaTela() {
  if (missaoUsaCodigoComoAlvo()) {
    codigoDigitado.textContent = decodificarMorseDigitadoParaTexto(codigoAtual);
    codigoDigitado.classList.add("texto-decodificado-enviado");
    return;
  }

  codigoDigitado.textContent = codigoAtual.trim() || "—";
  codigoDigitado.classList.remove("texto-decodificado-enviado");
}

function limparCodigo() {
  limparTemporizadoresPausa();
  codigoAtual = "";
  atualizarCodigoNaTela();
  tocarCliqueLimpar();
  feedback.textContent = "Código limpo.";
  feedback.className = "feedback";
}

function mostrarFeedbackManipulacao(simbolo, duracao) {
  if (simbolo === ".") {
    feedback.innerHTML = `<span class="feedback-ponto">●</span> Ponto transmitido`;
  } else {
    feedback.innerHTML = `<span class="feedback-traco">▬</span> Traço transmitido`;
  }

  feedback.className = "feedback feedback-jogo alerta";
}

function normalizarCodigo(codigo) {
  return String(codigo || "")
    .trim()
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s+/g, " ")
    .replace(/(?:\s\/\s?)+$/g, "")
    .trim();
}

function calcularWpmNivel(tempoSegundos) {
  const nivel = getNivelAtual();
  const textoTotal = nivel.missoes.join("");
  const caracteresValidos = textoTotal.replace(/\s/g, "").length;
  const minutos = tempoSegundos / 60;
  const wpm = caracteresValidos / 5 / minutos;

  return Number.isFinite(wpm) ? wpm : 0;
}

function iniciarTimerMissao() {
  pararTimerMissao();

  if (!timerMissaoEl) return;

  timerMissaoEl.textContent = "⏱ 00s";

  intervaloTimerMissao = setInterval(() => {
    const segundos = Math.max(
      0,
      Math.floor((performance.now() - inicioMissaoMs) / 1000)
    );

    timerMissaoEl.textContent =
      `⏱ ${String(segundos).padStart(2, "0")}s`;
  }, 250);
}

function pararTimerMissao() {
  if (intervaloTimerMissao) {
    clearInterval(intervaloTimerMissao);
    intervaloTimerMissao = null;
  }
}

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = segundos % 60;

  if (min <= 0) return `${seg}s`;

  return `${min}min ${String(seg).padStart(2, "0")}s`;
}
async function enviarResultadoRankingGlobal(resultado) {
  if (!resultado || !resultado.aprovado) {
    return;
  }

  const carreira = obterCarreiraOperador();

  const dadosRankingGlobal = {
    operador: resultado.nome || getNomeOperadorAtual(),
    operadorLocalId: obterIdOperadorLocal(),

    modo: resultado.modo,
    nivel: resultado.nivel,
    tituloNivel: resultado.titulo,

    pontos: resultado.pontos,
    aproveitamento: resultado.aproveitamento,
    tempoSegundos: resultado.tempoSegundos,
    wpm: resultado.wpm,

    pontosCarreira: Number(carreira.pontosTotais || resultado.pontos || 0),
    fasesConcluidas: Array.isArray(carreira.fasesConcluidas)
      ? carreira.fasesConcluidas.length
      : 1,
    medalhas: Array.isArray(carreira.medalhas)
      ? carreira.medalhas.length
      : 0,
    titulos: Array.isArray(carreira.titulos)
      ? carreira.titulos.length
      : 0,
    melhorAproveitamento: Number(carreira.melhorAproveitamento || resultado.aproveitamento || 0),
    melhorWpm: Number(carreira.melhorWpm || resultado.wpm || 0),
    melhorTempoSegundos: Number(carreira.melhorTempoSegundos || resultado.tempoSegundos || 0),

    versaoApp: VERSAO_APP_EDS_MORSE,
    origem: "pwa"
  };

  try {
    const resposta = await fetch(RANKING_GLOBAL_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dadosRankingGlobal)
    });

    const retorno = await resposta.json();

    if (retorno && retorno.ok) {
      console.log("Ranking Global:", retorno.mensagem || "Resultado enviado.");
    
      if (typeof mostrarAvisoRapido === "function") {
        const superouMelhorFase =
        !!resultado?.registroCarreira?.superouMelhorFase;

      mostrarAvisoRapido(
        "Ranking Global atualizado",
        superouMelhorFase
          ? "Seu progresso geral foi enviado com sucesso. Desta vez você se superou!"
          : "Seu progresso geral foi enviado com sucesso."
      );
      }
    
      return true;
    }

    if (
      retorno &&
      retorno.codigo === "NOME_EM_USO_OUTRO_APARELHO"
    ) {
      mostrarAvisoRapido(
        "Nome de operador bloqueado",
        retorno.erro || "Este nome já está sendo usado por outro aparelho."
      );

      return false;
    }

    mostrarAvisoRapido(
      "Ranking Global",
      retorno?.erro || "Resultado não enviado."
    );

    console.warn("Ranking Global recusou o envio:", retorno);
    return false;
  } catch (erro) {
    console.warn("Falha ao enviar Ranking Global:", erro);

    mostrarAvisoRapido(
      "Ranking Global",
      "Falha de conexão com o Ranking Global."
    );

    return false;
  }
}
function salvarRanking(resultado) {
  if (!resultado || !resultado.aprovado) {
    return;
  }

  const ranking = obterRanking();

  const pontosBase = Number(resultado.pontos || 0);
  const bonusTempo = 0;
  const pontosComBonusTempo = pontosBase;

  const resultadoLimpo = {
    nome: resultado.nome,
    chaveOperador: resultado.chaveOperador,
    modo: resultado.modo,
    patente: resultado.patente,
    nivel: resultado.nivel,
    titulo: resultado.titulo,

    pontos: pontosComBonusTempo,
    pontosBase,
    bonusTempo,
    pontosComBonusTempo,

    aproveitamento: resultado.aproveitamento,
    tempoSegundos: resultado.tempoSegundos,
    wpm: resultado.wpm,
    wpmConfigurado: resultado.wpmConfigurado,
    aprovado: resultado.aprovado,
    data: resultado.data
  };

  const indiceExistente = ranking.findIndex((item) => {
    return (
      item.chaveOperador === resultadoLimpo.chaveOperador &&
      item.modo === resultadoLimpo.modo &&
      item.nivel === resultadoLimpo.nivel
    );
  });

  if (indiceExistente === -1) {
    ranking.push(resultadoLimpo);
  } else {
    const resultadoAnterior = ranking[indiceExistente];

    const novoResultadoMelhor =
      resultadoLimpo.pontos > resultadoAnterior.pontos ||
      (
        resultadoLimpo.pontos === resultadoAnterior.pontos &&
        resultadoLimpo.aproveitamento > resultadoAnterior.aproveitamento
      ) ||
      (
        resultadoLimpo.pontos === resultadoAnterior.pontos &&
        resultadoLimpo.aproveitamento === resultadoAnterior.aproveitamento &&
        resultadoLimpo.tempoSegundos < resultadoAnterior.tempoSegundos
      ) ||
      (
        resultadoLimpo.pontos === resultadoAnterior.pontos &&
        resultadoLimpo.aproveitamento === resultadoAnterior.aproveitamento &&
        resultadoLimpo.tempoSegundos === resultadoAnterior.tempoSegundos &&
        resultadoLimpo.wpm > resultadoAnterior.wpm
      );

    if (novoResultadoMelhor) {
      ranking[indiceExistente] = resultadoLimpo;
    }
  }

  ranking.sort((a, b) => {
    if (b.aprovado !== a.aprovado) return Number(b.aprovado) - Number(a.aprovado);
    if (b.modo !== a.modo) return String(b.modo).localeCompare(String(a.modo));
    if (b.nivel !== a.nivel) return b.nivel - a.nivel;
    if (b.pontos !== a.pontos) return b.pontos - a.pontos;
    if (b.aproveitamento !== a.aproveitamento) return b.aproveitamento - a.aproveitamento;
    if (a.tempoSegundos !== b.tempoSegundos) return a.tempoSegundos - b.tempoSegundos;
    return b.wpm - a.wpm;
  });

  localStorage.setItem("operadorMorseRanking", JSON.stringify(ranking.slice(0, 50)));
}

function obterRanking() {
  try {
    return JSON.parse(localStorage.getItem("operadorMorseRanking")) || [];
  } catch (erro) {
    return [];
  }
}
function obterRankingCarreira() {
  const rankingMissoes = obterRanking();
  const operadoresMap = new Map();

  rankingMissoes.forEach((item) => {
    if (!item.chaveOperador) return;

    if (!operadoresMap.has(item.chaveOperador)) {
      operadoresMap.set(item.chaveOperador, {
        nome: item.nome,
        chaveOperador: item.chaveOperador,
        pontosTotais: 0,
        fasesConcluidas: 0,
        medalhas: 0,
        titulos: 0,
        melhorTempoSegundos: null,
        melhorAproveitamento: 0,
        melhorWpm: 0,
        patente: item.patente || "Operador"
      });
    }

    const operador = operadoresMap.get(item.chaveOperador);

    operador.pontosTotais += Number(item.pontos || 0);
    operador.fasesConcluidas += item.aprovado ? 1 : 0;
    operador.melhorAproveitamento = Math.max(
      operador.melhorAproveitamento,
      Number(item.aproveitamento || 0)
    );
    operador.melhorWpm = Math.max(
      operador.melhorWpm,
      Number(item.wpm || 0)
    );

    if (
      item.tempoSegundos &&
      (
        operador.melhorTempoSegundos === null ||
        item.tempoSegundos < operador.melhorTempoSegundos
      )
    ) {
      operador.melhorTempoSegundos = item.tempoSegundos;
    }

    const carreiraOriginal = JSON.parse(
      localStorage.getItem(`operadorMorseCarreira_${item.chaveOperador}`) || "null"
    );

    if (carreiraOriginal) {
      operador.pontosTotais = Number(carreiraOriginal.pontosTotais || operador.pontosTotais);
      operador.fasesConcluidas = Array.isArray(carreiraOriginal.fasesConcluidas)
        ? carreiraOriginal.fasesConcluidas.length
        : operador.fasesConcluidas;

      operador.medalhas = Array.isArray(carreiraOriginal.medalhas)
        ? carreiraOriginal.medalhas.length
        : 0;

      operador.titulos = Array.isArray(carreiraOriginal.titulos)
        ? carreiraOriginal.titulos.length
        : 0;

      operador.melhorAproveitamento = Number(
        carreiraOriginal.melhorAproveitamento || operador.melhorAproveitamento
      );

      operador.melhorWpm = Number(
        carreiraOriginal.melhorWpm || operador.melhorWpm
      );

      operador.melhorTempoSegundos =
        carreiraOriginal.melhorTempoSegundos || operador.melhorTempoSegundos;
    }
  });

  return Array.from(operadoresMap.values()).sort((a, b) => {
    if (b.pontosTotais !== a.pontosTotais) return b.pontosTotais - a.pontosTotais;
    if (b.fasesConcluidas !== a.fasesConcluidas) return b.fasesConcluidas - a.fasesConcluidas;
    if (b.medalhas !== a.medalhas) return b.medalhas - a.medalhas;
    if (b.titulos !== a.titulos) return b.titulos - a.titulos;
    if (b.melhorAproveitamento !== a.melhorAproveitamento) {
      return b.melhorAproveitamento - a.melhorAproveitamento;
    }
    return b.melhorWpm - a.melhorWpm;
  });
}
function abrirRanking() {
  mostrarTela(telaRanking);
  renderizarRankingGlobal();
}
function pegarCampoRanking(item, ...nomes) {
  if (!item) return 0;

  for (const nome of nomes) {
    if (item[nome] !== undefined && item[nome] !== null) {
      return item[nome];
    }
  }

  return 0;
}

function calcularPercentualRelatorio(valor, referencia) {
  const atual = Number(valor || 0);
  const maximo = Number(referencia || 0);

  if (!maximo || maximo <= 0) return 0;

  return Math.max(0, Math.min(100, Math.round((atual / maximo) * 100)));
}

function montarLinhaComparativoRelatorio(rotulo, meuValorTexto, liderValorTexto, percentual) {
  return `
    <div class="relatorio-comparativo-linha">
      <div>
        <span>${escaparHtml(rotulo)}</span>
        <strong>${escaparHtml(meuValorTexto)}</strong>
        <small>Líder: ${escaparHtml(liderValorTexto)}</small>
      </div>

      <div class="barra-comparativo">
        <div style="width:${percentual}%"></div>
      </div>
    </div>
  `;
}

function montarDiagnosticoRelatorio(minhaPosicao, lider) {
  if (!minhaPosicao) {
    return "Conclua uma missão aprovada para gerar seu primeiro relatório global.";
  }

  const meusPontos = Number(pegarCampoRanking(minhaPosicao, "pontos_carreira", "pontosCarreira") || 0);
  const pontosLider = Number(pegarCampoRanking(lider, "pontos_carreira", "pontosCarreira") || 0);
  const meuWpm = Number(pegarCampoRanking(minhaPosicao, "melhor_wpm", "melhorWpm") || 0);
  const wpmLider = Number(pegarCampoRanking(lider, "melhor_wpm", "melhorWpm") || 0);
  const meuAproveitamento = Number(pegarCampoRanking(minhaPosicao, "melhor_aproveitamento", "melhorAproveitamento") || 0);

  if (pontosLider > 0 && meusPontos >= pontosLider) {
    return "Você está no topo do Ranking Global. Mantenha a regularidade para defender sua posição.";
  }

  if (meuAproveitamento >= 95 && meuWpm < wpmLider) {
    return "Seu ponto forte é a precisão. Para subir no ranking, o próximo foco é aumentar o WPM mantendo o aproveitamento.";
  }

  if (meuWpm >= wpmLider && meuAproveitamento < 90) {
    return "Você tem boa velocidade. Para evoluir mais, o foco agora é reduzir erros e melhorar o aproveitamento.";
  }

  return "Você está construindo progresso. Continue concluindo fases e repetindo missões para melhorar seus melhores resultados.";
}

function montarHtmlRelatorioOperador(dados) {
  const ranking = dados?.ranking || [];
  const minhaPosicao = dados?.minhaPosicao || null;
  const lider = ranking[0] || null;

  if (!minhaPosicao) {
    return `
      <div class="ranking-vazio">
        Ainda não há dados suficientes para gerar seu relatório.
        Conclua uma missão aprovada e envie seu resultado ao Ranking Global.
      </div>
    `;
  }

  const pontosMeu = Number(pegarCampoRanking(minhaPosicao, "pontos_carreira", "pontosCarreira") || 0);
  const pontosLider = Number(pegarCampoRanking(lider, "pontos_carreira", "pontosCarreira") || 0);

  const fasesMeu = Number(pegarCampoRanking(minhaPosicao, "fases_concluidas", "fasesConcluidas") || 0);
  const fasesLider = Number(pegarCampoRanking(lider, "fases_concluidas", "fasesConcluidas") || 0);

  const medalhasMeu = Number(pegarCampoRanking(minhaPosicao, "medalhas") || 0);
  const medalhasLider = Number(pegarCampoRanking(lider, "medalhas") || 0);

  const aproveitamentoMeu = Number(pegarCampoRanking(minhaPosicao, "melhor_aproveitamento", "melhorAproveitamento") || 0);
  const aproveitamentoLider = Number(pegarCampoRanking(lider, "melhor_aproveitamento", "melhorAproveitamento") || 0);

  const wpmMeu = Number(pegarCampoRanking(minhaPosicao, "melhor_wpm", "melhorWpm") || 0);
  const wpmLider = Number(pegarCampoRanking(lider, "melhor_wpm", "melhorWpm") || 0);

  const diferencaPontos = Math.max(0, pontosLider - pontosMeu);
  const percentualPontos = calcularPercentualRelatorio(pontosMeu, pontosLider);
  const percentualFases = calcularPercentualRelatorio(fasesMeu, fasesLider);
  const percentualMedalhas = calcularPercentualRelatorio(medalhasMeu, medalhasLider);
  const percentualAproveitamento = calcularPercentualRelatorio(aproveitamentoMeu, Math.max(aproveitamentoLider, 100));
  const percentualWpm = calcularPercentualRelatorio(wpmMeu, wpmLider);

  const diagnostico = montarDiagnosticoRelatorio(minhaPosicao, lider);

  return `
    <section class="relatorio-operador-topo">
      <div class="relatorio-operador-posicao">
        <span>Posição global</span>
        <strong>#${formatarNumeroRanking(minhaPosicao.posicao || 0)}</strong>
      </div>

      <div class="relatorio-operador-identidade">
        <span class="label">Operador</span>
        <h2>${escaparHtml(minhaPosicao.operador || getNomeOperadorAtual())}</h2>
        <p>
          ${formatarNumeroRanking(pontosMeu)} pts acumulados •
          ${escaparHtml(minhaPosicao.modo || "Modo")} •
          Nível ${formatarNumeroRanking(minhaPosicao.nivel || 0)}
        </p>
      </div>
    </section>

    <section class="relatorio-operador-resumo">
      <div>
        <span>Líder global</span>
        <strong>${escaparHtml(lider?.operador || "—")}</strong>
        <small>${formatarNumeroRanking(pontosLider)} pts</small>
      </div>

      <div>
        <span>Diferença para o líder</span>
        <strong>${formatarNumeroRanking(diferencaPontos)}</strong>
        <small>pontos</small>
      </div>

      <div>
        <span>Seu alcance</span>
        <strong>${percentualPontos}%</strong>
        <small>do líder em pontos</small>
      </div>
    </section>

    <section class="relatorio-operador-comparativo">
      <h2>Comparativo global</h2>

      ${montarLinhaComparativoRelatorio(
        "Pontos acumulados",
        `${formatarNumeroRanking(pontosMeu)} pts`,
        `${formatarNumeroRanking(pontosLider)} pts`,
        percentualPontos
      )}

      ${montarLinhaComparativoRelatorio(
        "Fases concluídas",
        `${formatarNumeroRanking(fasesMeu)}`,
        `${formatarNumeroRanking(fasesLider)}`,
        percentualFases
      )}

      ${montarLinhaComparativoRelatorio(
        "Medalhas",
        `${formatarNumeroRanking(medalhasMeu)}`,
        `${formatarNumeroRanking(medalhasLider)}`,
        percentualMedalhas
      )}

      ${montarLinhaComparativoRelatorio(
        "Melhor aproveitamento",
        `${formatarNumeroRanking(aproveitamentoMeu)}%`,
        `${formatarNumeroRanking(aproveitamentoLider)}%`,
        percentualAproveitamento
      )}

      ${montarLinhaComparativoRelatorio(
        "Melhor WPM",
        `${formatarWpmRanking(wpmMeu)} WPM`,
        `${formatarWpmRanking(wpmLider)} WPM`,
        percentualWpm
      )}
    </section>

    <section class="relatorio-operador-diagnostico">
      <span class="label">Diagnóstico operacional</span>
      <strong>${escaparHtml(diagnostico)}</strong>
    </section>
  `;
}

async function abrirRelatorioOperador() {
  if (!telaRelatorioOperador || !relatorioOperadorConteudo) return;

  mostrarTela(telaRelatorioOperador);

  relatorioOperadorConteudo.innerHTML = `
    <div class="ranking-carregando">
      Carregando relatório do operador...
    </div>
  `;

  try {
    const dados = await buscarRankingGlobal(50);
    relatorioOperadorConteudo.innerHTML = montarHtmlRelatorioOperador(dados);
  } catch (erro) {
    console.error("Erro ao carregar relatório do operador:", erro);

    relatorioOperadorConteudo.innerHTML = `
      <div class="ranking-vazio">
        Não foi possível carregar o relatório agora. Verifique sua internet e tente novamente.
      </div>
    `;
  }
}

async function buscarRankingGlobal(limite = 50, busca = "") {
  const parametros = new URLSearchParams();

  parametros.set("modo", "Geral");
  parametros.set("limite", String(limite));

  const operadorAtual = getNomeOperadorAtual();

  if (operadorAtual && operadorAtual.trim().length >= 2) {
    parametros.set("operadorSlug", getChaveOperador());
  }

  if (busca && busca.trim()) {
    parametros.set("busca", busca.trim());
  }

  const resposta = await fetch(`${RANKING_GLOBAL_API_URL}?${parametros.toString()}`);

  if (!resposta.ok) {
    throw new Error("Falha ao buscar Ranking Global.");
  }

  const dados = await resposta.json();

  if (!dados || !dados.ok) {
    throw new Error("Resposta inválida do Ranking Global.");
  }

  return dados;
}
async function atualizarPosicaoGlobalTelaInicial() {
  const posicaoEl = document.getElementById("homeOperadorPosicao");

  if (!posicaoEl) return;

  const operadorAtual = getNomeOperadorAtual();

  if (!operadorAtual || operadorAtual.trim().length < 2) {
    posicaoEl.textContent = "—";
    return;
  }

  try {
    const dados = await buscarRankingGlobal(50);
    const minhaPosicao = dados?.minhaPosicao || null;

    if (minhaPosicao && minhaPosicao.posicao) {
      posicaoEl.textContent = `#${formatarNumeroRanking(minhaPosicao.posicao)}`;
    } else {
      posicaoEl.textContent = "—";
    }
  } catch (erro) {
    console.warn("Não foi possível atualizar posição global na tela inicial:", erro);
    posicaoEl.textContent = "—";
  }
}
function formatarDataRankingGlobal(valor) {
  if (!valor) return "";

  const data = new Date(valor);

  if (Number.isNaN(data.getTime())) {
    return "";
  }

  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  });
}

function formatarNumeroRanking(valor) {
  return Number(valor || 0).toLocaleString("pt-BR");
}

function formatarWpmRanking(valor) {
  const numero = Number(valor || 0);

  if (!Number.isFinite(numero)) {
    return "0.0";
  }

  return numero.toFixed(1);
}
function traduzirModoRanking(modo) {
  const texto = String(modo || "").toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (texto.includes("avancado") || texto.includes("advanced")) {
    return t("modo_avancado");
  }

  if (texto.includes("intermediario") || texto.includes("intermediate")) {
    return t("modo_intermediario");
  }

  if (texto.includes("iniciante") || texto.includes("beginner")) {
    return t("modo_iniciante");
  }

  return modo || "Modo";
}

function pluralRanking(valor, chaveSingular, chavePlural) {
  return Number(valor) === 1 ? t(chaveSingular) : t(chavePlural);
}
function traduzirTituloNivelRanking(titulo) {
  const textoOriginal = String(titulo || "").trim();

  if (idiomaAtual !== "en" || !textoOriginal) {
    return textoOriginal;
  }

  const mapa = {
    "Primeiro Contato": "First Contact",
    "Canal Seguro": "Safe Channel",
    "Rede de Emergência": "Emergency Network",
    "Mensagem Prioritária": "Priority Message",
    "Último Sinal": "Last Signal",
    "Teste de Operador": "Operator Test",
    "Teste Numérico": "Number Test",
    "Grupos Táticos I": "Tactical Groups I",
    "Grupos Táticos II": "Tactical Groups II",
    "Canal Criptografado": "Encrypted Channel",
    "Protocolos de Rádio": "Radio Protocols",
    "Mensagens Curtas": "Short Messages",
    "Rede Regional": "Regional Network",
    "Centro de Comunicações": "Communications Center",
    "Tráfego Prioritário": "Priority Traffic",
    "Operação Coordenada": "Coordinated Operation",
    "Posto Avançado": "Advanced Post",
    "Rede Nacional": "National Network",
    "Operador Estratégico": "Strategic Operator",
    "O Último Sinal": "The Last Signal",

    "Sem Rodinhas": "No Training Wheels",
    "Pausa entre Letras": "Letter Pause",
    "Ritmo Fônico I": "Sound Rhythm I",
    "Ritmo Fônico II": "Sound Rhythm II",
    "Palavras Curtas": "Short Words",
    "Palavras Médias": "Medium Words",
    "Frases Curtas": "Short Phrases",
    "Frases Operacionais": "Operational Phrases",
    "Mensagem Operacional": "Operational Message",
    "Missão Final Intermediária": "Final Intermediate Mission",

    "Código para texto": "Code to text",
    "Campanha Intermediário concluída": "Intermediate Campaign Completed",
    "Campanha Iniciante concluída": "Beginner Campaign Completed",
    "Campanha Avançado concluída": "Advanced Campaign Completed"
  };

  let traduzido = textoOriginal;

  Object.entries(mapa).forEach(([pt, en]) => {
    traduzido = traduzido.replaceAll(pt, en);
  });

  traduzido = traduzido
    .replaceAll("Missão", "Mission")
    .replaceAll("Avançada", "Advanced")
    .replaceAll("Intermediária", "Intermediate")
    .replaceAll("concluída", "completed")
    .replaceAll("—", "—");

  return traduzido;
}
function detalheNivelRanking(item) {
  return `${traduzirModoRanking(item.modo || "Modo")} • ${t("ranking_nivel")} ${formatarNumeroRanking(item.nivel)}`;
}
function renderizarCardMinhaPosicao(minhaPosicao) {
  if (!minhaPosicao) {
    return `
      <section class="ranking-minha-posicao vazio">
        <div>
          <span class="label">${t("ranking_minha_posicao")}</span>
          <strong>${t("ranking_fora")}</strong>
          <p>
            ${t("ranking_fora_msg")}
          </p>
        </div>
      </section>
    `;
  }

  return `
    <section class="ranking-minha-posicao">
      <div class="ranking-minha-posicao-numero">
        #${formatarNumeroRanking(minhaPosicao.posicao)}
      </div>

      <div class="ranking-minha-posicao-info">
        <span class="label">${t("ranking_minha_posicao")}</span>

        <strong>${escaparHtml(minhaPosicao.operador || "Operator")}</strong>

        <div class="ranking-minha-posicao-detalhes">
          <span>
            ${formatarNumeroRanking(minhaPosicao.pontos_carreira)} ${t("ranking_pontos")}
          </span>

          <span>
            ${detalheNivelRanking(minhaPosicao)}
          </span>

          <span>
            ${formatarNumeroRanking(minhaPosicao.melhor_aproveitamento)}% • ${formatarWpmRanking(minhaPosicao.melhor_wpm)} WPM
          </span>
        </div>
      </div>
    </section>
  `;
}
function renderizarLinhaRankingGlobal(item, indice = 0) {
  const posicao = item.posicao || indice + 1;
  const dataAtualizacao = formatarDataRankingGlobal(item.atualizado_em);

  const fases = Number(item.fases_concluidas || 0);
  const medalhas = Number(item.medalhas || 0);

  return `
    <article class="ranking-item ranking-item-global">
      <div class="ranking-posicao">
        #${formatarNumeroRanking(posicao)}
      </div>

      <div>
        <div class="ranking-nome">
          ${escaparHtml(item.operador || "Operator")}
        </div>

        <div class="ranking-detalhes">
          ${detalheNivelRanking(item)}
          ${item.titulo_nivel ? `• ${escaparHtml(traduzirTituloNivelRanking(item.titulo_nivel))}` : ""}
        </div>

        <div class="ranking-detalhes ranking-detalhes-extra">
          ${formatarNumeroRanking(fases)} ${pluralRanking(fases, "ranking_fase_singular", "ranking_fase_plural")} •
          ${formatarNumeroRanking(medalhas)} ${pluralRanking(medalhas, "ranking_medalha_singular", "ranking_medalha_plural")} •
          ${formatarNumeroRanking(item.melhor_aproveitamento)}% •
          ${formatarWpmRanking(item.melhor_wpm)} WPM
          ${dataAtualizacao ? `• ${dataAtualizacao}` : ""}
        </div>
      </div>

      <div class="ranking-pontos">
        ${formatarNumeroRanking(item.pontos_carreira)}
        <small>${t("ranking_pontos")}</small>
      </div>
    </article>
  `;
}
function renderizarPodioRankingGlobal(ranking = []) {
  const top3 = ranking.slice(0, 3);

  if (!top3.length) {
    return "";
  }

  const medalhas = ["🥇", "🥈", "🥉"];

  return `
    <section class="ranking-podio-global">
      <div class="ranking-podio-titulo">
        <h2>${t("ranking_podio_titulo")}</h2>
        <p>${t("ranking_podio_subtitulo")}</p>
      </div>

      <div class="ranking-podio-lista">
        ${top3
          .map((item, indice) => {
            const posicao = item.posicao || indice + 1;

            return `
              <article class="ranking-podio-card ranking-podio-${indice + 1}">
                <div class="ranking-podio-medalha">
                  ${medalhas[indice] || "🏅"}
                </div>

                <div class="ranking-podio-posicao">
                  #${formatarNumeroRanking(posicao)}
                </div>

                <strong>
                  ${escaparHtml(item.operador || "Operator")}
                </strong>

                <span>
                  ${detalheNivelRanking(item)}
                </span>

                <div class="ranking-podio-pontos">
                  ${formatarNumeroRanking(item.pontos_carreira)}
                  <small>${t("ranking_pontos")}</small>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}
function montarHtmlRankingGlobal(dados, busca = "") {
  const ranking = dados?.ranking || [];
  const minhaPosicao = dados?.minhaPosicao || null;
  const temBusca = busca && busca.trim();

  const htmlMinhaPosicao = renderizarCardMinhaPosicao(minhaPosicao);
  const htmlPodio = !temBusca ? renderizarPodioRankingGlobal(ranking) : "";

  const totalLista = temBusca
    ? Number(dados.totalEncontrados || ranking.length || 0)
    : Number(ranking.length || 0);

  const textoContador = temBusca
    ? `${formatarNumeroRanking(totalLista)} ${pluralRanking(totalLista, "ranking_encontrado_singular", "ranking_encontrado_plural")}`
    : `${formatarNumeroRanking(totalLista)} ${pluralRanking(totalLista, "ranking_operador_singular", "ranking_operador_plural")}`;

  const htmlBusca = `
    <section class="ranking-busca-operador">
      <label for="inputBuscaOperadorRanking">
        ${t("ranking_buscar_operador")}
      </label>

      <div class="ranking-busca-linha">
        <input
          id="inputBuscaOperadorRanking"
          type="text"
          maxlength="24"
          placeholder="${escaparHtml(t("ranking_placeholder_busca"))}"
          value="${escaparHtml(busca || "")}"
          autocomplete="off"
        />

        <button id="btnExecutarBuscaRanking" class="btn principal compacto">
          ${t("ranking_botao_buscar")}
        </button>

        <button id="btnLimparBuscaRanking" class="btn secundario compacto" ${temBusca ? "" : "style='display:none;'"}>
          ${t("ranking_botao_limpar")}
        </button>
      </div>

      <p>
        ${
          temBusca
            ? `${t("ranking_resultados_busca")}: <strong>${escaparHtml(busca)}</strong>`
            : t("ranking_busca_desc")
        }
      </p>
    </section>
  `;

  const tituloLista = temBusca
    ? `🔎 ${t("ranking_resultados_busca")}`
    : t("ranking_top_global");

  let htmlLista = "";

  if (!ranking.length) {
    htmlLista = `
      <div class="ranking-vazio">
        ${
          temBusca
            ? (idiomaAtual === "en"
                ? "No operator found with that name."
                : "Nenhum operador encontrado com esse nome.")
            : (idiomaAtual === "en"
                ? "The Global Ranking does not have any records yet."
                : "O Ranking Global ainda não possui registros.")
        }
      </div>
    `;
  } else {
    htmlLista = ranking
      .map((item, indice) => renderizarLinhaRankingGlobal(item, indice))
      .join("");
  }

  return `
    <div class="ranking-global-painel">
      ${htmlMinhaPosicao}

      ${htmlPodio}
      
      ${htmlBusca}

      <section class="ranking-lista-global">
        <div class="ranking-lista-titulo">
          <h2>${tituloLista}</h2>

          <span>
            ${textoContador}
          </span>
        </div>

        ${htmlLista}
      </section>
    </div>
  `;
}
async function renderizarRankingGlobal(busca = "") {
  listaRanking.innerHTML = `
  <div class="ranking-carregando">
    ${t("ranking_carregando")}
  </div>
`;
  try {
    const dados = await buscarRankingGlobal(50, busca);

    listaRanking.innerHTML = montarHtmlRankingGlobal(dados, busca);

    const inputBusca = document.getElementById("inputBuscaOperadorRanking");
    const btnBuscar = document.getElementById("btnExecutarBuscaRanking");
    const btnLimparBusca = document.getElementById("btnLimparBuscaRanking");

    function executarBusca() {
      const termo = inputBusca ? inputBusca.value.trim() : "";
      renderizarRankingGlobal(termo);
    }

    if (btnBuscar) {
      btnBuscar.addEventListener("click", executarBusca);
    }

    if (btnLimparBusca) {
      btnLimparBusca.addEventListener("click", () => {
        renderizarRankingGlobal("");
      });
    }

    if (inputBusca) {
      inputBusca.addEventListener("keydown", (evento) => {
        if (evento.code === "Enter") {
          evento.preventDefault();
          inputBusca.blur();
          executarBusca();
        }
      });
    }
  } catch (erro) {
    console.warn("Falha ao carregar Ranking Global:", erro);

    listaRanking.innerHTML = `
  <div class="ranking-vazio">
    ${t("ranking_erro_carregar")}
  </div>
`;
  }
}

function renderizarRanking() {
  renderizarRankingGlobal();
}
function limparRanking() {
  const confirmar = window.confirm(
    "Deseja limpar o ranking local e os dados de progresso salvos neste aparelho?"
  );

  if (!confirmar) return;

  localStorage.removeItem("operadorMorseRanking");

  Object.keys(localStorage).forEach((chave) => {
    if (chave.startsWith("operadorMorseCarreira_")) {
      localStorage.removeItem(chave);
    }
  });

  renderizarRanking();

  mostrarAvisoRapido(
    "Ranking limpo",
    "Ranking local e dados de progresso foram apagados deste aparelho."
  );
}
function escaparHtml(valor) {
  return String(valor)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function prepararAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function limparSomChaveDaLista(som) {
  sonsChaveAtivos = sonsChaveAtivos.filter((item) => item !== som);

  if (somChaveAtual === som) {
    somChaveAtual = null;
  }
}

function iniciarTomMorse() {
  prepararAudio();

  if (!audioContext) return;

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const agoraMs = performance.now();

  if (agoraMs - ultimoAcionamentoChaveMs < 6) {
    return;
  }

  ultimoAcionamentoChaveMs = agoraMs;

  const agora = audioContext.currentTime;

  const oscilador = audioContext.createOscillator();
  const ganho = audioContext.createGain();
  const filtro = audioContext.createBiquadFilter();

  oscilador.type = "sine";
  oscilador.frequency.setValueAtTime(frequenciaSidetone, agora);

  filtro.type = "lowpass";
  filtro.frequency.setValueAtTime(5200, agora);
  filtro.Q.setValueAtTime(0.22, agora);

  ganho.gain.setValueAtTime(0.0001, agora);
  ganho.gain.linearRampToValueAtTime(VOLUME_MORSE * 0.94, agora + 0.001);

  oscilador.connect(filtro);
  filtro.connect(ganho);
  ganho.connect(audioContext.destination);

  oscilador.start(agora);

  const som = {
    oscilador,
    ganho,
    filtro,
    inicioAudio: agora,
    inicioMs: agoraMs,
    finalizado: false
  };

  somChaveAtual = som;
  sonsChaveAtivos.push(som);

  chaveMorseAtiva = true;

  oscilador.onended = () => {
    limparSomChaveDaLista(som);
  };
}

function pararTomMorse() {
  if (!audioContext || !somChaveAtual) return;

  const som = somChaveAtual;

  if (som.finalizado) return;

  som.finalizado = true;

  const agora = audioContext.currentTime;
  const duracaoAtual = agora - som.inicioAudio;

  /*
    Cada ponto muito rápido precisa ter um mínimo audível.
    Isso evita o "pipoco" quando o operador faz . . . muito rápido.
  */
    const duracaoMinimaPontoSeg = 0.052;
    const solturaSeg = 0.008;

  const inicioSoltura = Math.max(
    agora,
    som.inicioAudio + duracaoMinimaPontoSeg
  );

  try {
    som.ganho.gain.cancelScheduledValues(inicioSoltura);
    som.ganho.gain.setValueAtTime(VOLUME_MORSE * 0.82, inicioSoltura);
    som.ganho.gain.linearRampToValueAtTime(
      0.0001,
      inicioSoltura + solturaSeg
    );

    som.oscilador.stop(inicioSoltura + solturaSeg + 0.025);
  } catch (erro) {
    try {
      som.oscilador.stop();
    } catch (erroInterno) {}
  }

  chaveMorseAtiva = false;
  somChaveAtual = null;
}
  
function tocarTomCurto(frequencia, duracao, volume = 0.14, tipo = "sine") {
  prepararAudio();

  const oscilador = audioContext.createOscillator();
  const ganho = audioContext.createGain();

  oscilador.type = tipo;
  oscilador.frequency.setValueAtTime(frequencia, audioContext.currentTime);

  ganho.gain.setValueAtTime(0.001, audioContext.currentTime);
  ganho.gain.exponentialRampToValueAtTime(volume, audioContext.currentTime + 0.01);
  ganho.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duracao / 1000);

  oscilador.connect(ganho);
  ganho.connect(audioContext.destination);

  oscilador.start();
  oscilador.stop(audioContext.currentTime + duracao / 1000 + 0.02);
}

function tocarCliqueLimpar() {
  tocarTomCurto(420, 70, 0.08, "square");
}

function tocarAcerto() {
  tocarTomCurto(760, 80, 0.09, "sine");
  setTimeout(() => tocarTomCurto(980, 100, 0.09, "sine"), 90);
}

function tocarErro() {
  tocarTomCurto(240, 120, 0.11, "sawtooth");
  setTimeout(() => tocarTomCurto(180, 160, 0.1, "sawtooth"), 120);
}
function tocarMusicaFimFase(aprovado = true) {
  try {
    prepararAudio();

    if (!audioContext) return;

    const agora = audioContext.currentTime;

    const notasVitoria = [
      { freq: 523.25, inicio: 0.00, duracao: 0.12 },
      { freq: 659.25, inicio: 0.14, duracao: 0.12 },
      { freq: 783.99, inicio: 0.28, duracao: 0.16 },
      { freq: 1046.5, inicio: 0.48, duracao: 0.32 }
    ];

    const notasFalha = [
      { freq: 392.0, inicio: 0.00, duracao: 0.16 },
      { freq: 329.63, inicio: 0.20, duracao: 0.18 },
      { freq: 261.63, inicio: 0.44, duracao: 0.34 }
    ];

    const notas = aprovado ? notasVitoria : notasFalha;

    notas.forEach((nota) => {
      const oscilador = audioContext.createOscillator();
      const ganho = audioContext.createGain();

      oscilador.type = "sine";
      oscilador.frequency.setValueAtTime(nota.freq, agora + nota.inicio);

      ganho.gain.setValueAtTime(0.0001, agora + nota.inicio);
      ganho.gain.exponentialRampToValueAtTime(0.07, agora + nota.inicio + 0.02);
      ganho.gain.setValueAtTime(
        0.07,
        agora + nota.inicio + Math.max(0.03, nota.duracao - 0.04)
      );
      ganho.gain.exponentialRampToValueAtTime(
        0.0001,
        agora + nota.inicio + nota.duracao
      );

      oscilador.connect(ganho);
      ganho.connect(audioContext.destination);

      oscilador.start(agora + nota.inicio);
      oscilador.stop(agora + nota.inicio + nota.duracao + 0.04);
    });
  } catch (erro) {
    console.warn("Não foi possível tocar a música de fim de fase:", erro);
  }
}

let temporizadoresSequenciaMorse = [];
let osciladoresSequenciaMorse = [];

function pararSequenciaMorse() {
  temporizadoresSequenciaMorse.forEach((temporizador) => {
    clearTimeout(temporizador);
  });

  temporizadoresSequenciaMorse = [];

  osciladoresSequenciaMorse.forEach((oscilador) => {
    try {
      oscilador.stop();
    } catch (erro) {}
  });

  osciladoresSequenciaMorse = [];
}

function tocarSequenciaMorse(codigoMorse) {
  prepararAudio();
  pararSequenciaMorse();

  if (!audioContext) return;

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const tokens = String(codigoMorse || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (!tokens.length) return;

  const unidade = 1200 / wpmAtual / 1000;

  // Na Biblioteca, a pausa interna precisa ser bem curta
  // para o caractere soar como uma sequência única.
  const pausaInternaCaractere = unidade * 0.18;

  // Mantemos separação clara apenas entre letras e palavras.
  const pausaEntreLetras = unidade * 3;
  const pausaEntrePalavras = unidade * 7;

  const volumeSequencia = 0.17;
  const ataque = 0.003;
  const soltura = 0.006;

  let tempoAtual = audioContext.currentTime + 0.04;

  function tocarElementoProgramado(inicio, duracao) {
    const oscilador = audioContext.createOscillator();
    const ganho = audioContext.createGain();
    const filtro = audioContext.createBiquadFilter();

    oscilador.type = "sine";
    oscilador.frequency.setValueAtTime(frequenciaSidetone, inicio);

    filtro.type = "lowpass";
    filtro.frequency.setValueAtTime(1800, inicio);

    ganho.gain.setValueAtTime(0.0001, inicio);
    ganho.gain.linearRampToValueAtTime(volumeSequencia, inicio + ataque);
    ganho.gain.setValueAtTime(
      volumeSequencia,
      Math.max(inicio + ataque, inicio + duracao - soltura)
    );
    ganho.gain.linearRampToValueAtTime(0.0001, inicio + duracao);

    oscilador.connect(filtro);
    filtro.connect(ganho);
    ganho.connect(audioContext.destination);

    oscilador.start(inicio);
    oscilador.stop(inicio + duracao + 0.03);

    osciladoresSequenciaMorse.push(oscilador);

    oscilador.onended = () => {
      osciladoresSequenciaMorse = osciladoresSequenciaMorse.filter(
        (item) => item !== oscilador
      );
    };
  }

  tokens.forEach((token, indiceToken) => {
    if (token === "/") {
      return;
    }

    const simbolos = token.split("");

    simbolos.forEach((simbolo, indiceSimbolo) => {
      if (simbolo !== "." && simbolo !== "-") return;

      const duracao = simbolo === "." ? unidade : unidade * 3;

      tocarElementoProgramado(tempoAtual, duracao);

      tempoAtual += duracao;

      if (indiceSimbolo < simbolos.length - 1) {
        tempoAtual += pausaInternaCaractere;
      }
    });

    const proximoToken = tokens[indiceToken + 1];

    if (proximoToken === "/") {
      tempoAtual += pausaEntrePalavras;
      return;
    }

    if (proximoToken) {
      tempoAtual += pausaEntreLetras;
    }
  });
}
  
/* =========================
   BOOT DA ESTAÇÃO MORSE - SEM SOM
========================= */

function iniciarBootEstacao() {
  const telaBoot = document.getElementById("telaBoot");
  if (!telaBoot) return;

  let bootFechado = false;

  const fecharBoot = () => {
    if (bootFechado) return;
    bootFechado = true;

    telaBoot.classList.add("sair");

    setTimeout(() => {
      telaBoot.remove();
    }, 800);
  };

  setTimeout(fecharBoot, 4300);

  telaBoot.addEventListener("click", fecharBoot);
}

window.addEventListener("load", iniciarBootEstacao);

/* =========================
   MANIPULADOR LIVRE
========================= */

let codigoLivre = "";
let pressionandoManipulador = false;
let inicioPressionamentoManipulador = 0;
let temporizadorLetraManipulador = null;
let temporizadorPalavraManipulador = null;
let temporizadorLimparTotalManipulador = null;
let limpezaTotalManipuladorAcionada = false;

let modoManipuladorLivre =
  localStorage.getItem("edsMorseModoManipuladorLivre") || "iniciante";

const CONFIG_MANIPULADOR_LIVRE = {
  iniciante: {
    nome: "Iniciante",
    limitePontoTracoMs: null,
    pausaLetraMs: null,
    pausaPalavraMs: null,
    descricao: "Ritmo confortável para treino inicial."
  },

  pro: {
    nome: "Pro",
    limitePontoTracoMs: 105,
    pausaLetraMs: 210,
    pausaPalavraMs: 560,
    descricao: "Resposta mais rápida para operador experiente."
  }
};

function getConfigManipuladorLivre() {
  const config = CONFIG_MANIPULADOR_LIVRE[modoManipuladorLivre] ||
    CONFIG_MANIPULADOR_LIVRE.iniciante;

  if (modoManipuladorLivre === "iniciante") {
    return {
      ...config,
      limitePontoTracoMs,
      pausaLetraMs: pausaAutoLetraMs,
      pausaPalavraMs: pausaAutoPalavraMs
    };
  }

  return config;
}

function atualizarVisualModoManipuladorLivre() {
  const config = getConfigManipuladorLivre();

  if (btnManipuladorIniciante) {
    btnManipuladorIniciante.classList.toggle(
      "ativo",
      modoManipuladorLivre === "iniciante"
    );
  }

  if (btnManipuladorPro) {
    btnManipuladorPro.classList.toggle(
      "ativo",
      modoManipuladorLivre === "pro"
    );
  }

  if (statusModoManipulador) {
    const descricao =
      modoManipuladorLivre === "pro"
        ? t("modo_livre_desc_pro")
        : t("modo_livre_desc_iniciante");
  
    statusModoManipulador.textContent =
      `${descricao} ${t("letra")}: ${Math.round(config.pausaLetraMs)} ms • ${t("palavra")}: ${Math.round(config.pausaPalavraMs)} ms.`;
  }
}
setTimeout(() => {
  atualizarVisualModoManipuladorLivre();
}, 0);
function selecionarModoManipuladorLivre(novoModo) {
  modoManipuladorLivre = novoModo === "pro" ? "pro" : "iniciante";

  localStorage.setItem("edsMorseModoManipuladorLivre", modoManipuladorLivre);

  limparTemporizadoresManipulador();
  atualizarVisualModoManipuladorLivre();

  const config = getConfigManipuladorLivre();

  feedbackManipulador.textContent = "";
feedbackManipulador.style.display = "none";
}

function iniciarPressionamentoManipulador(evento) {
  if (evento) {
    evento.preventDefault();

    if (evento.pointerId !== undefined && btnMorseManipulador.setPointerCapture) {
      try {
        btnMorseManipulador.setPointerCapture(evento.pointerId);
      } catch (erro) {}
    }
  }

  prepararAudio();

  if (pressionandoManipulador) return;

  limparTemporizadoresManipulador();

  pressionandoManipulador = true;
  inicioPressionamentoManipulador = performance.now();

  btnMorseManipulador.classList.add("pressionado");
  iniciarTomMorse();
}

function finalizarPressionamentoManipulador(evento) {
  if (evento) {
    evento.preventDefault();

    if (evento.pointerId !== undefined && btnMorseManipulador.releasePointerCapture) {
      try {
        btnMorseManipulador.releasePointerCapture(evento.pointerId);
      } catch (erro) {}
    }
  }

  if (!pressionandoManipulador) return;

  const fim = performance.now();
  const duracao = fim - inicioPressionamentoManipulador;

  pressionandoManipulador = false;
  btnMorseManipulador.classList.remove("pressionado");

  pararTomMorse();

  const configManipulador = getConfigManipuladorLivre();
const simbolo = duracao < configManipulador.limitePontoTracoMs ? "." : "-";

  codigoLivre += simbolo;

  feedbackManipulador.textContent =
    simbolo === "."
      ? `Ponto transmitido (${Math.round(duracao)} ms).`
      : `Traço transmitido (${Math.round(duracao)} ms).`;

  feedbackManipulador.className = "feedback";

  atualizarManipuladorLivre();
  agendarPausasManipulador();
}

function cancelarPressionamentoManipulador(evento) {
  if (evento) evento.preventDefault();

  if (!pressionandoManipulador) return;

  pressionandoManipulador = false;
  btnMorseManipulador.classList.remove("pressionado");
  pararTomMorse();
}

function limparTemporizadoresManipulador() {
  if (temporizadorLetraManipulador) clearTimeout(temporizadorLetraManipulador);
  if (temporizadorPalavraManipulador) clearTimeout(temporizadorPalavraManipulador);

  temporizadorLetraManipulador = null;
  temporizadorPalavraManipulador = null;
}

function agendarPausasManipulador() {
  limparTemporizadoresManipulador();

  temporizadorLetraManipulador = setTimeout(() => {
    if (!codigoLivre.trim()) return;

    if (!codigoLivre.endsWith(" ") && !codigoLivre.endsWith("/")) {
      codigoLivre += " ";
      feedbackManipulador.textContent = "Letra fechada automaticamente.";
      feedbackManipulador.className = "feedback sucesso";
      atualizarManipuladorLivre();
    }
  }, getConfigManipuladorLivre().pausaLetraMs);

  temporizadorPalavraManipulador = setTimeout(() => {
    if (!codigoLivre.trim()) return;

    codigoLivre = codigoLivre.trim();

    if (!codigoLivre.endsWith("/")) {
      codigoLivre += " / ";
      feedbackManipulador.textContent = "Palavra fechada automaticamente.";
      feedbackManipulador.className = "feedback sucesso";
      atualizarManipuladorLivre();
    }
  }, getConfigManipuladorLivre().pausaPalavraMs);
}

function inserirEspacoLetraManipulador() {
  if (!codigoLivre.trim()) return;

  if (!codigoLivre.endsWith(" ")) {
    codigoLivre += " ";
  }

  feedbackManipulador.textContent = "Letra separada.";
  feedbackManipulador.className = "feedback sucesso";

  atualizarManipuladorLivre();
}

function inserirEspacoPalavraManipulador() {
  if (!codigoLivre.trim()) return;

  codigoLivre = codigoLivre.trim();

  if (!codigoLivre.endsWith("/")) {
    codigoLivre += " / ";
  }

  feedbackManipulador.textContent = "Palavra separada.";
  feedbackManipulador.className = "feedback sucesso";

  atualizarManipuladorLivre();
}

function limparManipuladorLivre() {
  limparTemporizadoresManipulador();

  if (!codigoLivre.trim()) {
    feedbackManipulador.textContent = "Nada para apagar.";
    feedbackManipulador.className = "feedback";
    atualizarManipuladorLivre();
    return;
  }

  codigoLivre = codigoLivre.trimEnd();

  // Se o último elemento for uma separação de palavra, remove a barra inteira
  if (codigoLivre.endsWith("/")) {
    codigoLivre = codigoLivre.slice(0, -1).trimEnd();

    feedbackManipulador.textContent = "Separação de palavra removida.";
    feedbackManipulador.className = "feedback";
    atualizarManipuladorLivre();
    return;
  }

  const palavras = codigoLivre.split(" / ");
  const ultimaPalavra = palavras.pop() || "";

  const caracteresMorse = ultimaPalavra
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  // Remove o último caractere Morse completo
  caracteresMorse.pop();

  if (caracteresMorse.length > 0) {
    palavras.push(caracteresMorse.join(" "));
  }

  codigoLivre = palavras.join(" / ").trim();

  feedbackManipulador.textContent = "Último caractere removido.";
  feedbackManipulador.className = "feedback";

  atualizarManipuladorLivre();
}

function iniciarPressionamentoLimparManipulador(evento) {
  evento.preventDefault();

  limpezaTotalManipuladorAcionada = false;

  if (temporizadorLimparTotalManipulador) {
    clearTimeout(temporizadorLimparTotalManipulador);
  }

  temporizadorLimparTotalManipulador = setTimeout(() => {
    limpezaTotalManipuladorAcionada = true;
    limparTudoManipuladorLivre();
  }, 1000);
}

function finalizarPressionamentoLimparManipulador(evento) {
  evento.preventDefault();

  if (temporizadorLimparTotalManipulador) {
    clearTimeout(temporizadorLimparTotalManipulador);
    temporizadorLimparTotalManipulador = null;
  }

  if (limpezaTotalManipuladorAcionada) {
    return;
  }

  limparManipuladorLivre();
}

function cancelarPressionamentoLimparManipulador() {
  if (temporizadorLimparTotalManipulador) {
    clearTimeout(temporizadorLimparTotalManipulador);
    temporizadorLimparTotalManipulador = null;
  }
}

function limparTudoManipuladorLivre() {
  limparTemporizadoresManipulador();

  codigoLivre = "";

  feedbackManipulador.textContent = "Manipulador totalmente limpo.";
  feedbackManipulador.className = "feedback";

  atualizarManipuladorLivre();
}

function atualizarManipuladorLivre() {
  codigoManipulador.textContent = codigoLivre.trim() || "—";
  textoManipulador.textContent = decodificarMorseLivreSomenteFechado(codigoLivre) || "—";
}

function decodificarMorseLivreSomenteFechado(codigo) {
  const reverso = {};

  Object.keys(TABELA_MORSE).forEach((chave) => {
    reverso[TABELA_MORSE[chave]] = chave;
  });

  const textoCodigo = String(codigo || "");

  if (!textoCodigo.trim()) return "";

  const terminaComLetraFechada =
    /\s$/.test(textoCodigo) || textoCodigo.trim().endsWith("/");

  const partesPalavra = textoCodigo.split(" / ");
  const resultado = [];

  partesPalavra.forEach((palavra, indicePalavra) => {
    let tokens = palavra
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    const ehUltimaPalavra = indicePalavra === partesPalavra.length - 1;

    /*
      Se a última letra ainda não foi fechada por pausa,
      não traduzimos esse token parcial.
      Exemplo:
      .   não mostra E ainda
      .-  não mostra A ainda
      .-. só mostra R depois da pausa de letra
    */
    if (ehUltimaPalavra && !terminaComLetraFechada) {
      tokens = tokens.slice(0, -1);
    }

    const palavraDecodificada = tokens
      .map((letra) => reverso[letra] || "")
      .join("");

    resultado.push(palavraDecodificada);
  });

  return resultado.join(" ").trim();
}

function decodificarMorseLivre(codigo) {
  const reverso = {};

  Object.keys(TABELA_MORSE).forEach((chave) => {
    reverso[TABELA_MORSE[chave]] = chave;
  });

  return String(codigo || "")
    .trim()
    .split(" / ")
    .map((palavra) => {
      return palavra
        .trim()
        .split(/\s+/)
        .map((letra) => reverso[letra] || "")
        .join("");
    })
    .join(" ")
    .trim();
}
function atualizarPainelInicialOperador() {
  const nomeEl = document.getElementById("homeOperadorNome");
  const patenteEl = document.getElementById("homeOperadorPatente");
  const posicaoEl = document.getElementById("homeOperadorPosicao");
  const wpmEl = document.getElementById("homeOperadorWpm");
  const fasesEl = document.getElementById("homeOperadorFases");
  const medalhasEl = document.getElementById("homeOperadorMedalhas");

  if (!nomeEl) return;

  const nome = getNomeOperadorAtual();
  const carreira = obterCarreiraOperador();

  const fases = carreira?.fasesConcluidas?.length || 0;
  const medalhas = carreira?.medalhas?.length || 0;
  const titulos = carreira?.titulos || [];
  const melhorWpm = Number(carreira?.melhorWpm || 0);

  const ultimoTitulo = titulos.length
    ? titulos[titulos.length - 1].nome
    : "Operador em formação";

    if (nome && nome !== "Operador") {
      nomeEl.textContent = nome;
      patenteEl.textContent = ultimoTitulo || "Operador registrado";
    } else {
      nomeEl.textContent = "—";
      patenteEl.textContent = "Aguardando registro do operador";
    }
  fasesEl.textContent = fases;
  medalhasEl.textContent = medalhas;
  wpmEl.textContent = melhorWpm.toFixed(1);
  posicaoEl.textContent = "—";
  atualizarPosicaoGlobalTelaInicial();
}

setTimeout(atualizarPainelInicialOperador, 300);

if (inputNomeOperador) {
  inputNomeOperador.addEventListener("input", atualizarPainelInicialOperador);
}

