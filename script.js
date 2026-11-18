/* Buildless site: all displayed media are served from the same origin. */
const translations = {
  en: {
    skip: 'Skip to the works', works: 'Works', artist: 'The artist', correspondences: 'Correspondences', language: 'Language', navigation: 'Main navigation', menu: 'Open menu', 'menu.close': 'Close menu', close: 'Close', previous: 'Previous work', next: 'Next work',
    'hero.eyebrow': 'Art / Music / Cultural memory', 'hero.line': 'What remains becomes something else.', 'hero.description': 'Electronic music, images and imagined worlds, born from the traces of human culture.', 'hero.explore': 'Explore the works', 'hero.featured': 'In the light',
    'listen.excerpt': 'Listen to an excerpt', 'listen.starry': 'Listen to Starry Signal', 'view.artwork': 'View the artwork',
    'works.title': 'Selected works', 'works.subtitle': 'Four ways of remembering',
    'afterimage.type': 'Paintings / Electronic music', 'afterimage.description': 'The painting falls silent. Its echo begins. Great paintings become electronic music, stories and moving images.', 'afterimage.action': 'Enter Afterimage',
    'robolution.type': 'Electronic music / Scientific memory', 'robolution.description': 'What would machines remember of us? The founding texts of computation return as electro-orchestral works.', 'robolution.action': 'Discover Robolution',
    'chat.type': 'Artbook / Images / Music', 'chat.description': 'A wandering presence crosses the history of painting. An illustrated journey through the Galerie de Babel, accompanied by music.', 'chat.action': 'Visit the Galerie de Babel',
    'book.type': 'Poetry / Illustrated book / 2023', 'book.description': "The words remain. Other visions awaken. Baudelaire's poetry encounters images born of a dialogue with artificial intelligence.", 'book.action': 'Leaf through an excerpt', 'book.note': 'Original edition in French', 'book.pdf': 'Complete book · PDF, 446 MB', 'book.previous': 'Previous pages', 'book.next': 'Next pages', 'book.pages': 'Pages',
    'artist.label': 'Behind the works', 'artist.title': 'Memory is not still.', 'artist.lead': 'Onchainfinity explores what a work can become after it has already lived.', 'artist.body': 'A poem, a painting, a scientific text: each holds more than its original form. Through human interpretation, artificial intelligence and code, these traces become music, images and imagined worlds.', 'artist.body2': 'Not every project follows the same path. What connects them is a desire to make the memory of human culture perceptible in another form.',
    'notes.subtitle': 'Notes from the practice', 'note.one.title': 'On the essence of a work', 'note.one.body': 'To extract an essence is not to summarise a work. It is to listen to what it leaves behind: an atmosphere, a tension, a movement of thought. The new work does not replace its source. It opens another way of approaching it.', 'note.two.title': 'The machine and the hand', 'note.two.body': 'The machine does not replace the hand. It enlarges the labyrinth in which the hand must choose. An intention, a selection, a refusal: the work also takes shape in everything that is not retained.',
    'footer.line': 'What remains becomes something else.', 'footer.listen': 'Listen to Robolution 000', player: 'Audio player', 'player.caption': 'Afterimage · 45-second excerpt', 'player.close': 'Close player', 'player.error': 'Playback could not start. Use the player controls to try again.',
    'starry.alt': 'The Starry Night by Vincent van Gogh', 'starry.caption': 'Vincent van Gogh, The Starry Night, 1889. Source painting for Starry Signal, Afterimage.', 'robolution.alt': 'Robolution 000 album cover', 'entropy.alt': 'Entropy Overture, artwork from Robolution 000', 'chat.alt': 'A black cat in the painted architecture of the Galerie de Babel', 'book.left': "L'homme et la mer, a page from Prompt BaudelAIre", 'book.right': 'Illustration from Prompt BaudelAIre: a figure facing the sea', 'book.page.alt': 'Prompt BaudelAIre, original French edition, PDF page',
    'feature.afterimage': 'Starry Signal · After Vincent van Gogh', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': 'An illustrated journey · Galerie de Babel', 'feature.book': 'L’homme et la mer · Illustrated poetry',
    title: 'Onchainfinity | Works of Memory', 'book.buy': 'Find the book on Amazon'
  },
  fr: {
    skip: 'Aller aux œuvres', works: 'Œuvres', artist: 'L’artiste', correspondences: 'Correspondances', language: 'Langue', navigation: 'Navigation principale', menu: 'Ouvrir le menu', 'menu.close': 'Fermer le menu', close: 'Fermer', previous: 'Œuvre précédente', next: 'Œuvre suivante',
    'hero.eyebrow': 'Art / Musique / Mémoire culturelle', 'hero.line': 'Ce qui demeure se métamorphose.', 'hero.description': 'Des musiques électroniques, des images et des mondes imaginaires, nés de la mémoire des œuvres.', 'hero.explore': 'Explorer les œuvres', 'hero.featured': 'En lumière',
    'listen.excerpt': 'Écouter un extrait', 'listen.starry': 'Écouter Starry Signal', 'view.artwork': 'Voir l’œuvre',
    'works.title': 'Œuvres choisies', 'works.subtitle': 'Quatre projets, une même recherche',
    'afterimage.type': 'Peinture / Musique électronique', 'afterimage.description': 'Une peinture laisse en nous plus qu’une image. Afterimage en recueille les résonances pour composer des musiques électroniques, des récits et des images en mouvement.', 'afterimage.action': 'Découvrir Afterimage',
    'robolution.type': 'Musique électronique / Mémoire scientifique', 'robolution.description': 'Que restera-t-il de nous dans la mémoire des machines ? Les textes fondateurs de l’informatique deviennent des compositions où se mêlent textures électroniques et souffle orchestral.', 'robolution.action': 'Découvrir Robolution',
    'chat.type': 'Livre d’art / Images / Musique', 'chat.description': 'Dans la Galerie de Babel, un chat chemine d’un monde pictural à l’autre. Images, récit et musique composent un livre d’art aux frontières du rêve.', 'chat.action': 'Visiter la Galerie de Babel',
    'book.type': 'Poésie / Livre illustré / 2023', 'book.description': 'Les vers de Baudelaire demeurent ; des visions nouvelles s’éveillent à leur lecture. Un livre illustré où la poésie dialogue avec des images façonnées à l’aide de l’intelligence artificielle.', 'book.action': 'Feuilleter quelques pages', 'book.note': 'Édition originale en français', 'book.pdf': 'Livre complet · PDF, 446 Mo', 'book.previous': 'Pages précédentes', 'book.next': 'Pages suivantes', 'book.pages': 'Pages',
    'artist.label': 'La démarche', 'artist.title': 'La mémoire, matière vivante.', 'artist.lead': 'Onchainfinity est un artiste numérique qui compose avec la mémoire des œuvres.', 'artist.body': 'Peintures, poèmes et textes scientifiques offrent la matière première. L’analyse par l’intelligence artificielle, le code et les choix de l’artiste ouvrent des passages entre les formes : de l’image au son, du texte au monde imaginé.', 'artist.body2': 'Chaque projet suit son propre chemin. Tous cherchent à faire entendre ou à rendre visible ce qui persiste d’une œuvre lorsqu’elle se transforme.',
    'notes.subtitle': 'Notes d’atelier', 'note.one.title': 'Sur l’essence d’une œuvre', 'note.one.body': 'Chercher l’essence d’une œuvre, ce n’est pas la résumer. C’est prêter attention à ce qui demeure en nous : une couleur, une tension, un rythme, une émotion. La création qui en naît ne se substitue pas à l’original ; elle invite à l’entendre ou à le regarder autrement.', 'note.two.title': 'La machine et la main', 'note.two.body': 'La machine multiplie les possibles. Il reste à choisir une voie, à reconnaître une justesse, à renoncer à ce qui disperse l’émotion. L’œuvre se construit dans ce dialogue, autant par ce que l’artiste retient que par ce qu’il écarte.',
    'footer.line': 'Ce qui demeure se métamorphose.', 'footer.listen': 'Écouter Robolution 000', player: 'Lecteur audio', 'player.caption': 'Afterimage · extrait de 45 secondes', 'player.close': 'Fermer le lecteur', 'player.error': 'La lecture n’a pas pu démarrer. Vous pouvez réessayer à l’aide des commandes du lecteur.',
    'starry.alt': 'La Nuit étoilée de Vincent van Gogh', 'starry.caption': 'Vincent van Gogh, La Nuit étoilée (1889). Tableau à l’origine de Starry Signal, dans la série Afterimage.', 'robolution.alt': 'Pochette de l’album Robolution 000', 'entropy.alt': 'Entropy Overture, illustration de l’album Robolution 000', 'chat.alt': 'Un chat noir traverse les décors peints de la Galerie de Babel', 'book.left': 'L’Homme et la Mer, une page de Prompt BaudelAIre', 'book.right': 'Illustration de Prompt BaudelAIre : une silhouette face à la mer', 'book.page.alt': 'Prompt BaudelAIre, édition originale en français, page du PDF',
    'feature.afterimage': 'Starry Signal · D’après Vincent van Gogh', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': 'Un voyage illustré · Galerie de Babel', 'feature.book': 'L’Homme et la Mer · Poésie illustrée',
    title: 'Onchainfinity | Œuvres de mémoire', 'book.buy': 'Découvrir le livre sur Amazon'
  },
  zh: {
    skip: '跳至作品', works: '作品', artist: '艺术家', correspondences: '交感', language: '语言', navigation: '主导航', menu: '打开菜单', 'menu.close': '关闭菜单', close: '关闭', previous: '上一件作品', next: '下一件作品',
    'hero.eyebrow': '艺术 / 音乐 / 文化记忆', 'hero.line': '留存之物，化为新生。', 'hero.description': '从人类文化的痕迹中，孕育电子音乐、影像与想象的世界。', 'hero.explore': '探索作品', 'hero.featured': '此刻呈现',
    'listen.excerpt': '聆听片段', 'listen.starry': '聆听 Starry Signal', 'view.artwork': '查看作品',
    'works.title': '精选作品', 'works.subtitle': '记忆的四种方式',
    'afterimage.type': '绘画 / 电子音乐', 'afterimage.description': '画作归于沉默，回声由此开始。经典绘画化为电子音乐、叙事与流动的影像。', 'afterimage.action': '进入 Afterimage',
    'robolution.type': '电子音乐 / 科学记忆', 'robolution.description': '机器会记得我们的什么？计算机科学的奠基文献，以电子与管弦交织的音乐重现。', 'robolution.action': '探索 Robolution',
    'chat.type': '艺术画册 / 图像 / 音乐', 'chat.description': '一个漫游的身影穿越绘画史。这是一场伴着音乐、走入巴别画廊的图像之旅。', 'chat.action': '走进巴别画廊',
    'book.type': '诗歌 / 插画书 / 2023', 'book.description': '文字长存，新的幻象醒来。波德莱尔的诗歌，与人类和人工智能对话中诞生的图像相遇。', 'book.action': '翻阅节选', 'book.note': '法语原版', 'book.pdf': '完整书籍 · PDF，446 MB', 'book.previous': '上一组页面', 'book.next': '下一组页面', 'book.pages': '页码',
    'artist.label': '作品背后', 'artist.title': '记忆从不静止。', 'artist.lead': 'Onchainfinity 探索一件作品在经历自身的生命之后，还能成为什么。', 'artist.body': '一首诗、一幅画、一篇科学文献，都蕴藏着超越原初形式的可能。通过人的诠释、人工智能与代码，这些痕迹化为音乐、图像与想象的世界。', 'artist.body2': '并非每个项目都沿着同一条路前行。连接它们的，是让人类文化的记忆以另一种形式变得可感的愿望。',
    'notes.subtitle': '创作札记', 'note.one.title': '关于作品的精髓', 'note.one.body': '提取精髓，并不是概括一件作品，而是聆听它留下的东西：一种氛围、一种张力、一次思想的流动。新的作品不会取代它的源头，而是开启另一条走近它的道路。', 'note.two.title': '机器与手', 'note.two.body': '机器没有取代手。它拓宽了迷宫，而手必须在其中作出选择。一个意图、一次筛选、一次拒绝：作品也在那些未被保留的事物中逐渐成形。',
    'footer.line': '留存之物，化为新生。', 'footer.listen': '聆听 Robolution 000', player: '音频播放器', 'player.caption': 'Afterimage · 45 秒片段', 'player.close': '关闭播放器', 'player.error': '未能开始播放，请使用播放器控件重试。',
    'starry.alt': '文森特·梵高的《星月夜》', 'starry.caption': '文森特·梵高，《星月夜》，1889 年。Afterimage 项目中 Starry Signal 的原作。', 'robolution.alt': 'Robolution 000 专辑封面', 'entropy.alt': 'Entropy Overture，Robolution 000 的视觉作品', 'chat.alt': '巴别画廊的绘画建筑中，一只黑猫穿行其间', 'book.left': 'Prompt BaudelAIre 中《人与海》的一页', 'book.right': 'Prompt BaudelAIre 插画：面朝大海的身影', 'book.page.alt': 'Prompt BaudelAIre，法语原版，PDF 页码',
    'feature.afterimage': 'Starry Signal · 源自文森特·梵高', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': '图像之旅 · 巴别画廊', 'feature.book': '人与海 · 诗歌插画',
    title: 'Onchainfinity | 记忆之作', 'book.buy': '在 Amazon 查看书籍'
  },
  ja: {
    skip: '作品へ移動', works: '作品', artist: 'アーティスト', correspondences: '照応', language: '言語', navigation: 'メインナビゲーション', menu: 'メニューを開く', 'menu.close': 'メニューを閉じる', close: '閉じる', previous: '前の作品', next: '次の作品',
    'hero.eyebrow': 'アート / 音楽 / 文化の記憶', 'hero.line': '残されたものが、別の何かになる。', 'hero.description': '人類の文化が残した痕跡から生まれる電子音楽、イメージ、そして想像の世界。', 'hero.explore': '作品をめぐる', 'hero.featured': '光をあてる作品',
    'listen.excerpt': '試聴する', 'listen.starry': 'Starry Signal を聴く', 'view.artwork': '作品を見る',
    'works.title': '選ばれた作品', 'works.subtitle': '記憶する、四つのかたち',
    'afterimage.type': '絵画 / 電子音楽', 'afterimage.description': '絵画が沈黙するとき、その余響が始まる。名画が電子音楽、物語、動くイメージへと姿を変える。', 'afterimage.action': 'Afterimage へ',
    'robolution.type': '電子音楽 / 科学の記憶', 'robolution.description': '機械は私たちの何を覚えているだろう。計算機科学の礎となった文献が、電子音と管弦楽の作品として帰ってくる。', 'robolution.action': 'Robolution を探る',
    'chat.type': 'アートブック / イメージ / 音楽', 'chat.description': 'さまよう存在が絵画の歴史を横切る。音楽とともにバベルの画廊をめぐる、イメージの旅。', 'chat.action': 'バベルの画廊へ',
    'book.type': '詩 / 挿画本 / 2023', 'book.description': '言葉は残り、新たな幻視が目覚める。ボードレールの詩が、人工知能との対話から生まれたイメージに出会う。', 'book.action': '抜粋を読む', 'book.note': 'フランス語原版', 'book.pdf': '書籍全編 · PDF、446 MB', 'book.previous': '前のページ', 'book.next': '次のページ', 'book.pages': 'ページ',
    'artist.label': '作品の背後に', 'artist.title': '記憶は静止しない。', 'artist.lead': 'Onchainfinity は、すでに生を営んだ作品が、その先に何になりうるのかを探る。', 'artist.body': '一編の詩、一枚の絵、一つの科学論文。それぞれが最初のかたちを超えるものを宿している。人の解釈、人工知能、コードを通して、その痕跡は音楽、イメージ、想像の世界となる。', 'artist.body2': 'すべてのプロジェクトが同じ道をたどるわけではない。それらを結ぶのは、人類の文化の記憶を、別のかたちで感じられるものにしたいという願いだ。',
    'notes.subtitle': '制作の手帖', 'note.one.title': '作品の本質について', 'note.one.body': '本質を取り出すとは、作品を要約することではない。それが残すものに耳を澄ますことだ。気配、緊張、思考の動き。新たな作品は、その源に取って代わるのではなく、そこへ近づくもう一つの道を開く。', 'note.two.title': '機械と手', 'note.two.body': '機械は手に取って代わらない。手が選び取るべき迷宮を広げるのだ。意図、選択、拒否。作品は、残されなかったものの中でもかたちを得ていく。',
    'footer.line': '残されたものが、別の何かになる。', 'footer.listen': 'Robolution 000 を聴く', player: '音声プレーヤー', 'player.caption': 'Afterimage · 45秒の抜粋', 'player.close': 'プレーヤーを閉じる', 'player.error': '再生を開始できませんでした。プレーヤーの操作で再試行してください。',
    'starry.alt': 'フィンセント・ファン・ゴッホの《星月夜》', 'starry.caption': 'フィンセント・ファン・ゴッホ《星月夜》、1889年。Afterimage の Starry Signal の原点となる絵画。', 'robolution.alt': 'アルバム Robolution 000 のジャケット', 'entropy.alt': 'Entropy Overture、Robolution 000 のアートワーク', 'chat.alt': 'バベルの画廊の描かれた建築を歩く黒猫', 'book.left': 'Prompt BaudelAIre の「人間と海」のページ', 'book.right': 'Prompt BaudelAIre の挿画：海に向き合う人影', 'book.page.alt': 'Prompt BaudelAIre、フランス語原版、PDFページ',
    'feature.afterimage': 'Starry Signal · ゴッホの絵画から', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': 'イメージの旅 · バベルの画廊', 'feature.book': '人間と海 · 詩と挿画',
    title: 'Onchainfinity | 記憶の作品', 'book.buy': 'Amazon で書籍を見る'
  }
};

