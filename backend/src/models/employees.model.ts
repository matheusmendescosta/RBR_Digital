import mongoose, { Schema, model, Document } from "mongoose";

interface IEmployee extends Document {
  name: string;
  role: string;
  department: string;
}

const employeeSchema: Schema = new Schema<IEmployee>(
  {
    name: {
      type: String,
    },
    role: {
      type: String,
    },
    department: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const employee = mongoose.model<IEmployee>("Employee", employeeSchema);
