import { ApiProvider } from './http.provider';

const buildUrl = (id: number) => `https://anapioficeandfire.com/api/characters/${id}`;

const generateRandomId = () => Math.floor(Math.random() * 101);

class Person {
    private name;
    private gender;
    private culture;

    constructor(name: string, gender: string, culture: string) {
        this.name = name;
        this.gender = gender;
        this.culture = culture;
    }

    public printData = () => {
        console.log('Name: ', this.name);
        console.log('Gender: ', this.gender);
        console.log('Culture: ', this.culture || '');
    };
}

(async () => {
    const httpProvider = new ApiProvider();

    const listIds = new Array(10).fill(null).map(generateRandomId);

    const promiseList = listIds.map((id) =>
        httpProvider.get(buildUrl(id)).then(({ name, gender, culture }) => new Person(name, gender, culture)),
    );
    const listOfPerson = await Promise.all(promiseList);

    listOfPerson.forEach((person) => {
        console.log('================');
        person.printData();
        console.log();
    });
})();
