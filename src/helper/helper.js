import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key, callback) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value != null) {
            callback(JSON.parse(value))
        }
        else {
            callback(null)
        }
    } catch (e) {
        callback(null)
        console.log('Unable to get Data', e)
    }
}

const storeData = async (key, value, callback) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        callback && callback()
    } catch (e) {
        console.log('Unable to store Data', e)
    }
}



const getListOfCategory=(items)=>{

    const result = items.reduce(function (r, a) {
        r[a.category] = r[a.category] || [];
        r[a.category].push(a);
        return r;
    }, Object.create(null));

 
    return result
}




export { 

    getData, 
    storeData,
    getListOfCategory
}