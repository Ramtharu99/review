const { restart } = require("nodemon")

const todo = {
    id:12,
    active:false,
    title:'jutti',
    user:{
        id:12,
        name:'ram'
    }
}

const {user} = todo;

const {name:userName}=user

user.id

