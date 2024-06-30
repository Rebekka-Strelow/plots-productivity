import { Injectable } from '@angular/core';
import { Plot } from './plot';
import { TodoItem } from './todo-item';
import { Priority } from './priority';
import { Habit } from './habit';
import { WeekDay } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MockPlotProviderService {

  getDummyPlots(): Plot[] {
    let plots: Plot[] = [];

    let todo1 : TodoItem = {
      faelligkeit: new Date("2024-06-30"),
      id: '0',
      bezeichnung: 'Wäsche aufhängen',
      beschreibung: '',
      hasDuration: false,
      hours: 0,
      minutes: 0,
      priority: Priority.Wichtig
    }

    let todo2 : TodoItem = {
      faelligkeit: new Date("2024-06-30"),
      id: '1',
      bezeichnung: 'Wäsche abhängen',
      beschreibung: '',
      hasDuration: false,
      hours: 0,
      minutes: 0,
      priority: Priority.Wichtig
    }

    let todo3 : TodoItem = {
      faelligkeit: new Date("2024-06-30"),
      id: '2',
      bezeichnung: 'Aufräumen',
      beschreibung: 'Idealerweise im Wohnzimmer',
      hasDuration: true,
      hours: 0,
      minutes: 30,
      priority: Priority.Moderat
    }

    let habit1 : Habit ={
      doOn: [WeekDay.Monday, WeekDay.Tuesday, WeekDay.Wednesday, WeekDay.Thursday, WeekDay.Friday, WeekDay.Saturday, WeekDay.Sunday],
      id: '0',
      bezeichnung: 'Geschirrspüler',
      beschreibung: '-',
      hasDuration: false,
      hours: 0,
      minutes: 0,
      priority: Priority.Kritisch
    }


    let plot1 : Plot = {
      id: '0',
      bezeichnung: 'Haushalt',
      beschreibung: 'Dinge, die im Haushalt zu erledigen sind.',
      todos: [ todo1, todo2, todo3 ],
      habits: [ habit1 ]
    }


    let habit2 : Habit ={
      doOn: [WeekDay.Monday, WeekDay.Tuesday, WeekDay.Wednesday, WeekDay.Thursday, WeekDay.Friday],
      id: '1',
      bezeichnung: 'Spaziergang',
      beschreibung: 'Zum Entspannen, in der Mittagspause',
      hasDuration: true,
      hours: 0,
      minutes: 30,
      priority: Priority.Moderat
    }

    let habit3 : Habit ={
      doOn: [WeekDay.Monday, WeekDay.Tuesday, WeekDay.Wednesday, WeekDay.Thursday, WeekDay.Friday, WeekDay.Saturday, WeekDay.Sunday],
      id: '2',
      bezeichnung: 'Tablette',
      beschreibung: 'Medikamentenname',
      hasDuration: false,
      hours: 0,
      minutes: 0,
      priority: Priority.Kritisch
    }

    let todo4 : TodoItem = {
      faelligkeit: new Date("2024-06-30"),
      id: '2',
      bezeichnung: 'Lesen',
      beschreibung: 'The Battle Drum',
      hasDuration: true,
      hours: 2,
      minutes: 0,
      priority: Priority.Moderat
    }

    let plot2 : Plot = {
      id: '1',
      bezeichnung: 'SelfCare',
      beschreibung: 'Because i deserve good things :)',
      todos: [todo4 ],
      habits: [ habit2, habit3 ]
    }

    plots.push(plot1)
    plots.push(plot2)

    console.log("Plots:" + plots)

    return plots;
  }


  constructor() { }
}
