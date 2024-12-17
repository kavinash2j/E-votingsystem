from flask import Flask, request, jsonify, render_template
import sqlite3
import bcrypt

app = Flask(__name__)

# Initialize database and table
def init_db():
    conn = sqlite3.connect('signup_system.db')
    cursor = conn.cursor()
    cursor.execute('DROP TABLE IF EXISTS users')  # Drops existing users table
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )''')
    conn.commit()
    conn.close()

# Hash the password
def hash_password(password):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')  # Decode to store as string

# Check if the password matches the stored hash
def check_password(stored_password, provided_password):
    return bcrypt.checkpw(provided_password.encode('utf-8'), stored_password.encode('utf-8'))

# Route to handle user registration
@app.route('/signup', methods=['POST'])
@app.route('/signup', methods=['POST'])
# Route to handle user registration
@app.route('/signup', methods=['POST'])
def signup():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')

    # Hash the password before storing it
    hashed_password = hash_password(password)

    conn = sqlite3.connect('signup_system.db')
    cursor = conn.cursor()

    try:
        cursor.execute('''INSERT INTO users (username, email, password) VALUES (?, ?, ?)''', 
                       (username, email, hashed_password))
        conn.commit()
        return jsonify({'message': 'User registered successfully!'}), 201
    except sqlite3.IntegrityError:
        return jsonify({'message': 'Username or email already exists.'}), 400
    finally:
        conn.close()

@app.route('/login', methods=['POST'])
@app.route('/login', methods=['POST'])
@app.route('/login', methods=['POST'])
def login():
    email = request.form.get('email')
    password = request.form.get('password')

    conn = sqlite3.connect('signup_system.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM users WHERE email = ?', (email,))
    user = cursor.fetchone()

    if user:
        print("Stored password hash:", user[3])  # Debugging line
        if check_password(user[3], password):  # user[3] is the password column
            return jsonify({'message': 'Login successful!'}), 200
        else:
            return jsonify({'message': 'Invalid email or password.'}), 401
    else:
        return jsonify({'message': 'Invalid email or password.'}), 401

# Route to serve the login HTML page
@app.route('/')
def index():
    return render_template('login.html')

# Initialize the database before the app starts
if __name__ == "__main__":
    init_db()
    app.run(debug=True)
