// Todos os textos do site, nos 4 idiomas. Para mudar uma frase, mude aqui.
export type Lang = 'pt' | 'en' | 'es' | 'fr';
export const idiomas: Lang[] = ['pt', 'en', 'es', 'fr'];
export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es', fr: 'fr' };

/** Endereço de cada página em cada idioma. */
export const rotas = {
  inicio: { pt: '/', en: '/en/', es: '/es/', fr: '/fr/' },
  privacidade: { pt: '/privacidade/', en: '/en/privacy/', es: '/es/privacidad/', fr: '/fr/confidentialite/' },
} as const;
export type Pagina = keyof typeof rotas;

const pt = {
  meta: {
    titulo: 'Korpo — o app da sua igreja',
    descricao: 'O app da sua igreja, com o nome, o logo e as cores dela. Avisos, escalas, grupos, ofertas e chat num só lugar, em qualquer idioma.',
  },
  nav: { recursos: 'Recursos', como: 'Como funciona', porque: 'Por que Korpo', lista: 'Entrar na lista', idioma: 'Idioma' },
  hero: {
    selo: 'Em breve · lista de espera aberta',
    titulo: 'Sua igreja, conectada.',
    texto: 'O app da sua igreja, com o nome, o logo e as cores dela. Avisos, escalas, grupos, ofertas e chat num só lugar, em qualquer idioma e em qualquer país.',
    cta1: 'Quero o app da minha igreja',
    cta2: 'Ver recursos',
  },
  mock: {
    data: 'Domingo, 9 de novembro', igreja: 'Igreja Exemplo', hoje: 'Hoje · 10h', culto: 'Culto de domingo',
    aoVivo: 'Ao vivo no YouTube', aviso: 'Aviso', avisoTitulo: 'Retiro de jovens: inscrições abertas',
    escala: 'Sua escala', escalaTexto: 'Louvor · violão · domingo 16/11', confirmado: 'Confirmado',
  },
  feito: 'feito com Korpo',
  recursos: {
    rotulo: 'Recursos',
    titulo: 'Tudo o que a igreja faz durante a semana, num só app.',
    itens: [
      { t: 'Avisos e eventos', d: 'Notificação no celular de todos, agenda com cultos que se repetem e o fuso da igreja.' },
      { t: 'Escalas e louvor', d: 'Escala automática, confirmação pelo app, repertório com transposição de tom e playlist do culto.' },
      { t: 'Chat da igreja', d: 'Conversa da igreja e dos grupos, com áudio, foto, vídeo e arquivos. Sem misturar com o WhatsApp pessoal.' },
      { t: 'Pessoas e grupos', d: 'Membros, visitantes, células e ministérios. Cada um vê só o que é dele.' },
      { t: 'Oração e ofertas', d: 'Pedidos de oração com privacidade e ofertas direto para a conta da igreja, na moeda do país.' },
      { t: 'Mídia', d: 'Cultos e pregações do YouTube da igreja, com aviso quando estiver ao vivo.' },
    ],
  },
  marca: {
    rotulo: 'A marca é da sua igreja',
    titulo: 'O app tem a cara da sua igreja, não a nossa.',
    texto: 'Logo, nome e cores da igreja em todas as telas. A Korpo aparece só num selo discreto.',
    exemplos: ['Igreja Exemplo', 'Comunidade Viva', 'Igreja da Graça'],
  },
  global: {
    rotulo: 'Em qualquer país',
    titulo: 'Feito para igrejas em qualquer lugar do mundo.',
    texto: 'Uma igreja brasileira em Londres, uma latina em Miami, uma africana em Paris: cada uma escolhe o idioma, a moeda e o fuso horário.',
    itens: [
      { t: 'PT · EN · ES · FR', d: 'O app fala o idioma de cada membro.' },
      { t: '£ · R$ · $ · €', d: 'Ofertas e eventos na moeda da igreja.' },
      { t: 'Fuso da igreja', d: 'O culto de domingo aparece na hora certa para todos.' },
      { t: 'GDPR e LGPD', d: 'Dados dos membros protegidos e nunca vendidos.' },
    ],
  },
  como: {
    rotulo: 'Como funciona',
    titulo: 'Sua igreja no ar em minutos.',
    passos: [
      { t: 'Crie a igreja', d: 'Nome, logo, cores, idioma e moeda. Leva poucos minutos.' },
      { t: 'Convide com um código', d: 'Compartilhe o link korpo.church/CÓDIGO no grupo da igreja. Cada pessoa entra com um toque.' },
      { t: 'Comece a usar', d: 'Publique avisos, monte escalas e converse com a igreja no mesmo dia.' },
    ],
  },
  porque: {
    rotulo: 'Por que Korpo',
    titulo: 'Um só corpo, muitos membros.',
    texto: 'Korpo quer dizer “corpo” em esperanto, a língua criada para unir povos. No símbolo, quatro membros diferentes em volta de um centro: cada pessoa tem o seu lugar, e quem une todos está no meio.',
    versiculo: '“Assim como o corpo é um só e tem muitos membros… assim também é Cristo.” 1 Coríntios 12:12',
    alt: 'Símbolo Korpo: quatro membros em volta de um centro',
  },
  lista: {
    titulo: 'Garanta o app da sua igreja.',
    texto: 'Estamos abrindo aos poucos. Entre na lista e avisamos quando chegar a vez da sua igreja.',
    nome: 'Seu nome', email: 'E-mail', igreja: 'Nome da igreja', cidade: 'Cidade e país', membros: 'Membros',
    faixas: ['Até 50', '51 a 200', '201 a 500', 'Mais de 500'],
    botao: 'Entrar na lista de espera', enviando: 'Enviando…',
    sucesso: 'Pronto! Sua igreja está na lista. Vamos falar com você por e-mail.',
    erro: 'Não conseguimos enviar agora. Confira sua internet e tente de novo.',
    obrigatorios: 'Preencha seu nome, e-mail e o nome da igreja.',
    emailInvalido: 'Confira o e-mail: parece que falta alguma coisa.',
    privacidade: 'Usamos seu e-mail só para falar da Korpo. Você pode sair da lista quando quiser.',
    linkPrivacidade: 'Política de privacidade',
  },
  rodape: { empresa: 'Uma empresa MLB Innovation Ltd, Reino Unido', privacidade: 'Privacidade' },
  priv: {
    titulo: 'Política de privacidade',
    atualizado: 'Atualizada em 5 de novembro de 2026.',
    blocos: [
      { t: 'Quem somos', d: 'A Korpo é um produto da MLB Innovation Ltd, empresa registrada na Inglaterra e no País de Gales, responsável pelos dados coletados neste site.' },
      { t: 'O que coletamos', d: 'Quando você entra na lista de espera, guardamos seu nome, e-mail, o nome da igreja, a cidade e o país, a faixa de membros e o idioma da página. Não usamos cookies de rastreamento nem ferramentas de publicidade neste site.' },
      { t: 'Para que usamos', d: 'Só para falar com você sobre a Korpo: avisar quando a sua igreja puder entrar e tirar dúvidas. A base legal é o seu consentimento (UK GDPR, GDPR e LGPD).' },
      { t: 'Onde ficam os dados', d: 'Num banco de dados da Supabase, protegido, que só a equipe da Korpo acessa. Nunca vendemos nem compartilhamos seus dados com terceiros para publicidade.' },
      { t: 'Seus direitos', d: 'Você pode pedir para ver, corrigir ou apagar seus dados, ou sair da lista, a qualquer momento, escrevendo para contato@korpo.church.' },
    ],
    voltar: 'Voltar para o início',
  },
};
export type Textos = typeof pt;

