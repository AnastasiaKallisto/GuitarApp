namespace SoundChanger
{
    class Program
    {
        static void Main(string[] args)
        {
            // Получаем текущий каталог приложения
            string currentDir = Directory.GetCurrentDirectory();

            // Создаем относительные пути к директориям
            string soundsDirName = Path.Combine(currentDir, "resources", "sounds");
            string normalSoundsDirName = Path.Combine(currentDir, "resources", "normalSounds");
            string quietSoundsDirName = Path.Combine(currentDir, "resources", "quietSounds");
            string mutedSoundsDirName = Path.Combine(currentDir, "resources", "mutedSounds");

            // Создаем выходные директории, если они не существуют
            Directory.CreateDirectory(normalSoundsDirName);
            Directory.CreateDirectory(quietSoundsDirName);
            Directory.CreateDirectory(mutedSoundsDirName);

            var sourceDir = new DirectoryInfo(soundsDirName);
            FileInfo[] files = sourceDir.GetFiles();
            foreach (var item in files)
            {
                string inputFilePath = Path.Combine(soundsDirName, item.Name);

                // Изменяем громкость для разных уровней
                ChangeVolume(inputFilePath, normalSoundsDirName, item.Name, 0.8f);
                ChangeVolume(inputFilePath, quietSoundsDirName, item.Name, 0.6f);
                ChangeVolume(inputFilePath, mutedSoundsDirName, item.Name, 0.4f); //общая громкость, атака, релиз
            }
        }


        
        static void ChangeVolume(string inputFilePath, string outputDir, string fileName, float volume)
        {
            using (var reader = new AudioFileReader(inputFilePath))
            {
                var volumeProvider = new VolumeSampleProvider(reader) { Volume = volume };
                using (var waveFileWriter = new WaveFileWriter(Path.Combine(outputDir, fileName), reader.WaveFormat))
                {
                    var buffer = new float[reader.WaveFormat.SampleRate * reader.WaveFormat.Channels];
                    int samplesRead;

                    while ((samplesRead = volumeProvider.Read(buffer, 0, buffer.Length)) > 0)
                    {
                        waveFileWriter.WriteSamples(buffer, 0, samplesRead);
                    }
                }
            }
        }
        
        static void ApplyAttackReleaseEffect(string inputFilePath, string outputDir, string fileName, float volume, float attackTime, float releaseTime)
        {
            using (var reader = new AudioFileReader(inputFilePath))
            {
                var volumeProvider = new VolumeSampleProvider(reader) { Volume = volume };
                var attackReleaseProvider = new AttackReleaseSampleProvider(volumeProvider, attackTime, releaseTime);
                using (var waveFileWriter = new WaveFileWriter(Path.Combine(outputDir, fileName), reader.WaveFormat))
                {
                    var buffer = new float[reader.WaveFormat.SampleRate * reader.WaveFormat.Channels];
                    int samplesRead;

                    while ((samplesRead = attackReleaseProvider.Read(buffer, 0, buffer.Length)) > 0)
                    {
                        waveFileWriter.WriteSamples(buffer, 0, samplesRead);
                    }
                }
            }
        }
    }
}