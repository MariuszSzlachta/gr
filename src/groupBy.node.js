export function groupBy(myArray, key) {
  let grouped = [];
  if (Array.isArray(myArray)){
    // v1: shows items in array that don't contains searched key. They are store under key of 'undefined'
    let tmp = myArray.filter(obj => obj.hasOwnProperty(key) ? key : null); // ver.1

    // v2: hides items in array that don't contains searched key. To use this version uncomment line below marked as ver.2 and comment line above marked as ver.1
    // let tmp = tmp.filter(obj => obj.hasOwnProperty(key) ? key : null); // ver.2
    if (tmp.length === 0) {
      throw new Error('Key you are looking for doesn\'t exist in any object in this array')
    } else {
      grouped = myArray.reduce((reduceVal, obj) => {
        (reduceVal[obj[key]] = reduceVal[obj[key]] || []).push(obj);
        return reduceVal;
      }, []);
    }
  }
  else {
    throw new Error(`${myArray} is not an array`);
  }
  return grouped;
}