const en: Textos = {
  meta: {
    titulo: 'Korpo — your church’s own app',
    descricao: 'Your church’s own app, with its name, logo and colours. Announcements, rotas, groups, giving and chat in one place, in any language.',
  },
  nav: { recursos: 'Features', como: 'How it works', porque: 'Why Korpo', lista: 'Join the waitlist', idioma: 'Language' },
  hero: {
    selo: 'Coming soon · waitlist open',
    titulo: 'Your church, connected.',
    texto: 'Your church’s own app, with its name, logo and colours. Announcements, rotas, groups, giving and chat in one place, in any language and any country.',
    cta1: 'I want an app for my church',
    cta2: 'See features',
  },
  mock: {
    data: 'Sunday, 9 November', igreja: 'Example Church', hoje: 'Today · 10am', culto: 'Sunday service',
    aoVivo: 'Live on YouTube', aviso: 'Announcement', avisoTitulo: 'Youth retreat: sign-ups open',
    escala: 'Your rota', escalaTexto: 'Worship · guitar · Sunday 16/11', confirmado: 'Confirmed',
  },
  feito: 'made with Korpo',
  recursos: {
    rotulo: 'Features',
    titulo: 'Everything your church does during the week, in one app.',
    itens: [
      { t: 'Announcements and events', d: 'Push notifications to everyone, a calendar with recurring services and the church’s own time zone.' },
      { t: 'Rotas and worship', d: 'Automatic rotas, confirmation in the app, set lists with key transposition and a service playlist.' },
      { t: 'Church chat', d: 'Church and group conversations with voice notes, photos, video and files. Kept apart from personal WhatsApp.' },
      { t: 'People and groups', d: 'Members, visitors, small groups and ministries. Everyone sees only what is theirs.' },
      { t: 'Prayer and giving', d: 'Private prayer requests and giving straight into the church’s account, in the local currency.' },
      { t: 'Media', d: 'Services and sermons from the church’s YouTube, with an alert when it goes live.' },
    ],
  },
  marca: {
    rotulo: 'Your church’s brand',
    titulo: 'The app looks like your church, not like us.',
    texto: 'The church’s logo, name and colours on every screen. Korpo only shows up as a small badge.',
    exemplos: ['Example Church', 'Living Community', 'Grace Church'],
  },
  global: {
    rotulo: 'In any country',
    titulo: 'Made for churches anywhere in the world.',
    texto: 'A Brazilian church in London, a Latino church in Miami, an African church in Paris: each one chooses its language, currency and time zone.',
    itens: [
      { t: 'PT · EN · ES · FR', d: 'The app speaks each member’s language.' },
      { t: '£ · R$ · $ · €', d: 'Giving and events in the church’s currency.' },
      { t: 'Church time zone', d: 'Sunday service shows at the right time for everyone.' },
      { t: 'GDPR and LGPD', d: 'Members’ data protected and never sold.' },
    ],
  },
  como: {
    rotulo: 'How it works',
    titulo: 'Your church live in minutes.',
    passos: [
      { t: 'Create your church', d: 'Name, logo, colours, language and currency. It takes a few minutes.' },
      { t: 'Invite with a code', d: 'Share the korpo.church/CODE link in your church group. Everyone joins with one tap.' },
      { t: 'Start using it', d: 'Post announcements, build rotas and talk with your church the same day.' },
    ],
  },
  porque: {
    rotulo: 'Why Korpo',
    titulo: 'One body, many members.',
    texto: 'Korpo means “body” in Esperanto, the language created to bring peoples together. In the symbol, four different members gather around a centre: everyone has their place, and the one who unites them all is in the middle.',
    versiculo: '“Just as a body, though one, has many parts… so it is with Christ.” 1 Corinthians 12:12',
    alt: 'Korpo symbol: four members around a centre',
  },
  lista: {
    titulo: 'Get your church’s app.',
    texto: 'We are opening gradually. Join the list and we will let you know when it is your church’s turn.',
    nome: 'Your name', email: 'Email', igreja: 'Church name', cidade: 'City and country', membros: 'Members',
    faixas: ['Up to 50', '51 to 200', '201 to 500', 'More than 500'],
    botao: 'Join the waitlist', enviando: 'Sending…',
    sucesso: 'Done! Your church is on the list. We will be in touch by email.',
    erro: 'We could not send it right now. Check your connection and try again.',
    obrigatorios: 'Please fill in your name, email and church name.',
    emailInvalido: 'Please check the email: something seems to be missing.',
    privacidade: 'We only use your email to talk about Korpo. You can leave the list at any time.',
    linkPrivacidade: 'Privacy policy',
  },
  rodape: { empresa: 'A company of MLB Innovation Ltd, United Kingdom', privacidade: 'Privacy' },
  priv: {
    titulo: 'Privacy policy',
    atualizado: 'Updated 5 November 2026.',
    blocos: [
      { t: 'Who we are', d: 'Korpo is a product of MLB Innovation Ltd, a company registered in England and Wales, which is responsible for the data collected on this site.' },
      { t: 'What we collect', d: 'When you join the waitlist we store your name, email, church name, city and country, membership range and the page language. This site uses no tracking cookies or advertising tools.' },
      { t: 'How we use it', d: 'Only to contact you about Korpo: to tell you when your church can join and to answer questions. The legal basis is your consent (UK GDPR, GDPR and LGPD).' },
      { t: 'Where the data is kept', d: 'In a secure Supabase database that only the Korpo team can access. We never sell your data or share it with third parties for advertising.' },
      { t: 'Your rights', d: 'You can ask to see, correct or delete your data, or leave the list, at any time by writing to contato@korpo.church.' },
    ],
    voltar: 'Back to home',
  },
};

