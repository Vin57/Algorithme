const number_of_items = 100;
let subject: {date: Date}[] = Array.from({length: number_of_items}, () => { 
    return {date: new Date(Math.floor(Date.now() - (Math.random() * 10000000000)))}
});

subject.sort((a, b) => a.date.getTime() - b.date.getTime())

export {subject, number_of_items}