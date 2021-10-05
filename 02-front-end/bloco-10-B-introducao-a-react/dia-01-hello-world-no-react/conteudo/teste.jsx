//Com jsx
const element = <h1>Hello, world</h1>

//Sem jsx
const element2 = React.createElement('h1', null, 'Hello, world');

const fullName = 'Erickson Siqueira';
const elementName = <h1>Hello, {fullName}</h1>;

const fullNameFunc = (nome, sobrenome) => `${nome} ${sobrenome}`;
const elementName2 = <h1>Hello, {fullNameFunc('Erickson', 'Siqueira')}</h1>;

const container = <div>{elementName2}</div>;

const helloWorld = (name, lastname) => <h1>Hello, {`${name} ${lastname}`}.</h1>;

const nome2 = 'Erickson Loco';

const classe = 'hello-class';
const element3 = <h1 className={classe}> Hello, {nome}</h1>;

const textJsx = "Hello, JSX";
const classJsx = 'jsx-class'
const elementJsx = <h1 className={classJsx}>{textJsx}</h1>;