const features = [
  { id: 'afterimage', name: 'Afterimage', image: 'starry-night.jpg', alt: 'starry.alt', detail: 'feature.afterimage', position: '50% 58%' },
  { id: 'robolution', name: 'Robolution', image: 'entropy-overture.jpg', alt: 'entropy.alt', detail: 'feature.robolution', position: '50% 48%' },
  { id: 'prompt-chat', name: 'Prompt Chat sur Toile', image: 'prompt-chat.jpg', alt: 'chat.alt', detail: 'feature.chat', position: '50% 65%' },
  { id: 'prompt-baudelaire', name: 'Prompt BaudelAIre', image: 'baudelaire-034.jpg', alt: 'book.right', detail: 'feature.book', position: '50% 48%' }
];
const $ = (selector) => document.querySelector(selector);
const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* Browsing must work without storage. */ } }
};
const params = new URLSearchParams(location.search);
let language = params.get('lang') || storage.get('onchainfinity-atelier-language') || 'en';
if (!Object.hasOwn(translations, language)) language = 'en';
let featureIndex = features.findIndex((feature) => feature.id === params.get('work'));
if (featureIndex < 0) featureIndex = Math.floor(Math.random() * features.length);
let requestedFeatureIndex = featureIndex;
let featureRequest = 0;
let bookSpread = 0;
const bookSpreads = [[32, 33], [34, 35]];
let lastDialogTrigger = null;
const t = (key) => translations[language][key] ?? translations.en[key] ?? key;
const icons = () => window.lucide?.createIcons({ attrs: { 'aria-hidden': 'true' } });

