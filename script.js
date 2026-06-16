const VOCAB_DATA = {
    "Unit 1": [
        ["prior", "önceki, -den önce"], ["examine", "incelemek, muayene etmek"], ["thanks to", "...sayesinde"],
        ["crops", "mahsuller, ekinler"], ["valuable", "değerli, kıymetli"], ["variety", "çeşitlilik, çeşit, tür"],
        ["labour", "emek, iş gücü"], ["quantities", "miktarlar"], ["lorry", "kamyon"],
        ["beneficial", "faydalı, yararlı"], ["incentive", "teşvik, özendirici etken"], ["permit", "izin vermek / izin belgesi"],
        ["rebate", "indirim, iade"], ["appeal", "çekicilik, çağrı / cezbetmek"], ["ripening", "olgunlaşma"],
        ["component", "bileşen, unsur"], ["pressure", "baskı, basınç"], ["encounter", "karşılaşmak, rastlamak"],
        ["conflict", "çatışmak, anlaşmazlığa düşmek"], ["compose", "oluşturmak, bestelemek"],
        ["consumer", "tüketici"], ["cost", "maliyet"], ["discount", "indirim"], ["domestic", "yerli, iç"],
        ["export", "ihraç etmek"], ["goods", "mallar, ürünler"], ["greenhouse", "sera"], ["import", "ithal etmek"],
        ["investigate", "araştırmak, incelemek"], ["multinational", "çok uluslu"], ["outsourcing", "dış kaynak kullanımı"],
        ["overseas", "yurtdışı"], ["produce", "üretmek / ürün"], ["production costs", "üretim maliyetleri"],
        ["profit", "kâr"], ["prosperity", "refah"], ["purchase", "satın almak"], ["supply chain", "tedarik zinciri"],
        ["transport", "ulaşım, taşımacılık"]
    ],
    "Unit 2": [
        ["adviser", "danışman"], ["campus", "kampüs"], ["complex", "karmaşık"], ["emphasis", "vurgu, önem"],
        ["innovation", "yenilik, inovasyon"], ["institution", "kurum, kuruluş"], ["manual", "manuel, el ile"],
        ["medical", "tıbbi"], ["physical", "fiziksel"], ["practical", "pratik, uygulamalı"],
        ["professional", "profesyonel"], ["reference", "referans"], ["requirements", "gereksinimler"],
        ["secure", "güvenli"], ["statement", "ifade, açıklama"], ["technical", "teknik"]
    ],
    "Unit 3": [
        ["aid", "yardım"], ["antibiotic", "antibiyotik"], ["balance", "denge"], ["clinical", "klinik"],
        ["contaminated", "kirlenmiş, kirli"], ["data", "veri"], ["in favour of", "lehine, destekleyen"],
        ["infected", "enfekte, bulaşmış"], ["occur", "meydana gelmek"], ["outbreak", "salgın"],
        ["precaution", "önlem, tedbir"], ["prescription", "reçete"], ["prevention", "önleme"],
        ["prove", "kanıtlamak"], ["recover", "iyileşmek"], ["researcher", "araştırmacı"],
        ["therapy", "terapi, tedavi"], ["treat", "tedavi etmek"], ["treatment", "tedavi"],
        ["trial", "deneme"], ["urgent", "acil"], ["vaccine", "aşı"], ["virus", "virüs"], ["wound", "yara"]
    ],
    "Unit 4": [
        ["remarkable", "dikkat çekici"], ["commitment", "bağlılık"], ["strive", "çaba"],
        ["foster", "teşvik"], ["solely", "yalnızca"], ["prominent", "belirgin"],
        ["tap", "musluk"], ["achieve", "başarmak, elde etmek"], ["entirely", "tamamen"],
        ["vending", "otomat"], ["ambition", "hırs"], ["incident", "olay"],
        ["arson", "kundaklama"], ["compound", "birleşik"], ["enforcement", "uygulama"],
        ["simultaneously", "aynı anda"], ["monitoring", "izleme"], ["distinguish", "ayırt etmek"],
        ["beak", "gaga"], ["crossbreed", "melez (hayvan)"], ["retain", "muhafaza etmek"],
        ["coastal", "kıyı"], ["exploit", "sömürmek"], ["influential", "etkili"],
        ["insect", "böcek"], ["erupt", "patlama"], ["evacuate", "tahliye etmek"],
        ["slippery", "kaygan"], ["harsh", "sert"], ["wire", "tel"],
        ["copper", "bakır"], ["mining", "madencilik"], ["clarify", "açıklamak"],
        ["precious", "değerli"], ["divide", "bölmek"], ["fraction", "kesir"],
        ["shortage", "kıtlık"], ["poverty", "fakirlik"], ["visibly", "gözle görülür"],
        ["contain", "içermek"], ["fence", "çit"], ["construction", "inşaat"],
        ["maintenance", "bakım"], ["concern", "endişe"], ["irrigation", "sulama"],
        ["mitigation", "hafifletme"], ["cohesive", "uyumlu"], ["illuminating", "aydınlatıcı"],
        ["aware", "farkında"], ["tackle", "mücadele"], ["drought", "kuraklık"],
        ["indeed", "gerçekten"], ["agenda", "gündem"], ["fragile", "kırılgan"],
        ["adapt", "uyum sağlamak"], ["affect", "etkilemek"], ["apply", "uygulamak"],
        ["conservation", "koruma, muhafaza"], ["decline", "azalmak, düşmek"], ["diamond", "elmas"],
        ["extract", "çıkarmak"], ["habitat", "yaşam alanı"], ["impact", "etki, etkilemek"],
        ["mineral", "mineral, maden"], ["modify", "değiştirmek"], ["natural gas", "doğal gaz"],
        ["support", "desteklemek"], ["survive", "hayatta kalmak"], ["waste", "atık, israf"],
        ["wilderness", "vahşi doğa"]
    ],
    "Unit 5": [
        ["stately", "görkemli"], ["utmost", "en üst düzeyde"], ["contemporary", "çağdaş"],
        ["collapse", "çökmek"], ["anticipate", "tahmin etmek / beklenti"], ["warehouse", "depo"],
        ["expression", "ifade"], ["exaggeration", "abartı"], ["acquire", "elde etmek"],
        ["steel", "çelik"], ["renovation", "yenileme"], ["maintain", "sürdürmek"],
        ["convert", "çevirmek"], ["expand", "genişletmek"], ["adequate", "yeterli"],
        ["appropriate", "uygun"], ["ambitious", "hırslı"], ["tentative", "geçici"],
        ["viable", "canlı/uygulanabilir"], ["brick", "tuğla"], ["cramped", "sıkışık"],
        ["facility", "tesis"], ["insulation", "yalıtım"], ["rarity", "nadir"],
        ["scrap", "hurda"], ["compromise", "uzlaşma"], ["relevant", "ilgili"],
        ["durable", "dayanıklı"], ["conservation", "çevre koruma"], ["tyre", "lastik"],
        ["can", "bidon"], ["nearby", "yakında"], ["inspiring", "ilham verici"],
        ["demonstrate", "gösteri yapmak"]
    ],
    "Unit 6": [
        ["community-wide", "topluluk çapında"], ["self-sufficient", "kendi kendine yeterli"],
        ["consistent", "tutarlı"], ["dam", "baraj"], ["previously", "daha önce"],
        ["interrupt", "kesme"], ["pitch", "perde"], ["intonation", "tonlama"],
        ["shallow", "sığ"], ["implementing", "uygulama"], ["mass-production", "seri üretim"],
        ["initial", "baş harf"], ["utilize", "kullanmak"], ["inexhaustible", "tükenmez"],
        ["permanently", "kalıcı"], ["blade", "bıçak"], ["rim", "jant"],
        ["landfill", "çöp sahası"], ["pledge", "rehin"], ["unlike", "-den farklı"],
        ["on the brink of", "eşiğinde"], ["enormous", "muazzam"], ["engine", "motor"],
        ["notable", "kayda değer"], ["implication", "ima"], ["mandatory", "zorunlu"],
        ["deliver", "teslim etmek"], ["diminish", "azaltmak"], ["vital", "hayati"],
        ["instigate", "kışkırtmak"], ["Nevertheless", "Zıtlık (Contrast)"], ["Furthermore", "Ek Bilgi (Addition)"], ["Therefore", "Sebep-Sonuç (Result)"]
    ],
    "Unit 7": [
        ["commission", "komisyon"], ["composition", "kompozisyon"], ["arrange", "düzenlemek"],
        ["distinctive", "ayırt edilebilir"], ["expressive", "ifade etmek"],
        ["connotations", "çağrışım anlamı"], ["denotations", "sözlük anlamı"],
        ["omitted", "atlamak, ihmal etmek"], ["interpret", "yorumlamak"], ["leisure", "boş vakit"],
        ["distinguishing", "ayırt etmek"], ["proposal", "teklif"], ["logical", "mantıksal"],
        ["petition", "dilekçe"], ["clarify", "açıklamak"], ["hedging", "savuşturma / önlem"],
        ["conceptual", "kavramsal"], ["exterior", "dış"], ["appeal", "attraction"],
        ["tin", "teneke"], ["calligraphy", "kaligrafi"], ["outward", "dışa doğru"],
        ["inward", "içe doğru"], ["intriguing", "ilginç"], ["existence", "varlık"],
        ["perceived", "algılamak"], ["mediums", "materials"]
    ],
    "Unit 8": [
        ["observation", "gözlem"], ["retire", "emekli"], ["asset", "varlık"],
        ["pension", "emeklilik"], ["property", "mülkiyet"], ["forward", "ileriye dönük"],
        ["permanently", "kalıcı"], ["possession", "sahiplik"], ["plenty", "bol"],
        ["enable", "etkinleştirmek"], ["calculate", "hesaplamak"], ["devote", "adamak"],
        ["indicate", "belirtmek"], ["capable", "yetenekli"], ["estimate", "tahmin etmek"],
        ["phase", "faz"], ["alter", "değiştirmek"], ["stems from", "kaynaklanır"],
        ["rural", "kırsal"], ["skyrocket", "fırlamak"], ["plummet", "düşmek"],
        ["fluctuate", "dalgalanmak"], ["stabilize", "dengelemek"], ["steady", "sabit"],
        ["interpret", "yorumlamak"], ["myth", "efsane"], ["impulsive", "dürtüsel"],
        ["ambitious", "hırslı"], ["demographic", "demografik"], ["undertake", "üstlenmek"],
        ["voluntary", "gönüllü"], ["leisure", "boş zaman"], ["extent", "kapsam"],
        ["nearby", "yakın"], ["delivery", "teslimat"], ["justify", "haklı çıkarmak"]
    ],
    "Miscellaneous": [
        ["cope", "başa çıkmak"], ["priority", "öncelik"], ["expenditure", "harcama"],
        ["allocate", "tahsis"], ["proportion", "oran"], ["relevant", "ilgili"],
        ["emigration", "göç (dışarıya)"], ["immigration", "göç (içeriye)"], ["accurate", "doğru"],
        ["sophisticated", "komplike"], ["wrinkles", "kırışıklıklar"], ["fold", "kat"],
        ["abstract", "soyut"], ["deliberately", "kasten"], ["avant-garde", "yenilikçi/öncü"],
        ["transmission", "iletme"], ["evoke", "uyandırmak"], ["passion", "tutku"],
        ["clay", "kil"], ["grain", "tahıl"], ["relieve", "hafifletme"],
        ["concrete", "somut"], ["circular", "dairesel"], ["complaint", "şikayet"],
        ["ramp", "merdiven/rampa"], ["leaky", "delik/sızıntılı"], ["fulfill", "yerine getirmek"],
        ["amenity", "olanak"], ["belt", "kemer"], ["sprawl", "yayılma"],
        ["suburban", "banliyö"], ["showcase", "vitrin"], ["craftsmanship", "işçilik"]
    ]
};

