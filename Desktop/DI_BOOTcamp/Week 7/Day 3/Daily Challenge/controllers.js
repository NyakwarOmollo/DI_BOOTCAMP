// controllers/authController.js
import fs from 'fs/promises';
import path from 'path';
import bcrypt from 'bcryptjs';

const filePath = path.resolve('users.json');

// Helper Functions
const readUsers = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeUsers = async (users) => {
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
};

// REGISTER
export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, username, password } = req.body;

        if (!firstName || !lastName || !email || !username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const users = await readUsers();

        // Check if username or email already exists
        const existingUser = users.find(u => 
            u.username === username || u.email === email
        );

        if (existingUser) {
            return res.status(409).json({ 
                message: "Username or Email already exists!" 
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            firstName,
            lastName,
            email,
            username,
            password: hashedPassword,   // hashed password
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        await writeUsers(users);

        res.status(201).json({ 
            message: "User registered successfully!",
            userId: newUser.id
        });

    } catch (error) {
        res.status(500).json({ message: "Server error during registration" });
    }
};

//LOGIN 
export const loginUser = async (req, res) => {
    try {
        console.log('Login attempt received:', { username: req.body.username, hasPassword: !!req.body.password });
        const { username, password } = req.body;

        if (!username || !password) {
            console.log('Missing credentials');
            return res.status(400).json({ message: "Username and password are required" });
        }

        const users = await readUsers();
        console.log('Total users in database:', users.length);
        const user = users.find(u => u.username === username);
        console.log('User found:', !!user);

        if (!user) {
            console.log('User not found for username:', username);
            return res.status(401).json({ message: "User not found. Please register first." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password match result:', isMatch);

        if (!isMatch) {
            console.log('Password mismatch for user:', username);
            return res.status(401).json({ message: "Incorrect password" });
        }

        console.log('Login successful for user:', username);
        res.json({
            message: "Login successful! Welcome back.",
            user: {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username
            }
        });

    } catch (error) {
        console.error('Login error:', error);

// GET ALL USERS 
export const getAllUsers = async (req, res) => {
    try {
        const users = await readUsers();
        const safeUsers = users.map(({ password, ...user }) => user); // remove passwords
        res.json(safeUsers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users" });
    }
};

//GET USER BY ID 
export const getUserById = async (req, res) => {
    try {
        const users = await readUsers();
        const user = users.find(u => u.id === parseInt(req.params.id));

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { password, ...safeUser } = user;
        res.json(safeUser);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user" });
    }
};

//UPDATE USER 
export const updateUser = async (req, res) => {
    try {
        const { firstName, lastName, email } = req.body;
        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

        if (userIndex === -1) {
            return res.status(404).json({ message: "User not found" });
        }

        users[userIndex] = {
            ...users[userIndex],
            firstName: firstName || users[userIndex].firstName,
            lastName: lastName || users[userIndex].lastName,
            email: email || users[userIndex].email,
            updatedAt: new Date().toISOString()
        };

        await writeUsers(users);
        const { password, ...updatedUser } = users[userIndex];

        res.json({ 
            message: "User updated successfully",
            user: updatedUser 
        });
    } catch (error) {
        res.status(500).json({ message: "Error updating user" });
    }
};