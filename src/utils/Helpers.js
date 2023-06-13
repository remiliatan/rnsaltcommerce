export function changeKeyToValuable(arrayData, labelTarget, valueTarget) {
    arrayData.forEach(obj => {
        obj['label'] = String(obj[labelTarget])
        obj['value'] = String(obj[valueTarget])
    })
    return arrayData
}