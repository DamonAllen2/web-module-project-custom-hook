import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const handleChanges = (updatedValue) => {
        console.log((!updatedValue == true) ? `Darkmode Activated` : `Darkmode Deactivated`);
        setValue(!updatedValue);
    }
    return [value, setValue, handleChanges];
}