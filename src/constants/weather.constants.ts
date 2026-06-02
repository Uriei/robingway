import { IWeatherData } from "../modules/models/weather-report.model";
import { STARS } from "./stars.constants";

export const WEATHER_EMOJIS = {
  ANNEALING_WINDS: "<:annealingwinds:1412459057410740274>",
  ASTROMAGNETIC_STORM: "<:astromagneticstorm:1369563775719575624>",
  AURORAL_FLARE: "<:auroralflare:1511353936278323291>",
  BUBBLE_BLOOM: "<:bubblebloom:1465657179762851951>",
  CLEAR_SKIES: "<:clearskies:1465682394634780808>",
  CLOUDS: "<:clouds:1412390614875639808>",
  FAIR_SKIES: "<:fairskies:1369561680278978631>",
  FLORACANE: "<:floracane:1511354090934763601>",
  GALEFORCE_WINDS: "<:galeforcewinds:1465720206537134133>",
  GLASSRAIN: "<:glassrain:1412771742128013433>",
  GRAVITATIONAL_ANOMALY: "<:gravitationalanomaly:1465661474188951552>",
  METEOR_SHOWER: "<:meteorshower:1369565029824860211>",
  MOON_DUST: "<:moondust:1369561645151551558>",
  RAIN: "<:rain:1412487034723106958>",
  SPORING_MIST: "<:sporingmist:1369565042231611412>",
  THUNDERSTORMS: "<:thunderstorm:1412394500319477840>",
  UMBRAL_WIND: "<:umbralwind:1369561668132274177>",
};

export const WEATHER: { [star: string]: Array<IWeatherData> } = {
  [STARS.SINUS_ARDORUM]: [
    {
      rate: 15,
      emoji: WEATHER_EMOJIS.MOON_DUST,
      name: "Moon Dust",
      important: true,
    },
    {
      rate: 85,
      emoji: WEATHER_EMOJIS.FAIR_SKIES,
      name: "Fair Skies",
      important: false,
    },
    {
      rate: 100,
      emoji: WEATHER_EMOJIS.UMBRAL_WIND,
      name: "Umbral Wind",
      important: true,
    },
  ],
  [STARS.PHAENNA]: [
    {
      rate: 60,
      emoji: WEATHER_EMOJIS.FAIR_SKIES,
      name: "Fair Skies",
      important: false,
    },
    {
      rate: 80,
      emoji: WEATHER_EMOJIS.CLOUDS,
      name: "Clouds",
      important: true,
    },
    {
      rate: 100,
      emoji: WEATHER_EMOJIS.RAIN,
      name: "Rain",
      important: true,
    },
  ],
  [STARS.OIZYS]: [
    {
      rate: 20,
      emoji: WEATHER_EMOJIS.CLOUDS,
      name: "Clouds",
      important: true,
    },
    {
      rate: 80,
      emoji: WEATHER_EMOJIS.FAIR_SKIES,
      name: "Fair Skies",
      important: false,
    },
    {
      rate: 100,
      emoji: WEATHER_EMOJIS.CLEAR_SKIES,
      name: "Clear Skies",
      important: true,
    },
  ],
  [STARS.AUXESIA]: [
    {
      rate: 20,
      emoji: WEATHER_EMOJIS.CLOUDS,
      name: "Clouds",
      important: true,
    },
    {
      rate: 80,
      emoji: WEATHER_EMOJIS.FAIR_SKIES,
      name: "Fair Skies",
      important: false,
    },
    {
      rate: 100,
      emoji: WEATHER_EMOJIS.CLEAR_SKIES,
      name: "Clear Skies",
      important: true,
    },
  ],
};
