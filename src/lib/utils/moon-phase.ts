
import SunCalc from 'suncalc';

export enum MoonPhase {
    NewMoon = 'New Moon',
    WaxingCrescent = 'Waxing Crescent',
    FirstQuarter = 'First Quarter',
    WaxingGibbous = 'Waxing Gibbous',
    FullMoon = 'Full Moon',
    WaningGibbous = 'Waning Gibbous',
    LastQuarter = 'Last Quarter',
    WaningCrescent = 'Waning Crescent',
}

export const getMoonPhase = (date: Date = new Date()): MoonPhase => {
    const illumination = SunCalc.getMoonIllumination(date);
    const phase = illumination.phase;

    if (phase < 1 / 8) {
        return MoonPhase.NewMoon;
    } else if (phase < 2 / 8) {
        return MoonPhase.WaxingCrescent;
    } else if (phase < 3 / 8) {
        return MoonPhase.FirstQuarter;
    } else if (phase < 4 / 8) {
        return MoonPhase.WaxingGibbous;
    } else if (phase < 5 / 8) {
        return MoonPhase.FullMoon;
    } else if (phase < 6 / 8) {
        return MoonPhase.WaningGibbous;
    } else if (phase < 7 / 8) {
        return MoonPhase.LastQuarter;
    } else {
        return MoonPhase.WaningCrescent;
    }
}