const es: Textos = {
  meta: {
    titulo: 'Korpo — la app de tu iglesia',
    descricao: 'La app de tu iglesia, con su nombre, su logo y sus colores. Anuncios, turnos, grupos, ofrendas y chat en un solo lugar, en cualquier idioma.',
  },
  nav: { recursos: 'Funciones', como: 'Cómo funciona', porque: 'Por qué Korpo', lista: 'Unirme a la lista', idioma: 'Idioma' },
  hero: {
    selo: 'Muy pronto · lista de espera abierta',
    titulo: 'Tu iglesia, conectada.',
    texto: 'La app de tu iglesia, con su nombre, su logo y sus colores. Anuncios, turnos, grupos, ofrendas y chat en un solo lugar, en cualquier idioma y en cualquier país.',
    cta1: 'Quiero la app de mi iglesia',
    cta2: 'Ver funciones',
  },
  mock: {
    data: 'Domingo, 9 de noviembre', igreja: 'Iglesia Ejemplo', hoje: 'Hoy · 10 h', culto: 'Culto del domingo',
    aoVivo: 'En vivo en YouTube', aviso: 'Anuncio', avisoTitulo: 'Retiro de jóvenes: inscripciones abiertas',
    escala: 'Tu turno', escalaTexto: 'Alabanza · guitarra · domingo 16/11', confirmado: 'Confirmado',
  },
  feito: 'hecho con Korpo',
  recursos: {
    rotulo: 'Funciones',
    titulo: 'Todo lo que la iglesia hace durante la semana, en una sola app.',
    itens: [
      { t: 'Anuncios y eventos', d: 'Notificaciones en el celular de todos, agenda con cultos que se repiten y la zona horaria de la iglesia.' },
      { t: 'Turnos y alabanza', d: 'Turnos automáticos, confirmación en la app, repertorio con cambio de tonalidad y playlist del culto.' },
      { t: 'Chat de la iglesia', d: 'Conversaciones de la iglesia y de los grupos, con audio, fotos, video y archivos. Separado del WhatsApp personal.' },
      { t: 'Personas y grupos', d: 'Miembros, visitantes, células y ministerios. Cada uno ve solo lo que le corresponde.' },
      { t: 'Oración y ofrendas', d: 'Pedidos de oración con privacidad y ofrendas directo a la cuenta de la iglesia, en la moneda del país.' },
      { t: 'Multimedia', d: 'Cultos y predicaciones del YouTube de la iglesia, con aviso cuando esté en vivo.' },
    ],
  },
  marca: {
    rotulo: 'La marca es de tu iglesia',
    titulo: 'La app tiene la cara de tu iglesia, no la nuestra.',
    texto: 'Logo, nombre y colores de la iglesia en todas las pantallas. Korpo aparece solo en un sello discreto.',
    exemplos: ['Iglesia Ejemplo', 'Comunidad Viva', 'Iglesia de Gracia'],
  },
  global: {
    rotulo: 'En cualquier país',
    titulo: 'Hecha para iglesias en cualquier lugar del mundo.',
    texto: 'Una iglesia brasileña en Londres, una latina en Miami, una africana en París: cada una elige su idioma, su moneda y su zona horaria.',
    itens: [
      { t: 'PT · EN · ES · FR', d: 'La app habla el idioma de cada miembro.' },
      { t: '£ · R$ · $ · €', d: 'Ofrendas y eventos en la moneda de la iglesia.' },
      { t: 'Hora de la iglesia', d: 'El culto del domingo aparece a la hora correcta para todos.' },
      { t: 'RGPD y LGPD', d: 'Datos de los miembros protegidos y nunca vendidos.' },
    ],
  },
  como: {
    rotulo: 'Cómo funciona',
    titulo: 'Tu iglesia en línea en minutos.',
    passos: [
      { t: 'Crea la iglesia', d: 'Nombre, logo, colores, idioma y moneda. Toma pocos minutos.' },
      { t: 'Invita con un código', d: 'Comparte el enlace korpo.church/CÓDIGO en el grupo de la iglesia. Cada persona entra con un toque.' },
      { t: 'Empieza a usarla', d: 'Publica anuncios, arma turnos y conversa con la iglesia el mismo día.' },
    ],
  },
  porque: {
    rotulo: 'Por qué Korpo',
    titulo: 'Un solo cuerpo, muchos miembros.',
    texto: 'Korpo significa “cuerpo” en esperanto, la lengua creada para unir a los pueblos. En el símbolo, cuatro miembros distintos alrededor de un centro: cada persona tiene su lugar, y quien une a todos está en el medio.',
    versiculo: '“Así como el cuerpo es uno, y tiene muchos miembros… así también Cristo.” 1 Corintios 12:12',
    alt: 'Símbolo de Korpo: cuatro miembros alrededor de un centro',
  },
  lista: {
    titulo: 'Asegura la app de tu iglesia.',
    texto: 'Estamos abriendo poco a poco. Únete a la lista y te avisamos cuando le toque a tu iglesia.',
    nome: 'Tu nombre', email: 'Correo electrónico', igreja: 'Nombre de la iglesia', cidade: 'Ciudad y país', membros: 'Miembros',
    faixas: ['Hasta 50', '51 a 200', '201 a 500', 'Más de 500'],
    botao: 'Unirme a la lista de espera', enviando: 'Enviando…',
    sucesso: '¡Listo! Tu iglesia está en la lista. Te escribiremos por correo.',
    erro: 'No pudimos enviarlo ahora. Revisa tu conexión e inténtalo de nuevo.',
    obrigatorios: 'Completa tu nombre, tu correo y el nombre de la iglesia.',
    emailInvalido: 'Revisa el correo: parece que falta algo.',
    privacidade: 'Usamos tu correo solo para hablarte de Korpo. Puedes salir de la lista cuando quieras.',
    linkPrivacidade: 'Política de privacidad',
  },
  rodape: { empresa: 'Una empresa de MLB Innovation Ltd, Reino Unido', privacidade: 'Privacidad' },
  priv: {
    titulo: 'Política de privacidad',
    atualizado: 'Actualizada el 5 de noviembre de 2026.',
    blocos: [
      { t: 'Quiénes somos', d: 'Korpo es un producto de MLB Innovation Ltd, empresa registrada en Inglaterra y Gales, responsable de los datos recogidos en este sitio.' },
      { t: 'Qué recogemos', d: 'Cuando te unes a la lista de espera guardamos tu nombre, tu correo, el nombre de la iglesia, la ciudad y el país, el número de miembros y el idioma de la página. Este sitio no usa cookies de seguimiento ni herramientas publicitarias.' },
      { t: 'Para qué lo usamos', d: 'Solo para hablarte de Korpo: avisarte cuando tu iglesia pueda entrar y responder dudas. La base legal es tu consentimiento (RGPD, UK GDPR y LGPD).' },
      { t: 'Dónde están los datos', d: 'En una base de datos segura de Supabase a la que solo accede el equipo de Korpo. Nunca vendemos tus datos ni los compartimos con terceros con fines publicitarios.' },
      { t: 'Tus derechos', d: 'Puedes pedir ver, corregir o borrar tus datos, o salir de la lista, en cualquier momento escribiendo a contato@korpo.church.' },
    ],
    voltar: 'Volver al inicio',
  },
};

