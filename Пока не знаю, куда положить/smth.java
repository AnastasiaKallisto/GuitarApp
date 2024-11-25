public class StrumSpeedCalculator {

    /**
     * Рассчитывает время касания каждой струны при заданном BPM.
     *
     * @param bpm Удары в минуту
     * @return Массив с временем касания каждой струны в секундах
     */
    public static double[] calculateStrumTiming(int bpm) {
        if (bpm <= 0) {
            throw new IllegalArgumentException("BPM должно быть положительным числом.");
        }

        // Рассчитываем длительность одного удара
        double totalDuration = 60.0 / bpm;

        // Рассчитываем время касания каждой струны
        // В данном случае считаем, что 6 струн касаются последовательно
        double interval = totalDuration / 6;

        // Создаем массив времени касания для каждой струны
        double[] timings = new double[6];
        for (int i = 0; i < 6; i++) {
            timings[i] = (i + 1) * interval;
        }

        return timings;
    }

    public static void main(String[] args) {
        int bpm = 120; // Пример BPM
        double[] timings = calculateStrumTiming(bpm);

        System.out.println("Время касания каждой струны при BPM " + bpm + ":");
        for (int i = 0; i < timings.length; i++) {
            System.out.printf("Струна %d: %.3f секунд%n", 6 - i, timings[i]);
        }
    }
}
