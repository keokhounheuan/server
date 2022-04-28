const Post = require('../modals/post.modal');
const {userlist, MovieList } = require('./FakeData');
const _ = require('lodash');


const resolvers = {
    Query: {

        Users: async() => {
          return userlist ;
        },
        user:  (parent, args) => {
           const id = args.id;
           const user = _.find(userlist, {id : Number(id)  });
           return user;    
        },
       
        movies: () => {
          return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name  });
            return movie; 
        },

        getAllPosts: async () => {
            return await Post.find();
        
        } ,  
    },
    User:{
        favoriteMovies:() => {
            return _.filter(
                MovieList, 
                (movie) =>
                 movie.yearofPublication >= 2000 && movie.yearofPublication <= 2010)
        }
    },


Mutation:{
    createUser:(parent, args) => {
        const user = args.input;
        const lastId = userlist[userlist.length - 1].id;
        user.id = lastId + 1;
        userlist.push(user);
        return user;
    },

    Updatename:(parent, args) => {
        const { id, newname } = args.input;
        let userUpdated;
        userlist.forEach((user) => {
            if (user.id === id) {
                user.name = newname;
                userUpdated = user;
            }
        });
         return userUpdated;
        
    },
          deleteUser:(parent, args) => {
              const id = args.id;
              _.remove(userlist, (user) => user.id === Number(id));
              return null;
          }
},


Mutation1: {
     createPost: async (panent,angs, context,info) =>{
     const {title, description } = args.Post;
     console.log(title, description);
    const Post = new Post({ title, description});
   await Post.save();
    return Post;   }
},
};

module.exports = resolvers;