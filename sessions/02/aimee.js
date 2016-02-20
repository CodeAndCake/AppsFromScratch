var aimee = {
	
    version: '2.0',
    
    image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAASLAAAAJDZjNGFhNTIzLWM0N2UtNDhhZS04NzAzLTUyZmY3NTM5ZjZiYg.jpg',

    likesFood: 'Yes',

    hasACat: 'Not at the moment',

    walk: function() {
        alert('Aimee, please walk!');
    },

    speak: function(message, voice) {

        var voices = speechSynthesis.getVoices();
        var msg = new SpeechSynthesisUtterance();

        if (voice) {

            switch (typeof voice){
                case 'string':

                    voices.forEach(function(item, index) {
                        if (item.name == voice) msg.voice = voices[index];
                    });

                    break;
                case 'number':
                    voices.forEach(function(item, index) {
                        if (index == voice) msg.voice = voices[index];
                    });
                    break;
            }

        }else {
            msg.voice = voices[2];
        }

        msg.text = message;

        speechSynthesis.speak(msg);

    },
    
    waitAndDo: function(action){
    	setTimeout(function () {
    		action.call(this);
    	}, 5000);
    	
    },

    getVoices: function() {

        var voices = speechSynthesis.getVoices();

        voices.forEach(function(voice, index) {
            console.log(index,voice.lang,voice.name);
        });

    }

};
