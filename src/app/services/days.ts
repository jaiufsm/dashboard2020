export class Days {
    static daysList: Array<string> = ['21/10/2019', '22/10/2019', '23/10/2019', '24/10/2019', '25/10/2019'];

    public static getDays() {
        return Days.daysList;
    }

    public static getCurrentDay() {
        const currentDate = new Date();
        const days = Days.daysList;
        if (days.findIndex(day => day === currentDate.toLocaleDateString()) > -1) {
            return currentDate.toLocaleDateString();
        } else {
            return days[0];
        }
    }
}