const fr: Textos = {
  meta: {
    titulo: 'Korpo — l’appli de votre église',
    descricao: 'L’appli de votre église, avec son nom, son logo et ses couleurs. Annonces, plannings, groupes, offrandes et messagerie au même endroit, dans toutes les langues.',
  },
  nav: { recursos: 'Fonctionnalités', como: 'Comment ça marche', porque: 'Pourquoi Korpo', lista: 'Rejoindre la liste', idioma: 'Langue' },
  hero: {
    selo: 'Bientôt disponible · liste d’attente ouverte',
    titulo: 'Votre église, connectée.',
    texto: 'L’appli de votre église, avec son nom, son logo et ses couleurs. Annonces, plannings, groupes, offrandes et messagerie au même endroit, dans toutes les langues et dans tous les pays.',
    cta1: 'Je veux l’appli de mon église',
    cta2: 'Voir les fonctionnalités',
  },
  mock: {
    data: 'Dimanche 9 novembre', igreja: 'Église Exemple', hoje: 'Aujourd’hui · 10 h', culto: 'Culte du dimanche',
    aoVivo: 'En direct sur YouTube', aviso: 'Annonce', avisoTitulo: 'Retraite des jeunes : inscriptions ouvertes',
    escala: 'Votre planning', escalaTexto: 'Louange · guitare · dimanche 16/11', confirmado: 'Confirmé',
  },
  feito: 'fait avec Korpo',
  recursos: {
    rotulo: 'Fonctionnalités',
    titulo: 'Tout ce que l’église fait pendant la semaine, dans une seule appli.',
    itens: [
      { t: 'Annonces et événements', d: 'Notifications sur le téléphone de chacun, agenda avec cultes récurrents et fuseau horaire de l’église.' },
      { t: 'Plannings et louange', d: 'Plannings automatiques, confirmation dans l’appli, répertoire avec transposition et playlist du culte.' },
      { t: 'Messagerie de l’église', d: 'Discussions de l’église et des groupes, avec audio, photos, vidéos et fichiers. Séparée du WhatsApp personnel.' },
      { t: 'Membres et groupes', d: 'Membres, visiteurs, groupes de maison et ministères. Chacun ne voit que ce qui le concerne.' },
      { t: 'Prière et offrandes', d: 'Demandes de prière confidentielles et offrandes versées directement sur le compte de l’église, dans la monnaie locale.' },
      { t: 'Médias', d: 'Cultes et prédications de la chaîne YouTube de l’église, avec une alerte quand c’est en direct.' },
    ],
  },
  marca: {
    rotulo: 'La marque de votre église',
    titulo: 'L’appli ressemble à votre église, pas à nous.',
    texto: 'Le logo, le nom et les couleurs de l’église sur chaque écran. Korpo n’apparaît que dans un petit badge discret.',
    exemplos: ['Église Exemple', 'Communauté Vivante', 'Église de la Grâce'],
  },
  global: {
    rotulo: 'Dans tous les pays',
    titulo: 'Conçue pour les églises du monde entier.',
    texto: 'Une église brésilienne à Londres, une église latino à Miami, une église africaine à Paris : chacune choisit sa langue, sa monnaie et son fuseau horaire.',
    itens: [
      { t: 'PT · EN · ES · FR', d: 'L’appli parle la langue de chaque membre.' },
      { t: '£ · R$ · $ · €', d: 'Offrandes et événements dans la monnaie de l’église.' },
      { t: 'Heure de l’église', d: 'Le culte du dimanche s’affiche à la bonne heure pour tous.' },
      { t: 'RGPD et LGPD', d: 'Données des membres protégées et jamais vendues.' },
    ],
  },
  como: {
    rotulo: 'Comment ça marche',
    titulo: 'Votre église en ligne en quelques minutes.',
    passos: [
      { t: 'Créez votre église', d: 'Nom, logo, couleurs, langue et monnaie. Cela prend quelques minutes.' },
      { t: 'Invitez avec un code', d: 'Partagez le lien korpo.church/CODE dans le groupe de l’église. Chacun rejoint d’un geste.' },
      { t: 'Commencez', d: 'Publiez des annonces, créez des plannings et échangez avec l’église dès le premier jour.' },
    ],
  },
  porque: {
    rotulo: 'Pourquoi Korpo',
    titulo: 'Un seul corps, plusieurs membres.',
    texto: 'Korpo signifie « corps » en espéranto, la langue créée pour unir les peuples. Dans le symbole, quatre membres différents autour d’un centre : chacun a sa place, et celui qui les unit tous est au milieu.',
    versiculo: '« Car, comme le corps est un et a plusieurs membres… ainsi en est-il de Christ. » 1 Corinthiens 12:12',
    alt: 'Symbole Korpo : quatre membres autour d’un centre',
  },
  lista: {
    titulo: 'Réservez l’appli de votre église.',
    texto: 'Nous ouvrons progressivement. Inscrivez-vous et nous vous préviendrons quand ce sera le tour de votre église.',
    nome: 'Votre nom', email: 'E-mail', igreja: 'Nom de l’église', cidade: 'Ville et pays', membros: 'Membres',
    faixas: ['Jusqu’à 50', '51 à 200', '201 à 500', 'Plus de 500'],
    botao: 'Rejoindre la liste d’attente', enviando: 'Envoi…',
    sucesso: 'C’est fait ! Votre église est sur la liste. Nous vous écrirons par e-mail.',
    erro: 'Envoi impossible pour le moment. Vérifiez votre connexion et réessayez.',
    obrigatorios: 'Indiquez votre nom, votre e-mail et le nom de l’église.',
    emailInvalido: 'Vérifiez l’e-mail : il semble manquer quelque chose.',
    privacidade: 'Nous utilisons votre e-mail uniquement pour vous parler de Korpo. Vous pouvez quitter la liste à tout moment.',
    linkPrivacidade: 'Politique de confidentialité',
  },
  rodape: { empresa: 'Une société MLB Innovation Ltd, Royaume-Uni', privacidade: 'Confidentialité' },
  priv: {
    titulo: 'Politique de confidentialité',
    atualizado: 'Mise à jour le 5 novembre 2026.',
    blocos: [
      { t: 'Qui sommes-nous', d: 'Korpo est un produit de MLB Innovation Ltd, société immatriculée en Angleterre et au Pays de Galles, responsable des données collectées sur ce site.' },
      { t: 'Ce que nous collectons', d: 'Lorsque vous rejoignez la liste d’attente, nous enregistrons votre nom, votre e-mail, le nom de l’église, la ville et le pays, la tranche de membres et la langue de la page. Ce site n’utilise ni cookies de suivi ni outils publicitaires.' },
      { t: 'Pourquoi', d: 'Uniquement pour vous parler de Korpo : vous prévenir quand votre église pourra nous rejoindre et répondre à vos questions. La base légale est votre consentement (RGPD, UK GDPR et LGPD).' },
      { t: 'Où sont les données', d: 'Dans une base de données Supabase sécurisée, accessible uniquement à l’équipe Korpo. Nous ne vendons jamais vos données et ne les partageons pas à des fins publicitaires.' },
      { t: 'Vos droits', d: 'Vous pouvez demander à consulter, corriger ou supprimer vos données, ou quitter la liste, à tout moment en écrivant à contato@korpo.church.' },
    ],
    voltar: 'Retour à l’accueil',
  },
};

export const textos: Record<Lang, Textos> = { pt, en, es, fr };
