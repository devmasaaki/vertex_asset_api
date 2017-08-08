# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170808220908) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assets", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories", id: :serial, force: :cascade do |t|
    t.string "name", limit: 255, null: false
    t.integer "sort"
    t.boolean "deleted", default: false
    t.integer "asset_id"
    t.integer "item_cnt"
    t.integer "categorytype", default: 0
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "assigned", default: true
    t.index ["asset_id"], name: "index_vertex_categories_on_asset_id"
  end

  create_table "items", id: :serial, force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.string "file"
    t.string "file_type", default: "PDF"
    t.integer "category_id"
    t.integer "sort", default: 0
    t.boolean "deleted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "assigned", default: true
    t.integer "file_size", default: 0
    t.index ["category_id"], name: "index_vertex_items_on_category_id"
  end

  create_table "notes", id: :serial, force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_vertex_notes_on_user_id"
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "auth_token"
    t.string "confirmation_token"
    t.datetime "confirmation_sent_at"
    t.datetime "confirmed_at"
    t.string "reset_password_digest"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["auth_token"], name: "index_vertex_users_on_auth_token", unique: true
    t.index ["confirmation_token"], name: "index_vertex_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_vertex_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_vertex_users_on_reset_password_token", unique: true
  end

  add_foreign_key "categories", "assets"
  add_foreign_key "items", "categories"
  add_foreign_key "notes", "users"
end
