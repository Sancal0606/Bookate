import {Model} from 'sequelize'

interface BookAttributes {
    idBook: number,
    title: string,
    author: string,
    description: string,
    cover: string
}

module.exports = (sequelize:any, DataTypes: any) => {
    class Book extends Model<BookAttributes> implements BookAttributes{
        public idBook!: number;
        public title!: string;
        public author!: string;
        public description!: string;
        public cover!: string;
    }

    Book.init(
        {
            idBook:{
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            title:{
                type: DataTypes.STRING
            },
            author:{
                type: DataTypes.STRING
            },
            description:{
                type: DataTypes.TEXT
            },
            cover:{
                type: DataTypes.STRING
            }
        },{
            sequelize,
            modelName:"book"
        }
    );
    return Book;
}
