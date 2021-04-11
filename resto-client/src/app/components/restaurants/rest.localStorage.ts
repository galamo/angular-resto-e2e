const _localStorageKey = "data.restaurants"
export const getRestaurantsLS = () => {
    const restString = window.localStorage.getItem(_localStorageKey);
    let restArray = [];
    try {
        restArray = JSON.parse(restString);
    } catch (ex) {
        console.log(ex)
    }
    return restArray;
}

export const setRestaurantsLS = (rest: Array<any>) => {
    window.localStorage.setItem(_localStorageKey, JSON.stringify(rest))
}