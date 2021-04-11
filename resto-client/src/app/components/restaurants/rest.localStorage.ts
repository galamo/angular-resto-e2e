const _localStorageKey = "data.restaurants"
export const getRestaurantsLS = () => {
    const restString = window.localStorage.getItem(_localStorageKey);
    const restArray = JSON.parse(restString)
    return restArray;
}

export const setRestaurantsLS = (rest: Array<any>) => {
    window.localStorage.setItem(_localStorageKey, JSON.stringify(rest))
}