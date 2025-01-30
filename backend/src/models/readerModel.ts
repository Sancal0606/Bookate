import {Model} from 'sequelize'

interface ReaderAttributes{
    idReader: number,
    name: string,
    lastName: string,
    nickname: string,
    mail: string,
    password: string
}

module.exports = (sequelize:any, DataTypes:any) => {
    class Reader extends Model<ReaderAttributes> implements ReaderAttributes{
        public idReader!: number;
        public name!: string;
        public lastName!: string;
        public nickname!: string;
        public mail!: string;
        public password!: string;
        static associate(models:any){
            Reader.belongsToMany(models.book,{
                through:"bookReader",
                foreignKey:"idReader",
                otherKey: "idBook"
            })
        }
    }

    Reader.init(
        {
            idReader:{
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name:{
                type: DataTypes.STRING
            },
            lastName:{
                type: DataTypes.STRING
            },
            nickname:{
                type: DataTypes.STRING
            },
            mail:{
                type: DataTypes.STRING
            },
            password:{
                type: DataTypes.STRING
            }
        },{
            sequelize,
            modelName:"reader"
        }
    );
    return Reader;
}