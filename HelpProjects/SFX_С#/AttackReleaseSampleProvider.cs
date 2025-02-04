namespace SoundChanger
{
    public class AttackReleaseSampleProvider : ISampleProvider
    {
        private readonly ISampleProvider source;
        private readonly float attackTime; // Время атаки в секундах
        private readonly float releaseTime; // Время релиза в секундах

        private float currentGain = 0f;
        private float targetGain = 0f;
        private float increment;
        private float decrement;

        public AttackReleaseSampleProvider(ISampleProvider source, float attackTime, float releaseTime)
        {
            this.source = source;
            this.attackTime = attackTime;
            this.releaseTime = releaseTime;

            // Вычисляем инкременты для атаки и релиза посэмплово
            increment = 1.0f / (attackTime * source.WaveFormat.SampleRate);
            decrement = 1.0f / (releaseTime * source.WaveFormat.SampleRate);
        }

        public WaveFormat WaveFormat => source.WaveFormat;

        public int Read(float[] buffer, int offset, int count)
        {
            int samplesRead = source.Read(buffer, offset, count);

            for (int i = 0; i < samplesRead; i++)
            {
                // Устанавливаем целевую громкость
                if (buffer[offset + i] > 0.05f) // Порог, выше которого звук считается "громким"
                {
                    targetGain = 1.0f; // Максимальная громкость
                }
                else
                {
                    targetGain = 0.0f; // Падение до нуля
                }

                // Управляем текущей громкостью
                if (currentGain < targetGain)
                {
                    currentGain += increment;
                    if (currentGain > targetGain)
                    {
                        currentGain = targetGain;
                    }
                }
                else
                {
                    currentGain -= decrement;
                    if (currentGain < targetGain)
                    {
                        currentGain = targetGain;
                    }
                }

                // Применяем текущую громкость к выходному сигналу
                buffer[offset + i] *= currentGain;
            }

            return samplesRead;
        }


    }
}