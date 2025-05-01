document.addEventListener('DOMContentLoaded', init, false);

let $userChat, $sendChat, $chatResult;
let voices;

async function init() {
	console.log('init');
	$userChat = document.querySelector('#userChat');
	$sendChat = document.querySelector('#sendChat');
	$chatResult = document.querySelector('#chatResult');
	$sendChat.addEventListener('click', sendMessage, false);

}

async function sendMessage() {
	let input = $userChat.value.trim();
	if(input === '') return;
	$sendChat.disabled = true;
	$chatResult.innerHTML = '<p><img src="/grumpy_cat.png" class="rotating-image"></p>';
	console.log('sending ', input);
	let req = await fetch(`./ai.bx?method=processChat&input=${encodeURIComponent(input)}`);

	if(req.status === 500) {
		$chatResult.innerHTML = `Sorry, but something crapped the bed on the API side. Check your logs for more info, shake your fist at the demo gods, and try again.`
		$userChat.value = '';
		$sendChat.disabled = false;
		return;
	}

	let result = await req.json();
	// add the sleep here
	await sleep(2);
	$chatResult.innerHTML = result;
	/*
	Due to an issue w/ how getVoices work, we can't do this in init().
	https://stackoverflow.com/a/52005323/52160
	*/
	/*
	let voices = window.speechSynthesis.getVoices();
	console.log(voices);
	for(v of voices) {
		console.log(v);
	}
	*/

	speechSynthesis.cancel();
	let utterance = new SpeechSynthesisUtterance(result);

	if(!voices) voices = await getVoices();

	for(v of voices) {
		if(v.name === 'Google UK English Male') {
			console.log('SET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
			utterance.voice = v;
			console.log(v);
		}
	}

	console.log('now going to speak');
	speechSynthesis.speak(utterance);

	$userChat.value = '';
	$sendChat.disabled = false;
}

/*
Because BoxLang + Gemini is so dang quick, I need an artificial slowdown
*/
async function sleep(seconds) {
	return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function getVoices() {
    return new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
            }, 10);
        }
    )
}