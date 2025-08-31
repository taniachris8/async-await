import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static async load() {
        const data = await read();
        const value = await json(data);
        const parsedValue = await JSON.parse(value);
   
        return {
            id: parsedValue.id,
            created: parsedValue.created,
            userInfo: {
                id: parsedValue.userInfo.id,
                name: parsedValue.userInfo.name,
                level: parsedValue.userInfo.level,
                points: parsedValue.userInfo.points,
            },
        };
      
    }
};