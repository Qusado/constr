// module.exports = {
//     HOST: "localhost",
//     USER: "postgres",
//     PASSWORD: "qwer",
//     DB: "Constructor_aspex",
//     dialect: "postgres",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };
module.exports = {
    HOST: "ec2-54-217-232-239.eu-west-1.compute.amazonaws.com",
    USER: "aodglrgqrditjl",
    PASSWORD: "710b0cde1ba37929062b6a14940564bc7345c19c66e0356cf50ec26e96857e66",
    DB: "d5evummppnsm4k",
    dialect: "postgres",
    dialectOptions: {
        "ssl": true
    }
};
