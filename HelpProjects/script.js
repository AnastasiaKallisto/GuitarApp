function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play().catch(error => {
      console.error("Ошибка воспроизведения звука:", error);
  });
}
