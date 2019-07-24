// import { ImageGallery } from './image-gallery';
// import { Tags } from './tags';

export interface ImageGallery {
    id: number;
    name: string;
    location: string;
    imageUrl: string;
    desc: string;
    tags: string [];
}

export const IMAGEGALLERY: ImageGallery [] = [
    {   id: 1, 
        name: 'Moraine Lake',
        location: 'Banff, Canada',
        imageUrl: 'https://images.unsplash.com/photo-1536956570953-8124479796df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1295c1125fd6aeb7569d41e2afb79e07&auto=format&fit=crop&w=1350&q=80',
        desc: 'One of the most iconic lake in Canadian Rockies.',
        tags: [ 
            'Lake', 
            'Rock', 
            'Sea', 
            'Waterfront', 
            'Reflection' 
        ],
    },
    {   id: 2, 
        name: 'Colchuk Lake',
        location: 'Colchuck Lake, United States',
        imageUrl: 'https://images.unsplash.com/photo-1536708810901-fe449f1e38de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a71f3bf65a84387a76eff417a82de80d&auto=format&fit=crop&w=1350&q=80',
        desc: 'Hidden in the first part of the Enchantments Traverse trail in the Central Cascades, the Colchuk Lake will leave you breathless!',
        tags: [ 'Lake', 'Rock', 'Sea', 'Waterfront', 'Reflection' ],
    },
    {   id: 3, 
        name: 'Beautiful cliff around beach',
        location: '',
        imageUrl: 'https://images.unsplash.com/photo-1433190152045-5a94184895da?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8fd4ff7d204d5f692b984eb52c9f235c&auto=format&fit=crop&w=1350&q=80',
        desc: '',
        tags: [ '' ],
    },
    {   id: 4, 
        name: 'Destination Four',
        location: 'Big Sur, United States',
        imageUrl: 'https://images.unsplash.com/photo-1460500063983-994d4c27756c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=70ef2fac7f7bbc8e1925f0e676958c26&auto=format&fit=crop&w=1350&q=80',
        desc: '',
        tags: [ 'Rock', 'Sea', 'Waterfront', 'Sun Beams' ],
    },
    {   id: 5, 
        name: 'Huntington beach crowded with people',
        location: 'Huntington Beach, United States',
        imageUrl: 'https://images.unsplash.com/photo-1463023822994-4424fc706fbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=744430c2cf89d55dff5370b7dab2be26&auto=format&fit=crop&w=1350&q=80',
        desc: '',
        tags: [ 'Beach', 'Ocean', 'Waterfront',  ],
    },
    {   id: 6, 
        name: 'Huntington beach crowded with people',
        location: 'Huntington Beach, United States',
        imageUrl: 'https://images.unsplash.com/photo-1463023822994-4424fc706fbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=744430c2cf89d55dff5370b7dab2be26&auto=format&fit=crop&w=1350&q=80',
        desc: '',
        tags: [ 'Beach', 'Ocean', 'Waterfront',  ],
    },
    {   id: 7, 
        name: 'Huntington beach crowded with people',
        location: 'Huntington Beach, United States',
        imageUrl: 'https://images.unsplash.com/photo-1463023822994-4424fc706fbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=744430c2cf89d55dff5370b7dab2be26&auto=format&fit=crop&w=1350&q=80',
        desc: '',
        tags: [ 'Beach', 'Ocean', 'Waterfront',  ],
    },
    {   id: 8, 
        name: 'Huntington beach crowded with people',
        location: 'Huntington Beach, United States',
        imageUrl: 'https://images.unsplash.com/photo-1463023822994-4424fc706fbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=744430c2cf89d55dff5370b7dab2be26&auto=format&fit=crop&w=1350&q=80',
        desc: '',
        tags: [ 'Beach', 'Ocean', 'Waterfront',  ],
    },
    {   id: 9, 
        name: 'Huntington beach crowded with people',
        location: 'Huntington Beach, United States',
        imageUrl: 'https://images.unsplash.com/photo-1463023822994-4424fc706fbf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=744430c2cf89d55dff5370b7dab2be26&auto=format&fit=crop&w=1350&q=80',
        desc: '',
        tags: [ 'Beach', 'Ocean', 'Waterfront',  ],
    },
];
  