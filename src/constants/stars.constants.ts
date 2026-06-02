import { IStars } from "../modules/models/stars.model";
import { TIMERESTRICTED_MISSIONS } from "./jobs.constants";
import { RED_ALERTS } from "./red-alerts.constants";
import { WEATHER } from "./weather.constants";

export enum STARS {
  SINUS_ARDORUM = "SINUS_ARDORUM",
  PHAENNA = "PHAENNA",
  OIZYS = "OIZYS",
  AUXESIA = "AUXESIA",
}

export const STARS_DATA: IStars = {
  [STARS.SINUS_ARDORUM]: {
    name: "Sinus Ardorum",
    nameShort: "Sinus A.",
    nameRole: "Moon",
    redAlerts: RED_ALERTS[STARS.SINUS_ARDORUM],
    weather: WEATHER[STARS.SINUS_ARDORUM],
    timeRestrictedMissions: TIMERESTRICTED_MISSIONS[STARS.SINUS_ARDORUM],
  },
  [STARS.PHAENNA]: {
    name: "Phaenna",
    redAlerts: RED_ALERTS[STARS.PHAENNA],
    weather: WEATHER[STARS.PHAENNA],
    timeRestrictedMissions: TIMERESTRICTED_MISSIONS[STARS.PHAENNA],
  },
  [STARS.OIZYS]: {
    name: "Oizys",
    redAlerts: RED_ALERTS[STARS.OIZYS],
    weather: WEATHER[STARS.OIZYS],
    timeRestrictedMissions: TIMERESTRICTED_MISSIONS[STARS.OIZYS],
  },
  [STARS.AUXESIA]: {
    name: "Auxesia",
    redAlerts: RED_ALERTS[STARS.AUXESIA],
    weather: WEATHER[STARS.AUXESIA],
    timeRestrictedMissions: TIMERESTRICTED_MISSIONS[STARS.AUXESIA],
  },
};
