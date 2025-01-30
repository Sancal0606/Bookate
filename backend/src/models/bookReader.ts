import {Model, Sequelize} from 'sequelize'

interface BookReaderAttributes{
    idBook: number,
    idReader: number
    isInterest: boolean
}

module.exports = (sequelize:any, DataTypes:any) => {
    class BookReader extends Model<BookReaderAttributes> implements BookReaderAttributes{
        public idBook!: number;
        public idReader!: number;
        public isInterest!: boolean;
        static associate(models: any) {}
    }
    BookReader.init({
        idBook:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model:"book",
                key:"idBook"
            }
        },
        idReader:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                model:"reader",
                key:"idReader"
            }
        },
        isInterest:{
            type: DataTypes.BOOLEAN,
        }
    },{
        sequelize,
        modelName:"bookReader"
    });
    return BookReader;
}