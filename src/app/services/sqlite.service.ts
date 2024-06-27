import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Platform } from '@ionic/angular';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private db: SQLiteDBConnection | null = null;

  constructor(private platform: Platform) {
    this.init();
  }

  async init() {
    await this.platform.ready();
    const sqlite = CapacitorSQLite;

    try {
      const conn = await sqlite.createConnection({
        database: 'mydb',
        encrypted: false,
        mode: 'no-encryption',
        version: 1
      }) as unknown as SQLiteDBConnection;

      if (conn) {
        this.db = conn;
        await this.db.open();

        await this.db.execute(`
          CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
          );
        `);
      } else {
        throw new Error('Failed to create SQLite connection');
      }
    } catch (e) {
      console.error('Error initializing database', e);
    }
  }

  async registerUser(username: string, password: string): Promise<void> {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await this.db?.run(`
        INSERT INTO users (username, password) VALUES (?, ?);
      `, [username, hashedPassword]);
    } catch (e: any) {
      throw new Error('Error registering user: ' + e.message);
    }
  }

  async loginUser(username: string, password: string): Promise<boolean> {
    try {
      const result = await this.db?.query(`
        SELECT password FROM users WHERE username = ?;
      `, [username]);

      if (result && result.values && result.values.length > 0) {
        const hashedPassword = result.values[0].password;
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        return isPasswordValid;
      }
      return false;
    } catch (e: any) {
      throw new Error('Error logging in user: ' + e.message);
    }
  }
}