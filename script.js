/* Buildless site: all displayed media are served from the same origin. */
const translations = {
  en: {
    skip: 'Skip to the works', works: 'Works', artist: 'The artist', correspondences: 'Correspondences', language: 'Language', navigation: 'Main navigation', menu: 'Open menu', 'menu.close': 'Close menu', close: 'Close', previous: 'Previous work', next: 'Next work',
    'hero.eyebrow': 'Art / Music / Cultural memory', 'hero.line': 'Explore our traces in AI. Reveal our humanity.', 'hero.description': 'Electronic music, images and imagined worlds, born from the memory of artworks.', 'hero.explore': 'Explore the works', 'hero.featured': 'In the light',
    'listen.excerpt': 'Listen to an excerpt', 'listen.starry': 'Listen to Starry Signal', 'view.artwork': 'View the artwork',
    'works.title': 'Selected works', 'works.subtitle': 'Four projects, one inquiry',
    'afterimage.type': 'Painting / Electronic music', 'afterimage.description': 'A painting leaves us with more than an image. Afterimage gathers its resonances to compose electronic music, stories and moving images.', 'afterimage.action': 'Discover Afterimage',
    'robolution.type': 'Electronic music / Scientific memory', 'robolution.description': 'What will remain of us in the memory of machines? The founding texts of computer science become compositions that blend electronic textures with orchestral sweep.', 'robolution.action': 'Discover Robolution',
    'chat.type': 'Artbook / Images / Music', 'chat.description': 'In the Galerie de Babel, a cat wanders from one painted world to another. Images, story and music form an artbook at the edge of dreams.', 'chat.action': 'Visit the Galerie de Babel',
    'book.type': 'Poetry / Illustrated book / 2023', 'book.description': 'Baudelaire’s verses endure; new visions awaken as we read them. An illustrated book where poetry enters into dialogue with images shaped with the help of artificial intelligence.', 'book.action': 'Leaf through a few pages', 'book.note': 'Original edition in French', 'book.pdf': 'Complete book · PDF, 446 MB', 'book.previous': 'Previous pages', 'book.next': 'Next pages', 'book.pages': 'Pages',
    'artist.label': 'Artistic approach', 'artist.title': 'Memory, living matter.', 'artist.lead': 'Onchainfinity is a digital artist working with the memory of artworks.', 'artist.body': 'Paintings, poems and scientific texts provide the raw material. AI analysis, code and the artist’s choices open passages between forms: from image to sound, from text to imagined world.', 'artist.body2': 'Each project follows its own path. All seek to make audible or visible what endures of a work as it transforms.',
    'notes.subtitle': 'Studio notes', 'note.one.title': 'On the essence of a work', 'note.one.body': 'To seek the essence of a work is not to summarise it. It is to attend to what remains within us: a colour, a tension, a rhythm, an emotion. The creation that emerges does not replace the original; it invites us to hear or see it differently.', 'note.two.title': 'The machine and the hand', 'note.two.body': 'The machine multiplies possibilities. It remains for the artist to choose a path, recognise what rings true, and let go of what dissipates the emotion. The work takes shape in this dialogue, as much through what the artist keeps as through what they leave out.',
    'footer.line': 'Explore our traces in AI. Reveal our humanity.', 'footer.listen': 'Listen to Robolution 000', player: 'Audio player', 'player.caption': 'Afterimage · 45-second excerpt', 'player.close': 'Close player', 'player.error': 'Playback could not start. You can try again using the player controls.',
    'starry.alt': 'The Starry Night by Vincent van Gogh', 'starry.caption': 'Vincent van Gogh, The Starry Night (1889). The painting behind Starry Signal, in the Afterimage series.', 'robolution.alt': 'Robolution 000 album cover', 'entropy.alt': 'Entropy Overture, artwork for the album Robolution 000', 'chat.alt': 'A black cat walks through the painted settings of the Galerie de Babel', 'book.left': 'L’Homme et la Mer, a page from Prompt BaudelAIre', 'book.right': 'Illustration from Prompt BaudelAIre: a figure facing the sea', 'book.page.alt': 'Prompt BaudelAIre, original French edition, PDF page',
    'feature.afterimage': 'Starry Signal · After Vincent van Gogh', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': 'An illustrated journey · Galerie de Babel', 'feature.book': 'L’Homme et la Mer · Illustrated poetry',
    title: 'Onchainfinity | Works of Memory', 'book.buy': 'Discover the book on Amazon',
    'slideshow.pause': 'Pause slideshow', 'slideshow.resume': 'Resume slideshow', 'listen.pause': 'Pause excerpt', 'excerpt.duration': '45-second excerpt'
  },
  fr: {
    skip: 'Aller aux œuvres', works: 'Œuvres', artist: 'L’artiste', correspondences: 'Correspondances', language: 'Langue', navigation: 'Navigation principale', menu: 'Ouvrir le menu', 'menu.close': 'Fermer le menu', close: 'Fermer', previous: 'Œuvre précédente', next: 'Œuvre suivante',
    'hero.eyebrow': 'Art / Musique / Mémoire culturelle', 'hero.line': 'Explorer nos traces dans l’IA. Révéler l’humain.', 'hero.description': 'Des musiques électroniques, des images et des mondes imaginaires, nés de la mémoire des œuvres.', 'hero.explore': 'Explorer les œuvres', 'hero.featured': 'En lumière',
    'listen.excerpt': 'Écouter un extrait', 'listen.starry': 'Écouter Starry Signal', 'view.artwork': 'Voir l’œuvre',
    'works.title': 'Œuvres choisies', 'works.subtitle': 'Quatre projets, une même recherche',
    'afterimage.type': 'Peinture / Musique électronique', 'afterimage.description': 'Une peinture laisse en nous plus qu’une image. Afterimage en recueille les résonances pour composer des musiques électroniques, des récits et des images en mouvement.', 'afterimage.action': 'Découvrir Afterimage',
    'robolution.type': 'Musique électronique / Mémoire scientifique', 'robolution.description': 'Que restera-t-il de nous dans la mémoire des machines ? Les textes fondateurs de l’informatique deviennent des compositions où se mêlent textures électroniques et souffle orchestral.', 'robolution.action': 'Découvrir Robolution',
    'chat.type': 'Livre d’art / Images / Musique', 'chat.description': 'Dans la Galerie de Babel, un chat chemine d’un monde pictural à l’autre. Images, récit et musique composent un livre d’art aux frontières du rêve.', 'chat.action': 'Visiter la Galerie de Babel',
    'book.type': 'Poésie / Livre illustré / 2023', 'book.description': 'Les vers de Baudelaire demeurent ; des visions nouvelles s’éveillent à leur lecture. Un livre illustré où la poésie dialogue avec des images façonnées à l’aide de l’intelligence artificielle.', 'book.action': 'Feuilleter quelques pages', 'book.note': 'Édition originale en français', 'book.pdf': 'Livre complet · PDF, 446 Mo', 'book.previous': 'Pages précédentes', 'book.next': 'Pages suivantes', 'book.pages': 'Pages',
    'artist.label': 'La démarche', 'artist.title': 'La mémoire, matière vivante.', 'artist.lead': 'Onchainfinity est un artiste numérique qui compose avec la mémoire des œuvres.', 'artist.body': 'Peintures, poèmes et textes scientifiques offrent la matière première. L’analyse par l’intelligence artificielle, le code et les choix de l’artiste ouvrent des passages entre les formes : de l’image au son, du texte au monde imaginé.', 'artist.body2': 'Chaque projet suit son propre chemin. Tous cherchent à faire entendre ou à rendre visible ce qui persiste d’une œuvre lorsqu’elle se transforme.',
    'notes.subtitle': 'Notes d’atelier', 'note.one.title': 'Sur l’essence d’une œuvre', 'note.one.body': 'Chercher l’essence d’une œuvre, ce n’est pas la résumer. C’est prêter attention à ce qui demeure en nous : une couleur, une tension, un rythme, une émotion. La création qui en naît ne se substitue pas à l’original ; elle invite à l’entendre ou à le regarder autrement.', 'note.two.title': 'La machine et la main', 'note.two.body': 'La machine multiplie les possibles. Il reste à choisir une voie, à reconnaître une justesse, à renoncer à ce qui disperse l’émotion. L’œuvre se construit dans ce dialogue, autant par ce que l’artiste retient que par ce qu’il écarte.',
    'footer.line': 'Explorer nos traces dans l’IA. Révéler l’humain.', 'footer.listen': 'Écouter Robolution 000', player: 'Lecteur audio', 'player.caption': 'Afterimage · extrait de 45 secondes', 'player.close': 'Fermer le lecteur', 'player.error': 'La lecture n’a pas pu démarrer. Vous pouvez réessayer à l’aide des commandes du lecteur.',
    'starry.alt': 'La Nuit étoilée de Vincent van Gogh', 'starry.caption': 'Vincent van Gogh, La Nuit étoilée (1889). Tableau à l’origine de Starry Signal, dans la série Afterimage.', 'robolution.alt': 'Pochette de l’album Robolution 000', 'entropy.alt': 'Entropy Overture, illustration de l’album Robolution 000', 'chat.alt': 'Un chat noir traverse les décors peints de la Galerie de Babel', 'book.left': 'L’Homme et la Mer, une page de Prompt BaudelAIre', 'book.right': 'Illustration de Prompt BaudelAIre : une silhouette face à la mer', 'book.page.alt': 'Prompt BaudelAIre, édition originale en français, page du PDF',
    'feature.afterimage': 'Starry Signal · D’après Vincent van Gogh', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': 'Un voyage illustré · Galerie de Babel', 'feature.book': 'L’Homme et la Mer · Poésie illustrée',
    title: 'Onchainfinity | Œuvres de mémoire', 'book.buy': 'Découvrir le livre sur Amazon',
    'slideshow.pause': 'Suspendre le défilement', 'slideshow.resume': 'Reprendre le défilement', 'listen.pause': 'Mettre l’extrait en pause', 'excerpt.duration': 'extrait de 45 secondes'
  },
  zh: {
    skip: '跳至作品', works: '作品', artist: '艺术家', correspondences: '交感', language: '语言', navigation: '主导航', menu: '打开菜单', 'menu.close': '关闭菜单', close: '关闭', previous: '上一件作品', next: '下一件作品',
    'hero.eyebrow': '艺术 / 音乐 / 文化记忆', 'hero.line': '探寻我们在人工智能中的痕迹。照见人性。', 'hero.description': '电子音乐、影像与想象的世界，诞生于作品的记忆。', 'hero.explore': '探索作品', 'hero.featured': '此刻呈现',
    'listen.excerpt': '聆听片段', 'listen.starry': '聆听 Starry Signal', 'view.artwork': '查看作品',
    'works.title': '精选作品', 'works.subtitle': '四个项目，同一场探索',
    'afterimage.type': '绘画 / 电子音乐', 'afterimage.description': '一幅画留在我们心中的，不止是一幅图像。Afterimage 收集它的回响，将其谱写为电子音乐、故事与流动的影像。', 'afterimage.action': '探索 Afterimage',
    'robolution.type': '电子音乐 / 科学记忆', 'robolution.description': '在机器的记忆中，我们将留下些什么？计算机科学的奠基文献化为乐曲，电子声响的肌理与管弦乐的气韵交织其间。', 'robolution.action': '探索 Robolution',
    'chat.type': '艺术画册 / 图像 / 音乐', 'chat.description': '在巴别画廊，一只猫从一个绘画世界漫步至另一个。图像、叙事与音乐，共同构成一本游走于梦境边缘的艺术画册。', 'chat.action': '走进巴别画廊',
    'book.type': '诗歌 / 插画书 / 2023', 'book.description': '波德莱尔的诗句长存；阅读之际，新的幻象悄然苏醒。这是一本插画书，诗歌与借助人工智能塑造的图像在其中对话。', 'book.action': '翻阅几页', 'book.note': '法语原版', 'book.pdf': '完整书籍 · PDF，446 MB', 'book.previous': '上一组页面', 'book.next': '下一组页面', 'book.pages': '页码',
    'artist.label': '创作之道', 'artist.title': '记忆，\n鲜活的素材。', 'artist.lead': 'Onchainfinity 是一位以作品的记忆为素材进行创作的数字艺术家。', 'artist.body': '绘画、诗歌与科学文本提供原始素材。人工智能的分析、代码与艺术家的选择，在不同形式之间打开通道：从图像到声音，从文本到想象的世界。', 'artist.body2': '每个项目都循着自己的路径展开。它们共同探寻的，是让作品在转化中依然留存的部分，能够被听见、被看见。',
    'notes.subtitle': '创作札记', 'note.one.title': '关于作品的精髓', 'note.one.body': '探寻一件作品的精髓，并不是概括它，而是留意它在我们心中留下的东西：一种色彩、一种张力、一种节奏、一种情感。由此诞生的创作不取代原作，而是邀请我们换一种方式去聆听、去凝望。', 'note.two.title': '机器与手', 'note.two.body': '机器让可能性不断增多。仍需选择一条道路，找到恰到好处的表达，舍弃削弱情感的部分。作品在这场对话中逐渐成形，既取决于艺术家保留了什么，也取决于舍弃了什么。',
    'footer.line': '探寻我们在人工智能中的痕迹。照见人性。', 'footer.listen': '聆听 Robolution 000', player: '音频播放器', 'player.caption': 'Afterimage · 45 秒片段', 'player.close': '关闭播放器', 'player.error': '未能开始播放。您可以使用播放器控件重试。',
    'starry.alt': '文森特·梵高的《星月夜》', 'starry.caption': '文森特·梵高，《星月夜》（1889）。这幅画是 Afterimage 系列中 Starry Signal 的创作源头。', 'robolution.alt': 'Robolution 000 专辑封面', 'entropy.alt': 'Entropy Overture，专辑 Robolution 000 的插画', 'chat.alt': '一只黑猫穿行于巴别画廊的绘画布景之间', 'book.left': 'Prompt BaudelAIre 中《人与海》的一页', 'book.right': 'Prompt BaudelAIre 插画：面朝大海的身影', 'book.page.alt': 'Prompt BaudelAIre，法语原版，PDF 页码',
    'feature.afterimage': 'Starry Signal · 源自文森特·梵高', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': '图像之旅 · 巴别画廊', 'feature.book': '人与海 · 诗歌插画',
    title: 'Onchainfinity | 记忆之作', 'book.buy': '在 Amazon 查看书籍',
    'slideshow.pause': '暂停轮播', 'slideshow.resume': '继续轮播', 'listen.pause': '暂停试听', 'excerpt.duration': '45 秒片段'
  },
  ja: {
    skip: '作品へ移動', works: '作品', artist: 'アーティスト', correspondences: '照応', language: '言語', navigation: 'メインナビゲーション', menu: 'メニューを開く', 'menu.close': 'メニューを閉じる', close: '閉じる', previous: '前の作品', next: '次の作品',
    'hero.eyebrow': 'アート / 音楽 / 文化の記憶', 'hero.line': 'AIに残る私たちの痕跡をたどる。人間らしさを映し出す。', 'hero.description': '作品の記憶から生まれる電子音楽、イメージ、そして想像の世界。', 'hero.explore': '作品をめぐる', 'hero.featured': '光をあてる作品',
    'listen.excerpt': '試聴する', 'listen.starry': 'Starry Signal を聴く', 'view.artwork': '作品を見る',
    'works.title': '作品選', 'works.subtitle': '四つのプロジェクト、一つの探求',
    'afterimage.type': '絵画 / 電子音楽', 'afterimage.description': '一枚の絵が私たちに残すのは、イメージだけではない。Afterimageはその響きを受けとめ、電子音楽、物語、動くイメージへと紡いでいく。', 'afterimage.action': 'Afterimage を探る',
    'robolution.type': '電子音楽 / 科学の記憶', 'robolution.description': '機械の記憶に、私たちの何が残るのだろう。計算機科学の礎となった文献が、電子音の質感と管弦楽の息づかいが溶け合う楽曲へと姿を変える。', 'robolution.action': 'Robolution を探る',
    'chat.type': 'アートブック / イメージ / 音楽', 'chat.description': 'バベルの画廊で、一匹の猫が絵画の世界から別の絵画の世界へと歩いていく。イメージ、物語、音楽が織りなす、夢のほとりのアートブック。', 'chat.action': 'バベルの画廊へ',
    'book.type': '詩 / 挿画本 / 2023', 'book.description': 'ボードレールの詩句は残る。その言葉を読むとき、新たな幻視が目覚める。人工知能の助けを借りて形づくられたイメージと詩が対話する挿画本。', 'book.action': '数ページをめくる', 'book.note': 'フランス語原版', 'book.pdf': '書籍全編 · PDF、446 MB', 'book.previous': '前のページ', 'book.next': '次のページ', 'book.pages': 'ページ',
    'artist.label': '創作の姿勢', 'artist.title': '記憶、\n生きた素材。', 'artist.lead': 'Onchainfinityは、作品の記憶を素材に創作するデジタルアーティスト。', 'artist.body': '絵画、詩、科学の文章が、創作の素材となる。人工知能による分析、コード、そしてアーティストの選択が、表現のかたちをつなぐ道を開く。イメージから音へ、文章から想像の世界へ。', 'artist.body2': 'それぞれのプロジェクトが、自らの道をたどる。すべてに共通するのは、作品が姿を変えてもなお残るものを、聴こえるもの、見えるものにするという探求だ。',
    'notes.subtitle': '制作の手帖', 'note.one.title': '作品の本質について', 'note.one.body': '作品の本質を探ることは、それを要約することではない。私たちの内に残るものに心を向けることだ。色彩、緊張、リズム、感情。そこから生まれる創作は原作に取って代わらず、新たな聴き方や見方へと私たちを誘う。', 'note.two.title': '機械と手', 'note.two.body': '機械は可能性を増やしていく。そこから道を選び、ふさわしい表現を見いだし、感情を散らしてしまうものを手放す。作品はこの対話の中で、アーティストが残すものと退けるものの両方によって形づくられる。',
    'footer.line': 'AIに残る私たちの痕跡をたどる。人間らしさを映し出す。', 'footer.listen': 'Robolution 000 を聴く', player: '音声プレーヤー', 'player.caption': 'Afterimage · 45秒の抜粋', 'player.close': 'プレーヤーを閉じる', 'player.error': '再生を開始できませんでした。プレーヤーの操作で再試行できます。',
    'starry.alt': 'フィンセント・ファン・ゴッホの《星月夜》', 'starry.caption': 'フィンセント・ファン・ゴッホ《星月夜》（1889年）。AfterimageシリーズのStarry Signalの原点となる絵画。', 'robolution.alt': 'アルバム Robolution 000 のジャケット', 'entropy.alt': 'Entropy Overture、アルバム Robolution 000 の挿画', 'chat.alt': 'バベルの画廊の描かれた風景の中を歩く黒猫', 'book.left': 'Prompt BaudelAIre の「人間と海」のページ', 'book.right': 'Prompt BaudelAIre の挿画：海に向き合う人影', 'book.page.alt': 'Prompt BaudelAIre、フランス語原版、PDFページ',
    'feature.afterimage': 'Starry Signal · ゴッホの絵画から', 'feature.robolution': 'Entropy Overture · Robolution 000', 'feature.chat': 'イメージの旅 · バベルの画廊', 'feature.book': '人間と海 · 詩と挿画',
    title: 'Onchainfinity | 記憶の作品', 'book.buy': 'Amazon で書籍を見る',
    'slideshow.pause': 'スライドショーを一時停止', 'slideshow.resume': 'スライドショーを再開', 'listen.pause': '試聴を一時停止', 'excerpt.duration': '45秒の抜粋'
  }
};

