using Contracts.Enums;

namespace Contracts.Parsers;

public static class PickingPatternParser
{
    public static List<LoudnessLevel> ParseLoudness(string loudness)
    {
        return loudness.Split(',').Select(c => (LoudnessLevel)c[0]).ToList();
    }

    public static List<string> ParseDuration(string duration)
    {
        return duration.Split(',').ToList();
    }
}