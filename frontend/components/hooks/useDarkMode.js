import { useState } from "react"

export const useDarkMode = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = (updatedValue) => {
        console.log((!updatedValue == true) ? `Darkmode Activated` : `Darkmode Deactivated`);
        setValue(!updatedValue);
    }
    return [value, setValue, handleChanges];
}