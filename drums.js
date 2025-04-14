

// Create the Audio Context — this is the main control center for all audio operations
const soundCtx = new AudioContext();

// Create a GainNode — this will control the overall volume
const masterGain = soundCtx.createGain();
masterGain.gain.value = 1.0; // Set the master volume to full (1.0)

// Connect the master gain node to the audio output (speakers or headphones)
masterGain.connect(soundCtx.destination);


/**
 *
 * @param {String} buff
 */
const play = function(buff){
    let source = soundCtx.createBufferSource();
    source.onended = ()=>{
        source.disconnect();
        source = null;
    }

    // Attach the decoded audio data to the source node
    source.buffer = sampleLibrary[buff].buffer;

    // Connect the audio source to the master gain (volume control)
    source.connect(masterGain);

    // Start playing the audio immediately
    source.start();
}

/**
 *
 * @param {String}path
 * @returns {Promise<AudioBuffer>}
 */
const loadBuffer = async function(path) {
    // Fetch the audio file — returns a Promise, so we await its completion
    const file = await fetch(path);

    // Convert the fetched file into an ArrayBuffer (raw binary data)
    // Await because this operation takes time
    const arrayBuffer = await file.arrayBuffer();

    // Decode the ArrayBuffer into an audio buffer that Web Audio can use
    // Await because decoding also takes time
    return await soundCtx.decodeAudioData(arrayBuffer);

}





// Add a click event listener to the "start" button
// When clicked, it runs loadPlayAudio() to fetch, decode, and play the sound
document.getElementById("kick").addEventListener("mousedown", ()=>{
});

// Add a click event listener to the "stop" button
// When clicked, it runs stopAudio() to stop the sound
document.getElementById("snare").addEventListener("mousedown", ()=> {
});


/**
 * @event keydown
 * @description Listens for keydown events and starts a note if the key is mapped.
 */
document.addEventListener("keydown", (e) => {
if (!e.repeat){
    let key = e.key.toLowerCase()
    switch(key){
        case "a":
            break;
        case 'w':
            break;
        case "s":
            break;
        case 'd':
            break;
        case 'f':
            break;
        case "t":
            break;
        case 'g':
            break;
        case 'y':
            break;
        case 'h':
            break;
        case 'u':
            break;
        case 'j':
            break;
        case 'k':
            break;
        case 'o':
            break;
        case 'l':
            break;
        case 'p':
            break;
        case ';':
            break;

    }

}

});