// State
let currentUnit = null;
let currentWords = [];
let currentIndex = 0;
let flashcardOrigin = 'selection'; // 'selection' or 'mix'
let selectedMixUnits = new Set();
let mixCount = 30;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderUnitGrid();
});

function renderUnitGrid() {
    const grid = document.getElementById('unit-grid');
    grid.innerHTML = '';
    
    Object.keys(VOCAB_DATA).forEach(unit => {
        const card = document.createElement('div');
        card.className = 'unit-card';
        card.innerHTML = `<h3>${unit}</h3><p>${VOCAB_DATA[unit].length} words</p>`;
        card.onclick = () => selectUnit(unit);
        grid.appendChild(card);
    });
}

function selectUnit(unit) {
    currentUnit = unit;
    flashcardOrigin = 'selection';
    startGame();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function goBackFromFlashcard() {
    if (flashcardOrigin === 'mix') {
        showScreen('mix-screen');
    } else {
        showScreen('selection-screen');
    }
}

function startGame() {
    currentWords = [...VOCAB_DATA[currentUnit]];
    shuffleArray(currentWords);
    currentIndex = 0;

    renderFlashcard();
    showScreen('flashcard-screen');
}

// Flashcard Logic
function renderFlashcard() {
    const word = currentWords[currentIndex];
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('flipped');
    
    document.getElementById('flash-front').innerText = word[0];
    document.getElementById('flash-back').innerText = word[1];
    document.getElementById('card-progress').innerText = `${currentIndex + 1} / ${currentWords.length}`;
}

function nextCard() {
    if (currentIndex < currentWords.length - 1) {
        currentIndex++;
        renderFlashcard();
    } else {
        goBackFromFlashcard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        renderFlashcard();
    }
}

// Mix Mode Logic
function showMixScreen() {
    renderMixUnitGrid();
    showScreen('mix-screen');
}

function renderMixUnitGrid() {
    const grid = document.getElementById('mix-unit-grid');
    grid.innerHTML = '';
    
    Object.keys(VOCAB_DATA).forEach(unit => {
        const btn = document.createElement('button');
        btn.className = 'mix-unit-toggle' + (selectedMixUnits.has(unit) ? ' selected' : '');
        btn.innerText = unit;
        btn.onclick = () => toggleMixUnit(unit, btn);
        grid.appendChild(btn);
    });
}

function toggleMixUnit(unit, btn) {
    if (selectedMixUnits.has(unit)) {
        selectedMixUnits.delete(unit);
        btn.classList.remove('selected');
    } else {
        selectedMixUnits.add(unit);
        btn.classList.add('selected');
    }
}

function setMixCount(count) {
    mixCount = count;
    document.querySelectorAll('#mix-count-selector .chip').forEach(chip => {
        chip.classList.toggle('active',
            (count === 'all' && chip.innerText === 'All') ||
            (chip.innerText === count.toString())
        );
    });
}

function startMix() {
    if (selectedMixUnits.size === 0) {
        alert('Please select at least one unit!');
        return;
    }

    let allWords = [];
    selectedMixUnits.forEach(unit => {
        allWords.push(...VOCAB_DATA[unit]);
    });

    shuffleArray(allWords);

    if (mixCount !== 'all') {
        allWords = allWords.slice(0, Math.min(mixCount, allWords.length));
    }

    currentWords = allWords;
    currentIndex = 0;
    flashcardOrigin = 'mix';

    renderFlashcard();
    showScreen('flashcard-screen');
}

// Helpers
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