function updateFeatureText() {
  const feature = features[featureIndex];
  $('#feature-name').textContent = feature.name;
  $('#feature-link').href = `#${feature.id}`;
  $('#feature-detail').textContent = t(feature.detail);
  $('#feature-count').textContent = `${String(featureIndex + 1).padStart(2, '0')} / 04`;
  $('#hero-image').alt = t(feature.alt);
}

function setFeature(index, animate = true) {
  const nextIndex = (index + features.length) % features.length;
  requestedFeatureIndex = nextIndex;
  const feature = features[nextIndex];
  const request = ++featureRequest;
  const image = new Image();
  image.onload = () => {
    if (request !== featureRequest) return;
    featureIndex = nextIndex;
    const hero = $('#hero-image');
    hero.src = image.src;
    hero.style.objectPosition = feature.position;
    hero.classList.remove('is-changing');
    updateFeatureText();
  };
  image.onerror = () => $('#hero-image').classList.remove('is-changing');
  if (animate) $('#hero-image').classList.add('is-changing');
  image.src = `./assets/${feature.image}`;
}

function updateBook() {
  const pages = bookSpreads[bookSpread];
  ['left', 'right'].forEach((side, index) => {
    const image = $(`#book-page-${side}`);
    image.src = `./assets/baudelaire-${String(pages[index]).padStart(3, '0')}.jpg`;
    image.alt = `${t('book.page.alt')} ${pages[index]}`;
  });
  $('#book-counter').textContent = `${t('book.pages')} ${pages[0]}–${pages[1]}`;
  $('#book-prev').disabled = bookSpread === 0;
  $('#book-next').disabled = bookSpread === bookSpreads.length - 1;
}

