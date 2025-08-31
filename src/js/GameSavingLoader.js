import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
    static load() {
        return read()
            .then((result) => {
                return json(result);
            })
            .then((result) => {
                const data = JSON.parse(result);
                return {
                    id: data.id,
                    created: data.created,
                    userInfo: {
                        id: data.userInfo.id,
                        name: data.userInfo.name,
                        level: data.userInfo.level,
                        points: data.userInfo.points,
                    },
                };
            });
    }
}
