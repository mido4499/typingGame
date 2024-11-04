let indexNum = 0;
let typeString = "";
let score = 0;
let input;
let message = "";
let currentWord;
let width = 60;
let height = 60;
let words2 = ['abacus', 'aberration', 'abscond', 'acclimate', 'acumen', 'admonish', 'adroit', 'aegis', 'alacrity', 'alchemy', 'allegory', 'anomaly', 'antithesis', 'apathy', 'apoplexy', 'ardent', 'artifice', 'ascertain', 'asylum', 'atheism', 'august', 'austere', 'aversion', 'bane', 'behemoth', 'belligerent', 'benevolent', 'berate', 'bizarre', 'blatant', 'boisterous', 'cacophony', 'capitulate', 'carnivore', 'catalyst', 'cogent', 'cognizant', 'cohesive', 'colloquial', 'commiserate', 'concur', 'conducive', 'conflagration', 'conundrum', 'copious', 'corroborate', 'cynosure', 'debilitate', 'deference', 'dichotomy', 'diligent', 'diminutive', 'discrepancy', 'dissonance', 'divergent', 'eclectic', 'effervescent', 'egregious', 'elucidate', 'empathy', 'enigma', 'ephemeral', 'equanimity', 'esoteric', 'ethereal', 'exacerbate', 'exemplar', 'exuberant', 'facetious', 'fallacy', 'fastidious', 'fervent', 'fluctuate', 'fortuitous', 'fortitude', 'garrulous', 'genesis', 'germinate', 'grandiose', 'halcyon', 'harbinger', 'hedonism', 'hubris', 'hypothetical', 'idiosyncrasy', 'imminent', 'immutable', 'impasse', 'impeccable', 'imperative', 'impetuous', 'incessant', 'inexorable', 'infamous', 'innate', 'insidious', 'intrepid', 'intrinsic', 'juxtapose', 'kinetic', 'labyrinth', 'languid', 'laudable', 'levity', 'malaise', 'metamorphosis', 'meticulous', 'miasma', 'mimetic', 'mollify', 'moratorium', 'multifaceted', 'nebulous', 'nonchalant', 'oblivion', 'obsequious', 'oligarchy', 'omniscient', 'opulent', 'ostracize', 'paradox', 'paradigm', 'pedantic', 'penultimate', 'perfunctory', 'persevere', 'philanthropy', 'platitude', 'plausible', 'polyglot', 'pragmatic', 'predicament', 'preeminent', 'prescient', 'prodigious', 'prolific', 'quixotic', 'rhetoric', 'salient', 'sanguine', 'serendipity', 'simile', 'soliloquy', 'soporific', 'sublime', 'surreptitious', 'taciturn', 'tangible', 'tenacious', 'transcend', 'ubiquitous', 'unanimous', 'unconventional', 'upheaval', 'vacuous', 'vanguard', 'vicarious', 'vindicate', 'vociferous', 'zenith', 'abjure', 'abrogate', 'acquiesce', 'adulation', 'adventitious', 'affluent', 'aggregate', 'allegiance', 'ambivalence', 'ameliorate', 'apocryphal', 'apoplexy', 'articulate', 'ascendancy', 'autonomy', 'bequeath', 'bifurcate', 'bombastic', 'candid', 'catharsis', 'cerebral', 'chagrin', 'chivalry', 'cognizance', 'commensurate', 'compassionate', 'conjecture', 'conscientious', 'conundrum', 'correlate', 'culminate', 'decadent', 'deferential', 'deliberate', 'dissonant', 'divest', 'doldrums', 'ecstasy', 'efficacy', 'emphatic', 'epitome', 'equilibrium', 'extraneous', 'fascination', 'felicity', 'genuine', 'harrowing', 'herald', 'idyllic', 'imbue', 'impromptu', 'infallible', 'infusion', 'inhibit', 'insatiable', 'insinuate', 'insular', 'integral', 'integrity', 'invective', 'irreverent', 'juxtaposition', 'larceny', 'lethargy', 'lucid', 'malleable', 'metaphor', 'mirth', 'narrative', 'neophyte', 'obdurate', 'obtuse', 'occult', 'palpable', 'pariah', 'penchant', 'perspicacious', 'philosophy', 'plight', 'polymath', 'quagmire', 'quintessential', 'raconteur', 'reclusive', 'relentless', 'repercussion', 'resilient', 'reticent', 'reverie', 'rigorous', 'salvage', 'sanctuary', 'satiate', 'subliminal', 'surreal', 'tangential', 'temerity', 'theorem', 'thwart', 'torpid', 'transitory', 'turbulence', 'unfathomable', 'utopia', 'veneration', 'veracity', 'vicarious', 'vindictive', 'vivacious', 'whimsical', 'zephyr'];
let words = ['cat', 'dog', 'sun', 'moon', 'star', 'tree', 'bird', 'fish', 'book', 'pen', 'cup', 'hat', 'hand', 'foot', 'car', 'road', 'home', 'life', 'love', 'time', 'play', 'game', 'food', 'water', 'baby', 'friend', 'happy', 'sad', 'nice', 'kind', 'help', 'work', 'call', 'text', 'walk', 'jump', 'run', 'sit', 'stand', 'read', 'write', 'look', 'see', 'hear', 'feel', 'give', 'take', 'find', 'lose', 'open', 'close', 'start', 'stop', 'move', 'stay', 'think', 'dream', 'wish', 'hope', 'plan', 'draw', 'color', 'paint', 'dance', 'sing', 'smile', 'laugh', 'cry', 'speak', 'listen', 'warm', 'cold', 'big', 'small', 'high', 'low', 'short', 'long', 'fast', 'slow', 'bright', 'dark', 'light', 'heavy', 'soft', 'hard', 'sweet', 'sour', 'bitter', 'salty', 'clean', 'dirty', 'new', 'old', 'young', 'tall', 'flat', 'round', 'sharp', 'smooth', 'rough', 'empty', 'full', 'easy', 'hard', 'simple', 'clear', 'quiet', 'loud', 'still', 'busy', 'free', 'safe', 'fun', 'fair', 'foul', 'hot', 'cool', 'dry', 'wet', 'clear', 'fog', 'snow', 'rain', 'wind', 'cloud', 'sky', 'earth', 'fire', 'water', 'food', 'fruit', 'meat', 'bread', 'cake', 'milk', 'juice', 'tea', 'wine', 'beer', 'salt', 'sugar', 'spice', 'herb', 'leaf', 'stem', 'root', 'seed', 'bud', 'bark', 'flower', 'plant', 'grass', 'hill', 'lake', 'river', 'sea', 'ocean', 'sand', 'rock', 'cliff', 'cave', 'mountain', 'valley', 'field', 'path', 'trail', 'gate', 'door', 'wall', 'roof', 'window', 'floor', 'chair', 'table', 'bed', 'shelf', 'lamp', 'clock', 'picture', 'frame', 'mat', 'carpet', 'rug', 'cupboard', 'cabinet', 'drawer', 'basket', 'bag', 'box', 'tool', 'toy', 'game', 'puzzle', 'card', 'dice', 'coin', 'note', 'bill', 'change', 'shop', 'store', 'market', 'bank', 'post', 'mail', 'letter', 'card', 'gift', 'item', 'thing', 'place', 'way', 'site', 'spot', 'line', 'dot', 'shape', 'form', 'space', 'color', 'shade', 'tone', 'pattern', 'design', 'style', 'print', 'font', 'type', 'text', 'letter', 'word', 'phrase', 'sentence', 'story', 'book', 'page', 'chapter', 'line', 'title', 'cover', 'author', 'reader', 'writer', 'thinker', 'feeler', 'doer', 'maker', 'shaker', 'taker', 'giver', 'friend', 'family', 'group', 'team', 'club', 'circle', 'community', 'home', 'place', 'space', 'time', 'day', 'night', 'morning', 'evening', 'afternoon', 'week', 'month', 'year', 'century', 'age', 'era', 'lifetime', 'moment', 'instant', 'flash', 'blink', 'glimpse', 'sight'];
let correctImage;
let wrongImage;
let img;

