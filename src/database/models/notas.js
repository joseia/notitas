module.exports = function(sequelize, dataTypes) {
    let alias = "Notas";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        title: {
            type: dataTypes.STRING,
            notNull: true
        },
        nota: {
            type: dataTypes.STRING,
            notNull: true
        },
        status: {
            type: dataTypes.INTEGER,
            notNull: true
        }
    };
    let config = {
        tableName: 'notas',
        timestamps: true,
        underscored: true
    }

    const Notas = sequelize.define(alias, cols, config);

    return Notas
}