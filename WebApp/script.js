const playFingerpickButton = document.querySelector('.fingerpickBtn');  
const playChordButton = document.querySelector('.chordBtn'); 
let chords = []; 
let fingerpickingPatterns = [];

playFingerpickButton.addEventListener('click', function() {
  const selectElement0 = document.getElementById('chords'); 
  const selectedChordName = selectElement0.value; 
  const selectedChord = chords.find(chord => chord.name === selectedChordName); 
  const selectElement1 = document.getElementById('fingerpickingPatterns'); 
  const selectedPatternName = selectElement1.value; 
  const selectedPattern = fingerpickingPatterns.find(fingerpick => fingerpick.name === selectedPatternName); 

  if (!selectedPattern || !selectedChord) {
      console.error('Аккорд или перебор не найден');
      // return;
  }

  for (let i = 0; i <  selectedPattern.pattern.length; i++) {
      let currentString =  selectedPattern.pattern[i];
      let currentFretboard = selectedChord.frets[currentString]; 

      // Проверяем, что лад не равен -1, позже будет добавлена приглушка
      if (currentFretboard !== -1 && currentFretboard !== undefined) {
          setTimeout(() => {
              const audio = new Audio(`../../sounds/string${currentString}tone${currentFretboard}.wav`); 
              audio.play().catch(error => {
                  console.error('Ошибка воспроизведения:', error);
              });
          }, i * 200); // Задержка для каждой струны - здесь скорее всего нелинейный расчет нужен
      } else {
          console.warn(`Струна ${currentString} не играется?`);
      }
  } 
}); 

playChordButton.addEventListener('click', function() { 
    const selectElement = document.getElementById('chords'); 
    const selectedChordName = selectElement.value; 
    const selectedChord = chords.find(chord => chord.name === selectedChordName); 

    if (!selectedChord) {
        console.error('Аккорд не найден');
        return;
    }

    for (let currentString = 0; currentString <= 5; currentString++) {
        let currentFretboard = selectedChord.frets[currentString]; 

        // Проверяем, что лад не равен -1
        if (currentFretboard !== -1) {
            setTimeout(() => {
                const audio = new Audio(`../../sounds/string${currentString}tone${currentFretboard}.wav`); 
                audio.play().catch(error => {
                    console.error('Ошибка воспроизведения:', error);
                });
            }, currentString * 40); // Задержка для каждой струны
        } else {
            console.warn(`Струна ${currentString} не играется (лад = -1)`);
        }
    } 
}); 

function loadChords() { 
    fetch('Chords.json') 
      .then(response => response.json()) 
      .then(data => { 
        chords = data; // Сохраняем загруженные аккорды в переменную
        const selectElement = document.getElementById('chords'); 
        selectElement.innerHTML = ''; 
        chords.forEach(chord => { 
          const option0 = document.createElement('option'); 
          option0.value = chord.name; 
          option0.text = chord.name; 
          selectElement.appendChild(option0); 
        }); 
   
        selectElement.addEventListener('change', (event) => { 
          const selectedChord = chords.find(chord => chord.name === event.target.value); 
          if (selectedChord) { 
            updateFrets(selectedChord.frets); 
          } 
        }); 
   
        updateFrets(chords[0].frets); 
      })
      .catch(error => {
          console.error('Ошибка загрузки аккордов:', error);
      });
} 

function updateFrets(frets) { 
  console.log('Frets:', frets); 
} 


function loadFingerpicking() { 
  fetch('Fingerpicking.json') 
    .then(response => response.json()) 
    .then(data => { 
      fingerpickingPatterns = data; // Сохраняем загруженные переборы в переменную
      const selectElement = document.getElementById('fingerpickingPatterns'); 
      selectElement.innerHTML = ''; 
      fingerpickingPatterns.forEach(fingerpick => { 
        const option1 = document.createElement('option'); 
        option1.value = fingerpick.name; 
        option1.text = fingerpick.name; 
        selectElement.appendChild(option1); 
      });
 
      selectElement.addEventListener('change', (event) => { 
        const selectedFingerpick =  fingerpickingPatterns.find(fingerpick =>  fingerpick.name === event.target.value); 
        if (selectedFingerpick) { 
          updatePattern(selectedFingerpick.pattern); 
        } 
      }); 
 
      updatePattern(fingerpickingPatterns[0].pattern); 
    })
    .catch(error => {
        console.error('Ошибка загрузки переборов:', error);
    });
} 

function updatePattern(pattern) { 
  console.log('Pattern:', pattern); 
} 

window.onload = function() {
  loadChords();
  loadFingerpicking();
};