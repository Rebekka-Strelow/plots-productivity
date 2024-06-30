export interface Subplot {

    id: string;
    bezeichnung: string;
    beschreibung: string;
    
    //Duration
    hasDuration: boolean;
    hours: number;
    minutes: number;

    priority: number; 

}