const features = [
  { id: 'afterimage', name: 'Afterimage', image: 'starry-night.jpg', alt: 'starry.alt', detail: 'feature.afterimage', position: '50% 58%', audio: { title: 'Starry Signal', file: 'starry-signal-excerpt.mp3' } },
  { id: 'robolution', name: 'Robolution', image: 'entropy-overture.jpg', alt: 'entropy.alt', detail: 'feature.robolution', position: '50% 48%', audio: { title: 'Entropy Overture', file: 'entropy-overture-excerpt.mp3' } },
  { id: 'prompt-chat', name: 'Prompt Chat sur Toile', image: 'prompt-chat.jpg', alt: 'chat.alt', detail: 'feature.chat', position: '50% 65%', audio: { title: 'La Galerie de Babel', file: 'galerie-de-babel-excerpt.mp3' } },
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
const slideDelay = 20000;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let rotationEnabled = !reducedMotion.matches;
let rotationTimer = null;
let heroVisible = true;
let controlHovered = false;
let keyboardFocused = false;
let featureLoading = false;
let audioFeature = null;
let audioPending = false;
let audioRequest = 0;
let lastAudioTrigger = null;

function setButtonIcon(button, name) {
  if (button.dataset.icon === name) return;
  button.dataset.icon = name;
  const holder = button.querySelector('.round-play') || button;
  holder.querySelector('svg, i')?.remove();
  const icon = document.createElement('i');
  icon.dataset.lucide = name;
  icon.setAttribute('aria-hidden', 'true');
  holder.prepend(icon);
  icons();
}

function updateAudioText() {
  const audio = $('#audio');
  document.querySelectorAll('[data-play]').forEach((button) => {
    const feature = button.dataset.play === 'featured' ? features[featureIndex] : features.find((item) => item.id === button.dataset.play);
    button.hidden = !feature?.audio;
    if (!feature?.audio) return;
    const playing = audioFeature === feature && (audioPending || !audio.paused) && !audio.ended;
    const label = t(playing ? 'listen.pause' : 'listen.excerpt');
    button.setAttribute('aria-label', `${label} · ${feature.audio.title}`);
    button.title = `${label} · ${feature.audio.title}`;
    setButtonIcon(button, playing ? 'pause' : 'play');
    if (button.dataset.play === 'featured') {
      $('#feature-listen-label').textContent = label;
      $('#feature-track').textContent = `${feature.audio.title} / 0:45`;
    }
  });
  if (audioFeature) {
    $('#player-title').textContent = audioFeature.audio.title;
    $('#player-caption').textContent = `${audioFeature.name} · ${t('excerpt.duration')}`;
    $('#player-image').src = `./assets/${audioFeature.image}`;
  }
}

function scheduleRotation() {
  clearTimeout(rotationTimer);
  rotationTimer = null;
  const audio = $('#audio');
  const canRotate = rotationEnabled && !document.hidden && heroVisible && !featureLoading && !controlHovered && !keyboardFocused && !audioPending && (audio.paused || audio.ended) && $('#mobile-nav').hidden && !document.querySelector('dialog[open]');
  const label = t(rotationEnabled ? 'slideshow.pause' : 'slideshow.resume');
  $('#feature-toggle').setAttribute('aria-label', label);
  $('#feature-toggle').title = label;
  setButtonIcon($('#feature-toggle'), rotationEnabled ? 'pause' : 'play');
  $('.feature-caption').setAttribute('aria-live', canRotate ? 'off' : 'polite');
  if (canRotate) rotationTimer = setTimeout(() => setFeature(featureIndex + 1), slideDelay);
}

function updateFeatureText() {
  const feature = features[featureIndex];
  $('#feature-name').textContent = feature.name;
  $('#feature-link').href = `#${feature.id}`;
  $('#feature-detail').textContent = t(feature.detail);
  $('#feature-count').textContent = `${String(featureIndex + 1).padStart(2, '0')} / 04`;
  $('.hero-image.is-active').alt = t(feature.alt);
  updateAudioText();
}

function setFeature(index, animate = true) {
  const nextIndex = (index + features.length) % features.length;
  requestedFeatureIndex = nextIndex;
  const feature = features[nextIndex];
  const request = ++featureRequest;
  featureLoading = true;
  scheduleRotation();
  const image = new Image();
  image.onload = () => {
    if (request !== featureRequest) return;
    featureIndex = nextIndex;
    const current = $('.hero-image.is-active');
    const incoming = animate ? $('.hero-image:not(.is-active)') : current;
    incoming.src = image.src;
    incoming.style.objectPosition = feature.position;
    incoming.alt = t(feature.alt);
    if (incoming !== current) {
      current.classList.remove('is-active');
      current.setAttribute('aria-hidden', 'true');
    }
    incoming.classList.add('is-active');
    incoming.removeAttribute('aria-hidden');
    featureLoading = false;
    updateFeatureText();
    scheduleRotation();
  };
  image.onerror = () => {
    if (request !== featureRequest) return;
    requestedFeatureIndex = featureIndex;
    featureLoading = false;
    scheduleRotation();
  };
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
  scheduleRotation();
}

function setMenu(open) {
  $('#mobile-nav').hidden = !open;
  $('#menu-toggle').setAttribute('aria-expanded', String(open));
  $('#menu-toggle').setAttribute('aria-label', t(open ? 'menu.close' : 'menu'));
  $('#menu-toggle').title = t(open ? 'menu.close' : 'menu');
  $('#menu-toggle').innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  icons();
  scheduleRotation();
}

function openDialog(dialog, trigger) {
  lastDialogTrigger = trigger;
  document.body.classList.add('modal-open');
  dialog.showModal();
  scheduleRotation();
}

$('#language').addEventListener('change', (event) => setLanguage(event.target.value));
$('#feature-prev').addEventListener('click', () => setFeature(requestedFeatureIndex - 1));
$('#feature-next').addEventListener('click', () => setFeature(requestedFeatureIndex + 1));
$('#feature-toggle').addEventListener('click', () => {
  rotationEnabled = !rotationEnabled;
  if (rotationEnabled) { keyboardFocused = false; controlHovered = false; }
  scheduleRotation();
});
document.addEventListener('visibilitychange', scheduleRotation);
reducedMotion.addEventListener('change', (event) => {
  if (event.matches) rotationEnabled = false;
  scheduleRotation();
});
new IntersectionObserver(([entry]) => {
  heroVisible = entry.isIntersecting;
  scheduleRotation();
}, { threshold: 0.1 }).observe($('.hero'));
document.querySelectorAll('.feature-controls, .hero-listen').forEach((element) => {
  element.addEventListener('pointerenter', (event) => { if (event.pointerType === 'mouse') { controlHovered = true; scheduleRotation(); } });
  element.addEventListener('pointerleave', () => { controlHovered = false; scheduleRotation(); });
});
$('.hero').addEventListener('focusin', (event) => { keyboardFocused = event.target.matches(':focus-visible'); scheduleRotation(); });
$('.hero').addEventListener('focusout', () => { keyboardFocused = false; scheduleRotation(); });
$('#menu-toggle').addEventListener('click', () => setMenu($('#mobile-nav').hidden));
$('#mobile-nav').querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !$('#mobile-nav').hidden) { setMenu(false); $('#menu-toggle').focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', (event) => { if (event.matches) setMenu(false); });

async function playExcerpt(feature, button) {
  if (!feature?.audio) return;
  const request = ++audioRequest;
  const audio = $('#audio');
  if (audioFeature === feature && (audioPending || !audio.paused)) {
    audioPending = false;
    audio.pause();
    updateAudioText();
    scheduleRotation();
    return;
  }
  const changed = audioFeature !== feature;
  audioFeature = feature;
  audioPending = true;
  lastAudioTrigger = button;
  $('#audio-player').hidden = false;
  $('#audio-status').textContent = '';
  if (changed) {
    audio.pause();
    audio.src = `./assets/${feature.audio.file}`;
    audio.load();
  }
  updateAudioText();
  scheduleRotation();
  try { await audio.play(); } catch (error) {
    if (request === audioRequest && error.name !== 'AbortError') $('#audio-status').textContent = t('player.error');
  } finally {
    if (request === audioRequest) {
      audioPending = false;
      updateAudioText();
      scheduleRotation();
    }
  }
}
document.querySelectorAll('[data-play]').forEach((button) => button.addEventListener('click', () => {
  const feature = button.dataset.play === 'featured' ? features[featureIndex] : features.find((item) => item.id === button.dataset.play);
  playExcerpt(feature, button);
}));
['play', 'pause', 'ended', 'error'].forEach((event) => $('#audio').addEventListener(event, () => {
  if (event === 'error') {
    audioPending = false;
    $('#audio-status').textContent = t('player.error');
  }
  updateAudioText();
  scheduleRotation();
}));
$('#close-player').addEventListener('click', () => {
  audioRequest += 1;
  audioPending = false;
  $('#audio').pause();
  $('#audio-player').hidden = true;
  (lastAudioTrigger && !lastAudioTrigger.hidden ? lastAudioTrigger : $('#feature-next')).focus({ preventScroll: true });
  updateAudioText();
  scheduleRotation();
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
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); lastDialogTrigger?.focus({ preventScroll: true }); scheduleRotation(); });
  dialog.addEventListener('click', (event) => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
});

setLanguage(language);
setFeature(featureIndex, false);
icons();