function setLanguage(code) {
  language = Object.hasOwn(translations, code) ? code : 'en';
  document.documentElement.lang = language;
  document.title = t('title');
  $('meta[name="description"]').content = `Onchainfinity. ${t('hero.description')}`;
  $('#language').value = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll('[data-label]').forEach((element) => { element.setAttribute('aria-label', t(element.dataset.label)); element.title = t(element.dataset.label); });
  document.querySelectorAll('[data-alt]').forEach((element) => { element.alt = t(element.dataset.alt); });
  $('#menu-toggle').setAttribute('aria-label', t($('#mobile-nav').hidden ? 'menu' : 'menu.close'));
  updateFeatureText();
  updateBook();
  if ($('#art-dialog').open) $('#art-caption').textContent = t($('#art-dialog').dataset.caption);
  storage.set('onchainfinity-atelier-language', language);
}

function setMenu(open) {
  $('#mobile-nav').hidden = !open;
  $('#menu-toggle').setAttribute('aria-expanded', String(open));
  $('#menu-toggle').setAttribute('aria-label', t(open ? 'menu.close' : 'menu'));
  $('#menu-toggle').title = t(open ? 'menu.close' : 'menu');
  $('#menu-toggle').innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  icons();
}

function openDialog(dialog, trigger) {
  lastDialogTrigger = trigger;
  document.body.classList.add('modal-open');
  dialog.showModal();
}

