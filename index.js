const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

string = friends.join(", ");

for (let i = 0; i < friends.length; i++) {
    string += friends[i];

    if (i < friends.length - 1) {
        string += ', ';
    }
}

console.log(string)




const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5']

// -

const cardToRemove = 'Карточка-3';

const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove > -1) {
    cards.splice(indexToRemove, 1);
}

// +

const cardToInsert = 'Карточка-6';
const indexToAdd = 5;

cards.splice(indexToAdd, 0, cardToInsert);

// update

const updatedCard = 'Оновлена Карточка';

cards[2] = updatedCard;

console.log(cards)