interface Character2 {
  name: string;
  specialMove: string;
}

interface IModel {
  create: (character: Character2) => Promise<DbCharacter>;
  update: (id: number, character: Character2) => Promise<DbCharacter>;
  delete: (id: number) => Promise<boolean>;
  getAll: () => Promise<DbCharacter[]>;
  getById: (id: number) => Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  async create(character: Character2) {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  async update(id: number, character: Character2) {
    const idToUpdate = db.findIndex((character) => character.id === id);
    if (idToUpdate < 0) throw new Error('Character not found');

    db[idToUpdate] = { ...db[idToUpdate], ...character };
    return db[idToUpdate];
  };

  async delete(id: number) {
    const idToDelete = db.findIndex((character) => character.id === id);
    if (idToDelete < 0) throw new Error('Character not found');

    const deletedItem = db.splice(idToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  async getAll() {
    return db;
  }

  async getById(id: number) {
    const idToGet = db.findIndex((character) => character.id === id);
    if (idToGet < 0) throw new Error('Character not found');
    return db[idToGet];
  }
}

interface DbCharacter extends Character2 {
  id: number;
}

const db: DbCharacter[] = [];