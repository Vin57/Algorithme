
function search(array: {date: Date}[], subjectToFound: Date): number
{  
    console.log(subjectToFound.toISOString());
    let timeToSearch = subjectToFound.getTime();
    
    let max = array.length - 1;
    let mid = Math.floor(max / 2);
    let min = 0;
    let nbTries = 0;

    while (min < max) {
        nbTries ++; // Track the number of tries to found the subject in array
        mid = Math.floor((max + min) / 2);
        
        let currentLoopTime = array[mid].date.getTime()

        if (currentLoopTime == timeToSearch) {
            console.log(`Founded ! With ${nbTries} tries`);  
            return mid;
        }
 
        if (currentLoopTime > timeToSearch) {
            max = mid;       
        }

        if (currentLoopTime < timeToSearch) {
            min = mid;
        }
    }

    return -1;
}

export {search};