function preload(){
    correctImage = loadImage('cat1-removebg.png');
    wrongImage = loadImage('cat2-removebg.png');
    img = loadImage('cat2-removebg.png');
}

let messageColor;


function setup(){
    createCanvas(1500, 1000);
    if (score > 100){
        currentWord = random(words2);
    }
    else{
        currentWord = random(words);
    }
    input = createInput('');  
    input.position(550, 400);
    input.input(checkInput);
    input.style('font-size', '30px')
    input.size(400, 50);
    textAlign(CENTER, CENTER);
    textSize(50);
    messageColor = color(252, 61, 3);
}

function draw(){
    //Page title
    background('#d0e2f3');
    textStyle('BOLD');
    textSize(100);
    fill(0, 0, 0);
    text('Typing', 750, 100);

    //Back Button
    textStyle('NORMAL');
    textSize(80);
    text(currentWord, 750, 300);

    //points box
    fill('#505199');
    stroke('black');
    rect(50, 700, 200, 200);
    fill('black');
    textSize(100);
    text(score, 150, 800);
    textSize(50);
    text('POINTS', 150, 675);

    fill(messageColor);
    text(message, 750, 600);
    if (score == 5){
        fill('black');
        textSize(50);
        text('LEVEL UP!', 500, 800);

    }

    image(img, 600, 700, 300, 300);

    
}

function inputString(){
    let testString = "apple";
    textSize(80);
    text(testString, 500, 300);
    
    input.position(400, 400);
    input.size(400, 150);
    input.style('font-size', '80px');
    
    typeString = input.value();
    enterButton.mousePressed(keyPress);
}

function checkInput(){
    if (input.value() === currentWord) {
        message = 'correct!';
        if (score > 100){
            currentWord = random(words2);
        }
        else{
            currentWord = random(words);
        }
        img = loadImage('cat1-removebg.png');
        messageColor = color(3, 252, 98);
        input.value('');
        score++;
    }
    else{
        message = 'keep trying!';
        messageColor = color(252, 61, 3);
        img = loadImage('cat2-removebg.png');
    }
}