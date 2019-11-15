/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
interface Tr {
  toString: () => string;
}

class St0TrA implements Tr {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  toString(): string {
    return `TrA for St0 - Title: ${this.title}`;
  }
}

class St0TrB implements Tr {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  toString(): string {
    return `TrB for St0 - Title: ${this.title}`;
  }
}

class St1TrA implements Tr {
  body: string;

  title: string;

  constructor(body: string, title: string) {
    this.body = body;
    this.title = title;
  }

  toString(): string {
    return `TrA for St1 - Body: ${this.body} - Title: ${this.title}`;
  }
}

class St1TrB implements Tr {
  body: string;

  title: string;

  constructor(body: string, title: string) {
    this.body = body;
    this.title = title;
  }

  toString(): string {
    return `TrB for St1 - Body: ${this.body} - Title: ${this.title}`;
  }
}

const printTr = (item: Tr): void => {
  console.log(item.toString());
};

const st0TrA = new St0TrA('T');
const st0TrB = new St0TrB('T');
const st1TrA = new St1TrA('B', 'T');
const st1TrB = new St1TrB('B', 'T');
printTr(st0TrA); // TrA for St0 - Title: T
printTr(st0TrB); // TrB for St0 - Title: T
printTr(st1TrA); // TrA for St1 - Body: B - Title: T
printTr(st1TrB); // TrB for St1 - Body: B - Title: T
