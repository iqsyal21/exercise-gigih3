**how to run**
----
1. npm install
2. npm start
3. will show localhost address and status connected database
"Server running on port 3000
Database connected"
4. access http://localhost:3000/

note :
- make sure your mongodb is running
- if you want to add sample data, can use path get /sample

----
#User
* User object
```
{
  _id: ObjectId(auto generate)
  username: string
  password: string
}
```
**GET /user/:username**
----
  Returns one user.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get user",
    "data": {
        "user": {
            "_id": "64be7c611c4eb3cea0f2e3e9",
            "username": "user1",
            "password": "$2a$08$OE3eml0OSQnTcb1Am2JzxeIWB.4Ac/grbD5DgiD48oFf7pl2xmiDG",
            "__v": 0
        }
    }
}
```
**POST /user**
----
  Returns message.
* **Headers**  
  Content-Type: application/json
* **Data Body**  
```
{
  username: string,
  password: string
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
  "message": "success add new user"
}
```
**POST /user/login**
----
  Returns message and token.
* **Headers**  
  Content-Type: application/json
* **Data Body**  
```
{
  username: string,
  password: string
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmU4MTBhMDVjMjQwNmMxOGU5Y2JmNCIsInVzZXJuYW1lIjoidXNlcjIiLCJpYXQiOjE2OTAyMDg2MDUsImV4cCI6MTY5MDIxMDQwNX0.nNLXSF65DjWV0Lj9CcmSMPu4t48ky1pPPv64v1uKE3U"
}
```
#Product
* Product object
```
{
  _id: ObjectId(auto generate)
  link: string
  img_url: string
  title: string
  category: string
  price: number
}
```
**GET /product**
----
  Returns all products.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get all products",
    "data": {
        "products": [
            {
                "_id": "64be46141feef07ad446ca6b",
                "link": "https://tokopedia.link/QJF5g9TxFBb",
                "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg",
                "title": "Google TV 65 inch 4K UHD",
                "category": "electronic",
                "price": 6727500,
                "__v": 0
            }
        ]
    }
}
```
**POST /product**
----
  Returns new product.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  link: string
  img_url: string
  title: string
  category: string
  price: number
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
    "message": "success add new product",
    "data": {
        "newProduct": {
            "link": "https://tokopedia.link/QJF5g9TxFBb",
            "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg",
            "title": "Google TV 65 inch 4K UHD",
            "category": "electronic",
            "price": 6727500,
            "_id": "64be8d2e8201419ee6e9b270",
            "__v": 0
        }
    }
}
```
**PATCH /product/:id**
----
  Returns updated product.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  link: string
  img_url: string
  title: string
  category: string
  price: number
}
```
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success update product",
    "data": {
        "updateProduct": {
            "link": "https://tokopedia.link/QJF5g9TxFBb update",
            "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg update",
            "title": "Google TV 65 inch 4K UHD update",
            "category": "electronic update",
            "price": 6727123
        }
    }
}
```
**DELETE /product/:id**
----
  Returns deleted product.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success deleted product",
    "data": {
        "_id": "64be96bb64016a9ca70239a1",
        "link": "https://tokopedia.link/QJF5g9TxFBb",
        "img_url": "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/6/16/66f9a7b1-15ff-4550-b1e6-8c8642010fdb.jpg",
        "title": "Google TV 65 inch 4K UHD",
        "category": "electronic",
        "price": 6727500
    }
}
```
#Video
* Video object
```
{
  _id: ObjectId(auto generate)
  video_url: string
  img_url: string
  category: string
  comment_list: array
}
```
**GET /video**
----
  Returns all videos.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get all videos",
    "data": {
        "videos": [
            {
                "_id": "64be46141feef07ad446ca7b",
                "video_url": "https://youtu.be/ztn3DZuTwHw",
                "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
                "category": "electronics",
                "comment_list": [
                    {
                        "username": "user1",
                        "comment": "tes comment",
                        "time": "2023-07-24T13:29:55.953Z"
                    }
                ],
                "__v": 0
            }
        ]
    }
}
```
**GET /video/:id**
----
  Returns one video.
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
    "message": "success get detail video",
    "data": {
        "video": [
            {
                "_id": "64be46141feef07ad446ca7b",
                "video_url": "https://youtu.be/ztn3DZuTwHw",
                "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
                "category": "electronics",
                "comment_list": [
                    {
                        "username": "user1",
                        "comment": "tes comment",
                        "time": "2023-07-24T13:29:55.953Z"
                    }
                ],
                "__v": 0,
                "product_list": []
            }
        ]
    }
}
```
**POST /video**
----
  Returns new video.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  video_url: string
  img_url: string
  category: string
}
```
* **Success Response:**  
* **Code:** 201
  **Content:**  
```
{
    "message": "success add new video",
    "data": {
        "newVideo": {
            "video_url": "https://youtu.be/ztn3DZuTwHw2",
            "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
            "category": "electronics",
            "comment_list": [],
            "_id": "64be94e0cf230f85c63ede11",
            "__v": 0
        }
    }
}
```
**PATCH /video/:id**
----
  Returns updated video.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  video_url: string
  img_url: string
  category: string
}
```
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success update video",
    "data": {
        "updateVideo": {
            "video_url": "https://youtu.be/ztn3DZuTwHw2 update",
            "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg update",
            "category": "electronics update"
        }
    }
}
```
**DELETE /video/:id**
----
  Returns deleted video.
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success deleted video",
    "data": {
        "_id": "64be94e0cf230f85c63ede11",
        "video_url": "https://youtu.be/ztn3DZuTwHw2",
        "img_url": "https://img.youtube.com/vi/owIuro13xV8/hqdefault.jpg",
        "category": "electronics",
        "comment_list": [],
        "__v": 0
    }
}
```
**POST /video/:id/comments**
----
  Returns success add comment .
* **Headers**  
  Content-Type: application/json
  Authorization: Bearer token
* **Data Body**  
```
{
  comment: string
}
```
* **Success Response:**  
* **Code:** 200
  **Content:**  
```
{
    "message": "success add comment to video",
    "data": {
        "addComment": {
            "acknowledged": true,
            "modifiedCount": 1,
            "upsertedId": null,
            "upsertedCount": 0,
            "matchedCount": 1
        }
    }
}
```
