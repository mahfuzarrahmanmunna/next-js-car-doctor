"use server"
import bcrypt from "bcrypt"
import { collectionsNameObj, dbConnect } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
    const { email, password } = payload;

    const userCollection = dbConnect(collectionsNameObj().userCollection);
    const user = await userCollection.findOne({ email });
    if (!user) return null;
    const isPasswordOk = bcrypt.compare(user.password, password)
    if (!isPasswordOk) return null;
    return user;
}