/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable("tasks", table => {
        table.increments("task_id")
        table.string("task_description").notNullable()
        table.string("task_notes")
        table.boolean("task_completed").defaultTo(0)
        table.integer("project_id")
                .unsigned()
                .notNullable()
                .references("project_id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("RESTRICT")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
};
