module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('events', 'banner_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('events', 'banner_id');
  },
};
