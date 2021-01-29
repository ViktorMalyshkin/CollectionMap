// В не такие далёкие времена в Китае в одном из прекрасном городе и на одной из прекрасных улиц
// построили дом одноэтажный дом 100х24 метра.
// На первом этаже была компания ООО 'Рога и копыта
// В этом доме захотели жить очень многие жители со всего китая. и что бы решить проблему и угодить всем они решили надстраивать этажи.
// Достроили 5 этажей семьи : Первая, Вторая, Третья, Четвертая, Пятая
// Некоторые съехали жильцы 2 семьи, а также и появились новых 15 семей

const div = 'div'
const pre = 'pre'
const task = '// В не такие далёкие времена в Китае в одном из прекрасном городе и на одной из прекрасных улиц\n' +
    '// построили дом одноэтажный дом 100х24 метра.\n' +
    '// На первом этаже была компания ООО \'Рога и копыта\n' +
    '// В этом доме захотели жить очень многие жители со всего китая. и что бы решить проблему и угодить всем они решили надстраивать этажи.\n' +
    '// Достроили 5 этажей семьи : Первая, Вторая, Третья, Четвертая, Пятая\n' +
    '// Некоторые съехали жильцы 2 семьи, а также и появились новых 15 семей'
output(task, div)

const object = { 1: "ООО 'Рога и копыта'"}
output(JSON.stringify(object), pre)

const map = new Map([[1, "ООО 'Рога и копыта'"]])
output(JSON.stringify([...map]), pre)

const array = [ 'Первая', 'Вторая', 'Третья', 'Четвертая', 'Пятая']
array.forEach(item=> {
    const newFloor = map.size + 1
    map.set(newFloor, item)
})
output(JSON.stringify([...map]), pre)

map.delete(4,)
map.delete(2,)

output(JSON.stringify([...map]), pre)










function output (text, tag){
    console.log('==>>', text)
    addElement(text, tag)
}

function addElement(text, tag) {
    const newElement = document.createElement(tag);
    newElement.innerText = text;
    const mainElement = document.getElementById("content");
    document.body.insertBefore(newElement, mainElement);
}