$('#language').addEventListener('change', (event) => setLanguage(event.target.value));
$('#feature-prev').addEventListener('click', () => setFeature(requestedFeatureIndex - 1));
$('#feature-next').addEventListener('click', () => setFeature(requestedFeatureIndex + 1));
$('#menu-toggle').addEventListener('click', () => setMenu($('#mobile-nav').hidden));
$('#mobile-nav').querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !$('#mobile-nav').hidden) { setMenu(false); $('#menu-toggle').focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => { if (event.matches) setMenu(false); });

document.querySelectorAll('[data-play]').forEach((button) => button.addEventListener('click', async () => {
  $('#audio-player').hidden = false;
  $('#audio-status').textContent = '';
  try { await $('#audio').play(); } catch { $('#audio-status').textContent = t('player.error'); }
}));
$('#close-player').addEventListener('click', () => {
  $('#audio').pause();
  $('#audio-player').hidden = true;
  $('.hero-listen').focus({ preventScroll: true });
});

document.querySelectorAll('[data-image]').forEach((button) => button.addEventListener('click', () => {
  $('#art-image').src = `./assets/${button.dataset.image}`;
  $('#art-image').alt = t(button.dataset.caption);
  $('#art-caption').textContent = t(button.dataset.caption);
  $('#art-dialog').dataset.caption = button.dataset.caption;
  openDialog($('#art-dialog'), button);
}));
document.querySelectorAll('#open-book, [data-open-book]').forEach((button) => button.addEventListener('click', () => { bookSpread = 0; updateBook(); openDialog($('#book-dialog'), button); }));
$('#book-prev').addEventListener('click', () => { if (bookSpread > 0) { bookSpread -= 1; updateBook(); } });
$('#book-next').addEventListener('click', () => { if (bookSpread < bookSpreads.length - 1) { bookSpread += 1; updateBook(); } });
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastDialogTrigger?.focus({ preventScroll: true }); });
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
});

setLanguage(language);
setFeature(featureIndex, false);
icons();
