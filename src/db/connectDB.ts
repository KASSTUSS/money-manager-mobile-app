import * as SQLite from "expo-sqlite";
import { DATA_BASE_CONFIG } from "../config/database";

function connectDB(): SQLite.SQLiteDatabase {
    const db = SQLite.openDatabase(DATA_BASE_CONFIG.DB_NAME);

    return db;
}

export const db: SQLite.SQLiteDatabase = connectDB();
