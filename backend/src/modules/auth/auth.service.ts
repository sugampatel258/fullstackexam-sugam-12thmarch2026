import bcrypt from "bcrypt";
import User from "../../models/User";
import { generateToken } from "../../utils/jwt";

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.query().where("email", email).first();

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.query().insert({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while registering the user",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.query().where("email", email).first();

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user.id);

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error",
    });
  }
};

export const authService = { signup, login };
