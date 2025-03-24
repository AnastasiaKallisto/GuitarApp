using Contracts.Enums;

namespace Contracts.Parsers;

public static class StrummingPatternParser
{
    public static List<StrummingDirection> ParseRhythm(string rhythm)
    {
        return rhythm.Select(c => (StrummingDirection)c).ToList();
    }

    public static List<LoudnessLevel> ParseLoudness(string loudness)
    {
        return loudness.Select(c => (LoudnessLevel)c).ToList();
    }

    public static List<string> ParseDuration(string duration)
    {
        return duration.Split(',').ToList();
    }
}