/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable("resource_assignments", table => {
            table.increments("resource_assignment_id");
            table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("project_id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
            table.integer("resource_id")
                .unsigned()
                .notNullable()
                .references("resource_id")
                .inTable("resources")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT");
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resource_assignments')
};
