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
      // required: true,
    },
    role: {
      type: String,
      // required: true,
    },
    department: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const employee = mongoose.model<IEmployee>("Employee", employeeSchema);
