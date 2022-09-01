import { createSlice } from '@reduxjs/toolkit'

export const foodSlice = createSlice({
    name: 'plates',
    initialState: [
        // salad
        {
            id: 0,
            url:"./assets/salad/spinachapplesalad.png",
            name:'Spinach apple salad',
            price:'$23',
            description:`This spinach apple salad is one of our best salad recipes because it's classic and simple! It pairs tangy apple and thin sliced pear with spinach and a zingy balsamic dressing. Add to that shiny glazed walnuts or pecans, which add a signature crunch. Dress it up with a fancy cheese like Manchego if you like, or keep it simple and plant-based.`
        },
        {
            id: 1,
            url:'./assets/salad/bestchoppedsalad.png',
            name:'Best chopped salad',
            price:'$17',
            description:'Why is this salad the best? This chopped salad will amaze everyone around the table! We served this salad at a dinner party and, "Wow! What’s in this salad?" was murmured around the table. That’s when you know a salad recipe is a keeper! There’s our homemade Italian dressing, tangy, savory, herby and balanced. Add to that shallots, tomatoes, cucumber, and a zing from pepperoncini. And then Parmesan. Yes, this chopped salad wants to be part of your life!'
        },
        {
            id: 2,
            url:'./assets/salad/perfectitaliansalad.png',
            name:'Perfect Italian Salad',
            price:'$21',
            description:`Here’s a great salad that’s simply perfection, in our books. This Italian salad is full of all the right flavors and textures: crisp lettuce, crunchy garlic croutons, and zingy pepperoncini. It’s covered in punchy, herby Italian vinaigrette that makes the flavors sing! It can play sidekick to just about anything.`
        },
        {
            id: 3,
            url:'./assets/salad/SimpleCarrotSalad.png',
            name:'Simple Carrot Salad',
            price:'$20',
            description:'Serve this carrot salad recipe to your friends and family, and they’ll be singing your praises! We know because after we made this at our house, it disappeared within minutes. It’s simple and refreshing, featuring strings of carrots doused in a a tangy Mediterranean-style vinaigrette.'
        },
        {
            id: 4,
            url:'./assets/salad/SweetPotatoSalad.png',
            name:'Sweet Potato Salad',
            price:'$15',
            description:'Looking for a delicious salad recipe with everyone’s favorite root vegetable? Try this Sweet Potato Salad! The contrast of garlic roasted sweet potato cubes, feathery baby arugula, cranberries and creamy goat cheese hit it out of the park. Top it with tangy honey mustard dressing and well, you’ll want to park yourself in front of the bowl.'
        },
        // pasta
        {
            id: 5,
            url:"./assets/plates/pastameatballs.jpg",
            name:'spaghetti with meatballs',
            price:'$18',
            description:`This is an Italian-style pasta sauce with homemade meatballs that's cooked slowly over low heat for an intense tomato flavor. It's easy to make the spaghetti sauce ahead of time; gently reheat and add meatballs 30 minutes before you're ready to serve with your favorite pasta.`
        },
        {
            id: 6,
            url:'./assets/plates/pastawihpesto.jpg',
            name:'Pasta with pesto',
            price:'$21',
            description:'This is a delicious, vegetarian pasta recipe packed with the flavor of fresh basil and walnut pesto. Homemade Pesto Sauce is the best use for all the fresh summer basil growing in your herb garden. Follow my tried and true tips to make a perfect pesto pasta that won’t turn black or bitter.'
        },
        {
            id: 7,
            url:'./assets/plates/shrimpandmusseelspasta.jpg',
            name:'Pasta with shrimp and mussels',
            price:'$20',
            description:'Shrimp and mussels are some of the leading flavours in the world of seafood. They are readily available, but the preparation time might take a bit longer. These items do not need any exotic ingredients. Simply boil them with proper training and serve them with a shrimp udon noodle bowl. From pasta to salads, these items can be cooked in any way you need. All you need to do is prep them and steam them for a delightful meal.'
        },{
            id: 8,
            url:'./assets/plates/Spaghetti with shrimps twirled on fork.png',
            name:'Spaghetti with shrimps',
            price:'$18',
            description:'Shrimp Spaghetti is such a comforting pasta dish, perfect for busy weeknights! Plump, garlicky prawns nestle on a bed of spaghetti, bejeweled with bright red baby tomatoes and vibrant green spinach. It’s simple but loaded with flavor from the seasoned seafood broth. Bright, easy, filling, and so delicious! Don’t like shrimps? Make it with any other protein like chicken or salmon chunks'
        },{
            id: 9,
            url:'./assets/plates/lasagne.jpg',
            name:'lasagna',
            price:'$23',
            description:'Lasagna is the name of one of the oldest and best-known pasta shapes. It is usually rectangular or ribbon shaped, thicker than tagliatelle, made from a dough based on flour and eggs, with numerous local variants. After being boiled, the rectangular lasagna noodles are drained and placed in layers with a filling that varies based on different local traditions.'
        },
    ],
    reducers: {
        addFood: (state, action) => {
            state.push({
                title: state.length,
                price: action.payload.description
            });
        },
        deleteFood: (state, action) => {
            state.filter(drink => drink.title!==action.payload)
        },
        searchFood:(state, action)=>{
            return state.filter(el=> (el.name.toLocaleLowerCase().includes(action.payload))? action.payload: el)
        },
    }
})


export const { addFood, deleteFood, searchFood } = foodSlice.actions

export default foodSlice.reducer