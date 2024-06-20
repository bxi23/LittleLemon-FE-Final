import {fetchAPI} from "./mockAPI";

export const updateTimes = (set = false, date) => {
    const day = new Date(date);
    // console.log(today);
    // console.log(fetchAPI(today));
    if(set)
        return (
            [
                "7:00",
                "8:00",
                "9:00",
                "0:00",
                "1:00",
                "2:00"
            ]
        )
    return fetchAPI(day);
}   