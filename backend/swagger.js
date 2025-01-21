import swaggerJsDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Post API',
            version: '1.0.0',
            description: 'API for managing user posts with MongoDB Atlas',
        },
    },
    apis: ['./routes/*.js'],
};

export default swaggerJsDoc(options);
