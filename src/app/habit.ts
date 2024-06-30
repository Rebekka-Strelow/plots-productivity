import { WeekDay } from "@angular/common";
import { Subplot } from "./subplot";

export interface Habit extends Subplot {
    doOn: WeekDay[];

}
