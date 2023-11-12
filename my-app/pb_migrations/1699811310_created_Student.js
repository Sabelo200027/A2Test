/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h3f34yoj4oo2xvb",
    "created": "2023-11-12 17:48:30.286Z",
    "updated": "2023-11-12 17:48:30.286Z",
    "name": "Student",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vrlj0qxq",
        "name": "Numberr",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": true
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h3f34yoj4oo2xvb");

  return dao.deleteCollection(collection);
})
